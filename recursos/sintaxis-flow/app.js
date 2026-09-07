/**
 * SINTAXIS FLOW — LABORATORIO PEDAGÓGICO DE ANÁLISIS SINTÁCTICO
 * Autor: Msc. Alejandro Córdova
 * Versión: 2.0.0 (Modular & Responsive)
 */

// ============================================================================
// 1. BANCO DE ORACIONES PEDAGÓGICAS (20 ORACIONES)
// ============================================================================
const ORACIONES = [
  // NIVEL 1: Sujeto y Predicado (4 oraciones)
  {
    nivel: 1,
    numero: 1,
    tema: "Tecnología",
    oracion: "La inteligencia artificial transforma el mundo rápidamente.",
    palabras: ["La", "inteligencia", "artificial", "transforma", "el", "mundo", "rápidamente"],
    sujeto: ["La", "inteligencia", "artificial"],
    predicado: ["transforma", "el", "mundo", "rápidamente"],
    ns: ["inteligencia"],
    np: ["transforma"],
    cd: ["el", "mundo"],
    ci: [],
    pista: "Aplica la prueba de concordancia: si cambias 'transforma' por 'transforman', ¿qué bloque debe cambiar obligatoriamente?",
    explicacion: "«La inteligencia artificial» concuerda en singular con «transforma». Si pluralizamos el verbo («transforman»), decimos «Las inteligencias artificiales transforman». Por tanto, es el Sujeto.",
    tipo: "analisis"
  },
  {
    nivel: 1,
    numero: 2,
    tema: "Ambiente",
    oracion: "Los océanos piden ayuda a gritos.",
    palabras: ["Los", "océanos", "piden", "ayuda", "a", "gritos"],
    sujeto: ["Los", "océanos"],
    predicado: ["piden", "ayuda", "a", "gritos"],
    ns: ["océanos"],
    np: ["piden"],
    cd: ["ayuda"],
    ci: [],
    pista: "¿Quiénes concuerdan en número plural con el verbo 'piden'? Observa qué pasa si pasas el verbo a singular 'pide'.",
    explicacion: "Al cambiar el verbo a singular («pide»), debe cambiar «El océano». Por concordancia gramatical, «Los océanos» es el Sujeto y «piden ayuda a gritos» es el Predicado.",
    tipo: "analisis"
  },
  {
    nivel: 1,
    numero: 3,
    tema: "Vial",
    oracion: "Los conductores responsables respetan el paso cebra.",
    palabras: ["Los", "conductores", "responsables", "respetan", "el", "paso", "cebra"],
    sujeto: ["Los", "conductores", "responsables"],
    predicado: ["respetan", "el", "paso", "cebra"],
    ns: ["conductores"],
    np: ["respetan"],
    cd: ["el", "paso", "cebra"],
    ci: [],
    pista: "Busca el verbo conjugado ('respetan') y encuentra todo el grupo nominal que concuerda en 3.ª persona plural.",
    explicacion: "«Los conductores responsables» es un sintagma nominal en plural que concuerda con «respetan». Si decimos «El conductor responsable», el verbo pasa a «respeta».",
    tipo: "analisis"
  },
  {
    nivel: 1,
    numero: 4,
    tema: "Cultura",
    oracion: "Ese streamer famoso rompió un récord mundial ayer.",
    palabras: ["Ese", "streamer", "famoso", "rompió", "un", "récord", "mundial", "ayer"],
    sujeto: ["Ese", "streamer", "famoso"],
    predicado: ["rompió", "un", "récord", "mundial", "ayer"],
    ns: ["streamer"],
    np: ["rompió"],
    cd: ["un", "récord", "mundial"],
    ci: [],
    pista: "Cambia el verbo 'rompió' a plural 'rompieron'. ¿Qué palabras deben cambiar para que la oración tenga sentido?",
    explicacion: "«Esos streamers famosos rompieron...». Al cambiar el verbo, «Ese streamer famoso» debe cambiar obligatoriamente: es el Sujeto de la oración.",
    tipo: "analisis"
  },

  // NIVEL 2: Núcleo del Sujeto y Núcleo del Predicado (5 oraciones)
  {
    nivel: 2,
    numero: 5,
    tema: "Ambiente",
    oracion: "El plástico contamina nuestros ríos diariamente.",
    palabras: ["El", "plástico", "contamina", "nuestros", "ríos", "diariamente"],
    sujeto: ["El", "plástico"],
    predicado: ["contamina", "nuestros", "ríos", "diariamente"],
    ns: ["plástico"],
    np: ["contamina"],
    cd: ["nuestros", "ríos"],
    ci: [],
    pista: "El NS es el sustantivo rector del sujeto (sin el artículo). El NP es el verbo conjugado principal.",
    explicacion: "Sujeto: «El plástico» → el sustantivo núcleo es «plástico» (NS). Predicado: «contamina nuestros ríos diariamente» → el verbo núcleo es «contamina» (NP).",
    tipo: "analisis"
  },
  {
    nivel: 2,
    numero: 6,
    tema: "Vial",
    oracion: "El casco salva vidas en la carretera.",
    palabras: ["El", "casco", "salva", "vidas", "en", "la", "carretera"],
    sujeto: ["El", "casco"],
    predicado: ["salva", "vidas", "en", "la", "carretera"],
    ns: ["casco"],
    np: ["salva"],
    cd: ["vidas"],
    ci: [],
    pista: "Identifica el sustantivo esencial del sujeto y la forma verbal conjugada que rige la predicación.",
    explicacion: "NS = «casco» (sustantivo que concuerda en singular con el verbo). NP = «salva» (verbo conjugado en 3.ª persona singular).",
    tipo: "analisis"
  },
  {
    nivel: 2,
    numero: 7,
    tema: "Tecnología",
    oracion: "Mis amigos crearon un grupo de WhatsApp nuevo.",
    palabras: ["Mis", "amigos", "crearon", "un", "grupo", "de", "WhatsApp", "nuevo"],
    sujeto: ["Mis", "amigos"],
    predicado: ["crearon", "un", "grupo", "de", "WhatsApp", "nuevo"],
    ns: ["amigos"],
    np: ["crearon"],
    cd: ["un", "grupo", "de", "WhatsApp", "nuevo"],
    ci: [],
    pista: "En el sujeto 'Mis amigos', quita el determinante posesivo. En el predicado, ubica la acción realizada.",
    explicacion: "NS = «amigos» (sustantivo rector). NP = «crearon» (verbo en pretérito perfecto simple, 3.ª persona plural).",
    tipo: "analisis"
  },
  {
    nivel: 2,
    numero: 8,
    tema: "Ética",
    oracion: "La empatía mejora la convivencia escolar.",
    palabras: ["La", "empatía", "mejora", "la", "convivencia", "escolar"],
    sujeto: ["La", "empatía"],
    predicado: ["mejora", "la", "convivencia", "escolar"],
    ns: ["empatía"],
    np: ["mejora"],
    cd: ["la", "convivencia", "escolar"],
    ci: [],
    pista: "Sujeto: 'La empatía'. ¿Cuál es el sustantivo núcleo? Predicado: 'mejora...'. ¿Cuál es el verbo?",
    explicacion: "NS = «empatía» (sustantivo abstracto rector). NP = «mejora» (verbo rector del predicado).",
    tipo: "analisis"
  },
  {
    nivel: 2,
    numero: 9,
    tema: "Cultura",
    oracion: "Los músicos ensayan nuevas canciones diariamente.",
    palabras: ["Los", "músicos", "ensayan", "nuevas", "canciones", "diariamente"],
    sujeto: ["Los", "músicos"],
    predicado: ["ensayan", "nuevas", "canciones", "diariamente"],
    ns: ["músicos"],
    np: ["ensayan"],
    cd: ["nuevas", "canciones"],
    ci: [],
    pista: "El núcleo del sujeto es el sustantivo sin artículo; el núcleo del predicado es el verbo en presente.",
    explicacion: "NS = «músicos» (sustantivo en plural). NP = «ensayan» (verbo conjugado que rige la acción).",
    tipo: "analisis"
  },

  // NIVEL 3: Núcleo + CD + CI (5 oraciones)
  {
    nivel: 3,
    numero: 10,
    tema: "Vial",
    oracion: "El semáforo da prioridad a los peatones.",
    palabras: ["El", "semáforo", "da", "prioridad", "a", "los", "peatones"],
    sujeto: ["El", "semáforo"],
    predicado: ["da", "prioridad", "a", "los", "peatones"],
    ns: ["semáforo"],
    np: ["da"],
    cd: ["prioridad"],
    ci: ["a", "los", "peatones"],
    pista: "Aplica la pronominalización: «El semáforo LA da» (CD = prioridad). «El semáforo LES da prioridad» (CI = a los peatones).",
    explicacion: "NS: «semáforo» | NP: «da» | CD: «prioridad» (se sustituye por 'la') | CI: «a los peatones» (destinatario, se sustituye por 'les').",
    tipo: "analisis"
  },
  {
    nivel: 3,
    numero: 11,
    tema: "Tecnología",
    oracion: "El algoritmo sugiere videos a los usuarios.",
    palabras: ["El", "algoritmo", "sugiere", "videos", "a", "los", "usuarios"],
    sujeto: ["El", "algoritmo"],
    predicado: ["sugiere", "videos", "a", "los", "usuarios"],
    ns: ["algoritmo"],
    np: ["sugiere"],
    cd: ["videos"],
    ci: ["a", "los", "usuarios"],
    pista: "Prueba CD: «El algoritmo LOS sugiere». Prueba CI: «El algoritmo LES sugiere videos».",
    explicacion: "NS: «algoritmo» | NP: «sugiere» | CD: «videos» (admite sustitución por 'los') | CI: «a los usuarios» (destinatario, sustituible por 'les').",
    tipo: "analisis"
  },
  {
    nivel: 3,
    numero: 12,
    tema: "Ambiente",
    oracion: "El gobierno prometió leyes nuevas a los ciudadanos.",
    palabras: ["El", "gobierno", "prometió", "leyes", "nuevas", "a", "los", "ciudadanos"],
    sujeto: ["El", "gobierno"],
    predicado: ["prometió", "leyes", "nuevas", "a", "los", "ciudadanos"],
    ns: ["gobierno"],
    np: ["prometió"],
    cd: ["leyes", "nuevas"],
    ci: ["a", "los", "ciudadanos"],
    pista: "Atención al CD: abarca el sustantivo con su adjetivo ('leyes nuevas' → 'las'). El CI es el grupo con 'a'.",
    explicacion: "NS: «gobierno» | NP: «prometió» | CD: «leyes nuevas» («El gobierno LAS prometió») | CI: «a los ciudadanos» («El gobierno LES prometió leyes nuevas»).",
    tipo: "analisis"
  },
  {
    nivel: 3,
    numero: 13,
    tema: "Ética",
    oracion: "Nosotros mostramos respeto a nuestros mayores.",
    palabras: ["Nosotros", "mostramos", "respeto", "a", "nuestros", "mayores"],
    sujeto: ["Nosotros"],
    predicado: ["mostramos", "respeto", "a", "nuestros", "mayores"],
    ns: ["Nosotros"],
    np: ["mostramos"],
    cd: ["respeto"],
    ci: ["a", "nuestros", "mayores"],
    pista: "El sujeto es un pronombre personal (NS). ¿Qué mostramos? (CD: respeto → 'lo mostramos'). ¿A quiénes? (CI).",
    explicacion: "NS: «Nosotros» (pronombre tónico) | NP: «mostramos» | CD: «respeto» (sustituible por 'lo') | CI: «a nuestros mayores» (sustituible por 'les').",
    tipo: "analisis"
  },
  {
    nivel: 3,
    numero: 14,
    tema: "Deporte",
    oracion: "El entrenador explicó la jugada a los deportistas.",
    palabras: ["El", "entrenador", "explicó", "la", "jugada", "a", "los", "deportistas"],
    sujeto: ["El", "entrenador"],
    predicado: ["explicó", "la", "jugada", "a", "los", "deportistas"],
    ns: ["entrenador"],
    np: ["explicó"],
    cd: ["la", "jugada"],
    ci: ["a", "los", "deportistas"],
    pista: "CD: 'la jugada' (femenino singular → 'la'). CI: 'a los deportistas' (plural → 'les').",
    explicacion: "NS: «entrenador» | NP: «explicó» | CD: «la jugada» («El entrenador LA explicó...») | CI: «a los deportistas» («El entrenador LES explicó...»).",
    tipo: "analisis"
  },

  // NIVEL 4: Sustitución de CD y CI por pronombres (6 oraciones)
  {
    nivel: 4,
    numero: 15,
    tema: "Tecnología",
    oracion: "Juan envió los archivos al profesor.",
    sujeto: "Juan",
    verbo: "envió",
    cd: "los archivos",
    ci: "al profesor",
    cdPronombre: "los",
    ciPronombre: "le",
    oracionCD: "Juan los envió al profesor.",
    oracionCI: "Juan le envió los archivos.",
    oracionAmbos: "Juan se los envió.",
    pistaCD: "Sustituye 'los archivos' por 'los'. Recuerda quitar la frase 'los archivos' de la oración.",
    pistaCI: "Sustituye 'al profesor' por 'le'. Colócalo antes del verbo: 'Juan le envió los archivos.'",
    pistaBoth: "¡Regla de SE! En vez de 'le los envió', el CI 'le' se transforma en 'se': 'Juan se los envió.'",
    tipo: "pronombre"
  },
  {
    nivel: 4,
    numero: 16,
    tema: "Vial",
    oracion: "El policía puso una multa al conductor.",
    sujeto: "El policía",
    verbo: "puso",
    cd: "una multa",
    ci: "al conductor",
    cdPronombre: "la",
    ciPronombre: "le",
    oracionCD: "El policía la puso al conductor.",
    oracionCI: "El policía le puso una multa.",
    oracionAmbos: "El policía se la puso.",
    pistaCD: "CD: 'una multa' es femenino singular → usa 'la' antes de 'puso'.",
    pistaCI: "CI: 'al conductor' es singular → usa 'le' antes de 'puso'.",
    pistaBoth: "Ambos pronombres juntos: 'le' se convierte en 'se' para evitar cacofonía: 'El policía se la puso.'",
    tipo: "pronombre"
  },
  {
    nivel: 4,
    numero: 17,
    tema: "Cultura",
    oracion: "Marvel presentó el tráiler a la audiencia.",
    sujeto: "Marvel",
    verbo: "presentó",
    cd: "el tráiler",
    ci: "a la audiencia",
    cdPronombre: "lo",
    ciPronombre: "le",
    oracionCD: "Marvel lo presentó a la audiencia.",
    oracionCI: "Marvel le presentó el tráiler.",
    oracionAmbos: "Marvel se lo presentó.",
    pistaCD: "CD: 'el tráiler' (masculino singular → 'lo').",
    pistaCI: "CI: 'a la audiencia' (destinatario singular → 'le').",
    pistaBoth: "Transformación combinada: 'le lo' es cacofónico en español → 'Marvel se lo presentó.'",
    tipo: "pronombre"
  },
  {
    nivel: 4,
    numero: 18,
    tema: "Educación",
    oracion: "La profesora enseñó la lección a los estudiantes.",
    sujeto: "La profesora",
    verbo: "enseñó",
    cd: "la lección",
    ci: "a los estudiantes",
    cdPronombre: "la",
    ciPronombre: "les",
    oracionCD: "La profesora la enseñó a los estudiantes.",
    oracionCI: "La profesora les enseñó la lección.",
    oracionAmbos: "La profesora se la enseñó.",
    pistaCD: "CD: 'la lección' → pronombre 'la'.",
    pistaCI: "CI: 'a los estudiantes' (plural) → pronombre 'les'.",
    pistaBoth: "'les la' se transforma obligatoriamente en 'se la' → 'La profesora se la enseñó.'",
    tipo: "pronombre"
  },
  {
    nivel: 4,
    numero: 19,
    tema: "Ambiente",
    oracion: "Los voluntarios entregaron suministros al refugio.",
    sujeto: "Los voluntarios",
    verbo: "entregaron",
    cd: "suministros",
    ci: "al refugio",
    cdPronombre: "los",
    ciPronombre: "le",
    oracionCD: "Los voluntarios los entregaron al refugio.",
    oracionCI: "Los voluntarios le entregaron suministros.",
    oracionAmbos: "Los voluntarios se los entregaron.",
    pistaCD: "CD: 'suministros' (masculino plural) → 'los'.",
    pistaCI: "CI: 'al refugio' → 'le'.",
    pistaBoth: "Combina ambos: 'le' pasa a 'se' → 'Los voluntarios se los entregaron.'",
    tipo: "pronombre"
  },
  {
    nivel: 4,
    numero: 20,
    tema: "Ética",
    oracion: "La escuela otorgó una beca al estudiante.",
    sujeto: "La escuela",
    verbo: "otorgó",
    cd: "una beca",
    ci: "al estudiante",
    cdPronombre: "la",
    ciPronombre: "le",
    oracionCD: "La escuela la otorgó al estudiante.",
    oracionCI: "La escuela le otorgó una beca.",
    oracionAmbos: "La escuela se la otorgó.",
    pistaCD: "CD: 'una beca' → 'la'.",
    pistaCI: "CI: 'al estudiante' → 'le'.",
    pistaBoth: "Combina ambos: 'le la' se transforma en 'se la' → 'La escuela se la otorgó.'",
    tipo: "pronombre"
  }
];

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzogh6a08u9ERlt_kTzUfAMUapNdmNiTNsj_rt3s3hfa_c1UcYOJ51q69QLXO3zjnE4nw/exec';

