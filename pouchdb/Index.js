//var baseDatos = new PouchDB('http://localhost:5984/loggeos');

/*baseDatos.info().then(function (info)
{
  console.log(info);
});*/

var signup = Signup("Prueba", "polla", "contrasena");

setTimeout(function()
{
<<<<<<< HEAD
  signup.then(function(result)
  {
    console.log(result);

    if(result != "registred")
    {
      //Se acaba de registrar
      alert("Bienvenido :D")
    }
    // ERROR
    else
    {
      //Ya esta registrado
      alert("Correo ya en uso")
    }
  })
}, 1000)
