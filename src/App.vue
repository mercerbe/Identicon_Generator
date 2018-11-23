<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>Identicon Generator</h3>
    <div>
      Input: 
      <input type="text" v-on:input="onInput"/>
    </div>
    <div>
      Output:
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
