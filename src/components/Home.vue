<template>
  <style>
    #icoc{margin-left: 100px; margin-bottom: 30px;}
    body{background-color:rgb(241,241,241);}

  </style>
  <div class="ui container" id="All">
    <div class="ui vertically divided grid">
      <div class="three column row">
        <div class="column">
        </div>
        <div class="column" >
          <i class="massive steam square icon" id="icoc"></i>
          <form class="ui form" id="pene" method="post" >
            <h4 class="ui dividing header">Formulario de Registro</h4>
            <div class="field">
              <label>Nombre</label>
              <div class="field">
                <div class="field">
                  <input type="text" name="nombre" placeholder="xxxxxxx">
                </div>
              </div>
            </div>
            <div class="field">
              <label>Correo electrónico</label>
              <div class="field">
                <input type="text" name="correo" placeholder="xxxxxxxxxx@gmail.com">
              </div>
            </div>
            <div class="field">
            <label>Contraseña</label>
            </div>
            <div class="two fields">
              <div class="field">
                <input type="password" name="contraseña" placeholder="Contraseña">
              </div>
              <div class="field">
                <input type="password" name="contraseña2" placeholder="Verificar Contraseña">
              </div>
            </div>
            <div class="ui error message">
            </div>
            <div class="ui button submit" id="btn-enviar">Registrarse</div>
            <div class="ui button submit" id="btn-login">Iniciar sesión</div>
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
