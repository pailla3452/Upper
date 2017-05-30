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
      <!-- SEARCH -->
      <div class="right menu">
        <div class="item">
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
    <img src="https://c.slashgear.com/wp-content/uploads/2017/02/steam-games.jpg" class="ui centered ini image" height="42" width="62">
    <div class="ui horizontal inverted small divided link list">
      <a class="item" href="http://localhost:8080/#!/" target="_self">© 2017 Upper Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en Suiza y España.
                                                                      Todos los precios incluyen IVA (donde sea aplicable).
      </a>
    </div>
  </div>
</div>
    <!-- Bas de page-->
    <!-- <div class="">
    <div class="ui inverted vertical footer segment">
   <div class="ui container">
     <div class="ui stackable inverted divided equal height stackable grid">
       <div class="three wide column">
         <h4 class="ui inverted header">About</h4>
         <div class="ui inverted link list">
           <a href="#" class="item">Sitemap</a>
           <a href="#" class="item">Contact Us</a>
           <a href="#" class="item">Religious Ceremonies</a>
           <a href="#" class="item">Gazebo Plans</a>
         </div>
       </div>
       <div class="three wide column">
         <h4 class="ui inverted header">Services</h4>
         <div class="ui inverted link list">
           <a href="#" class="item">Banana Pre-Order</a>
           <a href="#" class="item">DNA FAQ</a>
           <a href="#" class="item">How To Access</a>
           <a href="#" class="item">Favorite X-Men</a>
         </div>
       </div>
       <div class="seven wide column">
         <h4 class="ui inverted header">Footer Header</h4>
         <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
       </div>
     </div>
   </div>
  </div>
</div> -->
</div>
</template>


<script>

export default {
  methods:{
    logout(){
      auth.logout()
    }
  }
}
</script>
