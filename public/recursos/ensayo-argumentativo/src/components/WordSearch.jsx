import React, { useState, useEffect, useCallback } from 'react';
import { useStudent } from '../context/StudentContext';

const WORDS = ['TESIS', 'ARGUMENTO', 'CONCLUSION', 'INTRODUCCION', 'EVIDENCIA', 'POSTURA'];
const GRID_SIZE = 14;

function generateGrid(words) {
    const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    const placed = [];

    const directions = [
        { dx: 1, dy: 0 },
        { dx: 0, dy: 1 },
    ];

    for (const word of words) {
        let attempts = 0;
        let success = false;

        while (attempts < 100 && !success) {
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const maxX = GRID_SIZE - (dir.dx * word.length);
            const maxY = GRID_SIZE - (dir.dy * word.length);

            if (maxX <= 0 || maxY <= 0) { attempts++; continue; }

            const startX = Math.floor(Math.random() * maxX);
            const startY = Math.floor(Math.random() * maxY);

            let canPlace = true;
            for (let i = 0; i < word.length; i++) {
                const x = startX + i * dir.dx;
                const y = startY + i * dir.dy;
                if (grid[y][x] !== '' && grid[y][x] !== word[i]) {
                    canPlace = false;
                    break;
                }
            }

            if (canPlace) {
                const positions = [];
                for (let i = 0; i < word.length; i++) {
                    const x = startX + i * dir.dx;
                    const y = startY + i * dir.dy;
                    grid[y][x] = word[i];
                    positions.push(`${x},${y}`);
                }
                placed.push({ word, positions });
                success = true;
            }
            attempts++;
        }
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            if (grid[y][x] === '') {
                grid[y][x] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }

    return { grid, placed };
}

export function WordSearch() {
    const { updateScore, getAttemptsLeft, canAttempt, scores } = useStudent();
    const [{ grid, placed }, setGridData] = useState(() => generateGrid(WORDS));
    const [selected, setSelected] = useState([]);
    const [found, setFound] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [hasCompleted, setHasCompleted] = useState(false);

    const attemptsLeft = getAttemptsLeft('wordSearch');
    const currentBestScore = scores.wordSearch.score;

    const handleMouseDown = (x, y) => {
        if (hasCompleted && !canAttempt('wordSearch')) return;
        setIsSelecting(true);
        setSelected([`${x},${y}`]);
    };

    const handleMouseEnter = (x, y) => {
        if (isSelecting) {
            const key = `${x},${y}`;
            if (!selected.includes(key)) {
                setSelected(prev => [...prev, key]);
            }
        }
    };

    const handleMouseUp = useCallback(() => {
        if (isSelecting) {
            for (const { word, positions } of placed) {
                if (positions.length === selected.length &&
                    positions.every(p => selected.includes(p))) {
                    if (!found.includes(word)) {
                        setFound(prev => [...prev, word]);
                    }
                }
            }
            setSelected([]);
            setIsSelecting(false);
        }
    }, [isSelecting, selected, placed, found]);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseUp]);

    // Check completion and update score
    useEffect(() => {
        if (found.length === WORDS.length && !hasCompleted) {
            setHasCompleted(true);
            updateScore('wordSearch', found.length);
        }
    }, [found, hasCompleted, updateScore]);

    const handleReset = () => {
        if (!canAttempt('wordSearch')) return;
        setGridData(generateGrid(WORDS));
        setFound([]);
        setSelected([]);
        setHasCompleted(false);
    };

    const getCellClass = (x, y) => {
        const key = `${x},${y}`;
        const isFound = placed.some(({ word, positions }) =>
            found.includes(word) && positions.includes(key)
        );
        const isSelected = selected.includes(key);

        if (isFound) return 'bg-emerald-200 text-emerald-800';
        if (isSelected) return 'bg-blue-200 text-blue-800';
        return 'bg-white hover:bg-slate-100';
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-blue-900">🔍 Sopa de Letras</h3>
                    <p className="text-slate-600 text-sm">Encuentra las palabras clave del ensayo</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-slate-500">Intentos restantes: <span className="font-bold text-blue-600">{attemptsLeft}</span></p>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-emerald-600">Mejor: {currentBestScore}/{WORDS.length}</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="overflow-x-auto pb-2">
                    <div
                        className="grid gap-0.5 md:gap-1 select-none mx-auto"
                        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`, minWidth: '280px' }}
                    >
                        {grid.map((row, y) =>
                            row.map((cell, x) => (
                                <div
                                    key={`${x},${y}`}
                                    onMouseDown={() => handleMouseDown(x, y)}
                                    onMouseEnter={() => handleMouseEnter(x, y)}
                                    onTouchStart={() => handleMouseDown(x, y)}
                                    onTouchMove={(e) => {
                                        const touch = e.touches[0];
                                        const element = document.elementFromPoint(touch.clientX, touch.clientY);
                                        if (element && element.dataset.coords) {
                                            const [tx, ty] = element.dataset.coords.split(',').map(Number);
                                            handleMouseEnter(tx, ty);
                                        }
                                    }}
                                    onTouchEnd={handleMouseUp}
                                    data-coords={`${x},${y}`}
                                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center text-xs sm:text-sm font-bold rounded cursor-pointer transition-colors ${getCellClass(x, y)}`}
                                >
                                    {cell}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-col gap-2 justify-center">
                    {WORDS.map(word => (
                        <span
                            key={word}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${found.includes(word)
                                ? 'bg-emerald-100 text-emerald-700 line-through'
                                : 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {hasCompleted && (
                <div className="mt-6 p-4 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                    <p className="text-emerald-700 font-bold mb-3">🎉 ¡Encontraste todas las palabras!</p>
                    {canAttempt('wordSearch') && (
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                        >
                            Intentar de nuevo ({attemptsLeft} intentos)
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
