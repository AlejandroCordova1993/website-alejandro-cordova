import {openingNotice} from './foundations.js';

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
  limit:'describir ya supone categorías; ninguna fase es descripción pura (Fairclough, 1992: 199). La forma sola no demuestra intenciones ni efectos.',
  source:'Fuentes: Fairclough (1992: 73 y 198–199). Uso lingüístico contextualizado: Calsamiglia y Tusón (2012, §1.1 · PDF 12).',
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
  source:'Ejemplo. Cotexto: Calsamiglia y Tusón (2012, §4.2 · PDF 110, entre los factores del contexto; §8.2.2 · PDF 238, referencias dentro del texto).',
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
  source:'Ejemplo del curso: [pausa] indica la interrupción prevista en su realización. Prosodia: Calsamiglia y Tusón (2012, §2.8.1 · PDF 57); organización temática: §2.8.4 · PDF 60–64; transcripción: apéndice, §1.2 · PDF 358–361.',
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
  source:'Ejemplo. Situación de enunciación: Calsamiglia y Tusón (2012, §2.1 · PDF 29–30). Deixis de persona, posesivos incluidos, y de tiempo: §4.2.1 · PDF 117–122.',
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
  task:{label:'En la ficha 6',text:'Arma tu matriz de segmentos, secuencias y transiciones con la marca y la función de cada tramo.'},
  source:'Ejemplo. Textos heterogéneos y secuencia dominante: Calsamiglia y Tusón (2012, §9.2.2 · PDF 266–268). Narración, descripción y argumentación: §10.1 · PDF 270–274; §10.2 · PDF 280–282; §10.3 · PDF 295–300.',
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
  limit:'el cuadro describe la forma; el cambio por sí solo no prueba una estrategia de ocultamiento, y nombrar a quien actúa no demuestra quién decidió.',
  task:{label:'En la ficha 2',text:'Localiza en el reglamento cláusulas con participantes, acciones y condiciones, y anota dónde queda el agente.'},
  source:'Ejemplos. Pasiva sin agente y nominalización: Fairclough (1992: 178–179). Impersonales y pasivas sin agente que borran al locutor: Calsamiglia y Tusón (2012, §5.1.1 · PDF 138).',
  anchors:['La comisión revisó las solicitudes','Las solicitudes fueron revisadas por la comisión','Se revisaron las solicitudes','«La revisión» convierte el proceso en un nombre','El agente realiza la acción; la autoridad que la decide puede ser otra','La omisión se interpreta junto con los participantes identificados en el documento']
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
  task:{label:'En la ficha 4',text:'Localiza tres segmentos con marcas de persona; busca también nombres, posesivos y terminaciones verbales.'},
  source:'Formas de persona: Calsamiglia y Tusón (2012, §§5.1.1–5.1.4 · PDF 138–143); receptor nombrado como «estudiante» o «usuario», PDF 139; «nosotros» inclusivo y su ejemplo, PDF 141; el locutor que se nombra a sí mismo, como «este departamento», PDF 143. El cuadrante es síntesis del curso.',
  anchors:['nosotros','«los solicitantes» puede designar a los destinatarios','una institución puede nombrarse a sí misma, como «esta comisión»','La forma por sí sola no decide a quién incluye','Distingue quien enuncia, los participantes representados y los destinatarios','nombres, posesivos y terminaciones verbales']
 },
 'enfoques-matriz':{
  type:'matrix',planned:'s7-e1',topic:'Elegir un enfoque cambia la investigación',placed:true,replaces:'example',
  label:'Qué observaría cada enfoque ante el mismo problema',
  object:{label:'Problema',text:'¿Cómo se representa una condición de acceso a una ayuda en una norma y en su explicación pública?'},
  columns:['Marca y lectura posible','Datos para sostenerla'],
  rows:[
   {head:'Fairclough',sub:'dialéctico-relacional',cells:['«Se deberá destinar» establece una obligación. El reparto 65/35 fija prioridades de acceso a los recursos.','El órgano emisor y los considerandos sitúan la decisión y sus fundamentos. Registros de difusión o lectura permitirían estudiar circulación y recepción.']},
   {head:'Van Dijk',sub:'sociocognitivo',cells:['«Adjunte nuevamente el certificado» presenta un trámite anterior y trata al destinatario como capaz de reconocerlo.','Respuestas y experiencias de lectores permiten contrastar qué saben del trámite y cómo entienden su papel. Esos datos ayudan a investigar sus modelos de contexto.']},
   {head:'Wodak y colaboradores',sub:'histórico-discursivo',cells:['«Estudiantes» nombra un grupo; «que no cuenten con recursos económicos suficientes» le atribuye una condición que delimita beneficiarios.','Los considerandos vinculan la ayuda con la continuidad de estudios y aportan una razón para incluir a ese grupo. Versiones comparables permitirían investigar cambios.']}
  ],
  verdict:'La matriz orienta preguntas y procedimientos posibles ante el mismo problema. Las fuentes pueden servir a más de un enfoque; la elección se justifica por la relación que queremos explicar y los datos con que podemos sostenerla.',
  task:{label:'En la ficha 3',text:'Compara qué dato necesitaría cada enfoque y elige el que puedas documentar.'},
  source:'Aplicación del curso al reglamento de becas y al ejemplo de solicitud de un certificado. Fairclough (1992: 73–75), dimensiones, y en Wodak y Meyer (2003: 184–185), enfoque dialéctico-relacional; van Dijk (1999: 124–125), modelos de contexto y de acontecimiento; Wodak (2003: 113–115), estrategias discursivas; Pardo (2012: 48).',
  anchors:['condición de acceso a una ayuda en una norma y en su explicación pública','obligaciones, denominaciones, autoridad y condiciones de producción','representaciones del asunto tratado e interpretaciones de la situación comunicativa','denominaciones, atributos y argumentos en contexto','versiones comparables','Estudiar los conocimientos que median interpretaciones requiere datos adecuados de participantes']
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
  source:'Ejemplo. Mirada, entre los elementos cinésicos: Calsamiglia y Tusón (2012, §2.6.2 · PDF 50–52). Pausas: §2.8.1 · PDF 57.',
  anchors:['Esa es mi propuesta','una pausa y de una mirada al público','La transcripción de palabras permite examinar la formulación','conservando intervalos']
 },
 'tema-global':{
  type:'tree',planned:'s5-e2',topic:'Del significado local al tema global',placed:true,replaces:'example',
  label:'De las proposiciones del texto a una síntesis, y lo que se pierde en el camino',
  leaves:[{label:'Proposición',text:'La ayuda exige matrícula vigente.'},{label:'Proposición',text:'La ayuda exige acreditación de ingresos.'}],
  operation:{label:'Condensar y comprobar qué se pierde',text:'Las dos exigencias construyen un acceso condicionado. «Vigente» delimita la matrícula válida y «acreditación» exige demostrar los ingresos: conservarlas permite explicar qué se pide al solicitante.'},
  top:{label:'Síntesis que hay que revisar',text:'«La ayuda está condicionada a matrícula e ingresos».'},
  loss:{label:'Qué se pierde',items:['«vigente»: no cualquier matrícula sirve.','«acreditación»: no basta tener ingresos; hay que demostrarlos.'],question:'¿Cómo cambia lo que el lector entiende que necesita para acceder a la ayuda?'},
  rejected:{label:'No la sostiene el texto',text:'«La ayuda se ofrece a todos».',note:'Añade una generalización que elimina las condiciones.'},
  limit:'el tema global es una reconstrucción de quien interpreta. Una síntesis puede omitir detalles si justifica su selección; cambiar una condición altera el contenido.',
  task:{label:'En la ficha 2',text:'Reconstruye el tema global y justifica qué seleccionaste, generalizaste o integraste.'},
  source:'Ejemplo. Macroestructura y macrorreglas: Calsamiglia y Tusón (2012, §8.1.2 · PDF 225–226). Generalización y operaciones selectivas y constructivas: van Dijk (1980: 216–217).',
  anchors:['La ayuda exige matrícula vigente y acreditación de ingresos','La ayuda está condicionada a matrícula e ingresos','las condiciones conservadas determinan cómo se representa el acceso a la ayuda','generalizar reúne casos bajo una categoría','pierde «vigente»','Una síntesis puede omitir detalles; debe justificar su selección','Cambiar una condición o introducir una conclusión ajena altera el contenido']
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
  source:'Ejemplo. Esquema de Plantin (1996: 38) con garantía y reserva de Toulmin (1958), en Calsamiglia y Tusón (2012, §10.3 · PDF 297–298).',
  anchors:['La medida beneficia a muchos estudiantes; debemos mantenerla','una medida beneficiosa merece mantenerse','El beneficio estudiantil funciona como criterio de legitimación','la prueba del beneficio','costes o exclusiones']
 },
 'triangulacion-fuentes':{
  type:'triangle',planned:'s8-e1',topic:'Triangular para resolver una dificultad',placed:true,replaces:'example',
  label:'Tres fuentes que responden a preguntas relacionadas, pero no equivalentes',
  center:{label:'Conclusión',text:'Relaciona lo que se exige, cómo se comunica y cómo lo interpreta un participante.'},
  vertices:[
   {label:'Norma',gives:'Fija el procedimiento.',limit:'No muestra cómo se comunicó ni cómo se leyó.'},
   {label:'Aviso',gives:'Informa una convocatoria.',limit:'No acredita cumplimiento.'},
   {label:'Respuesta registrada',gives:'Muestra cómo fue interpretada.',limit:'No representa a todo el alumnado.'}
  ],
  verdict:'El contraste permite explicar qué condición de la norma se vuelve visible en el aviso y cuál reconoce la respuesta registrada. Una diferencia puede precisar dónde cambia la representación del trámite. Repetir una afirmación en varios documentos no asegura evidencias independientes.',
  task:{label:'En la ficha 3',text:'Explica qué permite conocer cada fuente, qué no permite y qué relación entre ellas sostiene tu conclusión.'},
  source:'Ejemplo. Principio de triangulación: Wodak, en Wodak y Meyer (comps., 2003: 104).',
  anchors:['Una norma fija el procedimiento','un aviso informa una convocatoria','una respuesta registrada muestra cómo fue interpretada','lo dispuesto, lo comunicado y lo interpretado','La conclusión se refiere a esas piezas y esa respuesta','no asegura evidencias independientes']
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
  limit:'la secuencia permite describir ese cambio; no prueba un efecto general en toda la institución.',
  task:{label:'En el borrador del expediente',text:'Incorpora la objeción y muestra dónde se observa la modificación.'},
  source:'Ejemplo. Intervenciones e intercambios: Calsamiglia y Tusón (2012, §10.5 · PDF 319–323). Diálogo, evaluación y escalas de cambio: Bolívar (2024: 99–100 / PDF 7–8).',
  anchors:['La inscripción al taller de lectura es accesible: se completa en línea','¿Y cómo se inscribe quien no tiene conexión?','Por eso ofrecemos un punto de atención en el campus, de ocho a doce','no prueba un efecto general en toda la institución']
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
  source:'Ejemplo. Sujeto hablante («ser empírico»), locutor y enunciador: Ducrot (1984), en Calsamiglia y Tusón (2012, §5.2 · PDF 150). Negación polifónica: Ducrot, en Caldiz (2014, PDF 5).',
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
   {label:'Subtítulo',text:'«No aceptamos esa explicación».',note:'La puntuación del subtítulo no demuestra prosodia: no dice si hubo pausa.'},
   {label:'Transcripción con leyenda',text:'«No [pausa] aceptamos esa explicación».',marks:['[pausa]'],note:'La marca declara una pausa que habría que comprobar en el audio; la leyenda explica la convención.'}
  ],
  verdict:'Su función requiere escuchar el entorno: no basta cambiar la puntuación para atribuir una intención.',
  task:{label:'Al transcribir el tramo de Drexler',text:'Usa tu pregunta provisional para elegir 20–30 segundos dentro de 00:39–01:47. Anota ambos intervalos en el localizador: episodio observado y fragmento transcrito. Toma las marcas de la escucha y añade una leyenda.'},
  source:'Representación didáctica del curso. Transcripción: Calsamiglia y Tusón (2012, apéndice, §1.2 · PDF 358–361).',
  anchors:['No [pausa] aceptamos esa explicación','La puntuación de un subtítulo es una decisión de escritura que debe contrastarse con el audio','La leyenda precisa qué representa cada marca y la escucha decide dónde corresponde','su posible función requiere las palabras próximas y la continuación']
 },
 'accion-clausula':{
  type:'annotated',planned:'s4-e1',topic:'Escribir configura una acción social',placed:true,replaces:'example',
  label:'Cómo una cláusula distribuye acciones y su orden',
  text:'«La comisión verificará los requisitos antes de resolver la solicitud».',
  marks:[
   {words:'La comisión',label:'Quien actúa',note:'se le atribuyen la verificación y la resolución de la solicitud.'},
   {words:'verificará',label:'Acción futura',note:'proyecta una actuación institucional que el solicitante puede esperar.'},
   {words:'antes de resolver',label:'Orden del procedimiento',note:'primero se verifica; después se resuelve.'}
  ],
  verdict:'La cláusula presenta a la comisión como responsable de tramitar la solicitud y ordena su actuación: verificar antes de resolver. Así organiza la relación entre quien solicita y quien decide; para afirmar que se cumplió habría que investigar la aplicación.',
  task:{label:'En la ficha 2',text:'Formula tu pregunta inicial: qué regula el texto y qué documentos necesitarías para estudiar su cumplimiento.'},
  source:'Ejemplo. Prácticas escritas en los ámbitos de la vida social, entre ellos el institucional: Calsamiglia y Tusón (2012, §3.2 · PDF 76).',
  anchors:['La comisión verificará los requisitos antes de resolver la solicitud','Relaciona la formulación con la acción que permite: solicitar, verificar o resolver','qué necesitaríamos para estudiar su cumplimiento','su aplicación se estudia con otros datos']
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
  task:{label:'En la ficha 2',text:'Escribe dos inferencias con sus fundamentos y los datos que faltan.'},
  source:'Ejemplo. Presuposición: Calsamiglia y Tusón (2012, §7.2.1 · PDF 191–192) y Brown y Yule (1983: 28–31). Implicatura y su cancelación: Grice, en Escandell (1996: 86–87).',
  anchors:['Adjunte nuevamente el certificado','presenta una acción anterior como información dada por supuesta','comprobar la entrega anterior exige consultar el expediente','Un lector nuevo necesitaría recuperar esa información','«Algunos grupos entregaron» puede sugerir «no todos»','cancela esa implicatura']
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
  verdict:'La primera disposición destaca la convocatoria y la entrega; la segunda presenta primero las condiciones de acceso. Las mismas palabras proponen así distintas prioridades al destinatario. La prominencia propone una lectura; no demuestra un efecto universal.',
  task:{label:'En la ficha 2',text:'Describe la disposición original de tu documento y propone una alternativa que conserve las mismas palabras.'},
  source:'Aviso inventado para este esquema. Tipografía y diseño gráfico: Calsamiglia y Tusón (2012, §3.5 · PDF 86). Valor informativo, prominencia y encuadre: Kress y van Leeuwen (2021: 181–182).',
  anchors:['«Requisitos» aparece en letra pequeña','conserva las mismas palabras y gana tamaño y posición inicial','Tamaño, posición, agrupación y encuadre proponen jerarquías','La prominencia propone una lectura; no demuestra un efecto universal','Para comparar disposición, conserva el mismo contenido verbal']
 },
 'diseno-lectura':{
  type:'contrast',planned:'s6-e2',topic:'Distinguir diseño propuesto y lectura observada',placed:true,replaces:'example',
  label:'Lo que el diseño propone y lo que el lector hizo',
  question:'¿Qué parte de la hipótesis apoya la respuesta y qué parte hay que revisar?',
  columns:[
   {label:'Diseño propuesto · hipótesis',text:'«Al destacar “Requisitos”, será más fácil localizar las condiciones».',marks:['“Requisitos”'],note:'Una jerarquía visible propone una lectura.'},
   {label:'Lectura observada · un compañero',text:'Encuentra el título, pero omite una condición ubicada debajo.',note:'Es un dato de lectura en una situación concreta, no una regla para todos.'}
  ],
  verdict:'El lector localizó el título, pero omitió una condición. Destacar «Requisitos» no bastó para reconocer todo lo exigido en esta lectura. La agrupación es una explicación posible que se puede comprobar; también pueden influir la formulación y los conocimientos del lector.',
  limit:'ejemplo construido de revisión: en tu ficha usa la respuesta que realmente obtuviste.',
  task:{label:'En la ficha 2',text:'Revisa tu interpretación tras el contraste visual y explica qué cambió.'},
  source:'Ejemplo construido del curso. Tipografía y diseño gráfico: Calsamiglia y Tusón (2012, §3.5 · PDF 86). El lector, sujeto activo de la lectura: §3.4.2 · PDF 83–84.',
  anchors:['al destacar «Requisitos», será más fácil localizar las condiciones','Un compañero encuentra el título, pero omite una condición ubicada debajo','Revisar la agrupación permite poner a prueba si contribuyó a esa omisión','No conviertas una respuesta en una regla para todos','En la ficha se contrasta con la respuesta realmente obtenida']
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
  task:{label:'En la ficha 3',text:'Reúne tres datos contextuales con fuente, localizador y función en tu análisis.'},
  limit:'el ejemplar no demuestra por sí solo quién recibió las ayudas ni una discriminación efectiva.',
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
  task:{label:'En la ficha 4',text:'Contrasta una atribución de tu corpus: qué verbo la introduce, qué marcas la sostienen y qué lectura alternativa examinaste.'},
  source:'Ejemplo. Verbo que anuncia la cita (verba dicendi) e indica el acto de habla atribuido: Calsamiglia y Tusón (2012, §5.2.1 · PDF 152).',
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
  source:'Ejemplo. Géneros de cada esfera de actividad: Bajtín, en Calsamiglia y Tusón (2012, §9.1.2 · PDF 258–259). Rasgos para describir un género: §9.1.4 · PDF 261–263.',
  anchors:['Una resolución y un aviso de convocatoria pueden referirse a las mismas ayudas','la resolución aprueba bases y cronograma; el aviso comunica la decisión y orienta la postulación','En las piezas UNAE enlazadas, la disposición de publicar y el aviso permiten estudiar ese vínculo documentado','Disponer realiza una acción institucional','un aviso escrito puede cambiar de género sin cambiar de medio']
 },
 'puente-faltante':{
  type:'argument',planned:'s12-e2',topic:'Un salto inferencial necesita un puente',placed:true,replaces:'example',
  label:'Una conclusión que descansa en una ley de paso implícita',
  premise:{label:'Premisa · dato',text:'ambos avisos hablan de becas'},
  conclusion:{label:'Conclusión',connector:'por eso',text:'uno deriva del otro'},
  law:{label:'Ley de paso implícita, sin justificar',text:'si dos avisos comparten tema, uno deriva del otro',missing:true},
  verdict:'Para investigar el vínculo hace falta otro dato: una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo. En la semana 14, clase 1 el esquema se completa con garantía y reserva.',
  limit:'una semejanza temática puede sostener una comparación sin probar dependencia entre piezas.',
  task:{label:'En la revisión entre pares',text:'Busca en el desarrollo de tu compañero el dato, el criterio o la condición que sostiene cada paso.'},
  source:'Ejemplo. Premisa, ley de paso y conclusión: Plantin (1996: 38), en Calsamiglia y Tusón (2012, §10.3 · PDF 297); pasos implícitos, PDF 298.',
  anchors:['Ambos avisos hablan de becas; por eso uno deriva del otro','El tema compartido no acredita derivación','si dos avisos comparten tema, uno deriva del otro','una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo','Una semejanza temática puede sostener una comparación sin probar dependencia entre piezas']
 },
 'evidencias-argumento':{
  type:'tree',planned:'s12-e1',topic:'De las evidencias al argumento parcial',placed:true,replaces:'example',
  label:'Dos evidencias unidas por una relación explicada',
  leaves:[{label:'Segmento 1',text:'Una condición se formula en la norma.'},{label:'Segmento 2',text:'Esa condición se reformula en una adaptación propia.'}],
  operation:{label:'Relación explicada',text:'En el ejemplo de la clase anterior, «exige» formula la condición; «debes cumplir» la dirige al estudiante y «demostrarlos» explica la acreditación.'},
  top:{label:'Afirmación parcial',text:'La adaptación convierte una exigencia impersonal en orientación dirigida al estudiante, conservando las condiciones de acceso.'},
  rejected:{label:'Excede los datos',text:'«La adaptación hizo que se entendiera mejor».',note:'Atribuir efectos exige otras evidencias de lectura.'},
  limit:'dos evidencias necesitan una relación explicada; una lista de citas no constituye ese desarrollo.',
  task:{label:'En el hito 3',text:'Explica qué muestra cada segmento, cómo se relacionan, qué objeción afecta a la conclusión y hasta dónde llega.'},
  source:'Ejemplo de esta clase; la conclusión que excede los datos se escribió para este esquema. Efectos y evidencias de lectura: apartado «Dibujar una relación no la demuestra» de la lectura integrada de «Teoría» y de la guía de la unidad 5. Procesos de lectura: Calsamiglia y Tusón (2012, §3.4.2 · PDF 83–85).',
  anchors:['una condición se formula en la norma','esa condición se reformula en una adaptación propia','La conclusión relaciona el cambio verbal con una nueva posición del lector','Para estudiar si esa orientación fue comprendida, se contrasta con su respuesta','Las evidencias y las categorías sostienen esa interpretación']
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
  source:'Ejemplo. Explicación y argumentación: Calsamiglia y Tusón (2012, §10.4 · PDF 308–312; §10.3 · PDF 295–300).',
  anchors:['El retraso se produjo por un fallo del sistema; por tanto, debemos ampliar el plazo','La causa atribuida al sistema representa el retraso como un problema ajeno al solicitante','el criterio de que ese fallo no debe perjudicar su acceso al trámite','comprender una causa no obliga a aceptar una medida','¿Qué premisa adicional conecta la explicación con la decisión?']
 },
 'alcance-conclusion':{
  type:'scale',planned:'s15-e1',topic:'Un límite precisa la conclusión',placed:true,replaces:'example',
  label:'La misma observación con alcances crecientes',
  question:'¿Qué sabemos después del análisis y qué pregunta permanece abierta?',
  axis:{from:'Lo que el corpus sostiene',to:'Lo que exige otros datos'},
  items:[
   {text:'«En los tres avisos analizados no se identifica al órgano responsable».',label:'Fija conjunto y observación: esos avisos, por sí solos, no permiten saber a qué órgano atribuir la actuación.'},
   {text:'«Los avisos de la institución no identifican al órgano responsable».',label:'Generaliza a todos los avisos: un corpus pequeño no representa a todos.'},
   {text:'«La institución oculta sistemáticamente a sus responsables».',label:'Atribuye una estrategia: necesitaría criterios y fuentes adicionales.'}
  ],
  limit:'el corpus pequeño permite afirmaciones delimitadas. La revisión debe indicar qué evidencia afectó qué afirmación.',
  task:{label:'En el hito 4',text:'Escribe tu conclusión revisada con su alcance y registra qué evidencia cambió qué afirmación.'},
  source:'Ejemplo de esta clase; las dos formulaciones más amplias se escribieron para este esquema. Corpus pequeño y explicación acotada: apartado «Hacer visible la propia posición» de la lectura integrada de «Teoría» y de la guía de la unidad 3. Selección de corpus: Calsamiglia y Tusón (2012, apéndice, §4 · PDF 368–370).',
  anchors:['En los tres avisos analizados no se identifica al órgano responsable','los avisos comunican las decisiones sin vincularlas allí con un órgano responsable','Investigar una estrategia sistemática o las respuestas efectivas de los lectores ampliaría el problema y las evidencias necesarias','El corpus delimitado permite explicar relaciones concretas entre formulaciones, participantes y contexto','La revisión debe indicar qué evidencia afectó qué afirmación']
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
  source:'Ejemplo; la primera atribución, un error frecuente, se escribió para este esquema. Sujeto hablante y locutor: Ducrot, en Calsamiglia y Tusón (2012, §5.2 · PDF 150). Estilo indirecto: §5.2.1 · PDF 152.',
  anchors:['La comisión informó que el plazo era suficiente; considero que esa afirmación debe revisarse','«Informó que» atribuye a la comisión la suficiencia del plazo','El «yo» de «considero» asume el cuestionamiento','Una revisión puede corregir a quién se atribuye una idea','la autoridad citada pasa a ser objeto de examen','Identificar al productor empírico requiere la fuente del documento']
 },
 'recorrido-consigna':{
  type:'path',planned:'s15-e2',topic:'Convertir el análisis en una enseñanza',placed:true,replaces:'example',
  label:'De la consigna redactada a la consigna ajustada',
  object:{label:'La consigna',text:'«En estas dos cláusulas, subraya quién realiza la acción. Explica una diferencia y señala qué dato necesitarías para interpretarla».'},
  claimLabel:'Qué observar',
  steps:[
   {verb:'Redactar',dimension:'la consigna',question:'¿Qué pide y sobre qué material?',claim:'Material («estas dos cláusulas»), operación («subraya», «explica») y resultado.',evidence:'un segmento que el lector pueda localizar.'},
   {verb:'Probar',dimension:'con un lector',question:'¿Qué respuesta produce?',claim:'Una respuesta inesperada revisa la consigna; no prueba que el lector no comprendiera.',evidence:'una respuesta examinable.'},
   {verb:'Ajustar',dimension:'la instrucción',question:'¿Qué hay que cambiar?',claim:'¿La dificultad procede del concepto, del material o de la instrucción?',evidence:'la respuesta observada y el criterio de revisión.'}
  ],
  scale:'Probar la consigna revisa la instrucción, no solo al lector.',
  task:{label:'En el expediente',text:'Prueba tu microconsigna con un compañero y registra qué ajustaste y por qué.'},
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
  source:'Mecanismos del cambio de turno: Calsamiglia y Tusón (2012, §2.2 · PDF 32–33). El manual explica también cuándo puede producirse el relevo entre hablantes: los «lugares apropiados para la transición» (PDF 33).',
  anchors:['Heteroselección: quien habla elige al siguiente','Autoselección: alguien empieza sin ser elegido','Para explicar la participación interesa la secuencia completa y las posibilidades de responder','examinar oportunidades negadas o intervenciones que se impiden, además de la duración del turno']
 },
 'escritura-procesos':{
  type:'cycle',planned:'s5-e1',topic:'El lector aporta conocimientos',placed:true,
  label:'Escribir para un lector: planificar, textualizar y revisar se interrelacionan',
  model:'Modelo · Flower y Hayes, procesos de escritura, según el manual',
  steps:[
   {name:'Planificar',text:'Fija objetivos y organiza ideas.'},
   {name:'Textualizar',text:'Pone las ideas por escrito.'},
   {name:'Revisar',text:'Evalúa lo escrito y su adecuación a los objetivos.'}
  ],
  back:'No forman un circuito fijo: cada proceso puede activar los otros, y revisar puede llevar a cambiar el plan.',
  task:{label:'En la ficha 2',text:'Si al revisar una inferencia deja de sostenerse, vuelve al plan: conserva la primera versión y explica el cambio.'},
  source:'Modelo de Flower y Hayes (1980, 1981), en Calsamiglia y Tusón (2012, §3.4.1 · PDF 81). En el modelo completo, un «monitor» coordina cuándo planificar, poner las ideas por escrito o revisar.',
  anchors:['describen los procesos de quien escribe','planificar, textualizar y revisar son procesos que se alternan','Textualizar es poner las ideas por escrito','revisar puede llevar a cambiar el plan','No forman un circuito fijo: cada proceso puede activar los otros']
 },
 'contexto-dimensiones':{
  type:'facets',planned:'s7-e2',topic:'Contextualizar exige fuentes y función',placed:true,
  label:'Las cuatro dimensiones del contexto',
  model:'Modelo · Goodwin y Duranti, según el manual',
  center:{label:'Contexto',text:'Las dimensiones actúan conjuntamente: un dato importa cuando cambia cómo entendemos la acción o la relación entre participantes.'},
  facets:[
   {name:'Localización o marco socioespacial',example:'La fecha sitúa una versión; la institución permite establecer quién puede emitir una norma.'},
   {name:'Comportamiento no verbal',example:'En un intercambio, la mirada puede indicar a quién se dirige una intervención. En el reglamento, el emblema junto al nombre de la universidad aporta un indicio visual de identidad institucional, que se interpreta con el encabezado y «RESUELVE».'},
   {name:'La lengua como contexto',example:'Los tratamientos proponen una relación; las referencias conectan la intervención con lo ya dicho.'},
   {name:'Contexto extrasituacional',example:'Conocer la práctica ayuda a reconocer una solicitud, una decisión o una objeción.'}
  ],
  task:{label:'En la ficha 3',text:'Al revisar tus tres datos, indica qué dimensión aporta cada uno.'},
  source:'Cuatro dimensiones del contexto: Goodwin y Duranti (1992), en Calsamiglia y Tusón (2012, §4.3 · PDF 127–128).',
  anchors:['distinguen cuatro dimensiones del contexto','la localización o marco socioespacial, como una fecha o una institución','el comportamiento no verbal, como los gestos','la lengua como contexto, con tratamientos y referencias','el contexto extrasituacional, los conocimientos previos que permiten reconocer qué está pasando','Se estudian por separado, pero actúan conjuntamente']
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
  source:{url:'https://unae.edu.ec/wp-content/uploads/2023/05/resoluciO%CC%81n_no._001-unae-cbaeee-002-2023-signed-signed-1.pdf#page=5',label:'Fuente: resolución original · PDF, p. 5',consulted:'18 de octubre de 2026'},
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
