<template lang="html">
  <h1>Games followed:</h1>
  <hr>
  <ul v-for="game in games">
    <li>{{game}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      games : ['Uncharted', 'The Witcher 3', 'Need for speed!']
    }
  }
}
</script>

<style lang="css">
</style>
