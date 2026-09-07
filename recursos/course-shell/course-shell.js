(function () {
  function cleanLabel(text) {
    if (!text) return '';
    return text
      .replace(/\s+/g, ' ')
      .replace(/[\uD800-\uDFFF\uFFFD]/g, '')
      .replace(/[📚📘📗📝🎮🔍🔄🎯🏛️🧱⚖️🔗🛠️📖💡0-9]/g, '')
      .replace(/^[·\s\-\.:]+/, '')
      .trim();
  }

  function getTitle() {
    const heading = document.querySelector('h1');
    return cleanLabel(heading ? heading.textContent : document.title.split('|')[0]);
  }

  function getSectionLabel(section, index) {
    if (section.dataset.label) return section.dataset.label.trim();
    const heading = section.querySelector('h1, h2, h3, .section-title, .slide-title, .title');
    const label = cleanLabel(heading ? heading.textContent : `Sección ${index + 1}`);
    return label.length > 36 ? `${label.slice(0, 34)}…` : label;
  }

  function getSections() {
    const slides = Array.from(document.querySelectorAll('.slide'));
    if (slides.length) return { items: slides, mode: 'slides' };

    const selectors = [
      'main > section[id]',
      'main > .section',
      '.container > section[id]',
      '.container > .section',
      '.content-wrapper > section[id]',
      '.content-wrapper > .chapter',
      'body > section[id]'
    ];
    const items = Array.from(document.querySelectorAll(selectors.join(',')));
    const unique = items.filter((item, index) => items.indexOf(item) === index);
    if (!unique.length) {
      [
        [document.querySelector('header'), 'Inicio'],
        [document.querySelector('.view-controls'), 'Controles'],
        [document.querySelector('main'), 'Actividad'],
        [document.querySelector('footer'), 'Cierre']
      ].forEach(([item, label]) => {
        if (item && !unique.includes(item)) {
          item.dataset.label = label;
          unique.push(item);
        }
      });
    }
    unique.forEach((item, index) => {
      if (!item.id) item.id = `course-section-${index + 1}`;
      item.classList.add('course-shell__section-anchor');
    });
    return { items: unique, mode: 'sections' };
  }

  function closeDrawer() {
    document.body.classList.remove('course-sidebar-open');
    const toggleBtn = document.getElementById('courseSidebarToggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('.toggle-icon');
      if (icon) icon.textContent = '☰';
    }
  }

  function openDrawer() {
    document.body.classList.remove('course-sidebar-collapsed');
    document.body.classList.add('course-sidebar-open');
    const toggleBtn = document.getElementById('courseSidebarToggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
      const icon = toggleBtn.querySelector('.toggle-icon');
      if (icon) icon.textContent = '✕';
    }
  }

  function toggleDrawer() {
    if (document.body.classList.contains('course-sidebar-open')) {
      closeDrawer();
    } else if (document.body.classList.contains('course-sidebar-collapsed')) {
      document.body.classList.remove('course-sidebar-collapsed');
    } else {
      openDrawer();
    }
  }

  function toggleCollapseDesktop() {
    if (window.innerWidth > 960) {
      document.body.classList.toggle('course-sidebar-collapsed');
    } else {
      closeDrawer();
    }
  }

  function createSidebar(sections) {
    const aside = document.createElement('aside');
    aside.className = 'course-sidebar';
    aside.id = 'courseSidebar';
    aside.setAttribute('aria-label', 'Navegación del recurso');

    // Header bar inside sidebar
    const sidebarTop = document.createElement('div');
    sidebarTop.className = 'course-sidebar__header';

    const back = document.createElement('a');
    back.className = 'course-sidebar__back';
    back.href = '../../recursos.html';
    back.textContent = '← Volver a recursos';
    sidebarTop.appendChild(back);

    // Desktop collapse / Mobile close button
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'course-sidebar__close-btn';
    closeBtn.setAttribute('aria-label', 'Cerrar o contraer menú');
    closeBtn.title = 'Cerrar menú';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', toggleCollapseDesktop);
    sidebarTop.appendChild(closeBtn);

    aside.appendChild(sidebarTop);

    // Title
    const title = document.createElement('h2');
    title.className = 'course-sidebar__title';
    title.textContent = getTitle();
    aside.appendChild(title);

    const subtitle = document.createElement('span');
    subtitle.className = 'course-sidebar__subtitle';
    subtitle.textContent = 'ÍNDICE DE CONTENIDOS';
    aside.appendChild(subtitle);

    // Navigation items
    const nav = document.createElement('nav');
    nav.className = 'course-sidebar__nav';
    nav.setAttribute('aria-label', 'Secciones del recurso');

    sections.items.forEach((section, index) => {
      const label = getSectionLabel(section, index);
      const link = document.createElement(sections.mode === 'slides' ? 'button' : 'a');
      link.className = 'course-sidebar__link';
      link.textContent = label;
      link.dataset.target = section.id || `course-section-${index + 1}`;

      if (sections.mode === 'slides') {
        link.type = 'button';
        link.addEventListener('click', () => {
          window.dispatchEvent(new CustomEvent('course-shell-slide', { detail: index }));
          closeDrawer();
        });
      } else {
        link.href = `#${link.dataset.target}`;
        link.addEventListener('click', (e) => {
          const targetId = link.dataset.target;
          const targetEl = document.getElementById(targetId);

          if (targetEl) {
            // If target is a tab-content or inside one
            const tabContent = targetEl.classList.contains('tab-content') ? targetEl : targetEl.closest('.tab-content');
            if (tabContent) {
              e.preventDefault();
              const tabBtn = document.querySelector(`.nav-tab[data-tab="${tabContent.id}"]`);
              if (tabBtn) {
                tabBtn.click();
              }
              setTimeout(() => {
                if (targetEl !== tabContent) {
                  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }, 60);
            }
          }

          closeDrawer();
          window.setTimeout(() => updateActiveLink(sections), 100);
        });
      }
      nav.appendChild(link);
    });

    aside.appendChild(nav);
    document.body.prepend(aside);

    // Floating Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'course-sidebar__toggle';
    toggleBtn.id = 'courseSidebarToggle';
    toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML = '<span class="toggle-icon">☰</span><span class="toggle-text">Menú</span>';
    toggleBtn.addEventListener('click', toggleDrawer);
    document.body.appendChild(toggleBtn);

    // Backdrop for mobile
    const backdrop = document.createElement('div');
    backdrop.className = 'course-sidebar__backdrop';
    backdrop.addEventListener('click', closeDrawer);
    document.body.appendChild(backdrop);

    return aside;
  }

  function updateActiveLink(sections) {
    const links = document.querySelectorAll('.course-sidebar__link[data-target]');
    let activeIndex = 0;
    if (sections.mode === 'slides') {
      activeIndex = sections.items.findIndex(item => item.classList.contains('active'));
      if (activeIndex < 0) activeIndex = 0;
    } else {
      const activeTabContent = document.querySelector('.tab-content.active');
      if (activeTabContent) {
        const found = sections.items.findIndex(item => item.id === activeTabContent.id);
        if (found >= 0) activeIndex = found;
      } else {
        const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 260);
        sections.items.forEach((item, index) => {
          const isVisible = item.offsetParent !== null && getComputedStyle(item).display !== 'none';
          if (isVisible && item.offsetTop <= marker) activeIndex = index;
        });
      }
    }
    links.forEach((link, index) => {
      const isActive = index === activeIndex;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function boot() {
    if (!document.body || document.body.dataset.courseShellReady === 'true') return;
    document.body.dataset.courseShellReady = 'true';
    document.body.classList.add('course-shell');

    document.querySelector('nav.nav')?.remove();

    const sections = getSections();
    const sidebar = createSidebar(sections);
    if (!sections.items.length) {
      const fallback = document.createElement('a');
      fallback.className = 'course-sidebar__link is-active';
      fallback.href = '#top';
      fallback.textContent = 'Inicio';
      sidebar.querySelector('.course-sidebar__nav').appendChild(fallback);
    }

    if (sections.mode === 'slides') {
      const observer = new MutationObserver(() => updateActiveLink(sections));
      sections.items.forEach(item => observer.observe(item, { attributes: true, attributeFilter: ['class'] }));
    } else {
      window.addEventListener('scroll', () => updateActiveLink(sections), { passive: true });
      document.addEventListener('tab-changed', () => updateActiveLink(sections));

      const tabObserver = new MutationObserver(() => updateActiveLink(sections));
      document.querySelectorAll('.tab-content').forEach(tc => {
        tabObserver.observe(tc, { attributes: true, attributeFilter: ['class'] });
      });
    }
    updateActiveLink(sections);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}());
