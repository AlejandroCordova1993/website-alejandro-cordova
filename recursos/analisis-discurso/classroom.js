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
 's4-e2':{focus:'Hoy explica quién puede hacer qué y bajo qué condiciones. Empieza el argumento de la ficha 2 con las evidencias que acabas de guardar.',steps:[0,4],help:'Relaciona participante, acción y condición con las palabras del reglamento. Distingue lo que dispone la norma de su cumplimiento.'},
 's5-e1':{focus:'Hoy añade dos inferencias debajo de tu explicación anterior. Conserva el texto que ya escribiste.',steps:[1],help:'Para cada inferencia, anota las palabras del texto, el conocimiento que aportas y la conclusión. Señala qué información falta comprobar.'},
 's5-e2':{focus:'Hoy contrasta las inferencias que ya escribiste y añade una síntesis del tema de los artículos 1–3.',steps:[2,5],help:'Añade el contraste y la síntesis al mismo borrador. Conserva la explicación anterior y señala qué datos apoyan o limitan cada inferencia.'},
 's6-e1':{focus:'Hoy prepara una disposición visual alternativa y explica qué quieres comparar con el original. Conserva las mismas palabras.',steps:[3],help:'Identifica la alternativa como elaboración propia. Describe sus cambios de tamaño, posición o agrupación y la comparación que propones; los resultados se revisan en la próxima clase.'},
 's7-e1':{focus:'Hoy propón un enfoque para tu pregunta y justifica qué observarías con él. Los datos contextuales se comprueban en la próxima clase.',steps:[0,2,4],help:'Compara las preguntas de los tres enfoques, elige provisionalmente uno y señala qué datos necesitas. Todavía no des esos datos por comprobados.'},
 's7-e2':{focus:'Hoy amplía tu argumento con los tres datos contextuales comprobados. Explica qué aporta cada dato a tu pregunta y a la elección del enfoque.',steps:[1,3,5],help:'Remite a las evidencias guardadas, distingue publicación, circulación y recepción, y marca lo que sigue pendiente de comprobar.'},
 's9-e2':{focus:'Hoy organiza las voces de tus tres segmentos en una lista o tabla y explica una semejanza o diferencia entre los colectivos mencionados.',steps:[0,1,3],help:'Usa los localizadores guardados. Distingue la voz que habla de las palabras que atribuye a otra persona. No copies otra vez los fragmentos.'},
 's10-e1':{focus:'Hoy amplía el mismo argumento examinando una atribución y otra explicación posible.',steps:[2,4,5],help:'Señala las marcas que apoyan la atribución y sus límites. Conserva el mapa anterior; no necesitas buscar otro fragmento ni inventar ambigüedad.'},
 's11-e1':{focus:'Hoy empieza con un documento: explica su propósito, sus destinatarios, su género y las secuencias que contiene. Prepara la segunda pieza para la próxima clase.',steps:[],help:'Apoya la distinción entre género, secuencia y soporte en tus evidencias. Anota qué otra pieza compararás o qué reformulación propia prepararás.'},
 's11-e2':{focus:'Hoy compara las dos piezas de la ruta elegida y amplía la explicación que ya comenzaste.',steps:[0,1,2,3,4,5],help:'Realiza una sola ruta: documentos relacionados o adaptación propia. Explica qué cambia y qué se conserva; el mapa es un apoyo opcional de esta comparación.'},
 's13-e1':{focus:'Hoy inicia una matriz de segmentos y localizadores. Explica qué secuencias aparecen y cómo se articulan.',steps:[0,1],help:'Escribe una lista o tabla con segmento, localizador, secuencia, marcas y función. La reconstrucción de inferencias se trabaja después.'},
 's13-e2':{focus:'Hoy amplía la matriz con una explicación de las transiciones entre secuencias.',steps:[0,1],help:'Retoma los mismos segmentos y explica el paso entre ellos. Distingue una explicación causal de una justificación normativa o moral.'},
 's14-e1':{focus:'Hoy añade la reconstrucción de una inferencia y una objeción al argumento que ya escribiste.',steps:[2,3],help:'Escribe premisa, conclusión y la regla que permite pasar de una a otra. Explica qué dato o excepción obligaría a limitar la conclusión.'}
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
 title:['Título del expediente','Nombra el problema y el corpus que estudias.',2],
 student:['Nombre para la entrega','Se incluirá en la portada del PDF.',2],
 question:['Pregunta de investigación','Delimita una relación que puedas investigar en 2–4 documentos o episodios. Identifica el problema sin dar por demostrada una intención.',3],
 corpus:['Corpus y criterios de selección','Identifica los 2–4 documentos o episodios, sus autores, versiones, ubicaciones y recortes. Explica por qué responden a tu pregunta. Los 6–10 segmentos se seleccionan en total de ese conjunto.',5],
 method:['Método y contexto documentado','Justifica el enfoque, la unidad de análisis y las categorías. Añade los datos contextuales pertinentes con fuente y localizador; distingue lo comprobado de lo pendiente.',6],
 argument:['Desarrollo del análisis','Relaciona observaciones, categorías y contexto con tu pregunta. Conserva los localizadores y considera una explicación alternativa, una objeción y un límite. Amplía el mismo borrador según el avance indicado en esta clase.',12],
 credits:['Referencias y atribuciones','Identifica solo las fuentes utilizadas: autor, título, fecha, versión y enlace cuando exista. Atribuye los capítulos a sus autores e identifica las adaptaciones propias.',5],
 revision:['Conclusión revisada y límites','Responde a tu pregunta con el análisis realizado. Explica qué permite afirmar el corpus y qué no permite generalizar.',5],
 revisionReason:['Registro de cambios','Explica qué afirmación cambiaste o mantuviste, qué evidencia u objeción motivó esa decisión y cómo quedó.',4],
 mediation:['Actividad de enseñanza','Escribe la microconsigna de 5 minutos: destinatarios, problema, segmento y materiales, dos o tres pasos, resultado y criterio de revisión. Después de probarla en tríos, anota la dificultad y el ajuste realizado.',6],
 defense:['Guion de defensa','Prepara pregunta, corpus, enfoque, una evidencia decisiva, objeción y límite. Tras tu turno, registra la pregunta recibida y tu respuesta. El guion queda fuera del cuerpo del PDF.',5],
 selfAssessment:['Autoevaluación','Comenta las dimensiones de la rúbrica con ejemplos del informe. Identifica un logro y una mejora pendiente. Se incluye en el PDF solo si la seleccionas.',5]
};

