const pkg = require('./package.json');

const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  apps: [
    {
      // 应用名称, 默认为不带扩展名的脚本文件名
      name: `${pkg.name}-cluster`,
      // pm2 启动的入口文件
      script: 'server/index.js',
      merge_logs: true,
      // 设置应用超过指定内存量, 将自动重新启动
      max_memory_restart: '800M',
      // 设置应用启动的模式: 'cluster'/'fork'
      exec_mode: 'cluster',
      // 应用启动的实例数, 0 表示根据CPU数量启动可能的最大进程(cluster mode)
      instances: 0,
      // 设置应用中通过`process.env`可读取的变量:(process.env.NODE_ENV)
      env: {
        // NODE_ENV 取值 ['test', 'test2', 'test3', 'pre', 'prod']
        // 跟公司打包的匹配
        NODE_ENV
      }
    }
  ]
};
