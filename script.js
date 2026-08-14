function buildQuestionBank() {
  const pools = {
    historia: [
      { question: '¿En qué año cayó el Imperio Romano de Occidente?', answer: 476, unit: 'año' },
      { question: '¿En qué año terminó la Primera Guerra Mundial?', answer: 1918, unit: 'año' },
      { question: '¿En qué año comenzó la Revolución Francesa?', answer: 1789, unit: 'año' },
      { question: '¿En qué año cayó el Muro de Berlín?', answer: 1989, unit: 'año' },
      { question: '¿En qué año se descubrió América?', answer: 1492, unit: 'año' },
      { question: '¿En qué año se proclamó la Independencia de México?', answer: 1821, unit: 'año' },
      { question: '¿En qué año se produjo la caída de Constantinopla?', answer: 1453, unit: 'año' },
      { question: '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?', answer: 1896, unit: 'año' },
      { question: '¿En qué año se fundó Roma?', answer: 753, unit: 'año' },
      { question: '¿En qué año terminó la Segunda Guerra Mundial?', answer: 1945, unit: 'año' },
      { question: '¿En qué año se inauguró el Canal de Suez?', answer: 1869, unit: 'año' },
      { question: '¿En qué año se lanzó la primera versión de Windows?', answer: 1985, unit: 'año' },
      { question: '¿En qué año se celebró el primer Mundial de Fútbol?', answer: 1930, unit: 'año' },
      { question: '¿En qué año se fundó la ONU?', answer: 1945, unit: 'año' },
      { question: '¿Cuántos años duró la Guerra de los Cien Años?', answer: 116, unit: 'años' },
      { question: '¿Cuántos años tiene una centuria?', answer: 100, unit: 'años' },
      { question: '¿Cuántos años tiene un milenio?', answer: 1000, unit: 'años' },
      { question: '¿Cuántos años dura una década?', answer: 10, unit: 'años' },
      { question: '¿En qué año se firmó la Declaración de Independencia de EE. UU. ?', answer: 1776, unit: 'año' },
      { question: '¿En qué año fue la Revolución Francesa?', answer: 1789, unit: 'año' },
      { question: '¿En qué año se produjo el primer vuelo de los hermanos Wright?', answer: 1903, unit: 'año' },
      { question: '¿En qué año se fundó la Universidad de Salamanca?', answer: 1218, unit: 'año' },
      { question: '¿En qué año cayó la monarquía en Francia?', answer: 1792, unit: 'año' },
      { question: '¿En qué año se proclamó la Constitución de la República Francesa?', answer: 1791, unit: 'año' }
    ],
    curiosidades: [
      { question: '¿Cuántos continentes hay en el mundo?', answer: 7, unit: 'continentes' },
      { question: '¿Cuántos planetas tiene el sistema solar?', answer: 8, unit: 'planetas' },
      { question: '¿Cuántas letras tiene el alfabeto español?', answer: 27, unit: 'letras' },
      { question: '¿Cuántas patas tiene una araña?', answer: 8, unit: 'patas' },
      { question: '¿Cuántos jugadores forman un equipo de fútbol en el campo?', answer: 11, unit: 'jugadores' },
      { question: '¿Cuántos lados tiene un octágono?', answer: 8, unit: 'lados' },
      { question: '¿Cuántos países tiene Europa?', answer: 44, unit: 'países' },
      { question: '¿Cuántos países forman la Unión Europea?', answer: 27, unit: 'países' },
      { question: '¿Cuántos huesos tiene el cuerpo humano adulto?', answer: 206, unit: 'huesos' },
      { question: '¿Cuántas costillas tiene una persona adulta?', answer: 24, unit: 'costillas' },
      { question: '¿Cuántas horas tiene un día?', answer: 24, unit: 'horas' },
      { question: '¿Cuántos minutos tiene una hora?', answer: 60, unit: 'minutos' },
      { question: '¿Cuántos segundos tiene un minuto?', answer: 60, unit: 'segundos' },
      { question: '¿Cuántos días tiene una semana?', answer: 7, unit: 'días' },
      { question: '¿Cuántos días tiene un año bisiesto?', answer: 366, unit: 'días' },
      { question: '¿Cuántos lados tiene un icosaedro?', answer: 20, unit: 'lados' },
      { question: '¿Cuántos grados mide un ángulo recto?', answer: 90, unit: 'grados' },
      { question: '¿Cuántos países tiene el mundo?', answer: 195, unit: 'países' },
      { question: '¿Cuántos miembros tiene el cuerpo humano en total en las extremidades?', answer: 4, unit: 'extremidades' },
      { question: '¿Cuál es el código internacional de emergencia?', answer: 112, unit: 'código' },
      { question: '¿Cuántos litros tiene un metro cúbico?', answer: 1000, unit: 'litros' },
      { question: '¿Cuántas caras tiene un cubo?', answer: 6, unit: 'caras' },
      { question: '¿Cuántos segundos hay en una hora?', answer: 3600, unit: 'segundos' },
      { question: '¿Cuántos dientes permanentes tiene una persona adulta?', answer: 32, unit: 'dientes' }
    ],
    geografia: [
      { question: '¿Cuántos kilómetros mide la circunferencia ecuatorial de la Tierra?', answer: 40075, unit: 'km' },
      { question: '¿Cuántos metros mide la altura del Everest?', answer: 8848, unit: 'm' },
      { question: '¿Cuántos kilómetros de longitud tiene el río Amazonas aproximadamente?', answer: 6992, unit: 'km' },
      { question: '¿Cuántos kilómetros cuadrados tiene la superficie de Groenlandia?', answer: 2166086, unit: 'km²' },
      { question: '¿Cuántos metros de profundidad tiene el punto más profundo del océano?', answer: 10994, unit: 'm' },
      { question: '¿Cuántos kilómetros mide la frontera terrestre de España?', answer: 1920, unit: 'km' },
      { question: '¿Cuántos años tiene el desierto del Sahara aproximadamente?', answer: 5000000, unit: 'años' },
      { question: '¿Cuántos kilómetros atraviesa la Cordillera de los Andes aproximadamente?', answer: 7000, unit: 'km' },
      { question: '¿Cuántos metros de altura tiene la Torre Eiffel?', answer: 330, unit: 'm' },
      { question: '¿Cuántos kilómetros mide la longitud de la Gran Muralla China?', answer: 21196, unit: 'km' },
      { question: '¿Cuántos kilómetros tiene la carretera Panamericana en su ruta más larga?', answer: 48000, unit: 'km' },
      { question: '¿Cuántos kilómetros mide la frontera entre España y Francia?', answer: 623, unit: 'km' },
      { question: '¿Cuántos metros de altitud tiene el monte Kilimanjaro?', answer: 5895, unit: 'm' },
      { question: '¿Cuántos kilómetros mide la costa de la Península Ibérica?', answer: 3150, unit: 'km' },
      { question: '¿Cuántos millones de habitantes tiene la población mundial aproximadamente?', answer: 8000, unit: 'millones' }
    ],
    ciencia: [
      { question: '¿Cuál es el número atómico del hidrógeno?', answer: 1, unit: 'unidad' },
      { question: '¿Cuántos elementos tiene la tabla periódica actualmente?', answer: 118, unit: 'elementos' },
      { question: '¿Cuál es la velocidad de la luz en el vacío?', answer: 299792458, unit: 'm/s' },
      { question: '¿Cuántos cromosomas tiene un ser humano?', answer: 46, unit: 'cromosomas' },
      { question: '¿Cuántas caras tiene un cubo?', answer: 6, unit: 'caras' },
      { question: '¿Cuántas arestas tiene un cubo?', answer: 12, unit: 'aristas' },
      { question: '¿Cuántos lados tiene un pentágono?', answer: 5, unit: 'lados' },
      { question: '¿Cuál es la temperatura de ebullición del agua a nivel del mar?', answer: 100, unit: '°C' },
      { question: '¿Cuántos segundos hay en una hora?', answer: 3600, unit: 'segundos' },
      { question: '¿Cuántas horas tiene un día?', answer: 24, unit: 'horas' },
      { question: '¿Cuántos planetas del sistema solar son gaseosos?', answer: 4, unit: 'planetas' },
      { question: '¿Cuántas fases tiene la luna?', answer: 8, unit: 'fases' },
      { question: '¿Cuántos lados tiene un hexágono?', answer: 6, unit: 'lados' },
      { question: '¿Cuál es la temperatura normal del cuerpo humano en grados Celsius?', answer: 37, unit: '°C' },
      { question: '¿Cuántos gramos tiene un kilogramo?', answer: 1000, unit: 'g' }
    ],
    matematicas: [
      { question: '¿Cuánto es 12 × 15?', answer: 180, unit: 'unidades' },
      { question: '¿Cuánto es 27 × 9?', answer: 243, unit: 'unidades' },
      { question: '¿Cuánto es 64 ÷ 8?', answer: 8, unit: 'unidades' },
      { question: '¿Cuánto es 18²?', answer: 324, unit: 'unidades' },
      { question: '¿Cuánto es 13 × 13?', answer: 169, unit: 'unidades' },
      { question: '¿Cuánto es 7 × 9?', answer: 63, unit: 'unidades' },
      { question: '¿Cuánto es 24 × 12?', answer: 288, unit: 'unidades' },
      { question: '¿Cuánto es 33 × 11?', answer: 363, unit: 'unidades' },
      { question: '¿Cuánto es 9³?', answer: 729, unit: 'unidades' },
      { question: '¿Cuánto es 17 × 19?', answer: 323, unit: 'unidades' },
      { question: '¿Cuánto es 125 ÷ 5?', answer: 25, unit: 'unidades' },
      { question: '¿Cuánto es 21 × 14?', answer: 294, unit: 'unidades' },
      { question: '¿Cuánto es 16²?', answer: 256, unit: 'unidades' },
      { question: '¿Cuánto es 31 × 31?', answer: 961, unit: 'unidades' },
      { question: '¿Cuánto es 45 × 7?', answer: 315, unit: 'unidades' }
    ]
  };

  const questionPool = [
    ...pools.historia,
    ...pools.curiosidades,
    ...pools.geografia,
    ...pools.ciencia,
    ...pools.matematicas
  ];

  const bank = [];
  const seen = new Set();

  while (bank.length < 1000) {
    const item = questionPool[Math.floor(Math.random() * questionPool.length)];
    const key = `${item.question}|${item.answer}`;

    if (!seen.has(key)) {
      seen.add(key);
      bank.push({ ...item });
    }

    if (seen.size >= questionPool.length) {
      break;
    }
  }

  while (bank.length < 1000) {
    const item = questionPool[Math.floor(Math.random() * questionPool.length)];
    bank.push({ ...item });
  }

  return bank;
}

