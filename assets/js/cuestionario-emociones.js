const questions = document.querySelectorAll('.question-card');
let currentQuestion = 0;

function showNextQuestion() {
  // Ocultar pregunta actual
  questions[currentQuestion].classList.remove('active');
  currentQuestion++;

  if (currentQuestion < questions.length) {
    // Mostrar la siguiente pregunta
    questions[currentQuestion].classList.add('active');
  } else {
    // Mostrar mensaje final
    document.querySelector('.quiz-end').classList.add('active');
  }
}

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', showNextQuestion);
});

function restartQuiz() {
  document.querySelector('.quiz-end').classList.remove('active');
  currentQuestion = 0;
  questions.forEach((question, index) => {
    if (index === 0) {
      question.classList.add('active');
    } else {
      question.classList.remove('active');
    }
  });
}