<template>
  <div>
    <div class="ui card">
      <div class="image">
        <img v-bind:src="linkImage">
      </div>
      <div class="content">
        <a class="header">{{ game }}</a>
        <div class="meta">
          <span class="date"></span>
        </div>
        <div class="description">
          {{description}}
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon"></i>
        {{comments}}
        </a>
        <!-- Buy Button -->
        <a v-link="'gamePage'">
        <div class="right floated">
          <div class="ui animated fade button" tabindex="0">
          <div class="visible content">Buy!</div>
            <div class="hidden content">
              {{price}}
            </div>
          </div>
        </div>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['game'],
  data(){
    return{
      linkImage:'',
      description: '',
      price: '',
      comments:''
    }
  },
  created(){
    this.linkImage = games[this.game].linkImage
    this.description = games[this.game].comments
    this.price = games[this.game].price
    this.comments = games[this.game].comments
    //TODO Llamar base de datos para rellenar USAR GAME PARA ACCEDER A LA BASE DE DATOS
    //With PouchDB
    /*var card = {};
    this.title = card.title;
    this.linkImage = card.linkImage;
    if (card.description){
      this.description = card.description;
    }
    else{
      this.description = "No description from user";
    }
    this.price = card.price;
    if (card.comments){
      this.comments = card.comments;
    }
    else{
      this.comments = "There is no comments yet!";
    }*/

        var baseDonnes = PouchDB('http://localhost:5984/loggeos');

        var doc = baseDonnes.get('tout_les_jeux');

        console.log(doc.jeux);

    //for (var i = 0; i < )
  }
}
var games = { 'The Witcher 3: Wild Hunt': {linkImage:'http://www.3djuegos.com/juegos/9592/the_witcher_3/fotos/ficha/the_witcher_3-2546818.jpg',
  description: 'Etiquetas: Mundo abierto, rol',
  price: 'Stock',
  comments:'Comentarios'}, 'Uncharted 4': {linkImage:'http://www.unchartedthegame.com/wp/wp-content/uploads/2015/04/UC4_PS4_JEWELCASE_STRAIGHT_ANGLE_001.png',
  description: 'Etiquetas: Aventura, hardcore',
  price: 'Non-Stock',
  comments:'Mejor juego de la puta historia'}, 'The Last of us': {linkImage:'https://media.playstation.com/is/image/SCEA/the-last-of-us-remastered-two-column-01-ps4-us-28jul14?$TwoColumn_Image$',
  description: 'Etiquetas: Aventura, rol, plataformas',
  price: 'Non-Stock',
  comments:'El segundo mejor juego de la puta historia'},'Minecraft': {linkImage:'http://6images.cgames.de/images/idgwpgsgp/bdb/2359472/600x.jpg',
  description: 'Etiquetas: Mundo abierto, rol',
  price: 'Non-Stock',
  comments:'Juego para ninos rata'}
}

</script>