// References to former workspaces now name the fields on this same page.
export function classInstruction(text){
 return text
  .replaceAll('«Registrar evidencias»','«Evidencias»')
  .replaceAll('Añade esa observación al registro o al argumento;', 'Guarda esa observación en «Evidencias» y explica su posible función en «Mi argumento»;')
  .replaceAll('explica qué aporta la categoría a su interpretación.', 'explica en «Mi argumento» cómo ayuda ese concepto a interpretar la marca.')
  .replaceAll('«Interpretación que permite sostener»','«Mi argumento»')
  .replaceAll('«Otra explicación o dato que falta»','«Mi argumento»')
  .replaceAll('Inicia la ficha 6 con una matriz de segmentos y localizadores.','Inicia la ficha 6: escribe en «Mi argumento» una matriz de segmentos y localizadores.')
  .replaceAll('«Escribir argumento»','«Mi argumento»')
  .replaceAll('En «Mi argumento», anota una pregunta sobre ese episodio.','En «Pregunta de la ficha», anota una pregunta sobre ese episodio.')
  .replaceAll('«Revisar ficha»','«Interpretación revisada»')
  .replaceAll('«En qué trabajo se integra esta clase»','«Tu trabajo»')
  .replaceAll('«Material central del encuentro»','«Documento de análisis»')
  .replaceAll('del encuentro anterior','de la clase anterior')
  .replaceAll('en el siguiente encuentro','en la siguiente clase')
  .replaceAll('en el encuentro 2','en la clase 2')
  .replaceAll('«Guía y lecturas de apoyo»','«Lectura para preparar esta clase»')
  .replaceAll('Las explicaciones están en «Fundamentos».','Las explicaciones están en «Teoría», arriba.')
  .replaceAll('en «Fundamentos»','en el recordatorio de autores de «Teoría»')
  .replaceAll('en la guía de la unidad 1','en la lectura integrada de «Teoría»')
  .replaceAll('en el registro indicado bajo «Tu trabajo»','en «Tu trabajo», debajo de estas instrucciones');
}

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
