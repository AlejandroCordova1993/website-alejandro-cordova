/**
 * LÓGICA INTERACTIVA — LOS TZÁNTZICOS (1962–1969)
 * Vanguardia, Ruptura y Poética de la Indignación
 * Alejandro Córdova — Consultoría e Innovación Educativa
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProgressBar();
  initMobileToggle();
  initAuthorFilters();
  initQuiz();
});

/* ==========================================================================
   1. NAVEGACIÓN Y SCROLLSPY
   ========================================================================== */

function initNavigation() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.sidebar-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   2. BARRA DE PROGRESO DE LECTURA
   ========================================================================== */

function initProgressBar() {
  const fill = document.getElementById('sidebarProgressFill');
  const percentText = document.getElementById('sidebarProgressPercent');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.min(100, Math.max(0, Math.round((winScroll / height) * 100)));

    if (fill) fill.style.width = scrolled + '%';
    if (percentText) percentText.textContent = scrolled + '%';
  });
}

/* ==========================================================================
   3. MENU MÓVIL TOGGLE
   ========================================================================== */

function initMobileToggle() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const sidebar = document.getElementById('mainSidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      toggleBtn.textContent = sidebar.classList.contains('open') ? 'CERRAR MENÚ ✕' : 'ÍNDICE ☰';
    });

    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 960) {
          sidebar.classList.remove('open');
          toggleBtn.textContent = 'ÍNDICE ☰';
        }
      });
    });
  }
}

/* ==========================================================================
   4. FILTROS DE AUTORES
   ========================================================================== */

