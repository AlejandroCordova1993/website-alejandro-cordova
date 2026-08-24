import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Target, MessageSquare, Scale, CheckCircle } from 'lucide-react';

// Essay content data
const ESSAY_DATA = {
    intro: {
        title: "INTRODUCCIÓN",
        icon: "📘",
        color: "blue",
        text: "El deporte es una herramienta fundamental para el desarrollo humano, pero lamentablemente sigue lleno de prejuicios. La sociedad a menudo decide qué deportes son \"apropiados\" para hombres y cuáles para mujeres. Esta división por género es absurda y debe desaparecer para que el talento sea lo único que importe.",
        thesis: "\"Esta división por género es absurda y debe desaparecer para que el talento sea lo único que importe.\"",
        analysis: {
            title: "¿Por qué es INTRODUCCIÓN?",
            points: [
                { label: "Presenta el TEMA GENERAL:", text: "El párrafo inicia hablando del deporte como un concepto amplio." },
                { label: "Identifica el PROBLEMA:", text: "Señala que existen prejuicios de género en el deporte." },
                { label: "Contextualiza la situación:", text: "Explica cómo la sociedad asigna deportes según el género." },
                { label: "Expresa la POSICIÓN DEL AUTOR:", text: "Es claro que el autor está EN CONTRA de esta división." },
            ],
            thesisExplanation: [
                "Es la idea principal que todo el ensayo defenderá.",
                "Es una posición clara: no está pidiendo que pienses, está diciendo lo que cree.",
                "Todos los argumentos que vienen después buscan convencerte de que esta idea es verdadera.",
            ]
        }
    },
    arguments: [
        {
            id: 1,
            title: "Hechos y Cifras",
            icon: "📊",
            text: "Un análisis reciente de canales deportivos mostró que el 90% del tiempo de transmisión en horario estelar se dedica a deportes masculinos, dejando solo un 10% para las competencias femeninas. Esta desproporción nos hace creer que el deporte femenino es menos valioso.",
            type: "Datos Estadísticos",
            analysis: {
                points: [
                    { label: "Presenta un argumento específico:", text: "No habla de deporte en general, sino de cómo los medios cubren el deporte." },
                    { label: "Ofrece EVIDENCIA:", text: "Da números concretos (90% vs 10%) para demostrar que existe un problema real." },
                    { label: "Apoya la TESIS:", text: "Demuestra que la división de género es real y provoca desigualdad." },
                ],
                why: "Usa datos estadísticos reales (90% y 10%). Es poderoso porque no es una opinión, es un hecho verificable.",
                support: "Si la tesis dice \"la división de género debe desaparecer\", este argumento muestra: \"Aquí está la prueba de que esa división existe.\""
            }
        },
        {
            id: 2,
            title: "Causa y Consecuencia",
            icon: "🔗",
            text: "Debido a que las niñas ven pocos referentes femeninos exitosos en la televisión, muchas abandonan la actividad física en la adolescencia al sentir que \"no es un lugar para ellas\". Es un círculo vicioso que limita su potencial.",
            type: "Causa-Efecto",
            analysis: {
                points: [
                    { label: "Continúa con argumento diferente:", text: "Ya vimos que existe desigualdad en los medios, ahora vemos QUÉ PASA como consecuencia." },
                    { label: "Establece relación CAUSA → EFECTO:", text: "La falta de visibilidad (causa) hace que las niñas abandonen el deporte (efecto)." },
                    { label: "Profundiza el problema:", text: "No solo es injusto en los medios, sino que tiene efectos negativos reales." },
                ],
                why: "Explica por qué sucede algo (causa: falta de referentes) y qué resultado tiene (efecto: abandono). Muestra que el problema tiene impactos reales.",
                support: "\"Si no eliminamos esta división, las niñas perderán oportunidades. Eso es injusto y hay que cambiar.\""
            }
        },
        {
            id: 3,
            title: "Autoridad",
            icon: "🎓",
            text: "Expertos en medicina deportiva de la Universidad de Stanford han demostrado que, con el entrenamiento adecuado, la capacidad de resistencia mental en mujeres y hombres es idéntica. No hay cerebros \"rosas\" o \"azules\" para competir.",
            type: "Argumento de Autoridad",
            analysis: {
                points: [
                    { label: "Refuta un prejuicio común:", text: "Algunos podrían pensar \"bueno, pero las mujeres y hombres somos biológicamente diferentes.\"" },
                    { label: "Usa AUTORIDAD científica:", text: "No es el autor quien lo dice, sino expertos reconocidos de una universidad prestigiosa." },
                    { label: "Desactiva el argumento opuesto:", text: "Demuestra que aunque existan diferencias físicas, mentalmente somos iguales." },
                ],
                why: "Recurre a expertos reconocidos (Universidad de Stanford). Es poderoso porque no es solo una opinión, viene de personas que estudiaron esto profesionalmente.",
                support: "\"No es científicamente cierto que hombres y mujeres sean diferentes mentalmente en el deporte. La división es SOCIAL, no biológica.\""
            }
        },
        {
            id: 4,
            title: "Comparación",
            icon: "⚖️",
            text: "Mientras que a un futbolista hombre se le aplaude por ser agresivo y fuerte en la cancha, a una mujer con la misma actitud competitiva se la critica frecuentemente por ser \"poco femenina\" o tosca.",
            type: "Contraste",
            analysis: {
                points: [
                    { label: "Compara dos situaciones idénticas:", text: "Un futbolista hombre y una futbolista mujer hacen LO MISMO (ser agresivo y fuerte)." },
                    { label: "Muestra el doble estándar:", text: "Pero reciben TRATAMIENTO DIFERENTE según su género." },
                    { label: "Demuestra discriminación SOCIAL:", text: "No es una diferencia biológica, es cómo la sociedad juzga diferente." },
                ],
                why: "Pone dos cosas lado a lado para mostrar que son idénticas en lo importante, pero se tratan diferente. Es fácil de entender: si dos personas hacen lo mismo pero se critican diferente, eso es injusto.",
                support: "\"La desigualdad no viene de diferencias reales, sino de normas sociales injustas. Eso es ABSURDO.\""
            }
        }
    ],
    conclusion: {
        title: "CONCLUSIÓN",
        icon: "📙",
        color: "green",
        text: "Finalmente, debemos apelar a lo justo. La igualdad de oportunidades es un valor esencial de la democracia; impedir que alguien practique ballet o rugby solo por su género es negar su derecho a la libertad. Romper estas barreras nos hará una sociedad más sana.",
        type: "Valores",
        analysis: {
            points: [
                { label: "Sintetiza lo discutido:", text: "Dice \"Finalmente\", señalando que estamos cerrando." },
                { label: "No introduce argumentos nuevos:", text: "No trae nuevas pruebas, sino que usa todo lo dicho antes." },
                { label: "Refuerza la TESIS original:", text: "Vuelve a la idea central de que la división de género debe desaparecer." },
                { label: "Apela a valores universales:", text: "Habla de justicia, democracia, libertad y bienestar social." },
            ],
            why: "Apela a conceptos que la mayoría acepta: justicia, democracia, libertad. Transforma el debate de \"hechos\" a \"moral\": \"Esto es lo JUSTO.\"",
            support: "\"Ahora que hemos visto todas las pruebas, debemos aceptar esta verdad porque es JUSTA y porque la democracia la exige.\""
        }
    }
};

