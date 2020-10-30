/**
 * @author GuangHui
 * @description vuex测试页
 */

const VuexTest = () =>
  import(/* webpackChunkName:'VuexTest' */ 'Views/VuexTest/VuexTest')

export default [
  {
    path: '/vuex-test',
    name: 'VuexTest',
    component: VuexTest,
    meta: {
      title: '测试Vuex'
    }
  }
]