function initAuthorFilters() {
  const filterBtns = document.querySelectorAll('.author-filter-btn');
  const authorCards = document.querySelectorAll('.author-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      authorCards.forEach(card => {
        const categories = card.dataset.category || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. SIMULADOR Y EVALUACIÓN FORMATIVA CRÍTICA
   ========================================================================== */

const quizData = [
  {
    id: 1,
    question: "¿Qué significó la noción de 'tzantza' (reducción de cabezas) en el proyecto cultural del grupo de 1962?",
    options: [
      { text: "Un rescate meramente folclórico de leyendas amazónicas sin carga política.", isCorrect: false },
      { text: "Una metáfora parricida e iconoclasta para decapitar y reducir las cabezas anquilosadas de las élites literarias y académicas complacientes.", isCorrect: true, feedback: "¡Correcto! Los tzántzicos se autodenominaron 'reductores de cabezas' para declarar la guerra simbólica al canon burgués, a la poesía evasiva y a los mandarines de la cultura oficial." },
      { text: "Una técnica de métrica clásica para recortar las estrofas del soneto tradicional.", isCorrect: false },
      { text: "Un pacto de reconciliación estética con la Generación del 30 y Jorge Icaza.", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "¿Por qué Agustín Cueva calificó el momento literario previo al Tzantzismo como 'el paso de la literatura de la miseria a la miseria de la literatura'?",
    options: [
      { text: "Porque el realismo social se había burocratizado y agotado en un epigonismo complaciente y descriptivo desconectado de la praxis viva.", isCorrect: true, feedback: "¡Exacto! Cueva denunció que tras el esplendor del indigenismo de los años 30, la literatura cayó en una retórica repetitiva e inoperante, requiriendo una radicalización política y estética." },
      { text: "Porque no existían editoriales públicas ni librerías en Quito durante los años sesenta.", isCorrect: false },
      { text: "Porque los escritores cobraban salarios muy bajos en la Casa de la Cultura.", isCorrect: false },
      { text: "Porque la narrativa ecuatoriana se negaba a tratar temas sociales.", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "¿En qué consistió la acción performativa inaugural 'Cuatro gritos en la oscuridad' (26 de abril de 1962)?",
    options: [
      { text: "En un concierto de música sacra en la Catedral Metropolitana.", isCorrect: false },
      { text: "En un recital en penumbra absoluta, iluminado solo por velas, donde leyeron textos en rollos de papel higiénico y repartieron banderas con 'Aquí está su patria; tráguensela'.", isCorrect: true, feedback: "¡Correcto! Fue el primer 'happening' y acto recitante de agitación, rompiendo con la solemnidad del auditorio Benjamín Carrión de la CCE." },
      { text: "En un debate parlamentario transmitido por televisión nacional.", isCorrect: false },
      { text: "En una exposición pictórica silenciosa en el taller de Oswaldo Guayasamín.", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "¿Qué transformación introdujo el Teatro Ensayo (fundado con Fabio Pacchioni y Antonio Ordóñez) en la histórica puesta de Huasipungo (1970)?",
    options: [
      { text: "Reemplazó el método Stanislavsky por el distanciamiento épico brechtiano, dinamitando el realismo pasivo ante un teatro repleto de público popular.", isCorrect: true, feedback: "¡Excelente! La obra estrenada el 19 de marzo de 1970 en el Teatro Sucre convirtió la novela de Icaza en una experiencia de agitación colectiva, logrando 4 meses de lleno total." },
      { text: "Transformó la obra en una ópera italiana cantada en latín.", isCorrect: false },
      { text: "Suprimió todo contenido social para convertirla en una comedia de salón.", isCorrect: false },
      { text: "Prohibió el ingreso a estudiantes, obreros y campesinos.", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Frente a la crítica formalista de Iván Carvajal, ¿cuál fue la defensa histórica de Fernando Tinajero y Agustín Cueva sobre el Tzantzismo?",
    options: [
      { text: "Que el Tzantzismo fue el 'segundo gran momento de la cultura nacional-popular', redefiniendo al intelectual como un 'trabajador de la cultura' y restituyendo el lazo ético del arte con el pueblo.", isCorrect: true, feedback: "¡Brillante análisis! Para Tinajero y Cueva, la grandeza tzántzica no radica en el formalismo puro, sino en haber demolido la falsa conciencia burguesa y refundado la figura del intelectual público comprometido." },
      { text: "Que el grupo debió dedicarse exclusivamente al soneto renacentista.", isCorrect: false },
      { text: "Que la poesía no debe tener ninguna relación con la realidad histórica ni con la política.", isCorrect: false },
      { text: "Que los manifiestos no tienen valor en la historia de las ideas.", isCorrect: false }
    ]
  }
];

function initQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  container.innerHTML = '';

  quizData.forEach((q, index) => {
    const qBox = document.createElement('div');
    qBox.className = 'quiz-question-box';
    qBox.id = `quiz-q-${q.id}`;

    const num = document.createElement('div');
    num.className = 'quiz-num';
    num.textContent = `Pregunta ${index + 1} de ${quizData.length}`;

    const text = document.createElement('div');
    text.className = 'quiz-text';
    text.textContent = q.question;

    const optContainer = document.createElement('div');
    optContainer.className = 'quiz-options';

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    feedback.id = `quiz-feedback-${q.id}`;

    q.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = opt.text;

      btn.addEventListener('click', () => {
        const allBtns = optContainer.querySelectorAll('.quiz-option-btn');
        allBtns.forEach(b => b.disabled = true);

        if (opt.isCorrect) {
          btn.classList.add('correct');
          feedback.className = 'quiz-feedback show success';
          feedback.innerHTML = `<strong>✓ Análisis Correcto:</strong> ${opt.feedback}`;
        } else {
          btn.classList.add('incorrect');
          const correctBtn = Array.from(allBtns).find((_, idx) => q.options[idx].isCorrect);
          if (correctBtn) correctBtn.classList.add('correct');

          const correctOpt = q.options.find(o => o.isCorrect);
          feedback.className = 'quiz-feedback show error';
          feedback.innerHTML = `<strong>✗ Respuesta incorrecta.</strong> Explicación: ${correctOpt ? correctOpt.feedback : 'Revisa los postulados teóricos del movimiento.'}`;
        }
      });

      optContainer.appendChild(btn);
    });

    qBox.appendChild(num);
    qBox.appendChild(text);
    qBox.appendChild(optContainer);
    qBox.appendChild(feedback);
    container.appendChild(qBox);
  });
}