// ============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// ============================================================================
const state = {
  student: null,
  activeTab: 'tab-fundamentos',
  
  // Nivel 1 y 2
  basico: {
    filter: '1-2', // '1-2', '1', '2'
    currentIndex: 0,
    filteredList: [],
    selectedChip: null, // Para modo tap-to-place
    history: {} // { num: { correct: bool } }
  },

  // Nivel 3
  comp: {
    currentIndex: 0,
    list: [],
    selectedChip: null,
    history: {}
  },

  // Nivel 4
  pronom: {
    currentIndex: 0,
    list: [],
    mode: 'cd', // 'cd', 'ci', 'both'
    history: {}
  }
};

// ============================================================================
// 3. INICIALIZACIÓN
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadStudentSession();
  loadSavedProgress();
  initNavigation();
  initStudentModal();
  initBasicoModule();
  initCompModule();
  initPronomModule();
  initResultsAndAnalyzer();
  updateGlobalScore();
});

// ============================================================================
// 4. SESIÓN DE ESTUDIANTE Y LOCALSTORAGE
// ============================================================================
function loadStudentSession() {
  const saved = localStorage.getItem('sintaxisFlowStudent');
  if (saved) {
    try {
      state.student = JSON.parse(saved);
      updateStudentHeader();
    } catch (e) {
      console.error('Error parsing student session:', e);
    }
  }
}

