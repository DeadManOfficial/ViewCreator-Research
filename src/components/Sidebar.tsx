
import React from 'react';
import { 
  LayoutDashboard, 
  Scissors, 
  Image as ImageIcon, 
  Search, 
  Bot, 
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isOpen, toggle }) => {
  const navItems = [
    { type: ViewType.DASHBOARD, label: 'Control Center', icon: LayoutDashboard },
    { type: ViewType.CLIPPING, label: 'Clipping Agent', icon: Scissors },
    { type: ViewType.VISUALS, label: 'Visual Engine', icon: ImageIcon },
    { type: ViewType.SEO, label: 'Channel SEO', icon: Search },
    { type: ViewType.AGENTS, label: 'Agent Factory', icon: Bot },
    { type: ViewType.ANALYTICS, label: 'Pulse Check', icon: BarChart3 },
  ];

  return (
    <aside className={`${isOpen ? 'w-72' : 'w-20'} h-full transition-all duration-300 ease-in-out border-r border-white/10 glass flex flex-col z-50`}>
      <div className="p-6 flex items-center justify-between mb-8">
        <div className={`flex items-center gap-3 ${!isOpen && 'hidden'}`}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center accent-glow">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">ViewCreator</span>
        </div>
        <button onClick={toggle} className="p-1 hover:bg-white/5 rounded-lg transition-colors">
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} className="mx-auto" />}
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.type;
          return (
            <button
              key={item.type}
              onClick={() => onNavigate(item.type)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-100'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              {isOpen && <span className="font-medium">{item.label}</span>}
              {isActive && isOpen && <div className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />}
            </button>
          );
        })}
      </nav>

      <div className="p-6">
        <div className={`glass p-4 rounded-2xl border border-white/5 ${!isOpen && 'hidden'}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Agents Live</span>
          </div>
          <p className="text-sm text-gray-100 font-medium">3 Active Workers</p>
          <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-blue-500" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
