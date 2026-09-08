/**
 * SINTAXISLAB — LABORATORIO DE ANÁLISIS SINTÁCTICO
 * Autor: Msc. Alejandro Córdova
 * Gramática Activa y Análisis Sintáctico Progresivo
 * Versión 3.0.0
 */

// ============================================================================
// 1. BANCO DE DATOS DIDÁCTICO POR MÓDULOS
// ============================================================================


// ============================================================================
// DICCIONARIO DIDÁCTICO DE TÉRMINOS LINGÜÍSTICOS (GLOSARIO INTERACTIVO)
// ============================================================================
const GLOSSARY_TERMS = {
  "verbos-afeccion": {
    name: "Verbos de Afección Psíquica",
    category: "Semántica & Sintaxis Verbal",
    icon: "🧠",
    def: "Verbos como <em>gustar, encantar, fascinar, molestar, doler, apasionar</em> que expresan una emoción, vivencia o reacción interna experimentada por alguien. En estas oraciones, la persona que siente la emoción NO es el sujeto gramatical, sino el <strong>Complemento Indirecto</strong> (introducido por <em>a mí, a ti, a ella, me, te, le</em>).",
    example: "En <strong>«A los estudiantes les fascina la robótica»</strong>, el Sujeto es <strong>«la robótica»</strong>. La trampa habitual consiste en creer que quien siente la emoción es el sujeto.",
    tip: "Aplica siempre la <strong>Prueba Científica de Concordancia</strong>: Si cambias el verbo a plural (<em>«fascinan»</em>), lo único que cambia obligatoriamente es el sujeto: <em>«las robóticas fascinan»</em>. La frase <em>«A los estudiantes»</em> no cambia porque es CI."
  },
  "concordancia": {
    name: "Prueba Científica de Concordancia",
    category: "Principio Sintáctico Rector",
    icon: "🔬",
    def: "Es el criterio formal y riguroso de la lingüística moderna para identificar el Sujeto sin caer en ambigüedades semánticas. El Sujeto y el Verbo coinciden obligatoriamente en <strong>número</strong> (singular/plural) y <strong>persona</strong> (1.ª, 2.ª, 3.ª).",
    example: "En <strong>«El teléfono de mis hermanos sonó fuertemente»</strong>: si forzamos el verbo a plural (<em>«sonaron»</em>), la oración exige decir <em>«Los teléfonos de mis hermanos sonaron»</em>. Esto demuestra que <em>teléfono</em> es el núcleo del Sujeto y no <em>hermanos</em>.",
    tip: "Jamás preguntes <em>«¿quién hace la acción?»</em> porque falla estrepitosamente en pasivas (<em>«El informe fue leído»</em>) y en verbos de afección (<em>«Me duele la cabeza»</em>). La concordancia es la única prueba científica infalible."
  },
  "sintagma": {
    name: "Sintagma (Grupo Sintáctico)",
    category: "Estructura Gramatical",
    icon: "🧱",
    def: "Palabra o conjunto articulado de palabras que se organizan en torno a un <strong>núcleo</strong> (sustantivo, verbo, adjetivo, adverbio o preposición) y desempeñan una función sintáctica unitaria dentro de la oración.",
    example: "En <strong>«Los conductores responsables de la ciudad»</strong>, todo el bloque forma un <strong>Sintagma Nominal (SN)</strong> con función de Sujeto. Su núcleo rector es el sustantivo <em>conductores</em>.",
    tip: "Prueba del desplazamiento: los sintagmas se mueven o se sustituyen en bloque completo, nunca como palabras sueltas aisladas."
  },
  "modificador-directo": {
    name: "Modificador Directo (MD)",
    category: "Estructura del Sujeto",
    icon: "🎯",
    def: "Elemento (artículo, determinante o adjetivo calificativo) que acompaña al Núcleo del Sujeto <strong>directamente</strong>, sin preposiciones intermedias, concordando en género y número.",
    example: "En <strong>«Los conductores responsables»</strong>: <em>«Los»</em> (artículo determinado) y <em>«responsables»</em> (adjetivo) son ambos <strong>MD</strong> del núcleo <em>conductores</em>.",
    tip: "Todo artículo y todo adjetivo adherido directamente al sustantivo sin nexo preposicional funciona como Modificador Directo."
  },
  "modificador-indirecto": {
    name: "Modificador Indirecto (MI)",
    category: "Estructura del Sujeto",
    icon: "🔗",
    def: "Sintagma preposicional que complementa al Núcleo del Sujeto mediante un enlace subordinante (preposiciones como <em>de, con, sin, para, sobre</em>).",
    example: "En <strong>«El teléfono de mis hermanos»</strong>: la construcción <strong>«de mis hermanos»</strong> es el <strong>MI</strong>, encabezado por la preposición <em>de</em>.",
    tip: "A diferencia del MD, el MI siempre requiere una preposición o conector que enlace el complemento subordinado con el sustantivo núcleo."
  },
  "aposicion": {
    name: "Aposición",
    category: "Estructura del Sujeto",
    icon: "🏷️",
    def: "Sintagma nominal que aclara, nombra o precisa al Núcleo del Sujeto. Puede ser <strong>explicativa</strong> (va aislada entre comas) o <strong>especificativa</strong> (añade un nombre propio sin comas).",
    example: "Explicativa: <strong>«Quito, capital del Ecuador, conserva su historia»</strong>. Especificativa: <strong>«El río Guayas baña la ciudad»</strong>.",
    tip: "Prueba de permutabilidad: la aposición explicativa puede intercambiar su posición con el núcleo conservando el sentido exacto."
  },
  "complemento-directo": {
    name: "Complemento Directo (CD)",
    category: "Estructura del Predicado",
    icon: "📦",
    def: "Argumento verbal requerido por los verbos transitivos que delimita y completa directamente el proceso verbal. Designa el objeto, entidad o ser afectado por la acción.",
    example: "En <strong>«El docente redactó el informe académico»</strong>: <em>«el informe académico»</em> es el <strong>CD</strong>.",
    tip: "Doble prueba científica: 1) Se sustituye por los pronombres acusativos átonos <strong>lo, la, los, las</strong> (<em>«El docente lo redactó»</em>). 2) En voz pasiva, se convierte obligatoriamente en Sujeto Paciente (<em>«El informe fue redactado»</em>)."
  },
  "complemento-indirecto": {
    name: "Complemento Indirecto (CI)",
    category: "Estructura del Predicado",
    icon: "📬",
    def: "Función sintáctica que designa al destinatario, beneficiario o término receptor de la acción verbal. Va siempre introducido por la preposición <strong>«a»</strong>.",
    example: "En <strong>«El director entregó los diplomas a los graduados»</strong>: <em>«a los graduados»</em> es el <strong>CI</strong>.",
    tip: "Prueba de conmutación: se sustituye únicamente por los pronombres dativos <strong>le / les</strong> (<em>«El director les entregó los diplomas»</em>)."
  },
  "regla-eufonica": {
    name: "Regla Eufónica de SE (Disimilación Pronominal)",
    category: "Fonética y Pronominalización",
    icon: "🎶",
    def: "Principio fonético del español que impide la cacofonía cuando coinciden consecutivamente un pronombre de CI de 3.ª persona (<em>le / les</em>) con un pronombre de CD (<em>lo, la, los, las</em>).",
    example: "No decimos *«Le lo entregué», sino que <em>le</em> muta eufónicamente a <strong>«se»</strong>: <strong>«Se lo entregué»</strong>.",
    tip: "En <em>«se lo dije»</em>, la partícula <em>se</em> sigue funcionando como Complemento Indirecto (proviene etimológicamente del pronombre latino <em>illi</em>)."
  },
  "voz-activa": {
    name: "Voz Activa",
    category: "Diátesis Gramatical",
    icon: "⚡",
    def: "Construcción oracional en la que el Sujeto gramatical es el <strong>Agente</strong>: la entidad que causa, ejecuta o protagoniza activamente la acción verbal transitiva.",
    example: "<strong>«El comité editorial publicó la investigación científica.»</strong> (Sujeto Agente: <em>El comité</em>; CD: <em>la investigación</em>).",
    tip: "Focaliza la atención en el agente causante. Si el verbo es transitivo con CD, admite transformación regular a voz pasiva."
  },
  "pasiva-perifrastica": {
    name: "Voz Pasiva Perifrástica",
    category: "Diátesis Gramatical",
    icon: "🌉",
    def: "Estructura formal construida con la perífrasis verbal <strong>SER (conjugado en el tiempo de la activa) + PARTICIPIO (concordado en género y número)</strong>. El CD de la activa se transforma en Sujeto Paciente.",
    example: "<strong>«La investigación científica fue publicada por el comité editorial.»</strong>",
    tip: "El participante que realizaba la acción en la activa pasa al final de la pasiva como <strong>Complemento Agente</strong> introducido por la preposición <strong>«por»</strong>."
  },
  "complemento-agente": {
    name: "Complemento Agente (C.Ag)",
    category: "Voz Pasiva",
    icon: "👤",
    def: "Sintagma preposicional encabezado por la preposición <strong>«por»</strong> (o raramente <em>de</em>) en oraciones pasivas, que señala quién ejecutó efectivamente la acción verbal.",
    example: "En <strong>«La ley fue aprobada por la asamblea»</strong>: <em>«por la asamblea»</em> es el <strong>Complemento Agente</strong>.",
    tip: "Si transformas la oración a voz activa, el Complemento Agente se convierte inmediatamente en el Sujeto gramatical: <em>«La asamblea aprobó la ley»</em>."
  },
  "pasiva-refleja": {
    name: "Pasiva Refleja con «SE»",
    category: "Valores de «SE»",
    icon: "🪞",
    def: "Estructura sintáctica que emplea la partícula <strong>«se»</strong> junto a un verbo en forma activa con un <strong>Sujeto Paciente inanimado o de cosa</strong>, omitiendo voluntariamente la mención del agente.",
    example: "<strong>«Se transmitieron los mensajes de emergencia.»</strong> (Equivale semánticamente a: <em>«Los mensajes de emergencia fueron transmitidos»</em>).",
    tip: "Prueba de concordancia en plural: Si cambias el sustantivo a singular, el verbo cambia obligatoriamente: <em>«Se transmitió el mensaje»</em>. Esto demuestra que el sustantivo es Sujeto Paciente."
  },
  "impersonales": {
    name: "Oraciones Impersonales con «SE»",
    category: "Valores de «SE»",
    icon: "🚫",
    def: "Construcciones sintácticas que carecen por completo de Sujeto (ni expreso ni omitido). El verbo se fija de forma invariable y obligatoria en <strong>3.ª persona singular</strong>.",
    example: "<strong>«Se vive bien en este barrio.»</strong> / <strong>«Se premió a los estudiantes más destacados.»</strong> (<em>«A los estudiantes»</em> es CD de persona, no sujeto).",
    tip: "Jamás admiten verbo en plural: es completamente agramatical decir *«Se viven bien en este barrio». Si no puede concordar en plural, es una oración impersonal."
  },
  "oracion-compuesta": {
    name: "Oraciones Compuestas Coordinadas",
    category: "Sintaxis Compleja",
    icon: "✂️",
    def: "Estructuras oracionales que integran dos o más proposiciones sintácticamente independientes (cada una con su propio verbo conjugado) unidas mediante conjunciones coordinantes al mismo nivel de jerarquía.",
    example: "<strong>«[El científico formuló la hipótesis] y [el equipo contrastó los datos].»</strong>",
    tip: "Usa el bisturí sintáctico: separa las dos proposiciones. Si ambas tienen sentido completo por separado, están coordinadas o yuxtapuestas."
  },
  "nexo-sintactico": {
    name: "Nexo Coordinante",
    category: "Conectores Sintácticos",
    icon: "🔗",
    def: "Palabra gramatical invariable (conjunción) que enlaza proposiciones estableciendo relaciones lógicas de adición (copulativa), oposición (adversativa), alternativa (disyuntiva) o consecuencia (ilativa).",
    example: "Copulativas: <em>y, e, ni</em> | Adversativas: <em>pero, mas, sino que</em> | Disyuntivas: <em>o, u</em> | Ilativas: <em>luego, conque, por tanto</em>.",
    tip: "El nexo no forma parte del predicado ni del sujeto de ninguna proposición; actúa como una bisagra o puente lógico entre ambas."
  },
  "proposicion-subordinada": {
    name: "Proposiciones Subordinadas",
    category: "Sintaxis Compleja",
    icon: "📐",
    def: "Proposición dependiente que carece de autonomía sintáctica y se incrusta dentro de otra oración desempeñando la función propia de un sustantivo (sustantiva: CD, Término o Sujeto) o de un adjetivo (adjetiva o de relativo: CN).",
    example: "Sustantiva: <strong>«El testigo afirmó [que vio el incidente]»</strong> (➔ <em>«afirmó [eso]»</em>). Adjetiva: <strong>«El informe [que entregaste hoy] es exhaustivo»</strong> (➔ <em>«el informe [exhaustivo]»</em>).",
    tip: "Prueba del comodín: Si la proposición se puede sustituir por el pronombre neutro <strong>«ESO»</strong>, es sustantiva. Si se puede sustituir por un adjetivo calificativo, es adjetiva."
  }
};

