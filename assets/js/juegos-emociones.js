document.addEventListener("DOMContentLoaded", () => {
    // Obtener elementos del DOM
    const gameBubbles = document.querySelectorAll(".game-bubble");
    const gameModal = document.getElementById("gameModal");
    const modalGameIframe = document.getElementById("modalGameIframe");
    const gameClose = document.getElementById("gameClose");
  
    // Función para abrir el modal y cargar el juego
    function openGameModal(url) {
      modalGameIframe.src = url;
      gameModal.style.display = "flex";
    }
  
    // Función para cerrar el modal y limpiar el iframe
    function closeGameModal() {
      modalGameIframe.src = ""; // Limpiar el src para detener el video
      gameModal.style.display = "none";
    }
  
    // Añadir evento de click a cada burbuja de juego
    gameBubbles.forEach(bubble => {
      bubble.addEventListener("click", () => {
        const gameSrc = bubble.getAttribute("data-game-src");
        openGameModal(gameSrc);
      });
    });
  
    // Añadir evento de click al botón de cerrar modal
    gameClose.addEventListener("click", closeGameModal);
  
    // Cerrar el modal cuando se hace clic fuera del iframe
    gameModal.addEventListener("click", (e) => {
      if (e.target === gameModal) {
        closeGameModal();
      }
    });
  });