// Timeline Configuration - GLOBAL SCALE
const TIMELINE_START_YEAR = 1500;
const TIMELINE_END_YEAR = 2025;
const TIMELINE_RANGE = TIMELINE_END_YEAR - TIMELINE_START_YEAR;

// Timeline Data
const literatureEvents = [
  // Colonial Period
  { year: 1534, title: "Conquista Española", description: "Inicio de la literatura colonial. Llegada de los conquistadores españoles marca el comienzo de la escritura europea en territorio ecuatoriano.", category: "colonial", color: "#8B4513", period: "Colonial (1534-1809)", details: "Los primeros textos coloniales incluyen crónicas de conquista, documentos administrativos y primeros intentos de evangelización. La literatura se caracteriza por ser principalmente funcional y religiosa." },
  { year: 1563, title: "Real Audiencia de Quito", description: "Fundación de la Real Audiencia. Inicio de la literatura barroca colonial con un enfoque religioso y administrativo.", category: "colonial", color: "#8B4513", period: "Colonial (1534-1809)", details: "La creación de instituciones coloniales fomenta el desarrollo de una élite letrada. Surge producción literaria asociada a conventos y universidades." },
  { year: 1747, title: "Eugenio Espejo (nace)", description: "Nacimiento de Eugenio Espejo, precursor intelectual, médico y escritor. Padre de la ilustración ecuatoriana.", category: "colonial", color: "#8B4513", period: "Colonial (1534-1809)", details: "Eugenio Espejo (1747-1795) es considerado el primer gran pensador ecuatoriano. Sus obras incluyen 'El Nuevo Luciano de Quito' y el periódico 'Primicias de la Cultura de Quito'. Combatió la ignorancia y propuso reformas educativas y sociales." },
  { year: 1792, title: "'El Nuevo Luciano de Quito'", description: "Eugenio Espejo publica 'El Nuevo Luciano de Quito', sátira ilustrada que critica la sociedad colonial.", category: "colonial", color: "#8B4513", period: "Colonial (1534-1809)", details: "Obra maestra de Espejo que usa diálogo satírico para criticar ignorancia, superstición y abusos coloniales. Inspirada en Luciano de Samósata. Texto fundacional del pensamiento crítico ecuatoriano." },
  { year: 1792, title: "'Primicias de la Cultura de Quito'", description: "Se publica el primer periódico ecuatoriano, editado por Eugenio Espejo.", category: "colonial", color: "#8B4513", period: "Colonial (1534-1809)", details: "Primer periódico del Ecuador. Solo tuvo 7 números antes de ser censurado. Promovía educación, ciencia y reforma social. Marca inicio del periodismo ecuatoriano." },
  
  // Independence & Romanticism
  { year: 1780, title: "José Joaquín de Olmedo (nace)", description: "Nacimiento del poeta épico de la independencia, figura clave del romanticismo hispanoamericano.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Olmedo será el poeta oficial de las guerras de independencia, amigo de Simón Bolívar y figura política importante." },
  { year: 1825, title: "'La Victoria de Junín'", description: "José Joaquín de Olmedo publica su obra maestra: 'La victoria de Junín: Canto a Bolívar', poesía épica que celebra la independencia.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Considerada la obra cumbre de la poesía épica hispanoamericana de la época. Fusiona elementos clásicos con el fervor independentista. Bolívar mismo alabó esta obra." },
  { year: 1832, title: "Nacen Montalvo y Mera", description: "Nacimiento de Juan Montalvo y Juan León Mera, dos de los escritores más importantes del Ecuador.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Ambos autores marcarán la literatura ecuatoriana del siglo XIX, aunque con perspectivas ideológicas opuestas (liberal vs conservador)." },
  { year: 1832, title: "Numa Pompilio Llona (nace)", description: "Nacimiento de Numa Pompilio Llona, poeta romántico guayaquileño de estilo elegante y cosmopolita.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Poeta refinado que vivió en varios países. Su poesía es lírica, con temas amorosos y patrióticos. Representante del romanticismo ecuatoriano más cosmopolita." },
  { year: 1847, title: "Muerte de José Joaquín de Olmedo", description: "Fallece José Joaquín de Olmedo (1780-1847), el poeta épico de la independencia.", category: "romanticismo", color: "#9B7653", period: "Romanticismo (1809-1895)", details: "Muere en Guayaquil el autor de 'La Victoria de Junín'. Dejó un legado fundamental para la poesía hispanoamericana del siglo XIX." },
  { year: 1853, title: "Remigio Crespo Toral (nace)", description: "Nacimiento de Remigio Crespo Toral, poeta cuencano, autor del Himno a Cuenca.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Poeta lírico de gran sensibilidad. Su 'Himno a Cuenca' es uno de los textos más queridos de la ciudad. Representa el romanticismo de la sierra ecuatoriana." },
  { year: 1857, title: "Suicidio de Dolores Veintimilla", description: "Dolores Veintimilla de Galindo (1829-1857) se suicida. Poeta romántica, autora de 'Quejas'. Primera voz femenina importante.", category: "romanticismo", color: "#9B7653", period: "Romanticismo (1809-1895)", details: "Su poesía refleja dolor, rebeldía y crítica social. Perseguida por escribir poesía que cuestionaba normas sociales. Su muerte trágica la convirtió en símbolo de la lucha de las mujeres por expresión artística en una sociedad conservadora." },
  { year: 1863, title: "'La Emancipada'", description: "Miguel Riofrío publica 'La Emancipada', considerada la primera novela ecuatoriana.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Novela fundacional que aborda temas de emancipación femenina y crítica social. Marca el inicio de la narrativa ecuatoriana como género literario establecido." },
  { year: 1865, title: "Luis A. Martínez (nace)", description: "Nacimiento de Luis A. Martínez, novelista, pintor y pensador liberal.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Figura polifacética: escritor, pintor, político. Su novela 'A la Costa' (1904) marca transición del romanticismo al realismo en Ecuador." },
  { year: 1879, title: "'Cumandá'", description: "Juan León Mera publica 'Cumandá', novela fundacional del romanticismo ecuatoriano, ambientada en la Amazonía.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Historia de amor trágico entre indígenas y blancos. Combina exotismo amazónico con idealización indigenista. Es la novela ecuatoriana más conocida internacionalmente del siglo XIX. Mera también escribió la letra del Himno Nacional." },
  { year: 1882, title: "'Las Catilinarias'", description: "Juan Montalvo publica 'Las Catilinarias', ensayos políticos contra la dictadura de García Moreno.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Obra maestra del ensayo político latinoamericano. Montalvo, liberal radical, combatió el autoritarismo conservador con prosa brillante. Célebre su frase: 'Mi pluma lo mató' (sobre García Moreno)." },
  { year: 1894, title: "Muerte de Juan León Mera", description: "Fallece Juan León Mera (1832-1894), autor de 'Cumandá' y la letra del Himno Nacional.", category: "romanticismo", color: "#9B7653", period: "Romanticismo (1809-1895)", details: "Muere en Ambato el escritor conservador más importante del Ecuador. Dejó un legado que incluye la novela fundacional 'Cumandá' y el Himno Nacional del Ecuador." },
  { year: 1904, title: "'A la Costa'", description: "Luis A. Martínez publica 'A la Costa', novela sobre migración de sierra a costa.", category: "romanticismo", color: "#C41E3A", period: "Romanticismo (1809-1895)", details: "Novela que retrata la migración de serranos hacia la costa en busca de oportunidades. Marca transición hacia el realismo. Crítica social y descripción de contrastes regionales." },
  { year: 1909, title: "Muerte de Numa Pompilio Llona", description: "Fallece Numa Pompilio Llona (1832-1909), poeta romántico guayaquileño.", category: "romanticismo", color: "#9B7653", period: "Romanticismo (1809-1895)", details: "Muere en París el poeta cosmopolita ecuatoriano. Vivió en Europa gran parte de su vida. Representa el romanticismo refinado y europeizado." },
  { year: 1933, title: "Muerte de Remigio Crespo Toral", description: "Fallece Remigio Crespo Toral (1853-1933), poeta cuencano, autor del Himno a Cuenca.", category: "romanticismo", color: "#9B7653", period: "Romanticismo (1809-1895)", details: "Muere a los 80 años el último gran poeta romántico ecuatoriano. Su obra lírica y patriótica sigue siendo valorada, especialmente en Cuenca." },
  
  // Modernismo & Generación Decapitada
  { year: 1890, title: "Generación Decapitada (inicio)", description: "Surge la Generación Decapitada (1890-1929), movimiento modernista marcado por la tragedia.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Grupo de cuatro poetas que renovaron la poesía ecuatoriana: Arturo Borja, Ernesto Noboa y Caamaño, Medardo Ángel Silva y Humberto Fierro. Todos murieron jóvenes (suicidio, enfermedad). Influenciados por simbolismo francés, escribieron sobre melancolía, muerte y belleza decadente." },
  { year: 1890, title: "Humberto Fierro (nace)", description: "Nacimiento de Humberto Fierro, poeta modernista de la Generación Decapitada.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "El más festivo de la Generación Decapitada, combinaba melancolía con sensualidad. Su muerte en 1929 cerró el capítulo del grupo." },
  { year: 1897, title: "Hugo Mayo (nace)", description: "Nacimiento de Hugo Mayo (1897-1988), poeta modernista de larga trayectoria.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Poeta modernista que evolucionó hacia formas más vanguardistas. Vivió hasta edad muy avanzada, siendo testigo de múltiples generaciones literarias." },
  { year: 1904, title: "Alfredo Gangotena (nace)", description: "Nacimiento de Alfredo Gangotena, poeta ecuatoriano que escribió principalmente en francés.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Poeta aristocrático vinculado a vanguardias europeas. Amigo de Henri Michaux. Su poesía en francés fue muy valorada en Europa pero poco conocida en Ecuador durante su vida." },
  { year: 1912, title: "Arturo Borja (muere por suicidio)", description: "Muerte de Arturo Borja (1892-1912), poeta modernista, primer miembro de la Generación Decapitada en fallecer.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Se suicidó con sobredosis de morfina a los 20 años. Su poesía, publicada póstumamente, refleja angustia existencial y búsqueda de la belleza absoluta." },
  { year: 1919, title: "Medardo Ángel Silva (muere por suicidio)", description: "Muerte de Medardo Ángel Silva (1898-1919), poeta bohemio, autor de 'El alma en los labios'.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Asesinado a los 21 años en circunstancias misteriosas (posible suicidio). Su poema 'El alma en los labios' es uno de los más populares de la literatura ecuatoriana. Representó la bohemia literaria de Guayaquil." },
  { year: 1927, title: "Ernesto Noboa (muerte)", description: "Muerte de Ernesto Noboa y Caamaño (1891-1927), poeta aristocrático de refinamiento extremo.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Murió de tuberculosis. Su poesía es la más hermética y simbolista de la Generación Decapitada, con referencias cultas y tono melancólico." },
  { year: 1929, title: "Humberto Fierro (muerte)", description: "Muerte de Humberto Fierro (1890-1929), último de la Generación Decapitada en fallecer.", category: "modernismo", color: "#9370DB", period: "Modernismo (1890-1920)", details: "Murió de apoplejía. Su muerte cierra el capítulo de la Generación Decapitada. Fierro era el más festivo del grupo, combinando melancolía con sensualidad." },
  
  // Vanguardia
  { year: 1926, title: "'Microgramas'", description: "Jorge Carrera Andrade publica 'Microgramas', poemas breves de vanguardia e imágenes precisas.", category: "vanguardia", color: "#FF6347", period: "Vanguardia (1920-1940)", details: "Carrera Andrade (1903-1978) introduce técnicas vanguardistas en Ecuador. Sus 'microgramas' son poemas-destello, imágenes concentradas. Diplomático y viajero, su poesía combina lo local con lo universal." },
  { year: 1927, title: "'Un hombre muerto a puntapiés' (Pablo Palacio)", description: "Pablo Palacio publica su relato vanguardista, renovación radical de la narrativa ecuatoriana.", category: "vanguardia", color: "#FF6347", period: "Vanguardia (1920-1940)", details: "Palacio (1906-1947) revoluciona la narrativa con técnicas experimentales: monólogo interior, fragmentación, absurdo. Su obra adelantada a su época explora la locura, marginalidad y límites del lenguaje." },
  { year: 1930, title: "Alfredo Gangotena", description: "Alfredo Gangotena (1904-1944), poeta ecuatoriano que escribió en francés, vinculado a vanguardias europeas.", category: "vanguardia", color: "#FF6347", period: "Vanguardia (1920-1940)", details: "Poeta aristocrático que vivió principalmente en Francia. Amigo de Henri Michaux y ligado al surrealismo. Su poesía en francés fue muy valorada en Europa, pero poco conocida en Ecuador durante su vida." },
  
  // Realismo Social e Indigenismo
  { year: 1910, title: "Nelson Estupiñán Bass (nace)", description: "Nacimiento de Nelson Estupiñán Bass, pionero de la literatura afroecuatoriana.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Escritor esmeraldeño que retrató la vida afroecuatoriana. Obras incluyen 'Cuando los guayacanes florecían'. Voz fundamental de la identidad afrodescendiente en Ecuador." },
  { year: 1915, title: "Ángel Felicísimo Rojas (nace)", description: "Nacimiento de Ángel Felicísimo Rojas, narrador del realismo social.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Autor de 'El éxodo de Yangana' y otras obras sobre la vida rural ecuatoriana. Representante del indigenismo y realismo social de mediados de siglo." },
  { year: 1930, title: "'Los que se van' (cuentos del cholo y del montuvio)", description: "Publicación de 'Los que se van', colección de relatos del Grupo de Guayaquil, inicio del realismo social.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Demetrio Aguilera Malta, Joaquín Gallegos Lara y Enrique Gil Gilbert publican esta colección sobre campesinos costeños. Marca el nacimiento del realismo social ecuatoriano, con denuncia de injusticias y lenguaje regional." },
  { year: 1934, title: "'Huasipungo' (Jorge Icaza)", description: "Jorge Icaza publica 'Huasipungo', novela cumbre del indigenismo ecuatoriano.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Denuncia brutal de la explotación indígena. Narra la construcción de una carretera y el despojo de tierras a comunidades. Lenguaje crudo y realista. Una de las novelas ecuatorianas más traducidas y estudiadas internacionalmente." },
  // José de la Cuadra (1903-1941)
  { year: 1903, title: "José de la Cuadra (nace)", description: "Nacimiento de José de la Cuadra, narrador del realismo social montuvio.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Uno de los grandes narradores ecuatorianos. Retratará la vida montuvia (campesinos costeños) con maestría literaria. Miembro fundador del Grupo de Guayaquil junto a Gallegos Lara y Aguilera Malta." },
  { year: 1932, title: "'Horno' (José de la Cuadra)", description: "José de la Cuadra publica 'Horno', libro de cuentos sobre la costa ecuatoriana.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Primera colección de cuentos de De la Cuadra. Retrata el mundo montuvio con realismo y fuerza narrativa. Establece su estilo literario característico: crudo pero poético." },
  { year: 1933, title: "'Repisas' (José de la Cuadra)", description: "José de la Cuadra publica 'Repisas', colección de cuentos.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Segunda colección de cuentos que consolida su maestría narrativa. Continúa explorando el universo montuvio con profundidad psicológica y social." },
  { year: 1934, title: "'Los Sangurimas' (José de la Cuadra)", description: "José de la Cuadra publica 'Los Sangurimas', novela montuvia considerada su obra maestra.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela montuvia que narra la saga de una familia de la costa ecuatoriana. Considerada antecedente de la novela total latinoamericana por su complejidad narrativa, polifonía y estructura carnavalesca. Anticipa técnicas del boom latinoamericano. Retrata la violencia, pasión y códigos de honor del montuvio costeño." },
  { year: 1937, title: "'Guasinton' (José de la Cuadra)", description: "José de la Cuadra publica 'Guasinton', cuentos montuvios.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Colección de cuentos que profundiza en el mundo montuvio. Muestra la madurez literaria de De la Cuadra. Personajes complejos y situaciones que revelan la psicología campesina costeña." },
  { year: 1941, title: "José de la Cuadra (muere)", description: "Fallece José de la Cuadra (1903-1941), uno de los grandes del realismo social ecuatoriano.", category: "realismo", color: "#9B7653", period: "Realismo Social (1930-1950)", details: "Muere prematuramente a los 38 años. Dejó una obra narrativa fundamental para la literatura ecuatoriana. Su estilo literario era más refinado que el de otros realistas sociales, combinando denuncia con calidad estética." },
  
  // Alfredo Pareja Diezcanseco (1907-1993) - AUTOR FALTANTE
  { year: 1907, title: "Alfredo Pareja Diezcanseco (nace)", description: "Nacimiento de Alfredo Pareja Diezcanseco, narrador fundamental del realismo social.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Uno de los grandes narradores ecuatorianos del siglo XX. Parte del Grupo de Guayaquil. Su obra abarcará novela, ensayo y crítica literaria. Será también historiador y diplomático." },
  { year: 1933, title: "'El muelle' (Alfredo Pareja Diezcanseco)", description: "Alfredo Pareja Diezcanseco publica 'El muelle', novela sobre el puerto de Guayaquil.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Primera novela de Pareja Diezcanseco. Retrata la vida portuaria de Guayaquil con sus trabajadores, marginales y explotación laboral. Establece su compromiso con el realismo social." },
  { year: 1933, title: "'Yunga' (Enrique Gil Gilbert)", description: "Enrique Gil Gilbert publica 'Yunga', relatos sobre la costa ecuatoriana.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Colección de relatos que muestran la maestría narrativa de Gil Gilbert. Retrata el mundo rural costeño con compromiso social y calidad literaria." },
  { year: 1933, title: "'Don Goyo' (Demetrio Aguilera Malta)", description: "Demetrio Aguilera Malta publica 'Don Goyo', novela sobre montuvios.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela montuvia que retrata la vida de los campesinos costeños. Don Goyo es un personaje mítico que representa la sabiduría y resistencia del pueblo montuvio. Aguilera Malta combina realismo con elementos míticos." },
  { year: 1935, title: "'En las calles' (Jorge Icaza)", description: "Jorge Icaza publica 'En las calles', novela urbana sobre levantamiento popular.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela que retrata un levantamiento en Quito con perspectiva social. Icaza expande su temática del mundo indígena rural al mundo urbano y sus conflictos de clase." },
  { year: 1935, title: "'Baldomera' (Alfredo Pareja Diezcanseco)", description: "Alfredo Pareja Diezcanseco publica 'Baldomera', novela con protagonista afroecuatoriana.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela protagonizada por una mujer afroecuatoriana. Pionera en dar voz a personajes afrodescendientes. Rompe estereotipos y presenta personaje femenino afroecuatoriano con profundidad psicológica. Una de las obras más importantes de Pareja Diezcanseco." },
  { year: 1935, title: "'La isla virgen' (Demetrio Aguilera Malta)", description: "Demetrio Aguilera Malta publica 'La isla virgen', novela.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela que continúa la exploración del mundo costeño e insular ecuatoriano. Aguilera Malta muestra la vida en las islas del Golfo de Guayaquil con realismo y sensibilidad poética." },
  { year: 1935, title: "'Canal Zone' (Demetrio Aguilera Malta)", description: "Demetrio Aguilera Malta publica 'Canal Zone', novela sobre el Canal de Panamá.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela sobre los trabajadores ecuatorianos en la construcción del Canal de Panamá. Denuncia la explotación de trabajadores latinoamericanos por parte del imperialismo estadounidense. Perspectiva internacional del realismo social." },
  { year: 1937, title: "'Cholos' (Jorge Icaza)", description: "Jorge Icaza publica 'Cholos', novela sobre mestizos y estratificación social.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Explora la situación de los mestizos en la sociedad ecuatoriana. Denuncia racismo y explotación en diferentes niveles de la estratificación social." },
  { year: 1938, title: "'Hombres sin tiempo' (Alfredo Pareja Diezcanseco)", description: "Alfredo Pareja Diezcanseco publica 'Hombres sin tiempo', novela.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela que explora la condición humana en contextos de explotación y marginalidad. Pareja Diezcanseco consolida su estilo narrativo combinando denuncia social con reflexión filosófica." },
  { year: 1942, title: "'Nuestro Pan' (Enrique Gil Gilbert)", description: "Enrique Gil Gilbert publica 'Nuestro Pan', novela sobre trabajadores arroceros.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela sobre trabajadores arroceros de la costa. Denuncia la explotación laboral y condiciones inhumanas en haciendas arroceras. Una de las mejores novelas del realismo social ecuatoriano. Combina protesta social con calidad literaria." },
  { year: 1943, title: "'Juyungo' (Adalberto Ortiz)", description: "Adalberto Ortiz publica 'Juyungo', novela pionera de la literatura afroecuatoriana.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Primera gran novela sobre la experiencia afroecuatoriana en Esmeraldas. Combina denuncia social con elementos culturales afros. Ortiz también fue poeta y artista plástico." },
  { year: 1944, title: "'Las tres ratas' (Alfredo Pareja Diezcanseco)", description: "Alfredo Pareja Diezcanseco publica 'Las tres ratas', novela.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela que continúa la exploración de temas sociales y políticos. Pareja Diezcanseco muestra su madurez como narrador del realismo social ecuatoriano." },
  { year: 1946, title: "'Las cruces sobre el agua' (Joaquín Gallegos Lara)", description: "Publicación póstuma de 'Las cruces sobre el agua' de Joaquín Gallegos Lara.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Novela póstuma sobre la Masacre de Trabajadores de 1922 en Guayaquil. Gallegos Lara (1909-1947) fue cofundador del Grupo de Guayaquil. Su novela reconstruye uno de los episodios más trágicos de la historia obrera ecuatoriana. Militante comunista comprometido con causas sociales." },
  { year: 1947, title: "Joaquín Gallegos Lara (muere)", description: "Fallece Joaquín Gallegos Lara (1909-1947), cofundador del Grupo de Guayaquil.", category: "realismo", color: "#9B7653", period: "Realismo Social (1930-1950)", details: "Muere el autor de 'Las cruces sobre el agua' y coautor de 'Los que se van'. Dejó una obra fundamental para el realismo social ecuatoriano. Militante comunista que vivió comprometido con las luchas obreras." },
  { year: 1948, title: "'Huairapamushcas' (Jorge Icaza)", description: "Jorge Icaza publica 'Huairapamushcas', novela sobre migración indígena.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "El título significa 'hijos del viento' en quichua. Narra la migración de indígenas desde comunidades rurales hacia Quito. Icaza explora la desintegración cultural y explotación urbana." },
  { year: 1952, title: "'Seis relatos' (Jorge Icaza)", description: "Jorge Icaza publica 'Seis relatos', colección de cuentos.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Colección de cuentos que muestra la versatilidad narrativa de Icaza. Continúa explorando temas de injusticia social, explotación indígena y conflictos de clase en Ecuador." },
  { year: 1993, title: "Alfredo Pareja Diezcanseco (muere)", description: "Fallece Alfredo Pareja Diezcanseco (1907-1993), gran narrador del realismo social.", category: "realismo", color: "#9B7653", period: "Realismo Social (1930-1950)", details: "Muere a los 86 años uno de los grandes escritores ecuatorianos del siglo XX. Dejó un legado de novelas, ensayos e historia literaria. Testigo de casi todo el siglo XX ecuatoriano." },
  { year: 1909, title: "Joaquín Gallegos Lara (nace)", description: "Nacimiento de Joaquín Gallegos Lara, cofundador del Grupo de Guayaquil.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Escritor y militante comunista que será uno de los fundadores del realismo social ecuatoriano. Coautor de 'Los que se van' (1930) y autor de 'Las cruces sobre el agua'." },
  { year: 1909, title: "Demetrio Aguilera Malta (nace)", description: "Nacimiento de Demetrio Aguilera Malta, narrador del Grupo de Guayaquil.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Será uno de los fundadores del Grupo de Guayaquil. Su obra combinará realismo social con elementos míticos. También dramaturgo y diplomático." },
  { year: 1912, title: "Enrique Gil Gilbert (nace)", description: "Nacimiento de Enrique Gil Gilbert, narrador del Grupo de Guayaquil.", category: "realismo", color: "#CD5C5C", period: "Realismo Social (1930-1950)", details: "Será uno de los fundadores del Grupo de Guayaquil y autor de 'Nuestro Pan'. Militante comunista comprometido con las luchas sociales." },
  { year: 1973, title: "Muerte de Enrique Gil Gilbert", description: "Fallece Enrique Gil Gilbert (1912-1973), miembro del Grupo de Guayaquil.", category: "realismo", color: "#9B7653", period: "Realismo Social (1930-1950)", details: "Muere uno de los fundadores del realismo social ecuatoriano. Autor de 'Nuestro Pan' (1942) y coautor de 'Los que se van'. Militante comunista comprometido con causas sociales." },
  { year: 2003, title: "Muerte de Adalberto Ortiz", description: "Fallece Adalberto Ortiz (1914-2003), pionero de la literatura afroecuatoriana.", category: "realismo", color: "#9B7653", period: "Realismo Social (1930-1950)", details: "Muere el autor de 'Juyungo'. Dejó un legado fundamental para la literatura afroecuatoriana y el reconocimiento de la identidad afrodescendiente en Ecuador." },
  { year: 2009, title: "Muerte de Nelson Estupiñán Bass", description: "Fallece Nelson Estupiñán Bass (1910-2009), escritor afroecuatoriano.", category: "realismo", color: "#9B7653", period: "Realismo Social (1930-1950)", details: "Muere a los 98 años el gran narrador de la experiencia afroecuatoriana. Su obra abarcó novela, poesía y ensayo. Testigo de casi todo el siglo XX ecuatoriano." },
  
  // Mediados Siglo XX
  { year: 1930, title: "Iván Égüez (nace)", description: "Nacimiento de Iván Égüez, narrador de la generación de mediados de siglo.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Autor de 'La Linares' y otras novelas. Representa la transición del realismo social hacia formas narrativas más complejas y urbanas." },
  { year: 1933, title: "Miguel Donoso Pareja (nace)", description: "Nacimiento de Miguel Donoso Pareja, narrador y ensayista.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Autor prolífico que renovó la narrativa ecuatoriana. Obras incluyen 'El viejo luchador' (2000). También importante crítico literario e historiador de la literatura ecuatoriana." },
  { year: 1935, title: "Euler Granda (nace)", description: "Nacimiento de Euler Granda (1935-2018), poeta guayaquileño.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Poeta lírico de gran sensibilidad. Su obra se caracteriza por lenguaje musical y temas existenciales. Una de las voces poéticas más refinadas del Ecuador contemporáneo." },
  { year: 1940, title: "Raúl Pérez Torres (nace)", description: "Nacimiento de Raúl Pérez Torres, poeta y narrador experimental.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Escritor que experimentó con formas vanguardistas. Su obra combina poesía, narrativa y reflexión sobre el lenguaje. Figura importante de la renovación literaria ecuatoriana." },
  { year: 1945, title: "Juan Andrade Heymann (nace)", description: "Nacimiento de Juan Andrade Heymann, poeta y narrador cuencano.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Autor de 'Ciudad sin Ángel' (1987) y poesía experimental. Representa la renovación de las letras cuencanas con perspectiva urbana y moderna." },
  { year: 1950, title: "Javier Vásconez (nace)", description: "Nacimiento de Javier Vásconez, uno de los narradores ecuatorianos contemporáneos más importantes.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Autor de 'El viajero de Praga', 'Sueños de lobos'. Su narrativa se caracteriza por atmósferas densas, personajes marginales y exploración de la memoria. Reconocimiento internacional." },
  { year: 1952, title: "'Nuestro Pan'", description: "Enrique Gil Gilbert publica 'Nuestro Pan', novela sobre trabajadores arroceros.", category: "sigloxx", color: "#4682B4", period: "Realismo Social (1930-1950)", details: "Novela sobre la vida de trabajadores del arroz en la costa. Combina realismo social con técnicas narrativas más elaboradas. Gil Gilbert evoluciona su estilo manteniendo compromiso social." },
  { year: 1955, title: "Eliécer Cárdenas (nace)", description: "Nacimiento de Eliécer Cárdenas, narrador azuayo de la literatura urbana.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Autor de 'Polvo y ceniza', 'El rincón de los justos'. Su narrativa retrata Cuenca con realismo y profundidad psicológica. Ha sido profesor universitario y editor." },
  { year: 1958, title: "Huilo Ruales Hualca (nace)", description: "Nacimiento de Huilo Ruales Hualca, poeta y narrador experimental.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Escritor que combina experimentación formal con reflexión sobre identidad y lenguaje. Parte de la generación que renovó la literatura ecuatoriana en los años 80-90." },
  { year: 1959, title: "'Boletín y elegía de las mitas'", description: "César Dávila Andrade publica este largo poema sobre la explotación indígena colonial.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Dávila Andrade (1918-1967) es uno de los mayores poetas ecuatorianos. Este poema combina indigenismo con experimentación formal. Su poesía es metafísica, telúrica y compleja. Murió suicida en Caracas." },
  { year: 1960, title: "Pedro Jorge Vera", description: "Pedro Jorge Vera (1914-1999), narrador del neorrealismo ecuatoriano, publica sus principales cuentos.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Miembro del Grupo de Guayaquil. Sus relatos muestran evolución del realismo social hacia formas más elaboradas. También fue ensayista y crítico literario." },
  { year: 1962, title: "'Los que se van' (reedición)", description: "Reedición de 'Los que se van', obra fundacional del Grupo de Guayaquil.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Nueva edición de la colección de relatos de Gallegos Lara, Aguilera Malta y Gil Gilbert que marcó el inicio del realismo social ecuatoriano en 1930." },
  { year: 1963, title: "Jorge Enrique Adoum", description: "Jorge Enrique Adoum (1926-2009), poeta comprometido políticamente, publica sus grandes poemarios.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Secretario de Pablo Neruda. Su poesía combina compromiso social con experimentación formal. Obras importantes: 'Los cuadernos de la tierra', 'No son todos los que están'. También novelista." },
  { year: 1967, title: "'Entre Marx y una mujer desnuda'", description: "Jorge Enrique Adoum publica esta novela experimental sobre la izquierda latinoamericana.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Novela que reflexiona sobre militancia política, amor e identidad. Combina experimentación formal con crítica social. Una de las novelas ecuatorianas más importantes del siglo XX." },
  { year: 1973, title: "'Bruna, soroche y los tíos' (Alicia Yánez Cossío)", description: "Alicia Yánez Cossío publica esta novela, renovación de la voz femenina en la narrativa ecuatoriana.", category: "sigloxx", color: "#4682B4", period: "Mediados Siglo XX (1950-1980)", details: "Yánez Cossío introduce perspectiva feminista y humor en la literatura ecuatoriana. Esta novela combina crítica social con experimentación narrativa. Autora prolífica que renueva temas indigenistas desde óptica femenina." },
  { year: 1975, title: "María Fernanda Ampuero (nace)", description: "Nacimiento de María Fernanda Ampuero, narradora contemporánea de gran impacto.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Autora de 'Pelea de gallos' (2019) y 'Sacrificios humanos' (2010). Su narrativa explora violencia, cuerpo femenino y memoria. Reconocimiento internacional creciente." },
  
  // Contemporáneo
  { year: 1979, title: "'Ciudad de invierno' (Abdón Ubidia)", description: "Abdón Ubidia publica 'Ciudad de invierno', hito de la narrativa urbana ecuatoriana contemporánea.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Marca el paso de literatura rural/indigenista a temática urbana. Retrata Quito moderno con sus conflictos, violencia y búsquedas existenciales. Ubidia es también ensayista clave para entender literatura ecuatoriana contemporánea." },
  { year: 1980, title: "Mónica Ojeda (nace)", description: "Nacimiento de Mónica Ojeda, una de las voces más importantes de la literatura latinoamericana actual.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Autora de 'Mandíbula' (2014), 'Nefando' (2017), 'Las voladoras' (2020). Su narrativa explora violencia, género, terror y adolescencia. Reconocimiento internacional destacado." },
  { year: 1981, title: "'Las tres ratas'", description: "Alicia Yánez Cossío publica 'Las tres ratas', novela sobre dictadura y represión.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela alegórica sobre el poder y la opresión. Yánez Cossío consolida su posición como una de las narradoras más importantes de Ecuador con perspectiva feminista." },
  { year: 1985, title: "Santiago Páez (nace)", description: "Nacimiento de Santiago Páez, narrador contemporáneo de temática urbana.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Autor de 'Plegarias nocturnas' (2007). Su narrativa explora marginalidad urbana, violencia y sexualidad. Parte de nueva generación que renovó literatura ecuatoriana en siglo XXI." },
  { year: 1987, title: "'Ciudad sin Ángel'", description: "Juan Andrade Heymann publica 'Ciudad sin Ángel', novela experimental sobre Cuenca.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela que rompe con realismo tradicional. Retrata Cuenca de manera experimental, con técnicas vanguardistas. Renovación de la narrativa azuaya." },
  { year: 1989, title: "'Sueños de lobos'", description: "Javier Vásconez publica 'Sueños de lobos', colección de relatos.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Relatos que consolidan a Vásconez como uno de los mejores narradores ecuatorianos. Atmósferas densas, personajes marginales, exploración de memoria y soledad urbana." },
  { year: 1990, title: "Nuevas Voces", description: "Surge nueva generación de escritores urbanos experimentales: diversidad temática y formal.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Autores como Solange Rodríguez Pappe, Huilo Ruales, Santiago Páez, Leonardo Valencia renuevan narrativa ecuatoriana. Temas: ciudad, género, identidad, globalización. Estilos diversos: realismo sucio, experimental, policial, fantástico." },
  { year: 1991, title: "'El Rincón de los Justos'", description: "Eliécer Cárdenas publica 'El Rincón de los Justos', novela sobre Cuenca.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela que retrata la sociedad cuencana con profundidad psicológica y social. Cárdenas consolida su posición como cronista de Cuenca y sus transformaciones." },
  { year: 2000, title: "'El viejo luchador'", description: "Miguel Donoso Pareja publica 'El viejo luchador', novela sobre alfarismo.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela histórica sobre Eloy Alfaro y la Revolución Liberal. Donoso Pareja combina investigación histórica con narrativa envolvente. Recuperación de memoria histórica ecuatoriana." },
  { year: 2004, title: "'La Emancipada' (reedición crítica)", description: "Reedición crítica de 'La Emancipada', novela fundacional de 1863.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Nueva edición con estudios críticos de la primera novela ecuatoriana. Recuperación de patrimonio literario nacional y reflexión sobre orígenes de narrativa ecuatoriana." },
  { year: 2007, title: "'Plegarias nocturnas'", description: "Santiago Páez publica 'Plegarias nocturnas', novela sobre marginalidad urbana.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela que explora mundo de sexoservidores, violencia y supervivencia en Quito. Narrativa cruda que muestra otra cara de la ciudad. Páez se consolida como voz importante de su generación." },
  { year: 2010, title: "'Sacrificios humanos'", description: "María Fernanda Ampuero publica 'Sacrificios humanos', relatos sobre violencia.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Colección de relatos que exploran violencia cotidiana, especialmente contra mujeres. Narrativa visceral y poderosa que marcó un hito en literatura ecuatoriana contemporánea." },
  { year: 2014, title: "'Mandíbula'", description: "Mónica Ojeda publica 'Mandíbula', novela sobre adolescencia y violencia.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Primera novela de Ojeda que explora relaciones entre adolescentes mujeres, obsesión y violencia. Marca la aparición de una voz literaria potente con reconocimiento inmediato." },
  { year: 2017, title: "'Humo' - Gabriela Alemán", description: "Gabriela Alemán publica 'Humo', novela que consolida la narrativa urbana y policial ecuatoriana.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Alemán (1968-) es una de las voces más importantes de la literatura ecuatoriana actual. Combina género policial con crítica social. 'Humo' retrata violencia urbana y corrupción en Guayaquil contemporáneo." },
  { year: 2017, title: "'Nefando'", description: "Mónica Ojeda publica 'Nefando', novela sobre internet, violencia y trauma.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela experimental que explora dark web, pornografía extrema y trauma infantil. Ojeda consolida su propuesta literaria que combina terror, filosofía y crítica social. Reconocimiento internacional." },
  { year: 2019, title: "'Pelea de gallos'", description: "María Fernanda Ampuero publica 'Pelea de gallos', colección de relatos aclamada internacionalmente.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Relatos sobre violencia machista, abuso y trauma. Narrativa visceral que explora infancia, familia y violencia desde perspectiva femenina. Éxito internacional, traducida a múltiples idiomas." },
  { year: 2020, title: "'Las voladoras'", description: "Mónica Ojeda publica 'Las voladoras', novela sobre mujeres y brujería.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Novela que explora feminidad, terror y lo sobrenatural. Ojeda continúa su exploración de violencia y género con elementos de terror. Consolidación internacional como una de las voces latinoamericanas más importantes." },
  { year: 2021, title: "'Ataúdes'", description: "Solange Rodríguez Pappe publica 'Ataúdes', relatos lésbicos sobre muerte y deseo.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "Colección de relatos que exploran lesbianismo, muerte y deseo desde perspectiva queer. Rodríguez Pappe es una de las voces más importantes de literatura LGBTQ+ ecuatoriana." },
  { year: 2025, title: "Literatura Actual", description: "Literatura ecuatoriana contemporánea: diversidad, experimentación, voces emergentes y reconocimiento internacional.", category: "contemporaneo", color: "#2E8B57", period: "Contemporáneo (1980-2025)", details: "La literatura ecuatoriana actual es diversa y vital. Hay autores trabajando en todos los géneros: poesía, novela, cuento, crónica, teatro. Temas: migración, memoria, identidad LGBTQ+, ecología, tecnología, violencia urbana. Presencia creciente de escritoras. Mayor difusión internacional. Autores como Ojeda y Ampuero obtienen reconocimiento global." }
];

const historyEvents = [
  // Prehistoria
  { year: -11000, title: "Primeros Habitantes", description: "Primeros pobladores llegan al actual territorio ecuatoriano (c. 13,000 a.C.).", category: "prehistoria", color: "#708090", period: "Prehistoria", details: "Grupos de cazadores-recolectores nómadas. Evidencias en Las Vegas (Santa Elena), El Inga (Pichincha)." },
  { year: -3500, title: "Cultura Valdivia", description: "Cultura Valdivia (3500-1800 a.C.), una de las más antiguas de América, desarrollo de cerámica.", category: "prehistoria", color: "#708090", period: "Prehistoria", details: "Famosa por sus 'Venus de Valdivia'. Asentamientos sedentarios, agricultura, pesca. Costa ecuatoriana." },
  { year: -1000, title: "Culturas Regionales", description: "Desarrollo de culturas Chorrera, Machalilla, Jama-Coaque, Guangala, Bahía.", category: "prehistoria", color: "#708090", period: "Prehistoria", details: "Diversificación cultural. Desarrollo de metalurgia, comercio a larga distancia, jerarquías sociales complejas." },
  
  // Imperio Inca
  { year: 1463, title: "Expansión Inca", description: "Imperio Inca anexiona territorios del norte (actual Ecuador) bajo Túpac Yupanqui.", category: "inca", color: "#DAA520", period: "Imperio Inca (1400-1533)", details: "Resistencia de pueblos locales (Cañaris, Caras). Imposición del quichua. Fundación de Tomebamba (Cuenca) como centro administrativo. El norte del imperio siempre fue zona conflictiva." },
  { year: 1493, title: "Huayna Cápac", description: "Huayna Cápac nace en Tomebamba, será emperador Inca y padre de Huáscar y Atahualpa.", category: "inca", color: "#DAA520", period: "Imperio Inca (1400-1533)", details: "Último gran Inca unificado. Conquista el norte hasta el río Ancasmayo (sur de Colombia). Su muerte divide el imperio." },
  
  // Conquista y Colonia
  { year: 1526, title: "Llegada Españoles", description: "Primeros contactos de conquistadores españoles con territorio ecuatoriano.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Bartolomé Ruiz llega a la costa. Primer contacto español con el Tahuantinsuyo desde el norte." },
  { year: 1532, title: "Guerra Civil Inca", description: "Guerra civil entre Huáscar (Cuzco) y Atahualpa (Quito), debilita el imperio ante los españoles.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Conflicto sucesorio tras muerte de Huayna Cápac. Atahualpa triunfa pero Pizarro aprovecha la división. Batalla de Cajamarca (1532): captura de Atahualpa." },
  { year: 1534, title: "Fundación de Quito", description: "Sebastián de Benalcázar funda San Francisco de Quito (6 de diciembre). Inicio de la conquista española.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Rumiñahui, general de Atahualpa, resiste e incendia Quito antes de la llegada española. Los españoles fundan nueva ciudad. Comienza colonización: encomiendas, evangelización, explotación de recursos y población indígena." },
  { year: 1563, title: "Real Audiencia de Quito", description: "Creación de la Real Audiencia de Quito, entidad administrativa colonial.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Quito se convierte en centro administrativo, judicial y religioso. Abarca amplio territorio desde Pasto hasta Tumbes. Desarrollo de élite criolla, conventos, universidades (San Gregorio Magno, 1622; Santo Tomás, 1688)." },
  { year: 1592, title: "Primer Censo Colonial", description: "Primer censo colonial revela drástica reducción de la población indígena debido a enfermedades y explotación.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "El censo documenta la catástrofe demográfica: la población indígena se redujo en más del 75% desde la conquista. Enfermedades europeas, trabajo forzado en mitas y obrajes causaron millones de muertes." },
  { year: 1592, title: "Escuela Quiteña", description: "Florecimiento de la Escuela Quiteña de arte (pintura y escultura barroca).", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Quito se convierte en centro artístico colonial. Artistas como Miguel de Santiago, Manuel Chili 'Caspicara'. Exportación de arte religioso a toda Hispanoamérica." },
  { year: 1665, title: "Obrajes de San Ildefonso", description: "Establecimiento de obrajes (talleres textiles) en Ambato con explotación brutal de negros e indígenas.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Los obrajes eran talleres textiles donde indígenas y esclavos africanos trabajaban en condiciones infrahumanas. Producción de textiles para mercado colonial. Sistema de explotación laboral característico de la colonia." },
  { year: 1736, title: "Misión Geodésica", description: "Llegada de la Misión Geodésica francesa para medir el arco meridiano en el ecuador.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Científicos franceses Charles Marie de La Condamine, Pierre Bouguer y Louis Godin. Colaboración de científicos españoles. Investigaciones científicas confirman forma de la Tierra. Influencia en élite ilustrada quiteña." },
  { year: 1765, title: "Rebelión de los Estancos", description: "Rebelión popular contra monopolios comerciales (estancos) impuestos por Corona española.", category: "colonia", color: "#8B7355", period: "Colonia (1534-1809)", details: "Primer gran levantamiento popular en Quito colonial. Represión violenta. Muestra tensiones sociales del período tardocolonial." },
  
  // Independencia
  { year: 1808, title: "Conspiración de Chillo", description: "Primera conspiración independentista descubierta y reprimida.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Influencia de ideas ilustradas y revoluciones (Francia, Estados Unidos). Juan Pío Montúfar y otros criollos conspiran. El movimiento es descubierto." },
  { year: 1809, title: "Primera Junta (10 de Agosto)", description: "Primera Junta Soberana de Quito (10 de agosto). Primer grito de independencia hispanoamericana.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "'Luz de América': Quito se adelanta en movimientos independentistas. Junta depone al presidente de la Audiencia. Movimiento fracasa, líderes son encarcelados." },
  { year: 1810, title: "Masacre del 2 de Agosto", description: "Masacre del 2 de agosto en Quito: matanza de próceres independentistas encarcelados.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Los patriotas del 10 de agosto de 1809 están encarcelados. Cuando el pueblo intenta liberarlos, tropas realistas masacran entre 200-300 personas, incluyendo próceres y civiles. Uno de los episodios más sangrientos de la independencia." },
  { year: 1812, title: "Masacre de patriotas quiteños", description: "Nueva masacre de patriotas independentistas en Quito por fuerzas realistas.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Continuación de la represión española contra movimientos independentistas. La resistencia en Quito es brutalmente reprimida. Más ejecuciones de líderes criollos." },
  { year: 1813, title: "Juramento Constitución de Cádiz", description: "Juramento de la Constitución de Cádiz en Otavalo, momento de reformismo liberal en Imperio Español.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "La Constitución de Cádiz (1812) estableció monarquía constitucional en España. Su juramento en Quito representó momento de reformas liberales, aunque limitadas. Influenció pensamiento político independentista." },
  { year: 1820, title: "Independencia de Guayaquil", description: "Guayaquil proclama independencia (9 de octubre). José Joaquín de Olmedo lidera gobierno provisional.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Movimiento exitoso liderado por criollos guayaquileños. Se establece gobierno provisional. Guayaquil se convierte en base para liberación de la sierra." },
  { year: 1822, title: "Batalla de Pichincha (24 mayo)", description: "Victoria del Ejército Libertador bajo mando del Mariscal Sucre. Independencia definitiva de Quito.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Batalla en las faldas del volcán Pichincha. Antonio José de Sucre derrota a realistas españoles. Abdón Calderón, héroe joven, muere en combate. Ecuador se libera del dominio español y se incorpora a la Gran Colombia." },
  { year: 1822, title: "Anexión a Gran Colombia", description: "Territorios ecuatorianos se integran a la Gran Colombia de Simón Bolívar.", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Ecuador (Departamento del Sur) forma parte de la Gran Colombia junto a Venezuela y Nueva Granada (Colombia). Tensiones regionalistas y políticas pronto surgen." },
  { year: 1822, title: "Entrevista Bolívar-San Martín", description: "Entrevista histórica entre Simón Bolívar y José de San Martín en Guayaquil (julio).", category: "independencia", color: "#B8860B", period: "Independencia (1809-1830)", details: "Encuentro secreto entre los dos libertadores de Sudamérica. San Martín se retira de la lucha independentista, dejando a Bolívar como figura dominante. El contenido exacto de la conversación sigue siendo misterio histórico." },
  { year: 1826, title: "Fundación Universidad Central", description: "Fundación de la Universidad Central del Ecuador en Quito.", category: "independencia", color: "#B8860B", period: "República (1830-)", details: "Institución educativa más importante del país. Heredera de universidades coloniales. Formación de élite intelectual y política ecuatoriana. Centro de debates políticos e ideológicos durante toda la historia republicana." },
  { year: 1830, title: "Separación - Nace República", description: "Disolución de la Gran Colombia. Nace la República del Ecuador (13 de mayo).", category: "independencia", color: "#B8860B", period: "República (1830-)", details: "Juan José Flores, primer presidente. Asamblea Constituyente en Riobamba. Primera Constitución (septiembre 1830). Ecuador inicia vida republicana independiente con inestabilidad política." },
  
  // República Temprana
  { year: 1832, title: "Anexión Islas Galápagos", description: "Ecuador anexiona las Islas Galápagos a su territorio nacional.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "El presidente Juan José Flores anexiona el archipiélago de Galápagos, descubierto en 1535. Las islas serán fundamentales para la biodiversidad mundial y el turismo ecuatoriano. Charles Darwin las visitaría en 1835." },
  { year: 1832, title: "Constitución de 1835", description: "Nueva constitución. Vicente Rocafuerte asume presidencia. Tensiones entre regiones y facciones.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Alternancia y conflictos entre conservadores (sierra, clericalismo) y liberales (costa, laicismo). Rocafuerte impulsa reformas educativas." },
  { year: 1838, title: "Instituto Agrario", description: "Vicente Rocafuerte funda el Instituto Agrario (1838-1839) para modernizar agricultura.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Intento liberal de modernizar el campo ecuatoriano mediante educación agrícola. Resistencia de terratenientes conservadores limita su impacto. Ejemplo del proyecto modernizador liberal del siglo XIX." },
  { year: 1845, title: "Guerra de los Marqueses", description: "Guerra de los Marqueses: conflicto entre élites regionales y facciones políticas.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Conflicto entre facciones de la aristocracia ecuatoriana. Enfrentamiento entre partidarios de Flores y opositores. Refleja inestabilidad crónica de la república temprana y lucha por poder entre élites." },
  { year: 1857, title: "Crisis política", description: "Crisis política (1857-1862): llegada de letrados neogranadinos y conflictos ideológicos.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Período de intensa disputa ideológica. Intelectuales colombianos (neogranadinos) llegan al Ecuador. Debates entre liberales y conservadores se intensifican. Preparación del terreno para gobierno de García Moreno." },
  { year: 1858, title: "Guerra civil (1858-1860)", description: "Período de guerra civil y crisis nacional entre facciones políticas.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Conflicto armado entre liberales y conservadores. Caos político y militar. Múltiples gobiernos se suceden. Culmina con ascenso de Gabriel García Moreno al poder." },
  { year: 1860, title: "Tratado de Mapasingue", description: "Tratado de Mapasingue pone fin a guerra civil entre liberales y conservadores.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Acuerdo de paz firmado en Guayaquil. Permite estabilización temporal y ascenso de García Moreno. Fin momentáneo de las guerras civiles que marcaron la república temprana." },
  { year: 1851, title: "Abolición esclavitud tributaria", description: "Presidente José María Urbina decreta abolición de la esclavitud y tributo indígena.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Reforma liberal importante. Libera a aproximadamente 2,500 esclavos afrodescendientes. Elimina tributo que pagaban indígenas, aunque explotación continúa por otros medios." },
  { year: 1859, title: "García Moreno (presidente)", description: "Gabriel García Moreno llega al poder (1859-1865, 1869-1875). Autoritarismo teocrático y modernización.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Gobierno conservador autoritario. Dedica Ecuador al Sagrado Corazón de Jesús. Construcción de ferrocarril Guayaquil-Quito (iniciado). Impulso educación y obras públicas. Represión de opositores. Persecución a liberales (exilio de Montalvo)." },
  { year: 1875, title: "Asesinato García Moreno", description: "García Moreno es asesinado a machetazos en Palacio de Gobierno (6 de agosto).", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Faustino Lemus Rayo y otros conspiradores lo matan. Período de inestabilidad posterior. El garcianismo sigue influyendo en política conservadora ecuatoriana." },
  { year: 1882, title: "Restauración conservadora", description: "Restauración conservadora (1882-1883): nueva guerra civil tras caída de liberales.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Conflicto armado que devuelve el poder a conservadores. Ciclo de guerras civiles continúa. Inestabilidad crónica del Ecuador del siglo XIX. Prepara terreno para Revolución Liberal de 1895." },
  { year: 1884, title: "Venta de la Bandera", description: "Escándalo político: gobierno conservador 'vende' bandera a Chile por apoyo en conflictos internos.", category: "republica", color: "#4169E1", period: "República (1830-1895)", details: "Símbolo de debilidad y corrupción del régimen conservador. Fortalece oposición liberal. Alfaro usará este hecho como bandera política." },
  { year: 1896, title: "Bombardeo de Guayaquil", description: "Bombardeo de Guayaquil durante conflictos de la Revolución Liberal.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Episodio violento de la Revolución Liberal. Fuerzas conservadoras bombardean Guayaquil, bastión liberal. Muestra la intensidad del conflicto entre liberales y conservadores. Alfaro consolida poder tras este episodio." },
  
  // Revolución Liberal
  { year: 1895, title: "Revolución Liberal", description: "Triunfo de la Revolución Liberal liderada por Eloy Alfaro. Inicia transformación del Estado.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "'Viejo Luchador' Eloy Alfaro toma el poder. Inicio de reformas profundas: separación Iglesia-Estado, educación laica, libertades civiles, modernización económica." },
  { year: 1897, title: "Leyes Laicas", description: "Implementación de leyes laicas: matrimonio civil, divorcio, registro civil, educación laica.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Secularización del Estado. Fin del monopolio católico sobre educación y familia. Resistencia de sectores conservadores y Iglesia." },
  { year: 1904, title: "Tratado Ecuador-Brasil", description: "Tratado secreto Ecuador-Brasil: alianza militar contra Perú.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Acuerdo militar secreto entre Ecuador y Brasil para defenderse de posible agresión peruana. Refleja tensiones fronterizas de la época. Geopolitica sudamericana del caucho y territorios amazónicos en disputa." },
  { year: 1908, title: "Ferrocarril Quito-Guayaquil", description: "Inauguración del ferrocarril Guayaquil-Quito, obra emblemática del liberalismo.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Integra sierra y costa. Facilita comercio, comunicación y modernización. Símbolo del progreso alfarista. Construcción difícil por geografía andina. Hazaña de ingeniería que transformó al Ecuador." },
  { year: 1913, title: "Sublevación de Concha", description: "Sublevación de Carlos Concha en Esmeraldas, guerrilla afroecuatoriana.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Guerrilla liderada por el coronel afroecuatoriano Carlos Concha en Esmeraldas. Movimiento complejo: mezcla de resistencia conservadora al liberalismo y reivindicaciones regionales. Concha fue militar destacado que se rebeló contra el gobierno." },
  { year: 1912, title: "Hoguera Bárbara", description: "Asesinato de Eloy Alfaro y colaboradores. Cuerpos arrastrados y quemados en Quito ('Hoguera Bárbara').", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Tras golpe de estado y arresto, turba conservadora lincha y quema a Alfaro y otros (28 de enero). Uno de los episodios más violentos de historia ecuatoriana. Alfaro se convierte en mártir liberal." },
  { year: 1922, title: "Masacre de trabajadores", description: "Masacre de trabajadores en Guayaquil (15 de noviembre): represión sangrienta de huelga obrera.", category: "liberal", color: "#DC143C", period: "Revolución Liberal (1895-1925)", details: "Huelga general de trabajadores en Guayaquil exigiendo mejores condiciones. Ejército dispara contra manifestantes. Entre 300-1000 muertos según fuentes. Evento traumático que marca el fin del liberalismo progresista y el ascenso de movimiento obrero." },
  { year: 1925, title: "Revolución Juliana", description: "Golpe militar (9 de julio) por oficiales jóvenes. Reformas bancarias y laborales.", category: "liberal", color: "#DC143C", period: "S. XX Inestabilidad (1925-1979)", details: "'Julios' buscan modernizar Estado, controlar oligarquía bancaria, crear legislación laboral. Fundan Banco Central. Inicia período de gran inestabilidad política." },
  
  // Siglo XX - Inestabilidad
  { year: 1932, title: "Guerra de los Cuatro Días", description: "Guerra de los Cuatro Días: golpe conservador fallido contra gobierno liberal.", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Intento de golpe de estado conservador en agosto de 1932. Dura cuatro días. Fracasa pero muestra continua inestabilidad política. Conflicto entre liberales y conservadores continúa en siglo XX." },
  { year: 1933, title: "Guerra de Leticia", description: "Guerra de Leticia (1932-1933): conflicto Colombia-Perú, Ecuador mantiene neutralidad.", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Conflicto fronterizo entre Colombia y Perú por territorio amazónico. Ecuador, con conflictos propios con Perú, observa tensamente. Geopolitica amazónica compleja. Ecuador teme que resolución del conflicto afecte sus propias reclamaciones territoriales." },
  { year: 1934, title: "Era Velasquista (inicio)", description: "José María Velasco Ibarra elegido presidente por primera vez (de cinco veces).", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "'El Gran Ausente': Velasco Ibarra domina política ecuatoriana de 1934-1972. Populista carismático. Solo completa un período (1952-1956). Tres veces derrocado. Representa inestabilidad crónica ecuatoriana." },
  { year: 1941, title: "Guerra con Perú & Protocolo Río", description: "Guerra con Perú (julio-agosto). Pérdida de 200,000 km² de territorio amazónico (Protocolo de Río, 1942).", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Conflicto bélico desigual durante Segunda Guerra Mundial. Perú, con armamento superior, invade territorios en disputa. Protocolo de Río de Janeiro (1942) impone pérdida de aproximadamente 200,000 km². Ecuador declara el tratado 'nulo e inejecutable' (1960). Trauma nacional que marca política exterior ecuatoriana por décadas." },
  { year: 1944, title: "Revolución La Gloriosa", description: "Revolución popular derroca a Arroyo del Río (28-29 mayo). Velasco Ibarra regresa del exilio.", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Levantamiento masivo en Guayaquil contra gobierno desprestigiado por derrota ante Perú. Alianza de izquierda, liberales y velasquistas." },
  { year: 1963, title: "Reforma Agraria", description: "Primera Ley de Reforma Agraria bajo dictadura militar. Intento de modernizar campo.", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Busca abolir huasipungo y redistribuir tierra. Resultados limitados. Segunda reforma agraria en 1973 con auge petrolero. Cambios en estructura de tenencia de tierra, pero persiste desigualdad." },
  { year: 1972, title: "Dictadura Rodríguez Lara", description: "Golpe militar (15 febrero). Dictadura nacionalista de Guillermo Rodríguez Lara (1972-1976).", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "'Dictadura Nacionalista' o 'Revolucionaria': aprovecha auge petrolero para inversión estatal. Nacionalismo económico, control de recursos. Modernización infraestructura. Represión de oposición pero menos brutal que otras dictaduras latinoamericanas." },
  { year: 1976, title: "Triunvirato Militar", description: "Triunvirato Militar (1976-1979): segunda fase de dictadura militar más represiva.", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Tras golpe interno contra Rodríguez Lara, triunvirato militar toma el poder. Fase más conservadora y represiva. Prepara retorno a democracia ante presión interna e internacional. Convoca Asamblea Constituyente." },
  { year: 1972, title: "Boom Petrolero", description: "Inicio de explotación petrolera a gran escala en Amazonía. Trans-ecuatoriano.", category: "sigloxx", color: "#20B2AA", period: "S. XX (1925-1979)", details: "Oleoducto trans-ecuatoriano inicia operaciones. Ecuador ingresa a OPEP. Bonanza económica pero impactos ambientales en Amazonía. Petróleo transforma economía ecuatoriana." },
  { year: 1978, title: "Nueva Constitución", description: "Referéndum aprueba nueva Constitución en transición a democracia.", category: "sigloxx", color: "#20B2AA", period: "Retorno Democracia", details: "Preparación para elecciones. Sufragio universal (incluyendo analfabetos). Fortalece institucionalidad democrática." },
  
  // Democracia Contemporánea
  { year: 1979, title: "Retorno a la Democracia (nueva constitución)", description: "Jaime Roldós Aguilera asume presidencia (10 agosto). Retorno a democracia tras dictadura militar.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Elección democrática con 68% de votos. Gobierno joven y reformista. Énfasis en derechos humanos, alfabetización, vivienda popular. Conflicto con Congreso conservador." },
  { year: 1981, title: "Conflicto Paquisha & Muerte Roldós", description: "Conflicto con Perú en Paquisha. Muerte de Roldós en accidente aéreo (24 mayo).", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Tensión fronteriza en Cordillera del Cóndor. Misterioso accidente aéreo mata a Roldós, su esposa y comitiva en Loja. Teorías de conspiración persisten: ¿accidente o sabotaje? Fin abrupto de gobierno reformista." },
  { year: 1982, title: "Crisis Económica", description: "Crisis de deuda externa. Inicio de décadas de inestabilidad económica (década perdida).", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Caída precio petróleo, deuda externa crece, inflación alta. Ajustes estructurales, austeridad, protestas sociales. Años 80-90 son 'década perdida' latinoamericana." },
  { year: 1995, title: "Guerra del Cenepa", description: "Guerra del Cenepa con Perú (enero-febrero). Conflicto armado intenso, empate militar.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Conflicto bélico corto pero intenso en Cordillera del Cóndor. Ecuador resiste militarmente mejor que en 1941. Victoria táctica ecuatoriana en varios combates. Orgullo nacional restaurado. Negociación posterior conduce a paz definitiva." },
  { year: 1998, title: "Tratado de Paz Ecuador-Perú", description: "Tratado de Paz de Brasilia entre Ecuador y Perú resuelve definitivamente conflicto fronterizo.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Acuerdo de Paz firmado en Brasilia bajo mediación internacional. Ecuador acepta frontera del Protocolo de Río pero obtiene concesiones simbólicas (acceso a ríos amazónicos). Fin definitivo de conflicto de casi 60 años. Permite cooperación bilateral." },
  { year: 1996, title: "Abdalá Bucaram derrocado", description: "Bucaram destituido por Congreso tras seis meses por 'incapacidad mental'. Crisis institucional.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Gobierno errático y populista. 'Loco que ama'. Medidas económicas impopulares. Levantamiento popular y decisión del Congreso. Marca inicio de período de gran inestabilidad presidencial." },
  { year: 1997, title: "Crisis Política", description: "Período de grave inestabilidad: tres presidentes en una semana (Bucaram-Alarcón-Arteaga).", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Crisis constitucional. Fabian Alarcón asume interinamente. Se convoca Asamblea Constituyente." },
  { year: 1999, title: "Crisis Bancaria", description: "Colapso del sistema bancario. Feriado bancario (marzo). Crisis económica más grave de historia ecuatoriana.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Quiebra de bancos principales. Gobierno congela depósitos. Salvataje bancario. Ahorristas pierden ahorros. Migración masiva (>500,000 ecuatorianos emigran). Pobreza se dispara. Sucre se desploma." },
  { year: 2000, title: "Dolarización (adopción del dólar estadounidense)", description: "Ecuador adopta dólar estadounidense como moneda oficial (9 enero). Fin del Sucre.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Medida drástica del presidente Jamil Mahuad ante colapso del Sucre. Estabiliza inflación pero encarece economía. Golpe indígena-militar derroca a Mahuad días después. Gustavo Noboa continúa dolarización." },
  { year: 2000, title: "Golpe indígena (21 enero)", description: "Levantamiento indígena con apoyo de sector militar derroca a Mahuad. Efímero triunvirato.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "CONAIE y coronel Lucio Gutiérrez toman Congreso. Breve triunvirato de salvación nacional. Presión internacional restaura orden constitucional. Vicepresidente Noboa asume." },
  { year: 2005, title: "Forajidos derrocan Gutiérrez", description: "Protestas ciudadanas en Quito ('Rebelión de los Forajidos') fuerzan renuncia del presidente Lucio Gutiérrez.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Gutiérrez, ex-golpista electo (2003), destituye Corte Suprema. Clase media quiteña se levanta. Congreso destituye a Gutiérrez por 'abandono del cargo'. Alfredo Palacio asume. Entre 1996-2005: siete presidentes." },
  { year: 2007, title: "Rafael Correa presidente (inicio Revolución Ciudadana)", description: "Rafael Correa asume presidencia. Inicio de 'Revolución Ciudadana' y década correista (2007-2017).", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Economista de izquierda. Nueva Constitución (2008): Estado más fuerte, derechos ampliados, reelección. Inversión social masiva, reducción de pobreza. Control de medios, confrontación con oposición. Autoritarismo creciente. Boom de precios de commodities favorece. Corrupción (caso Odebrecht). Estabilidad política tras décadas de inestabilidad." },
  { year: 2010, title: "Golpe fallido 30-S", description: "Intento de golpe de Estado fallido (30 de septiembre), crisis política.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Sublevación policial el 30 de septiembre. Correa queda retenido en hospital policial. Versión oficial: intento de golpe. Versión opositora: amotinamiento policial sin intención golpista. Ejército rescata a Correa. Evento controvertido que fortaleció a Correa políticamente." },
  { year: 2008, title: "Nueva Constitución (derechos de la naturaleza)", description: "Referéndum aprueba nueva Constitución. Derechos de la naturaleza, Estado plurinacional.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Constitución progresista: derechos de Pachamama, sumak kawsay (buen vivir), Estado plurinacional. Ampliación de derechos sociales. Fortalecimiento del Ejecutivo. Permite reelección presidencial." },
  { year: 2017, title: "Lenín Moreno (presidente)", description: "Lenín Moreno, delfín de Correa, asume pero rompe con él. Giro político moderado.", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Moreno era vicepresidente de Correa (2007-2013). Elegido como continuador pero da giro. Investigación de corrupción correista. Correa huye a Bélgica, es condenado en ausencia. Referéndum limita reelección indefinida. Crisis económica. Paro nacional octubre 2019. Pandemia COVID-19 (2020) golpea duramente con colapso sanitario en Guayaquil." },
  { year: 2019, title: "Paro Nacional Octubre 2019", description: "Levantamiento indígena y paro nacional contra Decreto 883 (eliminación de subsidios).", category: "democracia", color: "#32CD32", period: "Democracia (1979-2025)", details: "Moreno elimina subsidio a combustibles (FMI). CONAIE y movimientos sociales paralizan país durante 11 días. Violenta represión policial y militar. Gobierno abandona Quito temporalmente. Decreto es derogado tras diálogo. Muestra fuerza del movimiento indígena y crisis de gobernabilidad." },
  { year: 2021, title: "Guillermo Lasso (presidente)", description: "Guillermo Lasso, banquero de centroderecha, asume presidencia tras derrotar a correísta Andrés Araúz.", category: "democracia", color: "#32CD32", period: "Democracia (2021-2025)", details: "Primera alternancia derecha después de correísmo. Vacunación masiva COVID. Crisis de seguridad se agrava: narcoviolencia, cárteles mexicanos operando en Ecuador. Ola de asesinatos, explosiones. Deterioro de sistema carcelario." },
  { year: 2023, title: "Crisis de Seguridad", description: "Escalada de violencia del crimen organizado. Asesinato del candidato presidencial Fernando Villavicencio (agosto).", category: "democracia", color: "#32CD32", period: "Democracia (2021-2025)", details: "Ecuador, antes país seguro, sufre explosión de violencia. Cárteles mexicanos (Sinaloa, Jalisco) y grupos locales disputan control. Asesinatos, extorsiones, motines carcelarios brutales. Villavicencio, periodista anticorrupción y candidato, asesinado en plena campaña. Conmoción nacional. 'Muerte cruzada': Lasso disuelve Asamblea, convoca elecciones anticipadas." },
  { year: 2023, title: "Daniel Noboa (presidente)", description: "Daniel Noboa, empresario joven (35 años), gana elecciones en segunda vuelta (octubre).", category: "democracia", color: "#32CD32", period: "Democracia (2023-2025)", details: "Hijo de magnate bananero Álvaro Noboa. Campaña centrada en seguridad y empleo. Asume en noviembre para completar período de Lasso (hasta mayo 2025). Declara 'conflicto armado interno' contra 22 grupos criminales (enero 2024). Militarización de seguridad. Situación sigue crítica en 2024-2025." },
  { year: 2024, title: "Conflicto Armado Interno", description: "Gobierno declara 'conflicto armado interno' contra crimen organizado. Militarización del país.", category: "democracia", color: "#32CD32", period: "Democracia (2023-2025)", details: "Tras toma de canal de TV por sicarios en vivo (9 enero 2024), Noboa declara guerra al narco. Estado de excepción, toque de queda, militares en calles. Operaciones contra bandas. Derechos humanos en tensión. Ecuador enfrenta su mayor crisis de seguridad." }
];

let currentZoom = 1;
let activeFilter = 'all';
let isScrolling = false;
let scrollDebounceTimer = null;
let currentTheme = 'auto'; // auto, light, dark
let minimapUpdateInterval = null;

// Initialize timeline
function initTimeline() {
  // Show loading screen
  showLoadingScreen();
  
  // Initialize after a brief delay to show loading animation
  setTimeout(() => {
  renderCenturyMarkers();
  renderEvents('literatureEvents', literatureEvents);
  renderEvents('historyEvents', historyEvents);
  drawSynchronizationLines();
  setupFilters();
  setupKeyboardNavigation();
  initializeMinimap();
  updateEventCounts();
  detectTheme();
  setupScrollTracking();
  
  // Hide loading screen
  hideLoadingScreen();
  }, 1500);
}

// Loading screen functions
function showLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.classList.remove('hidden');
  }
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
}

// Theme management
function detectTheme() {
  const savedTheme = currentTheme;
  if (savedTheme === 'auto') {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateThemeIcon(prefersDark ? 'dark' : 'light');
  } else {
    applyTheme(savedTheme);
  }
}

function toggleTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let newTheme;
  
  if (currentTheme === 'auto') {
    newTheme = prefersDark ? 'light' : 'dark';
  } else if (currentTheme === 'light') {
    newTheme = 'dark';
  } else {
    newTheme = 'auto';
  }
  
  currentTheme = newTheme;
  applyTheme(newTheme);
}

function applyTheme(theme) {
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-color-scheme');
    updateThemeIcon(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-color-scheme', theme);
    updateThemeIcon(theme);
  }
}

function updateThemeIcon(effectiveTheme) {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    if (currentTheme === 'auto') {
      themeIcon.textContent = '🌐'; // Globe for auto
    } else if (effectiveTheme === 'dark') {
      themeIcon.textContent = '☀️'; // Sun for light mode toggle
    } else {
      themeIcon.textContent = '🌙'; // Moon for dark mode toggle
    }
  }
}

// Mini-map functionality
function initializeMinimap() {
  const minimapTimeline = document.getElementById('minimapTimeline');
  if (!minimapTimeline) return;
  
  // Add event markers to minimap
  const allEvents = [...literatureEvents, ...historyEvents];
  allEvents.forEach(event => {
    const position = ((event.year - TIMELINE_START_YEAR) / TIMELINE_RANGE) * 100;
    const marker = document.createElement('div');
    marker.style.cssText = `
      position: absolute;
      left: ${position}%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 60%;
      background: ${event.color || '#4169E1'};
      opacity: 0.5;
    `;
    minimapTimeline.appendChild(marker);
  });
  
  updateMinimapViewport();
}

function updateMinimapViewport() {
  const container = document.getElementById('timelineContainer');
  const viewport = document.getElementById('minimapViewport');
  if (!container || !viewport) return;
  
  const scrollLeft = container.scrollLeft;
  const scrollWidth = container.scrollWidth;
  const containerWidth = container.offsetWidth;
  
  const viewportLeft = (scrollLeft / scrollWidth) * 100;
  const viewportWidth = (containerWidth / scrollWidth) * 100;
  
  viewport.style.left = viewportLeft + '%';
  viewport.style.width = viewportWidth + '%';
  
  // Update current position text
  const currentYear = Math.round(TIMELINE_START_YEAR + (scrollLeft / scrollWidth) * TIMELINE_RANGE);
  const positionEl = document.getElementById('currentPosition');
  if (positionEl) {
    positionEl.textContent = `Posición: Año ${currentYear}`;
  }
}

function setupScrollTracking() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  container.addEventListener('scroll', () => {
    if (scrollDebounceTimer) {
      clearTimeout(scrollDebounceTimer);
    }
    scrollDebounceTimer = setTimeout(() => {
      updateMinimapViewport();
    }, 50);
  });
}

// Century jump function
function jumpToCentury(year) {
  scrollToYear(year);
}

// Update event counts on filter buttons
function updateEventCounts() {
  const categories = ['colonial', 'romanticismo', 'modernismo', 'vanguardia', 'realismo', 'sigloxx', 'contemporaneo'];
  
  // Count all events
  const allCount = literatureEvents.length;
  const allCountEl = document.querySelector('[data-count="all"]');
  if (allCountEl) {
    allCountEl.textContent = allCount;
  }
  
  // Count by category
  categories.forEach(category => {
    const count = literatureEvents.filter(e => e.category === category).length;
    const countEl = document.querySelector(`[data-count="${category}"]`);
    if (countEl) {
      countEl.textContent = count;
    }
  });
}

// Keyboard shortcuts help
function showKeyboardHelp() {
  const modal = document.getElementById('keyboardHelpModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeKeyboardHelp() {
  const modal = document.getElementById('keyboardHelpModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Draw vertical lines to show year synchronization between tracks
function drawSynchronizationLines() {
  const wrapper = document.getElementById('timelineWrapper');
  const linesContainer = document.createElement('div');
  linesContainer.className = 'sync-lines';
  linesContainer.style.cssText = 'position: absolute; top: 0; left: 80px; right: 0; height: 100%; pointer-events: none; z-index: 1;';
  
  // Get all unique years from both tracks
  const allYears = new Set();
  literatureEvents.forEach(e => allYears.add(e.year));
  historyEvents.forEach(e => allYears.add(e.year));
  
  // Draw subtle lines at years where both tracks have events
  allYears.forEach(year => {
    const hasLit = literatureEvents.some(e => e.year === year);
    const hasHist = historyEvents.some(e => e.year === year);
    
    if (hasLit && hasHist) {
      const position = ((year - TIMELINE_START_YEAR) / TIMELINE_RANGE) * 90;
      const line = document.createElement('div');
      line.style.cssText = `
        position: absolute;
        left: ${position}%;
        top: 0;
        bottom: 0;
        width: 1px;
        background: linear-gradient(to bottom, 
          rgba(33, 128, 141, 0.3) 0%, 
          rgba(33, 128, 141, 0.5) 40%, 
          rgba(33, 128, 141, 0.5) 60%, 
          rgba(33, 128, 141, 0.3) 100%);
      `;
      linesContainer.appendChild(line);
    }
  });
  
  wrapper.insertBefore(linesContainer, wrapper.firstChild);
}

// Add century markers for visual reference
function renderCenturyMarkers() {
  const wrapper = document.getElementById('timelineWrapper');
  const markersContainer = document.createElement('div');
  markersContainer.className = 'century-markers';
  markersContainer.style.cssText = 'position: absolute; top: 0; left: 80px; right: 0; height: 100%; pointer-events: none; z-index: 0;';
  
  // Add markers for each century and important decades
  const years = [1500, 1600, 1700, 1800, 1850, 1900, 1950, 1975, 2000, 2025];
  
  years.forEach(year => {
    const position = ((year - TIMELINE_START_YEAR) / TIMELINE_RANGE) * 90;
    const isCentury = year % 100 === 0;
    
    const marker = document.createElement('div');
    marker.style.cssText = `
      position: absolute;
      left: ${position}%;
      top: 0;
      bottom: 0;
      width: ${isCentury ? '2px' : '1px'};
      background: ${isCentury ? 'rgba(33, 128, 141, 0.3)' : 'rgba(33, 128, 141, 0.15)'};
    `;
    
    const label = document.createElement('div');
    label.textContent = year;
    label.style.cssText = `
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: ${isCentury ? '14px' : '11px'};
      font-weight: ${isCentury ? '600' : '500'};
      color: var(--color-primary);
      background: var(--color-background);
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
    `;
    
    marker.appendChild(label);
    markersContainer.appendChild(marker);
  });
  
  wrapper.insertBefore(markersContainer, wrapper.firstChild);
}

function renderEvents(containerId, events) {
  const container = document.getElementById(containerId);
  const isHistory = containerId === 'historyEvents';
  
  // CRITICAL: Use GLOBAL timeline scale for synchronization
  // All tracks use the same year range (1500-2025) so events align vertically
  
  // GROUP EVENTS BY YEAR for spacing management
  const eventsByYear = {};
  events.forEach(event => {
    if (!eventsByYear[event.year]) {
      eventsByYear[event.year] = [];
    }
    eventsByYear[event.year].push(event);
  });
  
  // Assign both vertical AND horizontal offsets to prevent overlapping
  Object.keys(eventsByYear).forEach(year => {
    const eventsInYear = eventsByYear[year];
    if (eventsInYear.length > 1) {
      // Multiple events in same year - space them both vertically AND horizontally
      eventsInYear.forEach((event, index) => {
        // Alternate above and below timeline, with increasing distance
        const isAbove = index % 2 === 0;
        const stackLevel = Math.floor(index / 2);
        event.verticalOffset = (isAbove ? -1 : 1) * (140 + stackLevel * 120);
        
        // Add horizontal offset to prevent marker overlap
        const totalEvents = eventsInYear.length;
        const horizontalSpread = 45; // pixels between each event (aumentado de 25 a 45)
        event.horizontalOffset = ((index - (totalEvents - 1) / 2) * horizontalSpread);
        
        event.isDense = true; // Mark as part of dense year
        event.denseCount = eventsInYear.length;
      });
    } else {
      // Single event - no offset needed
      eventsInYear[0].verticalOffset = 0;
      eventsInYear[0].horizontalOffset = 0;
      eventsInYear[0].isDense = false;
    }
  });
  
  events.forEach(event => {
    const eventEl = document.createElement('div');
    eventEl.className = 'timeline-event';
    eventEl.dataset.category = event.category;
    eventEl.dataset.year = event.year;
    
    // Add dense year indicator
    if (event.isDense) {
      eventEl.classList.add('dense-year-event');
      eventEl.title = `${event.denseCount} eventos en ${event.year}`;
    }
    
    // Calculate position using GLOBAL scale (ensures synchronization)
    // Position based on exact year from 1500 to 2025
    const position = ((event.year - TIMELINE_START_YEAR) / TIMELINE_RANGE) * 90; // 90% to leave margin
    
    // Apply horizontal offset for events in same year
    const horizontalOffset = event.horizontalOffset || 0;
    eventEl.style.left = `calc(${position}% + ${horizontalOffset}px)`;
    
    // Apply vertical offset if events overlap in same year
    const verticalOffset = event.verticalOffset || 0;
    eventEl.style.top = `calc(50% + ${verticalOffset}px)`;
    eventEl.style.transform = 'translateY(-50%)';
    
    const marker = document.createElement('div');
    marker.className = 'event-marker';
    marker.style.color = event.color;
    
    // Add connector line INSIDE marker if vertically offset
    if (verticalOffset !== 0) {
      const connector = document.createElement('div');
      connector.className = 'event-connector';
      
      // The connector should go from the marker center to the timeline
      if (verticalOffset > 0) {
        // Event is below timeline - line goes UP from marker
        connector.style.cssText = `
          position: absolute;
          left: 50%;
          top: -${Math.abs(verticalOffset) - 10}px;
          width: 2px;
          height: ${Math.abs(verticalOffset) - 10}px;
          background: ${event.color};
          opacity: 0.35;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: -1;
        `;
      } else {
        // Event is above timeline - line goes DOWN from marker
        connector.style.cssText = `
          position: absolute;
          left: 50%;
          bottom: -${Math.abs(verticalOffset) - 10}px;
          width: 2px;
          height: ${Math.abs(verticalOffset) - 10}px;
          background: ${event.color};
          opacity: 0.35;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: -1;
        `;
      }
      
      marker.appendChild(connector);
    }
    
    const label = document.createElement('div');
    label.className = 'event-label';
    
    // Calculate dynamic width based on title length
    const titleLength = event.title.length;
    let cardWidth = 220; // default (aumentado de 200 a 220)
    if (titleLength > 40) {
      cardWidth = 300; // aumentado de 280 a 300
    } else if (titleLength > 25) {
      cardWidth = 260; // aumentado de 240 a 260
    }
    label.style.minWidth = cardWidth + 'px';
    
    // Create title with proper structure
    const yearSpan = `<span class="event-year">${event.year < 0 ? Math.abs(event.year) + ' a.C.' : event.year}</span>`;
    const titleSpan = `<span class="event-title">${event.title}</span>`;
    label.innerHTML = yearSpan + titleSpan;
    
    // Add full title as tooltip
    const tooltipText = `${event.year}: ${event.title}\n${event.description}`;
    label.setAttribute('title', tooltipText);
    eventEl.setAttribute('title', tooltipText);
    
    eventEl.appendChild(marker);
    eventEl.appendChild(label);
    
    // Add click event
    eventEl.addEventListener('click', () => showEventModal(event));
    
    // Add custom hover tooltip
    let tooltipElement = null;
    
    eventEl.addEventListener('mouseenter', (e) => {
      // Create custom tooltip
      tooltipElement = document.createElement('div');
      tooltipElement.className = 'custom-tooltip';
      tooltipElement.innerHTML = `
        <strong>${event.year}: ${event.title}</strong>
        ${event.description}
        <small>Haz clic para ver más detalles</small>
      `;
      document.body.appendChild(tooltipElement);
      
      // Position near cursor
      const rect = eventEl.getBoundingClientRect();
      const tooltipRect = tooltipElement.getBoundingClientRect();
      
      let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
      let top = rect.top - tooltipRect.height - 10;
      
      // Adjust if tooltip goes off screen
      if (left < 10) left = 10;
      if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
      }
      if (top < 10) {
        top = rect.bottom + 10; // Show below if no room above
      }
      
      tooltipElement.style.left = left + 'px';
      tooltipElement.style.top = top + 'px';
    });
    
    eventEl.addEventListener('mouseleave', () => {
      if (tooltipElement) {
        tooltipElement.remove();
        tooltipElement = null;
      }
    });
    
    container.appendChild(eventEl);
  });
}

function showEventModal(event) {
  const modal = document.getElementById('eventModal');
  const modalBody = document.getElementById('modalBody');
  
  // Find related events (same year or nearby)
  const relatedEvents = findRelatedEvents(event);
  
  // Determine importance note based on event
  const importanceNote = getImportanceNote(event);
  
  let relatedHTML = '';
  if (relatedEvents.length > 0) {
    relatedHTML = `
      <div class="modal-section">
        <h3><span class="modal-section-icon">🔗</span> Eventos Relacionados</h3>
        <ul>
          ${relatedEvents.map(e => `<li><strong>${e.year}:</strong> ${e.title}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  modalBody.innerHTML = `
    <h2>${event.title}</h2>
    <div class="modal-period" style="color: ${event.color}; border-color: ${event.color};">
      ${event.period} - ${event.year < 0 ? Math.abs(event.year) + ' a.C.' : event.year}
    </div>
    <p><strong>${event.description}</strong></p>
    
    <div class="modal-section">
      <h3><span class="modal-section-icon">📝</span> Detalles</h3>
      <p>${event.details}</p>
    </div>
    
    ${importanceNote ? `
      <div class="modal-section">
        <h3><span class="modal-section-icon">💡</span> ¿Por qué es importante?</h3>
        <div class="importance-note">${importanceNote}</div>
      </div>
    ` : ''}
    
    ${relatedHTML}
  `;
  
  modal.classList.add('active');
}

function findRelatedEvents(event) {
  const allEvents = [...literatureEvents, ...historyEvents];
  const related = [];
  
  // Find events within 5 years
  allEvents.forEach(e => {
    if (e !== event && Math.abs(e.year - event.year) <= 5 && Math.abs(e.year - event.year) > 0) {
      related.push(e);
    }
  });
  
  // Sort by proximity and limit to 5
  return related
    .sort((a, b) => Math.abs(a.year - event.year) - Math.abs(b.year - event.year))
    .slice(0, 5);
}

function getImportanceNote(event) {
  // Generate contextual importance notes based on event category and content
  const notes = {
    'Eugenio Espejo': 'Espejo representa el pensamiento ilustrado en América colonial. Su obra sentó las bases del pensamiento crítico ecuatoriano y anticipa la independencia.',
    'Cumandá': 'Primera gran novela ecuatoriana con proyección internacional. Establece el indigenismo romántico como tema central de la literatura nacional.',
    'Huasipungo': 'Obra cumbre del indigenismo ecuatoriano. Denuncia brutal de explotación indígena que impactó internacionalmente y marcó el realismo social latinoamericano.',
    'Los Sangurimas': 'Considerada antecedente de la novela total latinoamericana. José de la Cuadra anticipa técnicas del boom con su complejidad narrativa y estructura carnavalesca. Obra maestra del realismo social montuvio.',
    'Nuestro Pan': 'Una de las mejores novelas del realismo social ecuatoriano. Combina denuncia de la explotación laboral con alta calidad literaria. Enrique Gil Gilbert retrata magistralmente la vida de los trabajadores arroceros.',
    'Baldomera': 'Novela pionera que da voz protagónica a una mujer afroecuatoriana. Alfredo Pareja Diezcanseco rompe estereotipos raciales y de género, presentando un personaje con profundidad psicológica sin precedentes en la literatura ecuatoriana.',
    'Generación Decapitada': 'Renovación modernista de la poesía ecuatoriana. Introduce simbolismo y temáticas existenciales. Su trágico destino los convirtió en mito literario.',
    'Batalla de Pichincha': 'Independencia definitiva de Ecuador del imperio español. Marca el inicio de la vida republicana y la construcción de la identidad nacional.',
    'Masacre de trabajadores': 'Punto de inflexión en la historia social ecuatoriana. Marca el fin del liberalismo progresista y el surgimiento del movimiento obrero organizado.',
    'Dolarización': 'Cambio económico más radical en la historia reciente. Estabilizó la economía pero limitó soberanía monetaria.',
    'Grupo de Guayaquil': 'Movimiento fundacional del realismo social ecuatoriano. José de la Cuadra, Joaquín Gallegos Lara, Enrique Gil Gilbert, Demetrio Aguilera Malta y Alfredo Pareja Diezcanseco renovaron la narrativa ecuatoriana con compromiso social y calidad literaria.',
  };
  
  // Check if event title contains any key phrases
  for (const [key, note] of Object.entries(notes)) {
    if (event.title.includes(key) || event.description.includes(key)) {
      return note;
    }
  }
  
  // Generic importance notes by category
  if (event.category === 'colonial') {
    return 'El período colonial sentó las bases de la cultura ecuatoriana, mezclando tradiciones indígenas, europeas y africanas.';
  } else if (event.category === 'romanticismo') {
    return 'El romanticismo ecuatoriano construyó la identidad nacional post-independencia a través de la literatura.';
  } else if (event.category === 'modernismo') {
    return 'El modernismo renovó la estética literaria ecuatoriana, incorporando influencias europeas y expresando la angustia existencial.';
  } else if (event.category === 'realismo') {
    return 'El realismo social ecuatoriano (1930-1950) denunció injusticias y dio voz a sectores marginados: indígenas, montuvios, trabajadores urbanos y afrodescendientes. El Grupo de Guayaquil (De la Cuadra, Gallegos Lara, Gil Gilbert, Aguilera Malta, Pareja Diezcanseco) y Jorge Icaza son sus máximos exponentes.';
  } else if (event.category === 'contemporaneo') {
    return 'La literatura ecuatoriana contemporánea se caracteriza por diversidad temática, experimentación formal y creciente reconocimiento internacional.';
  }
  
  return null;
}

function closeModal() {
  document.getElementById('eventModal').classList.remove('active');
}

function closeIntro() {
  document.getElementById('introPanel').classList.add('hidden');
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Prevent rapid clicking
      if (isScrolling) return;
      
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      const startYear = btn.dataset.startYear;
      const endYear = btn.dataset.endYear;
      
      activeFilter = filter;
      
      if (filter === 'all') {
        resetFilter();
      } else {
        applyFilterWithScroll(filter, parseInt(startYear), parseInt(endYear));
      }
    });
  });
}

function applyFilter(filter) {
  const allEvents = document.querySelectorAll('.timeline-event');
  
  allEvents.forEach(event => {
    if (filter === 'all') {
      event.style.display = 'flex';
      event.style.opacity = '1';
      event.classList.remove('highlighted', 'dimmed');
    } else if (event.dataset.category === filter) {
      event.style.display = 'flex';
      event.style.opacity = '1';
      event.classList.add('highlighted');
      event.classList.remove('dimmed');
    } else {
      event.style.opacity = '0.4';
      event.classList.remove('highlighted');
      event.classList.add('dimmed');
    }
  });
}

function applyFilterWithScroll(filter, startYear, endYear) {
  // First scroll to the period
  scrollToYear(startYear);
  
  // Then apply the filter with highlighting
  const allEvents = document.querySelectorAll('.timeline-event');
  
  allEvents.forEach(event => {
    const eventYear = parseInt(event.dataset.year);
    
    if (event.dataset.category === filter) {
      event.style.display = 'flex';
      event.style.opacity = '1';
      event.classList.add('highlighted');
      event.classList.remove('dimmed');
    } else {
      event.style.opacity = '0.4';
      event.classList.remove('highlighted');
      event.classList.add('dimmed');
    }
  });
}

function scrollToYear(targetYear) {
  isScrolling = true;
  
  const container = document.getElementById('timelineContainer');
  const wrapper = document.getElementById('timelineWrapper');
  
  // Calculate the pixel position of the target year
  // Position is relative to the timeline wrapper width
  const wrapperWidth = wrapper.offsetWidth;
  const containerWidth = container.offsetWidth;
  
  // Calculate position as percentage of timeline range
  const yearPosition = ((targetYear - TIMELINE_START_YEAR) / TIMELINE_RANGE);
  
  // Convert to pixel position (accounting for 80px left padding)
  const pixelPosition = (yearPosition * (wrapperWidth - 80)) + 80;
  
  // Center the year in the viewport
  const scrollPosition = pixelPosition - (containerWidth / 2);
  
  // Smooth scroll to position
  container.scrollTo({
    left: Math.max(0, scrollPosition),
    behavior: 'smooth'
  });
  
  // Reset scrolling flag after animation completes
  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

function resetFilter() {
  const allEvents = document.querySelectorAll('.timeline-event');
  
  allEvents.forEach(event => {
    event.style.display = 'flex';
    event.style.opacity = '1';
    event.classList.remove('highlighted', 'dimmed');
  });
  
  // Optionally scroll back to start or a central position
  const container = document.getElementById('timelineContainer');
  container.scrollTo({
    left: 0,
    behavior: 'smooth'
  });
}

function zoomIn() {
  if (currentZoom < 2) {
    currentZoom += 0.2;
    applyZoom();
  }
}

function zoomOut() {
  if (currentZoom > 0.5) {
    currentZoom -= 0.2;
    applyZoom();
  }
}

function resetZoom() {
  currentZoom = 1;
  applyZoom();
}

function applyZoom() {
  const wrapper = document.getElementById('timelineWrapper');
  wrapper.style.transform = `scale(${currentZoom})`;
  document.getElementById('zoomLevel').textContent = Math.round(currentZoom * 100) + '%';
}

function scrollTimeline(amount) {
  const container = document.getElementById('timelineContainer');
  container.scrollLeft += amount;
}

function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Don't trigger shortcuts if user is in an input field
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollTimeline(200);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollTimeline(-200);
    } else if (e.key === 'Escape') {
      closeModal();
      closeKeyboardHelp();
    } else if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      zoomIn();
    } else if (e.key === '-' || e.key === '_') {
      e.preventDefault();
      zoomOut();
    } else if (e.key === '?' || e.key === '/') {
      e.preventDefault();
      showKeyboardHelp();
    } else if (e.key.toLowerCase() === 'h') {
      e.preventDefault();
      scrollToYear(TIMELINE_START_YEAR);
    } else if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      toggleTheme();
    }
  });
}

// Close modal when clicking outside
document.getElementById('eventModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'eventModal') {
    closeModal();
  }
});

// Close keyboard help modal when clicking outside
document.getElementById('keyboardHelpModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'keyboardHelpModal') {
    closeKeyboardHelp();
  }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (currentTheme === 'auto') {
    updateThemeIcon(e.matches ? 'dark' : 'light');
  }
});

// Initialize on load
window.addEventListener('DOMContentLoaded', initTimeline);

// Update minimap on window resize
window.addEventListener('resize', () => {
  if (scrollDebounceTimer) {
    clearTimeout(scrollDebounceTimer);
  }
  scrollDebounceTimer = setTimeout(() => {
    updateMinimapViewport();
  }, 100);
});