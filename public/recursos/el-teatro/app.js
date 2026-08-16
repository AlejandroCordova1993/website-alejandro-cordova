// Elementos del Teatro — Control de Diapositivas, Sidebar y Puntuación Continua
// Sistema de Diseño: Alejandro Córdova (HUMAN / SYSTEM)

let currentSlide = 1;
const totalSlides = 18;
let visitedSlides = new Set([1]);

const correctAnswers = {
    1: 'B', // Escrito para ser representado
    2: 'B', // Amplificar la voz y caracterizar
    3: 'B', // Acotación
    4: 'A', // Cuadro
    5: 'B', // Monólogo o soliloquio
    6: 'A', // El Aparte
    7: 'B', // Clímax
    8: 'A'  // Desenlace
};

let userAnswers = {};

const funFacts = {
    1: {
        title: "El Teatro Antiguo Griego",
        content: "En la Grecia clásica (siglo V a.C.), las representaciones se celebraban al aire libre en honor al dios Dionisio. Los actores utilizaban grandes máscaras con bocas cónicas que funcionaban como megáfonos acústicos naturales para que la voz resonara en graderíos de más de 15.000 espectadores."
    },
    2: {
        title: "William Shakespeare y el Globo",
        content: "En el teatro isabelino (Londres, 1599), el público de pie pagaba solo un penique. Al no haber iluminación artificial, las obras se realizaban a plena luz del día y el texto poético era el encargado de crear la noche, las tormentas o los castillos mediante las palabras."
    },
    3: {
        title: "La Tramoya y la Escenografía",
        content: "Antes de la electricidad, los efectos sonoros se creaban mecánicamente en la tramoya: se hacían rodar balas de cañón sobre madera para simular truenos, y se agitaban lienzos de seda para evocar el rumor del viento."
    },
    4: {
        title: "Rigor Dramático y Unidad de Tiempo",
        content: "Durante el neoclasicismo, los dramaturgos debían cumplir la estricta 'Regla de las Tres Unidades' (heredada de Aristóteles): la obra debía ocurrir en un solo lugar (acción), en un solo espacio y en un lapso máximo de 24 horas continuas."
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateSlideDisplay();
    setupKeyboardNavigation();
    updateScoreUI();
});

function updateSlideDisplay() {
    visitedSlides.add(currentSlide);

    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        const slideNum = parseInt(slide.getAttribute('data-slide'));
        if (slideNum === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Actualizar contador en sidebar
    const currentSlideNumEl = document.getElementById('currentSlideNum');
    if (currentSlideNumEl) currentSlideNumEl.textContent = currentSlide;

    // Actualizar barra de progreso
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const percentage = ((currentSlide) / totalSlides) * 100;
        progressFill.style.width = `${percentage}%`;
    }

    // Actualizar enlaces activos en la Sidebar izquierda
    updateSidebarLinks();

    // Actualizar botones de navegación inferior
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = currentSlide === 1;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides;

    // Si llega a la slide final, actualizar reporte
    if (currentSlide === 18) {
        renderFinalReport();
    }

    // Cerrar sidebar en móviles si está abierta
    const sidebar = document.getElementById('mainSidebar');
    if (sidebar && window.innerWidth <= 900) {
        sidebar.classList.remove('open');
    }

    // Scroll suave arriba en el área de contenido
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSidebarLinks() {
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach((link, idx) => {
        const slideIndex = idx + 1;
        link.classList.remove('active');
        if (slideIndex === currentSlide) {
            link.classList.add('active');
        } else if (visitedSlides.has(slideIndex)) {
            link.classList.add('visited');
        }
    });
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlideDisplay();
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlideDisplay();
    }
}

function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        currentSlide = slideNumber;
        updateSlideDisplay();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('mainSidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// Navegación con teclado
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            prevSlide();
        } else if (e.key === 'Escape') {
            closeModal();
            const sidebar = document.getElementById('mainSidebar');
            if (sidebar) sidebar.classList.remove('open');
        }
    });
}

