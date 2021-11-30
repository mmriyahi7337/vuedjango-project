<template>
  <div class="login">
    <h1>Login</h1>
    <button class="btn btn-success" @click="dologin">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  
    methods:{
        dologin(){
            this.$store.commit("login","abc123")
            this.$router.push("/profile")

        }
    }
  
}
</script>