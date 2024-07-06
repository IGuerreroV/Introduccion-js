// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...')

        setTimeout(() => {
            resolve('Los clientes fueron Descargados')
        }, 5000)

    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...')

        setTimeout(() => {
            resolve('Los pedidos fueron Descargados')
        }, 3000)

    })
}

/* NOTA: Promise.all para optimizar un llamado async / await */
async function app() {
    try {
        // const clientes = await descargarNuevosClientes()
        // const pedidos = await descargarUltimosPedidos()
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error);
    }
}

app()
