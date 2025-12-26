
import React from 'react';

const TheoryBlocks: React.FC = () => {
  const theories = [
    {
      title: "Bloqueo Registral",
      subtitle: "El Sello de Seguridad",
      content: "Es una anotación preventiva en la partida registral de la propiedad que impide que se inscriba cualquier otra transferencia o gravamen mientras se gestiona el desembolso. Es el paso final (Paso 9) y para el corredor inmobiliario representa la garantía de que el trato está cerrado y la comisión asegurada.",
      color: "border-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Estudio de Títulos",
      subtitle: "Protección Legal",
      content: "Realizado por la notaría y el banco, este proceso revisa la historia legal de la propiedad para asegurar que no existan vicios ocultos o riesgos que invaliden la garantía hipotecaria. Tip experto: Un estudio preventivo ayuda al comprador a no perder su cuota inicial si el banco decide que la propiedad no es apta.",
      color: "border-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Riesgo del Banquero",
      subtitle: "El Lado Humano",
      content: "¿Por qué el banco es tan estricto? Porque el puesto del funcionario bancario está en juego. Si un cliente no paga, afecta los indicadores del banquero. Por ello, presentar expedientes pre-calificados bajo los 3 pilares genera confianza y agiliza las aprobaciones futuras.",
      color: "border-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <div className="p-6 bg-white overflow-y-auto h-full pb-20">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Conceptos Críticos</h2>
      <div className="space-y-8">
        {theories.map((theory, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border-l-8 ${theory.color} ${theory.bg} shadow-sm transition-transform hover:scale-[1.01]`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-900">{theory.title}</h3>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Concepto {idx + 1}</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-4 uppercase">{theory.subtitle}</p>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              {theory.content}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-4 border border-slate-200 rounded-xl bg-slate-50 italic text-slate-500 text-sm">
        "El conocimiento técnico separa al simple vendedor del verdadero asesor patrimonial."
      </div>
    </div>
  );
};

export default TheoryBlocks;
