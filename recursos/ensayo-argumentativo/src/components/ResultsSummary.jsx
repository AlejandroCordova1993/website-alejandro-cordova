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
        if (num >= 9) return 'text-[#1E6B38]';
        if (num >= 7) return 'text-[#2367D1]';
        if (num >= 5) return 'text-[#945B0E]';
        return 'text-[#B52A25]';
    };

    return (
        <div className="bg-[#E7EEF5] py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded shadow-xl p-8 md:p-10"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[#FEF7EC] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-8 h-8 text-[#945B0E]" />
                        </div>
                        <h2 className="text-3xl font-black text-[#071B33] mb-2">
                            Resumen de Resultados
                        </h2>
                        <p className="text-[#727983]">
                            {student?.name} {student?.lastName} • {student?.course}
                        </p>
                    </div>

                    {/* Activity Scores */}
                    <div className="space-y-3 mb-8">
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex items-center justify-between p-4 bg-[#FAF9F5] rounded"
                            >
                                <div className="flex items-center gap-3">
                                    {activity.score === activity.maxScore ? (
                                        <div className="w-8 h-8 bg-[#EAF5EE] rounded-full flex items-center justify-center">
                                            <Check className="w-5 h-5 text-[#1E6B38]" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 bg-[#D7D9D6] rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-[#727983]">{activity.attempts}</span>
                                        </div>
                                    )}
                                    <span className="font-medium text-[#101820]">{activity.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className={`font-bold text-lg ${getGradeColor(activity.percentage)}`}>
                                        {activity.percentage}
                                    </span>
                                    <span className="text-[#727983] text-sm"> / 10</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Grade */}
                    <div className="bg-[#2367D1] rounded p-6 text-white text-center mb-8">
                        <p className="text-[#E7EEF5] mb-1">Calificación Final</p>
                        <p className="text-5xl font-black">{finalGrade}</p>
                        <p className="text-[#A9C6EE] text-sm mt-1">sobre 10</p>
                    </div>

                    {/* Submit Button */}
                    {!isSubmitted ? (
                        <div className="space-y-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#1E6B38] text-white rounded font-bold text-lg hover:bg-[#17532B] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                <p className="text-[#B52A25] text-sm text-center bg-[#FDF0EF] p-3 rounded">
                                    {submitError}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="text-center p-6 bg-[#EAF5EE] rounded border border-[#A3D9B5]">
                            <Check className="w-12 h-12 text-[#1E6B38] mx-auto mb-3" />
                            <p className="text-[#17532B] font-bold text-lg">¡Resultados Enviados!</p>
                            <p className="text-[#1E6B38] text-sm">Tu profesor recibirá tu calificación.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
