import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Check, GripVertical } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

const CORRECT_ORDER = ['intro', 'desarrollo', 'conclusion'];

const PARTS = {
    intro: { label: 'Introducción', desc: 'Presenta el tema y la tesis.' },
    desarrollo: { label: 'Desarrollo', desc: 'Expone los argumentos.' },
    conclusion: { label: 'Conclusión', desc: 'Resume y reafirma la tesis.' },
};

export function OrderingGame() {
    const { updateScore, getAttemptsLeft, canAttempt, scores } = useStudent();
    const [items, setItems] = useState(() =>
        [...CORRECT_ORDER].sort(() => Math.random() - 0.5)
    );
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const attemptsLeft = getAttemptsLeft('ordering');
    const currentBestScore = scores.ordering.score;

    const handleCheck = () => {
        const correct = items.every((item, idx) => item === CORRECT_ORDER[idx]);
        setIsCorrect(correct);
        setChecked(true);

        // Calculate score: 3 points if all correct, 0 otherwise
        const score = correct ? 3 : 0;
        updateScore('ordering', score);
    };

    const reset = () => {
        if (!canAttempt('ordering')) return;
        setItems([...CORRECT_ORDER].sort(() => Math.random() - 0.5));
        setChecked(false);
        setIsCorrect(false);
    };

    return (
        <div className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-[#071B33]">🔢 Ordenar la Estructura</h3>
                    <p className="text-[#727983] text-sm">Arrastra las partes en el orden correcto</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-[#727983]">Intentos restantes: <span className="font-bold text-[#2367D1]">{attemptsLeft}</span></p>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-[#1E6B38]">Mejor: {currentBestScore}/3</p>
                    )}
                </div>
            </div>

            <Reorder.Group
                axis="y"
                values={items}
                onReorder={setItems}
                className="space-y-3"
            >
                {items.map((id, idx) => (
                    <Reorder.Item
                        key={id}
                        value={id}
                        disabled={checked}
                        className={`flex items-center gap-4 px-5 py-4 rounded border-2 cursor-grab active:cursor-grabbing transition-colors ${checked
                                ? id === CORRECT_ORDER[idx]
                                    ? 'bg-[#EAF5EE] border-[#A3D9B5]'
                                    : 'bg-[#FDF0EF] border-[#F1A8A5]'
                                : 'bg-[#FAF9F5] border-[#D7D9D6] hover:border-[#A9C6EE]'
                            }`}
                    >
                        <GripVertical className="w-5 h-5 text-[#727983]" />
                        <div className="flex-1">
                            <p className="font-bold text-[#101820]">{PARTS[id].label}</p>
                            <p className="text-sm text-[#727983]">{PARTS[id].desc}</p>
                        </div>
                        <span className="text-lg font-bold text-[#727983]">{idx + 1}</span>
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <div className="mt-6 flex justify-between items-center">
                {checked ? (
                    <>
                        <div className={`flex items-center gap-2 font-medium ${isCorrect ? 'text-[#1E6B38]' : 'text-[#B52A25]'}`}>
                            {isCorrect ? <><Check className="w-5 h-5" /> ¡Orden correcto!</> : 'Orden incorrecto.'}
                        </div>
                        {canAttempt('ordering') ? (
                            <button onClick={reset} className="px-5 py-2 bg-[#2367D1] text-white rounded font-medium hover:bg-[#123C69]">
                                Intentar de nuevo ({attemptsLeft} intentos)
                            </button>
                        ) : (
                            <p className="text-[#727983] text-sm">Has agotado tus intentos.</p>
                        )}
                    </>
                ) : (
                    <button onClick={handleCheck} className="ml-auto px-5 py-2 bg-[#2367D1] text-white rounded font-medium hover:bg-[#123C69]">
                        Comprobar
                    </button>
                )}
            </div>
        </div>
    );
}
