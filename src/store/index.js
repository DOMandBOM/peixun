import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideFlag: true
  },
  getters: {},
  mutations: {
    upAsideFlag (state, asideFlag) {
      state.asideFlag = asideFlag
    }
  },
  actions: {
  }
})
