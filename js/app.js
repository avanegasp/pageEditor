
(function(){

  var formulario = document.formulario_registro,
      elementos = formulario.elements;

  //Funciones
      var validarInputs = function(){
          for(var i=0; i < elementos.length; i++){
            if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
              if(elementos[i].value == 0){
                console.log('el campo '  + elementos[i].name + ' no esta completo');
                elementos[i].className = elementos[i].className + ' error';
                return false;
              } else{
                elementos[i].className = elementos[i].className.replace ('error', '');
              }
            }
          }
        }

    // VALIDAR ENVIO
      // var destino = "code.html";
      //
      // function reedireccionar(){
      //   location.href=destino;
      // };

      var enviar = function(e){
        if(!validarInputs()){
          console.log('falto validar los inputs');
          e.preventDefault();
        // })else if(!reedireccionar()){
        //   console.log('envia correctamente')
         }else{
           console.log('todos los campos estan llenos')
           e.preventDefault();
        }
      }

      formulario.addEventListener('submit', enviar);
        for(var i=0; i < elementos.length; i++){
          if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
        }
      }

}())
