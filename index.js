let usuario = "miguelito"
let contraseña = "1234"
let resultado_user
let resultado_pass

// usuario validado

let validacion_user = prompt("Escribe tu usuario")
do {
     if (validacion_user !== usuario)
    {
      validacion_user = prompt ("Usuario es incorrecto, intente nuevamente")
    }
     else 
    {
      resultado_user = validacion_user
    }
   } while (resultado_user !== validacion_user)

// contraseña validada

let validacion_pass = prompt("Escribe tu contraseña")
do {
     if (validacion_pass !== contraseña)
    {
      validacion_pass = prompt ("Contraseña es incorrecto, intente nuevamente")
    }
     else 
    {
      resultado_pass = validacion_pass
    }
   } while (resultado_pass !== validacion_pass)