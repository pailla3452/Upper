<template>
  <style>
    #icoc{margin-left: 100px; margin-bottom: 30px;}
    body{background-color:rgb(241,241,241);}

  </style>
  <div class="ui container" id="All">
    <div class="ui vertically divided grid">
      <div class="three column row">
        <div class="column">
        </div>
        <div class="column" >
          <i class="massive steam square icon" id="icoc"></i>
          <form class="ui form" id="pene" method="post" >
            <h4 class="ui dividing header">Inscription</h4>
            <!-- USERNAME -->
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
                v-model="credentials.email"
                >
              </div>
            </div>
            <!-- PASSWORD -->
            <div class="field">
            <label>Mot de passe</label>
            </div>
            <div class="two fields">
              <div class="field">
                <input
                type="password"
                name="contraseña"
                placeholder="Entrez votre MDP"
                v-model="credentials.password">
              </div>
              <div class="field">
                <input
                type="password"
                name="contraseña2"
                placeholder="Vérifier le MDP"
                v-model="credentials.Vpassword">
              </div>
            </div>
            <div class="ui error message">
            </div>
            <!-- SUBMIT -->
            <div class="ui button submit" id="btn-enviar" @clcik="submit()">S'inscrire</div>
            <div class="ui button submit" id="btn-login" v-link="'login'">Déjà membre ?</div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p>{{credentials.email}}</p>
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
        },
        contraseña2:{
          identifier:'contraseña2',
          rules:[{
            type:'match[contraseña]',
            prompt:'La vérification du MDP a échouée'
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
export default{
  data() {
    return {
      credentials: {
        email: '',
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods:{
    submit(){
      var credentials = {
        username: this.credentials.username,
        email: this.credentials.email,
        password: this.credentials.password
      }
    }
  }
}
</script>
