// Revisión teórica y auditoría integral: 5 de noviembre de 2026.
const SOURCES = {
  "zecchetto": {
    "name": "Victorino Zecchetto · La danza de los signos",
    "detail": "Síntesis introductoria del curso, 2002. Cap. 1, «¿Qué es la semiótica?»; cap. 2, naturaleza y cultura; cap. 3, «Los vericuetos históricos del signo». Leer en diálogo con las fuentes primarias de cada ficha: el vocabulario de los modelos no es intercambiable."
  },
  "seis": {
    "name": "Zecchetto y colaboradores · Seis semiólogos en busca del lector",
    "detail": "Síntesis introductoria del curso. Capítulos sobre Peirce, Saussure, Barthes, Greimas y Eco. Para fuerzas temáticas: capítulo de Greimas, recuadro «El investimiento temático», páginas PDF 188–190; reproduce y comenta Semántica estructural y el inventario de Souriau. Complementar con el diccionario para modalidades y roles."
  },
  "platon": {
    "name": "Platón · Crátilo",
    "detail": "Fuente primaria. Leer 383a–384e (naturaleza y convención), 388b–390d (el nombre como instrumento), 434e–435d (uso y convención) y 438d–439b (conocer las cosas). Numeración Stephanus; la traducción de Jowett alojada por MIT no imprime todos esos marcadores.",
    "url": "https://classics.mit.edu/Plato/cratylus.html"
  },
  "aristoteles": {
    "name": "Aristóteles · Sobre la interpretación",
    "detail": "Fuente primaria. Capítulos 1–4: 16a1–18, 16a19–29 y 16b26–17a7. Habla, escritura, afecciones del alma y cosas; nombre por convención; enunciación susceptible de verdad o falsedad. Numeración Bekker. Traducción inglesa de E. M. Edghill en MIT.",
    "url": "https://classics.mit.edu/Aristotle/interpretation.1.1.html"
  },
  "agustin": {
    "name": "Agustín · Sobre la doctrina cristiana",
    "detail": "Fuente primaria de la Antigüedad tardía. Libro II, 1.1–4.5: definición del signo, signa naturalia y signa data, lugar de las palabras y escritura. La traducción inglesa usa «conventional» para data; distinguir el criterio de intención comunicativa del de convención.",
    "url": "https://www.newadvent.org/fathers/12022.htm"
  },
  "port": {
    "name": "Arnauld, Lancelot y Nicole · Port Royal",
    "detail": "Gramática general y razonada, 1660. La lógica o el arte de pensar, 1662. Fechas contrastadas en el catálogo de la BnF.",
    "url": "https://catalogue.bnf.fr/ark%3A/12148/cb354058721"
  },
  "peirce": {
    "name": "C. S. Peirce · El icono, el índice y el símbolo",
    "detail": "Fuente primaria. Textos de c. 1893–1903. Traducción del Grupo de Estudios Peirceanos, Universidad de Navarra. Leer las definiciones de ícono, índice y símbolo y los signos mixtos (CP 2.293 y 2.302). Complementar con «Pragmatismo» y la carta de 1909.",
    "url": "https://www.unav.es/gep/IconoIndiceSimbolo.html"
  },
  "saussure": {
    "name": "Ferdinand de Saussure · Curso de lingüística general",
    "detail": "Publicación póstuma de 1916, preparada por Bally y Sechehaye con colaboración de Riedlinger. PDF del curso: Losada, 24.ª edición, 1986; traducción de Amado Alonso. Primera parte, cap. I, pp. 91–94; segunda parte, cap. IV, especialmente pp. 139–144. Páginas PDF: una menos que la página impresa."
  },
  "frege": {
    "name": "Gottlob Frege · Sobre sentido y referencia",
    "detail": "1892. Texto primario en traducción inglesa de Max Black, «On Sinn and Bedeutung». Facsímil: pp. 151–155, identidad, modo de presentación y diferencia entre sentido e imagen subjetiva; pp. 156–159, referencia y verdad. No confundir la numeración de esta recopilación con la del artículo original.",
    "url": "https://fitelson.org/125/Frege_on_sense_and_reference.pdf"
  },
  "ogden": {
    "name": "C. K. Ogden e I. A. Richards · The Meaning of Meaning",
    "detail": "1923. Capítulo I, pp. 10–12, especialmente el triángulo de p. 11 y la explicación de su base discontinua. Extracto primario alojado en MIT. La nota de p. 12 introduce una salvedad para signos semejantes al referente.",
    "url": "https://courses.media.mit.edu/2004spring/mas966/Ogden%20Richards%201923.pdf"
  },
  "morris": {
    "name": "Charles W. Morris · Foundations of the Theory of Signs",
    "detail": "1938, reproducido en Writings on the General Theory of Signs (1971). Vista previa editorial: II.1–2, naturaleza del signo y dimensiones; III, sintáctica; IV, semántica; V, pragmática. La paginación de esta recopilación difiere de la monografía de 1938.",
    "url": "https://api.pageplace.de/preview/DT0400.9783110810592_A22127145/preview-9783110810592_A22127145.pdf"
  },
  "hjelmslev": {
    "name": "Louis Hjelmslev · Prolegómenos a una teoría del lenguaje",
    "detail": "Original danés, 1943. Versión española de José Luis Díaz de Liaño, Gredos: §13, «Expresión y contenido»; §22, «Semióticas connotativas y metasemióticas». Texto primario digitalizado con OCR, de lectura pública en el enlace; cotejar erratas de reconocimiento. Complementar con Barthes, Elementos de semiología, II.1.3, PDF del curso.",
    "url": "https://es.scribd.com/document/494092927/Hjelmslev-Louis-1943-Prolegomenos-a-Una-Teoria-Del-Lenguaje-pdf-Version-1"
  },
  "imagen": {
    "name": "Roland Barthes · Retórica de la imagen",
    "detail": "Fuente primaria. «Rhétorique de l’image», 1964, Communications, 4, pp. 40–51. Leer «Les trois messages», «Le message linguistique», «L’image dénotée» y «Rhétorique de l’image». Distinguir anclaje y relevo, y situar históricamente el mensaje fotográfico «sin código».",
    "url": "https://www.persee.fr/doc/comm_0588-8018_1964_num_4_1_1027"
  },
  "relato": {
    "name": "Roland Barthes · Introducción al análisis estructural de los relatos",
    "detail": "1966. Communications, 8, pp. 1–27. También en La aventura semiológica, lectura del curso.",
    "url": "https://www.persee.fr/doc/comm_0588-8018_1966_num_8_1_1113"
  },
  "eco": {
    "name": "Umberto Eco · Tratado de semiótica general",
    "detail": "Fuente primaria. Obra italiana de 1975; edición inglesa de 1976. PDF del curso: traducción de Carlos Manzano, Lumen, 5.ª edición, 2000. Lectura guiada: 0.3, «Comunicación y/o significación», pp. 24–25; 2.1, «La función semiótica», pp. 83–85; 2.6–2.7, significado e interpretante, desde p. 111. La paginación impresa coincide con la del PDF consultado.",
    "url": "https://iupress.org/9780253013316/a-theory-of-semiotics/"
  },
  "ilusion": {
    "name": "Umberto Eco · La estrategia de la ilusión",
    "detail": "Fuente primaria del curso. Traducción de Edgardo Oviedo, edición española Lumen, 1986. Es una recopilación de ensayos de distintas fechas. Leer «Viaje a la hiperrealidad», especialmente las páginas 13–15 y 50–54 del archivo digital suministrado; estos números corresponden al PDF, no a la edición impresa. El archivo es una conversión de ePub y sus metadatos editoriales requieren cautela."
  },
  "lotman": {
    "name": "Yuri Lotman · Acerca de la semiosfera",
    "detail": "Fuente primaria. Original ruso, 1984. Traducción de Wilma Clark: «On the semiosphere», Sign Systems Studies 33(1), 2005, pp. 205–229. Leer especialmente frontera, heterogeneidad, centro y periferia.",
    "url": "https://ojs.utlib.ee/index.php/sss/article/view/SSS.2005.33.1.09"
  },
  "veron": {
    "name": "Eliseo Verón · La semiosis social",
    "detail": "Fuente primaria. Primera edición, 1987; digitalización de una edición de 1993. Capítulo «El sentido como producción discursiva», especialmente pp. 124–129: condiciones, gramáticas, marcas, huellas y circulación. La página 129 define circulación como diferencia entre producción y reconocimiento.",
    "url": "https://colorysemiotica.wordpress.com/wp-content/uploads/2014/08/veron1993.pdf"
  },
  "kress": {
    "name": "Gunther Kress · Multimodality",
    "detail": "Fuente primaria de ampliación: A Social Semiotic Approach to Contemporary Communication, Routledge, 2010. Lectura guiada según el índice del libro publicado: cap. 3, «Communication: shaping the domain of meaning», desde p. 32; cap. 5, «Mode», desde p. 79; cap. 7, «Design and arrangements: making meaning material», desde p. 132; cap. 8, «Multimodal orchestrations and ensembles of meaning», desde p. 159. El enlace permite consultar la vista bibliográfica y el índice; la lectura íntegra puede requerir acceso bibliotecario.",
    "url": "https://books.google.com/books/about/Multimodality.html?id=ihTm_cI58JQC"
  },
  "hipocratico": {
    "name": "Corpus hipocrático · Pronóstico",
    "detail": "Fuente primaria antigua, tradicionalmente atribuida a Hipócrates. Leer el apartado 1: conocimiento del presente, reconstrucción del pasado y pronóstico. Traducción inglesa de Francis Adams en Internet Classics Archive, MIT. La fecha y la autoría de los tratados del corpus no deben tratarse como uniformes.",
    "url": "https://classics.mit.edu/Hippocrates/prognost.1.1.html"
  },
  "aristotelesRetorica": {
    "name": "Aristóteles · Retórica",
    "detail": "Fuente primaria. Libro I, capítulo 2, 1357a–1357b: probabilidades, signos y tekmḗrion. Atender especialmente a la posibilidad de refutar un argumento aunque su indicio sea verdadero. Los ejemplos fisiológicos antiguos se leen como ejemplos históricos, no como reglas clínicas actuales.",
    "url": "https://classics.mit.edu/Aristotle/rhetoric.1.i.html"
  },
  "estoicosSexto": {
    "name": "Sexto Empírico · Contra los matemáticos, libro VIII",
    "detail": "Testimonio antiguo sobre la doctrina estoica, escrito por un crítico escéptico. VIII, 11–12: voz, significado y objeto externo; VIII, 70–74: lektá, enunciados completos y aserciones. También se conoce como Contra los lógicos II. Texto griego digital para contraste; lectura docente mediante traducción identificada.",
    "url": "https://eulogikon.org/works/sextus-empiricus-against-mathematicians-book-8-qou-aab"
  },
  "aquinoInterpretacion": {
    "name": "Tomás de Aquino · Comentario a Sobre la interpretación",
    "detail": "Fuente primaria. Libro I, lección 2, especialmente §§2–5: función social de la voz, escritura a distancia y concepciones intelectuales como mediación. Texto latino junto a la traducción de Jean T. Oesterle, Marquette University Press, 1962, reproducido en línea.",
    "url": "https://isidore.co/aquinas/PeriHermeneias.htm"
  },
  "ockhamLenguaje": {
    "name": "Guillermo de Ockham · Summa de lógica I, 1",
    "detail": "Fuente primaria. Cap. 1, especialmente §§3–10: términos mentales, orales y escritos; significación natural e instituida; subordinación de las voces a los conceptos sin que siempre signifiquen conceptos. Complemento: I, 14, universal y singular. Texto latino e inglés en The Logic Museum.",
    "url": "https://www.logicmuseum.com/wiki/Authors/Ockham/Summa_Logicae/Book_I/Chapter_1"
  },
  "ockhamSuposicion": {
    "name": "Guillermo de Ockham · Summa de lógica I, 64",
    "detail": "Fuente primaria. Cap. 64: suposición personal, simple y material. Personal significa uso por los significados del término, no exclusivamente por personas. Material significa uso por una voz o inscripción. Texto latino e inglés en The Logic Museum.",
    "url": "https://www.logicmuseum.com/wiki/Authors/Ockham/Summa_Logicae/Book_I/Chapter_64"
  },
  "poinsotSignos": {
    "name": "Juan Poinsot · Tractatus de signis",
    "detail": "Materiales del Ars logica de 1632. Edición y ordenación interpretativa de John N. Deely con Ralph Austin Powell, University of California Press, 1985. Leer el texto introductorio de las Summulae sobre definición y división del signo; libro I, cuestión 1; libro II, cuestiones 1–2. El enlace identifica la edición bilingüe de referencia; el acceso completo puede requerir biblioteca.",
    "url": "https://www.nlx.com/collections/101"
  },
  "descartesDiscurso": {
    "name": "René Descartes · Discurso del método",
    "detail": "Fuente primaria, 1637. Quinta parte: pasajes finales sobre máquinas, palabras y otros signos como manifestación de pensamiento. Traducción o lectura francesa con atención al contexto histórico. Edición francesa de Victor Cousin, 1824, reproducida en Wikisource.",
    "url": "https://fr.wikisource.org/wiki/Discours_de_la_m%C3%A9thode_(%C3%A9d._Cousin)/Cinqui%C3%A8me_partie"
  },
  "portGramatica": {
    "name": "Antoine Arnauld y Claude Lancelot · Gramática general y razonada",
    "detail": "Fuente primaria, 1660. Segunda parte, capítulo I: concebir, juzgar y razonar; palabras como signos de los pensamientos. Transcripción de la edición de Pierre le Petit, 1660, con facsímil en Wikisource.",
    "url": "https://fr.wikisource.org/wiki/Grammaire_g%C3%A9n%C3%A9rale_et_raisonn%C3%A9e/Texte_entier"
  },
  "portLogica": {
    "name": "Antoine Arnauld y Pierre Nicole · La lógica o el arte de pensar",
    "detail": "Primera publicación: 1662. Primera parte, capítulo IV, «Des idées des choses et des idées des signes». Idea del objeto en sí e idea del signo; representación; signos ciertos y probables. El enlace lleva a la página 47 de la edición Belin, 1878, con facsímil; no es una página de la edición original.",
    "url": "https://fr.wikisource.org/wiki/Page:Arnauld_et_Nicole_-_Logique_de_Port-Royal,_Belin,_1878.djvu/71"
  },
  "lockeEnsayo": {
    "name": "John Locke · Ensayo sobre el entendimiento humano IV, XXI",
    "detail": "Fuente primaria. Libro IV, capítulo XXI, §§1–5, en especial §4: división de las ciencias y doctrina de los signos, sēmeiōtikē. Texto inglés. La fecha 1690 corresponde al año de la portada de la primera edición; no implica que Locke inventara toda reflexión sobre signos.",
    "url": "https://barryfvaughan.org/text/philtext/locke/bk4/21.html"
  },
  "lockePalabras": {
    "name": "John Locke · Ensayo sobre el entendimiento humano III, II",
    "detail": "Fuente primaria. Libro III, capítulo II, §§1–8: palabras como signos de ideas, significación inmediata, supuesta coincidencia entre interlocutores y referencia a las cosas. Texto inglés.",
    "url": "https://barryfvaughan.org/text/philtext/locke/bk3/2.html"
  },
  "condillacEnsayo": {
    "name": "Étienne Bonnot de Condillac · Ensayo sobre el origen de los conocimientos humanos",
    "detail": "Fuente primaria, 1746. Primera parte, sección II, capítulos IV–V, especialmente §35: signos accidentales, naturales y de institución, y desarrollo de operaciones mentales. Complementar con segunda parte, sección I, capítulo I, lenguaje de acción. Transcripción enlazada a facsímiles de la edición de Mortier, 1746; revisar el facsímil cuando la página figure sin corregir.",
    "url": "https://fr.wikisource.org/wiki/Essai_sur_l%E2%80%99origine_des_connaissances_humaines"
  },
  "mcnabb": {
    "name": "Darin McNabb · Hombre, signo y cosmos",
    "detail": "Estudio interpretativo. Fondo de Cultura Económica, 2018. Capítulo sobre semiótica: «Los signos de Peirce», «El interpretante» y clasificación de los signos. PDF del curso, especialmente páginas PDF 76–89; la paginación digital coincide allí con la numeración visible."
  },
  "peirceSemiosis": {
    "name": "C. S. Peirce · Pragmatismo",
    "detail": "1907, MS 318; traducción de Sara Barrena, Grupo de Estudios Peirceanos. Pasaje que define la semiosis como cooperación irreductible de signo, objeto e interpretante; discusión posterior del hábito.",
    "url": "https://www.unav.es/gep/PragmatismoPeirce.html"
  },
  "peirceJames": {
    "name": "C. S. Peirce · Carta a William James",
    "detail": "14 de marzo de 1909. Traducción de Ignacio Redondo, Grupo de Estudios Peirceanos. Objetos inmediato y dinámico e interpretantes inmediato, dinámico y final.",
    "url": "https://www.unav.es/gep/James14.03.09(2)Espanol.html"
  },
  "barthes_elementos": {
    "name": "Roland Barthes · Elementos de semiología",
    "detail": "Fuente primaria. 1964. Sección IV, «Denotación y connotación», apartados IV.1–IV.3. En el PDF del curso, edición castellana de 1971: pp. impresas 91–93, páginas PDF 89–91. Comparar connotación y metalenguaje."
  },
  "barthes_mitologias": {
    "name": "Roland Barthes · Mitologías: «El mito, hoy»",
    "detail": "Fuente primaria. 1957. Apartados sobre el mito como sistema semiológico, la forma y el concepto, lectura del mito y habla despolitizada. Traducción inglesa de Annette Lavers, alojada por la Universitat de València; se cita por apartados porque la versión HTML no conserva paginación.",
    "url": "https://www.uv.es/~fores/programa/barthes_myth.html"
  },
  "barthes_aventura_relato": {
    "name": "Roland Barthes · La aventura semiológica: análisis estructural de los relatos",
    "detail": "Fuente primaria. Ensayo original de 1966. En el PDF del curso: p. 170, niveles; pp. 174–178, funciones cardinales, catálisis, indicios e informantes; pp. 185–190, acciones y narración. Páginas impresas verificadas en el escaneo."
  },
  "greimas_diccionario": {
    "name": "A. J. Greimas y J. Courtés · Semiótica. Diccionario razonado de la teoría del lenguaje",
    "detail": "Fuente primaria, PDF del curso. «Actante», pp. 23–25; «Actor», pp. 27–28; «Enunciado», especialmente p. 147; «Figurativo», p. 178; «Junción», pp. 233–234; «Modalidad», pp. 262–264; «Tema» y «Temático», pp. 404–405. Paginación del ejemplar local."
  },
  "greimas_modalidades": {
    "name": "A. J. Greimas · Pour une théorie des modalités",
    "detail": "Fuente primaria. 1976. Langages, 43, pp. 90–107. Apartado I, «Les structures modales simples»: el acto, el predicado y la relación entre hacer y ser. Complementar con «Modalidad» en el diccionario del curso.",
    "url": "https://www.persee.fr/doc/lgge_0458-726x_1976_num_10_43_2322"
  },
  "eco_lectura": {
    "name": "Umberto Eco · Interpretation and Overinterpretation",
    "detail": "Fuente primaria. Conferencias Tanner pronunciadas en Cambridge, 7–8 de marzo de 1990. Leer los pasajes sobre model reader, intentio operis y textual coherence. Complementa Lector in fabula (1979); no pertenece al Tratado de 1975.",
    "url": "https://tannerlectures.org/documents/eco_91/"
  },
  "ilusion_catalogo": {
    "name": "Archivo Mondadori · Registro de la edición española de Eco",
    "detail": "Control bibliográfico. Ficha 365: La estrategia de la ilusión, Lumen, primera edición española, 1986; selección de Il costume di casa, Dalla periferia dell'impero y Sette anni di desiderio. No respalda fechar toda la recopilación italiana en 1983.",
    "url": "https://www.fondazionemondadori.it/livre/01_I%20pareri/012_I_percorsi/0125_La_fortuna_degli_italiani_all_estero/Scheda_traduzioni_01.htm"
  },
  "uexkull": {
    "name": "Jakob von Uexküll · Andanzas por los mundos de animales y seres humanos",
    "detail": "Fuente primaria. Texto de 1934, prefacio: mundo perceptivo y mundo de efectos. Extracto traducido en German History Intersections, proyecto del German Historical Institute. La aplicación al jardín de la ficha es didáctica.",
    "url": "https://germanhistory-intersections.org/en/knowledge-and-education/ghis:document-143"
  },
  "sebeok": {
    "name": "Thomas A. Sebeok · Signs: An Introduction to Semiotics",
    "detail": "Fuente primaria. Primera edición, 1994; segunda, University of Toronto Press, 2001. Cap. 1, «Basic Notions», pp. 3–11, y cap. 2, «A Biological Approach to the Study of Signs», desde p. 27. Se ofrece una digitalización del texto; distinguir sus tesis de las aplicaciones propuestas en clase.",
    "url": "https://circulosemiotico.wordpress.com/wp-content/uploads/2012/10/sebeok_thomas_signs_an_introduction_to_semiocs_2nd_ed_2001.pdf"
  },
  "ia_forma": {
    "name": "Emily M. Bender y Alexander Koller · Forma, significado y comprensión",
    "detail": "Artículo de posición primario: «Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data», ACL, 2020, pp. 5185–5198. Su tesis se refiere al aprendizaje basado únicamente en forma. Se utiliza como posición para discutir, no como veredicto sobre todos los sistemas actuales.",
    "url": "https://aclanthology.org/2020.acl-main.463/"
  }
};
const PERIODS = ["Antigüedad","Medioevo","Modernidad","Fundamentos modernos","Textos y cultura","Debates actuales"];
const ENTRIES = [
  {
    "id": "origenes",
    "year": -450,
    "date": "Siglo V a. C.",
    "era": 0,
    "unit": 1,
    "name": "Los primeros indicios",
    "title": "De lo visible a lo que inferimos",
    "concept": "Indicio y conocimiento",
    "intro": "Antes de existir una disciplina llamada semiótica, la medicina y la filosofía griegas ya preguntaban cómo conocer lo que no se presenta directamente a los sentidos.",
    "body": [
      "Sēmeîon significa signo o señal en griego. En los escritos del corpus hipocrático, atribuidos tradicionalmente a Hipócrates, observar el cuerpo ayuda a reconocer el curso de una enfermedad. El Pronóstico vincula el estado presente con la reconstrucción del pasado y la anticipación de lo que podría ocurrir.",
      "La operación decisiva consiste en pasar de algo manifiesto a algo que requiere explicación. Se observa una condición corporal y se la interpreta dentro de un conjunto de antecedentes. Por eso, percibir una marca y comprender qué permite conocer son actividades relacionadas, pero diferentes: la observación necesita una relación que justifique la inferencia.",
      "Como aplicación actual, un paraguas mojado puede apoyar la hipótesis de lluvia. Sin embargo, la humedad también podría proceder de una limpieza. La explicación gana fuerza al combinar datos pertinentes, como el estado de la calle y el momento en que llegó su dueño. El ejemplo ilustra el problema; no reproduce una teoría médica antigua.",
      "Este antecedente enseña a separar observación, interpretación y grado de certeza. No establece una fundación única de la semiótica ni convierte todo síntoma en una prueba concluyente. La historia que sigue reúne problemas distintos —conocer, nombrar, argumentar y comunicar— que posteriormente formarán parte de diversas teorías del signo."
    ],
    "model": [
      "Observación",
      "Relación inferida",
      "Hipótesis"
    ],
    "example": "Caso didáctico: encuentras varios paraguas mojados en el aula. Propones que llovió, pero averiguas también si acaban de llegar y si la calle está húmeda. Buscas evidencia para comparar esa explicación con otras.",
    "question": "¿Qué permite sostener mejor la hipótesis de que llovió?",
    "options": [
      "Combinar los paraguas mojados con datos pertinentes de lugar y tiempo",
      "Convertir una observación aislada en certeza por repetición",
      "Suponer que una misma marca siempre tiene una única causa"
    ],
    "answer": 0,
    "feedback": "Una inferencia se fortalece con observaciones pertinentes y al considerar explicaciones alternativas. La marca visible no contiene por sí sola una conclusión infalible.",
    "reading": [
      "zecchetto",
      "hipocratico"
    ],
    "prompt": "Describe un indicio del entorno universitario. Separa lo observado, la hipótesis y una explicación alternativa; indica qué información ayudaría a decidir."
  },
  {
    "id": "platon",
    "year": -380,
    "date": "Siglo IV a. C.",
    "era": 0,
    "unit": 1,
    "name": "Platón",
    "title": "¿Qué relación tienen los nombres con las cosas?",
    "concept": "Naturaleza y convención",
    "intro": "El Crátilo investiga la corrección de los nombres: si se ajustan a las cosas por naturaleza o si dependen de acuerdos y usos humanos.",
    "body": [
      "Hermógenes defiende que el nombre se establece por convención y costumbre; Crátilo sostiene que posee una corrección natural. Sócrates examina ambas posiciones. El diálogo pone a prueba sus consecuencias, de modo que no conviene convertir la intervención de un personaje en la respuesta definitiva de Platón sobre todo el lenguaje.",
      "Un nombre aparece como instrumento para enseñar y distinguir las cosas. La comparación con otros instrumentos permite preguntar si cualquier denominación cumple igualmente bien su función. La cuestión rebasa el sonido: incluye quién establece los nombres, con qué conocimiento lo hace y cómo se reconoce una denominación adecuada.",
      "Las exploraciones de etimologías y semejanzas son sometidas a examen dentro del propio diálogo. En su tramo final, el hábito y la convención adquieren relevancia incluso para explicar nombres que no imitan perfectamente. Además, conocer las cosas exige investigarlas; no basta con aceptar lo que sus nombres parecen decir sobre ellas.",
      "La variación entre «aguacate» y «palta» sirve como comparación contemporánea: una misma cosa puede recibir denominaciones aprendidas en comunidades diferentes. Esto abre el problema de la convención, sin resolver por sí solo todo el debate platónico. El aporte del Crátilo consiste en volver problemática la relación entre nombrar correctamente y conocer."
    ],
    "model": [
      "Nombre",
      "Convención / adecuación",
      "Cosa conocida"
    ],
    "example": "Caso didáctico: dos estudiantes conocen la misma fruta como «aguacate» y «palta». Pueden reconocerla y describirla aunque hayan aprendido nombres diferentes. El caso invita a discutir el papel del uso compartido.",
    "question": "¿Qué cuestión del Crátilo permite examinar este ejemplo?",
    "options": [
      "Si conocer la etimología basta siempre para conocer la cosa",
      "Si la corrección de los nombres depende de naturaleza, convención o ambas",
      "Si dos nombres diferentes obligan a admitir dos objetos distintos"
    ],
    "answer": 1,
    "feedback": "El diálogo examina las pretensiones del naturalismo y del convencionalismo. La diversidad de nombres aporta un caso para discutir, no una solución automática.",
    "reading": [
      "zecchetto",
      "platon"
    ],
    "prompt": "Elige un nombre que parezca imitar un sonido y otro aprendido por convención. Explica qué permiten discutir y qué no demuestran acerca del Crátilo."
  },
  {
    "id": "aristoteles",
    "year": -350,
    "date": "Siglo IV a. C.",
    "era": 0,
    "unit": 1,
    "name": "Aristóteles",
    "title": "Palabras, pensamiento y realidad",
    "concept": "Convención y proposición",
    "intro": "Aristóteles distingue las expresiones, las afecciones del alma y las cosas; además, explica por qué nombrar, afirmar e inferir cumplen funciones diferentes.",
    "body": [
      "Al comenzar Sobre la interpretación, Aristóteles relaciona la escritura con el habla, las expresiones habladas con las afecciones del alma y estas con las cosas. Hablas y escrituras varían entre comunidades. Su explicación sitúa la significación verbal en una relación con el pensamiento y la realidad, dentro de una investigación lógica.",
      "El nombre significa por convención. «Puerta» permite identificar aquello de lo que hablamos, pero aislada no afirma que exista una puerta abierta. La verdad y la falsedad aparecen cuando se combina o separa algo mediante una afirmación o negación. Además, una expresión significativa puede cumplir otras funciones: una petición no es por ello verdadera o falsa.",
      "En la Retórica, el problema es la fuerza de los signos usados para argumentar. Un indicio puede apoyar una conclusión y admitir refutación; el tekmḗrion se presenta como prueba necesaria dentro de la relación inferencial considerada. Hay que reconstruir qué premisas autorizan el paso, en vez de atribuir certeza a toda señal.",
      "Así, esta entrada reúne dos investigaciones relacionadas: cómo significan las expresiones y cómo los indicios sostienen razonamientos. Las denominaciones «símbolo» y «signo» se leen en sus pasajes y contextos. El esquema palabra–pensamiento–cosa facilita una comparación histórica, pero no contiene ya el interpretante ni las categorías de Peirce."
    ],
    "model": [
      "Expresión hablada",
      "Concepto",
      "Cosa"
    ],
    "example": "Caso didáctico: «puerta» nombra; «la puerta del aula está abierta» afirma algo contrastable; «abre la puerta» pide una acción. Oír pasos puede apoyar la inferencia de que alguien se acerca, aunque también podrían provenir de una grabación.",
    "question": "¿Cuál de estas expresiones afirma algo que puede ser verdadero o falso?",
    "options": [
      "Puerta",
      "Abre la puerta",
      "La puerta del aula está abierta"
    ],
    "answer": 2,
    "feedback": "La tercera expresión atribuye una condición a una puerta. El nombre aislado y la petición tienen significado, pero no afirman esa condición como verdadera o falsa.",
    "reading": [
      "zecchetto",
      "aristoteles",
      "aristotelesRetorica"
    ],
    "prompt": "Escribe un nombre, una afirmación, una petición y una inferencia a partir de un indicio. Explica qué cambia entre sus funciones."
  },
  {
    "id": "estoicos",
    "year": -250,
    "date": "Siglos III–II a. C.",
    "era": 0,
    "unit": 1,
    "name": "Los estoicos",
    "title": "La voz, lo significado y lo que existe",
    "concept": "El lektón",
    "intro": "La teoría estoica distingue la voz, lo significado y la realidad externa. El lektón, o «decible», permite separar percibir una expresión de comprender lo expresado.",
    "body": [
      "El testimonio de Sexto Empírico presenta tres elementos: la voz significante, lo significado y aquello externo a lo que se refiere. La voz y el objeto son corpóreos; el lektón es incorpóreo. Esta distinción pertenece a la ontología y a la lógica estoicas, y no equivale a separar una cosa material de una opinión subjetiva.",
      "Quien escucha una lengua desconocida puede percibir la voz sin comprender lo dicho. El ejemplo permite distinguir el sonido de su contenido inteligible. El lektón no es simplemente el objeto exterior ni un ruido, y tampoco debe reducirse sin más a la imagen psicológica particular que una persona se forme al escuchar.",
      "Los testimonios distinguen expresiones decibles incompletas y completas. Entre las completas hay preguntas, órdenes y aserciones; estas últimas admiten verdad o falsedad. Por tanto, sería inexacto afirmar que todo lektón es una proposición verdadera o falsa. Lo decisivo es precisar qué tipo de contenido se está examinando y qué función cumple.",
      "Gran parte de esta doctrina se reconstruye mediante autores posteriores, incluidos críticos como Sexto Empírico. Conviene identificar esa mediación documental y evitar presentar el esquema como una formulación de Peirce anticipada. Tampoco se sigue de su carácter incorpóreo que el lektón carezca de importancia: ocupa un lugar central en la explicación lógica de lo dicho."
    ],
    "model": [
      "Voz significante",
      "Lo significado · lektón",
      "Referente"
    ],
    "example": "Caso didáctico: escuchas una oración en una lengua que no conoces. Distingues sonidos, pero necesitas aprender su uso para comprender que expresa «Dión camina». Dión, el sonido y lo afirmado acerca de él no son la misma cosa.",
    "question": "¿Qué muestra oír una oración sin comprender su lengua?",
    "options": [
      "Que percibir la voz y comprender lo significado son operaciones distinguibles",
      "Que el contenido expresado es idéntico al sonido",
      "Que todo contenido lingüístico tiene que ser una imagen visible"
    ],
    "answer": 0,
    "feedback": "La distinción estoica permite explicar la diferencia entre la voz corpórea y lo decible. Comprender el contenido no equivale simplemente a registrar el sonido.",
    "reading": [
      "zecchetto",
      "estoicosSexto"
    ],
    "prompt": "Distingue la expresión sensible, lo expresado y aquello de lo que se habla en una oración. Después transforma la afirmación en pregunta y explica qué cambia.",
    "diagram": "relations",
    "diagramNote": "Distinciones estoicas: voz y objeto corpóreos; lektón incorpóreo. No son etapas de recepción."
  },
  {
    "id": "agustin",
    "year": 397,
    "date": "c. 397–426",
    "era": 0,
    "unit": 1,
    "name": "Agustín de Hipona",
    "title": "Algo percibido hace pensar en otra cosa",
    "concept": "Signos naturales y signos dados",
    "intro": "En la Antigüedad tardía, Agustín reúne huellas, gestos, sonidos y palabras bajo una definición del signo orientada a comprender e interpretar, especialmente las Escrituras.",
    "body": [
      "En Sobre la doctrina cristiana, un signo es algo que, además de producir una impresión sensible, conduce el pensamiento hacia otra cosa. Una huella permite pensar en el animal que pasó; una señal de trompeta, en una acción que se espera de los soldados. Importa la remisión que se establece a partir de lo percibido.",
      "Agustín distingue signos naturales y signos dados. Los naturales significan sin intención de comunicar: el humo remite al fuego y una expresión involuntaria puede revelar una emoción. Reconocerlos requiere experiencia. «Natural» no significa, por tanto, que cualquier persona interprete correctamente cualquier señal sin aprendizaje ni conocimiento de sus circunstancias.",
      "Los signos dados se emplean para manifestar a otro percepciones, pensamientos o sentimientos. La intención de significar es el criterio destacado en este pasaje. Aunque muchas traducciones los llaman «convencionales», no conviene identificar sin explicación intención y convención: una describe el propósito de comunicar; la otra, el acuerdo o uso que permite comprender una forma.",
      "Las palabras reciben un papel privilegiado porque permiten expresar pensamientos y explicar otros signos. La escritura hace persistir mediante marcas lo que la voz deja de hacer audible. Este tratamiento sirve al proyecto de interpretación cristiana de Agustín, a la vez que ofrece distinciones que tendrán una amplia recepción medieval."
    ],
    "model": [
      "Algo percibido",
      "Evocación",
      "Otra cosa"
    ],
    "example": "Caso didáctico: el humo de una fogata puede indicar fuego sin que nadie lo produzca para avisar. Si una persona organiza deliberadamente señales de humo para pedir ayuda, la misma materia sensible participa en un acto de comunicación.",
    "question": "¿Qué convierte las señales de humo del segundo caso en signos dados?",
    "options": [
      "Que el humo permita inferir la presencia de fuego",
      "Que alguien lo emplee con intención de comunicar algo",
      "Que cualquier observador pueda entenderlo sin conocer la situación"
    ],
    "answer": 1,
    "feedback": "Inferir fuego a partir del humo permite reconocer un signo natural. Lo decisivo para las señales de ayuda como signos dados es la intención de comunicar; comprender la señal puede requerir conocer la práctica.",
    "reading": [
      "zecchetto",
      "agustin"
    ],
    "prompt": "Compara una expresión facial involuntaria con un gesto deliberado. Distingue intención, forma sensible y conocimientos necesarios para interpretarlos."
  },
  {
    "id": "aquino",
    "year": 1260,
    "date": "Siglo XIII",
    "era": 1,
    "unit": 1,
    "name": "Tomás de Aquino",
    "title": "Los signos participan en el conocimiento",
    "concept": "Palabra interior y palabra exterior",
    "intro": "Tomás de Aquino explica cómo la palabra exterior comunica una concepción del intelecto y, mediante ella, permite hablar de las cosas que conocemos.",
    "body": [
      "Al comentar Sobre la interpretación, Tomás examina la relación entre sonidos significativos, concepciones intelectuales y cosas. La palabra exterior significa inmediatamente una concepción y, mediante ella, una realidad conocida. Esta mediación explica por qué pronunciar un sonido no basta para comprender aquello de lo que se habla en una conversación.",
      "La concepción interior no necesita confundirse con una pequeña imagen visible. Podemos comprender algo de modo general, como qué es un triángulo, sin limitarnos al dibujo singular que tenemos delante. La expresión comunicada se vincula con ese conocimiento, aunque las palabras empleadas cambien de una lengua a otra.",
      "La comunicación tiene una dimensión social: necesitamos manifestar a otras personas lo que concebimos. Tomás también explica la escritura por la posibilidad de comunicar a quienes están lejos y a quienes vivirán después. Voz y escritura ofrecen medios distintos para hacer compartible el conocimiento a través del espacio y del tiempo.",
      "Esta propuesta pertenece a una teoría medieval del conocimiento y a una lectura de Aristóteles. Su interés didáctico consiste en distinguir el signo exterior, la comprensión y lo conocido. Compararla con teorías posteriores exige conservar esas diferencias: no basta encontrar tres elementos para atribuirle el modelo de otro autor ni una teoría semiótica moderna completa."
    ],
    "model": [
      "Palabra exterior",
      "Concepto interior",
      "Cosa conocida"
    ],
    "example": "Caso didáctico: una docente escribe «triángulo» y dibuja figuras de tamaños diferentes. El estudiante comprende qué tienen en común; el concepto le permite reconocer nuevos casos, más allá de repetir la palabra o recordar un único dibujo.",
    "question": "¿Qué permite explicar el paso de la palabra escuchada al reconocimiento de nuevos triángulos?",
    "options": [
      "La conservación exacta de un solo dibujo",
      "La mera repetición del sonido",
      "La comprensión de una concepción aplicable a los casos"
    ],
    "answer": 2,
    "feedback": "El ejemplo distingue la expresión exterior de la concepción por la que se comprende lo nombrado. Repetir una palabra no garantiza adquirir ese conocimiento.",
    "reading": [
      "zecchetto",
      "aquinoInterpretacion"
    ],
    "prompt": "Explica un concepto usando una palabra, un ejemplo y un contraejemplo. Señala qué debe comprender quien aprende para reconocer otros casos."
  },
  {
    "id": "ockham",
    "year": 1323,
    "date": "c. 1323",
    "era": 1,
    "unit": 1,
    "name": "Guillermo de Ockham",
    "title": "Los conceptos también significan",
    "concept": "Lenguaje mental y suposición",
    "intro": "Ockham distingue términos mentales, orales y escritos. Su teoría de la suposición estudia qué representa un término al utilizarse en una proposición.",
    "body": [
      "En la Summa de lógica, los términos componen proposiciones y estas componen argumentos. Hay términos mentales, hablados y escritos. Los mentales significan naturalmente en su teoría; los orales y escritos dependen de una institución convencional. «Naturalmente» indica que su significación no cambia por la decisión arbitraria de quien los piensa.",
      "La subordinación de la palabra al concepto no significa que siempre hablemos de nuestras ideas. Ockham aclara que voces y conceptos pueden significar las mismas cosas de modos diferentes. Un concepto común permite significar muchos individuos; su universalidad consiste en esa función, sin exigir una cosa universal compartida fuera de la mente.",
      "La significación y la suposición plantean preguntas diferentes. La primera concierne a lo que significa un término; la segunda, a aquello por lo que está dentro de un enunciado. En la suposición personal el término se usa por sus significados; «personal» no exige que estos sean personas. En la material está por una voz o una inscripción.",
      "Ockham también distingue la suposición simple, en la que un término está por una intención o concepto sin emplearse por sus significados habituales. Para empezar, basta contrastar hablar de estudiantes y hablar de la palabra «estudiante». Así se observa que analizar una proposición exige atender al uso de sus términos y no solo a su apariencia."
    ],
    "model": [
      "Término mental",
      "Término oral",
      "Término escrito"
    ],
    "example": "Caso didáctico: «Los estudiantes leen» habla de personas. En «“Estudiante” tiene diez letras», se habla de la palabra escrita. Las comillas interiores ayudan a mostrar esta segunda lectura, que introduce la suposición material.",
    "question": "En «“Estudiante” tiene diez letras», ¿qué representa aquí el término «estudiante»?",
    "options": [
      "La palabra escrita, en una lectura material",
      "Diez personas que estudian",
      "Una esencia universal separada de los individuos"
    ],
    "answer": 0,
    "feedback": "La propiedad de tener diez letras corresponde a la palabra. El ejemplo permite distinguir el uso material de un término de su uso para hablar de sus significados.",
    "reading": [
      "zecchetto",
      "ockhamLenguaje",
      "ockhamSuposicion"
    ],
    "prompt": "Construye dos enunciados con «árbol»: uno sobre árboles y otro sobre la palabra. Explica aquello por lo que está el término en cada caso.",
    "diagram": "relations",
    "diagramNote": "Tres tipos de términos. Los orales y escritos están subordinados a los mentales; pueden significar las mismas cosas."
  },
  {
    "id": "poinsot",
    "year": 1632,
    "date": "1632",
    "era": 2,
    "unit": 1,
    "name": "Juan de Santo Tomás",
    "title": "El signo como mediación",
    "concept": "Signo instrumental y signo formal",
    "intro": "Juan Poinsot, llamado Juan de Santo Tomás, desarrolla en la escolástica del siglo XVII un examen sistemático del signo como relación y medio de conocimiento.",
    "body": [
      "El signo presenta a una facultad cognoscitiva algo distinto de sí. Esta definición desplaza la atención desde la materia visible hacia la función representativa: interesa qué se hace conocer, mediante qué y para una capacidad de conocer. La investigación se integra en su lógica y en el estudio de las relaciones.",
      "El signo instrumental requiere ser conocido como algo que remite a otra cosa. Una huella reconocida conduce a pensar en el animal que la produjo; una inscripción leída puede remitir a un lugar. La palabra «instrumental» no significa únicamente objeto fabricado ni comunicación intencional: también un indicio natural puede cumplir esa función.",
      "El signo formal, cuyo caso central es el concepto, hace presente lo conocido sin necesitar que primero lo examinemos como objeto. Al comprender un triángulo, pensamos mediante el concepto; no tenemos que describir previamente ese concepto. La distinción se refiere al modo de mediación cognoscitiva, y no a dos partes materiales de cada señal.",
      "Los textos sobre signos se vinculan con el Ars logica publicado en el siglo XVII; la edición moderna titulada Tractatus de signis reorganiza esos materiales. Su fecha de referencia, 1632, corresponde a la Modernidad temprana, aunque continúe una tradición escolástica. Esta ubicación permite estudiar la persistencia de preguntas medievales sin encerrar toda la escolástica en una sola época."
    ],
    "model": [
      "Signo: representa algo distinto de sí",
      "Objeto representado",
      "Facultad a la que se presenta"
    ],
    "example": "Caso didáctico: reconoces la palabra «biblioteca» en un cartel y piensas en el lugar indicado: funciona instrumentalmente. Cuando comprendes qué es una biblioteca, el concepto permite pensar en ella sin que debas convertir ese concepto en un objeto que inspeccionas primero.",
    "question": "¿Qué caracteriza al signo instrumental en esta distinción?",
    "options": [
      "Ser siempre un artefacto fabricado con intención comunicativa",
      "Hacer conocer otra cosa a partir del conocimiento del propio signo",
      "Ser una de las dos mitades físicas de todo signo"
    ],
    "answer": 1,
    "feedback": "El criterio es el modo de conocer por medio del signo. Una huella natural y una palabra instituida pueden funcionar instrumentalmente; la distinción no equivale a natural frente a convencional.",
    "reading": [
      "zecchetto",
      "poinsotSignos"
    ],
    "prompt": "Compara una huella, un cartel y un concepto. Explica qué tendría que conocerse en cada caso para acceder a lo representado.",
    "diagram": "relations",
    "diagramNote": "El signo hace presente un objeto a una facultad cognoscitiva. Formal e instrumental distinguen modos de mediación, no etapas."
  },
  {
    "id": "descartes",
    "year": 1637,
    "date": "1637",
    "era": 2,
    "unit": 1,
    "name": "René Descartes",
    "title": "El lenguaje en el horizonte del pensamiento",
    "concept": "Racionalismo y representación",
    "intro": "Descartes permite situar el vínculo entre pensamiento y lenguaje en el racionalismo del siglo XVII. Sus observaciones sobre signos forman parte de ese proyecto filosófico.",
    "body": [
      "El Discurso del método busca orientar la razón y examinar los fundamentos del conocimiento. Su importancia para este recorrido procede de las preguntas sobre el pensamiento y su expresión, más que de una clasificación general de signos. Conviene leer sus observaciones dentro de esa investigación y evitar atribuirle una semiótica autónoma.",
      "En la quinta parte, Descartes imagina máquinas que imitan acciones humanas. Contrasta emitir palabras ante estímulos determinados con combinarlas de manera flexible para responder al sentido de lo que se dice. El lenguaje aparece como indicio de pensamiento: interesa la capacidad de expresar y organizar contenidos, además de producir sonidos articulados.",
      "El argumento menciona también otros signos y reconoce que personas que no hablan oralmente pueden comunicarse mediante ellos. Por tanto, la distinción que propone no se reduce a disponer de voz. Su explicación de los animales pertenece a su filosofía histórica y debe examinarse como una posición, sin convertirla en conclusión científica actual.",
      "Este contexto ayuda a entender el interés de Port Royal por las operaciones del pensamiento y su expresión. Una aplicación de aula consiste en comparar repetir una definición con responder preguntas sobre ella y explicar casos nuevos. Es una actividad para discutir criterios de comprensión; no una prueba infalible ni un experimento diseñado por Descartes."
    ],
    "model": [
      "Pensamiento",
      "Expresión lingüística",
      "Comunicación"
    ],
    "example": "Caso didáctico: alguien repite «un triángulo tiene tres lados». Después debe explicar por qué una figura de cuatro lados queda fuera y reconocer un triángulo girado. El contraste permite discutir qué evidencia aporta el uso flexible de lo aprendido.",
    "question": "¿Qué contraste es pertinente para el pasaje cartesiano?",
    "options": [
      "Lenguaje hablado frente a comunicación mediante otros signos",
      "Pronunciación exacta de una definición frente a pronunciación defectuosa",
      "Repetición de expresiones frente a uso flexible para manifestar pensamiento"
    ],
    "answer": 2,
    "feedback": "El pasaje distingue repetición y respuesta flexible al sentido de situaciones diversas. No convierte la voz ni la pronunciación en criterio suficiente: también admite la comunicación mediante otros signos.",
    "reading": [
      "zecchetto",
      "descartesDiscurso"
    ],
    "prompt": "Propón una pregunta que permita distinguir recitar una definición de usarla en un caso nuevo. Explica qué evidencia aporta la respuesta y qué no permite concluir por sí sola."
  },
  {
    "id": "portroyal",
    "year": 1660,
    "date": "1660 · 1662",
    "era": 2,
    "unit": 1,
    "name": "Port Royal",
    "title": "Una representación despierta otra idea",
    "concept": "La idea del signo",
    "intro": "Port Royal reúne dos obras distintas: la Gramática general y razonada de Arnauld y Lancelot, de 1660, y La lógica o el arte de pensar de Arnauld y Nicole, de 1662.",
    "body": [
      "La Gramática relaciona las expresiones con operaciones del pensamiento. Distingue concebir, juzgar y razonar, y explica las palabras y las proposiciones a partir de lo que permiten manifestar. Su búsqueda de fundamentos comunes a las lenguas pertenece a la gramática general del siglo XVII y debe leerse en ese marco histórico.",
      "La Lógica diferencia considerar un objeto en sí mismo y considerarlo como representante de otro. En el segundo caso, la idea de lo que representa suscita la idea de lo representado. Los mapas y las pinturas permiten entenderlo: atendemos a sus formas para pensar en algo que no se identifica con su soporte.",
      "La función de signo depende, por tanto, de una relación representativa. Un mapa puede examinarse como papel impreso o utilizarse para orientarse. Esto no implica que desaparezca el mundo exterior ni que la representación sea correcta por el solo hecho de ser comprendida. Es necesario examinar qué representa y si permite conocerlo adecuadamente.",
      "La Lógica también distingue signos ciertos y probables y advierte contra atribuir un efecto a una sola causa cuando puede tener otras. Para el aula, esta observación conecta representación y juicio crítico. El aporte no se agota en «dos ideas»: incluye preguntar cómo usamos los signos y con qué razones aceptamos las conclusiones que obtenemos mediante ellos."
    ],
    "model": [
      "Idea de lo representante",
      "Remisión",
      "Idea de lo representado"
    ],
    "example": "Caso didáctico: contemplas un plano del campus como una lámina con líneas. Al usarlo para encontrar la biblioteca, relacionas esas marcas con edificios y recorridos. Si el plano está desactualizado, puedes comprenderlo y aun así orientarte de manera equivocada.",
    "question": "¿Qué cambia cuando utilizas el plano para orientarte?",
    "options": [
      "Lo consideras como representación del espacio al que quieres llegar",
      "Su comprensión garantiza que esté actualizado",
      "Las líneas sustituyen físicamente los edificios"
    ],
    "answer": 0,
    "feedback": "La consideración representativa hace del plano un signo del campus. Comprender la representación y comprobar su adecuación son tareas relacionadas, pero distintas.",
    "reading": [
      "zecchetto",
      "port",
      "portGramatica",
      "portLogica"
    ],
    "prompt": "Elige una fotografía o un plano. Distingue su soporte, aquello que representa y un criterio para juzgar si la representación sirve al propósito elegido."
  },
  {
    "id": "locke",
    "year": 1690,
    "date": "1690",
    "era": 2,
    "unit": 0,
    "name": "John Locke",
    "title": "Una ciencia de los signos",
    "concept": "Sēmeiōtikē",
    "intro": "Locke propone una doctrina de los signos, sēmeiōtikē, y examina cómo las ideas y las palabras intervienen en el conocimiento y en su comunicación.",
    "body": [
      "Al cerrar el Ensayo sobre el entendimiento humano, Locke distingue tres grandes ámbitos: conocer las cosas, orientar la acción y estudiar los signos mediante los cuales conocemos y comunicamos. Esta tercera rama, también relacionada con la lógica, atiende especialmente a ideas y palabras como instrumentos del entendimiento.",
      "En el libro III, las palabras son marcas sensibles de las ideas de quien habla. Su conexión con esas ideas depende de la institución humana: diferentes lenguas pueden emplear sonidos distintos. La arbitrariedad de esa conexión no significa que en una conversación cada persona pueda cambiar libremente el significado sin afectar la comprensión.",
      "La comunicación supone que otros asocian ideas suficientemente compatibles a las expresiones utilizadas. Locke señala que solemos dar por sentada esa coincidencia y también referir nuestras palabras a las cosas. Pero usar el mismo término no garantiza entenderlo igual. Una discusión puede mantenerse porque los interlocutores no han aclarado qué quieren decir.",
      "Su contribución permite analizar conjuntamente conocimiento, memoria y comunicación. Una aplicación consiste en pedir definiciones, ejemplos y límites de palabras debatidas, como «libertad» o «evaluación justa». Aclarar el uso no elimina todo desacuerdo: ayuda a identificar si se discute por las palabras, por las ideas asociadas o por afirmaciones sustantivas sobre el mundo."
    ],
    "model": [
      "Ideas: representaciones de lo contemplado",
      "Palabras: signos de ideas del hablante",
      "Uso: conocer, recordar y comunicar"
    ],
    "example": "Caso didáctico: una estudiante entiende «evaluación justa» como aplicar idénticas condiciones; otro incluye ajustes según necesidades. Comparar ejemplos y explicar sus criterios permite precisar si el desacuerdo es verbal, conceptual o también práctico.",
    "question": "¿Qué paso ayuda a examinar el desacuerdo desde el problema planteado por Locke?",
    "options": [
      "Dar por hecho que compartir la palabra garantiza compartir la idea",
      "Explicar qué significa el término para cada interlocutor y contrastar ejemplos",
      "Sustituir la discusión por una definición individual que nadie deba conocer"
    ],
    "answer": 1,
    "feedback": "Las palabras permiten comunicar ideas, pero su coincidencia sonora no asegura una comprensión coincidente. Explicitar usos y ejemplos permite reconocer mejor el desacuerdo.",
    "reading": [
      "zecchetto",
      "lockeEnsayo",
      "lockePalabras"
    ],
    "prompt": "Elige una palabra discutida en educación. Escribe dos usos diferentes y un caso que muestre dónde coinciden o divergen.",
    "diagram": "relations",
    "diagramNote": "Las ideas y las palabras intervienen como signos en relaciones diferentes. El esquema no representa un orden obligatorio de aprendizaje."
  },
  {
    "id": "condillac",
    "year": 1746,
    "date": "1746",
    "era": 2,
    "unit": 0,
    "name": "Étienne de Condillac",
    "title": "Pensar con ayuda de los signos",
    "concept": "Lenguaje y operaciones mentales",
    "intro": "En el Ensayo sobre el origen de los conocimientos humanos, Condillac estudia cómo el uso de signos contribuye al desarrollo de la memoria, la imaginación y la reflexión.",
    "body": [
      "Condillac examina la formación de nuestras capacidades a partir de la experiencia y de la vinculación de ideas. Los signos intervienen en ese proceso: permiten recuperar y manejar contenidos que no están actualmente ante los sentidos. Esta perspectiva pregunta cómo se desarrolla el pensamiento mediante recursos que aprendemos a emplear.",
      "El Ensayo distingue tres tipos. Los signos accidentales son objetos asociados con ideas por circunstancias particulares. Los naturales incluyen gritos vinculados con emociones, como dolor o temor. Los de institución son signos elegidos para significar ideas. La diferencia no se reduce a su aspecto visible o sonoro: depende de cómo se establece la relación.",
      "Un olor puede despertar un recuerdo sin que lo hayamos buscado. Un signo del que disponemos voluntariamente permite intentar recordar una idea cuando necesitamos usarla. Condillac relaciona esta disponibilidad con el progreso de operaciones mentales. El lenguaje adquiere así una función que rebasa transmitir a otro un pensamiento ya completamente formado.",
      "La segunda parte del Ensayo examina el lenguaje de acción y el desarrollo de recursos comunicativos en situaciones de interacción. Para estudiar su aporte conviene conectar signos, necesidades y aprendizaje. Aprender una distinción verbal puede ayudar a observar, comparar y recordar mejor, aunque repetir la etiqueta sin comprender sus diferencias no produzca automáticamente ese avance."
    ],
    "model": [
      "Sensación",
      "Uso de signos",
      "Reflexión"
    ],
    "example": "Caso didáctico: al aprender «rima consonante» y «rima asonante», una estudiante dispone de nombres para recuperar dos criterios, comparar versos y explicar sus elecciones. El aprendizaje se muestra cuando aplica la distinción a poemas nuevos.",
    "question": "¿Qué función de los signos destaca este ejemplo?",
    "options": [
      "Nombrar reemplaza la necesidad de examinar los versos",
      "Los nombres demuestran que toda clasificación es natural",
      "Los nombres ayudan a recuperar y operar con distinciones aprendidas"
    ],
    "answer": 2,
    "feedback": "Los signos pueden apoyar memoria, comparación y reflexión. Su utilidad depende de la distinción que se comprende y se aplica, además de la palabra memorizada.",
    "reading": [
      "zecchetto",
      "condillacEnsayo"
    ],
    "prompt": "Recuerda un término que te permitió distinguir algo que antes pasaba inadvertido. Describe el antes, el aprendizaje y una aplicación nueva."
  },
  {
    "id": "peirce",
    "year": 1867,
    "date": "1867–1909",
    "era": 3,
    "unit": 2,
    "name": "Charles S. Peirce",
    "title": "El signo produce un interpretante",
    "concept": "Representamen · objeto · interpretante",
    "intro": "Para Peirce, significar es una actividad: un signo representa un objeto al determinar un interpretante. La semiosis enlaza estos tres términos en una relación que permite comprender, actuar y continuar interpretando.",
    "body": [
      "La tríada está formada por signo o representamen, objeto e interpretante. El representamen es aquello que desempeña la función de representar; el objeto, aquello que el signo representa; el interpretante, el efecto significativo que establece esa relación. Decir que la semiosis es irreductiblemente triádica significa que no basta sumar tres cosas ni conectar parejas: algo funciona como signo de un objeto mediante un interpretante.",
      "El interpretante se distingue del intérprete, que es quien participa en la interpretación. Puede consistir en otro signo, una comprensión, una respuesta significativa o una modificación de hábitos. Un ruido que simplemente sobresalta por su intensidad no explica todavía una semiosis: debemos mostrar qué representa y cómo se lo interpreta. Tampoco cualquier ocurrencia del observador queda justificada; la interpretación responde al signo, al objeto y a conocimientos pertinentes.",
      "En sus desarrollos posteriores, Peirce distingue el objeto inmediato, tal como el signo lo presenta, y el objeto dinámico, que determina o condiciona esa representación y no se agota en ella. Un plano presenta el campus seleccionando rutas y edificios; el campus considerado por ese plano posee más características. Esta distinción tampoco obliga a que todos los objetos de signos sean cosas físicas existentes: podemos representar situaciones posibles y personajes ficticios.",
      "También distingue interpretante inmediato, la posibilidad de interpretación que ofrece el signo; dinámico, el efecto que efectivamente produce en una ocasión; y final, el resultado interpretativo al que tendería una consideración suficiente del signo. «Final» señala una orientación normativa: no es simplemente la última opinión expresada ni un acuerdo logrado por votación. Estas distinciones ayudan a separar lo interpretable, lo efectivamente interpretado y lo que estaría justificado interpretar.",
      "Según su relación con el objeto, un ícono representa mediante cualidades o relaciones semejantes; un índice, mediante una conexión efectiva; y un símbolo, mediante una regla o hábito. Un esquema espacial puede ser icónico sin parecerse a una fotografía. Una huella funciona indicialmente si se conecta con aquello que la produjo. Una palabra funciona simbólicamente por hábitos de uso aprendidos.",
      "Estas relaciones pueden coexistir: en un plano, la distribución espacial, el punto «usted está aquí» correctamente situado y los nombres cumplen funciones distintas. Por eso conviene justificar aspectos icónicos, indiciales y simbólicos en lugar de encerrar cada objeto en una única casilla. Un interpretante puede funcionar después como signo para otra interpretación. La continuidad posible de la semiosis permite revisar y ampliar lo comprendido, sin exigir una cadena infinita de pensamientos antes de actuar."
    ],
    "model": [
      "Representamen",
      "Objeto",
      "Interpretante"
    ],
    "diagram": "triad",
    "example": "Caso didáctico. Un plano situado en la entrada del campus muestra una ruta hacia la biblioteca. El plano es el signo; la disposición del campus y el recorrido son su objeto bajo ciertos aspectos; comprender «puedo llegar por este pasillo» es un interpretante. La persona que llega a esa conclusión es la intérprete. Comparar el plano con el trayecto permite corregir una lectura equivocada.",
    "question": "Una estudiante lee el plano y concluye «debo tomar el pasillo de la izquierda». ¿Cuál es aquí el interpretante?",
    "options": [
      "La estudiante, porque es quien comprende",
      "La comprensión del recorrido expresada en esa conclusión",
      "La biblioteca, porque es el destino indicado"
    ],
    "answer": 1,
    "feedback": "La conclusión interpreta lo que el plano representa. La estudiante es la intérprete y la biblioteca forma parte del objeto representado. Identificar los tres términos exige explicar su relación en esta situación.",
    "reading": [
      "peirce",
      "seis",
      "mcnabb",
      "peirceSemiosis",
      "peirceJames"
    ],
    "prompt": "Analiza una señal del campus. Identifica signo, objeto e interpretante; luego explica qué aspectos icónicos, indiciales o simbólicos intervienen y qué evidencia podría corregir tu lectura.",
    "headings": [
      "Una relación de tres términos",
      null,
      "Lo representado y lo interpretable",
      null,
      "Ícono, índice y símbolo",
      null
    ]
  },
  {
    "id": "frege",
    "year": 1892,
    "date": "1892",
    "era": 3,
    "unit": 2,
    "name": "Gottlob Frege",
    "title": "Dos expresiones, una referencia",
    "concept": "Signo · sentido · referencia",
    "intro": "Frege distingue el sentido de una expresión y su referencia para explicar por qué reconocer que dos nombres designan lo mismo puede aportar conocimiento.",
    "body": [
      "El problema aparece al comparar «a es a» con «a es b». Cuando «a es b» es verdadera, los nombres «a» y «b» designan el mismo objeto, pero reconocer esa identidad puede exigir una investigación. Una teoría que atienda solamente al objeto designado deja sin explicar esa diferencia cognoscitiva.",
      "En el caso de los nombres, la referencia es el objeto designado y el sentido es su modo de presentación. «Lucero del alba» y «lucero de la tarde» presentan a Venus de maneras distintas. La identidad de referencia no convierte automáticamente las expresiones en equivalentes respecto de lo que permiten comprender.",
      "El sentido tampoco se identifica con la imagen mental privada que una persona asocia a las palabras. Distintas personas pueden comprender un mismo sentido aunque evoquen recuerdos e imágenes diferentes. Esta precisión evita reducir la significación a experiencias subjetivas incomparables.",
      "Al analizar una expresión conviene preguntar separadamente cómo presenta su objeto y si ese objeto está efectivamente determinado. Comprender una descripción no basta para demostrar que exista algo que la satisfaga. La lectura de un anuncio ficticio puede ejercitar esta diferencia.",
      "Como práctica, escribe dos descripciones de un personaje inventado y ofrece después una pista que revele su identidad. Explica qué aprende el lector. El ejercicio compara maneras de presentar a alguien; para relacionarlo con Peirce habría que reconstruir además las funciones de objeto e interpretante."
    ],
    "model": [
      "Expresión",
      "Sentido",
      "Referencia"
    ],
    "example": "Una lectora entiende «lucero del alba» y «lucero de la tarde», pero desconoce que designan a Venus. Al conocer esa identidad aprende algo: dos presentaciones diferentes corresponden al mismo planeta. El descubrimiento no consiste en que Venus haya cambiado.",
    "question": "¿Qué explica que descubrir la identidad entre ambos luceros aporte conocimiento?",
    "options": [
      "Toda diferencia entre palabras exige dos objetos distintos",
      "El sentido de cada expresión es una emoción privada",
      "Las expresiones tienen sentidos diferentes y la misma referencia"
    ],
    "answer": 2,
    "feedback": "La identidad permite reconocer una referencia común bajo dos presentaciones. Dos nombres distintos no obligan a postular dos objetos; comprender su sentido tampoco equivale a experimentar la misma imagen mental.",
    "reading": [
      "frege"
    ],
    "prompt": "En un relato inventado, presenta a una persona mediante dos descripciones y revela después que es la misma. Explica la información nueva que recibe quien lee.",
    "diagram": "frege"
  },
  {
    "id": "saussure",
    "year": 1916,
    "date": "1916",
    "era": 3,
    "unit": 2,
    "name": "Ferdinand de Saussure",
    "title": "Un signo vale por sus diferencias",
    "concept": "Significante y significado",
    "intro": "El Curso de lingüística general concibe el signo como la unión de significante y significado. Su valor depende del lugar que ocupa entre otras unidades de la lengua.",
    "body": [
      "El Curso, publicado en 1916 después de la muerte de Saussure, fue elaborado por Charles Bally y Albert Sechehaye, con colaboración de Albert Riedlinger, a partir de materiales de sus cursos. Conviene reconocer esa mediación editorial al atribuirle formulaciones.",
      "El signo lingüístico une una imagen acústica, llamada significante, y un concepto, llamado significado. La imagen acústica es la huella psíquica del sonido, no el sonido físico emitido. El significado tampoco es la cosa exterior: el concepto de árbol y un árbol concreto pertenecen a planos diferentes del análisis.",
      "La arbitrariedad significa que no hay un vínculo natural necesario entre ese significante y ese significado. El hablante aprende una asociación socialmente establecida. No significa que cada persona pueda cambiarla a voluntad ni que las palabras carezcan de reglas de uso.",
      "La significación vincula las dos caras del signo; el valor exige considerar además sus relaciones con otros signos. «Tibio» adquiere una posición entre «frío» y «caliente». No basta señalar un objeto para explicar estas diferencias. Las lenguas pueden organizar de maneras distintas un campo de experiencia.",
      "La lengua es un sistema social y el habla comprende sus realizaciones individuales. La sincronía estudia relaciones coexistentes en un estado del sistema; la diacronía, transformaciones entre estados. Para analizar un uso actual, primero precisamos qué diferencias funcionan hoy; para explicar su historia, examinamos cambios documentados."
    ],
    "model": [
      "Significante",
      "Unión convencional",
      "Significado"
    ],
    "diagram": "dyad",
    "example": "En «el café está tibio», comprender «tibio» implica distinguirlo de «frío» y «caliente». El contraste ayuda a explicar su valor dentro de la lengua. La temperatura medida y la valoración de que el café esté agradable añaden otras preguntas: no son por sí solas la definición del valor lingüístico.",
    "question": "¿Cuál análisis explica mejor el valor de «tibio»?",
    "options": [
      "Reconstruir sus diferencias y relaciones con «frío» y «caliente»",
      "Dejar que cada hablante le asigne un significado nuevo sin restricciones",
      "Identificarlo exclusivamente con una temperatura física universal"
    ],
    "answer": 0,
    "feedback": "El valor se establece por relaciones dentro del sistema. La arbitrariedad no autoriza una elección individual ilimitada, y el análisis lingüístico no se reduce a medir la temperatura del objeto.",
    "reading": [
      "saussure",
      "seis"
    ],
    "prompt": "Compara «casa», «hogar» y «vivienda» en tres enunciados. Identifica sustituciones posibles y explica qué diferencia de uso o de sentido se pierde en cada cambio."
  },
  {
    "id": "ogden",
    "year": 1923,
    "date": "1923",
    "era": 3,
    "unit": 2,
    "name": "Ogden y Richards",
    "title": "La referencia pasa por el pensamiento",
    "concept": "El triángulo de la referencia",
    "intro": "Ogden y Richards proponen un triángulo para analizar la referencia: símbolo, pensamiento o referencia y referente. Su dibujo destaca que usar una palabra para hablar de algo supone una mediación.",
    "body": [
      "En The Meaning of Meaning, publicado en 1923, el símbolo es la expresión utilizada; el pensamiento o referencia corresponde al acto de referirse a algo; el referente es aquello a lo que ese acto se dirige. «Referencia» nombra aquí una función del pensamiento, no el objeto situado en el otro vértice.",
      "Los lados del triángulo distinguen relaciones. La expresión participa en la producción o comunicación de un pensamiento, y este se dirige hacia un referente. La base entre símbolo y referente aparece discontinua: representa una relación atribuida mediante el uso, no una conexión directa garantizada por la palabra.",
      "En el aula podemos comprobarlo con «nos vemos en la biblioteca». La frase puede ser comprendida y, aun así, llevar a dos personas a edificios diferentes. Antes de concluir que alguien desconoce la palabra, conviene averiguar qué biblioteca tenía en mente cada participante y qué información compartían.",
      "El dibujo admite comparaciones, pero sus rótulos no deben sustituirse automáticamente por los de Peirce. Su interpretante cumple una función dentro de una semiosis triádica. Tampoco basta añadir un referente al signo de Saussure, cuyo análisis vincula significante y significado dentro de una lengua.",
      "Para usar el esquema, registra la expresión exacta, explica el acto de referencia y precisa el referente propuesto. Después contrasta el análisis con otra persona: una divergencia muestra dónde hace falta contextualizar el mensaje."
    ],
    "model": [
      "Pensamiento o referencia",
      "Símbolo",
      "Referente"
    ],
    "diagram": "ogden",
    "example": "Caso didáctico. Dos estudiantes acuerdan encontrarse «en la biblioteca», pero una piensa en la biblioteca de la facultad y la otra en la biblioteca central. Comparten una expresión comprensible; la referencia realizada en esa situación necesita precisarse para coordinar el encuentro.",
    "question": "¿Qué indica la base discontinua entre símbolo y referente?",
    "options": [
      "Que la palabra se parece necesariamente al objeto",
      "Que la relación se establece indirectamente mediante el uso y la referencia",
      "Que el referente es otra denominación del pensamiento"
    ],
    "answer": 1,
    "feedback": "La base indica una relación mediada. Reconocer una palabra no garantiza identificar el referente pertinente en una conversación. El pensamiento o referencia y el referente ocupan vértices diferentes.",
    "reading": [
      "ogden",
      "peirce",
      "saussure"
    ],
    "prompt": "Analiza «nos vemos allí» en dos situaciones inventadas. Identifica el símbolo, el acto de referencia y el referente; explica qué información permitiría evitar un malentendido."
  },
  {
    "id": "umwelt",
    "year": 1934,
    "date": "1934",
    "era": 3,
    "unit": 0,
    "name": "Jakob von Uexküll",
    "title": "Cada organismo se orienta en un mundo",
    "concept": "Umwelt",
    "intro": "Uexküll propone comprender al animal como un sujeto que percibe y actúa. Su Umwelt es el mundo de relaciones relevantes que se configura mediante esas capacidades, y no simplemente el espacio geográfico que lo rodea.",
    "body": [
      "En el texto de 1934, mundo perceptivo y mundo de efectos se articulan. Una característica del entorno importa en relación con lo que el organismo puede detectar y hacer.",
      "Compartir un jardín no equivale a experimentar el mismo mundo. La comparación exige atender a las capacidades del organismo, evitando atribuirle sin evidencia las categorías y preferencias de una persona.",
      "Esta perspectiva será importante para la biosemiótica. Su uso en clase invita a formular preguntas comprobables sobre percepción y conducta; una analogía humana por sí sola no demuestra cómo significa algo para otra especie."
    ],
    "model": [
      "Mundo perceptivo",
      "Mundo de efectos",
      "Umwelt · unidad de ambos"
    ],
    "example": "En un mismo jardín, una persona observa una flor como adorno y una abeja interactúa con ella al buscar alimento. Para comparar sus mundos, el grupo distingue lo observado de las hipótesis sobre sus capacidades perceptivas. La flor pertenece al mismo entorno físico, pero puede entrar en relaciones funcionales diferentes.",
    "question": "¿Qué afirmación aplica mejor el concepto de Umwelt?",
    "options": [
      "Compartir ubicación obliga a percibir las mismas propiedades",
      "Lo relevante depende de las capacidades de percepción y acción del organismo",
      "El mundo de otro organismo se deduce de nuestras preferencias estéticas"
    ],
    "answer": 1,
    "feedback": "El análisis relaciona entorno, percepción y acción. No permite dar por supuesta una experiencia idéntica entre especies.",
    "reading": [
      "uexkull"
    ],
    "prompt": "Elige dos organismos y separa las observaciones de las hipótesis que necesitarías comprobar sobre su relación con el entorno.",
    "diagram": "relations",
    "diagramNote": "Percepción y acción forman una unidad: el Umwelt. Estos bloques presentan aspectos relacionados, sin orden temporal."
  },
  {
    "id": "morris",
    "year": 1938,
    "date": "1938",
    "era": 3,
    "unit": 0,
    "name": "Charles Morris",
    "title": "Tres dimensiones para analizar signos",
    "concept": "Sintáctica · semántica · pragmática",
    "intro": "Morris propone estudiar una misma semiosis desde tres dimensiones: las relaciones de los signos entre sí, con lo designado y con sus intérpretes.",
    "body": [
      "En Foundations of the Theory of Signs, de 1938, la semiosis es el proceso en que algo funciona como signo. Morris distingue vehículo sígnico, designatum e interpretante, y explicita también al intérprete. Los términos describen funciones relacionadas, no propiedades que los objetos posean aisladamente.",
      "La sintáctica estudia las relaciones de los signos entre sí y sus reglas de combinación. En un aviso permite preguntar cómo se ordenan las palabras y cómo se vinculan sus elementos. Su alcance no se limita a enumerar letras ni a corregir ortografía.",
      "La semántica considera las relaciones de los signos con lo que designan. Para un cartel universitario permite precisar a qué espacio o situación se aplica una indicación. Leer «Sala de estudio» y comprobar a qué sala remite son operaciones que el análisis debe distinguir.",
      "La pragmática atiende a los intérpretes y al funcionamiento de los signos en su conducta y sus circunstancias. En el mismo cartel podemos investigar quién lo comprende, qué hábitos supone y qué respuestas produce. Una intención de quien lo coloca no demuestra por sí sola su efecto.",
      "Las tres dimensiones se distinguen para investigar un proceso común. No son tres etapas sucesivas. Un trabajo de campo puede registrar la composición del aviso, delimitar aquello a lo que remite y observar cómo actúan sus lectores; después debe explicar cómo se relacionan esos resultados."
    ],
    "model": [
      "Relaciones entre signos",
      "Designación",
      "Uso e intérpretes"
    ],
    "example": "Caso didáctico. «Silencio, por favor» aparece en una sala de lectura. La sintáctica examina su organización; la semántica, la situación de silencio solicitada y su ámbito; la pragmática, cómo lo interpretan las personas y si modifica su conducta. Obedecer, ignorar y discutir el aviso son respuestas que requieren observación.",
    "question": "Dos salas tienen el mismo aviso, pero sus usuarios reaccionan de manera diferente. ¿Qué investigación corresponde principalmente a la pragmática?",
    "options": [
      "Comparar conocimientos, hábitos y respuestas de los usuarios en cada sala",
      "Examinar las reglas de combinación de las palabras del aviso",
      "Precisar la situación de silencio solicitada y el ámbito al que se aplica el aviso"
    ],
    "answer": 0,
    "feedback": "La pragmática examina intérpretes, hábitos y respuestas. Las reglas de combinación corresponden principalmente a la sintáctica; precisar lo designado corresponde a la semántica. Una misma formulación no garantiza respuestas iguales: explicarlas requiere observar sus usos.",
    "reading": [
      "morris",
      "zecchetto"
    ],
    "prompt": "Elige un aviso del campus. Formula una pregunta sintáctica, una semántica y una pragmática, y especifica qué observarías para responder cada una.",
    "diagram": "morris"
  },
  {
    "id": "hjelmslev",
    "year": 1943,
    "date": "1943",
    "era": 3,
    "unit": 0,
    "name": "Louis Hjelmslev",
    "title": "Expresión y contenido tienen organización",
    "concept": "Forma y sustancia",
    "intro": "Hjelmslev desarrolla el análisis del signo distinguiendo expresión y contenido. En ambos planos examina forma y sustancia: la organización de las diferencias y aquello que resulta organizado.",
    "body": [
      "Expresión y contenido se presuponen en la función de signo. Una expresión es expresión de un contenido, y un contenido es contenido de una expresión. El análisis no empieza con una lista de cosas a las que después se adhieren palabras: busca las relaciones que hacen posible significar.",
      "La forma es una organización de dependencias y diferencias. La forma de la expresión permite distinguir y combinar unidades; la forma del contenido organiza las distinciones significativas. Por eso «forma» no significa solamente apariencia visual, ni corresponde exclusivamente a la cara expresiva del signo.",
      "La sustancia de la expresión incluye sus realizaciones, como las distintas pronunciaciones de una palabra. La sustancia del contenido corresponde al campo de experiencia conformado por distinciones significativas. No equivale simplemente a una cosa exterior. Cada plano debe estudiarse atendiendo a la relación entre forma y sustancia.",
      "Como ejercicio, compara «taza» pronunciada por dos personas. Describe qué variaciones de voz permiten seguir reconociendo la palabra. Después compara «taza» y «vaso»: ahora pregunta por las diferencias que organizan sus contenidos. Son operaciones analíticas distintas, aunque se realicen sobre situaciones cotidianas.",
      "Hjelmslev también estudia sistemas que incorporan otros sistemas de significación. En el esquema básico de la connotación, una semiótica funciona como expresión de otra. Para aplicarlo a un cartel hay que explicar cómo la expresión y el contenido reconocidos participan juntos en un sentido adicional."
    ],
    "model": [
      "Plano de expresión",
      "Función semiótica",
      "Plano de contenido"
    ],
    "example": "Caso didáctico. Dos voces pronuncian «taza» de manera reconocible: varían realizaciones de la expresión. Al comparar «taza» con «vaso», examinamos también diferencias de contenido. Si una locución publicitaria produce un efecto de elegancia, debemos justificar esa lectura con el conjunto del anuncio y sus convenciones; no se deduce solamente del sonido.",
    "question": "¿Cuál afirmación corresponde a la distinción de Hjelmslev?",
    "options": [
      "La expresión tiene forma y el contenido solo tiene sustancia",
      "La forma se reduce a la figura visible de las letras",
      "Tanto la expresión como el contenido presentan forma y sustancia"
    ],
    "answer": 2,
    "feedback": "La distinción forma/sustancia atraviesa ambos planos. Para aplicarla hay que identificar organizaciones y realizaciones, además de explicar cómo expresión y contenido se vinculan en la función de signo.",
    "reading": [
      "hjelmslev",
      "barthes_elementos"
    ],
    "prompt": "Compara dos realizaciones de una misma palabra y dos palabras de un mismo campo. Explica qué diferencias pertenecen a la expresión y cuáles organizan el contenido, sin reducir «forma» a apariencia.",
    "diagram": "hjelmslev"
  },
  {
    "id": "barthes-mito",
    "year": 1957,
    "date": "1957 · 1964",
    "era": 4,
    "unit": 3,
    "name": "Barthes · signo y mito",
    "title": "Lo histórico puede parecer natural",
    "concept": "Denotación · connotación · mito",
    "intro": "Barthes permite analizar cómo una imagen, un objeto o una frase adquieren sentidos culturales y cómo algunos de esos sentidos presentan un orden histórico como si fuera natural.",
    "body": [
      "El signo reúne un significante y un significado: una forma que podemos reconocer y el contenido que esa forma permite comprender. No equivale al objeto aislado ni a una intención secreta. Un uniforme, por ejemplo, adquiere significación dentro de prácticas que permiten reconocer una profesión, una institución o una jerarquía. El análisis debe explicar esa relación, en lugar de limitarse a enumerar objetos.",
      "En Elementos de semiología, la denotación y la connotación describen una relación entre sistemas. Un signo del primer sistema puede funcionar como significante de un segundo. La fotografía reconocible de una ceremonia de graduación puede connotar logro, movilidad social o prestigio según su composición y circulación. Esos sentidos requieren saberes culturales; no son propiedades naturales del diploma ni equivalen a cualquier asociación privada del espectador.",
      "Mitologías estudia una operación particular: el mito reutiliza una significación previa y la convierte en forma para un concepto histórico. Barthes distingue el sentido del primer sistema, la forma que ese sentido adquiere en el segundo y el concepto que lo orienta. El sentido inicial no desaparece por completo: permanece disponible, aunque su historia se empobrezca o se aparte de la atención.",
      "La operación decisiva es la naturalización: una relación producida socialmente parece evidente, necesaria o universal. El mito puede presentar el consumo como medida espontánea del éxito o una división del trabajo como destino de cada persona. Su funcionamiento no exige inventar todos los hechos: una fotografía auténtica también puede sostener una lectura que omita conflictos, decisiones y condiciones históricas. Por eso no basta con clasificar un mensaje como verdadero o falso.",
      "Connotación y mito están relacionados, pero no conviene usarlos como etiquetas intercambiables. Reconocer una connotación de elegancia no demuestra todavía una naturalización. Para argumentar una lectura mítica hay que precisar qué idea del mundo se presenta como obvia y qué condiciones quedan fuera. Tampoco deben igualarse automáticamente los usos de «metalenguaje»: el término de Mitologías no coincide sin más con la definición técnica que Elementos distingue de la connotación.",
      "Un análisis sólido avanza con evidencias: describe formas y palabras, propone un sentido cultural, identifica la generalización y contrasta sus condiciones. En el anuncio de una graduación, compara «Hoy celebramos tu trabajo» con «Quien se esfuerza siempre triunfa». La segunda frase ofrece un punto preciso para discutir la universalización del mérito. Explica qué cambia al incorporar becas, trabajo de cuidados o desigualdad de oportunidades, sin atribuir automáticamente una intención psicológica a quien diseñó el anuncio."
    ],
    "model": [
      "Signo de primer nivel",
      "Segundo sistema",
      "Sentido mítico"
    ],
    "example": "Caso inventado. Una publicidad muestra a una graduada con diploma y llaves de un automóvil bajo «Todo depende de ti». Diploma, llaves y frase articulan educación, propiedad y éxito. La hipótesis mítica aparece cuando ese éxito se presenta como resultado exclusivamente individual, dejando fuera apoyos y condiciones sociales. La lectura debe justificarse por la composición y la frase, no por la mera presencia del automóvil.",
    "question": "¿Qué paso permite pasar de identificar una connotación a argumentar una naturalización mítica?",
    "options": [
      "Enumerar todos los objetos que aparecen en la imagen",
      "Mostrar qué relación histórica se presenta como evidente y qué condiciones se omiten",
      "Suponer que toda fotografía publicitaria contiene exactamente el mismo mito"
    ],
    "answer": 1,
    "feedback": "La connotación reconoce sentidos culturales; el análisis del mito explica cómo una relación histórica adquiere apariencia de naturaleza. La hipótesis necesita formas, palabras y contexto que la sostengan.",
    "reading": [
      "barthes_elementos",
      "barthes_mitologias",
      "seis"
    ],
    "prompt": "Analiza el anuncio descrito en el caso en cuatro pasos: formas observables, sentido cultural, idea presentada como evidente y condiciones históricas omitidas. Si no encuentras evidencia del último paso, explica por qué hablarías solo de connotación.",
    "headings": [
      "Significación y connotación",
      null,
      "Cómo opera el mito",
      null,
      "Cómo sostener el análisis",
      null
    ]
  },
  {
    "id": "sebeok",
    "year": 1963,
    "date": "Desde la década de 1960",
    "era": 4,
    "unit": 0,
    "name": "Thomas A. Sebeok",
    "title": "La semiosis más allá del lenguaje humano",
    "concept": "Zoosemiótica y biosemiótica",
    "intro": "Sebeok sitúa la semiosis en el ámbito de la vida y amplía el estudio de los signos más allá del lenguaje humano. La comunicación animal y la modelización del entorno pasan a formar parte central de la investigación.",
    "body": [
      "La zoosemiótica estudia procesos sígnicos animales; la perspectiva biosemiótica extiende la pregunta a la organización de lo viviente. El uso de palabras es una modalidad particular dentro de un campo de relaciones más amplio.",
      "En Signs, Sebeok articula capacidades del organismo, producción de mensajes y representación de su entorno. Una explicación debe precisar qué cuenta como signo, para qué organismo y dentro de qué relación funcional.",
      "En clase, distinguir una conducta observable de su interpretación evita convertir cualquier movimiento en un mensaje. Una aplicación rigurosa necesita evidencia acerca de las regularidades y respuestas relevantes."
    ],
    "model": [
      "Organismo",
      "Señales del entorno",
      "Respuesta situada"
    ],
    "example": "El grupo observa un registro de comunicación animal. Primero describe movimientos y respuestas; después consulta una investigación que permita relacionarlos con una función. La descripción «se mueve repetidamente» y la hipótesis «orienta a otros individuos» requieren evidencias diferentes.",
    "question": "¿Qué fortalece una interpretación zoosemiótica?",
    "options": [
      "Llamar lenguaje humano a cualquier conducta repetida",
      "Suponer que cada movimiento expresa una intención consciente",
      "Relacionar conducta, respuesta y función mediante evidencia"
    ],
    "answer": 2,
    "feedback": "El campo se amplía hacia procesos no humanos, pero la interpretación sigue necesitando criterios. Describir un movimiento no basta para establecer su función comunicativa.",
    "reading": [
      "sebeok"
    ],
    "prompt": "Formula una hipótesis sobre una conducta animal e indica qué observación podría apoyarla o debilitarla."
  },
  {
    "id": "barthes-imagen",
    "year": 1964,
    "date": "1964",
    "era": 4,
    "unit": 3,
    "name": "Barthes · la imagen",
    "title": "Una imagen articula varios mensajes",
    "concept": "Retórica de la imagen",
    "intro": "En Retórica de la imagen, Barthes descompone analíticamente una publicidad para preguntar cómo cooperan las palabras, los objetos reconocibles y los sentidos culturales.",
    "body": [
      "El análisis distingue tres mensajes que se reciben juntos. El lingüístico comprende las palabras; el icónico no codificado corresponde a la identificación literal en el modelo; el icónico codificado reúne connotaciones culturales. No son tres zonas físicas del anuncio. Una misma fotografía de una mesa puede permitir reconocer alimentos y, simultáneamente, sugerir abundancia, cuidado familiar o distinción social, según sus detalles y el saber movilizado.",
      "Para trabajar con la distinción, imagina una campaña de lectura con dos estudiantes, un banco y un libro abierto. «Hay dos personas junto a un libro» registra elementos reconocibles. «La lectura construye comunidad» es una interpretación que necesitaría apoyarse en su proximidad, sus gestos y otros recursos. Separar ambas descripciones vuelve discutible el razonamiento: permite preguntar qué se ve y qué relación cultural estamos proponiendo, sin fingir una mirada completamente ajena al aprendizaje.",
      "El mensaje lingüístico puede anclar: selecciona sentidos entre varias lecturas posibles. Si la campaña dice «Leer nos reúne», orienta la escena hacia la convivencia; si dice «Último repaso», favorece una situación de estudio. La foto sigue mostrando los mismos objetos, pero cambia la interpretación favorecida. El anclaje también puede ayudar a identificar qué representa una figura ambigua. Las palabras tienen, además, sus propias denotaciones y connotaciones.",
      "El relevo establece una complementariedad que hace avanzar una historia. Imagina ahora dos viñetas: una estudiante entrega el libro y la otra responde «Aquí está la pista que faltaba». La frase aporta una información narrativa que el dibujo aislado no proporciona. Texto e imagen forman juntos el episodio. No basta con que un pie añada palabras para llamarlo relevo: pregunta qué acontecimiento o relación nueva construyen ambos mensajes. Anclaje y relevo pueden coexistir.",
      "La expresión «mensaje sin código» exige una cautela histórica. Barthes la propone para la dimensión literal de la fotografía, apoyándose en su carácter analógico; no afirma que toda imagen carezca de convenciones. Distingue la fotografía del dibujo y reconoce operaciones como encuadre e iluminación. La separación entre literal y connotado es analítica: no autoriza a tratar una fotografía publicitaria completa como prueba neutral, ni a extender automáticamente la tesis a imágenes generadas digitalmente.",
      "Prueba el método mediante variaciones controladas. Conserva la campaña imaginada y cambia solo el texto; después conserva el texto y cambia un gesto, la distancia entre las personas o la composición. Anota qué interpretación se fortalece y qué evidencia pierde. Compara las respuestas del grupo: una lectura distinta no queda validada por existir, pero puede mostrar saberes culturales diferentes. La tarea consiste en formular hipótesis revisables sobre la articulación de los mensajes."
    ],
    "model": [
      "Mensaje lingüístico",
      "Icónico no codificado",
      "Icónico codificado"
    ],
    "diagram": "image",
    "example": "Caso inventado. Una fotografía muestra una taza y un cuaderno sobre una mesa. «Tu momento de calma» favorece una lectura de descanso; «Entrega en cinco minutos» favorece urgencia. Ambos textos pueden anclar. En una historieta, «Me llegó el mensaje que esperaba» puede funcionar como relevo si introduce el acontecimiento que explica la siguiente acción. La función depende de la relación entre palabras e imágenes.",
    "question": "En una historieta, ¿qué justificaría identificar un texto como relevo?",
    "options": [
      "Que sea muy breve y esté debajo del dibujo",
      "Que nombre todos los objetos visibles",
      "Que aporte con la imagen información necesaria para desarrollar el episodio"
    ],
    "answer": 2,
    "feedback": "El relevo se define por la complementariedad narrativa entre palabras e imágenes. Su ubicación o extensión no bastan para reconocerlo; el anclaje orienta la identificación o la interpretación.",
    "reading": [
      "imagen",
      "barthes_elementos",
      "seis"
    ],
    "prompt": "Usa la escena de la taza y el cuaderno, o dibuja una imagen propia, y escribe dos textos que produzcan anclajes distintos. Luego conviértela en una secuencia de dos viñetas y añade un relevo. Justifica cada función y una connotación con evidencias concretas.",
    "headings": [
      "Tres mensajes que cooperan",
      null,
      "Anclaje y relevo",
      null,
      "El alcance de «sin código»",
      null
    ]
  },
  {
    "id": "barthes-relato",
    "year": 1966,
    "date": "1966",
    "era": 4,
    "unit": 3,
    "name": "Barthes · el relato",
    "title": "Las partes del relato cumplen funciones",
    "concept": "Funciones · acciones · narración",
    "intro": "Barthes estudia el relato como una organización de relaciones: un detalle adquiere valor por lo que hace en la secuencia, en las acciones de los participantes y en la situación narrativa.",
    "body": [
      "El relato puede manifestarse mediante palabras, imágenes, gestos o sus combinaciones. El análisis estructural de 1966 busca describir relaciones que permitan comparar esa diversidad. Su propuesta articula tres niveles: funciones, acciones y narración. No son tres etapas que ocurran una después de otra. Un detalle cobra sentido al integrarse en una acción, y esa acción se presenta mediante una forma particular de narrar.",
      "En el nivel de las funciones, las funciones cardinales o núcleos abren, mantienen o cierran alternativas relevantes para la continuación. Encontrar un cuaderno perdido puede abrir la posibilidad de devolverlo, conservarlo o ignorarlo. La condición cardinal no depende de que el hecho sea espectacular o de que ocupe muchas líneas. Se reconoce por sus relaciones: cambiarlo o suprimirlo altera la estructura de posibilidades de la historia.",
      "Las catálisis expanden los intervalos entre núcleos: describen un desplazamiento, una espera o un gesto. Pueden demorar una resolución, regular el ritmo y mantener la atención. No son material inútil. Suprimir que una estudiante acomoda lentamente su mochila quizá conserve el encadenamiento principal de devolver el cuaderno, pero cambie cómo se experimenta la espera. La diferencia es funcional: no equivale a oponer frases largas y cortas, ni verbos y adjetivos.",
      "Los indicios y los informantes pertenecen a otra familia de relaciones. Los indicios invitan a inferir carácter, sentimiento o atmósfera: una mano temblorosa puede sugerir inquietud, si el contexto sostiene esa lectura. Los informantes suministran datos de identificación o localización, como una edad o un nombre de lugar. Un mismo detalle puede cumplir varias funciones; mencionar una hora puede localizar la escena y adquirir otra importancia si después resulta decisiva para una coartada.",
      "En el nivel de las acciones se examinan los participantes por sus relaciones: quién busca, ayuda, obstaculiza, entrega o recibe. No basta con enumerar sus rasgos psicológicos. El nivel de la narración considera los signos de quien cuenta y de aquel a quien se dirige el relato, junto con las convenciones de su comunicación. El narrador es una instancia textual: no debe identificarse automáticamente con la persona que escribió o filmó la obra.",
      "Para analizar, delimita primero una secuencia y explica sus alternativas. Después identifica expansiones, datos e inferencias, y muestra cómo se integran en una acción y una manera de contar. Prueba una supresión o una sustitución y argumenta qué cambia. Las etiquetas no constituyen por sí solas una lectura: sirven para explicar cómo el relato organiza expectativas, distribuye información y produce sentido. Conserva las clasificaciones dobles cuando las relaciones del texto las justifiquen."
    ],
    "model": [
      "Funciones",
      "Acciones",
      "Narración"
    ],
    "example": "Caso inventado. «A las cuatro, Inés encontró un cuaderno en el aula 2. Al reconocer el nombre de su compañera, decidió devolverlo. Se acomodó la mochila antes de salir. Le temblaban las manos. En conserjería dejó el cuaderno para que lo recogieran». La decisión organiza una alternativa; acomodarse la mochila puede funcionar como catálisis; el temblor sugiere un estado sin explicarlo; hora y aula sitúan la escena. Las clasificaciones deben revisarse si el relato continúa.",
    "question": "¿Qué prueba ayuda a reconocer una función cardinal?",
    "options": [
      "Examinar si modificarla altera alternativas que organizan la continuación",
      "Contar cuántas palabras tiene la oración",
      "Clasificar como núcleo cualquier descripción emotiva"
    ],
    "answer": 0,
    "feedback": "Una función cardinal organiza alternativas y sus consecuencias. La extensión o intensidad emocional no la definen. Las catálisis también producen efectos, aunque su supresión pueda conservar la estructura principal de la historia.",
    "reading": [
      "relato",
      "barthes_aventura_relato",
      "seis"
    ],
    "prompt": "Usa el relato de Inés o escribe uno breve. Marca un núcleo, una catálisis, un indicio y un informante. Justifica una clasificación doble si procede. Reescribe un fragmento cambiando el narrador y explica qué información adquiere o pierde el lector.",
    "headings": [
      "Niveles y funciones",
      null,
      null,
      "Indicios e informantes",
      "Acciones y narración",
      null
    ],
    "diagram": "relations",
    "diagramNote": "Niveles de descripción que se integran. No son tres momentos sucesivos de la historia."
  },
  {
    "id": "greimas",
    "year": 1966,
    "date": "1966 · desarrollos posteriores",
    "era": 4,
    "unit": 4,
    "name": "A. J. Greimas",
    "title": "El sentido se organiza en relaciones",
    "concept": "Actantes, estados y transformaciones",
    "intro": "Greimas estudia cómo las relaciones producen significación. Su semiótica narrativa articula posiciones actanciales, estados, transformaciones y valores, y distingue esa organización de sus realizaciones en el discurso.",
    "body": [
      "El sentido se organiza mediante diferencias y relaciones. «Acceso» adquiere valor frente a exclusión, restricción o pérdida, según el discurso. El análisis narrativo reconstruye cómo esos valores se distribuyen y transforman. No busca solamente personajes buenos y malos: pregunta qué se considera valioso, para quién, quién puede intervenir y cómo cambia la relación de los participantes con aquello que buscan, conservan o rechazan.",
      "El modelo actancial clásico dispone seis posiciones: sujeto y objeto; destinador y destinatario; ayudante y oponente. El sujeto se orienta hacia un objeto de valor. El destinador propone, legitima o impulsa la búsqueda; el destinatario recibe su beneficio. Ayudante y oponente facilitan u obstaculizan el recorrido. Un objeto de valor puede ser conocimiento o reconocimiento: no tiene que ser una cosa material que alguien lleva en la mano.",
      "Actante, actor y rol temático responden a preguntas distintas. El actante es una posición relacional; el actor es una entidad identificable en el discurso; un rol temático condensa un recorrido de contenido, como docente, investigadora o cuidador. Lucía puede asumir el actante sujeto y el rol temático de bibliotecaria. Un actor puede ocupar varias posiciones actanciales, y varios actores pueden realizar una misma posición. La correspondencia no es necesariamente uno a uno.",
      "Los enunciados de estado describen la relación del sujeto con el objeto: conjunción cuando participa del valor y disyunción cuando está separado de él. Los enunciados de hacer representan transformaciones entre estados. «El barrio carece de acceso a libros» y «dispone de acceso» describen estados; organizar una biblioteca puede realizar el paso entre ambos. El sujeto que actúa y el sujeto cuyo estado cambia pueden ser diferentes.",
      "La competencia reúne condiciones para actuar. Querer, deber, saber y poder permiten describir configuraciones diferentes: Lucía quiere abrir la biblioteca y sabe catalogar, pero todavía no puede porque falta un local. Estas modalidades pueden afectar el hacer y también el ser; no son cuatro pasos obligatorios ni garantizan una actuación exitosa. El análisis distingue disponer de competencia de realizar efectivamente una transformación, llamada performance.",
      "El contenido temático organiza valores como cooperación, justicia o prestigio; el componente figurativo los desarrolla mediante elementos reconocibles, como estantes, llaves, filas y libros. Un tema admite figuraciones diferentes, y una misma figura puede participar en temas distintos. Las llamadas «fuerzas temáticas», vinculadas al inventario de Souriau retomado por Greimas, nombran contenidos que orientan la búsqueda. No equivalen a las modalidades: «querer obtener prestigio» combina una modalidad con un contenido valorado.",
      "Analizar exige elegir un programa concreto y conservar esa escala. Conseguir el local puede ser un programa de apoyo para el programa mayor de facilitar la lectura. Identifica el estado inicial, el hacer y el estado final; después contrasta posiciones, competencia y contenido. Si cambia el objeto de acceso comunitario a reconocimiento personal, revisa toda la distribución: el cambio no se resuelve sustituyendo una etiqueta de motivación."
    ],
    "model": [
      "Destinador → objeto → destinatario",
      "Ayudante → sujeto ← oponente",
      "Estado inicial → hacer → estado final"
    ],
    "diagram": "actants",
    "example": "Caso inventado. Una asamblea barrial encarga a Lucía abrir una biblioteca: la asamblea actúa como destinador; Lucía, sujeto del hacer; el acceso a libros, objeto de valor; habitantes, destinatarios y sujetos del estado que cambiará. Vecinos colaboradores ayudan y la falta de local obstaculiza. Lucía quiere realizarla, asume el deber del encargo y sabe catalogar; conseguir el local amplía su poder hacer. Solidaridad es un contenido temático, mientras libros y estantes participan en su figuración.",
    "question": "Lucía quiere abrir la biblioteca y sabe organizarla, pero carece de local. ¿Qué distinción explica el problema?",
    "options": [
      "La solidaridad equivale al poder hacer",
      "El objeto de valor debe ser siempre un objeto físico",
      "Querer y saber no garantizan disponer del poder hacer necesario"
    ],
    "answer": 2,
    "feedback": "El querer, el saber y el poder no se implican automáticamente. El caso muestra una condición pendiente de la competencia. Solidaridad o prestigio son contenidos temáticos; no sustituyen las categorías modales.",
    "reading": [
      "greimas_diccionario",
      "greimas_modalidades",
      "seis"
    ],
    "prompt": "Analiza un proyecto cotidiano: escribe un estado inicial, un hacer y un estado final; distingue actor, actante y rol temático; identifica querer, deber, saber y poder con evidencias. Añade un tema y dos figuras, y explica qué cambiaría si se modificara el objeto de valor.",
    "headings": [
      "Sentido y posiciones actanciales",
      null,
      "Actante, actor y rol temático",
      "Estados y transformaciones",
      "Competencia modal",
      "Temas, figuras y fuerzas temáticas",
      "Reconstruir un programa"
    ]
  },
  {
    "id": "eco",
    "year": 1975,
    "date": "1975–1990 · obras principales",
    "era": 4,
    "unit": 4,
    "name": "Eco · interpretación",
    "title": "Interpretar activa conocimientos culturales",
    "concept": "Función semiótica · códigos · cooperación interpretativa",
    "intro": "Eco conecta el estudio de los códigos con la producción y la interpretación de signos. Su pregunta es cómo una cultura permite relacionar expresiones, contenidos y conocimientos, y qué hace defendible una interpretación.",
    "body": [
      "En el Tratado de semiótica general, una función semiótica es la correlación entre una expresión y un contenido establecida mediante reglas de significación. El signo no es simplemente un objeto material con un sentido fijo. Una misma forma puede participar en correlaciones diferentes según las convenciones y las circunstancias; por eso analizar exige reconstruir la relación que funciona en el caso.",
      "Significación y comunicación se relacionan, pero plantean problemas distintos. Un sistema de significación ofrece reglas para que algo pueda significar; un proceso comunicativo actualiza recursos en una situación. Preguntar qué código hace interpretable una señal es diferente de estudiar quién la usa, cuándo y para qué. La teoría de los códigos se complementa con la producción de signos, que examina el trabajo necesario para reconocer, reproducir o inventar expresiones.",
      "La enciclopedia cultural comprende conocimientos, convenciones y conexiones entre textos que permiten interpretar. Al leer, seleccionamos saberes pertinentes y formulamos inferencias revisables. El lector modelo designa las competencias y operaciones que el texto prevé; se distingue de cada persona concreta que lo lee. Esta dimensión se desarrolla especialmente en los trabajos de Eco sobre cooperación textual.",
      "Las conferencias de 1990 precisan que la apertura interpretativa requiere criterios. La intención del texto —intentio operis— se reconstruye mediante conjeturas que deben ser compatibles con el conjunto textual. Una lectura puede ser creativa y, sin embargo, encontrar pasajes que la contradigan. Conviene distinguir interpretación, sustentada en esa cooperación, y uso del texto para una finalidad propia.",
      "Para trabajar en clase, formula una hipótesis, señala las expresiones que la apoyan y explicita los conocimientos que estás utilizando. Después busca evidencia que podría debilitarla. Este procedimiento evita convertir el análisis en una lista libre de asociaciones. También permite comparar lectores sin asumir que existe una sola reacción obligatoria."
    ],
    "model": [
      "Texto",
      "Enciclopedia cultural",
      "Inferencias del lector"
    ],
    "example": "Caso inventado: «Marta cerró el paraguas antes de entrar. Lo había abierto para protegerse del sol». La primera oración permite conjeturar lluvia, pero la segunda obliga a revisar esa inferencia. El saber cultural sobre los usos del paraguas hace comprensible la acción; la coherencia del texto permite decidir entre hipótesis. El lector modelo debe poder revisar lo que había anticipado.",
    "question": "Después de leer la segunda oración, ¿qué interpretación está mejor sustentada?",
    "options": [
      "Marta entró para escapar de la lluvia, porque los paraguas solo tienen ese uso",
      "Marta utilizaba el paraguas contra el sol; la información posterior corrige la inferencia inicial",
      "Cualquier explicación vale lo mismo, porque cada lector tiene experiencias distintas"
    ],
    "answer": 1,
    "feedback": "El texto especifica el uso del paraguas. La primera inferencia era posible, pero debe revisarse al aparecer una evidencia incompatible. Cooperar interpretativamente incluye corregir conjeturas.",
    "reading": [
      "eco",
      "eco_lectura",
      "seis"
    ],
    "prompt": "Escribe una frase que invite a inferir algo y otra que obligue a revisarlo. Identifica el conocimiento cultural y la evidencia textual que intervienen.",
    "headings": [
      "La función semiótica",
      "Significar y comunicar",
      "La cooperación del lector",
      "Límites de una interpretación",
      "Cómo llevarlo al análisis"
    ]
  },
  {
    "id": "lotman",
    "year": 1984,
    "date": "1984",
    "era": 4,
    "unit": 0,
    "name": "Yuri Lotman",
    "title": "La cultura como espacio de traducciones",
    "concept": "Semiosfera",
    "intro": "Para Lotman, los signos funcionan dentro de una semiosfera: un espacio cultural heterogéneo de lenguajes y textos en interacción. El conjunto hace posible la actividad de los sistemas particulares.",
    "body": [
      "La frontera semiótica es un mecanismo de traducción. Hace que algo procedente de un espacio ajeno pueda reconocerse mediante los lenguajes del propio; no equivale simplemente a una línea territorial.",
      "Centro y periferia designan posiciones dentro de una organización desigual. Las diferencias entre lenguajes y sus traducciones contribuyen a producir sentido.",
      "Un ejercicio puede estudiar qué se conserva y qué se reorganiza al traducir entre prácticas. La cuestión es cómo interactúan sistemas culturales, además de identificar signos aislados."
    ],
    "model": [
      "Lenguajes culturales",
      "Frontera y traducción",
      "Nuevos sentidos"
    ],
    "example": "Caso inventado: una comunidad transmite un relato como memoria ligada a sus prácticas rituales. Una escuela lo incorpora a un cómic, lo clasifica como «leyenda» y añade un glosario para sus estudiantes. El análisis compara los criterios de reconocimiento de ambos espacios y las operaciones que vuelven legible el relato en la escuela. Cambiar de voz a dibujo muestra una adaptación entre medios; la reclasificación y la traducción entre códigos culturales permiten investigar una frontera semiótica.",
    "question": "¿Qué dato permite investigar una frontera semiótica en este caso?",
    "options": [
      "Que la versión final se imprima en papel de otro tamaño",
      "Que el relato se reclasifique y traduzca según los códigos del espacio escolar que lo incorpora",
      "Que toda adaptación entre voz y dibujo constituya automáticamente una semiosfera distinta"
    ],
    "answer": 1,
    "feedback": "La lectura debe precisar qué espacios y códigos se relacionan. En el caso, la clasificación y el glosario aportan indicios de esa mediación; el cambio de soporte por sí solo no basta.",
    "reading": [
      "lotman"
    ],
    "prompt": "Compara los usos y criterios de reconocimiento del relato en ambos espacios. Identifica una selección o traducción concreta y explica desde qué punto de vista delimitas la frontera."
  },
  {
    "id": "eco-hiperrealidad",
    "year": 1986,
    "date": "1986 · edición española de los ensayos",
    "era": 4,
    "unit": 4,
    "name": "Eco · la hiperrealidad",
    "title": "Cuando la réplica promete más realidad",
    "concept": "Réplica · autenticidad · experiencia de consumo",
    "intro": "En «Viaje a la hiperrealidad», Eco examina espacios que prometen una experiencia intensificada de lo auténtico. La réplica busca satisfacer el deseo de realidad e incluso ofrecer una vivencia que parezca más completa que su referente.",
    "body": [
      "Los museos de cera, reconstrucciones históricas y parques temáticos son casos concretos del ensayo. Interesa cómo combinan objetos, relatos, recorridos, escalas y efectos sensoriales para hacer convincente una experiencia. El análisis pregunta qué operación convierte una construcción seleccionada en una promesa de autenticidad.",
      "Una réplica puede eliminar desgaste, incertidumbre o incomodidad y añadir detalles que intensifican la presencia del pasado. La diferencia con una simple copia está en lo que promete al visitante y en cómo dispone su experiencia. Debe examinarse qué se conserva del referente, qué se modifica y qué se omite.",
      "El público no siempre ignora el artificio. Eco observa que Disneylandia puede exhibir su carácter ficticio y, aun así, organizar una experiencia envolvente y un recorrido de consumo. Saber que algo es una reconstrucción no impide disfrutarlo ni aceptar las reglas de visita que propone. Por ello, hiperrealidad y engaño inadvertido no son equivalentes.",
      "Para aplicar el concepto, identifica un referente, una promesa de autenticidad y los recursos que la producen. No basta con que una imagen sea digital, atractiva o muy realista. Tampoco conviene atribuir a Eco todas las formulaciones sobre simulacro de otros autores. Esta ficha trabaja los argumentos y ejemplos de sus ensayos.",
      "El hito señala la edición española de 1986 de La estrategia de la ilusión. La colección reúne escritos de distintas fechas; esa fecha no indica el nacimiento de la noción de hiperrealidad. En una línea histórica, distinguir ensayo, recopilación, traducción y edición evita fabricar una cronología demasiado simple."
    ],
    "model": [
      "Referente cultural",
      "Réplica intensificada",
      "Efecto de autenticidad"
    ],
    "example": "Caso inventado para el aula: una atracción recrea una «plaza quiteña de otra época» con fachadas recién pintadas, personajes y música. El folleto promete vivir la historia «tal como fue», aunque omite conflictos y combina objetos de décadas distintas. Los visitantes conocen la recreación, pero siguen un recorrido que termina en tiendas. Analiza cómo la puesta en escena produce autenticidad y orienta el consumo; no supongas que todo espacio patrimonial real funciona igual.",
    "question": "¿Qué evidencia permitiría analizar esta atracción desde la hiperrealidad de Eco?",
    "options": [
      "Que cualquier edificio antiguo es necesariamente una falsificación",
      "Que todos los visitantes desconocen que están en una recreación",
      "La promesa de autenticidad y las selecciones, intensificaciones y recorridos que la sostienen"
    ],
    "answer": 2,
    "feedback": "La hipótesis se sostiene al relacionar la promesa del folleto con decisiones de representación y experiencia. El conocimiento del artificio por parte del público no invalida automáticamente el análisis.",
    "reading": [
      "ilusion",
      "ilusion_catalogo"
    ],
    "prompt": "Distingue qué es observable en una recreación, qué interpretación propones y qué información adicional necesitas para comprobarla.",
    "headings": [
      "La representación como experiencia",
      "La promesa de una realidad mejorada",
      "Un artificio que también se reconoce",
      "Criterios para analizar un caso",
      "Qué fecha representa este hito"
    ]
  },
  {
    "id": "veron",
    "year": 1987,
    "date": "1987",
    "era": 4,
    "unit": 0,
    "name": "Eliseo Verón",
    "title": "Los discursos circulan y se transforman",
    "concept": "Semiosis social",
    "intro": "Verón estudia la producción social del sentido mediante relaciones entre discursos y condiciones de producción y reconocimiento. Analizar un producto permite reconstruir, de manera parcial, procesos que lo hicieron posible.",
    "body": [
      "Una marca es una propiedad del material analizado. Se convierte en huella cuando se establece su relación con determinadas condiciones. El analista debe justificar esa relación, no atribuirla por intuición.",
      "Las gramáticas de producción y reconocimiento reconstruyen operaciones diferentes. La intención declarada por un emisor no permite deducir por sí sola las lecturas efectivas.",
      "La circulación nombra el desfase entre producción y reconocimiento. No debe dibujarse como un mero canal que transporta intacto un significado. Para investigarla, hay que comparar discursos y evidencias de lectura."
    ],
    "model": [
      "Condiciones de producción",
      "Discurso analizado",
      "Condiciones de reconocimiento"
    ],
    "example": "Un aviso universitario se reutiliza en un meme. El grupo reúne el aviso, la versión modificada y comentarios de lectores. Compara enunciación, contexto y respuestas; no atribuye a todo el estudiantado una única interpretación a partir de su propia reacción.",
    "question": "¿Qué permite estudiar la circulación en este caso?",
    "options": [
      "Comparar huellas de producción y de reconocimiento en materiales concretos",
      "Contar únicamente cuántas veces se envió el archivo",
      "Dar por hecho que todos entendieron lo previsto por el emisor"
    ],
    "answer": 0,
    "feedback": "El número de envíos registra difusión, pero por sí solo no explica el desfase de sentido. Se necesitan evidencias de producción y reconocimiento.",
    "reading": [
      "veron"
    ],
    "prompt": "Imagina un aviso de biblioteca que dice «SILENCIO». Distingue una marca observable de una hipótesis sobre sus condiciones de producción. Explica qué evidencia necesitarías para tratar esa marca como huella.",
    "diagram": "veron"
  },
  {
    "id": "kress",
    "year": 2010,
    "date": "2010",
    "era": 5,
    "unit": 0,
    "name": "Gunther Kress",
    "title": "El sentido combina modos",
    "concept": "Multimodalidad",
    "intro": "Kress propone analizar cómo escritura, imagen, disposición espacial, gesto, habla y otros modos participan en la producción social de sentido. La comunicación situada combina recursos cuyas funciones deben examinarse.",
    "body": [
      "El diseño selecciona y articula recursos para una finalidad comunicativa. El interés del análisis está en qué hace cada modo y cómo se relaciona con los demás.",
      "Enumerar texto, imagen y sonido es solo un primer paso. Hay que explicar qué información presentan, qué relaciones destacan y cómo orientan la interpretación.",
      "El ejercicio puede comparar dos diseños del mismo contenido: una definición escrita y una explicación con esquema, o una secuencia narrada y otra acompañada de subtítulos."
    ],
    "model": [
      "Escritura · imagen · sonido",
      "Diseño situado",
      "Interpretación"
    ],
    "example": "Un video explica el modelo de Peirce. La voz define interpretante, el esquema muestra relaciones y un ejemplo visual presenta una señal del campus. El grupo identifica coincidencias y contradicciones: una flecha dibujada como secuencia temporal podría contradecir la explicación de una relación triádica.",
    "question": "¿Qué convierte el inventario de recursos en análisis multimodal?",
    "options": [
      "Contar el número de imágenes y palabras",
      "Explicar qué aporta cada modo y cómo se relaciona con los otros",
      "Suponer que más modos garantizan siempre mejor comprensión"
    ],
    "answer": 1,
    "feedback": "El análisis atiende a funciones y relaciones. Un recurso visual puede apoyar una explicación o introducir una contradicción conceptual.",
    "reading": [
      "kress"
    ],
    "prompt": "Diseña un borrador de diapositiva con una frase sobre el signo y un esquema. Explica una relación entre ambos y comprueba si comunican ideas compatibles."
  },
  {
    "id": "ia",
    "year": 2020,
    "date": "Década de 2020 · debate abierto",
    "era": 5,
    "unit": 0,
    "name": "Signos e inteligencia artificial",
    "title": "¿Quién interpreta un texto generado?",
    "concept": "Aplicación contemporánea",
    "intro": "Los textos generados ofrecen un caso contemporáneo para separar producción formal, atribución de significado e interpretación. Esta ficha plantea un debate y un ejercicio de análisis, no una teoría cerrada sobre la comprensión artificial.",
    "body": [
      "Bender y Koller sostienen en su artículo de posición de 2020 que un sistema entrenado únicamente sobre forma no puede obtener por esa vía el significado. Es una tesis con un supuesto preciso; no equivale a una evaluación empírica de todos los sistemas posteriores.",
      "Para el análisis semiótico, distingue el texto producido, las condiciones disponibles para estudiar su producción y la actividad interpretativa del lector. Una apariencia de coherencia no basta para validar una afirmación factual.",
      "Aplicar las categorías de Peirce o Eco a este caso es una propuesta didáctica actual. No implica atribuirles opiniones sobre herramientas que no conocieron. La tarea consiste en definir el problema, justificar las categorías y comprobar las afirmaciones."
    ],
    "model": [
      "Producción del texto",
      "Intervención humana",
      "Verificación e interpretación"
    ],
    "example": "El grupo recibe una explicación generada que llama interpretante a la persona que observa una señal. Compara esa afirmación con un texto de Peirce y la corrige. Puede discutir por separado si la respuesta parecía clara, si era conceptualmente precisa y qué permite inferir sobre su producción.",
    "question": "¿Qué conclusión está justificada por este ejercicio?",
    "options": [
      "Una respuesta fluida demuestra por sí sola comprensión de la teoría",
      "La explicación contiene una confusión comprobable entre interpretante e intérprete",
      "Un único error resuelve todo el debate sobre comprensión artificial"
    ],
    "answer": 1,
    "feedback": "El contraste permite evaluar una afirmación concreta. Ni la fluidez ni un único error bastan para resolver todas las preguntas sobre comprensión.",
    "reading": [
      "ia_forma",
      "peirce",
      "eco_lectura"
    ],
    "prompt": "Separa tres juicios: claridad de la redacción, corrección conceptual e hipótesis sobre cómo se produjo el texto. Indica la evidencia de cada uno."
  }
];
