<template>
  <div class="logout">
    <h1>Login</h1>
    <div class="alert alert-danger" v-if="logoutError">
      {{logoutError}}
    </div>
    <button class="btn btn-danger" @click="dologout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Logout',
  data () {
    return{
        logoutError:''
    }
  },
    methods:{
        dologout(){
          axios
                .post('/api/auth/token/logout/')
                .then(response => {
                  this.$store.commit("logout")
                  this.$router.push("/Login")
                  console.log(response)
                })
                .catch(error => {
                  console.log(error.response.data)
                  this.logoutError = error.response.data.detail
                })
              
            
        }
    }
  
}
</script>