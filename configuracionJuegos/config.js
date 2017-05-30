var bd = new PouchDB('http://localhost:5984/jeux');

// Esto sirve solamente para almacenar los juegos con la informacion necesaria para las tarjetas

var withcher =
{
  "_id": "Witcher",
  "name": "The Witcher 3: Wild Hunt",
  "image": "http://tienda.canalocio.es/27201-201289-thickbox/the-witcher-3-wild-hunt-edicion-premium-day-1-ps4.jpg",
  "description": "Etiquetas: Mundo abierto, rol",
  "price": "$34.99",
  "comments": null
}

var unchar =
{
  "_id": "Uncharted",
  "name": "Uncharted 4",
  "image": "http://www.unchartedthegame.com/wp/wp-content/uploads/2015/04/UC4_PS4_JEWELCASE_STRAIGHT_ANGLE_001.png",
  "description": "Etiquetas: Aventura, hardcore",
  "price": "$41.99",
  "comments": null
}

var _last =
{
  "_id": "Last",
  "name": "The Last of us",
  "image": "https://media.playstation.com/is/image/SCEA/the-last-of-us-remastered-two-column-01-ps4-us-28jul14?$TwoColumn_Image$",
  "description": "Etiquetas: Aventura, rol, plataformas",
  "price": "$45.99",
  "comments": null
}

var mc =
{
  "_id": "Minecraft",
  "name": "Minecraft",
  "image": "http://6images.cgames.de/images/idgwpgsgp/bdb/2359472/600x.jpg",
  "description": "Etiquetas: Mundo abierto, rol",
  "price": "$34.99",
  "comments": null
}

bd.put(withcher);
bd.put(unchar);
bd.put(_last);
bd.put(mc);

alert("La base de datos ha sido actualizada, ya deberías tener todos los archivos guardados :D");
