import {unitForWeek} from './course.js';
import {projectSections} from './navigation.js';
export const fichaPhaseLinks={
 's4-e1':['borrador','Empezar mi carta'],
 's4-e2':['borrador','Continuar mi borrador'],
 's5-e1':['lectura','Comentar la carta del compañero'],
 's5-e2':['lectura','Completar mis comentarios'],
 's6-e1':['revision','Revisar mi carta'],
 's6-e2':['revision','Completar la versión final'],
 's7-e1':['pasajes','Localizar los dos pasajes'],
 's7-e2':['contexto','Explicar los pasajes con su contexto'],
 's8-e1':['revision','Revisar mi explicación'],
 's9-e1':['pasajes','Elegir las tres expresiones'],
 's9-e2':['argumento','Comenzar mi argumento'],
 's10-e1':['argumento','Continuar mi argumento'],
 's10-e2':['revision','Revisar mi frase'],
 's11-e1':['carta','Localizar la primera pieza'],
 's11-e2':['aviso','Trabajar con la segunda pieza'],
 's12-e2':['revision','Revisar la comparación']
};

export const ficha6Phases=['tramos','transicion','argumento','revision'];
export const unit6Links={
 's13-e1':['#ficha/6/tramos','Elegir mis dos tramos'],
 's13-e2':['#ficha/6/transicion','Explicar cómo se conectan'],
 's14-e1':['#ficha/6/argumento','Justificar mi lectura'],
 's14-e2':['#ficha/6/revision','Examinar la respuesta y revisar'],
 's15-e1':['#proyecto/conclusion','Abrir conclusión y límites'],
 's15-e2':['#proyecto/ensenanza','Abrir mi actividad de enseñanza'],
 's16-e1':['#proyecto/defensa','Abrir mi guion de defensa'],
 's16-e2':['#proyecto/autoevaluacion','Abrir la autoevaluación']
};

