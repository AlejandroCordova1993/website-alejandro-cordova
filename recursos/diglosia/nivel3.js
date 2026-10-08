/* Nivel 3 · El peso de las palabras
   Basado en «Consecuencias de la diglosia» (Lengua y cultura, carga histórica de las palabras).
   Las expresiones discriminatorias se mencionan para analizarlas en contexto, nunca como material de juego. */
Object.assign(window.DG.images, {
  'n3-registro-colonial': ['Un libro de registro colonial abierto sobre un escritorio de madera, con pluma, tintero y sello de lacre; al fondo, la sombra de una escalera.', '<strong>Clasificar con tinta.</strong> En la Colonia, los registros anotaban a cada persona según su «casta».'],
  'n3-oficios-dignos': ['Retratos dignos de trabajadores ecuatorianos actuales: una albañil, un carpintero, una trabajadora del hogar y un agricultor, de pie y de frente.', '<strong>Oficios con dignidad.</strong> Ningún trabajo hace a una persona valer menos.'],
  'n3-malintzin': ['Malintzin, mujer nahua, de pie entre dos grupos —españoles y mexicas— traduciendo con gestos serenos.', '<strong>Malintzin, intérprete entre lenguas.</strong> Su nombre se volvió insulto; hoy se la estudia de otra manera.'],
  'n3-merienda': ['Una familia afroecuatoriana de Esmeraldas comparte comida en una mesa larga al aire libre e invita con un gesto a una persona que llega; al fondo, una marimba.', '<strong>Una invitación.</strong> Antonio Preciado convierte una expresión racista en una mesa abierta.'],
  'n3-nombrar-respeto': ['Estudiantes de un colegio ecuatoriano diseñan juntos un cartel en el aula, con papeles, marcadores y una cartelera.', '<strong>Nombrar con respeto.</strong> El lenguaje también puede usarse para reconocer a los demás.']
});
window.DG.levels.push({
  id: 'n3', num: '3', name: 'El peso de las palabras', question: '¿Pueden las palabras discriminar?',
  summary: 'Cómo la jerarquía colonial quedó guardada en las palabras, y cómo se puede nombrar con respeto.',
  chapters: [
    {
      id: 'n3c1', num: '01', short: 'Las palabras tienen historia', time: '40 min',
      title: 'Palabras que clasificaban personas',
      lead: 'La misma jerarquía que puso al castellano por encima de otras lenguas ordenó también a las personas. Y lo hizo con palabras.',
      goal: 'Explicar cómo el sistema de castas usó el lenguaje para ordenar a las personas en una jerarquía.',
      tasks: ['Distinguir cuándo el lenguaje comunica y cuándo domina.', 'Interpretar el sistema de castas.'],
      product: 'Tu primera respuesta a la pregunta del nivel.',
      keyIdea: 'Las palabras no son neutras: algunas nacieron para ordenar a las personas en una escala de poder.',
      recap: ['El uso de la lengua depende del contexto social, económico y político.', 'La discriminación lingüística empezó con la conquista.', 'El sistema de castas nombraba y ordenaba a las personas según su «mezcla».', 'Esa jerarquía ponía arriba lo hispano y la blancura.'],
      bridge: { from: 'n2', title: 'Viene del nivel 2', items: ['La diglosia da privilegios a una lengua y relega a otras.', 'Esa imposición marcó la educación, la identidad y los derechos.', 'Los pueblos respondieron: la educación bilingüe es hoy un derecho colectivo.'], next: 'Ahora vas a ver cómo esa jerarquía quedó guardada dentro de las propias palabras.' },
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n3p1', question: '¿Has pensado en el poder destructivo que pueden tener las palabras?',
            options: [
              ['Sí: una palabra puede herir tanto como un golpe.', 'Muchas personas lo han vivido. En este nivel verás que algunas palabras hieren porque cargan siglos de historia.'],
              ['Solo si se dicen con intención de ofender.', 'La intención importa mucho. Pero verás que algunas palabras arrastran una valoración aunque quien las dice no la conozca.'],
              ['No: las palabras son solo palabras.', 'Es una postura que vale la pena poner a prueba. Al final del nivel volverás a esta pregunta con más argumentos.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'El lenguaje tiene poder', html: `
          <p class="reading lede">Los modos en que usamos la lengua dependen en gran medida del <strong>contexto social, económico y político</strong>. Y todo discurso, oral o escrito, busca persuadir: por eso el lenguaje puede servir para consolidar relaciones de poder.</p>
          <p>La discriminación [[lingüística]] en nuestro continente empezó con la llegada de los conquistadores. En los niveles anteriores viste cómo se impuso una lengua. Ahora verás algo más profundo: <strong>cómo las palabras mismas aprendieron a ordenar a las personas</strong>.</p>
          <aside class="note"><strong>Recuerda los niveles anteriores</strong><p>Nivel 1: la lengua de los vencedores se impuso. Nivel 2: esa imposición dejó heridas en la educación, la identidad y los derechos. Nivel 3: esa jerarquía sigue viva en el vocabulario.</p></aside>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a0', type: 'sort', title: '¿Comunicar o dominar?',
          purpose: 'Reconocer cuándo el lenguaje solo informa y cuándo sirve para imponer poder sobre otras personas.',
          steps: ['Lee cada uso del lenguaje. Varios vienen del nivel 1.', 'Decide si solo comunica información o si sirve para dominar a otras personas.', 'Pulsa «Comprobar».'],
          bins: [['com', 'Comunica', 'message-circle-question'], ['dom', 'Domina', 'landmark']],
          items: [
            ['u1', 'Un mapa indica dónde nacen los ríos de una provincia.', 'com', '¿Alguien queda abajo o pierde algo con esta información?'],
            ['u2', 'Se lee el Requerimiento en castellano a pueblos que no lo entienden.', 'dom', 'Recuerda el nivel 1: ¿para qué servía leer ese documento?'],
            ['u3', 'Una receta explica cómo preparar un locro.', 'com', 'Solo transmite un saber. ¿Somete a alguien?'],
            ['u4', 'Se cambia el nombre de Tomebamba por el de Cuenca.', 'dom', 'En el nivel 1 viste que nombrar también era apropiarse.'],
            ['u5', 'El horario del colegio indica a qué hora empieza la clase.', 'com', 'Organiza el día, pero no pone a nadie por debajo de otros.'],
            ['u6', 'Se llama «bárbaras» a las lenguas de América.', 'dom', 'La palabra desprecia a quienes hablan esas lenguas y justifica la conquista.']
          ] } },
        { kind: 'read', label: 'Lee', title: 'El sistema de castas', html: `
          <p class="reading lede">Tras la conquista y la imposición del castellano, los miembros de la sociedad colonial fueron clasificados en un sistema de [[casta|castas]]. Se crearon términos para nombrar las «mezclas» entre pueblos.</p>
          <ol class="ladder" aria-label="Escala del sistema de castas, de arriba abajo">
            <li><span class="mono">ARRIBA</span><strong>Españoles</strong><small>nacidos en España</small></li>
            <li><span class="mono"></span><strong>Criollos</strong><small>hijos de españoles nacidos en América</small></li>
            <li><span class="mono"></span><strong>Mestizos, castizos, mulatos…</strong><small>nombrados según su «mezcla»</small></li>
            <li><span class="mono">ABAJO</span><strong>Pueblos indígenas y personas esclavizadas de origen africano</strong><small>sin los derechos de los demás</small></li>
          </ol>
          {{img:n3-registro-colonial}}
          <p>Algunas de esas palabras para nombrar seres humanos eran: <em>lobo</em>, <em>jíbaro</em>, <em>tente en el aire</em>, <em>no te entiendo</em>. Muchas expresan, hasta hoy, discriminación.</p>
          <aside class="note"><strong>Una palabra que sigue hiriendo</strong><p>«Jíbaro» se usó en el Ecuador como nombre despectivo para el pueblo shuar. Lo viste en el nivel 1: el shuar chicham es una de las 14 lenguas vivas del país, y la nacionalidad shuar tiene derecho a nombrarse a sí misma.</p></aside>
          <div class="definition"><span class="mono">QUÉ BUSCABA ESA ESCALA</span><p>Según el historiador Carlos López Beltrán, era una jerarquía impuesta «desde las alturas» para mantener arriba lo hispano —con la blancura como señal más visible— y abajo, en peldaños bien marcados, al resto de la población.</p></div>
          <p class="think">{{i:message-circle-question}}<span><strong>Piensa y comenta:</strong> ¿qué dice de una sociedad que llame a una persona «no te entiendo»?</span></p>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a1', type: 'choice', title: 'Interpreta la escala',
          purpose: 'Explicar cómo el lenguaje sirvió para ordenar a las personas.',
          steps: ['Lee cada pregunta.', 'Elige la interpretación mejor sustentada.', 'Pulsa «Comprobar» y lee la explicación.'],
          questions: [
            ['q1', '¿Por qué los nombres de las castas eran una forma de poder?', [
              ['Porque ubicaban a cada persona en una escala que ponía arriba lo español.', true, 'Exacto. Nombrar era clasificar, y clasificar era decidir quién valía más.'],
              ['Porque ayudaban a conocer mejor a cada familia.', false, 'Revisa para qué servía la escala según López Beltrán: ¿describía o jerarquizaba?'],
              ['Porque eran palabras técnicas de la ciencia.', false, 'Eran palabras sociales, creadas desde el poder colonial.']]],
            ['q2', 'Nombres como «tente en el aire» o «no te entiendo» revelan que…', [
              ['la clasificación era arbitraria y deshumanizante: trataba a las personas como mezclas que etiquetar.', true, 'Así es. Ningún ser humano «está en el aire»: el nombre muestra el desprecio de quien clasifica.'],
              ['la sociedad colonial tenía sentido del humor.', false, '¿A quién le hacía gracia? Piensa en quién nombraba y quién era nombrado.'],
              ['eran apodos cariñosos.', false, 'Eran categorías oficiales de una jerarquía, no apodos de confianza.']]],
            ['q3', '¿Qué relación tiene el sistema de castas con la diglosia que estudiaste en los niveles 1 y 2?', [
              ['La misma jerarquía que puso al castellano arriba ordenó también a las personas.', true, 'Correcto. Lengua y personas fueron ordenadas por el mismo poder: arriba lo hispano, abajo lo originario.'],
              ['Ninguna: una trata de lenguas y la otra de personas.', false, 'Piensa en quién estaba arriba en las dos escalas.'],
              ['Que las castas hablaban lenguas diferentes.', false, 'No se trata de qué lengua hablaba cada casta, sino de quién tenía el poder de nombrar y ordenar.']]]
          ] } },
        { kind: 'close', label: 'Cierre' }
      ]
    },
    {
      id: 'n3c2', num: '02', short: 'Palabras que discriminan', time: '45 min',
      title: 'Cuando una palabra descalifica',
      lead: 'Han pasado siglos, pero algunas palabras todavía se usan para poner a otros «abajo»: por su origen, por su oficio o por su apellido.',
      goal: 'Reconocer palabras que implican discriminación étnica y de oficio, y explicar su origen.',
      tasks: ['Distinguir discriminación étnica y de oficio.', 'Analizar el «malinchismo»: servil hacia fuera, prepotente hacia dentro.'],
      product: 'Una clasificación razonada de situaciones.',
      keyIdea: 'Muchas palabras que descalifican nacieron para separar a «los otros»: quien las usa repite, a veces sin saberlo, una jerarquía colonial.',
      recap: ['Discriminación étnica: descalificar por el origen o la cultura.', 'Discriminación de oficio: despreciar los trabajos manuales.', '«Patrón» evoca al dueño de la hacienda, casi un señor feudal.', 'El malinchismo: valorar lo extranjero y despreciar lo propio.'],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n3p2', question: '¿Por qué crees que algunas personas tratan de «blanquearse», es decir, de parecerse a los grupos privilegiados?',
            options: [
              ['Para que no las discriminen.', 'Esa es la raíz del problema: cuando una sociedad castiga un origen, muchas personas intentan ocultarlo. En este capítulo verás de dónde viene.'],
              ['Por gusto personal.', 'Los gustos también se forman en sociedad. Este capítulo te invita a preguntarte qué se considera «bonito» o «elegante», y por qué.'],
              ['No lo había pensado.', 'Es una buena pregunta para pensar despacio. El libro la relaciona directamente con la discriminación étnica.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'Palabras que separan', html: `
          <aside class="note content-note"><strong>Antes de leer</strong><p>En este capítulo aparecen palabras ofensivas. Se mencionan para analizarlas, no para usarlas. Si alguna te ha herido o la has usado, este es un espacio para pensarla con respeto.</p></aside>
          <p class="reading lede">Las palabras que expresan discriminación étnica se usaban contra «los otros», porque la mayoría de las personas trataba de <strong>«blanquearse»</strong>: mostrar que pertenecía a los grupos privilegiados.</p>
          <p>Han pasado siglos, pero aún se emplean términos como «indio», «cholo», «negro», «chazo» o «longo» para descalificar a otras personas, no solo por su origen sino también por su situación económica. Incluso entre jóvenes se descalifica a quien lleva un <strong>apellido de origen indígena</strong>.</p>
          <p>La discriminación étnica es también <strong>cultural</strong>: los pueblos de nuestro país tienen sus propias tradiciones, mitos y costumbres, y despreciarlas es despreciar a quienes las viven.</p>` },
        { kind: 'read', label: 'Lee', title: 'El desprecio a los oficios', html: `
          <p class="reading lede">También existía una discriminación según el oficio. Muchos españoles de aquella época despreciaban el trabajo manual.</p>
          <div class="author">
            <div class="author-card on-deep"><span class="mono">NOVELA ANÓNIMA · 1554</span><strong>Lazarillo de Tormes</strong><span>El escudero</span></div>
            <div><p>En esta novela, un escudero prefiere aparentar riqueza aunque se esté muriendo de hambre, antes que trabajar con sus manos. Así se generó un desprecio hacia oficios que, para ciertas élites, «rebajaban» a la persona.</p></div>
          </div>
          {{img:n3-oficios-dignos}}
          <div class="split">
            <div class="concept"><span class="icon-chip">{{i:hand-heart}}</span><span class="mono">OFICIOS DESPRESTIGIADOS</span><p>«Peón», «criada», «albañil», «carpintero»: palabras que nombran trabajos dignos, pero que a veces se usan para marcar distancia.</p></div>
            <div class="concept"><span class="icon-chip">{{i:landmark}}</span><span class="mono">UNA PALABRA CON CARGA</span><p>En la Sierra, «patrón» evoca al dueño de la hacienda, casi un señor [[feudal]] que lo poseía todo.</p></div>
          </div>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a2', type: 'sort', title: '¿Qué tipo de discriminación?',
          purpose: 'Reconocer de dónde viene cada forma de descalificar.',
          steps: ['Lee cada situación.', 'Decide si la descalificación se basa en el origen (étnica) o en el trabajo (de oficio).', 'Pulsa «Comprobar».'],
          bins: [['etn', 'Étnica', 'users'], ['ofi', 'De oficio', 'hand-heart']],
          items: [
            ['x1', 'Un estudiante se burla de su compañera por su apellido kichwa.', 'etn', 'El apellido señala el origen de la persona.'],
            ['x2', 'Alguien dice «solo es un albañil» para restar valor a lo que opina otra persona.', 'ofi', 'Se descalifica a alguien por el trabajo que hace.'],
            ['x3', 'Una persona cambia su forma de vestir y de hablar para «blanquearse».', 'etn', 'Blanquearse es intentar parecerse al grupo étnico privilegiado.'],
            ['x4', 'Una familia llama «criada» a la trabajadora del hogar para marcar distancia.', 'ofi', 'La palabra se usa para rebajar a alguien por su oficio.'],
            ['x5', 'Se desprecian las fiestas y tradiciones de un pueblo originario.', 'etn', 'La discriminación étnica también es cultural.'],
            ['x6', 'El escudero del Lazarillo prefiere pasar hambre antes que trabajar con las manos.', 'ofi', 'Lo que desprecia es el trabajo manual.']
          ] } },
        { kind: 'read', label: 'Lee', title: 'Servil hacia fuera, prepotente hacia dentro', html: `
          <p class="reading lede">Malintzin, conocida como <strong>la Malinche</strong>, fue una mujer nahua que, siendo esclavizada, fue entregada a Hernán Cortés. Hablaba náhuatl y maya, y fue su intérprete durante la conquista de México.</p>
          <p>Con el tiempo, su nombre se convirtió en un insulto: en México, <strong>«malinchismo»</strong> significa preferir lo extranjero y despreciar lo propio. Hoy muchos historiadores la leen de otra manera: una mujer sin libertad de elegir, que hizo de puente entre lenguas.</p>
          {{img:n3-malintzin}}
          <aside class="note"><strong>Interdisciplinariedad · lengua y música</strong><p>Escucha la canción «La maldición de Malinche», de Gabino Palomares. Reflexiona: ¿crees que a veces nos mostramos serviles con las personas extranjeras y prepotentes con compatriotas de origen indígena?</p></aside>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a3', type: 'choice', title: 'El caso de la Malinche',
          purpose: 'Analizar cómo un nombre propio se convirtió en una palabra con carga.',
          steps: ['Lee cada pregunta.', 'Elige la respuesta mejor sustentada.', 'Pulsa «Comprobar».'],
          questions: [
            ['q1', '¿Qué significa «malinchismo»?', [
              ['Preferir lo extranjero y despreciar lo propio.', true, 'Exacto. Es la actitud que critica la canción de Gabino Palomares.'],
              ['Hablar varias lenguas.', false, 'La Malinche hablaba varias lenguas, pero la palabra «malinchismo» nombra otra cosa: una actitud.'],
              ['Ser intérprete de un idioma.', false, 'Piensa en el sentido que tomó su nombre, no en su oficio.']]],
            ['q2', '¿Por qué se dice que su nombre «se cargó» de un sentido negativo?', [
              ['Porque se la culpó de la conquista y su nombre pasó a significar traición.', true, 'Sí. Un nombre propio se volvió una acusación, y eso dice mucho de cómo se escribió la historia.'],
              ['Porque «Malinche» es una palabra difícil.', false, 'No es una cuestión de dificultad, sino del sentido que la sociedad le dio.'],
              ['Porque ella misma lo pidió.', false, 'Ella no decidió cómo la recordarían. Piensa en quién cuenta la historia.']]],
            ['q3', 'Ser «servil hacia fuera y prepotente hacia dentro» quiere decir…', [
              ['admirar al extranjero y, a la vez, menospreciar a compatriotas de origen indígena.', true, 'Correcto. Es la misma jerarquía colonial, repetida en el trato cotidiano.'],
              ['tratar bien a todas las personas por igual.', false, 'Servil y prepotente son actitudes opuestas aplicadas a grupos distintos.'],
              ['preferir la comida de otros países.', false, 'No se trata de gustos, sino del valor que se da a las personas.']]]
          ] } },
        { kind: 'close', label: 'Cierre' }
      ]
    },
    {
      id: 'n3c3', num: '03', short: 'Lo que el idioma dice sin decir', time: '45 min',
      title: 'Connotaciones: el significado escondido',
      lead: 'Hay expresiones que usamos sin pensar y que repiten, una y otra vez, que lo negro es malo. Un ensayo y un poema te ayudarán a verlo.',
      goal: 'Analizar las connotaciones negativas del lenguaje hacia el pueblo afrodescendiente y reconocer la resignificación.',
      tasks: ['Distinguir denotación y connotación.', 'Proponer expresiones alternativas.', 'Analizar por escrito una expresión.'],
      product: 'Un análisis de 60 a 120 palabras.',
      keyIdea: 'Una expresión puede discriminar sin nombrar a nadie: basta con que repita que un grupo es sinónimo de lo malo.',
      recap: ['Connotación: valoración que una palabra añade a su significado.', 'Muchas expresiones asocian «negro» con lo ilegal, lo malo o el desorden.', 'Es una visión maniquea heredada de una tradición racista.', 'Antonio Preciado resignifica «merienda de negros» como una invitación.'],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n3p3', question: '¿Alguna vez has dicho «oveja negra» o «mercado negro»? ¿Comunican algo más que su significado?',
            options: [
              ['No: solo significan lo que dicen.', 'Es lo que parece. Vas a mirar estas expresiones juntas y a descubrir qué tienen en común.'],
              ['Sí: asocian lo negro con algo malo.', 'Lo has notado. Un ensayo te ayudará a ver cuántas expresiones repiten esa asociación.'],
              ['Nunca lo había pensado.', 'Casi nadie lo piensa: por eso estas expresiones pasan de generación en generación sin que nos demos cuenta.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'Lo que el idioma repite', html: `
          <div class="split">
            <div class="concept"><span class="mono">DENOTACIÓN</span><h3>Lo que la palabra nombra</h3><p>«Negro»: un color.</p></div>
            <div class="concept"><span class="mono">CONNOTACIÓN</span><h3>Lo que la palabra arrastra</h3><p>En muchas expresiones, «negro» se asocia con lo malo, lo ilegal o el desorden. Ver [[connotación]].</p></div>
          </div>
          <p class="reading">El ensayo «Lenguaje y discriminación racial. En torno a la negritud» (Félix Rodríguez González, 2003) muestra que el lenguaje cotidiano refleja los valores de una sociedad, y también los transmite. Cuando un grupo se siente desfavorecido por su raza, sexo o etnia, los prejuicios afloran en el lenguaje.</p>
          <ul class="chips" aria-label="Expresiones que analiza el ensayo">
            <li>mercado negro</li><li>dinero negro</li><li>oveja negra</li><li>mano negra</li><li>suerte negra</li><li>garbanzo negro</li><li>magia negra</li><li>trabajar como un negro</li><li>merienda de negros</li>
          </ul>
          <p>Ninguna de estas expresiones nombra a una persona, pero todas repiten que lo negro es ilegal, desgraciado o maléfico. «Trabajar como un negro» viene directamente de la esclavitud. Incluso en el ajedrez, las piezas blancas mueven primero. El ensayo llama a esto una visión [[maniquea]]: blanco = bueno, negro = malo.</p>
          <aside class="note"><strong>¿Por qué cuesta cambiarlo?</strong><p>Según el ensayo, este esquema viene de una tradición cultural muy arraigada: no cambia de la noche a la mañana, y por eso sigue sirviendo a los propósitos racistas.</p></aside>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a4', type: 'match', title: 'Otra forma de decirlo',
          purpose: 'Descubrir que casi siempre hay una forma de decir lo mismo sin repetir el prejuicio.',
          steps: ['Pulsa una expresión.', 'Pulsa una alternativa que diga lo mismo sin la connotación.', 'Pulsa «Comprobar» cuando hayas unido las cinco.'],
          leftTitle: 'Expresión', rightTitle: 'Otra forma de decirlo',
          pairs: [
            ['y1', 'mercado negro', 'comercio ilegal'],
            ['y2', 'oveja negra', 'el diferente de la familia'],
            ['y3', 'trabajar como un negro', 'trabajar muchísimo'],
            ['y4', 'merienda de negros', 'un desorden total'],
            ['y5', 'dinero negro', 'dinero no declarado']
          ],
          hint: 'Busca qué quiere decir cada expresión en realidad: ilegal, distinto, mucho esfuerzo, caos, oculto.' } },
        { kind: 'read', label: 'Lee', title: 'Una voz que invita', html: `
          <p class="reading lede">No solo los pueblos indígenas han sido discriminados: el <strong>pueblo afroecuatoriano</strong> también ha visto afectados sus derechos y su identidad por el uso discriminatorio del lenguaje.</p>
          <div class="author">
            <div class="author-card on-deep"><span class="mono">POETA AFROECUATORIANO</span><strong>Antonio Preciado</strong><span>Esmeraldas, 1941</span></div>
            <div><p>En su poema «Merienda de negros», Preciado toma una expresión racista —que en el ensayo significa confusión y desorden— y le da la vuelta.</p>
            <blockquote class="poem compact"><p>Venga, usted compañero, lo invitamos.</p><cite>Antonio Preciado · «Merienda de negros»</cite></blockquote></div>
          </div>
          <p>El poeta no se queda en la queja: <strong>invita</strong> a toda la sociedad a participar de esa «merienda», a dejar de ser un espectador que critica, disminuye y discrimina, y a compartir esa cultura. A eso se le llama [[resignificar]]: dar a una palabra un sentido nuevo.</p>
          {{img:n3-merienda}}` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a5', type: 'choice', title: 'El ensayo y el poema',
          purpose: 'Interpretar las ideas del ensayo y el gesto del poeta.',
          steps: ['Lee cada pregunta.', 'Elige la respuesta mejor sustentada.', 'Pulsa «Comprobar».'],
          questions: [
            ['q1', '¿Qué hace Preciado con la expresión «merienda de negros»?', [
              ['La resignifica: la convierte en una invitación a compartir su cultura.', true, 'Exacto. Toma la palabra del prejuicio y la vuelve un gesto de encuentro.'],
              ['La repite para burlarse de su pueblo.', false, 'Relee el verso: «lo invitamos». ¿Es una burla?'],
              ['La usa con el mismo sentido de desorden.', false, 'El poema cambia ese sentido. Fíjate a quién se dirige y qué le propone.']]],
            ['q2', 'Según el ensayo, ¿por qué es difícil que esas expresiones desaparezcan?', [
              ['Porque vienen de una tradición cultural muy arraigada.', true, 'Así es: se heredan con el idioma, sin que nadie las examine.'],
              ['Porque son muy bonitas.', false, 'El ensayo no habla de belleza, sino de herencia cultural.'],
              ['Porque la ley las obliga.', false, 'Ninguna ley obliga a usarlas. Piensa en cómo se aprenden.']]],
            ['q3', '¿Por qué el ensayo menciona el ajedrez?', [
              ['Para mostrar que la idea «blanco = primero, bueno» está incluso en los juegos.', true, 'Correcto. La visión maniquea aparece en lugares donde ni la notamos.'],
              ['Para explicar las reglas del juego.', false, 'El ensayo no enseña ajedrez. ¿Qué color mueve primero?'],
              ['Porque el ajedrez es un juego africano.', false, 'No es ese el argumento. Fíjate en qué piezas empiezan.']]],
            ['q4', 'Si alguien dice «oveja negra», ¿es automáticamente racista?', [
              ['No necesariamente; pero conviene saber qué valoración repite la expresión y elegir con conciencia.', true, 'Muy bien. Las palabras se interpretan en su contexto: lo importante es saber qué arrastran y decidir.'],
              ['Sí, siempre, sin importar el contexto.', false, 'El contexto y la intención importan. Lo que el ensayo pide es conciencia, no castigos automáticos.'],
              ['No, porque las palabras no significan nada.', false, 'Ya viste que las palabras sí cargan valoraciones. La clave es reconocerlas.']]]
          ] } },
        { kind: 'write', label: 'Escribe', write: {
          id: 'n3e1', title: 'Analiza una expresión',
          prompt: 'Elige una expresión que se use en tu entorno (de este capítulo o que escuches a diario). Explica qué valoración arrastra y propone otra forma de decirlo.',
          min: 60, max: 120,
          fields: [['texto', 'Tu análisis', 'Entre 60 y 120 palabras.']],
          starters: ['La expresión «…» significa…', 'Pero además arrastra la idea de que…', 'En su lugar podríamos decir…'],
          criteria: ['Distingo lo que la expresión dice de lo que arrastra.', 'Explico de dónde puede venir esa valoración.', 'Propongo una alternativa.', 'Escribo con respeto, sin repetir el insulto innecesariamente.'] } },
        { kind: 'close', label: 'Cierre' }
      ]
    },
    {
      id: 'n3c4', num: '04', short: 'Nombrar con respeto', time: '45 min',
      title: 'De la palabra que hiere a la palabra que nombra',
      lead: 'Si las palabras pueden ordenar y herir, también pueden reconocer. Cierras el recorrido de los tres niveles y tomas una postura.',
      goal: 'Distinguir entre nombrar con respeto y descalificar, ordenar la historia completa de la diglosia y argumentar una postura.',
      tasks: ['Distinguir palabras que nombran de palabras que descalifican.', 'Ordenar la historia de los tres niveles.', 'Escribir tu postura final.'],
      product: 'Una línea de tiempo y tu postura argumentada.',
      keyIdea: 'Respetar la diversidad empieza por cómo nombramos: aceptar y respetar a los demás es una expresión de pensamiento moderno.',
      recap: ['Los pueblos tienen derecho a nombrarse a sí mismos.', 'Resignificar: dar un sentido nuevo a una palabra.', 'Las palabras se interpretan por su contexto, intención y efecto.', 'Nivel 1: causas · Nivel 2: consecuencias · Nivel 3: palabras.'],
      extra: [
        { icon: 'circle-check', title: 'Cierre del recorrido', html: '<strong>Nivel 1:</strong> por qué se impuso el castellano. <strong>Nivel 2:</strong> qué dejó esa imposición y cómo respondieron los pueblos. <strong>Nivel 3:</strong> cómo esa jerarquía vive en las palabras y cómo podemos nombrar con respeto.' },
        { icon: 'search', title: 'Competencia comunicacional', html: 'Todo discurso busca persuadir. Con tu curso, diseñen un cartel o un audio breve para el colegio que invite a nombrar con respeto, y explíquenlo con un argumento del ensayo o del poema.' }
      ],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n3p4', question: '¿Puede una palabra cambiar de sentido con el tiempo?',
            options: [
              ['Sí: las palabras cambian con quienes las usan.', 'Exacto. Lo viste con Preciado y con la Malinche. Ahora lo aplicarás a cómo nombramos a los demás.'],
              ['No: una palabra siempre significa lo mismo.', 'Pondremos a prueba esa idea: «Malinche» y «merienda de negros» ya cambiaron de sentido.'],
              ['Solo si una ley lo decide.', 'Las leyes ayudan, pero los cambios de sentido los hacen sobre todo las personas que hablan.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'Nombrar con respeto', html: `
          <p class="reading lede">Dada la diversidad de nuestro país, <strong>aceptar y respetar a los demás</strong> es una expresión de pensamiento moderno. Y el respeto empieza por cómo nombramos.</p>
          <div class="split">
            <div class="concept"><span class="icon-chip">{{i:users}}</span><span class="mono">COMO SE NOMBRAN</span><p>Los pueblos tienen derecho a nombrarse a sí mismos: <strong>pueblo afroecuatoriano</strong>, <strong>nacionalidad shuar</strong>, <strong>pueblo kichwa Saraguro</strong>, <strong>persona indígena</strong>.</p></div>
            <div class="concept"><span class="icon-chip">{{i:hand-heart}}</span><span class="mono">COMO SE DIGNIFICA</span><p>«Trabajadora del hogar» en lugar de «criada»; llamar a las personas por su nombre y no por su origen o su oficio.</p></div>
          </div>
          {{img:n3-nombrar-respeto}}
          <aside class="note"><strong>No se trata de prohibir palabras</strong><p>Una expresión se interpreta por su <strong>contexto</strong>, la <strong>intención</strong> de quien la dice y el <strong>efecto</strong> que produce. Lo que se pide es conciencia: saber qué arrastra una palabra y elegir.</p></aside>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a6', type: 'sort', title: '¿Nombra o descalifica?',
          purpose: 'Distinguir entre nombrar con respeto y usar una palabra para poner a alguien abajo.',
          steps: ['Lee cada uso.', 'Decide si nombra con respeto o si descalifica.', 'Pulsa «Comprobar».'],
          bins: [['nom', 'Nombra con respeto', 'circle-check'], ['des', 'Descalifica', 'circle-help']],
          items: [
            ['z1', 'Decir «pueblo afroecuatoriano».', 'nom', 'Es el nombre con el que este pueblo se reconoce.'],
            ['z2', 'Usar «indio» como insulto para rebajar a alguien.', 'des', 'Fíjate en la intención: usarla «como insulto».'],
            ['z3', 'Decir «nacionalidad shuar».', 'nom', 'Así se nombra este pueblo y así lo reconoce la Constitución.'],
            ['z4', 'Llamar «criada» a una trabajadora para marcar distancia.', 'des', 'Lo que se busca es marcar quién está abajo.'],
            ['z5', 'Decir «trabajadora del hogar».', 'nom', 'Nombra el oficio con dignidad.'],
            ['z6', 'Burlarse de alguien por su apellido indígena.', 'des', 'El apellido se usa para descalificar un origen.']
          ] } },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n3a7', type: 'order', title: 'La historia de los tres niveles',
          purpose: 'Unir en una línea de tiempo lo que aprendiste en los niveles 1, 2 y 3.',
          steps: ['Lee los ocho hechos.', 'Usa «Subir» y «Bajar» para ordenarlos del más antiguo al más reciente.', 'Pulsa «Comprobar». Al acertar, verás las fechas.'],
          items: [
            ['h1', 'Colón llega a América y considera «bárbaras» sus lenguas.', '1492 · Nivel 1'],
            ['h2', 'Se redacta el Requerimiento, que se leía en castellano a pueblos que no lo entendían.', '1513 · Nivel 1'],
            ['h3', 'Se publica el Lazarillo de Tormes, con su escudero que desprecia el trabajo manual.', '1554 · Nivel 3'],
            ['h4', 'En la Colonia se consolida el sistema de castas.', 'Siglos XVII–XVIII · Nivel 3'],
            ['h5', 'Dolores Cacuango impulsa las primeras escuelas indígenas bilingües.', 'Década de 1940 · Nivel 2'],
            ['h6', 'César Dávila Andrade publica Boletín y elegía de las mitas.', '1959 · Nivel 2'],
            ['h7', 'Se crea la Dirección Nacional de Educación Intercultural Bilingüe.', '1988 · Nivel 2'],
            ['h8', 'La Constitución declara al Ecuador Estado intercultural y plurinacional.', '2008 · Niveles 1 y 2']
          ],
          start: ['h6', 'h2', 'h8', 'h4', 'h1', 'h7', 'h3', 'h5'],
          hint: 'Empieza por la llegada de Colón y termina en la Constitución. Las castas se consolidan después del Lazarillo.' } },
        { kind: 'practice', label: 'Repasa', optional: true, activity: {
          id: 'n3sopa', type: 'wordsearch', title: 'Sopa de letras',
          purpose: 'Repasar el vocabulario del nivel. Es opcional: no bloquea tu avance.',
          steps: ['Elige la primera letra de una palabra y después la última.', 'Las palabras están en horizontal o en vertical.', 'Al encontrar una palabra, verás su significado.'],
          words: [
            ['CASTA', 'Grupo de una jerarquía colonial según el origen.'],
            ['ESTIGMA', 'Marca o señal que descalifica.'],
            ['PREJUICIO', 'Juicio negativo formado sin conocer.'],
            ['FEUDAL', 'Del señor que poseía la tierra y a quien se obedecía.'],
            ['MALINCHE', 'Intérprete nahua cuyo nombre se volvió insulto.'],
            ['PRECIADO', 'Poeta afroecuatoriano de Esmeraldas.'],
            ['MANIQUEO', 'Que divide todo en bueno y malo.'],
            ['RESPETO', 'La base para nombrar a los demás.']
          ] } },
        { kind: 'write', label: 'Escribe', write: {
          id: 'n3e2', title: 'Tu postura final', recall: 'n3p1',
          prompt: 'Vuelve a la pregunta del nivel: ¿pueden las palabras discriminar? Responde con argumentos de los tres niveles.',
          min: 100, max: 180,
          fields: [
            ['postura', '1 · Mi postura', 'Responde la pregunta en una o dos oraciones.'],
            ['ejemplo', '2 · Un ejemplo analizado', 'Las castas, una expresión, la Malinche o el poema de Preciado. Explica qué arrastra.'],
            ['respeto', '3 · Cómo nombrar con respeto', '¿Qué propones para hablar con conciencia sin caer en prohibiciones automáticas?']
          ],
          starters: ['Considero que las palabras…', 'Un ejemplo claro es…, porque…', 'Propongo que en mi entorno…'],
          criteria: ['Respondo la pregunta con una postura clara.', 'Analizo un ejemplo con su origen histórico.', 'Relaciono el ejemplo con la diglosia de los niveles 1 o 2.', 'Propongo una forma concreta de nombrar con respeto.'] } },
        { kind: 'close', label: 'Cierre' }
      ]
    }
  ]
});
