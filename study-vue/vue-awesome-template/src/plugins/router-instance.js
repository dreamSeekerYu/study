/**
 * @author GuangHui
 * @description 路由实例
 */

import Vue from 'vue'
import Router from 'vue-router'

import { INDEX_ROUTES, ROUTER_DEFAULT_CONFIG } from 'Config'
import { routerOnErrorHandler } from 'Config/interceptors/router-error-handler'
import {
  routerAfterEachFn,
  routerBeforeEachFn,
  scrollBehaviorFn as scrollBehavior
} from 'Config/interceptors/router-interceptor'

import routesLoader from 'Plugins/routes-loader'

const routes = routesLoader(INDEX_ROUTES)

!window.VueRouter && Vue.use(Router) // * 2020-0617-兼容CDN配置

const router = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes,
  scrollBehavior
})

router.afterEach(routerAfterEachFn)
router.beforeEach(routerBeforeEachFn)

router.onError(err => routerOnErrorHandler(err, router))

export default router
