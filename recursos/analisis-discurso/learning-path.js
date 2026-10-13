import {unitForWeek} from './course.js';

// Each week advances an existing record; it does not create another diagnosis.
export const weeklyPath=[
 {title:'Diagnóstico inicial y contraste',steps:['diagnosis','diagnosis'],advance:'Guardar la lectura inicial y su revisión en el diagnóstico del cuaderno. No tiene calificación.'},
 {title:'Oralidad: transcripción, voz y cuerpo',steps:['observar','analizar'],advance:'Comenzar la ficha 1: localizar un episodio oral y registrar palabras, voz y cuerpo.'},
 {title:'Oralidad: argumentar y revisar',steps:['argumentar','revisar'],advance:'Completar y revisar la misma ficha 1 con una interpretación alternativa.'},
 {title:'Escritura: acciones y representación',steps:['observar','analizar'],advance:'Comenzar la ficha 2 con el reglamento y delimitar pregunta y corpus del expediente.',milestone:1},
 {title:'Escritura: lectores e inferencias',steps:['analizar','argumentar'],advance:'Añadir a la ficha 2 inferencias de lectura, sus fundamentos y los datos que faltan.'},
 {title:'Escritura: composición y reformulación',steps:['argumentar','revisar'],advance:'Contrastar una reformulación y revisar la misma ficha 2.'},
 {title:'Contexto: fuentes y elección del método',steps:['observar','argumentar'],advance:'Construir la ficha 3: documentar contexto y justificar el enfoque elegido.'},
 {title:'Contexto: límites y transferencia',steps:['revisar','assessment'],advance:'Revisar la ficha 3, precisar el método del expediente y aplicar el enfoque a un caso acotado.',milestone:2},
 {title:'Voces: personas y responsabilidad',steps:['analizar','argumentar'],advance:'Comenzar la ficha 4: identificar participantes, voces y marcas de responsabilidad.'},
 {title:'Voces: perspectivas y atribuciones',steps:['argumentar','revisar'],advance:'Revisar la misma ficha 4 mediante un caso de atribución ambiguo.'},
 {title:'Géneros: acciones y circulación',steps:['analizar','argumentar'],advance:'Comenzar la ficha 5 con un género y una reformulación claramente identificada.'},
 {title:'Géneros: contraste y argumento parcial',steps:['argumentar','revisar'],advance:'Revisar la ficha 5 e integrar un análisis parcial en el expediente.',milestone:3},
 {title:'Organización textual: secuencias',steps:['analizar','argumentar'],advance:'Comenzar la ficha 6: localizar secuencias y explicar cómo se articulan.'},
 {title:'Argumentación: inferencias y objeciones',steps:['argumentar','revisar'],advance:'Revisar la ficha 6 y utilizar sus evidencias en el borrador del expediente.'},
 {title:'Expediente: revisión y enseñanza',steps:['project','project'],advance:'Revisar el informe y probar la actividad de enseñanza del hito 4.',milestone:4},
 {title:'Expediente: defensa y cierre',steps:['project','project'],advance:'Defender las decisiones y preparar la versión final del mismo expediente.',milestone:4}
];
export const projectFieldForWeek=week=>({4:'question',8:'method',12:'argument',15:'revision',16:'defense'})[week];
export function sessionWork(s){
 const path=weeklyPath[s.week-1],unit=unitForWeek(s.week),step=path.steps[s.encounter-1];
 const common={path,unit,step,key:`ficha-${unit.id}`,label:`Ficha ${unit.id} · ${unit.title}`,href:`#unidad/${unit.id}/${step}`};
 if(step==='diagnosis')return {...common,key:'apertura',label:'Diagnóstico inicial · Semana 1',href:'#cuaderno',explanation:'Este es el único diagnóstico inicial del recorrido. La lectura inicial y la revisión se guardan juntas en el cuaderno; todavía no son la ficha oral de la unidad 1.'};
 if(step==='assessment')return {...common,label:'Evaluación de transferencia · Semana 8',href:'#unidad/3/argumentar',explanation:'Este encuentro aplica el método a un caso acotado y corresponde a la Sumativa 1. Sigue las indicaciones del docente para el caso y la entrega. Conserva la ficha 3 como preparación; no sustituyas su texto por la respuesta de evaluación.'};
 if(step==='project')return {...common,key:'proyecto',label:'Expediente final · Hito 4',href:'#proyecto',field:s.week===15?(s.encounter===1?'revision':'mediation'):(s.encounter===1?'defense':'selfAssessment'),explanation:'Aquí trabajas en el expediente que has construido durante el curso. Recupera las evidencias de tus fichas para revisar, enseñar y defender; no es un diagnóstico nuevo.'};
 return {...common,explanation:`Este encuentro desarrolla la unidad ${unit.id}. Continúa la misma ficha ${unit.id}: las notas y evidencias de las semanas ${unit.id===1?2:unit.weeks[0]}–${unit.id===6?14:unit.weeks[1]} se reúnen en ella. La agenda concreta qué hacer en clase; los cinco pasos de la unidad organizan el trabajo.`};
}
