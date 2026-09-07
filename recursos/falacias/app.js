/* ============================================================
   app.js — Adivina el tipo de Falacia
   60 cartas · 6 falacias · 10 ciclos aleatorios
   ============================================================ */

// ── Fallacy data ─────────────────────────────────────────────
const FALLACIES = [
  {
    key: "hominem",
    name: "Ad Hominem",
    subtitle: "Ataque a la persona",
    cssClass: "back-hominem",
    emojis: ["😤", "🗣️", "👊", "💢", "🎭", "😡", "🤬", "👎", "🪞", "🎯"],
    examples: [
      {
        text: "\"No puedes hablar de cambio climático, ¡si ni siquiera terminaste la universidad!\"",
        explanation: "En lugar de refutar el argumento sobre el cambio climático, se ataca la formación académica de la persona."
      },
      {
        text: "\"¿Tú dando consejos de salud? Pero si estás gordo.\"",
        explanation: "Se descalifica el consejo atacando la apariencia física de quien lo da, sin evaluar si el consejo es válido."
      },
      {
        text: "\"Claro que defiende a los pobres, ¡si él es un fracasado económico!\"",
        explanation: "Se ataca la situación económica del interlocutor en vez de debatir sus argumentos sobre la pobreza."
      },
      {
        text: "\"No le hagas caso a María sobre política, ella es muy joven para entender.\"",
        explanation: "Se usa la edad de María como razón para invalidar su opinión política sin considerar sus argumentos."
      },
      {
        text: "\"¿Y tú hablas de honestidad? ¡Si te cacharon copiando en un examen hace 5 años!\"",
        explanation: "Se desentierra un error pasado para descalificar a la persona en vez de responder a su argumento actual."
      },
      {
        text: "\"No voy a debatir contigo sobre feminismo, eres hombre y no puedes opinar.\"",
        explanation: "Se rechaza el argumento basándose en el género del interlocutor, no en la calidad de sus razones."
      },
      {
        text: "\"Ese político habla de combatir la corrupción, pero él es divorciado. ¿Qué valores tiene?\"",
        explanation: "Se mezcla la vida personal del político con su propuesta anticorrupción, que son temas independientes."
      },
      {
        text: "\"No confío en su investigación sobre vacunas, es de un país del tercer mundo.\"",
        explanation: "Se desacredita la investigación por el origen del investigador, sin evaluar su metodología científica."
      },
      {
        text: "\"Dice que leer es importante, pero yo lo vi jugando videojuegos toda la noche.\"",
        explanation: "Se señala una supuesta hipocresía para invalidar el argumento, cuando el consejo puede ser válido independientemente."
      },
      {
        text: "\"¿Cómo vas a hablar de derechos animales si usas zapatos de cuero?\"",
        explanation: "Se ataca una contradicción percibida en la persona para evadir discutir el tema de los derechos animales."
      }
    ]
  },
  {
    key: "verecundiam",
    name: "Ad Verecundiam",
    subtitle: "Argumento de supuesta autoridad",
    cssClass: "back-verecundiam",
    emojis: ["🏆", "👨‍⚕️", "📺", "⭐", "🎓", "📢", "🤩", "🧑‍🔬", "📰", "👑"],
    examples: [
      {
        text: "\"Esta crema facial es la mejor, ¡la recomienda una actriz famosa de Hollywood!\"",
        explanation: "Una actriz no es experta en dermatología; su fama no valida la calidad del producto."
      },
      {
        text: "\"Einstein creía en Dios, así que Dios existe.\"",
        explanation: "Einstein era físico, no teólogo. Su genialidad en física no lo convierte en autoridad en temas religiosos."
      },
      {
        text: "\"Un futbolista famoso dice que esta marca de autos es la mejor, así que debe serlo.\"",
        explanation: "Ser buen futbolista no otorga conocimiento sobre ingeniería automotriz."
      },
      {
        text: "\"Mi profesor de matemáticas dice que las dietas veganas son malas, así que no seré vegano.\"",
        explanation: "Un profesor de matemáticas no tiene autoridad en nutrición; su opinión no es equivalente a evidencia."
      },
      {
        text: "\"Este suplemento funciona porque un influencer con millones de seguidores lo promociona.\"",
        explanation: "La cantidad de seguidores no equivale a conocimiento científico sobre suplementos alimenticios."
      },
      {
        text: "\"Un premio Nobel de Química dice que la homeopatía funciona, así que es verdad.\"",
        explanation: "Un Nobel de Química no es automáticamente experto en medicina; su opinión fuera de su campo no es autoridad."
      },
      {
        text: "\"Steve Jobs dijo que las universidades no sirven, así que no estudiaré.\"",
        explanation: "Jobs fue exitoso sin título, pero eso no lo convierte en autoridad educativa para todos los casos."
      },
      {
        text: "\"Un cantante famoso dice que las pirámides fueron hechas por extraterrestres. ¡Debe ser cierto!\"",
        explanation: "La fama musical no otorga conocimiento arqueológico ni histórico."
      },
      {
        text: "\"Mi abuela dice que el limón cura el cáncer. Ella tiene 90 años y sabe mucho de la vida.\"",
        explanation: "La experiencia de vida no equivale a conocimiento médico. La edad no valida afirmaciones de salud."
      },
      {
        text: "\"Un astronauta dice que la Tierra es plana en una entrevista, así que debemos reconsiderarlo.\"",
        explanation: "Aunque un astronauta tiene experiencia en el espacio, una afirmación así contradice toda la evidencia científica."
      }
    ]
  },
  {
    key: "populum",
    name: "Ad Populum",
    subtitle: "El valor de la mayoría",
    cssClass: "back-populum",
    emojis: ["👥", "📊", "🌍", "✋", "🗳️", "📣", "🤝", "🏟️", "👫", "🫂"],
    examples: [
      {
        text: "\"Millones de personas compran este producto, ¡no pueden estar todos equivocados!\"",
        explanation: "La popularidad de un producto no garantiza su calidad. Millones también han comprado productos dañinos."
      },
      {
        text: "\"Todo el mundo cree que los horóscopos son reales, algo de verdad tendrán.\"",
        explanation: "Que muchas personas crean algo no lo convierte en verdad; la ciencia no se determina por votación."
      },
      {
        text: "\"Si la mayoría de mis compañeros copia en los exámenes, no puede ser tan malo.\"",
        explanation: "Que un comportamiento sea común no lo hace moralmente aceptable."
      },
      {
        text: "\"Esa red social tiene mil millones de usuarios. Es obvio que es la mejor.\"",
        explanation: "La cantidad de usuarios no determina la calidad; puede haber razones como monopolio o falta de alternativas."
      },
      {
        text: "\"En mi país todos piensan que los inmigrantes son un problema, así que lo son.\"",
        explanation: "El consenso popular no equivale a un análisis riguroso de la realidad migratoria."
      },
      {
        text: "\"Esta película recaudó $2 mil millones. Es la mejor película de la historia.\"",
        explanation: "La recaudación refleja popularidad comercial, no necesariamente calidad artística o narrativa."
      },
      {
        text: "\"Todos en mi familia votan por ese partido. Debe ser el correcto.\"",
        explanation: "La tradición familiar no es un argumento válido para justificar una elección política."
      },
      {
        text: "\"McDonald's es el mejor restaurante del mundo porque es el que más vende.\"",
        explanation: "Las ventas masivas se deben a precio y accesibilidad, no necesariamente a calidad gastronómica."
      },
      {
        text: "\"Si tantas culturas antiguas creían en fantasmas, algo real debe haber detrás.\"",
        explanation: "La creencia extendida en diferentes culturas no constituye evidencia empírica de fenómenos sobrenaturales."
      },
      {
        text: "\"Ese video tiene 50 millones de vistas. La información que da debe ser confiable.\"",
        explanation: "La viralidad no es indicador de veracidad; videos con desinformación también pueden ser muy vistos."
      }
    ]
  },
  {
    key: "ignorantiam",
    name: "Ad Ignorantiam",
    subtitle: "Apelación a la ignorancia",
    cssClass: "back-ignorantiam",
    emojis: ["❓", "🔍", "🤷", "👻", "🌌", "🧐", "🫣", "🕵️", "💭", "🌀"],
    examples: [
      {
        text: "\"Nadie ha demostrado que los fantasmas no existen, así que existen.\"",
        explanation: "La falta de pruebas en contra no es prueba a favor. La carga de la prueba recae en quien afirma."
      },
      {
        text: "\"No se ha probado que este medicamento sea dañino, así que es seguro tomarlo.\"",
        explanation: "La ausencia de evidencia de daño no equivale a evidencia de seguridad."
      },
      {
        text: "\"Los extraterrestres deben existir porque nadie ha demostrado que no existan.\"",
        explanation: "No poder desprobar algo no lo convierte en verdadero; se necesita evidencia positiva."
      },
      {
        text: "\"No hay pruebas de que el amuleto no funcione, así que me protege de verdad.\"",
        explanation: "La imposibilidad de desprobar la efectividad del amuleto no demuestra que funcione."
      },
      {
        text: "\"La ciencia no puede explicar cómo se creó el universo exactamente, así que fue un acto divino.\"",
        explanation: "Las lagunas en el conocimiento científico no validan automáticamente explicaciones sobrenaturales."
      },
      {
        text: "\"No se ha encontrado evidencia de que las pirámides fueron construidas por humanos solos, así que tuvieron ayuda alienígena.\"",
        explanation: "La falta de una explicación completa no justifica saltar a una conclusión extraordinaria sin evidencia."
      },
      {
        text: "\"Nadie me ha demostrado que Bigfoot no exista, así que debe andar por ahí.\"",
        explanation: "La ausencia de refutación no es lo mismo que confirmación; se necesitan pruebas directas."
      },
      {
        text: "\"No hay evidencia de que esa conspiración sea falsa, así que algo ocultan.\"",
        explanation: "No poder desmentir completamente una teoría conspirativa no la hace verdadera."
      },
      {
        text: "\"Los científicos no han logrado demostrar que la telepatía sea imposible, así que es real.\"",
        explanation: "La ciencia no funciona demostrando imposibilidades; se requiere evidencia positiva de la telepatía."
      },
      {
        text: "\"No existe prueba de que ese político sea corrupto, así que es totalmente honesto.\"",
        explanation: "La falta de pruebas de corrupción no equivale a una prueba de honestidad total."
      }
    ]
  },
  {
    key: "generalizacion",
    name: "Generalización Apresurada",
    subtitle: "Conclusión desde pocos casos",
    cssClass: "back-generalizacion",
    emojis: ["📌", "🔢", "🧩", "🏷️", "🗂️", "📋", "✏️", "🔖", "🎲", "📎"],
    examples: [
      {
        text: "\"Conocí a dos franceses y eran antipáticos. Todos los franceses son antipáticos.\"",
        explanation: "Dos personas no representan a toda una nación. Es una muestra demasiado pequeña para generalizar."
      },
      {
        text: "\"Mi vecino es ingeniero y es muy aburrido. Los ingenieros son aburridos.\"",
        explanation: "Un solo caso no es suficiente para caracterizar a todo un grupo profesional."
      },
      {
        text: "\"Fui a ese restaurante una vez y la comida estaba fría. Ese restaurante siempre sirve mal.\"",
        explanation: "Una sola visita no permite concluir sobre la calidad habitual del servicio."
      },
      {
        text: "\"Mi abuelo fumó toda su vida y vivió hasta los 95. Fumar no es tan malo.\"",
        explanation: "Un caso excepcional no invalida las estadísticas que muestran los daños del tabaco en la salud."
      },
      {
        text: "\"Dos estudiantes de esa escuela sacaron malas notas. Esa escuela es pésima.\"",
        explanation: "Dos estudiantes no representan el rendimiento de toda la institución educativa."
      },
      {
        text: "\"Le presté dinero a un amigo y no me pagó. Nunca más le presto a nadie.\"",
        explanation: "La experiencia con una persona no debería determinar la confianza hacia todas las demás."
      },
      {
        text: "\"Vi tres noticias de robos en esa ciudad. Es el lugar más peligroso del mundo.\"",
        explanation: "Tres noticias no son una muestra estadística válida para evaluar la seguridad de toda una ciudad."
      },
      {
        text: "\"Los dos políticos que conozco son corruptos. Todos los políticos son corruptos.\"",
        explanation: "Conocer dos casos de corrupción no permite generalizar a todos los servidores públicos."
      },
      {
        text: "\"Contraté a un joven y no rindió en el trabajo. Los jóvenes no quieren trabajar.\"",
        explanation: "Un empleado no representa a toda una generación; la muestra es insuficiente para tal conclusión."
      },
      {
        text: "\"Probé dos libros de ese autor y no me gustaron. Ese autor es terrible.\"",
        explanation: "Dos libros de posiblemente muchos no son suficientes para juzgar toda la obra de un escritor."
      }
    ]
  },
  {
    key: "misericordiam",
    name: "Ad Misericordiam",
    subtitle: "Apelación a la piedad",
    cssClass: "back-misericordiam",
    emojis: ["😢", "💔", "🥺", "🙏", "😿", "🕊️", "💧", "🤲", "😭", "❤️‍🩹"],
    examples: [
      {
        text: "\"Profesor, por favor apruébeme. Si no paso, mi mamá se va a poner muy triste.\"",
        explanation: "La tristeza de la mamá no es un argumento académico. La nota debe basarse en el rendimiento."
      },
      {
        text: "\"No me pongas la multa, oficial. Hoy es mi cumpleaños y ya tuve un día horrible.\"",
        explanation: "Tener un mal día no justifica una infracción de tránsito; la ley se aplica independientemente."
      },
      {
        text: "\"Deberían darme el trabajo a mí. Soy madre soltera y necesito el dinero desesperadamente.\"",
        explanation: "La situación personal es lamentable, pero el empleo debería asignarse por competencias profesionales."
      },
      {
        text: "\"No puedes culparme por hacer trampa en el examen. Tengo ansiedad y mucha presión.\"",
        explanation: "Las dificultades emocionales no justifican la deshonestidad académica."
      },
      {
        text: "\"Ese jugador no debería ser expulsado, creció en un barrio difícil y ha sufrido mucho.\"",
        explanation: "Su historia personal no cambia el hecho de que cometió una falta que merece sanción."
      },
      {
        text: "\"No me despidan, por favor. Mi perro acaba de morir y estoy pasando por un momento terrible.\"",
        explanation: "La pérdida personal no está relacionada con el rendimiento laboral que motivó el despido."
      },
      {
        text: "\"Juez, mi cliente robó, pero considere que tuvo una infancia muy difícil.\"",
        explanation: "Una infancia difícil no anula la responsabilidad penal de un delito cometido."
      },
      {
        text: "\"Deberías dejarme copiar tu tarea. ¿No ves que no dormí en toda la noche?\"",
        explanation: "No haber dormido es consecuencia de la mala organización, no una razón válida para copiar."
      },
      {
        text: "\"Ese político merece otra oportunidad. Mira lo mucho que ha sufrido en su vida personal.\"",
        explanation: "El sufrimiento personal no es criterio para evaluar la capacidad de gestión pública."
      },
      {
        text: "\"No me repruebe, profesor. Si pierdo la beca, tendré que dejar la universidad y trabajar.\"",
        explanation: "Las consecuencias personales no deben alterar la evaluación objetiva del desempeño académico."
      }
    ]
  }
];

