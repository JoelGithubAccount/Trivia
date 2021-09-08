
function RespCorrec(){
    Swal.fire(
        'La pregunta correcta',
        '11 años',
        'question'
      )
      

  }

  var segundoInicio = 30;

  function actualizar() {
      document.getElementById('countdown').innerHTML = segundoInicio;
  
      if (segundoInicio == 0) {
          // Cuenta regresiva ha finalizado
          document.getElementById('countdown').innerHTML = "Se termino el tiempo.";
      } else {
          segundoInicio-=1;
          setTimeout(actualizar, 1E3);
      }
  }
  
  actualizar();



  
function Correcto(){
    Swal.fire(
        'Pregunta correcta',
        'Exelente trabajo',
        'success'
      )

}

function Incorrecto(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Intentalo la proxima vez',
      })

}