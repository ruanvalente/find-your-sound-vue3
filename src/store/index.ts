import { createStore } from 'vuex'

import http from '@/service/http'
import { readItem } from '@/utils/localStored'

export default createStore({
  state: {
    userProfile: {},
    tracks: [],
    playlist: []
  },
  mutations: {
    SET_TRACKS (state, payload) {
      state.tracks = payload
    },

    SET_USER_PROFILE (state, payload) {
      state.userProfile = payload
    },

    SET_USER_PLAYLIST (state, payload) {
      state.playlist = payload
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
    },

    loadingUserPlaylist ({ commit }) {
      try {
        const playlist = readItem('FindYourSound::Vue3')

        commit('SET_USER_PLAYLIST', playlist)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})
