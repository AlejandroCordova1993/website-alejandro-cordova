/* Diglosia · recurso por niveles — navegación, actividades, guardado y portafolio. */
(() => {
  const { glossary, sources, levels, meta } = window.DG;
  levels.sort((a, b) => a.num.localeCompare(b.num));
  const ICONS = window.DG_ICONS || {};
  const KEY = meta.key;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  const words = s => (String(s || '').trim().match(/\S+/g) || []).length;

  /* ---------- Índices ---------- */
  const chapters = levels.flatMap(lv => lv.chapters.map(ch => Object.assign(ch, { level: lv })));
  const byId = id => chapters.find(c => c.id === id);
  const levelById = id => levels.find(l => l.id === id);
  const activities = {}, writes = {}, activates = {};
  chapters.forEach(ch => ch.steps.forEach((st, i) => {
    if (st.activity) activities[st.activity.id] = { ...st.activity, chapter: ch.id, step: i, optional: !!st.optional };
    if (st.write) writes[st.write.id] = { ...st.write, chapter: ch.id, step: i };
    if (st.activate) activates[st.activate.id] = st.activate;
  }));
  const required = ch => ch.steps.flatMap((st, i) => st.activity && !st.optional ? [{ kind: 'act', id: st.activity.id, title: st.activity.title, step: i }] : st.write ? [{ kind: 'write', id: st.write.id, title: st.write.title, step: i }] : []);
  const levelRequired = lv => lv.chapters.flatMap(required);

  /* ---------- Estado ---------- */
  const blank = () => ({ v: 1, level: null, cur: {}, step: {}, seen: {}, pred: {}, act: {}, write: {}, student: { name: '', course: '' }, font: 0, present: false });
  let storageOK = true;
  let state = load();
  function load() {
    try { const raw = localStorage.getItem(KEY); if (raw) return sanitize(JSON.parse(raw)); } catch { storageOK = false; }
    return blank();
  }
  function sanitize(s) {
    const b = blank(), obj = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
    if (!s || typeof s !== 'object' || s.v !== 1) return b;
    b.level = levelById(s.level) ? s.level : null;
    Object.entries(obj(s.cur)).forEach(([k, v]) => { if (levelById(k) && byId(v)?.level.id === k) b.cur[k] = v; });
    Object.entries(obj(s.step)).forEach(([k, v]) => { const ch = byId(k); if (ch && Number.isInteger(v)) b.step[k] = Math.max(0, Math.min(ch.steps.length - 1, v)); });
    Object.entries(obj(s.seen)).forEach(([k, v]) => { if (byId(k) && Array.isArray(v)) b.seen[k] = v.filter(Number.isInteger); });
    Object.entries(obj(s.pred)).forEach(([k, v]) => { if (activates[k] && Number.isInteger(v) && v >= 0 && v < activates[k].options.length) b.pred[k] = v; });
    Object.entries(obj(s.act)).forEach(([k, v]) => { if (activities[k]) { v = obj(v); b.act[k] = { solved: !!v.solved, tries: Number.isInteger(v.tries) ? v.tries : 0, data: obj(v.data) }; } });
    Object.entries(obj(s.write)).forEach(([k, v]) => {
      if (!writes[k]) return; v = obj(v); const f = {};
      Object.entries(obj(v.fields)).forEach(([fk, fv]) => { if (typeof fv === 'string') f[fk] = fv.slice(0, 6000); });
      b.write[k] = { fields: f, checks: Array.isArray(v.checks) ? v.checks.filter(Number.isInteger) : [], registered: !!v.registered };
    });
    b.font = Number.isInteger(s.font) ? Math.max(-1, Math.min(3, s.font)) : 0;
    b.present = !!s.present;
    const st = obj(s.student); b.student = { name: typeof st.name === 'string' ? st.name.slice(0, 80) : '', course: typeof st.course === 'string' ? st.course.slice(0, 40) : '' };
    return b;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch { storageOK = false; const n = $('#storage-note'); if (n) n.textContent = 'Este navegador no permite guardar. Descarga tu portafolio antes de salir.'; }
  }
  const act = id => (state.act[id] ||= { solved: false, tries: 0, data: {} });
  const wr = id => (state.write[id] ||= { fields: {}, checks: [], registered: false });
  const level = () => levelById(state.level);
  const chapter = () => { const lv = level(); return lv ? byId(state.cur[lv.id]) || lv.chapters[0] : null; };
  const stepIndex = ch => state.step[ch.id] || 0;
  const itemDone = it => it.kind === 'act' ? !!state.act[it.id]?.solved : !!state.write[it.id]?.registered;
  const chapterDone = ch => required(ch).every(itemDone);
  const levelDone = lv => lv.chapters.every(chapterDone);
  const levelStarted = lv => lv.chapters.some(ch => state.step[ch.id] !== undefined);
  const stepDone = (ch, i) => { const st = ch.steps[i]; if (st.activity) return !!state.act[st.activity.id]?.solved; if (st.write) return !!state.write[st.write.id]?.registered; if (st.kind === 'start') return state.pred[st.activate.id] !== undefined; return (state.seen[ch.id] || []).includes(i); };
  const status = ch => chapterDone(ch) ? 'Completado' : (state.step[ch.id] !== undefined) ? 'En curso' : 'Sin empezar';

  /* ---------- Utilidades ---------- */
  function terms(html) {
    return html.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => glossary[id]
      ? `<button type="button" class="term" data-term="${esc(id)}" aria-haspopup="dialog">${esc(label || id)}${icon('book-marked', 'term-icon')}</button>`
      : esc(label || id));
  }
  function seeded(seed) { let h = 2166136261; for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return () => { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffle(arr, seed) { const r = seeded(seed), a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  /* ---------- Piezas visuales ---------- */
  function figure(ch) {
    if (!ch.image) return '';
    const [file, alt, cap] = ch.image;
    return `<figure class="figure"><img src="images/${file}.webp" width="1536" height="1024" alt="${esc(alt)}" loading="lazy" decoding="async"><figcaption>${cap}<small>Ilustración generada con IA · escena ficticia.</small></figcaption></figure>`;
  }
  function balance(ch) {
    const b = ch.balance; if (!b) return '';
    const chips = list => list.map(([i, t]) => `<li>${icon(i)}<span>${esc(t)}</span></li>`).join('');
    return `<figure class="balance" aria-labelledby="balance-cap">
      <svg class="balance-svg" viewBox="0 0 640 200" aria-hidden="true">
        <line x1="320" y1="62" x2="320" y2="184" stroke="#071B33" stroke-width="3"/><path d="M282 186h76" stroke="#071B33" stroke-width="3"/>
        <line x1="70" y1="84" x2="570" y2="40" stroke="#071B33" stroke-width="4"/>
        <line x1="70" y1="84" x2="70" y2="140" stroke="#5C636C" stroke-width="1.5"/><line x1="570" y1="40" x2="570" y2="96" stroke="#5C636C" stroke-width="1.5"/>
        <path d="M18 140h104l-14 22H32z" fill="#071B33"/><path d="M518 96h104l-14 22H532z" fill="none" stroke="#071B33" stroke-width="2"/>
        <circle cx="320" cy="62" r="7" fill="#D83A32"/>
      </svg>
      <div class="balance-sides">
        <div class="side heavy"><span class="mono">${esc(b.heavy[0])}</span><ul>${chips(b.heavy[1])}</ul></div>
        <div class="side light"><span class="mono">${esc(b.light[0])}</span><ul>${chips(b.light[1])}</ul></div>
      </div>
      <figcaption id="balance-cap">${esc(b.caption)}</figcaption>
    </figure>`;
  }
  function flipCards(id) {
    const pairs = activities[id]?.pairs || [];
    return `<div class="flips">${pairs.map(([, w, d]) => `<button type="button" class="flip" data-flip aria-pressed="false"><span class="flip-word">${esc(w)}</span><span class="flip-def">${esc(d)}</span><span class="flip-hint mono">${icon('rotate-ccw')} Toca para ver</span></button>`).join('')}</div>`;
  }
  /* Espacio para imagen: busca images/<nombre>.webp, luego .png y .jpg.
     Si no existe ninguno, muestra un recuadro con el nombre del archivo que falta. */
  function slot(name) {
    const d = (window.DG.images || {})[name]; if (!d) return '';
    const [alt, cap] = d;
    return `<figure class="figure slot" data-slot="${esc(name)}">
      <img src="images/${esc(name)}.webp" data-slug="${esc(name)}" data-try="png,jpg" width="1536" height="1024" alt="${esc(alt)}" loading="lazy" decoding="async">
      <div class="slot-empty">${icon('file-text')}<div><span class="mono">Espacio para imagen</span><strong>images/${esc(name)}.png</strong><p>${esc(alt)}</p></div></div>
      <figcaption>${cap}<small>Ilustración generada con IA · recreación con fines didácticos.</small></figcaption></figure>`;
  }
  document.addEventListener('error', e => {
    const img = e.target; if (img.tagName !== 'IMG' || img.dataset.try === undefined) return;
    const rest = img.dataset.try.split(',').filter(Boolean);
    if (rest.length) { img.dataset.try = rest.slice(1).join(','); img.src = `images/${img.dataset.slug}.${rest[0]}`; }
    else img.closest('figure')?.classList.add('missing');
  }, true);
  function fill(html, ch) {
    return terms(html)
      .replace(/\{\{i:([a-z0-9-]+)\}\}/g, (_, n) => icon(n))
      .replace(/\{\{img:([a-z0-9-]+)\}\}/g, (_, n) => slot(n))
      .replace('{{figure}}', figure(ch))
      .replace('{{balance}}', balance(ch))
      .replace(/\{\{flip:([a-z0-9]+)\}\}/g, (_, id) => flipCards(id));
  }
  function route(currentId, compact = false) {
    return `<ol class="route${compact ? ' compact' : ''}" aria-label="Ruta de los tres niveles">${levels.map(lv => {
      const cur = lv.id === currentId, done = levelDone(lv);
      return `<li class="${cur ? 'current' : ''}${done ? ' done' : ''}"><button type="button" data-level="${lv.id}" ${cur ? 'aria-current="true"' : ''}><span class="route-num">${done && !cur ? icon('check') : lv.num}</span><span class="route-text"><small class="mono">Nivel ${lv.num}</small><strong>${esc(lv.name)}</strong></span></button></li>`;
    }).join('')}</ol>`;
  }

  /* ---------- Marco ---------- */
  function renderFrame() {
    const lv = level();
    document.body.classList.toggle('home', !lv);
    $('#level-chip').innerHTML = lv ? `<span class="mono">Nivel ${lv.num}</span><strong>${esc(lv.name)}</strong>` : `<span class="mono">Elige un nivel</span><strong>${esc(meta.subtitle)}</strong>`;
    if (!lv) { $('#header-progress').innerHTML = ''; $('#sidebar-body').innerHTML = `<div class="side-title"><span class="mono-label">Ruta</span><strong>${esc(meta.title)}</strong></div>${route(null)}`; return; }
    const req = levelRequired(lv), done = req.filter(itemDone).length, chs = lv.chapters.filter(chapterDone).length;
    $('#header-progress').innerHTML = `<span><b class="tabular">${chs}/${lv.chapters.length}</b> capítulos</span><span class="bar" aria-hidden="true"><i style="width:${Math.round(done / req.length * 100)}%"></i></span><span><b class="tabular">${done}/${req.length}</b> actividades</span>`;
    const cur = chapter();
    $('#sidebar-body').innerHTML = `<div class="side-title"><span class="mono-label">Nivel ${lv.num} · ${esc(lv.question)}</span><strong>${esc(lv.name)}</strong></div>
      <nav class="chapter-nav" aria-label="Capítulos del nivel">${lv.chapters.map(ch => {
        const r = required(ch), d = r.filter(itemDone).length, isCur = ch.id === cur.id;
        return `<a href="#${ch.id}-${stepIndex(ch) + 1}" class="nav-ch${isCur ? ' current' : ''}${chapterDone(ch) ? ' done' : ''}" data-chapter="${ch.id}" ${isCur ? 'aria-current="page"' : ''}><span class="nav-num mono">${ch.num}</span><span class="nav-text"><strong>${esc(ch.short)}</strong><small>${chapterDone(ch) ? icon('circle-check') : ''}${status(ch)} · ${d}/${r.length}</small></span></a>`;
      }).join('')}</nav>
      <div class="side-route"><span class="mono">La ruta completa</span>${route(lv.id, true)}</div>`;
  }

  /* ---------- Portada: elegir nivel ---------- */
  function homeView() {
    return `<header class="home-head on-deep">
        <span class="mono-label dark">Lengua y Literatura · Lengua y cultura</span>
        <h1>${esc(meta.title)}<span>${esc(meta.subtitle)}</span></h1>
        <p>${esc(meta.intro)}</p>
      </header>
      <h2 class="home-h2">Elige tu nivel</h2>
      <ol class="levels">${levels.map((lv, i) => {
        const req = levelRequired(lv), done = req.filter(itemDone).length, started = levelStarted(lv);
        return `<li class="level-card${levelDone(lv) ? ' done' : ''}">
          <div class="level-top"><span class="level-num" aria-hidden="true">${lv.num}</span><span class="mono">Nivel ${lv.num}${i ? ` · continúa el nivel ${levels[i - 1].num}` : ' · punto de partida'}</span></div>
          <h3>${esc(lv.name)}</h3>
          <p class="level-q">${esc(lv.question)}</p>
          <p class="level-sum">${esc(lv.summary)}</p>
          <ol class="level-chs">${lv.chapters.map(ch => `<li><span class="mono">${ch.num}</span>${esc(ch.short)}</li>`).join('')}</ol>
          <div class="level-foot"><span class="level-prog"><span class="bar" aria-hidden="true"><i style="width:${Math.round(done / req.length * 100)}%"></i></span><small class="tabular">${done}/${req.length} actividades</small></span>
          <button type="button" class="btn primary" data-level="${lv.id}">${started ? 'Continuar' : 'Empezar'}${icon('arrow-right')}</button></div>
        </li>`;
      }).join('')}</ol>
      <p class="tip">${icon('history')}<span>Cada nivel retoma lo que aprendiste en el anterior. Si es tu primera vez con el tema, empieza por el nivel 1.</span></p>`;
  }

  /* ---------- Capítulo ---------- */
  function render(focus = false) {
    const lv = level();
    renderFrame();
    if (!lv) {
      $('#contenido').innerHTML = homeView();
      document.title = `${meta.title} · ${meta.subtitle}`;
      if (focus) { window.scrollTo({ top: 0 }); const h = $('#contenido h1'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
      return;
    }
    const ch = chapter(), i = stepIndex(ch), st = ch.steps[i];
    markSeen(ch, i);
    const stepper = `<nav class="stepper${ch.steps.length > 7 ? ' many' : ''}" aria-label="Pasos del capítulo"><ol>${ch.steps.map((s, k) => {
      const cur = k === i, done = stepDone(ch, k);
      return `<li><button type="button" class="${cur ? 'current' : ''}${done ? ' done' : ''}${s.optional ? ' optional' : ''}" data-go="${k}" ${cur ? 'aria-current="step"' : ''} title="${esc(s.activity ? s.activity.title : s.title || s.label)}"><span class="sr-only">Paso </span><span class="num tabular">${done && !cur ? icon('check') + '<span class="sr-only">' + (k + 1) + '</span>' : k + 1}</span><span class="lbl">${esc(s.label)}</span><span class="sr-only">${s.activity ? ': ' + esc(s.activity.title) : s.title ? ': ' + esc(s.title) : ''}${done ? ' (hecho)' : ''}</span></button></li>`;
    }).join('')}</ol></nav>`;
    let body = '';
    if (st.kind === 'start') body = startView(ch, st);
    else if (st.kind === 'read') body = readView(ch, st, i);
    else if (st.kind === 'practice') body = activityView(st.activity, i, st.optional);
    else if (st.kind === 'write') body = writeView(st.write, i);
    else body = closeView(ch);
    const idx = lv.chapters.indexOf(ch), prevCh = lv.chapters[idx - 1], nextCh = lv.chapters[idx + 1];
    const prev = i > 0 ? `<button type="button" class="nav-btn" data-go="${i - 1}">${icon('arrow-left')}<span>Anterior</span></button>` : prevCh ? `<button type="button" class="nav-btn" data-chapter="${prevCh.id}" data-last>${icon('arrow-left')}<span>Capítulo anterior</span></button>` : `<button type="button" class="nav-btn" data-home>${icon('arrow-left')}<span>Niveles</span></button>`;
    const next = i < ch.steps.length - 1 ? `<button type="button" class="nav-btn primary" data-go="${i + 1}"><span>Siguiente</span>${icon('arrow-right')}</button>` : nextCh ? `<button type="button" class="nav-btn primary" data-chapter="${nextCh.id}"><span>Capítulo ${nextCh.num}</span>${icon('arrow-right')}</button>` : `<button type="button" class="nav-btn primary" data-action="portfolio"><span>Mi portafolio</span>${icon('file-text')}</button>`;
    const h1 = st.kind === 'start' ? '' : `<h1 class="sr-only">Nivel ${lv.num} · ${esc(ch.short)}</h1>`;
    $('#contenido').innerHTML = `${h1}${stepper}<div class="step-wrap" data-kind="${st.kind}">${body}</div>
      <div class="stepbar" role="navigation" aria-label="Avanzar o retroceder">${prev}<button type="button" class="recap-btn" data-action="recap">${icon('list-checks')}<span>Repaso</span><small class="tabular">Paso ${i + 1} de ${ch.steps.length}</small></button>${next}</div>`;
    document.title = `Nivel ${lv.num} · ${ch.short} · ${meta.title}`;
    if (focus) { window.scrollTo({ top: 0 }); const h = $('#contenido h1, #contenido h2'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
    if (st.kind === 'practice' && st.activity.type === 'wordsearch') wsPaint(st.activity.id);
  }
  function markSeen(ch, i) { const s = (state.seen[ch.id] ||= []); if (!s.includes(i)) { s.push(i); save(); } }
  function stepLabel(i, kind, extra = '') {
    const icons = { start: 'target', read: 'book-open', practice: 'list-checks', write: 'pen-line', close: 'circle-check' };
    return `<span class="step-label">${icon(icons[kind])}<span class="mono">Paso ${i + 1} · ${extra}</span></span>`;
  }

  function startView(ch, st) {
    const a = st.activate, pick = state.pred[a.id], lv = ch.level;
    const bridge = ch.bridge ? `<section class="bridge" aria-label="${esc(ch.bridge.title)}"><div class="bridge-head"><span class="icon-chip">${icon('history')}</span><div><span class="mono">${esc(ch.bridge.title)}</span><strong>${esc(levelById(ch.bridge.from)?.name || '')}</strong></div></div><ul>${ch.bridge.items.map(t => `<li>${esc(t)}</li>`).join('')}</ul><p>${esc(ch.bridge.next)}</p></section>` : '';
    return `<header class="cover on-deep">
        <span class="cover-num mono" aria-hidden="true">${ch.num}</span>
        <div class="cover-text"><span class="mono-label dark">Nivel ${lv.num} · Capítulo ${ch.num} de ${String(lv.chapters.length).padStart(2, '0')} · ${esc(ch.short)}</span><h1>${esc(ch.title)}</h1><p>${esc(ch.lead)}</p></div>
      </header>
      ${bridge}
      <div class="start-grid">
        <section class="card-deep goal on-deep" aria-label="Objetivo">
          <span class="mono-label dark">Al terminar podrás</span><p class="goal-text">${esc(ch.goal)}</p>
          <ol>${ch.tasks.map(t => `<li>${esc(t)}</li>`).join('')}</ol>
          <div class="goal-meta"><span>${icon('clock')}${esc(ch.time)}</span><span>${icon('pen-line')}${esc(ch.product)}</span></div>
        </section>
        <section class="card activate" aria-labelledby="act-q">
          ${stepLabel(0, 'start', 'Activa · sin nota')}
          <h2 id="act-q" class="serif-q">${esc(a.question)}</h2>
          <div class="picks" role="radiogroup" aria-labelledby="act-q">${a.options.map(([t], k) => `<button type="button" class="card-pick" role="radio" aria-checked="${pick === k}" data-pred="${a.id}" data-k="${k}">${esc(t)}</button>`).join('')}</div>
          <div class="reply" aria-live="polite">${pick !== undefined ? `<p>${icon('message-circle-question')}<span>${esc(a.options[pick][1])}</span></p>` : '<p class="muted">Elige la opción más cercana a lo que piensas. No hay respuestas incorrectas.</p>'}</div>
        </section>
      </div>
      <p class="tip">${icon('book-marked')}<span>Las palabras con este subrayado abren su significado: prueba con ${terms('[[diglosia]]')}.</span></p>`;
  }
  function readView(ch, st, i) {
    return `<article class="page">${stepLabel(i, 'read', 'Lee')}<h2>${esc(st.title)}</h2><div class="prose">${fill(st.html, ch)}</div></article>`;
  }
  function closeView(ch) {
    const req = required(ch), pending = req.filter(it => !itemDone(it));
    const extras = (ch.extra || []).map(x => `<section class="card extend${x.level ? ' next-level' : ''}"><span class="icon-chip">${icon(x.icon)}</span><div><h3>${esc(x.title)}</h3><p>${x.html}</p>${x.level ? `<button type="button" class="btn quiet" data-level="${x.level}">Ir al nivel ${esc(levelById(x.level)?.num)}${icon('arrow-right')}</button>` : ''}</div></section>`).join('');
    return `<article class="page close">
      ${stepLabel(ch.steps.length - 1, 'close', 'Cierre')}<h2 class="sr-only">Cierre del capítulo: ${esc(ch.short)}</h2>
      <section class="key-idea on-deep"><span class="mono-label dark">La idea que te llevas</span><p>${esc(ch.keyIdea)}</p></section>
      <div class="close-grid">
        <section><h3>Repasa en cuatro líneas</h3><ul class="recap-list">${ch.recap.map(r => `<li>${esc(r)}</li>`).join('')}</ul></section>
        <section><h3>Tu avance en este capítulo</h3><ul class="checklist">${req.map(it => `<li class="${itemDone(it) ? 'ok' : 'todo'}">${icon(itemDone(it) ? 'circle-check' : 'circle-dot')}<span>${esc(it.title)}</span><small>${itemDone(it) ? 'Hecho' : `<button type="button" class="link" data-go="${it.step}">Ir al paso ${it.step + 1}</button>`}</small></li>`).join('')}</ul>
        <p class="muted">${pending.length ? `Te ${pending.length === 1 ? 'falta 1 actividad' : `faltan ${pending.length} actividades`}. Puedes avanzar y volver cuando quieras.` : 'Capítulo completado.'}</p></section>
      </div>${isLastChapter(ch) ? deliveryCard(ch.level) : ''}${extras}
    </article>`;
  }
  const isLastChapter = ch => ch.level.chapters[ch.level.chapters.length - 1] === ch;
  function deliveryCard(lv) {
    const req = levelRequired(lv), done = req.filter(itemDone).length, left = req.length - done;
    return `<section class="card delivery"><span class="icon-chip">${icon('file-text')}</span><div>
      <h3>Entrega el nivel ${lv.num}</h3>
      <p>${left ? `Llevas <strong>${done} de ${req.length}</strong> actividades. Puedes entregar ahora, pero tu constancia mostrará las ${left === 1 ? 'que falta' : `${left} que faltan`}.` : `Completaste <strong>las ${req.length} actividades</strong> del nivel. Prepara tu constancia para tu docente.`}</p>
      <ol><li>Pulsa <strong>Preparar mi constancia</strong> y escribe tu nombre y tu curso.</li><li>Pulsa <strong>Descargar constancia (PDF)</strong>.</li><li>Sube el PDF a la plataforma de la clase o muéstraselo a tu docente.</li></ol>
      <button type="button" class="btn primary" data-action="portfolio">${icon('file-text')}Preparar mi constancia</button></div></section>`;
  }

  /* ---------- Actividades ---------- */
  function activityView(a, i, optional) {
    const s = act(a.id);
    const head = `${stepLabel(i, 'practice', optional ? 'Repasa · opcional' : 'Ahora practica tú')}<h2>${esc(a.title)}</h2>
      <div class="howto"><p><strong>Para qué:</strong> ${esc(a.purpose)}</p><ol>${a.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>`;
    const body = { sort: sortView, match: matchView, choice: choiceView, tap: tapView, order: orderView, wordsearch: wsView }[a.type](a, s);
    const actions = a.type === 'wordsearch' ? '' : `<div class="actions">${s.solved ? `<p class="solved">${icon('circle-check')}<span><strong>Actividad resuelta</strong>${s.tries > 1 ? ` · en ${s.tries} intentos` : ' · al primer intento'}</span></p>` : `<button type="button" class="btn primary" data-check="${a.id}">${icon('check')}Comprobar</button>${a.hint ? `<button type="button" class="btn quiet" data-hint="${a.id}">${icon('lightbulb')}Necesito una pista</button>` : ''}`}</div>
      <div class="feedback" id="fb-${a.id}" aria-live="polite" tabindex="-1">${s.data.msg && !s.solved ? `<p>${icon('circle-help')}<span>${esc(s.data.msg)}</span></p>` : ''}${s.data.showHint && !s.solved ? `<p class="hint">${icon('lightbulb')}<span>${esc(a.hint)}</span></p>` : ''}</div>`;
    return `<article class="page activity${s.solved ? ' is-solved' : ''}" id="act-${a.id}" data-type="${a.type}">${head}${body}${actions}</article>`;
  }
  const badge = ok => ok === true ? `<span class="state ok">${icon('circle-check')}Correcto</span>` : ok === false ? `<span class="state review">${icon('circle-help')}A revisar</span>` : '';

  function sortView(a, s) {
    const d = s.data; d.assign ||= {}; d.mark ||= {};
    return `<div class="sort-grid${a.bins.length > 2 ? ' wide-bins' : ''}">${a.items.map(([id, text, , hint]) => {
      const m = d.mark[id], locked = m === true;
      return `<div class="sort-card ${m === true ? 'ok' : m === false ? 'review' : ''}">
        ${badge(m)}<p>${esc(text)}</p>
        <div class="bins" role="group" aria-label="Clasificar">${a.bins.map(([b, label, ic]) => `<button type="button" class="bin" data-sort="${a.id}" data-item="${id}" data-bin="${b}" aria-pressed="${d.assign[id] === b}" ${locked ? 'disabled' : ''}>${icon(ic)}<span>${esc(label)}</span></button>`).join('')}</div>
        ${m === false ? `<p class="hint">${icon('lightbulb')}<span>${esc(hint)}</span></p>` : ''}</div>`;
    }).join('')}</div>`;
  }
  let matchSel = null;
  function matchView(a, s) {
    const d = s.data; d.links ||= {}; d.mark ||= {};
    const rights = shuffle(a.pairs.map(p => p[0]), a.id);
    const num = id => a.pairs.findIndex(p => p[0] === id) + 1;
    const owner = rid => Object.keys(d.links).find(l => d.links[l] === rid);
    return `<div class="match">
      <div class="col"><h3 class="mono">${esc(a.leftTitle)}</h3>${a.pairs.map(([id, left]) => { const m = d.mark[id]; return `<button type="button" class="m-item left ${m === true ? 'ok' : m === false ? 'review' : ''}${d.links[id] ? ' linked' : ''}" data-match="${a.id}" data-left="${id}" aria-pressed="${matchSel === a.id + ':' + id}" ${m === true ? 'disabled' : ''}><span class="m-num tabular">${num(id)}</span><span class="m-text">${esc(left)}</span>${m === true ? icon('circle-check') : m === false ? icon('circle-help') : ''}</button>`; }).join('')}</div>
      <div class="col"><h3 class="mono">${esc(a.rightTitle)}</h3>${rights.map(rid => { const pair = a.pairs.find(p => p[0] === rid), o = owner(rid), m = o ? d.mark[o] : undefined; return `<button type="button" class="m-item right ${m === true ? 'ok' : m === false ? 'review' : ''}${o ? ' linked' : ''}" data-match="${a.id}" data-right="${rid}" ${m === true ? 'disabled' : ''}><span class="m-num tabular">${o ? num(o) : '·'}</span><span class="m-text">${esc(pair[2])}</span></button>`; }).join('')}</div>
    </div><p class="muted match-status" aria-live="polite">${matchSel && matchSel.startsWith(a.id + ':') ? 'Ahora elige su pareja en la columna derecha.' : `${Object.keys(d.links).length} de ${a.pairs.length} unidas.`}</p>`;
  }
  function choiceView(a, s) {
    const d = s.data; d.pick ||= {}; d.mark ||= {};
    return `<div class="questions">${a.questions.map(([qid, prompt, opts], n) => {
      const m = d.mark[qid], p = d.pick[qid];
      return `<fieldset class="question ${m === true ? 'ok' : m === false ? 'review' : ''}"><legend><span class="mono">${n + 1}</span>${esc(prompt)}</legend>${badge(m)}
        <div class="options">${opts.map(([t], k) => `<button type="button" class="card-pick opt" role="radio" aria-checked="${p === k}" data-choice="${a.id}" data-q="${qid}" data-k="${k}" ${m === true ? 'disabled' : ''}>${esc(t)}</button>`).join('')}</div>
        ${m !== undefined && p !== undefined ? `<p class="explain">${icon(m ? 'circle-check' : 'lightbulb')}<span>${esc(opts[p][2])}</span></p>` : ''}</fieldset>`;
    }).join('')}</div>`;
  }
  function tokens(sentence) { return sentence.split(/(\*[^*]+\*|[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+)/).filter(Boolean).map(t => t.startsWith('*') ? { w: t.slice(1, -1), target: true } : /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ']+$/.test(t) ? { w: t, target: false } : { p: t }); }
  function tapView(a, s) {
    const d = s.data; d.sel ||= {}; d.mark ||= {};
    return `<div class="tap">${a.sentences.map((sen, si) => `<p class="tap-line"><span class="mono">${si + 1}</span><span>${tokens(sen).map((t, ti) => {
      if (t.p) return esc(t.p);
      const k = si + '-' + ti, on = !!d.sel[k], m = d.mark[k];
      return `<button type="button" class="tok${on ? ' on' : ''}${m === true ? ' ok' : m === false ? ' review' : ''}${s.solved && t.target ? ' ok' : ''}" data-tap="${a.id}" data-k="${k}" aria-pressed="${on}" ${s.solved ? 'disabled' : ''}>${esc(t.w)}</button>`;
    }).join('')}</span></p>`).join('')}</div>
    ${s.solved && a.traps ? `<div class="traps">${Object.entries(a.traps).map(([w, t]) => `<p>${icon('lightbulb')}<span><strong>${esc(w)}:</strong> ${esc(t.replace(/^«[^»]+» /, ''))}</span></p>`).join('')}</div>` : ''}`;
  }
  function orderView(a, s) {
    const d = s.data; d.order ||= [...a.start]; d.mark ||= {};
    return `<ol class="timeline${s.solved ? ' revealed' : ''}">${d.order.map((id, k) => {
      const it = a.items.find(x => x[0] === id), m = d.mark[k];
      return `<li class="${m === true || s.solved ? 'ok' : m === false ? 'review' : ''}" style="--i:${k}">
        <span class="t-pos tabular mono">${k + 1}</span>
        <div class="t-body"><span class="t-year mono">${s.solved ? esc(it[2]) : ''}</span><p>${esc(it[1])}</p></div>
        ${s.solved ? '' : `<span class="t-move"><button type="button" class="icon-btn" data-move="${a.id}" data-k="${k}" data-dir="-1" aria-label="Subir: ${esc(it[1])}" ${k === 0 ? 'disabled' : ''}>${icon('chevron-up')}<span>Subir</span></button><button type="button" class="icon-btn" data-move="${a.id}" data-k="${k}" data-dir="1" aria-label="Bajar: ${esc(it[1])}" ${k === d.order.length - 1 ? 'disabled' : ''}>${icon('chevron-down')}<span>Bajar</span></button></span>`}
      </li>`;
    }).join('')}</ol>`;
  }

  /* Sopa de letras: tablero determinista por actividad, horizontal y vertical, sin palabras invertidas. */
  const WS = 12, wsBoards = {};
  let wsStart = null, wsFocus = 0;
  function wsBuild(a) {
    if (wsBoards[a.id]) return wsBoards[a.id];
    for (let attempt = 0; attempt < 400; attempt++) {
      const r = seeded(a.id + attempt), g = Array(WS * WS).fill(''), placed = {};
      let ok = true;
      for (const [w] of [...a.words].sort((x, y) => y[0].length - x[0].length)) {
        let done = false;
        for (let t = 0; t < 300 && !done; t++) {
          const hor = r() < 0.5, row = Math.floor(r() * (hor ? WS : WS - w.length + 1)), col = Math.floor(r() * (hor ? WS - w.length + 1 : WS));
          const cells = [...w].map((_, k) => hor ? row * WS + col + k : (row + k) * WS + col);
          if (cells.every((c, k) => !g[c] || g[c] === w[k])) { cells.forEach((c, k) => { g[c] = w[k]; }); placed[w] = cells; done = true; }
        }
        if (!done) { ok = false; break; }
      }
      if (!ok) continue;
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZCHAEIOUKQ';
      for (let k = 0; k < g.length; k++) if (!g[k]) g[k] = abc[Math.floor(r() * abc.length)];
      return (wsBoards[a.id] = { grid: g, placed });
    }
  }
  function wsView(a, s) {
    const { grid } = wsBuild(a), d = s.data; d.found ||= [];
    return `<div class="ws">
      <div class="ws-board" role="grid" aria-label="Tablero de la sopa de letras, 12 por 12. Usa las flechas para moverte y Enter para elegir.">${Array.from({ length: WS }, (_, r) => `<div role="row">${Array.from({ length: WS }, (_, c) => { const k = r * WS + c; return `<button type="button" role="gridcell" class="ws-cell" data-ws="${a.id}" data-cell="${k}" tabindex="${k === wsFocus ? 0 : -1}" aria-label="Fila ${r + 1}, columna ${c + 1}: ${grid[k]}">${grid[k]}</button>`; }).join('')}</div>`).join('')}</div>
      <div class="ws-side">
        <p class="ws-count"><b class="tabular">${d.found.length}/${a.words.length}</b> palabras</p>
        <ul class="ws-list">${a.words.map(([w, def]) => { const f = d.found.includes(w); return `<li class="${f ? 'ok' : ''}">${f ? icon('circle-check') : icon('circle-dot')}<span><strong>${f ? w : '•'.repeat(w.length)}</strong>${f ? `<small>${esc(def)}</small>` : `<small>${w.length} letras</small>`}</span></li>`; }).join('')}</ul>
        <p class="muted ws-msg" aria-live="polite">${wsStart !== null ? 'Ahora elige la última letra.' : 'Elige la primera letra de una palabra.'}</p>
      </div>
    </div>
    <details class="ws-alt"><summary>Resolver por definiciones, sin usar el tablero</summary><div class="ws-defs">${a.words.map(([w, def]) => { const f = d.found.includes(w); return `<label><span>${esc(def)} <small>(${w.length} letras)</small></span><input type="text" data-wsdef="${w}" data-wsid="${a.id}" maxlength="${w.length + 2}" autocomplete="off" spellcheck="false" ${f ? `value="${w}" disabled` : ''}></label>`; }).join('')}</div></details>`;
  }
  function wsPaint(id) {
    const board = wsBoards[id]; if (!board) return;
    const found = new Set((act(id).data.found || []).flatMap(w => board.placed[w] || []));
    $$('.ws-cell').forEach(b => { const k = +b.dataset.cell; b.classList.toggle('found', found.has(k)); b.classList.toggle('start', k === wsStart); });
  }
  function wsFound(id, w) {
    const a = activities[id], s = act(id); s.data.found ||= [];
    if (s.data.found.includes(w)) return false;
    s.data.found.push(w); if (s.data.found.length === a.words.length) s.solved = true; save(); return true;
  }
  function wsSelect(id, k) {
    const a = activities[id], board = wsBoards[id];
    if (wsStart === null) { wsStart = k; wsPaint(id); $('.ws-msg').textContent = 'Ahora elige la última letra.'; return; }
    const r1 = Math.floor(wsStart / WS), c1 = wsStart % WS, r2 = Math.floor(k / WS), c2 = k % WS, cells = [];
    if (r1 === r2 && c2 >= c1) for (let c = c1; c <= c2; c++) cells.push(r1 * WS + c);
    else if (c1 === c2 && r2 >= r1) for (let r = r1; r <= r2; r++) cells.push(r * WS + c1);
    wsStart = null;
    const hit = Object.entries(board.placed).find(([, cs]) => cs.length === cells.length && cs.every((c, i) => c === cells[i]));
    if (hit && wsFound(id, hit[0])) { wsFocus = k; render(); $(`.ws-cell[data-cell="${k}"]`)?.focus(); $('.ws-msg').textContent = `¡Encontraste ${hit[0]}! ${a.words.find(w => w[0] === hit[0])[1]}`; }
    else { wsPaint(id); $('.ws-msg').textContent = cells.length ? 'Esa selección no forma una palabra de la lista. Prueba otra vez.' : 'Las palabras van de izquierda a derecha o de arriba abajo. Elige otra vez la primera letra.'; }
  }

  function check(id) {
    const a = activities[id], s = act(id), d = s.data;
    let complete = false, msg = '';
    if (a.type === 'sort') {
      if (a.items.some(([iid]) => !d.assign[iid])) return toast('Clasifica todas las tarjetas antes de comprobar.');
      a.items.forEach(([iid, , bin]) => { d.mark[iid] = d.assign[iid] === bin; });
      const bad = a.items.filter(([iid]) => !d.mark[iid]).length; complete = !bad;
      msg = `${a.items.length - bad} de ${a.items.length} bien. Lee la pista de las tarjetas «a revisar» y cambia tu elección.`;
    } else if (a.type === 'match') {
      if (Object.keys(d.links).length < a.pairs.length) return toast(`Une las ${a.pairs.length} parejas antes de comprobar.`);
      a.pairs.forEach(([pid]) => { d.mark[pid] = d.links[pid] === pid; });
      const bad = a.pairs.filter(([pid]) => !d.mark[pid]).length; complete = !bad;
      msg = `${a.pairs.length - bad} de ${a.pairs.length} parejas bien. Elige otra vez las marcadas «a revisar».`;
    } else if (a.type === 'choice') {
      if (a.questions.some(([qid]) => d.pick[qid] === undefined)) return toast('Responde todas las preguntas antes de comprobar.');
      a.questions.forEach(([qid, , opts]) => { d.mark[qid] = !!opts[d.pick[qid]][1]; });
      const bad = a.questions.filter(([qid]) => !d.mark[qid]).length; complete = !bad;
      msg = `${a.questions.length - bad} de ${a.questions.length} bien. Lee la explicación de cada pregunta «a revisar» y vuelve a elegir.`;
    } else if (a.type === 'tap') {
      const all = a.sentences.flatMap((sen, si) => tokens(sen).map((t, ti) => ({ ...t, k: si + '-' + ti })).filter(t => !t.p));
      if (!Object.values(d.sel).some(Boolean)) return toast('Toca al menos una palabra antes de comprobar.');
      d.mark = {}; let wrong = 0, missing = 0;
      all.forEach(t => { const on = !!d.sel[t.k]; if (on && t.target) d.mark[t.k] = true; else if (on) { d.mark[t.k] = false; wrong++; } else if (t.target) missing++; });
      complete = !wrong && !missing;
      const trapsHit = all.filter(t => d.sel[t.k] && a.traps?.[t.w.toLowerCase()]).map(t => a.traps[t.w.toLowerCase()]);
      msg = [missing ? `Te ${missing === 1 ? 'falta 1 palabra' : `faltan ${missing} palabras`}.` : '', wrong ? `${wrong === 1 ? '1 palabra marcada no corresponde' : `${wrong} palabras marcadas no corresponden`}.` : '', ...trapsHit].filter(Boolean).join(' ');
    } else if (a.type === 'order') {
      const right = a.items.map(x => x[0]);
      d.mark = {}; d.order.forEach((id2, k) => { d.mark[k] = id2 === right[k]; });
      const bad = d.order.filter((id2, k) => id2 !== right[k]).length; complete = !bad;
      msg = `${d.order.length - bad} de ${d.order.length} en su lugar. Mueve los elementos «a revisar».`;
    }
    s.tries++;
    if (complete) { s.solved = true; d.msg = ''; d.showHint = false; } else d.msg = msg;
    save(); render();
    if (complete) toast(a.type === 'order' ? 'Orden correcto. Mira cómo se completa.' : 'Actividad resuelta.');
    const fb = complete ? $(`#act-${id} .solved`) : $(`#fb-${id}`); if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus(); }
  }

  /* ---------- Escritura ---------- */
  function writeView(w, i) {
    const s = wr(w.id), total = w.fields.reduce((n, [k]) => n + words(s.fields[k]), 0);
    const a = w.recall && activates[w.recall], p = a && state.pred[w.recall];
    const recall = a && p !== undefined ? `<div class="recall">${icon('rotate-ccw')}<span><strong>Al inicio del nivel respondiste:</strong> «${esc(a.options[p][0])}». ¿Sigues pensando lo mismo?</span></div>` : '';
    return `<article class="page write">${stepLabel(i, 'write', 'Escribe · producto')}<h2>${esc(w.title)}</h2>
      <p class="serif-q">${esc(w.prompt)}</p>${recall}
      <div class="write-grid">
        <div class="fields">${w.fields.map(([k, label, tip]) => `<label class="field" for="f-${w.id}-${k}"><strong>${esc(label)}</strong><small>${esc(tip)}</small><textarea id="f-${w.id}-${k}" data-write="${w.id}" data-field="${k}" rows="${w.fields.length > 1 ? 3 : 7}" maxlength="6000">${esc(s.fields[k] || '')}</textarea></label>`).join('')}
          <p class="counter" id="count-${w.id}"><b class="tabular">${total}</b> palabras · meta: ${w.min} a ${w.max}</p></div>
        <aside class="card-quiet aids">
          <h3>${icon('pen-line')}Para empezar</h3><ul class="starters">${w.starters.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          <h3>${icon('list-checks')}Antes de registrar, revisa</h3><ul class="criteria">${w.criteria.map((c, k) => `<li><label><input type="checkbox" data-crit="${w.id}" value="${k}" ${s.checks.includes(k) ? 'checked' : ''}><span>${esc(c)}</span></label></li>`).join('')}</ul>
        </aside>
      </div>
      <div class="actions"><button type="button" class="btn primary" data-register="${w.id}">${icon('check')}Registrar en mi portafolio</button></div>
      <p class="feedback write-status" id="ws-${w.id}" role="status" tabindex="-1">${s.registered ? `${icon('circle-check')}<span>Registrado en tu portafolio. Tu docente lo leerá con la rúbrica. Si cambias algo, vuelve a registrar.</span>` : '<span>Tu borrador se guarda mientras escribes, en este navegador.</span>'}</p>
    </article>`;
  }
  function register(id) {
    const w = writes[id], s = wr(id), total = w.fields.reduce((n, [k]) => n + words(s.fields[k]), 0);
    const empty = w.fields.filter(([k]) => !words(s.fields[k]));
    let msg = '';
    if (empty.length) msg = `Completa: ${empty.map(f => f[1].replace(/^\d · /, '')).join(', ')}.`;
    else if (total < w.min) msg = `Te faltan ${w.min - total} palabras para llegar al mínimo.`;
    else if (total > w.max) msg = `Recorta ${total - w.max} palabras: la meta es ${w.max} como máximo.`;
    else if (s.checks.length < w.criteria.length) msg = 'Revisa tu texto con cada criterio y márcalo antes de registrar.';
    if (msg) { const st = $('#ws-' + id); st.innerHTML = `${icon('circle-help')}<span>${esc(msg)}</span>`; st.focus(); return; }
    s.registered = true; save(); render(); toast('Texto registrado en tu portafolio.');
  }

  /* ---------- Diálogos ---------- */
  let lastFocus = null, pendingConfirm = null;
  function dialog(kicker, html, wide = false) {
    lastFocus = document.activeElement;
    const d = $('#dlg'); $('#dlg-kicker').textContent = kicker; $('#dlg-body').innerHTML = html; d.classList.toggle('wide', wide);
    if (!$('#dlg-title')) { const h = $('#dlg-body h1, #dlg-body h2'); if (h) h.id = 'dlg-title'; }
    if (!d.open) d.showModal(); $('#dlg-body').scrollTop = 0; $('.dlg-close').focus();
  }
  function closeDialog() { const d = $('#dlg'); if (d.open) d.close(); }
  $('#dlg').addEventListener('close', () => { if (lastFocus && document.contains(lastFocus)) lastFocus.focus(); });
  function showTerm(id) {
    const [t, def, ex] = glossary[id];
    dialog('Glosario', `<h2 id="dlg-title">${esc(t)}</h2><p class="lede">${esc(def)}</p><div class="example-box"><span class="mono">EJEMPLO</span><p>${esc(ex)}</p></div><div class="dlg-actions"><button type="button" class="btn quiet" data-action="glossary">${icon('book-marked')}Ver todo el glosario</button></div>`);
  }
  function showGlossary() {
    dialog('Glosario y fuentes', `<h2 id="dlg-title">Glosario</h2><dl class="glossary">${Object.values(glossary).sort((a, b) => a[0].localeCompare(b[0], 'es')).map(([t, d, e]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}<small>${esc(e)}</small></dd></div>`).join('')}</dl>
      <h2>Fuentes para profundizar</h2><ul class="sources">${sources.map(([t, u, n]) => `<li>${u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>` : `<strong>${esc(t)}</strong>`}<small>${esc(n)}</small></li>`).join('')}</ul><p class="muted">Los enlaces necesitan conexión. Los casos de las actividades son ejemplos creados para practicar.</p>`, true);
  }
  function showRecap() {
    const ch = chapter(); if (!ch) return;
    const firstRead = ch.steps.findIndex(s => s.kind === 'read');
    dialog(`Repaso · Nivel ${ch.level.num} · Capítulo ${ch.num}`, `<h2 id="dlg-title">${esc(ch.short)}</h2><ul class="recap-list">${ch.recap.map(r => `<li>${esc(r)}</li>`).join('')}</ul><div class="dlg-actions"><button type="button" class="btn quiet" data-go="${firstRead}" data-close>${icon('book-open')}Ir a la lectura</button><button type="button" class="btn quiet" data-action="glossary">${icon('book-marked')}Glosario</button></div>`);
  }
  /* ---------- Constancia: código de verificación ---------- */
  function evidenceInfo(lv) {
    const acts = lv.chapters.flatMap(ch => ch.steps.filter(st => st.activity && !st.optional).map(st => st.activity.id));
    const ws = lv.chapters.flatMap(ch => ch.steps.filter(st => st.write).map(st => st.write));
    const count = w => { const f = state.write[w.id]?.fields || {}; return w.fields.reduce((n, [k]) => n + words(f[k]), 0); };
    return {
      level: levels.indexOf(lv), day: window.DG_EVIDENCIA.dayToday(),
      mask: acts.reduce((m, id, i) => m | (state.act[id]?.solved ? 1 << i : 0), 0),
      writes: ws.reduce((m, w, i) => m | (state.write[w.id]?.registered ? 1 << i : 0), 0),
      w1: ws[0] ? count(ws[0]) : 0, w2: ws[1] ? count(ws[1]) : 0, name: state.student.name
    };
  }
  const evidenceCode = lv => state.student.name.trim().length >= 3 ? window.DG_EVIDENCIA.encode(evidenceInfo(lv)) : '';
  function codeBlock(lv) {
    const code = evidenceCode(lv);
    return code ? `<div class="pf-code"><span class="mono">CÓDIGO DE VERIFICACIÓN</span><strong class="tabular">${code}</strong><small>Tu docente puede comprobar con este código qué actividades resolviste y qué textos registraste. Si la constancia se modifica, el código deja de coincidir.</small></div>`
      : `<div class="pf-code empty"><span class="mono">CÓDIGO DE VERIFICACIÓN</span><small>Escribe tu nombre completo para generar el código.</small></div>`;
  }

  /* ---------- Portafolio (del nivel actual) ---------- */
  function portfolioMarkup(lv) {
    const date = new Date().toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' });
    const preds = lv.chapters.map(ch => { const a = ch.steps[0].activate, p = state.pred[a.id]; return `<li><strong>${esc(a.question)}</strong><span>${p !== undefined ? esc(a.options[p][0]) : 'Sin responder'}</span></li>`; }).join('');
    const lvActs = Object.values(activities).filter(a => byId(a.chapter).level === lv);
    const acts = lvActs.filter(a => !a.optional).map(a => { const s = state.act[a.id]; return `<tr><td>${esc(a.title)}</td><td>${s?.solved ? 'Resuelta' : 'Pendiente'}</td><td class="tabular">${s?.tries || 0}</td></tr>`; }).join('');
    const orders = lvActs.filter(a => a.type === 'order').map(a => `<section class="pf-sec"><h2>${esc(a.title)}</h2>${state.act[a.id]?.solved ? `<ol class="pf-tl">${a.items.map(x => `<li><strong>${esc(x[2])}</strong> ${esc(x[1])}</li>`).join('')}</ol>` : '<p>Pendiente.</p>'}</section>`).join('');
    const texts = Object.values(writes).filter(w => byId(w.chapter).level === lv).map(w => { const s = state.write[w.id] || { fields: {} }; const total = w.fields.reduce((n, [k]) => n + words(s.fields[k]), 0); return `<section class="pf-sec"><h2>${esc(w.title)} <small>${s.registered ? 'Registrado' : 'Borrador sin registrar'} · ${total} palabras</small></h2><p class="pf-prompt">${esc(w.prompt)}</p>${w.fields.map(([k, l]) => `${w.fields.length > 1 ? `<h3>${esc(l)}</h3>` : ''}<p class="pf-answer">${esc(s.fields[k] || '—')}</p>`).join('')}</section>`; }).join('');
    const ws = lvActs.find(a => a.type === 'wordsearch'), wsN = ws ? (state.act[ws.id]?.data?.found || []).length : 0;
    const req = levelRequired(lv);
    return `<div class="pf"><header class="pf-head"><span class="mono">LENGUA Y LITERATURA · ${esc(meta.title.toUpperCase())}</span><h1>Nivel ${lv.num} · ${esc(lv.name)}</h1><p class="pf-who"><span><strong>Nombre:</strong> ${esc(state.student.name.trim()) || '______________________________'}</span><span><strong>Curso:</strong> ${esc(state.student.course.trim()) || '________'}</span><span><strong>Fecha:</strong> ${esc(date)}</span></p><div id="pf-code-slot">${codeBlock(lv)}</div></header>
      <section class="pf-sec"><h2>Avance</h2><p>${lv.chapters.filter(chapterDone).length} de ${lv.chapters.length} capítulos completos · ${req.filter(itemDone).length} de ${req.length} actividades${ws ? ` · Sopa de letras (opcional): ${wsN} de ${ws.words.length} palabras` : ''}.</p></section>
      <section class="pf-sec"><h2>Mis predicciones</h2><ul class="pf-preds">${preds}</ul></section>
      <section class="pf-sec"><h2>Actividades</h2><table><thead><tr><th>Actividad</th><th>Estado</th><th>Intentos</th></tr></thead><tbody>${acts}</tbody></table></section>
      ${orders}${texts}
      <footer class="pf-foot">Recurso de Lengua y Literatura · Alejandro Córdova</footer></div>`;
  }
  function showPortfolio() {
    const lv = level();
    if (!lv) return dialog('Tu trabajo', `<h2 id="dlg-title">Elige primero un nivel</h2><p>El portafolio reúne el trabajo de un nivel. Elige el nivel en el que estás trabajando.</p><div class="dlg-actions">${levels.map(l => `<button type="button" class="btn quiet" data-level="${l.id}" data-close-after>Nivel ${l.num} · ${esc(l.name)}</button>`).join('')}</div>`);
    const who = `<div class="student-fields"><label class="field" for="st-name"><strong>Tu nombre completo</strong><small>Tal como aparece en la lista del curso.</small><input type="text" id="st-name" data-student="name" maxlength="80" autocomplete="name" value="${esc(state.student.name)}"></label><label class="field" for="st-course"><strong>Curso y paralelo</strong><small>Por ejemplo: 2.º A</small><input type="text" id="st-course" data-student="course" maxlength="40" value="${esc(state.student.course)}"></label></div>`;
    dialog(`Constancia de entrega · Nivel ${lv.num}`, who + `<div id="pf-live">${portfolioMarkup(lv)}</div>` + `<div class="dlg-actions"><button type="button" class="btn primary" data-action="print">${icon('download')}Descargar constancia (PDF)</button><button type="button" class="btn quiet" data-action="close-dialog">Cerrar</button></div><p class="muted"><strong>Cómo guardar:</strong> al pulsar el botón se abrirá la ventana de impresión; elige «Guardar como PDF» como destino para guardarlo en tu equipo o celular.</p>`, true);
  }
  function download(name, content, type) { const url = URL.createObjectURL(new Blob([content], { type })); const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
  const pfCSS = 'body{font:16px/1.6 "Segoe UI",system-ui,sans-serif;color:#101820;background:#fff;max-width:820px;margin:32px auto;padding:0 24px}h1{font-size:28px;margin:4px 0 8px;color:#071B33}h2{font-size:18px;margin:0 0 8px;color:#071B33}h2 small{font-weight:400;color:#5C636C;font-size:14px}h3{margin:12px 0 4px;font-size:15px}.mono{font:500 12px/1 monospace;letter-spacing:.08em;color:#5C636C}.pf-sec{border-top:1px solid #D7D9D6;padding:16px 0}.pf-head{border-bottom:2px solid #123C69;padding-bottom:12px}.pf-answer{white-space:pre-wrap;overflow-wrap:anywhere;border-left:2px solid #D7D9D6;padding-left:12px}.pf-preds li{margin-bottom:8px}.pf-preds span{display:block;color:#5C636C}table{border-collapse:collapse;width:100%}th,td{text-align:left;border-bottom:1px solid #D7D9D6;padding:6px 8px}th{font:500 12px monospace;letter-spacing:.08em;text-transform:uppercase;color:#5C636C}.pf-prompt{color:#5C636C;font-style:italic}.pf-foot{color:#5C636C;font-size:13px;border-top:1px solid #D7D9D6;padding-top:12px}.pf-who{display:flex;flex-wrap:wrap;gap:6px 24px}.pf-code{margin-top:14px;padding:12px 16px;border:1px solid #123C69;background:#E7EEF4;display:grid;gap:4px}.pf-code strong{font:500 22px monospace;letter-spacing:.12em;color:#071B33}.pf-code small{color:#5C636C;font-size:13px}';

  /* ---------- Navegación ---------- */
  const hashFor = () => { const ch = chapter(); return ch ? `#${ch.id}-${stepIndex(ch) + 1}` : '#inicio'; };
  const reset = () => { matchSel = null; wsStart = null; };
  function go(i) { const ch = chapter(); state.step[ch.id] = Math.max(0, Math.min(ch.steps.length - 1, i)); save(); history.replaceState(null, '', hashFor()); reset(); render(true); }
  function openChapter(id, last = false) { const ch = byId(id); if (!ch) return; state.level = ch.level.id; state.cur[ch.level.id] = id; if (last) state.step[id] = ch.steps.length - 1; else state.step[id] ??= 0; save(); history.replaceState(null, '', hashFor()); reset(); closeMenu(); render(true); }
  function openLevel(id) { const lv = levelById(id); if (!lv) return; openChapter(state.cur[id] || lv.chapters[0].id); }
  function openHome() { state.level = null; save(); history.replaceState(null, '', '#inicio'); reset(); closeMenu(); render(true); }
  function fromHash() {
    if (location.hash === '#inicio') { state.level = null; return; }
    const m = location.hash.match(/^#(n\dc\d)(?:-(\d+))?$/); if (!m) return;
    const ch = byId(m[1]); if (!ch) return;
    state.level = ch.level.id; state.cur[ch.level.id] = ch.id;
    if (m[2]) state.step[ch.id] = Math.max(0, Math.min(ch.steps.length - 1, +m[2] - 1)); else state.step[ch.id] ??= 0;
  }
  function applyView() { document.documentElement.style.setProperty('--scale', String(1 + state.font * 0.1 + (state.present ? 0.15 : 0))); document.body.classList.toggle('present', state.present); $('#present-btn').setAttribute('aria-pressed', String(state.present)); }
  function openMenu() { document.body.classList.add('menu-open'); $('#menu-btn').setAttribute('aria-expanded', 'true'); }
  function closeMenu() { document.body.classList.remove('menu-open'); $('#menu-btn')?.setAttribute('aria-expanded', 'false'); }
  let toastTimer;
  function toast(t) { clearTimeout(toastTimer); const el = $('#toast'); el.textContent = t; el.hidden = false; toastTimer = setTimeout(() => { el.hidden = true; }, 4500); }
  function confirmBox(title, text, okLabel, onOk) {
    dialog('Confirmar', `<h2 id="dlg-title">${esc(title)}</h2><p>${esc(text)}</p><div class="dlg-actions"><button type="button" class="btn primary" data-confirm>${esc(okLabel)}</button><button type="button" class="btn quiet" data-close>Cancelar</button></div>`);
    pendingConfirm = onOk;
  }

  /* ---------- Escribir sin pegar ----------
     Bloquea pegar y arrastrar texto en los campos de escritura. En Android, el portapapeles del
     teclado (Gboard, Samsung) no siempre emite «paste»: inserta el texto como una escritura más.
     Por eso también se revisa cada inserción y se revierte la que llega en bloque (varias palabras
     de golpe o más de 25 caracteres). Escribir letra por letra, deslizar una palabra larga o
     aceptar una sugerencia del teclado sigue funcionando. Efecto conocido: el dictado por voz
     también queda bloqueado, porque inserta frases enteras. Solo se aplica a los textos de redacción:
     el nombre y el curso de la constancia admiten autocompletado. */
  const PASTE_TYPES = ['insertFromPaste', 'insertFromPasteAsQuotation', 'insertFromDrop', 'insertFromYank'];
  const isField = t => !!t && t.tagName === 'TEXTAREA' && t.hasAttribute('data-write');
  const looksPasted = text => { const raw = String(text || ''), tr = raw.trim(); return raw.length > 25 || (tr.length > 5 && /\s/.test(tr)); };
  const prevVal = new WeakMap();
  let pasteToastAt = 0;
  function blockPaste() { if (Date.now() - pasteToastAt > 1500) { pasteToastAt = Date.now(); toast('Pegar está desactivado: escribe con tus propias palabras.'); } }
  document.addEventListener('focusin', e => { if (isField(e.target)) prevVal.set(e.target, e.target.value); });
  ['paste', 'drop'].forEach(type => document.addEventListener(type, e => { if (isField(e.target)) { e.preventDefault(); blockPaste(); } }, true));
  document.addEventListener('beforeinput', e => {
    if (!isField(e.target)) return;
    if (PASTE_TYPES.includes(e.inputType) || (e.inputType !== 'insertCompositionText' && e.data && looksPasted(e.data))) { e.preventDefault(); blockPaste(); }
  }, true);
  document.addEventListener('input', e => {
    const t = e.target; if (!isField(t)) return;
    const prev = prevVal.has(t) ? prevVal.get(t) : t.defaultValue, next = t.value;
    let a = 0; while (a < prev.length && a < next.length && prev[a] === next[a]) a++;
    let b = 0; while (b < prev.length - a && b < next.length - a && prev[prev.length - 1 - b] === next[next.length - 1 - b]) b++;
    if (PASTE_TYPES.includes(e.inputType) || looksPasted(next.slice(a, next.length - b))) {
      t.value = prev; try { t.setSelectionRange(a, a); } catch {}
      e.stopImmediatePropagation(); blockPaste(); return;
    }
    prevVal.set(t, next);
  }, true);

  /* ---------- Eventos ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('button, a[data-chapter]'); if (!t) return;
    const ds = t.dataset;
    if (ds.chapter) { e.preventDefault(); return openChapter(ds.chapter, ds.last !== undefined); }
    if (ds.term) return showTerm(ds.term);
    if (ds.level) { if (t.closest('dialog')) closeDialog(); return openLevel(ds.level); }
    if (ds.home !== undefined) return openHome();
    if (ds.close !== undefined && ds.go === undefined) return closeDialog();
    if (ds.go !== undefined) { if (t.closest('dialog')) closeDialog(); return go(+ds.go); }
    if (ds.confirm !== undefined) { const f = pendingConfirm; pendingConfirm = null; closeDialog(); return f && f(); }
    if (ds.pred) { state.pred[ds.pred] = +ds.k; save(); render(); return $(`[data-pred="${ds.pred}"][data-k="${ds.k}"]`)?.focus(); }
    if (ds.flip !== undefined) { t.setAttribute('aria-pressed', String(t.getAttribute('aria-pressed') !== 'true')); return; }
    if (ds.reveal !== undefined) { const box = t.closest('.reveal'), on = box.dataset.open !== 'true'; box.dataset.open = String(on); t.setAttribute('aria-expanded', String(on)); return; }
    if (ds.sort) { const s = act(ds.sort); s.data.assign[ds.item] = ds.bin; if (s.data.mark[ds.item] === false) delete s.data.mark[ds.item]; save(); render(); return $(`[data-item="${ds.item}"][data-bin="${ds.bin}"]`)?.focus(); }
    if (ds.match) {
      const s = act(ds.match), d = s.data;
      if (ds.left) { matchSel = matchSel === ds.match + ':' + ds.left ? null : ds.match + ':' + ds.left; render(); return $(`[data-left="${ds.left}"]`)?.focus(); }
      if (ds.right) {
        if (!matchSel || !matchSel.startsWith(ds.match + ':')) { toast('Primero elige un elemento de la columna izquierda.'); return; }
        const left = matchSel.split(':')[1];
        Object.keys(d.links).forEach(l => { if (d.links[l] === ds.right && d.mark[l] !== true) { delete d.links[l]; delete d.mark[l]; } });
        d.links[left] = ds.right; delete d.mark[left]; matchSel = null; save(); render();
        const nextLeft = activities[ds.match].pairs.find(p => !d.links[p[0]]);
        return (nextLeft ? $(`[data-left="${nextLeft[0]}"]`) : $(`[data-check="${ds.match}"]`))?.focus();
      }
    }
    if (ds.choice) { const s = act(ds.choice); s.data.pick[ds.q] = +ds.k; if (s.data.mark[ds.q] === false) delete s.data.mark[ds.q]; save(); render(); return $(`[data-q="${ds.q}"][data-k="${ds.k}"]`)?.focus(); }
    if (ds.tap) { const s = act(ds.tap); s.data.sel[ds.k] = !s.data.sel[ds.k]; delete s.data.mark[ds.k]; save(); t.classList.toggle('on', s.data.sel[ds.k]); t.classList.remove('ok', 'review'); t.setAttribute('aria-pressed', String(s.data.sel[ds.k])); return; }
    if (ds.move) { const s = act(ds.move), o = s.data.order, k = +ds.k, j = k + +ds.dir; [o[k], o[j]] = [o[j], o[k]]; s.data.mark = {}; save(); render(); const b = $(`[data-move="${ds.move}"][data-k="${j}"][data-dir="${ds.dir}"]`) || $(`[data-move="${ds.move}"][data-k="${j}"]`); return b?.focus(); }
    if (ds.ws) { wsFocus = +ds.cell; $$('.ws-cell').forEach(c => { c.tabIndex = +c.dataset.cell === wsFocus ? 0 : -1; }); return wsSelect(ds.ws, +ds.cell); }
    if (ds.check) return check(ds.check);
    if (ds.hint) { const s = act(ds.hint); s.data.showHint = true; save(); render(); return $(`#fb-${ds.hint}`)?.focus(); }
    if (ds.register) return register(ds.register);
    const lv = level();
    switch (ds.action) {
      case 'recap': return showRecap();
      case 'glossary': return showGlossary();
      case 'levels': return openHome();
      case 'portfolio': closeMenu(); return showPortfolio();
      case 'close-dialog': return closeDialog();
      case 'font-up': state.font = Math.min(3, state.font + 1); save(); return applyView();
      case 'font-down': state.font = Math.max(-1, state.font - 1); save(); return applyView();
      case 'present': state.present = !state.present; save(); applyView(); return toast(state.present ? 'Modo presentación: usa ← → para cambiar de paso.' : 'Modo presentación desactivado.');
      case 'menu': return document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
      case 'print': if (!lv) return; if (!evidenceCode(lv)) { toast('Escribe tu nombre completo antes de descargar la constancia.'); return $('#st-name')?.focus(); } $('#ficha-imprimible').innerHTML = portfolioMarkup(lv); closeDialog(); return setTimeout(() => window.print(), 50);
      case 'download-portfolio': if (!lv) return; if (!evidenceCode(lv)) { toast('Escribe tu nombre completo antes de descargar la constancia.'); return $('#st-name')?.focus(); } return download(`portafolio-diglosia-nivel-${lv.num}.html`, `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Portafolio · Diglosia · Nivel ${lv.num}</title><style>${pfCSS}</style></head><body>${portfolioMarkup(lv)}</body></html>`, 'text/html');
      case 'backup': return download('respaldo-diglosia.json', JSON.stringify(state, null, 1), 'application/json');
      case 'import': return $('#import-file').click();
      case 'reset': return confirmBox('¿Borrar todo tu trabajo?', 'Se borrarán tus respuestas, tus textos y tu avance de los tres niveles en este navegador. Si aún no lo hiciste, descarga antes tu portafolio.', 'Sí, borrar', () => { state = blank(); try { localStorage.removeItem(KEY); } catch {} history.replaceState(null, '', '#inicio'); applyView(); render(true); toast('Trabajo borrado. El equipo queda listo para otra persona.'); });
    }
  });
  document.addEventListener('input', e => {
    const t = e.target;
    if (t.dataset.student) { state.student[t.dataset.student] = t.value; save(); const lv = level(), live = $('#pf-live'); if (lv && live) live.innerHTML = portfolioMarkup(lv); return; }
    if (t.dataset.write) { const s = wr(t.dataset.write), w = writes[t.dataset.write]; s.fields[t.dataset.field] = t.value; if (s.registered) { s.registered = false; $('#ws-' + w.id).innerHTML = '<span>Hiciste cambios: vuelve a registrar cuando termines.</span>'; renderFrame(); } save(); const total = w.fields.reduce((n, [k]) => n + words(s.fields[k]), 0); $('#count-' + w.id).innerHTML = `<b class="tabular">${total}</b> palabras · meta: ${w.min} a ${w.max}`; }
    if (t.dataset.wsdef) { const v = t.value.trim().toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); if (v === t.dataset.wsdef && wsFound(t.dataset.wsid, v)) { render(); const det = $('.ws-alt'); if (det) det.open = true; toast(`Encontraste ${v}.`); } }
  });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.crit) { const s = wr(t.dataset.crit), k = +t.value; s.checks = t.checked ? [...new Set([...s.checks, k])] : s.checks.filter(x => x !== k); save(); }
  });
  document.addEventListener('keydown', e => {
    if (e.target.classList?.contains('ws-cell')) {
      const k = +e.target.dataset.cell, r = Math.floor(k / WS), c = k % WS;
      const moves = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] };
      if (moves[e.key]) { e.preventDefault(); const [dr, dc] = moves[e.key], nr = Math.max(0, Math.min(WS - 1, r + dr)), nc = Math.max(0, Math.min(WS - 1, c + dc)); wsFocus = nr * WS + nc; $$('.ws-cell').forEach(b => { b.tabIndex = +b.dataset.cell === wsFocus ? 0 : -1; }); $(`.ws-cell[data-cell="${wsFocus}"]`).focus(); }
      return;
    }
    if ($('#dlg').open || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === 'Escape') return closeMenu();
    if (e.target.closest('input, textarea, select, .activity, [contenteditable]')) return;
    const ch = chapter(); if (!ch) return;
    const i = stepIndex(ch);
    if (e.key === 'ArrowRight' && i < ch.steps.length - 1) { e.preventDefault(); go(i + 1); }
    if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); go(i - 1); }
  });
  $('#import-file').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    try {
      const data = JSON.parse(await f.text()); if (!data || data.v !== 1) throw new Error();
      confirmBox('¿Recuperar este respaldo?', 'Reemplazará el trabajo guardado ahora en este navegador.', 'Sí, recuperar', () => { state = sanitize(data); save(); applyView(); history.replaceState(null, '', hashFor()); render(true); toast('Respaldo recuperado.'); });
    } catch { toast('Ese archivo no es un respaldo válido de este recurso.'); }
  });
  $('#dlg').addEventListener('click', e => { if (e.target === e.currentTarget) closeDialog(); });
  window.addEventListener('hashchange', () => { fromHash(); save(); reset(); render(true); });

  /* ---------- Inicio ---------- */
  if (location.hash) fromHash(); else state.level = null;
  if (!storageOK) $('#storage-note').textContent = 'Este navegador no permite guardar. Descarga tu portafolio antes de salir.';
  applyView();
  render();
})();
