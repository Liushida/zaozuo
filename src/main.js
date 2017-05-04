import Vue from 'vue'
import './style/app.scss'
import Home from './script/components/list/Home.vue'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  components: { Home }
})
