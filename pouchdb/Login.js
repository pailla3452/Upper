function Login(email, password)
{
  this.email = email;
  this.password = password;

  var baseDatos = PouchDB('http://localhost:5986/loggeos');

  var credentials = new Object();

  credentials.email = this.email;
  credentials.password = this.password;

  baseDatos.get(credentials.email).then(function (doc)
  {
    // Cuando se encuentre, se tiene que comprobar si la contrasena y el correo coinciden con los datos de la base de datos
    if (credentials.password == doc.password)
    {
      console.log('Las contraseñas coinciden :D');
    }
    else
    {
      console.log('Las contraseñas no coinciden :(');
    }

  }).catch (function (err)
  {
    if (err.error == "not_found")
    {
      // Cuando no se encuentre
      console.log("Esta cuenta de correo no existe");
    }
  })
}
