import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import './assets/icons' // icon

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
