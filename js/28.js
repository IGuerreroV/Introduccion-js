// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de $${this.precio}`
    }
    formatearPrecio() {
        return `El precio del producto es ${this.precio}`
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('Laptop', 800)

console.log(producto2.formatearPrecio());
console.log(producto3);