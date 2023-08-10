function validarFormulario() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var contrasena = document.getElementById('contrasena').value;
  
    if (nombreUsuario === '' || contrasena === '') {
        alertcampos();
        return false;
    }
  
    }
  

function alertcampos(){
    swal({
        title: "¡Atención!",
        text: "Complete todos los campos",
        icon: "warning",
        button: "Aceptar",
      });
}




