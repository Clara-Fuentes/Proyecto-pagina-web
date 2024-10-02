
const datosCuriosos = [
    "Los volcanes pueden crecer hasta 10 cm en un solo día cuando están activos.",
    "El bicarbonato y el vinagre crean una reacción química que produce dióxido de carbono.",
    "La leche mágica utiliza tensiones superficiales para crear sus efectos.",
	"El hierro que se encuentra en nuestra sangre se originó en estrellas que explotaron hace miles de millones de años.",
	"El núcleo de la Tierra está tan caliente como la superficie del Sol, con temperaturas que alcanzan los 5,500°C.",
	"La Gran Muralla China no es visible desde el espacio, pero sí lo son las ciudades iluminadas por la noche.",
	"Las computadoras modernas pueden realizar más de mil millones de cálculos por segundo.",
	"La primera persona en viajar al espacio fue Yuri Gagarin, un astronauta soviético, en 1961.",
	"Las montañas más altas del sistema solar están en Marte; el Monte Olimpo tiene tres veces la altura del Everest.",
	"Un solo rayo puede calentar el aire a su alrededor a una temperatura cinco veces mayor que la superficie del Sol.",
	"El grafeno, un material hecho de una sola capa de átomos de carbono, es 200 veces más fuerte que el acero y más ligero que el papel.",
	"La energía solar que llega a la Tierra en una hora es suficiente para abastecer las necesidades energéticas del planeta durante un año.",
	"El Tiranosaurio Rex vivió más cerca en el tiempo de los humanos que de los estegosaurios.",
    "La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en llegar a la Tierra.",
    "Los agujeros negros pueden ser tan pequeños como un átomo, pero contener la masa de una montaña.",
   
];

function cambiarHecho() {
    const hechoCurioso = document.getElementById('hecho-curioso');
    const randomIndex = Math.floor(Math.random() * datosCuriosos.length);
    hechoCurioso.textContent = datosCuriosos[randomIndex];
}