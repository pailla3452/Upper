<template>
  <div class="ui raised very padded text container segment">
    <!-- TAB HEADER -->
    <div class="ui top attached tabular menu">
      <a class="item active" data-tab="first">Games Followed</a>
      <a class="item" data-tab="second">Publicate<i class="add circle icon"></i></a>
      <a class="item" data-tab="third">Config.<i class="configure icon"></i></a>
      <!-- TAB BODY -->
    </div>
    <div class="ui bottom attached tab segment active" data-tab="first">
      <publier-jeu></publier-jeu>
      <hr>
      <h1>SEPARACION DE COMPONENTES</h1>
      <hr>
      <games-followed></games-followed>
      <hr>
      <h1>SEPARACION DE COMPONENTES</h1>
      <hr>
      <!--TODAVIA NO FUNCIONAN BIEN LOS COMENTARIOS -->
      <comment-usr :gameName="bla"></comment-usr>
    </div>
    <div class="ui bottom attached tab segment" data-tab="second">
      FUNCIONA JQUERY MIERDAAA!
    </div>
    <div class="ui bottom attached tab segment" data-tab="third">
      Third
    </div>
  </div>
</template>

<script>
$('.menu .item')
  .tab()
;
export default{
  data(){
    return{
      bla:'The Witcher 3 : Wild Hunt'
    }
  }
}

</script>
