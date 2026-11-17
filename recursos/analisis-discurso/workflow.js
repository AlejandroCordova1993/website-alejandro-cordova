import {sessions} from './encounters.js';
import {resourceById,resourceHref} from './resources.js';

// Teaching references and documents of analysis have separate roles.
export const unitCorpusIds={1:['drexler'],2:['becas'],3:['becas'],4:['menchu','marquez','becas'],5:['becas'],6:['becas']};
export const unitSequence=unit=>sessions.filter(s=>s.unit===unit&&!(unit===1&&s.week===1)).sort((a,b)=>a.week-b.week||a.encounter-b.encounter);
export function newEvidenceSource(unit,evidence){
 if(unit===3)return null;
 const last=evidence.findLast(e=>e.unit===unit&&(!e.resource||unitCorpusIds[unit].includes(e.resource)));
 return last?{resource:last.resource||'',source:last.source}:null;
}
export function evidenceSources(unit,entry){
 const list=unitCorpusIds[unit].map(id=>resourceById[id]).filter(r=>r.kind==='corpus'&&resourceHref(r));
 if(entry?.resource&&!list.some(r=>r.id===entry.resource))list.push({id:entry.resource,title:resourceById[entry.resource]?.title||'Documento registrado',legacy:true});
 return list;
}
export function sessionMaterials(s){
 if(s.week===1)return {corpus:['agencia'],readings:['guia-fundamentos'],note:'La guía se explica en clase. Los originales de los autores son ampliación opcional; el trabajo se conserva en el mismo diagnóstico.'};
 if(s.unit===2)return {corpus:[],readings:['guia-2',...(s.week===4?['unesco-ia','becas']:[])],note:s.week===4?'Escribe tu carta y usa la selección de UNESCO para apoyar una razón. El reglamento es el ejemplo explicado en «Teoría».':'Trabaja con tu carta, la del compañero y sus versiones. Las fuentes de la unidad siguen disponibles en la biblioteca.'};
 if(s.unit===3&&s.id!=='s8-e2')return {corpus:[],readings:['guia-3',...(s.id==='s7-e1'?['pardo']:[])],note:'Recupera el borrador y la carta final de la unidad 2, los comentarios recibidos y tus decisiones de revisión. Si ya elegiste otro corpus, continúa con sus documentos.'};
 if(s.unit===4)return {corpus:['menchu','marquez'],readings:['guia-4'],note:'Un solo contraste entre dos textos en español: tres segmentos en total, al menos uno de cada texto. Continúa la misma ficha 4 durante las cuatro clases. Si ya la empezaste con otro corpus, conserva sus evidencias y usa este contraste para revisar una atribución, sin rehacer la ficha.'};
 if(s.week===8&&s.encounter===2)return {corpus:[],readings:[],note:'El caso nuevo lo proporciona el docente. La ficha 3 y el método del expediente son preparación; el reglamento no sustituye el caso de evaluación.'};
 if(s.week>=15)return {corpus:[],readings:[`guia-${s.unit}`,...(resourceById[s.resource].kind==='teoria'?[s.resource]:[])],note:'Trabaja con los documentos y segmentos de tu expediente. No se asigna otro corpus para el cierre.'};
 const reference=resourceById[s.resource];
 if(s.unit===5)return {corpus:[],readings:['guia-5',...(reference.kind==='teoria'?[s.resource]:[])],note:'Retoma tu carta y su propuesta para crear el aviso. Si continúas un análisis anterior del reglamento o de otros documentos vinculados, conserva esas piezas y sus referencias.'};
 if(s.unit===6)return {corpus:[],readings:['guia-6',...(reference.kind==='teoria'?[s.resource]:[])],note:'Continúa con el texto elegido de tus fichas o del expediente y sus registros. El reglamento sigue disponible en la biblioteca si ya trabajas con él.'};
 return {corpus:[unitCorpusIds[s.unit][0]],readings:[`guia-${s.unit}`,...(reference.kind==='teoria'?[s.resource]:[])],note:s.unit===1?'La misma charla se usa desde la primera clase oral; después retomas su tramo y tus registros.':'Puedes retomar tu corpus propio siguiendo las consignas de la ficha. Las fuentes teóricas sirven para analizarlo.'};
}
