var bd = PouchDB('http://localhost:5984/loggeos');

var withcher =
{
  "_id": "Witcher",
  "name": "The Witcher 3: Wild Hunt",
  "description": "Etiquetas: Mundo abierto, rol",
  "price": "$34.99",
  "comments": null //Ver como hacerlo
}

var unchar =
{
  "_id": "Uncharted",
  "name": "Uncharted 4",
  "description": "Etiquetas: Aventura, hardcore",
  "price": "$41.99",
  "comments": null //Ver como hacerlo
}

var _last =
{
  "_id": "Last",
  "name": "The Last of us",
  "description": "Etiquetas: Aventura, rol, plataformas",
  "price": "$45.99",
  "comments": null //Ver como hacerlo
}

var mc =
{
  "_id": "Minecraft",
  "name": "Minecraft",
  "description": "Etiquetas: Mundo abierto, rol",
  "price": "$34.99",
  "comments": null //Ver como hacerlo
}

bd.put(withcher);
bd.put(unchar);
bd.put(_last);
bd.put(mc);

alert("La base de datos ha sido actualizada, ya deberías tener todos los archivos guardados :D");
