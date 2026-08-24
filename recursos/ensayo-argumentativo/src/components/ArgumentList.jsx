import React from 'react';

const ARGUMENTS = [
    {
        type: "Autoridad",
        def: "Cita a un experto o institución reconocida.",
        example: "Según la OMS, el ejercicio reduce el riesgo de enfermedades.",
        color: "bg-[#E7EEF5] border-[#A9C6EE]"
    },
    {
        type: "Ejemplificación",
        def: "Usa casos concretos para demostrar una idea.",
        example: "Países como Finlandia tienen mejor educación porque invierten más en sus maestros.",
        color: "bg-[#FEF7EC] border-[#F5D399]"
    },
    {
        type: "Causalidad",
        def: "Establece una relación de causa y efecto.",
        example: "Si no reducimos las emisiones de CO2 (causa), el calentamiento global será irreversible (efecto).",
        color: "bg-[#EAF5EE] border-[#A3D9B5]"
    },
    {
        type: "Hechos y Datos",
        def: "Información objetiva y estadística verificable.",
        example: "El 80% de los estudiantes prefiere clases interactivas.",
        color: "bg-[#E7EEF5] border-[#A9C6EE]"
    }
];

export function ArgumentList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ARGUMENTS.map((arg, idx) => (
                <div
                    key={idx}
                    className={`p-6 rounded border ${arg.color} hover:shadow-md transition-shadow`}
                >
                    <h4 className="font-bold text-lg mb-2">{arg.type}</h4>
                    <p className="text-sm text-[#727983] mb-3 italic">{arg.def}</p>
                    <div className="bg-white/60 p-3 rounded text-[#101820] text-sm border border-black/5">
                        <strong>Ej:</strong> {arg.example}
                    </div>
                </div>
            ))}
        </div>
    );
}
