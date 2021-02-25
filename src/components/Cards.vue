<template>

  <button-card class="card__button">
    <h2>Músicas</h2>
    <button id="button">Carregar playlist</button>
  </button-card>

  <section class="card" v-for="track in tracks" :key="track.id">
    <a
      class="card__link"
      :href="`https://open.spotify.com/track/${track.id}`"
      target="_blank"
    >
      <img class="card__image" :src="track.images[0].url" :alt="track.name" />

      <section class="card__text">
        <strong>{{ track.name }}</strong>
        <p>{{ track.release_date }}</p>
      </section>
    </a>

    <button-card class="card__button">
      <button @click="handlerAddToPlaylist(track)">Adicionar a playlist</button>
    </button-card>

  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import ButtonCard from '@/components/Button.vue'

import Track from '@/contracts/track'

export default defineComponent({
  name: 'Cards',
  components: { ButtonCard },
  props: {
    tracks: {
      type: Array as PropType<Track[]>,
      required: true,
      default: () => []
    },
    handlerAddToPlaylist: {
      type: Array as PropType<Track[]>,
      required: true,
      default: () => []
    }
  },
  setup () {
    const hasCard = ref(true)

    return {
      hasCard
    }
  }
})
</script>

<style lang="scss" scoped>
.card__button {
  display: flex;
  justify-content: space-between;

  h2 {
    display: flex;
    align-items: center;
  }

  #button {
    height: 72px;
    font-size: 14px;
    border-radius: 4px;
  }

  button {
    max-width: 100vw;
    width: 120px;
    background: #92e3a9;
    border: none;
    border-radius: 0px 5px 5px 0px;
    color: #263238;
    height: 110px;
    transition: background-color 1s;
    font-weight: bold;

    &:hover {
      background-color: #72c088;
    }
  }

  @media (max-width: 600px) {
    & {
      display: block;
      margin-top: 1.5rem;

      button {
        width: 100%;
      }
    }
  }
}

.card {
  margin-top: 2.5rem;
  max-width: 0, 0228rem;
  display: flex;
  align-items: center;
  justify-items: center;

  .card__link {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    .card__image {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  .card__text {
    margin: 0 1rem;

    strong {
      font-size: 1rem;
      color: #263238;
      line-height: 0.571rem;
    }

    p {
      font-size: 1.142rem;
      color: #a8a8b3;
      line-height: 0.761rem;
      margin-top: 0.589rem;
    }
  }

  .card__button {
    display: flex;
    align-items: center;

    button {
      max-width: 100vw;
      width: 120px;
      background: #92e3a9;
      border: none;
      border-radius: 0px 5px 5px 0px;
      color: #263238;
      height: 110px;
      transition: background-color 1s;
      font-weight: bold;

      @media (max-width: 600px) {
        & {
          width: 100%;
          height: 70px;
          border-radius: 4px;
        }
      }

      &:hover {
        background-color: #72c088;
      }
    }
  }
  @media (max-width: 600px) {
    display: block;
    margin-top: 1rem;
  }
}
</style>
