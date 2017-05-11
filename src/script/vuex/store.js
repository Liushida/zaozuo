import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    title: 'wzh'
  },
  mutations: {
    change: (state, payload) => {
      state.title = payload.title
    }
  }
})

export default store
