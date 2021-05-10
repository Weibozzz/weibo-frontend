import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    accessToken: '',
    date: '2021年5月10日',
    author: '伟波前端'
  },
  mutations: {
    setAccessToken (state, value) {
      state.accessToken = value
    },
    setDate (state, value) {
      state.date = value
    }
  },
  actions: {
    setAccessToken ({ commit }, value) {
      commit('setAccessToken', value)
    }
  },
  getters: {
    desc: state => {
      const { date, author} = state
      return `${author}:${date}`
    }
  }
})

export default store
