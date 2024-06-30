// Strings o Cadenas de Texto

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"
const producto2 = 'Monitor HD'
/* const producto2 = String('Monitor 30 Pulgadas')
const producto3 = new String('Monitor 50 Pulgadas') */

// Length es para la extension
console.log(tweet.length);
console.log(producto2);
/* console.log(producto2);
console.log(producto3); */

// IndexOf (Retorna posicion)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

// Include (Retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));