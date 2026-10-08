/* Nivel 1 · Las causas
   Basado en «Causas y consecuencias de la diglosia entre las lenguas nativas de América y el castellano»
   (Lengua y cultura). Redactado de nuevo para pantalla. */
(() => {
  // El Requerimiento «como lo escuchaban»: letras desplazadas para simular una lengua que no se entiende.
  const garble = s => s.replace(/[a-zñáéíóú]/gi, ch => {
    const abc = 'abcdefghijklmnopqrstuvwxyz', lower = ch.toLowerCase().normalize('NFD')[0];
    const i = abc.indexOf(lower); if (i < 0) return ch;
    const out = abc[(i + 9) % 26]; return ch === ch.toLowerCase() ? out : out.toUpperCase();
  });
  const requerimiento = 'Os rogamos y requerimos que reconozcáis a la Iglesia por señora del mundo, y al rey y a la reina por señores de estas tierras. Si no lo hiciereis, os haremos la guerra, tomaremos vuestros bienes y os haremos esclavos, y las muertes y daños serán culpa vuestra.';

  Object.assign(window.DG.images, {
    'n1-sistemas': ['Cuatro escenas: una anciana cuenta una historia a jóvenes, un códice pintado abierto, una estela maya con glifos tallados y un quipu de cordones con nudos.', '<strong>Cuatro formas de comunicar y guardar memoria</strong> antes de 1492: la palabra de los mayores, los códices, los glifos y los quipus.'],
    'n1-panos-blancos': ['Un conquistador lee en voz alta un papel blanco mientras un grupo de personas indígenas lo observa con desconfianza y curiosidad.', '<strong>«Hablar con paños blancos».</strong> Para quien no conocía la escritura alfabética, leer parecía un poder mágico.'],
    'n1-tomebamba-cuenca': ['Escena dividida: a la izquierda, la ciudad inca de Tomebamba con muros de piedra; a la derecha, la Cuenca colonial con iglesia y plaza.', '<strong>De Tomebamba a Cuenca.</strong> Cambiar el nombre de un lugar también era una forma de apropiarse de él.'],
    'n1-calendario-maya': ['Astrónomos mayas observan el cielo nocturno desde lo alto de una pirámide, con una ciudad de piedra y selva al fondo.', '<strong>Ciencia antes de la conquista.</strong> Los mayas midieron el Sol y las estrellas con una exactitud sorprendente.'],
    'n1-destruir-conservar': ['Escena dividida: a la izquierda, códices que arden en una hoguera; a la derecha, un anciano indígena dicta a un joven que escribe en un libro.', '<strong>Destruir y conservar.</strong> Mientras se quemaban códices, otros transcribían la memoria de los pueblos.'],
    'n1-tres-regiones': ['Paisaje panorámico del Ecuador en tres franjas: Costa con río y manglar, Sierra con montañas y páramo, Amazonía con selva y río.', '<strong>Costa, Sierra y Amazonía.</strong> En las tres regiones se hablan lenguas originarias.'],
    'n1-revitalizar': ['Jóvenes ecuatorianos graban un programa de radio comunitaria con micrófonos y audífonos, junto a una persona mayor que les enseña.', '<strong>Crear en la propia lengua.</strong> Radio, música y cuentos ayudan a que una lengua siga viva.']
  });

  window.DG.levels.push({
    id: 'n1', num: '1', name: 'Las causas', question: '¿Por qué hablamos castellano?',
    summary: 'Cómo la conquista impuso una lengua sobre otras, y qué culturas y lenguas existían antes y siguen vivas.',
    chapters: [
      {
        id: 'n1c1', num: '01', short: 'Antes y después de 1492', time: '40 min',
        title: '¿Por qué hablamos castellano?',
        lead: 'Antes de que llegaran los españoles, en América se hablaban cientos de lenguas. Vas a descubrir cómo una sola terminó imponiéndose.',
        goal: 'Explicar qué es la diglosia y por qué el castellano se impuso en América.',
        tasks: ['Reconocer los sistemas de comunicación de los pueblos originarios.', 'Distinguir la lengua de prestigio de la lengua relegada en la Colonia.'],
        product: 'Tu primera respuesta a la pregunta del nivel.',
        keyIdea: 'Hablamos castellano porque la conquista lo impuso como lengua del poder. A eso lo llamamos diglosia.',
        recap: ['Antes de 1492 existían civilizaciones como la azteca, la maya y la inca.', 'Se comunicaban con la palabra oral, códices, glifos y quipus.', 'Diglosia: una lengua se impone sobre otra; la de los vencedores sobre la de los vencidos.', 'En la Colonia, el castellano se volvió la lengua de prestigio.'],
        balance: {
          heavy: ['LA LENGUA DE LOS VENCEDORES', [['landmark', 'Gobierno y leyes'], ['file-text', 'Documentos y propiedad'], ['scale', 'Justicia'], ['school', 'Enseñanza oficial']]],
          light: ['LA LENGUA DE LOS VENCIDOS', [['house', 'Casa y familia'], ['users', 'Comunidad y fiesta'], ['map-pin', 'Chacra y mercado']]],
          caption: 'En la Colonia, la balanza se inclinó: el castellano ocupó todos los lugares del poder.'
        },
        steps: [
          { kind: 'start', label: 'Inicio',
            activate: { id: 'n1p1', question: '¿Por qué hablamos castellano en el Ecuador?',
              options: [
                ['Porque es la lengua que siempre se habló aquí.', 'Es una idea frecuente, pero no es así: el castellano llegó hace unos 500 años. Antes, en estas tierras se hablaban muchas otras lenguas, y varias siguen vivas.'],
                ['Porque llegó con la conquista española.', 'Exacto. Y no llegó como una lengua más: se impuso por encima de las que ya existían. Ese desequilibrio es lo que estudiarás.'],
                ['Porque es más fácil o más completa que otras.', 'Ninguna lengua es más fácil ni más completa que otra. El castellano no se extendió por ser mejor, sino por el poder de quienes lo hablaban.']
              ] } },
          { kind: 'read', label: 'Lee', title: 'Un continente lleno de voces', html: `
            <p class="reading lede">Antes de la llegada de Cristóbal Colón en 1492, en América existían grandes civilizaciones, como la <strong>azteca</strong>, la <strong>maya</strong> y la <strong>inca</strong>, y cientos de pueblos con sus propias lenguas.</p>
            <p class="think">{{i:message-circle-question}}<span><strong>Piensa antes de seguir:</strong> ¿con qué sistemas se comunicaban estos pueblos antes de que llegaran los españoles?</span></p>
            <div class="split four">
              <div class="concept"><span class="icon-chip">{{i:users}}</span><span class="mono">LA PALABRA</span><h3>Oralidad</h3><p>Historias, leyes y saberes se transmitían de voz en voz, de los mayores a los jóvenes. Ver [[oralidad]].</p></div>
              <div class="concept"><span class="icon-chip">{{i:book-open}}</span><span class="mono">MESOAMÉRICA</span><h3>Códices</h3><p>Los mexicas los llamaban «libros de pintura»: guardaban historia, religión y calendario. Ver [[códice]].</p></div>
              <div class="concept"><span class="icon-chip">{{i:scroll-text}}</span><span class="mono">MAYAS</span><h3>Glifos</h3><p>Signos tallados y pintados. Hay inscripciones de hace más de dos mil años. Ver [[glifo]].</p></div>
              <div class="concept"><span class="icon-chip">{{i:list-checks}}</span><span class="mono">ANDES</span><h3>Quipus</h3><p>Cordones con nudos con los que los incas registraban cantidades y datos. Ver [[quipu]].</p></div>
            </div>
            {{img:n1-sistemas}}
            <aside class="note"><strong>Una lengua de todo un imperio</strong><p>En los Andes, el quechua (en el Ecuador, el [[kichwa]]) era la lengua que conectaba a los pueblos del Tawantinsuyu, el territorio inca.</p></aside>` },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a1', type: 'match', title: 'Sistemas para comunicar',
            purpose: 'Reconocer que los pueblos originarios tenían formas complejas de comunicar y registrar.',
            steps: ['Pulsa un sistema de la izquierda.', 'Pulsa la descripción que le corresponde.', 'Cuando hayas unido los cuatro, pulsa «Comprobar».'],
            leftTitle: 'Sistema', rightTitle: 'Cómo funcionaba',
            pairs: [
              ['k1', 'Oralidad', 'Los mayores contaban a los jóvenes la historia y los saberes del pueblo.'],
              ['k2', 'Códice', 'Libro pintado con imágenes y signos que guardaba historia y calendario.'],
              ['k3', 'Glifos', 'Signos de escritura que los mayas tallaban en piedra o pintaban.'],
              ['k4', 'Quipu', 'Cordones de colores con nudos para registrar cantidades.']
            ],
            hint: 'Mira las etiquetas del paso anterior: palabra, libro pintado, piedra tallada y cordones.' } },
          { kind: 'read', label: 'Lee', title: 'La lengua de los vencedores', html: `
            <p class="reading lede">Con la Conquista y la Colonización —los procesos más sangrientos de nuestra historia—, la Corona española sometió a los pueblos indígenas. En 1533, la ejecución de Atahualpa marcó el fin del poder inca.</p>
            <div class="definition"><span class="mono">DEFINICIÓN · NIVEL 1</span><p>La <strong>diglosia</strong> es un fenómeno en el que una lengua se impone sobre otra: <strong>la lengua de los vencedores domina sobre la de los vencidos</strong>.</p></div>
            {{balance}}
            <p>Junto con la lengua llegó el [[mestizaje]]: la mezcla de pueblos y culturas. Pero en esa mezcla no había igualdad. El castellano se impuso como <strong>lengua de prestigio</strong>, y las lenguas originarias quedaron lejos de los lugares donde se decidía.</p>` },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a2', type: 'sort', title: '¿Qué lengua se usaba ahí?',
            purpose: 'Reconocer cómo la Colonia repartió los espacios entre la lengua de prestigio y las lenguas originarias.',
            steps: ['Lee cada situación de la época colonial.', 'Decide en qué lengua ocurría: la de prestigio o la relegada.', 'Pulsa «Comprobar».'],
            bins: [['pre', 'Castellano: lengua de prestigio', 'landmark'], ['rel', 'Lengua originaria: relegada', 'house']],
            items: [
              ['s1', 'Escribir las leyes y los documentos oficiales.', 'pre', '¿Quién escribía las leyes en la Colonia?'],
              ['s2', 'Contar a los hijos las historias de los abuelos.', 'rel', 'Ocurre en la casa, entre familia.'],
              ['s3', 'Firmar la propiedad de una tierra.', 'pre', 'La propiedad se probaba con papeles, ante autoridades españolas.'],
              ['s4', 'Cantar en una fiesta de la comunidad.', 'rel', 'Es un espacio de la vida comunitaria, no del gobierno.'],
              ['s5', 'Juzgar a una persona en un tribunal.', 'pre', 'Los tribunales eran parte del poder colonial.'],
              ['s6', 'Conversar con los vecinos en el mercado del pueblo.', 'rel', 'Es la vida cotidiana de la comunidad.']
            ] } },
          { kind: 'close', label: 'Cierre' }
        ]
      },
      {
        id: 'n1c2', num: '02', short: 'El poder de la escritura', time: '40 min',
        title: 'Papeles que hablaban',
        lead: 'Para los conquistadores, la escritura fue un arma. Con papeles se quitaron tierras, se cambiaron nombres y se silenciaron voces.',
        goal: 'Explicar cómo la lengua escrita de los conquistadores sirvió para apropiarse de territorios y silenciar a los pueblos.',
        tasks: ['Comprender qué fue el Requerimiento.', 'Interpretar el poder de la escritura y de los nombres.', 'Escribir sobre lengua e identidad.'],
        product: 'Un párrafo de 50 a 100 palabras sobre lengua e identidad.',
        keyIdea: 'La lengua y la escritura de los conquistadores fueron armas: sirvieron para apropiarse de tierras y silenciar la voz de los pueblos.',
        recap: ['El testimonio oral perdió valor frente a la escritura.', 'Los «paños blancos»: leer parecía un poder mágico.', 'El Requerimiento se leía en una lengua que no se entendía.', 'Cambiar los nombres de los lugares era una forma de apropiarse de ellos.'],
        steps: [
          { kind: 'start', label: 'Inicio',
            activate: { id: 'n1p2', question: '¿Qué vale más como prueba: lo que una comunidad recuerda y cuenta, o un papel firmado?',
              options: [
                ['El papel firmado.', 'Así pensaban los conquistadores, y así lo impusieron. En este capítulo verás qué pasó cuando la memoria de los pueblos dejó de valer frente a un papel.'],
                ['Lo que la comunidad recuerda.', 'Para los pueblos originarios, la palabra de los mayores era la prueba. En este capítulo verás cómo ese valor fue arrebatado.'],
                ['Depende de quién tenga el poder.', 'Gran observación: quién decide qué vale como prueba es una cuestión de poder. Este capítulo trata justo de eso.']
              ] } },
          { kind: 'read', label: 'Lee', title: 'Los paños blancos', html: `
            <p class="reading lede">En la Colonia, el <strong>testimonio oral</strong> de los indígenas dejó de tener valor frente al poder de la <strong>lengua escrita</strong> de los conquistadores.</p>
            <blockquote class="poem compact"><p>Ver a los invasores «hablar a solas con paños blancos» —es decir, leer un documento— hacía que esos papeles parecieran objetos con poder mágico.</p><cite>Adaptado del libro · Lengua y cultura</cite></blockquote>
            {{img:n1-panos-blancos}}
            <p>Los pueblos originarios sentían curiosidad por esa escritura. Pero los papeles no eran mágicos: eran <strong>armas de apropiación y silenciamiento</strong>. Quien escribía decidía qué era verdad, de quién era la tierra y quién debía obedecer.</p>
            <aside class="note"><strong>Por eso el castellano se volvió lengua de prestigio</strong><p>Este contacto de lenguas, marcado por el dominio español, hizo que el castellano se impusiera como la lengua del poder.</p></aside>` },
          { kind: 'read', label: 'Lee', title: 'El Requerimiento', html: `
            <p class="reading">El [[requerimiento|Requerimiento]] (1513) era un documento que los conquistadores leían a los pueblos antes de atacarlos. Lo leían en castellano, a veces de lejos o sin intérprete, a personas que no entendían esa lengua.</p>
            <div class="reveal" data-open="false">
              <div class="doc"><span class="mono">REQUERIMIENTO · ASÍ LO ESCUCHABAN</span><p class="garbled" aria-label="Texto incomprensible">${garble(requerimiento)}</p><p class="doc-plain"><span class="mono">LO QUE DECÍA (ADAPTADO)</span>${requerimiento}</p></div>
              <button type="button" class="btn primary" data-reveal aria-expanded="false">{{i:languages}}<span class="r-off">Traducir el documento</span><span class="r-on">Volver a ocultar</span></button>
            </div>
            <p class="think">{{i:message-circle-question}}<span><strong>Piensa y comenta:</strong> si no entendías nada, ¿cómo podías aceptar o rechazar? ¿Era justo «avisar» así?</span></p>
            <h3>Nombrar también es apropiarse</h3>
            <p>Los pueblos originarios ya habían dado nombre a sus ríos, montañas y ciudades. Los españoles los sustituyeron por nombres en su idioma: era una manera de declarar que esos territorios ahora les pertenecían.</p>
            <div class="rename"><div><span class="mono">ANTES</span><strong>Tomebamba</strong><small>ciudad inca</small></div><span class="arrow">{{i:arrow-right}}</span><div><span class="mono">DESPUÉS</span><strong>Cuenca</strong><small>fundada por los españoles en 1557</small></div></div>
            {{img:n1-tomebamba-cuenca}}` },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a3', type: 'choice', title: 'El poder de los papeles',
            purpose: 'Explicar por qué la escritura fue un arma en la Conquista.',
            steps: ['Lee cada pregunta.', 'Elige la respuesta que mejor se apoya en lo que leíste.', 'Pulsa «Comprobar» y lee la explicación.'],
            questions: [
              ['q1', '¿Por qué el Requerimiento era injusto, aunque «se leía» a los pueblos?', [
                ['Porque se leía en una lengua que no entendían, y aun así servía para justificar la guerra.', true, 'Exacto. Leer un aviso que nadie entiende no es avisar: es cumplir una formalidad para justificar la violencia.'],
                ['Porque era demasiado largo.', false, 'La longitud no es el problema. Piensa en la lengua en que se leía.'],
                ['Porque lo leían personas sin estudios.', false, 'Lo leían representantes de la Corona. Fíjate en quién lo escuchaba y qué entendía.']]],
              ['q2', 'Para los pueblos originarios, ver leer a los españoles «hablando con paños blancos» parecía…', [
                ['Algo mágico: un poder que ellos no controlaban.', true, 'Sí. La escritura parecía magia porque daba un poder que los pueblos no podían usar ni discutir.'],
                ['Una costumbre sin importancia.', false, 'El libro dice que esos papeles parecían fetiches con poder mágico. No era algo sin importancia.'],
                ['Una forma de enseñarles a leer.', false, 'Nadie les enseñaba: los papeles se usaban contra ellos.']]],
              ['q3', '¿Por qué cambiar Tomebamba por Cuenca era más que un cambio de nombre?', [
                ['Porque nombrar es apropiarse: el territorio pasaba a pertenecer, en el papel, a los conquistadores.', true, 'Correcto. El nuevo nombre borraba la memoria del lugar y lo marcaba como posesión española.'],
                ['Porque «Cuenca» era más fácil de pronunciar.', false, 'No se trata de pronunciación. ¿Qué se gana al poner tu nombre a algo?'],
                ['Porque la ciudad inca ya no existía.', false, 'Los nombres se cambiaban aunque los pueblos siguieran ahí. Piensa en la apropiación.']]],
              ['q4', 'Según el libro, ¿qué perdió valor frente a la lengua escrita de los conquistadores?', [
                ['El testimonio oral de los pueblos indígenas.', true, 'Así es. La palabra de los mayores, que guardaba la historia, dejó de valer como prueba.'],
                ['Los quipus de los incas.', false, 'Los quipus también se perdieron, pero el texto habla de otra forma de comunicar: la palabra hablada.'],
                ['El latín de la Iglesia.', false, 'El latín era la lengua de la Iglesia española, no de los pueblos sometidos.']]]
            ] } },
          { kind: 'write', label: 'Escribe', write: {
            id: 'n1e1', title: 'Lengua e identidad',
            prompt: '¿Crees que la desaparición de una lengua nativa provoca pérdida de identidad en un pueblo? Explica tu respuesta con un ejemplo.',
            min: 50, max: 100,
            fields: [['texto', 'Tu respuesta', 'Entre 50 y 100 palabras.']],
            starters: ['Creo que sí/no, porque…', 'Por ejemplo, cuando un pueblo deja de…', 'Esto muestra que…'],
            criteria: ['Respondo la pregunta con claridad.', 'Doy un ejemplo concreto (un nombre, una tradición, una palabra).', 'Explico la relación entre lengua e identidad.', 'Escribo con mis propias palabras.'] } },
          { kind: 'close', label: 'Cierre' }
        ]
      },
      {
        id: 'n1c3', num: '03', short: 'Lo que no pudieron borrar', time: '40 min',
        title: 'Pueblos con ciencia y con libros',
        lead: 'Los conquistadores llamaron «salvajes» a pueblos que tenían ciudades, astronomía y escritura. Parte de esa herencia se destruyó; otra parte sobrevivió.',
        goal: 'Reconocer la riqueza cultural de los pueblos originarios y cómo se destruyó y se conservó.',
        tasks: ['Identificar obras y personas que conservaron la herencia indígena.', 'Distinguir acciones que destruyeron de acciones que conservaron.'],
        product: 'Una clasificación de acciones de la Conquista.',
        keyIdea: 'Llamarlos «salvajes» fue una forma de justificar la conquista. Su ciencia y sus libros prueban lo contrario.',
        recap: ['Los mayas tenían pirámides y un calendario astronómico muy exacto.', 'El náhuatl llegó a ser una lengua clásica por su riqueza.', 'Se quemaron códices y se destruyeron templos.', 'Popol Vuh, Chilam Balam y Anales de los Cakchiqueles conservan esa memoria.'],
        steps: [
          { kind: 'start', label: 'Inicio',
            activate: { id: 'n1p3', question: 'Los conquistadores llamaron «salvajes» a los pueblos de América. ¿Qué crees que tenían esos pueblos?',
              options: [
                ['Poco: vivían de forma sencilla.', 'Eso es lo que la palabra «salvaje» quería hacer creer. En este capítulo verás que tenían ciudades, ciencia y libros.'],
                ['Ciudades, ciencia y libros propios.', 'Exacto. Y precisamente por eso llamarlos «salvajes» fue una forma de justificar la conquista.'],
                ['No estoy seguro.', 'Buena forma de empezar: sin repetir lo que dijeron los conquistadores. Vamos a comprobarlo.']
              ] } },
          { kind: 'read', label: 'Lee', title: 'Lo que tenían los «salvajes»', html: `
            <div class="split three">
              <div class="concept"><span class="icon-chip">{{i:landmark}}</span><span class="mono">MAYAS</span><h3>Pirámides y astronomía</h3><p>Su calendario partía de un complejo sistema de medición del Sol y de las estrellas. Es uno de los más exactos de la Antigüedad.</p></div>
              <div class="concept"><span class="icon-chip">{{i:languages}}</span><span class="mono">MEXICAS</span><h3>Una lengua clásica</h3><p>Hablaban y escribían en [[náhuatl]], una lengua que hoy se considera clásica por su riqueza.</p></div>
              <div class="concept"><span class="icon-chip">{{i:school}}</span><span class="mono">MEXICAS</span><h3>Escuelas</h3><p>Tenían centros educativos donde los jóvenes aprendían, y los sacerdotes enseñaban con [[códice|códices]], los «libros de pintura».</p></div>
            </div>
            {{img:n1-calendario-maya}}
            <aside class="note"><strong>Interdisciplinariedad · lengua y astronomía</strong><p>Investiga qué sucesos se registraron con el calendario maya y compártelo en clase.</p></aside>` },
          { kind: 'read', label: 'Lee', title: 'Destruir y conservar', html: `
            <p class="reading lede">Los conquistadores destruyeron templos y monumentos. La Inquisición persiguió los manuscritos indígenas por considerarlos idolatría: en 1562, en Maní (Yucatán), se quemaron códices mayas.</p>
            <p>Pero parte de esa herencia sobrevivió. Algunos frailes, como <strong>Andrés de Olmos</strong> y <strong>Bernardino de Sahagún</strong>, recogieron el testimonio de ancianos y tradujeron glifos y códices con ayuda de estudiantes indígenas que conocían el castellano y el latín. Y los propios pueblos mayas escribieron su memoria con el alfabeto latino.</p>
            {{img:n1-destruir-conservar}}
            <div class="articles">
              <article><span class="mono">QUICHÉ-MAYA</span><h3>Popol Vuh</h3><p>Relato épico del origen del mundo, las hazañas, la historia y la mitología del pueblo quiché.</p></article>
              <article><span class="mono">MAYAS DE YUCATÁN</span><h3>Chilam Balam</h3><p>Conjunto de libros sagrados: profecías, calendario, historia y medicina.</p></article>
              <article><span class="mono">KAQCHIKEL</span><h3>Anales de los Cakchiqueles</h3><p>La historia de este pueblo maya contada por sus propios autores.</p></article>
            </div>` },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a4', type: 'match', title: 'Obras y personas',
            purpose: 'Reconocer qué conserva cada obra y qué hizo cada persona.',
            steps: ['Pulsa un nombre.', 'Pulsa la descripción que le corresponde.', 'Pulsa «Comprobar» cuando hayas unido los cinco.'],
            leftTitle: 'Nombre', rightTitle: 'Qué es o qué hizo',
            pairs: [
              ['o1', 'Popol Vuh', 'Relato épico del origen y la historia del pueblo quiché.'],
              ['o2', 'Chilam Balam', 'Libros sagrados de los mayas de Yucatán.'],
              ['o3', 'Bernardino de Sahagún', 'Fraile que recogió el testimonio de ancianos indígenas.'],
              ['o4', 'Calendario maya', 'Sistema de medición del tiempo basado en el Sol y las estrellas.'],
              ['o5', 'Códice', 'Libro pintado que guardaba historia, religión y calendario.']
            ],
            hint: 'Vuelve a «Destruir y conservar»: dos son libros, uno es una persona, uno es ciencia y uno es un tipo de libro.' } },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a5', type: 'sort', title: '¿Destruir o conservar?',
            purpose: 'Distinguir las acciones que borraron la memoria indígena de las que la protegieron.',
            steps: ['Lee cada acción.', 'Decide si destruyó o conservó la herencia de los pueblos originarios.', 'Pulsa «Comprobar».'],
            bins: [['des', 'Destruyó', 'trash-2'], ['con', 'Conservó', 'book-marked']],
            items: [
              ['d1', 'Quemar códices mayas por considerarlos idolatría.', 'des', '¿Qué queda de un libro quemado?'],
              ['d2', 'Traducir los relatos de los ancianos con ayuda de estudiantes indígenas.', 'con', 'Traducir y escribir guarda la memoria.'],
              ['d3', 'Derribar templos y monumentos.', 'des', 'Los templos guardaban historia y saberes.'],
              ['d4', 'Escribir el Popol Vuh con el alfabeto latino.', 'con', 'Gracias a eso hoy podemos leerlo.'],
              ['d5', 'Llamar «salvajes» a los pueblos de América.', 'des', 'Una palabra también puede borrar: niega lo que esos pueblos sabían.'],
              ['d6', 'Aprender náhuatl para escribir su gramática.', 'con', 'Andrés de Olmos escribió una gramática del náhuatl.']
            ] } },
          { kind: 'close', label: 'Cierre' }
        ]
      },
      {
        id: 'n1c4', num: '04', short: 'Catorce lenguas vivas', time: '45 min',
        title: 'Las lenguas del Ecuador',
        lead: 'Siglos de diglosia hicieron desaparecer muchas lenguas originarias. Pero en el Ecuador se hablan todavía catorce. Vas a conocerlas y a pensar cómo mantenerlas vivas.',
        goal: 'Reconocer las lenguas originarias del Ecuador, explicar por qué están en peligro y proponer una forma de revitalizarlas.',
        tasks: ['Ubicar las lenguas del Ecuador por región.', 'Ordenar la cadena que lleva a la pérdida de una lengua.', 'Proponer un producto cultural en una lengua originaria.'],
        product: 'Tu respuesta final y una propuesta de revitalización.',
        keyIdea: 'Una lengua se pierde cuando deja de valorarse y de hablarse en casa. Se salva cuando se usa todos los días y se crea en ella.',
        recap: ['En el Ecuador se hablan 14 lenguas indígenas.', 'La Constitución de 2008 reconoce un Estado plurinacional e intercultural.', 'Las lenguas están en peligro por el prestigio del castellano.', 'Revitalizar: usarlas a diario y crear cultura en ellas.'],
        extra: [
          { icon: 'arrow-right', title: 'Lo que viene en el nivel 2', html: 'Ya sabes <strong>por qué</strong> se impuso el castellano. En el nivel 2 verás <strong>qué dejó</strong> esa imposición en la educación, la identidad y los derechos: leerás un poema de César Dávila Andrade y conocerás a Dolores Cacuango y Tránsito Amaguaña.', level: 'n2' },
          { icon: 'search', title: 'Competencia digital', html: 'Elige una cultura originaria de América o del Ecuador, investiga sus características (lengua, organización, saberes) y exponla en clase.' }
        ],
        steps: [
          { kind: 'start', label: 'Inicio',
            activate: { id: 'n1p4', question: '¿Cuántas lenguas indígenas crees que se hablan hoy en el Ecuador?',
              options: [
                ['Una o dos.', 'Son muchas más: catorce. Muchas personas no lo saben, y eso también es una consecuencia de la diglosia.'],
                ['Unas cinco.', 'Son casi el triple: catorce. En este capítulo vas a conocerlas por región.'],
                ['Más de diez.', 'Así es: catorce lenguas indígenas, repartidas en la Costa, la Sierra y la Amazonía.']
              ] } },
          { kind: 'read', label: 'Lee', title: 'El mapa de nuestras lenguas', html: `
            <p class="reading lede">Los procesos que estudiaste provocaron, durante siglos, la desaparición de muchas lenguas originarias. Aun así, en el Ecuador se hablan hoy <strong>catorce lenguas indígenas</strong>.</p>
            {{img:n1-tres-regiones}}
            <div class="regions">
              <section><span class="mono">COSTA</span><ul><li><strong>Awapit</strong> · nacionalidad awá</li><li><strong>Cha'palaa</strong> · nacionalidad chachi</li><li><strong>Sia pedee</strong> · nacionalidad épera</li><li><strong>Tsa'fiki</strong> · nacionalidad tsáchila</li></ul></section>
              <section><span class="mono">SIERRA</span><ul><li><strong>Kichwa</strong> · nacionalidad kichwa y sus pueblos originarios (Otavalo, Saraguro, Chibuleo, Puruhá y muchos más)</li></ul></section>
              <section><span class="mono">AMAZONÍA</span><ul><li><strong>A'ingae</strong> · cofán</li><li><strong>Paicoca</strong> · secoya y siona</li><li><strong>Wao terero</strong> · waorani</li><li><strong>Shiwiar chicham</strong> · shiwiar</li><li><strong>Zápara</strong> · zápara</li><li><strong>Achuar chicham</strong> · achuar</li><li><strong>Andoa</strong> · andoa</li><li><strong>Kichwa amazónico</strong> · kichwa</li><li><strong>Shuar chicham</strong> · shuar</li></ul></section>
            </div>
            <p class="source-note">El kichwa de la Sierra y el kichwa amazónico se cuentan por separado porque se hablan en territorios y con variantes distintas; por eso, en la lista, el kichwa aparece dos veces.</p>
            <p class="source-note">Fuente del libro: Secretaría del Buen Vivir, «¿Sabías que en el Ecuador se hablan 14 lenguas ancestrales?».</p>` },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a6', type: 'sort', title: '¿De qué región es?',
            purpose: 'Ubicar las lenguas originarias del Ecuador.',
            steps: ['Lee cada lengua y su nacionalidad.', 'Elige la región donde se habla.', 'Pulsa «Comprobar».'],
            bins: [['cos', 'Costa', 'map-pin'], ['sie', 'Sierra', 'map-pin'], ['ama', 'Amazonía', 'map-pin']],
            items: [
              ['r1', 'Awapit, de la nacionalidad awá.', 'cos', 'Busca en la columna de la Costa.'],
              ['r2', 'Shuar chicham, de la nacionalidad shuar.', 'ama', 'Busca en la columna de la Amazonía.'],
              ['r3', 'Tsa\'fiki, de la nacionalidad tsáchila.', 'cos', 'Los tsáchilas viven cerca de Santo Domingo, hacia la Costa.'],
              ['r4', 'Wao terero, de la nacionalidad waorani.', 'ama', 'Busca en la columna de la Amazonía.'],
              ['r5', 'Kichwa de los pueblos Otavalo y Saraguro.', 'sie', 'Otavalo y Saraguro están en los Andes.'],
              ['r6', 'Cha\'palaa, de la nacionalidad chachi.', 'cos', 'Busca en la columna de la Costa.']
            ] } },
          { kind: 'read', label: 'Lee', title: '¿Por qué están en peligro?', html: `
            <p class="reading lede">La Constitución de 2008 reconoce al Ecuador como un Estado [[plurinacional]] e [[interculturalidad|intercultural]]. Sin embargo, las lenguas ancestrales están en peligro: <strong>han dejado de hablarse</strong> por el prestigio social y económico que significa hablar castellano.</p>
            <p>Eso no es solo una pérdida de palabras: es la pérdida de la cultura y de la [[identidad]] de cada pueblo.</p>
            <div class="note"><strong>¿Qué se puede hacer?</strong><p>Es fundamental <strong>[[revitalización|revitalizar]]</strong> la práctica cotidiana de las lenguas nativas e incentivar la <strong>producción cultural en la propia lengua</strong>: canciones, cuentos, radio, videos, carteles. Crear en una lengua fortalece la identidad y transmite la literatura oral de los pueblos.</p></div>
            {{img:n1-revitalizar}}` },
          { kind: 'practice', label: 'Practica', activity: {
            id: 'n1a7', type: 'order', title: 'La cadena de la pérdida',
            purpose: 'Explicar paso a paso cómo una lengua puede desaparecer.',
            steps: ['Lee los cinco pasos.', 'Usa «Subir» y «Bajar» para ordenarlos de la causa al efecto final.', 'Pulsa «Comprobar».'],
            items: [
              ['l1', 'El castellano concentra el prestigio social y económico.', 'Causa'],
              ['l2', 'Hablar la lengua originaria se asocia con pobreza o con burla.', 'Paso 2'],
              ['l3', 'Las familias dejan de hablarla con sus hijos.', 'Paso 3'],
              ['l4', 'Los niños crecen sin aprenderla.', 'Paso 4'],
              ['l5', 'La lengua desaparece, y con ella parte de la cultura y la identidad.', 'Efecto']
            ],
            start: ['l3', 'l5', 'l1', 'l4', 'l2'],
            hint: 'Empieza por la causa que menciona el libro: el prestigio del castellano. Termina en lo que se pierde.' } },
          { kind: 'practice', label: 'Repasa', optional: true, activity: {
            id: 'n1sopa', type: 'wordsearch', title: 'Sopa de letras',
            purpose: 'Repasar el vocabulario del nivel. Es opcional: no bloquea tu avance.',
            steps: ['Elige la primera letra de una palabra y después la última.', 'Las palabras están en horizontal o en vertical.', 'Al encontrar una palabra, verás su significado.'],
            words: [
              ['DIGLOSIA', 'Una lengua se impone sobre otra.'],
              ['CODICE', 'Libro pintado de Mesoamérica.'],
              ['QUIPU', 'Cordones con nudos de los incas.'],
              ['NAHUATL', 'Lengua clásica de los mexicas.'],
              ['ORALIDAD', 'Transmitir saberes de voz en voz.'],
              ['PRESTIGIO', 'Valor social que se da a una lengua.'],
              ['SHUAR', 'Nacionalidad amazónica con lengua propia.'],
              ['KICHWA', 'Lengua de la Sierra y la Amazonía.']
            ] } },
          { kind: 'write', label: 'Escribe', write: {
            id: 'n1e2', title: 'Tu respuesta y tu propuesta', recall: 'n1p1',
            prompt: 'Vuelve a la pregunta del nivel: ¿por qué hablamos castellano? Respóndela con lo que aprendiste y propone cómo mantener viva una lengua originaria.',
            min: 80, max: 160,
            fields: [
              ['porque', '1 · ¿Por qué hablamos castellano?', 'Usa la palabra «diglosia» y un hecho histórico.'],
              ['lengua', '2 · Una lengua que quiero mantener viva', 'Elige una de las 14 lenguas y un producto cultural: canción, cuento, cartel, video…'],
              ['ayuda', '3 · Cómo ayudaría', '¿Cómo fortalecería ese producto la identidad de su pueblo?']
            ],
            starters: ['Hablamos castellano porque…', 'Me gustaría crear… en…', 'Esto ayudaría a…'],
            criteria: ['Uso con precisión la palabra «diglosia».', 'Menciono un hecho histórico de este nivel.', 'Elijo una lengua y un producto concreto.', 'Explico la relación entre lengua e identidad.'] } },
          { kind: 'close', label: 'Cierre' }
        ]
      }
    ]
  });
})();