// 1.1 CONCORDANCIA EXPERIMENTAL (MÓDULO 01)
const CONCORDANCE_EXAMPLES = [
  {
    original: ["La", "inteligencia", "artificial", "transforma", "el", "mundo."],
    verbIndex: 3,
    singularVerb: "transforma",
    pluralVerb: "transforman",
    subjectWords: ["La", "inteligencia", "artificial"],
    explanation: "Al cambiar el verbo a «transforman», suena discordante «La inteligencia artificial». Debe decirse «Las inteligencias artificiales transforman». Esto prueba científicamente que es el Sujeto."
  },
  {
    original: ["Los", "océanos", "piden", "ayuda", "a", "gritos."],
    verbIndex: 2,
    singularVerb: "pide",
    pluralVerb: "piden",
    subjectWords: ["Los", "océanos"],
    explanation: "Si forzamos el verbo a singular («pide»), «Los océanos» debe cambiar a «El océano». La concordancia revela el Sujeto sin preguntas engañosas."
  },
  {
    original: ["A", "los", "estudiantes", "les", "fascina", "la", "robótica."],
    verbIndex: 4,
    singularVerb: "fascina",
    pluralVerb: "fascinan",
    subjectWords: ["la", "robótica"],
    explanation: "¡Cuidado con la trampa de «¿quién?»! Si preguntas «¿a quién?», dirías los estudiantes. Pero si cambias el verbo a «fascinan», la frase «A los estudiantes» NO cambia: cambia «las robóticas / los robots». Por tanto, el Sujeto es «la robótica»."
  },
  {
    original: ["El", "teléfono", "de", "mis", "hermanos", "sonó", "fuertemente."],
    verbIndex: 5,
    singularVerb: "sonó",
    pluralVerb: "sonaron",
    subjectWords: ["El", "teléfono", "de", "mis", "hermanos"],
    explanation: "Aunque «mis hermanos» esté en plural (es Modificador Indirecto), el núcleo rector es «teléfono» (singular). Al pluralizar («sonaron»), decimos «Los teléfonos de mis hermanos sonaron»."
  }
];

// 1.2 ETAPA 1: NIVEL FUNDAMENTAL (ORACIÓN SIMPLE)
// Módulo 02: Modificadores del Sujeto (Oraciones 1 a 6)
const SUJETO_EXERCISES = [
  {
    id: 1,
    tema: "Sociedad",
    oracion: "Los conductores responsables respetan el paso cebra.",
    palabrasSujeto: ["Los", "conductores", "responsables"],
    md: ["Los", "responsables"],
    ns: ["conductores"],
    mi: [],
    apos: [],
    pista: "«Los» es determinante artículo (MD) y «responsables» es adjetivo calificativo directo (MD). El sustantivo es el NS.",
    explicacion: "MD: «Los», «responsables» | NS: «conductores» (sustantivo rector sin preposición)."
  },
  {
    id: 2,
    tema: "Tecnología",
    oracion: "El grupo de WhatsApp envió un aviso importante.",
    palabrasSujeto: ["El", "grupo", "de", "WhatsApp"],
    md: ["El"],
    ns: ["grupo"],
    mi: ["de", "WhatsApp"],
    apos: [],
    pista: "Todo sintagma introducido por preposición («de WhatsApp») que complementa a un sustantivo es Modificador Indirecto (MI).",
    explicacion: "MD: «El» | NS: «grupo» | MI: «de WhatsApp» (conector preposicional 'de')."
  },
  {
    id: 3,
    tema: "Historia",
    oracion: "Quito , capital del Ecuador , conserva su centro histórico.",
    palabrasSujeto: ["Quito", ",", "capital", "del", "Ecuador", ","],
    md: [],
    ns: ["Quito"],
    mi: [],
    apos: [",", "capital", "del", "Ecuador", ","],
    pista: "La aclaración entre comas que equivale al sustantivo propio es una Aposición Explicativa.",
    explicacion: "NS: «Quito» | Aposición: «, capital del Ecuador ,» (aclaración nominal)."
  },
  {
    id: 4,
    tema: "Ciencia",
    oracion: "Ese famoso científico de la universidad descubrió la cura.",
    palabrasSujeto: ["Ese", "famoso", "científico", "de", "la", "universidad"],
    md: ["Ese", "famoso"],
    ns: ["científico"],
    mi: ["de", "la", "universidad"],
    apos: [],
    pista: "Identifica el demostrativo y el adjetivo (MD), el sustantivo (NS) y la frase con preposición (MI).",
    explicacion: "MD: «Ese», «famoso» | NS: «científico» | MI: «de la universidad»."
  },
  {
    id: 5,
    tema: "Cultura",
    oracion: "La música tradicional de los Andes emociona a todos.",
    palabrasSujeto: ["La", "música", "tradicional", "de", "los", "Andes"],
    md: ["La", "tradicional"],
    ns: ["música"],
    mi: ["de", "los", "Andes"],
    apos: [],
    pista: "«La» y «tradicional» acompañan a «música». «de los Andes» va introducido por preposición.",
    explicacion: "MD: «La», «tradicional» | NS: «música» | MI: «de los Andes»."
  },
  {
    id: 6,
    tema: "Educación",
    oracion: "Mi amigo Carlos obtuvo una beca académica.",
    palabrasSujeto: ["Mi", "amigo", "Carlos"],
    md: ["Mi"],
    ns: ["amigo"],
    mi: [],
    apos: ["Carlos"],
    pista: "«Carlos» es un sustantivo propio que especifica a «amigo»: es una Aposición Especificativa.",
    explicacion: "MD: «Mi» (posesivo) | NS: «amigo» | Aposición: «Carlos»."
  }
];

// Módulo 03: Predicado Completo (Oraciones 7 a 12)
const PREDICADO_EXERCISES = [
  {
    id: 7,
    tema: "Vial",
    oracion: "El semáforo da prioridad a los peatones en la avenida diariamente.",
    palabrasPred: ["da", "prioridad", "a", "los", "peatones", "en", "la", "avenida", "diariamente"],
    np: ["da"],
    cd: ["prioridad"],
    ci: ["a", "los", "peatones"],
    cc: ["en", "la", "avenida", "diariamente"],
    pista: "¿Qué da? (CD: prioridad). ¿A quién? (CI: a los peatones). ¿Dónde y cuándo? (CC Lugar y CC Tiempo).",
    explicacion: "NP: «da» | CD: «prioridad» | CI: «a los peatones» | CC: «en la avenida» (Lugar), «diariamente» (Tiempo)."
  },
  {
    id: 8,
    tema: "Tecnología",
    oracion: "El algoritmo sugiere videos a los usuarios en la aplicación.",
    palabrasPred: ["sugiere", "videos", "a", "los", "usuarios", "en", "la", "aplicación"],
    np: ["sugiere"],
    cd: ["videos"],
    ci: ["a", "los", "usuarios"],
    cc: ["en", "la", "aplicación"],
    pista: "CD: videos (los sugiere). CI: a los usuarios (les sugiere). CC: en la aplicación (Lugar).",
    explicacion: "NP: «sugiere» | CD: «videos» | CI: «a los usuarios» | CC: «en la aplicación»."
  },
  {
    id: 9,
    tema: "Educación",
    oracion: "El profesor entregó las calificaciones a los padres ayer.",
    palabrasPred: ["entregó", "las", "calificaciones", "a", "los", "padres", "ayer"],
    np: ["entregó"],
    cd: ["las", "calificaciones"],
    ci: ["a", "los", "padres"],
    cc: ["ayer"],
    pista: "«las calificaciones» es CD ('las entregó'). «a los padres» es CI ('les entregó'). «ayer» es CC Tiempo.",
    explicacion: "NP: «entregó» | CD: «las calificaciones» | CI: «a los padres» | CC: «ayer» (Tiempo)."
  },
  {
    id: 10,
    tema: "Ética",
    oracion: "Nosotros mostramos respeto a nuestros mayores en todo momento.",
    palabrasPred: ["mostramos", "respeto", "a", "nuestros", "mayores", "en", "todo", "momento"],
    np: ["mostramos"],
    cd: ["respeto"],
    ci: ["a", "nuestros", "mayores"],
    cc: ["en", "todo", "momento"],
    pista: "CD: respeto. CI: a nuestros mayores. CC: en todo momento (Tiempo/Modo).",
    explicacion: "NP: «mostramos» | CD: «respeto» | CI: «a nuestros mayores» | CC: «en todo momento»."
  },
  {
    id: 11,
    tema: "Ambiente",
    oracion: "El gobierno prometió leyes nuevas a los ciudadanos en la asamblea.",
    palabrasPred: ["prometió", "leyes", "nuevas", "a", "los", "ciudadanos", "en", "la", "asamblea"],
    np: ["prometió"],
    cd: ["leyes", "nuevas"],
    ci: ["a", "los", "ciudadanos"],
    cc: ["en", "la", "asamblea"],
    pista: "CD: 'leyes nuevas' (las prometió). CI: 'a los ciudadanos' (les prometió). CC: 'en la asamblea' (Lugar).",
    explicacion: "NP: «prometió» | CD: «leyes nuevas» | CI: «a los ciudadanos» | CC: «en la asamblea» (Lugar)."
  },
  {
    id: 12,
    tema: "Deporte",
    oracion: "El atleta dedicó la medalla a su familia con profunda emoción.",
    palabrasPred: ["dedicó", "la", "medalla", "a", "su", "familia", "con", "profunda", "emoción"],
    np: ["dedicó"],
    cd: ["la", "medalla"],
    ci: ["a", "su", "familia"],
    cc: ["con", "profunda", "emoción"],
    pista: "«con profunda emoción» responde a ¿cómo? (CC de Modo).",
    explicacion: "NP: «dedicó» | CD: «la medalla» | CI: «a su familia» | CC: «con profunda emoción» (Modo)."
  }
];

// Módulo 04: Pronombres y Regla de SE (Oraciones 13 a 18)
const PRONOM_EXERCISES = [
  {
    id: 13,
    tema: "Tecnología",
    oracion: "Juan envió los archivos al profesor.",
    sujeto: "Juan",
    verbo: "envió",
    cd: "los archivos",
    ci: "al profesor",
    cdPronombre: "los",
    ciPronombre: "le",
    oracionCD: "Juan los envió al profesor.",
    oracionCI: "Juan le envió los archivos.",
    oracionAmbos: "Juan se los envió."
  },
  {
    id: 14,
    tema: "Vial",
    oracion: "El policía puso una multa al conductor.",
    sujeto: "El policía",
    verbo: "puso",
    cd: "una multa",
    ci: "al conductor",
    cdPronombre: "la",
    ciPronombre: "le",
    oracionCD: "El policía la puso al conductor.",
    oracionCI: "El policía le puso una multa.",
    oracionAmbos: "El policía se la puso."
  },
  {
    id: 15,
    tema: "Cultura",
    oracion: "Marvel presentó el tráiler a la audiencia.",
    sujeto: "Marvel",
    verbo: "presentó",
    cd: "el tráiler",
    ci: "a la audiencia",
    cdPronombre: "lo",
    ciPronombre: "le",
    oracionCD: "Marvel lo presentó a la audiencia.",
    oracionCI: "Marvel le presentó el tráiler.",
    oracionAmbos: "Marvel se lo presentó."
  },
  {
    id: 16,
    tema: "Educación",
    oracion: "La profesora enseñó la lección a los estudiantes.",
    sujeto: "La profesora",
    verbo: "enseñó",
    cd: "la lección",
    ci: "a los estudiantes",
    cdPronombre: "la",
    ciPronombre: "les",
    oracionCD: "La profesora la enseñó a los estudiantes.",
    oracionCI: "La profesora les enseñó la lección.",
    oracionAmbos: "La profesora se la enseñó."
  },
  {
    id: 17,
    tema: "Ambiente",
    oracion: "Los voluntarios entregaron suministros al refugio.",
    sujeto: "Los voluntarios",
    verbo: "entregaron",
    cd: "suministros",
    ci: "al refugio",
    cdPronombre: "los",
    ciPronombre: "le",
    oracionCD: "Los voluntarios los entregaron al refugio.",
    oracionCI: "Los voluntarios le entregaron suministros.",
    oracionAmbos: "Los voluntarios se los entregaron."
  },
  {
    id: 18,
    tema: "Ética",
    oracion: "La escuela otorgó una beca al estudiante.",
    sujeto: "La escuela",
    verbo: "otorgó",
    cd: "una beca",
    ci: "al estudiante",
    cdPronombre: "la",
    ciPronombre: "le",
    oracionCD: "La escuela la otorgó al estudiante.",
    oracionCI: "La escuela le otorgó una beca.",
    oracionAmbos: "La escuela se la otorgó."
  }
];

