var baseDonnes = PouchDB('http://localhost:5984/jeux');

var juego = "Minecraft";

var username = "hola";
var comentario = "comentario";

baseDonnes.get(juego).then(function(doc)
{
  doc[username] = comentario;

  alert('Commentaire actualisé correctement');

  return baseDonnes.put(doc);
});
