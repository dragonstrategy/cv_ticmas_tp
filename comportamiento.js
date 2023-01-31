
//funcion que valida input por id que cumpla con las condiciones pedidas y cambia color del borde del input
function validar(id){
var input = document.getElementById(id)
if (input.checkValidity()){
    input.style.borderColor = "green";
}
else{
    input.style.borderColor = "red";
}

}

// Se valida mediante el boton de submit que sean bien cargados los datos 
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