// Selección de respuesta en Retos Intercalados
function selectAnswer(questionNum, selectedOption) {
    if (userAnswers[questionNum] !== undefined) return;

    userAnswers[questionNum] = selectedOption;
    const isCorrect = selectedOption === correctAnswers[questionNum];

    const qBox = document.getElementById(`q${questionNum}`);
    if (!qBox) return;

    const options = qBox.querySelectorAll('.quiz-opt');
    options.forEach(opt => {
        opt.classList.add('disabled');
        const optAnswer = opt.getAttribute('data-answer');
        if (optAnswer === selectedOption) {
            opt.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
        }
        if (!isCorrect && optAnswer === correctAnswers[questionNum]) {
            opt.classList.add('selected-correct');
        }
    });

    const fbBox = document.getElementById(`fb${questionNum}`);
    if (fbBox) {
        if (isCorrect) {
            fbBox.className = 'quiz-feedback-box correct';
            fbBox.innerHTML = '<strong>✓ Correcto:</strong> Has identificado el concepto con precisión.';
        } else {
            fbBox.className = 'quiz-feedback-box wrong';
            fbBox.innerHTML = `<strong>✗ Respuesta incorrecta:</strong> La opción correcta es la <strong>${correctAnswers[questionNum]}</strong>.`;
        }
    }

    updateScoreUI();
}

function calculateCurrentScore() {
    let totalCorrect = 0;
    for (let q = 1; q <= 8; q++) {
        if (userAnswers[q] === correctAnswers[q]) {
            totalCorrect++;
        }
    }
    const score = (totalCorrect * 1.25);
    return Math.round(score * 10) / 10;
}

function updateScoreUI() {
    const currentScore = calculateCurrentScore();
    const sidebarScoreDisplay = document.getElementById('sidebarScoreDisplay');
    if (sidebarScoreDisplay) {
        sidebarScoreDisplay.textContent = currentScore.toFixed(1);
    }
}

function renderFinalReport() {
    const finalScore = calculateCurrentScore();
    const finalScoreEl = document.getElementById('finalScoreDisplay');
    const feedbackEl = document.getElementById('finalScoreFeedback');

    if (finalScoreEl) finalScoreEl.textContent = finalScore.toFixed(1);

    if (feedbackEl) {
        if (finalScore >= 9.0) {
            feedbackEl.innerHTML = '<strong>Excelente dominio.</strong> Comprendes a la perfección los elementos y la estructura del texto teatral.';
        } else if (finalScore >= 7.0) {
            feedbackEl.innerHTML = '<strong>Buen trabajo.</strong> Tienes un entendimiento sólido de los conceptos fundamentales.';
        } else if (finalScore >= 5.0) {
            feedbackEl.innerHTML = '<strong>Nivel Aceptable.</strong> Te sugerimos repasar las acotaciones y la estructura interna.';
        } else {
            feedbackEl.innerHTML = '<strong>Sigue practicando.</strong> Revisa el temario en el menú izquierdo y vuelve a intentar los retos.';
        }
    }

    const r1 = ((userAnswers[1] === correctAnswers[1] ? 1.25 : 0) + (userAnswers[2] === correctAnswers[2] ? 1.25 : 0)).toFixed(1);
    const r2 = ((userAnswers[3] === correctAnswers[3] ? 1.25 : 0) + (userAnswers[4] === correctAnswers[4] ? 1.25 : 0)).toFixed(1);
    const r3 = ((userAnswers[5] === correctAnswers[5] ? 1.25 : 0) + (userAnswers[6] === correctAnswers[6] ? 1.25 : 0)).toFixed(1);
    const r4 = ((userAnswers[7] === correctAnswers[7] ? 1.25 : 0) + (userAnswers[8] === correctAnswers[8] ? 1.25 : 0)).toFixed(1);

    const b1 = document.getElementById('breakdownR1');
    const b2 = document.getElementById('breakdownR2');
    const b3 = document.getElementById('breakdownR3');
    const b4 = document.getElementById('breakdownR4');

    if (b1) b1.textContent = `${r1} / 2.5 pts`;
    if (b2) b2.textContent = `${r2} / 2.5 pts`;
    if (b3) b3.textContent = `${r3} / 2.5 pts`;
    if (b4) b4.textContent = `${r4} / 2.5 pts`;
}

function resetPresentation() {
    userAnswers = {};
    updateScoreUI();

    document.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.classList.remove('disabled', 'selected-correct', 'selected-wrong');
    });

    document.querySelectorAll('.quiz-feedback-box').forEach(fb => {
        fb.className = 'quiz-feedback-box';
        fb.innerHTML = '';
        fb.style.display = 'none';
    });

    goToSlide(1);
}

// Modales de Datos Curiosos
function showFunFact(factId) {
    const fact = funFacts[factId];
    if (!fact) return;

    const modal = document.getElementById('funFactModal');
    const titleEl = document.getElementById('modalTitle');
    const contentEl = document.getElementById('funFactContent');

    if (titleEl) titleEl.textContent = fact.title;
    if (contentEl) contentEl.textContent = fact.content;
    if (modal) modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('funFactModal');
    if (modal) modal.classList.add('hidden');
}