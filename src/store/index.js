import { createStore } from 'vuex'

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
      }else{
        state.isAuth = false
        state.token = ''
      }
    },
    login(state,  token){
      if(token){
        state.isAuth = true
        state.token = token
        localStorage.setItem("token", token)
      }else{
        state.isAuth = false
        state.token = ''
        localStorage.removeItem("token")

      }
    },
    logout(state){
        state.isAuth = false
        state.token = ''
        localStorage.removeItem("token")
    },
  },
  actions: {
  },
  modules: {
  }
})
