/* ============================================================
   app.js — Taller y Simulador de Ensayo Argumentativo
   Lógica pedagógica e interactiva por Lic. Alejandro Córdova
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavigationTabs();
  initXrayAnalysis();
  initThesisLab();
  initGymArguments();
  initEssayBuilder();
});

// =========================================================================
// 0. NOTIFICACIÓN TOAST
// =========================================================================
function showToast(message, duration = 3000) {
  const toast = document.getElementById("appToast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// =========================================================================
// 1. NAVEGACIÓN ENTRE MÓDULOS (TABS)
// =========================================================================
function initNavigationTabs() {
  const tabs = document.querySelectorAll(".nav-tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");

      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    });
  });
}

// =========================================================================
// 2. MÓDULO 1: RADIOGRAFÍA DEL TEXTO MODELO
// =========================================================================
const XRAY_DETAILS = {
  intro: {
    badge: "INTRODUCCIÓN & TESIS",
    title: "El Planteamiento del Problema y la Tesis",
    functionText: "La introducción prepara al lector para el debate. Inicia con una observación cotidiana sobre los roles de género en la infancia (el gancho de familiaridad) y culmina formulando la <strong>Tesis Central</strong>.",
    formula: "Gancho contextual + Controversia latente + Tesis afirmativa debatible.",
    tip: "Fíjate que la tesis no dice simplemente «el deporte es bonito», sino que exige una acción concreta: <em>eliminar la separación por género en etapas formativas</em>."
  },
  arg1: {
    badge: "ARGUMENTO 1 · DATOS Y FISIOLOGÍA",
    title: "Prueba Factual: Variabilidad Biológica",
    functionText: "Apoya la tesis rebatiendo la creencia de que todos los hombres son físicamente superiores a todas las mujeres. Aporta datos biomédicos para demostrar que la variación individual supera el promedio grupal.",
    formula: "Premisa fáctica + Evidencia de variabilidad fisiológica + Conclusión parcial.",
    tip: "Los argumentos de hecho son difíciles de rebatir porque descansan en mediciones y datos observables, no en meras opiniones."
  },
  arg2: {
    badge: "ARGUMENTO 2 · CAUSA Y EFECTO",
    title: "Razonamiento Causal: Consecuencias Psicosociales",
    functionText: "Demuestra que la práctica de segregar desde temprana edad <em>provoca</em> (causa) que los niños interioricen estereotipos que luego se replican en la adultez y el ámbito profesional (efecto).",
    formula: "Acción divisoria en la infancia → Causa directa → Efecto de segregación adulta.",
    tip: "El argumento de causa-efecto convence porque apela a la lógica preventiva: si eliminamos la causa dañina, reducimos el efecto perjudicial."
  },
  arg3: {
    badge: "ARGUMENTO 3 · AUTORIDAD DISCIPLINAR",
    title: "Cita y Respaldo Institucional (ISSA)",
    functionText: "Invoca el criterio de la Asociación Internacional de Sociología del Deporte para demostrar que la propuesta no es una ocurrencia del autor, sino una recomendación respaldada por especialistas.",
    formula: "Conector de adición + Institución cualificada en la materia + Hallazgo.",
    tip: "Recuerda: citar a una autoridad solo es válido si la institución o persona es experta <em>en ese campo exacto</em>."
  },
  arg4: {
    badge: "ARGUMENTO 4 · ANALOGÍA Y PRECEDENTE",
    title: "Comparación: Disciplinas Mixtas Existentes",
    functionText: "Compara la situación con el hipismo y la vela olímpica, donde hombres y mujeres compiten juntos al más alto nivel con éxito rotundo.",
    formula: "Si X funciona con éxito en un contexto análogo → entonces X es viable en este contexto.",
    tip: "La analogía desarma la objeción del «es imposible hacerlo», mostrando que ya se hace y funciona en otros deportes de élite."
  },
  conclusion: {
    badge: "CONCLUSIÓN · SÍNTESIS Y VALORES",
    title: "Cierre Persuasivo y Apelación a Principios",
    functionText: "Sintetiza las 4 líneas de prueba sin repetir mecánicamente cada párrafo y eleva el debate al plano ético: la libertad, la igualdad de oportunidades y la democracia.",
    formula: "Conector conclusivo + Síntesis de pruebas + Horizonte de valor ético.",
    tip: "Una buena conclusión no añade argumentos nuevos sorpresivos; le demuestra al lector que la tesis inicial quedó plenamente justificada."
  }
};

function initXrayAnalysis() {
  const xrayBtns = document.querySelectorAll(".xray-btn");
  const essayPaper = document.getElementById("essayPaper");
  const essayBlocks = document.querySelectorAll(".essay-block");
  const panelTypeBadge = document.getElementById("panelTypeBadge");
  const panelTitle = document.getElementById("panelTitle");
  const panelBody = document.getElementById("panelBody");

  // Filtros de capas
  xrayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      xrayBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      essayPaper.className = "essay-paper";
      if (filter !== "all") {
        essayPaper.classList.add(`highlight-mode-${filter}`);
      }
    });
  });

  // Clics en bloques de texto
  essayBlocks.forEach(block => {
    block.addEventListener("click", () => {
      essayBlocks.forEach(b => b.classList.remove("selected"));
      block.classList.add("selected");

      const blockId = block.getAttribute("data-block-id");
      const info = XRAY_DETAILS[blockId];
      if (!info) return;

      panelTypeBadge.textContent = info.badge;
      panelTitle.textContent = info.title;
      panelBody.innerHTML = `
        <div class="panel-section-title">Función en el Ensayo:</div>
        <p style="margin-bottom: 12px;">${info.functionText}</p>
        
        <div class="panel-section-title">Estructura Retórica:</div>
        <div class="panel-box"><strong>Fórmula:</strong> ${info.formula}</div>

        <div class="panel-section-title">Clave Pedagógica de Alejandro:</div>
        <p style="color: #475569; font-size: 0.9rem;">${info.tip}</p>
      `;
    });
  });
}

// =========================================================================
// 3. MÓDULO 2: LABORATORIO DE TESIS (HECHO VS TESIS & CONSTRUCTOR)
// =========================================================================
const THESIS_QUIZ_DATA = [
  {
    text: "En muchas ciudades del mundo, el tráfico vehicular aumenta en las horas de la mañana.",
    type: "hecho",
    explanation: "Es un hecho comprobable con datos de tráfico o mediciones empíricas; nadie sensato abriría un debate argumentativo sobre si hay o no más tráfico en la hora pico."
  },
  {
    text: "Las alcaldías deben implementar peajes urbanos obligatorios para desincentivar el uso del automóvil particular.",
    type: "tesis",
    explanation: "Es una tesis debatible: contiene un juicio de valor y una propuesta de acción ('deben implementar') que admite argumentos a favor y en contra."
  },
  {
    text: "El agua hierve a 100 grados centígrados al nivel del mar.",
    type: "hecho",
    explanation: "Es una ley física comprobable experimentalmente. Un hecho científico no es materia de opinión ni requiere un ensayo para ser validado."
  },
  {
    text: "La lectura obligatoria de clásicos literarios en el colegio aleja a los jóvenes del placer de leer.",
    type: "tesis",
    explanation: "Es una tesis controvertida. Algunos docentes afirman que los clásicos forjan pensamiento crítico, mientras otros coinciden en que imponen barreras de interés."
  },
  {
    text: "Existen aplicaciones de mensajería instantánea que permiten enviar mensajes cifrados.",
    type: "hecho",
    explanation: "Es una característica técnica constatable de la tecnología actual, no una postura que admita disputa racional."
  },
  {
    text: "Los gobiernos deberían prohibir el uso de teléfonos inteligentes en menores de 14 años para proteger su salud mental.",
    type: "tesis",
    explanation: "Es una tesis contundente. Plantea una intervención legal que despierta debates intensos sobre libertad parental, bienestar digital y autonomía."
  },
  {
    text: "La Constitución ecuatoriana reconoce a la naturaleza como sujeto de derechos.",
    type: "hecho",
    explanation: "Es un dato jurídico explícito en el texto constitucional de 2008. No es debatible que la norma exista, sino un hecho demostrable con el documento."
  },
  {
    text: "El modelo de evaluación basado únicamente en exámenes de opción múltiple empobrece las capacidades analíticas del alumnado.",
    type: "tesis",
    explanation: "Es una tesis pedagógica profunda: cuestiona un sistema establecido y exige presentar razones empíricas y metodológicas para sostenerse."
  }
];

function initThesisLab() {
  let quizIndex = 0;
  let score = 0;

  const quizText = document.getElementById("thesisQuizText");
  const quizCounter = document.getElementById("thesisQuizCounter");
  const quizScore = document.getElementById("thesisQuizScore");
  const btnHecho = document.getElementById("btnChoiceHecho");
  const btnTesis = document.getElementById("btnChoiceTesis");
  const feedbackBox = document.getElementById("thesisQuizFeedback");
  const feedbackBadge = document.getElementById("feedbackBadge");
  const feedbackExplanation = document.getElementById("feedbackExplanation");
  const btnNextQuiz = document.getElementById("btnNextQuiz");

  function loadQuiz(index) {
    const current = THESIS_QUIZ_DATA[index];
    quizText.textContent = `"${current.text}"`;
    quizCounter.textContent = `Pregunta ${index + 1} de ${THESIS_QUIZ_DATA.length}`;
    quizScore.textContent = `Aciertos: ${score}`;
    feedbackBox.style.display = "none";
    btnHecho.disabled = false;
    btnTesis.disabled = false;
  }

  function handleAnswer(selectedType) {
    const current = THESIS_QUIZ_DATA[quizIndex];
    btnHecho.disabled = true;
    btnTesis.disabled = true;

    const isCorrect = (selectedType === current.type);
    if (isCorrect) score++;

    quizScore.textContent = `Aciertos: ${score}`;
    feedbackBox.style.display = "block";
    feedbackBox.className = "quiz-feedback-box " + (isCorrect ? "feedback-correct" : "feedback-incorrect");
    feedbackBadge.textContent = isCorrect ? "✓ ¡CORRECTO!" : "✗ REVISA EL CRITERIO";
    feedbackExplanation.innerHTML = `<strong>${current.type === "hecho" ? "Es un HECHO" : "Es una TESIS"}:</strong> ${current.explanation}`;

    if (quizIndex === THESIS_QUIZ_DATA.length - 1) {
      btnNextQuiz.textContent = "Ver resultado final y reiniciar";
    } else {
      btnNextQuiz.textContent = "Siguiente afirmación →";
    }
  }

  btnHecho.addEventListener("click", () => handleAnswer("hecho"));
  btnTesis.addEventListener("click", () => handleAnswer("tesis"));

  btnNextQuiz.addEventListener("click", () => {
    quizIndex++;
    if (quizIndex >= THESIS_QUIZ_DATA.length) {
      alert(`¡Completaste el entrenamiento! Lograste ${score} aciertos de ${THESIS_QUIZ_DATA.length}. ¡Excelente práctica de discriminación lógica!`);
      quizIndex = 0;
      score = 0;
    }
    loadQuiz(quizIndex);
  });

  loadQuiz(0);

  // --- CONSTRUCTOR Y VALIDADOR DE TESIS ---
  const topicSelector = document.getElementById("topicSelector");
  const thesisInput = document.getElementById("thesisInput");
  const critLength = document.getElementById("crit-length");
  const critDebatible = document.getElementById("crit-debatible");
  const critEvitaHecho = document.getElementById("crit-evita-hecho");
  const thesisStatusAlert = document.getElementById("thesisStatusAlert");
  const btnUseThesis = document.getElementById("btnUseThesis");

  const TOPIC_TEMPLATES = {
    "ia-edu": "La integración crítica de la inteligencia artificial generativa en la educación secundaria debe ser obligatoria para formar competencias de pensamiento reflexivo.",
    "redes-juventud": "El acceso a redes sociales en menores de 16 años debe restringirse legalmente para prevenir crisis de atención y ansiedad social.",
    "tareas-casa": "Las instituciones educativas deben erradicar las tareas obligatorias en casa porque profundizan la desigualdad social y el agotamiento familiar.",
    "lectura-digital": "El reemplazo total de libros impresos por tabletas escolares perjudica la comprensión lectora profunda y la retención conceptual.",
    "deporte-genero": "La categorización deportiva escolar debe basarse en destrezas y contextura física, no en la división biológica binaria."
  };

  topicSelector.addEventListener("change", () => {
    const val = topicSelector.value;
    if (TOPIC_TEMPLATES[val]) {
      thesisInput.value = TOPIC_TEMPLATES[val];
      validateThesis();
    }
  });

  thesisInput.addEventListener("input", validateThesis);

  function validateThesis() {
    const text = thesisInput.value.trim();
    const words = text.split(/\s+/).filter(w => w.length > 0);

    // Criterio 1: Longitud
    const hasLength = words.length >= 7;
    critLength.classList.toggle("valid", hasLength);
    critLength.querySelector(".crit-icon").textContent = hasLength ? "✓" : "○";

    // Criterio 2: Palabras debatibles (debe, exige, indispensable, perjudicial, etc.)
    const debatibleRegex = /(debe|deben|debería|deberían|necesario|indispensable|fundamental|injusto|perjudicial|dañino|urgente|beneficioso|amenaza|prioridad)/i;
    const isDebatible = debatibleRegex.test(text);
    critDebatible.classList.toggle("valid", isDebatible);
    critDebatible.querySelector(".crit-icon").textContent = isDebatible ? "✓" : "○";

    // Criterio 3: Evitar simple hecho informativo
    const isFactOnly = /^(en el año|en el ecuador existen|la capital de|el agua|según el censo)/i.test(text);
    const avoidsFact = text.length > 0 && !isFactOnly;
    critEvitaHecho.classList.toggle("valid", avoidsFact);
    critEvitaHecho.querySelector(".crit-icon").textContent = avoidsFact ? "✓" : "○";

    const allValid = hasLength && isDebatible && avoidsFact;
    btnUseThesis.disabled = !allValid;

    if (text.length === 0) {
      thesisStatusAlert.className = "thesis-status-alert";
      thesisStatusAlert.textContent = "Escribe tu tesis para recibir retroalimentación automática.";
    } else if (allValid) {
      thesisStatusAlert.className = "thesis-status-alert valid";
      thesisStatusAlert.innerHTML = "<strong>¡Tesis bien formulada!</strong> Es una oración afirmativa, debatible y susceptible de recibir argumentos sólidos.";
    } else {
      thesisStatusAlert.className = "thesis-status-alert";
      thesisStatusAlert.textContent = "Ajusta la redacción: asegúrate de usar un verbo de juicio o deber (debe, perjudica, requiere) para que sea una postura debatible.";
    }
  }

  btnUseThesis.addEventListener("click", () => {
    const text = thesisInput.value.trim();
    const builderThesisInput = document.getElementById("inputBuilderThesis");
    if (builderThesisInput) {
      builderThesisInput.value = text;
      // Ir a la pestaña 4
      const tabConstructor = document.getElementById("btn-tab-constructor");
      if (tabConstructor) tabConstructor.click();
      showToast("¡Tesis transferida exitosamente al Simulador Constructor!");
      // Actualizar vista previa
      updateEssayPreview();
    }
  });
}

// =========================================================================
// 4. MÓDULO 3: GIMNASIO DE TIPOS DE ARGUMENTOS
// =========================================================================
const GYM_CASES = [
  {
    topic: "TEMA: TAREAS ESCOLARES",
    quote: "«Según el informe internacional PISA de la OCDE, los países con menor carga de deberes para la casa obtienen rendimientos académicos más equilibrados y menores índices de ansiedad estudiantil.»",
    correctType: "autoridad",
    explanation: "Apela al prestigio metodológico de la OCDE y su informe PISA, citando una institución internacional reconocida como garante de la afirmación."
  },
  {
    topic: "TEMA: REDES SOCIALES Y SUEÑO",
    quote: "«La exposición prolongada a la luz azul de las pantallas antes de dormir bloquea la segregación de melatonina, lo que produce insomnio crónico y bajo rendimiento diurno en los adolescentes.»",
    correctType: "causa",
    explanation: "Describe un encadenamiento causal directo: la luz azul (causa) bloquea una hormona y desencadena el insomnio (consecuencia directa)."
  },
  {
    topic: "TEMA: DESIGUALDAD SALARIAL",
    quote: "«En América Latina, el Instituto Nacional de Estadísticas registra que las mujeres con título universitario perciben en promedio un 22% menos de remuneración que sus pares masculinos en puestos idénticos.»",
    correctType: "hecho",
    explanation: "Es un argumento basado en datos estadísticos y mediciones numéricas oficiales verificables."
  },
  {
    topic: "TEMA: REGULACIÓN DE LA INTELIGENCIA ARTIFICIAL",
    quote: "«Así como en el siglo XX la aviación comercial solo despegó de forma segura cuando se establecieron estrictos protocolos internacionales de vuelo, la inteligencia artificial requiere normas de auditoría global antes de su despliegue masivo.»",
    correctType: "comparacion",
    explanation: "Utiliza una analogía histórica (la industria de la aviación) para sostener que un fenómeno nuevo (la IA) necesita el mismo tipo de regulación preventiva."
  },
  {
    topic: "TEMA: ACCESO A LA EDUCACIÓN SUPERIOR",
    quote: "«Impedir el acceso a la universidad a jóvenes talentosos solo por su origen económico quebranta el principio elemental de justicia y degrada el ideal democrático de una sociedad equitativa.»",
    correctType: "valores",
    explanation: "Apela a principios éticos universales (la justicia, la igualdad y la democracia), apelando a lo que una sociedad moralmente sana debe garantizar."
  },
  {
    topic: "TEMA: DIVERSIDAD EN EL AULA",
    quote: "«Investigaciones del Centro de Desarrollo Cognitivo de Harvard señalan que los grupos estudiantiles diversos resuelven problemas complejos un 35% más rápido que los grupos homogéneos.»",
    correctType: "autoridad",
    explanation: "Cita los hallazgos y el prestigio científico de la Universidad de Harvard para validar la afirmación sobre el beneficio de la diversidad."
  }
];

function initGymArguments() {
  let currentCaseIndex = 0;
  const topicTag = document.getElementById("gymTopicTag");
  const quoteText = document.getElementById("gymQuoteText");
  const gymCounter = document.getElementById("gymCounter");
  const optionsGrid = document.getElementById("gymOptionsGrid");
  const feedbackCard = document.getElementById("gymFeedbackCard");
  const feedbackTitle = document.getElementById("gymFeedbackTitle");
  const feedbackExplanation = document.getElementById("gymFeedbackExplanation");
  const btnNextGym = document.getElementById("btnNextGym");

  function loadGymCase(index) {
    const c = GYM_CASES[index];
    topicTag.textContent = c.topic;
    quoteText.textContent = c.quote;
    gymCounter.textContent = `Caso ${index + 1} de ${GYM_CASES.length}`;
    feedbackCard.style.display = "none";

    optionsGrid.querySelectorAll(".gym-option-btn").forEach(btn => {
      btn.disabled = false;
      btn.style.opacity = "1";
    });
  }

  optionsGrid.querySelectorAll(".gym-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-type");
      const current = GYM_CASES[currentCaseIndex];

      optionsGrid.querySelectorAll(".gym-option-btn").forEach(b => b.disabled = true);

      const isCorrect = (selected === current.correctType);
      feedbackCard.style.display = "block";
      feedbackCard.className = "gym-feedback-card " + (isCorrect ? "correct" : "incorrect");
      feedbackTitle.textContent = isCorrect ? "✓ ¡Identificación Correcta!" : "✗ Tipología Imprecisa";
      feedbackExplanation.textContent = current.explanation;

      if (currentCaseIndex === GYM_CASES.length - 1) {
        btnNextGym.textContent = "Reiniciar gimnasio argumentativo";
      } else {
        btnNextGym.textContent = "Siguiente caso →";
      }
    });
  });

  btnNextGym.addEventListener("click", () => {
    currentCaseIndex++;
    if (currentCaseIndex >= GYM_CASES.length) {
      currentCaseIndex = 0;
    }
    loadGymCase(currentCaseIndex);
  });

  loadGymCase(0);
}

// =========================================================================
// 5. MÓDULO 4: SIMULADOR CONSTRUCTOR DE ENSAYO (ANDAMIAJE & RÚBRICA)
// =========================================================================
const STORAGE_KEY = "alejandro_ensayo_draft_v1";

function initEssayBuilder() {
  // Accordion Steps
  const steps = document.querySelectorAll(".accordion-step");
  steps.forEach(step => {
    const header = step.querySelector(".step-header");
    header.addEventListener("click", () => {
      const isOpen = step.classList.contains("open");
      steps.forEach(s => s.classList.remove("open"));
      if (!isOpen) step.classList.add("open");
    });
  });

  // Conectores rápidos
  document.querySelectorAll(".conn-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = pill.getAttribute("data-target");
      const insertText = pill.getAttribute("data-text");
      const targetInput = document.getElementById(targetId);
      if (!targetInput) return;

      const start = targetInput.selectionStart || targetInput.value.length;
      const end = targetInput.selectionEnd || targetInput.value.length;
      const val = targetInput.value;

      targetInput.value = val.substring(0, start) + insertText + val.substring(end);
      targetInput.focus();
      targetInput.selectionStart = targetInput.selectionEnd = start + insertText.length;

      updateEssayPreview();
      saveDraft();
    });
  });

  // Inputs con autosave
  const inputsToTrack = [
    "inputEssayTitle", "inputEssayAuthor", "inputIntroHook", "inputBuilderThesis",
    "arg1Type", "inputArg1Premise", "inputArg1Evidence",
    "arg2Type", "inputArg2Premise", "inputArg2Evidence",
    "inputCounterargOpponent", "inputCounterargRefutation",
    "inputConclusionSynthesis", "inputConclusionCall"
  ];

  inputsToTrack.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        updateEssayPreview();
        saveDraft();
      });
      el.addEventListener("change", () => {
        updateEssayPreview();
        saveDraft();
      });
    }
  });

  // Recuperar borrador si existe
  loadDraft();

  // Exportar y limpiar
  document.getElementById("btnCopyEssay").addEventListener("click", copyEssayToClipboard);
  document.getElementById("btnDownloadTxt").addEventListener("click", downloadEssayTxt);
  document.getElementById("btnPrintEssay").addEventListener("click", () => window.print());
  document.getElementById("btnClearDraft").addEventListener("click", clearDraft);
}

function updateEssayPreview() {
  const title = (document.getElementById("inputEssayTitle")?.value || "").trim();
  const author = (document.getElementById("inputEssayAuthor")?.value || "").trim();
  const hook = (document.getElementById("inputIntroHook")?.value || "").trim();
  const thesis = (document.getElementById("inputBuilderThesis")?.value || "").trim();
  
  const arg1Premise = (document.getElementById("inputArg1Premise")?.value || "").trim();
  const arg1Evidence = (document.getElementById("inputArg1Evidence")?.value || "").trim();
  
  const arg2Premise = (document.getElementById("inputArg2Premise")?.value || "").trim();
  const arg2Evidence = (document.getElementById("inputArg2Evidence")?.value || "").trim();
  
  const opponent = (document.getElementById("inputCounterargOpponent")?.value || "").trim();
  const refutation = (document.getElementById("inputCounterargRefutation")?.value || "").trim();
  
  const conclusionSyn = (document.getElementById("inputConclusionSynthesis")?.value || "").trim();
  const conclusionCall = (document.getElementById("inputConclusionCall")?.value || "").trim();

  const previewBox = document.getElementById("assembledEssayView");

  // Verificar si está vacío
  const hasContent = title || hook || thesis || arg1Premise || arg2Premise || conclusionSyn;
  if (!hasContent) {
    previewBox.innerHTML = `
      <p class="empty-preview-note">
        A medida que completes los pasos en la izquierda, tu texto argumentativo se irá ensamblando aquí automáticamente en tiempo real.
      </p>
    `;
    updateRubric(0, 0, 0, 0, 0, 0);
    return;
  }

  // Renderizar preview
  let html = "";
  if (title) {
    html += `<h4 class="preview-rendered-title">${title}</h4>`;
  }
  if (author) {
    html += `<p class="preview-rendered-author">Por: ${author}</p>`;
  }

  // Párrafo 1: Intro
  if (hook || thesis) {
    html += `<p class="preview-p">`;
    if (hook) html += `${hook} `;
    if (thesis) html += `<strong class="preview-thesis-highlight">${thesis}</strong>`;
    html += `</p>`;
  }

  // Párrafo 2: Arg 1
  if (arg1Premise || arg1Evidence) {
    html += `<p class="preview-p">`;
    if (arg1Premise) html += `${arg1Premise} `;
    if (arg1Evidence) html += `${arg1Evidence}`;
    html += `</p>`;
  }

  // Párrafo 3: Arg 2
  if (arg2Premise || arg2Evidence) {
    html += `<p class="preview-p">`;
    if (arg2Premise) html += `${arg2Premise} `;
    if (arg2Evidence) html += `${arg2Evidence}`;
    html += `</p>`;
  }

  // Párrafo 4: Contraargumento
  if (opponent || refutation) {
    html += `<p class="preview-p">`;
    if (opponent) html += `<em>${opponent}</em> `;
    if (refutation) html += `${refutation}`;
    html += `</p>`;
  }

  // Párrafo 5: Conclusión
  if (conclusionSyn || conclusionCall) {
    html += `<p class="preview-p">`;
    if (conclusionSyn) html += `${conclusionSyn} `;
    if (conclusionCall) html += `${conclusionCall}`;
    html += `</p>`;
  }

  previewBox.innerHTML = html;

  // Actualizar indicadores de pasos
  updateStepStatus("status-step-1", title.length > 5);
  updateStepStatus("status-step-2", thesis.length > 10);
  updateStepStatus("status-step-3", (arg1Premise.length > 8 && arg2Premise.length > 8));
  updateStepStatus("status-step-4", (opponent.length > 8 && refutation.length > 8));
  updateStepStatus("status-step-5", (conclusionSyn.length > 8));

  // Actualizar rúbrica
  updateRubric(
    title.length > 3 ? 1 : 0,
    thesis.length > 10 ? 1 : 0,
    arg1Premise.length > 8 ? 1 : 0,
    arg2Premise.length > 8 ? 1 : 0,
    (opponent.length > 6 && refutation.length > 6) ? 1 : 0,
    conclusionSyn.length > 8 ? 1 : 0
  );
}

function updateStepStatus(id, isDone) {
  const el = document.getElementById(id);
  if (!el) return;
  if (isDone) {
    el.textContent = "✓ Completado";
    el.className = "step-status completed";
  } else {
    el.textContent = "En edición";
    el.className = "step-status";
  }
}

function updateRubric(t, th, a1, a2, co, cl) {
  const items = [
    { id: "chk-title", ok: t === 1, text: "Título y autor asignados" },
    { id: "chk-thesis", ok: th === 1, text: "Tesis clara y formulada" },
    { id: "chk-arg1", ok: a1 === 1, text: "Argumento 1 fundamentado" },
    { id: "chk-arg2", ok: a2 === 1, text: "Argumento 2 fundamentado" },
    { id: "chk-counter", ok: co === 1, text: "Contraargumento y refutación" },
    { id: "chk-conclusion", ok: cl === 1, text: "Conclusión y síntesis" }
  ];

  let completedCount = 0;
  items.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      if (item.ok) {
        el.className = "chk-item valid";
        el.textContent = `✓ ${item.text}`;
        completedCount++;
      } else {
        el.className = "chk-item";
        el.textContent = `❌ ${item.text}`;
      }
    }
  });

  const percent = Math.round((completedCount / items.length) * 100);
  const scorePercent = document.getElementById("rubricScorePercent");
  const rubricBar = document.getElementById("rubricBar");
  if (scorePercent) scorePercent.textContent = `${percent}%`;
  if (rubricBar) rubricBar.style.width = `${percent}%`;
}

// ── GUARDADO LOCAL (LOCALSTORAGE) ────────────────────────────
function saveDraft() {
  const draft = {
    title: document.getElementById("inputEssayTitle")?.value || "",
    author: document.getElementById("inputEssayAuthor")?.value || "",
    hook: document.getElementById("inputIntroHook")?.value || "",
    thesis: document.getElementById("inputBuilderThesis")?.value || "",
    arg1Type: document.getElementById("arg1Type")?.value || "",
    arg1Premise: document.getElementById("inputArg1Premise")?.value || "",
    arg1Evidence: document.getElementById("inputArg1Evidence")?.value || "",
    arg2Type: document.getElementById("arg2Type")?.value || "",
    arg2Premise: document.getElementById("inputArg2Premise")?.value || "",
    arg2Evidence: document.getElementById("inputArg2Evidence")?.value || "",
    opponent: document.getElementById("inputCounterargOpponent")?.value || "",
    refutation: document.getElementById("inputCounterargRefutation")?.value || "",
    conclusionSyn: document.getElementById("inputConclusionSynthesis")?.value || "",
    conclusionCall: document.getElementById("inputConclusionCall")?.value || "",
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch (e) {
    // Silently ignore storage quota or disabled storage
  }
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const draft = JSON.parse(raw);
    
    if (draft.title) document.getElementById("inputEssayTitle").value = draft.title;
    if (draft.author) document.getElementById("inputEssayAuthor").value = draft.author;
    if (draft.hook) document.getElementById("inputIntroHook").value = draft.hook;
    if (draft.thesis) document.getElementById("inputBuilderThesis").value = draft.thesis;
    if (draft.arg1Type) document.getElementById("arg1Type").value = draft.arg1Type;
    if (draft.arg1Premise) document.getElementById("inputArg1Premise").value = draft.arg1Premise;
    if (draft.arg1Evidence) document.getElementById("inputArg1Evidence").value = draft.arg1Evidence;
    if (draft.arg2Type) document.getElementById("arg2Type").value = draft.arg2Type;
    if (draft.arg2Premise) document.getElementById("inputArg2Premise").value = draft.arg2Premise;
    if (draft.arg2Evidence) document.getElementById("inputArg2Evidence").value = draft.arg2Evidence;
    if (draft.opponent) document.getElementById("inputCounterargOpponent").value = draft.opponent;
    if (draft.refutation) document.getElementById("inputCounterargRefutation").value = draft.refutation;
    if (draft.conclusionSyn) document.getElementById("inputConclusionSynthesis").value = draft.conclusionSyn;
    if (draft.conclusionCall) document.getElementById("inputConclusionCall").value = draft.conclusionCall;

    updateEssayPreview();
  } catch (e) {}
}

function clearDraft() {
  if (confirm("¿Deseas restablecer y borrar todo el borrador actual para empezar de nuevo?")) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    
    document.querySelectorAll(".custom-input, .custom-textarea").forEach(input => {
      if (input.id !== "thesisInput") input.value = "";
    });
    updateEssayPreview();
    showToast("Borrador restablecido.");
  }
}

// ── EXPORTACIONES ────────────────────────────────────────────
function getPlainTextEssay() {
  const title = (document.getElementById("inputEssayTitle")?.value || "Ensayo sin título").trim();
  const author = (document.getElementById("inputEssayAuthor")?.value || "Autor anónimo").trim();
  const hook = (document.getElementById("inputIntroHook")?.value || "").trim();
  const thesis = (document.getElementById("inputBuilderThesis")?.value || "").trim();
  const a1P = (document.getElementById("inputArg1Premise")?.value || "").trim();
  const a1E = (document.getElementById("inputArg1Evidence")?.value || "").trim();
  const a2P = (document.getElementById("inputArg2Premise")?.value || "").trim();
  const a2E = (document.getElementById("inputArg2Evidence")?.value || "").trim();
  const opp = (document.getElementById("inputCounterargOpponent")?.value || "").trim();
  const ref = (document.getElementById("inputCounterargRefutation")?.value || "").trim();
  const cS = (document.getElementById("inputConclusionSynthesis")?.value || "").trim();
  const cC = (document.getElementById("inputConclusionCall")?.value || "").trim();

  return `${title.toUpperCase()}
Por: ${author}
Fecha: ${new Date().toLocaleDateString('es-ES')}
Plataforma: alejandrocordova.com — Taller y Simulador de Ensayo Argumentativo

==================================================
INTRODUCCIÓN Y TESIS
==================================================
${hook} ${thesis}

==================================================
CUERPO ARGUMENTATIVO
==================================================
[Argumento 1]
${a1P} ${a1E}

[Argumento 2]
${a2P} ${a2E}

[Contraargumento y Refutación]
${opp} ${ref}

==================================================
CONCLUSIÓN
==================================================
${cS} ${cC}
`;
}

function copyEssayToClipboard() {
  const text = getPlainTextEssay();
  navigator.clipboard.writeText(text).then(() => {
    showToast("¡Texto completo copiado al portapapeles!");
  }).catch(() => {
    showToast("No se pudo copiar automáticamente. Puedes seleccionar el texto manualmente.");
  });
}

function downloadEssayTxt() {
  const text = getPlainTextEssay();
  const title = (document.getElementById("inputEssayTitle")?.value || "ensayo_argumentativo").toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("¡Archivo descargado correctamente!");
}
