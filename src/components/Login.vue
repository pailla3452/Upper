<!--   body{background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qJLEtbIS-9F7t9-2evE7_tr4GqfhVpr3A7d7TjJPkL20q_dzUQ");}-->
<template>
  <style>

    #All{
        padding-bottom:10px;
        }
    #icoc{margin-left: 100px; margin-bottom: 30px;}

  </style>

  <div class="ui container">
    <div class="ui vertically divided grid">
      <div class="three column row">
        <div class="column">
        </div>
        <div class="column" id="All"  >
          <i class="massive steam square icon" id="icoc"></i>
          <form class="ui form" id="pene" method="post" >
            <h4 class="ui dividing header">Connexion</h4>
            <!-- NOM D'UTILISATEUR -->
            <div class="field">
              <label>Nom d'utilisateur</label>
              <div class="field">
                <div class="field">
                  <input
                  type="text"
                  name="nombre"
                  placeholder="Entrez votre nom d'utilisateur"
                  v-model="credentials.username">
                </div>
              </div>
            </div>
            <!-- E-MAIL -->
            <div class="field">
              <label>Adresse e-mail</label>
              <div class="field">
                <input
                type="text"
                name="correo"
                placeholder="Entrez votre adresse mail"
                v-model="credentials.email">
              </div>
            </div>
            <!-- PASSWORD -->
            <div class="field">
              <label>Mot de passe</label>
              <div class="field">
                <div class="field">
                  <input
                  type="text"
                  name="MDP"
                  placeholder="Entrez votre mot de passe"
                  v-model="credentials.password">
                </div>
              </div>
            <div class="ui error message">
            </div>
            <!-- SUBMIT -->
            <div class="ui button submit" id="btn-login" @click="submit()">Se connecter</div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
//If Error JQUERY
$(function(){
  $('#pene').form({
      nombre : {
        identifier:'nombre',
        rules:[
          {
            type: 'empty',
            prompt:"Entrez un nom d'utilisateur valide"
          }
          ]
        },
        correo: {
          identifier:'correo',
          rules:[{
            type:'email',
            prompt:'Entrez un e-mail valide'
          }]
        },
        contraseña:{
          identifier:'contraseña',
          rules:[{
            type:'minLength[4]',
            prompt:'Le MDP doit contenir au moins 4 caractères'
          }]
        }
      },{
        onSuccess:function(e){
          e.preventDefault();
          alert('Inscription envoyée');
        }
      });
});
//Base de datos VUE
import auth from '../auth'
export default {
  data() {
    return{
      credentials : {
        username: '',
        email: '',
        password: ''
      },
      error:''
    }
  },
  methods: {
    submit(){
      var username = this.credentials.username;
      var email = this.credentials.email;
      var password = this.credentials.password;

      // Voir si tout est rempli
      if (!username || !email || !password){
        alert('SVP, remplisez tous les informations nécessaires.');
        return;
      }

      console.log("Username: " + username + " email: " + email + " password: " + password);

      // Voir si le mot de passe a le minimun
      if (password.length < 4){
        alert("SVP, le mot de passe n'est assez longue.");
        return;
      }
      auth.login(username, email, password, '/');
    }
  }
}
</script>
<style scoped>

  #icoc{margin-left: 100px; margin-bottom: 30px;}
  body{background-image:url("http://2.bp.blogspot.com/-vz5mXrKt5Hg/UDnBBRO0RUI/AAAAAAAAIrE/7hRy41jIRmc/s1600/1.jpeg");}


</style>
