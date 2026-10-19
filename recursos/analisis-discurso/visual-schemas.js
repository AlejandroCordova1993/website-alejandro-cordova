import {visualSchemas,visualImages} from './visual-schema-data.js';
import {esc} from './export.js';
import {uiIcon} from './ui-icons.js';
import {getSession} from './encounters.js';

export {visualSchemas,visualImages};

// Visual schemas for the theory, built with HTML and CSS instead of SVG text: lines wrap at any width,
// respect the 12 px floor, are read by screen readers and print complete. SVG only draws (lines, arrows).
// Every figure shares the frame, the optional object, the task line that ties it to the activity and the
// caption with limit and source; each type adds its own body. Content lives in visual-schema-data.js.
export const schemaTypes=[
 {type:'path',code:'E1',name:'Recorrido en pasos',purpose:'Ordenar una operación de análisis y lo que necesita cada paso.'},
 {type:'contrast',code:'E2',name:'Contraste',purpose:'Comparar dos versiones y señalar qué cambia.'},
 {type:'revision',code:'E2r',name:'Revisión con razones',purpose:'Mostrar cómo cambia una afirmación y qué evidencia lo motivó.'},
 {type:'annotated',code:'E3',name:'Texto anotado',purpose:'Señalar marcas en las palabras y lo que hace cada una.'},
 {type:'segments',code:'E3s',name:'Texto segmentado',purpose:'Mostrar cómo un texto combina segmentos con funciones distintas.'},
 {type:'scale',code:'E4',name:'Escala',purpose:'Ordenar formas en un continuo sin convertir el orden en prueba.'},
 {type:'quadrant',code:'E5',name:'Cuadrante',purpose:'Cruzar dos preguntas de sí o no.'},
 {type:'matrix',code:'E6',name:'Matriz',purpose:'Comparar opciones con los mismos criterios.'},
 {type:'score',code:'E7',name:'Partitura',purpose:'Alinear palabras, voz y cuerpo en el tiempo.'},
 {type:'tree',code:'E8',name:'Árbol ascendente',purpose:'Pasar de las proposiciones del texto a un tema global.'},
 {type:'argument',code:'E9',name:'Esquema argumentativo',purpose:'Reconstruir premisa, ley de paso y conclusión, con garantía y reserva.'},
 {type:'triangle',code:'E10',name:'Triángulo de fuentes',purpose:'Triangular: qué aporta y qué no aporta cada fuente.'},
 {type:'transform',code:'E11',name:'Transformación',purpose:'Recontextualizar: qué se conserva, reformula, aclara u omite.'},
 {type:'turns',code:'E12',name:'Secuencia de turnos',purpose:'Seguir un intercambio y cómo una respuesta lo modifica.'},
 {type:'voices',code:'E12v',name:'Voces',purpose:'Distinguir las figuras que un enunciado pone en escena.'},
 {type:'branch',code:'E13',name:'Bifurcación',purpose:'Mostrar las vías alternativas que un modelo distingue ante una misma situación.'},
 {type:'cycle',code:'E14',name:'Procesos recursivos',purpose:'Mostrar procesos que se activan entre sí en cualquier dirección, no pasos fijos.'},
 {type:'facets',code:'E15',name:'Dimensiones',purpose:'Mostrar las dimensiones que un modelo distingue en un concepto y que actúan juntas.'},
 {type:'composition',code:'I1',name:'Objeto construido',purpose:'Dar un documento para analizar, recreado en HTML con su texto exacto.'}
];

// The author view shows empty image slots and the gallery: local preview hosts or ?autor.
let authorMode=false;
export const setAuthorMode=value=>{authorMode=!!value;};
export const isAuthorMode=()=>authorMode;
export function isAuthorView(loc){
 const host=String(loc?.hostname||'');
 return ['localhost','127.0.0.1','[::1]','::1'].includes(host)||host.endsWith('.localhost')||new URLSearchParams(loc?.search||'').has('autor');
}

