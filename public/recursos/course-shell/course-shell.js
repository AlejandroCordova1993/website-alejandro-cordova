(function () {
  function cleanLabel(text) {
    return text.replace(/\s+/g, ' ').replace(/[\uD800-\uDFFF\uFFFD]/g, '').replace(/[📚📘📗📝🎮🔍🔄🎯]/g, '').trim();
  }

  function getTitle() {
    const heading = document.querySelector('h1');
    return cleanLabel(heading ? heading.textContent : document.title.split('|')[0]);
  }

  function getSectionLabel(section, index) {
    const heading = section.querySelector('h1, h2, h3, .section-title, .slide-title, .title');
    const label = cleanLabel(heading ? heading.textContent : section.dataset.label || `Sección ${index + 1}`);
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

  function createSidebar(sections) {
    const aside = document.createElement('aside');
    aside.className = 'course-sidebar';
    aside.setAttribute('aria-label', 'Navegación del recurso');

    const back = document.createElement('a');
    back.className = 'course-sidebar__back';
    back.href = '../../recursos.html';
    back.textContent = '← Volver a recursos';
    aside.appendChild(back);

    const title = document.createElement('h2');
    title.className = 'course-sidebar__title';
    title.textContent = getTitle();
    aside.appendChild(title);

    const nav = document.createElement('nav');
    nav.className = 'course-sidebar__nav';
    nav.setAttribute('aria-label', 'Secciones');

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
        });
      } else {
        link.href = `#${link.dataset.target}`;
        link.addEventListener('click', () => {
          window.setTimeout(() => updateActiveLink(sections), 50);
        });
      }
      nav.appendChild(link);
    });

    aside.appendChild(nav);
    document.body.prepend(aside);
    return aside;
  }

  function updateActiveLink(sections) {
    const links = document.querySelectorAll('.course-sidebar__link[data-target]');
    let activeIndex = 0;
    if (sections.mode === 'slides') {
      activeIndex = sections.items.findIndex(item => item.classList.contains('active'));
      if (activeIndex < 0) activeIndex = 0;
    } else {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 260);
      sections.items.forEach((item, index) => {
        const isVisible = item.offsetParent !== null && getComputedStyle(item).display !== 'none';
        if (isVisible && item.offsetTop <= marker) activeIndex = index;
      });
    }
    links.forEach((link, index) => {
      link.classList.toggle('is-active', index === activeIndex);
      if (index === activeIndex) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function boot() {
    if (!document.body || document.body.dataset.courseShellReady === 'true') return;
    document.body.dataset.courseShellReady = 'true';
    document.body.classList.add('course-shell');

    // The old horizontal menu is replaced by the single left navigation.
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
    }
    updateActiveLink(sections);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}());
