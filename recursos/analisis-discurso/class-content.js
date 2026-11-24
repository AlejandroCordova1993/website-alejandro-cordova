import {foundations,distinctions} from './foundations.js';
import {questionExamples} from './activities.js';
// Exposition accompanies an existing agenda block; it adds no assignments or minutes.
// Examples identify their source; explanations accompany the existing course corpus.
const topic=(block,title,explanation,points,example,reading,prompt,source,lesson)=>({block,title,explanation,points,example,reading,prompt,source,lesson});
export const classContent={
 's1-e1':[
  ...foundations.map(item=>({...item,block:0})),
  {block:0,title:'El concepto de discurso en cinco autores',explanation:'Estas perspectivas construyen problemas distintos: enunciación, diálogo, formación histórica del saber y relaciones entre discurso y sociedad. Las paráfrasis introductorias presentan el aporte específico de cada enfoque.',perspectives:true,points:[],source:'guia-fundamentos'},
  topic(2,'Observar antes de atribuir intención','Una descripción identifica una forma que otro lector puede comprobar. La interpretación propone qué permite entender esa forma en una situación. El motivo de quien escribe constituye una hipótesis adicional. La descripción también usa categorías: separar sus fundamentos ayuda a revisarlas, sin suponer una observación libre de teoría.',
   ['Distingue palabras presentes, información recuperada y explicación propuesta.','La ausencia de un nombre no identifica por sí sola a quien quiso ocultarlo.'],
   '«Se canceló la reunión».','La oración presenta la cancelación como un hecho pasado y coloca en primer plano la reunión afectada. Deja sin nombrar a quien canceló. Así organiza la representación del acontecimiento; el texto circundante permitirá saber si el responsable ya estaba identificado y explicar esa elección.',
   '¿Qué parte de nuestra afirmación puede verificar otro lector en la oración?','guia-2',4)
 ],
 's1-e2':[
  {...distinctions,block:1,example:null,cafeExample:true},
  topic(1,'Cuatro operaciones del análisis','Estas cuatro operaciones ayudan a distinguir qué afirmas y en qué te apoyas. Pueden combinarse: al proponer una explicación también hacemos inferencias. El ejemplo retoma el aviso B del diagnóstico.',
   ['Observar: señalar palabras presentes o información ausente. Inferir: llegar a una conclusión relacionando esas palabras con conocimientos pertinentes.','Explicar: proponer por qué se usó esa formulación en esa situación y buscar datos que apoyen la explicación. Valorar: juzgar si el aviso cumple un propósito, indicando el criterio utilizado.'],
   'Aviso B del diagnóstico: «Se suspendieron las becas de cuarenta estudiantes».','Observar: el aviso dice «Se suspendieron» y no nombra a quien tomó la decisión. Inferir: entiendo que esos estudiantes tenían una ayuda y que ahora se interrumpe; la resolución permitiría comprobar su alcance. Explicar: quizá se omite al responsable porque ya aparece en otra parte del documento; habría que leerlo completo. Valorar: como aviso aislado para saber ante quién reclamar, ofrece información insuficiente; el criterio es que identifique al órgano al que dirigirse.',
   'Distingue lo que puedes comprobar en el aviso, lo que interpretas y los datos que necesitas para sostenerlo.','guia-3',0),
  topic(4,'El contexto pone a prueba una lectura','Una interpretación puede ganar apoyo cuando el cotexto identifica un participante omitido. También puede debilitarse si esa información no aparece. La información adicional modifica el alcance de lo que podemos afirmar.',
   ['[[cotexto|Cotexto]]: palabras e intervenciones que rodean el segmento.','El contexto también incluye situación, institución, conocimientos e indicios de la propia actuación. En el manual, el entorno verbal forma parte del contexto; distinguimos su procedencia para analizarlo.'],
   'Versión 1: «El comité adoptó la medida. Se canceló la reunión». Versión 2: «Se canceló la reunión» como aviso aislado.','En la primera versión hay un candidato recuperable en el cotexto. En la segunda falta ese dato. Ninguna de las dos demuestra por sí sola una finalidad de ocultamiento.',
   '¿Qué cambió en la evidencia y qué sigue siendo una hipótesis?','guia-3',0)
 ],
 's2-e1':[
  {
    "block": 0,
    "title": "Enunciar construye una situación",
    "explanation": "Enunciar establece una relación entre quien habla, sus destinatarios y el aquí y ahora de la intervención. El género organiza las acciones esperables y las posibilidades de participar. La planificación, las palabras elegidas y el modo de dirigirse al público contribuyen a construir esa relación.",
    "points": [
      "La conferencia presente, el diálogo pasado que relata y la publicación digital son escenas diferentes, con participantes y condiciones de acceso propias.",
      "Situar el episodio requiere relacionar lugar y momento, actividad y participantes, convenciones pertinentes y conocimientos tratados como compartidos. Las palabras próximas aportan el cotexto; las respuestas ayudan a contrastar qué se comprendió.",
      "[[acto-habla|Actos de habla]]: distingue lo dicho, la acción realizada al decirlo —pedir, proponer, prometer— y sus efectos observados. La respuesta y la situación ayudan a reconocer la acción.",
      "Asunto e idea principal: «nuestra primera explicación» nombra aquello sobre lo que se propone trabajar; «revisarla» expresa la acción propuesta. Seguir qué se dice sobre el asunto permite reconocer su desarrollo."
    ],
    "example": "En un taller: «Hoy les propongo revisar nuestra primera explicación».",
    "reading": "«Hoy», «les» y «nuestra» construyen tiempo, destinatario y pertenencia. Para identificar sus referencias necesitamos esa situación de aula. «Propongo» presenta lo dicho como una propuesta; su aceptación se comprueba en la respuesta.",
    "prompt": "¿Qué participantes podemos identificar en la escena observada y cuáles aparecen solo en el relato?",
    "source": "calsamiglia",
    "lesson": 0
  },
  {
    "block": 2,
    "title": "Transcribir implica seleccionar",
    "explanation": "Una transcripción conserva dimensiones de la realización oral seleccionadas según una pregunta. El registro original permite comprobarlas y la leyenda explica cómo se representan. La función discursiva se argumenta después relacionando esas marcas con la secuencia.",
    "points": [
      "La pausa es una interrupción audible del habla. Para registrar la [[prominencia|prominencia]], anota con «énfasis» la sílaba o palabra que destaca y describe qué oíste, por ejemplo una mayor duración.",
      "En esta práctica puedes usar [pausa], [énfasis: palabra] e [inaudible]. La leyenda precisa qué representa cada marca y la escucha decide dónde corresponde. La puntuación de un subtítulo es una decisión de escritura que debe contrastarse con el audio.",
      "Anotar qué parámetro se percibe —por ejemplo, una mayor duración— permite revisar con más precisión la etiqueta «énfasis». Una marca conserva una observación seleccionada; su posible función requiere las palabras próximas y la continuación."
    ],
    "example": "Representación didáctica: «No [pausa] aceptamos esa explicación». Se estipula una interrupción del habla después de «no».",
    "reading": "La marca representa la interrupción descrita y la distingue de una emisión continua. Explicar si separa una respuesta, prepara una precisión o cumple otra función exige el entorno de la intervención. En el episodio real, cada marca se contrasta con el audio.",
    "prompt": "¿Qué dimensión necesita nuestra pregunta y qué dimensión no registra esta transcripción?",
    "source": "calsamiglia",
    "lesson": 2
  }
],
 's2-e2':[
  {
    "block": 1,
    "title": "Palabras, voz y cuerpo",
    "explanation": "Palabras, voz y cuerpo se coordinan para señalar referentes, organizar información y relacionarse con el público. La lectura previa desarrolla cómo reconocerlos; al escuchar o mirar importa describir el cambio concreto y su coincidencia con las palabras.",
    "points": [
      "Al escuchar, distingue la [[nivel-tonal|altura tonal]] (grave o aguda), el [[contorno-entonativo|contorno entonativo]] (cómo cambia la altura) y la [[intensidad|intensidad]] (qué tan fuerte o suave suena). El timbre es la calidad de la voz, como una voz más aireada.",
      "Rapidez es la velocidad de articulación; ritmo es la organización de duraciones, prominencias y pausas. Una pausa interrumpe el habla. Risa y suspiro son vocalizaciones que se sitúan respecto de las palabras y las respuestas. Modulación reúne variaciones de la voz a lo largo de la intervención.",
      "En el cuerpo se describe forma y dirección del gesto, orientación visible de la mirada, postura y disposición espacial. «Extiende el índice hacia el dibujo mientras dice “esa”» permite relacionar gesto y referencia. Para identificar las palabras, toma en cuenta la articulación, la familiaridad con la variedad y las condiciones del registro.",
      "Las elecciones de persona, tiempo, léxico, marcadores y reparaciones organizan lo dicho. Un relato, ejemplo o cita puede apoyar una idea: explicar esa relación es distinto de demostrar que persuadió al público. Son dimensiones lingüísticas, semióticas y retóricas de la misma intervención."
    ],
    "example": "«Esa es mi propuesta» puede acompañarse de una pausa y de una mirada al público. En esta demostración escrita se estipula una pausa después de «propuesta» y una orientación del rostro hacia la audiencia al terminar la frase.",
    "reading": "La transcripción de palabras permite examinar la formulación. El audio permitiría comprobar la pausa; el video, la mirada. Su coordinación se estudia conservando intervalos. En este ejemplo pueden ofrecer una ocasión de respuesta; solo la continuación permitiría saber si alguien la toma.",
    "prompt": "¿Qué observación cambia si disponemos solo de audio?",
    "source": "calsamiglia",
    "lesson": 1
  },
  {
    "block": 5,
    "title": "El género organiza la intervención",
    "explanation": "Una intervención larga puede ser esperable en una conferencia. En una conversación, los turnos se relacionan con respuestas y oportunidades de intervención más frecuentes. Para explicar la participación interesa la secuencia completa y las posibilidades de responder.",
    "points": [
      "Heteroselección: quien habla elige al siguiente, por ejemplo mediante un nombre o una pregunta dirigida. Autoselección: alguien empieza sin ser elegido. La mirada y la pausa pueden acompañar el relevo; la continuación permite reconocer qué sucede.",
      "Una respuesta puede mantener el asunto, introducir una objeción o pedir una aclaración. Esa construcción conjunta forma parte de la organización textual del intercambio.",
      "El público presente y el público digital no participan del mismo modo. También se distingue el intercambio efectivo de la conferencia del diálogo pasado representado dentro del relato."
    ],
    "example": "Un docente explica durante cinco minutos; después abre preguntas y retoma una objeción.",
    "reading": "La apertura de preguntas permite respuestas y la objeción recibe una continuación. Eso aporta información sobre la participación. Una hipótesis de restricción tendría que examinar oportunidades negadas o intervenciones que se impiden, además de la duración del turno.",
    "prompt": "¿Qué evidencia mostraría una restricción de participación en este género?",
    "source": "guia-1",
    "lesson": 4
  }
],
 's3-e1':[
  {
    "block": 1,
    "title": "Una marca de voz necesita contraste",
    "explanation": "Una función vocal se explica relacionando la realización, su posición y lo dicho antes y después. La leyenda responde cómo se anota lo oído; el análisis responde qué relación organiza. Caldiz ofrece una investigación para pensar ese segundo problema y revisar hipótesis.",
    "points": [
      "«El café está bueno» atribuye una cualidad. «Bueno, pasemos al siguiente punto» usa la misma palabra como [[marcador-discursivo|marcador discursivo]] para anunciar una transición.",
      "En el ejemplo 18, Caldiz registra un cambio de [[nivel-tonal|nivel o altura tonal]] al pasar de «bueno» al grupo siguiente. Ubica cada [[unidad-tonal|unidad tonal]] y sigue el [[contorno-entonativo|contorno]] dentro de cada tramo.",
      "En este ejemplo de realización oral, en «ESTA es mi propuesta», la sílaba inicial de «esta» dura más y alcanza mayor altura que las próximas, sin aumentar apreciablemente el volumen. Si se acaba de mencionar otra propuesta, la prominencia ayuda a seleccionar la presente. También podría acompañar su presentación inicial; el cotexto permite decidir cuál lectura tiene apoyo.",
      "Las mayúsculas representan el destaque descrito en esta demostración. Para el episodio real hacen falta escucha, palabras próximas e intervalo. La lectura teórica orienta la explicación; la leyenda justifica la notación."
    ],
    "example": "En la demostración escrita, «bueno» puede preceder «pasemos al siguiente punto» o «volvamos a la propuesta».",
    "reading": "En este ejemplo didáctico, las expresiones siguientes distinguen avanzar a otro punto de retomar uno anterior. En la ficha, vuelve al registro y escucha cómo se realiza esa transición.",
    "prompt": "¿Qué caso obligaría a modificar nuestra interpretación del marcador?",
    "source": "caldiz",
    "lesson": 2
  }
],
 's3-e2':[
  {
    "block": 1,
    "title": "Revisar es cambiar una afirmación con razones",
    "explanation": "La revisión compara la interpretación inicial con el registro y con un criterio explícito de análisis. Puede corregir la categoría empleada, restringir una función propuesta o mantenerla con mejor fundamento. Una expresión técnica como «cambio de tema» también necesita justificación.",
    "points": [
      "Revisar la descripción: comprueba qué se oye y cómo lo nombraste. Si «sube el tono» describía una voz más fuerte, corresponde «aumenta la intensidad», siempre que lo sostenga la escucha.",
      "Revisar la función: relaciona la marca de voz con las palabras anteriores y posteriores. Un cambio de subtema se reconoce comparando el contenido. La pausa puede contribuir a organizar ese paso y cumplir otras funciones compatibles.",
      "Revisar el fundamento: explica qué dato o distinción cambió tu interpretación, qué mantienes y qué falta contrastar. Conserva el borrador para poder reconstruir esa revisión."
    ],
    "example": "Registro: «La propuesta tiene dos ventajas: reduce el costo y acorta el plazo. [pausa] En cuanto a sus límites, requiere personal especializado». Primera lectura: «la pausa expresa inseguridad». Revisión: «la pausa coincide con el paso de ventajas a límites y puede ayudar a delimitarlo».",
    "reading": "La nueva explicación distingue las palabras y la pausa, el criterio con que se reconoce el cambio de subtema y la función propuesta. Conserva abierta la posibilidad de respirar y declara qué contraste falta. En el episodio real, las palabras y la realización deben comprobarse en el registro.",
    "prompt": "¿Qué dato justificó el cambio y qué evidencia todavía falta?",
    "source": "guia-1",
    "lesson": 4
  }
],
 's4-e1':[
  topic(1,'Escribir y representar una posición','La enunciación escrita es el acto de dirigirse a otros por medio de un texto en una situación concreta. En tu carta abierta, tú firmas una propuesta sobre el uso de IA. La dirección puede decidir sobre ella y los compañeros también pueden leerla y discutirla. Al planificar, escribir y revisar la carta, eliges desde qué posición hablar y qué papel atribuir a cada grupo.',
   ['El tema es el asunto; la [[tesis|tesis]] es la posición que se defiende. Una [[razon-argumentativa|razón]] explica por qué sostenerla; un [[apoyo-argumentativo|apoyo]] aporta un dato, fuente o ejemplo pertinente. Una [[objecion|objeción]] plantea una dificultad a la que el autor responde.','La [[representacion|representación discursiva]] incluye cómo se presenta a personas, grupos y hechos. «Como estudiante» sitúa una voz individual; «los estudiantes exigimos» construye una voz colectiva que debe situarse en su relación con el grupo.'],
   'La carta propone permitir la IA para revisar borradores si el autor justifica sus cambios. Da dos razones. Comparar formulaciones ayuda a elegir la más clara para el lector. Explicar la elección permite al docente valorar el criterio del estudiante. La UNESCO propone un uso educativo de la IA centrado en las personas. El autor retoma esa orientación para defender que sea el estudiante quien decida qué sugerencias acepta. Ante el riesgo de aceptarlas sin comprenderlas, propone conservar el borrador y explicar tres decisiones.',
   'La primera razón explica qué se gana al revisar el borrador. La segunda explica por qué conviene pedir que el autor justifique los cambios. La lectura previa contiene el párrafo completo y la referencia. El autor puede defender otra posición y fundamentarla.',
   'Reconoce en el ejemplo la propuesta, sus razones y las responsabilidades que atribuye a cada participante.','calsamiglia',5),
  {
    "block": 1,
    "title": "Cómo el reglamento organiza el reparto",
    "explanation": "El Consejo Universitario dicta el reglamento. El artículo 1 identifica a las instancias que administran las becas y el artículo 3 les indica cómo repartirlas. La expresión «se deberá destinar» adquiere su fuerza obligatoria por aparecer en una norma de esa autoridad.",
    "points": [
      "La [[modalidad|modalidad]] se reconoce en palabras como «deberá» y «es posible». En el reglamento, «se deberá destinar» obliga. En una carta, «La dirección debería acordar criterios» recomienda. Ambas expresiones tienen valor deóntico. «Es posible que la dirección ya haya acordado criterios» expresa incertidumbre sobre un hecho y tiene valor epistémico."
    ],
    "example": "«Se deberá destinar el 65% de las becas para excelencia académica y el 35 % por vulnerabilidad».",
    "reading": "«Se deberá destinar» expresa una obligación: modalidad deóntica. El reparto reserva una proporción mayor para excelencia académica y otra para vulnerabilidad. La formulación establece cómo debe distribuir la institución las ayudas y clasifica a sus posibles beneficiarios mediante esos criterios. El encabezado y los artículos 1–2 permiten reconstruir la autoridad y los responsables de la disposición.",
    "prompt": "Relaciona la obligación, los porcentajes y los grupos de beneficiarios con la decisión institucional.",
    "source": "calsamiglia",
    "lesson": 0
  }
 ],
 's4-e2':[
  {
    "block": 1,
    "title": "Agencia y representación de participantes",
    "explanation": "Una cláusula relaciona un proceso o estado con sus participantes. El sujeto es una función gramatical, normalmente identificable por la concordancia con el verbo; el agente realiza la acción. Las cláusulas distribuyen atención y responsabilidad al representar un acontecimiento. En «Las solicitudes fueron revisadas por la comisión», las solicitudes son sujeto y la comisión realiza la revisión. La nominalización «la revisión» convierte el proceso en un nombre y permite retomarlo como asunto. Estas elecciones permiten presentar quién interviene, qué se hizo y qué se toma como información ya conocida.",
    "points": [
      "El agente realiza la acción; la autoridad que la decide puede ser otra. Un actor social es una persona, colectivo u organización que participa en la práctica. La omisión se interpreta junto con los participantes identificados en el documento.",
      "La [[modalidad|modalidad]] permite distinguir la medida que el autor considera necesaria del grado de certeza con que presenta un hecho. Observa las palabras y quién escribe a quién.",
      "«Solicito que la dirección publique los criterios de uso de IA» es una petición. Quien escribe pide que actúe la dirección. «Me comprometo a indicar cómo usé la IA en mi borrador» es un compromiso. Quien firma asume la acción. En ambos casos, las palabras realizan un [[acto-habla|acto de habla]].",
      "Nombrar a un colectivo también selecciona una perspectiva: «quienes usan IA» lo define por una práctica; «quienes necesitan orientación» lo presenta desde una necesidad de apoyo. Explica qué relación construye la denominación que realmente aparece en el texto."
    ],
    "example": "«La comisión revisó las solicitudes» / «Se revisaron las solicitudes».",
    "reading": "La primera versión vincula una actuación con la comisión; la segunda centra la atención en el trámite realizado. Si la comisión ya está identificada, el lector puede recuperar ese vínculo. Si aparece aislada, la segunda versión deja pendiente a quién atribuir la actuación. La diferencia permite analizar la representación de la responsabilidad en cada situación.",
    "prompt": "Explica quién aparece actuando, quién recibe la acción y qué responsabilidad se reconstruye con el resto del texto.",
    "source": "fairclough",
    "lesson": 0
  }
],
 's5-e1':[
  topic(1,'El lector aporta conocimientos','Al leer una carta, el compañero reconoce lo que el autor propone y también interpreta lo que este da por sabido o deja entrever. Su primera lectura permite ver qué palabras orientaron esa interpretación.',
   ['En esta actividad, el [[corpus|corpus]] reúne los borradores, las versiones finales y los comentarios. Ahora tienes delante el borrador del compañero. Para situar uno de tus tres comentarios basta con indicar, por ejemplo, «carta de Ana, párrafo 2» y copiar la frase elegida.','«Mantengamos el permiso para revisar borradores con IA» da por existente el permiso. Es una [[presuposicion|presuposición]]. «Propongo permitir la revisión de borradores con IA» presenta esa autorización como una iniciativa.','«Algunos de los docentes consultados permiten revisar borradores con IA» puede sugerir que el permiso se limita a una parte del grupo. Si el autor añade «De hecho, todos los consultados lo permiten», aclara lo que ocurre. Esa primera lectura, «solo algunos», es una [[implicatura|implicatura]] que se reconstruye en contexto y puede cancelarse.'],
   '«Adjunte nuevamente el certificado».','«Nuevamente» presenta una acción anterior como información dada por supuesta: una presuposición, según Calsamiglia y Tusón y Brown y Yule. La petición sitúa al destinatario como alguien que ya participa en el trámite y puede reconocer el certificado. Un lector nuevo necesitaría recuperar esa información. El análisis explica qué conocimiento presupone el escrito; comprobar la entrega anterior exige consultar el expediente.',
   'Distingue las palabras del texto y el conocimiento que aportaste para interpretarlas.','escandell',1)
 ],
 's5-e2':[
  {
    "block": 1,
    "title": "Poner a prueba una inferencia",
    "explanation": "Leer una carta implica reconstruir qué propone el autor, para quién y bajo qué condiciones. Sus palabras y la situación orientan las inferencias del lector. El comentario del compañero permite comprobar qué propuesta entendió y qué información utilizó.",
    "points": [
      "Señala las palabras que permiten identificar la propuesta y sus condiciones.",
      "Comprueba tu lectura con el resto de la carta: una condición posterior puede precisar el alcance de la propuesta.",
      "En «el próximo semestre», la [[deixis|deixis temporal]] exige situar la fecha desde la que se escribe. Para interpretar «esta asignatura», identifica el curso al que se refiere la carta."
    ],
    "example": "«A partir del próximo semestre, propongo permitir IA para revisar los ensayos de esta asignatura».",
    "reading": "«Propongo» presenta una iniciativa del autor. «Para revisar» y «los ensayos» delimitan el uso de IA y los textos previstos. La fecha de la carta y el curso al que se refiere permiten situar el semestre y la asignatura. Con esas pistas, el lector reconstruye el alcance de la propuesta.",
    "prompt": "Señala qué información permite precisar la lectura de una condición.",
    "source": "brown-yule",
    "lesson": 1
  },
  {
    "block": 1,
    "title": "Del significado local al tema global",
    "explanation": "Cada afirmación de la carta aporta una idea. Al leerlas juntas, el compañero reconstruye la propuesta, las razones que la sostienen y las condiciones que la delimitan. Esa organización del significado global se llama macroestructura.",
    "points": [
      "La cohesión enlaza segmentos mediante referencias, recurrencias y conectores. Una referencia puede recuperar una expresión anterior, su antecedente; la recurrencia léxica mantiene el asunto mediante palabras repetidas o relacionadas; un conector señala cómo se relacionan dos partes.",
      "La segmentación en párrafos y la puntuación ayudan a reconocer dónde termina una razón y dónde empieza la siguiente. Un conector como «por eso» anuncia qué conclusión extrae el autor.",
      "Generalizar consiste en reunir varios casos bajo una categoría. «Revisar ortografía y puntuación» puede resumirse como «revisar aspectos de la escritura». Si hace falta saber exactamente qué usos se permiten, conserva los dos términos.",
      "La [[macroestructura|macroestructura]] se aprecia al comparar la carta completa con la propuesta que el compañero entendió.",
      "En «La IA responde rápido. Por tanto, su respuesta es correcta», el conector enlaza las frases y el lector puede seguir la conclusión. Para sostenerla haría falta mostrar que la respuesta es correcta. La rapidez por sí sola aporta otra clase de información."
    ],
    "example": "Una carta dice «Propongo permitir IA para revisar borradores cuando podamos justificar los cambios». El compañero resume «Propone permitir la IA».",
    "reading": "El resumen amplía la propuesta a cualquier uso de IA. «Propone permitir IA para revisar borradores, siempre que el autor justifique los cambios» conserva el uso permitido y su condición.",
    "prompt": "Conserva en la síntesis la propuesta, sus razones y las condiciones que delimitan su alcance.",
    "source": "van-dijk",
    "lesson": 2
  }
],
 's6-e1':[
  {
    "block": 1,
    "title": "La composición orienta la lectura",
    "explanation": "Tamaño, posición, agrupación y encuadre proponen jerarquías. El soporte es el material o dispositivo donde aparece el escrito; el formato, su tamaño y organización material; la tipografía, la forma visual de las letras. Títulos, encabezados y numeración son elementos paratextuales que orientan el cuerpo escrito. En un aviso de ayudas, esta organización puede presentar primero la oportunidad, los requisitos o el procedimiento: hace visible lo que se espera del destinatario.",
    "points": [
      "Prominencia es el grado en que un elemento atrae la atención: aumentar tamaño y grosor de «Requisitos» lo destaca. Encuadre es la separación o conexión visual: el recuadro agrupa las condiciones y las diferencia del resto.",
      "Valor informativo es el papel que adquiere un elemento por su posición en el conjunto. En este aviso, llevar los requisitos al inicio propone comprobarlos antes de continuar. Esa lectura se interpreta según las convenciones del documento.",
      "Para saber qué leen primero los destinatarios, compara las versiones con lectores."
      ,"En la carta, prueba a resaltar «permitir la IA» y luego la frase completa «permitir la IA para revisar borradores». Las palabras siguen en el mismo sitio. Solo cambia qué parte destaca al leer."
    ],
    "example": "En un aviso, «Requisitos» aparece en letra pequeña; en otra disposición conserva las mismas palabras y gana tamaño y posición inicial.",
    "reading": "La segunda disposición destaca las condiciones como entrada a la lectura: propone que el destinatario compruebe si puede participar. Se conserva la información verbal y cambia su jerarquía. La respuesta del lector permitirá contrastar si ese recorrido propuesto coincide con su lectura.",
    "prompt": "Relaciona una decisión de presentación de la carta con lo que el compañero identifica al leerla.",
    "source": "kress",
    "lesson": 3
  }
],
 's6-e2':[
  topic(1,'Revisar la carta a partir de la lectura del compañero','El autor propone una posición mediante palabras y una presentación. El compañero reconstruye esa posición al leer. Comparar ambas permite revisar cómo se representan las personas, qué acción se pide y qué condiciones se hacen visibles. La explicación de la revisión relaciona una elección concreta con esa lectura.',
   ['Una decisión de revisión puede cambiar una denominación, precisar quién actúa, fundamentar una razón o acercar una condición a la propuesta. Describe la formulación inicial, la final y el motivo.','La respuesta del compañero documenta su lectura en este intercambio. Una formulación clara también puede conservarse: explica qué reconoció el lector y qué palabras lo ayudaron.','Si consultas IA, contrasta sus sugerencias con el texto y la lectura del compañero. La decisión de aceptar, adaptar o rechazar una sugerencia se justifica con el mismo criterio discursivo.'],
   'El título dice «Permitir la IA»; la condición «para revisar borradores» aparece al final. El compañero entiende una autorización para producir trabajos completos.','El autor reúne propuesta y condición en el título: «Permitir IA para revisar borradores». Explica que buscaba delimitar el uso permitido y que el comentario del lector mostró otra interpretación. En otra revisión, sustituye «los estudiantes exigimos» por «como estudiante, propongo» para asumir su posición individual. Una decisión atiende a la lectura de la propuesta; la otra, a la voz que representa al autor.',
   'Explica tres decisiones de tu revisión con el pasaje correspondiente y su motivo.','calsamiglia',3)
 ],
 's7-e1':[
  {
    "block": 1,
    "title": "Elegir un enfoque cambia la investigación",
    "explanation": "El enfoque conecta la pregunta con un concepto y con las palabras que se pueden examinar. En el pronunciamiento de Sarayaku, el pueblo recibe una decisión de la Corte y luego toma la palabra ante la opinión pública.",
    "points": [
      "En el primer párrafo, observa quién comunica el fallo y quién lo recibe. En el cierre, identifica quién asume el compromiso expresado en futuro.",
      "Fairclough llama práctica discursiva a los procesos de producción, circulación e interpretación de un texto. Aquí podemos estudiar cómo el pueblo presenta una sentencia judicial ante otros públicos.",
      "Los enfoques de van Dijk y Wodak permiten examinar, respectivamente, qué conocimiento del caso presupone el texto y cómo se nombra a los actores. La matriz compara sus preguntas."
    ],
    "example": "La Corte comunica la sentencia al pueblo. Sarayaku toma la palabra y declara «estaremos atentos».",
    "reading": "Con Fairclough podemos relacionar el fallo judicial con el pronunciamiento público. Desde van Dijk, cabe examinar qué identificaciones facilita el primer párrafo a quienes desconocen el caso. Desde Wodak, interesa cómo se nombra y caracteriza al pueblo al reconocer su lucha. Cada enfoque requiere datos adecuados a su pregunta.",
    "prompt": "¿Qué papel asume Sarayaku al comienzo del pronunciamiento y cuál se atribuye en el cierre?",
    "source": "pardo",
    "lesson": 1
  }
],
 's7-e2':[
  {
    "block": 1,
    "title": "Contextualizar exige fuentes y función",
    "explanation": "Un dato de contexto ayuda a entender una expresión precisa. Al recibir el fallo, Sarayaku celebra el reconocimiento de sus derechos. El futuro de «estaremos atentos» cobra un sentido más preciso cuando sabemos qué obligaciones seguían abiertas.",
    "points": [
      "La primera clase distinguió dimensiones espacio-temporales, situacionales, socioculturales y cognitivas. Goodwin y Duranti, según Calsamiglia y Tusón, organizan el contexto en cuatro dimensiones: localización o marco socioespacial, comportamiento no verbal, lengua como contexto y contexto extrasituacional. Son formas complementarias de examinar la misma interacción. El marco sitúa la actividad; palabras y recursos no verbales orientan su interpretación; los conocimientos extrasituacionales enlazan saberes sociales e interpretaciones de los participantes.",
      "El punto 3 de «Y dispone» establece que el Estado debe consultar al pueblo ante futuros proyectos que puedan afectar su territorio. Señala quién queda obligado y en qué circunstancia.",
      "Compara el plural de quien recibe la noticia con el plural que anuncia la vigilancia del cumplimiento. El título identifica a quién se dirige el pronunciamiento y la firma sitúa la voz pública que habla en nombre del pueblo."
    ],
    "example": "El primer párrafo presenta al pueblo como destinatario de la noticia. El cierre le atribuye una acción futura.",
    "reading": "La sentencia establece una obligación estatal y el comunicado anuncia que el pueblo seguirá pendiente de su cumplimiento. Leídos juntos, permiten explicar cómo una victoria jurídica se convierte en motivo para tomar la palabra públicamente. El texto permite estudiar la postura expresada en ese momento.",
    "prompt": "¿Qué palabras del pasaje se entienden mejor al conocer el dato de contexto?",
    "source": "guia-3",
    "lesson": 0
  },
  {
    "block": 1,
    "title": "De una formulación a un problema social",
    "explanation": "El reglamento de becas de la UCE sirve como ejemplo docente para observar cómo una institución justifica una decisión. Al volver a Sarayaku, la pregunta es quién puede exigir el cumplimiento de lo decidido y cómo se presenta ante otros públicos.",
    "points": [
      "Observa qué criterios organiza la norma, quién los establece y qué razones invoca.",
      "Explicita el criterio de evaluación y separa la representación normativa de su aplicación.",
      "Los considerandos incorporan otras voces y textos para fundamentar la decisión: esa intertextualidad forma parte de la práctica discursiva. Aportan razones invocadas; la difusión efectiva y las interpretaciones de lectores se estudian mediante registros correspondientes."
    ],
    "example": "En el artículo 3 del ejemplar de becas, el reparto es 65 % para excelencia académica y 35 % por vulnerabilidad.",
    "reading": "El documento organiza a los beneficiarios mediante dos criterios y asigna distinto peso a cada uno. Los considerandos sitúan esa distribución bajo fines de inclusión y equidad. Podemos analizar cómo se presenta la combinación de reconocimiento académico y vulnerabilidad como distribución institucional justificada. Evaluarla exige explicitar el criterio de equidad y examinar las categorías completas; conocer los beneficiarios efectivos requiere datos de adjudicación.",
    "prompt": "¿Qué relación social podemos explicar con estas marcas y qué afirmación exigiría otros datos?",
    "source": "guia-3",
    "lesson": 2
  }
],
 's8-e1':[
  {
    "block": 1,
    "title": "Triangular para resolver una dificultad",
    "explanation": "Triangular es contrastar fuentes o perspectivas para comprobar una interpretación. Aquí disponemos de dos fuentes: el pronunciamiento expresa la posición pública del pueblo y la sentencia documenta una obligación del Estado. Los dos pasajes del pronunciamiento pertenecen a una misma voz.",
    "points": [
      "La apertura y el cierre permiten seguir cómo el pueblo pasa de comunicar una noticia a anunciar un compromiso ante sus lectores.",
      "El punto 3 de la sentencia precisa una obligación futura. Para estudiar lo que ocurrió después se necesitarían registros de cumplimiento posteriores."
    ],
    "example": "El pueblo expresa que estará atento a que se cumpla el fallo. La sentencia precisa una de las medidas que debe cumplir el Estado.",
    "reading": "La interpretación se apoya en lo que cada fuente puede documentar: el comunicado da acceso a una posición pública y la sentencia a una decisión judicial. Comprobar una actuación posterior requeriría un registro de esa actuación.",
    "prompt": "¿Qué palabras de tu párrafo describen un compromiso y cuáles afirmarían que ya se cumplió?",
    "source": "wodak",
    "lesson": 3
  }
],
 's8-e2':[
  {
    "block": 0,
    "title": "Transferir una operación a un caso nuevo",
    "explanation": "La transferencia conserva una forma de investigar y ajusta sus categorías al nuevo problema. Una herramienta resulta pertinente cuando responde a la pregunta, permite analizar una marca y orienta qué dato contextual buscar. La respuesta distingue descripción, interpretación, fundamento y límite.",
    "points": [
      "Pregunta: qué relación queremos explicar; por ejemplo, «¿Cómo cambia el trato al pasar de “mi amor” a “Cristina”?». Marca: qué expresión o recurso permite examinarla. Dato: qué información situada puede sostener o modificar la interpretación.",
      "Si la nueva pregunta trata del vínculo entre participantes, el tratamiento y la respuesta pueden ser más pertinentes que buscar un agente omitido. La elección se justifica por lo que la herramienta permite explicar."
    ],
    "example": "Una omisión en un aviso y una omisión en un reglamento pueden tener condiciones de uso diferentes. En el café, «mi amor» y «perdón, Cristina» plantean otro problema: cómo se reajusta el trato.",
    "reading": "Para estudiar responsabilidad, la agencia sigue siendo útil: el artículo anterior puede identificar al responsable que un aviso aislado deja sin nombrar. Para estudiar el reajuste de cercanía en el café, las marcas son el tratamiento afectivo y su reparación; el turno previo y la respuesta permiten situar ese cambio. Buscar agentes omitidos deja de ser central porque no responde a esa pregunta. Se conserva la relación entre forma, acción y contexto; se selecciona la herramienta que explica el nuevo caso.",
    "prompt": "¿Qué operación se conserva y qué evidencia necesitamos examinar de nuevo?",
    "source": "guia-3",
    "lesson": 4
  }
],
 's9-e1':[
  topic(1,'Personas y destinatarios se reconstruyen','Al hablar, alguien puede tomar posición, nombrar a un grupo y dirigirse a un público. Un «nosotros» puede incluir a quienes escuchan o remitir a un grupo más reducido. Para saber a quién incluye, lee también las palabras que lo rodean.',
   ['Distingue a quien habla, a quienes aparecen en sus palabras y al público al que se dirige.','Persona gramatical y papel comunicativo no siempre coinciden: «los solicitantes» puede designar a los destinatarios, y una institución puede nombrarse a sí misma, como «esta comisión». La forma por sí sola no decide a quién incluye. Busca también nombres, posesivos y terminaciones verbales.'],
   'Menchú, discurso del Nobel de la Paz, párrafo que empieza «Considero este Premio». Dos marcas del pasaje son «Considero» y «los derechos de los pueblos indígenas».','«Considero» muestra que Menchú asume la valoración en primera persona. Al contraponer el galardón personal y la conquista colectiva, Menchú invita al público de la ceremonia a reconocer en el premio la lucha de los pueblos indígenas.',
   'En el pasaje de la entrevista que compara experiencias de mujeres, ¿qué palabras nombran a los grupos y qué diferencia destaca la hablante?','calsamiglia',0)
 ],
 's9-e2':[
  {
    "block": 1,
    "title": "Responsabilidad y perspectiva",
    "explanation": "En la distinción de Ducrot presentada por el manual, el sujeto hablante (ser empírico) produce el mensaje; el locutor es la figura responsable de enunciarlo; los enunciadores son figuras o voces a las que atribuye puntos de vista. No equivalen automáticamente a personas, redactores o firmantes.",
    "points": [
      "Para esta ficha usamos las definiciones de Ducrot presentadas por Calsamiglia y Tusón: permiten distinguir la responsabilidad de enunciar y los puntos de vista puestos en escena.",
      "Negar una proposición puede evocar una perspectiva sin identificar un hablante empírico. Rechazar «privilegio», en el ejemplo, disputa la manera de presentar una medida.",
      "Una persona puede nombrar a un colectivo, hablar en su nombre o reproducir palabras de uno de sus integrantes. En cada caso cambia quién asume la responsabilidad por lo dicho.",
      "En el pasaje de la entrevista que compara experiencias, localiza cómo se nombra a cada grupo. Explica quién hace la comparación y qué aporta a la respuesta."
    ],
    "example": "«La medida no es un privilegio».",
    "reading": "En esta lectura polifónica de la negación, apoyada en Ducrot según Caldiz, el locutor (L) pone en escena dos puntos de vista: E1 afirma «la medida es un privilegio»; E2 rechaza esa afirmación. L se distancia de E1 y asume E2. Estos puntos de vista se reconstruyen a partir del enunciado. El sujeto hablante es quien produce materialmente el mensaje. El enunciado aislado no identifica a quien habría sostenido E1. El cotexto permite precisar si se responde a algo dicho o se previene una objeción.",
    "prompt": "¿Podemos atribuir la perspectiva a alguien o solo describir que se evoca?",
    "source": "caldiz",
    "lesson": 1
  }
],
 's10-e1':[
  topic(1,'Citar también encuadra','Quien incorpora una voz puede apoyarse en ella, discutirla o delimitar su propia posición. Los verbos introductores como «aseguró» o «admitió» y las frases que rodean la cita ayudan a interpretar esa relación.',
   ['En la entrevista, el «techo de cristal» es una imagen de las barreras poco visibles que dificultan el acceso de las mujeres a puestos de poder.', 'En «La portavoz dijo: “Revisaremos el caso mañana”», la cita directa mantiene el «mañana» de la portavoz. En «La portavoz dijo que revisarían el caso al día siguiente», quien relata adapta la referencia al tiempo de su relato.','El [[ethos|ethos]] es la imagen que alguien construye de sí al hablar. En «Como delegada, transmito el acuerdo del curso», quien habla se presenta como portavoz del grupo y funda en ese papel su derecho a intervenir.'],
   '«El portavoz aseguró que la medida era necesaria» / «El portavoz admitió que la medida era necesaria».','«Aseguró» presenta la intervención como afirmación firme; «admitió» la encuadra como reconocimiento de algo que podía ofrecer resistencia. Así, quien refiere las palabras orienta la imagen del portavoz y de su posición. El cotexto permite precisar esa lectura.',
   '¿Qué cambia en la atribución cuando cambia el verbo introductor?','calsamiglia',2)
 ],
 's10-e2':[
  topic(1,'Revisar una atribución con marcas','Una atribución se puede revisar volviendo a las palabras de la entrevista. Si otro lector asigna una idea a una voz distinta, comparen la expresión que cada uno tomó como indicio y lo que se dice antes y después.',
   ['Una cita puede autorizar una posición o convertirse en objeto de discusión; la relación se reconoce en su presentación.','Una revisión puede corregir a quién se atribuye una idea y, con ello, cambiar la interpretación de la posición del texto.'],
   'En la entrevista de LatFem, Márquez introduce una idea de Davis y añade «dice ella». En el párrafo siguiente dice «Y yo creo que hoy estoy en el mismo lugar».','«Dice ella» remite a Davis. Con «yo creo», Márquez toma posición. El ejemplo del agua concreta su argumento: reconocer las distintas condiciones en las que viven las mujeres permite pensar una lucha compartida.',
   '¿Qué palabras indican que Márquez asume ahora la valoración?','marquez',4)
 ],
 's11-e1':[
  {
    "block": 1,
    "title": "Género, secuencia y medio",
    "explanation": "El género relaciona tema, estilo y composición con una práctica y sus participantes. En UNAE, la resolución aprueba bases y cronograma; el aviso comunica la decisión y orienta la postulación. Para reconocerlos se examina la combinación de autoridad, destinatarios, formulación y partes del texto. La secuencia, tomada de Adam por el manual, describe su organización interna: un género puede combinar varios tipos de secuencia.",
    "points": [
      "Composición textual: la resolución pasa de la autoridad y «RESUELVE» al artículo que aprueba las bases y a la orden de publicación. El aviso pasa del saludo a la comunidad estudiantil a la resolución enlazada y las fechas. Ese orden organiza lo que cada destinatario necesita conocer o hacer.",
      "Estilo: «Aprobar» y «Notifíquese» formulan disposiciones; «ponemos en su conocimiento» presenta el acto de comunicar. Las transcripciones permiten relacionar esas elecciones con la autoridad que decide y la instancia que informa.",
      "Para identificar secuencias, busca relaciones entre enunciados: cambio entre acontecimientos en la narración; objeto y propiedades en la descripción; razones y conclusión en la argumentación; dificultad y aclaración en la explicación; intervenciones que se responden en el diálogo. Los cinco ejemplos de la lectura previa muestran cómo reconocerlas.",
      "Un reglamento puede justificar y disponer. Disponer realiza una acción institucional: no es automáticamente una de las cinco secuencias de Adam. Hay que examinar cómo se organiza cada tramo.",
      "Modo: escritura, habla, imagen o gesto. Medio: forma de producción y comunicación, como cine o fotografía. Soporte: papel o pantalla. Una plataforma organiza circulación; un aviso escrito puede cambiar de género sin cambiar de medio. La intermedialidad amplía el análisis cuando la pieza relaciona medios; no es una etiqueta obligatoria para toda adaptación escrita."
    ],
    "example": "Una resolución y un aviso de convocatoria pueden referirse a las mismas ayudas.",
    "reading": "La resolución establece una decisión dentro de un procedimiento; la convocatoria presenta a sus destinatarios una oportunidad y las condiciones para actuar. En las piezas UNAE enlazadas, la disposición de publicar y el aviso permiten estudiar ese vínculo documentado. La relación entre géneros transforma el lugar del lector: de conocer una decisión a reconocerse como posible solicitante.",
    "prompt": "¿Qué acción permite reconocer el género de cada pieza?",
    "source": "calsamiglia",
    "lesson": 0
  }
],
 's11-e2':[
  topic(1,'Recontextualizar implica seleccionar','Recontextualizar cambia la situación en que un contenido adquiere sentido: quién lo comunica, para quién y con qué propósito. La carta abierta pide una decisión a la dirección y también puede ser leída por el estudiantado. Al convertirla en aviso, quienes ya podían leer pasan a recibir una invitación directa a responder.',
   ['La carrera tiene autoridad para decidir sobre la propuesta. Quien escribe el aviso puede solicitar ejemplos y presentar la idea como pendiente.', 'Resolución → convocatoria de la UNAE. El aviso enlaza la resolución que aprueba las bases y el cronograma. Puedes seguir una decisión publicada hasta su comunicación a los postulantes. Aquí el vínculo se comprueba en los documentos.', 'La selección muestra qué conocimientos se atribuyen al nuevo destinatario y qué respuesta se espera de él.'],
   'La misma propuesta pasa de una carta abierta a un aviso para primer semestre.','«Propongo que» pide una decisión a la dirección. La pregunta «¿qué ejemplos te ayudarían?» invita al estudiante a intervenir. La propuesta sigue pendiente en las dos piezas.',
   '¿Qué palabras muestran quién puede decidir y quién recibe la invitación a responder?','fairclough',3)
 ],
 's12-e1':[
  topic(1,'De las evidencias al argumento parcial','Un argumento de análisis explica una relación que las evidencias permiten ver. Retomamos la carta y el aviso de la semana 11 como ejemplo de una pregunta sobre el destinatario. Comparamos qué se pide y a quién en cada texto.',
   ['Explica qué muestra cada segmento y cómo responde a la pregunta.','Añade una objeción pertinente y delimita qué parte de la conclusión afecta.'],
   'En la carta, «Propongo que la carrera publique ejemplos de uso de IA». En el aviso de aula, «Si estás en primer semestre, ¿qué ejemplos te ayudarían?».','En la carta, «propongo que» presenta a la dirección una decisión por tomar. En el aviso, la pregunta directa invita a estudiantes de primer semestre a sugerir ejemplos. Las dos piezas mantienen el tema y muestran que cambian el destinatario y la acción que se le pide.',
   '¿Qué relación sostiene este párrafo y qué conclusión excedería sus datos?','guia-5',4)
 ],
 's12-e2':[
  topic(1,'Un salto inferencial necesita un puente','Explicar cómo un discurso circula exige documentar relaciones entre piezas. Una referencia a la resolución o una disposición de publicar puede vincular la decisión con su convocatoria. Ese puente permite estudiar cómo una institución comunica lo decidido a posibles solicitantes.',
   ['Para reconstruir la circulación, busca un vínculo documentado entre las versiones.','Una semejanza temática sirve para comparar las piezas.'],
   '«Ambos avisos hablan de becas; por eso uno deriva del otro».','La conclusión se apoya en una regla implícita que habría que justificar. Busca una cita, un enlace, una identificación de versión u otra fuente que documente el vínculo.',
   '¿Qué dato falta entre la observación y la conclusión?','guia-5',4)
 ],
 's13-e1':[
  {
    "block": 1,
    "title": "Un texto puede combinar secuencias",
    "explanation": "Narrar, describir, explicar, argumentar y dialogar contribuyen a construir una intervención. Una narración presenta un cambio como relevante; una descripción selecciona rasgos desde un punto de vista; un argumento sostiene una afirmación, interpretación o decisión. Retomamos los criterios de U5 para explicar cómo esas organizaciones se combinan y dónde empieza o termina cada tramo del género estudiado.",
    "points": [
      "En el taller, el relato une dificultad inicial, intervención docente y cambio posterior. El cambio en las entregas sostiene la segmentación narrativa; atribuirlo causalmente al intercambio requiere contraste.",
      "La descripción toma al grupo y sus materiales como anclaje y selecciona número y propiedades. Relacionar estudiantes y ejemplares sitúa las condiciones de la práctica que se propone mantener.",
      "En un trámite, «la solicitud estaba incompleta y luego fue admitida» relata una transformación particular. Describir su funcionamiento habitual presenta un proceso general; ordenar completar y enviar el formulario prescribe actuaciones. El orden temporal puede participar en las tres funciones: hay que identificar qué hace el tramo.",
      "La propuesta de mantener el intercambio se apoya en el contraste de interpretaciones. La narración y la descripción preparan ese argumento; cada segmento conserva su organización y aporta a la función del conjunto.",
      "Una aclaración puede insertarse en una descripción y un intercambio puede representarse dentro de un relato. Delimita la relación que justifica cada recorte; un conector, una fecha o unas comillas aisladas no deciden la clasificación."
    ],
    "example": "«En el primer taller de lectura, el grupo entregó respuestas muy breves. La docente incorporó un intercambio en parejas y, en la siguiente entrega, aparecieron más referencias al cuento. El curso reúne a treinta estudiantes y cuenta con quince ejemplares impresos, con márgenes amplios para anotar. Conviene mantener el intercambio para contrastar interpretaciones, pero habrá que comprobar quiénes participan y qué cambia en cada escrito antes de atribuirle la mejora».",
    "reading": "El relato selecciona una dificultad, una intervención docente y un cambio posterior. La descripción presenta las condiciones del grupo. Juntos preparan la propuesta de mantener el intercambio y construyen una imagen de docencia que interviene y revisa sus decisiones. El texto ofrece una justificación provisional; establecer una relación causal requiere contrastar los resultados. Cada tramo adquiere función en esa intervención completa.",
    "prompt": "¿Qué marca y qué función justifican cada segmentación?",
    "source": "calsamiglia",
    "lesson": 0
  }
],
 's13-e2':[
  {
    "block": 1,
    "title": "Explicar y justificar tienen preguntas distintas",
    "explanation": "La explicación aclara una dificultad: puede definir, clasificar, reformular, ejemplificar, usar analogías o relacionar causas. No se limita a lo causal. La justificación sostiene por qué aceptar una afirmación o una decisión. Pueden combinarse, pero comprender una causa no obliga a aceptar una medida.",
    "points": [
      "Definir delimita qué significa un concepto; clasificar organiza casos según un criterio. Ejemplificar concreta una idea en un caso; la analogía la aclara mediante la comparación con otro ámbito.",
      "Reformular aclara una expresión anterior. En «acreditar tus ingresos, es decir, demostrarlos», ejemplo de adaptación propia ya trabajado, «acreditar» puede plantear la dificultad, «es decir» señala la operación y «demostrarlos» aporta una formulación más familiar. Se entiende la necesidad de aportar prueba; las bases establecen los comprobantes.",
      "Los textos llamados expositivos presentan y organizan conocimiento. La secuencia explicativa de Adam permite estudiar cómo se pasa de una dificultad a su aclaración.",
      "Para explicar el retraso, muestra cómo se produjo a partir del fallo. Para justificar la ampliación del plazo, explicita el criterio que vincula el fallo con esa decisión."
    ],
    "example": "«El retraso se produjo por un fallo del sistema; por tanto, debemos ampliar el plazo».",
    "reading": "La causa atribuida al sistema representa el retraso como un problema ajeno al solicitante. Ampliar el plazo se vuelve defendible si se adopta el criterio de que ese fallo no debe perjudicar su acceso al trámite. El análisis hace explícito el valor que conecta la explicación con la decisión; comprobar el fallo y discutir el criterio son operaciones distintas.",
    "prompt": "¿Qué premisa adicional conecta la explicación con la decisión?",
    "source": "calsamiglia",
    "lesson": 2
  }
],
 's14-e1':[
  {
    "block": 1,
    "title": "El argumento necesita una regla de paso",
    "explanation": "Para justificar una lectura, empieza por tres preguntas. ¿Qué sostienes? ¿Qué palabras te llevan a pensarlo? ¿Por qué esas palabras respaldan tu lectura? Considera después una objeción que te obligue a precisar lo que afirmas.",
    "points": [
      "Primero localiza la razón (premisa) y lo que se sostiene (conclusión). Pregúntate qué criterio permite pasar de una a la otra.",
      "Para consultar el esquema completo, en el manual (Plantin y Toulmin), la ley de paso es la regla y la garantía, su apoyo. Una reserva indica cuándo limitar su aplicación. En Wodak, el topos funciona como regla de conexión.",
      "En el ejemplo de la carta, la tesis es la conclusión y la razón aporta la premisa. El cuadro hace explícito el criterio que las conecta. Una objeción puede cuestionar esa conexión o el dato en que se apoya.",
      "También se argumenta al analizar un texto: concluir que Márquez presenta una unidad basada en reconocer diferencias exige relacionar su comparación de experiencias con la propuesta final de alianza. Esas marcas sostienen una interpretación; el análisis debe explicar el vínculo y considerar una lectura alternativa."
    ],
    "example": "«Conviene declarar el uso de IA porque así el docente sabe qué ayuda recibió el estudiante».",
    "reading": "La tesis de la carta funciona aquí como conclusión. La razón aporta la premisa: declarar el uso informa al docente sobre la ayuda recibida. La regla de paso explica por qué eso cuenta a favor de la propuesta: conocer qué ayuda hubo es pertinente para evaluar la autoría. Un apoyo de la carta puede respaldar la premisa o, si justifica el criterio, servir de garantía de la regla. Una objeción puede cuestionar cuánto aclara la declaración; la reserva acota en qué casos se aplica la regla.",
    "prompt": "¿Bajo qué condición dejaría de ser aceptable este paso?",
    "source": "wodak",
    "lesson": 1
  }
],
 's14-e2':[
  {
    "block": 1,
    "title": "Una respuesta modifica la interacción",
    "explanation": "El diálogo relaciona las contribuciones de los participantes: una respuesta retoma, reformula, objeta o evalúa lo anterior. Bolívar entiende la evaluación como expresión de valores, sentimientos y emociones y estudia cómo interviene en la relación entre participantes y en la circulación o discusión de ideologías. El ejemplo permite reconocer quién valora el trámite, con qué criterio y cómo la respuesta modifica esa valoración.",
    "points": [
      "Una intervención es la contribución de un participante. El turno es la ocasión en que toma la palabra y puede incluir varias contribuciones. La pregunta de B y la respuesta final de A forman un intercambio; conservar la primera valoración de A permite entender qué cuestiona B. Las tres intervenciones forman aquí un episodio sobre el acceso.",
      "«Accesible» expresa una valoración de A sobre la inscripción; completarla en línea es el criterio que ofrece. B introduce a quienes carecen de conexión y discute ese criterio. La evaluación concierne al trámite y a las condiciones de sus usuarios.",
      "A pasa de presentar el canal digital como razón de accesibilidad a ofrecer atención presencial. Este cambio entre intervenciones puede observarse en el diálogo construido. Investigar cambio discursivo o social a mayor escala, como una transformación de la atención institucional, requiere comparar registros y prácticas en el tiempo.",
      "Distingue interacción registrada de diálogo reconstruido dentro de un relato. En el manual, secuencia también designa un episodio temático de la interacción; aquí usamos episodio para diferenciar ese alcance de los cinco tipos de secuencia textual."
    ],
    "example": "A: «La inscripción al taller de lectura es accesible: se completa en línea». B: «¿Y cómo se inscribe quien no tiene conexión?». A: «Por eso ofrecemos un punto de atención en el campus, de ocho a doce».",
    "reading": "B cuestiona que la conexión esté al alcance de todas las personas. A responde con una alternativa presencial y desplaza el foco hacia un lugar y un horario. Esa respuesta atiende la dificultad de conexión; quedan por examinar el traslado y la disponibilidad en ese horario antes de dar por resuelto el acceso. Para estudiar un cambio en la atención institucional, compara otros intercambios y prácticas a lo largo del tiempo.",
    "prompt": "¿Qué modifica la respuesta y dónde se observa la modificación?",
    "source": "bolivar",
    "lesson": 3
  }
],
 's15-e1':[
  topic(1,'Contraejemplo y límite de evidencia','Al revisar una conclusión, conviene distinguir dos situaciones. A veces encontramos un pasaje que contradice lo que afirmamos. Otras veces la pregunta va más allá de lo que los documentos registran.',
   ['Un contraejemplo es un caso que contradice una afirmación general y obliga a corregirla.','Un límite de evidencia indica hasta dónde llega la conclusión con los datos disponibles.'],
   'Primera afirmación: «La carta y el aviso se dirigen exclusivamente a la dirección de la carrera». En el aviso leemos «Si estás en primer semestre, ¿qué ejemplos te ayudarían?».',
   'Ese pasaje contradice «exclusivamente». La carta propone a la dirección que publique ejemplos de uso de IA y el aviso pide sugerencias a estudiantes de primer semestre. Para saber cómo entendieron el aviso sus destinatarios, harían falta respuestas de quienes lo leyeron. El comentario de un compañero de clase documenta su propia lectura.',
   '¿Qué afirmación corrige el aviso y qué queda por saber sobre sus lectores?','guia-6',4)
 ],
 's15-e2':[
  topic(0,'Convertir el análisis en una enseñanza','Enseñar análisis del discurso implica ayudar a relacionar una elección expresiva con lo que hace en una situación. Una consigna breve puede llevar desde observar una marca hasta explicar una responsabilidad, una posición o una acción. Material accesible y criterios claros hacen examinable ese razonamiento.',
   ['El lector debe poder localizar el segmento y producir una respuesta examinable.','Admite interpretaciones discrepantes que se justifiquen con evidencia.'],
   'Carta: «Propongo que la carrera publique ejemplos de uso de IA». Aviso: «Si estás en primer semestre, ¿qué ejemplos te ayudarían?».','Pide al lector que señale qué se le pide a la dirección en la carta y qué se les pide a los estudiantes en el aviso. Una respuesta lograda usa una expresión de cada frase para explicar esa diferencia. Pregunta al lector qué parte de la consigna le ayudó a reconocerla.',
   '¿La dificultad observada procede del concepto, del material o de la instrucción?','guia-6',4)
 ],
 's16-e1':[
  topic(0,'Defender una decisión con evidencia','Una defensa hace comprensible la interpretación lograda: qué relación entre discurso y práctica permite explicar, qué segmentos la sostienen y por qué esas categorías ayudan. La objeción permite precisar o revisar ese razonamiento dentro del alcance de los datos.',
   ['Dos minutos: decisión y evidencia. Un minuto: pregunta y respuesta breve.','El último minuto permite registrar y cambiar de turno; no es otra exposición.'],
   '«Restringí mi conclusión a estos avisos porque mi selección no permite generalizar a todos los documentos».','La delimitación acompaña la explicación de lo encontrado: cómo esos avisos presentan una decisión o distribuyen información para sus destinatarios. El localizador y las categorías permiten reconstruir esa relación. Así se defiende tanto la interpretación como el alcance que tiene.',
   '¿Qué decisión puedes justificar con una evidencia concreta?','guia-6',4)
 ],
 's16-e2':[
  topic(0,'Cerrar un expediente conserva sus límites','El informe responde al problema mostrando cómo el discurso interviene en la situación estudiada. Pregunta, método, evidencias y categorías deben conducir a esa explicación. La autoevaluación permite reconocer qué se comprendió y qué decisión del análisis necesita todavía fundamento.',
   ['Los anexos pertinentes apoyan el argumento; no sustituyen su desarrollo.','Conserva el registro de cambios y distingue el archivo de entrega del respaldo editable.'],
   'Una objeción muestra que un aviso no acredita recepción; el cierre restringe esa afirmación y conserva el análisis de su formulación.','El cierre puede explicar cómo el aviso define a su destinatario, jerarquiza condiciones y propone una acción. Deja la recepción efectiva como investigación pendiente. La revisión conserva una interpretación sustantiva y precisa qué evidencia sostiene cada parte.',
   '¿La conclusión responde a la pregunta con el alcance que permiten las evidencias?','guia-6',4)
 ]
};

