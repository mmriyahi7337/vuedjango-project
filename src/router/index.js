import { createRouter, createWebHistory } from 'vue-router'
import store    from '../store'
import Home     from '../views/Home.vue'
import Add      from '../views/Add.vue'
import Detail   from '../views/Detail.vue'
import Profile  from '../views/Profile.vue'
import Login    from '../views/Login.vue'
import register from '../views/Register.vue'
import Logout   from '../views/Logout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/article/:slug',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta :{loginRequired:true}
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    meta :{loginRequired:true}
  },
  {
    path: '/Login',
    name: 'login',
    component: Login,
    meta :{loginRedirect:true}

  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta :{loginRedirect:true}

  },
  {
    path: '/Logout',
    name: 'logout',
    component: Logout,
    meta :{loginRequired:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (store.state.isAuth) {
      next()
    } else {
      next("/login")
    }
  } else if (to.matched.some(record => record.meta.loginRedirect)) {
    if (!store.state.isAuth) {
      next()
    } else {
      next("/profile")
    }
  } else {
    next()
  }
})
export default router
