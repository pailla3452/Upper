<template>
  <style>
    #icoc{margin-left: 100px; margin-bottom: 30px;}
    body{background-image:url("https://www.walldevil.com/wallpapers/h12/web-background-wallpaper-copy1-templates-desktop-wallpapers-website.jpg") }

  </style>
  <div class="ui container" id="All">
    <div class="ui vertically divided grid">
      <div class="three column row">
        <div class="column">
        </div>
        <div class="column" >
          <i class="massive steam square icon" id="icoc"></i>
          <form class="ui form" id="pene" method="post" >
            <h4 class="ui dividing header">Connexion</h4>
            <div class="field">
              <label>Nom d'utilisateur</label>
              <div class="field">
                <div class="field">
                  <input type="text" name="nombre" placeholder="Entrez votre nom d'utilisateur">
                </div>
              </div>
            </div>
            <div class="field">
              <label>Adresse e-mail</label>
              <div class="field">
                <input type="text" name="correo" placeholder="Entrez votre adresse mail">
              </div>
            </div>
            <div class="field">
            <label>Mot de passe</label>
            </div>
            <div class="two fields">
              <div class="field">
                <input type="password" name="contraseña" placeholder="Entrez votre MDP">
              </div>
              <div class="field">
                <input type="password" name="contraseña2" placeholder="Vérifier le MDP">
              </div>
            </div>
            <div class="ui error message">
            </div>
            <div class="ui button submit" id="btn-enviar">S'inscrire</div>
            <div class="ui button submit" id="btn-login">Se connecter</div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
//If Error JQUERY
$(function(){
  $('#pene').form({
      nombre : {
        identifier:'nombre',
        rules:[
          {
            type: 'empty',
            prompt:'Por favor ingrese un nombre válido'
          }
          ]
        },
        correo: {
          identifier:'correo',
          rules:[{
            type:'email',
            prompt:'Ingrese un email válido'
          }]
        },
        contraseña:{
          identifier:'contraseña',
          rules:[{
            type:'minLength[4]',
            prompt:'Su contraseña debe tener al menos 4 caracteres'
          }]
        },
        contraseña2:{
          identifier:'contraseña2',
          rules:[{
            type:'match[contraseña]',
            prompt:'Las contraseñas no coinciden'
          }]
        }
      },{
        onSuccess:function(e){
          e.preventDefault();
          alert('enviando formulario');
        }
      });
});
//Base de datos VUE

</script>
