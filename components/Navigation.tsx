
import React from 'react';
import { Screen } from '../types';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: Screen.Flowchart, label: 'Proceso' },
    { id: Screen.Pillars, label: '3 Pilares' },
    { id: Screen.Theory, label: 'Teoría' },
    { id: Screen.Games, label: 'Juegos' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 flex justify-around items-center z-50 md:top-0 md:bottom-auto md:bg-slate-900 md:text-white md:border-none">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
            currentScreen === item.id 
              ? 'text-blue-600 bg-blue-50 md:bg-blue-700 md:text-white' 
              : 'text-slate-500 hover:text-slate-800 md:text-slate-300 md:hover:text-white'
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-wider">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
