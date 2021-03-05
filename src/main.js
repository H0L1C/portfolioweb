import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import css from './mobile.css'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  VueAxios,
  css,
  render: function (h) { return h(App) },
}).$mount('#app')
