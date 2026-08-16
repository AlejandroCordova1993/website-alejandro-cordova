import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

const TASKS = [
  { id: 1, text: "La tierra gira alrededor del sol", type: "hecho" },
  { id: 2, text: "La educación gratuita es un derecho fundamental", type: "tesis" },
  { id: 3, text: "El agua hierve a 100°C", type: "hecho" },
  { id: 4, text: "Las redes sociales dañan la comunicación real", type: "tesis" },
  { id: 5, text: "Harry Potter fue escrito por J.K. Rowling", type: "hecho" },
];

export function ThesisGame() {
  const [items, setItems] = useState(TASKS);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'

  const handleDragEnd = (event, info, item) => {
    const droppedX = info.point.x;
    // Simple coordinate check (visual approximation for now, relative to screen is tricky without refs, 
    // but we can use constraints or drop zones. 
    // Better approach: Check if dropped over a specific ref. 
    // For simplicity in this demo, we'll use a simpler 'click to sort' or 'drag to general area')

    // Actually, framer-motion drag is visual. To detect drop, the easiest way without dnd-kit 
    // is ensuring the user drags "Left" or "Right".

    const isLeft = info.offset.x < -100;
    const isRight = info.offset.x > 100;

    if (!isLeft && !isRight) return; // Snapped back

    const selectedType = isLeft ? 'hecho' : 'tesis';

    if (selectedType === item.type) {
      setFeedback('correct');
      setScore(s => s + 1);
      setTimeout(() => {
        setItems(prev => prev.filter(i => i.id !== item.id));
        setFeedback(null);
      }, 500);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const currentItem = items[0];

  return (
    <div className="flex flex-col items-center justify-center p-8 glass-panel max-w-4xl mx-auto my-8 border border-white/40 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-white/30">
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 drop-shadow-sm">
        ¿Tesis o Hecho?
      </h2>

      {items.length > 0 && (
        <p className="mb-8 text-slate-600 font-medium text-lg">
          Arrastra la tarjeta a su lugar correcto
        </p>
      )}

      <div className="relative w-full h-80 flex items-center justify-center">
        {/* Drop Zones - ONLY show if game is active */}
        {items.length > 0 && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-5/12 bg-gradient-to-br from-blue-50/80 to-blue-100/50 rounded-2xl border-2 border-dashed border-blue-300 flex flex-col items-center justify-center p-4 transition-all hover:bg-blue-100/60">
              <span className="text-4xl mb-2">🧠</span>
              <span className="text-blue-700 font-bold text-lg tracking-wide">HECHO</span>
              <span className="text-xs text-blue-500 uppercase tracking-widest mt-1">Verificable</span>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-5/12 bg-gradient-to-bl from-purple-50/80 to-purple-100/50 rounded-2xl border-2 border-dashed border-purple-300 flex flex-col items-center justify-center p-4 transition-all hover:bg-purple-100/60">
              <span className="text-4xl mb-2">🗣️</span>
              <span className="text-purple-700 font-bold text-lg tracking-wide">TESIS</span>
              <span className="text-xs text-purple-500 uppercase tracking-widest mt-1">Opinión</span>
            </div>
          </>
        )}

        {/* Card Stack */}
        <AnimatePresence mode='wait'>
          {items.length > 0 ? (
            <motion.div
              key={currentItem.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, info) => handleDragEnd(e, info, currentItem)}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={feedback === 'correct'
                ? { opacity: 0, scale: 0.5, y: -100 }
                : feedback === 'wrong'
                  ? { x: [0, 10, -10, 0], rotate: [0, 5, -5, 0] }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              exit={{ scale: 0.5, opacity: 0 }}
              className="absolute z-10 w-72 h-48 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl flex items-center justify-center p-8 text-center text-xl font-bold text-slate-800 border-2 border-white/50 cursor-grab active:cursor-grabbing hover:shadow-purple-200/50 transition-shadow"
              style={{ x: 0 }}
              whileDrag={{ scale: 1.05, rotate: 2, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            >
              <div className="pointer-events-none select-none">
                {currentItem.text}
              </div>

              {/* Visual Feedback Icons */}
              <AnimatePresence>
                {feedback === 'wrong' && (
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-4 right-4 bg-red-100 p-2 rounded-full text-red-500"
                  >
                    <X size={24} strokeWidth={3} />
                  </motion.div>
                )}
                {feedback === 'correct' && (
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-4 right-4 bg-green-100 p-2 rounded-full text-green-500"
                  >
                    <Check size={24} strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white/60 p-10 rounded-3xl shadow-lg backdrop-blur-sm border border-white"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                ¡Excelente!
              </h3>
              <p className="text-slate-600 mb-8 text-lg">Has clasificado todo correctamente.</p>
              <button
                onClick={() => setItems(TASKS)}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all font-bold text-lg"
              >
                Jugar de nuevo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
