import {foundations,distinctions} from './foundations.js';
// Exposition accompanies an existing agenda block; it adds no assignments or minutes.
// Examples are authored illustrations, not quotations or new empirical corpus.
const topic=(block,title,explanation,points,example,reading,prompt,source,lesson,projectionDetails=false)=>({block,title,explanation,points,example,reading,prompt,source,lesson,projectionDetails});
export const classContent={
 's1-e1':[
  ...foundations.map(item=>({...item,block:0})),
  {block:0,title:'El concepto de discurso en cinco autores',explanation:'Estas perspectivas construyen problemas distintos: enunciación, diálogo, formación histórica del saber y relaciones entre discurso y sociedad. Las formulaciones son paráfrasis introductorias; no son cinco definiciones equivalentes ni un único método.',perspectives:true,points:[],source:'guia-fundamentos'},
  topic(2,'Observar antes de atribuir intención','Una descripción identifica una forma que otro lector puede comprobar. La interpretación propone qué permite entender esa forma en una situación. El motivo de quien escribe constituye una hipótesis adicional. La descripción también usa categorías: separar sus fundamentos ayuda a revisarlas, sin suponer una observación libre de teoría.',
   ['Distingue palabras presentes, información recuperada y explicación propuesta.','La ausencia de un nombre no identifica por sí sola a quien quiso ocultarlo.'],
   '«Se canceló la reunión».','Podemos comprobar que esta oración no nombra a quien canceló. Para explicar la omisión necesitamos el texto circundante y la situación de publicación.',
   '¿Qué parte de nuestra afirmación puede verificar otro lector en la oración?','guia-2',4)
 ],
 's1-e2':[
  {...distinctions,block:1},
  topic(1,'Cuatro operaciones del análisis','Observar, inferir, explicar y valorar cumplen funciones distintas. Separarlas permite reconocer qué fundamento necesita cada afirmación y revisar una interpretación sin borrar el registro inicial.',
   ['Observar: describir una marca. Inferir: proponer una conclusión a partir de ella.','Explicar: relacionarla con condiciones de uso. Valorar: juzgar desde un criterio explícito.'],
   '«El aviso no identifica al responsable; quizá supone que ya lo conocemos; eso dificulta exigir una respuesta».','La primera afirmación describe; la segunda propone una explicación; la tercera atribuye una dificultad que necesita contrastarse con lectores y condiciones concretas.',
   '¿Qué dato permitiría comprobar cada afirmación?','guia-3',0),
  topic(4,'El contexto pone a prueba una lectura','Una interpretación puede ganar apoyo cuando el cotexto identifica un participante omitido. También puede debilitarse si esa información no aparece. La información adicional modifica el alcance de lo que podemos afirmar.',
   ['Cotexto: palabras e intervenciones que rodean el segmento.','El contexto también incluye situación, institución, conocimientos e indicios de la propia actuación. En el manual, el entorno verbal forma parte del contexto; distinguimos su procedencia para analizarlo.'],
   'Versión 1: «El comité adoptó la medida. Se canceló la reunión». Versión 2: «Se canceló la reunión» como aviso aislado.','En la primera versión hay un candidato recuperable en el cotexto. En la segunda falta ese dato. Ninguna de las dos demuestra por sí sola una finalidad de ocultamiento.',
   '¿Qué cambió en la evidencia y qué sigue siendo una hipótesis?','guia-3',0)
 ],
 's2-e1':[
  topic(0,'Enunciar construye una situación','Enunciar establece una relación entre quien habla, sus destinatarios y el aquí y ahora de la intervención. El género organiza qué acciones se esperan y cómo se puede intervenir.',
   ['La conferencia presente y el diálogo pasado que relata son escenas diferentes.','La publicación digital incorpora otros destinatarios y otras condiciones de acceso.','Actos de habla: distingue lo dicho, la acción realizada al decirlo —pedir, proponer, prometer— y sus efectos observados. La respuesta y la situación ayudan a reconocer la acción.'],
   'En un taller: «Hoy les propongo revisar nuestra primera explicación».','«Hoy», «les» y «nuestra» construyen tiempo, destinatario y pertenencia. Para identificar sus referencias necesitamos esa situación de aula.',
   '¿Qué participantes podemos identificar en la escena observada y cuáles aparecen solo en el relato?','calsamiglia',0),
  topic(2,'Transcribir implica seleccionar','Una transcripción conserva algunas dimensiones de la realización oral y deja fuera otras. Su utilidad depende de la pregunta, las convenciones elegidas y la posibilidad de volver al registro original.',
   ['Las palabras y las marcas de pausa o énfasis deben proceder de la escucha.','Una leyenda explica las convenciones; la puntuación del subtítulo no demuestra prosodia.'],
   'Representación didáctica: «No [pausa] aceptamos esa explicación».','La marca declara una pausa que habría que comprobar en el audio. Su función requiere escuchar el entorno: no basta cambiar la puntuación para atribuir una intención.',
   '¿Qué dimensión necesita nuestra pregunta y qué dimensión no registra esta transcripción?','calsamiglia',2)
 ],
 's2-e2':[
  topic(1,'Palabras, voz y cuerpo','En el taller observamos palabras, voz y cuerpo. El manual distingue elementos no verbales, paraverbales y lingüístico-textuales; incluye la prosodia en el nivel fónico de estos últimos. Nuestra agrupación para observar no sustituye esa clasificación.',
   ['Palabras: deixis para situar referencias; marcadores para orientar la relación con lo anterior; reparación para resolver dificultades de decir, oír o entender.','Voz: prosodia —entonación, ritmo, pausas— y elementos paraverbales —calidad vocal, risa, suspiro—. Cuerpo: mirada, gesto, postura y distancia.'],
   '«Esa es mi propuesta» puede acompañarse de una pausa y de una mirada al público.','La transcripción de palabras permite examinar la formulación. El audio permitiría comprobar la pausa; el video, la mirada. Su coordinación puede estudiarse conservando intervalos.',
   '¿Qué observación cambia si disponemos solo de audio?','calsamiglia',1),
  topic(5,'El género organiza la intervención','Una intervención larga puede ser esperable en una conferencia. En una conversación, su relación con turnos, respuestas y oportunidades de oposición puede ser diferente. La duración aislada no acredita dominación.',
   ['Heteroselección: quien habla elige al siguiente. Autoselección: alguien empieza sin ser elegido. Observa qué respuestas son posibles.','El público presente y el público digital no participan del mismo modo.'],
   'Un docente explica durante cinco minutos; después abre preguntas y retoma una objeción.','Para estudiar control de la interacción interesa la secuencia completa y la posibilidad de respuesta, no solo contar los minutos del docente.',
   '¿Qué evidencia mostraría una restricción de participación en este género?','guia-1',4,true)
 ],
 's3-e1':[
  topic(1,'Una marca de voz necesita contraste','Una pausa, una altura tonal o un énfasis puede contribuir a organizar el discurso. Su función se argumenta en relación con la secuencia y se contrasta con otros casos.',
   ['Caldiz relaciona prosodia y marcadores en un corpus académico situado.','Al ampliar los datos revisa una hipótesis: las excepciones también forman parte del análisis.'],
   'En una demostración de aula, «bueno» puede iniciar una respuesta o cerrar una discusión.','La misma palabra admite funciones diferentes. Hay que escuchar entonación, posición e intervenciones próximas antes de asignarle una función.',
   '¿Qué caso obligaría a modificar nuestra interpretación del marcador?','caldiz',2)
 ],
 's3-e2':[
  topic(1,'Revisar es cambiar una afirmación con razones','La revisión compara la interpretación inicial con la evidencia y las objeciones. Puede corregir una conclusión, restringir su alcance o mantenerla con mejor fundamento.',
   ['Conservar el borrador permite mostrar qué cambió.','Otra explicación debe referirse a las mismas marcas, no a un problema diferente.'],
   'Primera lectura: «la pausa expresa inseguridad». Revisión: «la pausa coincide con el cambio de tema; falta evidencia para atribuir inseguridad».','La revisión distingue una relación observable de un estado psicológico inferido. El nuevo argumento gana precisión al declarar ese límite.',
   '¿Qué dato justificó el cambio y qué evidencia todavía falta?','guia-1',4)
 ],
 's4-e1':[
  topic(1,'Escribir configura una acción social','Un texto escrito construye emisor, destinatario y condiciones de lectura. En una norma, las formulaciones distribuyen capacidades, obligaciones y condiciones; su existencia no demuestra su ejecución.',
   ['Distingue quien dispone, quien acredita una condición y quien recibe un beneficio.','La pregunta y los criterios de selección delimitan qué documentos necesitamos.'],
   '«La comisión verificará los requisitos antes de resolver la solicitud».','Se representa una acción futura y un orden del procedimiento: primero se verifican los requisitos y después se resuelve. El enunciado permite analizar esa distribución; para afirmar que se cumplió habría que investigar la aplicación.',
   '¿Qué regula el texto y qué necesitaríamos para estudiar su cumplimiento?','calsamiglia',0)
 ],
 's4-e2':[
  topic(1,'Agencia y representación de participantes','Una cláusula puede nombrar a quien actúa, dejarlo recuperable o presentar un proceso sin explicitarlo. El sujeto no siempre es el agente: en «Las solicitudes fueron revisadas por la comisión», las solicitudes son sujeto y la comisión realiza la revisión. «La revisión» presenta el proceso como nombre: es una nominalización.',
   ['Nombrar a quien realiza una acción no demuestra quién la decidió.','La omisión admite explicaciones que deben contrastarse con el documento y su producción.','Modalidad: «deben presentar» expresa obligación; «pueden presentar» puede expresar permiso. «Es posible que presenten» expresa posibilidad. Distingue quién impone o autoriza la acción de quién la realiza.'],
   '«La comisión revisó las solicitudes» / «Se revisaron las solicitudes».','La segunda formulación no nombra aquí al participante revisor. El cotexto puede identificarlo; el cambio por sí solo no prueba una estrategia de ocultamiento.',
   '¿Qué sabemos por la cláusula y qué recuperamos del resto del documento?','fairclough',0)
 ],
 's5-e1':[
  topic(1,'El lector aporta conocimientos','Comprender relaciona expresiones del texto con información disponible para el lector. Una inferencia necesita explicitar qué aporta cada componente y qué lectura alternativa sigue siendo posible.',
   ['Flower y Hayes, según el manual, describen los procesos de quien escribe: planificar, textualizar y revisar son procesos que se alternan. Textualizar es poner las ideas por escrito; revisar puede llevar a cambiar el plan. No forman un circuito fijo: cada proceso puede activar los otros.','El conocimiento que el analista supone no coincide necesariamente con el de los lectores reales.','En Grice según Escandell, «Algunos grupos entregaron» puede sugerir «no todos». «Algunos; de hecho, todos» cancela esa implicatura. El supuesto de una entrega anterior en «nuevamente» funciona de otra manera.'],
   '«Adjunte nuevamente el certificado».','«Nuevamente» presenta una acción anterior como información dada por supuesta: una presuposición, según el tratamiento de Calsamiglia y Tusón y Brown y Yule. No prueba que esa acción haya ocurrido. Identificar el certificado exige otras referencias. La lectura integrada distingue este caso de una implicatura.',
   '¿Qué aporta la expresión y qué conocimiento estamos añadiendo?','escandell',1,true)
 ],
 's5-e2':[
  topic(1,'Poner a prueba una inferencia','Una interpretación se fortalece cuando mostramos su fundamento y un dato que podría confirmarla o hacerla cambiar. No toda cláusula es ambigua ni toda inferencia necesita una rival igualmente plausible. La interpretación del lector, la intención atribuida y el efecto observado deben identificarse por separado.',
   ['Conserva las palabras que apoyan la interpretación.','Busca un dato capaz de debilitarla, además de datos que la confirmen.'],
   '«Puede presentar la solicitud hasta el viernes».','Un lector puede preguntar si el viernes está incluido o cuál es la hora límite. La redacción y las reglas de recepción deben examinarse antes de dar una respuesta definitiva.',
   '¿Qué información resolvería la discrepancia sin adivinar lo que quiso decir quien escribió?','brown-yule',1),
  topic(1,'Del significado local al tema global','La macroestructura organiza el sentido global que se reconstruye desde las proposiciones del texto. Seleccionar conserva información pertinente; generalizar sustituye casos por una categoría común; integrar reúne pasos en una acción global. Estas operaciones requieren conservar las condiciones que sostienen la síntesis. La lectura integrada muestra ejemplos y sus pérdidas de información.',
   ['Una síntesis puede omitir detalles; debe justificar su selección.','Cambiar una condición o introducir una conclusión ajena altera el contenido que se representa.'],
   'Texto: «La ayuda exige matrícula vigente y acreditación de ingresos». Síntesis: «La ayuda está condicionada a matrícula e ingresos».','Esta condensación reúne las dos condiciones, pero pierde «vigente» y «acreditación»: hay que revisarla porque puede cambiar lo que se exige. Acortar dos requisitos no ejemplifica por sí solo generalizar; la lectura integrada muestra una generalización mediante una categoría común. «La ayuda se ofrece a todos» va más lejos: añade una generalización que el fragmento no sostiene.',
   '¿Qué condición perderíamos con una síntesis demasiado amplia?','van-dijk',2)
 ],
 's6-e1':[
  topic(1,'La composición orienta la lectura','Tamaño, posición, agrupación y encuadre proponen jerarquías entre los elementos. Su interpretación depende de convenciones situadas y puede contrastarse mediante respuestas de lectores.',
   ['Para comparar disposición, conserva el mismo contenido verbal.','La prominencia propone una lectura; no demuestra un efecto universal.'],
   'En un aviso, «Requisitos» aparece en letra pequeña; en otra disposición conserva las mismas palabras y gana tamaño y posición inicial.','El contraste permite investigar qué se identifica primero sin confundir cambios visuales con cambios de contenido. La respuesta de un lector tiene alcance limitado.',
   '¿Qué decisión visual cambió y qué observación permitiría valorar su efecto?','kress',3)
 ],
 's6-e2':[
  topic(1,'Distinguir diseño propuesto y lectura observada','La composición permite proponer una jerarquía de información. La respuesta del compañero aporta un dato de lectura en una situación concreta. Comparar ambas ayuda a revisar una hipótesis sin confundir lo visible con un efecto garantizado.',
   ['Señala qué elemento gana tamaño, posición o agrupación en tu alternativa.','Registra qué condición identifica el lector y cómo explica su recorrido. No conviertas una respuesta en una regla para todos.'],
   'Hipótesis: al destacar «Requisitos», será más fácil localizar las condiciones. Un compañero encuentra el título, pero omite una condición ubicada debajo.','El contraste apoya que el título se localiza, pero obliga a revisar cómo se agrupan las condiciones. Este es un ejemplo construido de revisión; en tu ficha usa la respuesta que realmente obtuviste.',
   '¿Qué parte de la hipótesis apoya la respuesta y qué parte debemos revisar?','kress',3)
 ],
 's7-e1':[
  topic(1,'Elegir un enfoque cambia la investigación','Los enfoques críticos investigan cómo el discurso participa en relaciones de poder, desigualdad y resistencia. Elegir uno exige relacionar problema, categorías y datos. La elección de esta clase es provisional: la lectura integrada muestra qué observaría cada enfoque y qué evidencia necesitaría.',
   ['Van Dijk, perspectiva sociocognitiva: distingue representaciones del asunto tratado e interpretaciones de la situación comunicativa. Fairclough relaciona texto, práctica discursiva y práctica social; analizamos obligaciones, denominaciones, autoridad y condiciones de producción.','La perspectiva dialéctico-relacional de Fairclough se desarrolla en distintos momentos; el esquema de tres dimensiones que usamos procede de 1992. Wodak y colaboradores, perspectiva histórico-discursiva: estudian denominaciones, atributos y argumentos en contexto; investigar cambios requiere versiones comparables.'],
   'Problema: ¿cómo se representa una condición de acceso a una ayuda en una norma y en su explicación pública?','Podemos investigar las formulaciones y su circulación, reconstruir cambios entre versiones o estudiar interpretaciones con datos adecuados. El enfoque debe responder a la pregunta que efectivamente podemos investigar.',
   '¿Qué dato necesitaría cada enfoque y cuál podemos documentar en nuestro corpus?','pardo',1)
 ],
 's7-e2':[
  topic(1,'Contextualizar exige fuentes y función','El contexto se documenta para resolver una dificultad interpretativa. Una fecha, una institución o una circunstancia importa cuando explicamos cómo afecta la lectura y de qué fuente procede. El contexto también se construye con indicios del propio discurso: tratamientos, referencias, turnos, gestos o prosodia. Vuelve al fragmento para comprobar cómo se presenta la situación.',
   ['Goodwin y Duranti, según el manual, distinguen cuatro dimensiones del contexto: la localización o marco socioespacial, como una fecha o una institución; el comportamiento no verbal, como los gestos; la lengua como contexto, con tratamientos y referencias; y el contexto extrasituacional, los conocimientos previos que permiten reconocer qué está pasando. Se estudian por separado, pero actúan conjuntamente.','La fecha de una carpeta digital no equivale a la fecha de reforma del documento.','Un procedimiento normativo no acredita cómo fue aplicado o experimentado.'],
   'Una norma se aloja en una carpeta «2024», pero su razón final consigna una reforma anterior.','Podemos describir ambos datos con sus fuentes. La carpeta no autoriza a fechar la reforma en 2024 ni demuestra vigencia o ejecución actual.',
   '¿Qué afirmación cambia con este dato y cuál sigue pendiente?','guia-3',0),
  topic(1,'De una formulación a un problema social','El análisis crítico relaciona marcas, categorías y condiciones sociales. Poder es capacidad situada de orientar acciones y acceso a recursos. Legitimar es presentar una decisión como aceptable o autorizada. La ideología exige estudiar relaciones entre creencias, significados y grupos; no se identifica por una palabra aislada.',
   ['Observa qué criterios organiza la norma, quién los establece y qué razones invoca.','Explicita el criterio de evaluación y separa la representación normativa de su aplicación.'],
   'En el artículo 3 del ejemplar de becas, el reparto es 65 % para excelencia académica y 35 % por vulnerabilidad.','Las denominaciones y los porcentajes articulan dos criterios con distinto peso numérico. Los considerandos invocan inclusión y equidad: esa relación es investigable. El ejemplar no demuestra por sí solo quién recibió las ayudas ni discriminación efectiva. La lectura integrada desarrolla el razonamiento y sus límites.',
   '¿Qué relación social podemos explicar con estas marcas y qué afirmación exigiría otros datos?','guia-3',2)
 ],
 's8-e1':[
  topic(1,'Triangular para resolver una dificultad','Triangular relaciona fuentes o procedimientos que examinan aspectos pertinentes de una explicación. La discrepancia puede mostrar diferencias de versión, posición o alcance que el análisis necesita conservar.',
   ['Explica qué permite conocer cada fuente y qué no permite.','Sumar documentos que repiten una afirmación no asegura evidencias independientes.'],
   'Una norma fija el procedimiento; un aviso informa una convocatoria; una respuesta registrada muestra cómo fue interpretada.','Los tres materiales responden a preguntas relacionadas, pero no equivalentes. El aviso no acredita cumplimiento y una respuesta no representa a todo el alumnado.',
   '¿Qué relación entre las fuentes sostiene nuestra conclusión?','wodak',3)
 ],
 's8-e2':[
  topic(0,'Transferir una operación a un caso nuevo','La transferencia conserva una forma de investigar y ajusta sus categorías al nuevo problema. La respuesta debe distinguir descripción, interpretación, fundamento y límite.',
   ['Identifica primero el segmento y la dificultad del caso proporcionado.','Justifica las herramientas que realmente utilizas; no apliques todo el glosario.'],
   'Una omisión en un aviso y una omisión en un reglamento pueden tener condiciones de uso diferentes.','La misma categoría permite formular preguntas comparables. La conclusión debe reconstruirse con los datos de cada caso, sin transportar automáticamente la explicación anterior.',
   '¿Qué operación se conserva y qué evidencia necesitamos examinar de nuevo?','guia-3',4)
 ],
 's9-e1':[
  topic(1,'Personas y destinatarios se reconstruyen','Las marcas personales y las denominaciones construyen posiciones en el discurso. La referencia de «nosotros» depende del pasaje y puede variar; el destinatario construido no identifica a todos los lectores reales.',
   ['Distingue quien enuncia, los participantes representados y los destinatarios.','Persona gramatical y papel comunicativo no siempre coinciden: «los solicitantes» puede designar a los destinatarios, y una institución puede nombrarse a sí misma, como «esta comisión». La forma por sí sola no decide a quién incluye. Busca también nombres, posesivos y terminaciones verbales.'],
   'Paráfrasis del curso: Menchú relaciona el reconocimiento individual con una conquista colectiva. Márquez plantea que la unidad exige reconocer diferencias entre las mujeres.','Vuelve a los recortes enlazados en la actividad y localiza las marcas que sostienen esta comparación. Las autoras intervienen desde posiciones y situaciones distintas: recibir un premio y responder una entrevista. Sus palabras no representan automáticamente a todas las personas indígenas o afrodescendientes. Guarda tus propios fragmentos del original, no esta paráfrasis.',
   '¿Qué marca sostiene la inclusión que estamos proponiendo?','calsamiglia',0)
 ],
 's9-e2':[
  topic(1,'Responsabilidad y perspectiva','En la distinción de Ducrot presentada por el manual, el sujeto hablante (ser empírico) produce el mensaje; el locutor es la figura responsable de enunciarlo; los enunciadores son figuras o voces a las que atribuye puntos de vista. No equivalen automáticamente a personas, redactores o firmantes.',
   ['Para esta ficha usamos esas definiciones de Ducrot. No las trasladamos automáticamente a otros modelos de enunciación.','Negar una proposición puede evocar una perspectiva sin identificar un hablante empírico.'],
   '«La medida no es un privilegio».','Ejemplo docente de una lectura polifónica de la negación, apoyada en Ducrot según Caldiz: se evoca «la medida es un privilegio» y se lo rechaza. El enunciado aislado no identifica a quien lo habría sostenido. El cotexto permite precisar si se responde a algo dicho o se previene una objeción.',
   '¿Podemos atribuir la perspectiva a alguien o solo describir que se evoca?','caldiz',1)
 ],
 's10-e1':[
  topic(1,'Citar también encuadra','El discurso referido incorpora palabras o perspectivas con una selección y una forma de presentación. Comillas, verbos introductores, paráfrasis y cotexto contribuyen a construir adhesión, distancia o incertidumbre.',
   ['Directa: «La portavoz dijo: “Revisaremos el caso mañana”». Indirecta: «La portavoz dijo que revisarían el caso al día siguiente». Cambia el centro de referencia; el ajuste depende de la situación.','Una cita dentro de un relato no acredita por sí sola literalidad histórica.'],
   '«El portavoz aseguró que la medida era necesaria» / «El portavoz admitió que la medida era necesaria».','La proposición atribuida se conserva; el verbo cambia su encuadre. La relación que construye cada formulación necesita explicarse en su cotexto.',
   '¿Qué cambia en la atribución cuando cambia el verbo introductor?','calsamiglia',2)
 ],
 's10-e2':[
  topic(1,'Revisar una atribución con marcas','El mapa reúne segmento, perspectiva, marcas, responsabilidad y adhesión o distancia. La persona citada no es automáticamente el locutor del texto que la cita. El ejemplo muestra cómo completar esos campos; una lectura rival necesita apoyo en las mismas marcas.',
   ['Citar una proposición no implica necesariamente aceptarla.','Distingue corregir una atribución de restringir su certeza o alcance.'],
   '«La comisión informó que el plazo era suficiente; considero que esa afirmación debe revisarse».','Segmento: la oración del ejemplo. Fuente citada: la comisión. Locutor: el «yo» implícito en «considero»; identificar al productor empírico requiere la fuente del documento. Marcas: «informó que» atribuye la suficiencia del plazo; «debe revisarse» la cuestiona. Responsabilidad y distancia quedan diferenciadas; no sabemos qué ocurrió después con el plazo.',
   '¿Qué perspectiva se sostiene y qué perspectiva se somete a examen?','guia-4',4)
 ],
 's11-e1':[
  topic(1,'Género, secuencia y medio','El manual relaciona el género con una práctica social y con pautas relativamente estables de tema, estilo, composición y destinatario. Adopta de Adam la secuencia como unidad de organización interna. Las distinciones de modos, medios y soportes se complementan aquí con Kress y Rajewsky; no son categorías exclusivas del manual.',
   ['Un reglamento puede justificar y disponer. Disponer realiza una acción institucional: no es automáticamente una de las cinco secuencias de Adam. Hay que examinar cómo se organiza cada tramo.','Modo: escritura, habla, imagen o gesto. Medio: forma de producción y comunicación, como cine o fotografía. Soporte: papel o pantalla. Una plataforma organiza circulación; un aviso escrito puede cambiar de género sin cambiar de medio.'],
   'Una resolución y un aviso de convocatoria pueden referirse a las mismas ayudas.','La resolución dispone; el aviso orienta una acción de sus destinatarios. Compartir tema no los convierte en el mismo género ni demuestra un vínculo entre sus versiones.',
   '¿Qué acción permite reconocer el género de cada pieza?','calsamiglia',0)
 ],
 's11-e2':[
  topic(1,'Recontextualizar implica seleccionar','Al incorporar un material a otra situación se pueden conservar, omitir o reformular elementos. La relación se estudia con fuentes; una adaptación propia se identifica como experimento didáctico.',
   ['Documenta el vínculo entre piezas antes de hablar de circulación.','Cambiar destinatario y propósito exige examinar qué condiciones se conservan.'],
   'Transformamos una cláusula normativa en una explicación para estudiantes de primer semestre.','La nueva pieza puede aclarar vocabulario y ordenar la información. Debe conservar condiciones pertinentes y su alcance y declararse adaptación propia; no es una comunicación oficial de la institución.',
   '¿Qué transformación facilita la comprensión y cuál podría alterar una condición?','fairclough',3)
 ],
 's12-e1':[
  topic(1,'De las evidencias al argumento parcial','Un argumento de análisis relaciona una afirmación con segmentos, categorías y contexto. Dos evidencias necesitan una relación explicada; una lista de citas no constituye ese desarrollo.',
   ['Explica qué muestra cada segmento y cómo responde a la pregunta.','Añade una objeción pertinente y delimita qué parte de la conclusión afecta.'],
   'Segmento 1: una condición se formula en la norma. Segmento 2: esa condición se reformula en una adaptación propia.','Podemos comparar la representación de la condición y justificar el cambio. Para atribuir efectos a la adaptación necesitamos otras evidencias de lectura.',
   '¿Qué relación sostiene este párrafo y qué conclusión excedería sus datos?','guia-5',4)
 ],
 's12-e2':[
  topic(1,'Un salto inferencial necesita un puente','Entre la observación y una conclusión debe poder reconstruirse una relación justificada. La revisión entre lectores busca el dato, el criterio o la condición que permite sostener ese paso.',
   ['Una relación dibujada no demuestra circulación histórica.','Una semejanza temática puede sostener una comparación sin probar dependencia entre piezas.'],
   '«Ambos avisos hablan de becas; por eso uno deriva del otro».','El tema compartido no acredita derivación. La conclusión descansa en una ley de paso implícita —si dos avisos comparten tema, uno deriva del otro— que no se sostiene. Para investigar el vínculo necesitamos otro dato: una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo.',
   '¿Qué dato falta entre la observación y la conclusión?','guia-5',4)
 ],
 's13-e1':[
  topic(1,'Un texto puede combinar secuencias','Las secuencias describen operaciones internas que pueden coexistir en un género. Segmentar exige justificar la función del tramo y su relación con los siguientes.',
   ["Narración: presenta acontecimientos relacionados, participantes y una transformación entre una situación inicial y otra final. Los tiempos y conectores ayudan; mencionar un hecho pasado no basta por sí solo.", "Descripción: identifica aquello que describe —anclaje—, selecciona partes o propiedades —aspectualización— y establece relaciones, como ubicación o comparación. También puede describir procesos y adoptar un punto de vista.", "Explicación: hace comprensible una dificultad mediante definición, clasificación, reformulación, ejemplo o analogía. La dificultad y su respuesta pueden estar implícitas; no se limita a explicar causas.", "Argumentación: sostiene una posición ante otras posibles mediante razones que conducen a una conclusión. Hay que reconstruir el paso entre ellas, aunque falte un conector.", "Diálogo: relaciona intervenciones en intercambios, como pregunta/respuesta u ofrecimiento/aceptación. Puede estar registrado o representado dentro de un relato; no equivale simplemente a tener varias voces."],
   '«La solicitud estaba incompleta. Ana añadió el certificado y terminó de reunir los documentos. El certificado contiene nombre y fecha. Ahora el expediente reúne los documentos exigidos; por eso debe admitirse».','El inicio relata una transformación, de solicitud incompleta a expediente reunido. Después se describen partes del certificado. El cierre sostiene una decisión mediante una razón. Son ejemplos inventados para reconocer relaciones; un verbo o conector aislado no determina la clasificación.',
   '¿Qué marca y qué función justifican cada segmentación?','calsamiglia',0)
 ],
 's13-e2':[
  topic(1,'Explicar y justificar tienen preguntas distintas','La explicación aclara una dificultad: puede definir, clasificar, reformular, ejemplificar, usar analogías o relacionar causas. No se limita a lo causal. La justificación sostiene por qué aceptar una afirmación o una decisión. Pueden combinarse, pero comprender una causa no obliga a aceptar una medida.',
   ['Una secuencia temporal no demuestra una causa.','Una causa de una práctica no establece por sí sola que sea aceptable.'],
   '«El retraso se produjo por un fallo del sistema; por tanto, debemos ampliar el plazo».','La primera parte propone una causa. La segunda pide una decisión, que además requiere un criterio sobre equidad, responsabilidades y condiciones del trámite.',
   '¿Qué premisa adicional conecta la explicación con la decisión?','calsamiglia',2)
 ],
 's14-e1':[
  topic(1,'El argumento necesita una regla de paso','Un razonamiento vincula premisas y conclusión mediante una ley de paso: la regla que permite pasar de unas a otra y que puede apoyarse en una garantía. Reconstruirla permite examinar condiciones, excepciones y objeciones, aunque no se formule explícitamente.',
   ['Un topos es una regla de conexión; no equivale a un tema o una palabra frecuente.','Términos: en el manual (Plantin y Toulmin), la ley de paso es la regla y la garantía, su apoyo. En Wodak, el topos funciona como esa regla de conexión.','La objeción debe afectar la inferencia que se sostiene.'],
   '«La medida beneficia a muchos estudiantes; debemos mantenerla».','La regla propuesta es que una medida beneficiosa merece mantenerse. Para apoyarla, adoptamos como criterio que las políticas deben favorecer al estudiantado: es un criterio construido para el ejemplo, no una política real de la UCE. Por separado hay que discutir cómo se acredita el beneficio (prueba de la premisa) y qué costes o exclusiones podrían restringir esa regla.',
   '¿Bajo qué condición dejaría de ser aceptable este paso?','wodak',1)
 ],
 's14-e2':[
  topic(1,'Una respuesta modifica la interacción','El manual estudia intervenciones que se relacionan en intercambios, como pregunta y respuesta. Bolívar profundiza en diálogo, evaluación y cambio con un método propio. Examina qué hace una respuesta con lo anterior: retoma, reformula, objeta o evalúa; no todo diálogo exige una evaluación explícita.',
   ['La evaluación se construye en relaciones entre intervenciones.','Distingue interacción registrada de diálogo reconstruido dentro de un relato.'],
   'A: «El trámite es accesible». B: «¿Accesible también para quien no tiene conexión?». A: «Entonces debemos precisar esa condición».','La respuesta cuestiona el alcance de «accesible». A reconoce que debe precisar la condición, pero todavía no ofrece una nueva formulación. La secuencia permite describir ese cambio; no prueba un efecto general en toda la institución.',
   '¿Qué modifica la respuesta y dónde se observa la modificación?','bolivar',3)
 ],
 's15-e1':[
  topic(1,'Un límite precisa la conclusión','Una conclusión explica qué permite sostener el corpus y qué queda abierto. Las objeciones y contraejemplos ayudan a distinguir la fuerza de una interpretación de su alcance.',
   ['El corpus pequeño permite afirmaciones delimitadas; no representa automáticamente a toda la sociedad.','La revisión debe indicar qué evidencia afectó qué afirmación.'],
   '«En los tres avisos analizados no se identifica al órgano responsable; falta estudiar otros géneros y la recepción».','La formulación fija conjunto y observación. Para afirmar una estrategia institucional sistemática necesitaríamos criterios y fuentes adicionales.',
   '¿Qué sabemos después del análisis y qué pregunta permanece abierta?','guia-6',4)
 ],
 's15-e2':[
  topic(0,'Convertir el análisis en una enseñanza','Una consigna enseña una operación cuando ofrece material accesible, pasos realizables y un criterio de revisión. Su prueba permite detectar supuestos que quien la redactó no había advertido.',
   ['El lector debe poder localizar el segmento y producir una respuesta examinable.','Admite interpretaciones discrepantes que se justifiquen con evidencia.'],
   '«En estas dos cláusulas, subraya quién realiza la acción. Explica una diferencia y señala qué dato necesitarías para interpretarla».','La tarea identifica material, operación y resultado. Una respuesta inesperada ayuda a revisar la consigna; no demuestra por sí sola que el lector no comprendió el tema.',
   '¿La dificultad observada procede del concepto, del material o de la instrucción?','guia-6',4)
 ],
 's16-e1':[
  topic(0,'Defender una decisión con evidencia','Una defensa breve hace examinable una decisión del análisis. Selecciona una afirmación, su segmento y su fundamento; escucha la objeción y responde dentro del alcance de tus datos.',
   ['Dos minutos: decisión y evidencia. Un minuto: pregunta y respuesta breve.','El último minuto permite registrar y cambiar de turno; no es otra exposición.'],
   '«Restringí mi conclusión a estos avisos porque mi selección no permite generalizar a todos los documentos».','Se identifica una decisión y la razón de su alcance. La defensa puede mostrar un localizador y explicar qué dato adicional permitiría ampliar la conclusión.',
   '¿Qué decisión puedes justificar con una evidencia concreta?','guia-6',4)
 ],
 's16-e2':[
  topic(0,'Cerrar un expediente conserva sus límites','El informe integra pregunta, método, análisis y conclusión con referencias comprobables. La autoevaluación relaciona dimensiones de la rúbrica con decisiones observables del propio trabajo.',
   ['Los anexos pertinentes apoyan el argumento; no sustituyen su desarrollo.','Conserva el registro de cambios y distingue el archivo de entrega del respaldo editable.'],
   'Una objeción muestra que un aviso no acredita recepción; el cierre restringe esa afirmación y conserva el análisis de su formulación.','La revisión responde a la objeción sin eliminar lo que sí está respaldado. El informe presenta la decisión, el límite y las fuentes que permiten examinarlo.',
   '¿La conclusión responde a la pregunta con el alcance que permiten las evidencias?','guia-6',4)
 ]
};

export function classSlides(session){
 const content=classContent[session.id]||[];
 return session.agenda.flatMap(([,title,task],block)=>[
  ...content.filter(topic=>topic.block===block).flatMap(topic=>[
   {...topic,kind:'concept'},
   ...(topic.example?[{...topic,kind:'example'}]:[])
  ]),
  {kind:'work',block,title,task}
 ]);
}
