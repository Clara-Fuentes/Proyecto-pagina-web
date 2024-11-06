// Selección de elementos del DOM
const topicCards = document.querySelectorAll(".topic-card");
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const closeModal = document.getElementById("closeModalTemas");

// Agregar evento de clic a cada tarjeta de tema
topicCards.forEach(card => {
  card.addEventListener("click", () => {
    const videoUrl = card.getAttribute("data-video");
    if (videoUrl) {
      videoPlayer.src = videoUrl;
      videoModal.classList.remove("custom-hidden-temas");
      videoModal.setAttribute("aria-hidden", "false");
    }
  });
});

// Cerrar el modal y detener el video
closeModal.addEventListener("click", () => {
  closeModalFunction();
});

function closeModalFunction() {
  videoModal.classList.add("custom-hidden-temas");
  videoModal.setAttribute("aria-hidden", "true");
  videoPlayer.src = ""; // Detener el video
}

// Cerrar el modal cuando se hace clic fuera de la ventana de contenido
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    closeModalFunction();
  }
});