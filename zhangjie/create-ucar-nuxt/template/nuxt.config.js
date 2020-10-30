const NODE_ENV = process.env.NODE_ENV;
const domain = {
  test: 'https://mkttest.borgward.com.cn',
  test2: 'https://mkttest2.borgward.com.cn',
  test3: 'https://mkttest3.borgward.com.cn',
  pre: 'https://mktpre.borgward.com.cn',
  prod: 'https://mkt.borgward.com.cn',
  development: 'http://<%= localip %>:8080'
};

module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  telemetry: false,
  // 设置项目源目录(默认是根目录)
  srcDir: 'client/',
  buildDir: 'build',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  env: {
    NODE_ENV,
    baseUrl: domain[NODE_ENV]
  },
  dev: NODE_ENV === 'development',
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/less/main.less'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/client.js', mode: 'client' },
    { src: '~/plugins/server.js', mode: 'server' },
    { src: '~/plugins/index.js' }
  ],
  /*
   ** 自动导入组件, 这样在页面中就不用再 import 了，组件名就是文件名，如果有嵌套多层目录，组件名也只是文件名
   ** See https://nuxtjs.org/api/configuration-components
   ** See https://github.com/nuxt/components
   */
  components: true,
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    publicPath: '/assets/',
    postcss: {
      plugins: {
        'postcss-px-to-viewport': {
          unitToConvert: 'px',
          viewportWidth: 750,
          mediaQuery: false
        }
      },
      preset: {
        autoprefixer: {
          grid: true,
          overrideBrowserslist: ['last 3 versions']
        }
      }
    }
  }
};
