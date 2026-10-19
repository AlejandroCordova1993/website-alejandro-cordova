import {weeks} from './schedule.js?v=lc-b7e790f6c7ad';
import {unitActivities} from './curriculum.js?v=lc-b7e790f6c7ad';
import {translationRows} from './corpus.js?v=lc-b7e790f6c7ad';
import {activityTitle} from './teaching.js?v=lc-b7e790f6c7ad';
import {encounterById,dayLabel} from './encounters.js?v=lc-b7e790f6c7ad';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Teaching prompts are original syntheses. Texts and attributions are in Leer.
const lessons={
 1:[
  ['Una relación necesita una pregunta','La literatura comparada estudia relaciones entre obras, lenguas, culturas y medios. Define qué observas y conserva las diferencias entre los objetos.','¿Qué permite ver el contraste Palacio–Machado que una lectura aislada dejaría sin explicar?'],
  ['Analogía y relación histórica','Compartir un tema permite construir una comparación; demostrar influencia requiere fuentes que documenten el contacto o la mediación.','Separa una semejanza observable de una relación histórica comprobada.'],
  ['Elegir también es interpretar','Un corpus responde a una pregunta y a condiciones de acceso. Explica por qué elegimos estos relatos y qué dejan fuera.','Diagnóstico inicial sin nota.']
 ],
 2:[
  ['Unidad de comparación','Compara narrador, violencia y empatía con pasajes de Palacio y Machado. Una unidad precisa evita que dos resúmenes sustituyan la comparación.','Elige un indicio en cada relato y explica una diferencia.'],
  ['Tres modelos en Guillén','Distingue relaciones históricas, condiciones sociohistóricas comparables y problemas teóricos que justifican el contraste. Recupera el comentario de Palacio para explicar cómo una conjetura adquiere autoridad.','Guillén, pp. 93–95: detenerse al cierre del modelo C.'],
  ['De la matriz a la ficha 1','Pregunta → evidencia de cada texto → diferencia formal o contextual → conclusión y límite.','Ficha individual de 250–350 palabras.']
 ],
 3:[
  ['Bloom: defender un juicio de valor','La discusión de la fuerza estética y la originalidad requiere explicar qué recursos de una obra sustentan el juicio. Una preferencia no demuestra por sí sola consagración institucional.','¿Qué pasaje o procedimiento respalda el valor que atribuyes?'],
  ['Bourdieu: estudiar la consagración','Relaciona posiciones de autores, editoriales, crítica y enseñanza. Investiga qué agentes y condiciones de producción y circulación hacen posible el reconocimiento.','¿Qué documento permite identificar al agente y su intervención?'],
  ['Guillory: acceso y transmisión escolar','Pregunta quién accede a las prácticas y saberes que la enseñanza distribuye. Una lista de autores no basta para explicar las oportunidades de lectura.','¿Qué condiciones de acceso supone cada selección?'],
  ['Un caso, tres preguntas','Contrasta las dos listas y los dos registros del dossier. Separa juicio estético, consagración y transmisión educativa.','Dossier local de canon, cuatro secciones. Cuadro: teoría, pregunta, dato y límite.']
 ],
 4:[
  ['Tipos de canon','Compara selecciones personales, escolares, críticas y editoriales. Sus agentes, destinatarios y criterios pueden coincidir parcialmente.','No conviertas una lista individual en prueba de todo el canon de una institución.'],
  ['Repertorio y canonización','Una selección puede legitimar obras y también convenciones: géneros, formas narrativas o modos de valorar. Explica qué convención enseña tu propuesta.','Distingue una lista de títulos de un repertorio de posibilidades literarias.'],
  ['Una selección docente argumentada','Justifica qué incluirías, para qué público y con qué carga. Usa las listas y los registros identificados del dossier.','Ficha 2: 250–350 palabras; fuentes, convención y evidencia de legitimación.']
 ],
 5:[
  ['Centro y periferia son relaciones','Indica respecto de qué institución, lengua, mercado o circuito una posición es central o periférica. La identidad de un autor no demuestra automáticamente subalternidad.','¿Qué acceso o reconocimiento está en disputa?'],
  ['Palabra e imagen en Guamán Poma','Examina autoría, destinatario, voces y composición visual. Su condición de crónica permite estudiar operaciones discursivas y relaciones culturales.','Lámina y recorte escrito del manuscrito.'],
  ['Poner a prueba una interpretación','Contrasta el análisis de Rivera Cusicanqui con los detalles del facsímil. Conserva lo que la fuente muestra y delimita lo que infieres.','Mapa de voces y mediaciones; Rivera, pp. 19–26.']
 ],
 6:[
  ['Oralitura y contemporaneidad','La relación entre oralidad y escritura incluye decisiones actuales de autoría, edición y circulación. Evita tratarla solo como supervivencia del pasado.','Brígido-Corachán y Domínguez, pp. 84–87.'],
  ['Takina / Poema: versiones y disposición','Observa voz, destinatario y organización del poema en sus dos versiones. Kowii permite preguntar por escucha y diálogo; su fragmento apoya el mismo cotejo.','Conserva la reproducción visual de p. 85. Kowii: p. 8, apartado sobre rimanakuy, leído en aula.'],
  ['Ficha 3 y primeros registros','Compara Guamán Poma–Chikangana con evidencias. Inicia registros de obras, mediadores, fechas y medios para la cartografía.','Ficha 3: 250–350 palabras.']
 ],
 7:[
  ['Autor, voz y movimiento','Distingue autoría literaria, persona representada e iniciativa colectiva. Una red necesita participantes, prácticas o publicaciones documentadas.','Guía local de iniciativa colectiva y capítulo de oralitura.'],
  ['Globalización y medios','Compara Chikangana, Martínez y Ruiz Agila: lenguas, soportes, mediadores y accesos. En la pieza de Esparza distingue secuencia, voz y nota de correspondencia.','Registra dos circuitos de circulación y el alcance de cada fuente; disponibilidad digital no demuestra recepción mundial.'],
  ['Temas y formas de una red','Identifica una iniciativa colectiva, sus temas y decisiones de edición o traducción. Delimita qué vincula sus participantes.','Cartografía grupal inicial; se revisa en la semana 13 y se califica una vez.']
 ],
 8:[
  ['Problemas de representación','Pon a prueba categorías como apropiación, homogeneización y visibilidad con casos concretos del curso.','¿Qué evidencia te obliga a matizar la categoría de literatura subalterna?'],
  ['Pensar una circulación futura','Justifica una condición que podría cambiar acceso o reconocimiento: traducción, archivo, edición o distribución. Explica su alcance.','Una proyección razonada necesita datos del caso y límites explícitos.'],
  ['Sumativa 1 en aula','Compara dos objetos, discute un problema de representación y argumenta una condición de circulación futura.','600–800 palabras; textos y notas del curso, sin lectura nueva.']
 ],
 9:[
  ['Gadamer: comprender desde una historia','Los presupuestos permiten empezar a comprender y pueden revisarse en el encuentro con el texto. Identifica una expectativa propia y su efecto en la lectura.','Dossier local de hermenéutica, p. 1.'],
  ['Partes y conjunto','El sentido de un indicio depende de la lectura del relato, y un indicio puede transformar esa lectura. Explica el movimiento mediante pasajes.','Círculo hermenéutico; no basta afirmar que cambiaste de opinión.'],
  ['Carrington / Bierce: poner a prueba la interpretación','En Carrington examina desde cuándo se acepta lo extraordinario y cómo se juzga la violencia; en Bierce, qué cambia al releer el tiempo y la información. Explica qué mantienes, precisas o cambias. Conserva las diferencias de narrador, tiempo, verosimilitud y contexto.','Ejercicio de la semana 9; la ficha 4 tiene su propio espacio en la semana 10.']
 ],
 10:[
  ['Jauss: horizonte de expectativas','Reconstruye convenciones, géneros y valoraciones que documentos fechados permiten atribuir a lectores históricos.','Dos prólogos de 1614 y 1615: testigos situados de una polémica; no representan a todos los lectores.'],
  ['Iser: lector implícito e indeterminación','Estudia operaciones que la organización del texto propone al lector: anticipar, conectar información y revisar.','Analiza un indicio de Carrington o Bierce; distingue el papel textual de tu reacción personal.'],
  ['Eco: límites de la interpretación','Contrasta explicaciones rivales mediante coherencia y evidencias. Indica qué dato debilitaría la lectura que sostienes.','Dossier local de recepción; síntesis docente con referencias.'],
  ['Dos documentos y el caso Tess','Coteja los recortes de Avellaneda y Cervantes con autor, fecha, medio y localizador. Después discute el relato mediado de Tess del manual.','Ficha 4: 250–350 palabras. Distingue documento histórico, lector textual y respuesta personal.']
 ],
 11:[
  ['Un puerto, dos traducciones','Coteja Le Port con Casal y Díez-Canedo en tres lugares. Explica efectos de léxico, ritmo, temporalidad o posición del observador.','Lectura 8 min · Cotejo 15 min · Discusión 7 min · Inicio del comentario 10 min.'],
  ...translationRows.map(row=>({title:row.question,html:`<div class="class-pair class-translations"><section><h3>Francés</h3><p lang="fr">${esc(row.original)}</p></section><section><h3>Julián del Casal</h3><p>${esc(row.casal)}</p></section><section><h3>Enrique Díez-Canedo</h3><p>${esc(row.diez)}</p></section></div>`,detail:'Declara qué sostienes en español y qué necesita control del francés.'})),
  ['Comentario de traducción','Organiza tres decisiones, sus efectos y los límites de tu cotejo. Identifica traductores y versiones.','400–500 palabras; manual, pp. 133–136, hasta antes de Transducción.']
 ],
 12:[
  ['Métodos con objetos y evidencias diferentes','Sitúa análisis formal y narrativo, hermenéutica contextual y recepción. Elige dos: pregunta, procedimiento, evidencia y límite.','Matriz de métodos aplicada a pasajes ya leídos.'],
  ['Comparar los resultados','Explica qué descubre cada enfoque y qué no puede demostrar. Evalúa una interpretación automática o sin fuentes con evidencias localizables.','Mantén la relación entre objetos como problema comparativo.'],
  ['Primera jornada de microclases','Cada grupo propone una comparación realizada por el público y discute sus respuestas.','12 min de actividad + 8 de discusión. Preparar también el esquema del ensayo.']
 ],
 13:[
  ['Weltliteratur en su contexto','Lee la conversación del 31 de enero de 1827: apertura al intercambio y persistencia de jerarquías de valoración.','Selección española local de Goethe/Eckermann; traducción didáctica mediada por el francés.'],
  ['Escalas que debemos definir','Explica los criterios de lo local, nacional y continental. Distingue lugar de producción y circulación documentada.','Una obra puede estudiarse en varias escalas; indica qué cambia al elegirlas.'],
  ['Circulación Sur–Sur','El caso América Latina–India permite examinar mediadores y transformaciones del testimonio.','Ortiz Wallner, pp. 132–135, lectura guiada de 20–25 min.'],
  ['Revisar la misma cartografía','Recupera los registros de la semana 7. Justifica escalas, tensiones y cambios con fuentes.','Una sola cartografía grupal; inicia también la lectura de Borges.']
 ],
 14:[
  ['Genette: precisar la relación','Distingue presencia de un texto en otro, paratexto, comentario y transformación. Localiza qué relación demuestra cada pasaje.','Palimpsestos, capítulo I, pp. 9–17.'],
  ['Las mismas palabras, otro contexto','Coteja el capítulo IX del Quijote con Pierre Menard. Distingue mediadores, atribución y comentario del narrador.','La lectura retrospectiva no demuestra influencia histórica inversa.'],
  ['Intertextualidad entre escalas','Explica el diálogo entre España y Argentina y su inscripción transcontinental con indicios precisos.','Ficha 5: 250–350 palabras.']
 ],
 15:[
  ['Tematología entre literaturas','Compara violencia y deshumanización en Palacio–Machado. Distingue tema, motivos, recursos formales y variación histórica.','Matriz tematológica: pasaje, procedimiento, contexto y límite.'],
  ['Una extensión entre medios','Coteja Ataúd en llamas e Historia de un oso: ausencia y memoria mediante testimonio, escritura, imagen y sonido.','El cortometraje no adapta la crónica; delimita la comparación.'],
  ['Microclases y ensayo','Segunda jornada de microclases y revisión del borrador: tesis, evidencias, objeción y consigna didáctica.','Lunes: tematología, extensión intermedial y borrador. Miércoles: microclases y revisión del ensayo.']
 ],
 16:[
  ['Defender una relación','Presenta tesis, evidencia decisiva y límite del contraste. Responde una pregunta vinculada con tu método o interpretación.','Defensa individual: 4 min + 1 pregunta de 1 min.'],
  ['Ensayo final y consigna didáctica','Explica las mediaciones, responde una objeción e incorpora una consigna para que otro público compare pasajes.','Ensayo de 1500–1800 palabras; referencias y matriz como anexos.'],
  ['Recuperar las revisiones','Identifica qué cambió en tu manera de comparar y qué evidencias produjeron esa revisión.','Síntesis de canon, mediación y escalas; sin corpus nuevo.']
 ]
};
export function sessionSlides(week,day=null){
 const encounter=day&&encounterById[week+'-'+day];
 if(encounter)return [{title:encounter.title,text:encounter.aim,detail:`Semana ${week} · ${dayLabel(day)}`},...encounter.stages.map(s=>({title:s.title,text:s.student,detail:`${s.minutes} min · Orientación docente: ${s.teacher}`})),{title:'Qué conservamos y cómo continuamos',text:encounter.output,detail:'Guarda evidencias, localizadores y decisiones en los espacios existentes del cuaderno.'}];
 const w=weeks.find(w=>w.week===week);if(!w)return [];
 const slides=lessons[week].map(s=>Array.isArray(s)?{title:s[0],text:s[1],detail:s[2]}:s);
 const activities=unitActivities.filter(a=>a.module===Math.ceil(week/4)&&a.weeks.includes(week));
 return [{title:w.title,text:'¿Qué pregunta y qué evidencia orientarán esta sesión?',detail:''},...slides,{title:'Del trabajo en clase al cuaderno',text:activities.map(activityTitle).join(' · '),detail:'Identifica las fuentes, localiza la evidencia y explica el límite de tu conclusión.'}];
}
