// POO

/* Object Literal */
const producto = {
    nombre: 'Tbalet',
    precio: 500
}

/* Object Constructor */
function Cliente(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`
}


function Producto(nombre, precio, disponible) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = disponible
}
// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`
}

const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('Laptop', 800)
const producto4 = new Producto('Celular', 800, false)
const producto5 = new Producto('Mouse', 500, true)
const cliente = new Cliente('Ivan', 'Guerrero')
console.log(cliente);


console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4);
console.log(producto5);

