<template>
  <div id="app">
    <div class="titilium">
      <img src="./assets/logo.png" style="max-width: 30px;vertical-align: sub;">
      <span>Vue-Prism</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 550px;
  margin: auto;
  margin-top: 60px;
  padding: 0 1rem;
}

  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }

  .titilium {
    font-family: 'Titillium Web', sans-serif;
  }
</style>
