import {encounters,dayLabel} from './encounters.js?v=lc-d55455d88964';
import {classHref} from './class-flow.js?v=lc-d55455d88964';
import {activityAdvance,activityHref} from './activities.js?v=lc-d55455d88964';
import {focusedComparison,focusedArgument} from './activity-workspace.js?v=lc-d55455d88964';
import {fichaTitles} from './class-flow.js?v=lc-d55455d88964';
import {activityProducts} from './seminar.js?v=lc-d55455d88964';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function activityReviewHtml(activity){
 return activity?.reviewCriteria?.length?`<h3>Revisar el contenido de la ficha</h3><ul>${activity.reviewCriteria.map(text=>`<li>${esc(text)}</li>`).join('')}</ul>`:'';
}

export function renderActivityPage(a,ctx){
 const {modules,header,field,state,translation,relationsWorkshop,film,button,saveLabel,taskReview}=ctx;
 const key=a.key,m=modules.find(m=>m.id===a.module),n=state.notes[key]||{};
 const route=Object.values(m.routes).find(r=>r.noteKey===key);
 const sessions=a.encounters.map(([week,session])=>encounters.find(e=>e.week===week&&e.day===(session===1?'lunes':'miercoles')));
 const closing=sessions.at(-1),weeks=[...new Set(sessions.map(e=>e.week))];
 const timing=`Se trabaja durante ${weeks.length===1?'la semana '+weeks[0]:'las semanas '+weeks.join(' y ')}. ${fichaTitles[key]||activityProducts[key]?'La entrega se prepara al cierre: semana '+closing.week+', '+dayLabel(closing.day)+'.':'Los avances se conservan en este mismo espacio.'}`;
 let workspace='';
 if(a.kind==='comparison'){
  const sourceGuide=key==='2-oralitura'?'<p>Empieza con Guamán Poma. Incorpora Chikangana cuando se trabaje esa lectura en la semana 6. Kowii apoya la discusión; la ficha compara los dos objetos acordados.</p>':'';
  const draft=key==='4-medios'?field(key,'argument',a.label,a.hint,11,{finalFicha:false}):focusedArgument(key,route,{hint:a.hint},ctx);
  workspace=draft+`<details class="activity-support preparation-notes"><summary>Preparar la comparación · pregunta, pasajes y fuentes</summary>${sourceGuide}${focusedComparison(key,route,{week:key==='2-oralitura'?5:key==='3-hermeneutica'?9:0},ctx)}</details>`;
 }
 if(a.kind==='task'){
  workspace=field(key,'argument',a.label,a.hint,12,{finalFicha:!!fichaTitles[key]})+`<details class="activity-support preparation-notes"><summary>Notas para preparar el trabajo</summary><p>Reúne aquí tus registros y esquemas. Este espacio conserva lo escrito durante todas las sesiones de la actividad.</p>${field(key,'preparation','Mis notas de preparación','Añade tus avances sin borrar los registros que quieras conservar. No hay historial automático de versiones.',8,{finalFicha:false})}</details><details class="activity-support"><summary>Registrar la revisión</summary>${field(key,'revisionReason','Cambios y decisiones de revisión','Indica qué precisas o mantienes y qué evidencia apoya esa decisión.',3)}</details>${fichaTitles[key]?taskReview(key):''}`;
 }
 if(a.kind==='translation')workspace=translation({preparing:false,compact:true,unified:true});
 if(key==='2-cartografia')workspace+=`<details class="activity-map"${state.relationDraft?' open':''}><summary>Mapa de vínculos · añadir o revisar</summary><p>Acuerden quién conserva la versión común del grupo. El mapa y su comentario se revisan en este mismo trabajo durante la semana 13.</p>${relationsWorkshop()}<p class="caption">El respaldo JSON traslada el cuaderno completo: reemplaza el de destino y no fusiona cuadernos. La web no sincroniza el trabajo entre integrantes.</p></details>${field(key,'student','Integrantes del grupo','Estos nombres aparecerán en el PDF grupal.',2)}`;
 if(key==='4-medios')workspace=`<details class="activity-support"><summary>Consultar el cortometraje</summary>${film()}</details>`+workspace;
 const delivery=fichaTitles[key]||activityProducts[key]?`<section class="activity-delivery"><h2>Preparar la entrega</h2>${activityReviewHtml(a)}<p>${key==='2-cartografia'?'Entreguen un PDF por grupo con el mapa, el comentario revisado y las fuentes.':'El PDF reúne el producto de esta actividad. Adjuntar la preparación es opcional.'} Envíalo por el canal docente.</p>${button('prepare-ficha','Preparar PDF de esta actividad','button',`data-ficha="${key}"`)}</section>`:'';
 const companion=key==='4-temas'?`<p class="activity-companion">Después de la matriz, continúa con <a class="text-link" href="${activityHref('4-medios')}">Memoria y medios</a>.</p>`:key==='4-medios'?`<p><a class="text-link" href="${activityHref('4-temas')}">Volver a la matriz de Palacio y Machado</a></p>`:key==='2-oralitura'?'<p><a class="text-link" href="#ampliacion">Otra comparación · Sor Juana y Castellanos</a></p>':'';
 const milestone=key==='1-canon'?['problema','formular la pregunta y delimitar el corpus']:key==='3-metodos'?['esquema','organizar el esquema y las fuentes']:['4-temas','3-microclase','4-medios'].includes(key)?['borrador','revisar el borrador del ensayo']:null;
 return `<article class="class-page class-page--focused activity-page" data-activity="${key}">${header('Trabajo del curso',esc(a.title),esc(a.product))}<p class="activity-timing">${esc(timing)}</p>${a.preparationGuide?`<p>${esc(a.preparationGuide)} <a class="text-link" href="${activityHref(key)}" data-focus-field="${key}-preparation">Abrir mis notas de preparación</a>.</p>`:''}<a class="text-link" href="#activity-work" data-class-anchor="activity-work">Ir a mi trabajo</a><section class="activity-instructions" aria-labelledby="activity-prompt"><h2 id="activity-prompt">Qué vas a hacer</h2><p>${esc(a.prompt)}</p></section><details class="activity-support activity-progress"><summary>Cómo avanzar durante las sesiones</summary><p>Todos estos momentos forman parte del mismo trabajo. Continúa en este borrador y sus notas.</p><ol>${sessions.map(e=>`<li><strong>Semana ${e.week} · ${dayLabel(e.day)}.</strong> ${esc(activityAdvance(e))}</li>`).join('')}</ol></details><section id="activity-work" class="activity-work"><h2>Mi trabajo</h2><p class="save-line" data-save-status>${saveLabel()}</p>${workspace}</section>${delivery}<details class="activity-support activity-readings"><summary>Consultar las lecturas y la teoría</summary><p>Cada enlace abre los materiales de la sesión. Para seguir escribiendo, vuelve a esta misma actividad.</p><ul>${sessions.map(e=>`<li><a class="text-link" href="${classHref(e)}">Semana ${e.week} · ${dayLabel(e.day)} · ${esc(e.title)}</a></li>`).join('')}</ul></details>${companion}${milestone?`<p>Hito del ensayo: <a class="text-link" href="#proyecto" data-project-target="${milestone[0]}">${milestone[1]}</a>.</p>`:''}<p class="caption">La escritura se guarda en este navegador. La preparación y la revisión acompañan el mismo producto; no generan entregas adicionales.</p></article>`;
}
