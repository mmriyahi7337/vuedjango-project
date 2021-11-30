<template>
  <div class="logout">
    <h1>Login</h1>
    <button class="btn btn-danger" @click="dologin">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  
    methods:{
        dologin(){
            this.$store.commit("logout")
            this.$router.push("/Login")
        }
    }
  
}
</script>