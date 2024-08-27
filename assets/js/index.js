

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
                mensaje.textContent = '¡Felicidades! Encontraste la estrella 🎉';
                mensaje.style.color = '#FF6F61';
            } else {
                mensaje.textContent = 'Sigue buscando...';
                mensaje.style.color = '#888';
            }
        });
    });
   