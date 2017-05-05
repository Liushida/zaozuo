import Vue from 'vue'
import './style/app.scss'

import router from './script/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  data: function(){
      return {
          
      }
  }
  template: '<router-view></router-view>'
})
