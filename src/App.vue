<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100vh;
}

body {
  background: #e9f9ee url('./assets/Playing\ Music-bro.svg') no-repeat 80% top;
  --webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  animation: fadeLeaf 0.3s forwards;
}

button {
  cursor: pointer;
}

button:disabled {
  opacity: 0.8;
  cursor: progress;
}

h2 {
  font-size: 2rem;
}

a {
  text-decoration: none;
  color: #263238;
}

@keyframes fadeLeaf {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