const quote=text=>`<blockquote class="schema-quote">${esc(text)}</blockquote>`;
const objectHtml=o=>o?`<div class="schema-object"><p class="schema-object-label">${esc(o.label)}</p>${quote(o.text)}</div>`:'';
const verdictHtml=text=>text?`<p class="vs-verdict">${esc(text)}</p>`:'';
const card=(label,text,extra='')=>`<div class="vs-card${extra}"><p class="vs-card-label">${esc(label)}</p><p class="vs-card-text">${esc(text)}</p></div>`;
const seconds=n=>`${n.toFixed(1).replace('.',',')} s`;

// Wraps each mark in order; a missing mark is a data error and must fail loudly.
function marked(text,marks,{numbered=false}={}){
 let html='',cursor=0;
 marks.forEach((m,i)=>{
  const words=typeof m==='string'?m:m.words,at=text.indexOf(words,cursor);
  if(at<0)throw Error(`Marca no encontrada en el texto: ${words}`);
  html+=esc(text.slice(cursor,at))+`<mark class="vs-mark">${esc(words)}${numbered?`<sup aria-hidden="true">${i+1}</sup>`:''}</mark>`;
  cursor=at+words.length;
 });
 return html+esc(text.slice(cursor));
}

const renderers={
 path:s=>`${objectHtml(s.object)}<ol class="schema-steps" role="list">${s.steps.map((step,i)=>`<li class="schema-step"><p class="schema-step-head"><span class="schema-step-number" aria-hidden="true">${i+1}</span><strong>${esc(step.verb)}</strong> <span class="schema-dimension">${esc(step.dimension)}</span></p><p class="schema-question">${esc(step.question)}</p><dl class="schema-step-detail"><div><dt>${esc(s.claimLabel||'En el aviso')}:</dt> <dd>${esc(step.claim)}</dd></div><div><dt>Se apoya en:</dt> <dd>${esc(step.evidence)}</dd></div></dl></li>`).join('')}</ol><p class="schema-scale">${uiIcon('arrowRight')}<span>${esc(s.scale)}</span></p>`,
 contrast:s=>`${s.question?`<p class="vs-question">${esc(s.question)}</p>`:''}<div class="vs-columns">${s.columns.map(c=>`<div class="vs-column"><p class="vs-card-label">${esc(c.label)}</p><p class="vs-example">${marked(c.text,c.marks||[])}</p><p class="vs-card-text">${esc(c.note)}</p></div>`).join('')}</div>${verdictHtml(s.verdict)}`,
 revision:s=>`<ol class="vs-flow" role="list"><li>${card(s.before.label,s.before.text,' is-before')}</li><li>${card(s.evidence.label,s.evidence.text,' is-evidence')}</li><li>${card(s.after.label,s.after.text,' is-after')}</li></ol><p class="vs-verdict"><strong>Razón del cambio:</strong> ${esc(s.reason)}</p>`,
 // Notes repeat a short marked word; a long marked span is only numbered, so the note does not copy the text.
 annotated:s=>`<p class="vs-annotated">${s.context?`<span class="vs-context">${esc(s.context)}:</span> `:''}${marked(s.text,s.marks,{numbered:true})}</p><ol class="vs-notes" role="list">${s.marks.map((m,i)=>`<li><span class="vs-note-number" aria-hidden="true">${i+1}</span><span><strong>${m.words.length<=24?`«${esc(m.words)}» · `:''}${esc(m.label)}:</strong> ${esc(m.note)}</span></li>`).join('')}</ol>${verdictHtml(s.verdict)}`,
 segments:s=>`<ol class="vs-segments" role="list">${s.segments.map(seg=>`<li><p class="vs-segment-label">${esc(seg.label)}</p><p class="vs-example">${esc(seg.text)}</p><p class="vs-card-text">${esc(seg.note)}</p></li>`).join('')}</ol>${verdictHtml(s.verdict)}`,
 scale:s=>`${s.question?`<p class="vs-question">${esc(s.question)}</p>`:''}<p class="vs-axis"><span>${esc(s.axis.from)}</span>${uiIcon('arrowRight')}<span>${esc(s.axis.to)}</span></p><ol class="vs-scale" role="list">${s.items.map(item=>`<li><p class="vs-example">${esc(item.text)}</p><p class="vs-card-text">${esc(item.label)}</p></li>`).join('')}</ol>`,
 quadrant:s=>{
  const cell=(key,row,col)=>{const c=s.cells[key];return `<td data-label="Enuncia: ${row} · Recibe: ${col}"><p class="vs-card-label">${esc(c.forms)}</p><p class="vs-card-text">${esc(c.example)}</p></td>`;};
  return `<table class="vs-table vs-quadrant"><caption class="sr-only">${esc(s.label)}</caption><colgroup><col class="vs-col-question"><col class="vs-col-answer"><col><col></colgroup><thead><tr><td colspan="2"></td><th scope="colgroup" colspan="2">${esc(s.colQuestion)}</th></tr><tr><td colspan="2"></td><th scope="col">Sí</th><th scope="col">No</th></tr></thead><tbody><tr><th scope="rowgroup" rowspan="2" class="vs-row-question">${esc(s.rowQuestion)}</th><th scope="row">Sí</th>${cell('yy','sí','sí')}${cell('yn','sí','no')}</tr><tr><th scope="row">No</th>${cell('ny','no','sí')}${cell('nn','no','no')}</tr></tbody></table>`;
 },
 matrix:s=>`${objectHtml(s.object)}<table class="vs-table vs-matrix"><caption class="sr-only">${esc(s.label)}</caption><colgroup><col class="vs-col-head">${s.columns.map(()=>'<col>').join('')}</colgroup><thead><tr><td></td>${s.columns.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r=>`<tr><th scope="row">${esc(r.head)}${r.sub?`<span>${esc(r.sub)}</span>`:''}</th>${r.cells.map((c,i)=>`<td data-label="${esc(s.columns[i])}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>${verdictHtml(s.verdict)}`,
 score:s=>{
  const col=t=>Math.round(t/s.duration*100)+1,ticks=Array.from({length:Math.ceil(s.duration/.5)},(_,i)=>i*.5);
  return `<div class="vs-score"><p class="vs-score-ruler" aria-hidden="true">${ticks.map(t=>`<span style="--vs-a:${col(t)};--vs-b:${col(Math.min(t+.5,s.duration))}">${seconds(t)}</span>`).join('')}</p>${s.rows.map(r=>`<div class="vs-score-row"><p class="vs-score-label">${esc(r.label)}</p><ol class="vs-track" role="list">${r.events.map(e=>`<li style="--vs-a:${col(e.start)};--vs-b:${col(e.end)}"><span class="vs-event-text">${esc(e.text)}</span> <span class="vs-event-time">${seconds(e.start)}–${seconds(e.end)}</span></li>`).join('')}</ol></div>`).join('')}</div>${verdictHtml(s.verdict)}`;
 },
 tree:s=>`<div class="vs-tree"><div class="vs-tree-main">${card(s.top.label,s.top.text,' is-top')}${card(s.operation.label,s.operation.text,' is-operation')}<ul class="vs-leaves" role="list">${s.leaves.map(l=>`<li>${card(l.label,l.text)}</li>`).join('')}</ul></div>${s.loss||s.rejected?`<div class="vs-tree-aside">${s.loss?`<div class="vs-card is-loss"><p class="vs-card-label">${esc(s.loss.label)}</p><ul class="vs-loss-list" role="list">${s.loss.items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul><p class="vs-card-text">${esc(s.loss.question)}</p></div>`:''}${s.rejected?`<div class="vs-card is-rejected"><p class="vs-card-label">${esc(s.rejected.label)}</p><p class="vs-example">${esc(s.rejected.text)}</p><p class="vs-card-text">${esc(s.rejected.note)}</p></div>`:''}</div>`:''}</div>`,
 argument:s=>{
  const part=(p,cls)=>!p?'':`<div class="vs-card ${cls}"><p class="vs-card-label">${esc(p.label)}${p.connector?` <span class="vs-connector">«${esc(p.connector)}»</span>`:''}</p><p class="vs-card-text">${esc(p.text)}</p></div>`;
  // Reading order follows the reasoning; the grid places the conclusion beside the premise on wide screens.
  return `<div class="vs-argument">${part(s.premise,'is-premise')}<span class="vs-argument-arrow" aria-hidden="true">${uiIcon('arrowRight')}</span>${part(s.law,s.law?.missing?'is-law is-missing':'is-law')}${part(s.backing,'is-backing')}${part(s.conclusion,'is-conclusion')}${part(s.reserve,'is-reserve')}</div>${verdictHtml(s.verdict)}`;
 },
 triangle:s=>`<div class="vs-triangle"><svg class="vs-triangle-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><polygon points="50,24 17,74 83,74" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>${s.vertices.map((v,i)=>`<div class="vs-card vs-vertex is-v${i+1}"><p class="vs-card-label">${esc(v.label)}</p><p class="vs-card-text"><strong>Aporta:</strong> ${esc(v.gives)}</p><p class="vs-card-text"><strong>No permite:</strong> ${esc(v.limit)}</p></div>`).join('')}${card(s.center.label,s.center.text,' is-center')}</div>${verdictHtml(s.verdict)}`,
 transform:s=>`<ol class="vs-flow is-pair" role="list"><li><div class="vs-card"><p class="vs-card-label">${esc(s.from.label)}</p><p class="vs-example">${esc(s.from.text)}</p></div></li><li><div class="vs-card is-after"><p class="vs-card-label">${esc(s.to.label)}</p><p class="vs-example">${esc(s.to.text)}</p></div></li></ol><dl class="vs-operations">${s.operations.map(o=>`<div><dt>${esc(o.kind)}</dt><dd>${esc(o.text)}</dd></div>`).join('')}</dl>${verdictHtml(s.verdict)}`,
 turns:s=>`<ol class="vs-turns" role="list">${s.turns.map(t=>`<li class="is-${t.speaker==='A'?'a':'b'}"><span class="vs-speaker" aria-hidden="true">${esc(t.speaker)}</span><p class="vs-example"><span class="sr-only">${esc(t.speaker)}: </span>${esc(t.text)}</p><p class="vs-card-text">${esc(t.move)}</p></li>`).join('')}</ol>${s.note?`<p class="vs-verdict">${esc(s.note)}</p>`:''}`,
 // A constructed document: the same words in each layout; only size, order and framing change.
 composition:s=>`<p class="sr-only">Las dos disposiciones usan las mismas palabras: ${esc(Object.values(s.words).join(' '))}</p><div class="vs-compositions">${s.layouts.map(l=>`<div class="vs-composition-item"><p class="vs-card-label">${esc(l.label)}</p><div class="vs-poster is-${esc(l.style)}" role="img" aria-label="${esc(l.description)}">${l.blocks.map(b=>`<p class="vs-poster-${esc(b.role)}" aria-hidden="true">${esc(s.words[b.role])}</p>`).join('')}</div></div>`).join('')}</div><details class="vs-reading"><summary>Ver qué cambia en la composición</summary><table class="vs-table vs-matrix"><caption class="sr-only">${esc(s.label)}</caption><colgroup><col class="vs-col-head">${s.layouts.map(()=>'<col>').join('')}</colgroup><thead><tr><td></td>${s.layouts.map(l=>`<th scope="col">${esc(l.label)}</th>`).join('')}</tr></thead><tbody>${s.criteria.map(c=>`<tr><th scope="row">${esc(c.label)}</th>${c.values.map((v,i)=>`<td data-label="${esc(s.layouts[i].label)}">${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></details>${verdictHtml(s.verdict)}`,
 // Theory models. The loop of the cycle and the branch lines are drawn by CSS; the text reads in order.
 branch:s=>`<div class="vs-branch"><p class="vs-branch-root">${esc(s.question)}</p><ul class="vs-branches" role="list">${s.branches.map(b=>`<li>${card(b.name,b.text)}</li>`).join('')}</ul></div>${verdictHtml(s.verdict)}`,
 cycle:s=>`<div class="vs-cycle"><ol class="vs-flow vs-cycle-steps" role="list">${s.steps.map(st=>`<li>${card(st.name,st.text)}</li>`).join('')}</ol><p class="vs-cycle-back"><span class="vs-cycle-head" aria-hidden="true"></span>${esc(s.back)}</p></div>${verdictHtml(s.verdict)}`,
 facets:s=>`<div class="vs-facets">${card(s.center.label,s.center.text,' is-center')}<ol class="vs-facet-list" role="list">${s.facets.map((f,i)=>`<li class="vs-card"><p class="vs-card-label"><span class="vs-facet-number" aria-hidden="true">${i+1}</span>${esc(f.name)}</p>${f.example?`<p class="vs-card-text">${esc(f.example)}</p>`:''}</li>`).join('')}</ol></div>${verdictHtml(s.verdict)}`,
 voices:s=>`${objectHtml(s.object)}<div class="vs-voices"><p class="vs-subject"><strong>${esc(s.subject.role)}:</strong> ${esc(s.subject.text)}</p><section class="vs-enunciation" aria-label="Escena del enunciado"><p class="vs-scene-label">Escena del enunciado</p><div class="vs-locutor"><p class="vs-card-label">${esc(s.speaker.role)}</p><p class="vs-card-text">${esc(s.speaker.text)}</p></div><p class="vs-viewpoints-label">Puntos de vista puestos en escena por L</p><div class="vs-voices-row">${[s.evoked,s.assumed].map((v,i)=>`<div class="vs-card ${i?'is-assumed':'is-evoked'}"><p class="vs-card-label">E${i+1} · ${esc(v.role)}</p><p class="vs-example">${esc(v.text)}</p><p class="vs-stance">${esc(v.stance)}</p></div>`).join('')}</div></section></div>`
};

export function schemaHtml(id){
 const s=visualSchemas[id],render=s&&renderers[s.type];
 if(!render)return '';
 const task=s.task?`<p class="schema-task"><strong>${esc(s.task.label)}.</strong> ${esc(s.task.text)}</p>`:'';
 const caption=`<figcaption class="caption">${s.limit?`<span class="schema-limit">Límite: ${esc(s.limit)}</span> `:''}${esc(s.source)}</figcaption>`;
 // A theory model says whose model it is, so it is not read as one of the course's examples.
 const model=s.model?`<p class="vs-model">${esc(s.model)}</p>`:'';
 return `<figure class="visual-schema vs-${s.type}${s.type==='path'?' path-schema':''}" data-schema="${esc(id)}" aria-label="${esc(s.label)}">${model}${render(s)}${task}${caption}</figure>`;
}

// Placement comes from the data: a `placed` schema belongs to the class and topic it names. One that
// `replaces` the example takes the place of the topic's example block on the page; one with
// `position:'after-example'` follows the example, which stays; the rest
// follow the topic's explanation.
const placedIds=(sessionId,title)=>Object.keys(visualSchemas).filter(id=>{const s=visualSchemas[id];return s.placed&&s.planned===sessionId&&s.topic===title;});
const position=id=>visualSchemas[id].replaces==='example'?'example':visualSchemas[id].position==='after-example'?'after':'lead';
const placedAt=(where,sessionId,title)=>placedIds(sessionId,title).filter(id=>position(id)===where).map(id=>schemaHtml(id)).join('');
export const hasExampleSchema=(sessionId,title)=>placedIds(sessionId,title).some(id=>position(id)==='example');
export const leadSchemas=(sessionId,title)=>placedAt('lead',sessionId,title);
export const exampleSchemas=(sessionId,title)=>placedAt('example',sessionId,title);
export const afterExampleSchemas=(sessionId,title)=>placedAt('after',sessionId,title);
export function topicImages(sessionId,title,options){
 const ids=Object.keys(visualImages).filter(id=>{const img=visualImages[id];return img.placed&&img.planned===sessionId&&img.topic===title;});
 const pair=visualImages[ids[0]]?.pair,html=ids.map(id=>imageHtml(id,options)).join('');
 return pair&&ids.length>1&&ids.every(id=>visualImages[id].file&&visualImages[id].pair?.id===pair.id)
  ?`<div class="visual-image-pair" role="group" aria-label="${esc(pair.label)}"><p class="vi-pair-intro">${esc(pair.intro)}</p>${html}</div>`:html;
}

// An image appears when its file exists; until then only the author view shows what to create.
export function imageHtml(id,{author=authorMode}={}){
 const img=visualImages[id];
 if(!img)return '';
 if(img.file){
  const credit=[img.credit,img.ai?'Imagen generada con IA':''].filter(Boolean).join(' · ');
  const source=img.source?`<a class="source-link vi-source" href="${esc(img.source.url)}" target="_blank" rel="noopener noreferrer">${esc(img.source.label)}<span class="sr-only"> (otra pestaña)</span></a><span class="vi-consulted">Consultado: ${esc(img.source.consulted)}.</span>`:'';
  const reading=img.transcript?`<div class="vi-reading-tools"><a class="vi-document-link" href="${esc(img.file)}" target="_blank" rel="noopener noreferrer">Ampliar imagen<span class="sr-only"> (otra pestaña)</span></a><details class="vi-transcript"><summary>Leer el texto de la imagen</summary><div class="vi-transcript-text">${img.transcript.map(p=>`<p>${esc(p)}</p>`).join('')}</div></details></div>`:'';
  return `<figure class="visual-image" data-image="${esc(id)}"><div class="vi-frame"><img src="${esc(img.file)}" alt="${esc(img.alt)}" width="${img.width}" height="${img.height}" loading="lazy" decoding="async">${img.overlay?`<p class="vi-overlay">${esc(img.overlay)}</p>`:''}</div>${reading}<figcaption class="caption">${esc(img.caption)}${credit?` <span class="vi-credit">${esc(credit)}</span>`:''}${source}</figcaption></figure>`;
 }
 if(!author)return '';
 const rows=[['Qué mostrar',img.show],['Archivo','dist/img/'+id+'.webp · unos '+img.width+' × '+img.height+' px · menos de 250 KB'],['Texto alternativo (borrador)',img.alt],['Pie',img.caption],...(img.ai?[['Instrucción para la IA',img.prompt]]:[]),['Después','Completa «file» y «credit» en visual-schema-data.js.']];
 return `<figure class="visual-image is-pending" data-image="${esc(id)}"><div class="vi-slot"><p class="vi-slot-title">${uiIcon('resources')}<span>Espacio para imagen · ${esc(img.kind)}${img.ai?' · puede generarse con IA':''}</span></p><dl>${rows.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl><p class="caption">Solo visible en la vista de autor (local o con ?autor).</p></div></figure>`;
}

const classLabel=id=>{const [w,e]=id.slice(1).split('-e').map(Number);const s=getSession(w,e);return `<a href="#semana/${w}/${e}">Clase ${w}·${e}</a> · ${esc(s.title)}`;};

export function visualGalleryHtml(){
 const entries=Object.entries(visualSchemas);
 const types=schemaTypes.map(t=>{const examples=entries.filter(([,s])=>s.type===t.type);return `<section class="vs-gallery-type" aria-labelledby="vs-type-${t.type}"><h2 id="vs-type-${t.type}">${esc(t.code)} · ${esc(t.name)}</h2><p>${esc(t.purpose)}</p>${examples.map(([id,s])=>`<p class="caption vs-gallery-meta">${s.placed?'Ya está en':'Prevista para'} ${classLabel(s.planned)} · tema «${esc(s.topic)}»</p>${schemaHtml(id)}`).join('')}</section>`;}).join('');
 const images=Object.entries(visualImages).map(([id,img])=>`<p class="caption vs-gallery-meta">Prevista para ${classLabel(img.planned)} · tema «${esc(img.topic)}»</p>${imageHtml(id,{author:true})}`).join('');
 return `<div class="page-heading"><h1>Galería de elementos visuales</h1><p class="lead">Vista de autor: solo aparece en la vista local o con ?autor. Muestra cada tipo con el contenido previsto; los que no dicen «Ya está en» todavía no aparecen en sus clases.</p></div><div class="vs-gallery">${types}<section class="vs-gallery-type" aria-labelledby="vs-type-images"><h2 id="vs-type-images">Espacios para imágenes</h2><p>Mientras falte el archivo, el estudiante no ve nada; aquí se muestra qué crear o buscar.</p>${images}</section></div>`;
}
