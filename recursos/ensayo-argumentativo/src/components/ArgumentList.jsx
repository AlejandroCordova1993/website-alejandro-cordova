import React from 'react';

const ARGUMENTS = [
    {
        type: "Autoridad",
        def: "Cita a un experto o institución reconocida.",
        example: "Según la OMS, el ejercicio reduce el riesgo de enfermedades.",
        color: "bg-blue-50 border-blue-200"
    },
    {
        type: "Ejemplificación",
        def: "Usa casos concretos para demostrar una idea.",
        example: "Países como Finlandia tienen mejor educación porque invierten más en sus maestros.",
        color: "bg-orange-50 border-orange-200"
    },
    {
        type: "Causalidad",
        def: "Establece una relación de causa y efecto.",
        example: "Si no reducimos las emisiones de CO2 (causa), el calentamiento global será irreversible (efecto).",
        color: "bg-green-50 border-green-200"
    },
    {
        type: "Hechos y Datos",
        def: "Información objetiva y estadística verificable.",
        example: "El 80% de los estudiantes prefiere clases interactivas.",
        color: "bg-purple-50 border-purple-200"
    }
];

export function ArgumentList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ARGUMENTS.map((arg, idx) => (
                <div
                    key={idx}
                    className={`p-6 rounded-xl border ${arg.color} hover:shadow-md transition-shadow`}
                >
                    <h4 className="font-bold text-lg mb-2">{arg.type}</h4>
                    <p className="text-sm text-gray-600 mb-3 italic">{arg.def}</p>
                    <div className="bg-white/60 p-3 rounded-lg text-gray-800 text-sm border border-black/5">
                        <strong>Ej:</strong> {arg.example}
                    </div>
                </div>
            ))}
        </div>
    );
}
