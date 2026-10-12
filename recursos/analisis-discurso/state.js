export const STORAGE_KEY='ad-cuaderno-v1';
export const COURSE_ID='uce-analisis-discurso';
export const unitIds=[1,2,3,4,5,6];
export const sectionKeys=['apertura',...unitIds.map(id=>`ficha-${id}`),'proyecto'];
export const noteFields=['expectations','agreements','reflection','question','corpus','method','argument','revision','revisionReason','title','student','mediation','credits','defense','selfAssessment'];
export const evidenceFields=['id','resource','source','locator','observation','category','context','interpretation','alternative'];
export const relationFields=['id','from','to','evidence','mediator','medium'];
export const freshState=()=>({version:1,courseId:COURSE_ID,updatedAt:null,notes:{},evidence:[],relations:[],drafts:{},completed:[],modified:[],reviewedAt:{},lastLocation:'#inicio',delivery:{annexes:[],includeMap:false,includeAssessment:false}});
const object=value=>!!value&&typeof value==='object'&&!Array.isArray(value);
function text(value,max=60000){if(typeof value!=='string'||value.length>max)throw Error('Hay datos de texto no válidos o demasiado extensos.');return value;}
function array(input,key,max){if(input[key]===undefined)return [];if(!Array.isArray(input[key])||input[key].length>max)throw Error(`El apartado ${key} no tiene un formato o tamaño válido.`);return input[key];}
export function validateState(input){
 if(!object(input)||input.version!==1||input.courseId!==COURSE_ID)throw Error('El archivo pertenece a otro curso o no es un respaldo compatible de Análisis del discurso.');
 const clean=freshState();
 if(input.notes!==undefined&&!object(input.notes))throw Error('El apartado de notas no es válido.');
 for(const [key,note] of Object.entries(input.notes||{})){
  if(!sectionKeys.includes(key)||!object(note))throw Error('El respaldo contiene una sección desconocida o una ficha no válida.');
  clean.notes[key]={};for(const [field,value] of Object.entries(note)){if(!noteFields.includes(field))throw Error('El respaldo contiene un campo desconocido.');clean.notes[key][field]=text(value);}
 }
 const ids=new Set();
 for(const entry of array(input,'evidence',300)){
  if(!object(entry)||!unitIds.includes(entry.unit)||typeof entry.id!=='string'||!entry.id.trim()||ids.has(entry.id))throw Error('Una evidencia no es válida o tiene un identificador repetido.');
  if(entry.mode!==undefined&&!['cita','descripcion'].includes(entry.mode))throw Error('El tipo de registro de evidencia no es válido.');
  const item={unit:entry.unit,mode:entry.mode||'descripcion'};for(const field of evidenceFields)item[field]=text(entry[field]??'',10000);ids.add(item.id);clean.evidence.push(item);
 }
 const relationIds=new Set();
 for(const entry of array(input,'relations',100)){
  if(!object(entry)||!['propuesta','documentada'].includes(entry.type))throw Error('Una relación no es válida.');
  const item={type:entry.type};for(const field of relationFields)item[field]=text(entry[field]??'',10000);
  if(!item.from.trim()||!item.to.trim()||!item.id||relationIds.has(item.id))throw Error('Una relación carece de extremos o tiene un identificador repetido.');relationIds.add(item.id);clean.relations.push(item);
 }
 for(const key of ['completed','modified'])clean[key]=[...new Set(array(input,key,sectionKeys.length).filter(item=>sectionKeys.includes(item)))];
 clean.modified=clean.modified.filter(key=>clean.completed.includes(key));
 if(input.reviewedAt!==undefined&&!object(input.reviewedAt))throw Error('El registro de revisión no es válido.');
 for(const key of sectionKeys)if(typeof input.reviewedAt?.[key]==='string'&&Number.isFinite(Date.parse(input.reviewedAt[key])))clean.reviewedAt[key]=input.reviewedAt[key];
 if(input.delivery!==undefined){const d=input.delivery;if(!object(d)||!Array.isArray(d.annexes)||d.annexes.some(key=>!sectionKeys.includes(key)||key==='proyecto')||typeof d.includeMap!=='boolean'||typeof d.includeAssessment!=='boolean')throw Error('La selección de anexos no es válida.');clean.delivery={annexes:[...new Set(d.annexes)],includeMap:d.includeMap,includeAssessment:d.includeAssessment};}
 if(typeof input.lastLocation==='string'&&/^#(?:inicio|biblioteca|proyecto|cuaderno|glosario|unidad\/[1-6]\/(?:situar|observar|analizar|argumentar|revisar)|semana\/(?:[1-9]|1[0-6])\/[12])$/.test(input.lastLocation))clean.lastLocation=input.lastLocation;
 if(input.drafts!==undefined){if(!object(input.drafts))throw Error('Las preparaciones no son válidas.');for(const [key,draft] of Object.entries(input.drafts)){if(!['evidence','relation'].includes(key)||!object(draft)||!unitIds.includes(draft.unit)||!object(draft.data))throw Error('Una preparación no es válida.');const fields=key==='evidence'?[...evidenceFields,'mode']:[...relationFields,'type'];const data={};for(const [field,value] of Object.entries(draft.data)){if(!fields.includes(field))throw Error('Campo de preparación desconocido: '+field);data[field]=text(value,10000);}clean.drafts[key]={unit:draft.unit,data};}}
 if(typeof input.updatedAt==='string'&&Number.isFinite(Date.parse(input.updatedAt)))clean.updatedAt=input.updatedAt;
 return clean;
}
export function loadState(storage){let raw=null;try{raw=storage.getItem(STORAGE_KEY);if(raw===null)return {state:freshState(),raw,error:null};try{return {state:validateState(JSON.parse(raw)),raw,error:null};}catch{return {state:freshState(),raw,error:'invalid'};}}catch{return {state:freshState(),raw,error:'unavailable'};}}
export const hasWork=state=>Object.values(state.notes||{}).some(note=>Object.values(note).some(v=>v.trim()))||(state.evidence?.length||0)>0||(state.relations?.length||0)>0||Object.keys(state.drafts||{}).length>0;
export function workStatus(state,key){if(state.completed.includes(key))return state.modified.includes(key)?'Modificado después de revisar':'Revisión registrada';return Object.values(state.notes[key]||{}).some(v=>v.trim())||state.evidence.some(e=>key===`ficha-${e.unit}`)?'En construcción':'Sin empezar';}
export function setNote(state,key,field,value){if(!sectionKeys.includes(key)||!noteFields.includes(field))throw Error('Campo desconocido.');text(value);state.notes[key]??={};if(state.notes[key][field]===value)return;state.notes[key][field]=value;if(state.completed.includes(key)&&!state.modified.includes(key))state.modified.push(key);}
export function touchUnit(state,unit){const key=`ficha-${unit}`;if(state.completed.includes(key)&&!state.modified.includes(key))state.modified.push(key);}
export function registerReview(state,key){const note=state.notes[key]||{};const missing=['argument','revision','revisionReason'].filter(field=>!note[field]?.trim());if(missing.length)return {ok:false,missing};if(!state.completed.includes(key))state.completed.push(key);state.modified=state.modified.filter(k=>k!==key);state.reviewedAt[key]=new Date().toISOString();return {ok:true};}
