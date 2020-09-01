import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Product from '@/components/Product'
import VueLazyload from 'vue-lazyload'
import VScrollLock from 'v-scroll-lock'
import VueMq from 'vue-mq'
import 'mailgo'

let VueScrollTo = require('vue-scrollto');

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  throttleWait: 50
});

Vue.use(VueMq, {
  breakpoints: {
    xs: 320,
    s: 321,
    m: 415,
    l: 960,
    xl: Infinity
  },
  defaultBreakpoint: 'l'
});

Vue.use(VueScrollTo)
Vue.use(VScrollLock)
Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Product/:id',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      })
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})









