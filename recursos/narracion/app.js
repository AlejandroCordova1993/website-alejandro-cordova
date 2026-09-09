/**
 * El Arte de Narrar — Banco de Datos Narratológico y Lógica Interactiva
 * Autor: Msc. Alejandro Córdova
 * Versión: 2.0.0
 * 
 * Módulo para la gestión del glosario modal didáctico (GLOSSARY_TERMS),
 * visor de imágenes (Lightbox) y controladores de interacción.
 */

// ============================================================================
// 1. BANCO DE DATOS DEL GLOSARIO DIDÁCTICO (22 TÉRMINOS CANÓNICOS)
// ============================================================================

const GLOSSARY_TERMS = {
  "diegesis": {
    title: "Diégesis",
    category: "Ontología Narrativa",
    definition: "El universo espaciotemporal ficcional en el que se desarrollan los acontecimientos narrados. Concepto recuperado de la poética clásica (Platón y Aristóteles) y redefinido por Gérard Genette para abarcar la totalidad ontológica de la historia (espacio, tiempo, personajes y leyes físicas internas), en contraposición a la instancia extrínseca de la enunciación discursiva.",
    example: "«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas...» — Gabriel García Márquez, Cien años de soledad.",
    analysis: "Macondo, sus ciénagas, su río con piedras prehistóricas y sus moradores constituyen la diégesis primaria. Todo lo que ocurre dentro de los límites de ese cosmos es 'diegético'. Por el contrario, el acto mismo de relatarlo desde un punto de enunciación exterior se sitúa en el plano 'extradiegético'."
  },

  "heterodiegetico": {
    title: "Narrador Heterodiégético",
    category: "Voz & Persona",
    definition: "Voz narrativa que relata una historia de la que no forma parte material como personaje. El enunciador se sitúa por fuera de los límites ontológicos de la diégesis, empleando de modo predominante la tercera persona gramatical sin intervenir jamás en las acciones ni haber sido testigo presencial directo.",
    example: "«El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo. Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna, y por un instante fue feliz en el sueño, pero al despertar se sintió por completo salpicado de cagada de pájaros.» — Gabriel García Márquez, Crónica de una muerte anunciada.",
    analysis: "La instancia enunciativa que articula la vida íntima y la muerte inminente de Santiago Nasar no se encarna en un actuante del drama. Su distanciamiento heterodiégético le confiere una posición panorámica para ensamblar los múltiples testimonios del pueblo sin estar sometido al destino trágico de los personajes."
  },

  "homodiegetico": {
    title: "Narrador Homodiégético",
    category: "Voz & Persona",
    definition: "Voz narrativa que habita el mismo universo diegético que describe, participando en la acción en calidad de personaje secundario, acompañante o testigo presencial. Emplea la primera persona gramatical para reconstruir el devenir dramático de otros personajes, filtrando la verdad a través de sus propias limitaciones perceptivas y éticas.",
    example: "«En mis años mozos y más vulnerables mi padre me dio un consejo que desde entonces no ha dejado de darme vueltas en la cabeza: 'Cada vez que sientas deseos de criticar a alguien —me dijo— recuerda que no todos en este mundo han tenido las ventajas que tú tuviste'... Por eso suelo abstenerme de juzgar a la gente...» — F. Scott Fitzgerald, El gran Gatsby (voz de Nick Carraway); o Jorge Luis Borges, «Emma Zunz».",
    analysis: "Nick Carraway no es el protagonista heroico ni trágico de la peripecia; su función es la de un observador privilegiado cuya mirada reconstruye la grandeza y el derrumbe de Jay Gatsby. Su condición homodiégética dota al relato de verosimilitud testimonial y tensión valorativa."
  },

  "autodiegetico": {
    title: "Narrador Autodiégético",
    category: "Voz & Persona",
    definition: "Modalidad intensificada del narrador homodiégético en la cual la voz que enuncia es el protagonista absoluto del relato. Coinciden plenamente el sujeto de la enunciación (quien habla) y el sujeto del enunciado (de quien se habla). Narra en primera persona su propia trayectoria vital, sus dilemas morales, transformaciones y percepciones inmediatas.",
    example: "«Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo. Mi madre me lo dijo. Y yo le prometí que vendría a verlo en cuanto ella muriera. Le apreté sus manos en señal de que lo haría, pues ella estaba por morirse y yo en un plan de prometerlo todo.» — Juan Rulfo, Pedro Páramo (Juan Preciado); o Albert Camus, El extranjero («Hoy mamá ha muerto. O tal vez ayer, no sé.»).",
    analysis: "Tanto en Juan Preciado como en Meursault, la autodiégesis clausura el relato en la estricta subjetividad del protagonista. El universo comalteco o la atmósfera argelina son accesibles al lector única y exclusivamente a través de la sensibilidad, el asombro o la apatía sensorial del 'yo' protagonista."
  },

  "focalizacion-cero": {
    title: "Focalización Cero (Omnisciente)",
    category: "Regulación Perceptual",
    definition: "Régimen narrativo en el cual el flujo de información textual no está restringido por la conciencia ni la perspectiva sensorial de ningún personaje. La voz narrativa sabe, comprende y anticipa más de lo que cualquier figura de la diégesis puede conocer (fórmula genettiana: Narrador > Personaje). Posee libre acceso simultáneo a los pensamientos secretos de múltiples individuos y al destino futuro de la trama.",
    example: "«La heroica ciudad dormía la siesta. El viento Sur, caliente y pesado, envolvía las calles en un sopor denso... Don Fermín de Pas sentía una mezcla de soberbia y desprecio al contemplar desde la torre de la catedral el hormiguero humano de Vetusta... ignorando que en ese mismo instante, en el caserón de los Ozores, Ana soñaba despierta con una redención imposible.» — Leopoldo Alas «Clarín», La Regenta.",
    analysis: "El narrador trasciende las coordenadas físicas del espacio y el tiempo: sobrevuela la geografía urbana de Vetusta, penetra en la ambición clerical del Magistral y revela en simultáneo el tormento íntimo de la Regenta. La mirada no tiene obstáculo perceptivo ni barrera psicológica."
  },

  "focalizacion-interna": {
    title: "Focalización Interna",
    category: "Regulación Perceptual",
    definition: "Mecanismo de filtrado perceptivo donde la información transmitida al lector coincide rigurosamente con el campo sensorial, cognitivo y emotivo de un personaje reflector (fórmula: Narrador = Personaje). El texto solo comunica lo que dicho personaje experimenta, deduce o recuerda en cada instante. Puede ser fija (un solo personaje continuo), variable (alternancia entre personajes) o múltiple (un mismo suceso recreado por distintas conciencias).",
    example: "«El calor era tal que me resultaba difícil quedarme inmóvil sobre la arena. El resplandor del cielo era insostenible. A cada ráfaga de viento caliente, el sudor me corría por las cejas y me cegaba los ojos... Apreté la empuñadura del revólver... El gatillo cedió; toqué el vientre pulido del acero y fue allí, en el ruido seco y ensordecedor, donde todo comenzó.» — Albert Camus, El extranjero; o Virginia Woolf, La señora Dalloway.",
    analysis: "En la escena de la playa de Camus, el clímax trágico no se explica mediante análisis sociológicos ni juicios morales exteriores, sino a través de la asfixia fisiológica, la reverberación solar y el aturdimiento físico de Meursault. La perspectiva está rigurosamente anclada en su cuerpo y mente."
  },

  "focalizacion-externa": {
    title: "Focalización Externa",
    category: "Regulación Perceptual",
    definition: "Restricción perceptual en la cual el narrador transmite menos información que la que poseen los propios personajes que intervienen en la escena (fórmula: Narrador < Personaje). La voz narrativa actúa a modo de cámara cinematográfica u observador neutral desapasionado: describe ademanes corporales, desplazamientos espaciales y diálogos audibles, omitiendo deliberadamente el acceso a pensamientos, emociones secretas o intenciones futuras.",
    example: "«La puerta del bar de Henry se abrió y entraron dos hombres. Se sentaron al mostrador. —¿Qué van a tomar? —preguntó George. —No lo sé —dijo uno de ellos—. ¿Tú qué quieres comer, Al? —No lo sé —dijo Al—. No sé lo que quiero. Fuera comenzaba a oscurecer. El farol de la calle alumbraba a través de la ventana. Los dos hombres leían el menú.» — Ernest Hemingway, Los asesinos (The Killers); o Alain Robbe-Grillet, La celosía.",
    analysis: "El narrador ignora las motivaciones letales de los criminales y su identidad de fondo. El lector se ve forzado a descifrar la violencia latente y el suspenso únicamente a través de la cadencia de los diálogos lacónicos, los silencios y la tensión física observable en el mostrador."
  },

  "narrador-falible": {
    title: "Narrador Falible",
    category: "Teoría de la Inconfiabilidad",
    definition: "De acuerdo con la desambiguación narratológica de Greta Olson (2003) y James Phelan, es aquella voz cuya falta de fiabilidad obedece a deficiencias cognitivas, inmadurez perceptiva o condicionamientos etarios y psicológicos involuntarios (ingenuidad infantil, trauma emocional, senilidad o limitaciones intelectuales), sin que medie intención de fraude ni voluntad dolosa de engaño contra el lector.",
    example: "«A veces la señorita Watson me llevaba a un rincón y me hablaba de la Providencia, de manera que a uno se le hacía la boca agua; pero al día siguiente venía la viuda y contaba las cosas de otro modo. Pensé que debía haber dos Providencias, y que la de la viuda era preferible...» — Mark Twain, Las aventuras de Huckleberry Finn; o Benjy Compson en El sonido y la furia de William Faulkner.",
    analysis: "Huck Finn no calcula engañar al lector; procesa la moral dogmática y el racismo institucionalizado del sur estadounidense a través de la ingenuidad pragmática de su mirada infantil. La distancia cognitiva entre lo que Huck comprende literalmente y lo que el lector deduce produce una penetrante ironía dramática."
  },

  "narrador-indigno": {
    title: "Narrador Indigno de Confianza",
    category: "Teoría de la Inconfiabilidad",
    definition: "Voz narrativa (untrustworthy narrator) que encubre, deforma o falsea deliberadamente los acontecimientos con el fin premeditado de autoexculparse de un crimen, seducir al lector, manipular el juicio moral de la audiencia o sublimar sus pulsiones inconfesables. Actúa con malicia retórica en los ejes de los hechos (misreporting), la interpretación (misreading) o los valores éticos (misregarding).",
    example: "«¡Es verdad! —siempre he sido muy nervioso, terriblemente nervioso, pero ¿por qué dicen que estoy loco? La enfermedad había agudizado mis sentidos, no los había destruido ni embotado... ¿Cómo puedo estar loco si puedo contarles con tanta calma y lucidez toda la historia? Escuchen y observen con cuánta cordura, con cuánta tranquilidad puedo relatarles todo el suceso... Yo amaba al anciano. Jamás me había hecho daño. No deseaba su dinero. ¡Era su ojo! ¡Sí, eso era! Tenía un ojo semejante al de un buitre...» — Edgar Allan Poe, El corazón delator; y Camilo José Cela, La familia de Pascual Duarte («Yo, señor, no soy malo, aunque no me faltarían motivos para serlo...»).",
    analysis: "Tanto el homicida confeso de Poe como Pascual Duarte despliegan una sofisticada estrategia retórica para justificar sus atroces actos. En Poe, la insistencia vehemente en su lucidez racional enmascara un desvarío maníaco y obsesivo; en Cela, el fatalismo determinista busca exonerar la violencia sanguinaria del convicto."
  },

  "modelo-actancial": {
    title: "Modelo Actancial de Greimas",
    category: "Semiótica de la Acción",
    definition: "Matriz analítica estructural formalizada por Algirdas Julien Greimas (1966) que sintetiza la multiplicidad de personajes de cualquier relato en seis roles funcionales arquetípicos (actantes) distribuidos en tres ejes semióticos: Eje del Deseo (Sujeto ↔ Objeto), Eje de la Comunicación o Transmisión (Destinador → Destinatario) y Eje del Conflicto o Lucha (Ayudante ↔ Oponente).",
    example: "En El ingenioso hidalgo Don Quijote de la Mancha de Miguel de Cervantes: Don Quijote es el Sujeto; el triunfo de la justicia caballeresca y el honor de Dulcinea es el Objeto; el Código de Caballería Andante es el Destinador; la humanidad doliente y Dulcinea son el Destinatario; Sancho Panza y el fiel Rocinante son Ayudantes; el Caballero de la Blanca Luna (Sansón Carrasco) y la vulgaridad del mundo empírico operan como Oponentes.",
    analysis: "El modelo greimasiano trasciende la descripción psicológica atomizada: un personaje existe en la narración por su valor relacional y operativo en la gramática de la acción. Un mismo ente puede sintetizar varios actantes o una abstracción colectiva (el honor, el dinero) encarnar un polo actancial."
  },

  "ciclo-quinario": {
    title: "Ciclo Quinario de Todorov",
    category: "Estructura de la Trama",
    definition: "Esquema de morfología narrativa planteado por Tzvetan Todorov que supera el esquema lineal tripartito (inicio, nudo y desenlace) mediante cinco estadios dinámicos concatenados causalmente: 1) Estado de Equilibrio Inicial, 2) Fuerza Perturbadora (ruptura o provocación), 3) Estado de Desequilibrio Dinámico (escalada de crisis), 4) Acción Transformadora (clímax resolutivo), y 5) Restablecimiento de un Nuevo Equilibrio cualitativamente transformado.",
    example: "En la tragedia clásica Edipo Rey de Sófocles o en El coronel no tiene quien le escriba de Gabriel García Márquez: 1) Equilibrio cívico inicial; 2) La peste sobre Tebas y la revelación del oráculo; 3) El desasosiego de la investigación y confrontación de testigos; 4) La anagnórisis fatal, la autolesión ocular de Edipo y la asunción de la culpa; 5) La purificación de la polis, el destierro de Edipo y el ascenso de Creonte.",
    analysis: "La trayectoria quinaria evidencia que el relato dramático opera de manera espiral o dialéctica: el quinto estado nunca devuelve a los personajes a la ingenuidad del punto de partida, sino que funda un nuevo orden social, cognoscitivo y ontológico forjado en el crisol del conflicto."
  },

  "fabula-sjuzet": {
    title: "Fábula vs. Sjuzet",
    category: "Formalismo Ruso",
    definition: "Distinción epistemológica fundacional del Formalismo Ruso (Viktor Shklovski, Boris Tomashevski): la Fábula (fabula) es el conjunto de acontecimientos narrados en su orden cronológico natural y causalidad lógica estricta; el Sjuzet (o discurso estético) es la disposición artística, alterada, elidida y deformada en que el autor decide presentar dichos sucesos en el texto para producir extrañamiento y tensión dramática.",
    example: "«El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana...» — Gabriel García Márquez, Crónica de una muerte anunciada.",
    analysis: "La fábula cronológica comenzaría meses atrás con el desembarco del forastero Bayardo San Román, el cortejo de Ángela Vicario, la fiesta nupcial y el rechazo en la noche de bodas. El sjuzet, magistralmente concebido, arranca por el final irremisible (el asesinato), fragmenta el testimonio veintisiete años después y dilata la puñalada hasta la última página."
  },

  "anacronia": {
    title: "Anacronía",
    category: "Temporalidad del Relato",
    definition: "Toda discrepancia estructural entre el orden cronológico de los sucesos en la historia (tiempo de la fábula) y el orden secuencial en el que son distribuidos por el discurso verbal (tiempo del relato). Sistemáticamente teorizada por Gérard Genette a través de dos vectores de dirección (analepsis o salto al pasado; prolepsis o salto al futuro) y modulada por dos variables: el alcance y la amplitud.",
    example: "«En una de las esquinas del patio, Pedro Páramo miraba caer la lluvia... Recordaba a Susana San Juan cuando eran niños y volaban papalotes en el cerro... Y pensaba en el día lejano en que volvería a verla.» — Juan Rulfo, Pedro Páramo.",
    analysis: "La anacronía dinamita la sucesión cronométrica lineal. El 'alcance' mide la distancia histórica entre el momento presente del relato y el acontecimiento evocado; la 'amplitud' cuantifica la duración temporal interna que abarca el episodio rescatado en la memoria o en la anticipación."
  },

  "analepsis": {
    title: "Analepsis (Flashback)",
    category: "Temporalidad del Relato",
    definition: "Movimiento temporal retrospectivo en el que el flujo narrativo se interrumpe para relatar hechos acaecidos en un tiempo anterior al momento presente de la historia principal. Se distingue entre analepsis externa (los hechos sucedieron antes de que comenzara el relato primario) y analepsis interna (los hechos pertenecen al marco temporal ya iniciado por la narración marco).",
    example: "«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.» — Gabriel García Márquez, Cien años de soledad.",
    analysis: "La evocación del hielo y de los gitanos de Melquíades en Macondo constituye una analepsis de largo alcance y vasta amplitud. Funciona como un retroceso fundacional que esclarece la génesis mítica de los Buendía y el deslumbramiento iniciático del protagonista frente a los misterios de la ciencia."
  },

  "prolepsis": {
    title: "Prolepsis (Flashforward)",
    category: "Temporalidad del Relato",
    definition: "Maniobra narrativa de prospección en la que el discurso adelanta, insinúa o relata de modo explícito acontecimientos que tendrán lugar en un tiempo futuro con respecto al presente de la acción. Despierta en el lector horizontes de expectativa trágica, suspenso hermenéutico o una sensación de fatalidad inexorable.",
    example: "«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar...» — Gabriel García Márquez, Cien años de soledad.",
    analysis: "La misma célebre cláusula inicial de García Márquez orquesta una prolepsis prodigiosa: al anunciar desde la primera línea que Aureliano Buendía llegará a ser coronel y estará ante las armas de un piquete de fusilamiento, sella el destino bélico del personaje antes de retroceder a su infancia."
  },

  "acronia": {
    title: "Acronía",
    category: "Temporalidad del Relato",
    definition: "Instancia narrativa desprovista de cualquier punto de apoyo o correlación temporal identificable respecto a los demás acontecimientos de la diégesis. El relato desarticula la cronología objetiva, instaurando un espacio temporal suspendido, cíclico o simultáneo que desafía la localización causal en un 'antes' o un 'después'.",
    example: "«En todas las ficciones, cada vez que un hombre se enfrenta con diversas alternativas, opta por una y elimina las otras; en la del casi inextricable Ts'ui Pên, opta —simultáneamente— por todas. Crea, así, diversos porvenires, diversos tiempos que también proliferan y se bifurcan.» — Jorge Luis Borges, El jardín de senderos que se bifurcan.",
    analysis: "Borges anula el tiempo lineal irreversible de la física clásica. En la novela infinita concebida por Ts'ui Pên, todos los desenlaces posibles conviven en una malla de dimensiones paralelas donde pasado, presente y futuro colapsan en una pura simultaneidad acrónica."
  },

  "anisocronia": {
    title: "Anisocronía / Ritmo Narrativo",
    category: "Temporalidad del Relato",
    definition: "Alteración de la velocidad o compás narrativo producida por la asimetría constante entre la duración temporal objetiva de los sucesos en la historia y la extensión textual (renglones, páginas o párrafos) que el narrador les dedica en el discurso. Genette formaliza cuatro movimientos fundamentales: Pausa descriptiva (Relato > 0, Historia = 0), Escena dramática (Relato = Historia), Sumario o Resumen (Relato < Historia) y Elipsis (Relato = 0, Historia > 0).",
    example: "En Orlando de Virginia Woolf, una ensoñación íntima o un deleite estético bajo un roble ocupa capítulos enteros de lírica prosaica (dilatación / escena extendida), mientras que el transcurrir de siglos enteros entre la época isabelina y la victoriana se resuelve en un párrafo fulgurante (resumen extremo y elipsis).",
    analysis: "La anisocronía constituye el mecanismo rítmico esencial de la orquestación novelística. Permite al escritor detener el flujo temporal en instantes de iluminación espiritual o suprimir décadas irrelevantes, modelando de manera quirúrgica la experiencia sensorial del lector."
  },

  "relato-iterativo": {
    title: "Relato Iterativo",
    category: "Frecuencia Narrativa",
    definition: "Dimensión de la frecuencia narrativa teorizada por Gérard Genette en la que se enuncia una sola vez en el discurso lo que ocurrió en múltiples ocasiones reiteradas a lo largo de la historia ('narrar una vez lo que aconteció n veces'). Se reconoce por el predominio estilístico del pretérito imperfecto de indicativo y adverbios de recurrencia habitual.",
    example: "«Durante mucho tiempo, me acosté temprano. A veces, apenas apagada la vela, mis ojos se cerraban tan deprisa que ni tiempo tenía de pensar: 'Me duermo'. Y media hora después, el pensamiento de que ya era hora de buscar el sueño me despertaba...» — Marcel Proust, En busca del tiempo perdido (Por el camino de Swann).",
    analysis: "Proust no describe un atardecer fortuito ni una noche singular de insomnio, sino el sedimento atmosférico de innumerables noches de infancia. El relato iterativo engendra una atmósfera nostálgica y universalizante, fundando las bases de la memoria involuntaria en la literatura moderna."
  },

  "cronotopo": {
    title: "Cronotopo",
    category: "Poética Histórica",
    definition: "Categoría concebida por el teórico ruso Mijaíl Bajtín para nombrar la indisoluble interconexión intrínseca de las relaciones espaciales y temporales asimiladas estéticamente en la literatura. En el cronotopo, el tiempo adquiere espesor carnal y se hace visible artísticamente, mientras que el espacio responde a los movimientos, tensiones históricas y conflictos del tiempo.",
    example: "«Comala era un pueblo sin ruidos, donde el tiempo parecía estancado entre la cal y el polvo reseco... 'Este pueblo está sobre las brasas de la tierra, en la mera boca del infierno'.» — Juan Rulfo, Pedro Páramo; o el cronotopo del camino y las ventas en Don Quijote de la Mancha de Miguel de Cervantes.",
    analysis: "En Comala, la geografía calcinada y las casas derruidas no son mero decorado pintoresco: están consustanciadas con una temporalidad estancada donde conviven ánimas en pena, pecados antiguos y culpas inextinguibles. El cronotopo rulfiano encarna la desolación y el feudalismo patriarcal mexicano."
  },

  "estilo-indirecto-libre": {
    title: "Estilo Indirecto Libre",
    category: "Representación de la Conciencia",
    definition: "Dispositivo de representación de la conciencia que amalgama la voz del narrador en tercera persona con los pensamientos, dudas y emociones íntimas del personaje. Suprime los verbos declarativos de comunicación ('dijo', 'pensó') y las conjunciones subordinantes ('que'), conservando los tiempos verbales en pasado de la narración, pero adoptando los deícticos temporales, exclamaciones y la tonalidad afectiva directa del personaje.",
    example: "«Emma miró el reloj sobre la chimenea. ¡Las cuatro ya! Y Rodolfo no llegaba. ¿La habría abandonado para siempre? ¡Dios mío, qué angustia intolerable! No, él la amaba con locura de fuego; tenía que esperar unos minutos más... Su corazón latía desbocado contra el corsé.» — Gustave Flaubert, Madame Bovary.",
    analysis: "Flaubert inaugura una deslumbrante polifonía moderna: la voz del narrador se contamina del pánico y el autoengaño romántico de Emma Bovary sin cederle formalmente la palabra. Permite una intimidad psicológica desbordante preservando al mismo tiempo la distancia irónica de la enunciación."
  },

  "narratologia-antinatural": {
    title: "Narratología Antinatural",
    category: "Modelos Posclásicos",
    definition: "Movimiento teórico posclásico (desarrollado por Jan Alber, Brian Richardson, Henrik Skov Nielsen y Stefan Iversen) enfocado en el estudio de aquellos relatos que despliegan escenarios, temporalidades, conciencias o voces físicamente imposibles, lógicamente paradójicas o irreductibles a las leyes del mundo natural y a los modelos miméticos convencionales de la experiencia humana.",
    example: "«—¿Está usted muerto? —le pregunté. —Sí, hijo. Todos aquí estamos muertos... Me mataron de un tiro en la nuca, pero sigo escuchando el murmullo de la tierra y los quejidos de los que quedaron sin confesión.» — Juan Rulfo, Pedro Páramo; y Carlos Fuentes en Aura («Lees ese anuncio: una oferta de esa naturaleza no se hace todos los días... Empujas la puerta y entras en la penumbra...»).",
    analysis: "Pedro Páramo transgrede el límite ontológico entre la vida y la muerte al situar a narradores que enuncian desde la podredumbre del sepulcro. Por su parte, la segunda persona antinatural de Fuentes obliga al lector a habitar una identidad espectral. La narratología antinatural deconstruye el mimetismo realista obligando al lector a reconfigurar sus categorías cognitivas."
  },

  "metalepsis": {
    title: "Metalepsis",
    category: "Retórica de la Ficción",
    definition: "Transgresión audaz y paradójica de la frontera que separa niveles narrativos ontológicamente distintos (el plano extradiegético del narrador o lector frente al plano intradiegético de los personajes de la ficción). Ocurre cuando un ente ficticio interviene en la vida de su autor, cuando el narrador irrumpe físicamente en la escena dramática de sus criaturas, o cuando la lectura de un texto desborda la frontera de la realidad del propio lector.",
    example: "«Gozaba del placer casi perverso de irse desgajando línea a línea de lo que lo rodeaba... Nadie en la primera habitación, nadie en la segunda. La puerta del salón, y entonces el puñal en la mano, la luz de los ventanales, el alto respaldo de un sillón de terciopelo verde, la cabeza del hombre en el sillón leyendo una novela.» — Julio Cortázar, Continuidad de los parques; y Miguel de Cervantes en la Segunda Parte de Don Quijote al discutir los personajes la publicación de la Primera Parte.",
    analysis: "Cortázar ejecuta una de las metalepsis más perfectas de la literatura universal: el amante asesino de la novela ficticia cruza la frontera del texto y entra en la sala del lector de carne y hueso que lee sentado en su sillón de terciopelo verde. La frontera ontológica entre ficción y realidad salta por los aires en un cortocircuito mortal."
  }
};

