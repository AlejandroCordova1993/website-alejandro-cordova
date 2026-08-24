import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PARTS = [
    {
        id: 'intro',
        title: '1. Introducción',
        color: 'bg-[#E7EEF5] border-[#A9C6EE] text-[#071B33]',
        desc: 'Engancha al lector + Presenta el tema + **Plantea la TESIS**.',
        icon: '🏗️'
    },
    {
        id: 'body',
        title: '2. Desarrollo (Cuerpo)',
        color: 'bg-[#FEF7EC] border-[#F5D399] text-[#7A4A0B]',
        desc: 'Presenta los **ARGUMENTOS** que defienden la tesis. Usa evidencias y ejemplos.',
        icon: '🧱'
    },
    {
        id: 'conclusion',
        title: '3. Conclusión',
        color: 'bg-[#EAF5EE] border-[#A3D9B5] text-[#17532B]',
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
                        className={`cursor-pointer p-6 rounded border-2 shadow-sm transition-colors ${part.color} ${active === part.id ? 'ring-2 ring-offset-2 ring-[#5B7FA6] font-bold' : ''}`}
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
                        <h3 className="text-2xl font-bold mb-4 text-[#123C69]">
                            {PARTS.find(p => p.id === active).title}
                        </h3>
                        <p className="text-lg leading-relaxed text-[#101820]">
                            {PARTS.find(p => p.id === active).desc}
                        </p>
                    </motion.div>
                ) : (
                    <p className="text-center text-[#727983] italic">
                        Pasa el mouse sobre las partes de la estructura para ver detalles.
                    </p>
                )}
            </div>
        </div>
    );
}