const questions = buildQuestionBank();
const questionText = document.getElementById('questionText');
const answerText = document.getElementById('answerText');
const answerBox = document.getElementById('answerBox');
const generateBtn = document.getElementById('generateBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const objectText = document.getElementById('objectText');
const modeButtons = document.querySelectorAll('.mode-btn');
const panels = document.querySelectorAll('.panel');

const everydayObjects = [
  'llave', 'botella', 'martillo', 'lápiz', 'cuchara', 'vaso', 'monedero', 'almohada',
  'tenedor', 'guante', 'zapatilla', 'tarjeta', 'rotulador', 'bastón', 'mochila',
  'plancha', 'espejo', 'reloj', 'caja', 'cargador', 'taza', 'pijama', 'manzana',
  'libro', 'gafas', 'cinta', 'candado', 'micrófono', 'tijeras', 'linterna', 'cuchillo'
];

let currentQuestion = null;
let currentObject = null;

function pickRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];
  questionText.textContent = currentQuestion.question;
  answerBox.classList.add('hidden');
  answerText.textContent = '0';
}

function showAnswer() {
  if (!currentQuestion) {
    questionText.textContent = 'Primero genera una pregunta para poder ver la respuesta.';
    return;
  }

  answerText.textContent = `${currentQuestion.answer.toLocaleString()} ${currentQuestion.unit}`;
  answerBox.classList.remove('hidden');
}

function generateObject() {
  const randomIndex = Math.floor(Math.random() * everydayObjects.length);
  currentObject = everydayObjects[randomIndex];
  objectText.textContent = currentObject;
}

function setMode(mode) {
  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle('active', isActive);
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `${mode}-panel`;
    panel.classList.toggle('active', isActive);
  });
}

generateBtn.addEventListener('click', pickRandomQuestion);
showAnswerBtn.addEventListener('click', showAnswer);
generateObjectBtn.addEventListener('click', generateObject);
modeButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

setMode('questions');