function updateStudentHeader() {
  const display = document.getElementById('studentNameDisplay');
  if (!display) return;
  if (state.student && state.student.nombre) {
    display.textContent = `${state.student.nombre} ${state.student.apellido || ''} (${state.student.curso || 'EGB'})`;
  } else {
    display.textContent = 'Modo Práctica Libre';
  }
}

function initStudentModal() {
  const modal = document.getElementById('studentModal');
  const btnOpen = document.getElementById('btnOpenStudentModal');
  const btnSave = document.getElementById('btnSaveStudent');

  if (btnOpen) {
    btnOpen.addEventListener('click', () => {
      if (state.student) {
        document.getElementById('studentInputName').value = state.student.nombre || '';
        document.getElementById('studentInputLastName').value = state.student.apellido || '';
        document.getElementById('studentInputCourse').value = state.student.curso || '';
      }
      modal.classList.remove('hidden');
    });
  }

  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const nombre = document.getElementById('studentInputName').value.trim();
      const apellido = document.getElementById('studentInputLastName').value.trim();
      const curso = document.getElementById('studentInputCourse').value.trim();

      if (!nombre) {
        showToast('Por favor escribe al menos tu nombre.', 'error');
        return;
      }

      state.student = { nombre, apellido, curso };
      localStorage.setItem('sintaxisFlowStudent', JSON.stringify(state.student));
      updateStudentHeader();
      closeStudentModal();
      showToast(`¡Bienvenido/a, ${nombre}!`, 'success');
    });
  }
}

window.closeStudentModal = function() {
  const modal = document.getElementById('studentModal');
  if (modal) modal.classList.add('hidden');
};

function loadSavedProgress() {
  const saved = localStorage.getItem('sintaxisFlowProgress');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.basicoHistory) state.basico.history = data.basicoHistory;
      if (data.compHistory) state.comp.history = data.compHistory;
      if (data.pronomHistory) state.pronom.history = data.pronomHistory;
    } catch (e) {
      console.error('Error parsing progress:', e);
    }
  }
}

function persistProgress() {
  const payload = {
    basicoHistory: state.basico.history,
    compHistory: state.comp.history,
    pronomHistory: state.pronom.history,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('sintaxisFlowProgress', JSON.stringify(payload));
  updateGlobalScore();
}

// ============================================================================
// 5. NAVEGACIÓN ENTRE PESTAÑAS (MÓDULOS)
// ============================================================================
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    state.activeTab = tabId;

    tabs.forEach(tab => {
      const isActive = tab.getAttribute('data-tab') === tabId;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    sections.forEach(sec => {
      const isActive = sec.id === tabId;
      sec.classList.toggle('active', isActive);
    });

    // Despachar evento para course-shell
    document.dispatchEvent(new CustomEvent('tab-changed', {
      detail: { tabId: tabId }
    }));

    // Desplazar suavemente a la cabecera si es necesario
    const header = document.querySelector('.app-header');
    if (header && window.scrollY > 150) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      if (target) switchTab(target);
    });
  });

  // Botones de salto pedagógico (CTA jumps)
  document.querySelectorAll('[data-jump]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-jump');
      if (target) switchTab(target);
    });
  });

  // Integración bidireccional con course-shell si se activan secciones
  document.addEventListener('section-switched', (e) => {
    if (e.detail && e.detail.sectionId) {
      switchTab(e.detail.sectionId);
    }
  });
}