// 1.3 ETAPA 2: BACHILLERATO GENERAL UNIFICADO (BGU)
// Módulo 05: Puente de Voz Activa ↔ Pasiva (Oraciones 19 a 24)
const PASIVA_EXERCISES = [
  {
    id: 19,
    activa: "El científico descubrió la vacuna.",
    agente: "El científico",
    verboActivo: "descubrió",
    cd: "la vacuna",
    sujetoPaciente: "La vacuna",
    verboPasivo: "fue descubierta",
    compAgente: "por el científico",
    pasivaCompleta: "La vacuna fue descubierta por el científico."
  },
  {
    id: 20,
    activa: "Los estudiantes redactaron el ensayo.",
    agente: "Los estudiantes",
    verboActivo: "redactaron",
    cd: "el ensayo",
    sujetoPaciente: "El ensayo",
    verboPasivo: "fue redactado",
    compAgente: "por los estudiantes",
    pasivaCompleta: "El ensayo fue redactado por los estudiantes."
  },
  {
    id: 21,
    activa: "El comité aprobó las reformas.",
    agente: "El comité",
    verboActivo: "aprobó",
    cd: "las reformas",
    sujetoPaciente: "Las reformas",
    verboPasivo: "fueron aprobadas",
    compAgente: "por el comité",
    pasivaCompleta: "Las reformas fueron aprobadas por el comité."
  },
  {
    id: 22,
    activa: "La academia publicó los resultados.",
    agente: "La academia",
    verboActivo: "publicó",
    cd: "los resultados",
    sujetoPaciente: "Los resultados",
    verboPasivo: "fueron publicados",
    compAgente: "por la academia",
    pasivaCompleta: "Los resultados fueron publicados por la academia."
  },
  {
    id: 23,
    activa: "Los rescatistas salvaron a las víctimas.",
    agente: "Los rescatistas",
    verboActivo: "salvaron",
    cd: "a las víctimas",
    sujetoPaciente: "Las víctimas",
    verboPasivo: "fueron salvadas",
    compAgente: "por los rescatistas",
    pasivaCompleta: "Las víctimas fueron salvadas por los rescatistas."
  },
  {
    id: 24,
    activa: "El presidente firmó el decreto.",
    agente: "El presidente",
    verboActivo: "firmó",
    cd: "el decreto",
    sujetoPaciente: "El decreto",
    verboPasivo: "fue firmado",
    compAgente: "por el presidente",
    pasivaCompleta: "El decreto fue firmado por el presidente."
  }
];

// Módulo 06: Pasiva Refleja vs. Impersonal (Oraciones 25 a 30)
const REFLEJA_EXERCISES = [
  {
    id: 25,
    oracion: "Se transmitieron los mensajes oficiales por televisión.",
    tipo: "pasiva-refleja",
    sujetoPaciente: "los mensajes oficiales",
    explicacion: "Es Pasiva Refleja porque «los mensajes oficiales» es Sujeto Paciente y concuerda en plural con el verbo («Se transmitieron»). Si pasamos a singular, el verbo cambia: «Se transmitió el mensaje»."
  },
  {
    id: 26,
    oracion: "Se vive bien en esta ciudad.",
    tipo: "impersonal",
    sujetoPaciente: "",
    explicacion: "Es Impersonal con SE: no existe sujeto que realice o reciba la acción. El verbo queda congelado en 3.ª persona singular."
  },
  {
    id: 27,
    oracion: "Se cancelaron todos los vuelos por el clima.",
    tipo: "pasiva-refleja",
    sujetoPaciente: "todos los vuelos",
    explicacion: "Pasiva Refleja: «todos los vuelos» concuerda con «se cancelaron» (equivale a «Todos los vuelos fueron cancelados»)."
  },
  {
    id: 28,
    oracion: "Se aplaudió a los médicos con entusiasmo.",
    tipo: "impersonal",
    sujetoPaciente: "",
    explicacion: "Es Impersonal: la presencia de la preposición 'a' («a los médicos») impide que funcione como sujeto. Es un CD de persona con verbo impersonal."
  },
  {
    id: 29,
    oracion: "Se construyeron nuevos puentes en la provincia.",
    tipo: "pasiva-refleja",
    sujetoPaciente: "nuevos puentes",
    explicacion: "Pasiva Refleja: «nuevos puentes» es el Sujeto Paciente que concuerda en plural con «construyeron»."
  },
  {
    id: 30,
    oracion: "Aquí se trabaja con honradez.",
    tipo: "impersonal",
    sujetoPaciente: "",
    explicacion: "Impersonal con SE: no hay ningún sustantivo que concuerde con el verbo."
  }
];

// Módulo 07: Bisturí de Oraciones Compuestas (Oraciones 31 a 36)
const COMPUESTA_EXERCISES = [
  {
    id: 31,
    tokens: ["El", "científico", "analizó", "las", "pruebas", ",", "pero", "el", "jurado", "dudó", "del", "testimonio."],
    cutAfterToken: "pruebas",
    prop1: "El científico analizó las pruebas",
    nexo: "pero",
    prop2: "el jurado dudó del testimonio.",
    tipoNexo: "adversativa",
    pista: "«pero» indica una objeción o contraste entre ambas proposiciones."
  },
  {
    id: 32,
    tokens: ["Los", "estudiantes", "investigaron", "el", "tema", "y", "el", "profesor", "evaluó", "el", "informe."],
    cutAfterToken: "tema",
    prop1: "Los estudiantes investigaron el tema",
    nexo: "y",
    prop2: "el profesor evaluó el informe.",
    tipoNexo: "copulativa",
    pista: "«y» suma o adiciona dos acciones simultáneas o sucesivas."
  },
  {
    id: 33,
    tokens: ["Aceptas", "las", "condiciones", "del", "contrato", "o", "cancelamos", "la", "negociación", "ahora."],
    cutAfterToken: "contrato",
    prop1: "Aceptas las condiciones del contrato",
    nexo: "o",
    prop2: "cancelamos la negociación ahora.",
    tipoNexo: "disyuntiva",
    pista: "«o» presenta dos opciones excluyentes."
  },
  {
    id: 34,
    tokens: ["El", "acusado", "confesó", "los", "hechos", ",", "por", "tanto", "el", "juez", "dictó", "sentencia."],
    cutAfterToken: "hechos",
    prop1: "El acusado confesó los hechos",
    nexo: "por tanto",
    prop2: "el juez dictó sentencia.",
    tipoNexo: "consecutiva",
    pista: "«por tanto» introduce una deducción o consecuencia lógica de la primera proposición."
  },
  {
    id: 35,
    tokens: ["No", "asistió", "a", "la", "conferencia", "ni", "presentó", "la", "justificación", "a", "tiempo."],
    cutAfterToken: "conferencia",
    prop1: "No asistió a la conferencia",
    nexo: "ni",
    prop2: "presentó la justificación a tiempo.",
    tipoNexo: "copulativa",
    pista: "«ni» suma proposiciones en sentido negativo."
  },
  {
    id: 36,
    tokens: ["El", "experimento", "fue", "complejo", ",", "sin", "embargo", "el", "equipo", "obtuvo", "el", "premio."],
    cutAfterToken: "complejo",
    prop1: "El experimento fue complejo",
    nexo: "sin embargo",
    prop2: "el equipo obtuvo el premio.",
    tipoNexo: "adversativa",
    pista: "«sin embargo» es una locución conjuntiva adversativa que opone dos ideas."
  }
];

// Módulo 08: Subordinadas Sustantivas y Adjetivas (Oraciones 37 a 42)
const SUBORD_EXERCISES = [
  {
    id: 37,
    oracion: "El docente anunció que publicará los resultados mañana.",
    tipo: "sustantiva",
    subordinada: "que publicará los resultados mañana",
    funcion: "cd",
    pista: "Prueba del comodín: «El docente anunció [ESO]» → Función de CD."
  },
  {
    id: 38,
    oracion: "El libro que compré ayer explica la historia del Ecuador.",
    tipo: "adjetiva",
    subordinada: "que compré ayer",
    funcion: "adyacente",
    pista: "Modifica directamente al sustantivo antecedente «libro» («El libro comprado ayer...»)."
  },
  {
    id: 39,
    oracion: "Es necesario que estudies con disciplina.",
    tipo: "sustantiva",
    subordinada: "que estudies con disciplina",
    funcion: "sujeto",
    pista: "«[ESO] es necesario» → la proposición subordinada funciona como Sujeto de la oración."
  },
  {
    id: 40,
    oracion: "Los médicos que atendieron la emergencia recibieron un homenaje.",
    tipo: "adjetiva",
    subordinada: "que atendieron la emergencia",
    funcion: "adyacente",
    pista: "Proposición adjetiva de relativo introducida por «que» que complementa al antecedente «médicos»."
  },
  {
    id: 41,
    oracion: "Ella prometió que terminará el proyecto el viernes.",
    tipo: "sustantiva",
    subordinada: "que terminará el proyecto el viernes",
    funcion: "cd",
    pista: "«Ella prometió [ESO]» → cumple la función de Complemento Directo del verbo prometió."
  },
  {
    id: 42,
    oracion: "La propuesta que presentó el delegado fue aprobada unánimemente.",
    tipo: "adjetiva",
    subordinada: "que presentó el delegado",
    funcion: "adyacente",
    pista: "Complementa a la propuesta (antecedente). Equivale a un adjetivo calificativo."
  }
];

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzogh6a08u9ERlt_kTzUfAMUapNdmNiTNsj_rt3s3hfa_c1UcYOJ51q69QLXO3zjnE4nw/exec';

// ============================================================================
// 2. ESTADO GLOBAL
// ============================================================================
const state = {
  student: null,
  route: 'egb', // 'egb' | 'bgu' | 'eval'
  activeTab: 'tab-fundamentos',

  // Módulo 01: Concordancia
  concord: {
    index: 0,
    isPlural: false
  },

  // Módulo 02: Sujeto
  sujeto: {
    index: 0,
    selectedChip: null,
    history: {}
  },

  // Módulo 03: Predicado
  predicado: {
    index: 0,
    selectedChip: null,
    history: {}
  },

  // Módulo 04: Pronombres
  pronom: {
    index: 0,
    mode: 'cd',
    history: {}
  },

  // Módulo 05: Pasiva
  pasiva: {
    index: 0,
    history: {}
  },

  // Módulo 06: Refleja
  refleja: {
    index: 0,
    selectedDecision: null,
    history: {}
  },

  // Módulo 07: Compuestas
  compuesta: {
    index: 0,
    selectedCut: null,
    selectedNexoType: null,
    history: {}
  },

  // Módulo 08: Subordinadas
  subord: {
    index: 0,
    selectedType: null,
    selectedFunc: null,
    history: {}
  }
};

// ============================================================================
// 3. INICIALIZACIÓN
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadStudentSession();
  loadSavedProgress();
  initCurriculumRoutes();
  initStudentModal();
  initTermGlossary();

  // Módulos
  initConcordanceExperiment();
  initSujetoModule();
  initPredicadoModule();
  initPronomModule();
  initPasivaModule();
  initReflejaModule();
  initCompuestaModule();
  initSubordModule();
  initResultsAndAnalyzer();

  // URL Query param ?nivel=bgu o ?nivel=egb
  const params = new URLSearchParams(window.location.search);
  const routeParam = params.get('nivel');
  if (routeParam === 'bgu') {
    setRoute('bgu');
  } else {
    setRoute('egb');
  }

  updateCurriculumScore();
});

// ============================================================================
// 4. SESIÓN DE ESTUDIANTE Y PERSISTENCIA
// ============================================================================
function loadStudentSession() {
  const saved = localStorage.getItem('sintaxisLabStudent') || localStorage.getItem('sintaxisFlowStudent');
  if (saved) {
    try {
      state.student = JSON.parse(saved);
      updateStudentHeader();
    } catch (e) {
      console.error(e);
    }
  }
}

function updateStudentHeader() {
  const display = document.getElementById('studentNameDisplay');
  if (!display) return;
  if (state.student && state.student.nombre) {
    display.textContent = `${state.student.nombre} ${state.student.apellido || ''} (${state.student.curso || 'Lengua'})`;
  } else {
    display.textContent = 'Modo Práctica Libre';
  }
}

