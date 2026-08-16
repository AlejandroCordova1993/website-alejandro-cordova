import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PARTS = [
    {
        id: 'intro',
        title: '1. Introducción',
        color: 'bg-indigo-100 border-indigo-300 text-indigo-800',
        desc: 'Engancha al lector + Presenta el tema + **Plantea la TESIS**.',
        icon: '🏗️'
    },
    {
        id: 'body',
        title: '2. Desarrollo (Cuerpo)',
        color: 'bg-pink-100 border-pink-300 text-pink-800',
        desc: 'Presenta los **ARGUMENTOS** que defienden la tesis. Usa evidencias y ejemplos.',
        icon: '🧱'
    },
    {
        id: 'conclusion',
        title: '3. Conclusión',
        color: 'bg-emerald-100 border-emerald-300 text-emerald-800',
        desc: 'Sintetiza lo expuesto + Reafirma la tesis + Cierre memorable.',
        icon: '🏠'
    }
];

export function StructureViewer() {
    const [active, setActive] = useState(null);

    return (
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center p-8">
            {/* Visual Stack */}
            <div className="flex flex-col gap-2 w-full md:w-1/3">
                {PARTS.map((part) => (
                    <motion.div
                        key={part.id}
                        onHoverStart={() => setActive(part.id)}
                        onClick={() => setActive(part.id)}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className={`cursor-pointer p-6 rounded-xl border-2 shadow-sm transition-colors ${part.color} ${active === part.id ? 'ring-2 ring-offset-2 ring-purple-400 font-bold' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{part.icon}</span>
                            <span>{part.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detail Panel */}
            <div className="w-full md:w-1/2 glass-panel p-8 min-h-[300px] flex flex-col justify-center">
                {active ? (
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 color-primary-strong">
                            {PARTS.find(p => p.id === active).title}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {PARTS.find(p => p.id === active).desc}
                        </p>
                    </motion.div>
                ) : (
                    <p className="text-center text-gray-400 italic">
                        Pasa el mouse sobre las partes de la estructura para ver detalles.
                    </p>
                )}
            </div>
        </div>
    );
}
