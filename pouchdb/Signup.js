function Signup(name, email, password)
{
 this.name = name;
 this.email = email;
 this.password = password;

  var baseDatos = PouchDB('http://localhost:5986/loggeos');

  var credentials = new Object();

  credentials.name = this.name;
  credentials.email = this.email;
  credentials.password = this.password;


  return baseDatos.get(credentials.email).then(function(doc){

    return 'Ya hay una cuenta';

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
      baseDatos.put(doc);

      console.log(err);
      }
  });






  // Buscar por el correo electronico
  /*baseDatos.get(credentials.email).then(function (doc)
  {
    // Cuando se encuentre el archivo
    console.log( 'El correo ya está registrado');

    return
  }).catch (function (err)
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
    baseDatos.put(doc);

    console.log(err);


    }
  });*/


}
