import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStudent } from '../context/StudentContext';
import { Check, Trophy, Send, Loader2 } from 'lucide-react';

// IMPORTANT: Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8PEEXcpfNcqd6WJnIA-pfORBnXkBBLKPQBucTmxBjNFlza-YQ1AhhzgV7stU7BYvShA/exec';

export function ResultsSummary() {
    const { student, getActivityScores, calculateFinalGrade, submitResults, isSubmitted } = useStudent();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const activities = getActivityScores();
    const finalGrade = calculateFinalGrade();

    const handleSubmit = async () => {
        if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
            setSubmitError('El profesor aún no ha configurado el envío de resultados.');
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        const success = await submitResults(GOOGLE_SCRIPT_URL);

        setIsSubmitting(false);
        if (!success) {
            setSubmitError('Error al enviar. Intenta de nuevo.');
        }
    };

    const getGradeColor = (grade) => {
        const num = parseFloat(grade);
        if (num >= 9) return 'text-emerald-600';
        if (num >= 7) return 'text-blue-600';
        if (num >= 5) return 'text-orange-500';
        return 'text-red-500';
    };

    return (
        <div className="bg-gradient-to-b from-indigo-50 to-purple-50 py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-8 h-8 text-amber-600" />
                        </div>
                        <h2 className="text-3xl font-black text-blue-900 mb-2">
                            Resumen de Resultados
                        </h2>
                        <p className="text-slate-600">
                            {student?.name} {student?.lastName} • {student?.course}
                        </p>
                    </div>

                    {/* Activity Scores */}
                    <div className="space-y-3 mb-8">
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                            >
                                <div className="flex items-center gap-3">
                                    {activity.score === activity.maxScore ? (
                                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                            <Check className="w-5 h-5 text-emerald-600" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-slate-500">{activity.attempts}</span>
                                        </div>
                                    )}
                                    <span className="font-medium text-slate-700">{activity.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className={`font-bold text-lg ${getGradeColor(activity.percentage)}`}>
                                        {activity.percentage}
                                    </span>
                                    <span className="text-slate-400 text-sm"> / 10</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Grade */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center mb-8">
                        <p className="text-blue-100 mb-1">Calificación Final</p>
                        <p className="text-5xl font-black">{finalGrade}</p>
                        <p className="text-blue-200 text-sm mt-1">sobre 10</p>
                    </div>

                    {/* Submit Button */}
                    {!isSubmitted ? (
                        <div className="space-y-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Enviar Resultados al Profesor
                                    </>
                                )}
                            </button>
                            {submitError && (
                                <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                                    {submitError}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
                            <Check className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                            <p className="text-emerald-700 font-bold text-lg">¡Resultados Enviados!</p>
                            <p className="text-emerald-600 text-sm">Tu profesor recibirá tu calificación.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
