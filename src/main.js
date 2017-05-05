import Vue from 'vue'
import './style/app.scss'

import router from './script/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
