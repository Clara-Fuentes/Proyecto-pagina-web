const planetasJuego = document.querySelectorAll('.contenedor-planeta'); // Contenedor de cada planeta
const mensaje = document.getElementById('mensaje');
const botonReiniciar = document.getElementById('reiniciar');

let planetaConEstrella = null;

// Función para inicializar el juego
function inicializarJuego() {
    // Escoge un planeta al azar para esconder la estrella
    const planetaAleatorio = Math.floor(Math.random() * planetasJuego.length);
    planetaConEstrella = planetasJuego[planetaAleatorio];

    // Escondemos la estrella y reseteamos el mensaje
    planetasJuego.forEach(planeta => {
        planeta.querySelector('.planeta').style.border = 'none'; // Reinicia los bordes
        planeta.dataset.estrella = 'false'; // Remueve cualquier estrella previa
    });

    // Coloca la estrella en el planeta seleccionado
    planetaConEstrella.dataset.estrella = 'true';

    // Reset del mensaje y ocultamos el botón de reinicio
    mensaje.textContent = '';
    //botonReiniciar.style.display = 'none';

    // Reactivamos la interacción con los planetas
    planetasJuego.forEach(planeta => {
        planeta.style.pointerEvents = 'auto';
    });
}

// Función al hacer clic en un planeta
function manejarClic(e) {
    const planeta = e.currentTarget;
    
    // Comprobamos si el planeta tiene la estrella
    if (planeta.dataset.estrella === 'true') {
        mensaje.textContent = "¡Encontraste la estrella!";
        
        // Mostramos la estrella en el planeta correcto 
        planeta.querySelector('.planeta').style.border = '3px solid gold';
        
        // Desactivamos la interacción con los planetas
        planetasJuego.forEach(planeta => {
            planeta.style.pointerEvents = 'none';
        });

        // Mostramos el botón de reinicio
        botonReiniciar.style.display = 'block';
        
    } else {
        mensaje.textContent = "¡Inténtalo de nuevo!";
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    inicializarJuego(); // Reinicializamos el juego
}

// Añadimos eventos a los planetas
planetasJuego.forEach(planeta => {
    planeta.addEventListener('click', manejarClic);
});

// Evento de reinicio
botonReiniciar.addEventListener('click', reiniciarJuego);

// Inicializar el juego al cargar la página
inicializarJuego();