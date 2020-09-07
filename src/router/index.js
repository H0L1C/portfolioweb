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
      path: '/product/:id',
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









