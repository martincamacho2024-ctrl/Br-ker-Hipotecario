
export enum Screen {
  Flowchart = 'FLOWCHART',
  Pillars = 'PILLARS',
  Theory = 'THEORY',
  Games = 'GAMES'
}

export interface Step {
  id: number;
  phase: 1 | 2;
  title: string;
  description: string;
}

export interface PillarInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface TriviaQuestion {
  clue: string;
  answer: string;
  explanation: string;
}
