import {foundations,distinctions} from './foundations.js';
// Exposition accompanies an existing agenda block; it adds no assignments or minutes.
// Examples are authored illustrations, not quotations or new empirical corpus.
const topic=(block,title,explanation,points,example,reading,prompt,source,lesson)=>({block,title,explanation,points,example,reading,prompt,source,lesson});
export const classContent={
 's1-e1':[
  ...foundations.map(item=>({...item,block:0})),
  {block:0,title:'El concepto de discurso en cinco autores',explanation:'Estas perspectivas construyen problemas distintos: enunciación, diálogo, formación histórica del saber y relaciones entre discurso y sociedad. Las paráfrasis introductorias presentan el aporte específico de cada enfoque.',perspectives:true,points:[],source:'guia-fundamentos'},
  topic(2,'Observar antes de atribuir intención','Una descripción identifica una forma que otro lector puede comprobar. La interpretación propone qué permite entender esa forma en una situación. El motivo de quien escribe constituye una hipótesis adicional. La descripción también usa categorías: separar sus fundamentos ayuda a revisarlas, sin suponer una observación libre de teoría.',
   ['Distingue palabras presentes, información recuperada y explicación propuesta.','La ausencia de un nombre no identifica por sí sola a quien quiso ocultarlo.'],
   '«Se canceló la reunión».','La oración comunica una decisión ya realizada y coloca en primer plano la reunión afectada. Deja sin nombrar a quien canceló. Así organiza la representación del acontecimiento; el texto circundante permitirá saber si el responsable ya estaba identificado y explicar esa elección.',
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
  {
    "block": 1,
    "title": "Escribir configura una acción social",
    "explanation": "Un escrito interviene en una relación entre participantes. Un reglamento establece quién puede recibir una ayuda, quién acredita condiciones y quién administra el procedimiento. Las denominaciones y las obligaciones construyen esas posiciones dentro de la institución. La enunciación escrita se reconstruye mediante huellas del emisor, el destinatario y el momento de producción: quien aparece dentro de una cláusula puede tener un papel diferente de quien dicta el documento.",
    "points": [
      "En el reglamento, el encabezado del Consejo Universitario y «RESUELVE» identifican la voz que dispone (página 1 del archivo); los artículos 1–2 nombran al estudiantado y a la instancia administradora (página 2 del archivo). La razón final registra la reforma de septiembre de 2022 y la certificación de la Secretaría General (página 4 del archivo). Estas huellas sitúan emisor, destinatarios y ejemplar.",
      "Distingue quien dispone, quien acredita una condición y quien recibe un beneficio.",
      "Relaciona la formulación con la acción que permite: solicitar, verificar o resolver.",
      "Corpus es el conjunto seleccionado para responder una pregunta. En esta ficha, el documento es una pieza del corpus y cada cláusula o tramo examinado es una unidad de análisis; guardar su localizador permite relacionarlo con el conjunto."
    ],
    "example": "«La comisión verificará los requisitos antes de resolver la solicitud».",
    "reading": "El enunciado asigna a la comisión las acciones de verificar y resolver, y sitúa la verificación antes de la decisión sobre la solicitud. Ese orden organiza la relación entre la comisión y quien solicita. En los artículos 1–3 de becas, las denominaciones de responsables y beneficiarios permiten reconstruir posiciones institucionales; su aplicación se estudia con otros datos.",
    "prompt": "¿Qué regula el texto y qué necesitaríamos para estudiar su cumplimiento?",
    "source": "calsamiglia",
    "lesson": 0
  }
],
 's4-e2':[
  {
    "block": 1,
    "title": "Agencia y representación de participantes",
    "explanation": "Una cláusula relaciona un proceso o estado con sus participantes. El sujeto es una función gramatical, normalmente identificable por la concordancia con el verbo; el agente realiza la acción. Las cláusulas distribuyen atención y responsabilidad al representar un acontecimiento. En «Las solicitudes fueron revisadas por la comisión», las solicitudes son sujeto y la comisión realiza la revisión. «La revisión» convierte el proceso en un nombre. Estas elecciones permiten presentar quién interviene, qué se hizo y qué se toma como información ya conocida.",
    "points": [
      "El agente realiza la acción; la autoridad que la decide puede ser otra.",
      "La omisión se interpreta junto con los participantes identificados en el documento.",
      "[[modalidad|Modalidad]]: «deben presentar» expresa obligación; «pueden presentar» puede expresar permiso. «Es posible que presenten» expresa posibilidad. En una norma, esas diferencias organizan deberes, facultades y expectativas."
    ],
    "example": "«La comisión revisó las solicitudes» / «Se revisaron las solicitudes».",
    "reading": "La primera versión vincula una actuación con la comisión; la segunda centra la atención en el trámite realizado. Si la comisión ya está identificada, el lector puede recuperar ese vínculo. Si aparece aislada, la segunda versión deja pendiente a quién atribuir la actuación. La diferencia permite analizar la representación de la responsabilidad en cada situación.",
    "prompt": "¿Qué sabemos por la cláusula y qué recuperamos del resto del documento?",
    "source": "fairclough",
    "lesson": 0
  }
],
 's5-e1':[
  topic(1,'El lector aporta conocimientos','Los escritos se dirigen a lectores a quienes atribuyen ciertos conocimientos. Un trámite puede dar por conocidos un certificado o un procedimiento y exigir que el destinatario complete esa información. Las inferencias permiten examinar esa relación entre lo expresado y lo que se espera que el lector sepa.',
   ['Flower y Hayes, según el manual, describen los procesos de quien escribe: planificar, textualizar y revisar son procesos que se alternan. Textualizar es poner las ideas por escrito; revisar puede llevar a cambiar el plan. No forman un circuito fijo: cada proceso puede activar los otros.','El conocimiento que el analista supone no coincide necesariamente con el de los lectores reales.','En Grice según Escandell, «Algunos grupos entregaron» puede sugerir «no todos»: esa sugerencia es una [[implicatura|implicatura]]. «Algunos; de hecho, todos» cancela esa implicatura. El supuesto de una entrega anterior en «nuevamente» es una [[presuposicion|presuposición]]: presenta esa entrega como información compartida.'],
   '«Adjunte nuevamente el certificado».','«Nuevamente» presenta una acción anterior como información dada por supuesta: una presuposición, según Calsamiglia y Tusón y Brown y Yule. La petición sitúa al destinatario como alguien que ya participa en el trámite y puede reconocer el certificado. Un lector nuevo necesitaría recuperar esa información. El análisis explica qué conocimiento presupone el escrito; comprobar la entrega anterior exige consultar el expediente.',
   '¿Qué aporta la expresión y qué conocimiento estamos añadiendo?','escandell',1)
 ],
 's5-e2':[
  {
    "block": 1,
    "title": "Poner a prueba una inferencia",
    "explanation": "Interpretar un aviso implica decidir qué acción permite en una situación: cuándo presentar una solicitud, qué condición cumplir o a quién dirigirse. La formulación y las reglas del trámite sostienen esa lectura. No toda cláusula es ambigua ni toda inferencia necesita una rival igualmente plausible.",
    "points": [
      "Conserva las palabras que apoyan la interpretación.",
      "Busca un dato capaz de debilitarla, además de datos que la confirmen.",
      "En «hasta el viernes», la [[deixis|deixis temporal]] exige situar qué viernes corresponde a esa comunicación; el horario y el canal de recepción precisan después cómo ejercer el permiso. Cada dato resuelve una parte distinta de la interpretación."
    ],
    "example": "«Puede presentar la solicitud hasta el viernes».",
    "reading": "La formulación ofrece una posibilidad y fija un límite temporal: organiza la acción del solicitante. Para convertir ese límite en una decisión práctica importa conocer el horario y el canal de recepción. Esos datos contextualizan el permiso y permiten precisar cuándo puede ejercerse.",
    "prompt": "¿Qué información resolvería la discrepancia sin adivinar lo que quiso decir quien escribió?",
    "source": "brown-yule",
    "lesson": 1
  },
  {
    "block": 1,
    "title": "Del significado local al tema global",
    "explanation": "Una proposición es una unidad de contenido que afirma algo sobre un participante o situación. La macroestructura organiza el sentido global que reconstruimos desde las proposiciones del texto. Una síntesis ofrece al lector una representación del asunto. Seleccionar conserva información pertinente; generalizar reúne casos bajo una categoría; integrar reúne pasos en una acción global. En una norma, las condiciones conservadas determinan cómo se representa el acceso a la ayuda.",
    "points": [
      "La cohesión enlaza segmentos mediante referencias, recurrencias y conectores. Una referencia puede recuperar una expresión anterior, su antecedente; la recurrencia léxica mantiene el asunto mediante palabras repetidas o relacionadas; un conector señala cómo se relacionan dos partes.",
      "La segmentación distribuye temas en artículos y párrafos; la puntuación delimita unidades y relaciones dentro de ellos. Para resumir una norma, identifica a qué disposición pertenece cada condición y conserva ese vínculo.",
      "Una síntesis puede omitir detalles; debe justificar su selección.",
      "Cambiar una condición o introducir una conclusión ajena altera el contenido que se representa.",
      "Al generalizar una lista bajo una categoría, comprueba que el resumen conserve sus límites. El lector debe poder distinguir los casos admitidos de otros que pertenecen a la misma categoría."
    ],
    "example": "Texto: «La ayuda exige matrícula vigente y acreditación de ingresos». Síntesis: «La ayuda está condicionada a matrícula e ingresos».",
    "reading": "La síntesis pierde «vigente» y «acreditación»: representa el acceso mediante dos datos generales y deja fuera su condición temporal y la obligación de justificarlos. Una versión como «Para acceder hay que acreditar ingresos y tener matrícula vigente» conserva esa relación. La comparación muestra cómo resumir puede cambiar la imagen del beneficiario y de lo que se le exige.",
    "prompt": "¿Qué condición perderíamos con una síntesis demasiado amplia?",
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
      "Para comparar disposición, conserva el mismo contenido verbal.",
      "Para saber qué leen primero los destinatarios, compara las versiones con lectores."
    ],
    "example": "En un aviso, «Requisitos» aparece en letra pequeña; en otra disposición conserva las mismas palabras y gana tamaño y posición inicial.",
    "reading": "La segunda disposición destaca las condiciones como entrada a la lectura: propone que el destinatario compruebe si puede participar. Se conserva la información verbal y cambia su jerarquía. La respuesta del lector permitirá contrastar si ese recorrido propuesto coincide con su lectura.",
    "prompt": "¿Qué decisión visual cambió y qué observación permitiría valorar su efecto?",
    "source": "kress",
    "lesson": 3
  }
],
 's6-e2':[
  topic(1,'Distinguir diseño propuesto y lectura observada','La composición permite proponer una jerarquía de información. La respuesta del compañero aporta un dato de lectura en una situación concreta. Comparar ambas ayuda a revisar una hipótesis sin confundir lo visible con un efecto garantizado.',
   ['Señala qué elemento gana tamaño, posición o agrupación en tu alternativa.','Registra qué condición identifica el lector y cómo explica su recorrido. No conviertas una respuesta en una regla para todos.'],
   'Hipótesis: al destacar «Requisitos», será más fácil localizar las condiciones. Un compañero encuentra el título, pero omite una condición ubicada debajo.','La respuesta permite distinguir localizar el apartado de reconstruir las condiciones de acceso. El lector encuentra el título, pero no recupera una condición. Revisar la agrupación permite poner a prueba si contribuyó a esa omisión. La conclusión distingue el resultado observado de su posible explicación. En la ficha se contrasta con la respuesta realmente obtenida.',
   '¿Qué parte de la hipótesis apoya la respuesta y qué parte debemos revisar?','kress',3)
 ],
 's7-e1':[
  {
    "block": 1,
    "title": "Elegir un enfoque cambia la investigación",
    "explanation": "Elegir un enfoque exige relacionar problema, categorías y datos. El cotexto aporta palabras próximas; el contexto incluye además situación, institución y conocimientos pertinentes. En el reglamento, el encabezado y «RESUELVE» permiten interpretar «Se deberá destinar» como una disposición institucional. Los enfoques críticos investigan cómo el discurso participa en relaciones de poder, desigualdad y resistencia. La elección es provisional y se apoya en qué relación podremos explicar con las evidencias disponibles.",
    "points": [
      "Van Dijk, perspectiva sociocognitiva: distingue representaciones del asunto tratado e interpretaciones de la situación comunicativa. El modelo de acontecimiento representa mentalmente el asunto del discurso; el modelo de contexto, cómo un participante entiende quién comunica, con qué propósito y qué se supone conocido. Esas representaciones median la relación entre discurso y sociedad.",
      "Fairclough relaciona elecciones del texto, procesos de producción, distribución e interpretación —práctica discursiva— y relaciones institucionales y de poder —práctica social—. Así articula obligaciones, denominaciones, autoridad y condiciones de producción.",
      "Wodak y colaboradores estudian denominaciones, atributos y argumentos en contexto. Nominación es nombrar grupos; predicación, atribuirles rasgos; argumentación, relacionar razones con una afirmación o medida. El estudio de los cambios históricos necesita versiones comparables y datos de su contexto.",
      "La perspectiva dialéctico-relacional de Fairclough se desarrolla en distintos momentos; el esquema de tres dimensiones que usamos procede de 1992. La pregunta, la marca y el dato que la explica orientan qué categorías de cada propuesta son pertinentes."
    ],
    "example": "Problema: ¿cómo se representa una condición de acceso a una ayuda en una norma y en su explicación pública?",
    "reading": "Con las dos piezas podemos relacionar denominaciones y obligaciones con la autoridad que produce la norma y con el destinatario de su explicación: es un recorrido apoyado en Fairclough. Estudiar los conocimientos que median interpretaciones requiere datos adecuados de participantes; reconstruir cambios históricos exige documentos comparables. Elegir un enfoque concreta qué relación explicaremos y cómo la documentaremos.",
    "prompt": "¿Qué dato necesitaría cada enfoque y cuál podemos documentar en nuestro corpus?",
    "source": "pardo",
    "lesson": 1
  }
],
 's7-e2':[
  {
    "block": 1,
    "title": "Contextualizar exige fuentes y función",
    "explanation": "El contexto se documenta para resolver una dificultad interpretativa. Una fecha, una institución o una circunstancia importa cuando explicamos cómo afecta la lectura y de qué fuente procede. El contexto también se construye con indicios del propio discurso: tratamientos, referencias, turnos, gestos o prosodia. Vuelve al fragmento para comprobar cómo se presenta la situación.",
    "points": [
      "Goodwin y Duranti, según el manual, distinguen cuatro dimensiones del contexto: la localización o marco socioespacial, como una fecha o una institución; el comportamiento no verbal, como los gestos y los elementos iconográficos de la escritura; la lengua como contexto, con tratamientos y referencias; y el contexto extrasituacional, los conocimientos previos que permiten reconocer qué está pasando. Se estudian por separado, pero actúan conjuntamente.",
      "En la primera página del reglamento, el emblema institucional junto al nombre de la universidad aporta un indicio visual; «RESUELVE» realiza verbalmente una decisión. Conocer el papel normativo del Consejo Universitario permite relacionarlos con una voz autorizada. La imagen, las palabras y el conocimiento institucional colaboran en esa lectura.",
      "La fecha de una carpeta digital no equivale a la fecha de reforma del documento.",
      "Un procedimiento normativo no acredita cómo fue aplicado o experimentado."
    ],
    "example": "Fragmento: «Se deberá destinar el 65% de las becas para excelencia académica y el 35 % por vulnerabilidad» (artículo 3, página 2 del archivo). Dificultad: ¿el «2024» de la carpeta identifica la reforma de este ejemplar?",
    "reading": "Dato y fuente: la razón final del mismo Reglamento de Becas, página 4 del archivo, consigna reformas de 7 de diciembre de 2021 y 20 de septiembre de 2022. Función: permite identificar el ejemplar en que analizamos la obligación. La lectura pasa de «reparto en una norma reformada en 2024» a «reparto en un ejemplar que registra reforma de 2022»; la carpeta informa dónde se consulta. El encabezado del Consejo Universitario y «RESUELVE» (página 1 del archivo) aportan otro dato: quién presenta la disposición. Fecha e instancia explican aspectos diferentes del mismo fragmento. Para saber qué cambió exactamente en el artículo haría falta comparar versiones.",
    "prompt": "¿Qué afirmación cambia con este dato y cuál sigue pendiente?",
    "source": "guia-3",
    "lesson": 0
  },
  {
    "block": 1,
    "title": "De una formulación a un problema social",
    "explanation": "El análisis crítico relaciona marcas, categorías y condiciones sociales. Poder es capacidad situada de orientar acciones y acceso a recursos. Legitimar es presentar una decisión como aceptable o autorizada. La ideología exige estudiar relaciones entre creencias, significados y grupos; no se identifica por una palabra aislada.",
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
  topic(1,'Triangular para resolver una dificultad','Triangular permite reconstruir una práctica desde fuentes que muestran aspectos distintos: lo dispuesto, lo comunicado y lo interpretado. Una discrepancia puede revelar cómo cambia una condición al pasar entre documentos o entre participantes. La relación entre las fuentes debe estar documentada.',
   ['Explica qué pregunta responde cada fuente y cómo se complementan sus aportes.','Comprueba si los documentos se basan en una misma fuente o aportan datos obtenidos por separado.'],
   'Una norma fija el procedimiento; un aviso informa una convocatoria; una respuesta registrada muestra cómo fue interpretada.','Si pertenecen al mismo trámite, podemos seguir una condición: cómo se establece, cómo se comunica y qué entiende un participante. Una diferencia entre esos registros ayuda a localizar dónde se transforma su sentido. La conclusión se refiere a esas piezas y esa respuesta; otras experiencias requieren nuevos registros.',
   '¿Qué relación entre las fuentes sostiene nuestra conclusión?','wodak',3)
 ],
 's8-e2':[
  {
    "block": 0,
    "title": "Transferir una operación a un caso nuevo",
    "explanation": "La transferencia conserva una forma de investigar y ajusta sus categorías al nuevo problema. Una herramienta resulta pertinente cuando responde a la pregunta, permite analizar una marca y orienta qué dato contextual buscar. La respuesta distingue descripción, interpretación, fundamento y límite.",
    "points": [
      "Pregunta: qué relación queremos explicar. Marca: qué expresión o recurso permite examinarla. Dato: qué información situada puede sostener o modificar la interpretación.",
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
  topic(1,'Personas y destinatarios se reconstruyen','Las marcas personales y las denominaciones permiten presentarse, construir un colectivo y dirigirse a otros desde una posición. Menchú vincula el reconocimiento individual con una conquista colectiva; Márquez propone una alianza que reconoce diferencias internas. La referencia de «nosotros» debe reconstruirse en cada pasaje.',
   ['Distingue quien enuncia, los participantes representados y los destinatarios.','Persona gramatical y papel comunicativo no siempre coinciden: «los solicitantes» puede designar a los destinatarios, y una institución puede nombrarse a sí misma, como «esta comisión». La forma por sí sola no decide a quién incluye. Busca también nombres, posesivos y terminaciones verbales.'],
   'Paráfrasis del curso: Menchú relaciona el reconocimiento individual con una conquista colectiva. Márquez plantea que la unidad exige reconocer diferencias entre las mujeres.','En la recepción del premio, la experiencia individual permite reivindicar un reconocimiento compartido. En la entrevista, la comparación entre experiencias de mujeres cuestiona que el colectivo sea homogéneo y fundamenta una propuesta de alianza. El análisis relaciona esas posiciones con las marcas del recorte original y con cada situación de enunciación.',
   '¿Qué marca sostiene la inclusión que estamos proponiendo?','calsamiglia',0)
 ],
 's9-e2':[
  {
    "block": 1,
    "title": "Responsabilidad y perspectiva",
    "explanation": "En la distinción de Ducrot presentada por el manual, el sujeto hablante (ser empírico) produce el mensaje; el locutor es la figura responsable de enunciarlo; los enunciadores son figuras o voces a las que atribuye puntos de vista. No equivalen automáticamente a personas, redactores o firmantes.",
    "points": [
      "Para esta ficha usamos las definiciones de Ducrot presentadas por Calsamiglia y Tusón: permiten distinguir la responsabilidad de enunciar y los puntos de vista puestos en escena.",
      "Negar una proposición puede evocar una perspectiva sin identificar un hablante empírico. Rechazar «privilegio», en el ejemplo, disputa la manera de presentar una medida.",
      "En Menchú, «Considero» sitúa en la locutora la valoración del premio; los pueblos indígenas son el colectivo cuyos derechos y luchas se representan. En Márquez, la comparación de mujeres de la capital y de zonas rurales describe sus condiciones. Esas menciones construyen participantes del discurso.",
      "El mapa añade una voz atribuida cuando encuentra una marca pertinente: «Angela Davis, que dice» introduce una perspectiva y «yo creo» señala la posición asumida por Márquez. El recorte permite explicar su apoyo en esa voz. Una persona o un colectivo mencionado puede ser objeto del discurso sin recibir una intervención propia."
    ],
    "example": "«La medida no es un privilegio».",
    "reading": "En esta lectura polifónica de la negación, apoyada en Ducrot según Caldiz, el locutor (L) pone en escena dos puntos de vista: E1 afirma «la medida es un privilegio»; E2 rechaza esa afirmación. L se distancia de E1 y asume E2. Estos puntos de vista se reconstruyen a partir del enunciado. El sujeto hablante es quien produce materialmente el mensaje. El enunciado aislado no identifica a quien habría sostenido E1. El cotexto permite precisar si se responde a algo dicho o se previene una objeción.",
    "prompt": "¿Podemos atribuir la perspectiva a alguien o solo describir que se evoca?",
    "source": "caldiz",
    "lesson": 1
  }
],
 's10-e1':[
  topic(1,'Citar también encuadra','Incorporar una voz permite apoyarse en ella, discutirla o delimitar una posición propia. Los verbos introductores, las comillas y el cotexto orientan esa relación. En la entrevista, Márquez recurre a una voz atribuida a Angela Davis para cuestionar qué experiencias representa cierta imagen de emancipación.',
   ['Directa: «La portavoz dijo: “Revisaremos el caso mañana”». Indirecta: «La portavoz dijo que revisarían el caso al día siguiente». Cambia el centro de referencia; el ajuste depende de la situación.','En Márquez, el discurso referido contribuye al argumento sobre diferencias entre mujeres. Analizamos esa atribución en la entrevista; verificar la literalidad de Davis exige su fuente original.'],
   '«El portavoz aseguró que la medida era necesaria» / «El portavoz admitió que la medida era necesaria».','«Aseguró» presenta la intervención como afirmación firme; «admitió» la encuadra como reconocimiento de algo que podía ofrecer resistencia. Así, quien refiere las palabras orienta la imagen del portavoz y de su posición. El cotexto permite precisar esa lectura.',
   '¿Qué cambia en la atribución cuando cambia el verbo introductor?','calsamiglia',2)
 ],
 's10-e2':[
  topic(1,'Revisar una atribución con marcas','El mapa de voces permite explicar cómo una intervención construye su posición frente a otras. En el pasaje de Márquez, la comparación entre experiencias y la voz citada sostienen una unidad basada en reconocer diferencias. Segmento, marcas, responsabilidad y adhesión o distancia fundamentan esa interpretación.',
   ['Una cita puede autorizar una posición o convertirse en objeto de discusión; la relación se reconoce en su presentación.','Una revisión puede corregir a quién se atribuye una idea y, con ello, cambiar la interpretación de la posición del texto.'],
   '«La comisión informó que el plazo era suficiente; considero que esa afirmación debe revisarse».','«Informó que» atribuye a la comisión la suficiencia del plazo. El «yo» de «considero» asume el cuestionamiento y presenta esa valoración institucional como discutible. La distribución de voces construye una intervención crítica: la autoridad citada pasa a ser objeto de examen. Identificar al productor empírico requiere la fuente del documento.',
   '¿Qué perspectiva se sostiene y qué perspectiva se somete a examen?','guia-4',4)
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
  topic(1,'Recontextualizar implica seleccionar','Recontextualizar cambia la situación en que un contenido adquiere sentido: quién lo comunica, para quién y con qué propósito. Al explicar una norma a estudiantes nuevos, se selecciona y reformula información para orientar su actuación. La adaptación propia permite examinar esa transformación como experimento didáctico.',
   ['El vínculo documentado entre piezas permite reconstruir su circulación.','La selección muestra qué conocimientos se atribuyen al nuevo destinatario y qué respuesta se espera de él.'],
   'Transformamos una cláusula normativa en una explicación para estudiantes de primer semestre.','La autoridad que establece la norma y quien explica su alcance ocupan posiciones distintas. La adaptación convierte condiciones generales en orientaciones para un lector con menos conocimiento del trámite. Al conservar requisitos y explicitar referencias, propone una relación de acompañamiento. Su identificación como adaptación propia mantiene visible quién responde por esa explicación.',
   '¿Qué transformación facilita la comprensión y cuál podría alterar una condición?','fairclough',3)
 ],
 's12-e1':[
  topic(1,'De las evidencias al argumento parcial','Un argumento de análisis explica una relación que el corpus permite comprender. Comparar una condición normativa con su reformulación muestra qué acción se propone al destinatario y qué conocimientos se esperan de él. Las evidencias y las categorías sostienen esa interpretación.',
   ['Explica qué muestra cada segmento y cómo responde a la pregunta.','Añade una objeción pertinente y delimita qué parte de la conclusión afecta.'],
   'Segmento 1: una condición se formula en la norma. Segmento 2: esa condición se reformula en una adaptación propia.','Si la norma exige acreditar una condición y la adaptación explica cómo reconocerla, esta última orienta al destinatario para actuar y hace explícito un conocimiento del trámite. La conclusión relaciona el cambio verbal con una nueva posición del lector. Para estudiar si esa orientación fue comprendida, se contrasta con su respuesta.',
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
    "explanation": "Un argumento sostiene una afirmación, interpretación o decisión mediante razones y criterios compartidos o discutibles. La ley de paso conecta premisas y conclusión; una garantía puede apoyarla. Reconstruir esa relación permite examinar qué hace defendible la posición y qué objeción podría modificarla. En una decisión interesa además a quién afecta y qué valor se invoca.",
    "points": [
      "Un topos es una regla de conexión; no equivale a un tema o una palabra frecuente.",
      "Términos: en el manual (Plantin y Toulmin), la ley de paso es la regla y la garantía, su apoyo. En Wodak, el topos funciona como esa regla de conexión.",
      "La objeción debe afectar la inferencia que se sostiene.",
      "También se argumenta al analizar un texto: concluir que Márquez presenta una unidad basada en reconocer diferencias exige relacionar su comparación de experiencias con la propuesta final de alianza. Esas marcas sostienen una interpretación; el análisis debe explicar el vínculo y considerar una lectura alternativa."
    ],
    "example": "«La medida beneficia a muchos estudiantes; debemos mantenerla».",
    "reading": "La regla propuesta es que una medida beneficiosa merece mantenerse. El beneficio estudiantil funciona como criterio de legitimación: hace defendible la continuidad de la medida. Se puede discutir tanto la prueba del beneficio como el peso concedido a la cantidad de beneficiarios frente a costes o exclusiones. El criterio se construye para este ejemplo; no se atribuye como política real de la UCE.",
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
  topic(1,'Un límite precisa la conclusión','Una conclusión explica qué hemos comprendido de una práctica: cómo se representa un acontecimiento, se propone una relación o se justifica una decisión. Identifica las elecciones discursivas y los datos que sostienen esa explicación. Su alcance precisa a qué materiales y situaciones se refiere.',
   ['El corpus delimitado permite explicar relaciones concretas entre formulaciones, participantes y contexto.','La revisión debe indicar qué evidencia afectó qué afirmación.'],
   '«En los tres avisos analizados no se identifica al órgano responsable; falta estudiar otros géneros y la recepción».','Esta observación permite avanzar: los avisos comunican las decisiones sin vincularlas allí con un órgano responsable, de modo que identificarlo exige otra fuente. Esa conclusión explica cómo se distribuye la información para sus destinatarios. Investigar una estrategia sistemática o las respuestas efectivas de los lectores ampliaría el problema y las evidencias necesarias.',
   '¿Qué sabemos después del análisis y qué pregunta permanece abierta?','guia-6',4)
 ],
 's15-e2':[
  topic(0,'Convertir el análisis en una enseñanza','Enseñar análisis del discurso implica ayudar a relacionar una elección expresiva con lo que hace en una situación. Una consigna breve puede llevar desde observar una marca hasta explicar una responsabilidad, una posición o una acción. Material accesible y criterios claros hacen examinable ese razonamiento.',
   ['El lector debe poder localizar el segmento y producir una respuesta examinable.','Admite interpretaciones discrepantes que se justifiquen con evidencia.'],
   '«En estas dos cláusulas, subraya quién realiza la acción. Explica una diferencia y señala qué dato necesitarías para interpretarla».','La diferencia cobra sentido al explicar cómo cada cláusula representa la responsabilidad ante sus destinatarios. La respuesta permite ver si la consigna condujo hasta esa relación o se quedó en nombrar el agente. La revisión ajusta la enseñanza a esa dificultad concreta.',
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

