import {courseModules,taskNotes,optionalComparison} from './curriculum.js?v=lc-341113c05c62';
import {resourceById} from './corpus.js?v=lc-341113c05c62';
import {keyNames,fieldLabel,archivedKeys} from './state.js?v=lc-341113c05c62';

export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function collectEvidence(state){
 const result=[];
 for(const m of [...courseModules,{id:2,routes:{ampliacion:optionalComparison}}])for(const r of Object.values(m.routes))for(const [i,x] of ['A','B'].entries()){
  const n=state.notes[r.noteKey]||{};if(!n['evidence'+x]?.trim())continue;
  result.push({id:r.noteKey+'-'+x,key:r.noteKey,title:resourceById[r.texts[i]].title,author:resourceById[r.texts[i]].author,text:n['evidence'+x],locator:n['locator'+x]||'',module:m.id});
 }
 return result;
}
export function insertPassage(text,start,end,passage){
 const at=Math.max(0,Math.min(text.length,start??text.length)),finish=Math.max(at,Math.min(text.length,end??at));
 const fragment='\n\n'+passage.text+'\n['+passage.author+' · '+passage.title+'; '+(passage.locator.trim()||'localizador pendiente')+']\n\n';
 const next=text.slice(0,at)+fragment+text.slice(finish);return {text:next,caret:at+fragment.length};
}
export const annexOptions=state=>Object.keys(state.notes).filter(k=>k!=='ensayo'&&!archivedKeys.includes(k)&&Object.values(state.notes[k]||{}).some(v=>v.trim())).map(key=>({key,title:keyNames[key]||key}));
export function deliveryChecklist(state){
 const n=state.notes.ensayo||{},words=n.argument?.trim()?n.argument.trim().split(/\s+/u).length:0;
 return [
  {field:'title',label:'Título del ensayo',ok:!!n.title?.trim()},
  {field:'student',label:'Nombre del estudiante',ok:!!n.student?.trim()},
  {field:'argument',label:`Extensión del ensayo: ${words} palabras · referencia: 1500–1800`,ok:words>=1500&&words<=1800},
  {field:'credits',label:'Referencias y atribuciones',ok:!!n.credits?.trim()},
  {field:'mediation',label:'Consigna didáctica',ok:!!n.mediation?.trim()}
 ];
}
export function projectDesk(state){
 const evidence=collectEvidence(state),taskKeys=[...new Set([...courseModules.flatMap(m=>Object.values(m.routes).map(r=>r.noteKey)),...Object.keys(taskNotes),'3-traduccion','2-ampliacion'])];
 const tasks=taskKeys.filter(key=>state.notes[key]?.argument?.trim()||state.notes[key]?.translation?.trim()).map(key=>[key,{title:keyNames[key]}]);
 return `<aside class="essay-desk" id="essay-materials" aria-label="Materiales para escribir"><details class="desk-fold" open><summary>Mis materiales de escritura</summary><p class="caption">Consulta un pasaje y vuelve al mismo punto del borrador. Los localizadores se insertan tal como los registraste.</p><div role="tablist" aria-label="Material de consulta" class="desk-tabs"><button role="tab" id="desk-tab-evidence" aria-selected="true" aria-controls="desk-evidence" data-desk-tab="evidence">Pasajes</button><button role="tab" id="desk-tab-tasks" aria-selected="false" tabindex="-1" aria-controls="desk-tasks" data-desk-tab="tasks">Fichas</button><button role="tab" id="desk-tab-map" aria-selected="false" tabindex="-1" aria-controls="desk-map" data-desk-tab="map">Relaciones</button></div><div id="desk-evidence" role="tabpanel" aria-labelledby="desk-tab-evidence">${evidence.length?evidence.map(p=>`<section class="desk-passage"><h3>${esc(p.title)}</h3><p class="preserve">${esc(p.text)}</p><p class="caption preserve">${esc(p.locator||'Localizador pendiente: complétalo antes de entregar.')}</p><button type="button" class="text-button" data-insert-evidence="${esc(p.id)}">Insertar pasaje y localizador</button></section>`).join(''):'<p>Los pasajes que registres en Actividad de tus clases aparecerán aquí. <a class="text-link" href="#semana/2/1">Registrar mis primeras evidencias</a></p>'}</div><div id="desk-tasks" role="tabpanel" aria-labelledby="desk-tab-tasks" hidden>${tasks.length?tasks.map(([key,t])=>`<section class="desk-passage"><h3>${esc(t.title)}</h3><p class="preserve">${esc(state.notes[key].argument||state.notes[key].translation)}</p></section>`).join(''):'<p>Tus fichas y matrices aparecerán al escribir las actividades por semanas.</p>'}<p class="caption">Desarrolla una tesis propia al transformar estas notas.</p></div><div id="desk-map" role="tabpanel" aria-labelledby="desk-tab-map" hidden>${relationDiagram(state.relations)}<p class="caption">La dirección dibujada sigue el registro. Consulta la evidencia de cada vínculo para explicar su alcance.</p></div></details></aside>`;
}
export function relationDiagram(relations){
 if(!relations.length)return '<p class="empty-caption">Añade una relación para visualizar sus obras y mediadores.</p>';
 const shown=relations.slice(0,12),h=shown.length*145+20;
 const box=(x,y,width,title,kind)=>`<rect x="${x}" y="${y}" width="${width}" height="64" rx="6" fill="#fffefb" stroke="#717d89"/><text x="${x+12}" y="${y+22}" class="map-kind">${esc(kind)}</text><text x="${x+12}" y="${y+44}" class="map-label">${esc(title.length>22?title.slice(0,20)+'…':title)}</text>`;
 return `<div class="circuit-figure"><svg viewBox="0 0 800 ${h}" role="img" aria-label="Circuitos registrados: ${shown.length} vínculos. Descripción y fuentes en la lista de relaciones.">${shown.map((r,i)=>{const y=i*145+20,mid=r.mediator?.trim();const line=(a,b)=>`<path d="M${a} ${y+32}H${b}" stroke="#123c69" stroke-width="1.5" ${r.type==='propuesta'?'stroke-dasharray="6 5"':''} /><path d="M${b-7} ${y+28}L${b} ${y+32}L${b-7} ${y+36}" fill="#123c69"/>`;return `<g><title>${esc(r.from+' → '+(mid?mid+' → ':'')+r.to+'; '+r.type+'; '+r.evidence)}</title>${box(10,y,230,r.from,'Partida')}${mid?line(240,275)+box(280,y,240,mid,'Mediación')+line(520,555):line(240,555)}${box(560,y,230,r.to,'Destino')}<text x="10" y="${y+88}" class="map-kind">${esc((i+1)+'. '+(r.type==='documentada'?'Documentada':'Propuesta')+(r.date?' · '+r.date:'')+(r.medium?' · '+r.medium:''))}</text></g>`}).join('')}</svg></div><p class="caption">Línea continua: relación documentada. Línea discontinua: comparación propuesta. La posición en el dibujo no representa prestigio ni poder.${relations.length>12?' Se muestran los primeros 12 vínculos; la lista conserva todos.':''}</p>`;
}
function paragraphs(text){return text.trim().split(/\n\s*\n/).map(p=>p.trim().startsWith('>')?'<blockquote>'+esc(p.replace(/^>\s?/gm,''))+'</blockquote>':'<p class="preserve">'+esc(p)+'</p>').join('');}
// Delivery defaults to the argument and its recorded sources. Preparation is opt-in;
// rendering either version never changes the notebook or the review requirements.
const fichaRequired={comparison:['hypothesis','evidenceA','locatorA','evidenceB','locatorB','difference','argument'],task:['argument']};
const fichaKind=key=>taskNotes[key]?'task':'comparison';
const countWords=text=>text?.trim()?text.trim().split(/\s+/u).length:0;
export function fichaPrompt(key){
 if(taskNotes[key])return taskNotes[key].prompt;
 for(const m of courseModules)for(const r of Object.values(m.routes||{}))if(r.noteKey===key)return r.workshop?.text||'';
 return '';
}
export function fichaChecklist(state,key){
 const n=state.notes[key]||{},words=countWords(n.argument);
 return [...fichaRequired[fichaKind(key)].filter(f=>f!=='argument').map(f=>({field:f,label:fieldLabel(key,f),ok:!!n[f]?.trim()})),
  {field:'argument',label:`${fieldLabel(key,'argument')}: ${words} palabras · referencia: 250–350`,ok:words>=250&&words<=350}];
}
export function fichaHtml(state,key,title,{includePreparation=false}={}){
 const n=state.notes[key]||{},fields=[...fichaRequired[fichaKind(key)],'objection','revision','revisionReason'].filter((f,i,all)=>f!=='argument'&&all.indexOf(f)===i&&n[f]?.trim());
 const route=courseModules.flatMap(m=>Object.values(m.routes)).find(r=>r.noteKey===key);
 const references=['A','B'].flatMap((suffix,i)=>{
  if(!n['locator'+suffix]?.trim())return [];
  const r=route&&resourceById[route.texts[i]];
  return `<p class="preserve">${r?esc(r.author+' · '+r.title)+': ':''}${esc(n['locator'+suffix])}</p>`;
 }).join('');
 return `<article class="seminar-delivery ficha-delivery"><header class="ficha-head"><p>Literatura comparada · Alejandro Córdova</p><h1>${esc(title)}</h1><p>Nombre: ______________________________ · Fecha: ______________</p>${fichaChecklist(state,key).some(c=>!c.ok)?'<p>Borrador · revisión pendiente</p>':''}</header><section class="delivery-body"><h2>Consigna</h2><p>${esc(fichaPrompt(key))}</p><h2>${esc(fieldLabel(key,'argument'))}</h2>${n.argument?.trim()?paragraphs(n.argument):'<p>El argumento todavía está vacío.</p>'}${references?'<h2>Fuentes y localizadores registrados</h2>'+references:''}<p class="caption">${esc(fieldLabel(key,'argument'))}: ${countWords(n.argument)} palabras.</p></section>${includePreparation?`<section class="delivery-annex ficha-preparation"><h2>Anexo · Preparación y revisión</h2>${fields.map(f=>`<h3>${esc(fieldLabel(key,f))}</h3>${paragraphs(n[f])}`).join('')||'<p>No hay preparación registrada para adjuntar.</p>'}</section>`:''}</article>`;
}
export function deliveryHtml(state){
 const n=state.notes.ensayo||{},d=state.delivery||{annexes:[]},passages=collectEvidence(state);
 return `<article class="seminar-delivery"><section class="delivery-cover"><p>Literatura comparada · Alejandro Córdova</p><h1>${esc(n.title||'Ensayo comparativo')}</h1><p>${esc(n.student||'Nombre pendiente')}</p><p>Ensayo individual y consigna didáctica</p>${deliveryChecklist(state).some(c=>!c.ok)?'<p>Borrador · revisión pendiente</p>':''}</section><section class="delivery-body"><h2>Ensayo</h2>${n.argument?.trim()?paragraphs(n.argument):'<p>El borrador todavía está vacío.</p>'}${n.mediation?.trim()?'<h2>Consigna didáctica</h2>'+paragraphs(n.mediation):''}${n.credits?.trim()?'<h2>Referencias y atribuciones</h2>'+paragraphs(n.credits):''}</section>${d.annexes.map(key=>{const note=state.notes[key]||{},related=passages.filter(p=>p.key===key);return `<section class="delivery-annex"><h2>Anexo · ${esc(keyNames[key]||key)}</h2>${related.length?'<table><caption>Pasajes y localizadores registrados</caption><thead><tr><th>Objeto</th><th>Pasaje</th><th>Fuente y localizador</th></tr></thead><tbody>'+related.map(p=>`<tr><th>${esc(p.title)}</th><td class="preserve">${esc(p.text)}</td><td class="preserve">${esc(p.locator||'Pendiente')}</td></tr>`).join('')+'</tbody></table>':''}${Object.entries(note).filter(([f,v])=>v.trim()&&!['evidenceA','evidenceB','locatorA','locatorB'].includes(f)).map(([f,v])=>'<h3>'+esc(fieldLabel(key,f))+'</h3>'+paragraphs(v)).join('')}</section>`}).join('')}${d.includeMap?'<section class="delivery-annex"><h2>Mapa de relaciones</h2>'+relationDiagram(state.relations)+state.relations.map(r=>`<h3>${esc(r.from+' → '+r.to)}</h3><p>${esc(r.type)}${r.mediator?' · Mediación: '+esc(r.mediator):''}${r.date?' · Fecha: '+esc(r.date):''}${r.medium?' · Medio: '+esc(r.medium):''}</p>`+paragraphs(r.evidence)).join('')+'</section>':''}${d.includeAssessment?'<section class="delivery-annex"><h2>Autoevaluación con la rúbrica</h2>'+paragraphs(n.selfAssessment||'Autoevaluación pendiente.')+'</section>':''}</article>`;
}
export const methodologicalAlerts={
 1:['¿La coincidencia temática se convierte en un criterio formal concreto?','¿Qué prueba permitiría afirmar contacto o influencia? La semejanza por sí sola deja esa pregunta abierta.','¿Distingues un juicio de valor de una explicación sobre selección y consagración?'],
 2:['¿Qué diferencias de época, lengua, género y mediación conserva la comparación?','¿Qué pasaje permite distinguir autoría, voz representada y destinatario?','¿La condición de subordinación se demuestra respecto de un circuito o institución concretos?'],
 3:['¿Tu expectativa personal se distingue de una operación del texto y de un documento histórico de recepción?','¿Qué pasaje contradice tu lectura y qué explicación rival puede darle sentido?','En traducción: ¿qué efecto observas y qué evidencia permitiría explicarlo como variante, decisión o error?'],
 4:['¿Localizas la relación textual y distingues cita, reescritura y comparación propuesta?','¿La diferencia de medios se explica con procedimientos observables?','¿Fechas y mediadores sostienen la circulación que afirmas? Un vínculo visual no demuestra por sí solo influencia.']
};
export function alertHtml(module){return `<details class="method-alerts"><summary>Preguntas para poner a prueba mi argumento</summary><p>Elige la pregunta que revele una dificultad real y formula una objeción con evidencia.</p><ul>${methodologicalAlerts[module].map(t=>'<li>'+esc(t)+'</li>').join('')}</ul></details>`;}
