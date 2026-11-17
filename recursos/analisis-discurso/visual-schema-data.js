import {openingNotice} from './foundations.js';
import {questionExamples} from './activities.js';

// Content of the visual schemas. Each entry names the class it belongs to (`planned`), the theory topic
// it accompanies and `anchors`: phrases that must appear in that class, so a schema never adds content.
// `placed` marks the schemas already shown in their class; the rest wait in the author gallery.
// Examples are the course's own; an adaptation written for a schema says so in its source.
export const visualSchemas={
 'analisis-tres-pasos':{
  type:'path',planned:'s1-e1',topic:'El análisis del discurso: estudiar el lenguaje en uso',placed:true,
  label:'Adaptación de Fairclough: tres operaciones relacionadas para analizar el aviso',
  object:{label:'El aviso',text:openingNotice.text},
  steps:[
   {verb:'Describir',dimension:'el texto',question:'¿Qué dicen las palabras?',claim:'«Solo» limita el servicio a una categoría: «estudiantes con matrícula vigente».',evidence:'el texto; otro lector puede comprobarlo.'},
   {verb:'Interpretar',dimension:'la práctica discursiva',question:'¿Quién lo produce, cómo circula, cómo se lee?',claim:'El aviso presenta una condición de atención al público; «Desde mañana» fija su comienzo respecto de la publicación.',evidence:'datos de la publicación, de su emisor y de sus lectores.'},
   {verb:'Explicar',dimension:'la práctica social',question:'¿Qué relación social mantiene o cambia?',claim:'Vincula el acceso a la biblioteca con una condición administrativa: la matrícula vigente. Determinar si aplica una norma o anuncia un cambio exige contrastarlo.',evidence:'reglamentos, avisos anteriores, testimonios.'}
  ],
  scale:'Adaptación didáctica de Fairclough: describir, interpretar y explicar son operaciones; texto, práctica discursiva y práctica social son dimensiones relacionadas. Vuelve a las marcas y a los datos entre operaciones: no es una secuencia fija ni un método universal del AD.',
  task:{label:'En el diagnóstico',text:'Con A, B y C: una observación que otro lector pueda comprobar (paso 1), dos hipótesis (pasos 2 y 3) y el dato que te permitiría decidir entre ellas.'},
  limit:'describir ya supone categorías; ninguna fase es descripción pura (Fairclough, 1992: 199). Para estudiar intenciones o efectos, reúne datos de producción y recepción.',
  source:'Fuentes: Fairclough (1992: 73 y 198–199). Uso lingüístico contextualizado: Calsamiglia y Tusón (2012, §1.1 · página 12 del archivo).',
  anchors:[openingNotice.text]
 },
 'contexto-versiones':{
  type:'contrast',planned:'s1-e2',topic:'El contexto pone a prueba una lectura',placed:true,replaces:'example',
  label:'La misma oración con cotexto y aislada',
  question:'¿Quién canceló la reunión?',
  columns:[
   {label:'Versión 1 · con cotexto',text:'«El comité adoptó la medida. Se canceló la reunión».',marks:['El comité'],note:'Hay un candidato recuperable en el cotexto: el comité.'},
   {label:'Versión 2 · aviso aislado',text:'«Se canceló la reunión».',note:'Falta ese dato: la oración no nombra a quien canceló.'}
  ],
  verdict:'Con cotexto, la cancelación puede leerse como resultado de una medida del comité; aislada, comunica el resultado sin identificar quién decidió. Ninguna de las dos demuestra por sí sola una finalidad de ocultamiento.',
  task:{label:'Al contrastar los contextos',text:'Explica qué hipótesis de tu lectura inicial gana o pierde apoyo, y por qué.'},
  source:'Ejemplo. Cotexto: Calsamiglia y Tusón (2012, §4.2 · página 110 del archivo, entre los factores del contexto; §8.2.2 · página 238 del archivo, referencias dentro del texto).',
  anchors:['El comité adoptó la medida. Se canceló la reunión','candidato recuperable en el cotexto','Ninguna de las dos demuestra por sí sola una finalidad de ocultamiento']
 },
 'revision-pausa':{
  type:'revision',planned:'s3-e2',topic:'Revisar es cambiar una afirmación con razones',placed:true,replaces:'example',
  label:'Una interpretación revisada con razones',
  before:{label:'Primera lectura',text:'«La pausa expresa inseguridad».'},
  evidence:{label:'Palabras y pausa del ejemplo',text:'«La propuesta tiene dos ventajas: reduce el costo y acorta el plazo. [pausa] En cuanto a sus límites, requiere personal especializado».'},
  after:{label:'Lectura revisada',text:'La pausa coincide con el paso de las ventajas a los límites de la misma propuesta y puede ayudar a distinguir esas partes.'},
  reason:'«Ventajas», «límites» y «en cuanto a» permiten reconocer el cambio de subtema. La pausa se sitúa en esa frontera en la realización propuesta para el ejemplo. Esa relación sostiene una función organizativa; respirar también puede contribuir a la pausa. La inseguridad requeriría otros indicios.',
  task:{label:'En la ficha 1',text:'Conserva la primera lectura y explica qué dato justificó el cambio y qué evidencia falta todavía.'},
  source:'Ejemplo del curso: [pausa] indica la interrupción prevista en su realización. Prosodia: Calsamiglia y Tusón (2012, §2.8.1 · página 57 del archivo); organización temática: §2.8.4 · páginas 60–64 del archivo; transcripción: apéndice, §1.2 · páginas 358–361 del archivo.',
  anchors:['la pausa expresa inseguridad','La propuesta tiene dos ventajas','En cuanto a sus límites','cambio de subtema']
 },
 'deixis-taller':{
  type:'annotated',planned:'s2-e1',topic:'Enunciar construye una situación',placed:true,replaces:'example',
  label:'Tres marcas que sitúan un enunciado',
  context:'En un taller',
  text:'«Hoy les propongo revisar nuestra primera explicación».',
  marks:[
   {words:'Hoy',label:'Tiempo',note:'remite al día del taller.'},
   {words:'les',label:'Destinatario',note:'remite a quienes participan.'},
   {words:'nuestra',label:'Pertenencia',note:'¿incluye a quienes escuchan? Lo decide la situación.'}
  ],
  verdict:'Para identificar estas referencias necesitamos la situación de aula.',
  task:{label:'Con la charla de Drexler',text:'Antes de transcribir, reconoce quién habla, a quién se dirige y en qué situación.'},
  source:'Ejemplo. Situación de enunciación: Calsamiglia y Tusón (2012, §2.1 · páginas 29–30 del archivo). Deixis de persona, posesivos incluidos, y de tiempo: §4.2.1 · páginas 117–122 del archivo.',
  anchors:['Hoy les propongo revisar nuestra primera explicación','construyen tiempo, destinatario y pertenencia']
 },
 'secuencias-solicitud':{
  type:'segments',planned:'s13-e1',topic:'Un texto puede combinar secuencias',placed:true,replaces:'example',
  label:'Un texto que combina tres secuencias',
  segments:[
   {text:'En el primer taller de lectura, el grupo entregó respuestas muy breves. La docente incorporó un intercambio en parejas y, en la siguiente entrega, aparecieron más referencias al cuento.',label:'Narración',note:'Presenta una transformación favorable y sitúa entre ambas entregas la intervención docente.'},
   {text:'El curso reúne a treinta estudiantes y cuenta con quince ejemplares impresos, con márgenes amplios para anotar.',label:'Descripción',note:'Selecciona condiciones materiales pertinentes para valorar el trabajo compartido: estudiantes, ejemplares y espacio para anotar.'},
   {text:'Conviene mantener el intercambio para contrastar interpretaciones, pero habrá que comprobar quiénes participan y qué cambia en cada escrito antes de atribuirle la mejora.',label:'Argumentación',note:'Convierte el contraste de interpretaciones en una razón para mantener la práctica y deja su eficacia por comprobar.'}
  ],
  verdict:'El conjunto presenta una práctica docente como valiosa: relata una mejora, sitúa los recursos y recomienda mantener el intercambio. Esa organización sostiene una propuesta; comprobar que el intercambio causó la mejora requiere otros datos.',
  task:{label:'En la ficha 6',text:'Explica qué hace cada tramo y qué marcas muestran la transición.'},
  source:'Ejemplo. Textos heterogéneos y secuencia dominante: Calsamiglia y Tusón (2012, §9.2.2 · páginas 266–268 del archivo). Narración, descripción y argumentación: §10.1 · páginas 270–274 del archivo; §10.2 · páginas 280–282 del archivo; §10.3 · páginas 295–300 del archivo.',
  anchors:['En el primer taller de lectura, el grupo entregó respuestas muy breves','El curso reúne a treinta estudiantes','Conviene mantener el intercambio para contrastar interpretaciones','Cada tramo adquiere función en esa intervención completa']
 },
 'agencia-escala':{
  type:'matrix',planned:'s4-e2',topic:'Agencia y representación de participantes',placed:true,replaces:'example',
  label:'Dónde queda quien revisa en cuatro formulaciones',
  columns:['Formulación','¿Aparece quien revisa?'],
  rows:[
   {head:'Activa',cells:['«La comisión revisó las solicitudes».','Sí: la comisión es sujeto y agente; se presenta qué hizo.']},
   {head:'Pasiva con agente',cells:['«Las solicitudes fueron revisadas por la comisión».','Sí, en «por la comisión»; las solicitudes pasan a ser sujeto y punto de partida.']},
   {head:'Con «se», sin agente',cells:['«Se revisaron las solicitudes».','No aquí: informa la revisión realizada sin nombrar a quien revisó; el cotexto puede identificarlo.']},
   {head:'Nominalización',sub:'el proceso como nombre',cells:['«La revisión de las solicitudes».','No: convierte la acción en un asunto nombrado, sin indicar aquí quién revisa ni cuándo.']}
  ],
  limit:'para distinguir quién actúa y quién decide, contrasta la formulación con otros pasajes o documentos sobre la decisión.',
  task:{label:'En tu carta',text:'Señala a quién atribuyes una acción. Explica cómo esa formulación representa su responsabilidad ante los lectores.'},
  source:'Ejemplos. Pasiva sin agente y nominalización: Fairclough (1992: 178–179). Impersonales y pasivas sin agente que borran al locutor: Calsamiglia y Tusón (2012, §5.1.1 · página 138 del archivo).',
  anchors:['La comisión revisó las solicitudes','Las solicitudes fueron revisadas por la comisión','Se revisaron las solicitudes','La nominalización «la revisión» convierte el proceso en un nombre','El agente realiza la acción; la autoridad que la decide puede ser otra','La omisión se interpreta junto con los participantes identificados en el documento']
 },
 'personas-cuadrante':{
  type:'quadrant',planned:'s9-e1',topic:'Personas y destinatarios se reconstruyen',placed:true,
  label:'A quién incluye cada referencia en su situación',
  rowQuestion:'¿Incluye a quien enuncia?',colQuestion:'¿Incluye a quien recibe?',
  cells:{
   yy:{forms:'«nosotros» inclusivo',example:'De profesor a alumnos: «Vamos a seguir con los problemas de matemáticas». Presenta la actividad como compartida.'},
   yn:{forms:'«yo»; «esta comisión»',example:'Un «nosotros» que deja fuera a quien recibe, o «esta comisión» al nombrarse: construyen una voz distinta de sus destinatarios.'},
   ny:{forms:'«tú», «usted», «los solicitantes»',example:'«Los solicitantes», cuando designa a quien lee, lo sitúa en un papel dentro del trámite.'},
   nn:{forms:'«ellas», «la comisión»',example:'Cuando nombran a alguien que no interviene en el intercambio: se habla sobre ese grupo, sin convertirlo en destinatario.'}
  },
  limit:'la forma por sí sola no decide a quién incluye: «la comisión» cambia de casilla según quién enuncia. El destinatario construido no identifica a todos los lectores reales.',
  task:{label:'En la ficha 4',text:'En los tres pasajes de la ficha, los nombres, posesivos y formas verbales ayudan a distinguir a quien habla, al público y a los grupos mencionados.'},
  source:'Formas de persona: Calsamiglia y Tusón (2012, §§5.1.1–5.1.4 · páginas 138–143 del archivo); receptor nombrado como «estudiante» o «usuario», página 139 del archivo; «nosotros» inclusivo y su ejemplo, página 141 del archivo; el locutor que se nombra a sí mismo, como «este departamento», página 143 del archivo. El cuadrante es síntesis del curso.',
  anchors:['nosotros','«los solicitantes» puede designar a los destinatarios','una institución puede nombrarse a sí misma, como «esta comisión»','La forma por sí sola no decide a quién incluye','Distingue a quien habla, a quienes aparecen en sus palabras y al público al que se dirige','nombres, posesivos y terminaciones verbales']
 },
 'enfoques-matriz':{
  "type": "matrix",
  "planned": "s7-e1",
  "topic": "Elegir un enfoque cambia la investigación",
  "placed": true,
  "replaces": "example",
  "label": "Tres perspectivas sobre una decisión de la carta",
  "object": {
    "label": "El caso",
    "text": "Borrador: «Los estudiantes exigimos». Comentario de Cristina: «¿Hablas por todos?». Versión final: «Como estudiante, propongo»."
  },
  "columns": [
    "Marca y lectura posible",
    "Datos para sostenerla"
  ],
  "rows": [
    {
      "head": "Fairclough",
      "sub": "dialéctico-relacional",
      "cells": [
        "La voz colectiva del borrador pasa a una posición individual. La formulación se relaciona con cómo se escribe y se lee la carta.",
        "Las dos versiones, el comentario de Cristina y la decisión del autor permiten estudiar la revisión ante un destinatario institucional."
      ]
    },
    {
      "head": "Van Dijk",
      "sub": "sociocognitivo",
      "cells": [
        "«¿Hablas por todos?» cuestiona cómo se entiende quién habla y a quién representa.",
        "El comentario y la respuesta del autor permiten contrastar sus interpretaciones de la situación comunicativa."
      ]
    },
    {
      "head": "Wodak y colaboradores",
      "sub": "histórico-discursivo",
      "cells": [
        "«Los estudiantes» nombra un grupo; «exigimos» le atribuye una demanda. La versión final presenta una propuesta individual.",
        "Versiones y comentario documentan esta revisión. Las categorías de nominación y predicación ayudan a describirla; un estudio histórico requeriría reconstruir un proceso más amplio."
      ]
    }
  ],
  "verdict": "Para la ficha 3, elige la perspectiva que ayude a explicar la relación observada. Puedes usar Fairclough para relacionar la formulación con la producción y la lectura de tu carta.",
  "task": {
    "label": "En la ficha 3",
    "text": "Relaciona un concepto con el pasaje y el dato que vas a analizar."
  },
  "source": "Ejemplo de carta y revisión elaborado para el curso. Fairclough (1992: 73–75), dimensiones, y en Wodak y Meyer (2003: 184–185), enfoque dialéctico-relacional; van Dijk (1999: 124–125), modelos de contexto y de acontecimiento; Wodak (2003: 113–115), estrategias discursivas; Pardo (2012: 48), panorama de enfoques.",
  "anchors": [
    "Borrador: «Los estudiantes exigimos»",
    "Comentario de Cristina: «¿Hablas por todos?»",
    "Versión final: «Como estudiante, propongo»",
    "la voz colectiva del borrador",
    "cómo autor y lectora interpretan quién habla y a quién representa",
    "la denominación «los estudiantes» y la atribución de una demanda al grupo"
  ]
},
 'partitura-propuesta':{
  type:'score',planned:'s2-e2',topic:'Palabras, voz y cuerpo',placed:true,replaces:'example',
  label:'Palabras, voz y cuerpo alineados en el tiempo',
  duration:2.5,
  rows:[
   {label:'Palabras',events:[{start:0,end:1.3,text:'«Esa es mi propuesta»'}]},
   {label:'Voz',events:[{start:1.3,end:2.1,text:'Pausa'}]},
   {label:'Cuerpo',events:[{start:1,end:2.4,text:'Mirada al público'}]}
  ],
  verdict:'La transcripción de palabras permite examinar la formulación. El audio permitiría comprobar la pausa; el video, la mirada. Conservar intervalos permite estudiar su coordinación.',
  limit:'demostración inventada: los tiempos son ilustrativos, no una medición.',
  task:{label:'En la ficha 1',text:'Registra voz y cuerpo del mismo episodio con su intervalo, cuando sean observables.'},
  source:'Ejemplo. Mirada, entre los elementos cinésicos: Calsamiglia y Tusón (2012, §2.6.2 · páginas 50–52 del archivo). Pausas: §2.8.1 · página 57 del archivo.',
  anchors:['Esa es mi propuesta','una pausa y de una mirada al público','La transcripción de palabras permite examinar la formulación','conservando intervalos']
 },
 'tema-global':{
  type:'tree',planned:'s5-e2',topic:'Del significado local al tema global',placed:true,replaces:'example',
  label:'De las proposiciones del texto a una síntesis, y lo que se pierde en el camino',
  leaves:[{label:'Proposición',text:'La ayuda exige matrícula vigente.'},{label:'Proposición',text:'La ayuda exige acreditación de ingresos.'}],
  operation:{label:'Condensar y comprobar qué se pierde',text:'Las dos exigencias construyen un acceso condicionado. «Vigente» delimita la matrícula válida y «acreditación» exige demostrar los ingresos: conservarlas permite explicar qué se pide al solicitante.'},
  top:{label:'Síntesis que hay que revisar',text:'«La ayuda está condicionada a matrícula e ingresos».'},
  loss:{label:'Qué se pierde',items:['«vigente»: no cualquier matrícula sirve.','«acreditación» exige presentar pruebas de los ingresos.'],question:'¿Cómo cambia lo que el lector entiende que necesita para acceder a la ayuda?'},
  rejected:{label:'No la sostiene el texto',text:'«La ayuda se ofrece a todos».',note:'Añade una generalización que elimina las condiciones.'},
  limit:'el tema global es una reconstrucción de quien interpreta. Una síntesis puede omitir detalles si justifica su selección; cambiar una condición altera el contenido.',
  task:{label:'Al leer la carta del compañero',text:'Expresa en una frase la propuesta que entiendes y señala los pasajes que sostienen esa lectura.'},
  source:'Ejemplo. Macroestructura y macrorreglas: Calsamiglia y Tusón (2012, §8.1.2 · páginas 225–226 del archivo). Generalización y operaciones selectivas y constructivas: van Dijk (1980: 216–217).',
  anchors:['La ayuda exige matrícula vigente y acreditación de ingresos','La ayuda está condicionada a matrícula e ingresos','las condiciones conservadas determinan cómo se representa el acceso a la ayuda','generalizar reúne casos bajo una categoría','pierde «vigente»','Al generalizar una lista bajo una categoría, comprueba que el resumen conserve sus límites']
 },
 'regla-de-paso':{
  type:'argument',planned:'s14-e1',topic:'El argumento necesita una regla de paso',placed:true,replaces:'example',
  label:'Premisa, ley de paso y conclusión, con su garantía y su reserva',
  premise:{label:'Premisa',connector:'dado que',text:'la medida beneficia a muchos estudiantes'},
  conclusion:{label:'Conclusión',text:'debemos mantenerla'},
  law:{label:'Ley de paso',connector:'puesto que',text:'una medida beneficiosa merece mantenerse'},
  backing:{label:'Garantía',connector:'debido a que',text:'adoptamos como criterio que las políticas deben favorecer al estudiantado'},
  reserve:{label:'Reserva',connector:'a menos que',text:'produzca costes o exclusiones que restrinjan la regla'},
  limit:'en este esquema la garantía apoya la ley de paso, que es la regla entre premisa y conclusión. El criterio está construido para el ejemplo, no es una política real de la UCE; comprobar el beneficio exige datos para la premisa.',
  task:{label:'En la ficha 6',text:'Escribe premisa, regla de conexión, conclusión y una objeción que afecte la inferencia.'},
  source:'Ejemplo. Esquema de Plantin (1996: 38) con garantía y reserva de Toulmin (1958), en Calsamiglia y Tusón (2012, §10.3 · páginas 297–298 del archivo).',
  anchors:['La medida beneficia a muchos estudiantes; debemos mantenerla','una medida beneficiosa merece mantenerse','El beneficio estudiantil funciona como criterio de legitimación','la prueba del beneficio','costes o exclusiones']
 },
 'triangulacion-fuentes':{
  "type": "triangle",
  "planned": "s8-e1",
  "topic": "Triangular para resolver una dificultad",
  "placed": true,
  "replaces": "example",
  "label": "Qué aporta cada pieza al análisis de la carta",
  "detailLabel": "Comprobar",
  "center": {
    "label": "Explicación",
    "text": "Relaciona la formulación, la lectura del compañero y la decisión final."
  },
  "vertices": [
    {
      "label": "Borrador",
      "gives": "Conserva la formulación inicial.",
      "limit": "Localiza el pasaje que comparas con la carta final."
    },
    {
      "label": "Comentario recibido",
      "gives": "Documenta lo que expresó el lector.",
      "limit": "Identifica al compañero y el comentario utilizado."
    },
    {
      "label": "Carta final",
      "gives": "Muestra lo que cambiaste o mantuviste.",
      "limit": "Consulta tus tres decisiones para recuperar la razón anotada."
    }
  ],
  "verdict": "Borrador y carta final proceden del mismo autor; el comentario aporta la perspectiva del lector. Las decisiones de la ficha 2 ayudan a contrastar la relación que propones entre la lectura y la versión final.",
  "task": {
    "label": "En la ficha 3",
    "text": "Comprueba tu explicación con estos registros y precisa qué sostienes después del contraste."
  },
  "source": "Ejemplo de revisión de una carta elaborado para el curso. Principio de triangulación: Wodak, en Wodak y Meyer (comps., 2003: 104).",
  "anchors": [
    "el comentario documenta la lectura de un compañero",
    "la carta final muestra lo que cambiaste o mantuviste",
    "Tus tres decisiones registran cómo justificaste esa elección",
    "El borrador y la carta final proceden del mismo autor"
  ]
},
 'recontextualizar-clausula':{
  type:'transform',planned:'s11-e2',topic:'Recontextualizar implica seleccionar',placed:true,replaces:'example',
  label:'Una cláusula transformada para otro destinatario',
  from:{label:'Cláusula · ejemplo',text:'«La ayuda exige matrícula vigente y acreditación de ingresos».'},
  to:{label:'Explicación para primer semestre · adaptación propia',text:'«Para recibir la ayuda debes cumplir dos requisitos: matrícula vigente y acreditar tus ingresos, es decir, demostrarlos».'},
  operations:[
   {kind:'Conserva',text:'Las dos condiciones y su alcance: requisitos para recibir la ayuda.'},
   {kind:'Reformula',text:'«exige» pasa a «debes cumplir»: la obligación se dirige a quien necesita actuar; su alcance no cambia.'},
   {kind:'Aclara y ordena',text:'Aclara «acreditar» y anuncia «dos requisitos»: condiciones, no pasos.'},
   {kind:'Omite',text:'Nada: omitir una condición alteraría lo que dice la norma.'}
  ],
  verdict:'La norma formula una exigencia; la adaptación interpela al estudiante y explica qué necesita acreditar. Cambia la relación con el destinatario y la presentación del trámite. La adaptación se declara propia: no es una comunicación oficial de la institución.',
  task:{label:'En la ficha 5',text:'Compara las dos piezas de tu ruta: qué se conserva, omite o reformula, con vínculo documentado o adaptación identificada.'},
  source:'Cláusula del curso; la adaptación es propia y se escribió para este esquema. Recontextualización: apartado «Recontextualizar implica seleccionar» de la lectura integrada de «Teoría» y de la guía de la unidad 5, síntesis docente de Fairclough, Discourse and Social Change (1992).',
  anchors:['Transformamos una cláusula normativa en una explicación para estudiantes de primer semestre','se selecciona y reformula información para orientar su actuación','Al conservar requisitos y explicitar referencias, propone una relación de acompañamiento','Su identificación como adaptación propia mantiene visible quién responde por esa explicación']
 },
 'intercambio-accesible':{
  type:'turns',planned:'s14-e2',topic:'Una respuesta modifica la interacción',placed:true,replaces:'example',
  comic:{
   file:'img/vineta-inscripcion-acceso.webp',width:2172,height:724,ai:true,
   credit:'Ilustración original generada con IA · OpenAI',
   panels:[
    {speaker:'Organización',alt:'Un organizador junto a un portátil conversa con una estudiante que sostiene un teléfono.'},
    {speaker:'Estudiante',alt:'La misma estudiante interviene con el teléfono en la mano; el organizador la escucha.'},
    {speaker:'Organización',alt:'El organizador señala el espacio de atención en el campus mientras continúa la conversación con la estudiante.'}
   ]
  },
  label:'Un intercambio en el que una objeción desplaza el foco de la respuesta',
  turns:[
   {speaker:'A',text:'«La inscripción al taller de lectura es accesible: se completa en línea».',move:'Presenta la inscripción en línea como razón para valorar el acceso.'},
   {speaker:'B',text:'«¿Y cómo se inscribe quien no tiene conexión?».',move:'Cuestiona que la conexión esté al alcance de todas las personas.'},
   {speaker:'A',text:'«Por eso ofrecemos un punto de atención en el campus, de ocho a doce».',move:'Desplaza el foco hacia una alternativa presencial con horario limitado.'}
  ],
  note:'A valora la inscripción como «accesible» porque se realiza en línea. B cuestiona ese criterio al introducir a quienes carecen de conexión. A responde con atención presencial: cambia la solución ofrecida y añade lugar y horario. Seguir las tres intervenciones permite ver qué valoración se discute y cómo se reajusta la respuesta.',
  limit:'para estudiar un cambio en la atención institucional, compara otros intercambios y prácticas a lo largo del tiempo.',
  task:{label:'En el borrador del expediente',text:'Incorpora la objeción y muestra dónde se observa la modificación.'},
  source:'Ejemplo. Intervenciones e intercambios: Calsamiglia y Tusón (2012, §10.5 · páginas 319–323 del archivo). Diálogo, evaluación y escalas de cambio: Bolívar (2024: 99–100 / páginas 7–8 del archivo).',
  anchors:['La inscripción al taller de lectura es accesible: se completa en línea','¿Y cómo se inscribe quien no tiene conexión?','Por eso ofrecemos un punto de atención en el campus, de ocho a doce','compara otros intercambios y prácticas a lo largo del tiempo']
 },
 'negacion-voces':{
  type:'voices',planned:'s9-e2',topic:'Responsabilidad y perspectiva',placed:true,replaces:'example',
  label:'Las figuras de Ducrot en un enunciado negativo',
  object:{label:'Enunciado',text:'«La medida no es un privilegio».'},
  subject:{role:'Sujeto hablante',text:'Ser empírico que produce el mensaje. El enunciado aislado no lo identifica.'},
  speaker:{role:'Locutor (L)',text:'Figura responsable del enunciado: rechaza E1 y asume E2. Al negar «privilegio», disputa una manera de valorar la medida.'},
  evoked:{role:'Enunciador evocado',text:'«La medida es un privilegio».',stance:'L lo rechaza'},
  assumed:{role:'Enunciador asumido',text:'«La medida no es un privilegio».',stance:'L asume este rechazo'},
  limit:'el enunciado aislado no identifica a quien habría sostenido esa perspectiva; el cotexto dirá si se responde a algo dicho o se previene una objeción.',
  task:{label:'En la ficha 4',text:'Distingue cuándo puedes atribuir una perspectiva a alguien y cuándo solo puedes describir que se evoca.'},
  source:'Ejemplo. Sujeto hablante («ser empírico»), locutor y enunciador: Ducrot (1984), en Calsamiglia y Tusón (2012, §5.2 · página 150 del archivo). Negación polifónica: Ducrot, en Caldiz (2014, página 5 del archivo).',
  anchors:['La medida no es un privilegio','la medida es un privilegio','el sujeto hablante (ser empírico) produce el mensaje','el locutor es la figura responsable de enunciarlo','si se responde a algo dicho o se previene una objeción']
 },
 'operaciones-analisis':{
  type:'matrix',planned:'s1-e2',topic:'Cuatro operaciones del análisis',placed:true,replaces:'example',
  label:'Cuatro operaciones aplicadas al aviso B del diagnóstico',
  object:{label:'Aviso B del diagnóstico',text:'Se suspendieron las becas de cuarenta estudiantes.'},
  columns:['Ejemplo de análisis','En qué se apoya y qué falta comprobar'],
  rows:[
   {head:'Observar',cells:['El aviso dice «Se suspendieron», cuantifica a cuarenta estudiantes y no nombra a quien tomó la decisión.','Se comprueba leyendo las palabras del aviso B.']},
   {head:'Inferir',cells:['Entiendo que esos estudiantes tenían una ayuda y que ahora se interrumpe.','Relaciono «suspendieron las becas» con lo que sé de esas ayudas. La resolución permitiría comprobar el alcance de la suspensión.']},
   {head:'Explicar',cells:['El aviso presenta la suspensión como un hecho realizado y organiza la información en torno a las ayudas afectadas y al grupo de estudiantes.','«Se suspendieron» presenta el resultado sin nombrar a quien decidió. Quizá se omite al responsable porque ya aparece en otra parte del documento; leerlo completo permite contrastar esa explicación.']},
   {head:'Valorar',cells:['Como aviso aislado para saber ante quién reclamar, ofrece información insuficiente.','Criterio: identificar al órgano al que dirigirse. El aviso B no lo nombra; el documento completo podría aportar ese dato.']}
  ],
  verdict:'El lector recibe el resultado de la decisión y el número de estudiantes afectados; para identificar quién decidió necesita otra información. Las cuatro operaciones distinguen esa representación, su posible explicación y su valoración según un criterio explícito.',
  task:{label:'En tu diagnóstico',text:'Toma una frase de tu lectura inicial y separa qué proviene de las palabras y qué supusiste sobre la situación.'},
  source:'Ejemplo y operaciones de esta clase, síntesis del curso.',
  anchors:['Se suspendieron las becas de cuarenta estudiantes','Observar: el aviso dice «Se suspendieron»','Inferir: entiendo que esos estudiantes tenían una ayuda','Explicar: quizá se omite al responsable','Valorar: como aviso aislado para saber ante quién reclamar','Distingue lo que puedes comprobar en el aviso, lo que interpretas y los datos que necesitas para sostenerlo.']
 },
 'transcripcion-marcas':{
  type:'contrast',planned:'s2-e1',topic:'Transcribir implica seleccionar',placed:true,replaces:'example',
  label:'Las mismas palabras como subtítulo y como transcripción',
  question:'¿Qué registra cada versión de la realización oral?',
  columns:[
   {label:'Subtítulo',text:'«No aceptamos esa explicación».',note:'La puntuación organiza la frase escrita. Escucha la grabación para localizar la pausa.'},
   {label:'Transcripción con leyenda',text:'«No [pausa] aceptamos esa explicación».',marks:['[pausa]'],note:'La marca declara una pausa que habría que comprobar en el audio; la leyenda explica la convención.'}
  ],
  verdict:'Escucha qué se dice antes y después para explicar la función de la pausa.',
  task:{label:'Al transcribir el tramo de Drexler',text:'Usa tu pregunta provisional para elegir 20–30 segundos dentro de 00:39–01:47. Ejemplo: «¿Qué recursos de voz usa Drexler al reproducir las palabras de Sabina?». Anota ambos intervalos en el localizador: episodio observado y fragmento transcrito. Toma las marcas de la escucha y añade una leyenda.'},
  source:'Representación didáctica del curso. Transcripción: Calsamiglia y Tusón (2012, apéndice, §1.2 · páginas 358–361 del archivo).',
  anchors:['No [pausa] aceptamos esa explicación','La puntuación de un subtítulo es una decisión de escritura que debe contrastarse con el audio','La leyenda precisa qué representa cada marca y la escucha decide dónde corresponde','su posible función requiere las palabras próximas y la continuación']
 },
 'accion-clausula':{
  type:'annotated',planned:'s4-e1',topic:'Cómo el reglamento organiza el reparto',placed:true,replaces:'example',
  label:'Artículo 3: obligación y criterios de reparto',
  text:'«Se deberá destinar el 65% de las becas para excelencia académica y el 35 % por vulnerabilidad».',
  marks:[
   {words:'Se deberá destinar',label:'Obligación',note:'establece cómo deben repartirse las becas. Es una expresión de modalidad deóntica.'},
   {words:'65% de las becas para excelencia académica',label:'Primer criterio y proporción',note:'reserva la mayor parte de las becas para excelencia académica.'},
   {words:'35 % por vulnerabilidad',label:'Segundo criterio y proporción',note:'reserva otra parte para vulnerabilidad. Las categorías indican cómo se agrupa a los posibles beneficiarios.'}
  ],
  verdict:'La disposición obliga a la institución a distribuir las ayudas en dos proporciones y da mayor peso a la excelencia académica. El análisis relaciona esa forma de escribir con una prioridad institucional y con las categorías de estudiantes que construye el reglamento.',
  task:{label:'Del ejemplo a la carta',text:'El reglamento establece obligaciones desde una voz institucional. En tu carta, decide desde qué posición hablas y qué acción propones a la dirección de la carrera.'},
  source:'UCE, Reglamento de Becas para Estudiantes de Tercer Nivel, ejemplar con reforma de 2022, artículo 3, página 2 del archivo. Interpretación del curso. Modalidad: Calsamiglia y Tusón (2012, §6.4.1, páginas 177–178 del archivo).',
  anchors:['Se deberá destinar','65%','35 %','excelencia académica','vulnerabilidad']
 },
 'presuposicion-certificado':{
  type:'annotated',planned:'s5-e1',topic:'El lector aporta conocimientos',placed:true,replaces:'example',
  label:'Presuposición e implicatura en dos escenas',
  comic:{
   file:'img/vineta-presuposicion-implicatura.webp',width:1774,height:887,ai:true,
   credit:'Ilustración original generada con IA · OpenAI',
   panels:[
    {label:'Presuposición',speaker:'Asesora',alt:'Una asesora habla con un estudiante que sostiene un certificado junto a una mesa de consulta.'},
    {label:'Implicatura',speaker:'Docente',alt:'Una docente comenta las entregas con dos estudiantes sentados en una mesa de trabajo.',text:'«Algunos grupos entregaron».',continuation:'«De hecho, todos».',note:'La primera frase puede sugerir «no todos». La continuación cancela esa implicatura: aclara que entregaron todos los grupos.'}
   ]
  },
  text:'«Adjunte nuevamente el certificado».',
  marks:[
   {words:'nuevamente',label:'Presuposición',note:'presenta una entrega anterior como dada por supuesta; no prueba que haya ocurrido.'},
   {words:'el certificado',label:'Referencia',note:'identificarlo exige otras referencias del texto o de la situación.'}
  ],
  verdict:'«Adjunte nuevamente» pide repetir una entrega y trata la anterior como información compartida: sitúa al estudiante en un trámite ya iniciado. «Algunos grupos entregaron» puede sugerir «no todos»; «de hecho, todos» cancela esa implicatura. La entrega previa presupuesta por «nuevamente» no queda demostrada por la orden.',
  task:{label:'Al leer la carta del compañero',text:'Marca un pasaje que requiera aportar información. Explica qué entendiste y qué palabras o conocimientos te ayudaron.'},
  source:'Ejemplo. Presuposición: Calsamiglia y Tusón (2012, §7.2.1 · páginas 191–192 del archivo) y Brown y Yule (1983: 28–31). Implicatura y su cancelación: Grice, en Escandell (1996: 86–87).',
  anchors:['Adjunte nuevamente el certificado','presenta una acción anterior como información dada por supuesta','comprobar la entrega anterior exige consultar el expediente','Un lector nuevo necesitaría recuperar esa información','se reconstruye en contexto y puede cancelarse','Las dos escenas permiten comparar estas formas de información implícita']
 },
 'composicion-aviso':{
  type:'composition',planned:'s6-e1',topic:'La composición orienta la lectura',placed:true,replaces:'example',
  label:'El mismo aviso en dos composiciones',
  words:{title:'Convocatoria de becas',body:'Las solicitudes se entregan en la Secretaría de la facultad.',requirements:'Requisitos: matrícula vigente y acreditación de ingresos.'},
  layouts:[
   {label:'Disposición 1',style:'first',description:'Disposición 1: el título arriba, en letra grande; la entrega en el centro; los requisitos al final, en letra pequeña.',blocks:[{role:'title'},{role:'body'},{role:'requirements'}]},
   {label:'Disposición 2',style:'second',description:'Disposición 2: los requisitos arriba, en letra grande y dentro de un recuadro; después, el título y la entrega.',blocks:[{role:'requirements'},{role:'title'},{role:'body'}]}
  ],
  criteria:[
   {label:'Valor informativo · posición',values:['Título, entrega y, al final, requisitos.','Requisitos primero; después, título y entrega.']},
   {label:'Prominencia · tamaño y grosor',values:['Los requisitos, en letra pequeña.','Los requisitos ganan tamaño y peso.']},
   {label:'Encuadre · separación y agrupación',values:['Sin recuadro: los requisitos quedan junto al pie.','Un recuadro separa los requisitos del resto.']}
  ],
  verdict:'La primera disposición destaca la convocatoria y la entrega; la segunda presenta primero las condiciones de acceso. Las mismas palabras proponen así distintas prioridades al destinatario.',
  task:{label:'En tu carta',text:'Revisa si el título y los párrafos hacen visible tu propuesta y sus condiciones. Compara una decisión de disposición conservando las mismas palabras.'},
  source:'Ejemplo del curso. Tipografía y diseño gráfico: Calsamiglia y Tusón (2012, §3.5 · página 86 del archivo). Valor informativo, prominencia y encuadre: Kress y van Leeuwen (2021: 181–182).',
  anchors:['«Requisitos» aparece en letra pequeña','conserva las mismas palabras y gana tamaño y posición inicial','Tamaño, posición, agrupación y encuadre proponen jerarquías','Para saber qué leen primero los destinatarios, compara las versiones con lectores','Se conserva la información verbal y cambia su jerarquía']
 },
 'diseno-lectura':{
  type:'contrast',planned:'s6-e2',topic:'Distinguir diseño propuesto y lectura observada',placed:true,replaces:'example',
  label:'Lo que el diseño propone y lo que el lector hizo',
  question:'La lectura del compañero ayuda a precisar la propuesta.',
  columns:[
   {label:'Formulación inicial',text:'Título: «Permitir la IA». Al final: «para revisar borradores».',marks:['«Permitir la IA»'],note:'La propuesta y su condición aparecen separadas.'},
   {label:'Lectura del compañero',text:'Entiende una autorización para producir trabajos completos.',note:'Su comentario hace visible cómo interpretó este escrito.'}
  ],
  verdict:'El autor cambia el título a «Permitir IA para revisar borradores». La condición queda junto a la propuesta y precisa el uso que defiende. Explica que tomó esa decisión a partir del comentario recibido.',
  task:{label:'En tu carta',text:'Explica tres decisiones con sus formulaciones y motivos. Puedes conservar una expresión que tu lector comprendió con claridad.'},
  source:'Ejemplo del curso. Tipografía y diseño gráfico: Calsamiglia y Tusón (2012, §3.5 · página 86 del archivo). El lector, sujeto activo de la lectura: §3.4.2 · páginas 83–84 del archivo.',
  anchors:['El título dice «Permitir la IA»','la condición «para revisar borradores» aparece al final','El compañero entiende una autorización para producir trabajos completos','El autor reúne propuesta y condición en el título: «Permitir IA para revisar borradores»']
 },
 'recorrido-reparto':{
  type:'path',planned:'s7-e2',topic:'De una formulación a un problema social',placed:true,replaces:'example',
  label:'El recorrido de la semana 1, clase 1 aplicado al reparto del reglamento de becas',
  object:{label:'La cláusula',text:'Artículo 3: 65 % para excelencia académica y 35 % por vulnerabilidad.'},
  claimLabel:'En la cláusula',
  steps:[
   {verb:'Describir',dimension:'el texto',question:'¿Qué dicen las palabras?',claim:'Denominaciones y porcentajes articulan dos criterios con distinto peso numérico.',evidence:'el artículo 3 y su localizador.'},
   {verb:'Interpretar',dimension:'la práctica discursiva',question:'¿Quién la produce, cómo circula, cómo se lee?',claim:'Los considerandos retoman normas y valores de inclusión y equidad como razones para el reparto. La identificación del órgano emisor permite situar esa justificación institucional.',evidence:'considerandos, referencias y órgano emisor del documento; su publicación y las respuestas de lectores aportarían datos sobre circulación y recepción.'},
   {verb:'Explicar',dimension:'la práctica social',question:'¿Qué relación social mantiene o cambia?',claim:'La norma organiza el acceso mediante dos fundamentos de asignación y da mayor peso numérico a la excelencia. Evaluar su relación con la equidad exige explicitar un criterio y examinar a quién abarca cada categoría.',evidence:'artículo 3, definición de beneficiarios y fines invocados; para estudiar los resultados, datos de adjudicación.'}
  ],
  scale:'Adaptación de Fairclough: texto, práctica discursiva y práctica social se relacionan y sus fronteras no son tajantes. Los fines invocados orientan la lectura de los porcentajes; volver a las marcas del texto y a sus condiciones permite examinar cómo se justifica la distribución.',
  task:{label:'En la ficha 3',text:'Comprueba un dato de contexto y explica qué aclara sobre el fragmento.'},
  limit:'para saber quién recibió las ayudas, consulta registros de adjudicación y contrasta su aplicación con los criterios del reglamento.',
  source:'Paráfrasis del curso del artículo 3 del Reglamento de Becas (2022). Tres dimensiones del análisis: Fairclough (1992: 73).',
  anchors:['65 % para excelencia académica y 35 % por vulnerabilidad','El documento organiza a los beneficiarios mediante dos criterios y asigna distinto peso a cada uno','Los considerandos sitúan esa distribución bajo fines de inclusión y equidad','conocer los beneficiarios efectivos requiere datos de adjudicación','quién los establece y qué razones invoca']
 },
 'verbos-cita':{
  type:'contrast',planned:'s10-e1',topic:'Citar también encuadra',placed:true,replaces:'example',
  label:'La misma proposición citada con dos verbos introductores',
  question:'¿Qué cambia en la atribución cuando cambia el verbo introductor?',
  columns:[
   {label:'Con «aseguró»',text:'«El portavoz aseguró que la medida era necesaria».',marks:['aseguró'],note:'El verbo presenta la proposición como algo que el portavoz afirma.'},
   {label:'Con «admitió»',text:'«El portavoz admitió que la medida era necesaria».',marks:['admitió'],note:'El verbo presenta la misma proposición como algo que el portavoz reconoce.'}
  ],
  verdict:'La proposición atribuida se conserva; el verbo cambia su encuadre. «Aseguró» presenta una afirmación firme; «admitió», un reconocimiento que puede leerse como concesión. Quien cita construye así una posición para el portavoz; el cotexto permite precisar ante qué discusión.',
  task:{label:'En la ficha 4',text:'Comprueba qué palabras sostienen tu atribución. Si el pasaje admite otra lectura, compara las marcas que apoyan cada una.'},
  source:'Ejemplo. Verbo que anuncia la cita (verba dicendi) e indica el acto de habla atribuido: Calsamiglia y Tusón (2012, §5.2.1 · página 152 del archivo).',
  anchors:['El portavoz aseguró que la medida era necesaria','El portavoz admitió que la medida era necesaria','quien refiere las palabras orienta la imagen del portavoz y de su posición','El cotexto permite precisar esa lectura','verbos introductores']
 },
 'genero-piezas':{
  type:'matrix',planned:'s11-e1',topic:'Género, secuencia y medio',placed:true,replaces:'example',
  label:'Dos piezas sobre las mismas ayudas: qué comparten y qué las distingue',
  object:{label:'Ejemplo',text:'Una resolución y un aviso de convocatoria pueden referirse a las mismas ayudas.'},
  columns:['Tema','Modo','Acción que realiza'],
  rows:[
   {head:'Resolución',cells:['Las ayudas.','Escritura.','Dispone: realiza una acción institucional. La autoridad establece qué se aprueba u ordena.']},
   {head:'Aviso de convocatoria',cells:['Las mismas ayudas.','Escritura.','Orienta una acción de sus destinatarios: presenta a los estudiantes como posibles postulantes.']}
  ],
  verdict:'La resolución da forma a una decisión autorizada; el aviso la hace pertinente para quienes deben actuar. El género organiza esa relación entre institución y destinatarios. Compartir tema tampoco demuestra un vínculo entre sus versiones.',
  task:{label:'En la ficha 5',text:'Identifica tu primera pieza por la acción que realiza y elige una comparación documentada o un experimento propio.'},
  source:'Ejemplo. Géneros de cada esfera de actividad: Bajtín, en Calsamiglia y Tusón (2012, §9.1.2 · páginas 258–259 del archivo). Rasgos para describir un género: §9.1.4 · páginas 261–263 del archivo.',
  anchors:['Una resolución y un aviso de convocatoria pueden referirse a las mismas ayudas','la resolución aprueba bases y cronograma; el aviso comunica la decisión y orienta la postulación','En las piezas UNAE enlazadas, la disposición de publicar y el aviso permiten estudiar ese vínculo documentado','Disponer realiza una acción institucional','un aviso escrito puede cambiar de género sin cambiar de medio']
 },
 'puente-faltante':{
  type:'argument',planned:'s12-e2',topic:'Un salto inferencial necesita un puente',placed:true,replaces:'example',
  label:'Una conclusión que descansa en una ley de paso implícita',
  premise:{label:'Premisa · dato',text:'ambos avisos hablan de becas'},
  conclusion:{label:'Conclusión',connector:'por eso',text:'uno deriva del otro'},
  law:{label:'Ley de paso implícita, sin justificar',text:'si dos avisos comparten tema, uno deriva del otro',missing:true},
  verdict:'Para investigar el vínculo hace falta otro dato: una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo. En la semana 14, clase 1 el esquema se completa con garantía y reserva.',
  limit:'la semejanza temática ofrece un punto de partida para comparar los avisos.',
  task:{label:'En la revisión entre pares',text:'Busca en el desarrollo de tu compañero el dato, el criterio o la condición que sostiene cada paso.'},
  source:'Ejemplo. Premisa, ley de paso y conclusión: Plantin (1996: 38), en Calsamiglia y Tusón (2012, §10.3 · página 297 del archivo); pasos implícitos, página 298 del archivo.',
  anchors:['Ambos avisos hablan de becas; por eso uno deriva del otro','La conclusión se apoya en una regla implícita que habría que justificar','una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo','Una semejanza temática sirve para comparar las piezas']
 },
 'evidencias-argumento':{
  type:'tree',planned:'s12-e1',topic:'De las evidencias al argumento parcial',placed:true,replaces:'example',
  label:'Un argumento que compara la carta y el aviso de aula',
  leaves:[{label:'Carta a la dirección',text:'«Propongo que la carrera publique ejemplos de uso de IA».'},{label:'Aviso para primer semestre · adaptación propia',text:'«Si estás en primer semestre, ¿qué ejemplos te ayudarían?».'}],
  operation:{label:'Relación explicada',text:'«Propongo que» presenta a la dirección una decisión por tomar. La pregunta directa invita a estudiantes de primer semestre a sugerir ejemplos.'},
  top:{label:'Afirmación parcial',text:'El tema se mantiene. La carta pide una decisión a la dirección y el aviso invita a opinar a quienes usarían la guía.'},
  rejected:{label:'Excede los datos',text:'«Los estudiantes de primer semestre entendieron que se les pedía sugerir ejemplos».',note:'Para afirmarlo hacen falta respuestas de estudiantes de primer semestre que hayan leído el aviso.'},
  limit:'dos evidencias necesitan una relación explicada; una lista de citas no constituye ese desarrollo.',
  task:{label:'En el hito 3',text:'Explica qué muestra cada segmento, cómo se relacionan, qué objeción afecta a la conclusión y hasta dónde llega.'},
  source:'Ejemplo retomado de la semana 11. Efectos y evidencias de lectura: apartado «Dibujar una relación no la demuestra» de la lectura integrada de «Teoría» y de la guía de la unidad 5. Procesos de lectura: Calsamiglia y Tusón (2012, §3.4.2 · páginas 83–85 del archivo).',
  anchors:['Retomamos la carta y el aviso de la semana 11','Propongo que la carrera publique ejemplos de uso de IA','Si estás en primer semestre, ¿qué ejemplos te ayudarían?','la pregunta directa invita a estudiantes de primer semestre a sugerir ejemplos','cambian el destinatario y la acción que se le pide']
 },
 'explicar-justificar':{
  type:'contrast',planned:'s13-e2',topic:'Explicar y justificar tienen preguntas distintas',placed:true,replaces:'example',
  label:'Una frase que explica una causa y pide una decisión',
  question:'¿Qué pregunta responde cada parte de «El retraso se produjo por un fallo del sistema; por tanto, debemos ampliar el plazo»?',
  columns:[
   {label:'Explicar · ¿por qué ocurrió?',text:'«El retraso se produjo por un fallo del sistema».',note:'Atribuye el retraso al sistema, desplazando la explicación desde la conducta de los solicitantes.'},
   {label:'Justificar · ¿por qué aceptar la decisión?',text:'«Por tanto, debemos ampliar el plazo».',marks:['Por tanto'],note:'Convierte esa atribución en una razón para actuar: requiere un criterio sobre equidad, responsabilidades y condiciones del trámite.'}
  ],
  verdict:'La frase justifica una ampliación a partir de cómo representa el retraso. Un criterio posible sería no perjudicar a quien sufrió un fallo ajeno; hay que declararlo y discutirlo. Comprender una causa no obliga a aceptar una medida.',
  task:{label:'En la ficha 6',text:'Explica las secuencias efectivamente presentes en tu texto y compáralas con el texto mixto.'},
  source:'Ejemplo. Explicación y argumentación: Calsamiglia y Tusón (2012, §10.4 · páginas 308–312 del archivo; §10.3 · páginas 295–300 del archivo).',
  anchors:['El retraso se produjo por un fallo del sistema; por tanto, debemos ampliar el plazo','La causa atribuida al sistema representa el retraso como un problema ajeno al solicitante','el criterio de que ese fallo no debe perjudicar su acceso al trámite','comprender una causa no obliga a aceptar una medida','¿Qué premisa adicional conecta la explicación con la decisión?']
 },
 'alcance-conclusion':{
  type:'scale',planned:'s15-e1',topic:'Contraejemplo y límite de evidencia',placed:true,replaces:'example',
  label:'Revisión de una afirmación sobre la carta y el aviso',
  question:'¿Qué afirmación corrige el aviso y qué queda por saber sobre sus lectores?',
  axis:{from:'Lo que el corpus sostiene',to:'Lo que exige otros datos'},
  items:[
   {text:'«La carta y el aviso se dirigen exclusivamente a la dirección de la carrera».',label:'El aviso ofrece un contraejemplo. «Si estás en primer semestre, ¿qué ejemplos te ayudarían?» interpela directamente a estudiantes. Esa frase contradice «exclusivamente».'},
   {text:'«En la carta se pide una decisión a la dirección. En el aviso se piden sugerencias a estudiantes de primer semestre».',label:'Así queda la conclusión revisada. «Propongo que la carrera publique ejemplos de uso de IA» y la pregunta del aviso muestran el cambio de destinatario y de acción.'},
   {text:'«Los estudiantes de primer semestre entendieron que se les pedía sugerir ejemplos».',label:'Aquí aparece un límite de evidencia. Para sostener esa afirmación harían falta respuestas de estudiantes de primer semestre que leyeron el aviso. El comentario de un compañero documenta su propia lectura.'}
  ],
  task:{label:'En el hito 4',text:'Precisa qué sostienes en «Conclusión revisada y límites». En «Registro de cambios», indica qué pasaje u objeción te llevó a esa decisión.'},
  source:'Carta y aviso retomados de la semana 11. Las afirmaciones sobre el destinatario exclusivo y sobre la recepción se escribieron para este esquema. Corpus pequeño y explicación acotada: apartado «Hacer visible la propia posición» de la lectura integrada de «Teoría» y de la guía de la unidad 3. Selección de corpus: Calsamiglia y Tusón (2012, apéndice, §4 · páginas 368–370 del archivo).',
  anchors:['La carta y el aviso se dirigen exclusivamente a la dirección de la carrera','Si estás en primer semestre, ¿qué ejemplos te ayudarían?','La carta propone a la dirección que publique ejemplos de uso de IA','el aviso pide sugerencias a estudiantes de primer semestre','El comentario de un compañero de clase documenta su propia lectura']
 },
 'revision-atribucion':{
  type:'revision',planned:'s10-e2',topic:'Revisar una atribución con marcas',placed:true,position:'after-example',
  label:'Una atribución corregida con las mismas marcas',
  before:{label:'Primera atribución',text:'La comisión considera que el plazo debe revisarse.'},
  evidence:{label:'Lo que muestran las marcas',text:'«informó que» atribuye a la comisión la suficiencia del plazo; «considero» marca al locutor.'},
  after:{label:'Atribución revisada',text:'La comisión sostiene que el plazo es suficiente; el locutor cuestiona esa afirmación.'},
  reason:'La persona citada no es automáticamente el locutor del texto que la cita. La corrección permite ver la disputa: el locutor retoma la evaluación institucional del plazo para someterla a revisión.',
  limit:'no sabemos qué ocurrió después con el plazo, e identificar al productor empírico requiere la fuente del documento.',
  task:{label:'En la ficha 4',text:'Revisa tu atribución y explica qué cambia o se mantiene, con apoyo en las mismas marcas.'},
  source:'Ejemplo; la primera atribución, un error frecuente, se escribió para este esquema. Sujeto hablante y locutor: Ducrot, en Calsamiglia y Tusón (2012, §5.2 · página 150 del archivo). Estilo indirecto: §5.2.1 · página 152 del archivo.',
  anchors:['La comisión informó que el plazo era suficiente; considero que esa afirmación debe revisarse','«Informó que» atribuye a la comisión la suficiencia del plazo','El «yo» de «considero» asume el cuestionamiento','Una revisión puede corregir a quién se atribuye una idea','la autoridad citada pasa a ser objeto de examen','Identificar al productor empírico requiere la fuente del documento']
 },
 'recorrido-consigna':{
  type:'path',planned:'s15-e2',topic:'Convertir el análisis en una enseñanza',placed:true,replaces:'example',
  label:'De la consigna redactada a la consigna ajustada',
  object:{label:'La consigna',text:'«En estas dos cláusulas, subraya quién realiza la acción. Explica una diferencia y señala qué dato necesitarías para interpretarla».'},
  claimLabel:'Qué observar',
  steps:[
   {verb:'Redactar',dimension:'la consigna',question:'¿Qué pide y sobre qué material?',claim:'Material («estas dos cláusulas»), operación («subraya», «explica») y resultado.',evidence:'un segmento que el lector pueda localizar.'},
   {verb:'Probar',dimension:'con un lector',question:'¿Qué respuesta produce?',claim:'Si la respuesta sorprende, pregunta cómo leyó la consigna. Ejemplo: «¿Qué entendiste que debías hacer primero?». Ajusta las instrucciones a partir de esa explicación.',evidence:'una respuesta examinable.'},
   {verb:'Ajustar',dimension:'la instrucción',question:'¿Qué hay que cambiar?',claim:'¿La dificultad procede del concepto, del material o de la instrucción?',evidence:'la respuesta observada y el criterio de revisión.'}
  ],
  scale:'Probar la consigna revisa la instrucción, no solo al lector.',
  task:{label:'En el expediente',text:'Usa un fragmento de tu informe para guiar la lectura y ajusta la consigna después de probarla en el trío.'},
  limit:'la consigna admite interpretaciones discrepantes que se justifiquen con evidencia.',
  source:'Consigna y criterios propios del curso. Probar la consigna y admitir lecturas discrepantes justificadas: apartado «Transformar un análisis en enseñanza» de la lectura integrada de «Teoría» y de la guía de la unidad 6. No se atribuyen estos criterios a un autor externo.',
  anchors:['En estas dos cláusulas, subraya quién realiza la acción','Material accesible y criterios claros hacen examinable ese razonamiento','La revisión ajusta la enseñanza a esa dificultad concreta','¿La dificultad observada procede del concepto, del material o de la instrucción?','producir una respuesta examinable','Admite interpretaciones discrepantes que se justifiquen con evidencia']
 },
 // Theory models: each draws a model that its source presents and that the class already names.
 'turnos-mecanismos':{
  type:'branch',planned:'s2-e2',topic:'El género organiza la intervención',placed:true,
  label:'Los dos mecanismos del cambio de turno',
  model:'Modelo · Cambio de turno, según el manual',
  question:'Termina una intervención: ¿quién habla después?',
  branches:[
   {name:'Heteroselección',text:'Quien habla elige al siguiente.'},
   {name:'Autoselección',text:'Alguien empieza sin ser elegido.'}
  ],
  verdict:'Observa qué respuestas son posibles. La duración aislada no acredita dominación.',
  task:{label:'En la ficha 1',text:'Si tu episodio incluye un intercambio, anota cómo se asigna el turno y qué respuestas quedaban abiertas.'},
  source:'Mecanismos del cambio de turno: Calsamiglia y Tusón (2012, §2.2 · páginas 32–33 del archivo). El manual explica también cuándo puede producirse el relevo entre hablantes: los «lugares apropiados para la transición» (página 33 del archivo).',
  anchors:['Heteroselección: quien habla elige al siguiente','Autoselección: alguien empieza sin ser elegido','Para explicar la participación interesa la secuencia completa y las posibilidades de responder','examinar oportunidades negadas o intervenciones que se impiden, además de la duración del turno']
 },
 'escritura-procesos':{
  type:'cycle',planned:'s4-e1',topic:'Escribir y representar una posición',placed:true,
  label:'Escribir para un lector: planificar, textualizar y revisar se interrelacionan',
  model:'Modelo · Flower y Hayes, procesos de escritura, según el manual',
  steps:[
   {name:'Planificar',text:'Fija objetivos y organiza ideas.'},
   {name:'Textualizar',text:'Pone las ideas por escrito.'},
   {name:'Revisar',text:'Evalúa lo escrito y su adecuación a los objetivos.'}
  ],
  back:'No forman un circuito fijo: cada proceso puede activar los otros, y revisar puede llevar a cambiar el plan.',
  task:{label:'En tu carta',text:'Mientras escribes, vuelve a tu posición y a tus razones cuando necesites ajustarlas. Conserva el primer borrador para explicar después tus decisiones.'},
  source:'Modelo de Flower y Hayes (1980, 1981), en Calsamiglia y Tusón (2012, §3.4.1 · página 81 del archivo). En el modelo completo, un «monitor» coordina cuándo planificar, poner las ideas por escrito o revisar.',
  anchors:['Escribir una carta abierta permite intervenir en un asunto compartido','El esquema relaciona planificación, textualización y revisión de esa intervención']
 },
 'contexto-dimensiones':{
  "type": "facets",
  "planned": "s7-e2",
  "topic": "Contextualizar exige fuentes y función",
  "placed": true,
  "label": "El contexto de la carta en cuatro dimensiones",
  "model": "Modelo · Goodwin y Duranti, según el manual",
  "center": {
    "label": "Contexto",
    "text": "En el mismo intercambio se relacionan la situación de aula, la presentación de la carta, las palabras y los conocimientos de quienes participan."
  },
  "facets": [
    {
      "name": "Localización o marco socioespacial",
      "example": "La carta se escribe y revisa en clase. Se dirige a la dirección; el compañero participa como lector de la revisión."
    },
    {
      "name": "Comportamiento no verbal",
      "example": "La disposición, el tamaño de las letras y los espacios entre párrafos destacan la propuesta y separan sus razones. Observa los recursos presentes en tu carta."
    },
    {
      "name": "La lengua como contexto",
      "example": "«Los estudiantes exigimos» propone una voz colectiva; «Como estudiante, propongo» sitúa una voz individual."
    },
    {
      "name": "Contexto extrasituacional",
      "example": "Conocer la consigna y el papel de la dirección ayuda a entender para qué se escribe y quién podría decidir sobre la propuesta."
    }
  ],
  "task": {
    "label": "En la ficha 3",
    "text": "Relaciona tu dato con el aspecto de la situación que ayuda a explicar."
  },
  "source": "Cuatro dimensiones del contexto: Goodwin y Duranti (1992), en Calsamiglia y Tusón (2012, §4.3 · páginas 127–128 del archivo).",
  "anchors": [
    "localización o marco socioespacial",
    "comportamiento no verbal",
    "lengua como contexto",
    "contexto extrasituacional",
    "la misma interacción"
  ]
}
};

