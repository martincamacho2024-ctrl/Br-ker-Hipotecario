
import React, { useState } from 'react';
import { STEPS } from '../constants';
import { Step } from '../types';

// Moved StepItem outside of StepFlowchart to resolve TypeScript errors regarding the 'key' prop.
// Defining sub-components outside the main component's render cycle is a best practice for performance and type safety.
interface StepItemProps {
  step: Step;
  activeStep: number | null;
  onToggle: (id: number) => void;
}

const StepItem: React.FC<StepItemProps> = ({ step, activeStep, onToggle }) => {
  const isActive = activeStep === step.id;
  const isPhase1 = step.phase === 1;

  const handleClick = () => {
    onToggle(step.id);
  };

  return (
    <div className="relative pl-8 pb-8 group">
      {/* Línea conectora */}
      {step.id !== 10 && (
        <div className={`absolute left-[11px] top-6 bottom-0 w-0.5 ${
          step.id === 5 ? 'border-l-2 border-dashed border-slate-300' : 
          isPhase1 ? 'bg-blue-200' : 'bg-emerald-200'
        }`}></div>
      )}
      
      {/* Punto del paso */}
      <button
        onClick={handleClick}
        className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
          isActive 
            ? (isPhase1 ? 'bg-blue-600 border-blue-600 scale-125 shadow-lg shadow-blue-200' : 'bg-emerald-600 border-emerald-600 scale-125 shadow-lg shadow-emerald-200')
            : (isPhase1 ? 'bg-white border-blue-400 text-blue-600' : 'bg-white border-emerald-400 text-emerald-600')
        }`}
      >
        <span className={`text-[10px] font-bold ${isActive ? 'text-white' : ''}`}>
          {step.id}
        </span>
      </button>

      {/* Contenido del paso */}
      <div 
        onClick={handleClick}
        className={`cursor-pointer p-3 rounded-xl transition-all ${
          isActive 
            ? (isPhase1 ? 'bg-blue-50 border border-blue-100' : 'bg-emerald-50 border border-emerald-100') 
            : 'hover:bg-slate-50'
        }`}
      >
        <h4 className={`font-bold text-sm ${isActive ? (isPhase1 ? 'text-blue-800' : 'text-emerald-800') : 'text-slate-700'}`}>
          {step.title}
        </h4>
        
        {isActive && (
          <p className="mt-2 text-xs text-slate-600 leading-relaxed animate-fade-in">
            {step.description}
          </p>
        )}
      </div>
    </div>
  );
};

const StepFlowchart: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Agrupamos pasos por fase
  const phase1 = STEPS.filter(s => s.phase === 1);
  const phase2 = STEPS.filter(s => s.phase === 2);

  const handleToggle = (id: number) => {
    setActiveStep(prev => prev === id ? null : id);
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Cabecera Fija */}
      <div className="p-4 border-b border-slate-100 bg-white z-20 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">El Camino Hipotecario</h2>
        <div className="flex items-center space-x-4 mt-1">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Aprobación</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Desembolso</span>
          </div>
        </div>
      </div>

      {/* Timeline Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-md mx-auto">
          
          {/* FASE 1 */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black rounded uppercase tracking-wider">Fase 1</span>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aprobación</h3>
            </div>
            {phase1.map(step => (
              <StepItem 
                key={step.id} 
                step={step} 
                activeStep={activeStep} 
                onToggle={handleToggle} 
              />
            ))}
          </div>

          {/* Divisor de Fase */}
          <div className="relative py-4 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative bg-white px-4">
              <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* FASE 2 */}
          <div className="mb-24 pb-8">
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded uppercase tracking-wider">Fase 2</span>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Desembolso</h3>
            </div>
            {phase2.map(step => (
              <StepItem 
                key={step.id} 
                step={step} 
                activeStep={activeStep} 
                onToggle={handleToggle} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer informativo */}
      <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          Toca los pasos para ver detalles
        </p>
      </div>
    </div>
  );
};

export default StepFlowchart;