function initStudentModal() {
  const modal = document.getElementById('studentModal');
  const btnOpen = document.getElementById('btnOpenStudentModal');
  const btnSave = document.getElementById('btnSaveStudent');

  if (btnOpen) {
    btnOpen.addEventListener('click', () => {
      if (state.student) {
        document.getElementById('studentInputName').value = state.student.nombre || '';
        document.getElementById('studentInputLastName').value = state.student.apellido || '';
        document.getElementById('studentInputCourse').value = state.student.curso || '';
      }
      modal.classList.remove('hidden');
    });
  }

  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const nombre = document.getElementById('studentInputName').value.trim();
      const apellido = document.getElementById('studentInputLastName').value.trim();
      const curso = document.getElementById('studentInputCourse').value.trim();

      if (!nombre) {
        showToast('Escribe al menos tu nombre.', 'warning');
        return;
      }

      state.student = { nombre, apellido, curso };
      localStorage.setItem('sintaxisLabStudent', JSON.stringify(state.student));
      updateStudentHeader();
      closeStudentModal();
      showToast(`¡Identificación guardada: ${nombre}!`, 'success');
    });
  }
}

window.closeStudentModal = function() {
  const modal = document.getElementById('studentModal');
  if (modal) modal.classList.add('hidden');
};

function loadSavedProgress() {
  const saved = localStorage.getItem('sintaxisLabCurricularProgress') || localStorage.getItem('sintaxisFlowCurricularProgress');
  if (saved) {
    try {
      const d = JSON.parse(saved);
      if (d.sujeto) state.sujeto.history = d.sujeto;
      if (d.predicado) state.predicado.history = d.predicado;
      if (d.pronom) state.pronom.history = d.pronom;
      if (d.pasiva) state.pasiva.history = d.pasiva;
      if (d.refleja) state.refleja.history = d.refleja;
      if (d.compuesta) state.compuesta.history = d.compuesta;
      if (d.subord) state.subord.history = d.subord;
    } catch (e) {
      console.error(e);
    }
  }
}

function persistProgress() {
  const payload = {
    sujeto: state.sujeto.history,
    predicado: state.predicado.history,
    pronom: state.pronom.history,
    pasiva: state.pasiva.history,
    refleja: state.refleja.history,
    compuesta: state.compuesta.history,
    subord: state.subord.history,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('sintaxisLabCurricularProgress', JSON.stringify(payload));
  updateCurriculumScore();
}

// ============================================================================
// 5. SELECTOR DE RUTAS DE APRENDIZAJE
// ============================================================================
function initCurriculumRoutes() {
  const btnEgb = document.getElementById('route-btn-egb');
  const btnBgu = document.getElementById('route-btn-bgu');
  const btnEval = document.getElementById('route-btn-eval');

  if (btnEgb) btnEgb.addEventListener('click', () => setRoute('egb'));
  if (btnBgu) btnBgu.addEventListener('click', () => setRoute('bgu'));
  if (btnEval) btnEval.addEventListener('click', () => setRoute('eval'));

  // Manejador de clics en las pestañas individuales
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      if (tabId) switchTab(tabId);
    });
  });

  // Botones de salto pedagógico
  document.querySelectorAll('[data-jump]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.jump;
      if (target) switchTab(target);
    });
  });
}

function setRoute(routeId) {
  state.route = routeId;

  // Actualizar botones de ruta
  document.querySelectorAll('.btn-route').forEach(b => {
    b.classList.toggle('active', b.dataset.route === routeId);
  });

  const egbTabs = document.querySelectorAll('.egb-tab');
  const bguTabs = document.querySelectorAll('.bgu-tab');
  const evalTab = document.getElementById('btn-tab-resultados');

  if (routeId === 'egb') {
    egbTabs.forEach(t => t.style.display = 'inline-flex');
    bguTabs.forEach(t => t.style.display = 'none');
    switchTab('tab-fundamentos');
  } else if (routeId === 'bgu') {
    egbTabs.forEach(t => t.style.display = 'none');
    bguTabs.forEach(t => t.style.display = 'inline-flex');
    switchTab('tab-pasiva');
  } else {
    // Eval
    switchTab('tab-resultados');
  }

  updateCurriculumScore();
}

function getRouteForTab(tabId) {
  if (['tab-fundamentos', 'tab-sujeto', 'tab-predicado', 'tab-pronombres'].includes(tabId)) return 'egb';
  if (['tab-pasiva', 'tab-refleja', 'tab-compuestas', 'tab-subordinadas'].includes(tabId)) return 'bgu';
  if (tabId === 'tab-resultados') return 'eval';
  return 'egb';
}

