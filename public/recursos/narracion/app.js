/**
 * El Arte de Narrar — Teoría Narratológica & Modelos Posclásicos
 * Autor: MSc. Alejandro Córdova · Lengua y Literatura
 * Versión: 2.0.0
 * 
 * Lógica pedagógica integral:
 * 1. Glosario Didáctico Modal (22 términos canónicos).
 * 2. Visualizador de Imágenes en Alta Resolución (Lightbox).
 * 3. Enrutador Didáctico de 3 Rutas (Fundamental, Avanzado, Reto) y 12 Módulos.
 * 4. Sincronización bidireccional con course-shell ('course-shell-switch-tab' y 'tab-changed').
 * 5. Laboratorios Interactivos (Voces, Tensión Todorov, Lentes, Inconfiabilidad, Greimas, Anisocronías, Cohn).
 * 6. Gran Reto Evaluativo (10 preguntas de análisis textual, retroalimentación y envío a Sheets).
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
// 2. CONTROLADOR DEL GLOSARIO MODAL DIDÁCTICO
// ============================================================================

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

  const closeBtn = document.getElementById('termModalClose');
  if (closeBtn) closeBtn.focus();
}

function closeTermModal() {
  const modalOverlay = document.getElementById('termModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
  const lightbox = document.getElementById('lightbox');
  const studentModal = document.getElementById('studentModalOverlay');
  const hasOpenModal = (lightbox && lightbox.classList.contains('active')) ||
                       (studentModal && !studentModal.classList.contains('hidden'));
  if (!hasOpenModal) {
    document.body.classList.remove('modal-open');
  }
}

function initTermGlossary() {
  ensureModalDOM();

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.term-lookup-btn, [data-term]');
    if (trigger) {
      e.preventDefault();
      const termKey = trigger.getAttribute('data-term');
      if (termKey) {
        openTermModal(termKey);
        return;
      }
    }

    const overlay = document.getElementById('termModalOverlay');
    if (overlay && !overlay.classList.contains('hidden')) {
      if (e.target === overlay) {
        closeTermModal();
        return;
      }
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

function openLightbox(src, alt) {
  if (!src) return;
  const lightbox = ensureLightboxDOM();
  lightbox.innerHTML = `<img src="${src}" alt="${alt || 'Imagen ampliada en alta resolución'}" loading="lazy">`;
  lightbox.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    lightbox.innerHTML = '';
  }
  const termOverlay = document.getElementById('termModalOverlay');
  const studentModal = document.getElementById('studentModalOverlay');
  const hasOpenModal = (termOverlay && !termOverlay.classList.contains('hidden')) ||
                       (studentModal && !studentModal.classList.contains('hidden'));
  if (!hasOpenModal) {
    document.body.classList.remove('modal-open');
  }
}

function initLightbox() {
  ensureLightboxDOM();

  document.addEventListener('click', (e) => {
    const imgTarget = e.target.closest(
      '.infographic-frame img, .tension-curve img, .tension-curve-wrapper img, .chapter-content img, .featured-image, img.featured-image, .zoomable-image'
    );
    if (imgTarget) {
      e.preventDefault();
      openLightbox(imgTarget.src, imgTarget.alt);
      return;
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

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
// 4. SISTEMA DE RUTAS Y PESTAÑAS (NAVEGACIÓN DIDÁCTICA & COURSE-SHELL SYNC)
// ============================================================================

const ROUTE_DEFAULT_TABS = {
  "fundamental": "tab-voces",
  "avanzado": "tab-diegesis",
  "reto": "tab-reto-final"
};

let currentActiveRoute = "fundamental";
let currentActiveTab = "tab-voces";

function setRoute(routeId, defaultTab = null) {
  if (!routeId) return;
  const validRoute = ROUTE_DEFAULT_TABS[routeId] ? routeId : "fundamental";
  currentActiveRoute = validRoute;

  // Actualizar botones de ruta
  document.querySelectorAll('.btn-route').forEach(btn => {
    const isTarget = btn.getAttribute('data-route') === validRoute;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
  });

  // Filtrar pestañas visibles según la ruta activa
  const navTabs = document.querySelectorAll('.modules-tabs-nav .nav-tab');
  navTabs.forEach(tab => {
    const tabRoute = tab.getAttribute('data-route');
    if (tabRoute === validRoute) {
      tab.style.display = 'inline-flex';
    } else {
      tab.style.display = 'none';
    }
  });

  // Determinar pestaña a activar
  const targetTab = defaultTab || ROUTE_DEFAULT_TABS[validRoute];
  switchTab(targetTab, false);
}

function switchTab(tabId, syncRoute = true) {
  if (!tabId) return;
  const targetSection = document.getElementById(tabId);
  if (!targetSection) {
    console.warn(`[Navegación] No existe la sección con ID #${tabId}`);
    return;
  }

  currentActiveTab = tabId;

  // Actualizar pestañas del submenú
  const navTabs = document.querySelectorAll('.modules-tabs-nav .nav-tab');
  let associatedRoute = null;

  navTabs.forEach(tab => {
    const matches = tab.getAttribute('data-tab') === tabId;
    tab.classList.toggle('active', matches);
    tab.setAttribute('aria-selected', matches ? 'true' : 'false');
    if (matches) {
      associatedRoute = tab.getAttribute('data-route');
    }
  });

  // Mostrar la sección correspondiente y ocultar las demás
  document.querySelectorAll('.tab-content').forEach(sec => {
    sec.classList.toggle('active', sec.id === tabId);
  });

  // Si la pestaña pertenece a otra ruta, sincronizar el selector de rutas
  if (syncRoute && associatedRoute && associatedRoute !== currentActiveRoute) {
    currentActiveRoute = associatedRoute;
    document.querySelectorAll('.btn-route').forEach(btn => {
      const isTarget = btn.getAttribute('data-route') === associatedRoute;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    });
    // Ajustar visibilidad de las pestañas
    navTabs.forEach(tab => {
      tab.style.display = (tab.getAttribute('data-route') === associatedRoute) ? 'inline-flex' : 'none';
    });
  }

  // Notificar a course-shell y observadores globales
  document.dispatchEvent(new CustomEvent('tab-changed', { detail: { tabId } }));
}

function initNavigation() {
  // 1. Selector de Rutas
  document.querySelectorAll('.btn-route').forEach(btn => {
    btn.addEventListener('click', () => {
      const route = btn.getAttribute('data-route');
      setRoute(route);
    });
  });

  // 2. Pestañas de módulos
  document.querySelectorAll('.modules-tabs-nav .nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId, false);
    });
  });

  // 3. Sincronización con el menú lateral de course-shell
  window.addEventListener('course-shell-switch-tab', (e) => {
    if (e.detail && e.detail.tabId) {
      switchTab(e.detail.tabId, true);
    }
  });

  // Inicializar en la ruta fundamental
  setRoute('fundamental', 'tab-voces');
}

// ============================================================================
// 5. INTERACTIVO 1: EL INTERRUPTOR DE VOCES (MÓDULO 01)
// ============================================================================

const VOICE_PERSPECTIVES = {
  "1-protag": {
    name: "1.ª Persona Protagonista (Martín, anticuario)",
    type: "Narrador Autodiégético",
    
    text: "«Tenía el reloj de oro entre mis dedos temblorosos. Llevaba meses buscándolo en los mercadillos de Nápoles. Cuando el hombre de la gabardina se acercó con paso sigiloso, sentí un escalofrío en la nuca; supe de inmediato que venía a arrebatármelo. Me aferré a la cadena de plata como si en ello se me fuera la vida.»",
    knowledge: "Acceso total a sus emociones, sospechas y dolor físico inmediato.",
    limits: "Ignora por completo qué piensa el hombre de la gabardina o si lleva un arma oculta.",
    key: "Subjetividad encarnada: la verdad queda condicionada por el miedo y el apego al objeto."
  },
  "1-testigo": {
    name: "1.ª Persona Testigo (Don Aurelio, vendedor vecino)",
    type: "Narrador Homodiégético",
    
    text: "«Yo estaba ordenando unos candelabros de bronce en mi puesto cuando escuché el alboroto. Vi a Martín forcejear con un forastero alto que vestía gabardina oscura. El rostro de Martín estaba desencajado por el terror. El forastero tiró con furia del reloj, pero no pude oír lo que se susurraban entre dientes antes de que la multitud los rodeara.»",
    knowledge: "Registra ademanes, distancias físicas y expresiones faciales perceptibles.",
    limits: "No puede penetrar la conciencia de ninguno; deduce intenciones solo por gestos externos.",
    key: "Verosimilitud testimonial: actúa como un observador con ángulo de visión parcial."
  },
  "3-omni": {
    name: "3.ª Persona Omnisciente (Visión Panorámica)",
    type: "Focalización Cero (N > P)",
    
    text: "«Martín sostenía el reloj de oro con una codicia mezclada con remordimiento: sabía que pertenecía a los herederos de su hermano. A pocos metros, Julián avanzaba con el corazón desbocado; no buscaba enriquecerse, sino recuperar la única prenda que le recordaba a su madre antes de que Martín la empeñara. Ninguno de los dos imaginaba que la policía vigilaba el callejón desde el amanecer.»",
    knowledge: "Penetración simultánea en la psicología de ambos antagonistas, sus pasados y el futuro inminente.",
    limits: "Ninguno dentro del universo de la ficción (omnipresencia epistemológica).",
    key: "Poder demiúrgico: desvela las ironías trágicas que los personajes desconocen."
  },
  "3-obser": {
    name: "3.ª Persona Observador / Cámara (Registro Conductual)",
    type: "Focalización Externa (N < P)",
    
    text: "«A las once y diez de la mañana, un hombre de cabello canoso sujetaba un reloj dorado junto al mostrador del puesto número doce. Un segundo individuo, de un metro ochenta y gabardina gris, se aproximó con las manos en los bolsillos. Hubo una breve tensión muscular en ambos antebrazos. La cadena metálica cayó al suelo de adoquines produciendo un chasquido agudo. Cinco transeúntes giraron la cabeza.»",
    knowledge: "Exclusivamente lo observable por una lente cinematográfica y un micrófono neutral.",
    limits: "Cero acceso a pensamientos, emociones, recuerdos o intenciones previas.",
    key: "Distanciamiento conductista: el lector asume el papel activo de deducir el drama humano."
  }
};

function initVoiceSwitcher() {
  const container = document.getElementById('voiceSwitcherWidget');
  if (!container) return;

  const buttons = container.querySelectorAll('.btn-voice-opt');
  const titleEl = document.getElementById('voiceDisplayTitle');
  const textEl = document.getElementById('voiceDisplayText');
  const knowEl = document.getElementById('voiceDisplayKnow');
  const limitEl = document.getElementById('voiceDisplayLimit');
  const keyEl = document.getElementById('voiceDisplayKey');

  function renderVoice(voiceKey) {
    const data = VOICE_PERSPECTIVES[voiceKey];
    if (!data) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-voice') === voiceKey);
    });

    if (titleEl) titleEl.innerHTML = `${data.icon} ${data.name} — <span class="term-cat-badge">${data.type}</span>`;
    if (textEl) textEl.textContent = data.text;
    if (knowEl) knowEl.innerHTML = `<strong>Qué puede saber:</strong> ${data.knowledge}`;
    if (limitEl) limitEl.innerHTML = `<strong>Límites epistémicos:</strong> ${data.limits}`;
    if (keyEl) keyEl.innerHTML = `<strong>Efecto narratológico:</strong> ${data.key}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-voice');
      renderVoice(v);
    });
  });

  renderVoice('1-protag');
}

// ============================================================================
// 6. INTERACTIVO 2: CURVA DE TENSIÓN DE TODOROV (MÓDULO 05)
// ============================================================================

const TODOROV_STAGES = {
  "1": {
    phase: "1. Estado de Equilibrio Inicial",
    tension: "Tensión: 10% · Punto de partida",
    desc: "Presentación del mundo ordinario y las relaciones de armonía aparente antes de la crisis.",
    example: "«Edipo reina sabio y próspero sobre Tebas; Macondo vive sus años fundacionales de casas de barro y río transparente; el coronel espera con paciencia su pensión veterana.»",
    justification: "El relato establece las normas de la diégesis para que la posterior ruptura cobre peso dramático y moral."
  },
  "2": {
    phase: "2. Fuerza Perturbadora (Incidente Incitador)",
    tension: "Tensión: 35% · Ruptura del orden",
    desc: "Acontecimiento exógeno o decisión íntima que dinamita el equilibrio previo y exige respuesta del protagonista.",
    example: "«La peste asola Tebas y el oráculo exige castigar al asesino de Layo; Gregorio Samsa despierta convertido en un insecto monstruoso; llega el forastero Bayardo San Román.»",
    justification: "Convierte al protagonista en Sujeto de deseo o agente de restitución: sin esta fuerza no hay historia posible."
  },
  "3": {
    phase: "3. Desequilibrio Dinámico (Escalada de Crisis)",
    tension: "Tensión: 70% · Escalada de obstáculos",
    desc: "Cadena de confrontaciones, pruebas, dilaciones, encrucijadas y agravamiento de los obstáculos.",
    example: "«Edipo interroga a Tiresias y Creonte, descubriendo indicios aterradores; Gregorio intenta comunicarse con su familia mientras la herida de la manzana se pudre en su lomo.»",
    justification: "Fase de mayor extensión textual; pone a prueba los valores éticos de los actuantes y agudiza el suspenso."
  },
  "4": {
    phase: "4. Acción Transformadora (Clímax Resolutivo)",
    tension: "Tensión: 98% · Cima dramática irreversible",
    desc: "El punto de máxima colisión dramática donde se produce la inflexión definitiva. No hay retorno posible.",
    example: "«Edipo descubre que Layo era su padre y Yocasta su madre, arrancándose los ojos con los broches de oro; la muerte solitaria de Gregorio y el desahogo familiar; la puñalada en la puerta de Santiago Nasar.»",
    justification: "El nudo se desata de manera irrevocable mediante anagnórisis (revelación de identidad) o catástrofe catártica."
  },
  "5": {
    phase: "5. Nuevo Equilibrio (Desenlace Transformado)",
    tension: "Tensión: 20% · Nuevo orden ontológico",
    desc: "Restablecimiento de la estabilidad, pero sobre un orden cualitativamente transformado por la experiencia del dolor o el saber.",
    example: "«Edipo ciego parte al destierro purificando a Tebas; la familia Samsa toma el tranvía soñando con un nuevo matrimonio; el pueblo de Macondo es borrado por el viento bíblico.»",
    justification: "Demuestra que el relato es dialéctico o espiral: nadie regresa idéntico al punto de partida original."
  }
};

function initTensionCurve() {
  const nodes = document.querySelectorAll('.tension-node');
  const infoCard = document.getElementById('tensionInfo');
  if (!nodes.length || !infoCard) return;

  function setStage(stepKey) {
    const data = TODOROV_STAGES[stepKey];
    if (!data) return;

    nodes.forEach(n => {
      n.classList.toggle('active', n.getAttribute('data-step') === stepKey);
    });

    infoCard.innerHTML = `
      <h4 style="font-family:var(--font-title); font-size:1.1rem; color:var(--deep-blue); margin-bottom:6px;">
        ${data.phase} <span class="panel-tag">${data.tension}</span>
      </h4>
      <p style="margin-bottom:8px; color:#1E293B;"><strong>Función estructural:</strong> ${data.desc}</p>
      <p style="margin-bottom:8px; font-style:italic; color:#334155;"><strong>Ejemplos canónicos:</strong> ${data.example}</p>
      <p style="margin:0; font-size:0.88rem; color:#64748B;"><strong>Justificación narratológica:</strong> ${data.justification}</p>
    `;
  }

  nodes.forEach(n => {
    n.addEventListener('click', () => {
      const step = n.getAttribute('data-step');
      setStage(step);
    });
  });

  setStage('1');
}

// ============================================================================
// 7. INTERACTIVO 3: SIMULADOR DE LENTES DE FOCALIZACIÓN (MÓDULO 07)
// ============================================================================

const LENS_CONFIGS = {
  "cero": {
    name: "Focalización Cero (Omnisciencia Clásica)",
    formula: "Narrador > Personaje (N > P)",
    scene: "«El coche de caballos rodaba por los bulevares de Ruan con las cortinillas corridas. Dentro, Emma Bovary cerraba los ojos, devorada por una culpa febril que pugnaba con el éxtasis del pecado, mientras Léon, embriagado por una vanidad juvenil que confundía con pasión eterna, contemplaba fascinado el encaje de su vestido. Ambos ignoraban que el cochero maldecía entre dientes el capricho interminable de aquellos amantes y que el destino de Charles Bovary comenzaba a desmoronarse en Yonville.»",
    analysis: "El narrador trasciende el habitáculo cerrado: penetra en el alma contradictoria de Emma, revela la ligereza egocéntrica de Léon, recoge el enfado mudo del cochero y anticipa el desastre conyugal distante."
  },
  "interna": {
    name: "Focalización Interna (Conciencia Reflector de Emma)",
    formula: "Narrador = Personaje (N = P)",
    scene: "«Las cortinillas de seda amarilla filtraban un resplandor dorado y sofocante. A Emma le faltaba el aire; el crujido de los muelles bajo cada bache le parecía el eco de los latidos desbocados de su propio pecho. Miró a Léon: su perfil le pareció el de los caballeros de las novelas leídas en el convento. ¿La amaría siempre? Sintió un vértigo atroz, mezcla de dicha salvaje y pánico cerval a volver a la gris monotonía de su hogar.»",
    analysis: "La realidad se filtra exclusivamente a través de los sentidos y la angustia de Emma. El lector no sabe si Léon es sincero ni qué ocurre fuera del carruaje; comparte la claustrofobia y la ilusión de la protagonista."
  },
  "externa": {
    name: "Focalización Externa (Observación Objetiva)",
    formula: "Narrador < Personaje (N < P)",
    scene: "«A las dos y cuarto de la tarde, un fiacre cerrado con persianas de terciopelo salió a toda prisa de la plaza de la catedral. El cochero fustigó a los dos caballos percherones. El carruaje dobló por la calle Grand-Pont, se internó en los muelles y continuó dando vueltas en círculo durante cuatro horas consecutivas. En una ocasión, una mano enguantada asomó por la ventanilla arrojando a la brisa pedazos diminutos de papel blanco que se dispersaron sobre el río.»",
    analysis: "La voz se comporta como una cámara neutra. Oculta las identidades y los tormentos interiores. El lector debe descifrar el drama erótico y el adulterio analizando indicios mudos: el andar frenético del vehículo y el gesto de romper la carta."
  }
};

function initLensSimulator() {
  const container = document.getElementById('lensSimulatorWidget');
  if (!container) return;

  const buttons = container.querySelectorAll('.btn-lens');
  const titleEl = document.getElementById('lensDisplayTitle');
  const formEl = document.getElementById('lensDisplayFormula');
  const textEl = document.getElementById('lensDisplayText');
  const anEl = document.getElementById('lensDisplayAnalysis');

  function renderLens(lensKey) {
    const data = LENS_CONFIGS[lensKey];
    if (!data) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lens') === lensKey);
    });

    if (titleEl) titleEl.textContent = data.name;
    if (formEl) formEl.textContent = data.formula;
    if (textEl) textEl.textContent = data.scene;
    if (anEl) anEl.innerHTML = `<strong>Análisis Narratológico:</strong> ${data.analysis}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderLens(btn.getAttribute('data-lens'));
    });
  });

  renderLens('cero');
}

// ============================================================================
// 8. INTERACTIVO 4: LABORATORIO DEL NARRADOR INCONFIABLE (MÓDULO 08)
// ============================================================================

const UNRELIABLE_CASES = {
  "lolita": {
    work: "Lolita (Vladimir Nabokov, 1955)",
    narrator: "Humbert Humbert",
    olsonType: "Narrador Indigno de Confianza (Untrustworthy)",
    phelanAxis: "Eje de los Valores (Misregarding) y de los Hechos (Misreporting)",
    strategy: "Seducción retórica, lirismo deslumbrante y condescendencia intelectual.",
    quote: "«Lolita, luz de mi vida, fuego de mis entrañas. Pecado mío, alma mía... Podéis burlaros de mí, señores del jurado, pero tenéis que conceder que ella me sonrió primero...»",
    critique: "Humbert construye una apología estética de su pederastia. Utiliza el humor y la belleza verbal para enmascarar el abuso y la destrucción de la infancia de Dolores Haze."
  },
  "huck": {
    work: "Las aventuras de Huckleberry Finn (Mark Twain, 1884)",
    narrator: "Huckleberry Finn",
    olsonType: "Narrador Falible (Fallible)",
    phelanAxis: "Eje del Conocimiento (Underreading)",
    strategy: "Ingenuidad moral pragmática e inmadurez cognoscitiva.",
    quote: "«Pensé mucho tiempo en esto, y me dije: Bueno, entonces me iré al infierno... y rompí la carta. Eran pensamientos terribles y palabras horribles, pero ya estaban dichas... No podía volver a ser bueno.»",
    critique: "Huck cree sinceramente que merece la condenación eterna por ayudar al esclavo prófugo Jim. La ironía dramática radica en que el lector reconoce la nobleza humanista de Huck frente a la vileza religiosa de la sociedad esclavista."
  },
  "pascual": {
    work: "La familia de Pascual Duarte (Camilo José Cela, 1942)",
    narrator: "Pascual Duarte",
    olsonType: "Narrador Indigno de Confianza (Untrustworthy)",
    phelanAxis: "Eje de los Valores y los Hechos (Misregarding / Misreporting)",
    strategy: "Fatalismo determinista como coartada de barbarie.",
    quote: "«Yo, señor, no soy malo, aunque no me faltarían motivos para serlo... Hay hombres a quienes se les ordena marchar por el camino de las flores, y hombres a quienes se les manda tirar por el camino de los cardos... La fatalidad nos persigue.»",
    critique: "Desde la celda de condenados a muerte, Pascual expone sus brutales crímenes atribuyéndolos a un destino inexorable, buscando atenuar su culpabilidad ante el destinatario de su manuscrito."
  },
  "ackroyd": {
    work: "El asesinato de Roger Ackroyd (Agatha Christie, 1926)",
    narrator: "Dr. James Sheppard",
    olsonType: "Narrador Indigno de Confianza (Untrustworthy)",
    phelanAxis: "Eje de los Hechos (Underreporting premeditado)",
    strategy: "Silenciamiento selectivo y verdad literal desprovista de contexto.",
    quote: "«Entré al despacho de Ackroyd. La carta estaba sobre la mesa... Salí a las nueve menos diez. La puerta se cerró detrás de mí. No volví a mirar atrás. Todo lo que he consignado en estas páginas es rigurosamente cierto...»",
    critique: "Sheppard no miente formalmente en sus frases, pero suprime deliberadamente los diez minutos en los que apuñaló a Ackroyd. La inconfiabilidad reside en la omisión calculada para engañar a Hércules Poirot y al lector."
  }
};

function initUnreliableLab() {
  const container = document.getElementById('unreliableLabWidget');
  if (!container) return;

  const buttons = container.querySelectorAll('.btn-unreliable-case');
  const workEl = document.getElementById('unreliableWork');
  const narrEl = document.getElementById('unreliableNarrator');
  const olsonEl = document.getElementById('unreliableOlson');
  const phelanEl = document.getElementById('unreliablePhelan');
  const stratEl = document.getElementById('unreliableStrat');
  const quoteEl = document.getElementById('unreliableQuote');
  const critEl = document.getElementById('unreliableCrit');

  function renderCase(caseKey) {
    const data = UNRELIABLE_CASES[caseKey];
    if (!data) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-case') === caseKey);
    });

    if (workEl) workEl.textContent = data.work;
    if (narrEl) narrEl.textContent = data.narrator;
    if (olsonEl) olsonEl.innerHTML = `<strong>Desambiguación de Olson:</strong> <span class="panel-tag">${data.olsonType}</span>`;
    if (phelanEl) phelanEl.innerHTML = `<strong>Eje de Phelan:</strong> ${data.phelanAxis}`;
    if (stratEl) stratEl.innerHTML = `<strong>Estrategia Retórica:</strong> ${data.strategy}`;
    if (quoteEl) quoteEl.textContent = data.quote;
    if (critEl) critEl.innerHTML = `<strong>Diagnóstico Crítico:</strong> ${data.critique}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderCase(btn.getAttribute('data-case'));
    });
  });

  renderCase('lolita');
}

// ============================================================================
// 9. INTERACTIVO 5: TABLERO ACTANCIAL DE GREIMAS (MÓDULO 09)
// ============================================================================

const ACTANTIAL_CASES = {
  "quijote": {
    title: "Don Quijote de la Mancha (Miguel de Cervantes)",
    sujeto: "Don Quijote de la Mancha",
    objeto: "El triunfo de la justicia caballeresca y el honor de Dulcinea",
    destinador: "Los libros de caballerías y el ideal de la Edad de Oro",
    destinatario: "La humanidad doliente, los desvalidos y Dulcinea",
    ayudante: "Sancho Panza, el caballo Rocinante y su fe ciega",
    oponente: "El Caballero de la Blanca Luna (Sansón Carrasco) y la vulgaridad del mundo",
    bremond: "Encrucijada de Bremond: Quijote actualiza su misión heroica (salidas), pero sufre fracaso empírico repetido hasta la anagnórisis de la cordura final."
  },
  "odisea": {
    title: "La Odisea (Homero)",
    sujeto: "Odiseo (Ulises)",
    objeto: "El retorno a Ítaca y la restitución del hogar legítimo",
    destinador: "La voluntad del Destino y el decreto olímpico de Zeus",
    destinatario: "Penélope, Telémaco y el pueblo de Ítaca",
    ayudante: "Atenea (la deidad protectora), Telémaco y el porquero Eumeo",
    oponente: "Poseidón (la cólera divina marina) y la soberbia de los pretendientes",
    bremond: "Encrucijada de Bremond: Odiseo actualiza constantemente peripecias de escape (Cíclope, Circe), culminando con éxito rotundo en la matanza de los pretendientes."
  },
  "cronica": {
    title: "Crónica de una muerte anunciada (Gabriel García Márquez)",
    sujeto: "Los hermanos Pedro y Pablo Vicario",
    objeto: "La restitución del honor familiar mediante la muerte de Santiago Nasar",
    destinador: "El mandato imperativo del código patriarcal y la madre (Pura Vicario)",
    destinatario: "La honra del clan Vicario y la opinión pública del pueblo",
    ayudante: "La complicidad colectiva pasiva y el fatalismo que inmoviliza a la comunidad",
    oponente: "Las advertencias tardías, el Cristo Bedoya y la inocencia de la víctima",
    bremond: "Encrucijada de Bremond: Los gemelos buscan evitar la ejecución avisando a todos, pero la inercia social impone la actualización fatal del homicidio."
  }
};

function initActantialBoard() {
  const container = document.getElementById('actantialBoardWidget');
  if (!container) return;

  const buttons = container.querySelectorAll('.btn-actant-case');
  const titleEl = document.getElementById('actantWorkTitle');
  const sSlot = document.getElementById('slotSujeto');
  const oSlot = document.getElementById('slotObjeto');
  const d1Slot = document.getElementById('slotDestinador');
  const d2Slot = document.getElementById('slotDestinatario');
  const aSlot = document.getElementById('slotAyudante');
  const opSlot = document.getElementById('slotOponente');
  const bremondEl = document.getElementById('actantBremondText');

  function renderActants(key) {
    const data = ACTANTIAL_CASES[key];
    if (!data) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-actant-case') === key);
    });

    if (titleEl) titleEl.textContent = data.title;
    if (sSlot) sSlot.textContent = data.sujeto;
    if (oSlot) oSlot.textContent = data.objeto;
    if (d1Slot) d1Slot.textContent = data.destinador;
    if (d2Slot) d2Slot.textContent = data.destinatario;
    if (aSlot) aSlot.textContent = data.ayudante;
    if (opSlot) opSlot.textContent = data.oponente;
    if (bremondEl) bremondEl.innerHTML = `<strong>Lógica de Bremond:</strong> ${data.bremond}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderActants(btn.getAttribute('data-actant-case'));
    });
  });

  renderActants('quijote');
}

// ============================================================================
// 10. INTERACTIVO 6: VELOCÍMETRO DE ANISOCRONÍAS (MÓDULO 10)
// ============================================================================

const SPEED_CONFIGS = {
  "pausa": {
    name: "Pausa Descriptiva",
    formula: "Relato > 0, Historia = 0 (TR > 0, TH = 0)",
    speedLabel: "Velocidad: 0 km/h · Tiempo congelado",
    quote: "«La pensión Vauquer olía a encierro, a moho y a rancio; daba frío, daba humedad al tacto... Las paredes estaban recubiertas de un papel barnizado que representaba las aventuras de Telémaco...» — Honoré de Balzac, Papá Goriot.",
    analysis: "La aguja del tiempo de los acontecimientos se detiene. El narrador se demora páginas enteras en inventariar el decorado físico o el ropaje, modulando el clima sensorial sin que transcurra un solo segundo en la diégesis."
  },
  "escena": {
    name: "Escena Dramatizada",
    formula: "Relato = Historia (TR = TH)",
    speedLabel: "Velocidad: 60 km/h · Isocronía en tiempo real",
    quote: "«—¿Es verdad que te marchas? —preguntó ella con un hilo de voz. —Sí, mañana al amanecer —respondió él sin mirarla a los ojos. Hubo un silencio de tres segundos en el que solo se oyó el viento golpeando las maderas.»",
    analysis: "Coincidencia perfecta entre el tiempo que toma leer las líneas y el tiempo que tardan los personajes en pronunciar sus réplicas. Produce la máxima ilusión mimética de presencialidad y conflicto."
  },
  "sumario": {
    name: "Sumario o Resumen Narrativo",
    formula: "Relato < Historia (TR < TH)",
    speedLabel: "Velocidad: 180 km/h · Aceleración extrema",
    quote: "«Y así pasaron trescientos años. Reyes cayeron, dinastías se extinguieron en las cenizas de la peste y el roble del parque vio multiplicarse diez generaciones de jardineros sin que Orlando envejeciera un solo día.» — Virginia Woolf, Orlando.",
    analysis: "El narrador pisa a fondo el acelerador discursivo: condensa siglos, décadas o meses en un párrafo sintético para salvar vacíos dramáticos y transportar al lector a la siguiente encrucijada."
  },
  "elipsis": {
    name: "Elipsis Temporal",
    formula: "Relato = 0, Historia > 0 (TR = 0, TH > 0)",
    speedLabel: "Velocidad: Infinita · Salto instantáneo",
    quote: "«...y cerró los ojos exhausto. [Salto temporal de quince años no narrados] Cuando despertó a la luz del nuevo siglo, sus hijos ya eran hombres de armas y su esposa yacía bajo la cal de Comala.»",
    analysis: "El tiempo de la historia avanza a través de una brecha en blanco sin que el texto le dedique una sola letra. Obliga al lector a reconstituir el vacío temporal mediante inferencias hermenéuticas."
  }
};

function initSpeedometer() {
  const container = document.getElementById('speedometerWidget');
  if (!container) return;

  const buttons = container.querySelectorAll('.btn-speed-opt');
  const titleEl = document.getElementById('speedDisplayTitle');
  const formEl = document.getElementById('speedDisplayFormula');
  const gaugeEl = document.getElementById('speedDisplayGauge');
  const quoteEl = document.getElementById('speedDisplayQuote');
  const anEl = document.getElementById('speedDisplayAnalysis');

  function renderSpeed(key) {
    const data = SPEED_CONFIGS[key];
    if (!data) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-speed') === key);
    });

    if (titleEl) titleEl.textContent = data.name;
    if (formEl) formEl.textContent = data.formula;
    if (gaugeEl) gaugeEl.textContent = data.speedLabel;
    if (quoteEl) quoteEl.textContent = data.quote;
    if (anEl) anEl.innerHTML = `<strong>Régimen Temporal:</strong> ${data.analysis}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderSpeed(btn.getAttribute('data-speed'));
    });
  });

  renderSpeed('pausa');
}

// ============================================================================
// 11. INTERACTIVO 7: COMPARADOR DE MODOS DE CONCIENCIA DE COHN (MÓDULO 11)
// ============================================================================

const COHN_MODES = {
  "psycho": {
    name: "1. Psycho-narration (Discurso Psicorrelatado)",
    voice: "Voz del Narrador en 3.ª persona con vocabulario analítico superior al del personaje.",
    text: "«Emma experimentaba una sorda repugnancia hacia la mediocridad burguesa de su marido; una náusea espiritual que sus escasas lecturas románticas no alcanzaban a sublimar, hundiéndola en un letargo donde el deseo de transgresión combatía con el atavismo de su educación provinciana.»",
    markers: "Uso de sustantivos abstractos ('repugnancia', 'náusea espiritual', 'atavismo'), perspectiva psicológica exterior y léxico inaccesible para la propia mente de Emma."
  },
  "quoted": {
    name: "2. Quoted Monologue (Monólogo Interior Citado)",
    voice: "Voz directa del Personaje entrecomillada en 1.ª persona y presente.",
    text: "«Emma pensó: '¡Dios mío, qué hombre tan aburrido! Jamás sabrá lo que sufro ni comprenderá la tempestad que llevo dentro. ¡Qué asco me da su chaleco grasiento! Tengo que escapar de esta casa antes de ahogarme de pena.'»",
    markers: "Verbo introductorio ('pensó:'), comillas, pronombres en primera persona ('sufro', 'me da', 'tengo') e inmediatez afectiva sin mediación del narrador."
  },
  "narrated": {
    name: "3. Narrated Monologue / Estilo Indirecto Libre",
    voice: "Fusión íntima y polifónica: voz en 3.ª persona pero impregnada de la afectividad del personaje.",
    text: "«¡Qué hombre tan insoportable! ¿Cómo había podido atarse de por vida a un ser semejante? Charles masticaba la sopa con aquel ruido odioso de siempre. ¡Qué agonía! Rodolfo llegaría tarde o temprano a rescatarla; no cabía duda alguna de su amor.»",
    markers: "Supresión de verbos introductores ('pensó que'), mantenimiento de tiempos pasados ('había podido', 'masticaba', 'llegaría'), pero adopción de exclamaciones e interrogaciones propias del tormento de Emma."
  }
};

function initCohnComparator() {
  const container = document.getElementById('cohnWidget');
  if (!container) return;

  const buttons = container.querySelectorAll('.btn-cohn-opt');
  const titleEl = document.getElementById('cohnDisplayTitle');
  const voiceEl = document.getElementById('cohnDisplayVoice');
  const textEl = document.getElementById('cohnDisplayText');
  const markEl = document.getElementById('cohnDisplayMarkers');

  function renderCohn(key) {
    const data = COHN_MODES[key];
    if (!data) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cohn') === key);
    });

    if (titleEl) titleEl.textContent = data.name;
    if (voiceEl) voiceEl.innerHTML = `<strong>Enunciación:</strong> ${data.voice}`;
    if (textEl) textEl.textContent = data.text;
    if (markEl) markEl.innerHTML = `<strong>Rasgos estilísticos distintivos:</strong> ${data.markers}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderCohn(btn.getAttribute('data-cohn'));
    });
  });

  renderCohn('narrated');
}

// ============================================================================
// 12. GESTOR DE IDENTIFICACIÓN DEL ESTUDIANTE (MODAL & LOCALSTORAGE)
// ============================================================================

const STORAGE_KEYS = {
  NAME: 'el_arte_narrar_student_name',
  COURSE: 'el_arte_narrar_student_course'
};

let currentStudent = {
  name: 'Estudiante Anónimo',
  course: 'General'
};

function loadStudentProfile() {
  try {
    const savedName = localStorage.getItem(STORAGE_KEYS.NAME);
    const savedCourse = localStorage.getItem(STORAGE_KEYS.COURSE);
    if (savedName) currentStudent.name = savedName.trim();
    if (savedCourse) currentStudent.course = savedCourse.trim();
  } catch (err) {
    console.warn('[Storage] No se pudo leer de localStorage:', err);
  }
  updateStudentDisplay();
}

function saveStudentProfile(name, course) {
  currentStudent.name = (name && name.trim()) ? name.trim() : 'Estudiante';
  currentStudent.course = (course && course.trim()) ? course.trim() : 'General';
  try {
    localStorage.setItem(STORAGE_KEYS.NAME, currentStudent.name);
    localStorage.setItem(STORAGE_KEYS.COURSE, currentStudent.course);
  } catch (err) {
    console.warn('[Storage] No se pudo escribir en localStorage:', err);
  }
  updateStudentDisplay();
}

function updateStudentDisplay() {
  const displays = document.querySelectorAll('.student-current-name');
  displays.forEach(el => { el.textContent = currentStudent.name; });

  const courseDisplays = document.querySelectorAll('.student-current-course');
  courseDisplays.forEach(el => { el.textContent = currentStudent.course; });

  const avatarBadges = document.querySelectorAll('.student-avatar-badge');
  avatarBadges.forEach(badge => {
    badge.textContent = currentStudent.name.charAt(0).toUpperCase() || 'E';
  });
}

function openStudentModal() {
  const modal = document.getElementById('studentModalOverlay');
  if (!modal) return;

  const nameInp = document.getElementById('studentNameInput');
  const courseInp = document.getElementById('studentCourseInput');
  if (nameInp) nameInp.value = currentStudent.name === 'Estudiante Anónimo' ? '' : currentStudent.name;
  if (courseInp) courseInp.value = currentStudent.course;

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  if (nameInp) nameInp.focus();
}

function closeStudentModal() {
  const modal = document.getElementById('studentModalOverlay');
  if (modal) modal.classList.add('hidden');
  const termOverlay = document.getElementById('termModalOverlay');
  const lightbox = document.getElementById('lightbox');
  const hasOther = (termOverlay && !termOverlay.classList.contains('hidden')) ||
                   (lightbox && lightbox.classList.contains('active'));
  if (!hasOther) {
    document.body.classList.remove('modal-open');
  }
}

function initStudentProfile() {
  loadStudentProfile();

  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-edit-student, .btn-open-student-modal')) {
      e.preventDefault();
      openStudentModal();
      return;
    }

    const modal = document.getElementById('studentModalOverlay');
    if (modal && !modal.classList.contains('hidden')) {
      if (e.target === modal || e.target.closest('#studentModalClose') || e.target.closest('#studentModalCancel')) {
        closeStudentModal();
      }
    }
  });

  const form = document.getElementById('studentForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('studentNameInput')?.value;
      const course = document.getElementById('studentCourseInput')?.value;
      saveStudentProfile(name, course);
      closeStudentModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const modal = document.getElementById('studentModalOverlay');
      if (modal && !modal.classList.contains('hidden')) {
        closeStudentModal();
      }
    }
  });
}

// ============================================================================
// 13. GRAN RETO NARRATOLÓGICO: 10 DESAFÍOS CANÓNICOS (MÓDULO 12)
// ============================================================================

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzzyWnSxibdZzLLzqQGCHvE5wDxMUsdMykSykOp1DspFTqionKtBiCxkUOnZYWRrRHt/exec';

const QUIZ_QUESTIONS = [
  {
    author: "Gabriel García Márquez",
    work: "Crónica de una muerte anunciada (1981)",
    extract: "«El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo. Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna...»",
    question: "Desde la teoría narratológica de Gérard Genette y el Formalismo Ruso, ¿qué operación temporal y discursiva fundamental se ejecuta en esta primera cláusula?",
    options: [
      {
        text: "Una prolepsis discursiva que altera la fábula cronológica anunciando el desenlace fatal desde el primer renglón del sjuzet.",
        correct: true,
        feedback: "¡Exacto! García Márquez desarticula la fábula (orden cronológico) al colocar en el sjuzet (discurso estético) el anuncio futuro del homicidio mediante una prolepsis fulgurante."
      },
      {
        text: "Una analepsis externa que rememora la infancia remota de Santiago Nasar.",
        correct: false,
        feedback: "Incorrecto. El texto no retrocede en el tiempo respecto al inicio de la historia, sino que anticipa el asesinato que ocurrirá horas después (prolepsis)."
      },
      {
        text: "Una elipsis temporal absoluta que suprime toda la trama policial previa.",
        correct: false,
        feedback: "Incorrecto. No hay supresión de tiempo sin relato (elipsis); al contrario, el narrador adelanta explícitamente el destino trágico de la víctima."
      }
    ]
  },
  {
    author: "Juan Rulfo",
    work: "Pedro Páramo (1955)",
    extract: "«—¿Está usted muerto? —le pregunté. —Sí, hijo. Todos aquí estamos muertos... Me mataron de un tiro en la nuca, pero sigo escuchando el murmullo de la tierra y los quejidos de los que quedaron sin confesión.»",
    question: "¿Qué postulado de la narratología antinatural (Jan Alber, Brian Richardson) y de la diégesis ejemplifica este diálogo entre Juan Preciado y Dorotea?",
    options: [
      {
        text: "La presencia de narradores y actuantes posmórtem que transgreden las leyes físicas del mundo mimético y la biología humana.",
        correct: true,
        feedback: "¡Brillante! La narratología antinatural estudia precisamente relatos que desafían la cognición mimética realista situando conciencias que enuncian y sienten desde el sepulcro."
      },
      {
        text: "Una simple focalización externa donde el narrador desconoce si los personajes respiran o no.",
        correct: false,
        feedback: "Incorrecto. No es una limitación de cámara externa; es una transgresión ontológica donde los difuntos dialogan conscientemente bajo la cal."
      },
      {
        text: "Un relato iterativo que sintetiza las costumbres fúnebres cotidianas de México.",
        correct: false,
        feedback: "Incorrecto. La categoría de frecuencia iterativa no explica la naturaleza físicamente imposible de un narrador cadáver."
      }
    ]
  },
  {
    author: "Jorge Luis Borges",
    work: "El jardín de senderos que se bifurcan (1941)",
    extract: "«En todas las ficciones, cada vez que un hombre se enfrenta con diversas alternativas, opta por una y elimina las otras; en la del casi inextricable Ts'ui Pên, opta —simultáneamente— por todas. Crea, así, diversos porvenires, diversos tiempos que también proliferan y se bifurcan.»",
    question: "¿Qué categoría de la temporalidad del relato define esta coexistencia paradójica de líneas causales incompatibles?",
    options: [
      {
        text: "Acronía y anacronía no lineal: disolución del eje cronológico continuo en favor de una red temporal infinita y simultánea.",
        correct: true,
        feedback: "¡Correcto! Borges dinamita el tiempo vectorial newtoniano; los acontecimientos coexisten en una multiplicidad acrónica donde todos los futuros son actualizados a la vez."
      },
      {
        text: "Una pausa descriptiva que detiene el relato para explicar la geografía de China.",
        correct: false,
        feedback: "Incorrecto. No es una pausa descriptiva del espacio; es una formulación metafísica sobre la estructura ramificada del tiempo."
      },
      {
        text: "Un flashback lineal convencional que narra la juventud de Ts'ui Pên.",
        correct: false,
        feedback: "Incorrecto. No hay un simple salto retrospectivo, sino la superposición simultánea de realidades contradictorias."
      }
    ]
  },
  {
    author: "Albert Camus",
    work: "El extranjero (1942)",
    extract: "«El calor era tal que me resultaba difícil quedarme inmóvil sobre la arena. El resplandor del cielo era insostenible... Apreté la empuñadura del revólver... El gatillo cedió... y fue allí, en el ruido seco y ensordecedor, donde todo comenzó.»",
    question: "¿Cuál es el régimen perceptual y la voz enunciativa que gobiernan este crucial episodio del crimen en la playa?",
    options: [
      {
        text: "Narrador autodiégético bajo focalización interna fija (N = P): la causalidad del disparo se filtra exclusivamente por el agobio sensorial y térmico de Meursault.",
        correct: true,
        feedback: "¡Preciso! Meursault es el protagonista (autodiégesis) y el relato no se aparta un milímetro de su percepción sensorial claustrofóbica (focalización interna)."
      },
      {
        text: "Narrador heterodiégético con focalización cero (N > P) que juzga moralmente la culpabilidad del protagonista.",
        correct: false,
        feedback: "Incorrecto. No hay una voz exterior ni juicios de valor omniscientes; Meursault relata en primera persona su propia experiencia corporal."
      },
      {
        text: "Focalización externa pura (N < P) en la que el lector no tiene ningún acceso a las sensaciones fisiológicas del tirador.",
        correct: false,
        feedback: "Incorrecto. Al contrario: el lector experimenta en primer plano el sudor, la ceguera y la opresión física que siente Meursault."
      }
    ]
  },
  {
    author: "Gustave Flaubert",
    work: "Madame Bovary (1857)",
    extract: "«Emma miró el reloj sobre la chimenea. ¡Las cuatro ya! Y Rodolfo no llegaba. ¿La habría abandonado para siempre? ¡Dios mío, qué angustia intolerable! No, él la amaba con locura de fuego; tenía que esperar unos minutos más...»",
    question: "¿Qué técnica de representación de la conciencia formulada por Dorrit Cohn se manifiesta en este fragmento?",
    options: [
      {
        text: "Estilo Indirecto Libre (Narrated Monologue): fusión polifónica donde la 3.ª persona adopta la entonación afectiva y las dudas del personaje sin verbos de dicción introductores.",
        correct: true,
        feedback: "¡Extraordinario! Flaubert prescinde de 'ella pensó que' y utiliza los tiempos en pasado con la emotividad directa ('¡Las cuatro ya!', '¡Qué angustia!') típica del estilo indirecto libre."
      },
      {
        text: "Psycho-narration abstracta: el narrador explica de modo distante y científico la histeria de Emma.",
        correct: false,
        feedback: "Incorrecto. No es una explicación distante con léxico erudito del narrador; es la mente de Emma hablando a través de la tercera persona gramatical."
      },
      {
        text: "Monólogo citado directo con comillas y acotaciones teatrales.",
        correct: false,
        feedback: "Incorrecto. El texto no emplea comillas ni fórmulas de subordinación verbal directa."
      }
    ]
  },
  {
    author: "Virginia Woolf",
    work: "Orlando (1928)",
    extract: "«Y así transcurrieron cien años de historia británica: reinados cayeron, la bruma del Támesis envolvió nuevos carruajes y las hojas del roble cayeron cien veces sin alterar la juventud de Orlando.»",
    question: "En la tipología de velocidades o anisocronías de Gérard Genette, ¿qué movimiento rítmico se evidencia en esta condensación de un siglo en dos líneas?",
    options: [
      {
        text: "Sumario o Resumen (TR < TH): aceleración vertiginosa del compás narrativo donde un extenso periodo temporal se sintetiza en un breve espacio textual.",
        correct: true,
        feedback: "¡Acertado! El tiempo de la historia abarca un siglo (TH = 100 años) mientras que el tiempo del relato son apenas unas pocas líneas (TR muy reducido)."
      },
      {
        text: "Escena dramática (TR = TH) de estricta correspondencia temporal.",
        correct: false,
        feedback: "Incorrecto. La escena requeriría que el lector tardara cien años en leer el pasaje o que transcurriera en diálogo a tiempo real."
      },
      {
        text: "Pausa descriptiva (TR > 0, TH = 0) que congela el curso de la historia.",
        correct: false,
        feedback: "Incorrecto. El tiempo histórico no está congelado (TH = 0), sino que avanza cien años a velocidad fulgurante."
      }
    ]
  },
  {
    author: "Camilo José Cela",
    work: "La familia de Pascual Duarte (1942)",
    extract: "«Yo, señor, no soy malo, aunque no me faltarían motivos para serlo... Hay hombres a quienes se les ordena marchar por el camino de las flores, y hombres a quienes se les manda tirar por el camino de los cardos... La fatalidad nos persigue.»",
    question: "Según la desambiguación del narrador inconfiable de Greta Olson y los ejes retóricos de James Phelan, Pascual Duarte debe clasificarse como:",
    options: [
      {
        text: "Un narrador indigno de confianza (untrustworthy) que opera en el eje de los valores (misregarding), utilizando el determinismo como coartada retórica para autoexculpar sus crímenes.",
        correct: true,
        feedback: "¡Impecable! Pascual no es un niño inocente (falible); es un asesino confeso que manipula el juicio ético del destinatario presentándose como víctima del destino."
      },
      {
        text: "Un narrador falible (fallible) cuya distorsión obedece a inmadurez infantil o ignorancia involuntaria.",
        correct: false,
        feedback: "Incorrecto. Pascual calcula conscientemente su retórica de descargo ante un juez o destinatario eclesiástico; no sufre de ingenuidad infantil."
      },
      {
        text: "Un narrador omnisciente objetivo exento de cualquier sesgo valorativo.",
        correct: false,
        feedback: "Incorrecto. Es un narrador en primera persona (autodiégético) profundamente sesgado y motivado por su inminente ejecución."
      }
    ]
  },
  {
    author: "Edgar Allan Poe",
    work: "El corazón delator (1843)",
    extract: "«¡Es verdad! —siempre he sido muy nervioso... pero ¿por qué dicen que estoy loco? La enfermedad había agudizado mis sentidos... ¿Cómo puedo estar loco si puedo contarles con tanta calma y lucidez toda la historia? Escuchen y observen con cuánta cordura puedo relatarles todo el suceso...»",
    question: "¿Qué contradicción estructural entre enunciado y enunciación delata la inconfiabilidad del narrador de Poe?",
    options: [
      {
        text: "La vehemencia patológica con la que insiste en su lucidez racional desenmascara ante el lector su desvarío maníaco y su pérdida de contacto con la realidad.",
        correct: true,
        feedback: "¡Exacto! Se produce una fractura entre lo que el narrador afirma sobre sí mismo ('soy cuerdo y lúcido') y lo que sus obsesiones paranoicas revelan al lector."
      },
      {
        text: "La utilización de una focalización externa que impide conocer sus verdaderas intenciones.",
        correct: false,
        feedback: "Incorrecto. El narrador vuelca su intimidad psicológica de modo torrencial; no hay focalización externa neutral."
      },
      {
        text: "La sustitución del narrador protagonista por un testigo neutral en el juicio.",
        correct: false,
        feedback: "Incorrecto. Todo el relato es enunciado en primera persona por el propio asesino maníaco."
      }
    ]
  },
  {
    author: "Charles Dickens",
    work: "Cuento de Navidad (A Christmas Carol, 1843)",
    extract: "Ebenezer Scrooge, un prestamista avaro y solitario, es visitado por el espectro de Jacob Marley y tres espíritus de la Navidad para transformar su corazón mezquino y salvar de la muerte al pequeño Tiny Tim.",
    question: "En el Modelo Actancial de Greimas, ¿qué roles semióticos desempeñan Scrooge, los Espíritus y la Redención moral?",
    options: [
      {
        text: "Scrooge es el Sujeto; la Redención moral y la solidaridad son el Objeto del deseo; los Espíritus actúan como Destinadores y Ayudantes de la transformación.",
        correct: true,
        feedback: "¡Brillante aplicación greimasiana! Scrooge es el vector de acción (Sujeto) impulsado por los Espíritus (Destinadores/Ayudantes) para alcanzar la compasión humana (Objeto)."
      },
      {
        text: "Los Espíritus son los Oponentes directos que buscan aniquilar a Scrooge.",
        correct: false,
        feedback: "Incorrecto. Los espíritus no destruyen a Scrooge; su función es pedagógica y auxiliadora para salvar su alma (Ayudantes/Destinadores)."
      },
      {
        text: "Tiny Tim es el Sujeto activo que derrota físicamente al avaro prestamista.",
        correct: false,
        feedback: "Incorrecto. Tiny Tim es un Destinatario de la compasión y un catalizador emotivo, no el sujeto de la peripecia heroica."
      }
    ]
  },
  {
    author: "Carlos Fuentes",
    work: "Aura (1962)",
    extract: "«Lees ese anuncio: una oferta de esa naturaleza no se hace todos los días. Lees y relees el aviso. Parece dirigido a ti, a nadie más. Distraído, dejas que la ceniza del cigarro caiga en la taza de té... Empujas la puerta de madera y entras en la penumbra...»",
    question: "¿Qué efecto produce la voz narrativa en segunda persona gramatical ('tú') analizada por los teóricos de la narratología posclásica?",
    options: [
      {
        text: "Una interpelación desestabilizadora que proyecta al propio lector en la diégesis forzándolo a habitar una conciencia sonámbula e hipnótica.",
        correct: true,
        feedback: "¡Magistral! La segunda persona colapsa la distancia entre lector y personaje, obligando a quien lee a encarnar físicamente la identidad espectral de Felipe Montero."
      },
      {
        text: "Un monólogo citado directo donde el protagonista habla consigo mismo ante un espejo.",
        correct: false,
        feedback: "Incorrecto. No es una cita directa entrecomillada; es la matriz enunciativa rectora de toda la novela construida en segunda persona imperativa."
      },
      {
        text: "Una focalización cero omnisciente tradicional propia del realismo del siglo XIX.",
        correct: false,
        feedback: "Incorrecto. La segunda persona rompe deliberadamente con las convenciones miméticas del realismo decimonónico."
      }
    ]
  }
];

let quizState = {
  currentQuestionIndex: 0,
  score: 0,
  answered: false,
  userAnswers: []
};

function initQuiz() {
  const container = document.getElementById('final-quiz-container');
  const startBtn = document.getElementById('btnStartQuiz');
  if (!container || !startBtn) return;

  startBtn.addEventListener('click', () => {
    startQuiz();
  });
}

function startQuiz() {
  quizState.currentQuestionIndex = 0;
  quizState.score = 0;
  quizState.answered = false;
  quizState.userAnswers = [];

  const startCard = document.getElementById('quizStartCard');
  const quizArea = document.getElementById('quizActiveArea');
  const resultArea = document.getElementById('quizResultArea');

  if (startCard) startCard.style.display = 'none';
  if (resultArea) resultArea.style.display = 'none';
  if (quizArea) quizArea.style.display = 'block';

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  quizState.answered = false;
  const qArea = document.getElementById('quizActiveArea');
  if (!qArea) return;

  if (quizState.currentQuestionIndex >= QUIZ_QUESTIONS.length) {
    showQuizResults();
    return;
  }

  const q = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
  const qNum = quizState.currentQuestionIndex + 1;
  const totalQ = QUIZ_QUESTIONS.length;

  let optionsHTML = '';
  q.options.forEach((opt, idx) => {
    optionsHTML += `
      <button type="button" class="quiz-option-btn" data-option-idx="${idx}">
        <span class="opt-letter" style="width:24px; height:24px; border-radius:50%; background:#E2E8F0; display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700;">${String.fromCharCode(65 + idx)}</span>
        <span class="opt-text" style="flex-grow:1;">${opt.text}</span>
      </button>
    `;
  });

  qArea.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-author-badge" style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--text-soft); text-transform:uppercase;">
        Caso Canónico: ${q.author} — <em>${q.work}</em>
      </div>
      <span class="quiz-progress-badge">Desafío ${qNum} de ${totalQ}</span>
    </div>

    <div class="quiz-text-extract">
      ${q.extract}
    </div>

    <h3 class="quiz-question-text">
      ${q.question}
    </h3>

    <div class="quiz-options-list" id="quizOptionsContainer">
      ${optionsHTML}
    </div>

    <div id="quizFeedbackContainer" style="display:none;"></div>

    <div id="quizActionContainer" style="display:none; text-align:right;">
      <button type="button" class="btn-quiz-next" id="btnQuizNext">
        ${qNum === totalQ ? 'Finalizar y Calificar Reto ' : 'Siguiente Desafío →'}
      </button>
    </div>
  `;

  const optButtons = qArea.querySelectorAll('.quiz-option-btn');
  optButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-option-idx'), 10);
      handleOptionSelection(idx);
    });
  });

  const nextBtn = document.getElementById('btnQuizNext');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      quizState.currentQuestionIndex++;
      renderCurrentQuestion();
    });
  }
}

function handleOptionSelection(selectedIdx) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
  const selectedOpt = q.options[selectedIdx];
  const isCorrect = selectedOpt.correct === true;

  if (isCorrect) {
    quizState.score++;
  }

  quizState.userAnswers.push({
    questionIndex: quizState.currentQuestionIndex,
    selectedIndex: selectedIdx,
    correct: isCorrect
  });

  const optButtons = document.querySelectorAll('#quizOptionsContainer .quiz-option-btn');
  optButtons.forEach((btn, idx) => {
    btn.disabled = true;
    const opt = q.options[idx];
    if (opt.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  const feedbackContainer = document.getElementById('quizFeedbackContainer');
  if (feedbackContainer) {
    feedbackContainer.className = `quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackContainer.innerHTML = `
      <div style="font-weight:700; margin-bottom:4px;">${isCorrect ? 'CORRECTO — FUNDAMENTACIÓN FILOLÓGICA:' : '✕ Fundamentación Teórica:'}</div>
      <div>${selectedOpt.feedback}</div>
    `;
    feedbackContainer.style.display = 'block';
  }

  const actionContainer = document.getElementById('quizActionContainer');
  if (actionContainer) {
    actionContainer.style.display = 'block';
  }
}

function showQuizResults() {
  const qArea = document.getElementById('quizActiveArea');
  const resultArea = document.getElementById('quizResultArea');
  if (qArea) qArea.style.display = 'none';
  if (!resultArea) return;

  resultArea.style.display = 'block';

  const score = quizState.score;
  const total = QUIZ_QUESTIONS.length;
  const percentage = Math.round((score / total) * 100);

  let feedbackTitle = '';
  let feedbackBody = '';

  if (score >= 9) {
    feedbackTitle = '¡Excelencia Filológica y Narratológica!';
    feedbackBody = 'Dominas con absoluta precisión los modelos de Genette, Todorov, Greimas y las corrientes posclásicas. Eres capaz de desentrañar cualquier artificio discursivo en la literatura universal.';
  } else if (score >= 7) {
    feedbackTitle = '¡Sólido Dominio Analítico!';
    feedbackBody = 'Comprendes los conceptos fundamentales y distingues con acierto la voz de la focalización y las anisocronías. Con un repaso puntual en inconfiabilidad y modelos antinaturales alcanzarás la maestría.';
  } else if (score >= 5) {
    feedbackTitle = '¡Buen Esfuerzo Formativo!';
    feedbackBody = 'Reconoces las nociones nucleares, pero aún se filtran dudas entre las categorías formales (fábula vs. sjuzet) y los modos de conciencia. Te recomendamos revisar las fichas del glosario didáctico.';
  } else {
    feedbackTitle = 'Camino de Aprendizaje en Marcha';
    feedbackBody = 'La teoría narratológica superior exige rigor y desmontaje analítico. Explora nuevamente la Ruta II con sus simuladores interactivos antes de reintentar el Gran Reto.';
  }

  resultArea.innerHTML = `
    <div class="quiz-result-card">
      <div class="quiz-progress-badge" style="margin-bottom:12px;">Calificación Final Certificada</div>
      <h3 style="font-family:var(--font-title); font-size:1.8rem; color:var(--deep-blue); margin-bottom:6px;">${feedbackTitle}</h3>
      <div class="student-info-display" style="justify-content:center; margin-bottom:12px;">
        <span class="student-avatar-badge">${currentStudent.name.charAt(0).toUpperCase()}</span>
        <span><strong>${currentStudent.name}</strong> · ${currentStudent.course}</span>
      </div>
      
      <div class="score-badge-huge">${score} / ${total}</div>
      <p style="font-size:1.05rem; font-weight:600; color:var(--text-soft); margin-bottom:18px;">Rendimiento Teórico: ${percentage}%</p>
      
      <p style="max-width:620px; margin:0 auto 24px auto; font-size:0.98rem; line-height:1.6; color:#1E293B;">
        ${feedbackBody}
      </p>

      <div id="sheetsStatusContainer">
        <div class="status-msg sending" id="sheetsStatusMsg">Enviando nota al registro académico institucional...</div>
      </div>

      <div style="margin-top:24px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <button type="button" class="btn-primary" id="btnRestartQuiz">Reintentar Gran Reto </button>
        <button type="button" class="btn-secondary" id="btnChangeStudentAfterQuiz">Cambiar Estudiante </button>
      </div>
    </div>
  `;

  submitToGoogleSheets(score);

  const restartBtn = document.getElementById('btnRestartQuiz');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      startQuiz();
    });
  }

  const changeStudentBtn = document.getElementById('btnChangeStudentAfterQuiz');
  if (changeStudentBtn) {
    changeStudentBtn.addEventListener('click', () => {
      openStudentModal();
    });
  }
}

function submitToGoogleSheets(score) {
  const statusEl = document.getElementById('sheetsStatusMsg');
  if (!statusEl) return;

  if (!SHEETS_URL || SHEETS_URL.includes('PEGAR_URL_AQUI')) {
    statusEl.className = 'status-msg error';
    statusEl.textContent = 'El enlace de registro a Google Sheets no está configurado.';
    return;
  }

  const payload = {
    nombre: currentStudent.name,
    curso: currentStudent.course,
    nota: score,
    total: QUIZ_QUESTIONS.length,
    modulo: 'El Arte de Narrar — Gran Reto Final',
    fecha: new Date().toISOString()
  };

  fetch(SHEETS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  })
    .then(() => {
      statusEl.className = 'status-msg success';
      statusEl.innerHTML = '✓ ¡Calificación registrada exitosamente en Google Sheets!';
    })
    .catch((err) => {
      console.warn('[Sheets] Error en envío asíncrono:', err);
      statusEl.className = 'status-msg error';
      statusEl.innerHTML = '⚠ No se pudo conectar con el registro central. Por favor informa a tu docente.';
    });
}

// ============================================================================
// 14. EXPOSICIÓN GLOBAL Y AUTO-INICIALIZACIÓN
// ============================================================================

const AppNarracion = {
  GLOSSARY_TERMS,
  openTermModal,
  closeTermModal,
  initTermGlossary,
  openLightbox,
  closeLightbox,
  initLightbox,
  setRoute,
  switchTab,
  initNavigation,
  initVoiceSwitcher,
  initTensionCurve,
  initLensSimulator,
  initUnreliableLab,
  initActantialBoard,
  initSpeedometer,
  initCohnComparator,
  initStudentProfile,
  openStudentModal,
  closeStudentModal,
  saveStudentProfile,
  loadStudentProfile,
  QUIZ_QUESTIONS,
  initQuiz,
  startQuiz,
  submitToGoogleSheets
};

if (typeof globalThis !== 'undefined') {
  globalThis.AppNarracion = AppNarracion;
  globalThis.GLOSSARY_TERMS = GLOSSARY_TERMS;
  globalThis.openTermModal = openTermModal;
  globalThis.closeTermModal = closeTermModal;
  globalThis.setRoute = setRoute;
  globalThis.switchTab = switchTab;
}

if (typeof window !== 'undefined') {
  window.AppNarracion = AppNarracion;
  window.GLOSSARY_TERMS = GLOSSARY_TERMS;
  window.openTermModal = openTermModal;
  window.closeTermModal = closeTermModal;
  window.setRoute = setRoute;
  window.switchTab = switchTab;
}

if (typeof document !== 'undefined') {
  function bootAll() {
    initTermGlossary();
    initLightbox();
    initNavigation();
    initVoiceSwitcher();
    initTensionCurve();
    initLensSimulator();
    initUnreliableLab();
    initActantialBoard();
    initSpeedometer();
    initCohnComparator();
    initStudentProfile();
    initQuiz();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootAll);
  } else {
    bootAll();
  }
}
