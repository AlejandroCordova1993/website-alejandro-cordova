import {resourceById,resourceHref} from './resources.js';
import {esc} from './export.js';

// Precise support for categories not covered by the manual passages. Consultation is optional;
// these references never join the activity's document list or the notebook's saved schema.
const ideology=[
 {resource:'van-dijk-ideologia',selection:'páginas 5–6 del archivo: creencias compartidas por grupos y posibilidad de ideologías de resistencia. Consulta docente opcional en inglés, como apoyo de esta síntesis en español.'},
 {resource:'fairclough',selection:'Ideología y hegemonía: impresas 86–91 / páginas 92–97 del ejemplar consultado. Consulta docente.'}
];
export const lessonReferences={
 1:{5:[{resource:'caldiz',selection:'Las páginas corresponden al contador del archivo, con la portada como primera página.',pages:[[13,'Abrir el ejemplo 18 en la página 13'],[8,'Abrir los ejemplos 1 y 2 en la página 8']]}]},
 3:{2:ideology},
 6:{3:[{resource:'bolivar',selection:'Páginas impresas 99–100 / páginas 7–8 del archivo: evaluación, relaciones entre intervenciones y escalas del cambio. Síntesis aplicada al diálogo del curso.'}]}
};
export const classReferences={'s7-e2':ideology};
export const conceptReferences={
 'discurso-referido':[{resource:'gallucci',selection:'Representación y recontextualización: impresas 201–202 / páginas 2–3 del archivo; cita directa, indirecta y literalidad histórica: impresas 206–207 / páginas 7–8 del archivo. Consulta complementaria.'}],
 'nivel-tonal':[{resource:'caldiz',selection:'El ejemplo 18 compara la altura de dos grupos sucesivos de una misma voz.',pages:[[13,'Ver el ejemplo 18']]}],
 topos:[{resource:'wodak',selection:'Ruth Wodak, «El enfoque histórico del discurso», en Wodak y Meyer (comps., 2003), impresa 115 / página 59 del archivo. Definición de topos como regla de conexión; consulta docente.'}]
};
export function referenceNotes(references=[]){
 return references.map(({resource,selection,pages})=>{
  const r=resourceById[resource],href=resourceHref(r);
  let links=[];
  if(href&&pages?.length&&r.format==='pdf'){
   links=pages.map(([page,label])=>[href.replace(/#.*$/,'')+`#page=${page}`,label]);
  }else if(href){
   links=[[href,'Consultar selección']];
  }
  const anchors=links.map(([url,label])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}<span class="sr-only">: ${esc(r.title)} (otra pestaña)</span></a>`).join(' · ');
  return `<p class="caption manual-source">Apoyo: ${esc(r.author)} (${esc(r.year)}). <cite>${esc(r.title)}</cite>. ${esc(selection)}${anchors?` ${anchors}`:''}</p>`;
 }).join('');
}
