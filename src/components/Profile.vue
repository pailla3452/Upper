<template>
  <div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <form class="ui form" method="post">
            <h4 class="ui dividing header">Publicar Juegos</h4>
            <!-- Titulo del Juego -->
            <div class="field">
              <label>Titulo del Juego</label>
              <div class="field"></div>
                <input type="text" name="titulojuego" placeholder="entrez le titre de votre jeu">
            </div>
            <div class="field">
            <label>Put an image (JUST A LINK!)</label>
              <div class="field">
                <input type="text" name"linkgame" placeholder="Mettre de link d'un jeu">
              </div>
            </div>
            <div class="field">
              <label>The price</label>
              <div class="field">
                <input type="text" name="precio" placeholder="Le prix que vous voulez vendre">
              </div>
            </div>
            <div class="field">
              <label>Comentarios o informacion sobre el juego</label>
              <div class="field">
                <input type="text" name="comentariossobrejuego" placeholder="Informacion util" >
             </div>
           </div>
           <div class="ui active button">
             <i class="cloud upload icon"></i>
             Publicar
           </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe segment">
      <div class="ui middle aligned stackable grid container">
        <div class="column">
          <i class="talk icon">Comentarios</i>
          <div class="ui bottom attached tab segment active" data-tab="first">
          <games-followed></games-followed>
          <comment-usr :gameName="bla"></comment-usr>
        </div>
        <div class="ui bottom attached tab segment" data-tab="second">
      FUNCIONA JQUERY MIERDAAA!
        </div>
        <div class="ui bottom attached tab segment" data-tab="third">
        Third
        </div>
      </div>
    </div>
  </div>

</template>
