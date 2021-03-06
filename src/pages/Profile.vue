<template>
  <div class="container">
    <div>
      <header>
        <template v-if="userProfile.avatar_url">
          <img :src="userProfile.avatar_url" :alt="userProfile.username" />
        </template>

        <template v-else>
          <img src="@/assets/default-image.jpg" alt="User profile" />
        </template>

        <div>
          <strong>{{
            userProfile.username ? userProfile.username : 'Desconhecido'
          }}</strong>
        </div>
      </header>

      <form>
        <input
          type="text"
          name="search"
          id="search"
          v-model="search"
          placeholder="Dgite sua música/artista"
          :class="{ 'error-input': isError }"
        />
        <button type="submit" @click.prevent="handlerSearch">Buscar</button>
      </form>
      <span :class="{ error: isError }" v-if="isError"
        >Por favor, entre com seu artista</span
      >
      <div>
        <cards
          :tracks="tracks"
          :handlerAddToPlaylist="handlerAddToPlaylist"
          :handlerLoadingPlaylist="handlerLoadingPlaylist"
        />
      </div>
    </div>
  </div>

  <template v-if="isLoading">
    <loading />
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import { writeItem } from '@/utils/localStored'

import Loading from '@/components/Loading.vue'
import Cards from '@/components/Cards.vue'

import Track from '@/contracts/track'

export default defineComponent({
  name: 'Profile',
  components: { Loading, Cards },

  setup () {
    const isLoading = ref(true)
    const isError = ref(false)
    const playList = ref<Track[]>([])
    const search = ref('')

    const store = useStore()

    const loading = () => (isLoading.value = true)

    const handlerAddToPlaylist = (data: Track) => {
      playList.value.push(data)
      writeItem('FindYourSound::Vue3', playList.value)
    }

    const handlerLoadingPlaylist = () => {
      store.dispatch('loadingUserPlaylist')

      console.log(store.state.playlist)
    }

    const handlerSearch = () => {
      const result = store.state.tracks.filter((param: any) =>
        param.name.toLowerCase() === search.value.toLowerCase() ? param.name : ''
      )

      console.log(result)
    }

    const getTracks = async () => {
      try {
        const response = await store.dispatch('getTracks')
        return response
      } catch (error) {
        console.error(error.messager)
      } finally {
        isLoading.value = false
      }
    }

    const getUserProfile = async () => {
      try {
        const response = await store.dispatch('getUserProfile')
        return response
      } catch (error) {
        console.error(error.messager)
      } finally {
        console.log('tudo ok')
      }
    }

    onMounted(() => {
      console.log('mountou')
      loading()
      getTracks()
      getUserProfile()
    })

    return {
      isLoading,
      isError,
      loading,
      search,
      handlerAddToPlaylist,
      handlerLoadingPlaylist,
      handlerSearch,
      getUserProfile,
      tracks: computed(() => store.state.tracks),
      userProfile: computed(() => store.state.userProfile)
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    max-width: 700px;

    span {
      margin-top: 20px;
      font-weight: bold;
      color: #263238;

      &.error {
        display: block;
        color: #c53030;
        margin-top: 10px;
      }
    }

    header {
      display: flex;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      div {
        margin-left: 30px;

        strong {
          font-size: 1.5rem;
          line-height: 2.625rem;
          color: #263238;

          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
      }
    }
    form {
      display: flex;
      margin-top: 40px;
      max-width: 700px;

      input {
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-right: 0;
        border-radius: 5px 0 0 5px;
        color: #263238;
        transition: all 0.2s;

        &.error-input {
          border-color: #c53030;
        }

        &:focus {
          border-color: #92e3a9;
        }

        @media (max-width: 600px) {
          & {
            flex: 1;
          }
        }
      }

      button {
        max-width: 100vh;
        width: 120px;
        height: 70px;
        background: #92e3a9;
        color: #263238;
        border: none;
        border-radius: 0px 5px 5px 0px;
        transition: background-color 1s;
        font-weight: bold;

        &:hover {
          background-color: #72c088;
        }
      }
    }
  }
}
</style>
