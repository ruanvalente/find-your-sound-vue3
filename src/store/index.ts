import { createStore } from 'vuex'

import http from '@/service/http'

export default createStore({
  state: {
    userProfile: {},
    tracks: [],
    playlist: []
  },
  mutations: {
    'SET_TRACKS' (state, payload) {
      state.tracks = payload
    }
  },
  actions: {
    async getTracks ({ commit }) {
      try {
        const tracks = await http.get('data')
        const response = await tracks.data

        commit('SET_TRACKS', response)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})
