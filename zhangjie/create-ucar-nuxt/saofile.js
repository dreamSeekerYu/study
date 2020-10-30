const path = require('path');
const ip = require('ip');

module.exports = {
  prompts: [
    {
      name: 'name',
      message: '项目名称',
      default: '{outFolder}'
    },
    {
      name: 'description',
      message: '项目描述',
      default: '基于 Nuxt 搭建的 Vue 服务端渲染项目, 包含 ucar proxy 签名'
    },
    {
      name: 'localip',
      message: '本机IP',
      default: ip.address()
    },
    {
      name: 'author',
      type: 'string',
      message: '你的名字',
      default: '{gitUser.name}',
      store: true
    },
    {
      name: 'pm',
      message: '请选择包管理器工具',
      choices: [{ name: 'Yarn', value: 'yarn' }, { name: 'Npm', value: 'npm' }],
      type: 'list',
      default: 'yarn'
    },
    {
      name: 'jsbridge',
      message: '是否需要JSBridge(如需在app中使用, 则是)',
      choices: [{ name: '是', value: 'Y' }, { name: '否', value: 'N' }],
      type: 'list',
      default: 'Y'
    },
    // {
    //   name: 'proxy',
    //   message: '是否宝沃apiproxy(否的话是ucarincapiproxy)',
    //   choices: [{ name: '是', value: 'Y' }, { name: '否', value: 'N' }],
    //   type: 'list',
    //   default: 'Y'
    // },
    {
      name: 'cid',
      message: 'api请求cid(如果不知道, 可以找api的leader问一下)',
      default: '600300'
    },{
      name: 'accountKey',
      message: 'api请求accountKey(如果不知道, 可以找api的leader问一下)',
      default: 'pfd5Nu2DwFqZIMKoXS3F'
    },
  ],
  templateData() {
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run';
    return {
      pmRun
    };
  },
  actions() {
    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: 'template'
      }
    ];

    actions.push({
      type: 'move',
      patterns: {
        '_npmrc': '.npmrc',
        '_yarnrc': '.yarnrc',
        '_gitignore': '.gitignore',
        '_prettierrc': '.prettierrc',
        '_eslintrc.js': '.eslintrc.js',
        '_editorconfig': '.editorconfig'
      }
    });

    return actions;
  },
  async completed() {
    this.gitInit();

    await this.npmInstall({ npmClient: this.answers.pm });

    const chalk = this.chalk;
    const isNewFolder = this.outDir !== process.cwd();
    const relativeOutFolder = path.relative(process.cwd(), this.outDir);
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : '';
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run';

    console.log(chalk`\n🎉  {bold 项目创建成功} {cyan ${this.answers.name}}\n`);

    console.log(chalk`  {bold 运行以下命令开始本地开发:}\n`);
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} dev}\n`);

    console.log(chalk`  {bold 发布上线: usop部署, 本地不用做任何处理!}\n`);
  }
};
