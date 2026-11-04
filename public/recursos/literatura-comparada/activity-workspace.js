// Presentación por pasos; conserva las claves y el contenido del cuaderno.
import {resourceById} from './corpus.js?v=lc-2e516dbef4d7';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function focusedComparison(key,route,{documents=route.texts.length,week=0}={},ctx){
 const {field,state}=ctx,n=state.notes[key]||{},single=documents<route.texts.length;
 const ready=name=>!!n[name]?.trim();
 const first=!ready('hypothesis')?0:route.texts.slice(0,documents).some((_,i)=>!ready('evidence'+(i?'B':'A'))||!ready('locator'+(i?'B':'A')))?1:single||ready('difference')?1:2;
 const step=(i,title,body)=>`<details class="activity-step" name="preparacion-${esc(key)}"${i===first?' open':''}><summary>${title}</summary><div class="activity-step-body">${body}</div></details>`;
 const hypothesis=week===5?'Registra quién habla o aparece, a quién se dirige y qué primera interpretación propones.':week===9?'Registra tu expectativa de primera lectura, la pregunta que vas a comparar y una respuesta provisional.':'Escribe tu pregunta y una respuesta provisional que puedas comprobar con los pasajes.';
 const passages=route.texts.slice(0,documents).map((id,i)=>{
  const s=i?'B':'A',res=resourceById[id];
  return `<section class="activity-passage"><h4>Documento ${s} · ${esc(res.title)}</h4><p class="caption">${esc(res.author)}${res.translator?' · Traducción: '+esc(res.translator):''}</p><p>${esc(route.prompts[i])}</p>${res.url&&res.access!=='Biblioteca'?`<a class="text-link" href="${esc(res.url)}" target="_blank" rel="noopener noreferrer">${res.format==='Video'?'Ver el cortometraje':'Abrir lectura'}</a>`:''}${field(key,'evidence'+s,'Pasaje o evidencia '+s,'Cita o describe un detalle y explica qué permite observar.',4)}${field(key,'locator'+s,'Fuente y localizador '+s,res.format==='Video'?'Fuente y minuto de la secuencia.':'Edición y página, párrafo o folio. Identifica la traducción si corresponde.',2)}</section>`;
 }).join('');
 return `<div class="focused-comparison">${step(0,week===5?'Mi primera lectura':'Mi pregunta',field(key,'hypothesis','Mi hipótesis inicial',hypothesis,3))}${step(1,single?'Pasaje y fuente':'Pasajes y fuentes',`<div class="activity-passages">${passages}</div>`)}${single?`<details class="activity-support"><summary>Diferencia por investigar al incorporar el segundo texto</summary>${field(key,'difference','La diferencia que importa','Puedes dejarlo pendiente hasta la semana 6. Las notas anteriores permanecen aquí.',3)}</details>`:step(2,'Diferencia entre los textos',`${key==='3-hermeneutica'?'':`<p>${esc(route.prompts[2])}</p>`}${field(key,'difference','La diferencia que importa','Explica una diferencia entre los textos y cómo limita tu comparación.',3)}`)}</div>`;
}

export function focusedArgument(key,route,brief,ctx){
 const {field,taskReview}=ctx;
 return `<section class="focused-argument">${field(key,'argument','Mi argumento',brief.hint,11)}<details class="activity-support activity-revision"><summary>Registrar la revisión · objeción, tesis y cambios</summary><p>La objeción y su respuesta también deben quedar dentro de «Mi argumento». Estos registros acompañan la revisión; no son otra entrega.</p>${field(key,'objection','La objeción más exigente','¿Qué pasaje dificulta tu tesis y cómo respondes?',3)}${field(key,'revision','Mi hipótesis revisada','Escribe la tesis que sostienes después de revisar los pasajes.',3)}${field(key,'revisionReason','Qué cambió y por qué','Indica qué corriges o mantienes y con qué evidencia.',3)}</details>${taskReview(key)}</section>`;
}
