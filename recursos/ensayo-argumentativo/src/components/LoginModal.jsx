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
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-blue-900 mb-2">
                        El Ensayo Argumentativo
                    </h1>
                    <p className="text-slate-600">
                        Ingresa tus datos para comenzar
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Nombre
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tu nombre"
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Apellido
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Tu apellido"
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Curso
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {courses.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setCourse(c)}
                                    className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${course === c
                                            ? 'bg-blue-600 border-blue-600 text-white'
                                            : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        Comenzar
                    </button>
                </form>

                <p className="text-center text-xs text-slate-400 mt-6">
                    Creado por Msc. Alejandro Córdova
                </p>
            </motion.div>
        </div>
    );
}