// ============================================================================
// 6. MÓDULO 02: NIVEL 1 & 2 (SUJETO, PREDICADO Y NÚCLEOS)
// ============================================================================
function initBasicoModule() {
  const filterButtons = document.querySelectorAll('.btn-filter-level');
  
  function applyFilter(filter) {
    state.basico.filter = filter;
    filterButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-level-filter') === filter));

    if (filter === '1') {
      state.basico.filteredList = ORACIONES.filter(o => o.nivel === 1);
    } else if (filter === '2') {
      state.basico.filteredList = ORACIONES.filter(o => o.nivel === 2);
    } else {
      state.basico.filteredList = ORACIONES.filter(o => o.nivel === 1 || o.nivel === 2);
    }

    state.basico.currentIndex = 0;
    renderBasicoExercise();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyFilter(btn.getAttribute('data-level-filter'));
    });
  });

  // Inicializar lista
  applyFilter('1-2');

  // Controles
  const btnReturnAll = document.getElementById('btnBasicoReturnAll');
  const btnReset = document.getElementById('btnBasicoReset');
  const btnCheck = document.getElementById('btnBasicoCheck');
  const btnNext = document.getElementById('btnBasicoNext');
  const btnHint = document.getElementById('btnBasicoHint');

  if (btnReturnAll) btnReturnAll.addEventListener('click', returnAllBasicoWords);
  if (btnReset) btnReset.addEventListener('click', resetBasicoExercise);
  if (btnCheck) btnCheck.addEventListener('click', checkBasicoAnswer);
  if (btnNext) btnNext.addEventListener('click', nextBasicoExercise);
  if (btnHint) btnHint.addEventListener('click', showBasicoHint);
}

