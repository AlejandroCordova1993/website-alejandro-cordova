
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const totalElem = document.getElementById('totalSlides');
    const currentElem = document.getElementById('currentSlide');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");
    const clickableImages = document.querySelectorAll(".clickable-img");

    // If an element already has the class 'active', start there; otherwise start at 0
    let currentSlide = 0;
    const initialActive = Array.from(slides).findIndex(s => s.classList && s.classList.contains('active'));
    if (initialActive >= 0) currentSlide = initialActive;

    // Ensure UI shows correct total slides
    if (totalElem) totalElem.textContent = slides.length;

    // Crear indicador de scroll
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.textContent = '↕ Desplázate para ver más';
    document.body.appendChild(scrollIndicator);

    function checkScrollable(slide) {
        const isScrollable = slide.scrollHeight > slide.clientHeight;
        if (isScrollable) {
            slide.classList.add('scrollable');
            showScrollIndicator();
        } else {
            slide.classList.remove('scrollable');
            hideScrollIndicator();
        }
        return isScrollable;
    }

    function showScrollIndicator() {
        scrollIndicator.classList.add('show');
        setTimeout(() => {
            scrollIndicator.classList.remove('show');
        }, 3000);
    }

    function hideScrollIndicator() {
        scrollIndicator.classList.remove('show');
    }

    function showSlide(n) {
        // Normalize n into valid index
        if (slides.length === 0) return;
        let idx = ((n % slides.length) + slides.length) % slides.length;
        slides.forEach(slide => {
            slide.classList.remove("active");
            slide.scrollTop = 0; // Resetear scroll al cambiar de slide
        });
        slides[idx].classList.add("active");
        
    // Actualizar contador y barra de progreso usando el índice normalizado
    if (currentElem) currentElem.textContent = idx + 1;
    const progress = ((idx + 1) / slides.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) progressFill.style.width = progress + '%';
        
        // Verificar si el slide necesita scroll después de un pequeño delay
        setTimeout(() => {
            checkScrollable(slides[idx]);
        }, 100);
    }

    window.addEventListener('course-shell-slide', (event) => {
        currentSlide = event.detail;
        showSlide(currentSlide);
    });
    window.courseShellNavigate = (index) => {
        currentSlide = index;
        showSlide(currentSlide);
    };

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'Home') {
            currentSlide = 0;
            showSlide(currentSlide);
        } else if (e.key === 'End') {
            currentSlide = slides.length - 1;
            showSlide(currentSlide);
        }
    });

    // Detectar cambios de tamaño de ventana
    window.addEventListener('resize', () => {
        const activeSlide = document.querySelector('.slide.active');
        if (activeSlide) {
            setTimeout(() => {
                checkScrollable(activeSlide);
            }, 100);
        }
    });

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    function openModal(src) {
        if (!modal || !modalImg) return;
        modal.style.display = "block";
        modalImg.src = src;
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        if (!modal) return;
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    // Full-screen image functionality
    clickableImages.forEach(img => {
        img.addEventListener("click", () => {
            openModal(img.dataset.fullSrc || img.src);
        });
        // Allow keyboard activation
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(img.dataset.fullSrc || img.src);
            }
        });
    });

    // Delegated listener: por si las imágenes se añaden dinámicamente o hay overlays
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        // Si se clickea una imagen con la clase clickable-img
        if (target && target.classList && target.classList.contains('clickable-img')) {
            openModal(target.dataset.fullSrc || target.src || '');
        }
        // Si se clickea un botón para ampliar imagen
        if (target && target.classList && target.classList.contains('btn-expand-image')) {
            const container = target.closest('.image-container');
            if (!container) return;
            const img = container.querySelector('.clickable-img');
            if (img) {
                openModal(img.dataset.fullSrc || img.src || '');
            }
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    showSlide(currentSlide);
});
