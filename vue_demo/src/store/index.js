import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import auth from './modules/auth.js'



export default new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {},
  modules: {
    auth
  }
})