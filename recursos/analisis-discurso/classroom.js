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
    "focus": "Explica quién actúa y bajo qué condiciones.",
    "steps": [
      0,
      4
    ],
    "help": "Empieza el argumento de la ficha 2 con tus evidencias del reglamento."
  },
  "s5-e1": {
    "focus": "Añade dos inferencias al argumento anterior.",
    "steps": [
      1
    ],
    "help": "Para cada una: palabras, conocimiento que aportas y conclusión. Señala lo pendiente de comprobar."
  },
  "s5-e2": {
    "focus": "Contrasta tus inferencias y resume los artículos 1–3.",
    "steps": [
      2,
      5
    ],
    "help": "Añade el contraste y la síntesis al mismo borrador."
  },
  "s6-e1": {
    "focus": "Explica tu alternativa visual y qué compararás.",
    "steps": [
      3
    ],
    "help": "Conserva las palabras e identifica los cambios de diseño. La próxima clase comprobarás la lectura con un compañero."
  },
  "s7-e1": {
    "focus": "Propón un enfoque para responder tu pregunta.",
    "steps": [
      0,
      2,
      4
    ],
    "help": "Compara los tres enfoques y elige uno provisionalmente. Indica los datos que buscarás."
  },
  "s7-e2": {
    "focus": "Usa tres datos de contexto para revisar tu enfoque.",
    "steps": [
      1,
      3,
      5
    ],
    "help": "Remite a tus fuentes. Distingue publicación, circulación y recepción; marca los datos aún pendientes."
  },
  "s9-e2": {
    "focus": "Organiza las voces de tus tres segmentos.",
    "steps": [
      0,
      1,
      3
    ],
    "help": "Escribe una lista o tabla y compara los colectivos mencionados. Usa los localizadores guardados."
  },
  "s10-e1": {
    "focus": "Examina una atribución y otra lectura posible.",
    "steps": [
      2,
      4,
      5
    ],
    "help": "Continúa el mapa anterior. Justifica con marcas qué lectura sostienes o descartas."
  },
  "s11-e1": {
    "focus": "Explica el propósito y los destinatarios del primer documento.",
    "steps": [],
    "help": "Distingue género, secuencias y soporte con evidencias. Indica la segunda pieza que compararás o adaptarás."
  },
  "s11-e2": {
    "focus": "Compara las dos piezas y amplía tu explicación.",
    "steps": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "help": "Continúa el mismo borrador con la ruta elegida: documentos vinculados o adaptación propia."
  },
  "s13-e1": {
    "focus": "Organiza los segmentos y sus secuencias.",
    "steps": [
      0,
      1
    ],
    "help": "Escribe una lista o tabla con localizadores, marcas y función."
  },
  "s13-e2": {
    "focus": "Explica las transiciones entre tus secuencias.",
    "steps": [
      0,
      1
    ],
    "help": "Amplía la misma tabla. Distingue explicar una causa de justificar una norma o un juicio moral."
  },
  "s14-e1": {
    "focus": "Añade una inferencia y una objeción al argumento.",
    "steps": [
      2,
      3
    ],
    "help": "Explica qué dato o excepción limitaría la conclusión."
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
    "Este nombre aparecerá en la portada del PDF.",
    2
  ],
  "question": [
    "Pregunta de investigación",
    "Escribe una pregunta que puedas responder con 2–4 documentos o episodios. Plantea el problema sin asumir intenciones.",
    3
  ],
  "corpus": [
    "Corpus y criterios de selección",
    "Identifica 2–4 documentos o episodios: autor, versión, ubicación y recorte. Justifica su selección; de este conjunto elegirás 6–10 segmentos en total.",
    5
  ],
  "method": [
    "Método y contexto documentado",
    "Justifica enfoque, unidad de análisis y categorías. Añade los datos de contexto con fuente y localizador; marca lo pendiente.",
    6
  ],
  "argument": [
    "Desarrollo del análisis",
    "Responde tu pregunta con evidencias, conceptos y contexto. Conserva localizadores e incluye otra explicación posible, una objeción y un límite.",
    12
  ],
  "credits": [
    "Referencias y atribuciones",
    "Anota autor, título, fecha, versión y enlace de las fuentes usadas. Atribuye cada capítulo a su autor e identifica tus adaptaciones.",
    5
  ],
  "revision": [
    "Conclusión revisada y límites",
    "Responde tu pregunta con el análisis realizado. Explica qué puedes afirmar y hasta dónde puedes generalizar.",
    5
  ],
  "revisionReason": [
    "Registro de cambios",
    "Indica qué afirmación mantuviste o cambiaste, qué evidencia u objeción motivó la decisión y cómo quedó.",
    4
  ],
  "mediation": [
    "Actividad de enseñanza",
    "Prepara una actividad de 5 minutos: destinatarios, problema, segmento, materiales, 2–3 pasos, resultado y criterio de revisión. Tras probarla en tríos, anota dificultad y ajuste.",
    6
  ],
  "defense": [
    "Guion de defensa",
    "Prepara pregunta, corpus, enfoque, evidencia, objeción y límite. Después, registra la pregunta recibida y tu respuesta; este guion queda fuera del cuerpo del PDF.",
    5
  ],
  "selfAssessment": [
    "Autoevaluación",
    "Valora cada dimensión de la rúbrica con ejemplos de tu informe. Señala un logro y una mejora pendiente; puedes incluir esta autoevaluación al preparar el PDF.",
    5
  ]
};

// Preparation remains in the class, with selected paragraphs of the existing guide.
export const preparationLessons={
 's2-e1':[0,2,3],'s2-e2':[1,3],'s3-e1':[2,4],'s3-e2':[4],
 's4-e1':[0],'s4-e2':[0,4],'s5-e1':[1],'s5-e2':[1,2],'s6-e1':[3],'s6-e2':[3],
 's7-e1':[1,2],'s7-e2':[0,2],'s8-e1':[3,4],'s8-e2':[],
 's9-e1':[0,1],'s9-e2':[1,2],'s10-e1':[2,3],'s10-e2':[4],
 's11-e1':[0,1,2],'s11-e2':[3],'s12-e1':[3,4],'s12-e2':[4],
 's13-e1':[0,2],'s13-e2':[0,2],'s14-e1':[1],'s14-e2':[3],
 's15-e1':[4],'s15-e2':[4],'s16-e1':[],'s16-e2':[]
};
