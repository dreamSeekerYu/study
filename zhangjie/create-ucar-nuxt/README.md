## 安装

```
npm install -g @ucarinc/create-ucar-nuxt --registry https://unpm.10101111.com
```

## 项目初始化

```
create-ucar-nuxt [目录名]
```

## 目录说明

目录结构及命名不能随便修改

```
bin: 服务器上启动项目用
client: 项目相关的资源与页面
server: 服务端相关的
client/components: 项目页面需要使用的组件存放目录
client/pages: 项目页面存放的目录
```

## 本地开发

本地默认请求 api 环境为测试一

```
npm run dev
```

### 修改本地开发时调用的 api 环境
```
server/router.js

const apiDomain = apiBaseUrl[NODE_ENV] || apiBaseUrl.test;

本地开发 NODE_ENV=development;
apiBaseUrl[NODE_ENV]会返回null;

所以本地开发, 直接修改 || 后面的值, 可取值为:
apiBaseUrl.test
apiBaseUrl.test2
apiBaseUrl.test3
apiBaseUrl.pre
apiBaseUrl.prod
```

**注:** 千万不要修改 || 前面的值, 不然会影响服务器部署

## 服务器部署

这里服务器部署包含测试、预生产、生产环境;

### 部署前

在部署之前要先确认项目对应的各环境域名(用户访问的域名)

```
nuxt.config.js

const domain = {
  test: 'https://mkttest.borgward.com.cn',
  test2: 'https://mkttest2.borgward.com.cn',
  test3: 'https://mkttest3.borgward.com.cn',
  pre: 'https://mktpre.borgward.com.cn',
  prod: 'https://mkt.borgward.com.cn',
  development: 'http://本机ip:8080'
};
```

## 文件上传

项目中如果需要用到文件(图片)上传接口, 找 api 同学要相关的接口名, 然后替换
```
server/router.js

将 /base/uploadFile 替换成 api 提供的接口名;

注: 在 server/router.js 文件里路由不要加 /action
因为默认全局已经设置了 /action
```
前端项目中调用时加上 `/action`

完整文件上传接口名为: `/action/base/uploadFile`

图片上传接口请求使用 `this.$uploadFile()`, 入参为文件对象:
```js
<input type="file" @change="uploadFile" />

methods: {
  uploadFile(ev) {
    this.$uploadFile(ev.target.files).then((res) => {
      console.log(res);
    })
  }
}
```

## 项目开发

参考 [https://nuxtjs.org](https://nuxtjs.org)

- 项目中获取Node环境变量(仅支持 `/client/pages` 目录中的**页面**获取, 组件如果需要使用, 可以通过**页面**传递进去)
  ```js
  async asyncData({ env }) {
    const NODE_ENV = env.NODE_ENV;

    return {
      NODE_ENV
    };
  },
  ```

- 服务端渲染时接口请求
  ```js
  async asyncData({ $request }) {
    const result = await $request({
      uri: '/action/h5/sic/queryVildCitys',
      method: 'get',
      ac: 1,
      data: {
        type: 'asyncData'
      }
    });

    return {
      result
    };
  },
  ```
- 客户端渲染时接口请求
  ```js
  mounted() {
    this.$request({
      uri: '/action/h5/sic/queryVildCitys',
      method: 'post',
      ac: 0,
      data: {
        type: 'methoed-post'
      }
    }).then((data) => {
      console.log(data);
    });
  },
  ```
- `$request` 函数说明
  ```js
  $request({
    uri: '/action/h5/sic/queryVildCitys',  // 接口路径, 要带上 /action
    method: 'get',                         // 默认不传为 get, 可取值 get | post
    ac: 0,                                 // 默认不传为 0, 可取值 0-N 任意数字, 稍后说明 ac 的作用
    data: {},                             // api需要的入参
  });

  返回一个 Promise 对象
  ```
- `jsbridge` 使用

  项目中如果在初始化时有选择使用 `jsbridge`, 则在页面使用 `this.$jsCallNative()`返回一个 `Promise` 对象

  `jsbridge` 定义 `protocol` 参考: http://wiki.10101111.com/pages/viewpage.action?pageId=199088010


  ```js
  this.$jsCallNative({
    protocol: '与app一起定义的协议名',
    parameters: {
      // 协议对应的参数
    }
  })
  ```
- 页面开发

  所有的页面存放到 `client/pages` 目录内, 子目录及文件名就是路由(自动生成)

  页面文件命名使用**中横线**

- 组件开发

  所有的组件存放到 `client/components` 目录内

  组件命名使用**小驼峰**, 非公共组件, 使用页面对应的目录来存入
  ```
  page/about.vue

  components/about/aboutHeadImg.vue
  components/about/aboutNickName.vue
  components/about/aboutMobile.vue
  ```

  组件使用时, 在页面中 **不需要** 手动 `import`, 项目会自动加载;
  在页面中使用组件时, 组件的名称就是 `components` 目录内 `*.vue` 对应的文件名;(不管有多少层级目录, 只取文件名, 所以跟目录无关)

  上面的 `about` 页面中使用 `components` 里面的组件是:

  ```js
  <template>
    <div>
      <about-head-img />
      <about-nick-name />
      <about-mobile />
    </div>
  </template>

  <script>
    // 这里不需要手动 import 组件了
    export default {
      ...
    }
  </script>
  ```

## `$request` 中 `ac` 说明

我们在开发同一个项目时, 可能需要调用多个 `api` 项目;

而每个 `api` 项目都有自己的 `cid` 与 `accountKey`;

这里的 `ac` 就是用来区分各个 `api` 项目的 `cid` 和 `accountKey` 取值的;

默认 `ac` 取值为 `0`, 代表取值为 `server/api.config.js` 文件中的 `apiProxy` 的第一项;

所以, 如果有多个 `api` 项目, 需要手动去 `server/api.config.js` 文件中追加 `apiProxy` 的值;