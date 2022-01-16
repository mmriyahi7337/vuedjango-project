import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isAuth: false,
    token:''
  },
  mutations: {
    onStart(state){
      let token = localStorage.getItem("token")
      if(token){
        state.isAuth = true
        state.token = token
        axios.defaults.headers.common['Authorization'] = "Token" + token ;
      }else{
        state.isAuth = false
        state.token = ''
        axios.defaults.headers.common['Authorization'] =""
      }
    },
    login(state,  token){
      if(token){
        state.isAuth = true
        state.token = token
        axios.defaults.headers.common['Authorization'] = "Token" + token ;
        localStorage.setItem("token", token)
      }else{
        state.isAuth = false
        state.token = ''
        axios.defaults.headers.common['Authorization'] =""
        localStorage.removeItem("token")

      }
    },
    logout(state){
        state.isAuth = false
        state.token = ''
        axios.defaults.headers.common['Authorization'] =""
        localStorage.removeItem("token")
    },
  },
  actions: {
  },
  modules: {
  }
})
