async function obtenerEmpleados() {

    const archivo = 'empleados.json'

    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then( datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos // Destructuring
    //         // console.log(empleados);

    //         empleados.forEach( empleado => {
    //             console.log(empleado);
    //         })
    //     })

    // Async / await
    const resultado = await fetch(archivo)
    const datos = await resultado.json()
    console.log(datos);
}

obtenerEmpleados()