function renderBasicoExercise() {
  const currentList = state.basico.filteredList;
  if (!currentList || currentList.length === 0) return;

  const item = currentList[state.basico.currentIndex];
  state.basico.selectedChip = null;

  // Metadata
  const levelBadge = document.getElementById('basicoLevelBadge');
  const themeBadge = document.getElementById('basicoThemeBadge');
  const taskBadge = document.getElementById('basicoTaskBadge');
  const quote = document.getElementById('basicoSentenceQuote');
  const progressText = document.getElementById('basicoProgressText');
  const scoreText = document.getElementById('basicoScoreText');

  if (levelBadge) {
    levelBadge.textContent = `NIVEL ${item.nivel}`;
    levelBadge.className = item.nivel === 1 ? 'badge-level' : 'badge-level badge-green';
  }
  if (themeBadge) themeBadge.textContent = `TEMA: ${item.tema.toUpperCase()}`;
  if (taskBadge) {
    taskBadge.textContent = item.nivel === 1 
      ? 'Separa en Sujeto y Predicado' 
      : 'Identifica Núcleo del Sujeto (NS) y Núcleo del Predicado (NP)';
  }
  if (quote) quote.textContent = `«${item.oracion}»`;
  if (progressText) progressText.textContent = `Ejercicio ${state.basico.currentIndex + 1} de ${currentList.length}`;

  // Calcular aciertos en este bloque
  const totalCorrect = Object.keys(state.basico.history).filter(k => {
    const num = parseInt(k, 10);
    return num >= 1 && num <= 9 && state.basico.history[k].correct;
  }).length;
  if (scoreText) scoreText.textContent = `Aciertos: ${totalCorrect}`;

  // Configurar Dropzones según Nivel 1 (Sujeto/Predicado) o Nivel 2 (NS/NP)
  setupBasicoDropzones(item.nivel);

  // Generar fichas de palabras en el pool
  const pool = document.getElementById('basicoWordsPool');
  if (pool) {
    pool.innerHTML = '';
    item.palabras.forEach((word, idx) => {
      const chip = createWordChip(word, idx, 'basico');
      pool.appendChild(chip);
    });
  }

  // Ocultar feedback y botón siguiente
  hideFeedback('basico');
  const btnNext = document.getElementById('btnBasicoNext');
  const btnCheck = document.getElementById('btnBasicoCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function setupBasicoDropzones(nivel) {
  const grid = document.getElementById('basicoDropzonesGrid');
  if (!grid) return;

  if (nivel === 1) {
    grid.innerHTML = `
      <div class="dropzone-box dropzone-sujeto" data-zone="sujeto">
        <div class="dropzone-header">
          <span class="zone-tag">SUJETO</span>
          <span class="zone-count" id="count-sujeto">0 palabras</span>
        </div>
        <div class="dropzone-content" id="zone-sujeto" data-zone="sujeto">
          <span class="dropzone-placeholder">Arrastra aquí o toca la palabra y luego aquí</span>
        </div>
      </div>
      <div class="dropzone-box dropzone-predicado" data-zone="predicado">
        <div class="dropzone-header">
          <span class="zone-tag">PREDICADO</span>
          <span class="zone-count" id="count-predicado">0 palabras</span>
        </div>
        <div class="dropzone-content" id="zone-predicado" data-zone="predicado">
          <span class="dropzone-placeholder">Arrastra aquí o toca la palabra y luego aquí</span>
        </div>
      </div>
    `;
  } else {
    grid.innerHTML = `
      <div class="dropzone-box dropzone-ns" data-zone="ns">
        <div class="dropzone-header">
          <span class="zone-tag">NÚCLEO DEL SUJETO (NS)</span>
          <span class="zone-count" id="count-ns">0</span>
        </div>
        <div class="dropzone-content" id="zone-ns" data-zone="ns">
          <span class="dropzone-placeholder">Arrastra o toca el sustantivo rector</span>
        </div>
      </div>
      <div class="dropzone-box dropzone-np" data-zone="np">
        <div class="dropzone-header">
          <span class="zone-tag">NÚCLEO DEL PREDICADO (NP)</span>
          <span class="zone-count" id="count-np">0</span>
        </div>
        <div class="dropzone-content" id="zone-np" data-zone="np">
          <span class="dropzone-placeholder">Arrastra o toca el verbo conjugado</span>
        </div>
      </div>
    `;
  }

  // Activar listeners de dropzones
  grid.querySelectorAll('.dropzone-box').forEach(box => {
    attachDropzoneEvents(box, 'basico');
  });
}

function createWordChip(word, index, moduleContext) {
  const chip = document.createElement('div');
  chip.className = 'word-chip';
  chip.textContent = word;
  chip.setAttribute('draggable', 'true');
  chip.dataset.word = word;
  chip.dataset.index = index;
  chip.dataset.module = moduleContext;

  // Eventos de arrastre nativos (Desktop)
  chip.addEventListener('dragstart', handleDragStart);
  chip.addEventListener('dragend', handleDragEnd);

  // Evento táctil / clic (Tap-to-place en Móviles o accesibilidad)
  chip.addEventListener('click', (e) => {
    e.stopPropagation();
    handleChipClick(chip, moduleContext);
  });

  return chip;
}

function handleChipClick(chip, moduleContext) {
  const parentZone = chip.closest('.dropzone-content');

  // Si la ficha ya está en una dropzone, al hacer clic regresa al pool
  if (parentZone) {
    const poolId = moduleContext === 'basico' ? 'basicoWordsPool' : 'compWordsPool';
    const pool = document.getElementById(poolId);
    if (pool) {
      chip.classList.remove('selected-chip');
      pool.appendChild(chip);
      updateDropzoneCount(parentZone);
      checkPlaceholder(parentZone);
      showToast(`«${chip.dataset.word}» devuelta al banco`, 'info');
    }
    return;
  }

  // Si está en el pool: marcar como seleccionada para modo Tap-to-Place
  const allChips = document.querySelectorAll(`[data-module="${moduleContext}"].word-chip`);
  allChips.forEach(c => c.classList.remove('selected-chip'));

  if (state[moduleContext].selectedChip === chip) {
    state[moduleContext].selectedChip = null;
  } else {
    chip.classList.add('selected-chip');
    state[moduleContext].selectedChip = chip;
    showToast(`Toca ahora la caja donde quieres colocar «${chip.dataset.word}»`, 'info');
  }
}

function attachDropzoneEvents(box, moduleContext) {
  const content = box.querySelector('.dropzone-content');
  if (!content) return;

  // Drag over y leave
  box.addEventListener('dragover', (e) => {
    e.preventDefault();
    box.classList.add('drag-over');
  });

  box.addEventListener('dragleave', () => {
    box.classList.remove('drag-over');
  });

  // Drop
  box.addEventListener('drop', (e) => {
    e.preventDefault();
    box.classList.remove('drag-over');

    const word = e.dataTransfer.getData('text/plain');
    const chipIdx = e.dataTransfer.getData('chip-index');
    const chipModule = e.dataTransfer.getData('chip-module');

    if (chipModule !== moduleContext) return;

    const chip = document.querySelector(`[data-module="${moduleContext}"][data-index="${chipIdx}"]`);
    if (chip) {
      placeChipInZone(chip, content);
    }
  });

  // Clic en la dropzone para modo Tap-to-Place
  box.addEventListener('click', () => {
    const selected = state[moduleContext].selectedChip;
    if (selected) {
      placeChipInZone(selected, content);
      selected.classList.remove('selected-chip');
      state[moduleContext].selectedChip = null;
    }
  });
}

function placeChipInZone(chip, dropzoneContent) {
  // Quitar placeholder
  const placeholder = dropzoneContent.querySelector('.dropzone-placeholder');
  if (placeholder) placeholder.style.display = 'none';

  dropzoneContent.appendChild(chip);
  updateDropzoneCount(dropzoneContent);

  // Si la dropzone anterior quedó vacía, restaurar placeholder
  const oldZone = chip.parentElement;
  if (oldZone && oldZone.classList.contains('dropzone-content')) {
    checkPlaceholder(oldZone);
    updateDropzoneCount(oldZone);
  }
}

function checkPlaceholder(zone) {
  const chips = zone.querySelectorAll('.word-chip');
  const placeholder = zone.querySelector('.dropzone-placeholder');
  if (placeholder) {
    placeholder.style.display = chips.length === 0 ? 'block' : 'none';
  }
}

function updateDropzoneCount(zone) {
  const box = zone.closest('.dropzone-box');
  if (!box) return;
  const countEl = box.querySelector('.zone-count');
  if (!countEl) return;
  const count = zone.querySelectorAll('.word-chip').length;
  countEl.textContent = `${count} ${count === 1 ? 'palabra' : 'palabras'}`;
}

function handleDragStart(e) {
  this.classList.add('dragging');
  e.dataTransfer.setData('text/plain', this.dataset.word);
  e.dataTransfer.setData('chip-index', this.dataset.index);
  e.dataTransfer.setData('chip-module', this.dataset.module);
}

function handleDragEnd() {
  this.classList.remove('dragging');
}

function returnAllBasicoWords() {
  const pool = document.getElementById('basicoWordsPool');
  const chips = document.querySelectorAll('[data-module="basico"].word-chip');
  chips.forEach(chip => {
    chip.classList.remove('selected-chip');
    pool.appendChild(chip);
  });
  document.querySelectorAll('#basicoDropzonesGrid .dropzone-content').forEach(zone => {
    checkPlaceholder(zone);
    updateDropzoneCount(zone);
  });
  state.basico.selectedChip = null;
  showToast('Todas las palabras regresaron al banco', 'info');
}

function resetBasicoExercise() {
  returnAllBasicoWords();
  hideFeedback('basico');
  const btnNext = document.getElementById('btnBasicoNext');
  const btnCheck = document.getElementById('btnBasicoCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function showBasicoHint() {
  const currentList = state.basico.filteredList;
  const item = currentList[state.basico.currentIndex];
  showFeedback('basico', 'hint', 'Pista Pedagógica', item.pista);
}

function checkBasicoAnswer() {
  const currentList = state.basico.filteredList;
  const item = currentList[state.basico.currentIndex];
  let isCorrect = false;

  if (item.nivel === 1) {
    const sujetoZone = document.getElementById('zone-sujeto');
    const predicadoZone = document.getElementById('zone-predicado');

    const userSujeto = Array.from(sujetoZone.querySelectorAll('.word-chip')).map(c => c.dataset.word);
    const userPredicado = Array.from(predicadoZone.querySelectorAll('.word-chip')).map(c => c.dataset.word);

    if (userSujeto.length === 0 && userPredicado.length === 0) {
      showToast('Coloca las palabras en Sujeto y Predicado antes de verificar.', 'warning');
      return;
    }

    const expectedSujeto = item.sujeto.join(' ');
    const expectedPredicado = item.predicado.join(' ');

    if (userSujeto.join(' ') === expectedSujeto && userPredicado.join(' ') === expectedPredicado) {
      isCorrect = true;
    }
  } else {
    // Nivel 2: NS y NP
    const nsZone = document.getElementById('zone-ns');
    const npZone = document.getElementById('zone-np');

    const userNs = Array.from(nsZone.querySelectorAll('.word-chip')).map(c => c.dataset.word);
    const userNp = Array.from(npZone.querySelectorAll('.word-chip')).map(c => c.dataset.word);

    if (userNs.length === 0 && userNp.length === 0) {
      showToast('Coloca el Núcleo del Sujeto (NS) y el Núcleo del Predicado (NP).', 'warning');
      return;
    }

    if (userNs.join(' ') === item.ns.join(' ') && userNp.join(' ') === item.np.join(' ')) {
      isCorrect = true;
    }
  }

  // Registrar resultado
  state.basico.history[item.numero] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('basico', 'success', '¡Excelente! Estructura Correcta', item.explicacion);
    const btnNext = document.getElementById('btnBasicoNext');
    const btnCheck = document.getElementById('btnBasicoCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('basico', 'error', 'Revisemos la concordancia', `Revisa bien: ${item.pista}`);
  }
}

function nextBasicoExercise() {
  const currentList = state.basico.filteredList;
  if (state.basico.currentIndex < currentList.length - 1) {
    state.basico.currentIndex++;
    renderBasicoExercise();
  } else {
    showToast('¡Has completado todas las oraciones de este nivel!', 'success');
    showFeedback('basico', 'success', '¡Módulo Completado!', 'Has finalizado los ejercicios de Sujeto y Núcleos. Avanza al Nivel 3 para trabajar con CD y CI.');
  }
}

// ============================================================================
// 7. MÓDULO 03: NIVEL 3 (COMPLEMENTOS CD Y CI)
// ============================================================================
function initCompModule() {
  state.comp.list = ORACIONES.filter(o => o.nivel === 3);
  state.comp.currentIndex = 0;

  const btnReturnAll = document.getElementById('btnCompReturnAll');
  const btnReset = document.getElementById('btnCompReset');
  const btnCheck = document.getElementById('btnCompCheck');
  const btnNext = document.getElementById('btnCompNext');
  const btnHint = document.getElementById('btnCompHint');

  if (btnReturnAll) btnReturnAll.addEventListener('click', returnAllCompWords);
  if (btnReset) btnReset.addEventListener('click', resetCompExercise);
  if (btnCheck) btnCheck.addEventListener('click', checkCompAnswer);
  if (btnNext) btnNext.addEventListener('click', nextCompExercise);
  if (btnHint) btnHint.addEventListener('click', showCompHint);

  renderCompExercise();
}

function renderCompExercise() {
  const list = state.comp.list;
  if (!list || list.length === 0) return;

  const item = list[state.comp.currentIndex];
  state.comp.selectedChip = null;

  const quote = document.getElementById('compSentenceQuote');
  const theme = document.getElementById('compThemeBadge');
  const progress = document.getElementById('compProgressText');
  const score = document.getElementById('compScoreText');

  if (quote) quote.textContent = `«${item.oracion}»`;
  if (theme) theme.textContent = `TEMA: ${item.tema.toUpperCase()}`;
  if (progress) progress.textContent = `Ejercicio ${state.comp.currentIndex + 1} de ${list.length}`;

  const totalCorrect = Object.keys(state.comp.history).filter(k => {
    const num = parseInt(k, 10);
    return num >= 10 && num <= 14 && state.comp.history[k].correct;
  }).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  // Pool de palabras
  const pool = document.getElementById('compWordsPool');
  if (pool) {
    pool.innerHTML = '';
    item.palabras.forEach((word, idx) => {
      const chip = createWordChip(word, idx, 'comp');
      pool.appendChild(chip);
    });
  }

  // Limpiar dropzones
  ['zone-ns', 'zone-np', 'zone-cd', 'zone-ci'].forEach(id => {
    const z = document.getElementById(id);
    if (z) {
      z.querySelectorAll('.word-chip').forEach(c => c.remove());
      checkPlaceholder(z);
      updateDropzoneCount(z);
    }
  });

  // Listeners para dropzones cuádruples
  document.querySelectorAll('#compDropzonesGrid .dropzone-box').forEach(box => {
    attachDropzoneEvents(box, 'comp');
  });

  hideFeedback('comp');
  const btnNext = document.getElementById('btnCompNext');
  const btnCheck = document.getElementById('btnCompCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function returnAllCompWords() {
  const pool = document.getElementById('compWordsPool');
  const chips = document.querySelectorAll('[data-module="comp"].word-chip');
  chips.forEach(chip => {
    chip.classList.remove('selected-chip');
    pool.appendChild(chip);
  });
  ['zone-ns', 'zone-np', 'zone-cd', 'zone-ci'].forEach(id => {
    const z = document.getElementById(id);
    if (z) {
      checkPlaceholder(z);
      updateDropzoneCount(z);
    }
  });
  state.comp.selectedChip = null;
  showToast('Palabras devueltas al banco', 'info');
}

function resetCompExercise() {
  returnAllCompWords();
  hideFeedback('comp');
  const btnNext = document.getElementById('btnCompNext');
  const btnCheck = document.getElementById('btnCompCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function showCompHint() {
  const item = state.comp.list[state.comp.currentIndex];
  showFeedback('comp', 'hint', 'Pistas de Sustitución', item.pista);
}

function checkCompAnswer() {
  const item = state.comp.list[state.comp.currentIndex];

  const nsWords = Array.from(document.querySelectorAll('#zone-ns .word-chip')).map(c => c.dataset.word);
  const npWords = Array.from(document.querySelectorAll('#zone-np .word-chip')).map(c => c.dataset.word);
  const cdWords = Array.from(document.querySelectorAll('#zone-cd .word-chip')).map(c => c.dataset.word);
  const ciWords = Array.from(document.querySelectorAll('#zone-ci .word-chip')).map(c => c.dataset.word);

  if (cdWords.length === 0 && ciWords.length === 0) {
    showToast('Identifica al menos el Complemento Directo (CD) y el Indirecto (CI).', 'warning');
    return;
  }

  const isCorrect = (
    nsWords.join(' ') === item.ns.join(' ') &&
    npWords.join(' ') === item.np.join(' ') &&
    cdWords.join(' ') === item.cd.join(' ') &&
    ciWords.join(' ') === item.ci.join(' ')
  );

  state.comp.history[item.numero] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('comp', 'success', '¡Análisis Impecable!', item.explicacion);
    const btnNext = document.getElementById('btnCompNext');
    const btnCheck = document.getElementById('btnCompCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('comp', 'error', 'Pauta de Corrección', `Revisa los argumentos: ${item.pista}`);
  }
}

function nextCompExercise() {
  if (state.comp.currentIndex < state.comp.list.length - 1) {
    state.comp.currentIndex++;
    renderCompExercise();
  } else {
    showToast('¡Has culminado las oraciones del Nivel 3!', 'success');
    showFeedback('comp', 'success', '¡Módulo 3 Completado!', 'Dominas la identificación de CD y CI. Avanza al Nivel 4 para practicar la transformación con pronombres y la regla de SE.');
  }
}

// ============================================================================
// 8. MÓDULO 04: NIVEL 4 (LABORATORIO DE PRONOMBRES Y REGLA DE SE)
// ============================================================================
function initPronomModule() {
  state.pronom.list = ORACIONES.filter(o => o.nivel === 4);
  state.pronom.currentIndex = 0;
  state.pronom.mode = 'cd';

  // Botones de modo
  const modeButtons = document.querySelectorAll('.transform-mode-selector .btn-mode');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.pronom.mode = btn.dataset.mode;
      updatePronomModeLabel();
      hideFeedback('pronom');
    });
  });

  // Botones de inserción rápida de pronombres
  document.querySelectorAll('.pro-insert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      insertPronounAtCursor(btn.dataset.insert);
    });
  });

  const btnCheck = document.getElementById('btnPronomCheck');
  const btnNext = document.getElementById('btnPronomNext');
  const btnHint = document.getElementById('btnPronomHint');
  const btnClear = document.getElementById('btnPronomClear');

  if (btnCheck) btnCheck.addEventListener('click', checkPronomAnswer);
  if (btnNext) btnNext.addEventListener('click', nextPronomExercise);
  if (btnHint) btnHint.addEventListener('click', showPronomHint);
  if (btnClear) btnClear.addEventListener('click', () => {
    const input = document.getElementById('inputTransformedSentence');
    if (input) {
      input.value = '';
      input.focus();
    }
  });

  renderPronomExercise();
}

