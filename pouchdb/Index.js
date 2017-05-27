//var baseDatos = new PouchDB('http://localhost:5986/loggeos');

/*baseDatos.info().then(function (info)
{
  console.log(info);
});*/

var signup = Signup("Prueba", "correo", "contrasena");

setTimeout(function()
{
    console.log(signup.resolve());
}, 1000);
