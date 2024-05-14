//Haz tú validación en javascript acá

function validarFormulario()
{   
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementsByName("email").value;
    var asunto = document.getElementsByName("asunto").value;

    if (nombre === "" || email === "" || asunto === "") {
        alert("Por favor llena todos los campos ;)");
        return false;
    } else {
        return true;
    }
   
    
}

document.getElementsByName('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

if (validarFormulario())
    {
        alert("Hola " + nombre +", pronto estaré en contacto contigo ;)");
    }
});


  