function updatePronomModeLabel() {
  const label = document.getElementById('pronomInputLabel');
  const input = document.getElementById('inputTransformedSentence');
  if (!label || !input) return;

  if (state.pronom.mode === 'cd') {
    label.innerHTML = 'Escribe la oración completa reemplazando <strong>solo el Complemento Directo (CD)</strong>:';
    input.placeholder = 'Ej: Juan los envió al profesor.';
  } else if (state.pronom.mode === 'ci') {
    label.innerHTML = 'Escribe la oración completa reemplazando <strong>solo el Complemento Indirecto (CI)</strong>:';
    input.placeholder = 'Ej: Juan le envió los archivos.';
  } else {
    label.innerHTML = 'Escribe la oración reemplazando <strong>ambos complementos (CD + CI)</strong> aplicando la regla de SE:';
    input.placeholder = 'Ej: Juan se los envió.';
  }
}

function insertPronounAtCursor(pronoun) {
  const input = document.getElementById('inputTransformedSentence');
  if (!input) return;

  const start = input.selectionStart || 0;
  const end = input.selectionEnd || 0;
  const val = input.value;

  const before = val.substring(0, start);
  const after = val.substring(end);
  const spacerBefore = (before.length > 0 && !before.endsWith(' ')) ? ' ' : '';
  const spacerAfter = (!after.startsWith(' ') && after.length > 0) ? ' ' : ' ';

  input.value = before + spacerBefore + pronoun + spacerAfter + after;
  const newPos = start + spacerBefore.length + pronoun.length + spacerAfter.length;
  input.setSelectionRange(newPos, newPos);
  input.focus();
}

