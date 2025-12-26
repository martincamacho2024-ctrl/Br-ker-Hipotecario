
import React, { useState, useEffect } from 'react';
import { STEPS } from '../constants';
import { generateEnigmaTrivia } from '../services/geminiService';
import { TriviaQuestion } from '../types';

const OrderingGame: React.FC = () => {
  const stepsToOrder = STEPS.filter(s => s.id >= 6);
  const [shuffled, setShuffled] = useState([...stepsToOrder].sort(() => Math.random() - 0.5));
  const [ordered, setOrdered] = useState<number[]>([]);
  const [message, setMessage] = useState('');

  const handleStepClick = (id: number) => {
    if (ordered.includes(id)) return;
    
    const expectedId = stepsToOrder[ordered.length].id;
    if (id === expectedId) {
      const nextOrdered = [...ordered, id];
      setOrdered(nextOrdered);
      if (nextOrdered.length === stepsToOrder.length) {
        setMessage('¡Excelente! Has completado la Fase de Desembolso cronológicamente.');
      }
    } else {
      setMessage('Ese no es el paso correcto. ¡Sigue intentando!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const reset = () => {
    setShuffled([...stepsToOrder].sort(() => Math.random() - 0.5));
    setOrdered([]);
    setMessage('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 mb-8">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Juego 1: Orden Crítico</h3>
      <p className="text-sm text-slate-600 mb-4">Ordena la Fase de Desembolso (pasos 6 al 10) haciendo clic en ellos.</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {shuffled.map(s => (
          <button
            key={s.id}
            onClick={() => handleStepClick(s.id)}
            disabled={ordered.includes(s.id)}
            className={`px-4 py-2 rounded-lg border-2 transition-all ${
              ordered.includes(s.id) 
                ? 'bg-slate-100 border-slate-100 text-slate-400 opacity-50' 
                : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {stepsToOrder.map((s, idx) => (
          <div key={s.id} className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
              {idx + 6}
            </span>
            <div className={`flex-1 h-10 border-2 rounded-lg flex items-center px-4 transition-all ${
              ordered[idx] === s.id ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-slate-50 border-slate-100'
            }`}>
              {ordered[idx] === s.id ? s.title : '???'}
            </div>
          </div>
        ))}
      </div>

      {message && <p className={`mt-4 font-bold text-center ${message.includes('¡Ex') ? 'text-emerald-600' : 'text-rose-500'}`}>{message}</p>}
      <button onClick={reset} className="mt-4 text-xs text-blue-600 underline font-bold uppercase">Reiniciar Juego</button>
    </div>
  );
};

const EnigmaGame: React.FC = () => {
  const [trivia, setTrivia] = useState<TriviaQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const fetchNewTrivia = async () => {
    setLoading(true);
    setFeedback(null);
    setUserAnswer('');
    const newTrivia = await generateEnigmaTrivia();
    setTrivia(newTrivia);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewTrivia();
  }, []);

  const handleCheck = () => {
    if (!trivia) return;
    const correct = userAnswer.trim().toUpperCase() === trivia.answer.toUpperCase();
    setFeedback({
      isCorrect: correct,
      text: correct 
        ? `¡Correcto! ${trivia.explanation}`
        : `Incorrecto. La respuesta era ${trivia.answer}. ${trivia.explanation}`
    });
  };

  return (
    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Juego 2: El Enigma del Crédito</h3>
        <span className="px-2 py-1 bg-blue-600 rounded text-[10px] font-bold uppercase">IA powered</span>
      </div>

      {loading ? (
        <div className="py-10 flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2"></div>
          <p className="text-xs text-slate-400">Generando enigma mediante IA...</p>
        </div>
      ) : trivia ? (
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-xl italic text-lg leading-relaxed border-l-4 border-blue-500">
            "{trivia.clue}"
          </div>
          
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Tu respuesta (ej: CPP, NOR...)"
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleCheck}
              className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-500 transition-colors"
            >
              Validar
            </button>
          </div>

          {feedback && (
            <div className={`p-4 rounded-lg text-sm animate-fade-in ${feedback.isCorrect ? 'bg-emerald-900/50 text-emerald-100 border border-emerald-500' : 'bg-rose-900/50 text-rose-100 border border-rose-500'}`}>
              {feedback.text}
            </div>
          )}

          <button 
            onClick={fetchNewTrivia}
            className="w-full text-center text-xs text-slate-400 hover:text-white underline mt-2"
          >
            Siguiente Enigma
          </button>
        </div>
      ) : null}
    </div>
  );
};

const Minigames: React.FC = () => {
  return (
    <div className="p-6 bg-slate-100 overflow-y-auto h-full pb-20">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Desafíos del Corredor</h2>
        <p className="text-slate-600">Pon a prueba tu agilidad mental y conocimientos técnicos.</p>
      </header>

      <OrderingGame />
      <EnigmaGame />

      <div className="mt-8 text-center text-xs text-slate-400">
        Recordatorio: Usa reportes de Infocorp y súbelos a ChatGPT para análisis instantáneo en la vida real.
      </div>
    </div>
  );
};

export default Minigames;
