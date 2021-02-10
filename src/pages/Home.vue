<template>
  <h1>Encontre sua música favorita à um clique</h1>
  <div>
    <button>
      <a href="#">Busque o seu som</a>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
h1 {
  max-width: 433px;

  font-size: 48px;
  color: #263238;
  line-height: 56px;
  margin-top: 40px;
}

div {
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  button {
    max-width: 200px;
    width: 100vh;
    background: #92e3a9;
    border: none;
    border-radius: 4px;
    color: #263238;
    height: 70px;
    transition: background-color 1s;
    font-weight: bold;

    a {
      padding: 20px;
    }

    &:hover {
      background-color: #72c088;
    }
  }
}
</style>
