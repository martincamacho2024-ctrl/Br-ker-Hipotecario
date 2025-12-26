
import React, { useState } from 'react';
import { PILLARS } from '../constants';
import { PillarInfo } from '../types';

const PillarCard: React.FC<{ pillar: PillarInfo }> = ({ pillar }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-80 perspective-1000 cursor-pointer mb-6"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-6 backface-hidden">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-blue-600">{pillar.title[0]}</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{pillar.title}</h3>
          <p className="text-blue-500 font-bold tracking-widest uppercase text-[10px] mt-1">{pillar.subtitle}</p>
          <div className="mt-6 w-12 h-1 bg-slate-100 rounded-full"></div>
          <p className="text-slate-400 text-center mt-4 text-xs font-medium">Toca para descubrir los requisitos</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-slate-900 text-white rounded-2xl shadow-xl p-8 backface-hidden rotate-y-180 flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-2 border-b border-slate-700 pb-2 text-blue-400">{pillar.title}</h4>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">{pillar.description}</p>
          <ul className="space-y-3">
            {pillar.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-sm text-slate-100 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ThreePillars: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 overflow-y-auto h-full pb-32">
      <header className="mb-10 text-center relative">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
          Fundamentos del Crédito
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
          Los 3 Pilares
        </h2>
        <div className="w-16 h-1.5 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-slate-500 mt-4 text-sm max-w-xs mx-auto leading-tight font-medium">
          La base del puente que sostiene la aprobación del crédito hipotecario.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PILLARS.map(pillar => (
          <PillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-xl max-w-5xl mx-auto">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight italic">Metáfora del Puente</h3>
        </div>
        <p className="text-blue-50 italic leading-relaxed font-medium">
          "Si la columna de la 'Capacidad' es débil o el 'Comportamiento' tiene grietas, el puente no sostendrá el peso del préstamo, sin importar cuán hermosa sea la casa."
        </p>
      </div>
    </div>
  );
};

export default ThreePillars;
