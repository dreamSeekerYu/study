const log4js = require('log4js');
const { name } = require('../package.json');
const isProd = process.env.NODE_ENV != 'development';
const logDir = isProd
  ? `/usr/local/node/logs/${name}/${name}.log`
  : `logs/${name}.log`;
// https://log4js-node.github.io/log4js-node/dateFile.html
const logConfigs = {
  appenders: {
    cheese: {
      type: 'dateFile',
      filename: logDir,
      // pattern: '.yyyy-MM-dd',
      // maxLogSize: 4096,
      // 设置保存文件扩展名 (.log)
      keepFileExt: true,
      // 日志保留时间: 30天
      daysToKeep: 30,
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c -% %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'debug'
    }
  },
  // pm2: true,
  disableClustering: true
};

log4js.configure(logConfigs);

module.exports = log4js.getLogger(`${name}-cluster`);
