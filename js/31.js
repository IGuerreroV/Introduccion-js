
const boton = document.querySelector('#boton')

boton.addEventListener('click', function() {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
    
})


if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion', {
        icon: 'img/nn.jpg',
        body: 'Codigo con Juan, los mejores tutoriales'
    })
}