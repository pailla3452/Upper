<template lang="html">
  <h1>This Game is: {{gameName}}</h1>
  <div class="ui comments">
  <h3 class="ui dividing header">Comments</h3>
  <!-- Comment con variables-->
  <div class="comment">
    <a class="avatar">
      <img src="http://orig14.deviantart.net/d940/f/2011/011/8/e/super_mario_avatar_by_665almostevil-d36y2l7.gif">
    </a>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata">
        <span class="date">Today at 5:42PM</span>
      </div>
      <div class="text">
        How artistic!
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <!-- Comments de adorno-->
  <div class="comment">
    <a class="avatar">
      <img src="">
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">Yesterday at 12:30AM</span>
      </div>
      <div class="text">
        <p>This has been very useful for my research. Thanks as well!</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <a class="avatar">
          <img src="">
        </a>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <span class="date">Just now</span>
          </div>
          <div class="text">
            Elliot you are always so right :)
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img src="">
    </a>
    <div class="content">
      <a class="author">Joe Henderson</a>
      <div class="metadata">
        <span class="date">5 days ago</span>
      </div>
      <div class="text">
        Dude, this is awesome. Thanks so much
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <!-- ENVIAR FORMULARIO -->
  <form class="ui reply form">
    <div class="field">
      <textarea></textarea>
    </div>
    <div class="ui blue labeled submit icon button" @click="submit()">
      <i class="icon edit"></i> Add Reply
    </div>
  </form>
</div>
</template>

<script>
export default {
  data(){
    return{
      props:['gameName']
    }
  },
  methods:{
    /*TODO Tienes que subirlo a la base de datos
    / jeux[gameName].comments
    /Tienes que subir un object en la forma {'user':'lo que dijo'}
    */
    submit(){
      var baseDonnes = PouchDB('http://localhost:5984/jeux');

      var username = "daniel";

      var comentario = "hola";

      console.log("hola");

      baseDonnes.get(gameName).then(function(doc)
      {
        doc[username] = comentario;

        alert('Commentaire actualisé correctement');

        return baseDonnes.put(doc);
      });

    }
  }
}
</script>

<style lang="css">
</style>