function switchTab(tabId, syncRoute = true) {
  state.activeTab = tabId;

  // Sincronizar automáticamente el selector de nivel con la pestaña seleccionada
  if (syncRoute) {
    const expectedRoute = getRouteForTab(tabId);
    if (state.route !== expectedRoute) {
      state.route = expectedRoute;

      // Actualizar visualmente los botones de nivel superior
      document.querySelectorAll('.btn-route').forEach(b => {
        b.classList.toggle('active', b.dataset.route === expectedRoute);
      });

      // Conmutar visibilidad de pestañas según el nivel
      const egbTabs = document.querySelectorAll('.egb-tab');
      const bguTabs = document.querySelectorAll('.bgu-tab');
      if (expectedRoute === 'egb') {
        egbTabs.forEach(t => t.style.display = 'inline-flex');
        bguTabs.forEach(t => t.style.display = 'none');
      } else if (expectedRoute === 'bgu') {
        egbTabs.forEach(t => t.style.display = 'none');
        bguTabs.forEach(t => t.style.display = 'inline-flex');
      }
      updateCurriculumScore();
    }
  }

  document.querySelectorAll('.nav-tab').forEach(tab => {
    const isActive = tab.dataset.tab === tabId;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  document.querySelectorAll('.tab-content').forEach(sec => {
    const isActive = sec.id === tabId;
    sec.classList.toggle('active', isActive);
  });

  // Notificar al menú lateral desplegable (course-shell)
  document.dispatchEvent(new CustomEvent('tab-changed', {
    detail: { tabId: tabId }
  }));
}

// Escuchar eventos emitidos desde el menú lateral de course-shell
window.addEventListener('course-shell-switch-tab', (e) => {
  if (e.detail && e.detail.tabId) {
    switchTab(e.detail.tabId, true);
  }
});

// ============================================================================
// 6. MÓDULO 01: EL INTERRUPTOR DE CONCORDANCIA
// ============================================================================
function initConcordanceExperiment() {
  const btnToggle = document.getElementById('btnToggleVerbNumber');
  const btnNext = document.getElementById('btnNextConcordExample');

  if (btnToggle) btnToggle.addEventListener('click', toggleConcordVerb);
  if (btnNext) btnNext.addEventListener('click', nextConcordExample);

  renderConcordanceSentence();
}

function renderConcordanceSentence() {
  const container = document.getElementById('concordanceSentenceDisplay');
  const stateLabel = document.getElementById('toggleVerbState');
  const feedback = document.getElementById('concordanceFeedback');
  if (!container) return;

  const item = CONCORDANCE_EXAMPLES[state.concord.index];
  container.innerHTML = '';
  state.concord.isPlural = false;
  if (stateLabel) stateLabel.textContent = 'Cambiar a Plural ⇄';
  if (feedback) feedback.innerHTML = '💡 Haz clic en el interruptor para cambiar el número del verbo.';

  item.original.forEach((word, idx) => {
    const span = document.createElement('span');
    span.className = 'concord-word';
    span.textContent = word;
    span.dataset.word = word;
    span.dataset.index = idx;

    if (idx === item.verbIndex) {
      span.classList.add('is-verb');
      span.title = 'Núcleo del Predicado (Verbo conjugado)';
    }

    span.addEventListener('click', () => handleConcordWordClick(span, idx));
    container.appendChild(span);
  });
}

function toggleConcordVerb() {
  const item = CONCORDANCE_EXAMPLES[state.concord.index];
  const container = document.getElementById('concordanceSentenceDisplay');
  const stateLabel = document.getElementById('toggleVerbState');
  const feedback = document.getElementById('concordanceFeedback');
  if (!container) return;

  state.concord.isPlural = !state.concord.isPlural;
  const verbSpan = container.children[item.verbIndex];

  if (state.concord.isPlural) {
    verbSpan.textContent = item.pluralVerb;
    if (stateLabel) stateLabel.textContent = 'Cambiar a Singular ⇄';
    feedback.innerHTML = '⚠️ ¡El verbo cambió de número! La oración suena extraña. <strong>Haz clic en la palabra del Sujeto que ahora está en discordancia</strong>.';
  } else {
    verbSpan.textContent = item.singularVerb;
    if (stateLabel) stateLabel.textContent = 'Cambiar a Plural ⇄';
    feedback.innerHTML = '💡 Verbo en su estado original.';
  }

  // Quitar estados de error previos
  container.querySelectorAll('.concord-word').forEach(w => w.classList.remove('is-broken'));
}

function handleConcordWordClick(span, idx) {
  const item = CONCORDANCE_EXAMPLES[state.concord.index];
  const feedback = document.getElementById('concordanceFeedback');

  if (idx === item.verbIndex) {
    showToast('Ese es el verbo que ya modificaste.', 'info');
    return;
  }

  const cleanWord = span.dataset.word.replace(/[.,;]/g, '');
  const isSubject = item.subjectWords.some(w => cleanWord.toLowerCase().includes(w.toLowerCase()));

  if (isSubject) {
    span.classList.add('is-broken');
    feedback.innerHTML = `✅ <strong>¡Correcto!</strong> «${span.textContent}» pertenece al <strong>Sujeto</strong>.<br>${item.explanation}`;
    showToast('¡Has descubierto el Sujeto mediante concordancia!', 'success');
  } else {
    feedback.innerHTML = `❌ «${span.textContent}» no concuerda obligatoriamente con el verbo. Prueba con el núcleo nominal.`;
  }
}

function nextConcordExample() {
  state.concord.index = (state.concord.index + 1) % CONCORDANCE_EXAMPLES.length;
  renderConcordanceSentence();
}

// ============================================================================
// 7. MÓDULO 02: ANATOMÍA DEL SUJETO (MD, NS, MI, APOS)
// ============================================================================
function initSujetoModule() {
  const btnReturn = document.getElementById('btnSujetoReturnAll');
  const btnReset = document.getElementById('btnSujetoReset');
  const btnCheck = document.getElementById('btnSujetoCheck');
  const btnNext = document.getElementById('btnSujetoNext');
  const btnHint = document.getElementById('btnSujetoHint');

  if (btnReturn) btnReturn.addEventListener('click', returnAllSujetoChips);
  if (btnReset) btnReset.addEventListener('click', resetSujetoExercise);
  if (btnCheck) btnCheck.addEventListener('click', checkSujetoAnswer);
  if (btnNext) btnNext.addEventListener('click', nextSujetoExercise);
  if (btnHint) btnHint.addEventListener('click', showSujetoHint);

  renderSujetoExercise();
}

function renderSujetoExercise() {
  const item = SUJETO_EXERCISES[state.sujeto.index];
  state.sujeto.selectedChip = null;

  const quote = document.getElementById('sujetoSentenceQuote');
  const theme = document.getElementById('sujetoThemeBadge');
  const progress = document.getElementById('sujetoProgressText');
  const score = document.getElementById('sujetoScoreText');

  if (quote) quote.textContent = `«${item.oracion}»`;
  if (theme) theme.textContent = `TEMA: ${item.tema.toUpperCase()}`;
  if (progress) progress.textContent = `Ejercicio ${state.sujeto.index + 1} de ${SUJETO_EXERCISES.length}`;

  const totalCorrect = Object.keys(state.sujeto.history).filter(k => state.sujeto.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  // Pool
  const pool = document.getElementById('sujetoWordsPool');
  if (pool) {
    pool.innerHTML = '';
    item.palabrasSujeto.forEach((word, idx) => {
      const chip = createChip(word, idx, 'sujeto');
      pool.appendChild(chip);
    });
  }

  // Limpiar dropzones
  ['zone-md', 'zone-sujeto-ns', 'zone-mi', 'zone-apos'].forEach(id => {
    const z = document.getElementById(id);
    if (z) {
      z.querySelectorAll('.word-chip').forEach(c => c.remove());
      updateZoneCountAndPlaceholder(z);
    }
  });

  document.querySelectorAll('#sujetoDropzonesGrid .dropzone-box').forEach(box => {
    attachZoneEvents(box, 'sujeto');
  });

  hideFeedback('sujeto');
  const btnNext = document.getElementById('btnSujetoNext');
  const btnCheck = document.getElementById('btnSujetoCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function checkSujetoAnswer() {
  const item = SUJETO_EXERCISES[state.sujeto.index];

  const mdWords = Array.from(document.querySelectorAll('#zone-md .word-chip')).map(c => c.dataset.word);
  const nsWords = Array.from(document.querySelectorAll('#zone-sujeto-ns .word-chip')).map(c => c.dataset.word);
  const miWords = Array.from(document.querySelectorAll('#zone-mi .word-chip')).map(c => c.dataset.word);
  const aposWords = Array.from(document.querySelectorAll('#zone-apos .word-chip')).map(c => c.dataset.word);

  if (nsWords.length === 0) {
    showToast('Identifica al menos el Núcleo del Sujeto (NS).', 'warning');
    return;
  }

  const isCorrect = (
    mdWords.join(' ') === item.md.join(' ') &&
    nsWords.join(' ') === item.ns.join(' ') &&
    miWords.join(' ') === item.mi.join(' ') &&
    aposWords.join(' ') === item.apos.join(' ')
  );

  state.sujeto.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('sujeto', 'success', '¡Estructura del Sujeto Correcta!', item.explicacion);
    const btnNext = document.getElementById('btnSujetoNext');
    const btnCheck = document.getElementById('btnSujetoCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('sujeto', 'error', 'Pauta de Revisión', `Revisa los modificadores: ${item.pista}`);
  }
}

function nextSujetoExercise() {
  if (state.sujeto.index < SUJETO_EXERCISES.length - 1) {
    state.sujeto.index++;
    renderSujetoExercise();
  } else {
    showToast('¡Has culminado el módulo de Modificadores del Sujeto!', 'success');
    showFeedback('sujeto', 'success', '¡Módulo 02 Completado!', 'Dominas la anatomía del Sujeto. Avanza al Módulo 03 para trabajar con el Predicado Completo.');
  }
}

function returnAllSujetoChips() {
  const pool = document.getElementById('sujetoWordsPool');
  document.querySelectorAll('[data-context="sujeto"].word-chip').forEach(c => {
    c.classList.remove('selected-chip');
    pool.appendChild(c);
  });
  ['zone-md', 'zone-sujeto-ns', 'zone-mi', 'zone-apos'].forEach(id => {
    const z = document.getElementById(id);
    if (z) updateZoneCountAndPlaceholder(z);
  });
  state.sujeto.selectedChip = null;
  showToast('Palabras devueltas al banco.', 'info');
}

function resetSujetoExercise() {
  returnAllSujetoChips();
  hideFeedback('sujeto');
  const btnNext = document.getElementById('btnSujetoNext');
  const btnCheck = document.getElementById('btnSujetoCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function showSujetoHint() {
  const item = SUJETO_EXERCISES[state.sujeto.index];
  showFeedback('sujeto', 'hint', 'Pista de Modificadores', item.pista);
}

// ============================================================================
// 8. MÓDULO 03: PREDICADO COMPLETO (NP, CD, CI, CC)
// ============================================================================
function initPredicadoModule() {
  const btnReturn = document.getElementById('btnPredReturnAll');
  const btnReset = document.getElementById('btnPredReset');
  const btnCheck = document.getElementById('btnPredCheck');
  const btnNext = document.getElementById('btnPredNext');
  const btnHint = document.getElementById('btnPredHint');

  if (btnReturn) btnReturn.addEventListener('click', returnAllPredChips);
  if (btnReset) btnReset.addEventListener('click', resetPredExercise);
  if (btnCheck) btnCheck.addEventListener('click', checkPredAnswer);
  if (btnNext) btnNext.addEventListener('click', nextPredExercise);
  if (btnHint) btnHint.addEventListener('click', showPredHint);

  renderPredExercise();
}

function renderPredExercise() {
  const item = PREDICADO_EXERCISES[state.predicado.index];
  state.predicado.selectedChip = null;

  const quote = document.getElementById('predSentenceQuote');
  const theme = document.getElementById('predThemeBadge');
  const progress = document.getElementById('predProgressText');
  const score = document.getElementById('predScoreText');

  if (quote) quote.textContent = `«${item.oracion}»`;
  if (theme) theme.textContent = `TEMA: ${item.tema.toUpperCase()}`;
  if (progress) progress.textContent = `Ejercicio ${state.predicado.index + 1} de ${PREDICADO_EXERCISES.length}`;

  const totalCorrect = Object.keys(state.predicado.history).filter(k => state.predicado.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  const pool = document.getElementById('predWordsPool');
  if (pool) {
    pool.innerHTML = '';
    item.palabrasPred.forEach((word, idx) => {
      const chip = createChip(word, idx, 'predicado');
      pool.appendChild(chip);
    });
  }

  ['zone-pred-np', 'zone-pred-cd', 'zone-pred-ci', 'zone-pred-cc'].forEach(id => {
    const z = document.getElementById(id);
    if (z) {
      z.querySelectorAll('.word-chip').forEach(c => c.remove());
      updateZoneCountAndPlaceholder(z);
    }
  });

  document.querySelectorAll('#predDropzonesGrid .dropzone-box').forEach(box => {
    attachZoneEvents(box, 'predicado');
  });

  hideFeedback('pred');
  const btnNext = document.getElementById('btnPredNext');
  const btnCheck = document.getElementById('btnPredCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function checkPredAnswer() {
  const item = PREDICADO_EXERCISES[state.predicado.index];

  const npWords = Array.from(document.querySelectorAll('#zone-pred-np .word-chip')).map(c => c.dataset.word);
  const cdWords = Array.from(document.querySelectorAll('#zone-pred-cd .word-chip')).map(c => c.dataset.word);
  const ciWords = Array.from(document.querySelectorAll('#zone-pred-ci .word-chip')).map(c => c.dataset.word);
  const ccWords = Array.from(document.querySelectorAll('#zone-pred-cc .word-chip')).map(c => c.dataset.word);

  if (npWords.length === 0) {
    showToast('Identifica al menos el Verbo principal (NP).', 'warning');
    return;
  }

  const isCorrect = (
    npWords.join(' ') === item.np.join(' ') &&
    cdWords.join(' ') === item.cd.join(' ') &&
    ciWords.join(' ') === item.ci.join(' ') &&
    ccWords.join(' ') === item.cc.join(' ')
  );

  state.predicado.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('pred', 'success', '¡Predicado Identificado!', item.explicacion);
    const btnNext = document.getElementById('btnPredNext');
    const btnCheck = document.getElementById('btnPredCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('pred', 'error', 'Pauta de Revisión', `Revisa los complementos: ${item.pista}`);
  }
}

function nextPredExercise() {
  if (state.predicado.index < PREDICADO_EXERCISES.length - 1) {
    state.predicado.index++;
    renderPredExercise();
  } else {
    showToast('¡Has completado el módulo de Predicado Completo!', 'success');
    showFeedback('pred', 'success', '¡Módulo 03 Concluido!', 'Dominas los argumentos y circunstanciales. Avanza al Módulo 04 para practicar la sustitución pronominal y la regla de SE.');
  }
}

function returnAllPredChips() {
  const pool = document.getElementById('predWordsPool');
  document.querySelectorAll('[data-context="predicado"].word-chip').forEach(c => {
    c.classList.remove('selected-chip');
    pool.appendChild(c);
  });
  ['zone-pred-np', 'zone-pred-cd', 'zone-pred-ci', 'zone-pred-cc'].forEach(id => {
    const z = document.getElementById(id);
    if (z) updateZoneCountAndPlaceholder(z);
  });
  state.predicado.selectedChip = null;
  showToast('Palabras devueltas al banco.', 'info');
}

function resetPredExercise() {
  returnAllPredChips();
  hideFeedback('pred');
  const btnNext = document.getElementById('btnPredNext');
  const btnCheck = document.getElementById('btnPredCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function showPredHint() {
  const item = PREDICADO_EXERCISES[state.predicado.index];
  showFeedback('pred', 'hint', 'Pistas de Predicado', item.pista);
}

// ============================================================================
// 9. MÓDULO 04: PRONOMBRES Y REGLA DE SE
// ============================================================================
function initPronomModule() {
  const modeButtons = document.querySelectorAll('.transform-mode-selector .btn-mode');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.pronom.mode = btn.dataset.mode;
      updatePronomModeLabel();
      hideFeedback('pronom');
    });
  });

  document.querySelectorAll('.pro-insert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      insertPronounAtCursor(btn.dataset.insert);
    });
  });

  const btnCheck = document.getElementById('btnPronomCheck');
  const btnNext = document.getElementById('btnPronomNext');
  const btnHint = document.getElementById('btnPronomHint');
  const btnClear = document.getElementById('btnPronomClear');

  if (btnCheck) btnCheck.addEventListener('click', checkPronomAnswer);
  if (btnNext) btnNext.addEventListener('click', nextPronomExercise);
  if (btnHint) btnHint.addEventListener('click', showPronomHint);
  if (btnClear) btnClear.addEventListener('click', () => {
    const inp = document.getElementById('inputTransformedSentence');
    if (inp) { inp.value = ''; inp.focus(); }
  });

  renderPronomExercise();
}

function renderPronomExercise() {
  const item = PRONOM_EXERCISES[state.pronom.index];

  const progress = document.getElementById('pronomProgressText');
  const score = document.getElementById('pronomScoreText');
  const cdText = document.getElementById('pronomCdText');
  const cdPro = document.getElementById('pronomCdPro');
  const ciText = document.getElementById('pronomCiText');
  const ciPro = document.getElementById('pronomCiPro');
  const display = document.getElementById('pronomOriginalDisplay');

  if (progress) progress.textContent = `Ejercicio ${state.pronom.index + 1} de ${PRONOM_EXERCISES.length}`;
  const totalCorrect = Object.keys(state.pronom.history).filter(k => state.pronom.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  if (cdText) cdText.textContent = item.cd;
  if (cdPro) cdPro.textContent = item.cdPronombre;
  if (ciText) ciText.textContent = item.ci;
  if (ciPro) ciPro.textContent = item.ciPronombre;

  if (display) {
    display.innerHTML = `
      <span style="color:var(--color-sujeto)">${item.sujeto}</span> 
      <span style="color:var(--color-np); font-weight:700;">${item.verbo}</span> 
      <span style="color:var(--color-cd)">${item.cd}</span> 
      <span style="color:var(--color-ci)">${item.ci}</span>.
    `;
  }

  const inp = document.getElementById('inputTransformedSentence');
  if (inp) inp.value = '';
  updatePronomModeLabel();
  hideFeedback('pronom');

  const btnNext = document.getElementById('btnPronomNext');
  const btnCheck = document.getElementById('btnPronomCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function updatePronomModeLabel() {
  const label = document.getElementById('pronomInputLabel');
  const input = document.getElementById('inputTransformedSentence');
  if (!label || !input) return;

  if (state.pronom.mode === 'cd') {
    label.innerHTML = 'Escribe la oración reemplazando solo el <strong>Complemento Directo (CD)</strong>:';
    input.placeholder = 'Ej: Juan los envió al profesor.';
  } else if (state.pronom.mode === 'ci') {
    label.innerHTML = 'Escribe la oración reemplazando solo el <strong>Complemento Indirecto (CI)</strong>:';
    input.placeholder = 'Ej: Juan le envió los archivos.';
  } else {
    label.innerHTML = 'Escribe la oración reemplazando <strong>CD + CI (Regla de SE)</strong>:';
    input.placeholder = 'Ej: Juan se los envió.';
  }
}

function insertPronounAtCursor(pronoun) {
  const input = document.getElementById('inputTransformedSentence');
  if (!input) return;

  const start = input.selectionStart || 0;
  const end = input.selectionEnd || 0;
  const val = input.value;

  const before = val.substring(0, start);
  const after = val.substring(end);
  const spacerBefore = (before.length > 0 && !before.endsWith(' ')) ? ' ' : '';
  const spacerAfter = (!after.startsWith(' ') && after.length > 0) ? ' ' : ' ';

  input.value = before + spacerBefore + pronoun + spacerAfter + after;
  const newPos = start + spacerBefore.length + pronoun.length + spacerAfter.length;
  input.setSelectionRange(newPos, newPos);
  input.focus();
}

function checkPronomAnswer() {
  const item = PRONOM_EXERCISES[state.pronom.index];
  const input = document.getElementById('inputTransformedSentence');
  if (!input) return;

  const rawUser = input.value.trim();
  if (!rawUser) {
    showToast('Escribe tu oración transformada.', 'warning');
    return;
  }

  const norm = (s) => (s || '')
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.¡!¿?,;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const userNorm = norm(rawUser);
  let expectedVariants = [];

  if (state.pronom.mode === 'cd') {
    expectedVariants = [
      norm(item.oracionCD),
      norm(`${item.sujeto} ${item.cdPronombre} ${item.verbo} ${item.ci}`),
      norm(`${item.cdPronombre} ${item.verbo} ${item.ci}`)
    ];
  } else if (state.pronom.mode === 'ci') {
    expectedVariants = [
      norm(item.oracionCI),
      norm(`${item.sujeto} ${item.ciPronombre} ${item.verbo} ${item.cd}`),
      norm(`${item.ciPronombre} ${item.verbo} ${item.cd}`)
    ];
  } else {
    expectedVariants = [
      norm(item.oracionAmbos),
      norm(`${item.sujeto} se ${item.cdPronombre} ${item.verbo}`),
      norm(`se ${item.cdPronombre} ${item.verbo}`)
    ];
  }

  let isCorrect = expectedVariants.includes(userNorm);

  let specificAdvice = '';
  if (!isCorrect && state.pronom.mode === 'both' && (userNorm.includes('le lo') || userNorm.includes('le la') || userNorm.includes('le los') || userNorm.includes('le las') || userNorm.includes('les lo') || userNorm.includes('les los'))) {
    specificAdvice = '¡Atención a la cacofonía! En español «le/les» antes de «lo/la» se transforma obligatoriamente en <strong>SE</strong>.';
  }

  state.pronom.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    const model = state.pronom.mode === 'cd' ? item.oracionCD : (state.pronom.mode === 'ci' ? item.oracionCI : item.oracionAmbos);
    showFeedback('pronom', 'success', '¡Transformación Impecable!', `Modelo exacto: «${model}».`);
    const btnNext = document.getElementById('btnPronomNext');
    const btnCheck = document.getElementById('btnPronomCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('pronom', 'error', 'Pauta de Revisión', specificAdvice || 'Revisa la posición del pronombre antes del verbo conjugado.');
  }
}

function nextPronomExercise() {
  if (state.pronom.index < PRONOM_EXERCISES.length - 1) {
    state.pronom.index++;
    renderPronomExercise();
  } else {
    showToast('¡Has finalizado todas las oraciones de la Etapa de Básica Superior!', 'success');
    showFeedback('pronom', 'success', '¡Nivel Fundamental Concluido!', 'Has completado todos los ejercicios de la oración simple. Puedes revisar tu calificación en el Módulo 09 o avanzar al Nivel Avanzado.');
  }
}

function showPronomHint() {
  const item = PRONOM_EXERCISES[state.pronom.index];
  let h = `CD: '${item.cd}' (${item.cdPronombre}). CI: '${item.ci}' (${item.ciPronombre}).`;
  if (state.pronom.mode === 'both') h += ' Recuerda la regla de SE.';
  showFeedback('pronom', 'hint', 'Pista', h);
}

// ============================================================================
// 10. MÓDULO 05: EL PUENTE DE VOZ ACTIVA ↔ PASIVA (BGU)
// ============================================================================
function initPasivaModule() {
  const btnCheck = document.getElementById('btnPasivaCheck');
  const btnNext = document.getElementById('btnPasivaNext');
  const btnHint = document.getElementById('btnPasivaHint');
  const btnReset = document.getElementById('btnPasivaReset');

  if (btnCheck) btnCheck.addEventListener('click', checkPasivaAnswer);
  if (btnNext) btnNext.addEventListener('click', nextPasivaExercise);
  if (btnHint) btnHint.addEventListener('click', showPasivaHint);
  if (btnReset) btnReset.addEventListener('click', resetPasivaExercise);

  // Previsualización dinámica de la pasiva mientras se escribe
  ['inputSujetoPaciente', 'inputVerboPasivo', 'inputCompAgente'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePassivePreview);
  });

  renderPasivaExercise();
}

function renderPasivaExercise() {
  const item = PASIVA_EXERCISES[state.pasiva.index];

  const progress = document.getElementById('pasivaProgressText');
  const score = document.getElementById('pasivaScoreText');
  const ag = document.getElementById('pasivaAgenteText');
  const v = document.getElementById('pasivaVerboActivoText');
  const cd = document.getElementById('pasivaCdActivoText');

  if (progress) progress.textContent = `Ejercicio ${state.pasiva.index + 1} de ${PASIVA_EXERCISES.length}`;
  const totalCorrect = Object.keys(state.pasiva.history).filter(k => state.pasiva.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  if (ag) ag.textContent = item.agente;
  if (v) v.textContent = item.verboActivo;
  if (cd) cd.textContent = item.cd;

  document.getElementById('inputSujetoPaciente').value = '';
  document.getElementById('inputVerboPasivo').value = '';
  document.getElementById('inputCompAgente').value = '';
  updatePassivePreview();
  hideFeedback('pasiva');

  const btnNext = document.getElementById('btnPasivaNext');
  const btnCheck = document.getElementById('btnPasivaCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function updatePassivePreview() {
  const s = document.getElementById('inputSujetoPaciente')?.value.trim() || '...';
  const v = document.getElementById('inputVerboPasivo')?.value.trim() || '...';
  const a = document.getElementById('inputCompAgente')?.value.trim() || '...';
  const preview = document.getElementById('assembledPassivePreview');
  if (preview) {
    preview.textContent = `«${s} ${v} ${a}.»`;
  }
}

function checkPasivaAnswer() {
  const item = PASIVA_EXERCISES[state.pasiva.index];
  const s = document.getElementById('inputSujetoPaciente').value.trim();
  const v = document.getElementById('inputVerboPasivo').value.trim();
  const a = document.getElementById('inputCompAgente').value.trim();

  if (!s || !v || !a) {
    showToast('Completa los tres campos de la oración pasiva.', 'warning');
    return;
  }

  const norm = (str) => (str || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.¡!¿?,;:]/g, '').trim();

  const isCorrect = (
    norm(s) === norm(item.sujetoPaciente) &&
    norm(v) === norm(item.verboPasivo) &&
    norm(a) === norm(item.compAgente)
  );

  state.pasiva.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('pasiva', 'success', '¡Transformación a Pasiva Impecable!', `Oración pasiva modelo: «${item.pasivaCompleta}». El CD («${item.cd}») pasó a Sujeto Paciente y «${item.agente}» se transformó en Complemento Agente.`);
    const btnNext = document.getElementById('btnPasivaNext');
    const btnCheck = document.getElementById('btnPasivaCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('pasiva', 'error', 'Pauta de Voz Pasiva', `Revisa: El sujeto paciente debe ser «${item.sujetoPaciente}», el verbo pasivo debe usar el auxiliar ser en pasado («${item.verboPasivo}») y el agente debe llevar 'por' («${item.compAgente}»).`);
  }
}

function nextPasivaExercise() {
  if (state.pasiva.index < PASIVA_EXERCISES.length - 1) {
    state.pasiva.index++;
    renderPasivaExercise();
  } else {
    showToast('¡Has completado el módulo de Voz Pasiva Perifrástica!', 'success');
    showFeedback('pasiva', 'success', '¡Módulo 05 Dominado!', 'Avanza al Módulo 06 para diferenciar la Pasiva Refleja con "SE" de las oraciones impersonales.');
  }
}

function resetPasivaExercise() {
  document.getElementById('inputSujetoPaciente').value = '';
  document.getElementById('inputVerboPasivo').value = '';
  document.getElementById('inputCompAgente').value = '';
  updatePassivePreview();
  hideFeedback('pasiva');
  const btnNext = document.getElementById('btnPasivaNext');
  const btnCheck = document.getElementById('btnPasivaCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function showPasivaHint() {
  const item = PASIVA_EXERCISES[state.pasiva.index];
  showFeedback('pasiva', 'hint', 'Pista', `Recuerda: El CD «${item.cd}» se vuelve el sujeto. Usa «fue / fueron» + participio concordado en género y número.`);
}

// ============================================================================
// 11. MÓDULO 06: PASIVA REFLEJA VS. IMPERSONALIDAD (BGU)
// ============================================================================
function initReflejaModule() {
  document.querySelectorAll('.btn-decision').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-decision').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.refleja.selectedDecision = btn.dataset.decision;

      const probeArea = document.getElementById('reflejaProbeArea');
      if (probeArea) {
        probeArea.style.display = state.refleja.selectedDecision === 'pasiva-refleja' ? 'block' : 'none';
      }
    });
  });

  const btnCheck = document.getElementById('btnReflejaCheck');
  const btnNext = document.getElementById('btnReflejaNext');
  const btnHint = document.getElementById('btnReflejaHint');

  if (btnCheck) btnCheck.addEventListener('click', checkReflejaAnswer);
  if (btnNext) btnNext.addEventListener('click', nextReflejaExercise);
  if (btnHint) btnHint.addEventListener('click', showReflejaHint);

  renderReflejaExercise();
}