// ── Shuffle utility (Fisher-Yates) ──────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Build 60 cards in 10 cycles ──────────────────────────────
function buildDeck() {
  const deck = [];
  // Track which example index to use for each fallacy
  const exampleIndices = {};
  FALLACIES.forEach(f => { exampleIndices[f.key] = 0; });

  // Shuffle the order of example indices for each fallacy (so examples come in random order)
  const exampleOrders = {};
  FALLACIES.forEach(f => {
    exampleOrders[f.key] = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  for (let cycle = 0; cycle < 10; cycle++) {
    // Each cycle: pick one example from each of the 6 fallacies, in random order
    const cycleOrder = shuffle([...FALLACIES]);

    cycleOrder.forEach(fallacy => {
      const exIdx = exampleOrders[fallacy.key][exampleIndices[fallacy.key]];
      const example = fallacy.examples[exIdx];
      deck.push({
        fallacy,
        example,
        emojiIdx: exIdx,
        cycle: cycle + 1
      });
      exampleIndices[fallacy.key]++;
    });
  }

  return deck;
}

// ── State ────────────────────────────────────────────────────
let currentMode = "grid";   // "grid" | "focus"
let currentCols = 4;
let focusIndex = 0;
let deckData = [];

// ── Render cards ─────────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById("cardsGrid");
  deckData = buildDeck();

  grid.innerHTML = "";

  deckData.forEach((card, i) => {
    const container = document.createElement("div");
    container.className = "card-container";
    container.id = `card-${i + 1}`;
    container.setAttribute("data-cycle", card.cycle);

    const emoji = card.fallacy.emojis[card.emojiIdx];

    container.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <span class="card-number">#${i + 1}</span>
          <span class="card-emoji">${emoji}</span>
          <p class="card-example">${card.example.text}</p>
          <span class="card-hint">Clic para voltear</span>
        </div>
        <div class="card-back ${card.fallacy.cssClass}">
          <p class="fallacy-name">${card.fallacy.name}</p>
          <p class="fallacy-subtitle">${card.fallacy.subtitle}</p>
          <p class="fallacy-explanation">${card.example.explanation}</p>
        </div>
      </div>
    `;

    container.addEventListener("click", () => {
      container.classList.toggle("flipped");
      updateProgress();
    });

    grid.appendChild(container);
  });

  applyViewMode();
  updateProgress();
}

// ── Apply current view mode ──────────────────────────────────
function applyViewMode() {
  const grid = document.getElementById("cardsGrid");
  const focusNav = document.getElementById("focusNav");
  const columnControl = document.getElementById("columnControl");

  // Remove all mode classes
  grid.classList.remove("focus-mode", "cols-1", "cols-2", "cols-3", "cols-4");

  // Remove focus-visible from all cards
  document.querySelectorAll(".card-container").forEach(c => c.classList.remove("focus-visible"));

  if (currentMode === "focus") {
    grid.classList.add("focus-mode");
    focusNav.classList.add("visible");
    columnControl.style.display = "none";
    showFocusCard(focusIndex);
  } else {
    grid.classList.add(`cols-${currentCols}`);
    focusNav.classList.remove("visible");
    columnControl.style.display = "";
  }
}

// ── Focus mode helpers ───────────────────────────────────────
function showFocusCard(index) {
  const cards = document.querySelectorAll(".card-container");
  if (cards.length === 0) return;

  // Clamp index
  focusIndex = Math.max(0, Math.min(index, cards.length - 1));

  // Hide all, show target
  cards.forEach(c => c.classList.remove("focus-visible"));
  const target = cards[focusIndex];
  target.classList.add("focus-visible");

  // Re-trigger animation
  target.style.animation = "none";
  target.offsetHeight; // force reflow
  target.style.animation = "";

  // Update counter
  document.getElementById("focusCounter").textContent = `${focusIndex + 1} / ${cards.length}`;

  // Update button states
  document.getElementById("btnPrev").disabled = focusIndex === 0;
  document.getElementById("btnNext").disabled = focusIndex === cards.length - 1;
}

function focusPrev() {
  if (focusIndex > 0) showFocusCard(focusIndex - 1);
}

function focusNext() {
  const cards = document.querySelectorAll(".card-container");
  if (focusIndex < cards.length - 1) showFocusCard(focusIndex + 1);
}

// ── Progress tracker ─────────────────────────────────────────
function updateProgress() {
  const total = document.querySelectorAll(".card-container").length;
  const flipped = document.querySelectorAll(".card-container.flipped").length;

  const currentCycle = Math.min(Math.floor(flipped / 6) + 1, 10);
  const percentage = (flipped / total) * 100;

  document.getElementById("cycleInfo").textContent =
    flipped >= total
      ? "🎉 ¡Completaste las 60 cartas!"
      : `Ciclo ${currentCycle} de 10  ·  ${flipped} de ${total} cartas descubiertas`;

  document.getElementById("progressFill").style.width = `${percentage}%`;
}

// ── Wire up controls ─────────────────────────────────────────
function initControls() {
  // View mode pills (Grid / Focus)
  document.querySelectorAll("#viewModeGroup .pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#viewModeGroup .pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;
      applyViewMode();
    });
  });

  // Column pills
  document.querySelectorAll("#columnGroup .pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#columnGroup .pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCols = parseInt(btn.dataset.cols);
      applyViewMode();
    });
  });

  // Focus navigation buttons
  document.getElementById("btnPrev").addEventListener("click", focusPrev);
  document.getElementById("btnNext").addEventListener("click", focusNext);

  // Keyboard navigation (arrows + space)
  document.addEventListener("keydown", (e) => {
    if (currentMode !== "focus") return;

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusPrev();
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusNext();
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const cards = document.querySelectorAll(".card-container");
      if (cards[focusIndex]) {
        cards[focusIndex].classList.toggle("flipped");
        updateProgress();
      }
    }
  });
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  initControls();
});



// ── Definiciones Pedagógicas de las 6 Falacias (Alejandro Córdova) ──
const FALLACY_PEDAGOGY = {
  hominem: {
    key: "hominem",
    name: "Ad Hominem",
    translation: "Contra la persona",
    tagline: "Ataque a la persona en lugar de refutar su tesis",
    emoji: "🎯",
    accentColor: "#C53030",
    definition: "Consiste en rechazar o desacreditar un argumento atacando las características de quien lo sostiene —su apariencia, edad, origen, condición social, moralidad o errores del pasado— en vez de examinar la pertinencia y verdad de sus razones.",
    logicFlaw: "La validez o solidez de una conclusión es completamente independiente de las virtudes o defectos personales de quien la defiende. Una persona con contradicciones personales puede formular un argumento lógicamente intachable.",
    example: "\"No podemos aceptar la propuesta económica del ministro porque se divorció dos veces y no tiene valores familiares.\"",
    exampleAnalysis: "En vez de debatir las cifras de gasto público o inflación, se desvía la atención hacia su vida privada, la cual carece de relevancia lógica para el debate económico.",
    howToRespond: "Centrar de inmediato la atención en los datos: «Mis circunstancias personales no alteran los datos presentados; debatamos la propuesta técnica, no a mi persona»."
  },
  verecundiam: {
    key: "verecundiam",
    name: "Ad Verecundiam",
    translation: "Apelación a la autoridad",
    tagline: "Validar una idea apelando al prestigio de alguien fuera de su campo",
    emoji: "👑",
    accentColor: "#2B6CB0",
    definition: "Ocurre cuando se pretende dar por indiscutible una conclusión únicamente porque la defiende una figura famosa, de prestigio o autoridad, pero que carece de competencia técnica o pericia en el tema específico que se debate.",
    logicFlaw: "El éxito o reconocimiento en un área (ej. el deporte, la música o una disciplina científica ajena) no otorga autoridad epistémica ni convierte la opinión de esa persona en evidencia demostrable en otros campos.",
    example: "\"Este suplemento nutricional previene el envejecimiento; lo recomendó un famoso actor de cine en sus redes sociales.\"",
    exampleAnalysis: "La popularidad mediática no equivale a certificación científica en bioquímica, medicina o nutrición.",
    howToRespond: "Diferenciar fama de rigor disciplinar: «Admiro el talento artístico del actor, pero para evaluar la eficacia médica de un suplemento requerimos ensayos clínicos y el consenso de la comunidad médica»."
  },
  populum: {
    key: "populum",
    name: "Ad Populum",
    translation: "Apelación a la multitud",
    tagline: "Sostener que algo es verdadero solo porque la mayoría lo cree o practica",
    emoji: "👥",
    accentColor: "#22543D",
    definition: "Consiste en sostener que una afirmación es verdadera, acertada o moralmente correcta solo porque la mayoría de personas, la sociedad entera o la tradición popular así lo cree o lo practica.",
    logicFlaw: "La verdad no se define por consenso democrático ni por estadísticas de consumo. A lo largo de la historia, mayorías enteras han sostenido ideas que luego resultaron falsas o perjudiciales.",
    example: "\"Millones de personas leen el horóscopo cada mañana; no pueden estar todos equivocados, algo de verdad debe tener.\"",
    exampleAnalysis: "La masividad de una costumbre o creencia describe un fenómeno sociológico, pero no aporta una sola prueba científica de su veracidad.",
    howToRespond: "Separar popularidad de justificación lógica: «Que una creencia esté ampliamente extendida explica su éxito cultural, pero no demuestra su certeza empírica ni su validez argumentativa»."
  },
  ignorantiam: {
    key: "ignorantiam",
    name: "Ad Ignorantiam",
    translation: "Llamado a la ignorancia",
    tagline: "Dar por cierta una idea solo porque nadie ha probado que es falsa",
    emoji: "❓",
    accentColor: "#B7791F",
    definition: "Se comete al defender que una afirmación es verdadera únicamente porque nadie ha logrado demostrar que sea falsa, o que es falsa porque nadie ha demostrado aún su veracidad.",
    logicFlaw: "La ausencia de prueba no es prueba de ausencia ni de verdad. En la lógica formal y el método científico, la carga de la prueba (onus probandi) recae siempre sobre quien postula la afirmación.",
    example: "\"Nadie ha podido demostrar de forma concluyente que los fantasmas no existan en esa casa abandonada, por lo tanto, existen.\"",
    exampleAnalysis: "Se invierte la carga probatoria, pretendiendo que la falta de refutación deba tomarse como confirmación de una entidad extraordinaria.",
    howToRespond: "Recordar la carga de la prueba: «La dificultad para demostrar que algo no existe no lo vuelve real. Quien formula una afirmación tiene el deber de aportar evidencias observables»."
  },
  generalizacion: {
    key: "generalizacion",
    name: "Generalización Apresurada",
    translation: "Secundum quid",
    tagline: "Extraer una ley universal a partir de observaciones insuficientes",
    emoji: "⚡",
    accentColor: "#9B2C2C",
    definition: "Consiste en atribuir una conclusión o rasgo a todo un colectivo, sistema o fenómeno basándose en una muestra demasiado reducida, excepcional o no representativa de casos aislados.",
    logicFlaw: "Uno o dos casos no permiten establecer una pauta estadística ni una ley general confiable; se ignora la diversidad, el azar y la complejidad del conjunto.",
    example: "\"Compré dos libros de esa editorial y tenían erratas tipográficas; por tanto, todos los libros de esa editorial están pésimamente editados.\"",
    exampleAnalysis: "Se extrapola una mala experiencia con dos volúmenes al catálogo entero de miles de publicaciones.",
    howToRespond: "Exigir representatividad: «Esa experiencia particular es lamentable, pero dos casos aislados no constituyen una muestra suficiente para dictaminar la calidad de toda la producción»."
  },
  misericordiam: {
    key: "misericordiam",
    name: "Ad Misericordiam",
    translation: "Apelación a la piedad",
    tagline: "Manipular la lástima o el sufrimiento para evadir las razones lógicas",
    emoji: "🥺",
    accentColor: "#553C9A",
    definition: "Ocurre cuando se busca convencer al interlocutor o conseguir una decisión favorable apelando a la compasión, la desgracia personal o la súplica emotiva, en vez de aportar razones y méritos pertinentes.",
    logicFlaw: "Aunque la empatía y la compasión son virtudes humanas indispensables, no sustituyen los hechos ni los criterios objetivos de evaluación académica, legal o profesional.",
    example: "\"Profesor, por favor apruébeme esta materia; si no paso, perderé mi beca y mi familia pasará por una tristeza inmensa.\"",
    exampleAnalysis: "La angustia personal es sincera y respetable, pero una calificación académica evalúa los aprendizajes alcanzados, no las circunstancias de vida.",
    howToRespond: "Validar la emoción sin vulnerar el criterio objetivo: «Comprendo la dificultad de tu situación y la empatizo; sin embargo, la evaluación mide las destrezas logradas con imparcialidad para todos los estudiantes»."
  }
};

// ── Lógica de la Ventana Emergente (Modal) ────────────────────
let activeModalFallacyKey = null;

function initFallacyModal() {
  const overlay = document.getElementById("fallacyModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");
  const understoodBtn = document.getElementById("modalBtnUnderstood");
  const modalHeader = document.getElementById("modalHeader");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const modalBody = document.getElementById("modalBody");
  const modalSwitcher = document.getElementById("modalSwitcher");

  if (!overlay) return;

  // Build switcher pills
  modalSwitcher.innerHTML = "";
  Object.keys(FALLACY_PEDAGOGY).forEach(key => {
    const f = FALLACY_PEDAGOGY[key];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "switcher-pill";
    btn.setAttribute("data-key", key);
    btn.innerHTML = `${f.emoji} ${f.name}`;
    btn.addEventListener("click", () => openFallacyModal(key));
    modalSwitcher.appendChild(btn);
  });

  function openFallacyModal(key) {
    const data = FALLACY_PEDAGOGY[key];
    if (!data) return;

    activeModalFallacyKey = key;
    document.body.classList.add("modal-open");

    // Set header theme
    modalHeader.style.backgroundColor = data.accentColor;
    modalTitle.textContent = `${data.emoji} ${data.name}`;
    modalSubtitle.textContent = data.tagline;
    modalCategoryBadge.textContent = `${data.translation} · FALACIA NO FORMAL`;

    // Render body content
    modalBody.style.setProperty("--modal-accent", data.accentColor);
    modalBody.innerHTML = `
      <div class="modal-section">
        <span class="modal-section-label">📖 Definición Pedagógica</span>
        <p class="modal-definition-text">${data.definition}</p>
      </div>

      <div class="modal-section">
        <span class="modal-section-label">⚠️ El Fallo Lógico (¿Por qué no es válido?)</span>
        <div class="modal-error-box">
          <p>${data.logicFlaw}</p>
        </div>
      </div>

      <div class="modal-section">
        <span class="modal-section-label">💬 Ejemplo Ilustrativo</span>
        <div class="modal-example-box">
          <div class="modal-example-quote">${data.example}</div>
          <p class="modal-example-analysis"><strong>Análisis:</strong> ${data.exampleAnalysis}</p>
        </div>
      </div>

      <div class="modal-section">
        <span class="modal-section-label">💡 Pauta para el Debate o Análisis</span>
        <div class="modal-response-box">
          <p>${data.howToRespond}</p>
        </div>
      </div>
    `;

    // Update switcher pills active state
    document.querySelectorAll(".switcher-pill").forEach(pill => {
      pill.classList.toggle("active", pill.getAttribute("data-key") === key);
    });

    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeFallacyModal() {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  // Hook tag buttons in header
  document.querySelectorAll(".fallacy-tags .tag").forEach(tagBtn => {
    tagBtn.addEventListener("click", () => {
      const fallacyKey = tagBtn.getAttribute("data-fallacy");
      openFallacyModal(fallacyKey);
    });
  });

  // Close handlers
  closeBtn.addEventListener("click", closeFallacyModal);
  understoodBtn.addEventListener("click", closeFallacyModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeFallacyModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeFallacyModal();
    }
  });
}


// Hook into initialization
document.addEventListener("DOMContentLoaded", () => {
  initFallacyModal();
});
