import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

const SENTENCES = [
    {
        text: 'Un argumento de ______ usa datos estadísticos para convencer.',
        answer: 'hechos',
        options: ['hechos', 'autoridad', 'valores']
    },
    {
        text: 'Citar a un experto como la OMS es un argumento de ______.',
        answer: 'autoridad',
        options: ['ejemplo', 'autoridad', 'comparación']
    },
    {
        text: 'Decir "Si seguimos repitiendo estereotipos, las personas serán discriminadas" es un argumento de ______.',
        answer: 'causa',
        options: ['valores', 'causa', 'hechos']
    },
    {
        text: 'Comparar cómo se trata a hombres y mujeres en la publicidad es un argumento de ______.',
        answer: 'comparación',
        options: ['comparación', 'ejemplo', 'deductivo']
    },
];

export function FillBlanks() {
    const { updateScore, getAttemptsLeft, canAttempt, scores } = useStudent();
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const attemptsLeft = getAttemptsLeft('fillBlanks');
    const currentBestScore = scores.fillBlanks.score;

    const sentence = SENTENCES[current];
    const isLast = current === SENTENCES.length - 1;

    const handleSelect = (opt) => {
        if (selected !== null) return;
        setSelected(opt);
        if (opt === sentence.answer) {
            setScore(s => s + 1);
        }
    };

    const handleNext = () => {
        if (isLast) {
            setShowResult(true);
        } else {
            setCurrent(c => c + 1);
            setSelected(null);
        }
    };

    // Update score when complete
    useEffect(() => {
        if (showResult) {
            updateScore('fillBlanks', score);
        }
    }, [showResult, score, updateScore]);

    const reset = () => {
        if (!canAttempt('fillBlanks')) return;
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">✏️ Resultado</h3>
                <div className="text-5xl mb-4">{score === SENTENCES.length ? '🎉' : '📚'}</div>
                <p className="text-2xl font-bold text-slate-800 mb-2">{score} / {SENTENCES.length}</p>
                <p className="text-slate-600 mb-6">
                    {score === SENTENCES.length ? '¡Excelente! Conoces los tipos de argumentos.' : 'Repasa los tipos de argumentos.'}
                </p>
                {canAttempt('fillBlanks') ? (
                    <button onClick={reset} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
                        Intentar de nuevo ({attemptsLeft} intentos)
                    </button>
                ) : (
                    <p className="text-slate-500 text-sm">Has agotado tus intentos.</p>
                )}
            </div>
        );
    }

    const parts = sentence.text.split('______');

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-blue-900">✏️ Completa la Oración</h3>
                <div className="text-right">
                    <span className="text-sm text-slate-500">{current + 1}/{SENTENCES.length}</span>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-emerald-600">Mejor: {currentBestScore}/{SENTENCES.length}</p>
                    )}
                </div>
            </div>

            <p className="text-lg text-slate-800 mb-6 leading-relaxed">
                {parts[0]}
                <span className={`px-3 py-1 rounded-lg font-bold mx-1 ${selected
                        ? selected === sentence.answer
                            ? 'bg-emerald-200 text-emerald-800'
                            : 'bg-red-200 text-red-800'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                    {selected || '______'}
                </span>
                {parts[1]}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
                {sentence.options.map(opt => {
                    let btnClass = 'bg-slate-100 border-slate-200 hover:border-blue-400';
                    if (selected) {
                        if (opt === sentence.answer) {
                            btnClass = 'bg-emerald-100 border-emerald-400 text-emerald-800';
                        } else if (opt === selected) {
                            btnClass = 'bg-red-100 border-red-400 text-red-800';
                        } else {
                            btnClass = 'bg-slate-50 border-slate-200 opacity-50';
                        }
                    }
                    return (
                        <button
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            disabled={selected !== null}
                            className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${btnClass}`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {selected !== null && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center"
                >
                    <div className={`flex items-center gap-2 font-medium ${selected === sentence.answer ? 'text-emerald-600' : 'text-red-600'}`}>
                        {selected === sentence.answer ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                        {selected === sentence.answer ? '¡Correcto!' : `Era: ${sentence.answer}`}
                    </div>
                    <button onClick={handleNext} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                        {isLast ? 'Ver resultado' : 'Siguiente'}
                    </button>
                </motion.div>
            )}
        </div>
    );
}
