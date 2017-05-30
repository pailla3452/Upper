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
        <a class="ui item">
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
  </div>
</template>


<script>

</script>
