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

// ForEach = para iterar o mostrar en consola

const arreglo1 = carrito.forEach(producto => console.log( producto.nombre))

// Map = Crear nuevo arreglo

const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.Precio}`)

console.log(arreglo2);
