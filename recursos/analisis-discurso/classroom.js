import {sessions} from './encounters.js';
import {sessionWork} from './learning-path.js';
import {parseRoute} from './navigation.js';
import {hasWork} from './state.js';

export const classHref=s=>`#semana/${s.week}/${s.encounter}`;
export function resumeClass(state){
 if(!hasWork(state))return sessions[0];
 const r=parseRoute(state.lastLocation);
 if(r.page==='semana')return sessions.find(s=>s.week===r.week&&s.encounter===r.encounter)||sessions[0];
 if(r.unit)return sessions.find(s=>s.unit===r.unit&&(r.unit!==1||s.week===2))||sessions[0];
 if(r.page==='proyecto')return sessions.find(s=>s.week===15)||sessions[0];
 return sessions[0];
}

// These are the existing project fields needed by the actual class agenda.
const projectByClass={
 's4-e1':['question','corpus'],'s4-e2':['question','corpus'],
 's8-e1':['method'],
 's12-e1':['argument','credits'],'s12-e2':['argument','credits'],
 's14-e1':['argument'],'s14-e2':['argument'],
 's15-e1':['revision','revisionReason','mediation','defense'],
 's15-e2':['mediation','defense'],
 's16-e1':['defense','revisionReason'],
 's16-e2':['title','student','credits','revision','revisionReason','defense','selfAssessment']
};
// Explicit class stages: visibility follows the task, never a phrase match in its instructions.
const argumentLater={
 's2-e1':'En la próxima clase, «Palabras, voz y cuerpo», escribirás la primera explicación con esta transcripción.',
 's4-e1':'En la próxima clase, «Norma y representación», explicarás las evidencias del reglamento en esta misma ficha.',
 's9-e1':'En la próxima clase, «Dar voz y asumir responsabilidad», explicarás las voces y los colectivos de estos segmentos.'
};
export const classWriting={
  "s4-e2": {
    "focus": "Explica quién actúa y qué condición exige el reglamento.",
    "help": "Empieza con la frase que guardaste."
  },
  "s5-e1": {
    "focus": "Añade una inferencia al argumento.",
    "help": "Relaciona la frase, lo que sabe el lector y lo que concluye."
  },
  "s5-e2": {
    "focus": "Sitúa tu inferencia en el conjunto del reglamento.",
    "help": "Amplía el mismo párrafo con lo que comprobaste."
  },
  "s6-e1": {
    "focus": "Prepara la versión visual del fragmento.",
    "help": "Mantén las mismas palabras y explica qué esperas que el lector vea primero."
  },
  "s7-e1": {
    "focus": "Propón un enfoque que ayude a responder tu pregunta.",
    "help": "Indica qué marca observarás y cita la lectura."
  },
  "s7-e2": {
    "focus": "Explica qué aclara tu dato de contexto.",
    "help": "Remite al dato y a su fuente."
  },
  "s9-e2": {
    "focus": "Explica quién sostiene cada idea.",
    "help": "Señala las palabras que apoyan tu atribución."
  },
  "s10-e1": {
    "focus": "Explica qué hace esa voz en el texto.",
    "help": "Retoma la atribución y su localizador."
  },
  "s11-e1": {
    "focus": "Explica para quién y para qué se escribió la primera pieza.",
    "help": "Usa un tramo que ya conozcas."
  },
  "s11-e2": {
    "focus": "Compara lo que entiende el lector de cada pieza.",
    "help": "Muestra una decisión de redacción, organización o presentación."
  },
  "s13-e1": {
    "focus": "Explica qué hace cada tramo.",
    "help": "Usa los localizadores que ya guardaste."
  },
  "s13-e2": {
    "focus": "Explica cómo se conectan los tramos.",
    "help": "Amplía tu explicación con el contraste que hiciste en clase."
  },
  "s14-e1": {
    "focus": "Reconstruye un razonamiento y formula una objeción.",
    "help": "Explica qué dato o excepción cambiaría la conclusión."
  }
};
export function classWork(s){
 const work=sessionWork(s);
 return {...work,diagnosis:s.week===1,assessment:work.step==='assessment',projectFields:projectByClass[s.id]||[],review:work.step==='revisar',evidence:!['diagnosis','project','assessment'].includes(work.step),argument:!argumentLater[s.id],argumentNext:argumentLater[s.id]||'',relations:['s11-e2','s12-e2'].includes(s.id)};
}
export function classEvidenceOptions(s){
 const work=classWork(s);
 return {argument:work.argument,nextArgument:work.argumentNext,defaultMode:s.id==='s2-e1'?'cita':'descripcion'};
}

