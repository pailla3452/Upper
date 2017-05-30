var baseDonnes = PouchDB('http://localhost:5984/juegos');

console.log("Funciona");

var email = "correo";

var lista = baseDonnes.get(email).then(function(doc){

return doc.tout_jeu;

});

setTimeout(function(){

lista.then(function(result)
{
  console.log(result);

  if (!result) return;

  var cuenta = 0;

  for (var i = 0; i < result.length; i++){
    if (result.charAt(i) == "*") cuenta++;
  }

  var juegos = new Array(cuenta);

  var temp = "";
  var pos = 0;

  for (var i = 0; i < result.length; i++)
  {
    if (result.charAt(i) != "*")
    {
      temp += result.charAt(i);
    }
    else {
      juegos[i] = temp;
      temp = "";
      pos++;
    }
  }

  for (var i = 0; i < juegos.length; i++){
    console.log(juegos[i].toString());
  }
})
}, 200)
