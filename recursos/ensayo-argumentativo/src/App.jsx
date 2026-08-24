import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChefHat, Sandwich, UtensilsCrossed, GripVertical } from 'lucide-react';

// ================== IMPORT CONTEXT & COMPONENTS ==================
import { StudentProvider, useStudent } from './context/StudentContext';
import { LoginModal } from './components/LoginModal';
import { ResultsSummary } from './components/ResultsSummary';
import { WordSearch } from './components/WordSearch';
import { MatchingGame } from './components/MatchingGame';
import { QuizSection } from './components/QuizSection';
import { OrderingGame } from './components/OrderingGame';
import { FillBlanks } from './components/FillBlanks';
import { Tooltip } from './components/Tooltip';
import { EssayExample } from './components/EssayExample';

// ================== SECTION BACKGROUND COLORS (Soft Pastels) ==================
const SECTION_COLORS = {
  intro: 'bg-[#E7EEF5]',
  propositos: 'bg-[#FEF7EC]/60',
  argumentativo: 'bg-[#E7EEF5]/50',
  estructura: 'bg-[#E7EEF5]/60',
  planificacion: 'bg-[#FDF0EF]/50',
  tesis: 'bg-[#EAF5EE]/50',
  argumentos: 'bg-[#E7EEF5]/60',
  ejemplo: 'bg-[#E7EEF5]/60',
};

// ================== DATA ==================
const THESIS_EXAMPLES = [
  { id: 1, text: "En los comerciales aparecen más mujeres haciendo tareas del hogar.", type: "hecho" },
  { id: 2, text: "Los comerciales refuerzan estereotipos de género que limitan a las personas.", type: "tesis" },
  { id: 3, text: "Los hombres en películas suelen ser mostrados como héroes fuertes.", type: "hecho" },
  { id: 4, text: "El cine debería mostrar personajes masculinos más diversos emocionalmente.", type: "tesis" },
  { id: 5, text: "En muchos videojuegos los personajes femeninos tienen roles secundarios.", type: "hecho" },
  { id: 6, text: "Los videojuegos perpetúan estereotipos dañinos sobre las mujeres.", type: "tesis" },
];

// ================== HELPER COMPONENTS ==================
function Section({ children, className = '', id, bg }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 ${bg || ''} ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </motion.section>
  );
}

function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-black text-[#071B33] mb-2">{children}</h2>
      {subtitle && <p className="text-lg text-[#727983]">{subtitle}</p>}
    </div>
  );
}

function Card({ children, className = '', accent = 'blue' }) {
  const accents = {
    blue: 'border-t-[#2367D1]',
    orange: 'border-t-[#945B0E]',
    green: 'border-t-[#1E6B38]',
    purple: 'border-t-[#2367D1]',
  };
  return (
    <div className={`bg-white rounded shadow-md border border-[#F3F1EA] p-6 border-t-4 ${accents[accent]} ${className}`}>
      {children}
    </div>
  );
}

function InfoBox({ children, className = '' }) {
  return (
    <div className={`bg-[#E7EEF5] border-2 border-dashed border-[#A9C6EE] rounded p-5 ${className}`}>
      {children}
    </div>
  );
}

