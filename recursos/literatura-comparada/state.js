import {taskNotes,courseModules,unitActivities} from './curriculum.js?v=lc-341113c05c62';
export const STORAGE_KEY='lc-cuaderno-v1';
export const fields=['hypothesis','evidenceA','locatorA','evidenceB','locatorB','difference','objection','argument','revision','revisionReason','translation','initialTranslation','title','question','corpus','method','mediation','credits','reflection','intro','student','deliveryDate','defense','selfAssessment'];
export const notebookKeys=['intro','1-A','2-A','2-B','3-A','3-B','3-traduccion','4-A','4-B','proyecto','2-oralitura','3-hermeneutica','4-intertexto','4-medios','ensayo','2-ampliacion',...Object.keys(taskNotes)];
export function freshState(){return {version:1,updatedAt:null,routes:{2:'A',3:'A',4:'A'},notes:{},relations:[],relationDraft:null,delivery:{annexes:[],includeMap:false,includeAssessment:false},completed:[],modified:[],reviewedAt:{},reviewedModules:[],lastLocation:'#introduccion'};}
export function validateState(input){
 if(!input||typeof input!=='object'||Array.isArray(input)||input.version!==1)throw new Error('El archivo no es un respaldo compatible del cuaderno.');
 const clean=freshState();
 if(input.notes!==undefined&&(typeof input.notes!=='object'||input.notes===null||Array.isArray(input.notes)))throw new Error('El apartado de notas no es válido.');
 for(const [key,note] of Object.entries(input.notes||{})){
  if(!notebookKeys.includes(key)||!note||typeof note!=='object'||Array.isArray(note))throw new Error('El respaldo contiene una sección desconocida.');
  clean.notes[key]={};
  for(const [field,value] of Object.entries(note)){if(!fields.includes(field)||typeof value!=='string'||value.length>60000)throw new Error('Hay campos de texto no válidos o demasiado extensos.');clean.notes[key][field]=value;}
 }
 for(const m of ['2','3','4'])if(['A','B'].includes(input.routes?.[m]))clean.routes[m]=input.routes[m];
 if(input.relations!==undefined&&!Array.isArray(input.relations))throw new Error('Las relaciones no tienen un formato válido.');
 if((input.relations||[]).length>100)throw new Error('El respaldo supera las cien relaciones.');
 for(const r of input.relations||[]){if(!r||!['propuesta','documentada'].includes(r.type)||['from','to','evidence'].some(k=>typeof r[k]!=='string'||r[k].length>10000))throw new Error('Una relación no es válida.');const relation={from:r.from,to:r.to,type:r.type,evidence:r.evidence};for(const f of ['mediator','date','medium'])if(r[f]!==undefined){if(typeof r[f]!=='string'||r[f].length>2000)throw new Error('Los datos de mediación no son válidos.');relation[f]=r[f];}clean.relations.push(relation);}
 if(input.relationDraft!=null){
  const d=input.relationDraft;
  if(!d||typeof d!=='object'||Array.isArray(d)||!['propuesta','documentada'].includes(d.type)||!(d.editing===null||Number.isInteger(d.editing)&&d.editing>=0&&d.editing<clean.relations.length))throw new Error('El borrador de relación no es válido.');
  const draft={type:d.type,editing:d.editing};
  for(const f of ['from','to','evidence','mediator','date','medium']){if(typeof d[f]!=='string'||d[f].length>(['from','to','evidence'].includes(f)?10000:2000))throw new Error('El borrador de relación contiene datos no válidos.');draft[f]=d[f];}
  clean.relationDraft=draft;
 }
 if(input.delivery!==undefined){const d=input.delivery;if(!d||typeof d!=='object'||Array.isArray(d)||!Array.isArray(d.annexes)||d.annexes.some(k=>!notebookKeys.includes(k)||archivedKeys.includes(k)||k==='ensayo')||typeof d.includeMap!=='boolean'||typeof d.includeAssessment!=='boolean')throw new Error('La selección de entrega no es válida.');clean.delivery={annexes:[...new Set(d.annexes)],includeMap:d.includeMap,includeAssessment:d.includeAssessment};}
 if(Array.isArray(input.completed))clean.completed=[...new Set(input.completed.filter(k=>notebookKeys.includes(k)))];
 if(Array.isArray(input.modified))clean.modified=[...new Set(input.modified.filter(k=>clean.completed.includes(k)))];
 if(Array.isArray(input.reviewedModules))clean.reviewedModules=[...new Set(input.reviewedModules.filter(n=>[1,2,3,4].includes(n)))];
 for(const key of notebookKeys)if(typeof input.reviewedAt?.[key]==='string'&&Number.isFinite(Date.parse(input.reviewedAt[key])))clean.reviewedAt[key]=input.reviewedAt[key];
 if(typeof input.lastLocation==='string'&&/^#(introduccion|proyecto|ampliacion|semana\/(?:[1-9]|1[0-6])(?:\/[12])?|modulo\/[1-4]\/(orientar|leer|comparar|traduccion|argumentar|revisar))$/.test(input.lastLocation))clean.lastLocation=input.lastLocation;
 if(typeof input.updatedAt==='string')clean.updatedAt=input.updatedAt;
 return clean;
}
export function loadState(storage){let raw;try{raw=storage.getItem(STORAGE_KEY);return {state:raw?validateState(JSON.parse(raw)):freshState(),raw,error:null};}catch{return {state:freshState(),raw,error:'No se pudo recuperar el cuaderno guardado. No se sobrescribirá automáticamente: exporta lo que escribas o importa un respaldo.'};}}
export function persistState(storage,state){try{const updatedAt=new Date().toISOString();storage.setItem(STORAGE_KEY,JSON.stringify({...state,updatedAt}));state.updatedAt=updatedAt;return true;}catch{return false;}}
export function writeNote(state,key,field,value){if(!notebookKeys.includes(key)||!fields.includes(field))throw new Error('Campo desconocido');if(state.notes[key]?.[field]===value)return;state.notes[key]??={};state.notes[key][field]=value;if(state.completed.includes(key)&&!state.modified.includes(key))state.modified.push(key);if(key==='3-traduccion')noteM3Complete(state);}
// M3 counts as reviewed once a route review and the translation comment coexist; only then can it later read «Modificado».
function noteM3Complete(state){state.reviewedModules??=[];if(state.notes['3-traduccion']?.translation?.trim()&&['3-hermeneutica'].some(k=>state.completed.includes(k)&&!state.modified.includes(k))&&!state.reviewedModules.includes(3))state.reviewedModules.push(3);}
export function markReviewed(state,key){if(!canReview(state,key))return false;if(!state.completed.includes(key))state.completed.push(key);state.modified=state.modified.filter(k=>k!==key);state.reviewedAt[key]=new Date().toISOString();noteM3Complete(state);return true;}
export function workStatus(state,key){if(state.modified.includes(key))return 'Modificado después de revisar';if(state.completed.includes(key))return 'Revisado';return Object.values(state.notes[key]||{}).some(v=>v.trim())?'En construcción':'Sin empezar';}
// Alternative routes keep separate notes; the module reflects every route, not only the one on the table.
// A module is «Modificado» only after it was complete (M3 also needs the translation comment).
export function routeKey(m,r='A'){return m.routes[r]?.noteKey||`${m.id}-${r}`;}
export function moduleKeys(m){return Object.keys(m.routes).map(r=>routeKey(m,r));}
export function activityProgress(state,m){
 const keys=[...new Set(unitActivities.filter(a=>a.module===m.id).map(a=>a.field.slice(0,a.field.lastIndexOf('-'))))];
 return {started:keys.filter(key=>Object.values(state.notes[key]||{}).some(v=>v.trim())).length,total:keys.length};
}
export const archivedKeys=['2-A','2-B','3-A','3-B','4-A','4-B','proyecto'];
export function noteDestination(key){if(key==='2-ampliacion')return {href:'#ampliacion',field:'2-ampliacion-argument'};for(const m of courseModules)for(const [r,t] of Object.entries(m.routes))if(routeKey(m,r)===key)return {href:`#modulo/${m.id}/comparar`,route:`${m.id}-${r}`};if(taskNotes[key])return {href:`#modulo/${taskNotes[key].module}/orientar`,field:key+'-argument'};if(key==='ensayo')return {href:'#proyecto'};if(key==='intro')return {href:'#introduccion'};if(key==='3-traduccion')return {href:'#modulo/3/traduccion'};return null;}
export function moduleWorkStatus(state,m){const statuses=moduleKeys(m).map(k=>workStatus(state,k)),translation=state.notes['3-traduccion']||{};const translationDone=m.id!==3||!!translation.translation?.trim(),translationStarted=m.id===3&&Object.values(translation).some(v=>v.trim());const reviewed=s=>s==='Revisado'||s==='Modificado después de revisar';if((m.both?statuses.every(reviewed):statuses.some(reviewed))&&translationDone){if(!statuses.includes('Modificado después de revisar'))return 'Revisado';return m.id!==3||state.reviewedModules?.includes(3)?'Modificado después de revisar':'En construcción';}if(statuses.some(s=>s!=='Sin empezar')||translationStarted)return 'En construcción';return 'Sin empezar';}
export function hasWork(state){return !!state.relationDraft&&['from','to','evidence','mediator','date','medium'].some(f=>state.relationDraft[f]?.trim())||state.relations.length>0||Object.values(state.notes).some(n=>Object.values(n).some(v=>v.trim()));}
export const reviewFields=key=>taskNotes[key]?['argument','revisionReason']:['argument','revision','revisionReason'];
export function canReview(state,key){const n=state.notes[key]||{};return reviewFields(key).every(f=>!!n[f]?.trim());}
export function wordCount(s=''){return s.trim()?s.trim().split(/\s+/u).length:0;}
// Dated names keep successive downloads apart in a shared Downloads folder.
export function fileName(kind,date=new Date()){const p=n=>String(n).padStart(2,'0');return `literatura-comparada-${kind}-${date.getFullYear()}-${p(date.getMonth()+1)}-${p(date.getDate())}-${p(date.getHours())}${p(date.getMinutes())}.${kind==='respaldo'?'json':'md'}`;}
const fieldNames={hypothesis:'Hipótesis inicial',evidenceA:'Evidencia A',locatorA:'Fuente y localizador A',evidenceB:'Evidencia B',locatorB:'Fuente y localizador B',difference:'Diferencia relevante',objection:'Objeción',argument:'Argumento',revision:'Hipótesis revisada',revisionReason:'Qué cambió y por qué',translation:'Comentario de traducción',initialTranslation:'Observación inicial de traducción',title:'Título',question:'Pregunta',corpus:'Corpus',method:'Decisiones del método',mediation:'Consigna didáctica',credits:'Créditos individuales',reflection:'Reflexión final',intro:'Primer problema comparativo',student:'Nombre del estudiante',deliveryDate:'Fecha de entrega',defense:'Guion de defensa oral',selfAssessment:'Autoevaluación con la rúbrica'};
const keyNames={intro:'Introducción','1-A':'M1 · Palacio / Machado','2-A':'M2 · Arguedas / Guamán Poma','2-B':'M2 · Sor Juana / Castellanos','3-A':'M3 · Relectura Palacio / Machado','3-B':'M3 · Borges / Cervantes','3-traduccion':'M3 · Un puerto, dos traducciones','4-A':'M4 · Guamán Poma / Falco','4-B':'M4 · Memoria y medios',proyecto:'Libro-invento'};
for(const k of ['2-A','2-B','3-A','3-B','4-A','4-B','proyecto'])keyNames[k]+=' · versión anterior';
Object.assign(keyNames,{'2-ampliacion':'Ampliación · Sor Juana / Castellanos','2-oralitura':'M2 · Guamán Poma / Chikangana','3-hermeneutica':'M3 · Carrington / Bierce','4-intertexto':'M4 · Cervantes / Borges','4-medios':'M4 · Memoria y medios (una crónica)',ensayo:'Ensayo final'},Object.fromEntries(Object.entries(taskNotes).map(([k,t])=>[k,t.title])));
export function fieldLabel(key,field){
 if(taskNotes[key])return ({argument:'Mi desarrollo',revisionReason:'Cambios y decisiones de revisión'})[field]||fieldNames[field];
 if(key==='ensayo')return ({argument:'Borrador del ensayo',title:'Título de mi ensayo final',credits:'Referencias y atribuciones'})[field]||fieldNames[field];
 return fieldNames[field];
}
export function exportMarkdown(state){
 let out='# Mi cuaderno de Literatura Comparada\n\nExportado: '+new Date().toLocaleDateString('es')+'\n\n';
 const section=(key,archived=false)=>{
  const entries=Object.entries(state.notes[key]||{}).filter(([,v])=>v.trim());if(!entries.length)return '';
  return '## '+keyNames[key]+' · '+(archived?'Archivada':workStatus(state,key))+'\n\n'+entries.map(([k,v])=>'### '+fieldLabel(key,k)+'\n\n'+v+'\n\n').join('');
 };
 for(const key of notebookKeys.filter(k=>!archivedKeys.includes(k)))out+=section(key);
 if(state.relationDraft)out+='## Relación pendiente de registrar\n\n'+state.relationDraft.from+' → '+state.relationDraft.to+'\n\n'+state.relationDraft.evidence+'\n\n';
 if(state.relations.length){out+='## Relaciones entre obras\n\n';state.relations.forEach(r=>out+=`### ${r.from} → ${r.to}\n\nRelación ${r.type}.\n\n${[r.mediator&&'Mediador: '+r.mediator,r.date&&'Fecha: '+r.date,r.medium&&'Medio: '+r.medium].filter(Boolean).join(' · ')}\n\n${r.evidence}\n\n`);}
 const archive=archivedKeys.map(key=>section(key,true)).join('');
 if(archive)out+='## Notas de la versión anterior · no cuentan para las entregas\n\n'+archive;
 return out;
}
export {fieldNames,keyNames};
