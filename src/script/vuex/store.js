import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    init: (state, payload) => {
      state.items = payload.items
    }
  }
})

export default store
