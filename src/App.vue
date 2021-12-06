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
  },watch:{
    $route(){
      this.$store.commit("onStart")

    }
  },
  mounted(){
    this.$store.commit("onStart")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