// ============================================================================
// 2. CONTROLADOR DEL GLOSARIO MODAL INTERACTIVO
// ============================================================================

/**
 * Asegura la existencia del contenedor modal #termModalOverlay en el DOM.
 * Si no está presente, lo inyecta dinámicamente con atributos de accesibilidad ARIA.
 */
function ensureModalDOM() {
  let modalOverlay = document.getElementById('termModalOverlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'termModalOverlay';
    modalOverlay.className = 'term-modal-overlay hidden';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-labelledby', 'termModalTitle');
    modalOverlay.setAttribute('aria-describedby', 'termModalDef');
    modalOverlay.innerHTML = `
      <div class="term-modal-card" role="document">
        <div class="term-modal-header">
          <div class="term-header-left">
            <span class="term-cat-badge" id="termModalCat">Ontología Narrativa</span>
            <h3 class="term-modal-title" id="termModalTitle">Término Narratológico</h3>
          </div>
          <button class="term-modal-close" id="termModalClose" aria-label="Cerrar modal de término">✕</button>
        </div>
        <div class="term-modal-body">
          <p class="term-modal-def" id="termModalDef">Definición conceptual...</p>
          
          <div class="term-example-box">
            <div class="term-sub-tag">Ejemplo Canónico Analizado</div>
            <p class="term-example-text" id="termModalExample">Cita literaria...</p>
          </div>

          <div class="term-tip-box">
            <div class="term-sub-tag tip-tag">Análisis Crítico / Clave Narratológica</div>
            <p class="term-tip-text" id="termModalAnalysis">Comentario crítico formativo...</p>
          </div>
        </div>
        <div class="term-modal-footer">
          <button class="btn-term-close" id="termModalGotIt">¡Entendido, continuar explorando!</button>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }
  return modalOverlay;
}

/**
 * Abre el modal didáctico cargando el término correspondiente desde GLOSSARY_TERMS.
 * @param {string} termKey Clave del término (ej. 'diegesis', 'focalizacion-cero')
 */
function openTermModal(termKey) {
  if (!termKey || typeof termKey !== 'string') return;
  const normalizedKey = termKey.toLowerCase().trim();
  const termData = GLOSSARY_TERMS[normalizedKey];

  if (!termData) {
    console.warn(`[Glosario] Término '${termKey}' no registrado en el diccionario narratológico.`);
    return;
  }

  const modalOverlay = ensureModalDOM();
  const catEl = document.getElementById('termModalCat');
  const titleEl = document.getElementById('termModalTitle');
  const defEl = document.getElementById('termModalDef');
  const exEl = document.getElementById('termModalExample');
  const anEl = document.getElementById('termModalAnalysis');

  if (catEl) catEl.textContent = termData.category || 'Concepto Narratológico';
  if (titleEl) titleEl.textContent = termData.title || termKey;
  if (defEl) defEl.textContent = termData.definition || '';
  if (exEl) exEl.textContent = termData.example || '';
  if (anEl) anEl.textContent = termData.analysis || '';

  modalOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Accesibilidad: Enfocar el botón de cierre para navegación por teclado
  const closeBtn = document.getElementById('termModalClose');
  if (closeBtn) closeBtn.focus();
}

/**
 * Cierra el modal didáctico y restaura el desplazamiento del documento.
 */
function closeTermModal() {
  const modalOverlay = document.getElementById('termModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
  // Solo remover modal-open si el lightbox no está activo
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) {
    document.body.classList.remove('modal-open');
  }
}

/**
 * Inicializa los escuchadores de eventos para el glosario didáctico:
 * - Delegación de clics en `.term-lookup-btn` y cualquier elemento con `[data-term]`.
 * - Cierre por clic en el botón '✕', en el botón de confirmación inferior, en el fondo desenfocado o con la tecla Escape.
 */
function initTermGlossary() {
  ensureModalDOM();

  // Delegación universal de eventos en document
  document.addEventListener('click', (e) => {
    // 1. Apertura de término
    const trigger = e.target.closest('.term-lookup-btn, [data-term]');
    if (trigger) {
      e.preventDefault();
      const termKey = trigger.getAttribute('data-term');
      if (termKey) {
        openTermModal(termKey);
        return;
      }
    }

    // 2. Cierre del modal
    const overlay = document.getElementById('termModalOverlay');
    if (overlay && !overlay.classList.contains('hidden')) {
      // Clic directo sobre el backdrop exterior
      if (e.target === overlay) {
        closeTermModal();
        return;
      }
      // Clic en botones de cierre
      if (
        e.target.closest('#termModalClose') ||
        e.target.closest('#termModalGotIt') ||
        e.target.closest('.btn-term-close')
      ) {
        closeTermModal();
        return;
      }
    }
  });

  // Cierre accesible con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const overlay = document.getElementById('termModalOverlay');
      if (overlay && !overlay.classList.contains('hidden')) {
        closeTermModal();
      }
    }
  });
}

// ============================================================================
// 3. CONTROLADOR DE LIGHTBOX DE IMÁGENES
// ============================================================================

/**
 * Asegura la existencia del contenedor #lightbox en el DOM.
 */
function ensureLightboxDOM() {
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Visualizador de imagen ampliada');
    document.body.appendChild(lightbox);
  }
  return lightbox;
}

/**
 * Despliega una imagen ampliada en alta resolución dentro del Lightbox.
 * @param {string} src Ruta o URL de la imagen
 * @param {string} alt Texto alternativo de la imagen
 */
function openLightbox(src, alt) {
  if (!src) return;
  const lightbox = ensureLightboxDOM();
  lightbox.innerHTML = `<img src="${src}" alt="${alt || 'Imagen ampliada en alta resolución'}" loading="lazy">`;
  lightbox.classList.add('active');
  document.body.classList.add('modal-open');
}

/**
 * Cierra el Lightbox y limpia su contenido visual.
 */
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    lightbox.innerHTML = '';
  }
  // Solo remover modal-open si el glosario no está activo
  const termOverlay = document.getElementById('termModalOverlay');
  if (!termOverlay || termOverlay.classList.contains('hidden')) {
    document.body.classList.remove('modal-open');
  }
}

/**
 * Inicializa los escuchadores para el Lightbox de imágenes en figuras didácticas e infografías.
 */
function initLightbox() {
  ensureLightboxDOM();

  // Escuchar clics en imágenes de clases específicas
  document.addEventListener('click', (e) => {
    const imgTarget = e.target.closest(
      '.infographic-frame img, .tension-curve img, .chapter-content img, .narrative-figure img, .featured-image, img.featured-image, .zoomable-image'
    );
    if (imgTarget) {
      e.preventDefault();
      openLightbox(imgTarget.src, imgTarget.alt);
      return;
    }

    // Cierre al hacer clic en cualquier parte del lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Cierre con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const lightbox = document.getElementById('lightbox');
      if (lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    }
  });
}

// ============================================================================
// 4. EXPOSICIÓN GLOBAL Y AUTO-INICIALIZACIÓN
// ============================================================================

// Exposición en globalThis y window para máxima compatibilidad (navegadores y Node)
if (typeof globalThis !== 'undefined') {
  globalThis.GLOSSARY_TERMS = GLOSSARY_TERMS;
  globalThis.openTermModal = openTermModal;
  globalThis.closeTermModal = closeTermModal;
  globalThis.initTermGlossary = initTermGlossary;
  globalThis.openLightbox = openLightbox;
  globalThis.closeLightbox = closeLightbox;
  globalThis.initLightbox = initLightbox;
}

if (typeof window !== 'undefined') {
  window.GLOSSARY_TERMS = GLOSSARY_TERMS;
  window.openTermModal = openTermModal;
  window.closeTermModal = closeTermModal;
  window.initTermGlossary = initTermGlossary;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.initLightbox = initLightbox;
}

// Inicialización automática tras la carga del DOM en navegador
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTermGlossary();
      initLightbox();
    });
  } else {
    initTermGlossary();
    initLightbox();
  }
}