function renderPronomExercise() {
  const list = state.pronom.list;
  if (!list || list.length === 0) return;

  const item = list[state.pronom.currentIndex];

  const progress = document.getElementById('pronomProgressText');
  const score = document.getElementById('pronomScoreText');
  const cdText = document.getElementById('pronomCdText');
  const cdPro = document.getElementById('pronomCdPro');
  const ciText = document.getElementById('pronomCiText');
  const ciPro = document.getElementById('pronomCiPro');
  const display = document.getElementById('pronomOriginalDisplay');

  if (progress) progress.textContent = `Ejercicio ${state.pronom.currentIndex + 1} de ${list.length}`;
  
  const totalCorrect = Object.keys(state.pronom.history).filter(k => {
    const num = parseInt(k, 10);
    return num >= 15 && num <= 20 && state.pronom.history[k].correct;
  }).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  if (cdText) cdText.textContent = item.cd;
  if (cdPro) cdPro.textContent = item.cdPronombre;
  if (ciText) ciText.textContent = item.ci;
  if (ciPro) ciPro.textContent = item.ciPronombre;

  // Breakdown visual con etiquetas
  if (display) {
    display.innerHTML = `
      <span class="seg-sujeto">${item.sujeto}</span>
      <span class="seg-verb">${item.verbo}</span>
      <span class="seg-cd">${item.cd}</span>
      <span class="seg-ci">${item.ci}</span>.
    `;
  }

  const input = document.getElementById('inputTransformedSentence');
  if (input) input.value = '';

  updatePronomModeLabel();
  hideFeedback('pronom');

  const btnNext = document.getElementById('btnPronomNext');
  const btnCheck = document.getElementById('btnPronomCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function showPronomHint() {
  const item = state.pronom.list[state.pronom.currentIndex];
  let hint = item.pistaCD;
  if (state.pronom.mode === 'ci') hint = item.pistaCI;
  if (state.pronom.mode === 'both') hint = item.pistaBoth;
  showFeedback('pronom', 'hint', 'Pista de Pronominalización', hint);
}

function checkPronomAnswer() {
  const item = state.pronom.list[state.pronom.currentIndex];
  const input = document.getElementById('inputTransformedSentence');
  if (!input) return;

  const rawUser = input.value.trim();
  if (!rawUser) {
    showToast('Por favor escribe tu oración transformada.', 'warning');
    return;
  }

  // Normalización pedagógica (omite puntuación y mayúsculas, colapsa espacios)
  const norm = (s) => (s || '')
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // tolera tildes en chequeo sintáctico si el estudiante las omitió
    .replace(/[.¡!¿?,;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const userNorm = norm(rawUser);

  let expectedVariants = [];
  let isCorrect = false;

  if (state.pronom.mode === 'cd') {
    expectedVariants = [
      norm(item.oracionCD),
      norm(`${item.sujeto} ${item.cdPronombre} ${item.verbo} ${item.ci}`),
      norm(`${item.cdPronombre} ${item.verbo} ${item.ci}`) // sin sujeto explícito
    ];
  } else if (state.pronom.mode === 'ci') {
    expectedVariants = [
      norm(item.oracionCI),
      norm(`${item.sujeto} ${item.ciPronombre} ${item.verbo} ${item.cd}`),
      norm(`${item.ciPronombre} ${item.verbo} ${item.cd}`)
    ];
  } else {
    // Mode both (SE)
    expectedVariants = [
      norm(item.oracionAmbos),
      norm(`${item.sujeto} se ${item.cdPronombre} ${item.verbo}`),
      norm(`se ${item.cdPronombre} ${item.verbo}`)
    ];
  }

  if (expectedVariants.includes(userNorm)) {
    isCorrect = true;
  }

  // Detección de errores comunes para feedback formativo
  let specificAdvice = '';
  if (!isCorrect) {
    if (state.pronom.mode === 'both' && (userNorm.includes('le lo') || userNorm.includes('le la') || userNorm.includes('le los') || userNorm.includes('le las') || userNorm.includes('les lo') || userNorm.includes('les los'))) {
      specificAdvice = '¡Atención a la cacofonía! En español está prohibido decir «le los» o «les la». El pronombre dativo debe transformarse obligatoriamente en <strong>SE</strong>.';
    } else if (state.pronom.mode === 'cd' && userNorm.includes(norm(item.cd))) {
      specificAdvice = `Parece que insertaste el pronombre pero olvidaste eliminar la frase original («${item.cd}»). Al pronominalizar, el pronombre reemplaza por completo al grupo nominal.`;
    } else if (state.pronom.mode === 'ci' && userNorm.includes(norm(item.ci))) {
      specificAdvice = `Parece que conservaste «${item.ci}». Al sustituir por «${item.ciPronombre}», la frase original debe omitirse.`;
    }
  }

  state.pronom.history[item.numero] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    let successMsg = `¡Exacto! Oración modelo: «${state.pronom.mode === 'cd' ? item.oracionCD : (state.pronom.mode === 'ci' ? item.oracionCI : item.oracionAmbos)}».`;
    showFeedback('pronom', 'success', '¡Transformación Impecable!', successMsg);
    const btnNext = document.getElementById('btnPronomNext');
    const btnCheck = document.getElementById('btnPronomCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    const errorMsg = specificAdvice || `Revisa la posición de los pronombres antes del verbo conjugado. ${state.pronom.mode === 'cd' ? item.pistaCD : (state.pronom.mode === 'ci' ? item.pistaCI : item.pistaBoth)}`;
    showFeedback('pronom', 'error', 'Pauta de Revisión', errorMsg);
  }
}

function nextPronomExercise() {
  if (state.pronom.currentIndex < state.pronom.list.length - 1) {
    state.pronom.currentIndex++;
    renderPronomExercise();
  } else {
    showToast('¡Has completado todas las oraciones del Laboratorio de Pronombres!', 'success');
    showFeedback('pronom', 'success', '¡Módulo 4 Concluido!', 'Has completado los 4 niveles de análisis. Visita el Módulo 05 para ver tu calificación global y usar el Analizador Libre.');
  }
}

// ============================================================================
// 9. MÓDULO 05: RESULTADOS GLOBALES Y ANALIZADOR LIBRE
// ============================================================================
function initResultsAndAnalyzer() {
  const btnSync = document.getElementById('btnSyncSheets');
  const btnResetAll = document.getElementById('btnResetAllPractice');
  const btnAnalyze = document.getElementById('btnAnalyzeCustom');

  if (btnSync) btnSync.addEventListener('click', sendToGoogleSheets);
  if (btnResetAll) btnResetAll.addEventListener('click', resetAllPractice);
  if (btnAnalyze) btnAnalyze.addEventListener('click', handleCustomAnalysis);

  // Botones de ejemplos sugeridos
  document.querySelectorAll('.sample-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('customSentenceInput');
      if (input) {
        input.value = btn.dataset.sample;
        handleCustomAnalysis();
      }
    });
  });
}

function updateGlobalScore() {
  const numEl = document.getElementById('globalScoreNum');
  const subEl = document.getElementById('globalScoreSubtitle');
  const l12El = document.getElementById('scoreLevel12');
  const l3El = document.getElementById('scoreLevel3');
  const l4El = document.getElementById('scoreLevel4');

  // Conteo de aciertos por módulo
  let c12 = 0;
  for (let i = 1; i <= 9; i++) {
    if (state.basico.history[i] && state.basico.history[i].correct) c12++;
  }

  let c3 = 0;
  for (let i = 10; i <= 14; i++) {
    if (state.comp.history[i] && state.comp.history[i].correct) c3++;
  }

  let c4 = 0;
  for (let i = 15; i <= 20; i++) {
    if (state.pronom.history[i] && state.pronom.history[i].correct) c4++;
  }

  const totalCorrect = c12 + c3 + c4;
  const scoreOver10 = ((totalCorrect / 20) * 10).toFixed(1);

  if (numEl) numEl.textContent = scoreOver10;
  if (l12El) l12El.textContent = `${c12} / 9`;
  if (l3El) l3El.textContent = `${c3} / 5`;
  if (l4El) l4El.textContent = `${c4} / 6`;

  if (subEl) {
    if (totalCorrect === 0) {
      subEl.textContent = 'Aún no has registrado aciertos. Completa los ejercicios en los módulos anteriores.';
    } else if (totalCorrect < 10) {
      subEl.textContent = `Has acumulado ${totalCorrect} aciertos de 20. ¡Sigue practicando para alcanzar el dominio sintáctico!`;
    } else if (totalCorrect < 18) {
      subEl.textContent = `¡Buen rendimiento! Tienes ${totalCorrect} de 20 aciertos. Estás muy cerca de la excelencia.`;
    } else {
      subEl.textContent = `¡Sobresaliente! ${totalCorrect} de 20 oraciones dominadas. Demuestras competencia sintáctica científica.`;
    }
  }
}

