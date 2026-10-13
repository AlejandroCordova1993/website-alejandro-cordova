import {sessions} from './encounters.js';
import {resourceById,resourceHref} from './resources.js';

// Teaching references and documents of analysis have separate roles.
export const unitCorpusIds={1:['drexler'],2:['becas'],3:['becas'],4:['becas','menchu'],5:['becas'],6:['becas']};
export const unitSequence=unit=>sessions.filter(s=>s.unit===unit&&!(unit===1&&s.week===1)).sort((a,b)=>a.week-b.week||a.encounter-b.encounter);
export function newEvidenceSource(unit,evidence){const last=evidence.findLast(e=>e.unit===unit&&(!e.resource||unitCorpusIds[unit].includes(e.resource)));return last?{resource:last.resource||'',source:last.source}:null;}
export function evidenceSources(unit,entry){
 const list=unitCorpusIds[unit].map(id=>resourceById[id]).filter(r=>r.kind==='corpus'&&resourceHref(r));
 if(entry?.resource&&!list.some(r=>r.id===entry.resource))list.push({id:entry.resource,title:resourceById[entry.resource]?.title||'Documento registrado',legacy:true});
 return list;
}
export function sessionMaterials(s){
 if(s.week===1)return {corpus:['agencia'],readings:[],note:''};
 if(s.week===8&&s.encounter===2)return {corpus:[],readings:[],note:'El caso nuevo lo proporciona el docente. La ficha 3 y el método del expediente son preparación; el reglamento no sustituye el caso de evaluación.'};
 if(s.week>=15)return {corpus:[],readings:[`guia-${s.unit}`,...(resourceById[s.resource].kind==='teoria'?[s.resource]:[])],note:'Trabaja con los documentos y segmentos de tu expediente. No se asigna otro corpus para el cierre.'};
 const reference=resourceById[s.resource];
 return {corpus:[unitCorpusIds[s.unit][0]],readings:[`guia-${s.unit}`,...(reference.kind==='teoria'?[s.resource]:[])],note:s.unit===1?'La misma charla se usa desde la primera clase oral; después retomas su tramo y tus registros.':s.unit===5?'La segunda pieza puede ser un documento vinculado o tu adaptación propia, según la ruta elegida.':'Puedes retomar tu corpus propio siguiendo las consignas de la ficha. Las fuentes teóricas sirven para analizarlo.'};
}
