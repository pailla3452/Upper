<template>

  <style>
    body{background-image: url("https://s-media-cache-ak0.pinimg.com/originals/d1/54/2a/d1542a4a4f5761f3c61270373b5f6dae.jpg");}
  </style>
  <div >
     <!-- ARRAY DES JEUX ICI -->
    <div class="ui link cards" >
      <div v-for="jeu in jeux">
        <jeu-card :game="jeu"></jeu-card>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data (){
    return{
      jeux:['The Witcher 3: Wild Hunt', 'Uncharted 4', 'The Last of us', 'Minecraft']
    }
  }
}
</script>
