
// Obtener el header
const header = document.getElementById('main-header');

// Función para añadir o quitar la clase sticky
const stickyHeader = () => {
    if (window.scrollY > 0) {
        header.classList.add('sticky'); // Añadir la clase sticky si se hace scroll
    } else {
        header.classList.remove('sticky'); // Quitar la clase sticky si se vuelve al top
    }
};

// Agregar el evento de scroll
window.addEventListener('scroll', stickyHeader);