export const projectInputs={
  "title": [
    "Título del expediente",
    "Nombra el problema y el corpus que estudias.",
    2
  ],
  "student": [
    "Nombre para la entrega",
    "Este nombre aparece en la portada del PDF.",
    2
  ],
  "question": [
    "Pregunta de investigación",
    "Retoma una pregunta de tus fichas si encaja con tu tema. Delimítala para poder responderla con 2–4 documentos o episodios.",
    3
  ],
  "corpus": [
    "Corpus y criterios de selección",
    "Identifica cada pieza con autor, título, versión y ubicación. Explica por qué la elegiste. Selecciona 6–10 segmentos en total.",
    5
  ],
  "method": [
    "Método y contexto documentado",
    "Retoma la decisión de la ficha 3. Explica qué herramienta elegiste, qué tramos y marcas vas a observar y qué contexto necesitas. Cita la lectura y la fuente del dato.",
    6
  ],
  "argument": [
    "Desarrollo del análisis",
    "Usa las evidencias guardadas para explicar qué hace el discurso en esa situación. Agrupa los segmentos que apoyan la misma idea. Incluye una objeción y explica hasta dónde llega tu respuesta.",
    12
  ],
  "credits": [
    "Referencias y atribuciones",
    "Anota autor, título, fecha, versión y enlace de las fuentes usadas. Atribuye cada capítulo a su autor e identifica tus adaptaciones.",
    5
  ],
  "revision": [
    "Conclusión revisada y límites",
    "Responde tu pregunta con los hallazgos y delimita qué puedes afirmar sobre el corpus.",
    5
  ],
  "revisionReason": [
    "Registro de cambios",
    "Explica qué mantuviste o cambiaste y qué evidencia u objeción motivó tu decisión.",
    4
  ],
  "mediation": [
    "Actividad de enseñanza",
    "Prepara una consigna de 5 minutos con un fragmento que ya explicaste. Si tu informe analiza el aviso, puedes mostrarlo junto al original y preguntar qué acción entiende el lector. Después de probar la consigna en el trío, anota quién hizo cada papel, qué aportó y qué ajustaste.",
    6
  ],
  "defense": [
    "Guion de defensa",
    "Prepara una decisión del análisis y la evidencia que la sostiene. Después de tu turno, anota la pregunta y tu respuesta en el mismo guion.",
    5
  ],
  "selfAssessment": [
    "Autoevaluación",
    "Usa la rúbrica para señalar un logro y una mejora pendiente con ejemplos del informe. Puedes incluir la autoevaluación en el PDF.",
    5
  ]
};

// Preparation remains in the class, with selected paragraphs of the existing guide.
export const preparationLessons={
 's2-e1':[0,2,3],'s2-e2':[1,3],'s3-e1':[5],'s3-e2':[4],
 's4-e1':[0],'s4-e2':[0,4],'s5-e1':[1],'s5-e2':[1,2],'s6-e1':[3],'s6-e2':[3],
 's7-e1':[0,1,2],'s7-e2':[0,2],'s8-e1':[3,4],'s8-e2':[],
 's9-e1':[0,1],'s9-e2':[1,2],'s10-e1':[2,3],'s10-e2':[4],
 's11-e1':[0,1,2],'s11-e2':[3],'s12-e1':[3,4],'s12-e2':[4],
 's13-e1':[0],'s13-e2':[2],'s14-e1':[1],'s14-e2':[3],
 's15-e1':[4],'s15-e2':[4],'s16-e1':[],'s16-e2':[]
};

// Assigned readings and requested reviews open independently of the preparation wording.
// Other readings remain available for consultation through the same disclosure.
export const preparationReadingOpen=new Set([
 's2-e1','s2-e2','s3-e1','s3-e2','s4-e1','s5-e1','s5-e2','s6-e1',
 's7-e1','s7-e2','s8-e1','s9-e1','s9-e2','s10-e1','s11-e1','s12-e1',
 's13-e1','s13-e2','s14-e1','s14-e2'
]);
