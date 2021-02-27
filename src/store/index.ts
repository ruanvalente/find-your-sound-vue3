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
    },

    'SET_USER_PROFILE' (state, payload) {
      state.userProfile = payload
    }
  },
  actions: {
    async getTracks ({ commit }) {
      try {
        const tracks = await http.get('data')
        const response = await tracks.data

        commit('SET_TRACKS', response)
      } catch (error) {
        console.error(error)
      }
    },

    async getUserProfile ({ commit }) {
      try {
        const user = await http.get('user')
        const response = await user.data

        commit('SET_USER_PROFILE', response)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})
