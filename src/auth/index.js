import {router} from '../index'

export default {
  user:{
    authenticated:false
  },
  signup(username, email, password, redirect){
    var exito = false;
    //console.log(this.user.authenticated )
    // Si tout va bien jusqu'à ici, on prendra la bd
    var baseDonnes = PouchDB('http://localhost:5984/loggeos');

     // Cherche un fichier dans la db qui ait l'_id du courrier
     // car il peut avoir qu'une compte par courrier
    var stat = baseDonnes.get(email).then(function(doc){

      alert('Ce courrier est déjà registré.');
      return false;
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
        router.go(redirect);
        return true;
         }
     });
     // TODO HACER QUE FUNCIONE EL LOGIN. AHORA DEVUELVE SOLO TRUE
     // HAY UN PROBLEMA CON EL TIEMPO. ESTA PARTE LA PONE AL FINAL
    setTimeout(function()
    {
      console.log(stat);
      stat.then(function(result)
    {
      console.log(result);
    })
    }, 300)

    this.user.authenticated = true;
    console.log("existe? -->");
    console.log(this.user);
    console.log("lo ha cambiado? -->");
    console.log(this.user.authenticated);
  },
  login(username, email, password, redirect){
    var baseDonnes = PouchDB('http://localhost:5984/loggeos');

    var stat = baseDonnes.get(email).then(function(doc){

    if (doc._id == email && doc.name == username && doc.password == password){
      //TODO Redirigir a home ya loggeado y keep alive
      // Ir a la pagina solicitada
      router.go(redirect);
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

     //TODO MISMO PROBLEMA QUE EL SINGUP
     this.user.authenticated = true;
  },
  logout(){
    console.log('El usuario de desconecto...')
    this.user.theseEmail = '';
    this.user.authenticated = false;
    router.go('/login');
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
