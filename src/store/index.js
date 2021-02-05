import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    member: false,
    token: false
  },
  mutations: {
    setMember(state, member) {
      state.member = member
    },
    setToken(state, token) {
      state.token = token
    },
    logout(state) {
      state.member = false,
      state.token = false
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
