// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10)

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);


aprendiendo('JavaScript')




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
meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

let resultado

// Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre == 'Celular')

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.Precio, 0)

// Filter
resultado = carrito.filter( producto => producto.Precio > 400)

resultado = carrito.filter( producto => producto.nombre !== 'Celular')

console.log(resultado);