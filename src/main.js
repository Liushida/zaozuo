import Vue from 'vue'
import router from './script/router'
import "./style/app.scss"

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  data: function(){
      return {

      }
  },
  template: '<router-view></router-view>'
})
