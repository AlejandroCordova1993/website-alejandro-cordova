/* Nivel 2 · Las consecuencias
   Basado en «Consecuencias de la diglosia» (Lengua y cultura). Continúa el nivel 1. */
Object.assign(window.DG.images, {
  'n2-mita': ['Interior de un obraje colonial: trabajadores indígenas tejen en telares bajo la mirada de un capataz, con luz tenue entrando por una ventana alta.', '<strong>La mita en un obraje colonial.</strong> El poema de Dávila Andrade da voz a quienes trabajaron así, por turnos obligatorios.']
});
window.DG.levels.push({
  id: 'n2', num: '2', name: 'Las consecuencias', question: '¿Qué dejó la imposición de una lengua?',
  summary: 'Lo que la diglosia provocó en la educación, la identidad y los derechos, y cómo respondieron los pueblos.',
  chapters: [
    {
      id: 'n2c1', num: '01', short: 'Lenguas y poder', time: '40 min',
      title: 'Dos lenguas, distinto poder',
      lead: 'Una lengua no vale más que otra. Pero una sociedad puede darles un poder muy distinto. A eso lo llamamos diglosia.',
      goal: 'Explicar qué es la diglosia y cómo empezó en nuestro territorio.',
      tasks: ['Distinguir diglosia de bilingüismo.', 'Relacionar la imposición del castellano con sus efectos.'],
      product: 'Tu primera postura sobre la pregunta central del tema.',
      image: ['ambitos-y-lenguas', 'Una joven conversa con una mujer mayor en una plaza; la misma joven aparece ante una funcionaria en una ventanilla.', '<strong>Izquierda: la plaza. Derecha: la ventanilla.</strong> Ana usa su lengua con libertad en un espacio; en el otro, solo se la atiende en castellano.'],
      keyIdea: 'La diglosia no es hablar dos lenguas: es que una sociedad les dé a esas lenguas distinto poder.',
      bridge: { from: 'n1', title: 'Viene del nivel 1', items: ['La conquista impuso el castellano: la lengua de los vencedores sobre la de los vencidos.', 'Con papeles como el Requerimiento y con nuevos nombres, la escritura sirvió para apropiarse de tierras.', 'En el Ecuador siguen vivas 14 lenguas indígenas, pero están en peligro.'], next: 'Ahora vas a precisar qué es la diglosia y a ver qué dejó en las personas.' },
      balance: {
        heavy: ['LENGUA CON PRIVILEGIOS', [['school', 'Escuela'], ['landmark', 'Oficinas y leyes'], ['scale', 'Juzgados'], ['file-text', 'Prensa y documentos']]],
        light: ['LENGUA RELEGADA', [['house', 'Casa y familia'], ['users', 'Fiesta del barrio'], ['map-pin', 'Chacra y mercado']]],
        caption: 'La balanza sigue sin equilibrio: una lengua concentra los espacios donde se decide; la otra queda en la vida privada.'
      },
      recap: ['Bilingüismo: una persona o comunidad usa dos lenguas.', 'Diglosia: la sociedad da privilegios a una lengua y relega a otra.', 'Ninguna lengua es inferior: el prestigio lo da la sociedad.', 'En América, la diglosia empezó con la conquista y la colonización.'],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n2p1', question: '¿Te parece posible que hablar un idioma haga sentir orgullo… o vergüenza?',
            options: [
              ['Sí, he visto que pasa.', 'Esa experiencia es el punto de partida del tema. Lo que provoca orgullo o vergüenza no es la lengua en sí, sino el valor que la sociedad le da. A eso apunta la palabra diglosia.'],
              ['Depende de dónde y con quién se hable.', 'Acabas de describir la idea central: el valor de una lengua cambia según el lugar y las personas. Cuando una sociedad reparte ese valor de forma desigual, hablamos de diglosia.'],
              ['No: un idioma es solo una herramienta.', 'Es verdad que ninguna lengua es mejor que otra. Pero las personas no viven su lengua solo como herramienta: la unen a su familia, a su historia y a su lugar en la sociedad. Al final del nivel volverás a esta pregunta.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'Dos lenguas en un mismo lugar', html: `
          <p class="reading lede">Imagina una región donde se hablan dos lenguas. Una se usa en la escuela, en las oficinas, en los juzgados y en los periódicos. La otra se escucha en la casa, en la chacra y en la fiesta del barrio. Las dos sirven para comunicarse. <strong>Pero no tienen el mismo poder.</strong></p>
          <p class="level-link">{{i:history}}<span>En el nivel 1 la definiste como <em>la imposición de la lengua de los vencedores sobre la de los vencidos</em>. Ahora la precisas:</span></p>
          <div class="definition"><span class="mono">DEFINICIÓN · NIVEL 2</span><p>La <strong>diglosia</strong> es la situación en la que, en un mismo territorio, se hablan dos o más lenguas y <strong>una de ellas goza de privilegios</strong> sociales, políticos y económicos que las otras no tienen.</p></div>
          {{balance}}
          <p>Por eso, en varios países donde una lengua se impuso sobre otra, la segunda terminó convertida en «la lengua de los vencidos». Se siguió hablando, pero lejos de los lugares donde se toman las decisiones.</p>
          <aside class="note"><strong>Ojo: ninguna lengua es inferior</strong><p>Todas las lenguas tienen gramática, vocabulario y capacidad para expresar cualquier idea. El [[prestigio]] lo pone la sociedad, no la lengua.</p></aside>` },
        { kind: 'read', label: 'Lee', title: 'No es lo mismo que bilingüismo', html: `
          <div class="split">
            <div class="concept"><span class="icon-chip">{{i:languages}}</span><span class="mono">LA PERSONA</span><h3>Bilingüismo</h3><p>Una persona o una comunidad <strong>usa dos lenguas</strong>.</p><p class="example">Ana conversa en kichwa con su abuela y en castellano con sus amigas.</p></div>
            <div class="concept"><span class="icon-chip">{{i:scale}}</span><span class="mono">LA SOCIEDAD</span><h3>Diglosia</h3><p>La sociedad <strong>da a esas lenguas un valor desigual</strong>.</p><p class="example">En la oficina del pueblo de Ana solo atienden en castellano. El kichwa «es para la casa».</p></div>
          </div>
          {{figure}}
          <p class="reading">Ana es bilingüe y, al mismo tiempo, vive en un lugar con diglosia. Las dos cosas pueden ocurrir juntas. Para saber si hay diglosia, la pregunta clave es:</p>
          <p class="key-question">¿Las dos lenguas tienen los mismos espacios y el mismo reconocimiento?</p>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a1', type: 'sort', title: '¿Bilingüismo o diglosia?',
          purpose: 'Distinguir lo que sabe una persona de lo que hace una sociedad con las lenguas.',
          steps: ['Lee cada situación.', 'Elige si describe solo bilingüismo o una situación de diglosia.', 'Pulsa «Comprobar». Si una tarjeta queda «a revisar», lee la pista y cambia tu elección.'],
          bins: [['bil', 'Bilingüismo', 'languages'], ['dig', 'Diglosia', 'scale']],
          items: [
            ['s1', 'Mateo aprendió inglés en un curso y lo habla con fluidez, además del castellano.', 'bil', '¿Se habla aquí de una sociedad que trata distinto a las lenguas, o solo de lo que sabe Mateo?'],
            ['s2', 'En un pueblo, los trámites, las clases y los letreros oficiales están solo en castellano; el kichwa solo se oye en las casas y en el mercado.', 'dig', 'Fíjate en los lugares: ¿qué lengua ocupa los espacios de poder?'],
            ['s3', 'Lucía traduce para su abuelo en el banco, porque ahí nadie atiende en kichwa.', 'dig', 'Lucía es bilingüe, sí. Pero mira el banco: ¿puede su abuelo usar su lengua ahí?'],
            ['s4', 'En una comunidad, el shuar y el castellano se usan por igual en la radio, la escuela y las asambleas.', 'bil', 'Las dos lenguas tienen los mismos espacios. ¿Hay desigualdad entre ellas?'],
            ['s5', 'A un grupo de estudiantes le dicen que el kichwa «suena mal» y que, para conseguir trabajo, deben hablar «bien» en castellano.', 'dig', '¿Se le da a una lengua más valor social que a la otra?'],
            ['s6', 'Una familia habla kichwa y castellano en casa, y cambia de una lengua a otra según con quién conversa.', 'bil', 'La situación describe lo que hace una familia. ¿Dice algo sobre privilegios de una lengua?']
          ] } },
        { kind: 'read', label: 'Lee', title: 'Recuerda: ¿cómo empezó?', html: `
          <p class="level-link">{{i:history}}<span>Esto lo estudiaste en el nivel 1. Repásalo: lo necesitarás para entender las consecuencias.</span></p>
          <p class="reading lede">En América, la diglosia tiene un origen histórico: <strong>la conquista y la colonización</strong>. Imponer el castellano fue una forma de dominio, igual que imponer leyes, religión y trabajos.</p>
          <ol class="history">
            <li><span class="mono">1492</span><div><strong>Una mirada que desprecia</strong><p>Desde su llegada, Cristóbal Colón miró las lenguas del continente con ojos de [[eurocentrismo]]: las consideró lenguas «bárbaras» o «salvajes». Tal vez ahí empezó la discriminación lingüística, hace más de 500 años.</p></div></li>
            <li><span class="mono">COLONIA</span><div><strong>La lengua del poder</strong><p>El castellano fue la lengua de la ley, los documentos, la Iglesia oficial y el gobierno. Muchos pueblos indígenas fueron sometidos a la [[mita]], un trabajo forzado.</p></div></li>
            <li><span class="mono">PAPELES</span><div><strong>La escritura como arma</strong><p>Documentos como el [[requerimiento|Requerimiento]] se leían en castellano a pueblos que no lo entendían, y los nombres de los lugares se cambiaron para apropiarse de ellos.</p></div></li>
            <li><span class="mono">NOMBRES</span><div><strong>Hasta el nombre propio</strong><p>A muchas familias hablantes de [[kichwa]] se las obligó a dar a sus hijos nombres en castellano, en contra de sus tradiciones.</p></div></li>
            <li><span class="mono">ESCUELA</span><div><strong>Aprender en una lengua ajena</strong><p>En las escuelas se impuso una lengua que no era la de sus antepasados, y se castigó hablar la [[lengua materna]].</p></div></li>
          </ol>
          <aside class="note"><strong>Y sin embargo, resistieron</strong><p>Muchas lenguas originarias siguen vivas y hasta dejaron huella en el español que hablas. Lo comprobarás en el capítulo 4.</p></aside>
          <p class="think">{{i:message-circle-question}}<span><strong>Piensa y comenta:</strong> ¿por qué quien conquista quiere que todos hablen su lengua?</span></p>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a2', type: 'match', title: 'Una imposición, un efecto',
          purpose: 'Relacionar cada forma de imponer el castellano con el efecto que produjo.',
          steps: ['Pulsa una acción de la izquierda.', 'Pulsa el efecto que le corresponde a la derecha.', 'Cuando hayas unido las cinco, pulsa «Comprobar».'],
          leftTitle: 'Lo que se impuso', rightTitle: 'Lo que provocó',
          pairs: [
            ['m1', 'Llamar «bárbaras» a las lenguas nativas.', 'Se instaló la idea falsa de que hay lenguas inferiores.'],
            ['m2', 'Obligar a poner nombres en castellano.', 'Se rompió una tradición familiar y parte de la identidad.'],
            ['m3', 'Enseñar solo en castellano en la escuela.', 'Los niños aprendían en una lengua que no era la de su casa.'],
            ['m4', 'Castigar a quien hablaba su lengua materna.', 'Hablarla se asoció con miedo y vergüenza.'],
            ['m5', 'Usar solo castellano en leyes y documentos.', 'Quien no lo dominaba no podía defender sus derechos.']
          ],
          hint: 'Lee de nuevo «¿Cómo empezó?». Cada acción afecta algo distinto: la valoración, el nombre, el aprendizaje, la emoción o los derechos.' } },
        { kind: 'close', label: 'Cierre' }
      ]
    },
    {
      id: 'n2c2', num: '02', short: 'La herida en las palabras', time: '45 min',
      title: 'Aprender a contar con dolor',
      lead: 'Un poeta ecuatoriano dio voz a quienes aprendieron el castellano bajo el látigo. Leerás su poema para entender qué deja la imposición de una lengua.',
      goal: 'Interpretar cómo un poema denuncia la imposición del castellano y explicar sus consecuencias.',
      tasks: ['Comprender las palabras en quichua del poema.', 'Interpretar el fragmento.', 'Explicar por escrito una consecuencia.'],
      product: 'Un párrafo de interpretación de 60 a 120 palabras.',
      image: ['barrera-en-la-evaluacion', 'Un estudiante trabaja con una hoja de evaluación y, en otra escena, explica un modelo geométrico ante una docente.', '<strong>De la hoja a la explicación.</strong> Con una prueba en una lengua que aún aprende, Diego parece saber menos. Cuando puede explicar con apoyo, muestra lo que de verdad sabe.'],
      keyIdea: 'Imponer una lengua no solo cambia cómo se habla: marca la educación, la identidad y los derechos de un pueblo.',
      recap: ['César Dávila Andrade escribió Boletín y elegía de las mitas (1959).', 'El poema da voz a un mitayo que aprendió castellano con castigos.', 'Las palabras en quichua hacen oír la voz de los indígenas.', 'Consecuencias: educación, identidad y vida diaria, derechos.'],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n2p2', question: '¿Cómo aprendiste a contar o a leer? ¿Qué recuerdas de ese momento?',
            options: [
              ['Con alguien de mi familia, con cariño.', 'Aprender suele estar unido a una persona y a una emoción. El poema que vas a leer cuenta un aprendizaje muy distinto: el de quien aprendió a contar… los latigazos.'],
              ['En la escuela, con paciencia.', 'Una escuela paciente hace que aprender sea seguro. El poema que vas a leer cuenta lo contrario: un aprendizaje impuesto con castigos.'],
              ['Me costó, y lo recuerdo con nervios.', 'Ese nervio ayuda a imaginar lo que vivieron otros, multiplicado por mucho. El poema que vas a leer cuenta un aprendizaje impuesto con castigos.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'El poeta y su poema', html: `
          <div class="author">
            <div class="author-card on-deep"><span class="mono">POETA ECUATORIANO</span><strong>César Dávila Andrade</strong><span>Cuenca, 1918 · 1967</span></div>
            <div><p class="reading lede">Uno de los grandes poetas del Ecuador escribió un largo poema llamado <em>Boletín y elegía de las mitas</em>, publicado por primera vez en <strong>1959</strong>.</p><p>Su tema es el maltrato y la explotación que sufrieron los indígenas de la Sierra durante la Colonia. Para escribirlo, el poeta investigó documentos históricos en distintos archivos.</p></div>
          </div>
          {{img:n2-mita}}
          <h3>Un título que ya cuenta mucho</h3>
          <div class="split three">
            <div class="concept"><span class="mono">BOLETÍN</span><p>Informe o noticia. El poema <strong>informa</strong> lo que pasó, como un documento.</p></div>
            <div class="concept"><span class="mono">ELEGÍA</span><p>Poema de lamento. El poema también <strong>llora</strong> lo que pasó. Ver [[elegía]].</p></div>
            <div class="concept"><span class="mono">MITAS</span><p>El trabajo forzado de la Colonia. Quien habla es un [[mitayo]].</p></div>
          </div>` },
        { kind: 'read', label: 'Lee', title: 'Palabras con historia', html: `
          <p class="reading">El poema mezcla castellano con palabras y formas del [[kichwa]]. Antes de leer, toca cada tarjeta para descubrir qué significa.</p>
          {{flip:n2a3}}
          <div class="poem-call">
            <div class="poem-book">{{i:book-open}}<p><strong>Ahora abre tu libro</strong> en «Un poema con palabras en quichua» y lee el fragmento en voz alta. Fíjate en cómo cuenta el castigo y en cómo responde quien habla. Si no tienes el libro a mano, pide a tu docente el fragmento completo: las preguntas de la práctica se basan en él.</p></div>
            <blockquote class="poem"><p>Así aprendí a contar en tu castellano,<br>con mi dolor y mis llagas.</p><cite>César Dávila Andrade · <em>Boletín y elegía de las mitas</em></cite></blockquote>
          </div>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a3', type: 'match', title: 'Las palabras del poema',
          purpose: 'Asegurarte de que comprendes el vocabulario antes de interpretar.',
          steps: ['Pulsa una palabra.', 'Pulsa su significado.', 'Pulsa «Comprobar» cuando hayas unido las cinco.'],
          leftTitle: 'Palabra', rightTitle: 'Significado',
          pairs: [
            ['w1', 'tam', 'Forma breve de «también», como la diría un hablante de quichua.'],
            ['w2', 'fueteaban', 'Azotaban. Viene de «fuete», látigo.'],
            ['w3', 'capisayo', 'Prenda de vestir corta y sencilla.'],
            ['w4', 'mitayo', 'Indígena obligado a trabajar en la mita.'],
            ['w5', 'Dioselopagui', '«Dios se lo pague»: una forma de agradecer.']
          ],
          hint: 'Si dudas, vuelve a las tarjetas del paso anterior: puedes tocarlas otra vez.' } },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a4', type: 'choice', title: 'Interpreta el poema',
          purpose: 'Pasar de lo que dice el poema a lo que denuncia.',
          steps: ['Lee cada pregunta.', 'Elige la interpretación que mejor se apoya en el texto.', 'Pulsa «Comprobar» y lee la explicación.'],
          questions: [
            ['q1', '¿Quién habla en el poema?', [
              ['Un indígena que fue mitayo y recuerda los castigos.', true, 'Exacto. La voz es la de un mitayo: por eso cuenta el castigo desde su propio cuerpo.'],
              ['Un conquistador arrepentido de lo que hizo.', false, 'Revisa a quién castigan: «tú, boca abajo, mitayo». Quien habla es la víctima, no el verdugo.'],
              ['Un maestro que enseña a contar a sus estudiantes.', false, 'Hay una lección de contar, pero no en un aula: ¿qué se cuenta en el poema?']]],
            ['q2', '«Así aprendí a contar en tu castellano, con mi dolor y mis llagas.» ¿Qué quiere decir?', [
              ['Que el castellano le fue impuesto con violencia: aprendió a contar contando los latigazos.', true, 'Así es. Los números que aprende son los golpes que recibe: la lengua llega unida al castigo.'],
              ['Que aprendió matemáticas en una buena escuela.', false, 'Fíjate en «dolor» y «llagas». ¿Es un aprendizaje feliz?'],
              ['Que el castellano es una lengua más difícil que el quichua.', false, 'El poema no compara la dificultad de las lenguas. Habla de cómo se impuso una de ellas.']]],
            ['q3', 'La voz dice «Dioselopagui, Amito» «de terror y gratitud». ¿Por qué esa mezcla?', [
              ['Porque el dominio era tan fuerte que debía agradecer a quien lo castigaba.', true, 'Sí. Agradecer al verdugo muestra hasta dónde llegaba el control, incluso sobre las palabras.'],
              ['Porque de verdad estaba feliz de aprender castellano.', false, 'La palabra «terror» acompaña a la gratitud. ¿Puede ser una alegría sincera?'],
              ['Porque no conocía otra forma de saludar.', false, 'No es un saludo: llega después del castigo. Piensa en quién tiene el poder en la escena.']]],
            ['q4', '¿Por qué el poeta incluye palabras en quichua dentro de un poema en castellano?', [
              ['Para que se oiga la voz real de los indígenas y su forma de hablar.', true, 'Correcto. Esa mezcla es, en sí misma, una huella del contacto y de la imposición entre las dos lenguas.'],
              ['Porque no sabía decirlas en castellano.', false, 'Dávila Andrade escribía en castellano y conocía bien la lengua. La mezcla es una decisión.'],
              ['Para que el poema sea más difícil de leer.', false, 'Piensa en a quién pertenecen esas palabras dentro del poema.']]]
          ] } },
        { kind: 'read', label: 'Lee', title: 'Las consecuencias', html: `
          <p class="reading lede">El poema muestra que el castellano se impuso sobre el quichua como <strong>herramienta de dominio</strong>. A los indígenas se los «alfabetizó» a punta de látigo y humillaciones. Esa imposición dejó consecuencias en tres terrenos:</p>
          <div class="split three">
            <div class="concept"><span class="icon-chip">{{i:school}}</span><span class="mono">01</span><h3>Educación</h3><p>Quien aprende en una lengua que todavía no domina entiende menos y se siente fuera de lugar. <strong>Una dificultad con la lengua no es falta de inteligencia.</strong></p></div>
            <div class="concept"><span class="icon-chip">{{i:house}}</span><span class="mono">02</span><h3>Identidad y vida diaria</h3><p>Por burla o vergüenza, muchas familias dejaron de hablar su lengua a sus hijos y renunciaron a costumbres y tradiciones.</p></div>
            <div class="concept"><span class="icon-chip">{{i:scale}}</span><span class="mono">03</span><h3>Derechos</h3><p>Quien no domina la lengua del poder queda fuera de trámites, juicios y decisiones. Así se produce la [[marginación]] de grupos enteros.</p></div>
          </div>
          {{figure}}` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a5', type: 'sort', title: '¿Dónde golpea la imposición?',
          purpose: 'Reconocer las consecuencias de la diglosia en situaciones concretas.',
          steps: ['Lee cada caso.', 'Elige el terreno donde se nota más la consecuencia.', 'Pulsa «Comprobar».'],
          bins: [['edu', 'Educación', 'school'], ['ide', 'Identidad', 'house'], ['der', 'Derechos', 'scale']],
          items: [
            ['c1', 'Un niño no entiende las instrucciones del examen porque están en una lengua que todavía aprende.', 'edu', 'Ocurre en una prueba escolar. ¿Qué se ve afectado: aprender, ser quien es, o defenderse?'],
            ['c2', 'Un comunero no puede reclamar sus tierras porque el juicio se hace solo en castellano.', 'der', 'Un juicio es el lugar donde se defienden los derechos.'],
            ['c3', 'Una madre decide no enseñar kichwa a su hija para que no se burlen de ella.', 'ide', 'Lo que se pierde es la lengua de la familia, parte de quiénes son.'],
            ['c4', 'Un joven deja de usar su apellido kichwa para conseguir trabajo.', 'ide', 'El apellido es parte de la identidad de una persona.'],
            ['c5', 'Una comunidad no recibe la información de salud porque solo se publica en castellano.', 'der', 'Acceder a la salud pública es un derecho.'],
            ['c6', 'Una escuela califica de «mal alumno» a quien todavía está aprendiendo castellano.', 'edu', 'Se confunde la dificultad con la lengua con la capacidad para aprender.']
          ] } },
        { kind: 'write', label: 'Escribe', write: {
          id: 'n2e1', title: 'Explica una consecuencia',
          prompt: 'Elige una consecuencia de la imposición del castellano y explícala con un ejemplo del poema o de este capítulo.',
          min: 60, max: 120,
          fields: [['texto', 'Tu explicación', 'Entre 60 y 120 palabras.']],
          starters: ['Una consecuencia de imponer el castellano fue…', 'Esto se ve en el poema cuando…', 'Por eso, quien…'],
          criteria: ['Nombro una consecuencia concreta.', 'Explico cómo se produce.', 'Uso un ejemplo del poema o de un caso.', 'Escribo con mis propias palabras.'] } },
        { kind: 'close', label: 'Cierre' }
      ]
    },
    {
      id: 'n2c3', num: '03', short: 'Derechos y educación', time: '40 min',
      title: 'Quienes respondieron',
      lead: 'La historia no termina en la imposición. Hubo personas que defendieron sus lenguas, y gracias a su lucha la educación bilingüe es hoy un derecho.',
      goal: 'Reconocer cómo la organización de los pueblos convirtió la educación bilingüe en un derecho colectivo.',
      tasks: ['Reconocer a tres figuras clave.', 'Distinguir una medida que garantiza un derecho de otra que solo lo aparenta.'],
      product: 'Una valoración de medidas escolares.',
      image: ['saberes-y-participacion', 'Estudiantes y educadores escuchan a una mujer mayor y trabajan con un objeto tejido, libros y una tableta.', '<strong>Aprender con la comunidad.</strong> Una sabia enseña con un tejido; los estudiantes registran en su lengua y en castellano.'],
      keyIdea: 'La educación bilingüe no fue un regalo: es un derecho colectivo que conquistó la organización de los pueblos indígenas.',
      recap: ['Derechos colectivos: los que se reconocen a un pueblo.', 'Ecuador es pluricultural y multiétnico.', 'Luis Cordero valoró el quichua; Dolores Cacuango y Tránsito Amaguaña lucharon por escuelas propias.', 'Una ley es un paso: el derecho existe cuando se cumple.'],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n2p3', question: 'Si en tu colegio te prohibieran hablar como hablas en tu casa, ¿qué harías?',
            options: [
              ['Obedecería, para evitar problemas.', 'Es una reacción comprensible, y fue la de muchas personas durante siglos. Este capítulo cuenta la historia de quienes decidieron otra cosa.'],
              ['Seguiría hablando así, a escondidas.', 'Resistir en silencio también es resistir: así sobrevivieron muchas lenguas. Este capítulo cuenta cómo esa resistencia se volvió organización.'],
              ['Me organizaría con otros para cambiar la regla.', 'Eso es exactamente lo que hicieron las personas de este capítulo. Su organización cambió leyes y escuelas.']
            ] } },
        { kind: 'read', label: 'Lee', title: 'Un país de muchos pueblos', html: `
          <p class="reading lede">Ecuador es un país [[pluricultural]] y [[multiétnico]]: alberga muchos pueblos y muchas lenguas. Su reconocimiento se fortaleció en las últimas décadas gracias a la lucha de líderes indígenas y mestizos.</p>
          <div class="split">
            <div class="concept"><span class="icon-chip">{{i:users}}</span><span class="mono">DERECHO INDIVIDUAL</span><p>Lo tiene cada persona. <span class="example">Expresar mis ideas, estudiar, ser atendido en salud.</span></p></div>
            <div class="concept"><span class="icon-chip">{{i:hand-heart}}</span><span class="mono">DERECHO COLECTIVO</span><p>Lo tiene un pueblo como grupo. <span class="example">Conservar su lengua, su territorio y educar a sus hijos en su propia lengua.</span></p></div>
          </div>
          <h3>Lo que dice la Constitución (2008)</h3>
          <div class="articles">
            <article><span class="mono">ART. 1</span><p>El Ecuador es un Estado <strong>intercultural y plurinacional</strong>.</p></article>
            <article><span class="mono">ART. 2</span><p>El castellano es el idioma oficial. <strong>El castellano, el kichwa y el shuar</strong> son idiomas oficiales de relación intercultural. Los demás idiomas ancestrales son de uso oficial para los pueblos indígenas en las zonas donde habitan.</p></article>
            <article><span class="mono">ART. 57</span><p>Reconoce los [[derechos colectivos]] de los pueblos y nacionalidades, entre ellos desarrollar y fortalecer el sistema de <strong>educación intercultural bilingüe</strong>.</p></article>
          </div>` },
        { kind: 'read', label: 'Lee', title: 'Tres historias', html: `
          <p class="reading">Antes de que existieran las leyes, hubo personas que defendieron las lenguas originarias. Dos de las más importantes del siglo XX fueron <strong>mujeres</strong>.</p>
          <div class="people">
            <article class="person"><div class="monogram" aria-hidden="true">LC</div><div><span class="mono">1833 · 1912</span><h3>Luis Cordero</h3><p>Fue presidente de la República. Pasó su infancia en el campo, rodeado de hablantes de quichua, y publicó un <strong>diccionario quichua-castellano y castellano-quichua</strong>. Valoró una lengua que muchos despreciaban.</p></div></article>
            <article class="person"><div class="monogram" aria-hidden="true">DC</div><div><span class="mono">1881 · 1971 · CAYAMBE</span><h3>Dolores Cacuango</h3><p>Lideresa kichwa. Entendió que la lucha contra el poder no bastaba si no iba acompañada de <strong>educación en kichwa y en castellano</strong>. En la década de 1940 impulsó las primeras escuelas indígenas bilingües.</p></div></article>
            <article class="person"><div class="monogram" aria-hidden="true">TA</div><div><span class="mono">1909 · 2009 · CAYAMBE</span><h3>Tránsito Amaguaña</h3><p>Lideresa kichwa. Insistió en la <strong>unidad, la lucha conjunta y la defensa de la tierra</strong>. Sus luchas contribuyeron a las reformas agrarias y al reconocimiento de territorios.</p></div></article>
          </div>
          <aside class="note"><strong>Una batalla larga</strong><p>La educación bilingüe nació de esta lucha y tuvo que enfrentar durante décadas el racismo y el sexismo que intentaban hacerla de menos.</p></aside>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a6', type: 'sort', title: '¿Quién soy?',
          purpose: 'Reconocer el aporte de cada figura.',
          steps: ['Lee cada pista, escrita en primera persona.', 'Elige a quién corresponde.', 'Pulsa «Comprobar».'],
          bins: [['lc', 'Luis Cordero', 'book-marked'], ['dc', 'Dolores Cacuango', 'school'], ['ta', 'Tránsito Amaguaña', 'users']],
          items: [
            ['h1', 'Fui presidente del Ecuador y publiqué un diccionario de quichua.', 'lc', 'Busca a quien ocupó la presidencia.'],
            ['h2', 'Pensé que no bastaba con protestar: había que educar en kichwa y en castellano.', 'dc', 'Busca a quien unió la lucha con la educación.'],
            ['h3', 'Insistí en la unidad y en la defensa de la tierra.', 'ta', 'Busca a quien priorizó la lucha conjunta.'],
            ['h4', 'De niño viví en el campo, rodeado de hablantes de quichua.', 'lc', 'Busca a quien pasó su infancia en el campo… y luego escribió sobre la lengua.'],
            ['h5', 'Impulsé las primeras escuelas indígenas bilingües en la década de 1940.', 'dc', 'Busca a quien fundó escuelas en Cayambe.'],
            ['h6', 'Viví casi un siglo, y mis luchas ayudaron a la reforma agraria.', 'ta', 'Mira los años de vida: 1909 · 2009.']
          ] } },
        { kind: 'read', label: 'Lee', title: 'La educación intercultural bilingüe', html: `
          <p class="reading lede">La [[eib|educación intercultural bilingüe]] enseña en la lengua materna de un pueblo y en castellano, e incluye sus saberes, su cultura y su participación. Es uno de los grandes pasos hacia el respeto de los derechos de los pueblos indígenas.</p>
          <ol class="mini-line">
            <li><span class="mono">DÉCADA DE 1940</span><strong>Escuelas de Cayambe</strong><p>Escuelas comunitarias impulsadas por Dolores Cacuango.</p></li>
            <li><span class="mono">1988</span><strong>DINEIB</strong><p>El Estado crea la Dirección Nacional de Educación Intercultural Bilingüe.</p></li>
            <li><span class="mono">2008</span><strong>Constitución</strong><p>La EIB se ratifica y amplía como derecho colectivo (ya la había reconocido la Constitución de 1998).</p></li>
          </ol>
          {{figure}}
          <div class="split">
            <div class="concept"><span class="mono">LA PERSONA</span><h3>Bilingüismo</h3><p>Lo que <strong>sabe una persona</strong>: usar dos lenguas.</p></div>
            <div class="concept"><span class="mono">EL SISTEMA EDUCATIVO</span><h3>Educación bilingüe</h3><p>No es lo mismo: es un <strong>sistema planificado</strong> para enseñar en dos lenguas, con la participación del pueblo.</p></div>
          </div>
          <p class="key-question">Una ley es un paso. El derecho existe de verdad cuando se cumple en el aula.</p>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a7', type: 'sort', title: '¿Garantiza el derecho o solo lo aparenta?',
          purpose: 'Distinguir una medida que cambia el aprendizaje de otra que solo se ve bien.',
          steps: ['Lee cada medida de un colegio.', 'Decide si garantiza el derecho a aprender en la propia lengua o si solo lo aparenta.', 'Pulsa «Comprobar».'],
          bins: [['si', 'Garantiza el derecho', 'circle-check'], ['no', 'Solo lo aparenta', 'circle-help']],
          items: [
            ['g1', 'Docentes que hablan la lengua de la comunidad enseñan ciencias y matemática en esa lengua.', 'si', '¿Los estudiantes aprenden de verdad en su lengua?'],
            ['g2', 'El colegio pega carteles bilingües, pero nadie usa la lengua en clase.', 'no', 'Los carteles se ven, pero ¿cambia lo que pasa en clase?'],
            ['g3', 'Sabios y sabias de la comunidad participan en la creación de los libros escolares.', 'si', 'La EIB incluye la participación del pueblo.'],
            ['g4', 'Se celebra el día de la lengua con un baile, y el resto del año no se usa.', 'no', 'Un día al año, ¿es uso sostenido?'],
            ['g5', 'Las pruebas se ofrecen en la lengua materna del estudiante.', 'si', 'Recuerda a Diego y a los exámenes del capítulo 2.'],
            ['g6', 'Se traduce el nombre de la escuela, pero los materiales siguen solo en castellano.', 'no', '¿Con qué materiales aprenden los estudiantes?']
          ] } },
        { kind: 'close', label: 'Cierre' }
      ]
    },
    {
      id: 'n2c4', num: '04', short: 'Huellas vivas', time: '45 min',
      title: 'El kichwa vive en tu español',
      lead: 'Las lenguas originarias perviven y han enriquecido el español del Ecuador. Vas a descubrirlo en tus propias palabras, ordenar toda la historia y tomar una postura.',
      goal: 'Reconocer la huella del kichwa en tu habla, ordenar la historia y argumentar una postura propia.',
      tasks: ['Reconocer quichuismos en frases cotidianas.', 'Ordenar la historia en una línea de tiempo.', 'Escribir tu postura final.'],
      product: 'Una línea de tiempo y tu postura argumentada.',
      image: ['investigar-con-la-comunidad', 'Tres jóvenes escuchan a un adulto en una plaza; una estudiante toma notas y otra sostiene una tableta.', '<strong>Escuchar cómo se habla.</strong> Las palabras del kichwa están en las conversaciones de todos los días: en la plaza, en la casa, en el mercado.'],
      keyIdea: 'Las lenguas originarias no son pasado: viven en tu habla. Reconocerlas es el primer paso para darles el lugar que merecen.',
      extra: [
        { icon: 'arrow-right', title: 'Lo que viene en el nivel 3', html: 'Ya sabes qué dejó la diglosia en la educación, la identidad y los derechos. En el nivel 3 verás cómo esa jerarquía quedó guardada <strong>dentro de las palabras</strong>: el sistema de castas, las expresiones que discriminan y la voz de Antonio Preciado.', level: 'n3' },
        { icon: 'search', title: 'Investiga fuera del aula', html: 'Pregunta a una persona mayor de tu familia o de tu barrio: ¿alguna vez sintió que su forma de hablar le cerraba puertas? ¿Qué palabras en kichwa usa todavía? Anota su respuesta (sin su nombre, si así lo prefiere) y compártela en la próxima clase.' }
      ],
      recap: ['Quichuismo: palabra del español que viene del kichwa.', 'El contacto entre lenguas va en dos direcciones.', 'De 1492 a 2008: imposición, resistencia y reconocimiento.', 'Una postura se sostiene con razones y ejemplos.'],
      steps: [
        { kind: 'start', label: 'Inicio',
          activate: { id: 'n2p4', question: 'El castellano que trajo la conquista, ¿se mantuvo puro o se mezcló con las lenguas nativas?',
            options: [
              ['Se mantuvo puro.', 'Es una idea frecuente, pero no es así. En este capítulo lo comprobarás con palabras que seguramente usas casi todos los días.'],
              ['Se mezcló.', 'Así es. Ahora vas a comprobarlo con palabras que seguramente usas casi todos los días.'],
              ['No lo sé.', 'Buena forma de empezar: sin suponer. En este capítulo lo comprobarás con palabras que seguramente usas casi todos los días.']
            ] } },
        { kind: 'read', label: 'Lee', title: '¿Sabías que hablas kichwa?', html: `
          <p class="reading lede">Un [[quichuismo]] es una palabra o expresión del español que viene del quichua. El español del Ecuador está lleno de ellos. Estos son algunos:</p>
          <dl class="words">
            <div><dt>guagua</dt><dd>niño pequeño, bebé</dd></div>
            <div><dt>ñaño, ñaña</dt><dd>hermano, hermana</dd></div>
            <div><dt>achachay</dt><dd>¡qué frío!</dd></div>
            <div><dt>arrarray</dt><dd>¡qué calor!, ¡quema!</dd></div>
            <div><dt>chuchaqui</dt><dd>malestar después de beber</dd></div>
            <div><dt>minga</dt><dd>trabajo comunitario</dd></div>
            <div><dt>choclo</dt><dd>mazorca tierna de maíz</dd></div>
            <div><dt>cancha</dt><dd>terreno, espacio abierto</dd></div>
            <div><dt>chulla</dt><dd>uno solo, sin par: «chulla vida»</dd></div>
          </dl>
          {{figure}}
          <aside class="note"><strong>El contacto va en dos direcciones</strong><p>El kichwa también tomó palabras del castellano. Que dos lenguas se mezclen no es un problema: lo injusto es que una de ellas quede sin derechos.</p></aside>` },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a8', type: 'tap', title: 'Encuentra el kichwa escondido',
          purpose: 'Reconocer quichuismos en frases cotidianas.',
          steps: ['Lee cada frase.', 'Toca las palabras que vienen del kichwa. Puedes tocar de nuevo para desmarcar.', 'Pulsa «Comprobar». Atención: hay palabras que parecen kichwa y no lo son.'],
          sentences: [
            '¡*Achachay*, qué frío! Ponle otra chompa al *guagua*.',
            'Mi *ñaña* organizó una *minga* para limpiar la *cancha* del barrio.',
            'Después de la fiesta, mi tío amaneció con *chuchaqui*.',
            'En el mercado compramos *choclos*, habas y queso.',
            '¡*Arrarray*! La sopa está quemando.',
            'Hay que disfrutar, porque es la *chulla* vida.'
          ],
          traps: { chompa: '«Chompa» parece kichwa, pero viene del inglés «jumper».', habas: '«Habas» viene del latín, a través del castellano.' },
          hint: 'Vuelve a la lista del paso anterior. Todas las palabras kichwa de estas frases están ahí.' } },
        { kind: 'practice', label: 'Practica', activity: {
          id: 'n2a9', type: 'order', title: 'Tu línea de tiempo',
          purpose: 'Resumir todo el tema en una línea de tiempo, como propone tu libro.',
          steps: ['Lee los siete hechos.', 'Usa «Subir» y «Bajar» para ordenarlos del más antiguo al más reciente.', 'Pulsa «Comprobar». Al acertar, aparecerán las fechas.'],
          items: [
            ['t1', 'Colón llega a América y considera «bárbaras» las lenguas nativas.', '1492'],
            ['t2', 'En la Colonia, el castellano se vuelve la lengua de la ley y del poder; se impone la mita.', 'Siglos XVI–XVIII'],
            ['t3', 'Luis Cordero publica un diccionario quichua-castellano.', 'Siglo XIX'],
            ['t4', 'Dolores Cacuango impulsa en Cayambe las primeras escuelas indígenas bilingües.', 'Década de 1940'],
            ['t5', 'César Dávila Andrade publica Boletín y elegía de las mitas.', '1959'],
            ['t6', 'Se crea la Dirección Nacional de Educación Intercultural Bilingüe.', '1988'],
            ['t7', 'La Constitución reconoce el kichwa y el shuar como idiomas oficiales de relación intercultural.', '2008']
          ],
          start: ['t5', 't2', 't7', 't1', 't4', 't6', 't3'],
          hint: 'Piensa en el orden de los capítulos: primero la imposición, después la denuncia y la lucha, al final el reconocimiento en la ley.' } },
        { kind: 'practice', label: 'Repasa', optional: true, activity: {
          id: 'n2sopa', type: 'wordsearch', title: 'Sopa de letras',
          purpose: 'Repasar el vocabulario del tema. Es opcional: no bloquea tu avance.',
          steps: ['Elige la primera letra de una palabra y después la última.', 'Las palabras están en horizontal o en vertical.', 'Al encontrar una palabra, verás su significado.'],
          words: [
            ['DIGLOSIA', 'Una lengua con privilegios y otra relegada.'],
            ['KICHWA', 'Lengua originaria de la Sierra y la Amazonía.'],
            ['MITAYO', 'Indígena obligado a trabajar en la mita.'],
            ['MINGA', 'Trabajo comunitario.'],
            ['GUAGUA', 'Niño pequeño, bebé.'],
            ['CACUANGO', 'Lideresa que impulsó escuelas bilingües.'],
            ['DERECHOS', 'Lo que la Constitución reconoce a los pueblos.'],
            ['ELEGIA', 'Poema de lamento.']
          ] } },
        { kind: 'write', label: 'Escribe', write: {
          id: 'n2e2', title: 'Tu postura final', recall: 'n2p1',
          prompt: 'Vuelve a la pregunta del inicio: ¿es posible y justo que hablar un idioma haga sentir orgullo o vergüenza? Responde con lo que aprendiste.',
          min: 80, max: 180,
          fields: [
            ['postura', '1 · Mi postura', 'Responde la pregunta en una o dos oraciones.'],
            ['razones', '2 · Mis razones', 'Usa un ejemplo: el poema, una de las tres historias o los quichuismos.'],
            ['accion', '3 · Una acción posible', '¿Qué podrías hacer tú, tu curso o tu colegio para que ninguna lengua avergüence?']
          ],
          starters: ['Creo que… porque…', 'Un ejemplo de esto es…', 'En mi colegio podríamos…'],
          criteria: ['Respondo la pregunta con claridad.', 'Doy al menos una razón con un ejemplo del tema.', 'Propongo una acción concreta y posible.', 'Uso con precisión una palabra del glosario.'] } },
        { kind: 'close', label: 'Cierre' }
      ]
    }
  ]
});
