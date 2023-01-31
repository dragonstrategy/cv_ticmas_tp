7/*function formularioContacto (){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var empresa = document.getElementById("empresa").value;
    var puesto = document.getElementById("puesto").value;
    var email = document.getElementById("email").value;
}

var ExpRegSoloLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";


*/

function validar(id){
var elemento = document.getElementById(id)
if (elemento.checkValidity()){
    elemento.style.borderColor = "green";
}
else{
    elemento.style.borderColor = "red";
}

}

function enviarValidar (){

    var nombreValido = document.getElementById('nombre').checkValidity();
    var apellidoValido = document.getElementById('apellido').checkValidity();
    var empresaValido = document.getElementById('empresa').checkValidity();
    var puestoValido = document.getElementById('puesto').checkValidity();
    var emailValido = document.getElementById('email').checkValidity();

    if (nombreValido && apellidoValido && empresaValido && puestoValido && emailValido ){
        alert("Formulario cargado de forma Correcta")
    }
    else{
        alert("Fallo la carga de datos")
    }

}

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });


