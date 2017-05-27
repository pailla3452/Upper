<!-- src/components/App.vue -->
<template>
  <div class="ui secondary  menu">
    <a class="item"><i class="steam icon"></i></a>
    <a class="active item" v-link="'home'">
      Accueil
    </a>
    <a class="item" v-link="'signup'">
      Sing Up!
    </a>
    <a class="item" v-link="'login'">
      Login
    </a>
    <button class="ui button"><i class="copy icon"></i></button>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Rechercher...">
          <i class="search icon"></i>
        </div>
      </div>
      <!-- LOG OUT! -->
      <a class="ui item" v-if="user.authenticated">
        <i class="sign out icon"></i>
        Déconnexion
      </a>
      <!-- PROFILE! -->
      <a class="ui item">
        <i class="large user icon">

        </i>
      </a>

    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
