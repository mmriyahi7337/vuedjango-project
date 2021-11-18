<template>
  <navbar />
  <router-view class="container"/>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.lf{
  text-align: left !important;
}
</style>
