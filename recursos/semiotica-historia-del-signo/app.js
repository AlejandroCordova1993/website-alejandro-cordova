const $ = id => document.getElementById(id);
const state = {unit:'all',query:'',id:ENTRIES[0].id,tab:'idea',answers:new Map(),zoom:1,visited:new Set()};
const labels = {0:'Ampliación',1:'Definición e historia',2:'Modelos del signo',3:'Roland Barthes',4:'Greimas y Eco'};
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/\s+/g,' ');
const escapeHtml = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const motion = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
const shortPeriods = ['Antigüedad','Medioevo','Modernidad','Fundamentos modernos','Textos y cultura','Debates actuales'];
const current = () => ENTRIES.find(e=>e.id===state.id);
const matching = () => ENTRIES.filter(e=>(state.unit==='all'||String(e.unit)===state.unit)&&normalize([e.name,e.title,e.concept,e.date,...e.body].join(' ')).includes(normalize(state.query)));
function setHash(id){try{history.replaceState(null,'','#'+id);}catch{/* Local file browsers may restrict history. */}}
function step(){return (window.innerWidth<700?170:200)*state.zoom;}
function positionAt(index){return 155+index*step();}
function panTo(left,behavior=motion()){$('timeline-viewport').scrollTo({left,behavior});}
function centerEntry(id,behavior=motion()){
 const index=matching().findIndex(e=>e.id===id);
 if(index>=0)panTo(positionAt(index)-$('timeline-viewport').clientWidth/2,behavior);
}
function renderTimeline(reset=false){
 const items=matching(), viewport=$('timeline-viewport');
 const saved=viewport.scrollLeft;
 $('result-count').textContent=items.length+' de '+ENTRIES.length+' hitos';
 document.querySelectorAll('.filters [data-unit]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.unit===state.unit));
 if(!items.length){
  $('milestones').style.width='100%';$('milestones').style.height='500px';
  $('milestones').innerHTML='<div class="empty"><p class="eyebrow">SIN COINCIDENCIAS</p><h3>No encontramos ese autor o concepto.</h3><p>Prueba otra palabra o vuelve al recorrido completo.</p><button id="clear-search">Mostrar todos los hitos →</button></div>';
  $('overview').innerHTML='';syncNavigation();return;
 }
 if(!items.some(e=>e.id===state.id))state.id=items[0].id;
 const width=310+(items.length-1)*step();
 $('milestones').style.width=Math.max(width,viewport.clientWidth)+'px';
 let bands='';
 const groups=[];
 items.forEach((e,i)=>{let group=groups[groups.length-1];if(!group||group.era!==e.era){group={era:e.era,start:i,count:0};groups.push(group);}group.count++;});
 groups.forEach(g=>{
  const left=g.start===0?0:positionAt(g.start)-step()/2;
  const right=g.start+g.count===items.length?Math.max(width,viewport.clientWidth):positionAt(g.start+g.count)-step()/2;
  bands+=`<div class="era-band era-${g.era}" style="left:${left}px;width:${right-left}px"><span>${PERIODS[g.era]}</span></div>`;
 });
 $('milestones').innerHTML=bands+'<div class="time-axis" aria-hidden="true"></div>'+items.map((e,i)=>`<div class="timeline-item ${i%2?'below':'above'} u${e.unit}" style="left:${positionAt(i)}px"><span class="event-stem" aria-hidden="true"></span><button class="event-dot" data-id="${e.id}" tabindex="-1" aria-label="Abrir ${escapeHtml(e.name)} · ${escapeHtml(e.date)}" aria-haspopup="dialog"><span></span></button><button class="event-card" data-id="${e.id}" aria-haspopup="dialog" aria-controls="event-dialog" aria-current="${state.visited.has(e.id)&&e.id===state.id}"><span class="event-meta"><span>${labels[e.unit]}</span><span>${String(ENTRIES.indexOf(e)+1).padStart(2,'0')}</span></span><span class="event-date">${e.date}</span><strong>${e.name}</strong><span class="event-title">${e.title}</span><span class="open-hint">Explorar este hito <span aria-hidden="true">↗</span></span></button></div>`).join('');
 $('overview').innerHTML=groups.map(g=>`<button data-era="${g.era}" style="flex:${g.count}" class="era-${g.era}" title="Ir a ${PERIODS[g.era]}"><span>${shortPeriods[g.era]}</span><small>${g.count} ${g.count===1?'hito':'hitos'}</small></button>`).join('');
 // Preserve space for complete cards, including projection and wrapped titles.
 const tallest=Math.max(...[...document.querySelectorAll('.event-card')].map(card=>card.offsetHeight));
 $('milestones').style.height=Math.ceil(Math.max(500,2*(tallest+84)))+'px';
 viewport.scrollLeft=reset?0:saved;
 syncNavigation();
}
function syncNavigation(){
 const vp=$('timeline-viewport'),items=matching(),max=Math.max(0,vp.scrollWidth-vp.clientWidth);
 $('timeline-position').value=max?Math.round(vp.scrollLeft/max*1000):0;
 $('timeline-position').disabled=max<1;
 $('pan-left').disabled=vp.scrollLeft<2;
 $('pan-right').disabled=max-vp.scrollLeft<2;
 const first=Math.max(0,Math.min(items.length-1,Math.ceil((vp.scrollLeft-155)/step())));
 const last=Math.min(items.length-1,Math.floor((vp.scrollLeft+vp.clientWidth-155)/step()));
 $('visible-range').textContent=items.length?`A la vista · ${items[first].date}${last>first?' — '+items[last].date:''}`:'0 hitos en esta búsqueda';
 $('timeline-position').setAttribute('aria-valuetext',items.length?`Desde ${items[first].name}${last>first?' hasta '+items[last].name:''}`:'Sin coincidencias');
 document.querySelectorAll('[data-era]').forEach(b=>b.setAttribute('aria-current',items[first]&&Number(b.dataset.era)===items[first].era?'true':'false'));
 $('zoom-value').textContent=Math.round(state.zoom*100)+'%';
 $('zoom-out').disabled=state.zoom<=.8;
 $('zoom-in').disabled=state.zoom>=1.5;
}
function filterUnit(unit){
 state.unit=unit;state.query='';$('search').value='';renderTimeline(true);
}
function renderStudy(){
 const e=current(),items=matching(),position=items.findIndex(x=>x.id===e.id);
 $('scope').textContent=labels[e.unit];$('scope').className='scope u'+e.unit;
 $('position').textContent=(position+1)+' / '+items.length;
 $('date').textContent=e.date;$('author').textContent=e.name;$('title').textContent=e.title;
 $('concept').textContent=e.concept;$('chapter').textContent=String(ENTRIES.indexOf(e)+1).padStart(2,'0');
 $('diagram').innerHTML=diagram(e);renderPanel();
 $('reading').innerHTML='LECTURAS PARA PROFUNDIZAR<br>'+e.reading.map(id=>`<button data-source="${id}">${SOURCES[id].name}</button>`).join(' · ');
 $('prev').disabled=position===0;$('next').disabled=position===items.length-1;
}
function selectEntry(id){
 if(!ENTRIES.some(e=>e.id===id))return;
 state.id=id;state.tab='idea';state.visited.add(id);renderStudy();setHash(id);
 document.querySelectorAll('.event-card').forEach(b=>b.setAttribute('aria-current',b.dataset.id===id));
 if(!$('event-dialog').open)$('event-dialog').showModal();
 document.body.classList.add('modal-open');$('event-dialog').scrollTop=0;
 $('close-event').focus({preventScroll:true});
}
function move(direction){
 const items=matching(),index=items.findIndex(e=>e.id===state.id),e=items[index+direction];
 if(e){selectEntry(e.id);centerEntry(e.id,'instant');}
}
function toggleProjection(){
 const active=document.body.classList.toggle('projection');
 $('present').setAttribute('aria-pressed',active);$('modal-present').setAttribute('aria-pressed',active);
 $('present').textContent=active?'Salir de proyección ↙':'Modo proyección ↗';
 $('modal-present').textContent=active?'Lectura normal ↙':'Ampliar lectura ↗';
 renderTimeline();
}

function diagram(e){
 const note = text => `<p class="diagram-note">${text}</p>`;
 const block = (label,text) => `<div class="concept-block"><strong>${label}</strong><span>${text}</span></div>`;
 if(e.diagram==='triad'||e.diagram==='ogden'){
  const ogden=e.diagram==='ogden';
  return `<div class="concept-scheme"><div class="relation-triangle"><svg viewBox="0 0 400 225" preserveAspectRatio="none" aria-hidden="true"><path d="M200 42L80 170M200 42L320 170"/><path d="M80 170H320"${ogden?' stroke-dasharray="7 6"':''}/></svg><div class="triangle-node triangle-top">${e.model[0]}</div><div class="triangle-node triangle-left">${e.model[1]}</div><div class="triangle-node triangle-right">${e.model[2]}</div></div>${note(ogden?'La expresión simboliza un pensamiento; este refiere al referente. La base discontinua señala una relación mediada.':'Mediación triádica: algo representa un objeto al determinar un interpretante. Este dibujo no indica una secuencia temporal.')}</div>`;
 }
 if(e.diagram==='morris')return '<div class="concept-scheme">'+block('Sintáctica','Signos ↔ signos')+block('Semántica','Signos ↔ lo designado')+block('Pragmática','Signos ↔ intérpretes')+note('Tres dimensiones analíticas de una misma semiosis.')+'</div>';
 if(e.diagram==='hjelmslev')return '<div class="concept-scheme"><table class="concept-table"><caption>Expresión ↔ contenido</caption><thead><tr><th scope="col"></th><th scope="col">Expresión</th><th scope="col">Contenido</th></tr></thead><tbody><tr><th scope="row">Forma</th><td>Organización de unidades</td><td>Organización de distinciones</td></tr><tr><th scope="row">Sustancia</th><td>Realizaciones de la expresión</td><td>Experiencia conformada</td></tr></tbody></table>'+note('La distinción forma/sustancia atraviesa ambos planos. No son cuatro entidades aisladas.')+'</div>';
 if(e.diagram==='frege')return '<div class="concept-scheme">'+block('«Lucero del alba»','Presentación matutina')+block('«Lucero de la tarde»','Presentación vespertina')+'<div class="shared-reference">Una referencia común: <strong>Venus</strong></div>'+note('Diferentes sentidos permiten presentar un mismo referente. El sentido no es una imagen privada.')+'</div>';
 if(e.diagram==='veron')return '<div class="concept-scheme">'+block('Discurso analizado','Relaciones con sus condiciones')+'<div class="conditions-pair">'+block('Producción','Cómo se genera')+block('Reconocimiento','Cómo se lee y qué efectos produce')+'</div>'+note('La circulación nombra el desfase entre producción y reconocimiento; no es un tercer eslabón de transporte.')+'</div>';
 if(e.diagram==='image')return '<div class="concept-scheme">'+block('Mensaje lingüístico','«Tu momento de calma»')+block('Icónico no codificado','Taza y cuaderno: identificación literal')+block('Icónico codificado','Descanso: lectura cultural')+note('Los tres mensajes cooperan. Cambiar el texto por «Entrega en cinco minutos» modifica el anclaje.')+'</div>';
 if(e.diagram==='relations')return '<div class="concept-scheme">'+e.model.map(m=>block(m,'')).join('')+note(e.diagramNote)+'</div>';
 if(e.diagram==='dyad')return '<div class="concept-scheme"><div class="dyad-sign"><div><strong>Significado</strong><span>Concepto</span></div><div class="dyad-union" aria-label="Unión entre ambas caras">↕</div><div><strong>Significante</strong><span>Imagen acústica</span></div></div>'+note('Dos caras del signo lingüístico. Su valor se establece también por las diferencias con otros signos.')+'</div>';
 if(e.diagram==='actants')return '<div class="concept-scheme"><div class="actant-grid"><div>Destinador<span aria-hidden="true">→</span></div><div>Objeto<span aria-hidden="true">→</span></div><div>Destina&shy;tario</div><p class="actant-search">↑<small>Búsqueda</small></p><div>Ayudante<span aria-hidden="true">→</span></div><div>Sujeto</div><div><span class="opponent-arrow" aria-hidden="true">←</span>Oponente</div></div>'+note('El sujeto busca el objeto de valor. El destinador impulsa o legitima la búsqueda; el destinatario recibe su beneficio. Ayudante y oponente facilitan u obstaculizan el recorrido.')+'</div>';
 return '<div class="model-flow">'+e.model.map((m,i)=>(i?'<span class="arrow" aria-hidden="true">→</span>':'')+`<span class="model-node">${m}</span>`).join('')+'</div>';
}
function renderPanel(){
 $('study').dataset.tab=state.tab;
 const e=current();
 document.querySelectorAll('[data-tab]').forEach(b=>{const selected=b.dataset.tab===state.tab;b.setAttribute('aria-selected',selected);b.tabIndex=selected?0:-1;});
 $('panel').setAttribute('aria-labelledby','tab-'+state.tab);
 if(state.tab==='idea'){$('panel').innerHTML=`<p class="summary">${e.intro}</p>`+e.body.map((p,i)=>(e.headings?.[i]?`<h3 class="theory-heading">${escapeHtml(e.headings[i])}</h3>`:'')+`<p>${p}</p>`).join('');return;}
 if(state.tab==='example'){$('panel').innerHTML=`<p class="case-label">UN CASO PARA DISCUTIR EN CLASE</p><p class="summary">${e.example}</p><div class="prompt"><small>PIENSA EN UN EJEMPLO AHORA</small>${e.prompt}</div>`;return;}
 const answer=state.answers.get(e.id);
 $('panel').innerHTML=`<details class="quiz-context"><summary>Consultar el caso</summary><p>${e.example}</p></details><p class="summary">${e.question}</p><div class="choices">${e.options.map((o,i)=>`<button class="choice ${answer===i?(i===e.answer?'right':'wrong'):''}" data-answer="${i}" aria-pressed="${answer===i}"><span>${String.fromCharCode(65+i)}</span>${o}</button>`).join('')}</div><div id="feedback" role="status" aria-live="polite">${answer===undefined?'':feedback(e,answer)}</div><p class="case-label">Práctica formativa. Puedes revisar tu respuesta.</p>`;
}
function feedback(e,answer){return `<div class="feedback"><strong>${answer===e.answer?'Respuesta correcta.':'Revisa tu respuesta.'}</strong>${e.feedback}</div>`;}
function openDialog(html){$('dialog-content').innerHTML=html;if(!$('dialog').open)$('dialog').showModal();}
function sourceMarkup(id){const s=SOURCES[id];return `<section class="source-item"><h3>${s.name}</h3><p>${s.detail}</p>${s.url?`<a href="${s.url}" target="_blank" rel="noopener noreferrer">Consultar fuente ↗</a>`:''}</section>`;}
function showSources(){openDialog('<h2>Lecturas del recorrido</h2><p>Los textos del curso se contrastan con fuentes primarias. Las fichas distinguen obras, estudios introductorios y registros bibliográficos; cada uno cumple una función diferente.</p><p>Se indican capítulos, apartados o páginas cuando pudieron comprobarse. La página impresa y la del archivo PDF pueden diferir. Algunos enlaces ofrecen el texto completo; otros permiten localizar una edición. Las explicaciones y los casos son síntesis didácticas originales.</p>'+Object.keys(SOURCES).map(sourceMarkup).join(''));}
function basics(){openDialog(`<h2>Antes de recorrer la historia</h2><p class="summary">La semiótica estudia los signos, los procesos de significación y las condiciones en que se produce e interpreta sentido.</p><div class="basics-grid"><section><h3>Una función, no una lista de cosas</h3><p>Una palabra, un gesto o una huella pueden funcionar como signos. No basta inventariarlos: hay que explicar qué relación permite comprender algo mediante ellos, en qué contexto y con qué límites.</p><h3>Semiosis y comunicación</h3><p>La semiosis es el proceso en que algo funciona como signo. Una huella puede permitir una inferencia sin que alguien la haya producido para comunicar. Significación y comunicación intencional se relacionan, pero no son idénticas.</p><h3>Tradiciones diferentes</h3><p>Saussure proyecta una semiología de los signos en la vida social; Peirce desarrolla una semiótica ligada a la lógica y a la investigación. Los términos tienen historias distintas y hoy también se usan de manera amplia. Hay que precisar el modelo que se emplea en cada análisis.</p></section><section><h3>Naturaleza y cultura se articulan</h3><p>La sed tiene una dimensión corporal; servir agua incorpora recipientes, hábitos y reglas de hospitalidad. Alimentarse responde a una necesidad, mientras cocinar y ofrecer una sopa también puede expresar cuidado o pertenencia. El cuerpo y las prácticas aprendidas participan en una misma situación.</p><p>El saludo con los puños supone movimiento y contacto; su significado depende de hábitos compartidos y del contexto. No significa necesariamente lo mismo entre amistades, después de un partido o en una ceremonia.</p><h3>Cómo argumentar una lectura</h3><p>Distingue lo que observas, el sentido que propones y la evidencia que permite relacionarlos. Formula otra interpretación posible y explica qué dato ayudaría a decidir. Una asociación personal es un punto de partida, no una prueba suficiente.</p></section></div><div class="notice"><strong>Prueba con una escena cotidiana</strong><p>Alguien ofrece agua a una visita. ¿Qué observas? ¿Qué condiciones permitirían interpretarlo como cuidado, cortesía o parte de un ritual? Piensa el ejemplo ahora y justifica tu respuesta.</p></div>${sourceMarkup('zecchetto')}${sourceMarkup('eco')}`);}
function comparison(){
 const left=current().id;const right=left==='peirce'?'saussure':'peirce';
 const options=id=>ENTRIES.map(e=>`<option value="${e.id}" ${e.id===id?'selected':''}>${e.name}</option>`).join('');
 openDialog(`<h2>Dos formas de pensar el signo</h2><p>Compara las preguntas y las relaciones de cada enfoque. Las semejanzas del dibujo requieren examinar también el significado de sus términos.</p><div class="compare-selects"><label>Primer enfoque<select id="compare-a">${options(left)}</select></label><label>Segundo enfoque<select id="compare-b">${options(right)}</select></label></div><div id="comparison" class="comparison"></div><div class="prompt"><small>PARA CONVERSAR</small>¿Qué permite explicar cada enfoque sobre un mismo caso? Señala una coincidencia y una diferencia.</div>`);
 $('compare-a').addEventListener('change',renderComparison);$('compare-b').addEventListener('change',renderComparison);renderComparison();
}
function renderComparison(){const ids=[$('compare-a').value,$('compare-b').value];$('comparison').innerHTML=ids.map(id=>{const e=ENTRIES.find(x=>x.id===id);return `<div><p class="date">${e.date}</p><h3>${e.name}</h3><strong>Foco del análisis</strong><p>${e.concept}</p><strong>Relaciones que propone</strong><ul>${e.model.map(m=>`<li>${m}</li>`).join('')}</ul><strong>Su aporte</strong><p>${e.intro}</p><strong>Un caso</strong><p>${e.example}</p></div>`;}).join('');}

document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.id){selectEntry(button.dataset.id);return;}
 if(button.dataset.era!==undefined){const e=matching().find(e=>e.era===Number(button.dataset.era));if(e)centerEntry(e.id);return;}
 if(button.dataset.unit!==undefined){filterUnit(button.dataset.unit);if(button.closest('.course-map'))$('recorrido').scrollIntoView({behavior:motion()});return;}
 if(button.dataset.tab){state.tab=button.dataset.tab;renderPanel();return;}
 if(button.dataset.answer!==undefined){const e=current(),answer=Number(button.dataset.answer);state.answers.set(e.id,answer);document.querySelectorAll('.choice').forEach((b,i)=>{b.classList.toggle('right',i===answer&&i===e.answer);b.classList.toggle('wrong',i===answer&&i!==e.answer);b.setAttribute('aria-pressed',i===answer);});$('feedback').innerHTML=feedback(e,answer);return;}
 if(button.dataset.source){openDialog('<h2>Lectura de referencia</h2>'+sourceMarkup(button.dataset.source));return;}
 if(button.id==='clear-search')filterUnit('all');
});
$('search').addEventListener('input',event=>{state.query=event.target.value;renderTimeline(true);});
$('prev').addEventListener('click',()=>move(-1));$('next').addEventListener('click',()=>move(1));
$('compare').addEventListener('click',comparison);$('sources').addEventListener('click',showSources);$('basics').addEventListener('click',basics);
$('close-dialog').addEventListener('click',()=>$('dialog').close());
$('close-event').addEventListener('click',()=>$('event-dialog').close());
$('event-dialog').addEventListener('close',()=>{
 document.body.classList.remove('modal-open');setHash('recorrido');
 const point=document.querySelector(`.event-card[data-id="${state.id}"]`);
 if(point){centerEntry(state.id,'instant');point.focus({preventScroll:true});}
});
for(const id of ['event-dialog','dialog']){
 $(id).addEventListener('click',event=>{const rect=$(id).getBoundingClientRect();if(event.target===$(id)&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))$(id).close();});
}
$('method').addEventListener('click',()=>openDialog('<h2>Criterios de lectura</h2><p>La línea reúne hitos seleccionados de la historia occidental del signo y ampliaciones sobre cultura y comunicación. Las fechas señalan obras, periodos o desarrollos. Las corrientes se superponen y mantienen debates.</p><p>El recorrido es cronológico y esquemático. La distancia entre dos puntos facilita la lectura y no representa una duración proporcional. La posición arriba o abajo no clasifica a los autores. Puedes explorar los contenidos por tema o época.</p><p>Los esquemas son apoyos didácticos. Cada ficha identifica su lectura de referencia. Los casos contemporáneos y los ejercicios son de elaboración propia.</p><p>Las lecturas del curso y las referencias identificadas sustentan el contenido. Se distinguen la Gramática de Port Royal (1660) y su Lógica (1662), y las afirmaciones sobre IA se presentan como preguntas de discusión.</p><p>La revisión teórica contrasta los textos del curso con fuentes primarias y diferencia sus conceptos. Los apartados de lectura permiten comprobar los pasajes; un catálogo editorial acredita una edición, no reemplaza su contenido.</p><p>Las respuestas de práctica se mantienen mientras no recargues ni cierres esta página. Los contenidos pueden consultarse sin completar los ejercicios.</p>'));
$('present').addEventListener('click',toggleProjection);$('modal-present').addEventListener('click',toggleProjection);
document.querySelector('.tabs').addEventListener('keydown',event=>{
 const tabs=[...document.querySelectorAll('[data-tab]')],index=tabs.indexOf(document.activeElement);if(index<0)return;
 let next=index;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;
 event.preventDefault();state.tab=tabs[next].dataset.tab;renderPanel();tabs[next].focus();
});
$('timeline-viewport').addEventListener('keydown',event=>{
 const cards=[...document.querySelectorAll('.event-card')];if(!cards.length)return;
 const focused=event.target.closest('.event-card');let index=cards.indexOf(focused);
 if(event.key==='ArrowRight')index=Math.min(cards.length-1,index+1);
 else if(event.key==='ArrowLeft')index=Math.max(0,index-1);
 else if(event.key==='Home')index=0;
 else if(event.key==='End')index=cards.length-1;else return;
 event.preventDefault();cards[index].focus({preventScroll:true});centerEntry(cards[index].dataset.id);
});
$('event-dialog').addEventListener('keydown',event=>{
 if($('dialog').open||!document.body.classList.contains('projection')||event.target.closest('input,select,textarea,[role="tablist"]'))return;
 if(event.key==='ArrowRight'){event.preventDefault();move(1);}
 if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}
});
$('timeline-viewport').addEventListener('scroll',syncNavigation,{passive:true});
$('pan-left').addEventListener('click',()=>panTo($('timeline-viewport').scrollLeft-$('timeline-viewport').clientWidth*.75));
$('pan-right').addEventListener('click',()=>panTo($('timeline-viewport').scrollLeft+$('timeline-viewport').clientWidth*.75));
$('timeline-position').addEventListener('input',event=>{const vp=$('timeline-viewport');panTo(Number(event.target.value)/1000*(vp.scrollWidth-vp.clientWidth),'instant');});
function changeZoom(value){const vp=$('timeline-viewport'),center=(vp.scrollLeft+vp.clientWidth/2-155)/step();state.zoom=value;renderTimeline();panTo(positionAt(center)-vp.clientWidth/2,'instant');syncNavigation();}
const zoomLevels=[.8,1,1.25,1.5];
$('zoom-out').addEventListener('click',()=>changeZoom(zoomLevels[Math.max(0,zoomLevels.indexOf(state.zoom)-1)]));
$('zoom-in').addEventListener('click',()=>changeZoom(zoomLevels[Math.min(zoomLevels.length-1,zoomLevels.indexOf(state.zoom)+1)]));
$('zoom-reset').addEventListener('click',()=>changeZoom(1));
let drag=null;
$('timeline-viewport').addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0||event.target.closest('button'))return;drag={x:event.clientX,left:$('timeline-viewport').scrollLeft};$('timeline-viewport').setPointerCapture(event.pointerId);$('timeline-viewport').classList.add('dragging');});
$('timeline-viewport').addEventListener('pointermove',event=>{if(drag)$('timeline-viewport').scrollLeft=drag.left+drag.x-event.clientX;});
for(const type of ['pointerup','pointercancel','lostpointercapture'])$('timeline-viewport').addEventListener(type,()=>{drag=null;$('timeline-viewport').classList.remove('dragging');});
let resizeFrame;window.addEventListener('resize',()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>renderTimeline());});
function openHash(){const id=location.hash.slice(1);if(ENTRIES.some(e=>e.id===id)){state.unit='all';state.query='';$('search').value='';state.id=id;renderTimeline();centerEntry(id,'instant');selectEntry(id);}}
window.addEventListener('hashchange',openHash);
$('total').textContent=ENTRIES.length+' hitos';renderTimeline();openHash();
