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

        if (isFound) return 'bg-[#A3D9B5] text-[#17532B]';
        if (isSelected) return 'bg-[#A9C6EE] text-[#071B33]';
        return 'bg-white hover:bg-[#F3F1EA]';
    };

    return (
        <div className="bg-white rounded shadow-lg border border-[#D7D9D6] p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-[#071B33]">🔍 Sopa de Letras</h3>
                    <p className="text-[#727983] text-sm">Encuentra las palabras clave del ensayo</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-[#727983]">Intentos restantes: <span className="font-bold text-[#2367D1]">{attemptsLeft}</span></p>
                    {currentBestScore > 0 && (
                        <p className="text-xs text-[#1E6B38]">Mejor: {currentBestScore}/{WORDS.length}</p>
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
                                ? 'bg-[#EAF5EE] text-[#17532B] line-through'
                                : 'bg-[#F3F1EA] text-[#727983]'
                                }`}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {hasCompleted && (
                <div className="mt-6 p-4 bg-[#EAF5EE] rounded text-center border border-[#A3D9B5]">
                    <p className="text-[#17532B] font-bold mb-3">🎉 ¡Encontraste todas las palabras!</p>
                    {canAttempt('wordSearch') && (
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-[#2367D1] text-white rounded font-medium hover:bg-[#123C69]"
                        >
                            Intentar de nuevo ({attemptsLeft} intentos)
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
