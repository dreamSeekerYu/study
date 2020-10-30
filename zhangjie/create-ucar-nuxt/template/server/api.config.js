module.exports = {
  apiPrefix: '/action',
  apiBaseUrl: {
    test: 'https://apiproxytest.ucarinc.com',
    test2: 'https://apiproxytest02.ucarinc.com',
    test3: 'https://apiproxytest03.ucarinc.com',
    pre: 'https://apiproxypre.ucarinc.com',
    prod: 'https://apiproxy.borgward.com.cn'
  },
  apiProxy: [
    {
      // 项目对应的cid，由api提供
      cid: '<%= cid %>',
      // 项目加密需要的key，由api提供
      accountKey: '<%= accountKey %>',
      // baseUrl: {
      //   test: 'https://apiproxytest.ucarinc.com',
      //   test2: 'https://apiproxytest02.ucarinc.com',
      //   test3: 'https://apiproxytest03.ucarinc.com',
      //   pre: 'https://apiproxypre.ucarinc.com',
      //   prod: 'https://apiproxy.ucarinc.com',
      // }
    },
    // 如果同一个项目内可能会请求多个模块, 可能需要配置多个cid和accountKey
    // {
    //   cid: '785300',
    //   accountKey: 'jnBJcvFJfRXpERx9sbue'
    // }
  ]
}
