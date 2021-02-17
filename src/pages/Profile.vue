<template>
  <div class="container">
    <div>
      <header>
        <img src="@/assets/default-image.jpg" alt="Profile image" />
        <div>
          <strong>User name</strong>
        </div>
      </header>

      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Dgite sua música/artista"
          :class="{ 'error-input': isError }"
        />
        <button type="submit">Buscar</button>
      </form>
      <span :class="{ error: isError }" v-if="isError"
        >Por favor, entre com seu artista</span
      >
      <div>
        <cards />
        {{ trackData }}
      </div>
    </div>
  </div>
  <template v-if="isLoading">
    <loading />
  </template>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import http from '@/service/http'

import Loading from '@/components/Loading.vue'
import Cards from '@/components/Cards.vue'

export default defineComponent({
  name: 'Profile',
  components: { Loading, Cards },
  setup () {
    const isLoading = ref(true)
    const isError = ref(false)
    const trackData = ref([])

    function loading () {
      setTimeout(() => {
        isLoading.value = false
      }, 3000)
    }

    function getData () {
      http
        .get('data')
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => console.error(error.messager))
    }

    onMounted(() => {
      console.log('mountou')
      getData()
      loading()
    })

    return {
      isLoading,
      isError,
      loading,
      getData
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
