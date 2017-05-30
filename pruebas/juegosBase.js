/* Esta funcion lo que hace es buscar en la base de datos un archivo
llamado tous les jeyx el cual se encarga solamente de almacenar
una string con todos los juegos, esta string contiene los _ids
de los juegos para ser buscados en la base de datos y poder buscarlos
para poder rellenar la informacion en las tarjetas :)
*/
var baseDonnes = new PouchDB('http://localhost:5984/juegos');

var doc = baseDonnes.get('tout_les_jeux');

setTimeout(function(){

  doc.then(function(result)
  {
    console.log(result.jeux);

    var _array = separar(result.jeux);

    console.log(_array);
  })

}, 250)

function separar(kek)
{
  var juegos = new Array();

  var temp = "";
  var pos = 0;

  for (var i = 0; i < kek.length; i++)
  {
    if (kek.charAt(i) != "*")
    {
      temp += kek.charAt(i);
    }
    else {
      juegos[pos] = temp.toString();
      temp = "";
      pos++;
    }
  }

  return juegos;
}
