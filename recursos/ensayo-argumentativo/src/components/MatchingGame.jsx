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
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-blue-900">🔗 Emparejar Conceptos</h3>
                    <p className="text-slate-600 text-sm">Haz clic en un propósito y luego en su definición</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-slate-500">Intentos restantes: <span className="font-bold text-blue-600">{attemptsLeft}</span></p>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-emerald-600">Mejor: {currentBestScore}/{PURPOSES.length}</p>
                    )}
                </div>
            </div>

            {feedback && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 p-3 rounded-lg text-center font-medium ${feedback === 'correct' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                        }`}
                >
                    {feedback === 'correct' ? <><Check className="inline w-5 h-5 mr-1" /> ¡Correcto!</> : <><X className="inline w-5 h-5 mr-1" /> Incorrecto</>}
                </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-500 mb-2">Propósitos:</p>
                    {PURPOSES.map(p => (
                        <button
                            key={p.id}
                            onClick={() => handleTermClick(p.id)}
                            disabled={!!matches[p.id]}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium ${matches[p.id]
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 cursor-default'
                                    : selectedTerm === p.id
                                        ? 'bg-blue-100 border-blue-400 text-blue-800'
                                        : 'bg-slate-50 border-slate-200 hover:border-blue-300 cursor-pointer'
                                }`}
                        >
                            {p.term}
                        </button>
                    ))}
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-500 mb-2">Definiciones:</p>
                    {shuffledDefs.map(p => (
                        <button
                            key={p.id}
                            onClick={() => handleDefClick(p.id)}
                            disabled={Object.values(matches).includes(p.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${Object.values(matches).includes(p.id)
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 cursor-default'
                                    : selectedTerm
                                        ? 'bg-white border-slate-200 hover:border-orange-300 cursor-pointer'
                                        : 'bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed'
                                }`}
                        >
                            {p.def}
                        </button>
                    ))}
                </div>
            </div>

            {isComplete && (
                <div className="mt-6 p-4 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                    <p className="text-emerald-700 font-bold mb-3">🎉 ¡Emparejaste todos correctamente!</p>
                    {canAttempt('matching') && (
                        <button onClick={reset} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                            Intentar de nuevo ({attemptsLeft} intentos)
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
