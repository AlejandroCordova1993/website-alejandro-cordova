/**
 * LÓGICA INTERACTIVA — LOS TZÁNTZICOS (1962–1969)
 * Vanguardia, Ruptura y Poética de la Indignación
 * Alejandro Córdova — Consultoría e Innovación Educativa
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProgressBar();
  initMobileToggle();
  initAuthorDirectory();
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
   4. DIRECTORIO CRÍTICO DE AUTORES (MASTER-DETAIL)
   ========================================================================== */

const authorsDatabase = [
  {
    id: 'estrella',
    name: 'Ulises Estrella',
    monogram: 'UE',
    dates: '1939 – 2014 · Quito',
    role: 'Fundador & Dinamizador Central',
    category: 'poetas',
    concept: 'Existencialismo Urbano, Desarraigo y Memoria Incandescente',
    essay: 'Líder organizativo e ideológico del Tzantzismo. Articuló los recitales callejeros, la redacción de los manifiestos liminares y cofundó las revistas <em>Clamor</em>, <em>Pucuna</em> y <em>La Bufanda del Sol</em>. Expandió la guerrilla cultural por América Central (revista <em>Quetzal</em>) y fundó la Cinemateca Nacional del Ecuador, entendiendo el cine y la poesía como herramientas gemelas de descolonización de la mirada.',
    works: 'Clamor (1962) · Peatón de manzana (1965) · Ombligo del mundo (1966) · Convulsionario (1974) · Memoria incandescente (2003).',
    quote: '«Caminar por estas calles de piedra es morder la sombra de los siglos hasta que brote la luz.»'
  },
  {
    id: 'cueva',
    name: 'Agustín Cueva',
    monogram: 'AC',
    dates: '1937 – 1992 · Ibarra',
    role: 'Teórico Central & Sociólogo de la Cultura',
    category: 'teoricos',
    concept: 'Crítica a la Miseria de la Literatura y Teoría de la Dependencia',
    essay: 'Máxima figura del pensamiento crítico ecuatoriano y latinoamericano. Fundó la Escuela de Sociología de la Universidad Central del Ecuador (UCE) y codirigió la revista <em>Indoamérica</em>. En su ensayo capital <em>Entre la ira y la esperanza</em> (1967), demolió los mitos aristocráticos de la cultura oficial, señalando que la verdadera literatura debía abandonar la complacencia de salón para asumir las contradicciones de la lucha de clases.',
    works: 'Entre la ira y la esperanza (1967) · El proceso de dominación política en el Ecuador (1972) · El desarrollo del capitalismo en América Latina (Premio Ensayo FCE, 1977) · Lecturas y rupturas (1986).',
    quote: '«Pasamos de la literatura de la miseria a la miseria de la literatura... No hay arte revolucionario sin rigor teórico ni compromiso con los explotados.»'
  },
  {
    id: 'vinueza',
    name: 'Humberto Vinueza',
    monogram: 'HV',
    dates: '1942 – 2017 · Guayaquil',
    role: 'Cumbre Lírica del Movimiento',
    category: 'poetas',
    concept: 'Sintaxis Fracturada, Fuerza Grotesca y Desacralización del Canon',
    essay: 'Reconocido de forma unánime como la cumbre poética del Tzantzismo. Su escritura fracturó la métrica y la sintaxis convencional para desplegar una imaginería visceral, grotesca y despiadada contra la hipocresía social. Premio Nacional Eugenio Espejo 2012, su poética fusiona la furia contestataria con una refinada audacia vanguardista.',
    works: 'Un gallinazo cantor bajo un sol de a perro (1968) · Poetrelio (1970) · Alianza de laberintos (1989) · Constatación de la huella (2012).',
    quote: '«Bajo este cielo de plomo cantan los gallinazos la misa negra de la historia oficial.»'
  },
  {
    id: 'murriagui',
    name: 'Alfonso Murriagui',
    monogram: 'AM',
    dates: '1929 – 2017 · Quito',
    role: 'Poeta de Trinchera & Cofundador',
    category: 'poetas',
    concept: 'El Dardo Panfletario y la Voz del Sujeto Colectivo («Nosotros»)',
    essay: 'Periodista, fotógrafo y combatiente cultural de larga trayectoria popular. Cofirmante del Primer Manifiesto Tzántzico de 1962 y redactor constante en la revista <em>Pucuna</em>. Su lírica despojó al verso de cualquier adorno burgués para transformarlo en herramienta de agitación directa, asumiendo la primera persona del plural como encarnación del movimiento obrero.',
    works: '33 abajo (1968) · Voz descalza · Crónicas y proclamas en Pucuna (1962–1968).',
    quote: '«Nuestra voz no es perfume de alcoba: es el grito del minero y la pólvora del pueblo que despierta.»'
  },
  {
    id: 'larrea',
    name: 'Rafael Larrea',
    monogram: 'RL',
    dates: '1942 – 2011 · Quito',
    role: 'Poeta de la Ternura Rebelde',
    category: 'poetas',
    concept: 'Ternura Rebelde y Humanismo Revolucionario Cotidiano',
    essay: 'Poeta y militante histórico del Partido Comunista Marxista Leninista del Ecuador (PCMLE). Cofundador del Frente Cultural y de la segunda época de <em>La Bufanda del Sol</em>. Su poesía demostró que la militancia radical no está reñida con la calidez del amor cotidiano ni con el pan compartido, inaugurando una lírica de profunda dignidad humana.',
    works: 'Levantapolvos (1969) · Bajo el sombrero · Las huellas del amor · Nosotros la vida.',
    quote: '«El amor en tiempo de combate es el pan compartido bajo la lluvia de las balas.»'
  },
  {
    id: 'arias',
    name: 'Raúl Arias',
    monogram: 'RA',
    dates: '1944 · Quito',
    role: 'Poeta & Dramaturgo',
    category: 'poetas narrativa-teatro',
    concept: 'Velocidad Urbana, Ironía Ácida y Agilismo Moderno',
    essay: 'Poeta, traductor y dramaturgo esencial del Teatro Ensayo. Introdujo el agilismo y el humor cáustico en la poesía ecuatoriana, utilizando la bicicleta como vehículo simbólico de un pensamiento ágil que recorre la ciudad desmitificando los monumentos solemnes y la retórica anquilosada de las academias.',
    works: 'Poesía en bicicleta (1975) · Gente de la tierra · Dramaturgias para el Teatro Ensayo.',
    quote: '«Pedalear contra el viento de las academias es la única forma de no congelarse en sus estatuas.»'
  },
  {
    id: 'tinajero',
    name: 'Fernando Tinajero',
    monogram: 'FT',
    dates: '1940 · Quito',
    role: 'Filósofo & Novelista',
    category: 'teoricos narrativa-teatro',
    concept: 'El Segundo Gran Momento Nacional-Popular y el Desencanto Ético',
    essay: 'Filósofo, ensayista y novelista imprescindible. Codirigió la revista <em>Indoamérica</em> y teorizó sobre el Tzantzismo como la ruptura que refundó el lazo ético entre el escritor y el pueblo. En su novela <em>El desencanto</em> (1975, Premio Casa de las Américas), retrató con maestría la encrucijada existencial, política y ética de la juventud universitaria de los años sesenta.',
    works: 'El desencanto (1975) · De la evasión al desencanto (1976) · Teoría de la cultura ecuatoriana (1986).',
    quote: '«El tzantzismo no fue una moda de bohemios: fue la reconstrucción ética del lazo entre el escritor y su pueblo.»'
  },
  {
    id: 'moreano',
    name: 'Alejandro Moreano',
    monogram: 'AM',
    dates: '1945 · Quito',
    role: 'Crítico Literario & Ensayista',
    category: 'teoricos',
    concept: 'Dimensión Ética del Creador y Neovanguardia Latinoamericana',
    essay: 'Cofundador y director de <em>La Bufanda del Sol</em> (1.ª y 2.ª época). Catedrático y ensayista central en los debates sobre literatura y sociedad en América Latina. Su pensamiento articuló la audacia formal de las vanguardias con la praxis política revolucionaria y la descolonización epistémica.',
    works: 'El escritor, la sociedad y el poder (1983) · El apocalipsis perpetuo · Identidad, cultura y política en América Latina.',
    quote: '«El arte es un acto de soberanía ética que no transige con las trampas del poder establecido.»'
  },
  {
    id: 'ordonez',
    name: 'Antonio Ordóñez',
    monogram: 'AO',
    dates: '1944 · Cuenca',
    role: 'Director del Teatro Ensayo',
    category: 'narrativa-teatro',
    concept: 'Distanciamiento Brechtiano, Teatro Épico y Concientización Popular',
    essay: 'Figura fundacional de la escena teatral moderna en el Ecuador. Junto al director italiano Fabio Pacchioni fundó el Teatro Ensayo en 1964. En 1970 dirigió la histórica puesta en escena de <em>Huasipungo</em> en el Teatro Sucre, dinamitando el realismo contemplativo mediante el distanciamiento épico de Bertolt Brecht y convocando a masas de campesinos y obreros.',
    works: 'Puesta en escena de Huasipungo (1970) · Boletín y elegía de las mitas (1968) · El éxodo de Yangana.',
    quote: '«El teatro no es un espejo complaciente: es un martillo para transformar la conciencia del espectador.»'
  },
  {
    id: 'granda',
    name: 'Euler Granda',
    monogram: 'EG',
    dates: '1935 – 2018 · Riobamba',
    role: 'Poeta & Cofirmante del Manifiesto',
    category: 'poetas',
    concept: 'Lírica Desengañada, Dolor Cotidiano y Marginalidad Urbana',
    essay: 'Médico psiquiatra y poeta desgarrado. Firmante del Primer Manifiesto Tzántzico (1962) y creador del espacio radial <em>Ojo del Pozo</em>. Su voz lírica se apartó de la consigna política directa para explorar el dolor cotidiano, la soledad y la marginación en una ciudad fría e indiferente.',
    works: 'El rostro de los días (1963) · Etcétera (1965) · Un perro tocando la trompeta (1970) · Reló semáforo (1985).',
    quote: '«Escribir con la herida abierta en medio de una ciudad que finge no ver su propia sangre.»'
  },
  {
    id: 'corral-munoz',
    name: 'Simón Corral & Marco Muñoz',
    monogram: 'SC',
    dates: 'Generación del 62 · Quito',
    role: 'Pioneros del Acto Recitante',
    category: 'narrativa-teatro poetas',
    concept: 'Agitación Escénica, Provocación Textual y Happenings Callejeros',
    essay: 'Protagonistas esenciales del primer recital de choque <em>Cuatro gritos en la oscuridad</em> (1962). Redactores de proclamas liminares y autores de piezas teatrales breves destinadas a irrumpir en asambleas populares, quebrando para siempre la frontera entre el escenario y la platea.',
    works: 'Cuatro gritos en la oscuridad (1962) · Primer Manifiesto Tzántzico · Dramaturgias de agitación popular.',
    quote: '«Aquí está su patria; tráguensela... La poesía empieza donde termina la hipocresía de los salones.»'
  },
  {
    id: 'ubidia',
    name: 'Abdón Ubidia',
    monogram: 'AU',
    dates: '1944 · Quito',
    role: 'Narrador & Ensayista',
    category: 'narrativa-teatro teoricos',
    concept: 'Polifonía Urbana, Rigor Formal y Transición Narrativa de los 70',
    essay: 'Narrador fundamental y miembro del Frente Cultural y <em>La Bufanda del Sol</em> (2.ª época). Premio Nacional Eugenio Espejo 2014. Articuló el paso de la rebelión lírica tzántzica hacia la gran consolidación de la novela urbana contemporánea, retratando la polifonía y los laberintos de la ciudad moderna.',
    works: 'Ciudad de invierno (1979) · Sueño de lobos (1986) · Divertimentos (1989) · El palacio de los espejos (ensayos).',
    quote: '«Los tzántzicos fuimos portadores de una propuesta de vida total donde palabra, rigor formal y transformación eran inseparables.»'
  }
];

