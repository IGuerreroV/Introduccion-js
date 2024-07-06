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

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '920471251751')
console.log(libro.formatearProducto());

console.log(producto2.formatearProducto());
