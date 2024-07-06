// This
/* Nota: Con arrow functions hace referencia a la ventana windows el this. */
const reservacion = {
    nombre: 'Ivan',
    apellido: 'Guerrero',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Guerrero',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion()
reservacion2.informacion()