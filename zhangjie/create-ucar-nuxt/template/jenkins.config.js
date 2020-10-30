/* eslint no-console: 0 */
const fs = require('fs-extra');
const pkg = require('./package.json');
const pm2Config = require('./pm2.config.js');

const targetDir = `${__dirname}/target/${pkg.name}`;
delete pkg.devDependencies;

/**
 * 复制上线需要的文件夹
 */
async function copyDir() {
  console.log(`${targetDir}目录创建成功;`);
  await fs.copy(`${__dirname}/client/static`, `${targetDir}/client/static`);
  await fs.copy(`${__dirname}/bin`, `${targetDir}/bin`);
  await fs.copy(`${__dirname}/server`, `${targetDir}/server`);
  await fs.copy(`${__dirname}/build`, `${targetDir}/build`);
  await fs.copy(`${__dirname}/nuxt.config.js`, `${targetDir}/nuxt.config.js`);
  await fs.copy(`${__dirname}/package-lock.json`, `${targetDir}/package-lock.json`);
  await fs.copy(`${__dirname}/.npmrc`, `${targetDir}/.npmrc`);
  console.log(`所有上线文件复制成功至: ${targetDir} `);
  const startup = await fs.readFile(`${targetDir}/bin/startup.sh`, 'utf-8');
  const result = startup.replace('$pkgname$', pkg.name);
  await fs.writeFile(`${targetDir}/bin/startup.sh`, result, 'utf8');
  console.log(`startup.sh启动脚本修改成功, 包名: ${pkg.name}`);

  await fs.writeFile(`${targetDir}/package.json`, JSON.stringify(pkg, '', 2));
  console.log('package.json创建成功');

  await fs.writeFile(
    `${targetDir}/pm2.config.json`,
    JSON.stringify(pm2Config, '', 2)
  );
  console.log(`pm2配置文件创建成功, 环境${process.env.NODE_ENV}`);
}

/**
 * 创建 jenkins 打包需要的 target 目录
 */
fs.ensureDir(targetDir)
  .then(() => copyDir())
  .catch((err) => {
    console.log(err);
  });