function renderReflejaExercise() {
  const item = REFLEJA_EXERCISES[state.refleja.index];
  state.refleja.selectedDecision = null;

  const quote = document.getElementById('reflejaSentenceQuote');
  const progress = document.getElementById('reflejaProgressText');
  const score = document.getElementById('reflejaScoreText');

  if (quote) quote.textContent = `«${item.oracion}»`;
  if (progress) progress.textContent = `Ejercicio ${state.refleja.index + 1} de ${REFLEJA_EXERCISES.length}`;
  const totalCorrect = Object.keys(state.refleja.history).filter(k => state.refleja.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  document.querySelectorAll('.btn-decision').forEach(b => b.classList.remove('active'));
  const probeArea = document.getElementById('reflejaProbeArea');
  if (probeArea) {
    probeArea.style.display = 'none';
    document.getElementById('inputReflejaSubject').value = '';
  }

  hideFeedback('refleja');
  const btnNext = document.getElementById('btnReflejaNext');
  const btnCheck = document.getElementById('btnReflejaCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function checkReflejaAnswer() {
  const item = REFLEJA_EXERCISES[state.refleja.index];
  if (!state.refleja.selectedDecision) {
    showToast('Selecciona si la oración es Pasiva Refleja o Impersonal.', 'warning');
    return;
  }

  let isCorrect = (state.refleja.selectedDecision === item.tipo);

  if (isCorrect && item.tipo === 'pasiva-refleja') {
    const inputSuj = document.getElementById('inputReflejaSubject').value.trim();
    if (inputSuj) {
      const norm = (s) => (s || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.¡!¿?,;:]/g, '').trim();
      if (!norm(item.sujetoPaciente).includes(norm(inputSuj))) {
        // pequeño aviso si no coincide
      }
    }
  }

  state.refleja.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('refleja', 'success', '¡Estructura Clarificada!', item.explicacion);
    const btnNext = document.getElementById('btnReflejaNext');
    const btnCheck = document.getElementById('btnReflejaCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('refleja', 'error', 'Pauta de Revisión', `Respuesta incorrecta. ${item.explicacion}`);
  }
}

function nextReflejaExercise() {
  if (state.refleja.index < REFLEJA_EXERCISES.length - 1) {
    state.refleja.index++;
    renderReflejaExercise();
  } else {
    showToast('¡Has culminado el módulo de Pasiva Refleja!', 'success');
    showFeedback('refleja', 'success', '¡Módulo 06 Concluido!', 'Avanza al Módulo 07 para usar el Bisturí Sintáctico en Oraciones Compuestas.');
  }
}

function showReflejaHint() {
  const item = REFLEJA_EXERCISES[state.refleja.index];
  showFeedback('refleja', 'hint', 'Pista', 'Prueba si hay un sustantivo que obligue al verbo a cambiar de número (Sujeto Paciente = Pasiva Refleja). Si no lo hay, es Impersonal.');
}

// ============================================================================
// 12. MÓDULO 07: BISTURÍ DE ORACIONES COMPUESTAS (BGU)
// ============================================================================
function initCompuestaModule() {
  const btnCheck = document.getElementById('btnCompuestaCheck');
  const btnNext = document.getElementById('btnCompuestaNext');
  const btnReset = document.getElementById('btnCompuestaReset');
  const btnHint = document.getElementById('btnCompuestaHint');

  if (btnCheck) btnCheck.addEventListener('click', checkCompuestaAnswer);
  if (btnNext) btnNext.addEventListener('click', nextCompuestaExercise);
  if (btnReset) btnReset.addEventListener('click', resetCompuestaExercise);
  if (btnHint) btnHint.addEventListener('click', showCompuestaHint);

  document.querySelectorAll('.btn-nexo-type').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-nexo-type').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.compuesta.selectedNexoType = btn.dataset.nexo;
    });
  });

  renderCompuestaExercise();
}

