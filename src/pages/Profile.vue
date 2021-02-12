<template>
  <div class="container">
    <div>
      <header>
        <img src="@/assets/default-image.jpg" alt="Profile image" />
        <div>
          <strong>User name</strong>
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
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

          @media(max-width: 600px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
