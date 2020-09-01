import Vue from 'vue'
import App from './App.vue'
import router from './router'
import css from './mobile.css'

Vue.config.productionTip = false

new Vue({
  router,
  css,
  render: function (h) { return h(App) }
}).$mount('#app')
