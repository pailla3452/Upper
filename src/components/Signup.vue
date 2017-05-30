<template>
  <div>
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
                  v-model="credentials.password2">
                </div>
              </div>
              <div class="ui error message">
              </div>
              <!-- SUBMIT -->
              <div class="ui button submit" id="btn-enviar" @click="submit()">S'inscrire</div>
              <div class="ui button submit" id="btn-login" v-link="'login'">Déjà membre?</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


//If Error JQUERY
<script type="text/javascript">
  $(function(){
    $('#pene').form({
        nombre : {
          identifier:'nombre',
          rules:[
            {
              type: 'empty',
              prompt:'Por favor ingrese un nombre válido'
            }
            ]
          },
          correo: {
            identifier:'correo',
            rules:[{
              type:'email',
              prompt:'Ingrese un email válido'
            }]
          },
          contraseña:{
            identifier:'contraseña',
            rules:[{
              type:'minLength[4]',
              prompt:'Su contraseña debe tener al menos 4 caracteres'
            }]
          },
          contraseña2:{
            identifier:'contraseña2',
            rules:[{
              type:'match[contraseña]',
              prompt:'Las contraseñas no coinciden'
            }]
          }
        },{
          onSuccess:function(e){
            e.preventDefault();
            console.log('Formulaire envoyé :)');
          }

        });
  });

//Base de datos VUE
import auth from '../auth'

export default{
  data() {
    return {
      credentials: {
        email: '',
        username: '',
        password: '',
        password2: ''
      },
      error: ''
    }
  },
  methods:{
    submit(){
      console.log('lololo')
      var username = this.credentials.username;
      var email = this.credentials.email;
      var password = this.credentials.password;
      var password2 = this.credentials.password2;
      console.log(username, email, password2, password)

      //Voir si tout est rempli
      if (!username || !email || !password || !password2){
        alert('SVP, remplisez tous les informations nécessaires.');
        return;
      }

      console.log("Username: " + username + " Email: " + email + " Contraseña: " + password);
      // Voir si les deux mots de passe ont la longuer minimun
      if (password.length < 4 || password2.length < 4){
        alert('SVP, les mots de passes doivent avoir plus de 4 caractères');
        return;
      }

      // Voir si les deux mots de passe sont la même
      if (password != password2){
        alert('Les mots de passe ne coïncident pas.');
        return;
      }
      
      //Fonction pour créer une nouvelle compte
      auth.signup(username, email, password, '/')
    }
  }
}
</script>
