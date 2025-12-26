
import React, { useState } from 'react';
import { Screen } from './types';
import Navigation from './components/Navigation';
import StepFlowchart from './components/StepFlowchart';
import ThreePillars from './components/ThreePillars';
import TheoryBlocks from './components/TheoryBlocks';
import Minigames from './components/Minigames';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Flowchart);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Flowchart:
        return <StepFlowchart />;
      case Screen.Pillars:
        return <ThreePillars />;
      case Screen.Theory:
        return <TheoryBlocks />;
      case Screen.Games:
        return <Minigames />;
      default:
        return <StepFlowchart />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-white text-slate-900 md:flex-row">
      <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      
      {/* Añadido pt-14 para móviles para que el fixed header no tape el contenido */}
      <main className="flex-1 overflow-hidden relative md:mt-12 pt-14 md:pt-0">
        {renderScreen()}
      </main>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white px-4 py-3 flex items-center justify-between z-40 shadow-md">
        <h1 className="font-bold text-xs tracking-widest uppercase">Experto Hipotecario</h1>
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default App;
