function Login(email, password)
{
  this.email = email;
  this.password = password;

  var baseDatos = PouchDB('http://localhost:5984/loggeos');

  var credentials = new Object();

  credentials.email = this.email;
  credentials.password = this.password;

  return baseDatos.get(credentials.email).then(function (doc)
  {
    // Cuando se encuentre, se tiene que comprobar si la contrasena y el correo coinciden con los datos de la base de datos
    if (credentials.password == doc.password)
    {
      // Las contrasenas coinciden
      return "accepted";
    }
    else
    {
      return "incorrect password";
    }

  }).catch (function (err)
  {
    if (err.error == "not_found")
    {
      // Cuando no se encuentre el correo
     return "incorrect or something idk";
    }
  })
}
