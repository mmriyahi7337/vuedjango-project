<template>
  <div class="navbar">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/profile" v-if="$store.state.isAuth">Profile</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/login" v-if="! $store.state.isAuth">Login</router-link>
                </li> 
                <li class="nav-item">
                <router-link class="nav-link" to="/register" v-if="! $store.state.isAuth">register</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/logout" v-if="$store.state.isAuth">Logout</router-link>
                </li>

            </ul>
            <form class="form-inline lf">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
  </div>
  </template>


<script>
export default {
  name: 'navbar',

}
</script>