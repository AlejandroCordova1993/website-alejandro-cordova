import React, { useState } from 'react';

const GLOSSARY = {
    'retórica': 'El arte de persuadir o convencer a otros mediante el uso del lenguaje.',
    'tesis': 'Afirmación u opinión que el autor defiende en su ensayo.',
    'argumento': 'Razón o prueba que se usa para defender la tesis.',
    'contraargumento': 'Argumento que refuta o se opone a la posición contraria.',
    'exposición': 'Parte del texto que explica o presenta información sin intentar convencer.',
    'persuadir': 'Convencer a alguien para que cambie de opinión o actúe de cierta manera.',
    'hipótesis': 'Suposición o idea provisional que se intenta demostrar.',
    'dialógico': 'Que tiene forma de diálogo o conversación, involucra diferentes puntos de vista.',
    'refutar': 'Demostrar que un argumento o afirmación es falso o incorrecto.',
    'rebatir': 'Oponerse a una idea o argumento con razones contrarias.',
    'evidencia': 'Dato, hecho o prueba que demuestra algo.',
    'estereotipo': 'Idea simplificada y generalizada sobre un grupo de personas.',
};

export function Tooltip({ term, children }) {
    const [isVisible, setIsVisible] = useState(false);
    const definition = GLOSSARY[term.toLowerCase()];

    if (!definition) {
        return <span>{children || term}</span>;
    }

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <span className="border-b-2 border-dotted border-orange-400 text-orange-600 cursor-help font-medium">
                {children || term}
            </span>
            {isVisible && (
                <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-sm rounded-lg shadow-xl">
                    <span className="font-bold text-orange-300 block mb-1">{term}</span>
                    {definition}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></span>
                </span>
            )}
        </span>
    );
}

export { GLOSSARY };
