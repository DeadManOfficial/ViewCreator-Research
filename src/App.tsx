
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ClippingTool from './components/ClippingTool';
import VisualsAgent from './components/VisualsAgent';
import SEOTools from './components/SEOTools';
import AgentsManager from './components/AgentsManager';
import Analytics from './components/Analytics';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.CLIPPING:
        return <ClippingTool />;
      case ViewType.VISUALS:
        return <VisualsAgent />;
      case ViewType.SEO:
        return <SEOTools />;
      case ViewType.AGENTS:
        return <AgentsManager />;
      case ViewType.ANALYTICS:
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#030712]">
      <Sidebar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 overflow-y-auto relative p-6 lg:p-10">
        <div className="max-w-7xl mx-auto w-full">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
