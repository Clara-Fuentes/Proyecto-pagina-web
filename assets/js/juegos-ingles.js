const parejasCards = [
    { id: 1, content: 'Dog', type: 'word' },
    { id: 2, content: 'Cat', type: 'word' },
    { id: 3, content: 'Bird', type: 'word' },
    { id: 4, content: 'Fish', type: 'word' },
    { id: 5, content: '🐶', type: 'image', match: 'Dog' },
    { id: 6, content: '🐱', type: 'image', match: 'Cat' },
    { id: 7, content: '🐦', type: 'image', match: 'Bird' },
    { id: 8, content: '🐟', type: 'image', match: 'Fish' },
    { id: 9, content: 'Turtle', type: 'word' },  // Nuevo animal: Tortuga
    { id: 10, content: '🐢', type: 'image', match: 'Turtle' } // Emoji para la tortuga
];

let parejasSelectedCards = [];
let parejasMatchedPairs = 0;

function parejasShuffleCards() {
    return parejasCards.sort(() => Math.random() - 0.5);
}

function parejasCreateCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('parejas-card');
    cardElement.textContent = card.content;
    cardElement.dataset.type = card.type;
    cardElement.dataset.match = card.type === 'word' ? card.content : card.match;

    cardElement.addEventListener('click', () => parejasHandleCardClick(cardElement));
    return cardElement;
}

function parejasHandleCardClick(card) {
    if (parejasSelectedCards.length < 2 && !card.classList.contains('matched') && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        parejasSelectedCards.push(card);

        if (parejasSelectedCards.length === 2) {
            parejasCheckForMatch();
        }
    }
}

function parejasCheckForMatch() {
    const [firstCard, secondCard] = parejasSelectedCards;
    if (firstCard.dataset.match === secondCard.dataset.match) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        parejasMatchedPairs++;

        if (parejasMatchedPairs === parejasCards.length / 2) {
            setTimeout(() => alert('¡Ganaste! Encontraste todas las parejas.'), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        }, 1000);
    }
    parejasSelectedCards = [];
}

function parejasInitializeGame() {
    const gameContainer = document.getElementById('parejasGameContainer');
    gameContainer.innerHTML = '';  // Limpia el contenedor para reiniciar el juego
    parejasSelectedCards = [];
    parejasMatchedPairs = 0;
    const shuffledCards = parejasShuffleCards();
    shuffledCards.forEach(card => gameContainer.appendChild(parejasCreateCard(card)));
}

function parejasReiniciarJuego() {
    parejasInitializeGame();
}

// Inicializa el juego la primera vez
parejasInitializeGame();