// Each week advances an existing record; it does not create another diagnosis.
export const weeklyPath=[
 {title:'Fundamentos del discurso y diagnóstico',steps:['diagnosis','diagnosis'],advance:'Guardar la lectura inicial y su revisión en el diagnóstico del cuaderno. No tiene calificación.'},
 {title:'Oralidad: transcripción, voz y cuerpo',steps:['analizar','argumentar'],advance:'Observar la charla, iniciar su transcripción y añadir voz y cuerpo al mismo episodio de la ficha 1.'},
 {title:'Oralidad: argumentar y revisar',steps:['argumentar','revisar'],advance:'Completar y revisar la misma ficha 1 con una interpretación alternativa.'},
 {title:'Escribir y representar: plan y borrador',steps:['argumentar','analizar'],advance:'Planificar y redactar la misma carta abierta: posición, participantes, razones y propuesta.'},
 {title:'Escribir y representar: lectura entre pares',steps:['analizar','argumentar'],advance:'Comentar tres pasajes de la carta del compañero y revisar el contenido de la propia.'},
 {title:'Escribir y representar: revisión y decisiones',steps:['analizar','revisar'],advance:'Revisar la presentación de la carta, comprobar su lectura y explicar tres decisiones.'},
 {title:'Contexto: fuentes y elección del método',steps:['argumentar','analizar'],advance:'Iniciar el expediente con la pregunta y el corpus. En la ficha 3, localizar la apertura y el cierre del pronunciamiento de Sarayaku y explicarlos con la sentencia. Quien empezó con la carta continúa su análisis.',milestone:1},
 {title:'Contexto: límites y transferencia',steps:['revisar','assessment'],advance:'Revisar la ficha 3, precisar el método del expediente y aplicar el enfoque a un caso acotado.',milestone:2},
 {title:'Voces: personas y responsabilidad',steps:['analizar','argumentar'],advance:'Comenzar la ficha 4 con tres segmentos en total del contraste Menchú–Márquez; identificar participantes, voces y responsabilidad. Si ya la empezaste, continúa tus registros.'},
 {title:'Voces: perspectivas y atribuciones',steps:['argumentar','revisar'],advance:'Explicar cómo se usa una voz y comprobar la atribución en la misma ficha.'},
 {title:'Géneros: acciones y circulación',steps:['analizar','argumentar'],advance:'En la clase 1, registrar la primera pieza y elegir la segunda. En la clase 2, recuperar el documento vinculado o preparar la adaptación, registrar la segunda pieza y comparar ambas.'},
 {title:'Géneros: contraste y argumento parcial',steps:['project','revisar'],advance:'Revisar la ficha 5 e integrar un análisis parcial en el expediente.',milestone:3},
 {title:'Organización textual: secuencias',steps:['analizar','argumentar'],advance:'En la ficha 6, retomar dos tramos de una ficha anterior y explicar cómo se conectan.'},
 {title:'Argumentación: inferencias y objeciones',steps:['argumentar','revisar'],advance:'Revisar la ficha 6 y usar en el expediente el hallazgo que responda a su pregunta.'},
 {title:'Expediente: revisión, enseñanza y primeras defensas',steps:['project','project'],advance:'Revisar el informe y convertir un fragmento ya analizado en la microconsigna que se prueba en tríos. Comenzar las defensas según el turno asignado.',milestone:4},
 {title:'Expediente: defensas y cierre',steps:['project','project'],advance:'Completar los turnos de defensa y ajustar la versión final del mismo expediente; no se redacta todo el informe en clase.',milestone:4}
];
export const projectFieldForWeek=week=>({7:'question',8:'method',12:'argument',15:'revision',16:'defense'})[week];
export function sessionWork(s){
 const path=weeklyPath[s.week-1],unit=unitForWeek(s.week),step=path.steps[s.encounter-1];
 const common={path,unit,step,key:`ficha-${unit.id}`,label:`Ficha ${unit.id} · ${unit.title}`,href:`#unidad/${unit.id}/${step}`};
 const phaseHref=fichaPhaseLinks[s.id]?'#ficha/'+unit.id+'/'+fichaPhaseLinks[s.id][0]:null;
 if(unit.id===2)return {...common,href:phaseHref,label:'Escribir y representar · Mi carta abierta',explanation:'Las seis clases desarrollan la misma carta: borrador, lectura del compañero y revisión. Conserva el trabajo en hojas o en los cuatro campos del cuaderno opcional.'};
 if(step==='diagnosis')return {...common,key:'apertura',label:'Diagnóstico inicial · Semana 1',href:'#cuaderno',explanation:'Este es el único diagnóstico inicial del recorrido. La lectura inicial y la revisión se guardan juntas en el cuaderno; todavía no son la ficha oral de la unidad 1.'};
 if(step==='assessment')return {...common,label:'Evaluación de transferencia · Semana 8',href:'#unidad/3/argumentar',explanation:'Este encuentro aplica el método a un caso acotado y corresponde a la Sumativa 1. Sigue las indicaciones del docente para el caso y la entrega. Conserva la ficha 3 como preparación; no sustituyas su texto por la respuesta de evaluación.'};
 if(step==='project')return {...common,key:'proyecto',label:`Expediente final · Hito ${path.milestone}`,href:s.week===12?'#proyecto/hito-3':unit6Links[s.id][0],field:s.week===12?'argument':projectSections[unit6Links[s.id][0].split('/').at(-1)],explanation:s.week===12?'Aquí desarrollas el hito 3 del mismo expediente. Selecciona de las fichas las evidencias que responden a su pregunta; redacta el análisis en «Desarrollo del análisis». No copies automáticamente toda la ficha 5.':'Aquí trabajas en el expediente que has construido durante el curso. Recupera las evidencias de tus fichas para revisar, enseñar y defender; no es un diagnóstico nuevo.'};
 return {...common,href:unit6Links[s.id]?.[0]||phaseHref||common.href,explanation:`Continúa la misma ficha ${unit.id}: las notas y evidencias de las semanas ${unit.id===1?2:unit.weeks[0]}–${unit.id===6?14:unit.weeks[1]} se reúnen en ella. El orden de clases está en «Unidad y encuentros». La guía, el registro, el argumento y la revisión son espacios de esa ficha, no otras actividades que debas empezar de nuevo.`};
}