// Accordion component
function Accordion({ title, icon, color, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const colorClasses = {
        blue: {
            border: 'border-l-[#2367D1]',
            bg: 'bg-[#E7EEF5]',
            text: 'text-[#123C69]',
            iconBg: 'bg-[#E7EEF5]',
        },
        yellow: {
            border: 'border-l-[#945B0E]',
            bg: 'bg-[#FEF7EC]',
            text: 'text-[#7A4A0B]',
            iconBg: 'bg-[#FEF7EC]',
        },
        green: {
            border: 'border-l-[#1E6B38]',
            bg: 'bg-[#EAF5EE]',
            text: 'text-[#17532B]',
            iconBg: 'bg-[#EAF5EE]',
        },
    };

    const colors = colorClasses[color] || colorClasses.blue;

    return (
        <div className={`bg-white rounded shadow-md border-l-4 ${colors.border} overflow-hidden mb-4`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:${colors.bg} transition-colors`}
            >
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <span className={`font-bold text-base sm:text-lg ${colors.text}`}>{title}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-[#727983]" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 sm:px-6 pb-6">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Analysis Box component
function AnalysisBox({ title, points, color = "blue" }) {
    const bgColors = {
        blue: 'bg-[#E7EEF5] border-[#A9C6EE]',
        yellow: 'bg-[#FEF7EC] border-[#F5D399]',
        green: 'bg-[#EAF5EE] border-[#A3D9B5]',
    };

    return (
        <div className={`${bgColors[color]} border rounded p-4 mt-4`}>
            <h4 className="font-bold text-[#101820] mb-3 text-sm sm:text-base">{title}</h4>
            <ul className="space-y-2">
                {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#1E6B38] mt-0.5 flex-shrink-0" />
                        <span>
                            <strong className="text-[#101820]">{point.label}</strong>{' '}
                            <span className="text-[#727983]">{point.text}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Argument Type Badge
function ArgumentBadge({ type, color = "yellow" }) {
    const bgColors = {
        blue: 'bg-[#2367D1]',
        yellow: 'bg-[#945B0E]',
        green: 'bg-[#1E6B38]',
    };

    return (
        <span className={`inline-block ${bgColors[color]} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mt-3`}>
            {type}
        </span>
    );
}

// Main Essay Example Component
export function EssayExample() {
    const [showAnalysis, setShowAnalysis] = useState(false);

    // Complete essay text for reading
    const fullEssayText = {
        intro: "El deporte es una herramienta fundamental para el desarrollo humano, pero lamentablemente sigue lleno de prejuicios. La sociedad a menudo decide qué deportes son \"apropiados\" para hombres y cuáles para mujeres. Esta división por género es absurda y debe desaparecer para que el talento sea lo único que importe.",
        arg1: "En primer lugar, veamos la realidad de los medios. Un análisis reciente de canales deportivos mostró que el 90% del tiempo de transmisión en horario estelar se dedica a deportes masculinos, dejando solo un 10% para las competencias femeninas. Esta desproporción nos hace creer que el deporte femenino es menos valioso.",
        arg2: "Esta falta de visibilidad tiene efectos directos. Debido a que las niñas ven pocos referentes femeninos exitosos en la televisión, muchas abandonan la actividad física en la adolescencia al sentir que \"no es un lugar para ellas\". Es un círculo vicioso que limita su potencial.",
        arg3: "Sin embargo, la biología no es una excusa. Expertos en medicina deportiva de la Universidad de Stanford han demostrado que, con el entrenamiento adecuado, la capacidad de resistencia mental en mujeres y hombres es idéntica. No hay cerebros \"rosas\" o \"azules\" para competir.",
        arg4: "Si comparamos el trato social, la diferencia es clara. Mientras que a un futbolista hombre se le aplaude por ser agresivo y fuerte en la cancha, a una mujer con la misma actitud competitiva se la critica frecuentemente por ser \"poco femenina\" o tosca.",
        conclusion: "Finalmente, debemos apelar a lo justo. La igualdad de oportunidades es un valor esencial de la democracia; impedir que alguien practique ballet o rugby solo por su género es negar su derecho a la libertad. Romper estas barreras nos hará una sociedad más sana."
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#E7EEF5] text-[#123C69] px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <BookOpen className="w-4 h-4" />
                    Ejemplo Práctico
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#071B33] mb-2">
                    "La Cancha no Tiene Género"
                </h3>
                <p className="text-[#727983]">
                    {showAnalysis ? "Haz clic en cada sección para ver el análisis" : "Lee primero el ensayo completo"}
                </p>
            </div>

            {/* Toggle between Reading and Analysis */}
            <div className="flex justify-center mb-6">
                <div className="inline-flex bg-[#F3F1EA] rounded-full p-1">
                    <button
                        onClick={() => setShowAnalysis(false)}
                        className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${!showAnalysis
                            ? 'bg-white text-[#123C69] shadow-sm'
                            : 'text-[#727983] hover:text-[#101820]'
                            }`}
                    >
                        📖 Lectura
                    </button>
                    <button
                        onClick={() => setShowAnalysis(true)}
                        className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${showAnalysis
                            ? 'bg-white text-[#123C69] shadow-sm'
                            : 'text-[#727983] hover:text-[#101820]'
                            }`}
                    >
                        🔍 Análisis
                    </button>
                </div>
            </div>

            {/* READING MODE - Complete Essay */}
            {!showAnalysis && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 sm:p-8"
                >
                    <div className="prose prose-slate max-w-none">
                        {/* Title */}
                        <h4 className="text-xl sm:text-2xl font-bold text-center text-[#071B33] mb-6 pb-4 border-b border-[#D7D9D6]">
                            La Cancha no Tiene Género
                        </h4>

                        {/* Introduction */}
                        <div className="mb-6">
                            <span className="inline-block bg-[#E7EEF5] text-[#123C69] text-xs font-bold px-2 py-1 rounded mb-2">
                                INTRODUCCIÓN
                            </span>
                            <p className="text-[#101820] leading-relaxed">
                                {fullEssayText.intro}
                            </p>
                        </div>

                        {/* Development */}
                        <div className="mb-6">
                            <span className="inline-block bg-[#FEF7EC] text-[#7A4A0B] text-xs font-bold px-2 py-1 rounded mb-2">
                                DESARROLLO
                            </span>
                            <p className="text-[#101820] leading-relaxed mb-4">
                                {fullEssayText.arg1}
                            </p>
                            <p className="text-[#101820] leading-relaxed mb-4">
                                {fullEssayText.arg2}
                            </p>
                            <p className="text-[#101820] leading-relaxed mb-4">
                                {fullEssayText.arg3}
                            </p>
                            <p className="text-[#101820] leading-relaxed">
                                {fullEssayText.arg4}
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="mb-6">
                            <span className="inline-block bg-[#EAF5EE] text-[#17532B] text-xs font-bold px-2 py-1 rounded mb-2">
                                CONCLUSIÓN
                            </span>
                            <p className="text-[#101820] leading-relaxed">
                                {fullEssayText.conclusion}
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 pt-6 border-t border-[#D7D9D6] text-center">
                        <p className="text-[#727983] mb-4">¿Ya lo leíste? Ahora analicemos cada parte.</p>
                        <button
                            onClick={() => setShowAnalysis(true)}
                            className="px-6 py-3 bg-[#2367D1] text-white rounded font-bold hover:bg-[#123C69] transition-colors shadow-lg"
                        >
                            🔍 Ver Análisis Detallado
                        </button>
                    </div>
                </motion.div>
            )}

            {/* ANALYSIS MODE - Accordions */}
            {showAnalysis && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >

                    {/* Introduction */}
                    <Accordion
                        title={ESSAY_DATA.intro.title}
                        icon={ESSAY_DATA.intro.icon}
                        color="blue"
                        defaultOpen={true}
                    >
                        <div className="bg-[#FAF9F5] border-l-4 border-[#5B7FA6] p-4 rounded-r italic text-[#101820] text-sm sm:text-base">
                            {ESSAY_DATA.intro.text}
                        </div>

                        <AnalysisBox
                            title="¿Por qué es INTRODUCCIÓN?"
                            points={ESSAY_DATA.intro.analysis.points}
                            color="blue"
                        />

                        <div className="mt-4 p-4 bg-[#E7EEF5] border-2 border-[#A9C6EE] rounded">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-5 h-5 text-[#2367D1]" />
                                <span className="font-bold text-[#071B33]">LA TESIS</span>
                            </div>
                            <p className="text-[#123C69] font-medium text-sm sm:text-base">{ESSAY_DATA.intro.thesis}</p>
                        </div>

                        <div className="mt-3 text-xs sm:text-sm text-[#727983] bg-[#F3F1EA] p-3 rounded">
                            <strong>¿Por qué esta oración es la TESIS?</strong>
                            <ul className="mt-2 space-y-1">
                                {ESSAY_DATA.intro.analysis.thesisExplanation.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-[#2367D1]">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Accordion>

                    {/* Development - Arguments */}
                    <div className="bg-[#FEF7EC]/50 rounded p-4 sm:p-6 border border-[#F5D399]">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">📗</span>
                            <h3 className="font-bold text-lg sm:text-xl text-[#7A4A0B]">DESARROLLO - Los 4 Argumentos</h3>
                        </div>
                        <p className="text-[#727983] text-sm mb-4">
                            El desarrollo contiene 4 argumentos diferentes. Cada uno tiene un propósito específico.
                        </p>

                        {ESSAY_DATA.arguments.map((arg) => (
                            <Accordion
                                key={arg.id}
                                title={`Argumento ${arg.id}: ${arg.title}`}
                                icon={arg.icon}
                                color="yellow"
                            >
                                <div className="bg-[#FAF9F5] border-l-4 border-[#945B0E] p-4 rounded-r italic text-[#101820] text-sm sm:text-base">
                                    {arg.text}
                                </div>

                                <ArgumentBadge type={arg.type} color="yellow" />

                                <AnalysisBox
                                    title="¿Por qué funciona este argumento?"
                                    points={arg.analysis.points}
                                    color="yellow"
                                />

                                <div className="mt-3 p-3 bg-[#FEF7EC] rounded text-sm">
                                    <strong className="text-[#7A4A0B]">¿Por qué es tipo {arg.type}?</strong>
                                    <p className="text-[#7A4A0B] mt-1">{arg.analysis.why}</p>
                                </div>

                                <div className="mt-3 p-3 bg-[#F3F1EA] rounded text-sm border-l-4 border-[#F1A8A5]">
                                    <strong className="text-[#101820]">¿Cómo apoya la TESIS?</strong>
                                    <p className="text-[#727983] mt-1">{arg.analysis.support}</p>
                                </div>
                            </Accordion>
                        ))}
                    </div>

                    {/* Conclusion */}
                    <Accordion
                        title={ESSAY_DATA.conclusion.title}
                        icon={ESSAY_DATA.conclusion.icon}
                        color="green"
                    >
                        <div className="bg-[#FAF9F5] border-l-4 border-[#3D7A54] p-4 rounded-r italic text-[#101820] text-sm sm:text-base">
                            {ESSAY_DATA.conclusion.text}
                        </div>

                        <ArgumentBadge type={ESSAY_DATA.conclusion.type} color="green" />

                        <AnalysisBox
                            title="¿Por qué es CONCLUSIÓN?"
                            points={ESSAY_DATA.conclusion.analysis.points}
                            color="green"
                        />

                        <div className="mt-3 p-3 bg-[#EAF5EE] rounded text-sm">
                            <strong className="text-[#17532B]">¿Por qué apela a VALORES?</strong>
                            <p className="text-[#17532B] mt-1">{ESSAY_DATA.conclusion.analysis.why}</p>
                        </div>

                        <div className="mt-3 p-3 bg-[#F3F1EA] rounded text-sm border-l-4 border-[#F1A8A5]">
                            <strong className="text-[#101820]">¿Cómo cierra la TESIS?</strong>
                            <p className="text-[#727983] mt-1">{ESSAY_DATA.conclusion.analysis.support}</p>
                        </div>
                    </Accordion>

                    {/* Summary Table */}
                    <div className="bg-white rounded shadow-md p-4 sm:p-6 mt-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">🎯</span>
                            <h3 className="font-bold text-lg text-[#101820]">Resumen: Estructura del Ensayo</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-[#2367D1] text-white">
                                        <th className="py-3 px-4 text-left rounded-tl">PARTE</th>
                                        <th className="py-3 px-4 text-left">FUNCIÓN</th>
                                        <th className="py-3 px-4 text-left rounded-tr">CÓMO LO HACE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#D7D9D6] bg-[#E7EEF5]">
                                        <td className="py-3 px-4 font-bold text-[#123C69]">INTRODUCCIÓN</td>
                                        <td className="py-3 px-4 text-[#727983]">Presenta el tema y la posición</td>
                                        <td className="py-3 px-4 text-[#727983]">Explica el problema y establece la tesis</td>
                                    </tr>
                                    <tr className="border-b border-[#D7D9D6] bg-[#FEF7EC]">
                                        <td className="py-3 px-4 font-bold text-[#7A4A0B]">DESARROLLO</td>
                                        <td className="py-3 px-4 text-[#727983]">Defiende la tesis con pruebas</td>
                                        <td className="py-3 px-4 text-[#727983]">Usa hechos, causas, autoridades y comparaciones</td>
                                    </tr>
                                    <tr className="bg-[#EAF5EE]">
                                        <td className="py-3 px-4 font-bold text-[#17532B] rounded-bl">CONCLUSIÓN</td>
                                        <td className="py-3 px-4 text-[#727983]">Cierra y refuerza la tesis</td>
                                        <td className="py-3 px-4 text-[#727983] rounded-br">Sintetiza apelando a valores universales</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Final Note */}
                    <div className="bg-[#E7EEF5] rounded p-4 sm:p-6 border border-[#A9C6EE] mt-6">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">💡</span>
                            <div>
                                <p className="text-[#101820] font-medium">
                                    <strong>Recuerda:</strong> Un ensayo argumentativo es como un abogado en un juicio.
                                </p>
                                <ul className="mt-2 text-sm text-[#727983] space-y-1">
                                    <li>• La <strong>INTRODUCCIÓN</strong> dice qué quiere probar.</li>
                                    <li>• El <strong>DESARROLLO</strong> presenta las pruebas.</li>
                                    <li>• La <strong>CONCLUSIÓN</strong> convence al juez de que tiene razón.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

