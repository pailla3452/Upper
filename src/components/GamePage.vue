<template lang="html">
  <div>
    <h1>{{game}}</h1>
    <p> Price: {{price}}<p>
    <img v-bind:scr="linkImage">
    <hr>
    <h1>description</h1>
    <p>{{description}}</p>
    <hr>
    <h1>Comments: </h1>
    <comment-usr :gameName="game"></comment-usr>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //TODO hacer props
      //props:['game'],
      game:'',
      price:'',
      linkImage: '',
      description: ''
    }
  },
  created(){
    //TODO Llamar base de datos
    this.game = $route.params.theGame;
    this.price = gameinDB[this.game].price;
    this.linkImage = gameinDB[this.game].linkImage;
    this.description = gameinDB[this.game].description;
  }

}

var gameinDB = {'The Witcher 3: Wild Hunt': {linkImage:'http://tienda.canalocio.es/27201-201289-thickbox/the-witcher-3-wild-hunt-edicion-premium-day-1-ps4.jpg',
  description: 'Etiquetas: Mundo abierto, rol',
  price: '$34.99',
  comments:'Comentarios'}}

</script>

<style lang="css">
</style>
