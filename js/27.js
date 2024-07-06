// POO

/* Object Literal */
const producto = {
    nombre: 'Tbalet',
    precio: 500
}

/* Object Constructor */
function Producto(nombre, precio, disponible) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = disponible
}
const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('Laptop', 800)
const producto4 = new Producto('Celular', 800, false)
const producto5 = new Producto('Mouse', 500, true)

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);