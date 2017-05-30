<template lang="html">
  <div>
    <h1>Game title</h1>
    <input type="text" placeholder="Title" v-model="title">
    <h1>Put an image! (just a link)</h1>
    <input type="text" placeholder="Link..." v-model="linkImage">
    <h1>The price!</h1>
    <input type="text" placeholder="Price" v-model="price">
    <h1>Somme comments about your game</h1>
    <input type="text" placeholder="Something tu say?" v-model="comments">
    <hr>
    <button type="button" name="button" @click="Submit()">Publicar!</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      linkImage:'',
      price:'',
      comments:''
    }
  },
  methods:{
    // TODO subir informacion a base de datos
    submit(){
      
    }
  }
}
</script>

<style lang="css">
</style>
