import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

const PURPOSES = [
    { id: 'informar', term: 'Informar', def: 'Dar datos objetivos sobre un tema.' },
    { id: 'exponer', term: 'Exponer', def: 'Explicar e informar de forma clara.' },
    { id: 'persuadir', term: 'Persuadir', def: 'Recurrir a la emoción del lector.' },
    { id: 'argumentar', term: 'Argumentar', def: 'Dar razones a favor o en contra.' },
    { id: 'describir', term: 'Describir', def: 'Contar cómo es algo.' },
    { id: 'narrar', term: 'Narrar', def: 'Contar qué ha sucedido.' },
];

export function MatchingGame() {
    const { updateScore, getAttemptsLeft, canAttempt, scores } = useStudent();
    const [matches, setMatches] = useState({});
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [shuffledDefs, setShuffledDefs] = useState([]);

    const attemptsLeft = getAttemptsLeft('matching');
    const currentBestScore = scores.matching.score;

    useEffect(() => {
        setShuffledDefs([...PURPOSES].sort(() => Math.random() - 0.5));
    }, []);

    const handleTermClick = (id) => {
        if (matches[id]) return;
        setSelectedTerm(id);
        setFeedback(null);
    };

    const handleDefClick = (defId) => {
        if (!selectedTerm) return;
        if (Object.values(matches).includes(defId)) return;

        if (selectedTerm === defId) {
            setMatches(prev => ({ ...prev, [selectedTerm]: defId }));
            setFeedback('correct');
            setTimeout(() => setFeedback(null), 500);
        } else {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 500);
        }
        setSelectedTerm(null);
    };

    const isComplete = Object.keys(matches).length === PURPOSES.length;

    // Update score when complete
    useEffect(() => {
        if (isComplete) {
            updateScore('matching', Object.keys(matches).length);
        }
    }, [isComplete, matches, updateScore]);

    const reset = () => {
        if (!canAttempt('matching')) return;
        setMatches({});
        setSelectedTerm(null);
        setFeedback(null);
        setShuffledDefs([...PURPOSES].sort(() => Math.random() - 0.5));
    };

    return (
        <div className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-[#071B33]">🔗 Emparejar Conceptos</h3>
                    <p className="text-[#727983] text-sm">Haz clic en un propósito y luego en su definición</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-[#727983]">Intentos restantes: <span className="font-bold text-[#2367D1]">{attemptsLeft}</span></p>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-[#1E6B38]">Mejor: {currentBestScore}/{PURPOSES.length}</p>
                    )}
                </div>
            </div>

            {feedback && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 p-3 rounded text-center font-medium ${feedback === 'correct' ? 'bg-[#EAF5EE] text-[#17532B]' : 'bg-[#FDF0EF] text-[#8A1F1B]'
                        }`}
                >
                    {feedback === 'correct' ? <><Check className="inline w-5 h-5 mr-1" /> ¡Correcto!</> : <><X className="inline w-5 h-5 mr-1" /> Incorrecto</>}
                </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-[#727983] mb-2">Propósitos:</p>
                    {PURPOSES.map(p => (
                        <button
                            key={p.id}
                            onClick={() => handleTermClick(p.id)}
                            disabled={!!matches[p.id]}
                            className={`w-full text-left px-4 py-3 rounded border-2 transition-all font-medium ${matches[p.id]
                                    ? 'bg-[#EAF5EE] border-[#A3D9B5] text-[#17532B] cursor-default'
                                    : selectedTerm === p.id
                                        ? 'bg-[#E7EEF5] border-[#5B7FA6] text-[#071B33]'
                                        : 'bg-[#FAF9F5] border-[#D7D9D6] hover:border-[#A9C6EE] cursor-pointer'
                                }`}
                        >
                            {p.term}
                        </button>
                    ))}
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-[#727983] mb-2">Definiciones:</p>
                    {shuffledDefs.map(p => (
                        <button
                            key={p.id}
                            onClick={() => handleDefClick(p.id)}
                            disabled={Object.values(matches).includes(p.id)}
                            className={`w-full text-left px-4 py-3 rounded border-2 transition-all text-sm ${Object.values(matches).includes(p.id)
                                    ? 'bg-[#EAF5EE] border-[#A3D9B5] text-[#17532B] cursor-default'
                                    : selectedTerm
                                        ? 'bg-white border-[#D7D9D6] hover:border-[#F5D399] cursor-pointer'
                                        : 'bg-[#FAF9F5] border-[#D7D9D6] text-[#727983] cursor-not-allowed'
                                }`}
                        >
                            {p.def}
                        </button>
                    ))}
                </div>
            </div>

            {isComplete && (
                <div className="mt-6 p-4 bg-[#EAF5EE] rounded text-center border border-[#A3D9B5]">
                    <p className="text-[#17532B] font-bold mb-3">🎉 ¡Emparejaste todos correctamente!</p>
                    {canAttempt('matching') && (
                        <button onClick={reset} className="px-4 py-2 bg-[#2367D1] text-white rounded font-medium hover:bg-[#123C69]">
                            Intentar de nuevo ({attemptsLeft} intentos)
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
