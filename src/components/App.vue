<!-- src/components/App.vue -->
<template>
  <div id="navbar">
    <!--NAVBAR-->

    <!-- PARTIE GAUCHE-->
    <div class="ui secondary  menu">
      <!-- HOME -->
      <a class="item" v-link="'/'"><i class="large home icon"></i></a>
      <!-- Signup-->
      <a class="item" v-link="'signup'">
        Sing Up!
      </a>
      <!-- Login-->
      <a class="item" v-link="'login'">
        Login
      </a>

      <!-- PARTIE DROITE-->
      <div class="right menu">
        <!-- SEARCH -->
        <div class="item" v-if="user.authenticated">
          <div class="ui icon input">
            <input type="text" placeholder="Rechercher...">
            <i class="search icon"></i>
          </div>
        </div>
        <!-- LOG OUT! -->
        <a class="ui item" @click="logout()">
          <i class="sign out icon"></i>
          Déconnexion
        </a>
        <!-- PROFILE! -->
        <a class="ui item" v-link="'profile'">
          <i class="large user icon">

          </i>
        </a>
        <!-- EXPERIMENT  DROPDOWN-->
        <div class="ui item">
          <div class="ui dropdown">
            <input type="hidden" name="gender">
            <i class="dropdown icon"></i>
            <div class="default text">Gender</div>
            <div class="menu">
              <div class="item" data-value="male">Male</div>
              <div class="item" data-value="female">Female</div>
            </div>
          </div>
        </div>
        <!-- END EXPERIMENT-->
      </div>
    </div>
    <hr>
    <!-- ROUTER VIEW -->
    <div class="container">
      <router-view></router-view>
    </div>

    <!-- Bas de page-->
</div>
</template>


<script>
import auth from '../auth'

export default {
  data() {
    return {
      user: auth.user
    }
  },
  methods: {
    logout() {
      auth.logout()
    }
  }
}
</script>