let activeAuthorId = 'estrella';
let currentFilter = 'all';

function initAuthorDirectory() {
  const navContainer = document.getElementById('authorDirectoryNav');
  const stageContainer = document.getElementById('authorDossierStage');
  const filterBtns = document.querySelectorAll('.author-filter-btn');

  if (!navContainer || !stageContainer) return;

  function renderDirectory() {
    navContainer.innerHTML = '';

    const visibleAuthors = authorsDatabase.filter(author => {
      if (currentFilter === 'all') return true;
      return author.category.includes(currentFilter);
    });

    if (visibleAuthors.length === 0) {
      navContainer.innerHTML = '<div style="padding:15px;color:#64748B;font-size:0.85rem;">No se encontraron autores en esta categoría.</div>';
      return;
    }

    // Verificar si el autor activo actual sigue visible; si no, seleccionar el primero visible
    if (!visibleAuthors.some(a => a.id === activeAuthorId)) {
      activeAuthorId = visibleAuthors[0].id;
    }

    visibleAuthors.forEach(author => {
      const btn = document.createElement('button');
      btn.className = `author-nav-item ${author.id === activeAuthorId ? 'active' : ''}`;
      btn.setAttribute('type', 'button');
      btn.innerHTML = `
        <div class="author-nav-monogram">${author.monogram}</div>
        <div class="author-nav-info">
          <div class="author-nav-name">${author.name}</div>
          <div class="author-nav-role">${author.role}</div>
        </div>
      `;

      btn.addEventListener('click', () => {
        activeAuthorId = author.id;
        document.querySelectorAll('.author-nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderDossier();
      });

      navContainer.appendChild(btn);
    });

    renderDossier();
  }

  function renderDossier() {
    const author = authorsDatabase.find(a => a.id === activeAuthorId) || authorsDatabase[0];
    if (!author) return;

    stageContainer.innerHTML = `
      <div>
        <div class="dossier-header">
          <div class="dossier-meta-bar">
            <span class="dossier-role-badge">${author.role}</span>
            <span class="dossier-dates">${author.dates}</span>
          </div>
          <h3 class="dossier-name">${author.name}</h3>
          <div class="dossier-concept-pill">${author.concept}</div>
        </div>

        <div class="dossier-body">
          <p>${author.essay}</p>
        </div>

        <div class="dossier-works-box">
          <span class="dossier-works-title">Obras Fundamentales & Hitos:</span>
          <div>${author.works}</div>
        </div>
      </div>

      <div class="dossier-quote-box">
        ${author.quote}
      </div>
    `;
  }

  // Event listeners para los filtros de categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderDirectory();
    });
  });

  renderDirectory();
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
