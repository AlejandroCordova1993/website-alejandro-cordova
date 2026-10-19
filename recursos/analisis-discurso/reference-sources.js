import {resourceById,resourceHref} from './resources.js';
import {esc} from './export.js';

// Precise support for categories not covered by the manual passages. Consultation is optional;
// these references never join the activity's document list or the notebook's saved schema.
const ideology=[
 {resource:'van-dijk-ideologia',selection:'PDF 5–6: creencias compartidas por grupos y posibilidad de ideologías de resistencia. Consulta docente opcional en inglés, como apoyo de esta síntesis en español.'},
 {resource:'fairclough',selection:'Ideología y hegemonía: impresas 86–91 / PDF personal 92–97 del ejemplar consultado. Consulta docente.'}
];
export const lessonReferences={3:{2:ideology}};
export const classReferences={'s7-e2':ideology};
export const conceptReferences={
 'discurso-referido':[{resource:'gallucci',selection:'Representación y recontextualización: impresas 201–202 / PDF 2–3; cita directa, indirecta y literalidad histórica: impresas 206–207 / PDF 7–8. Consulta complementaria.'}],
 topos:[{resource:'wodak',selection:'Ruth Wodak, «El enfoque histórico del discurso», en Wodak y Meyer (comps., 2003), impresa 115 / PDF personal 59. Definición de topos como regla de conexión; consulta docente.'}]
};
export function referenceNotes(references=[]){
 return references.map(({resource,selection})=>{
  const r=resourceById[resource],href=resourceHref(r);
  return `<p class="caption manual-source">Apoyo: ${esc(r.author)} (${esc(r.year)}). <cite>${esc(r.title)}</cite>. ${esc(selection)}${href?` <a href="${esc(href)}" target="_blank" rel="noopener noreferrer">Consultar selección<span class="sr-only">: ${esc(r.title)} (otra pestaña)</span></a>`:''}</p>`;
 }).join('');
}
