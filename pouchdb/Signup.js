function Signup(name, email, password)
{
 this.name = name;
 this.email = email;
 this.password = password;

  var baseDatos = PouchDB('http://localhost:5984/loggeos');

  var credentials = new Object();

  credentials.name = this.name;
  credentials.email = this.email;
  credentials.password = this.password;


  return baseDatos.get(credentials.email).then(function(doc){

    return "registred";

  }).catch(function (err)
  {
    if (err.error == "not_found")
    {
      // Cuando no se encuentre, se creara el documento que almacenara toda la informacion del que se quiere registrar
      var doc =
      {
        "_id": credentials.email,
        "name": credentials.name,
        "password": credentials.password
      }

      // Guardar el archivo JSON creado
      //baseDatos.put(doc);

      return "not registred";

      console.log(err);
      }
  });
}
