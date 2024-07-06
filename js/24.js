// For Loop

/* for( let i = 0; i < 10; i++) {
    console.log(i);
} */

// for( let i = 1; i <= 100; i++) {
//     if( i % 2 == 0) {
//         console.log(`El Numero ${i} es par`);
//     } else {
//         console.log(`El Numero ${i} es impar`);
//     }
// }

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

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// While Loop

// let i = 20 // Indice

// while(i < 10) { // Condicion

//     console.log('Desde el while loop');

//     i++ // Incremento
// }


// Do While Loop

let i = 0

do {
    console.log(i);

    i++ // Incremento
} while( i < 10)