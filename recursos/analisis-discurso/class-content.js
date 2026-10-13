import {foundations,distinctions} from './foundations.js';
// Exposition accompanies an existing agenda block; it adds no assignments or minutes.
// Examples are authored illustrations, not quotations or new empirical corpus.
const topic=(block,title,explanation,points,example,reading,prompt,source,lesson)=>({block,title,explanation,points,example,reading,prompt,source,lesson});
export const classContent={
 's1-e1':[
  ...foundations.map(item=>({...item,block:0})),
  {block:0,title:'Cinco perspectivas para abrir preguntas',explanation:'Este mapa reúne tradiciones diferentes. Sus conceptos orientan preguntas; no son cinco definiciones equivalentes ni cinco análisis que debas entregar.',perspectives:true,points:[],prompt:'¿Qué diferencia hay entre preguntar por las marcas del hablante y por las condiciones institucionales del discurso?',source:'guia-fundamentos'},
  topic(2,'Observar antes de atribuir intención','Una descripción identifica una forma que otro lector puede comprobar. La interpretación propone qué permite entender esa forma en una situación. El motivo de quien escribe constituye una hipótesis adicional.',
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
   ['Cotexto: palabras e intervenciones que rodean el segmento.','Contexto: datos pertinentes sobre situación, institución e historia, con fuentes.'],
   'Versión 1: «El comité adoptó la medida. Se canceló la reunión». Versión 2: «Se canceló la reunión» como aviso aislado.','En la primera versión hay un candidato recuperable en el cotexto. En la segunda falta ese dato. Ninguna de las dos demuestra por sí sola una finalidad de ocultamiento.',
   '¿Qué cambió en la evidencia y qué sigue siendo una hipótesis?','guia-3',0)
 ],
 's2-e1':[
  topic(0,'Enunciar construye una situación','Enunciar establece una relación entre quien habla, sus destinatarios y el aquí y ahora de la intervención. El género organiza qué acciones se esperan y cómo se puede intervenir.',
   ['La conferencia presente y el diálogo pasado que relata son escenas diferentes.','La publicación digital incorpora otros destinatarios y otras condiciones de acceso.'],
   'En un taller: «Hoy les propongo revisar nuestra primera explicación».','«Hoy», «les» y «nuestra» construyen tiempo, destinatario y pertenencia. Para identificar sus referencias necesitamos esa situación de aula.',
   '¿Qué participantes podemos identificar en la escena observada y cuáles aparecen solo en el relato?','calsamiglia',0),
  topic(2,'Transcribir implica seleccionar','Una transcripción conserva algunas dimensiones de la realización oral y deja fuera otras. Su utilidad depende de la pregunta, las convenciones elegidas y la posibilidad de volver al registro original.',
   ['Las palabras y las marcas de pausa o énfasis deben proceder de la escucha.','Una leyenda explica las convenciones; la puntuación del subtítulo no demuestra prosodia.'],
   'Representación didáctica: «No [pausa] aceptamos esa explicación».','La marca declara una pausa que habría que comprobar en el audio. Su función requiere escuchar el entorno: no basta cambiar la puntuación para atribuir una intención.',
   '¿Qué dimensión necesita nuestra pregunta y qué dimensión no registra esta transcripción?','caldiz',2)
 ],
 's2-e2':[
  topic(1,'Palabras, voz y cuerpo','Los recursos lingüísticos, paraverbales y no verbales se relacionan en una realización oral. Cada plano necesita un registro capaz de mostrarlo; ninguno puede deducirse automáticamente de otro.',
   ['Palabras: deixis, marcadores, reparación y organización de turnos.','Voz: pausas, intensidad y entonación. Cuerpo: mirada, gesto y postura.'],
   '«Esa es mi propuesta» puede acompañarse de una pausa y de una mirada al público.','La transcripción de palabras permite examinar la formulación. El audio permitiría comprobar la pausa; el video, la mirada. Su coordinación puede estudiarse conservando intervalos.',
   '¿Qué observación cambia si disponemos solo de audio?','calsamiglia',1),
  topic(4,'El género organiza la intervención','Una intervención larga puede ser esperable en una conferencia. En una conversación, su relación con turnos, respuestas y oportunidades de oposición puede ser diferente. La duración aislada no acredita dominación.',
   ['Identifica quién asigna el turno y qué respuestas son posibles.','El público presente y el público digital no participan del mismo modo.'],
   'Un docente explica durante cinco minutos; después abre preguntas y retoma una objeción.','Para estudiar control de la interacción interesa la secuencia completa y la posibilidad de respuesta, no solo contar los minutos del docente.',
   '¿Qué evidencia mostraría una restricción de participación en este género?','guia-1',4)
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
   '«La comisión verificará los requisitos antes de resolver la solicitud».','Se representa una acción futura y condicionada. El enunciado permite analizar esa distribución; para afirmar que se cumplió habría que investigar la aplicación.',
   '¿Qué regula el texto y qué necesitaríamos para estudiar su cumplimiento?','calsamiglia',0)
 ],
 's4-e2':[
  topic(1,'Agencia y representación de participantes','Una cláusula puede nombrar un participante, dejarlo recuperable en otra parte o presentar un proceso sin explicitarlo. La forma gramatical y el actor social investigado tienen alcances distintos.',
   ['Nombrar a quien realiza una acción no demuestra quién la decidió.','La omisión admite explicaciones que deben contrastarse con el documento y su producción.'],
   '«La comisión revisó las solicitudes» / «Se revisaron las solicitudes».','La segunda formulación no nombra aquí al participante revisor. El cotexto puede identificarlo; el cambio por sí solo no prueba una estrategia de ocultamiento.',
   '¿Qué sabemos por la cláusula y qué recuperamos del resto del documento?','calsamiglia',0)
 ],
 's5-e1':[
  topic(1,'El lector aporta conocimientos','Comprender relaciona expresiones del texto con información disponible para el lector. Una inferencia necesita explicitar qué aporta cada componente y qué lectura alternativa sigue siendo posible.',
   ['Planificación, formulación y revisión consideran las necesidades del destinatario.','El conocimiento que el analista supone no coincide necesariamente con el de los lectores reales.'],
   '«Adjunte nuevamente el certificado».','«Nuevamente» permite recuperar una presentación o acción anterior en la situación pertinente. Saber qué certificado es y dónde presentarlo exige otras referencias.',
   '¿Qué aporta la expresión y qué conocimiento estamos añadiendo?','escandell',1)
 ],
 's5-e2':[
  topic(1,'Poner a prueba una inferencia','Una interpretación se fortalece cuando podemos mostrar su fundamento y el dato que la distinguiría de otra. La interpretación del lector, la intención atribuida y el efecto observado deben identificarse por separado.',
   ['Conserva las palabras que apoyan la interpretación.','Busca un dato capaz de debilitarla, además de datos que la confirmen.'],
   '«Puede presentar la solicitud hasta el viernes».','Un lector puede preguntar si el viernes está incluido o cuál es la hora límite. La redacción y las reglas de recepción deben examinarse antes de dar una respuesta definitiva.',
   '¿Qué información resolvería la discrepancia sin adivinar lo que quiso decir quien escribió?','brown-yule',1)
 ],
 's6-e1':[
  topic(1,'Del significado local al tema global','La macroestructura organiza el sentido global que se reconstruye desde las proposiciones del texto. Seleccionar, generalizar e integrar requieren conservar las condiciones que sostienen la síntesis.',
   ['Una síntesis puede omitir detalles; debe justificar su selección.','Cambiar una condición o introducir una conclusión ajena altera el contenido que se representa.'],
   'Texto: «La ayuda exige matrícula vigente y acreditación de ingresos». Síntesis: «La ayuda está condicionada a matrícula e ingresos».','La síntesis conserva las dos condiciones. «La ayuda se ofrece a todos» añade una generalización que el fragmento no sostiene.',
   '¿Qué condición perderíamos con una síntesis demasiado amplia?','van-dijk',2)
 ],
 's6-e2':[
  topic(1,'La composición orienta la lectura','Tamaño, posición, agrupación y encuadre proponen jerarquías entre los elementos. Su interpretación depende de convenciones situadas y puede contrastarse mediante respuestas de lectores.',
   ['Para comparar disposición, conserva el mismo contenido verbal.','La prominencia propone una lectura; no demuestra un efecto universal.'],
   'En un aviso, «Requisitos» aparece en letra pequeña; en otra disposición conserva las mismas palabras y gana tamaño y posición inicial.','El contraste permite investigar qué se identifica primero sin confundir cambios visuales con cambios de contenido. La respuesta de un lector tiene alcance limitado.',
   '¿Qué decisión visual cambió y qué observación permitiría valorar su efecto?','kress',3)
 ],
 's7-e1':[
  topic(1,'Elegir un enfoque cambia la investigación','Los enfoques críticos plantean preguntas distintas y justifican conjuntos de evidencias. Elegir exige relacionar problema, categorías y datos; no basta añadir el nombre de un autor.',
   ['Perspectiva sociocognitiva: mediaciones entre discurso, cognición y sociedad; una palabra no permite observar una mente.','Perspectiva dialéctico-relacional: texto, producción, circulación y práctica social. Perspectiva histórico-discursiva: trayectorias, fuentes y estrategias en su historia.'],
   'Problema: ¿cómo se representa una condición de acceso a una ayuda en una norma y en su explicación pública?','Podemos investigar las formulaciones y su circulación, reconstruir cambios entre versiones o estudiar interpretaciones con datos adecuados. El enfoque debe responder a la pregunta que efectivamente podemos investigar.',
   '¿Qué dato necesitaría cada enfoque y cuál podemos documentar en nuestro corpus?','pardo',1)
 ],
 's7-e2':[
  topic(1,'Contextualizar exige fuentes y función','El contexto se documenta para resolver una dificultad interpretativa. Una fecha, una institución o una circunstancia importa cuando explicamos cómo afecta la lectura y de qué fuente procede.',
   ['La fecha de una carpeta digital no equivale a la fecha de reforma del documento.','Un procedimiento normativo no acredita cómo fue aplicado o experimentado.'],
   'Una norma se aloja en una carpeta «2024», pero su razón final consigna una reforma anterior.','Podemos describir ambos datos con sus fuentes. La carpeta no autoriza a fechar la reforma en 2024 ni demuestra vigencia o ejecución actual.',
   '¿Qué afirmación cambia con este dato y cuál sigue pendiente?','guia-3',2)
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
   ['Distingue quien enuncia, los participantes representados y los destinatarios.','También hay posiciones personales en nombres y denominaciones; no es obligatorio encontrar pronombres.'],
   '«Nuestra comisión informará a los solicitantes. Todos debemos comprobar los requisitos».','La primera formulación delimita una pertenencia institucional. En la segunda hay que investigar quién queda incluido en «todos» y qué cotexto permite precisarlo.',
   '¿Qué marca sostiene la inclusión que estamos proponiendo?','calsamiglia',0)
 ],
 's9-e2':[
  topic(1,'Responsabilidad y perspectiva','La polifonía estudia relaciones entre puntos de vista dentro de un enunciado. Una perspectiva evocada no tiene que corresponder a una persona identificable que haya pronunciado esas palabras.',
   ['Define locutor y enunciador dentro del marco que utilices.','Negar una proposición puede evocar una perspectiva sin identificar un hablante empírico.'],
   '«La medida no es un privilegio».','La negación pone en relación la afirmación sostenida con la posibilidad de considerar la medida un privilegio. No permite inventar quién sostuvo esa perspectiva ni cuándo.',
   '¿Podemos atribuir la perspectiva a alguien o solo describir que se evoca?','calsamiglia',1)
 ],
 's10-e1':[
  topic(1,'Citar también encuadra','El discurso referido incorpora palabras o perspectivas con una selección y una forma de presentación. Comillas, verbos introductores, paráfrasis y cotexto contribuyen a construir adhesión, distancia o incertidumbre.',
   ['Separa la proposición citada de la posición de quien la incorpora.','Una cita dentro de un relato no acredita por sí sola literalidad histórica.'],
   '«El portavoz aseguró que la medida era necesaria» / «El portavoz admitió que la medida era necesaria».','La proposición atribuida se conserva; el verbo cambia su encuadre. La relación que construye cada formulación necesita explicarse en su cotexto.',
   '¿Qué cambia en la atribución cuando cambia el verbo introductor?','calsamiglia',2)
 ],
 's10-e2':[
  topic(1,'Revisar una atribución con marcas','El mapa de voces reúne segmento, perspectiva, marcas y responsabilidad. Una lectura rival es útil cuando las mismas evidencias permiten discutirla; no hay que inventar ambigüedad donde no se sostiene.',
   ['Citar una proposición no implica necesariamente aceptarla.','Distingue corregir una atribución de restringir su certeza o alcance.'],
   '«Según el comunicado, el procedimiento será suficiente; esa afirmación requiere comprobarse».','La primera parte atribuye una afirmación; la segunda exige examinarla. Las marcas permiten distinguir referencia y distancia, sin atribuir a quien escribe una adhesión plena.',
   '¿Qué perspectiva se sostiene y qué perspectiva se somete a examen?','guia-4',4)
 ],
 's11-e1':[
  topic(1,'Género, secuencia y medio','El género relaciona una forma de acción con una esfera social y sus expectativas. La secuencia describe organización interna. Los modos, medios y soportes tienen funciones distintas en la construcción y circulación del sentido.',
   ['Un reglamento puede justificar y disponer: contiene organizaciones internas diferentes.','Palabras e imágenes son recursos; una página y una plataforma implican condiciones materiales de circulación.'],
   'Una resolución y un aviso de convocatoria pueden referirse a las mismas ayudas.','La resolución dispone; el aviso orienta una acción de sus destinatarios. Compartir tema no los convierte en el mismo género ni demuestra un vínculo entre sus versiones.',
   '¿Qué acción permite reconocer el género de cada pieza?','calsamiglia',0)
 ],
 's11-e2':[
  topic(1,'Recontextualizar implica seleccionar','Al incorporar un material a otra situación se pueden conservar, omitir o reformular elementos. La relación se estudia con fuentes; una adaptación propia se identifica como experimento didáctico.',
   ['Documenta el vínculo entre piezas antes de hablar de circulación.','Cambiar destinatario y propósito exige examinar qué condiciones se conservan.'],
   'Transformamos una cláusula normativa en una explicación para estudiantes de primer semestre.','La nueva pieza puede aclarar vocabulario y ordenar pasos. Debe conservar condiciones pertinentes y declararse adaptación propia; no es una comunicación oficial de la institución.',
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
   '«Ambos avisos hablan de becas; por eso uno deriva del otro».','El tema compartido no acredita derivación. Necesitamos una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo.',
   '¿Qué dato falta entre la observación y la conclusión?','guia-5',4)
 ],
 's13-e1':[
  topic(1,'Un texto puede combinar secuencias','Las secuencias describen operaciones internas que pueden coexistir en un género. Segmentar exige justificar la función del tramo y su relación con los siguientes.',
   ['Narrar ordena acontecimientos; describir organiza atributos y relaciones.','Explicar desarrolla una dificultad; argumentar sostiene una conclusión; dialogar relaciona intervenciones o las representa.'],
   '«El comité recibió diez solicitudes. Todas incluían matrícula. Debe ampliarse el plazo porque faltan certificados».','El primer tramo presenta un acontecimiento; el segundo describe un atributo; el tercero propone una decisión con una razón. Las transiciones requieren una lectura del conjunto.',
   '¿Qué marca y qué función justifican cada segmentación?','calsamiglia',0)
 ],
 's13-e2':[
  topic(1,'Explicar y justificar tienen preguntas distintas','Una explicación causal examina cómo o por qué sucede algo. Una justificación ofrece razones para aceptar una afirmación o una acción. Pueden combinarse; su vínculo debe reconstruirse.',
   ['Una secuencia temporal no demuestra una causa.','Una causa de una práctica no establece por sí sola que sea aceptable.'],
   '«El retraso se produjo por un fallo del sistema; por tanto, debemos ampliar el plazo».','La primera parte propone una causa. La segunda pide una decisión, que además requiere un criterio sobre equidad, responsabilidades y condiciones del trámite.',
   '¿Qué premisa adicional conecta la explicación con la decisión?','calsamiglia',2)
 ],
 's14-e1':[
  topic(1,'El argumento necesita una regla de paso','Un razonamiento vincula premisas y conclusión mediante una garantía o regla. Reconstruirla permite examinar condiciones, excepciones y objeciones, aunque no se formule explícitamente.',
   ['Un topos es una regla de conexión; no equivale a un tema o una palabra frecuente.','La objeción debe afectar la inferencia que se sostiene.'],
   '«La medida beneficia a muchos estudiantes; debemos mantenerla».','La regla propuesta es que una medida beneficiosa merece mantenerse. Hay que discutir cómo se acredita el beneficio y qué costes o exclusiones podrían restringir esa regla.',
   '¿Bajo qué condición dejaría de ser aceptable este paso?','wodak',1)
 ],
 's14-e2':[
  topic(1,'Una respuesta modifica la interacción','El análisis interaccional examina qué hace una intervención con la anterior: retoma, reformula, objeta o evalúa. El significado se estudia en la secuencia y en sus condiciones de participación.',
   ['La evaluación se construye en relaciones entre intervenciones.','Distingue interacción registrada de diálogo reconstruido dentro de un relato.'],
   'A: «El trámite es accesible». B: «¿Accesible también para quien no tiene conexión?». A: «Entonces debemos precisar esa condición».','La respuesta cuestiona el alcance de «accesible» y provoca una reformulación. La secuencia permite describir ese cambio; no prueba un efecto general en toda la institución.',
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
