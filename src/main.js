import Vue from 'vue'
import router from './script/router'
import store from './script/vuex/store'
import "./style/app.scss"

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  data: function(){
      return {

      }
  },
  template: '<router-view></router-view>'
})
