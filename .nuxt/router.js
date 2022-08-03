import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d3f42f9 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _f9e49742 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3a4d645e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blank-page",
    component: _5d3f42f9,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _f9e49742,
    name: "contact___en"
  }, {
    path: "/de",
    component: _3a4d645e,
    name: "index___de"
  }, {
    path: "/fr",
    component: _3a4d645e,
    name: "index___fr"
  }, {
    path: "/de/blank-page",
    component: _5d3f42f9,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _f9e49742,
    name: "contact___de"
  }, {
    path: "/fr/blank-page",
    component: _5d3f42f9,
    name: "blank-page___fr"
  }, {
    path: "/fr/contact",
    component: _f9e49742,
    name: "contact___fr"
  }, {
    path: "/",
    component: _3a4d645e,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
