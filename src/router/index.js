import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Gallery from '@/components/Gallery'
import IxD from '@/components/IxD'
import 'lazysizes'
import 'mailgo'
import VScrollLock from 'v-scroll-lock'

let VueScrollTo = require('vue-scrollto');

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
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/IxD',
      name:IxD,
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









