
import { Step, PillarInfo } from './types';

export const STEPS: Step[] = [
  { id: 1, phase: 1, title: 'Vendedor', description: 'Propiedad saneada, libre de gravámenes y a precio de mercado.' },
  { id: 2, phase: 1, title: 'Comprador', description: 'Cliente cuyo perfil financiero se evalúa bajo los 3 pilares.' },
  { id: 3, phase: 1, title: 'Corredor', description: 'Intermediario que pre-califica al comprador para el banco.' },
  { id: 4, phase: 1, title: 'Mesa de Control', description: 'Arma el expediente completo antes del envío a riesgos.' },
  { id: 5, phase: 1, title: 'Analista de Riesgos', description: 'Aprueba o deniega el préstamo basado en la evaluación.' },
  { id: 6, phase: 2, title: 'Tasación', description: 'Valoración pagada por el comprador para confirmar el valor real.' },
  { id: 7, phase: 2, title: 'Minuta', description: 'Acuerdo de compraventa firmado. Pago de cuota inicial.' },
  { id: 8, phase: 2, title: 'Estudio de Títulos', description: 'Revisión notarial para protección legal y bancaria.' },
  { id: 9, phase: 2, title: 'Bloqueo Registral', description: 'Hito final. Asegura que el trato está hecho y la comisión firme.' },
  { id: 10, phase: 2, title: 'Desembolso', description: 'El banco libera los fondos. Escritura pública final.' },
];

export const PILLARS: PillarInfo[] = [
  {
    id: 'capacidad',
    title: 'Capacidad',
    subtitle: 'Ingresos',
    description: 'La habilidad del cliente para cubrir la nueva cuota mensual sin comprometer su estabilidad.',
    features: [
      'Continuidad de ingresos: Mínimo 2 años.',
      'DTI (Deuda/Ingreso): Estándar ≤ 50%.',
      'Acción: Reducir líneas de crédito no utilizadas para mejorar el ratio.'
    ]
  },
  {
    id: 'comportamiento',
    title: 'Comportamiento',
    subtitle: 'Historial',
    description: 'Disciplina de pago histórica reflejada en centrales de riesgo.',
    features: [
      'Categorías Infocorp: NOR, CPP, DEF, DUD, PER.',
      'Visibilidad: Registros negativos visibles por 5 años.',
      'IA: Uso de ChatGPT para análisis rápido de reportes PDF.'
    ]
  },
  {
    id: 'capital',
    title: 'Cuota Inicial',
    subtitle: 'Capital',
    description: 'El compromiso financiero inicial que reduce el riesgo del banco.',
    features: [
      'Primera Vivienda: Mínimo 10%.',
      'Segunda Vivienda: Mínimo 20%.',
      'Rol: Pilar clave de pre-calificación temprana.'
    ]
  }
];

export const INFOCORP_CATEGORIES = [
  { code: 'NOR', label: 'Normal', desc: 'Pagos puntuales.' },
  { code: 'CPP', label: 'Con Problemas Potenciales', desc: 'Retrasos menores.' },
  { code: 'DEF', label: 'Deficiente', desc: 'Retrasos significativos.' },
  { code: 'DUD', label: 'Dudoso', desc: 'Retrasos severos.' },
  { code: 'PER', label: 'Pérdida', desc: 'Deuda irrecuperable.' }
];
