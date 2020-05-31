import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Gallery from '@/components/Gallery'
import IxD from '@/components/IxD'
import VueLazyload from 'vue-lazyload'
import 'mailgo'

let VueScrollTo = require('vue-scrollto');

Vue.use(VueLazyload)
Vue.use(VueScrollTo)
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
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/IxD',
      name: IxD,
      component: IxD
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









