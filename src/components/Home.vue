<template>
  <div >
    
     ARRAY DES JEUX ICI
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

<style>

</style>
