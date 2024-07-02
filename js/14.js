// Arreglos o Arrays

const numeros = [10, 20, 30, 40 ,50]


// const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'Juan', trabajo: 'Programador'}, [1,2,3]]

// console.table(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);


// Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero) {
//     console.log(numero);
// })

// Metodos
numeros.push(60, 70, 80) // Al final del arreglo
numeros.unshift(-10, -20, -30) // Al incio del arreglo


console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

// meses.pop() // Elimina el ultimo elemento
// meses.shift() // Elimina el primer elemento

// meses.splice(2, 1)
// console.log(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio']
console.log(nuevoArreglo);