function renderCompuestaExercise() {
  const item = COMPUESTA_EXERCISES[state.compuesta.index];
  state.compuesta.selectedCut = null;
  state.compuesta.selectedNexoType = null;

  const progress = document.getElementById('compuestaProgressText');
  const score = document.getElementById('compuestaScoreText');
  const container = document.getElementById('bisturiSentenceContainer');

  if (progress) progress.textContent = `Ejercicio ${state.compuesta.index + 1} de ${COMPUESTA_EXERCISES.length}`;
  const totalCorrect = Object.keys(state.compuesta.history).filter(k => state.compuesta.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  document.querySelectorAll('.btn-nexo-type').forEach(b => b.classList.remove('active'));
  document.getElementById('prop1Preview').textContent = 'Selecciona el punto de corte arriba...';
  document.getElementById('prop2Preview').textContent = 'Selecciona el punto de corte arriba...';
  document.getElementById('nexoDetectedPreview').textContent = '—';

  if (container) {
    container.innerHTML = '';
    item.tokens.forEach((token, idx) => {
      const wSpan = document.createElement('span');
      wSpan.className = 'bisturi-word';
      wSpan.textContent = token;
      container.appendChild(wSpan);

      if (idx < item.tokens.length - 1) {
        const cutSlot = document.createElement('span');
        cutSlot.className = 'bisturi-cut-slot';
        cutSlot.textContent = '|';
        cutSlot.title = 'Hacer corte aquí';
        cutSlot.dataset.afterToken = token.replace(/[.,;]/g, '');

        cutSlot.addEventListener('click', () => handleBisturiCut(cutSlot, token));
        container.appendChild(cutSlot);
      }
    });
  }

  hideFeedback('compuesta');
  const btnNext = document.getElementById('btnCompuestaNext');
  const btnCheck = document.getElementById('btnCompuestaCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function handleBisturiCut(slotElement, afterToken) {
  document.querySelectorAll('.bisturi-cut-slot').forEach(s => {
    s.classList.remove('cut-active');
    s.textContent = '|';
  });

  slotElement.classList.add('cut-active');
  slotElement.textContent = '//';
  state.compuesta.selectedCut = slotElement.dataset.afterToken;

  const item = COMPUESTA_EXERCISES[state.compuesta.index];
  document.getElementById('prop1Preview').textContent = item.prop1;
  document.getElementById('prop2Preview').textContent = item.prop2;
  document.getElementById('nexoDetectedPreview').textContent = item.nexo.toUpperCase();

  showToast(`Corte establecido. Ahora clasifica el nexo «${item.nexo}».`, 'info');
}

function checkCompuestaAnswer() {
  const item = COMPUESTA_EXERCISES[state.compuesta.index];

  if (!state.compuesta.selectedCut) {
    showToast('Toca entre dos palabras para hacer el corte con el bisturí.', 'warning');
    return;
  }

  if (!state.compuesta.selectedNexoType) {
    showToast('Clasifica la relación lógica del nexo coordinante.', 'warning');
    return;
  }

  const isCutCorrect = state.compuesta.selectedCut.toLowerCase().includes(item.cutAfterToken.toLowerCase());
  const isTypeCorrect = (state.compuesta.selectedNexoType === item.tipoNexo);
  const isCorrect = isCutCorrect && isTypeCorrect;

  state.compuesta.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('compuesta', 'success', '¡Segmentación y Clasificación Impecables!', `Proposición 1: «${item.prop1}» | Nexo: «${item.nexo}» (${item.tipoNexo.toUpperCase()}) | Proposición 2: «${item.prop2}».`);
    const btnNext = document.getElementById('btnCompuestaNext');
    const btnCheck = document.getElementById('btnCompuestaCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('compuesta', 'error', 'Pauta de Revisión', `Revisa la segmentación: ${item.pista}`);
  }
}

function nextCompuestaExercise() {
  if (state.compuesta.index < COMPUESTA_EXERCISES.length - 1) {
    state.compuesta.index++;
    renderCompuestaExercise();
  } else {
    showToast('¡Has culminado las oraciones compuestas coordinadas!', 'success');
    showFeedback('compuesta', 'success', '¡Módulo 07 Concluido!', 'Avanza al Módulo 08 para iniciarte en las Proposiciones Subordinadas.');
  }
}

function resetCompuestaExercise() {
  state.compuesta.selectedCut = null;
  state.compuesta.selectedNexoType = null;
  renderCompuestaExercise();
}

function showCompuestaHint() {
  const item = COMPUESTA_EXERCISES[state.compuesta.index];
  showFeedback('compuesta', 'hint', 'Pista', item.pista);
}

// ============================================================================
// 13. MÓDULO 08: PROPOSICIONES SUBORDINADAS (BGU)
// ============================================================================
function initSubordModule() {
  document.querySelectorAll('.btn-subord-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-subord-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.subord.selectedType = btn.dataset.subord;

      const funcBox = document.getElementById('subordFunctionBox');
      if (funcBox) funcBox.style.display = 'block';
    });
  });

  document.querySelectorAll('.btn-func').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-func').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.subord.selectedFunc = btn.dataset.func;
    });
  });

  const btnCheck = document.getElementById('btnSubordCheck');
  const btnNext = document.getElementById('btnSubordNext');
  const btnHint = document.getElementById('btnSubordHint');

  if (btnCheck) btnCheck.addEventListener('click', checkSubordAnswer);
  if (btnNext) btnNext.addEventListener('click', nextSubordExercise);
  if (btnHint) btnHint.addEventListener('click', showSubordHint);

  renderSubordExercise();
}

function renderSubordExercise() {
  const item = SUBORD_EXERCISES[state.subord.index];
  state.subord.selectedType = null;
  state.subord.selectedFunc = null;

  const quote = document.getElementById('subordSentenceQuote');
  const progress = document.getElementById('subordProgressText');
  const score = document.getElementById('subordScoreText');

  if (quote) quote.textContent = `«${item.oracion}»`;
  if (progress) progress.textContent = `Ejercicio ${state.subord.index + 1} de ${SUBORD_EXERCISES.length}`;
  const totalCorrect = Object.keys(state.subord.history).filter(k => state.subord.history[k]?.correct).length;
  if (score) score.textContent = `Aciertos: ${totalCorrect}`;

  document.querySelectorAll('.btn-subord-opt, .btn-func').forEach(b => b.classList.remove('active'));
  const funcBox = document.getElementById('subordFunctionBox');
  if (funcBox) funcBox.style.display = 'none';

  hideFeedback('subord');
  const btnNext = document.getElementById('btnSubordNext');
  const btnCheck = document.getElementById('btnSubordCheck');
  if (btnNext) btnNext.style.display = 'none';
  if (btnCheck) btnCheck.style.display = 'inline-block';
}

function checkSubordAnswer() {
  const item = SUBORD_EXERCISES[state.subord.index];

  if (!state.subord.selectedType) {
    showToast('Selecciona si la proposición es Sustantiva o Adjetiva.', 'warning');
    return;
  }

  const isTypeCorrect = (state.subord.selectedType === item.tipo);
  const isFuncCorrect = !state.subord.selectedFunc || (state.subord.selectedFunc === item.funcion);
  const isCorrect = isTypeCorrect && isFuncCorrect;

  state.subord.history[item.id] = { correct: isCorrect };
  persistProgress();

  if (isCorrect) {
    showFeedback('subord', 'success', '¡Subordinada Identificada con Éxito!', `Proposición subordinada: «[${item.subordinada}]». ${item.pista}`);
    const btnNext = document.getElementById('btnSubordNext');
    const btnCheck = document.getElementById('btnSubordCheck');
    if (btnNext) btnNext.style.display = 'inline-block';
    if (btnCheck) btnCheck.style.display = 'none';
  } else {
    showFeedback('subord', 'error', 'Pauta de Revisión', `Revisa: ${item.pista}`);
  }
}

function nextSubordExercise() {
  if (state.subord.index < SUBORD_EXERCISES.length - 1) {
    state.subord.index++;
    renderSubordExercise();
  } else {
    showToast('¡Has culminado el módulo de Proposiciones Subordinadas!', 'success');
    showFeedback('subord', 'success', '¡Etapa BGU Completada!', 'Has dominado las estructuras complejas de Bachillerato. Visita el Módulo 09 para consultar tu calificación global.');
  }
}

function showSubordHint() {
  const item = SUBORD_EXERCISES[state.subord.index];
  showFeedback('subord', 'hint', 'Pista', item.pista);
}

// ============================================================================
// 14. MÓDULO 09: ANALIZADOR UNIVERSAL Y CALIFICACIÓN CURRICULAR
// ============================================================================
function initResultsAndAnalyzer() {
  const btnSync = document.getElementById('btnSyncSheets');
  const btnResetAll = document.getElementById('btnResetAllPractice');
  const btnAnalyze = document.getElementById('btnAnalyzeCustom');

  if (btnSync) btnSync.addEventListener('click', sendCurricularToGoogleSheets);
  if (btnResetAll) btnResetAll.addEventListener('click', resetCurrentRoutePractice);
  if (btnAnalyze) btnAnalyze.addEventListener('click', handleCustomUniversalAnalysis);

  document.querySelectorAll('.sample-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = document.getElementById('customSentenceInput');
      if (inp) {
        inp.value = btn.dataset.sample;
        handleCustomUniversalAnalysis();
      }
    });
  });
}

function updateCurriculumScore() {
  const badge = document.getElementById('activeRouteBadge');
  const numEl = document.getElementById('globalScoreNum');
  const subEl = document.getElementById('globalScoreSubtitle');
  const listEl = document.getElementById('learningBreakdownList');

  // Conteo de aciertos EGB (Módulos 2, 3, 4: 6 + 6 + 6 = 18 ejercicios)
  const cSujeto = Object.keys(state.sujeto.history).filter(k => state.sujeto.history[k]?.correct).length;
  const cPredicado = Object.keys(state.predicado.history).filter(k => state.predicado.history[k]?.correct).length;
  const cPronom = Object.keys(state.pronom.history).filter(k => state.pronom.history[k]?.correct).length;
  const totalEgb = cSujeto + cPredicado + cPronom;
  const scoreEgbOver10 = ((totalEgb / 18) * 10).toFixed(1);

  // Conteo de aciertos BGU (Módulos 5, 6, 7, 8: 6 + 6 + 6 + 6 = 24 ejercicios)
  const cPasiva = Object.keys(state.pasiva.history).filter(k => state.pasiva.history[k]?.correct).length;
  const cRefleja = Object.keys(state.refleja.history).filter(k => state.refleja.history[k]?.correct).length;
  const cCompuesta = Object.keys(state.compuesta.history).filter(k => state.compuesta.history[k]?.correct).length;
  const cSubord = Object.keys(state.subord.history).filter(k => state.subord.history[k]?.correct).length;
  const totalBgu = cPasiva + cRefleja + cCompuesta + cSubord;
  const scoreBguOver10 = ((totalBgu / 24) * 10).toFixed(1);

  if (state.route === 'bgu') {
    if (badge) badge.textContent = 'CALIFICACIÓN NIVEL AVANZADO';
    if (numEl) numEl.textContent = scoreBguOver10;
    if (subEl) subEl.textContent = `Has acumulado ${totalBgu} de 24 aciertos en Sintaxis Compleja y Oraciones Compuestas.`;
    if (listEl) {
      listEl.innerHTML = `
        <div class="breakdown-item"><span>Voz Pasiva Perifrástica & Agente:</span><strong>${cPasiva} / 6</strong></div>
        <div class="breakdown-item"><span>Pasiva Refleja vs. Impersonal:</span><strong>${cRefleja} / 6</strong></div>
        <div class="breakdown-item"><span>Bisturí de Compuestas Coordinadas:</span><strong>${cCompuesta} / 6</strong></div>
        <div class="breakdown-item"><span>Proposiciones Subordinadas:</span><strong>${cSubord} / 6</strong></div>
      `;
    }
  } else {
    // EGB
    if (badge) badge.textContent = 'CALIFICACIÓN NIVEL FUNDAMENTAL';
    if (numEl) numEl.textContent = scoreEgbOver10;
    if (subEl) subEl.textContent = `Has acumulado ${totalEgb} de 18 aciertos en Sintaxis de la Oración Simple.`;
    if (listEl) {
      listEl.innerHTML = `
        <div class="breakdown-item"><span>Modificadores del Sujeto (MD/MI/Apos):</span><strong>${cSujeto} / 6</strong></div>
        <div class="breakdown-item"><span>Predicado Completo (NP/CD/CI/CC):</span><strong>${cPredicado} / 6</strong></div>
        <div class="breakdown-item"><span>Pronombres & Regla de SE:</span><strong>${cPronom} / 6</strong></div>
      `;
    }
  }
}

