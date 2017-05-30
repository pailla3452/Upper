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

    <div>
      <p>{{credentials.email}}</p>
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
      // Si tout va bien jusqu'à ici, on prendra la bd

       var baseDonnes = PouchDB('http://localhost:5984/loggeos');

       // Cherche un fichier dans la db qui ait l'_id du courrier
       // car il peut avoir qu'une compte par courrier
      baseDonnes.get(email).then(function(doc){

        alert('Ce courrier est déjà registré.');

       }).catch(function (err)
       {
         if (err.error == "not_found")
         {
           // Si le fichier n'est pas trouvé pas l'_id du courrier, un nouveau document
           // (compte) sera créé

           /*_id c'est l'identificateur avec lequel on cherchera dans la base des donnes le fichier
           name est le nom d'utilisateur
           password est le mot de passe
           jeu_un jusqu'à trois sont les trois derniers jeux que l'utilisateur
           a ajouté a fav.
           tout_jeu est un string qui va garder tous les jeux que l'utilisateur
           a ajouté a fav.
           bio c'est la biographie de l'utilisateur
           */
           var doc =
           {
             "_id": email,
             "name": username,
             "password": password,
             "jeu_un": "null",
             "jeu_deu": "null",
             "jeu_trois": "null",
             "tout_jeu": "",
             "bio": ""
           }

          // Sauvegarde le fichier créé avant
          baseDonnes.put(doc);

           //TODO redigir y keep alive para que siga conectado IGNGACIO

           }
       });
       
      //Fonction
      auth.signup(username, email, password, '/')
    }
  }
}
</script>
