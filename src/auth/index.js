import {router} from '../index'

export default {
  user: {
    theseName: '',
    authenticated: false
  },
  signup(username, email, password, redirect){
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
         var doc =
         {
           "_id": email,
           "name": username,
           "password": password,
           "jeu_un": "null",
           "jeu_deu": "null",
           "jeu_trois": "null",
           "tout_jeu": ""
         }
        // Sauvegarde le fichier créé avant
        baseDonnes.put(doc);
         //TODO redigir y keep alive para que siga conectado IGNGACIO
         login(username, email, password, '/')
         }
     });
  },
  login(username, email, password, redirect){
    var baseDonnes = PouchDB('http://localhost:5984/loggeos');

    baseDonnes.get(email).then(function(doc){

    if (doc._id == email && doc.name == username && doc.password == password){
      //TODO Redirigir a home ya loggeado y keep alive
      // Ir a la pagina solicitada
      router.go(redirect);
      this.username.authenticated = true;
      this.username.theseName = username;
    }
    else{
      alert("Le nom d'utilisateur, email ou mot de passe ne coïncident pas.");
    }

     }).catch(function (err)
     {
       if (err.error == "not_found")
       {
         alert("Le courrier n'est pas régistré.");
       }
     });
  },
  logout(){
    this.user.theseName = username;
    this.user.authenticated = false;
  }

}





/*
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
*/
