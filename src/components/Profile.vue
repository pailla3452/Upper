<template>
  <style>
    #lal{margin-left:150px; margin-bottom: 15px;}
    body{background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/394360/71924a3dae0d30451e509210ec104928b3d96ded.jpg);}
  </style>

  <div class="ui container">
    <div class="ui vertically divided grid">
      <div class="three column row">
        <div class="column"></div>
        <div class="column">
          <i class="large steam icon" id="lal"></i>
          <h2 class="ui header"></h2>

          <form class="ui form" method="post">
            <h4 class="ui dividing header">Información de perfil</h4>
            <!-- BIOGRAFIA -->
            <div class="field">
              <div class="field">
                <input type="text" name="biografia" placeholder="Información que le gustaría compartir">
              </div>
            </div>
          </form>

              <div class="extra content">
              </div>
              <form class="ui form" method="post">
                <h4 class="ui dividing header"> Comentarios</h4>
                <div class="field">
                  <div class="field">
                    <!-- donde se deben poner los comentarios -->
                    <input type="text" name="comentarios" >
                  </div>
                </div>
              </form>
            </div>
      </div>
    </div>
  </div>

</template>
<script>
</script>
