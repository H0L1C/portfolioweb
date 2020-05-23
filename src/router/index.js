import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Gallery from '@/components/Gallery'
import Project from '@/components/Project'
import 'lazysizes'
import 'mailgo'

import VScrollLock from 'v-scroll-lock'


let VueScrollTo = require('vue-scrollto');

Vue.use(Router)
Vue.use(VueScrollTo)
Vue.use(VScrollLock)


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
      path: '/Project/:id',
      name: 'Project',
      component: Project,
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









