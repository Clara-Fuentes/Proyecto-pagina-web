// Abre el modal y establece el video
const cuentoCards = document.querySelectorAll('.cuento-card');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

cuentoCards.forEach(card => {
  card.querySelector('.view-button').addEventListener('click', () => {
    const videoSrc = card.getAttribute('data-video');
    modalVideo.src = videoSrc;
    videoModal.style.display = 'flex';
    videoModal.setAttribute('aria-hidden', 'false');
  });
});

// Cierra el modal y detiene el video
function closeModal() {
  videoModal.style.display = 'none';
  modalVideo.src = '';
  videoModal.setAttribute('aria-hidden', 'true');
}

// Permitir cerrar el modal con clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    closeModal();
  }
});

// Permitir cerrar el modal con la tecla Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoModal.style.display === 'flex') {
    closeModal();
  }
});