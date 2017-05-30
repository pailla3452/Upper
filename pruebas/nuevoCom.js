var baseDonnes = PouchDB('http://localhost:5984/jeux');

var juego = "Minecraft";

var doc = baseDonnes.get(juego);

setTimeout(function()
{

  baseDonnes.get(juego).then(function(doc) {

    var comentarios = doc.comentarios;

    console.log(comentarios);

    /*return baseDonnes.put({
      _id: juego,
      _rev: doc._rev,
      image: doc.image,
      name: doc.name,
      price: doc.price,
      description: doc.description,


    });*/
  }).then(function(response) {
    // handle response
  }).catch(function (err) {
    console.log(err);
  });

}, 250);
