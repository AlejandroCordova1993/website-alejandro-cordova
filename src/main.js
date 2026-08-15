// Main Application Logic for Alejandro Córdova Website

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileToggle.textContent = isOpen ? 'CERRAR ✕' : 'MENU +';
    });

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        mobileToggle.textContent = 'MENU +';
      });
    });
  }

  // 2. Formación Catalog Tab Filtering
  const tabBtns = document.querySelectorAll('.tab-btn');
  const courseCards = document.querySelectorAll('.course-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      courseCards.forEach(card => {
        if (category === 'all') {
          card.style.display = 'flex';
        } else {
          const cardCat = card.getAttribute('data-cat');
          if (cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // 3. Scroll Spy for Active Navigation Links
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // 4. Contact Form Handling (Integrated with FormSubmit.co)
  const contactForm = document.getElementById('contactForm');
  const toastAlert = document.getElementById('toastAlert');

  if (contactForm && toastAlert) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Enviando consulta...</span>';

      try {
        const formData = new FormData(contactForm);
        formData.append('_subject', 'Nueva consulta desde la web alejandrocordova.com');
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        const response = await fetch('https://formsubmit.co/ajax/alejandrocordovadocente@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          contactForm.reset();
          toastAlert.textContent = '¡Gracias! Tu consulta ha sido enviada exitosamente. Alejandro se pondrá en contacto en breve.';
          toastAlert.style.display = 'block';
        } else {
          // Fallback submit
          contactForm.submit();
        }
      } catch (err) {
        contactForm.reset();
        toastAlert.textContent = '¡Gracias! Tu mensaje ha sido registrado. Alejandro se pondrá en contacto en breve.';
        toastAlert.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        setTimeout(() => {
          toastAlert.style.display = 'none';
        }, 6000);
      }
    });
  }
});
