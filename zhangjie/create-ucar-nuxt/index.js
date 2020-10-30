#!/usr/bin/env node
const path = require('path');
const sao = require('sao');
const cac = require('cac');
const chalk = require('chalk');
const envinfo = require('envinfo');
const { version } = require('./package.json');

const generator = path.resolve(__dirname, './');
const cli = cac('create-ucar-nuxt');
const showEnvInfo = async () => {
  console.log(chalk.bold('\n🖥️  当前电脑的相关信息:'));
  const result = await envinfo.run({
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm'],
    Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari']
  });
  console.log(result);
  process.exit(1);
};
cli
  .command('[out-dir]', '项目输出的目录')
  .option('-i, --info', '输出与本地环境相关的调试信息')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo();
    }

    console.log();
    console.log(chalk`{cyan create-ucar-nuxt v${version}}`);
    console.log(chalk`✨  在 {cyan ${outDir}} 目录中生成项目`);

    const logLevel = 2;
    sao({ generator, outDir, logLevel, cliOptions })
      .run()
      .catch(err => {
        console.trace(err);
        process.exit(1);
      });
  });

cli.help();
cli.version(version);
cli.parse();
