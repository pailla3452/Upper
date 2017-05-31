import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import GamePage from './components/GamePage.vue'
import Gamecard from './components/compP/Gamecard.vue'
import Publicate from './components/compP/Publicate.vue'
import Commentusr from './components/compP/Commentusr.vue'
import GamesFollowed from './components/compP/GamesFollowed.vue'

import auth from './auth'

Vue.use(VueRouter);

export var router = new VueRouter()

// COMPONENTS
// Pour les fiches des jeux: <jeu-card></jeu-card>
Vue.component('jeu-card', Gamecard)
// Partie pour publier des jeux
Vue.component('publier-jeu', Publicate)
// Partie pour montrer les jeux suivis
Vue.component('games-followed', GamesFollowed)
// Abstraction commentaire
Vue.component('comment-usr', Commentusr)




var router = new VueRouter({
  mode:'history'
});

router.map({
  // Home
  '/':{
    component: Home
  },
  '/signup':{
    component: Signup
  },
  '/login':{
    component: Login
  },
  'profile':{
    component: Profile
  },
  '/gamePage':{
    component: GamePage
  },
  //Not found ---> Home
  '*': {
    component: Home
  }
});

router.start(App, '#app')

/*new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) */


/*router.redirect({
  '*': '/'
})

router.start(App, '#app')*/
