// Reusable sequence. Legacy day identifiers preserve links and notebook compatibility; labels use sessions.
const stage=(minutes,title,teacher,student)=>({minutes,title,teacher,student});
const meeting=(week,day,title,aim,output,stages)=>({id:week+'-'+day,week,day,title,aim,output,stages});
const regular=(opening,frame,work,discussion,closing)=>[
 stage(10,'Abrir la pregunta',opening[0],opening[1]),
 stage(20,'Encuadre y diálogo',frame[0],frame[1]),
 stage(35,'Trabajar con evidencia',work[0],work[1]),
 stage(45,'Contrastar, discutir y escribir',discussion[0],discussion[1]),
 stage(10,'Cerrar y preparar la continuidad',closing[0],closing[1])
];
export const encounters=[
 meeting(1,'lunes','Orígenes, perspectivas y primera pregunta','Distinguir la práctica de comparar de la institucionalización de la disciplina.','Primera pregunta comparativa, después del diagnóstico sin nota de «Antes de comparar».',regular(
 ['Presenta el propósito del seminario y recoge experiencias lectoras.','Comparte una relación posible entre dos lecturas que conozcas; puede quedar como pregunta por investigar.'],
 ['Sitúa los orígenes y contrasta las dos tradiciones históricas con las perspectivas del Sur Global.','Formula una pregunta sobre evidencia o método; reconoce que los enfoques se cruzan.'],
 ['Facilita un pasaje de Palacio y modela cómo localizar una afirmación del narrador.','Distingue observación, conjetura y reconstrucción en el pasaje.'],
 ['Acompaña el diagnóstico y discute comparaciones temáticas demasiado amplias.','En parejas, convierte una semejanza temática en una pregunta sobre un procedimiento; registra un límite.'],
 ['Delimita Palacio completo y Guillén, pp. 13–15, para la continuidad.','Guarda tu pregunta inicial y anota qué necesitas comprobar al leer.'])),
 meeting(1,'miercoles','Del pasaje a una relación comparativa','Construir una relación sin confundir semejanza e influencia.','Pregunta revisable y dos indicios iniciales para Palacio–Machado.',regular(
 ['Recupera dificultades de Palacio y de las definiciones de Guillén.','Comparte un pasaje que cambie tu lectura inicial.'],
 ['Explica criterio común, diferencia contextual y prueba del contacto.','Distingue lo que observas de lo que requeriría documentación histórica.'],
 ['Presenta fragmentos guiados de Machado, con sus datos de edición.','Contrasta la explicación de la violencia en ambos narradores.'],
 ['Discute relaciones plausibles y pide que cada conclusión conserve una diferencia.','Construye una pequeña matriz de indicios e identifica una objeción posible.'],
 ['Precisa la lectura de Machado y los modelos de Guillén que se desarrollarán en la semana 2.','Reformula la pregunta sin dar por concluida la comparación.'])),
 meeting(2,'lunes','Criterio, corpus y modelos de comparación','Justificar qué relación permite comparar Palacio y Machado.','Matriz de pasajes y criterio provisional para la Ficha 1.',regular(
 ['Recupera la pregunta de la semana anterior.','Explica qué cambió tras leer Machado completo.'],
 ['Sitúa los tres modelos de Guillén y sus distintos apoyos.','Relaciona una propuesta con el tipo de evidencia que necesita.'],
 ['Acompaña la selección y el cotejo de pasajes.','Registra indicios de narrador, violencia y empatía con localizador.'],
 ['Pide explicar una diferencia formal o contextual relevante para el criterio; confronta inferencias.','Contrasta resultados en parejas e inicia una conclusión argumentada.'],
 ['Delimita la Ficha 1 y sus criterios.','Elige los dos pasajes que desarrollarás y una duda por resolver.'])),
 meeting(2,'miercoles','Taller de la primera ficha','Transformar la matriz en un argumento que pueda discutirse.','Ficha 1 · borrador de 250–350 palabras, para revisar y cerrar antes de la siguiente semana.',regular(
 ['Recoge dudas sobre ediciones y localizadores.','Comprueba tus pasajes y tu criterio común.'],
 ['Trabaja el argumento comentado de Teoría y modela el vínculo entre tesis, evidencia, explicación y respuesta a una objeción.','Examina el modelo comentado de Teoría: identifica tesis, análisis de ambos relatos, diferencia, objeción, respuesta y límite.'],
 ['Acompaña la escritura y plantea preguntas a cada pareja.','Escribe el núcleo de la ficha, conservando diferencias contextuales.'],
 ['Facilita revisión entre pares con criterios; interviene sobre inferencias débiles.','Formula una objeción al argumento de otro lector y revisa el tuyo.'],
 ['Aclara el cierre de la ficha y la próxima lectura de canon.','Registra qué cambiaste y qué revisión finalizarás en el trabajo autónomo.'])),
 meeting(3,'lunes','Valoración y consagración','Distinguir una defensa del valor de la explicación de su reconocimiento.','Cuadro inicial: pregunta teórica, evidencia y límite.',regular(
 ['Recupera decisiones de selección de las fichas.','Distingue una preferencia de una afirmación comprobable.'],
 ['Presenta Bloom y Bourdieu con sus preguntas y límites.','Relaciona un juicio estético con un pasaje y un dato editorial con su registro.'],
 ['Guía el análisis de las listas simuladas A/B del dossier.','Identifica criterios declarados, coincidencias y diferencias; no trates el caso como dato institucional real.'],
 ['Contrasta explicaciones y solicita pruebas para inferencias de consagración.','Construye dos hipótesis distintas y precisa qué información falta.'],
 ['Anticipa las condiciones de transmisión y acceso en Guillory.','Guarda el cuadro inicial y una pregunta sobre acceso a la lectura.'])),
 meeting(3,'miercoles','Acceso, transmisión y pruebas de legitimación','Relacionar selección, instituciones y oportunidades de lectura.','Cuadro revisado de teorías y contraste de los registros C/D.',regular(
 ['Recupera las hipótesis de la primera sesión.','Identifica una inferencia que todavía necesita evidencia.'],
 ['Desarrolla Guillory y compara sus preguntas con Bloom y Bourdieu.','Distingue inclusión de títulos y condiciones de apropiación de saberes.'],
 ['Orienta la consulta de ASALE y CLACSO/Ayacucho.','Registra agentes, destinatarios y razones declaradas con fuente.'],
 ['Confronta la simulación escolar con los documentos reales.','Explica qué demuestra cada registro y qué recepción falta investigar.'],
 ['Conecta estos resultados con tipos de canon y repertorio.','Revisa el cuadro y prepara una selección docente posible.'])),
 meeting(4,'lunes','Tipos de canon y repertorio','Precisar quién selecciona, con qué función y qué modelos legitima.','Selección docente razonada y pregunta provisional del ensayo.',regular(
 ['Recupera una selección y su agente.','Explica por qué no basta identificar el soporte del documento.'],
 ['Distingue canon personal, escolar, crítico y editorial; explica repertorio con Even-Zohar.','Asocia una selección con su función y una convención concreta.'],
 ['Guía el uso del dossier y los datos editoriales ya consultados.','Relaciona una convención de lectura con la selección que propones.'],
 ['Discute criterios, acceso y límites de las propuestas.','Justifica tu selección y formula dos objetos posibles para el ensayo.'],
 ['Delimita el alcance de la Ficha 2.','Registra la pregunta del proyecto y la evidencia que usarás en la ficha.'])),
 meeting(4,'miercoles','Argumentar una selección docente','Sostener decisiones de canon y repertorio con razones y fuentes.','Ficha 2 · borrador de 250–350 palabras, para cerrar antes de la siguiente semana.',regular(
 ['Recoge dudas sobre los cuatro tipos y sus superposiciones.','Comprueba agente, función y evidencia de tu selección.'],
 ['Modela cómo separar dato, inferencia y decisión propia.','Identifica esos tres componentes en una formulación breve.'],
 ['Acompaña la escritura de la Ficha 2.','Compara A/B, justifica una selección y nombra una convención del repertorio.'],
 ['Orienta la revisión por criterios y discute objeciones.','Relaciona una afirmación con C o D y declara el límite de la fuente.'],
 ['Conecta el canon con las relaciones de poder de la siguiente unidad.','Guarda la revisión y la pregunta provisional del ensayo.'])),
 meeting(5,'lunes','Leer relaciones verbales y visuales','Examinar voz, destinatario y posición de los cuerpos en Guamán Poma.','Mapa inicial de voces, destinatarios y mediaciones.',regular(
 ['Recupera preguntas sobre selección y reconocimiento.','Formula una hipótesis sobre la lámina y su destinatario.'],
 ['Sitúa manuscrito, contexto colonial y la diferencia entre escena figurada y acontecimiento probado.','Distingue lo que muestra el archivo de una conclusión histórica que requiere otra fuente.'],
 ['Acompaña la lectura de la lámina 961 [975] y el recorte 962 [976].','Localiza rótulos, cuerpos e intervenciones del autor en ambos testimonios.'],
 ['Interroga explicaciones de centro/periferia y solicita evidencia.','Construye el mapa de voces y compara dos lecturas del mismo detalle.'],
 ['Delimita el contraste con Rivera Cusicanqui.','Señala qué afirmación de Rivera necesitas poner a prueba en el facsímil.'])),
 meeting(5,'miercoles','Poner a prueba una lectura de la colonialidad','Contrastar una interpretación con palabras e imágenes del archivo.','Mapa de voces revisado y una afirmación con su límite.',regular(
 ['Recupera las hipótesis visuales de la primera sesión.','Muestra un detalle que confirma o dificulta tu explicación.'],
 ['Precisa representación, heterogeneidad y condiciones de interlocución.','Distingue voz representada, autoría y destinatario.'],
 ['Orienta el cotejo de Rivera, pp. 19–26, con el manuscrito.','Relaciona una afirmación de Rivera con un elemento verificable del archivo.'],
 ['Discute interpretaciones rivales y diferencias de escala.','Revisa el mapa y escribe una conclusión que conserve una incertidumbre.'],
 ['Anticipa el contraste con oralitura contemporánea.','Anota qué diferencia histórica no debe borrarse al comparar.'])),
 meeting(6,'lunes','Oralitura y versiones lingüísticas','Leer Chikangana en su disposición original y sus mediaciones.','Pasajes y criterios para comparar Guamán Poma–Chikangana.',regular(
 ['Recupera las mediaciones de la crónica.','Explica qué esperas que cambie en un poema contemporáneo.'],
 ['Sitúa oralitura y el estudio de Brígido-Corachán y Domínguez; presenta a Kowii como una intervención situada desde Ecuador.','Distingue práctica contemporánea y explicación automática por procedencia.'],
 ['Guía la lectura de pp. 84–87 y las versiones de Takina/Poema. Dentro del mismo tiempo de lectura, lee el apartado de Kowii sobre rimanakuy.','Examina voz, destinatario y disposición; usa la pregunta por escucha y diálogo como apoyo y declara el alcance de tu lectura del castellano.'],
 ['Confronta los procedimientos con la crónica colonial.','Construye una matriz con diferencias históricas, de género y reconocimiento.'],
 ['Delimita la Ficha 3 y los registros de circulación.','Selecciona evidencia y un mediador que puedas documentar.'])),
 meeting(6,'miercoles','Comparar sin homogeneizar las voces','Argumentar diferencias entre la crónica y el poema.','Ficha 3 · borrador de 250–350 palabras, para cerrar antes de la siguiente semana.',regular(
 ['Recupera límites lingüísticos y preguntas de la primera sesión.','Comprueba atribuciones y localizadores de ambos objetos.'],
 ['Explica cómo sostener una relación de poder sin reducir las obras a identidades.','Pon a prueba una afirmación general con un pasaje.'],
 ['Acompaña la escritura de la Ficha 3.','Desarrolla una comparación de voz y destinatario con una diferencia relevante.'],
 ['Facilita objeciones entre pares y orientación sobre fuentes.','Revisa el argumento y registra una relación inicial para la cartografía.'],
 ['Aclara los materiales de la semana 7.','Guarda la revisión y conserva los datos de la mediación consultada.'])),
 meeting(7,'lunes','Autoría, testimonio y redes contemporáneas','Distinguir voces, autoría y mediación en poesía trans documental y crónica.','Comparación inicial y registros para la cartografía.',regular(
 ['Recupera Chikangana y sus condiciones de publicación.','Distingue un autor individual de una iniciativa colectiva.'],
 ['Sitúa Martínez/Fredes y Ruiz Agila/Esparza sin equiparar sus experiencias.','Identifica quién escribe, quién es representado y cómo se presenta la mediación.'],
 ['Guía las selecciones de Miriam Fredes y Ataúd en llamas; recupera el comentario sobre secuencia, voz testimonial y nota de correspondencia.','Localiza un procedimiento de construcción de voz en cada objeto y distingue observación, inferencia y mediación editorial.'],
 ['Discute edición, medios y alcance de las redes descritas.','Relaciona las formas con un circuito y conserva las diferencias históricas.'],
 ['Delimita fuentes, fechas y mediadores de la cartografía.','Selecciona dos registros verificables para trabajar la segunda sesión.'])),
 meeting(7,'miercoles','Taller de cartografía de circulación','Documentar vínculos y explicar sus asimetrías.','Cartografía inicial grupal; se revisará en la semana 13 y tendrá una sola calificación.',regular(
 ['Recoge fuentes y dificultades de acceso.','Distingue relación documentada y comparación propuesta.'],
 ['Explica el alcance de un registro y una iniciativa colectiva, con la guía de oralitura.','Identifica participantes, medio, fecha y tema sin inventar un movimiento.'],
 ['Acompaña el mapa de obras y mediadores.','Construye vínculos con fuente, localizador y límite; usa la visualización como apoyo.'],
 ['Contrasta mapas y pregunta por acceso, edición y traducción.','Explica una asimetría y qué información falta para afirmaciones de circulación global.'],
 ['Establece la continuidad hacia la sumativa.','Conserva la cartografía y una pregunta de representación para la semana 8.'])),
 meeting(8,'lunes','Límites y futuros posibles de la categoría','Revisar apropiación, homogeneización y visibilidad con evidencia.','Esquema de la comparación individual; relecturas, sin corpus nuevo.',regular(
 ['Recupera problemas observados en las cartografías.','Identifica un límite de tu explicación de circulación.'],
 ['Discute futuros posibles vinculados con condiciones concretas.','Relaciona un problema de acceso o edición con una condición razonada de cambio.'],
 ['Acompaña la selección de dos objetos ya trabajados.','Localiza pasajes y distingue problema de representación y mediación.'],
 ['Aclara criterios de la sumativa y plantea objeciones a los esquemas.','Organiza tesis, evidencias, diferencia y condición futura sin redactar una respuesta prefabricada.'],
 ['Confirma formato, fuentes permitidas y carácter individual.','Prepara textos y notas con localizadores para la segunda sesión.'])),
 meeting(8,'miercoles','Análisis comparativo individual en aula','Argumentar una relación sustentada y reconocer sus límites.','Sumativa individual · 600–800 palabras, realizada y cerrada en clase.',[
 stage(10,'Consigna y organización','Explicita criterios y resuelve dudas de procedimiento.','Organiza los dos objetos elegidos, notas y fuentes del curso.'),
 stage(90,'Escritura individual','Acompaña el procedimiento sin construir el argumento del estudiante.','Redacta 600–800 palabras: comparación, representación y condición de circulación futura con evidencia.'),
 stage(15,'Revisión individual','Recuerda criterios y tiempo disponible.','Comprueba localizadores, diferencias y alcance de las conclusiones.'),
 stage(5,'Entrega y cierre','Recoge el producto e identifica la continuidad del curso.','Entrega el análisis y conserva tus materiales para las relecturas posteriores.')]),
 meeting(9,'lunes','Presupuestos y comprensión','Relacionar partes y conjunto desde supuestos que pueden revisarse.','Hipótesis inicial y pasajes de Carrington–Bierce.',regular(
 ['Recupera una interpretación que hayas puesto a prueba durante el curso.','Identifica qué evidencia te llevó a cambiarla, precisarla o mantenerla.'],
 ['Sitúa Gadamer, historicidad y círculo hermenéutico.','Distingue un presupuesto propio de una propiedad demostrada del texto.'],
 ['Orienta la lectura de Carrington y Bierce con el dossier.','En Carrington localiza cómo se acepta lo extraordinario y se orienta el juicio; en Bierce relee tiempo e información a partir del cierre.'],
 ['Discute cómo cambia la relación entre parte y conjunto.','Contrasta los procedimientos e inicia una explicación con dos pasajes.'],
 ['Delimita la revisión de hipótesis.','Anota una lectura rival del indicio elegido.'])),
 meeting(9,'miercoles','Revisar una interpretación con evidencia','Responder una objeción y justificar qué cambia, se precisa o se mantiene en la comprensión.','Interpretación comparada y revisión argumentada del taller.',regular(
 ['Recupera hipótesis iniciales y dificultades del relato.','Muestra un pasaje que hayas usado para cambiar, precisar o sostener tu interpretación.'],
 ['Precisa justificación, coherencia y resistencia del texto.','Distingue una revisión sustentada de una preferencia por otro desenlace.'],
 ['Acompaña el cotejo de presupuestos y evidencias.','Formula una objeción que explique el mismo indicio de otra manera.'],
 ['Facilita intercambio y revisión escrita.','Responde la objeción y registra tu hipótesis final: qué cambias, precisas o mantienes y por qué.'],
 ['Conecta comprensión y recepción sin confundir sus objetos.','Guarda el desarrollo para recuperarlo al contrastar métodos.'])),
 meeting(10,'lunes','Expectativas, operaciones de lectura y límites','Distinguir respuesta personal, lector textual y recepción histórica.','Cuadro de afirmaciones y evidencias para la Ficha 4.',regular(
 ['Recupera expectativas de Carrington–Bierce.','Distingue tu reacción de una señal del relato.'],
 ['Sitúa Jauss, Iser y Eco con preguntas y evidencias diferentes.','Identifica qué fuente exige cada afirmación sobre un lector.'],
 ['Guía los dos prólogos de recepción del dossier.','Registra autor, fecha, medio y criterio de valoración de cada documento.'],
 ['Acompaña el caso Tess, pp. 120–122 del manual, leído en aula.','Distingue relato mediado y observación directa; contrasta su alcance con los prólogos.'],
 ['Delimita la Ficha 4 y la evidencia pertinente.','Conserva una afirmación textual y otra histórica, con fuentes separadas.'])),
 meeting(10,'miercoles','Argumentar una recepción situada','Sostener una comparación de documentos y declarar su alcance.','Ficha 4 · borrador de 250–350 palabras, para cerrar antes de la siguiente semana.',regular(
 ['Recupera las fuentes y sus localizadores.','Comprueba autorías y fechas de los dos documentos.'],
 ['Modela cómo una polémica documenta posiciones interesadas.','Reconoce qué generalización requiere más testimonios.'],
 ['Acompaña la escritura de la Ficha 4.','Distingue lector implícito, respuesta propia y horizonte histórico.'],
 ['Discute objeciones sobre representatividad y coherencia.','Revisa afirmaciones y explicita lo que los documentos no permiten concluir.'],
 ['Anticipa el cotejo de traducciones.','Guarda la ficha y prepara las versiones breves de la semana 11.'])),
 meeting(11,'lunes','Versiones, testimonio y decisiones de traducción','Cotejar lugares precisos del original y las dos traducciones.','Tres diferencias observables y efectos iniciales.',regular(
 ['Recupera ediciones, atribuciones y lenguas de trabajo.','Describe la escena que imaginas en cada versión.'],
 ['Sitúa mediación, testimonio y alcance del control del francés.','Distingue observación en español y afirmación que necesita apoyo del original.'],
 ['Guía el cotejo de Baudelaire, Casal y Díez-Canedo.','Examina tres lugares: léxico, temporalidad, espacio o ritmo.'],
 ['Discute efectos y posibles explicaciones con evidencia.','Inicia el comentario y formula una duda que no pueda resolverse solo por semejanza.'],
 ['Delimita el uso del manual y la extensión final.','Conserva versiones y localizadores para continuar la segunda sesión.'])),
 meeting(11,'miercoles','Comentario de traducción y revisión','Transformar el cotejo en una explicación de decisiones y efectos.','Comentario · borrador de 400–500 palabras, para cerrar antes de la siguiente semana.',regular(
 ['Recupera diferencias y dudas del cotejo.','Comprueba en los testimonios los tres lugares que elegiste entre los cuatro del taller.'],
 ['Discute variante, decisión y error sin atribuir intenciones sin fuentes.','Formula qué información permitiría decidir entre explicaciones.'],
 ['Acompaña la redacción y la consulta del manual, pp. 133–136.','Desarrolla tres diferencias y sus efectos, con traductores y versiones identificados.'],
 ['Guía revisión por pares y límites lingüísticos.','Revisa el comentario y relaciona traducción con los métodos ya trabajados.'],
 ['Anticipa la matriz de métodos y las microclases.','Guarda el texto que utilizarás al organizar el ensayo.'])),
 meeting(12,'lunes','Contrastar métodos y organizar el ensayo','Aplicar dos enfoques a objetos y pasajes ya trabajados.','Matriz de métodos y esquema provisional del ensayo.',regular(
 ['Recupera resultados del cotejo y la recepción.','Explica qué pregunta permitió responder cada procedimiento.'],
 ['Sitúa históricamente análisis formal, hermenéutica contextual y recepción.','Distingue objeto, procedimiento, evidencia y límites.'],
 ['Acompaña la aplicación de dos enfoques a pasajes conocidos.','Compara resultados y evalúa la afirmación simulada de Teoría, identificando el salto entre semejanza e influencia.'],
 ['Discute límites y orienta la estructura argumental.','Registra tesis provisional, tres nudos de evidencia y una objeción en el proyecto.'],
 ['Aclara el dispositivo de microclase y la continuidad.','Prepara o revisa la actividad grupal sin añadir lecturas completas.'])),
 meeting(12,'miercoles','Microclases: comparar para enseñar','Hacer que el público compare evidencias y discuta sus interpretaciones.','Microclases según turnos; matriz y esquema revisados, sin lectura nueva.',[
 stage(8,'Abrir la jornada','Recuerda objetivo, criterio y distribución de turnos.','Identifica la pregunta y la evidencia que observarás como participante.'),
 stage(80,'Microclases y discusión','Observa, registra criterios y facilita las transiciones entre grupos.','Los grupos asignados realizan 12 minutos de actividad y 8 de discusión; el público compara y argumenta. Se reserva margen para transiciones.'),
 stage(24,'Revisar método y mediación','Relaciona decisiones didácticas con el tipo de evidencia obtenido.','Revisa una consigna o el esquema del ensayo a partir de los resultados observados.'),
 stage(8,'Cerrar la continuidad','Precisa qué se retoma en la segunda jornada, sin duplicar evaluación.','Guarda mejoras; cada grupo presenta una sola vez, en la semana 12 o 15.')]),
 meeting(13,'lunes','Weltliteratur y escalas de lectura','Definir escalas sin reducir literatura mundial a una lista de obras.','Criterios de escala y preguntas para revisar la cartografía.',regular(
 ['Recupera circuitos de circulación ya documentados.','Distingue lugar de producción y alcance comprobado de circulación.'],
 ['Sitúa la conversación de Goethe/Eckermann y su mediación de traducción.','Examina apertura al intercambio y jerarquías de valoración en la selección.'],
 ['Acompaña definiciones y ejemplos de lo local, nacional y continental.','Prueba dos escalas sobre objetos del corpus y explica qué cambia.'],
 ['Guía Ortiz Wallner, pp. 132–135, como caso Sur–Sur en aula.','Registra obras, mediadores y transformaciones del testimonio entre América Latina e India.'],
 ['Delimita la revisión de la misma cartografía.','Conserva dos datos del caso y una tensión de escala.'])),
 meeting(13,'miercoles','Revisar circulación y escalas','Justificar cambios en la cartografía con fuentes y límites.','Cartografía grupal revisada · una sola calificación del proceso.',regular(
 ['Recupera criterios y datos de la primera sesión.','Identifica qué vínculo necesita precisión de fecha, mediador o escala.'],
 ['Discute asimetrías de acceso, edición y traducción.','Distingue posición en el dibujo y relación de poder sustentada.'],
 ['Acompaña la revisión de la cartografía iniciada en la semana 7.','Revisa vínculos, fuentes y alcance; conserva qué cambió y por qué.'],
 ['Contrasta mapas y conecta la circulación con la lectura de Borges.','Explica una tensión entre pertenencia y circulación, sin generalizar desde un único registro.'],
 ['Aclara el cierre del producto grupal y las lecturas delimitadas de la semana 14.','Guarda la cartografía y tu pregunta sobre cita, atribución y contexto.'])),
 meeting(14,'lunes','Cita, mediadores y reescritura','Precisar qué relación textual demuestra cada pasaje.','Pasajes de Cervantes–Borges y categorías para la Ficha 5.',regular(
 ['Recupera las preguntas abiertas al iniciar Borges.','Distingue el proyecto de Menard de las valoraciones del narrador.'],
 ['Explica las relaciones transtextuales del capítulo I de Genette y recupera el repertorio como conjunto de modelos y convenciones.','Distingue copresencia, comentario y derivación con indicios concretos; reconoce una convención del diálogo entre textos.'],
 ['Guía los dos pasajes del capítulo IX del Quijote y su cita en Borges.','Reconstruye mediadores y localiza palabras, atribución y comentario.'],
 ['Discute cambio de contexto y escala España–Argentina.','Construye una explicación que no convierta relectura retrospectiva en influencia histórica inversa.'],
 ['Delimita la Ficha 5.','Selecciona evidencia y una objeción para escribir la segunda sesión.'])),
 meeting(14,'miercoles','Argumentar el diálogo entre textos','Explicar una relación textual y sus transformaciones de contexto.','Ficha 5 · borrador de 250–350 palabras, para cerrar antes de la siguiente semana.',regular(
 ['Recupera localizadores y categorías de la primera sesión.','Comprueba qué relación demuestra cada cita.'],
 ['Modela la articulación de forma, atribución y contexto.','Distingue qué añade el comentario del narrador a las mismas palabras.'],
 ['Acompaña la escritura de la Ficha 5.','Desarrolla el contraste Cervantes–Borges con un límite explícito.'],
 ['Facilita objeciones y conexión con el ensayo.','Revisa la ficha y decide qué evidencia sirve a la tesis de tu proyecto.'],
 ['Anticipa tematología y extensión intermedial.','Recupera pasajes ya leídos; la semana 15 no añade lectura autónoma.'])),
 meeting(15,'lunes','Tema, motivos y variación entre literaturas','Comparar primero el tema entre relatos y después extender el procedimiento a medios.','Matriz tematológica y revisión del borrador; relecturas, sin corpus autónomo nuevo.',[
 stage(10,'Recuperar pasajes y preguntas','Recupera Palacio–Machado y pide delimitar el problema.','Distingue tema amplio, motivo concreto y procedimiento observable.'),
 stage(20,'Encuadre con ejemplos','Sistematiza tema, motivo y variación histórica con Guillén.','Prueba las distinciones sobre los pasajes que ya seleccionaste.'),
 stage(35,'Matriz tematológica','Acompaña el contraste entre literatura ecuatoriana y brasileña.','Explica violencia y deshumanización mediante recursos formales y diferencias históricas.'),
 stage(30,'Extensión entre medios','Orienta el visionado completo de Historia de un oso y el contraste con la crónica de Esparza.','Analiza ausencia mediante palabra, imagen y sonido; delimita la comparación sin afirmar adaptación.'),
 stage(25,'Taller del borrador y cierre','Interviene sobre tesis, evidencia y objeción; prepara la continuidad de la segunda sesión.','Transforma una ficha o matriz en un apartado del ensayo y registra una revisión necesaria.')]),
 meeting(15,'miercoles','Microclases y revisión del ensayo','Revisar la mediación didáctica y fortalecer el argumento propio.','Segunda jornada según turnos y borrador revisado; cada microclase se presenta una sola vez.',[
 stage(10,'Abrir con criterios','Recupera los criterios de microclase y las dificultades del borrador.','Identifica qué observarás en la comparación realizada por el público.'),
 stage(80,'Microclases y discusión','Acompaña los turnos pendientes y registra evidencia de aprendizaje.','Los grupos asignados realizan 12 minutos de actividad y 8 de discusión; el público compara, objeta y revisa. Se reserva margen para transiciones.'),
 stage(20,'Revisión focalizada del ensayo','Orienta la relación entre tesis, pasajes y consigna didáctica.','Revisa un nudo argumental y anota el cambio que completarás en el trabajo autónomo.'),
 stage(10,'Preparar la defensa y cerrar','Aclara los criterios de ensayo, consigna y defensa de la semana 16.','Identifica dos evidencias decisivas y un límite; prepara la versión que defenderás.')]),
 meeting(16,'lunes','Defensas y revisión del recorrido','Defender una tesis comparativa y responder una pregunta con evidencia.','Defensas según turnos y revisión de ensayo, consigna y autoevaluación.',[
 stage(4,'Organizar el encuentro','Recuerda criterios y turnos; precisa el trabajo del público.','Prepara tesis, dos evidencias y un límite para intervenir.'),
  stage(108,'Defensas y trabajo de revisión','Escucha las defensas y plantea una pregunta; organiza transiciones.','Cada estudiante dispone de 4 minutos de exposición y 1 minuto adicional para responder una pregunta del docente, con margen de transición. Quienes escuchan identifican argumento y evidencia y revisan su propio trabajo.'),
 stage(8,'Síntesis y continuidad','Recupera un problema común de método y explica el cierre de la segunda sesión.','Registra una revisión o un límite y conserva el guion de tu defensa.')]),
 meeting(16,'miercoles','Defensas y cierre del seminario','Integrar canon, interpretación, mediación y escalas en una reflexión sustentada.','Defensas pendientes, ensayo final de 1500–1800 palabras, consigna y respaldo del cuaderno.',[
 stage(4,'Organizar el cierre','Recuerda criterios y turnos pendientes.','Prepara fuentes y evidencias para la intervención o la revisión.'),
 stage(108,'Defensas y cierre de los escritos','Escucha las intervenciones y orienta las preguntas; conserva evidencia individual.','Los turnos pendientes defienden su tesis; el público revisa coherencia, atribuciones y consigna didáctica. No se incorpora corpus nuevo.'),
 stage(8,'Cerrar y conservar el trabajo','Sintetiza aprendizajes y explica la entrega por el canal institucional.','Cierra el ensayo y la reflexión, prepara la entrega PDF y descarga el respaldo JSON. La web no envía el trabajo al docente.')])
];
export const encounterById=Object.fromEntries(encounters.map(e=>[e.id,e]));
export const dayLabel=day=>day==='lunes'?'Sesión 1':'Sesión 2';
const a=(before,between,after)=>[
 {moment:'Antes de la primera sesión',minutes:before[0],task:before[1]},
 {moment:'Entre ambas sesiones',minutes:between[0],task:between[1]},
 {moment:'Después de la segunda sesión',minutes:after[0],task:after[1]}
];
export const autonomousPlan={
 1:a([0,'La introducción y el diagnóstico comienzan en clase; no exigen una lectura previa.'],[70,'Lee Palacio completo y Guillén, pp. 13–15; selecciona dos indicios.'],[50,'Consolida tu pregunta y tus localizadores a partir del contraste realizado.']),
 2:a([75,'Lee Machado completo y Guillén, pp. 93–95 hasta cerrar el modelo C; recupera Palacio.'],[20,'Relee los pasajes elegidos y prepara una objeción.'],[25,'Revisa y cierra la Ficha 1 antes de la siguiente semana.']),
 3:a([70,'Lee las cuatro secciones del dossier de canon e identifica las listas y registros.'],[20,'Revisa una afirmación sobre selección o acceso y su fuente.'],[30,'Completa el cuadro y prepara una selección posible; no se piden libros nuevos.']),
 4:a([40,'Recupera tipos de canon, repertorio y las fuentes ya trabajadas.'],[35,'Precisa tu selección docente y la pregunta provisional del ensayo.'],[45,'Revisa y cierra la Ficha 2 antes de la siguiente semana.']),
 5:a([75,'Examina los dos testimonios de Guamán Poma y lee Rivera, pp. 19–26.'],[20,'Vuelve al detalle que permite poner a prueba una afirmación de Rivera.'],[25,'Consolida el mapa de voces y su límite.']),
 6:a([60,'Lee el estudio, pp. 84–87, que ya incluye Takina/Poema y ambas versiones.'],[30,'Relee el contraste con Guamán Poma y prepara tus localizadores.'],[30,'Revisa y cierra la Ficha 3 antes de la siguiente semana.']),
 7:a([60,'Lee la presentación y bloques delimitados de Martínez y la pieza de Esparza, pp. 41–43.'],[30,'Comprueba con el grupo dos registros de circulación; no leas los libros completos de sus catálogos.'],[30,'Conserva la cartografía inicial y explica sus límites.']),
 8:a([45,'Elige dos objetos ya trabajados y recupera sus pasajes; no hay lectura nueva.'],[30,'Ordena las notas y localizadores para la sumativa en aula.'],[45,'Revisa el procedimiento utilizado y organiza tus materiales para las siguientes relecturas.']),
 9:a([80,'Durante la primera lectura de Carrington y Bierce registra tus expectativas antes del desenlace y los indicios que las ponen a prueba. Después lee el dossier de hermenéutica.'],[15,'Relee el indicio elegido y una explicación rival.'],[25,'Consolida la hipótesis revisada y justifica qué cambias, precisas o mantienes.']),
 10:a([60,'Lee el dossier de recepción y sus dos documentos; el caso Tess se guía en aula.'],[25,'Revisa qué evidencia necesita cada afirmación sobre el lector.'],[35,'Revisa y cierra la Ficha 4 antes de la siguiente semana.']),
 11:a([40,'Lee el poema de Baudelaire en francés y sus dos traducciones, junto con el manual, pp. 133–136 antes de Transducción.'],[40,'Desarrolla tres diferencias con sus efectos y revisa las versiones.'],[40,'Cierra el comentario de 400–500 palabras antes de la siguiente semana.']),
 12:a([40,'Recupera pasajes para dos enfoques y la pregunta del proyecto; no hay lectura nueva.'],[40,'Prepara o revisa la microclase según tu turno y su consigna.'],[40,'Consolida el esquema del ensayo y las decisiones de método.']),
 13:a([40,'Lee la selección española de Goethe e inicia el cuento de Borges.'],[20,'Recupera fuentes y vínculos de la cartografía; Ortiz se trabaja en aula.'],[60,'Cierra la revisión de escalas y continúa Borges. La cartografía se califica una sola vez.']),
 14:a([70,'Termina Borges; lee los pasajes de Cervantes y Genette, capítulo I, pp. 9–17.'],[20,'Revisa citas, categorías y localizadores para la ficha.'],[30,'Revisa y cierra la Ficha 5 antes de la siguiente semana.']),
 15:a([40,'Recupera Palacio, Machado y la crónica; selecciona materiales para el borrador, sin lectura nueva.'],[40,'Desarrolla el borrador y prepara la microclase solo si corresponde a tu turno.'],[40,'Revisa tesis, evidencia y objeción; prepara la versión que defenderás.']),
 16:a([70,'Revisa ensayo, referencias y consigna; organiza la defensa con pasajes ya trabajados.'],[35,'Completa atribuciones, autoevaluación y revisiones para el cierre.'],[15,'Conserva la entrega y el respaldo del cuaderno; no hay corpus nuevo.'])
};
// Reservation only: assigning actual turns waits for the lecturer's cohort information.
export const presentationCapacity={microclass:{reservedMinutes:160,duration:23,teaching:12,discussion:8,transition:3},defense:{reservedMinutes:216,duration:6,presentation:4,question:1,transition:1}};
