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
<!-- El davbar inferior -->
<div class="ui inverted vertical footer segment">
  <div class="ui center aligned container">
    <div class="ui stackable inverted grid">
      <div class="three wide column">
        <h4 class="ui inverted header">Acerca de Upper</h4>
        <div class="ui inverted link list">
          <a class="item" href="#">Acerca de Upper</a>
          <a class="item" href="#">Upperworks</a>
          <a class="item" href="#">Empleo</a>
          <a class="item" href="#">Distribucion de Upper</a>
        </div>
      </div>
      <div class="three wide column">
        <h4 class="ui inverted header">Upper-contactos</h4>
        <div class="ui inverted link list">
          <a class="item" href="#">Tarjetas de regalos</a>
          <a class="item" href="#">facebook</a>
          <a class="item" href="#">Upper-games</a>
          <a class="item" href="#">Reembolsos</a>
        </div>
      </div>
      <div class="seven wide right floated column">
        <h4 class="ui inverted teal header">Politica de privacidad</h4>
        <p>Support for the continued development of Upper comes directly from the community</p>
        <button type="submit" class="ui large teal button">Donate Today</button>
      </div>
    </div>
    <div class="ui inverted section divider"></div>
    
    <div class="ui horizontal inverted small divided link list">
      <a class="item" href="http://localhost:8080/#!/" target="_self">© 2017 Upper Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en Suiza y España.
                                                                      Todos los precios incluyen IVA (donde sea aplicable).
      </a>
    </div>
  </div>
</div>
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
