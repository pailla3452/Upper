//var baseDatos = new PouchDB('http://localhost:5984/loggeos');

/*baseDatos.info().then(function (info)
{
  console.log(info);
});*/

var kek = Login("correo", "sg<fg");

setTimeout(function() {
console.log(kek);

kek.then(function(result)
{
  console.log(result);

  if(result != "accepted")
  {
    //Se acaba de registrar
    console.log("Bienvenido :D")
  }
  // ERROR
  else
  {
    //Ya esta registrado
    console.log("Correo ya en uso")
  }
  })
}, 1000)
