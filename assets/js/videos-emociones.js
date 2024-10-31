document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');
    const modal = document.getElementById('videoModal');
    const modalIframe = document.getElementById('modalIframe');
    const closeModalButton = document.querySelector('.video-close');
  
    // Añadir evento de clic a cada tarjeta de video
    videoCards.forEach(card => {
      card.addEventListener('click', () => {
        const videoSrc = card.getAttribute('data-video-src');
        modalIframe.src = videoSrc; // Asigna la fuente del video en el iframe
        modal.classList.remove('hidden'); // Muestra el modal
      });
    });
  
    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
      modalIframe.src = ''; // Detiene el video eliminando la fuente
    });
  
    // Cerrar el modal al hacer clic fuera del iframe
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.add('hidden');
        modalIframe.src = '';
      }
    });
  });