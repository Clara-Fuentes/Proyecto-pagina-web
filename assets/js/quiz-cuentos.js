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
    { pregunta: "¿Qué personaje es el protagonista de 'Juan sin miedo'?", opciones: ["Juan", "Pedro", "Carlos", "Miguel"], respuesta: 0 },
    { pregunta: "¿Cuál es el animal desobediente?", opciones: ["El tigre", "El pato", "El ratón", "El oso"], respuesta: 0 },
    { pregunta: "¿Quién ayudó a los tres cerditos?", opciones: ["El lobo", "La mamá cerdito", "El ratón", "Nadie"], respuesta: 1 },
    { pregunta: "¿Qué animal tenía miedo en la historia?", opciones: ["El ratón", "El león", "El pato", "El tigre"], respuesta: 0 },
    { pregunta: "¿Cuál es el nombre de la princesa en 'Rapunzel'?", opciones: ["Cenicienta", "Blanca Nieves", "Rapunzel", "Bella"], respuesta: 2 },
    { pregunta: "¿Qué objeto dejó Cenicienta en el baile?", opciones: ["Collar", "Zapato", "Sombrero", "Anillo"], respuesta: 1 },
    { pregunta: "¿Quién quería comer a Caperucita Roja?", opciones: ["Un oso", "Un lobo", "Un tigre", "Un zorro"], respuesta: 1 },
    { pregunta: "¿Qué animal se hizo amigo del ratón?", opciones: ["León", "Tigre", "Elefante", "Oso"], respuesta: 0 },
    { pregunta: "¿Cuál era el color de la capucha de Caperucita?", opciones: ["Azul", "Rojo", "Verde", "Amarillo"], respuesta: 1 },
    { pregunta: "¿Quién vivía en una casita de chocolate?", opciones: ["Hansel y Gretel", "Rapunzel", "Cenicienta", "Blanca Nieves"], respuesta: 0 }
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
    mensajeResultado.textContent = "¡Haz completado el Quiz! ¡Obtuviste " + puntaje + " de " + preguntas.length + " puntos!";
}

function reiniciarQuiz() {
    pantallaResultado.classList.add("pantalla-oculta");
    document.getElementById("inicio-quiz").classList.remove("pantalla-oculta");
}

botonInicio.addEventListener("click", iniciarQuiz);
botonReintentar.addEventListener("click", reiniciarQuiz);