async function sendToGoogleSheets() {
  const statusMsg = document.getElementById('sheetsStatusMessage');
  const btnSync = document.getElementById('btnSyncSheets');

  if (!state.student || !state.student.nombre) {
    showToast('Por favor identifícate con tu nombre antes de enviar calificaciones.', 'warning');
    const modal = document.getElementById('studentModal');
    if (modal) modal.classList.remove('hidden');
    return;
  }

  let c12 = 0;
  for (let i = 1; i <= 9; i++) if (state.basico.history[i]?.correct) c12++;
  let c3 = 0;
  for (let i = 10; i <= 14; i++) if (state.comp.history[i]?.correct) c3++;
  let c4 = 0;
  for (let i = 15; i <= 20; i++) if (state.pronom.history[i]?.correct) c4++;
  const totalCorrect = c12 + c3 + c4;
  const scoreOver10 = parseFloat(((totalCorrect / 20) * 10).toFixed(1));
  const scorePercentage = Math.round((totalCorrect / 20) * 100);

  const payload = {
    nombre: state.student.nombre,
    apellido: state.student.apellido || '',
    curso: state.student.curso || '',
    puntuacion: scorePercentage,
    calificacion: scoreOver10,
    correctas: totalCorrect,
    total: 20,
    fecha: new Date().toLocaleString('es-EC'),
    detalles: [
      { modulo: "Nivel 1 y 2", aciertos: c12, total: 9 },
      { modulo: "Nivel 3", aciertos: c3, total: 5 },
      { modulo: "Nivel 4", aciertos: c4, total: 6 }
    ]
  };

  if (statusMsg) statusMsg.textContent = 'Enviando resultados a la planilla del docente...';
  if (btnSync) btnSync.disabled = true;

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setTimeout(() => {
      if (statusMsg) {
        statusMsg.textContent = `✓ Calificación de ${state.student.nombre} (${scoreOver10}/10) sincronizada correctamente con Google Sheets.`;
        statusMsg.style.color = 'var(--color-green)';
      }
      if (btnSync) btnSync.disabled = false;
      showToast('¡Calificación enviada con éxito!', 'success');
    }, 1200);
  } catch (err) {
    console.error('Error sending to Sheets:', err);
    if (statusMsg) {
      statusMsg.textContent = 'Hubo un inconveniente al conectar con Google Sheets. Intenta nuevamente.';
      statusMsg.style.color = 'var(--color-red)';
    }
    if (btnSync) btnSync.disabled = false;
    showToast('Error de red al sincronizar con Google Sheets.', 'error');
  }
}

function resetAllPractice() {
  if (!confirm('¿Seguro que deseas reiniciar todos los aciertos y comenzar desde cero?')) return;
  state.basico.history = {};
  state.comp.history = {};
  state.pronom.history = {};
  localStorage.removeItem('sintaxisFlowProgress');
  updateGlobalScore();
  renderBasicoExercise();
  renderCompExercise();
  renderPronomExercise();
  showToast('Práctica reiniciada correctamente.', 'info');
}

// ============================================================================
// 10. ANALIZADOR SINTÁCTICO GUIADO LIBRE
// ============================================================================
function handleCustomAnalysis() {
  const input = document.getElementById('customSentenceInput');
  const output = document.getElementById('analyzerOutput');
  const title = document.getElementById('analyzerSentenceTitle');
  const stepVerb = document.getElementById('analysisStepVerb');
  const stepSujeto = document.getElementById('analysisStepSujeto');
  const stepCd = document.getElementById('analysisStepCd');
  const stepCi = document.getElementById('analysisStepCi');

  if (!input) return;
  const sentence = input.value.trim();
  if (!sentence) {
    showToast('Ingresa una oración para analizar.', 'warning');
    return;
  }

  output.style.display = 'block';
  title.textContent = `«${sentence}»`;

  // Motor sintáctico deductivo simplificado
  const words = sentence.replace(/[.¡!¿?]/g, '').split(/\s+/);
  
  // 1. Detección heurística de verbos comunes conjugados
  const verbClues = [
    'descubrió', 'entregaron', 'fascinaron', 'envió', 'puso', 'presentó', 
    'enseñó', 'otorgó', 'transforma', 'piden', 'respetan', 'rompió', 
    'contamina', 'salva', 'crearon', 'mejora', 'ensayan', 'da', 'sugiere', 
    'prometió', 'mostramos', 'explicó', 'lee', 'analiza', 'escribe', 'come', 'compra'
  ];

  let foundVerb = words.find(w => verbClues.includes(w.toLowerCase())) || words[Math.min(2, words.length - 1)];

  stepVerb.innerHTML = `
    El verbo conjugado rector es <strong>«${foundVerb}»</strong>. Cumple la función sintáctica de <strong>Núcleo del Predicado (NP)</strong> y delimita la estructura oracional.
  `;

  // 2. Prueba de concordancia para el Sujeto
  stepSujeto.innerHTML = `
    <strong>Prueba de concordancia:</strong> Si cambiamos el número del verbo <em>«${foundVerb}»</em> (de singular a plural o viceversa), el constituyente nominal que se ve forzado a cambiar para mantener la gramaticalidad es el <strong>Sujeto</strong> (y su núcleo es el sustantivo rector <strong>NS</strong>).
  `;

  // 3. Prueba de CD
  stepCd.innerHTML = `
    <strong>Prueba de Pronominalización acusativa:</strong> Verifica qué elemento responde a la sustitución por los pronombres <em>lo, la, los, las</em>. Si admite la transformación a voz pasiva convirtiéndose en sujeto paciente («fue descubierto por...»), se confirma categóricamente como <strong>Complemento Directo (CD)</strong>.
  `;

  // 4. Prueba de CI y Regla de SE
  stepCi.innerHTML = `
    <strong>Prueba de Pronominalización dativa:</strong> Los segmentos introducidos por <em>«a»</em> que señalan el destinatario son <strong>Complemento Indirecto (CI)</strong> y admiten sustitución por <em>le / les</em>.<br>
    <em>Regla fonética:</em> Al sustituir CD y CI juntos, <em>le/les</em> se transforma en <strong>SE</strong> obligatoriamente.
  `;

  output.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================================
// 11. UTILIDADES VISUALES (FEEDBACK & TOAST)
// ============================================================================
function showFeedback(modulePrefix, type, title, message) {
  const card = document.getElementById(`${modulePrefix}FeedbackCard`);
  const badge = document.getElementById(`${modulePrefix}FeedbackBadge`);
  const titleEl = document.getElementById(`${modulePrefix}FeedbackTitle`);
  const msgEl = document.getElementById(`${modulePrefix}FeedbackMessage`);
  const expBox = document.getElementById(`${modulePrefix}ExplanationBox`);

  if (!card) return;

  card.style.display = 'block';
  card.className = `feedback-card feedback-${type}`;

  if (badge) {
    badge.textContent = type === 'success' ? '¡CORRECTO!' : (type === 'hint' ? 'PISTA' : 'REVISIÓN');
    badge.className = `feedback-badge badge-${type}`;
  }

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.innerHTML = message;
  if (expBox) expBox.style.display = 'none';
}

function hideFeedback(modulePrefix) {
  const card = document.getElementById(`${modulePrefix}FeedbackCard`);
  if (card) card.style.display = 'none';
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('appToast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = `app-toast toast-${type} show`;

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
