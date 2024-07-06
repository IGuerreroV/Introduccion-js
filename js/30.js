// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true

    if(auth) {
        resolve('Usuario Autenticado') // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesion') // EL PROMISE NO SE CUMPLE
    }
})

usuarioAutenticado
    .then(resultado =>console.log(resultado))
    .catch(error => console.log(error))

// En los promises existen 3 valores
// Pending : No se ha cumplido pero tampoco rechazado
// Fulfilled : Ya se cumplio
// Reject : Se ha rechazado o no se pudo cumplir