// ================== 1. INTRO SECTION ==================
function IntroSection() {
  return (
    <Section id="intro" bg={SECTION_COLORS.intro}>
      <SectionTitle subtitle="Aprende a defender tus ideas con fundamentos.">
        ¿Qué es un Ensayo?
      </SectionTitle>

      <div className="prose prose-slate prose-lg max-w-none mb-8">
        <p>
          Un <strong>ensayo</strong> es un tipo de texto, relativamente breve, que interpreta o explica un tema humanístico, político, social, cultural o deportivo, entre otros.
        </p>
        <p>
          Un ensayo <strong>no es un resumen</strong> ni una simple descripción. Es un texto donde el autor (tú) defiende una <strong className="text-[#945B0E]">opinión personal</strong> sobre un tema polémico, utilizando razones lógicas para convencer al lector.
        </p>
      </div>

      <InfoBox className="mb-8">
        <p className="text-[#071B33] font-bold text-xl text-center">Opinión + Razones = Ensayo</p>
      </InfoBox>

      <p className="text-[#101820] mb-6">
        Un ensayo tiene una <Tooltip term="tesis">tesis</Tooltip>, afirmación o <Tooltip term="hipótesis">hipótesis</Tooltip>, que es la esencia del escrito, alrededor de la cual se entretejen las demás ideas en un tono <Tooltip term="dialógico">dialógico</Tooltip>, para mantener la atención del lector.
      </p>

      <div className="bg-white rounded p-6 shadow-md border border-[#F3F1EA] mb-10">
        <h3 className="text-xl font-bold text-[#071B33] mb-4">Los ensayos pueden tener diferentes propósitos:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Informar', desc: 'Dar datos' },
            { name: 'Exponer', desc: 'Explicar e informar' },
            { name: 'Persuadir', desc: 'Recurrir a la emoción' },
            { name: 'Argumentar', desc: 'Dar razones a favor o en contra' },
            { name: 'Describir', desc: 'Contar cómo es algo' },
            { name: 'Narrar', desc: 'Contar qué ha sucedido' },
          ].map(p => (
            <div key={p.name} className="bg-[#FAF9F5] rounded p-4 text-center">
              <p className="font-bold text-[#071B33]">{p.name}</p>
              <p className="text-sm text-[#727983]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WordSearch />
    </Section>
  );
}

// ================== 2. PURPOSES & MATCHING ==================
function PurposesSection() {
  return (
    <Section id="propositos" bg={SECTION_COLORS.propositos}>
      <SectionTitle subtitle="Cada ensayo cumple un objetivo.">
        Propósitos del Ensayo
      </SectionTitle>

      <div className="prose prose-slate prose-lg max-w-none mb-10">
        <p>
          Dependiendo de tu intención, tu ensayo puede tener diferentes propósitos. Conocerlos te ayudará a definir el tono y el contenido de tu texto.
        </p>
      </div>

      <MatchingGame />
    </Section>
  );
}

// ================== 3. ARGUMENTATIVE ESSAY ==================
function ArgumentativeSection() {
  return (
    <Section id="argumentativo" bg={SECTION_COLORS.argumentativo}>
      <SectionTitle subtitle="El arte de convencer con razones.">
        El Ensayo Argumentativo
      </SectionTitle>

      <div className="prose prose-slate prose-lg max-w-none mb-8">
        <p>
          Un ensayo argumentativo tiene como objetivo <strong>presentar o <Tooltip term="rebatir">rebatir</Tooltip> un punto de vista</strong> con el fin de influir en el lector. A este arte se le llama <Tooltip term="retórica">retórica</Tooltip>.
        </p>
        <p>
          La finalidad del autor es <strong>probar o demostrar una idea (<Tooltip term="tesis">tesis</Tooltip>)</strong>, <Tooltip term="refutar">refutar</Tooltip> la contraria, o bien <Tooltip term="persuadir">persuadir</Tooltip> al lector sobre determinados comportamientos, hechos o ideas.
        </p>
        <p>
          La argumentación no suele darse sola, sino combinada con la <Tooltip term="exposición">exposición</Tooltip>. Mientras la exposición se limita a mostrar, la argumentación intenta <strong>demostrar, convencer o cambiar ideas</strong>.
        </p>
      </div>

      <Card className="mb-10">
        <h3 className="text-xl font-bold text-[#071B33] mb-3">¿Qué es un <Tooltip term="argumento">argumento</Tooltip>?</h3>
        <p className="text-[#101820]">
          Los argumentos son las ideas o razones que usa el autor para confirmar o demostrar su tesis, o rebatir la contraria. También se pueden usar <Tooltip term="contraargumento">contraargumentos</Tooltip> para refutar los argumentos opuestos a tu posición.
        </p>
      </Card>

      <QuizSection />
    </Section>
  );
}

// ================== 4. STRUCTURE ==================
function StructureSection() {
  return (
    <Section id="estructura" bg={SECTION_COLORS.estructura}>
      <SectionTitle subtitle="Todo ensayo sigue un orden lógico.">
        Estructura del Ensayo Argumentativo
      </SectionTitle>

      <p className="text-[#101820] text-lg mb-8">
        El texto argumentativo suele organizar su contenido en tres partes: <strong>introducción</strong>, <strong>desarrollo</strong> y <strong>conclusión</strong>.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card accent="blue">
          <div className="flex items-center gap-3 mb-3">
            <ChefHat className="w-8 h-8 text-[#2367D1]" />
            <h4 className="font-bold text-[#071B33] text-lg">1. Introducción</h4>
          </div>
          <p className="text-[#727983] text-sm">
            Parte de una breve <Tooltip term="exposición">exposición</Tooltip> para captar la atención del lector y despertar una actitud favorable. A la introducción le sigue la <Tooltip term="tesis">tesis</Tooltip>, que es la afirmación que se quiere probar.
          </p>
        </Card>
        <Card accent="orange">
          <div className="flex items-center gap-3 mb-3">
            <Sandwich className="w-8 h-8 text-[#945B0E]" />
            <h4 className="font-bold text-[#071B33] text-lg">2. Desarrollo</h4>
          </div>
          <p className="text-[#727983] text-sm">
            Está compuesto por los elementos que forman el cuerpo argumentativo: los <Tooltip term="argumento">argumentos</Tooltip>. Sirven para apoyar la tesis o refutarla. Se desarrollan mediante exposiciones y réplicas sucesivas.
          </p>
        </Card>
        <Card accent="green">
          <div className="flex items-center gap-3 mb-3">
            <UtensilsCrossed className="w-8 h-8 text-[#1E6B38]" />
            <h4 className="font-bold text-[#071B33] text-lg">3. Conclusión</h4>
          </div>
          <p className="text-[#727983] text-sm">
            Es la parte final del ensayo. Contiene un resumen de lo expuesto y los principales argumentos. Reafirma la <Tooltip term="tesis">tesis</Tooltip> con otras palabras.
          </p>
        </Card>
      </div>

      <OrderingGame />
    </Section>
  );
}

// ================== 5. THESIS ==================
function ThesisSection() {
  return (
    <Section id="tesis" bg={SECTION_COLORS.tesis}>
      <SectionTitle>La Pieza Clave: La Tesis</SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
        <div>
          <h3 className="text-2xl font-bold text-[#101820] mb-4">¿Qué ES una <Tooltip term="tesis">Tesis</Tooltip>?</h3>
          <p className="text-[#727983] mb-6">
            Es una afirmación discutible. Es tu postura ante el tema. No es un hecho que se pueda comprobar fácilmente; es una <strong>opinión que debes defender</strong>.
          </p>
          <ul className="space-y-3">
            {['Es una oración completa.', 'Es una opinión, no un hecho.', 'Debe poder defenderse con argumentos.'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#101820]">
                <Check className="w-5 h-5 text-[#1E6B38] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <Card className="border-l-4 border-l-[#B52A25] !border-t-0">
            <div className="flex items-center gap-2 text-[#B52A25] font-bold mb-2">
              <X className="w-5 h-5" /> Incorrecto (Hecho)
            </div>
            <p className="text-[#727983] italic">"En los comerciales aparecen personas de diferentes géneros."</p>
          </Card>
          <Card className="border-l-4 border-l-[#1E6B38] !border-t-0">
            <div className="flex items-center gap-2 text-[#1E6B38] font-bold mb-2">
              <Check className="w-5 h-5" /> Correcto (Tesis)
            </div>
            <p className="text-[#727983] italic">"Los comerciales refuerzan <Tooltip term="estereotipo">estereotipos</Tooltip> de género que limitan el desarrollo de las personas."</p>
          </Card>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#101820] mb-4">Construyendo la Tesis</h3>
      <p className="text-[#101820] mb-6">Para formular una buena tesis, usa esta fórmula:</p>

      <InfoBox className="mb-8 text-center">
        <p className="text-[#071B33] font-bold text-xl">[TEMA] + [POSTURA] + [POR QUÉ]</p>
      </InfoBox>

      <Card className="mb-10">
        <p className="font-bold text-[#101820] mb-2">Ejemplo sobre <Tooltip term="estereotipo">estereotipos</Tooltip>:</p>
        <p className="text-[#727983] italic text-lg leading-relaxed">
          "La división de roles por género en la publicidad <span className="text-[#2367D1] font-medium">(Tema)</span> es
          perjudicial <span className="text-[#945B0E] font-medium">(Postura)</span> porque limita las aspiraciones de niños y niñas <span className="text-[#1E6B38] font-medium">(Por qué)</span>."
        </p>
      </Card>

      <ThesisGame />
    </Section>
  );
}

// ================== THESIS GAME (with tracking) ==================
function ThesisGame() {
  const { updateScore, getAttemptsLeft, canAttempt, scores } = useStudent();
  const [items, setItems] = useState(THESIS_EXAMPLES);
  const [feedback, setFeedback] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  const attemptsLeft = getAttemptsLeft('thesisGame');
  const currentBestScore = scores.thesisGame.score;

  const handleDragEnd = (event, info, item) => {
    const isLeft = info.offset.x < -80;
    const isRight = info.offset.x > 80;
    if (!isLeft && !isRight) return;

    const selectedType = isLeft ? 'hecho' : 'tesis';
    if (selectedType === item.type) {
      setFeedback('correct');
      setCorrectCount(c => c + 1);
      setTimeout(() => {
        setItems(prev => prev.filter(i => i.id !== item.id));
        setFeedback(null);
      }, 400);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 600);
    }
  };

  // Check completion and update score
  useEffect(() => {
    if (items.length === 0 && !hasCompleted) {
      setHasCompleted(true);
      updateScore('thesisGame', correctCount);
    }
  }, [items, hasCompleted, correctCount, updateScore]);

  const handleReset = () => {
    if (!canAttempt('thesisGame')) return;
    setItems(THESIS_EXAMPLES);
    setCorrectCount(0);
    setHasCompleted(false);
  };

  const currentItem = items[0];

  return (
    <div className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 md:p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#071B33]">🎮 ¿Tesis o Hecho?</h3>
          <p className="text-[#727983] text-sm">Arrastra: izquierda = Hecho, derecha = Tesis</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#727983]">Intentos restantes: <span className="font-bold text-[#2367D1]">{attemptsLeft}</span></p>
          {currentBestScore > 0 && (
            <p className="text-xs text-[#1E6B38]">Mejor: {currentBestScore}/{THESIS_EXAMPLES.length}</p>
          )}
        </div>
      </div>

      <div className="relative w-full min-h-[240px] sm:min-h-[280px] flex items-center justify-center">
        {items.length > 0 && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-[32%] sm:w-[38%] bg-[#FDF0EF] rounded sm:rounded border-2 border-dashed border-[#F1A8A5] flex flex-col items-center justify-center p-2 sm:p-4">
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-[#B52A25] mb-1 sm:mb-2" />
              <span className="text-[#8A1F1B] font-bold text-xs sm:text-base">HECHO</span>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[32%] sm:w-[38%] bg-[#EAF5EE] rounded sm:rounded border-2 border-dashed border-[#A3D9B5] flex flex-col items-center justify-center p-2 sm:p-4">
              <Check className="w-6 h-6 sm:w-8 sm:h-8 text-[#3D7A54] mb-1 sm:mb-2" />
              <span className="text-[#17532B] font-bold text-xs sm:text-base">TESIS</span>
            </div>
          </>
        )}

        {/* Feedback Banner */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`absolute top-2 left-1/2 -translate-x-1/2 z-20 px-6 py-3 rounded-full font-bold text-lg shadow-lg ${feedback === 'correct'
                ? 'bg-[#1E6B38] text-white'
                : 'bg-[#B52A25] text-white'
                }`}
            >
              {feedback === 'correct' ? '✓ ¡Correcto!' : '✗ Incorrecto'}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {items.length > 0 ? (
            <motion.div
              key={currentItem.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(e, info) => handleDragEnd(e, info, currentItem)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                feedback === 'correct' ? { opacity: 0, scale: 0.5, y: -50 } :
                  feedback === 'wrong' ? { x: [0, 15, -15, 0] } :
                    { scale: 1, opacity: 1, y: 0 }
              }
              exit={{ scale: 0.5, opacity: 0 }}
              className="absolute z-10 w-52 sm:w-64 md:w-80 bg-white shadow-2xl rounded sm:rounded p-4 sm:p-6 text-center cursor-grab active:cursor-grabbing border border-[#D7D9D6]"
              style={{ touchAction: 'none' }}
              whileDrag={{ scale: 1.05, rotate: 3 }}
            >
              <GripVertical className="w-4 h-4 sm:w-5 sm:h-5 text-[#D7D9D6] mx-auto mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base font-medium text-[#101820]">{currentItem.text}</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-[#EAF5EE] p-8 rounded border border-[#A3D9B5]"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-[#17532B] mb-3">¡Excelente!</h3>
              <p className="text-[#727983] mb-6">Has clasificado todo correctamente.</p>
              {canAttempt('thesisGame') && (
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#2367D1] text-white rounded font-bold hover:bg-[#123C69]"
                >
                  Intentar de nuevo ({attemptsLeft} intentos)
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {items.length > 0 && (
        <p className="text-center text-sm text-[#727983] mt-4">Quedan {items.length} frases</p>
      )}
    </div>
  );
}

// ================== 6. ARGUMENTS ==================
function ArgumentsSection() {
  const types = [
    { name: 'De hechos y datos', def: 'Usa datos demostrables o estadísticos.', example: 'Un estudio reveló que el 70% de los comerciales muestran a mujeres haciendo tareas domésticas.' },
    { name: 'De causa y consecuencia', def: 'Establece una relación causa-efecto.', example: 'Si seguimos repitiendo estereotipos en los medios, las nuevas generaciones los normalizarán.' },
    { name: 'De autoridad', def: 'Cita a un experto o institución reconocida.', example: 'Según la UNESCO, los estereotipos de género limitan las oportunidades educativas.' },
    { name: 'De beneficio', def: 'Apela a los valores o el bien común.', example: 'Eliminar los estereotipos nos beneficia a todos porque permite una sociedad más justa.' },
    { name: 'De ejemplo', def: 'Ofrece casos concretos.', example: 'La campaña "Like a Girl" demostró que se puede hacer publicidad sin estereotipos.' },
    { name: 'De comparación', def: 'Contrasta dos realidades.', example: 'Mientras en algunos países la publicidad es regulada, en otros se permiten mensajes sexistas.' },
  ];

  return (
    <Section id="argumentos" bg={SECTION_COLORS.argumentos}>
      <SectionTitle subtitle="Las razones que sostienen tu tesis.">
        Tipos de Argumentos
      </SectionTitle>

      <div className="prose prose-slate prose-lg max-w-none mb-8">
        <p>
          Si la <Tooltip term="tesis">Tesis</Tooltip> es el "Qué", los <Tooltip term="argumento">Argumentos</Tooltip> son el <strong className="text-[#945B0E]">"Por Qué"</strong>. Son las pruebas, razones o ejemplos que usas para convencer al lector de que tu Tesis es verdadera.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {types.map((t, i) => (
          <Card key={i} className="!border-t-2">
            <h4 className="font-bold text-[#071B33] mb-1">{t.name}</h4>
            <p className="text-sm text-[#727983] mb-3">{t.def}</p>
            <div className="bg-[#FAF9F5] p-3 rounded text-sm text-[#101820] italic">
              <strong>Ej:</strong> {t.example}
            </div>
          </Card>
        ))}
      </div>

      <FillBlanks />
    </Section>
  );
}

// ================== 7. PLANNING ==================
function PlanningSection() {
  return (
    <Section id="planificacion" bg={SECTION_COLORS.planificacion}>
      <SectionTitle subtitle="Antes de escribir, responde estas preguntas.">
        Planificación del Ensayo
      </SectionTitle>

      <p className="text-[#101820] text-lg mb-8">
        El proceso de producción de un texto escrito inicia con el momento de "planificación". En este momento respondemos a cuatro preguntas clave:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card accent="blue">
          <h4 className="font-bold text-[#071B33] text-lg mb-2">¿Qué se va a escribir?</h4>
          <p className="text-[#727983]"><Tooltip term="argumento">Argumentos</Tooltip> y <Tooltip term="contraargumento">contraargumentos</Tooltip> que prueben y demuestren una idea (<Tooltip term="tesis">tesis</Tooltip>) o refuten la contraria.</p>
        </Card>
        <Card accent="orange">
          <h4 className="font-bold text-[#071B33] text-lg mb-2">¿Para qué?</h4>
          <p className="text-[#727983]">Influir en tus compañeros a favor o en contra de una idea u opinión.</p>
        </Card>
        <Card accent="purple">
          <h4 className="font-bold text-[#071B33] text-lg mb-2">¿En qué tipo de texto?</h4>
          <p className="text-[#727983]">Un ensayo argumentativo que pruebe o demuestre una idea (tesis) y refute la contraria, para <Tooltip term="persuadir">persuadir</Tooltip> sobre determinados hechos, ideas o comportamientos.</p>
        </Card>
        <Card accent="green">
          <h4 className="font-bold text-[#071B33] text-lg mb-2">¿Para quién?</h4>
          <p className="text-[#727983]">Este texto está dirigido a todos los estudiantes del colegio y a otros lectores de la comunidad escolar.</p>
        </Card>
      </div>
    </Section>
  );
}

// ================== ESSAY EXAMPLE SECTION ==================
function EssayExampleSection() {
  return (
    <Section id="ejemplo" bg={SECTION_COLORS.ejemplo}>
      <SectionTitle subtitle="Analiza un ensayo real paso a paso">
        📖 Ejemplo Práctico
      </SectionTitle>
      <EssayExample />
    </Section>
  );
}

// ================== NAVIGATION ==================
function Navigation() {
  const { student } = useStudent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: '¿Qué es?', href: '#intro' },
    { label: 'Estructura', href: '#estructura' },
    { label: 'La Tesis', href: '#tesis' },
    { label: 'Argumentos', href: '#argumentos' },
    { label: 'Ejemplo', href: '#ejemplo' },
    { label: 'Planificación', href: '#planificacion' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D7D9D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <span className="font-black text-lg sm:text-xl text-[#071B33]">✍️ El Ensayo</span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium text-[#727983]">
            {links.map(link => (
              <a key={link.href} href={link.href} className="hover:text-[#2367D1] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          {student && (
            <div className="text-right border-l border-[#D7D9D6] pl-4">
              <p className="text-sm font-medium text-[#101820]">{student.name} {student.lastName}</p>
              <p className="text-xs text-[#727983]">{student.course}</p>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded bg-[#F3F1EA] text-[#727983]"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#F3F1EA] overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 rounded text-[#101820] hover:bg-[#E7EEF5] hover:text-[#2367D1] font-medium"
                >
                  {link.label}
                </a>
              ))}
              {student && (
                <div className="pt-2 mt-2 border-t border-[#F3F1EA] text-center">
                  <p className="text-sm font-medium text-[#101820]">{student.name} {student.lastName}</p>
                  <p className="text-xs text-[#727983]">{student.course}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ================== MAIN CONTENT ==================
function MainContent() {
  const { student } = useStudent();

  if (!student) {
    return <LoginModal />;
  }

  return (
    <div className="pt-14 sm:pt-16 overflow-x-hidden bg-[#FAF9F5]">
      <Navigation />
      <IntroSection />
      <PurposesSection />
      <ArgumentativeSection />
      <StructureSection />
      <ThesisSection />
      <ArgumentsSection />
      <EssayExampleSection />
      <PlanningSection />
      <ResultsSummary />
      <footer className="py-10 text-center text-[#727983] text-sm bg-white border-t border-[#D7D9D6]">
        <p>Creado por Msc. Alejandro Córdova • 2026</p>
      </footer>
    </div>
  );
}

// ================== APP WRAPPER ==================
function App() {
  return (
    <StudentProvider>
      <MainContent />
    </StudentProvider>
  );
}

export default App;
