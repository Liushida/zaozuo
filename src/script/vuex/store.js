import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    items: [],
    buyNumObj: {}
  },
  mutations: {
    initItems: (state, payload) => {
      state.items = payload.items
    },
    initBuyNum: (state, payload) => {
      state.buyNumObj = payload.buyNumObj
    }
  }
})

export default store
