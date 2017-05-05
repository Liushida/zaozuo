import Vue from 'vue'
import details from "./script/components/detail/details.vue"
import router from './script/router'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
