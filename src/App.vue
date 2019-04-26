<template>
  <div id="app">
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">

            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>

          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