// Image slots. While `file` is empty students see nothing and the author view shows the specification.
// The teacher saves the image as dist/<file> (WebP, about 1600 × 900, under 250 KB) and fills `credit`.
// AI images are scenes only: no text inside the image and no people; any needed text is laid over in HTML.
const unaeBecasPair={
 id:'unae-is2023',
 label:'Ejemplo documental: resolución y aviso de las mismas becas UNAE',
 intro:'Becas de grado IS2023 · UNAE, Ecuador. El aviso enlaza la resolución que aprueba las bases y el cronograma.'
};
export const visualImages={
 'img-aviso-puerta':{
  planned:'s1-e1',topic:'El discurso: lenguaje en una situación concreta',kind:'Escena',ai:true,placed:true,
  show:'Puerta de vidrio de la biblioteca de una facultad con una hoja en blanco pegada a la altura de los ojos. El texto del aviso se superpone en HTML.',
  alt:'Escena ficticia de una puerta de vidrio de biblioteca, con una hoja blanca pegada y estanterías al fondo. El aviso se muestra como texto sobre la hoja.',
  caption:'Escena ficticia para situar el aviso: «desde mañana» depende del día en que se pegó.',
  overlay:openingNotice.text,
  prompt:'Fotografía realista, plano medio, puerta de vidrio de la biblioteca de una facultad universitaria latinoamericana, luz de día, una hoja A4 en blanco pegada con cinta a la altura de los ojos, sin texto legible, sin personas, sin logotipos.',
  file:'img/img-aviso-puerta.webp',credit:'OpenAI · ilustración creada para este curso',width:1600,height:900
 },
 'img-entonacion-bueno':{
  planned:'s3-e1',topic:'Una marca de voz necesita contraste',kind:'Evidencia',ai:false,placed:true,
  show:'Captura de Praat con la curva de tono de tu grabación de «bueno» dicho dos veces: para iniciar una respuesta y para cerrar una discusión.',
  alt:'Dos curvas de tono de «bueno»: [describe la dirección de cada curva al añadir la imagen].',
  caption:'Demostración de aula: grabación del docente.',
  file:null,credit:null,width:1600,height:900
 },
 'img-cartelera':{
  planned:'s6-e1',topic:'La composición orienta la lectura',kind:'Objeto de análisis',ai:false,placed:true,
  show:'Foto propia de un aviso o una cartelera real de la facultad, sin nombres, rostros ni datos personales.',
  alt:'Aviso real de la facultad: [describe qué aparece primero, qué es más grande y qué está recuadrado].',
  caption:'Segundo objeto para describir la composición: orden, tamaño y encuadre.',
  file:null,credit:null,width:1600,height:1200
 },
 'img-resolucion':{
  planned:'s11-e1',topic:'Género, secuencia y medio',kind:'Evidencia',ai:false,placed:true,
  show:'Recorte fiel de la página 5 de la Resolución 001-UNAE-CBAEEE-002-2023: autoridad, bloque RESUELVE, artículo 1, disposiciones y fecha.',
  alt:'Resolución UNAE: bajo el rótulo RESUELVE, el artículo 1 aprueba las bases y el cronograma de becas de grado IS2023. Después se ordena su publicación. Es un recorte de la página 5.',
  caption:'Resolución 001-UNAE-CBAEEE-002-2023 (4 de mayo de 2023) · recorte de la p. 5. El artículo 1 aprueba las bases y el cronograma de postulación; la disposición general ordena su publicación.',
  pair:unaeBecasPair,
  source:{url:'https://unae.edu.ec/wp-content/uploads/2023/05/resoluciO%CC%81n_no._001-unae-cbaeee-002-2023-signed-signed-1.pdf#page=5',label:'Fuente: resolución original · página 5 del archivo',consulted:'18 de octubre de 2026'},
  transcript:[
   'En ejercicio de las atribuciones que le confiere la Constitución de la República del Ecuador, Ley Orgánica de Educación Superior, Reglamento de Becas, Ayudas Económicas y Estímulos Económicos para los Estudiantes de la Universidad Nacional de Educación, y demás normativa aplicable:',
   'RESUELVE:',
   'Artículo 1.- Aprobar las bases de postulación y el cronograma de postulación, precalificación y adjudicación a becas de grado IS2023, de conformidad con el documento adjunto que forma parte integrante de la presente resolución.',
   'DISPOSICIÓNES GENERALES',
   'PRIMERA. - Notifíquese con el contenido de la presente resolución a la Dirección de Comunicación Estratégica y Secretaría General, a fin de que proceda con su inmediata publicación.',
   'DISPOSICIÓN FINAL:',
   'La presente resolución entrará en vigencia a partir de su aprobación.',
   'Dado y suscrito en la ciudad de Azogues, provincia de Cañar a los cuatro días del mes de mayo de 2023.'
  ],
  file:'img/img-resolucion.webp',credit:'Universidad Nacional de Educación (UNAE) · 2023',width:1601,height:1126
 },
 'img-convocatoria':{
  planned:'s11-e1',topic:'Género, secuencia y medio',kind:'Evidencia',ai:false,placed:true,
  show:'Captura del cuerpo del aviso oficial «Becas nuevas y renovación», con el enlace a la misma resolución, plazo, emisor y fecha de publicación.',
  alt:'Aviso de Bienestar Universitario UNAE: se dirige a la comunidad estudiantil, enlaza la Resolución 001-UNAE-CBAEEE-002-2023, destaca la postulación del 8 al 21 de mayo de 2023 y enlaza las bases. La fecha publicada es el 5 de mayo de 2023.',
  caption:'Aviso «Becas nuevas y renovación» (5 de mayo de 2023) · recorte de la página web. Difunde la decisión y destaca cuándo postular. Su primer párrafo identifica y enlaza la misma resolución.',
  pair:unaeBecasPair,
  source:{url:'https://unae.edu.ec/becas-nuevas-y-renovacion/',label:'Fuente: aviso original · página web',consulted:'18 de octubre de 2026'},
  transcript:[
   'Estimada Comunidad Estudiantil:',
   'Por medio del presente ponemos en su conocimiento la RESOLUCIÓN No.001-UNAE-CBAEEE-002-2023, de fecha 04 de mayo del 2023; el Comité de Becas, Ayudas Económicas y Estímulos Económicos, resuelve en el Artículo 1.- Aprobar las bases de postulación y el cronograma de postulación, precalificación y adjudicación a becas de grado IS2023.',
   'Fechas de postulación: 08 al 21 de mayo del 2023.',
   '>> BASES DE POSTULACIÓN <<',
   'Dirección de Bienestar Universitario',
   '5 mayo, 2023'
  ],
  file:'img/img-convocatoria.webp',credit:'Dirección de Bienestar Universitario, UNAE · 2023',width:858,height:640
 }
};
