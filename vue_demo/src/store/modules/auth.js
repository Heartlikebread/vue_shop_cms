export default {
  state: {

    token: null,

  },
  mutations: {
    setLogin(state, payload) {
      state.token = payload.token
    }

  },
  actions: {
    logout({
      commit
    }) {
      commit('setLogin', {
        token: null
      })
    }
  }
}