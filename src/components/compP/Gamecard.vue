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
        <div class="right floated">
          <div class="ui animated fade button" tabindex="0" v-link="'gamePage'">
          <div class="visible content">Buy!</div>
            <div class="hidden content">
              {{price}}
            </div>
          </div>
        </div>
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
  }
}
var games = { 'The Witcher 3: Wild Hunt': {linkImage:'http://tienda.canalocio.es/27201-201289-thickbox/the-witcher-3-wild-hunt-edicion-premium-day-1-ps4.jpg',
  description: 'Etiquetas: Mundo abierto, rol',
  price: '$34.99',
  comments:'Comentarios'}, 'Uncharted 4': {linkImage:'http://www.unchartedthegame.com/wp/wp-content/uploads/2015/04/UC4_PS4_JEWELCASE_STRAIGHT_ANGLE_001.png',
  description: 'Etiquetas: Aventura, hardcore',
  price: '$41.99',
  comments:'Mejor juego de la puta historia'}, 'The Last of us': {linkImage:'https://media.playstation.com/is/image/SCEA/the-last-of-us-remastered-two-column-01-ps4-us-28jul14?$TwoColumn_Image$',
  description: 'Etiquetas: Aventura, rol, plataformas',
  price: '$45.99',
  comments:'El segundo mejor juego de la puta historia'},'Minecraft': {linkImage:'http://6images.cgames.de/images/idgwpgsgp/bdb/2359472/600x.jpg',
  description: 'Etiquetas: Mundo abierto, rol',
  price: '$59.99',
  comments:'Juego para ninos rata'}
}

</script>
