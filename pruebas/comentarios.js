var baseDonnes = PouchDB('http://localhost:5984/jeux');

// Funcion para añadir comentarios

var juego = "Minecraft";

var doc = baseDonnes.get(juego);

setTimeout(function()
{
  doc.then(function(result)
  {
    console.log(result.comments);
  });
}, 250);
