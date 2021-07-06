import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Top from '@/components/Top.vue'
import Product from '@/components/Product.vue'
import WorkList from '@/components/WorkList.vue'
import VueLazyload from 'vue-lazyload'
import VScrollLock from 'v-scroll-lock'
import VueMq from 'vue-mq'
import VueYoutube from 'vue-youtube'
import 'mailgo'

let VueScrollTo = require('vue-scrollto');

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  throttleWait: 50
});

Vue.use(VueMq, {
  breakpoints: {
    xs: 321,
    s: 416,
    m: 641,
    l: 960,
    xl: Infinity
  },
  defaultBreakpoint: 'l'
});

Vue.use(VueScrollTo, {
  container: "body",
  duration: 50,
  easing: "ease-in",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VScrollLock, {
  bodyScrollOptions: {
    reserveScrollBarGap: true,
  },
})

Vue.use(VueYoutube)

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
      component: WorkList
    },
    {
      path: "*",
      redirect: "NotFound",
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
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
    return new Promise(resolve => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = { selector: to.hash };
        }
        resolve(position);
      });
    });
  }
})









