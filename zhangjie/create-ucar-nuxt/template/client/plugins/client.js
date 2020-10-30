<%_ if (jsbridge === 'Y') { _%>
const { jsCallNative, handleData } = require('@ucarinc/ucar-lib-jsbridge');
<%_ } _%>
const UA = window.navigator.userAgent;
const HOST = window.location.host;
const borwerEnv = {
  // 微信环境
  isWechat: /MicroMessenger/i.test(UA),
  // 微信小程序
  isMNP: /miniProgram/i.test(UA),
  // 车码头app
  isCMT: /(BWCMTApp)|(CMT-)/i.test(UA),
  // 售车宝app
  isSCB: /MMC-Android-SCB/i.test(UA),
  // 安卓设备
  isAndroid: /Android/i.test(UA),
  // 苹果手持设备
  isIOS: /iP(od|ad|hone)/i.test(UA),
  // 项目环境判断是否为生产环境
  isProd: !/(test)|(pre)/i.test(HOST),
  // 车主app
  isCZ: /UCARINCHybridWebView/i.test(UA)
};
<%_ if (jsbridge === 'Y') { _%>
const jsCallNativePromise = (params) => {
  return new Promise((resolve, reject) => {
    if (!borwerEnv.isCZ) resolve();
    jsCallNative({
      protocol: params.protocol,
      parameters: params.parameters,
      callBack(res) {
        const { status, data } = handleData(res);
        if (status.success) {
          resolve(data);
        } else {
          reject(status.error);
        }
      }
    });
  });
};
<%_ } _%>
export default ({ app }, inject) => {
  inject('env', borwerEnv);
  <%_ if (jsbridge === 'Y') { _%>
  inject('jsCallNative', (params) => jsCallNativePromise(params));
  <%_ } _%>
};
