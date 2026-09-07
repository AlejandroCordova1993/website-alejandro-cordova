/* ============================================================
   app.js — Taller y Simulador de Ensayo Argumentativo
   Lógica pedagógica e interactiva por Msc. Alejandro Córdova
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavigationTabs();
  initTheoryModule();
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

      // Notificar cambio de tab a course-shell y observadores
      document.dispatchEvent(new CustomEvent("tab-changed", { detail: { tabId: targetId } }));
    });
  });
}

// =========================================================================
// 2. MÓDULO 01: FUNDAMENTOS TEÓRICOS & CAJA DE CONECTORES
// =========================================================================
function initTheoryModule() {
  // Botones de salto entre módulos dentro de la teoría
  const jumpButtons = document.querySelectorAll(".btn-jump-module[data-jump]");
  jumpButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTabId = btn.getAttribute("data-jump");
      const targetTabBtn = document.querySelector(`.nav-tab[data-tab="${targetTabId}"]`);
      if (targetTabBtn) {
        targetTabBtn.click();
      }
    });
  });

  // Filtros de categorías de conectores
  const connTabs = document.querySelectorAll(".conn-tab");
  const connCards = document.querySelectorAll(".conn-item-card");

  connTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      connTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const cat = tab.getAttribute("data-conn-cat");
      connCards.forEach(card => {
        if (cat === "all" || card.getAttribute("data-cat") === cat) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Copia de conectores al portapapeles
  const copyButtons = document.querySelectorAll(".btn-copy-conn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Conector copiado: "${textToCopy}"`);
        const originalText = btn.textContent;
        btn.textContent = "✓";
        btn.style.color = "#16A34A";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = "";
        }, 1200);
      }).catch(() => {
        showToast(`Conector listo: "${textToCopy}"`);
      });
    });
  });
}

// =========================================================================
// 3. MÓDULO 02: RADIOGRAFÍA DEL TEXTO MODELO
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

        <div class="panel-section-title">Clave Pedagógica de Msc. Alejandro Córdova:</div>
        <p style="color: #475569; font-size: 0.9rem;">${info.tip}</p>
      `;
    });
  });
}

// =========================================================================
// 4. MÓDULO 03: LABORATORIO DE TESIS (HECHO VS TESIS & CONSTRUCTOR)
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
    text: "La jornada laboral de cuatro días a la semana eleva la productividad docente y disminuye el desgaste emocional.",
    type: "tesis",
    explanation: "Es una tesis audaz: plantea una reforma laboral con hipótesis de causalidad que debe sustentarse con estudios y evidencias frente a sus detractores."
  }
];

function initThesisLab() {
  let currentQuizIdx = 0;
  let quizScore = 0;

  const quizCounter = document.getElementById("thesisQuizCounter");
  const quizScoreDisplay = document.getElementById("thesisQuizScore");
  const quizText = document.getElementById("thesisQuizText");
  const btnChoiceHecho = document.getElementById("btnChoiceHecho");
  const btnChoiceTesis = document.getElementById("btnChoiceTesis");
  const quizFeedback = document.getElementById("thesisQuizFeedback");
  const feedbackBadge = document.getElementById("feedbackBadge");
  const feedbackExplanation = document.getElementById("feedbackExplanation");
  const btnNextQuiz = document.getElementById("btnNextQuiz");

  function loadQuiz(index) {
    const item = THESIS_QUIZ_DATA[index];
    quizCounter.textContent = `Afirmación ${index + 1} de ${THESIS_QUIZ_DATA.length}`;
    quizText.textContent = `"${item.text}"`;
    quizFeedback.style.display = "none";
    btnChoiceHecho.disabled = false;
    btnChoiceTesis.disabled = false;
    btnChoiceHecho.classList.remove("selected-correct", "selected-wrong");
    btnChoiceTesis.classList.remove("selected-correct", "selected-wrong");
  }

  function handleChoice(selectedType) {
    const item = THESIS_QUIZ_DATA[currentQuizIdx];
    const isCorrect = selectedType === item.type;

    btnChoiceHecho.disabled = true;
    btnChoiceTesis.disabled = true;

    if (isCorrect) {
      quizScore++;
      quizScoreDisplay.textContent = `Aciertos: ${quizScore}`;
      feedbackBadge.textContent = "¡CORRECTO!";
      feedbackBadge.className = "feedback-badge badge-correct";
    } else {
      feedbackBadge.textContent = "INCORRECTO";
      feedbackBadge.className = "feedback-badge badge-wrong";
    }

    feedbackExplanation.textContent = item.explanation;
    quizFeedback.style.display = "block";
  }

  if (btnChoiceHecho && btnChoiceTesis) {
    btnChoiceHecho.addEventListener("click", () => handleChoice("hecho"));
    btnChoiceTesis.addEventListener("click", () => handleChoice("tesis"));

    btnNextQuiz.addEventListener("click", () => {
      currentQuizIdx = (currentQuizIdx + 1) % THESIS_QUIZ_DATA.length;
      loadQuiz(currentQuizIdx);
    });

    loadQuiz(0);
  }

  // --- VALIDADOR EN TIEMPO REAL ---
  const topicSelector = document.getElementById("topicSelector");
  const thesisInput = document.getElementById("thesisInput");
  const critLength = document.getElementById("crit-length");
  const critDebatible = document.getElementById("crit-debatible");
  const critEvitaHecho = document.getElementById("crit-evita-hecho");
  const thesisStatusAlert = document.getElementById("thesisStatusAlert");
  const btnUseThesis = document.getElementById("btnUseThesis");

  const TOPIC_TEMPLATES = {
    "ia-edu": "Las instituciones educativas deben incorporar la alfabetización en IA como competencia obligatoria en vez de prohibir su uso en las aulas.",
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

    // Criterio 2: Palabras debatibles
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
      thesisStatusAlert.textContent = "Escribe tu tesis para recibir retroalimentación automática.";
      thesisStatusAlert.className = "thesis-status-alert";
    } else if (allValid) {
      thesisStatusAlert.textContent = "✓ ¡Excelente formulación! Cumple con los criterios de debatibilidad, delimitación y postura explícita.";
      thesisStatusAlert.className = "thesis-status-alert alert-success";
    } else {
      thesisStatusAlert.textContent = "⚠️ Revisa los criterios pendientes arriba para pulir tu tesis y hacerla verdaderamente argumentativa.";
      thesisStatusAlert.className = "thesis-status-alert alert-warning";
    }
  }

  btnUseThesis.addEventListener("click", () => {
    const text = thesisInput.value.trim();
    const builderThesisInput = document.getElementById("inputBuilderThesis");
    if (builderThesisInput) {
      builderThesisInput.value = text;
      // Ir a la pestaña del constructor
      const tabConstructor = document.getElementById("btn-tab-constructor");
      if (tabConstructor) tabConstructor.click();
      showToast("¡Tesis transferida exitosamente al Simulador Constructor!");
      updateEssayPreview();
    }
  });
}

// =========================================================================
// 5. MÓDULO 04: GIMNASIO DE TIPOS DE ARGUMENTOS
// =========================================================================
const GYM_CASES = [
  {
    topic: "TAREAS ESCOLARES Y BIENESTAR",
    quote: "Según el informe internacional PISA de la OCDE, los países con jornadas escolares extensas y menor carga de deberes para la casa obtienen rendimientos académicos más equilibrados y menores índices de ansiedad estudiantil.",
    correctType: "autoridad",
    explanation: "Es un argumento de autoridad y estudio formal respaldado por un organismo de investigación internacional de alto prestigio (OCDE / PISA)."
  },
  {
    topic: "USO DE DISPOSITIVOS DIGITALES",
    quote: "El uso excesivo de pantallas iluminadas antes de dormir suprime la segregación de melatonina, lo cual provoca insomnio crónico y merma la capacidad de concentración matutina en un 30%.",
    correctType: "causa",
    explanation: "Es un argumento de causa y consecuencia: explica con rigor cómo una acción fisiológica desencadena directamente un perjuicio funcional."
  },
  {
    topic: "ALFABETIZACIÓN FINANCIERA",
    quote: "Durante el último censo de inclusión financiera, se constató que el 68% de las familias deudoras carecían de formación elemental sobre tasas de interés compuesto e inflación.",
    correctType: "hecho",
    explanation: "Es un argumento basado en datos y hechos numéricos verificables obtenidos de mediciones estadísticas oficiales."
  },
  {
    topic: "REGULACIÓN DE PATINETAS ELÉCTRICAS",
    quote: "Así como la obligatoriedad del cinturón de seguridad en los automóviles redujo drásticamente la mortalidad vial sin vulnerar los derechos de los conductores, la regulación de patinetas en aceras protegerá la vida de los peatones.",
    correctType: "comparacion",
    explanation: "Es un argumento por analogía: toma un precedente regulatorio aceptado en el tráfico vehicular y lo traslada para justificar una nueva norma de movilidad urbana."
  },
  {
    topic: "ACCESO UNIVERSAL AL AGUA",
    quote: "Negar el suministro de agua potable a barrios informales bajo pretextos burocráticos atenta contra la dignidad humana y el derecho inalienable a la vida consignado en los tratados de derechos humanos.",
    correctType: "valores",
    explanation: "Es un argumento basado en valores éticos y principios universales de justicia social y derechos humanos fundamentales."
  },
  {
    topic: "INTELIGENCIA ARTIFICIAL EN MEDICINA",
    quote: "En ensayos clínicos controlados en hospitales universitarios de Boston, los algoritmos de detección temprana identificaron tumores cutáneos con un 94.5% de precisión frente al 86% de los métodos convencionales.",
    correctType: "hecho",
    explanation: "Es un argumento empírico basado en datos estadísticos y mediciones científicas comparativas verificadas en ensayos clínicos."
  }
];

function initGymArguments() {
  let gymIdx = 0;

  const gymCounter = document.getElementById("gymCounter");
  const gymTopicTag = document.getElementById("gymTopicTag");
  const gymQuoteText = document.getElementById("gymQuoteText");
  const optionBtns = document.querySelectorAll(".gym-option-btn");
  const gymFeedbackCard = document.getElementById("gymFeedbackCard");
  const gymFeedbackTitle = document.getElementById("gymFeedbackTitle");
  const gymFeedbackExplanation = document.getElementById("gymFeedbackExplanation");
  const btnNextGym = document.getElementById("btnNextGym");

  function loadGymCase(index) {
    const item = GYM_CASES[index];
    gymCounter.textContent = `Caso ${index + 1} de ${GYM_CASES.length}`;
    gymTopicTag.textContent = `TEMA: ${item.topic}`;
    gymQuoteText.textContent = `"${item.quote}"`;
    gymFeedbackCard.style.display = "none";

    optionBtns.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove("btn-correct", "btn-wrong");
    });
  }

  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-type");
      const current = GYM_CASES[gymIdx];
      const isCorrect = selected === current.correctType;

      optionBtns.forEach(b => {
        b.disabled = true;
        if (b.getAttribute("data-type") === current.correctType) {
          b.classList.add("btn-correct");
        } else if (b === btn && !isCorrect) {
          b.classList.add("btn-wrong");
        }
      });

      if (isCorrect) {
        gymFeedbackTitle.textContent = "🎯 ¡Identificación Perfecta!";
        gymFeedbackTitle.style.color = "#16A34A";
      } else {
        gymFeedbackTitle.textContent = "💡 Observa la estructura con atención";
        gymFeedbackTitle.style.color = "#C53030";
      }

      gymFeedbackExplanation.textContent = current.explanation;
      gymFeedbackCard.style.display = "block";
    });
  });

  if (btnNextGym) {
    btnNextGym.addEventListener("click", () => {
      gymIdx = (gymIdx + 1) % GYM_CASES.length;
      loadGymCase(gymIdx);
    });
    loadGymCase(0);
  }
}

// =========================================================================
// 6. MÓDULO 05: SIMULADOR CONSTRUCTOR DE ENSAYO (ANDAMIAJE EN VIVO)
// =========================================================================
const ESSAY_STORAGE_KEY = "alejandro_cordova_essay_draft_v2";

function initEssayBuilder() {
  // Conexión del botón para consultar teoría
  const btnConsultTheory = document.getElementById("btnConsultTheory");
  if (btnConsultTheory) {
    btnConsultTheory.addEventListener("click", () => {
      const theoryTab = document.querySelector('.nav-tab[data-tab="tab-teoria"]');
      if (theoryTab) {
        theoryTab.click();
      }
    });
  }

  // Acordeones de pasos
  const stepHeaders = document.querySelectorAll(".accordion-step .step-header");
  stepHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const parentStep = header.closest(".accordion-step");
      parentStep.classList.toggle("open");
    });
  });

  // Inserción de conectores al hacer clic en las pastillas
  const connPills = document.querySelectorAll(".conn-pill");
  connPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const targetInputId = pill.getAttribute("data-target");
      const textToInsert = pill.getAttribute("data-text");
      const targetEl = document.getElementById(targetInputId);
      if (!targetEl) return;

      const start = targetEl.selectionStart || targetEl.value.length;
      const end = targetEl.selectionEnd || targetEl.value.length;
      const val = targetEl.value;

      targetEl.value = val.substring(0, start) + textToInsert + val.substring(end);
      targetEl.focus();
      targetEl.selectionStart = targetEl.selectionEnd = start + textToInsert.length;

      showToast(`Conector «${textToInsert.trim()}» insertado`);
      updateEssayPreview();
      saveDraft();
    });
  });

  // Campos que disparan actualización del borrador
  const watchedInputs = [
    "inputEssayTitle",
    "inputEssayAuthor",
    "inputIntroHook",
    "inputBuilderThesis",
    "arg1Type",
    "inputArg1Premise",
    "inputArg1Evidence",
    "arg2Type",
    "inputArg2Premise",
    "inputArg2Evidence",
    "inputCounterargOpponent",
    "inputCounterargRefutation",
    "inputConclusionSynthesis",
    "inputConclusionCall"
  ];

  watchedInputs.forEach(id => {
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

  // Cargar borrador previo si existe
  loadDraft();
  updateEssayPreview();

  // Botón copiar texto completo
  const btnCopyEssay = document.getElementById("btnCopyEssay");
  if (btnCopyEssay) {
    btnCopyEssay.addEventListener("click", () => {
      const assembledEl = document.getElementById("assembledEssayView");
      if (!assembledEl) return;

      const plainText = assembledEl.innerText;
      if (!plainText || plainText.includes("A medida que completes")) {
        showToast("Primero redacta algunas secciones de tu ensayo.");
        return;
      }

      navigator.clipboard.writeText(plainText).then(() => {
        showToast("¡Ensayo completo copiado al portapapeles!");
      }).catch(() => {
        showToast("Selecciona el texto para copiar manualmente.");
      });
    });
  }

  // Botón descargar .TXT
  const btnDownloadTxt = document.getElementById("btnDownloadTxt");
  if (btnDownloadTxt) {
    btnDownloadTxt.addEventListener("click", () => {
      const assembledEl = document.getElementById("assembledEssayView");
      const titleInput = document.getElementById("inputEssayTitle");
      const title = titleInput.value.trim() || "ensayo-argumentativo";
      const text = assembledEl.innerText;

      if (!text || text.includes("A medida que completes")) {
        showToast("Redacta tu ensayo antes de descargarlo.");
        return;
      }

      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Archivo .TXT generado y descargado");
    });
  }

  // Botón imprimir
  const btnPrintEssay = document.getElementById("btnPrintEssay");
  if (btnPrintEssay) {
    btnPrintEssay.addEventListener("click", () => {
      window.print();
    });
  }

  // Botón restablecer borrador
  const btnClearDraft = document.getElementById("btnClearDraft");
  if (btnClearDraft) {
    btnClearDraft.addEventListener("click", () => {
      if (confirm("¿Estás seguro de restablecer el borrador? Se borrarán los campos actuales.")) {
        localStorage.removeItem(ESSAY_STORAGE_KEY);
        watchedInputs.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
        updateEssayPreview();
        showToast("Borrador restablecido.");
      }
    });
  }
}

// Guardado y carga en localStorage
function saveDraft() {
  const data = {
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
    counterOpponent: document.getElementById("inputCounterargOpponent")?.value || "",
    counterRefutation: document.getElementById("inputCounterargRefutation")?.value || "",
    conclusionSynthesis: document.getElementById("inputConclusionSynthesis")?.value || "",
    conclusionCall: document.getElementById("inputConclusionCall")?.value || ""
  };
  localStorage.setItem(ESSAY_STORAGE_KEY, JSON.stringify(data));
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(ESSAY_STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);

    if (data.title) document.getElementById("inputEssayTitle").value = data.title;
    if (data.author) document.getElementById("inputEssayAuthor").value = data.author;
    if (data.hook) document.getElementById("inputIntroHook").value = data.hook;
    if (data.thesis) document.getElementById("inputBuilderThesis").value = data.thesis;
    if (data.arg1Type) document.getElementById("arg1Type").value = data.arg1Type;
    if (data.arg1Premise) document.getElementById("inputArg1Premise").value = data.arg1Premise;
    if (data.arg1Evidence) document.getElementById("inputArg1Evidence").value = data.arg1Evidence;
    if (data.arg2Type) document.getElementById("arg2Type").value = data.arg2Type;
    if (data.arg2Premise) document.getElementById("inputArg2Premise").value = data.arg2Premise;
    if (data.arg2Evidence) document.getElementById("inputArg2Evidence").value = data.arg2Evidence;
    if (data.counterOpponent) document.getElementById("inputCounterargOpponent").value = data.counterOpponent;
    if (data.counterRefutation) document.getElementById("inputCounterargRefutation").value = data.counterRefutation;
    if (data.conclusionSynthesis) document.getElementById("inputConclusionSynthesis").value = data.conclusionSynthesis;
    if (data.conclusionCall) document.getElementById("inputConclusionCall").value = data.conclusionCall;
  } catch (e) {
    console.warn("No se pudo cargar el borrador de ensayo previo:", e);
  }
}

// Ensamblado en tiempo real de la vista previa y rúbrica
function updateEssayPreview() {
  const title = document.getElementById("inputEssayTitle")?.value.trim() || "";
  const author = document.getElementById("inputEssayAuthor")?.value.trim() || "";
  const hook = document.getElementById("inputIntroHook")?.value.trim() || "";
  const thesis = document.getElementById("inputBuilderThesis")?.value.trim() || "";
  const arg1Type = document.getElementById("arg1Type")?.value || "";
  const arg1Premise = document.getElementById("inputArg1Premise")?.value.trim() || "";
  const arg1Evidence = document.getElementById("inputArg1Evidence")?.value.trim() || "";
  const arg2Type = document.getElementById("arg2Type")?.value || "";
  const arg2Premise = document.getElementById("inputArg2Premise")?.value.trim() || "";
  const arg2Evidence = document.getElementById("inputArg2Evidence")?.value.trim() || "";
  const counterOpponent = document.getElementById("inputCounterargOpponent")?.value.trim() || "";
  const counterRefutation = document.getElementById("inputCounterargRefutation")?.value.trim() || "";
  const conclusionSynthesis = document.getElementById("inputConclusionSynthesis")?.value.trim() || "";
  const conclusionCall = document.getElementById("inputConclusionCall")?.value.trim() || "";

  // 1. Estados de la rúbrica (checklist)
  const chkTitle = title.length > 0;
  const chkThesis = thesis.length > 0;
  const chkArg1 = arg1Premise.length > 0 && arg1Evidence.length > 0;
  const chkArg2 = arg2Premise.length > 0 && arg2Evidence.length > 0;
  const chkCounter = counterOpponent.length > 0 && counterRefutation.length > 0;
  const chkConclusion = conclusionSynthesis.length > 0 || conclusionCall.length > 0;

  updateCheckItem("chk-title", chkTitle, "Título y autor asignados");
  updateCheckItem("chk-thesis", chkThesis, "Tesis clara y formulada");
  updateCheckItem("chk-arg1", chkArg1, "Argumento 1 fundamentado");
  updateCheckItem("chk-arg2", chkArg2, "Argumento 2 fundamentado");
  updateCheckItem("chk-counter", chkCounter, "Contraargumento y refutación");
  updateCheckItem("chk-conclusion", chkConclusion, "Conclusión y síntesis");

  // Estados en los acordeones
  setStepStatus("status-step-1", chkTitle);
  setStepStatus("status-step-2", hook.length > 0 && chkThesis);
  setStepStatus("status-step-3", chkArg1 && chkArg2);
  setStepStatus("status-step-4", chkCounter);
  setStepStatus("status-step-5", chkConclusion);

  // Porcentaje
  const items = [chkTitle, chkThesis, chkArg1, chkArg2, chkCounter, chkConclusion];
  const completedCount = items.filter(Boolean).length;
  const percent = Math.round((completedCount / items.length) * 100);

  const rubricScorePercent = document.getElementById("rubricScorePercent");
  const rubricBar = document.getElementById("rubricBar");
  if (rubricScorePercent) rubricScorePercent.textContent = `${percent}%`;
  if (rubricBar) rubricBar.style.width = `${percent}%`;

  // 2. Renderizar texto ensamblado
  const assembledEl = document.getElementById("assembledEssayView");
  if (!assembledEl) return;

  const hasAnyContent = items.some(Boolean) || hook.length > 0;
  if (!hasAnyContent) {
    assembledEl.innerHTML = `
      <p class="empty-preview-note">
        A medida que completes los pasos en la izquierda, tu texto argumentativo se irá ensamblando aquí automáticamente en tiempo real.
      </p>
    `;
    return;
  }

  let html = "";

  // Título y autor
  if (title || author) {
    html += `<div class="assembled-title">${title || "[Título Provisional del Ensayo]"}</div>`;
    html += `<div class="assembled-author">Por ${author || "[Nombre del Autor]"}</div>`;
  }

  // Introducción
  if (hook || thesis) {
    html += `
      <div class="assembled-paragraph">
        <span class="assembled-label label-intro">INTRODUCCIÓN</span>
        ${hook ? `${escapeHtml(hook)} ` : ""}
        ${thesis ? `<strong>${escapeHtml(thesis)}</strong>` : ""}
      </div>
    `;
  }

  // Argumento 1
  if (arg1Premise || arg1Evidence) {
    html += `
      <div class="assembled-paragraph">
        <span class="assembled-label label-arg">ARGUMENTO 1 (${escapeHtml(arg1Type)})</span>
        ${arg1Premise ? `${escapeHtml(arg1Premise)} ` : ""}
        ${arg1Evidence ? `${escapeHtml(arg1Evidence)}` : ""}
      </div>
    `;
  }

  // Argumento 2
  if (arg2Premise || arg2Evidence) {
    html += `
      <div class="assembled-paragraph">
        <span class="assembled-label label-arg">ARGUMENTO 2 (${escapeHtml(arg2Type)})</span>
        ${arg2Premise ? `${escapeHtml(arg2Premise)} ` : ""}
        ${arg2Evidence ? `${escapeHtml(arg2Evidence)}` : ""}
      </div>
    `;
  }

  // Contraargumento
  if (counterOpponent || counterRefutation) {
    html += `
      <div class="assembled-paragraph">
        <span class="assembled-label label-counter">CONTRAARGUMENTO Y REFUTACIÓN</span>
        ${counterOpponent ? `${escapeHtml(counterOpponent)} ` : ""}
        ${counterRefutation ? `<em>${escapeHtml(counterRefutation)}</em>` : ""}
      </div>
    `;
  }

  // Conclusión
  if (conclusionSynthesis || conclusionCall) {
    html += `
      <div class="assembled-paragraph">
        <span class="assembled-label label-concl">CONCLUSIÓN</span>
        ${conclusionSynthesis ? `${escapeHtml(conclusionSynthesis)} ` : ""}
        ${conclusionCall ? `${escapeHtml(conclusionCall)}` : ""}
      </div>
    `;
  }

  assembledEl.innerHTML = html;
}

function updateCheckItem(id, isValid, label) {
  const el = document.getElementById(id);
  if (!el) return;
  if (isValid) {
    el.className = "chk-item done";
    el.innerHTML = `✓ ${label}`;
  } else {
    el.className = "chk-item";
    el.innerHTML = `❌ ${label}`;
  }
}

function setStepStatus(id, isComplete) {
  const el = document.getElementById(id);
  if (!el) return;
  if (isComplete) {
    el.textContent = "Completado";
    el.className = "step-status done";
  } else {
    el.textContent = "En edición";
    el.className = "step-status";
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
