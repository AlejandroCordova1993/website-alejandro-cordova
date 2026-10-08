/* Diglosia · recurso por niveles
   Datos comunes: glosario y fuentes. Cada nivel se agrega desde nivel1.js, nivel2.js y nivel3.js.
   Las palabras entre [[ ]] abren el glosario. */
window.DG = (() => {
  const glossary = {
    diglosia: ['Diglosia', 'Situación en la que, en un mismo territorio, conviven dos o más lenguas y una de ellas tiene privilegios sociales, políticos y económicos que las otras no tienen.', 'En una ciudad, la escuela, la oficina y el juzgado funcionan solo en castellano, mientras el kichwa queda para la casa y el mercado.'],
    bilingüismo: ['Bilingüismo', 'Capacidad de una persona o de una comunidad para usar dos lenguas.', 'Ana habla kichwa con su abuela y castellano con sus amigas: Ana es bilingüe.'],
    prestigio: ['Prestigio', 'Valor social que una comunidad da a una lengua. No depende de la lengua, sino de quién la habla y qué poder tiene.', 'Que el castellano se use en los juzgados le da prestigio; no lo hace más rico ni más correcto que el kichwa.'],
    kichwa: ['Kichwa (quichua)', 'Lengua originaria hablada en la Sierra y la Amazonía del Ecuador. Tu libro la escribe «quichua»; hoy la forma oficial es «kichwa».', 'Palabras como «guagua», «minga» o «achachay» llegaron al español del Ecuador desde el kichwa.'],
    'lengua materna': ['Lengua materna', 'Primera lengua que una persona aprende en su familia, desde la infancia.', 'Para muchos niños de Cayambe en la década de 1940, la lengua materna era el kichwa, pero la escuela solo enseñaba en castellano.'],
    eurocentrismo: ['Eurocentrismo', 'Forma de mirar el mundo que toma a Europa como modelo y juzga a las demás culturas como inferiores.', 'Llamar «bárbaras» a las lenguas americanas porque no se parecían a las europeas es una mirada eurocentrista.'],
    mita: ['Mita', 'Sistema colonial de trabajo forzado: los pueblos indígenas debían enviar trabajadores por turnos a minas, obrajes y haciendas.', 'Un mitayo podía pasar meses lejos de su comunidad, trabajando bajo castigos y sin paga justa.'],
    mitayo: ['Mitayo', 'Indígena obligado a trabajar en la mita.', 'La voz del poema de Dávila Andrade es la de un mitayo que recuerda los azotes.'],
    elegía: ['Elegía', 'Poema que lamenta una pérdida o una desgracia.', 'Boletín y elegía de las mitas lamenta el sufrimiento de los pueblos indígenas durante la Colonia.'],
    marginación: ['Marginación', 'Dejar a una persona o a un grupo fuera de los derechos, las decisiones y las oportunidades que tienen los demás.', 'Si un trámite de salud solo se explica en castellano, quien no lo domina queda al margen de ese servicio.'],
    discriminación: ['Discriminación', 'Trato desigual y perjudicial hacia una persona por lo que es: su origen, su lengua, su acento o su cultura.', 'Negar un trabajo a alguien porque «habla con acento» es discriminación lingüística.'],
    identidad: ['Identidad', 'Conjunto de rasgos (lengua, costumbres, historia, memoria) con los que una persona o un pueblo se reconoce.', 'Para muchas familias, el nombre en kichwa de sus hijos es parte de su identidad.'],
    'derechos colectivos': ['Derechos colectivos', 'Derechos que se reconocen a un grupo o a un pueblo, no solo a cada persona por separado.', 'El derecho de un pueblo a educar a sus hijos en su propia lengua es un derecho colectivo.'],
    pluricultural: ['Pluricultural', 'Que reúne muchas culturas en un mismo territorio.', 'Ecuador es pluricultural: conviven pueblos y nacionalidades con historias y costumbres propias.'],
    multiétnico: ['Multiétnico', 'Que reúne varias etnias o pueblos.', 'En el Ecuador conviven pueblos kichwa, shuar, afroecuatorianos, montubios, mestizos y muchos más.'],
    interculturalidad: ['Interculturalidad', 'Relación entre culturas basada en el respeto, el diálogo y la igualdad, en la que todas aprenden unas de otras.', 'Una clase en la que una abuela enseña geometría con un tejido y los estudiantes la registran en una tableta es intercultural.'],
    eib: ['Educación intercultural bilingüe', 'Sistema educativo que enseña en la lengua materna de un pueblo y en castellano, con los saberes, la cultura y la participación de ese pueblo.', 'Una escuela que enseña matemática en kichwa, con docentes de la comunidad y libros hechos con los sabios del pueblo.'],
    quichuismo: ['Quichuismo', 'Palabra o expresión del español que proviene del quichua (kichwa).', '«Guagua», «ñaño», «chuchaqui» o «minga» son quichuismos del español del Ecuador.'],
    oralidad: ['Oralidad', 'Forma de transmitir saberes, historias y normas de voz en voz, sin escritura.', 'Los mayores de un pueblo contaban a los jóvenes el origen de su comunidad.'],
    códice: ['Códice', 'Libro pintado de los pueblos de Mesoamérica, hecho con imágenes y signos, que guardaba historia, religión y calendario.', 'Los mexicas llamaban a los códices «libros de pintura».'],
    glifo: ['Glifo', 'Signo de escritura tallado o pintado, como los que usaban los mayas.', 'Hay inscripciones mayas con glifos de hace más de dos mil años.'],
    quipu: ['Quipu', 'Conjunto de cordones de colores con nudos que usaban los incas para registrar cantidades y datos.', 'Con un quipu se podía llevar la cuenta de lo que producía cada comunidad.'],
    náhuatl: ['Náhuatl', 'Lengua de los mexicas (aztecas). Se considera una lengua clásica por su riqueza; todavía la hablan más de un millón de personas en México.', 'Palabras como «chocolate» o «tomate» llegaron al español desde el náhuatl.'],
    mestizaje: ['Mestizaje', 'Mezcla de pueblos y culturas que se produjo en América a partir de la conquista.', 'El español del Ecuador, con sus quichuismos, es también fruto del mestizaje.'],
    requerimiento: ['Requerimiento', 'Documento de 1513 que los conquistadores leían en castellano a los pueblos de América, exigiéndoles obediencia al rey y a la Iglesia bajo amenaza de guerra.', 'Se leía a personas que no entendían el castellano, a veces de lejos o sin intérprete.'],
    plurinacional: ['Plurinacional', 'Que reconoce la existencia de varias nacionalidades dentro de un mismo Estado.', 'La Constitución de 2008 define al Ecuador como un Estado plurinacional.'],
    revitalización: ['Revitalización', 'Conjunto de acciones para que una lengua en peligro vuelva a usarse y a transmitirse.', 'Un programa de radio en shuar chicham ayuda a revitalizar la lengua.'],
    lingüística: ['Lingüística', 'Estudio científico del lenguaje y de las lenguas.', 'La lingüística muestra que ninguna lengua es inferior a otra.'],
    casta: ['Casta', 'En la Colonia, cada uno de los grupos en que se clasificaba a las personas según su origen, dentro de una jerarquía.', 'El sistema de castas usaba nombres como «mestizo», «castizo» o «mulato».'],
    feudal: ['Feudal', 'Propio del sistema medieval en que un señor poseía la tierra y quienes vivían en ella le debían tributo y obediencia.', 'En la Sierra, «patrón» evoca al dueño de la hacienda, casi un señor feudal.'],
    estigma: ['Estigma', 'Marca o señal que hace que una persona o un grupo sea despreciado.', 'Tener un apellido indígena fue durante mucho tiempo un estigma injusto.'],
    maniquea: ['Maniqueo, maniquea', 'Que divide la realidad en dos extremos: lo bueno y lo malo, sin matices.', 'Pensar que lo blanco es bueno y lo negro es malo es una visión maniquea.'],
    connotación: ['Connotación', 'Valoración o sentido añadido que una palabra lleva además de su significado básico (denotación).', '«Negro» denota un color, pero en «mercado negro» connota algo ilegal.'],
    resignificar: ['Resignificar', 'Dar a una palabra o a un símbolo un sentido nuevo, distinto del que tenía.', 'Antonio Preciado resignifica «merienda de negros» como una invitación.'],
    prejuicio: ['Prejuicio', 'Opinión, casi siempre negativa, que se forma sin conocer bien a las personas o los hechos.', 'Creer que alguien sabe menos por su acento es un prejuicio.']
  };

  const sources = [
    ['Asamblea Nacional · Constitución del Ecuador (2008)', 'https://www.asambleanacional.gob.ec/es/contenido/constitucion_de_la_republica_del_ecuador_reformada', 'Artículos 1 (Estado intercultural y plurinacional), 2 (idiomas) y 57.14 (educación intercultural bilingüe).'],
    ['SEIBE · Modelo del Sistema de Educación Intercultural Bilingüe', 'https://educacionbilingue.gob.ec/?page_id=10060', 'Principios del MOSEIB: lengua de la nacionalidad, participación de las comunidades y pertinencia cultural.'],
    ['Ruth Moya (1998) · Reformas educativas e interculturalidad en América Latina', 'https://rieoei.org/RIE/article/download/1105/2225?inline=1', 'Historia de la educación intercultural bilingüe y creación de la DINEIB en 1988.'],
    ['UNESCO (2003) · Vitalidad y peligro de desaparición de las lenguas', 'https://unesdoc.unesco.org/ark:/48223/pf0000183699', 'Factores que ayudan a valorar la vida de una lengua: transmisión, ámbitos, actitudes.'],
    ['Libro de texto · Lengua y cultura: «Causas y consecuencias de la diglosia entre las lenguas nativas de América y el castellano»', '', 'Base del nivel 1.'],
    ['Libro de texto · Lengua y cultura: «Consecuencias de la diglosia»', '', 'Base de los niveles 2 y 3: poema de Dávila Andrade, lectura sobre Cacuango y Amaguaña (adaptación de A. Lemos, 2020), carga histórica de las palabras.'],
    ['Félix Rodríguez González (2003) · «Lenguaje y discriminación racial. En torno a la negritud»', 'https://pendientedemigracion.ucm.es/info/especulo/numero24/racismo.html', 'Revista Espéculo. Ensayo trabajado en el nivel 3.']
  ];

  const meta = {
    key: 'diglosia-niveles-v1',
    title: 'Diglosia',
    subtitle: 'Lenguas, poder y palabras',
    intro: 'Un recorrido en tres niveles: por qué se impuso una lengua, qué dejó esa imposición y cómo vive hasta hoy en nuestras palabras. Cada nivel continúa el anterior.'
  };

  // Espacios para imágenes: cada nivel agrega aquí sus espacios con [texto alternativo, pie de imagen].
  // El archivo se busca en images/ con el mismo nombre, en .webp, .png o .jpg.
  return { meta, glossary, sources, images: {}, levels: [] };
})();
