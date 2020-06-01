import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Gallery from '@/components/Gallery'
import Vj from '@/components/Vj-Download'
import Product from '@/components/Product'
import VueLazyload from 'vue-lazyload'
import 'mailgo'

let VueScrollTo = require('vue-scrollto');

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  throttleWait: 50
});
Vue.use(VueScrollTo)
Vue.use(Router)

export default new Router({
  mode:'history',
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
      path: '/Vj-Download',
      name: 'Vj',
      component: Vj
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









