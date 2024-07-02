// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', Precio: 500 },
    { nombre: 'Television 50 Pulgadas', Precio: 700 },
    { nombre: 'tablet', Precio: 300 },
    { nombre: 'Audifinos', Precio: 200 },
    { nombre: 'Teclado', Precio: 50 },
    { nombre: 'Celular', Precio: 500 },
    { nombre: 'Bocinas', Precio: 300 },
    { nombre: 'Laptop', Precio: 800 },
]

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

// Includes
let resultado = meses.includes('Diciembre')

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular PRO'
})

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.Precio
}, 0)


// Filter
resultado = carrito.filter(function(producto) {
    return producto.Precio > 400
})

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
})

console.log(resultado);

