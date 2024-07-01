// "use strict" // Correr JS en modo estricto
// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true
}

Object.seal(producto) // .freeze .seal

producto.precio = 'Nuevo Precio'

console.log(producto);