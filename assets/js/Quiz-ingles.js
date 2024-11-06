const botonInicio = document.getElementById("boton-inicio");
const pantallaQuiz = document.getElementById("pantalla-quiz");
const textoPregunta = document.getElementById("texto-pregunta");
const opcionesBotones = document.querySelectorAll(".btn-opcion");
const pantallaResultado = document.getElementById("pantalla-resultado");
const mensajeResultado = document.getElementById("mensaje-resultado");
const botonReintentar = document.getElementById("boton-reintentar");

let indicePreguntaActual = 0;
let puntaje = 0;

const preguntas = [
    { pregunta: "¿Cuál es el color de la manzana?", opciones: ["Rojo", "Azul", "Verde", "Amarillo"], respuesta: 0 },
    { pregunta: "¿Cuál de estos es un saludo en inglés?", opciones: ["Hola", "Hello", "Adiós", "Por favor"], respuesta: 1 },
    { pregunta: "¿Cómo se dice 'familia' en inglés?", opciones: ["Family", "Friends", "Father", "Sister"], respuesta: 0 },
    { pregunta: "¿Cuántos días tiene una semana?", opciones: ["Cinco", "Seis", "Siete", "Ocho"], respuesta: 2 },
    { pregunta: "¿Qué fruta es de color amarillo?", opciones: ["Manzana", "Naranja", "Banana", "Uva"], respuesta: 2 },
    { pregunta: "¿Cuál es el pronombre en inglés para 'yo'?", opciones: ["You", "I", "He", "She"], respuesta: 1 },
    { pregunta: "¿Cuál es el verbo 'to be' en la forma correcta para 'he'?", opciones: ["Am", "Are", "Is", "Be"], respuesta: 2 },
    { pregunta: "¿Qué número es 'ten' en inglés?", opciones: ["10", "11", "12", "20"], respuesta: 0 },
    { pregunta: "¿Cuál es la emoción que significa 'feliz' en inglés?", opciones: ["Sad", "Angry", "Happy", "Tired"], respuesta: 2 },
    { pregunta: "¿Cómo se dice 'rojo' en inglés?", opciones: ["Blue", "Green", "Red", "Yellow"], respuesta: 2 },
    { pregunta: "¿Qué letra viene después de la 'C' en el abecedario?", opciones: ["B", "D", "E", "F"], respuesta: 1 },
    { pregunta: "¿Cuál es la palabra en inglés para 'zapatos'?", opciones: ["Shirt", "Shoes", "Hat", "Pants"], respuesta: 1 },
    { pregunta: "¿Cuál de estos es un miembro de la familia?", opciones: ["Table", "Sister", "Car", "Chair"], respuesta: 1 },
    { pregunta: "¿Cuál es la comida que en inglés se llama 'bread'?", opciones: ["Pan", "Leche", "Queso", "Manzana"], respuesta: 0 },
    { pregunta: "¿Qué fruta en inglés se llama 'grape'?", opciones: ["Naranja", "Plátano", "Uva", "Melón"], respuesta: 2 },
    { pregunta: "¿Cuál es el pronombre en inglés para 'ellos'?", opciones: ["We", "They", "He", "She"], respuesta: 1 },
    { pregunta: "¿Cómo se dice 'lunes' en inglés?", opciones: ["Tuesday", "Sunday", "Saturday", "Monday"], respuesta: 3 },
    { pregunta: "¿Qué emoción en inglés significa 'triste'?", opciones: ["Happy", "Sad", "Excited", "Scared"], respuesta: 1 },
    { pregunta: "¿Cuál es el verbo 'to be' en la forma correcta para 'I'?", opciones: ["Am", "Is", "Are", "Be"], respuesta: 0 },
    { pregunta: "¿Cuál es el color de una 'naranja' en inglés?", opciones: ["Red", "Purple", "Orange", "Green"], respuesta: 2 },
    { pregunta: "¿Cuál es la palabra en inglés para 'camisa'?", opciones: ["Pants", "Shoes", "Shirt", "Hat"], respuesta: 2 },
    { pregunta: "¿Qué número es 'five' en inglés?", opciones: ["4", "5", "6", "7"], respuesta: 1 },
    { pregunta: "¿Cómo se dice 'gracias' en inglés?", opciones: ["Thank you", "Goodbye", "Hello", "Please"], respuesta: 0 },
    { pregunta: "¿Cuál de estas palabras es un pronombre en inglés?", opciones: ["Cat", "Dog", "He", "Car"], respuesta: 2 },
    { pregunta: "¿Cuál es el color que en inglés se llama 'green'?", opciones: ["Azul", "Rojo", "Verde", "Amarillo"], respuesta: 2 }
];

function iniciarQuiz() {
    indicePreguntaActual = 0;
    puntaje = 0;
    pantallaQuiz.classList.remove("pantalla-oculta");
    document.getElementById("inicio-quiz").classList.add("pantalla-oculta");
    mostrarPregunta();
}

function mostrarPregunta() {
    const preguntaActual = preguntas[indicePreguntaActual];
    textoPregunta.textContent = preguntaActual.pregunta;
    opcionesBotones.forEach((boton, index) => {
        boton.textContent = preguntaActual.opciones[index];
    });
}

function verificarRespuesta(indiceOpcion) {
    const preguntaActual = preguntas[indicePreguntaActual];
    if (indiceOpcion === preguntaActual.respuesta) {
        puntaje++;
    }
    indicePreguntaActual++;
    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    pantallaQuiz.classList.add("pantalla-oculta");
    pantallaResultado.classList.remove("pantalla-oculta");
    let resultadoMensaje = "";

    if (puntaje === preguntas.length) {
        resultadoMensaje = `¡Excelente! Felicidades, has respondido todas correctamente. Sigue aprendiendo, eres increíble.`;
    } else if (puntaje >= 12) {
        resultadoMensaje = `Muy bien! Has sacado ${puntaje} de ${preguntas.length}. Estás muy cerca de ser un experto, sigue así.`;
    } else {
        resultadoMensaje = `Buen intento! Has sacado ${puntaje} de ${preguntas.length}. Sigue practicando y pronto lo lograrás.`;
    }

    mensajeResultado.textContent = resultadoMensaje;
}

function reiniciarQuiz() {
    pantallaResultado.classList.add("pantalla-oculta");
    document.getElementById("inicio-quiz").classList.remove("pantalla-oculta");
}

botonInicio.addEventListener("click", iniciarQuiz);
botonReintentar.addEventListener("click", reiniciarQuiz);