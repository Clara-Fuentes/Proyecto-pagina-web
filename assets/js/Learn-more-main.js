
const learnMore = document.getElementById('learn-more');
const textComplete = document.getElementById('text-complete');

learnMore.addEventListener('click', function() {
    if (textComplete.style.display === "none") {
        textComplete.style.display = "block";
        learnMore.textContent = "Leer menos"; // Cambia el texto del botón
    } else {
        textComplete.style.display = "none";
        learnMore.textContent = "Leer más"; // Restaura el texto del botón
    }
});