
// Seleccionar el modal y el botón de inicio
const welcomeModal = document.getElementById("welcomeModal");
const startBtn = document.getElementById("startBtn");

// Mostrar el modal al cargar la página
window.onload = function() {
  welcomeModal.classList.remove("custom-hidden");
};

// Ocultar el modal cuando se hace clic en el botón
startBtn.addEventListener("click", function() {
  welcomeModal.classList.add("custom-hidden");
});