import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

const QUESTIONS = [
    {
        q: '¿Cuál es el objetivo principal de un ensayo argumentativo?',
        options: [
            'Contar una historia',
            'Defender una idea o postura usando razones',
            'Describir un lugar o persona',
            'Hacer una lista de datos',
        ],
        correct: 1,
    },
    {
        q: '¿Qué es la retórica?',
        options: [
            'Un tipo de poesía',
            'El arte de persuadir o influir mediante el lenguaje',
            'Una forma de narrar cuentos',
            'Un resumen de un libro',
        ],
        correct: 1,
    },
    {
        q: '¿Qué elemento es esencial en un ensayo argumentativo?',
        options: [
            'Un dibujo',
            'Una tesis clara',
            'Muchos personajes',
            'Rimas',
        ],
        correct: 1,
    },
    {
        q: '¿Qué son los contraargumentos?',
        options: [
            'Argumentos repetidos',
            'Argumentos que refutan la posición contraria',
            'Argumentos sin evidencia',
            'Argumentos poéticos',
        ],
        correct: 1,
    },
];

export function QuizSection() {
    const { updateScore, getAttemptsLeft, canAttempt, scores } = useStudent();
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const attemptsLeft = getAttemptsLeft('quiz');
    const currentBestScore = scores.quiz.score;

    const question = QUESTIONS[currentQ];
    const isLast = currentQ === QUESTIONS.length - 1;

    const handleSelect = (idx) => {
        if (selected !== null) return;
        setSelected(idx);
        if (idx === question.correct) {
            setScore(s => s + 1);
        }
    };

    const handleNext = () => {
        if (isLast) {
            setShowResult(true);
        } else {
            setCurrentQ(c => c + 1);
            setSelected(null);
        }
    };

    // Update score when quiz is complete
    useEffect(() => {
        if (showResult) {
            updateScore('quiz', score);
        }
    }, [showResult, score, updateScore]);

    const reset = () => {
        if (!canAttempt('quiz')) return;
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
    };

    if (showResult) {
        return (
            <div className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold text-[#071B33] mb-4">📝 Resultado del Quiz</h3>
                <div className="text-5xl mb-4">{score === QUESTIONS.length ? '🎉' : score >= QUESTIONS.length / 2 ? '👍' : '📚'}</div>
                <p className="text-2xl font-bold text-[#101820] mb-2">
                    {score} / {QUESTIONS.length}
                </p>
                <p className="text-[#727983] mb-6">
                    {score === QUESTIONS.length
                        ? '¡Perfecto! Dominas el tema.'
                        : score >= QUESTIONS.length / 2
                            ? '¡Bien! Pero puedes mejorar.'
                            : 'Necesitas repasar la teoría.'}
                </p>
                {canAttempt('quiz') ? (
                    <button onClick={reset} className="px-6 py-3 bg-[#2367D1] text-white rounded font-bold hover:bg-[#123C69]">
                        Intentar de nuevo ({attemptsLeft} intentos)
                    </button>
                ) : (
                    <p className="text-[#727983] text-sm">Has agotado tus intentos.</p>
                )}
            </div>
        );
    }

    return (
        <div className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#071B33]">📝 Quiz</h3>
                <div className="text-right">
                    <span className="text-sm text-[#727983]">Pregunta {currentQ + 1}/{QUESTIONS.length}</span>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-[#1E6B38]">Mejor: {currentBestScore}/{QUESTIONS.length}</p>
                    )}
                </div>
            </div>

            <p className="text-lg font-medium text-[#101820] mb-6">{question.q}</p>

            <div className="space-y-3 mb-6">
                {question.options.map((opt, idx) => {
                    let btnClass = 'bg-[#FAF9F5] border-[#D7D9D6] hover:border-[#A9C6EE]';
                    if (selected !== null) {
                        if (idx === question.correct) {
                            btnClass = 'bg-[#EAF5EE] border-[#3D7A54] text-[#17532B]';
                        } else if (idx === selected) {
                            btnClass = 'bg-[#FDF0EF] border-[#B52A25] text-[#8A1F1B]';
                        } else {
                            btnClass = 'bg-[#FAF9F5] border-[#D7D9D6] opacity-50';
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={selected !== null}
                            className={`w-full text-left px-4 py-3 rounded border-2 transition-all ${btnClass}`}
                        >
                            <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
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
                    <div className={`flex items-center gap-2 font-medium ${selected === question.correct ? 'text-[#1E6B38]' : 'text-[#B52A25]'}`}>
                        {selected === question.correct ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                        {selected === question.correct ? '¡Correcto!' : 'Incorrecto'}
                    </div>
                    <button
                        onClick={handleNext}
                        className="px-5 py-2 bg-[#2367D1] text-white rounded font-medium hover:bg-[#123C69]"
                    >
                        {isLast ? 'Ver resultado' : 'Siguiente'}
                    </button>
                </motion.div>
            )}
        </div>
    );
}
