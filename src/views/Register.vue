<template>
  <div class="Register">
    <div class="row">
      <div class="col-lg-4 mx-auto border shadow rounded p-4 mt-3">
          <h1 class="text-center mt-3 mb-4">Register</h1>
           <form @submit.prevent="dologin">
          <div class="form-group">
            <label for="usernameInput">Username</label>
            <input type="text" class="form-control" id="usernameInput" v-model="username"
            :class="{
              'is-invalid ':usernameE=== true,
              'is-valid': usernameE === false,
            }">
            <div class="invalid-feedback" v-if="usernameE">
              {{usernameEM}}
            </div>
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" v-model="password"
            :class="{
              'is-invalid':passwordE ===true,
              'is-valid': passwordE === false,

            }">
            <div class="invalid-feedback" v-if="passwordE">
              {{passwordEM}}
            </div>
          </div>
          <div class="form-group">
            <label for="passwordInput">Repeat Password</label>
            <input type="password" class="form-control" id="passwordInput" v-model="password2"
            :class="{
              'is-invalid':password2E ===true,
              'is-valid': password2E === false,

            }">
            <div class="invalid-feedback" v-if="password2E">
              {{password2EM}}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
    data() {
      return {
        username:'',
        password:'',
        password2:'',
        usernameE:null,
        passwordE:null,
        password2E:null,
        usernameEM:null,
        passwordEM:null,
        password2EM:null,
      }
    },
  
    methods: {
        dologin() {
          let access = true
            if (this.username.length<5){
              this.usernameE = true
              this.access = false
              if (this.username.length ==0){
                this.usernameEM = "Username required"
              }
              else{
                this.usernameEM = "Username must be at least 5 char long"
              }
              
            }
            else{
              this.usernameE = false
              this.usernameEM =''
            }
              if (this.password.length<6){
              this.passwordE = true
              this.access = false
              if (this.password.length ==0){
                this.passwordEM = "Password required"
              }
              else{
                this.passwordEM = "Password must be at least 8 char long"
              }
              
            }
            else{
              this.passwordE = false
              this.passwordEM =''
            }
               if (this.password2.length<6){
              this.password2E = true
              this.access = false
              if (this.password2.length ==0){
                this.password2EM = "Repeat Password required"
              }
              else{
                this.password2EM = "Repeat Password must be at least 8 char long"
              }
              
            }
            else{
              this.password2E = false
              this.password2EM =''
            }
            if (this.password2 != this.password){
              this.password2E = true
              this.passwordE = true
              this.access = false
              this.passwordEM = 'Passwords are not same'
            }
            else{
                if(!this.passwordE && !this.password2E){
              
              this.passwordEM =''
                }
            }

           if(access){
                axios
                .post('/api/auth/users/',{
                  "password": this.password,
                  "username": this.username
                })
                .then(response => {
                  this.$router.push("/login")
                  console.log(response)
                })
                .catch(error => {
                  console.log(error.response.data)
                  if (error.response.data.username){
                    this.usernameE = true
                    this.usernameEM = error.response.data.username.join(" ")
                  }else{
                    this.password2E = true
                    this.passwordE = true
                    this.passwordEM = error.response.data.password.join(" ")
                    this.password2EM = error.response.data.password.join(" ")
                    }
                })
              
           }

        }
    }
  
}
</script>