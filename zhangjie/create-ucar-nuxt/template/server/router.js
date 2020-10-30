const Router = require('koa-router');
const axios = require('axios').default;
const fs = require('fs');
const needle = require('needle');
const {
  aesDecrypt,
  aesEncrypt,
  md5Sign,
  getKeys
} = require('@ucarinc/ucar-sign').default;
const logger = require('./logger.js');
const NODE_ENV = process.env.NODE_ENV;
const { apiBaseUrl, apiProxy, apiPrefix } = require('./api.config.js');
const apiDomain = apiBaseUrl[NODE_ENV] || apiBaseUrl.test;
const router = new Router({
  prefix: apiPrefix
});

/**
 * 判断一个值是否为空
 * @param {any} value
 */
const isEmpty = (value) => {
  if (value !== 0 && !value) return true;
};

/**
 * 将一个对象序列化成字符串
 * @param {object} params 需要序列化的对象
 */
const urlStringify = (params) => {
  const keys = Object.keys(params);
  const results = [];
  keys.map((key) =>
    results.push(`${key}=${isEmpty(params[key]) ? '' : params[key]}`)
  );
  return results.join('&');
};

/**
 * 对数据进行加密, 返回一个包含API所需要所有参数的一个对象
 * @param {object} data 需要加密的数据对象, 没有数据也必须传入一个空对象{}
 * @param {string} uid uid
 * @param {string} cid cid
 * @param {string} accountKey accountKey
 */

const encrypt = ({ cid, key, accountKey, uid, data }) => {
  const q = aesEncrypt(data, key);
  let signStr = `cid=${cid};q=${q}${accountKey}`;
  if (uid) {
    signStr = `cid=${cid};q=${q};uid=${uid}${accountKey}`;
  }
  const sign = md5Sign(signStr);
  return {
    cid,
    q,
    sign,
    uid
  };
};

/**
 * 将加密后的数据进行API请求
 * @param {object} ctx
 * @param {object} params api需要的入参
 */

const request = async (ctx, params) => {
  logger.info(`NODE_ENV: ${NODE_ENV}`);
  logger.info(`reffer: ${ctx.header.referer}`);
  logger.info(`userAgent: ${ctx.header['user-agent']}`);
  const proxy = ctx.headers.ac || 0;
  const method = ctx.method.toLowerCase();
  const url = `${apiDomain}${ctx.path}`;
  const { cid, accountKey } = apiProxy[proxy];
  const key = getKeys(accountKey);
  const sessionUid = params.uid || ctx.session.uid || '';
  const aesEncryptData = encrypt({
    cid,
    key,
    accountKey,
    sessionUid,
    data: params
  });
  const result = await axios
    .get(url, { params: aesEncryptData })
    .then((res) => {
      const {
        data: { code, uid, content, msg }
      } = res;
      const decrypt = aesDecrypt(content || '', key);
      const data = decrypt && JSON.parse(decrypt);
      const body = {
        status: code,
        msg,
        data
      };
      ctx.session.uid = uid;
      logger.info(`JSON参数: ${JSON.stringify(params)}`);
      logger.info(`api路径: ${url}`);
      logger.info(`api入参: ${JSON.stringify(aesEncryptData)}`);
      logger.info(`api出差: ${JSON.stringify(body)}`);
      if (method && params.callback) {
        // jsonp 支持
        ctx.body = `${params.callback}(${JSON.stringify(body)})`;
      } else {
        ctx.body = body;
      }
    })
    .catch((err) => {
      logger.error(`api请求错误: ${JSON.stringify(err)}`);
      ctx.body = {
        status: -1,
        msg: 'api-Node请求异常, 请稍后再试',
        data: null
      };
    });

  return result;
};

router.post('/base/uploadFile', async (ctx) => {
  const file = ctx.request.files.file;
  const sessionUid = ctx.session.uid;
  const { cid, accountKey } = apiProxy[0];
  const key = getKeys(accountKey);
  const aesEncryptData = encrypt({
    cid,
    key,
    accountKey,
    sessionUid,
    data: {}
  });
  const buffer = fs.readFileSync(file.path);

  const data = {
    file: {
      buffer,
      filename: file.name,
      content_type: 'application/octet-stream'
    }
  };
  const url = `${apiBaseUrl[NODE_ENV]}${ctx.path}?${urlStringify(
    aesEncryptData
  )}`;
  await needle('post', url, data, { multipart: true })
    .then((res) => {
      const { code: status, msg, content } = JSON.parse(res.body);
      const decrypt = aesDecrypt(content || '', key);
      const data = decrypt && JSON.parse(decrypt);
      ctx.body = {
        status,
        msg,
        data
      };
      logger.info(
        `api出参: ${JSON.stringify({
          status,
          msg,
          data
        })}`
      );
    })
    .catch(() => {
      ctx.body = {
        status: -1,
        msg: '图片上传失败!',
        data: null
      };
    });
});

router.get('/:ucar*', async (ctx) => {
  const query = ctx.query || {};
  await request(ctx, query);
});

router.post('/:ucar*', async (ctx) => {
  const body = ctx.request.body || {};
  await request(ctx, body);
});

module.exports = router;
