<template>
  <nav class="border-b-2 border-[#2c3e50] w-11/12 mx-auto">
    <router-link class="uppercase mr-32" to="/">clavier</router-link>
    <router-link class="uppercase mr-32" to="/contact">contact</router-link>
    <router-link class="uppercase" to="/journal">Journal</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>


</script>