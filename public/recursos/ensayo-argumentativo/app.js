/* ============================================================
   app.js — Taller y Simulador de Ensayo Argumentativo
   Lógica pedagógica e interactiva por Msc. Alejandro Córdova
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavigationTabs();
  initTheoryModule();
  initXrayAnalysis();
  initAssemblyLab();
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

        <div class="panel-section-title">Clave Pedagógica:</div>
        <p style="color: #475569; font-size: 0.9rem;">${info.tip}</p>
      `;
    });
  });
}

// =========================================================================
// 3.B. MÓDULO 02: TALLER DE ENSAMBLE DISCURSIVO & LECTURA COMPRENSIVA
// =========================================================================
const ASSEMBLY_ESSAYS = [
  {
    id: "lectura",
    title: "El valor insustituible de la lectura en la era digital",
    author: "Msc. Alejandro Córdova",
    topicTag: "HUMANIDADES Y COGNICIÓN",
    icon: "📖",
    summary: "Explora por qué la lectura profunda de literatura y textos complejos es un gimnasio mental urgente para preservar el pensamiento crítico y la empatía en un mundo de estímulos fragmentados.",
    paragraphs: [
      {
        partId: "intro",
        partName: "Párrafo 1: Introducción & Tesis",
        formulaTokens: ["Gancho Contextual", "+", "Problematización", "+", "Tesis Central Debatible"],
        slots: [
          {
            id: "s1",
            label: "1. Gancho Contextual",
            hint: "Atrae al lector con una observación sobre la prisa y la sobreestimulación cotidiana.",
            expectedText: "En una sociedad saturada de notificaciones instantáneas, videos breves de quince segundos y estímulos continuos, el silencio que exige abrir un libro físico parece haberse convertido en un anacronismo incómodo."
          },
          {
            id: "s2",
            label: "2. Problematización",
            hint: "Plantea el dilema: consumimos muchas palabras pero con menor profundidad atencional.",
            expectedText: "Aunque hoy consumimos más palabras escritas que en cualquier otra época histórica a través de pantallas luminosas, la mayor parte de esa lectura es fugaz, fragmentada y dispersa, lo que debilita nuestra capacidad de concentración prolongada."
          },
          {
            id: "s3",
            label: "3. Tesis Central Debatible",
            hint: "Formula la postura firme: la lectura profunda es un entrenamiento cognitivo insustituible.",
            expectedText: "Por consiguiente, recuperar el hábito de la lectura sostenida de textos complejos y obras literarias no es un mero pasatiempo nostálgico, sino un entrenamiento cognitivo insustituible para cultivar el pensamiento crítico y la autonomía intelectual."
          }
        ],
        explanation: "¡Excelente ensamblaje! Observa la progresión lógica: partes del síntoma cotidiano (la saturación digital), abres la controversia real (leer fragmentado vs. leer profundo) y desembocas de manera natural en una tesis afirmativa y debatible."
      },
      {
        partId: "arg1",
        partName: "Párrafo 2: Argumento 1 (Causa y Neurociencia)",
        formulaTokens: ["Conector Discursivo", "+", "Premisa Fisiológica", "+", "Evidencia Empírica", "+", "Inferencia de Remate"],
        slots: [
          {
            id: "s1",
            label: "1. Conector Discursivo",
            hint: "Introduce ordenadamente la primera línea de argumentación.",
            expectedText: "En primer lugar,"
          },
          {
            id: "s2",
            label: "2. Premisa Fisiológica",
            hint: "Afirma que la lectura atenta modela positivamente la red neuronal atencional.",
            expectedText: "la lectura atenta y prolongada reconfigura la arquitectura neuronal del cerebro fortaleciendo los circuitos de atención voluntaria y memoria de trabajo."
          },
          {
            id: "s3",
            label: "3. Evidencia Empírica",
            hint: "Aporta mediciones científicas comparativas de centros universitarios especializados.",
            expectedText: "Investigaciones del Centro de Lectura de la Universidad de Stavanger constataron que los lectores de textos extensos en papel retienen un 35% más de secuencias argumentativas que quienes hojean los mismos contenidos en dispositivos con hipervínculos."
          },
          {
            id: "s4",
            label: "4. Inferencia de Remate",
            hint: "Concluye cómo este hallazgo respalda la necesidad de concentración rigurosa.",
            expectedText: "De este modo, resistir la pulsión de la navegación espasmódica permite consolidar redes cognitivas indispensables para el razonamiento abstracto y la asimilación conceptual rigurosa."
          }
        ],
        explanation: "¡Párrafo perfectamente hilvanado! Iniciar con el marcador discursivo, enunciar la premisa causal, blindarla con un dato empírico contrastado y cerrar con la inferencia confiere a este argumento un rigor académico intachable."
      },
      {
        partId: "arg2",
        partName: "Párrafo 3: Argumento 2 (Empatía y Valores Cívicos)",
        formulaTokens: ["Conector de Adición", "+", "Premisa Ética", "+", "Respaldo Psicológico", "+", "Inferencia Democrática"],
        slots: [
          {
            id: "s1",
            label: "1. Conector de Adición",
            hint: "Suma un segundo ángulo reflexivo de igual peso que el anterior.",
            expectedText: "Asimismo,"
          },
          {
            id: "s2",
            label: "2. Premisa Ética",
            hint: "Sostiene que la literatura estimula la capacidad de entender y sentir con el otro.",
            expectedText: "la inmersión en la ficción literaria activa procesos psicológicos fundamentales de empatía y comprensión del otro que ninguna red social puede replicar."
          },
          {
            id: "s3",
            label: "3. Respaldo Psicológico",
            hint: "Cita hallazgos de psicología cognitiva sobre la «teoría de la mente».",
            expectedText: "Estudios de psicología cognitiva de The New School en Nueva York evidenciaron que leer narrativa compleja incrementa de inmediato el rendimiento en pruebas de teoría de la mente, facultando al lector para descifrar motivaciones ajenas y convivir con la ambigüedad moral."
          },
          {
            id: "s4",
            label: "4. Inferencia Democrática",
            hint: "Remata vinculando la empatía literaria con el ejercicio ciudadano plural.",
            expectedText: "Al obligarnos a habitar mentes y realidades disímiles a la propia, la literatura educa la sensibilidad cívica indispensable para la deliberación democrática plural."
          }
        ],
        explanation: "¡Brillante reconstrucción! Tras el argumento científico-neurológico, este segundo argumento aporta la dimensión humana y ética, demostrando que la lectura forja ciudadanos más comprensivos y tolerantes."
      },
      {
        partId: "concl",
        partName: "Párrafo 4: Conclusión & Llamado a la Acción",
        formulaTokens: ["Conector de Cierre", "+", "Recapitulación Sintética", "+", "Reafirmación", "+", "Llamado a la Acción"],
        slots: [
          {
            id: "s1",
            label: "1. Conector de Cierre",
            hint: "Marca formalmente la apertura del momento de recapitulación final.",
            expectedText: "En conclusión,"
          },
          {
            id: "s2",
            label: "2. Recapitulación Sintética",
            hint: "Condensa los dos pilares demostrados (atención neuronal + empatía cívica).",
            expectedText: "los descubrimientos neurológicos sobre la atención sostenida y las evidencias psicosociales sobre la empatía demuestran que leer en profundidad preserva lo más valioso de nuestras facultades reflexivas."
          },
          {
            id: "s3",
            label: "3. Reafirmación de la Tesis",
            hint: "Reitera la postura inicial con mayor fuerza retórica y convicción.",
            expectedText: "Frente a la tiranía de la inmediatez algorítmica, el acto solitario de leer con calma constituye la trinchera más efectiva de soberanía mental."
          },
          {
            id: "s4",
            label: "4. Llamado a la Acción",
            hint: "Cierra proyectando un deber ético hacia la escuela y la familia.",
            expectedText: "Urge, por tanto, que familias e instituciones educativas protejan el tiempo de lectura libre no como una tarea impuesta, sino como un derecho inalienable al propio pensamiento."
          }
        ],
        explanation: "¡Enhorabuena, has cerrado el ensayo con maestría! La conclusión no inventa tesis nuevas; recoge las pruebas previas, reafirma la postura nuclear y remata con un llamado inspirador a la acción comunitaria."
      }
    ]
  },
  {
    id: "ia_educacion",
    title: "Inteligencia artificial en el aula: andamiaje de apoyo, no sustituto del criterio",
    author: "Msc. Alejandro Córdova",
    topicTag: "TECNOLOGÍA Y PEDAGOGÍA",
    icon: "🤖",
    summary: "Analiza cómo integrar las herramientas generativas en la educación secundaria y superior como un espejo dialéctico sin perder la autoría reflexiva ni la honestidad intelectual.",
    paragraphs: [
      {
        partId: "intro",
        partName: "Párrafo 1: Introducción & Tesis",
        formulaTokens: ["Gancho Contextual", "+", "Problematización", "+", "Tesis Central Debatible"],
        slots: [
          {
            id: "s1",
            label: "1. Gancho Contextual",
            hint: "Describe la sorpresa y desconcierto ante la repentina masificación de la IA generativa.",
            expectedText: "La irrupción repentina de los modelos generativos de lenguaje ha generado un desconcierto generalizado en los claustros docentes de todo el mundo."
          },
          {
            id: "s2",
            label: "2. Problematización",
            hint: "Plantea el falso dilema entre la prohibición absoluta o la entrega incondicional a la máquina.",
            expectedText: "Frente al temor comprensible de plagios masivos y pérdida de rigor académico, muchas instituciones han optado por la prohibición ciega, mientras otras promueven una adopción acrítica que delega la producción textual en los algoritmos."
          },
          {
            id: "s3",
            label: "3. Tesis Central Debatible",
            hint: "Enuncia la tesis propositiva: usarla como andamiaje bajo estricto juicio crítico humano.",
            expectedText: "Frente a estos extremos, la inteligencia artificial debe ser integrada en el aula como un andamiaje para formular preguntas y contrastar enfoques, pero supeditada siempre al juicio crítico y la voz reflexiva del estudiante."
          }
        ],
        explanation: "¡Ensamble impecable! Has contextualizado el dilema tecnológico actual y derivado hacia una tesis matizada que supera el binarismo simplista de 'prohibir o entregarse'."
      },
      {
        partId: "arg1",
        partName: "Párrafo 2: Argumento 1 (Metacognición y Andamiaje)",
        formulaTokens: ["Conector Discursivo", "+", "Premisa de Andamiaje", "+", "Evidencia Universitaria", "+", "Inferencia de Cierre"],
        slots: [
          {
            id: "s1",
            label: "1. Conector Discursivo",
            hint: "Abre el cuerpo argumentativo con tono deliberativo.",
            expectedText: "Para comenzar,"
          },
          {
            id: "s2",
            label: "2. Premisa de Andamiaje",
            hint: "Explica cómo la IA sirve como interlocutora dialéctica para retar las ideas propias.",
            expectedText: "utilizada pedagógicamente como contraparte dialéctica, la IA generativa puede potenciar la metacognición y la habilidad de depuración argumentativa."
          },
          {
            id: "s3",
            label: "3. Evidencia Universitaria",
            hint: "Aporta resultados de pruebas en consorcios universitarios destacados.",
            expectedText: "Experiencias piloto en universidades del consorcio Russell Group revelaron que los estudiantes que emplean la IA para generar contraargumentos a sus tesis aprenden a anticipar objeciones con el doble de profundidad que mediante métodos pasivos."
          },
          {
            id: "s4",
            label: "4. Inferencia de Cierre",
            hint: "Remata destacando que la máquina funciona como espejo retórico, no como autora.",
            expectedText: "La máquina, en consecuencia, no piensa por el alumno, sino que funciona como un espejo retórico exigente que lo obliga a blindar y afinar sus propias razones."
          }
        ],
        explanation: "¡Extraordinario! Demuestras que la tecnología puede ser un catalizador del rigor discursivo cuando se utiliza para someter la propia tesis a escrutinio dialéctico."
      },
      {
        partId: "arg2",
        partName: "Párrafo 3: Argumento 2 (Auditoría de Fuentes y Falibilidad)",
        formulaTokens: ["Conector de Contraste", "+", "Premisa de Advertencia", "+", "Dato de Auditoría", "+", "Inferencia Ética"],
        slots: [
          {
            id: "s1",
            label: "1. Conector de Contraste",
            hint: "Introduce la necesaria prevención crítica ante los riesgos del sistema.",
            expectedText: "No obstante,"
          },
          {
            id: "s2",
            label: "2. Premisa de Advertencia",
            hint: "Advierte que la herramienta exige adiestramiento en verificar fuentes y alucinaciones.",
            expectedText: "este beneficio formativo solo es viable si se entrena paralelamente la capacidad de auditar fuentes y detectar falsedades verosímiles en las respuestas automáticas."
          },
          {
            id: "s3",
            label: "3. Dato de Auditoría",
            hint: "Aporta estadísticas oficiales sobre la frecuencia de invención de datos en la IA.",
            expectedText: "Auditorías tecnológicas del Instituto Alan Turing advierten que los modelos de lenguaje inventan citas académicas y datos cuantitativos con apariencia formalmente impecable en más de un 15% de sus respuestas especializadas."
          },
          {
            id: "s4",
            label: "4. Inferencia Ética",
            hint: "Concluye que el foco formativo debe desplazarse hacia la verificación probatoria.",
            expectedText: "Por consiguiente, el docente debe desplazar el foco de la mera redacción mecánica hacia la verificación probatoria y la evaluación de la pertinencia ética."
          }
        ],
        explanation: "¡Estructura balanceada y madura! Un ensayo académico convincente no es complaciente: anticipa los riesgos empíricos de la tecnología para fortalecer la tesis central."
      },
      {
        partId: "concl",
        partName: "Párrafo 4: Conclusión & Llamado a la Acción",
        formulaTokens: ["Conector de Cierre", "+", "Recapitulación", "+", "Reafirmación Humanista", "+", "Proyección Educativa"],
        slots: [
          {
            id: "s1",
            label: "1. Conector de Cierre",
            hint: "Inicia la recapitulación global de ideas.",
            expectedText: "En suma,"
          },
          {
            id: "s2",
            label: "2. Recapitulación",
            hint: "Define la IA como espejo de la lucidez de su usuario humano.",
            expectedText: "la tecnología artificial no es una amenaza fatal ni una panacea milagrosa, sino un espejo de la propia capacidad analítica de quien la instruye mediante indicaciones reflexivas."
          },
          {
            id: "s3",
            label: "3. Reafirmación Humanista",
            hint: "Reafirma que las virtudes éticas y estéticas son exclusivas del ser humano.",
            expectedText: "La escuela no debe competir con la velocidad de la máquina, sino enseñar aquello que ningún modelo algorítmico posee: intención estética, responsabilidad moral y autenticidad expresiva."
          },
          {
            id: "s4",
            label: "4. Proyección Educativa",
            hint: "Concluye con un llamado propositivo a formar criterios autónomos.",
            expectedText: "El desafío supremo de la educación actual no es prohibir las herramientas del porvenir, sino educar inteligencias humanas con suficiente criterio como para gobernarlas con sensatez."
          }
        ],
        explanation: "¡Magnífico cierre dialéctico! Sintetiza la postura pedagógica y culmina con un mensaje humanista contundente sobre el propósito final de la educación."
      }
    ]
  },
  {
    id: "ciudades_humanas",
    title: "Ciudades para las personas: la urgencia de peatonalizar los centros urbanos",
    author: "Msc. Alejandro Córdova",
    topicTag: "SOSTENIBILIDAD Y URBANISMO",
    icon: "🌳",
    summary: "Descubre las razones ecológicas, sanitarias y de convivencia comunitaria que exigen desterrar el automóvil privado de los corazones urbanos y priorizar la escala peatonal.",
    paragraphs: [
      {
        partId: "intro",
        partName: "Párrafo 1: Introducción & Tesis",
        formulaTokens: ["Gancho Histórico", "+", "Problematización", "+", "Tesis Central Debatible"],
        slots: [
          {
            id: "s1",
            label: "1. Gancho Histórico",
            hint: "Evoca cómo medio siglo de urbanismo convirtió las calles en pistas para automóviles.",
            expectedText: "Durante más de medio siglo, el urbanismo occidental subordinó la escala humana a la velocidad del automóvil privado, transformando las calles históricas en meros corredores de escape y parqueaderos."
          },
          {
            id: "s2",
            label: "2. Problematización",
            hint: "Expone el agotamiento del modelo automovilístico ante el colapso vial y ambiental.",
            expectedText: "Hoy, el colapso vial crónico, la contaminación acústica y el aislamiento social ponen en evidencia que este modelo ha agotado su viabilidad física y comunitaria."
          },
          {
            id: "s3",
            label: "3. Tesis Central Debatible",
            hint: "Presenta la tesis: la peatonalización es la medida más urgente para devolver vida a la ciudad.",
            expectedText: "Por tanto, la peatonalización integral de los cascos urbanos y la priorización del transporte colectivo activo representan la vía más urgente y democrática para devolver la vitalidad ecológica y cívica a nuestras urbes."
          }
        ],
        explanation: "¡Introducción ejemplar! Plantea un recorrido desde el error histórico del urbanismo automovilístico hasta la justificación de una reforma espacial urgente."
      },
      {
        partId: "arg1",
        partName: "Párrafo 2: Argumento 1 (Salud Pública y Medio Ambiente)",
        formulaTokens: ["Conector Discursivo", "+", "Premisa Ambiental", "+", "Evidencia de Emisiones", "+", "Inferencia Sanitaria"],
        slots: [
          {
            id: "s1",
            label: "1. Conector Discursivo",
            hint: "Inicia la demostración con un conector de orden.",
            expectedText: "En primer término,"
          },
          {
            id: "s2",
            label: "2. Premisa Ambiental",
            hint: "Sostiene que erradicar el tráfico de paso reduce la toxicidad del aire y los accidentes.",
            expectedText: "restringir el tráfico vehicular pesado produce una mejora inmediata y cuantificable en la salud respiratoria y la seguridad vial de los residentes."
          },
          {
            id: "s3",
            label: "3. Evidencia de Emisiones",
            hint: "Aporta mediciones oficiales de organismos europeos sobre dióxido de nitrógeno y siniestros.",
            expectedText: "Mediciones de la Agencia Europea de Medio Ambiente constataron que el programa de supermanzanas peatonales en Barcelona redujo los niveles de dióxido de nitrógeno en un 25% y disminuyó los siniestros viales en las zonas intervenidas en más de un 40%."
          },
          {
            id: "s4",
            label: "4. Inferencia Sanitaria",
            hint: "Concluye que respirar aire puro es un derecho básico por encima de la velocidad vehicular.",
            expectedText: "Este dato refuta el dogma de que el automóvil es sinónimo de progreso, demostrando que respirar aire limpio en la propia acera es una condición básica de habitabilidad."
          }
        ],
        explanation: "¡Argumento fáctico de gran impacto! Las mediciones ambientales desmoronan la resistencia inicial al cambio urbano demostrando beneficios tangibles de supervivencia."
      },
      {
        partId: "arg2",
        partName: "Párrafo 3: Argumento 2 (Comercio Local y Convivencia)",
        formulaTokens: ["Conector de Adición", "+", "Premisa Económica", "+", "Evidencia Comercial", "+", "Inferencia Comunitaria"],
        slots: [
          {
            id: "s1",
            label: "1. Conector de Adición",
            hint: "Agrega una nueva perspectiva socioeconómica.",
            expectedText: "A lo expuesto se añade que,"
          },
          {
            id: "s2",
            label: "2. Premisa Económica",
            hint: "Afirma que caminar fomenta el comercio de barrio y el sentido de comunidad.",
            expectedText: "lejos de perjudicar al comercio tradicional, la peatonalización revitaliza las ventas de proximidad y fomenta el arraigo barrial."
          },
          {
            id: "s3",
            label: "3. Evidencia Comercial",
            hint: "Cita el caso documentado de ciudades peatonales exitosas como Pontevedra.",
            expectedText: "Informes de la Cámara de Comercio de Pontevedra confirman que, tras eliminar los coches del centro histórico, el número de pequeños comercios aumentó un 30%, al tiempo que la permanencia de peatones en las calles atrajo turismo cultural sostenido."
          },
          {
            id: "s4",
            label: "4. Inferencia Comunitaria",
            hint: "Remata con la metáfora de la calle como sala de estar compartida.",
            expectedText: "La calle deja de ser un lugar de paso hostil para convertirse nuevamente en el salón de estar colectivo de la ciudadanía."
          }
        ],
        explanation: "¡Excelente ensamblaje! Combina un argumento de hecho comercial con una imagen poética y cívica ('la calle como salón de estar colectivo') que eleva la fuerza persuasiva del texto."
      },
      {
        partId: "concl",
        partName: "Párrafo 4: Conclusión & Llamado a la Acción",
        formulaTokens: ["Conector de Cierre", "+", "Recapitulación Integral", "+", "Reafirmación Ética", "+", "Llamado Urbanístico"],
        slots: [
          {
            id: "s1",
            label: "1. Conector de Cierre",
            hint: "Conector que engloba todas las razones dadas.",
            expectedText: "Por todo lo anterior,"
          },
          {
            id: "s2",
            label: "2. Recapitulación Integral",
            hint: "Resume tanto la dimensión ambiental como la económica y humana.",
            expectedText: "tanto la evidencia ambiental como los balances económicos y comunitarios demuestran que las ciudades más prósperas no son las que facilitan mayor velocidad a los autos, sino las que devuelven el espacio a los transeúntes."
          },
          {
            id: "s3",
            label: "3. Reafirmación Ética",
            hint: "Define la ciudad caminable como una cuestión de equidad espacial.",
            expectedText: "Diseñar urbes caminables es un imperativo ético de equidad espacial frente al privilegio de unos pocos conductores."
          },
          {
            id: "s4",
            label: "4. Llamado Urbanístico",
            hint: "Remata convocando a recuperar la escala humana en la planificación urbana.",
            expectedText: "Ha llegado el momento de que la planificación territorial recupere la escala de la mirada humana y devuelva el corazón de las ciudades a quienes las caminan día a día."
          }
        ],
        explanation: "¡Has completado la reconstrucción del ensayo! La conclusión logra articular la síntesis probatoria con un llamado elocuente y transformador sobre el futuro de nuestras ciudades."
      }
    ]
  }
];

function initAssemblyLab() {
  const essaySelector = document.getElementById("assemblyEssaySelector");
  const stepperBar = document.getElementById("assemblyStepperBar");
  const formulaTokensEl = document.getElementById("assemblyFormulaTokens");
  const bankEl = document.getElementById("assemblyBank");
  const slotsEl = document.getElementById("assemblySlots");
  const feedbackCard = document.getElementById("assemblyFeedback");
  const feedbackTitle = document.getElementById("assemblyFeedbackTitle");
  const feedbackText = document.getElementById("assemblyFeedbackText");
  const btnCheck = document.getElementById("btnCheckAssembly");
  const btnReset = document.getElementById("btnResetAssembly");
  const btnNext = document.getElementById("btnNextAssemblyPara");
  const fullPaper = document.getElementById("assembledFullPaper");
  const fullTitle = document.getElementById("assembledFullTitle");
  const fullAuthor = document.getElementById("assembledFullAuthor");
  const fullBody = document.getElementById("assembledFullBody");

  if (!essaySelector || !stepperBar || !bankEl || !slotsEl) return;

  let currentEssayIdx = 0;
  let currentParaIdx = 0;
  // Estado de completitud por ensayo: [ [bool, bool, bool, bool], ... ]
  const completionState = ASSEMBLY_ESSAYS.map(() => [false, false, false, false]);
  let selectedFragmentEl = null;

  // 1. Renderizar selector de ensayos
  function renderEssaySelector() {
    essaySelector.innerHTML = "";
    ASSEMBLY_ESSAYS.forEach((essay, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `essay-tab-btn ${idx === currentEssayIdx ? "active" : ""}`;
      const completedCount = completionState[idx].filter(Boolean).length;

      btn.innerHTML = `
        <div class="essay-tab-top">
          <span class="essay-tab-icon">${essay.icon}</span>
          <span class="essay-tab-topic">${escapeHtml(essay.topicTag)}</span>
        </div>
        <div class="essay-tab-title">${escapeHtml(essay.title)}</div>
        <div class="essay-tab-progress">${completedCount}/4 párrafos ensamblados</div>
      `;

      btn.addEventListener("click", () => {
        if (currentEssayIdx !== idx) {
          currentEssayIdx = idx;
          currentParaIdx = 0;
          renderEssaySelector();
          renderStepper();
          loadParagraph(currentEssayIdx, currentParaIdx);
        }
      });
      essaySelector.appendChild(btn);
    });
  }

  // 2. Renderizar stepper de párrafos
  function renderStepper() {
    stepperBar.innerHTML = "";
    const essay = ASSEMBLY_ESSAYS[currentEssayIdx];

    essay.paragraphs.forEach((p, idx) => {
      const isCompleted = completionState[currentEssayIdx][idx];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `assembly-step-btn ${idx === currentParaIdx ? "active" : ""} ${isCompleted ? "completed" : ""}`;
      btn.innerHTML = `<span>${isCompleted ? "✓" : `0${idx + 1}`}</span> ${escapeHtml(p.partName)}`;

      btn.addEventListener("click", () => {
        currentParaIdx = idx;
        renderStepper();
        loadParagraph(currentEssayIdx, currentParaIdx);
      });
      stepperBar.appendChild(btn);
    });

    // Botón especial para Ensayo Completo
    const allCompleted = completionState[currentEssayIdx].every(Boolean);
    const fullBtn = document.createElement("button");
    fullBtn.type = "button";
    fullBtn.className = `assembly-step-btn ${currentParaIdx === 4 ? "active" : ""} ${allCompleted ? "completed" : ""}`;
    fullBtn.innerHTML = `<span>📖</span> Ensayo Completo`;
    fullBtn.addEventListener("click", () => {
      currentParaIdx = 4;
      renderStepper();
      showFullEssayView();
    });
    stepperBar.appendChild(fullBtn);
  }

  // 3. Cargar párrafo actual
  function loadParagraph(essayIdx, paraIdx) {
    if (paraIdx === 4) {
      showFullEssayView();
      return;
    }

    fullPaper.style.display = "none";
    document.getElementById("assemblyWorkspace").style.display = "grid";
    document.getElementById("assemblyFormulaCard").style.display = "flex";
    document.querySelector(".assembly-actions-bar").style.display = "flex";

    const essay = ASSEMBLY_ESSAYS[essayIdx];
    const para = essay.paragraphs[paraIdx];

    // Banner de fórmula
    formulaTokensEl.innerHTML = "";
    para.formulaTokens.forEach(tok => {
      const span = document.createElement("span");
      if (tok === "+") {
        span.className = "formula-op";
        span.textContent = "+";
      } else {
        span.className = "formula-token";
        span.textContent = tok;
      }
      formulaTokensEl.appendChild(span);
    });

    // Limpiar estado
    selectedFragmentEl = null;
    feedbackCard.style.display = "none";
    btnNext.style.display = "none";

    // Generar piezas mezcladas
    const rawFragments = para.slots.map((s, idx) => ({
      slotId: s.id,
      text: s.expectedText,
      origIdx: idx
    }));
    // Mezcla aleatoria
    const shuffled = [...rawFragments].sort(() => Math.random() - 0.5);

    bankEl.innerHTML = "";
    shuffled.forEach((item, fIdx) => {
      const card = document.createElement("div");
      card.className = "fragment-card";
      card.setAttribute("draggable", "true");
      card.setAttribute("data-frag-text", item.text);
      card.id = `frag_${essayIdx}_${paraIdx}_${fIdx}`;
      card.innerHTML = `
        <span class="fragment-drag-handle" title="Arrastrar">⋮⋮</span>
        <div class="fragment-text">${escapeHtml(item.text)}</div>
      `;

      // Eventos Drag
      card.addEventListener("dragstart", (e) => {
        card.classList.add("dragging");
        e.dataTransfer.setData("text/plain", card.id);
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });

      // Evento Click (soporte táctil y móvil)
      card.addEventListener("click", () => {
        // Si ya está en un slot, regresar al banco
        if (card.parentElement && card.parentElement.classList.contains("slot-dropzone")) {
          returnToBank(card);
          return;
        }

        if (selectedFragmentEl === card) {
          card.classList.remove("selected-fragment");
          selectedFragmentEl = null;
        } else {
          document.querySelectorAll(".fragment-card").forEach(c => c.classList.remove("selected-fragment"));
          card.classList.add("selected-fragment");
          selectedFragmentEl = card;
        }
      });

      bankEl.appendChild(card);
    });

    // Generar cajones (slots)
    slotsEl.innerHTML = "";
    para.slots.forEach(slot => {
      const slotBox = document.createElement("div");
      slotBox.className = "slot-box";
      slotBox.id = `slot_${slot.id}`;

      slotBox.innerHTML = `
        <div class="slot-header">
          <span class="slot-label">${escapeHtml(slot.label)}</span>
        </div>
        <div class="slot-hint">${escapeHtml(slot.hint)}</div>
        <div class="slot-dropzone" data-slot-id="${slot.id}">
          <span class="slot-placeholder">Suelta o toca para ubicar este fragmento</span>
        </div>
      `;

      const dropzone = slotBox.querySelector(".slot-dropzone");

      // Eventos Drag en dropzone
      dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        slotBox.classList.add("drag-over");
      });
      dropzone.addEventListener("dragleave", () => {
        slotBox.classList.remove("drag-over");
      });
      dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        slotBox.classList.remove("drag-over");
        const fragId = e.dataTransfer.getData("text/plain");
        const draggedCard = document.getElementById(fragId);
        if (draggedCard) {
          placeInSlot(draggedCard, dropzone, slotBox);
        }
      });

      // Evento Click en dropzone (para ubicar el fragmento seleccionado)
      dropzone.addEventListener("click", () => {
        if (selectedFragmentEl) {
          placeInSlot(selectedFragmentEl, dropzone, slotBox);
          selectedFragmentEl.classList.remove("selected-fragment");
          selectedFragmentEl = null;
        }
      });

      slotsEl.appendChild(slotBox);
    });
  }

  // Colocar una ficha en un cajón
  function placeInSlot(card, dropzone, slotBox) {
    // Si la dropzone ya tiene un item, devolver ese item al banco
    const existingCard = dropzone.querySelector(".fragment-card");
    if (existingCard) {
      returnToBank(existingCard);
    }

    const placeholder = dropzone.querySelector(".slot-placeholder");
    if (placeholder) placeholder.style.display = "none";

    dropzone.classList.add("has-item");
    slotBox.classList.add("slot-filled");

    // Botón de remoción
    let removeBtn = card.querySelector(".btn-remove-slot-item");
    if (!removeBtn) {
      removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn-remove-slot-item";
      removeBtn.title = "Devolver al banco";
      removeBtn.textContent = "✕";
      removeBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        returnToBank(card);
      });
      card.appendChild(removeBtn);
    }

    dropzone.appendChild(card);
  }

  // Devolver ficha al banco
  function returnToBank(card) {
    const parentDropzone = card.parentElement;
    if (parentDropzone && parentDropzone.classList.contains("slot-dropzone")) {
      const removeBtn = card.querySelector(".btn-remove-slot-item");
      if (removeBtn) removeBtn.remove();

      bankEl.appendChild(card);

      const placeholder = parentDropzone.querySelector(".slot-placeholder");
      if (placeholder) placeholder.style.display = "block";
      parentDropzone.classList.remove("has-item");

      const parentSlotBox = parentDropzone.closest(".slot-box");
      if (parentSlotBox) parentSlotBox.classList.remove("slot-filled");
    }
  }

  // 4. Comprobación de ensamble
  btnCheck.addEventListener("click", () => {
    const essay = ASSEMBLY_ESSAYS[currentEssayIdx];
    const para = essay.paragraphs[currentParaIdx];
    const dropzones = slotsEl.querySelectorAll(".slot-dropzone");

    // Verificar si todos los cajones están llenos
    let allFilled = true;
    dropzones.forEach(dz => {
      if (!dz.querySelector(".fragment-card")) allFilled = false;
    });

    if (!allFilled) {
      feedbackCard.className = "assembly-feedback-card incorrect";
      feedbackTitle.textContent = "⚠️ Faltan fragmentos por ubicar";
      feedbackText.textContent = "Debes colocar un fragmento en cada uno de los cajones retóricos antes de comprobar el ensamble del párrafo.";
      feedbackCard.style.display = "block";
      return;
    }

    // Verificar si cada cajón tiene el fragmento esperado
    let isAllCorrect = true;
    para.slots.forEach((slot, sIdx) => {
      const dz = dropzones[sIdx];
      const card = dz.querySelector(".fragment-card");
      const text = card ? card.getAttribute("data-frag-text") : "";
      if (text !== slot.expectedText) {
        isAllCorrect = false;
      }
    });

    if (isAllCorrect) {
      feedbackCard.className = "assembly-feedback-card correct";
      feedbackTitle.textContent = "🎯 ¡Ensamble Perfecto y Cohesión Impecable!";
      feedbackText.textContent = para.explanation;
      feedbackCard.style.display = "block";

      completionState[currentEssayIdx][currentParaIdx] = true;
      renderEssaySelector();
      renderStepper();

      if (currentParaIdx < 3) {
        btnNext.textContent = `Siguiente: Párrafo ${currentParaIdx + 2} →`;
        btnNext.style.display = "inline-block";
      } else {
        btnNext.textContent = "Ver Ensayo Completo Reconstruido 📖";
        btnNext.style.display = "inline-block";
        showToast("¡Felicitaciones! Has completado la reconstrucción de los 4 párrafos.");
      }
    } else {
      feedbackCard.className = "assembly-feedback-card incorrect";
      feedbackTitle.textContent = "💡 Revisa la progresión lógica";
      feedbackText.textContent = "Uno o más fragmentos no se encuentran en su cajón correspondiente. Revisa la fórmula en la parte superior: recuerda qué parte debe abrir, cuál aporta la evidencia y cuál sintetiza o infiere la consecuencia.";
      feedbackCard.style.display = "block";
    }
  });

  // 5. Reiniciar Párrafo
  btnReset.addEventListener("click", () => {
    loadParagraph(currentEssayIdx, currentParaIdx);
    showToast("Párrafo reiniciado al banco.");
  });

  // 6. Botón Siguiente
  btnNext.addEventListener("click", () => {
    if (currentParaIdx < 3) {
      currentParaIdx++;
      renderStepper();
      loadParagraph(currentEssayIdx, currentParaIdx);
    } else {
      currentParaIdx = 4;
      renderStepper();
      showFullEssayView();
    }
  });

  // 7. Mostrar Vista del Ensayo Completo
  function showFullEssayView() {
    document.getElementById("assemblyWorkspace").style.display = "none";
    document.getElementById("assemblyFormulaCard").style.display = "none";
    document.querySelector(".assembly-actions-bar").style.display = "none";
    feedbackCard.style.display = "none";

    const essay = ASSEMBLY_ESSAYS[currentEssayIdx];
    fullTitle.textContent = essay.title;
    fullAuthor.textContent = `Por ${essay.author} · Ensayo modelo formativo reconstruido`;

    let html = "";
    essay.paragraphs.forEach(p => {
      const fullParaText = p.slots.map(s => s.expectedText).join(" ");
      html += `
        <div class="assembled-paragraph-block">
          <span class="assembled-paragraph-tag">${escapeHtml(p.partName)}</span>
          <p>${escapeHtml(fullParaText)}</p>
        </div>
      `;
    });

    // Botones de acción final en lectura completa
    html += `
      <div style="margin-top: 26px; display: flex; gap: 12px; flex-wrap: wrap;">
        <button type="button" class="btn-primary" id="btnExploreOtherEssay">Explorar otro ensayo modelo ↻</button>
        <button type="button" class="btn-secondary" id="btnJumpToConstructorFromAssembly">Ir al Simulador Constructor 🚀</button>
      </div>
    `;

    fullBody.innerHTML = html;
    fullPaper.style.display = "block";

    const btnExplore = document.getElementById("btnExploreOtherEssay");
    if (btnExplore) {
      btnExplore.addEventListener("click", () => {
        currentEssayIdx = (currentEssayIdx + 1) % ASSEMBLY_ESSAYS.length;
        currentParaIdx = 0;
        renderEssaySelector();
        renderStepper();
        loadParagraph(currentEssayIdx, currentParaIdx);
        fullPaper.style.display = "none";
      });
    }

    const btnJump = document.getElementById("btnJumpToConstructorFromAssembly");
    if (btnJump) {
      btnJump.addEventListener("click", () => {
        const tabConstructor = document.querySelector('.nav-tab[data-tab="tab-constructor"]');
        if (tabConstructor) tabConstructor.click();
      });
    }
  }

  // Inicialización inicial
  renderEssaySelector();
  renderStepper();
  loadParagraph(0, 0);
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
    explanation: "Es un argumento de causa y consecuencia: explica con rigor cómo una alteración fisiológica desencadena directamente un perjuicio funcional."
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
    topic: "EQUIDAD LABORAL Y LEGISLACIÓN",
    quote: "El caso paradigmático de Islandia demuestra que la aprobación de auditorías salariales obligatorias y sanciones severas a las empresas infractoras logró reducir la brecha salarial de género al mínimo histórico continental en menos de cinco años.",
    correctType: "ejemplo",
    explanation: "Es un argumento de ejemplificación o caso concreto: respalda la viabilidad de una política general ilustrándola mediante un caso real, emblemático y documentado (la experiencia legislativa de Islandia)."
  },
  {
    topic: "CAMBIO CLIMÁTICO Y BIODIVERSIDAD",
    quote: "La bióloga marina Jane Lubchenco y los informes del Panel Intergubernamental sobre Cambio Climático (IPCC) advierten que un incremento térmico oceánico superior a 1.5 °C destruirá entre el 70% y el 90% de los arrecifes coralinos globales.",
    correctType: "autoridad",
    explanation: "Es un argumento de autoridad calificada: se fundamenta en el consenso de la máxima institución científica climática (IPCC) y el juicio de una destacada investigadora."
  },
  {
    topic: "PEATONALIZACIÓN DE CASCOS HISTÓRICOS",
    quote: "De la misma manera en que un organismo colapsa si sus arterias principales se bloquean por un flujo desmedido, una ciudad se asfixia comercial y ambientalmente cuando su centro histórico se satura de automóviles en lugar de priorizar a los transeúntes.",
    correctType: "comparacion",
    explanation: "Es un argumento por analogía estructural: equipara el flujo circulatorio biológico con la movilidad urbana para ilustrar visualmente las consecuencias de la congestión."
  },
  {
    topic: "ALIMENTACIÓN EN EDAD ESCOLAR",
    quote: "El consumo recurrente de ultraprocesados con jarabe de maíz de alta fructosa altera la respuesta dopaminérgica del cerebro, lo cual propicia adicción temprana al dulce y duplica la incidencia de síndrome metabólico en adolescentes.",
    correctType: "causa",
    explanation: "Es un argumento de causa - consecuencia: establece el vínculo fisiológico causal directo entre un patrón dietético y el desarrollo de un trastorno posterior."
  },
  {
    topic: "LIBERTAD ACADÉMICA Y DELIBERACIÓN",
    quote: "Censurar debates incómodos en el ámbito universitario corrompe la misión formadora de la educación superior, pues la verdad sólo puede alcanzarse mediante la confrontación libre, honesta y respetuosa de ideas antagónicas.",
    correctType: "valores",
    explanation: "Es un argumento sustentado en principios morales y teleológicos: apela a la honestidad intelectual, la libertad de conciencia y el sentido ético de la búsqueda de la verdad."
  },
  {
    topic: "RESTAURACIÓN ECOLÓGICA DEPREDADORA",
    quote: "La reintroducción del lobo gris en el Parque Nacional de Yellowstone en 1995 ejemplifica cómo la restitución de un único depredador tope puede regular las poblaciones de ciervos, regenerar los bosques de álamos y estabilizar el cauce de los ríos mediante una cascada trófica real.",
    correctType: "ejemplo",
    explanation: "Es un argumento de ejemplificación: recurre a un acontecimiento histórico-científico documentado (el caso Yellowstone) para ilustrar de modo tangible y representativo cómo funciona la restauración ecológica."
  },
  {
    topic: "JORNADA LABORAL REDUCIDA",
    quote: "Disminuir la jornada semanal de 40 a 32 horas atenúa el agotamiento mental crónico, lo que redunda en una mayor concentración efectiva de los colaboradores y disminuye en un 28% los errores operativos en las líneas de producción.",
    correctType: "causa",
    explanation: "Es un argumento de causa y efecto: desglosa cómo una medida laboral actúa como causa generadora de bienestar psicológico y optimización de rendimiento."
  },
  {
    topic: "NEUROPLASTICIDAD Y TERCERA EDAD",
    quote: "Los estudios de la neurocientífica Marian Diamond y los investigadores del Instituto Max Planck corroboran que el aprendizaje de nuevos idiomas en la vejez preserva la densidad sináptica y retrasa hasta cinco años los síntomas de demencia senil.",
    correctType: "autoridad",
    explanation: "Es un argumento de autoridad científica: respalda la tesis citando a investigadores renombrados y a un centro de investigación neurocientífica de vanguardia mundial."
  },
  {
    topic: "CONSERVACIÓN LINGÜÍSTICA ANCESTRAL",
    quote: "Permitir que una lengua indígena desaparezca por desidia estatal equivale a quemar una enciclopedia viva e irrepetible donde se cifraron durante milenios secretos botánicos, medicinales y cosmovisiones irremplazables.",
    correctType: "comparacion",
    explanation: "Es un argumento por analogía: compara la pérdida de una lengua originaria con la destrucción de un archivo bibliográfico irremplazable para subrayar la magnitud del desastre cultural."
  },
  {
    topic: "JUSTICIA AMBIENTAL INTERGENERACIONAL",
    quote: "Agotar irreversiblemente los acuíferos subterráneos en aras de un beneficio agroexportador a corto plazo constituye una vulneración moral flagrante del principio de solidaridad y custodia hacia las futuras generaciones.",
    correctType: "valores",
    explanation: "Es un argumento fundado en valores y principios éticos: juzga la sostenibilidad desde el deber moral, la justicia distributiva y la responsabilidad hacia quienes heredarán el planeta."
  },
  {
    topic: "TRANSICIÓN ENERGÉTICA GLOBAL",
    quote: "El anuario de la Agencia Internacional de Energías Renovables (IRENA) registró que la energía solar y eólica generaron 14.2 millones de empleos directos a escala global en 2024, superando por primera vez a la minería de combustibles fósiles.",
    correctType: "hecho",
    explanation: "Es un argumento de hecho con respaldo estadístico cuantificable: ofrece una medición empírica documentada por una agencia multilateral especializada."
  },
  {
    topic: "ACUERDOS CLIMÁTICOS VINCULANTES",
    quote: "El éxito histórico del Protocolo de Montreal de 1987, que logró eliminar el 99% de las sustancias que agotaban la capa de ozono atmosférico, demuestra que cuando la comunidad internacional pacta metas de prohibición técnica obligatorias, las crisis ecológicas globales pueden revertirse eficazmente.",
    correctType: "ejemplo",
    explanation: "Es un argumento de ejemplificación empírica: valida la eficacia de los tratados vinculantes presentando un caso histórico concreto que alcanzó resultados indiscutibles."
  },
  {
    topic: "PROTECCIÓN DEL PERIODISMO DE INVESTIGACIÓN",
    quote: "Un Estado democrático que persigue a sus reporteros críticos es semejante a un navío cuyo capitán decide destruir el radar y los faros costeros solo porque le incomoda que alerten de arrecifes cercanos.",
    correctType: "comparacion",
    explanation: "Es un argumento por comparación o analogía figurativa: utiliza una metáfora de navegación para evidenciar lo autodestructivo de acallar la prensa fiscalizadora."
  },
  {
    topic: "URBANISMO SOCIAL Y MOVILIDAD",
    quote: "La experiencia de Medellín con la implementación de las líneas de Metrocable en las comunas populares demuestra que conectar los barrios periféricos marginalizados con el corazón productivo de la metrópoli reduce drásticamente los índices de criminalidad y dinamiza la economía local.",
    correctType: "ejemplo",
    explanation: "Es un argumento de ejemplificación urbana: toma la transformación documentada de una ciudad específica para demostrar de manera concreta el impacto del transporte social en zonas vulnerables."
  },
  {
    topic: "EXPERIMENTACIÓN Y SINESTESIA ANIMAL",
    quote: "Imponer sufrimientos agudos y confinamiento atroz a animales sintientes para evaluar cosméticos de lujo es un acto éticamente injustificable: la belleza estética jamás puede construirse sobre la crueldad y la deshumanización.",
    correctType: "valores",
    explanation: "Es un argumento anclado en valores éticos y principios deontológicos: apela a la empatía moral, el rechazo a la crueldad innecesaria y los deberes humanitarios básicos hacia seres sintientes."
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

    if (btnNextGym) {
      btnNextGym.textContent = (index === GYM_CASES.length - 1) 
        ? "Reiniciar entrenamiento ↻" 
        : "Siguiente caso →";
    }
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