async function sendCurricularToGoogleSheets() {
  const statusMsg = document.getElementById('sheetsStatusMessage');
  const btnSync = document.getElementById('btnSyncSheets');

  if (!state.student || !state.student.nombre) {
    showToast('Identifícate con tu nombre antes de registrar tu nota.', 'warning');
    const modal = document.getElementById('studentModal');
    if (modal) modal.classList.remove('hidden');
    return;
  }

  const isBgu = state.route === 'bgu';
  let totalCorrect = 0;
  let maxTotal = isBgu ? 24 : 18;
  let rutaName = isBgu ? 'Nivel Avanzado (Sintaxis Compleja)' : 'Nivel Fundamental (Oración Simple)';

  if (isBgu) {
    totalCorrect = (
      Object.keys(state.pasiva.history).filter(k => state.pasiva.history[k]?.correct).length +
      Object.keys(state.refleja.history).filter(k => state.refleja.history[k]?.correct).length +
      Object.keys(state.compuesta.history).filter(k => state.compuesta.history[k]?.correct).length +
      Object.keys(state.subord.history).filter(k => state.subord.history[k]?.correct).length
    );
  } else {
    totalCorrect = (
      Object.keys(state.sujeto.history).filter(k => state.sujeto.history[k]?.correct).length +
      Object.keys(state.predicado.history).filter(k => state.predicado.history[k]?.correct).length +
      Object.keys(state.pronom.history).filter(k => state.pronom.history[k]?.correct).length
    );
  }

  const scoreOver10 = parseFloat(((totalCorrect / maxTotal) * 10).toFixed(1));
  const scorePercentage = Math.round((totalCorrect / maxTotal) * 100);

  const payload = {
    nombre: state.student.nombre,
    apellido: state.student.apellido || '',
    curso: state.student.curso || '',
    ruta: rutaName,
    puntuacion: scorePercentage,
    calificacion: scoreOver10,
    correctas: totalCorrect,
    total: maxTotal,
    fecha: new Date().toLocaleString('es-EC')
  };

  if (statusMsg) statusMsg.textContent = 'Enviando resultados a la planilla del docente...';
  if (btnSync) btnSync.disabled = true;

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setTimeout(() => {
      if (statusMsg) {
        statusMsg.textContent = `✓ Calificación de ${state.student.nombre} (${scoreOver10}/10 en ${rutaName}) registrada con éxito.`;
        statusMsg.style.color = 'var(--color-green)';
      }
      if (btnSync) btnSync.disabled = false;
      showToast('¡Calificación enviada a Google Sheets!', 'success');
    }, 1200);
  } catch (err) {
    console.error(err);
    if (statusMsg) {
      statusMsg.textContent = 'Inconveniente de red al sincronizar con Google Sheets.';
      statusMsg.style.color = 'var(--color-red)';
    }
    if (btnSync) btnSync.disabled = false;
  }
}

function resetCurrentRoutePractice() {
  if (!confirm('¿Deseas reiniciar los aciertos de la ruta actual?')) return;
  if (state.route === 'bgu') {
    state.pasiva.history = {};
    state.refleja.history = {};
    state.compuesta.history = {};
    state.subord.history = {};
  } else {
    state.sujeto.history = {};
    state.predicado.history = {};
    state.pronom.history = {};
  }
  persistProgress();
  showToast('Práctica de la ruta reiniciada.', 'info');
}

function handleCustomUniversalAnalysis() {
  const inp = document.getElementById('customSentenceInput');
  const out = document.getElementById('analyzerOutput');
  const title = document.getElementById('analyzerSentenceTitle');
  const stepType = document.getElementById('analysisStepType');
  const stepVerb = document.getElementById('analysisStepVerb');
  const stepSujeto = document.getElementById('analysisStepSujeto');
  const stepComplements = document.getElementById('analysisStepComplements');

  if (!inp) return;
  const sentence = inp.value.trim();
  if (!sentence) {
    showToast('Ingresa una oración para analizar.', 'warning');
    return;
  }

  out.style.display = 'block';
  title.textContent = `«${sentence}»`;

  const lower = sentence.toLowerCase();
  const isPassive = (lower.includes(' fue ') || lower.includes(' fueron ') || lower.includes(' era ') || lower.includes(' ha sido ')) && lower.includes(' por ');
  const isRefleja = lower.startsWith('se ') || lower.includes(' se ');
  const isCompound = lower.includes(', pero ') || lower.includes(' y ') || lower.includes(' o ') || lower.includes(', por tanto ') || lower.includes(', sin embargo ') || lower.includes(' que ');

  // Paso 1: Tipología
  if (isCompound) {
    stepType.innerHTML = '<strong>Oración Compuesta:</strong> Presenta coordinación o subordinación entre proposiciones articuladas por conectores lógicos.';
  } else if (isPassive) {
    stepType.innerHTML = '<strong>Oración Simple en Voz Pasiva Perifrástica:</strong> Estructurada con verbo ser + participio y Complemento Agente con <em>por</em>.';
  } else if (isRefleja) {
    stepType.innerHTML = '<strong>Construcción con «SE»:</strong> Requiere verificar si presenta sujeto paciente (Pasiva Refleja) o carece de él (Impersonal).';
  } else {
    stepType.innerHTML = '<strong>Oración Simple Bimembre en Voz Activa:</strong> Articulada en torno a un único núcleo verbal conjugado que rige los argumentos.';
  }

  // Paso 2: Verbo
  stepVerb.innerHTML = 'Identificación de núcleos predicativos conjugados que anclan la estructura sintáctica de la predicación.';

  // Paso 3: Sujeto y Concordancia
  if (isPassive) {
    stepSujeto.innerHTML = '<strong>Sujeto Paciente:</strong> Recibe el efecto de la acción verbal y concuerda estrictamente con el auxiliar pasivo (fue / fueron).';
  } else {
    stepSujeto.innerHTML = '<strong>Prueba de Concordancia:</strong> El Sujeto es el grupo nominal que cambia obligatoriamente de número al pluralizar o singularizar el verbo conjugado.';
  }

  // Paso 4: Argumentos y Adjuntos
  stepComplements.innerHTML = '<strong>Delimitación de argumentos:</strong> CD (sustituible por lo/la), CI (destinatario con le/les), Complemento Agente (con <em>por</em>) y Adjuntos Circunstanciales (Tiempo, Lugar, Modo).';

  out.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================================
// 15. UTILIDADES COMPARTIDAS (CHIPS, FEEDBACK, TOAST)
// ============================================================================
function createChip(word, index, context) {
  const chip = document.createElement('div');
  chip.className = 'word-chip';
  chip.textContent = word;
  chip.setAttribute('draggable', 'true');
  chip.dataset.word = word;
  chip.dataset.index = index;
  chip.dataset.context = context;

  chip.addEventListener('dragstart', handleDragStart);
  chip.addEventListener('dragend', handleDragEnd);

  chip.addEventListener('click', (e) => {
    e.stopPropagation();
    handleChipTap(chip, context);
  });

  return chip;
}

function handleChipTap(chip, context) {
  const parentZone = chip.closest('.dropzone-content');

  // Si ya está en una dropzone, al hacer clic regresa a su pool
  if (parentZone) {
    const poolId = context === 'sujeto' ? 'sujetoWordsPool' : 'predWordsPool';
    const pool = document.getElementById(poolId);
    if (pool) {
      chip.classList.remove('selected-chip');
      pool.appendChild(chip);
      updateZoneCountAndPlaceholder(parentZone);
      showToast(`«${chip.dataset.word}» devuelta al banco`, 'info');
    }
    return;
  }

  // Si está en el pool, seleccionarla para modo Tap-to-Place
  const allChips = document.querySelectorAll(`[data-context="${context}"].word-chip`);
  allChips.forEach(c => c.classList.remove('selected-chip'));

  if (state[context].selectedChip === chip) {
    state[context].selectedChip = null;
  } else {
    chip.classList.add('selected-chip');
    state[context].selectedChip = chip;
    showToast(`Toca el cajón donde deseas colocar «${chip.dataset.word}»`, 'info');
  }
}

function attachZoneEvents(box, context) {
  const content = box.querySelector('.dropzone-content');
  if (!content) return;

  box.addEventListener('dragover', (e) => {
    e.preventDefault();
    box.classList.add('drag-over');
  });

  box.addEventListener('dragleave', () => {
    box.classList.remove('drag-over');
  });

  box.addEventListener('drop', (e) => {
    e.preventDefault();
    box.classList.remove('drag-over');

    const wordIdx = e.dataTransfer.getData('chip-index');
    const chipCtx = e.dataTransfer.getData('chip-context');
    if (chipCtx !== context) return;

    const chip = document.querySelector(`[data-context="${context}"][data-index="${wordIdx}"]`);
    if (chip) moveChipToZone(chip, content);
  });

  box.addEventListener('click', () => {
    const selected = state[context].selectedChip;
    if (selected) {
      moveChipToZone(selected, content);
      selected.classList.remove('selected-chip');
      state[context].selectedChip = null;
    }
  });
}

function moveChipToZone(chip, content) {
  const placeholder = content.querySelector('.dropzone-placeholder');
  if (placeholder) placeholder.style.display = 'none';

  content.appendChild(chip);
  updateZoneCountAndPlaceholder(content);

  const oldZone = chip.parentElement;
  if (oldZone && oldZone.classList.contains('dropzone-content')) {
    updateZoneCountAndPlaceholder(oldZone);
  }
}

function updateZoneCountAndPlaceholder(zone) {
  const box = zone.closest('.dropzone-box');
  if (!box) return;
  const countEl = box.querySelector('.zone-count');
  const chips = zone.querySelectorAll('.word-chip');
  if (countEl) countEl.textContent = chips.length;

  const placeholder = zone.querySelector('.dropzone-placeholder');
  if (placeholder) {
    placeholder.style.display = chips.length === 0 ? 'block' : 'none';
  }
}

function handleDragStart(e) {
  this.classList.add('dragging');
  e.dataTransfer.setData('text/plain', this.dataset.word);
  e.dataTransfer.setData('chip-index', this.dataset.index);
  e.dataTransfer.setData('chip-context', this.dataset.context);
}

function handleDragEnd() {
  this.classList.remove('dragging');
}

function showFeedback(prefix, type, title, message) {
  const card = document.getElementById(`${prefix}FeedbackCard`);
  const badge = document.getElementById(`${prefix}FeedbackBadge`);
  const titleEl = document.getElementById(`${prefix}FeedbackTitle`);
  const msgEl = document.getElementById(`${prefix}FeedbackMessage`);

  if (!card) return;
  card.style.display = 'block';
  card.className = `feedback-card feedback-${type}`;

  if (badge) {
    badge.textContent = type === 'success' ? '¡CORRECTO!' : (type === 'hint' ? 'PISTA' : 'REVISIÓN');
    badge.className = `feedback-badge badge-${type}`;
  }
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.innerHTML = message;
}

function hideFeedback(prefix) {
  const card = document.getElementById(`${prefix}FeedbackCard`);
  if (card) card.style.display = 'none';
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('appToast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = `app-toast toast-${type} show`;

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}


// ============================================================================
// GESTIÓN DEL MODAL DE GLOSARIO DE TÉRMINOS LINGÜÍSTICOS
// ============================================================================
function initTermGlossary() {
  const overlay = document.getElementById('termModalOverlay');
  const btnClose = document.getElementById('btnCloseTermModal');
  const btnConfirm = document.getElementById('btnConfirmTermModal');

  // Delegación de clics para cualquier botón de búsqueda de términos
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.term-lookup-btn, [data-term]');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const termKey = btn.dataset.term;
      openTermModal(termKey);
    }
  });

  if (btnClose) btnClose.addEventListener('click', closeTermModal);
  if (btnConfirm) btnConfirm.addEventListener('click', closeTermModal);

  // Cerrar al hacer clic fuera de la tarjeta modal
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeTermModal();
    });
  }

  // Cerrar con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && !overlay.classList.contains('hidden')) {
      closeTermModal();
    }
  });
}

function openTermModal(termKey) {
  const data = GLOSSARY_TERMS[termKey];
  if (!data) {
    console.warn(`Término no encontrado en el glosario: ${termKey}`);
    return;
  }

  const overlay = document.getElementById('termModalOverlay');
  const catEl = document.getElementById('termModalCat');
  const titleEl = document.getElementById('termModalName');
  const iconEl = document.getElementById('termModalIcon');
  const defEl = document.getElementById('termModalDef');
  const exampleEl = document.getElementById('termModalExample');
  const tipEl = document.getElementById('termModalTip');

  if (catEl) catEl.textContent = data.category || 'SINTAXIS & GRAMÁTICA';
  if (titleEl) titleEl.textContent = data.name || termKey;
  if (iconEl) iconEl.textContent = data.icon || '📖';
  if (defEl) defEl.innerHTML = data.def || '';
  if (exampleEl) exampleEl.innerHTML = data.example || '';
  if (tipEl) tipEl.innerHTML = data.tip || '';

  if (overlay) {
    overlay.classList.remove('hidden');
    // Enfocar el botón de cerrar para accesibilidad
    const btnClose = document.getElementById('btnCloseTermModal');
    if (btnClose) btnClose.focus();
  }
}

function closeTermModal() {
  const overlay = document.getElementById('termModalOverlay');
  if (overlay) overlay.classList.add('hidden');
}
