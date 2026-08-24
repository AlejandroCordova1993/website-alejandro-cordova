import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStudent } from '../context/StudentContext';
import { User, GraduationCap } from 'lucide-react';

export function LoginModal() {
    const { registerStudent } = useStudent();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [course, setCourse] = useState('');
    const [error, setError] = useState('');

    const courses = ['10mo G', '10mo H', '10mo I', '10mo J'];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !lastName.trim()) {
            setError('Por favor ingresa tu nombre y apellido.');
            return;
        }
        if (!course) {
            setError('Por favor selecciona tu curso.');
            return;
        }

        registerStudent(name.trim(), lastName.trim(), course);
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#071B33] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white rounded shadow-2xl p-8 md:p-10 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#E7EEF5] rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-8 h-8 text-[#2367D1]" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-[#071B33] mb-2">
                        El Ensayo Argumentativo
                    </h1>
                    <p className="text-[#727983]">
                        Ingresa tus datos para comenzar
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-[#101820] mb-1">
                            Nombre
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#727983]" />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tu nombre"
                                className="w-full pl-10 pr-4 py-3 border border-[#D7D9D6] rounded focus:ring-2 focus:ring-[#2367D1] focus:border-[#2367D1] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#101820] mb-1">
                            Apellido
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#727983]" />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Tu apellido"
                                className="w-full pl-10 pr-4 py-3 border border-[#D7D9D6] rounded focus:ring-2 focus:ring-[#2367D1] focus:border-[#2367D1] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#101820] mb-1">
                            Curso
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {courses.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setCourse(c)}
                                    className={`py-3 px-4 rounded border-2 font-medium transition-all ${course === c
                                            ? 'bg-[#2367D1] border-[#2367D1] text-white'
                                            : 'bg-white border-[#D7D9D6] text-[#101820] hover:border-[#A9C6EE]'
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <p className="text-[#B52A25] text-sm text-center bg-[#FDF0EF] p-3 rounded">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 bg-[#2367D1] text-white rounded font-bold text-lg hover:bg-[#123C69] transition-all shadow-lg hover:shadow-xl"
                    >
                        Comenzar
                    </button>
                </form>

                <p className="text-center text-xs text-[#727983] mt-6">
                    Creado por Msc. Alejandro Córdova
                </p>
            </motion.div>
        </div>
    );
}
