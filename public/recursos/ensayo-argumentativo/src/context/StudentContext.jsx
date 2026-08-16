import React, { createContext, useContext, useState, useCallback } from 'react';

const StudentContext = createContext(null);

const ACTIVITIES = {
    wordSearch: { name: 'Sopa de Letras', maxScore: 6, maxAttempts: 3 },
    matching: { name: 'Emparejar', maxScore: 6, maxAttempts: 3 },
    quiz: { name: 'Quiz', maxScore: 4, maxAttempts: 3 },
    ordering: { name: 'Ordenar', maxScore: 3, maxAttempts: 3 },
    thesisGame: { name: 'Tesis vs Hecho', maxScore: 6, maxAttempts: 3 },
    fillBlanks: { name: 'Completar', maxScore: 4, maxAttempts: 3 },
};

export function StudentProvider({ children }) {
    const [student, setStudent] = useState(null);
    const [scores, setScores] = useState({
        wordSearch: { score: 0, attempts: 0 },
        matching: { score: 0, attempts: 0 },
        quiz: { score: 0, attempts: 0 },
        ordering: { score: 0, attempts: 0 },
        thesisGame: { score: 0, attempts: 0 },
        fillBlanks: { score: 0, attempts: 0 },
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const registerStudent = useCallback((name, lastName, course) => {
        setStudent({ name, lastName, course });
    }, []);

    const updateScore = useCallback((activityId, newScore) => {
        setScores(prev => {
            const current = prev[activityId];
            if (current.attempts >= ACTIVITIES[activityId].maxAttempts) {
                return prev; // No more attempts allowed
            }
            return {
                ...prev,
                [activityId]: {
                    score: Math.max(current.score, newScore),
                    attempts: current.attempts + 1,
                },
            };
        });
    }, []);

    const getAttemptsLeft = useCallback((activityId) => {
        return ACTIVITIES[activityId].maxAttempts - scores[activityId].attempts;
    }, [scores]);

    const canAttempt = useCallback((activityId) => {
        return scores[activityId].attempts < ACTIVITIES[activityId].maxAttempts;
    }, [scores]);

    const calculateFinalGrade = useCallback(() => {
        let totalPercentage = 0;
        const activityKeys = Object.keys(ACTIVITIES);

        for (const key of activityKeys) {
            const { score } = scores[key];
            const { maxScore } = ACTIVITIES[key];
            totalPercentage += score / maxScore;
        }

        // Average percentage * 10 to get grade out of 10
        return ((totalPercentage / activityKeys.length) * 10).toFixed(2);
    }, [scores]);

    const getActivityScores = useCallback(() => {
        return Object.keys(ACTIVITIES).map(key => ({
            id: key,
            name: ACTIVITIES[key].name,
            score: scores[key].score,
            maxScore: ACTIVITIES[key].maxScore,
            attempts: scores[key].attempts,
            maxAttempts: ACTIVITIES[key].maxAttempts,
            percentage: ((scores[key].score / ACTIVITIES[key].maxScore) * 10).toFixed(1),
        }));
    }, [scores]);

    const submitResults = useCallback(async (sheetUrl) => {
        if (!student || isSubmitted) return false;

        const data = {
            timestamp: new Date().toISOString(),
            name: student.name,
            lastName: student.lastName,
            course: student.course,
            wordSearch: scores.wordSearch.score,
            matching: scores.matching.score,
            quiz: scores.quiz.score,
            ordering: scores.ordering.score,
            thesisGame: scores.thesisGame.score,
            fillBlanks: scores.fillBlanks.score,
            finalGrade: calculateFinalGrade(),
        };

        try {
            await fetch(sheetUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            setIsSubmitted(true);
            return true;
        } catch (error) {
            console.error('Error submitting results:', error);
            return false;
        }
    }, [student, scores, calculateFinalGrade, isSubmitted]);

    const value = {
        student,
        scores,
        isSubmitted,
        registerStudent,
        updateScore,
        getAttemptsLeft,
        canAttempt,
        calculateFinalGrade,
        getActivityScores,
        submitResults,
        ACTIVITIES,
    };

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    );
}

export function useStudent() {
    const context = useContext(StudentContext);
    if (!context) {
        throw new Error('useStudent must be used within a StudentProvider');
    }
    return context;
}
