<!-- src/components/App.vue -->
<template>
  <div>
    <!--NAVBAR-->


    <!-- PARTIE GAUCHE-->
    <div class="ui secondary  menu">
      <!-- HOME -->
      <a class="item" v-link="'home'"><i class="large home icon"></i></a>
      <!-- Signup-->
      <a class="item" v-link="'signup'">
        Sing Up!
      </a>
      <!-- Login-->
      <a class="item" v-link="'login'">
        Login
      </a>


      <!-- PARTIE DROITE-->
      <!-- SEARCH -->
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Rechercher...">
            <i class="search icon"></i>
          </div>
        </div>
        <!-- LOG OUT! -->
        <a class="ui item">
          <i class="sign out icon"></i>
          Déconnexion
        </a>
        <!-- PROFILE! -->
        <a class="ui item">
          <i class="large user icon">

          </i>
        </a>
        <!-- EXPERIMENT -->
        <div class="ui teal buttons">
          <div class="ui button">Toggle</div>
          <div class="ui floating dropdown icon button">
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" data-value="drop">Drop</div>
              <div class="item" data-value="horizontal flip">Horizontal Flip</div>
              <div class="item" data-value="fade up">Fade Up</div>
              <div class="item" data-value="scale">Scale</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROUTER VIEW -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
$('.dropdown')
  .dropdown({
    // you can use any ui transition
    transition: 'drop'
  })
;
</script>
