import Vue from 'vue'

import details from "./script/components/detail/details.vue"

Vue.config.productionTip = false
import router from './script/router'
new Vue({
  el: '#app',
  router,
  data: function(){
      return {

      }
  }
  template: '<router-view></router-view>'
})
