

    // Selecciona todos los planetas y la estrella
    const planetas = document.querySelectorAll('.planeta');
    const estrella = document.querySelector('.estrella');
    const mensaje = document.getElementById('mensaje');

    // Selecciona un planeta al azar para ocultar la estrella detrás
    const randomIndex = Math.floor(Math.random() * planetas.length);
    const planetaConEstrella = planetas[randomIndex];

    // Agrega el evento de clic a los planetas
    planetas.forEach(planeta => {
        planeta.addEventListener('click', function() {
            if (planeta === planetaConEstrella) {
                estrella.style.display = 'block';
                planeta.style.display = 'none'; // Ocultar el planeta
                mensaje.textContent = '¡Felicidades! Encontraste la estrella';
                mensaje.style.color = '#FF6F61';
            } else {
                mensaje.textContent = 'Sigue buscando...';
                mensaje.style.color = '#888';
            }

        
        });
        planetaConEstrella.dataset.estrella = 'true';

    
    });


        // Función al hacer clic en un planeta
function manejarClic(e) {
    const planeta = e.currentTarget;

    // Comprobamos si el planeta tiene la estrella
    if (planeta.dataset.estrella === 'true') {
        mensaje.textContent = "¡Encontraste la estrella!";

        // Mostrar la estrella
        planeta.querySelector('.estrella').style.display = 'block';

        // Desactivar interacción con los planetas
        planetasJuego.forEach(planeta => {
            planeta.style.pointerEvents = 'none';
        });

        // Mostrar el botón de reinicio
        botonReiniciar.style.display = 'block';

    } else {
        mensaje.textContent = "¡Inténtalo de nuevo!";
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    inicializarJuego();
}

// Añadimos eventos a los planetas
planetasJuego.forEach(planeta => {
    planeta.addEventListener('click', manejarClic);
});

// Evento de reinicio
botonReiniciar.addEventListener('click', reiniciarJuego);

// Inicializar el juego al cargar la página
inicializarJuego();
   