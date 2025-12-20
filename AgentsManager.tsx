
import React, { useState } from 'react';
import { Bot, User, Brain, MessageSquare, Plus, Power, ShieldCheck, Settings } from 'lucide-react';

const AgentsManager: React.FC = () => {
  const [agents, setAgents] = useState([
    { id: 1, name: 'Sarah (Clipping)', status: 'active', role: 'Viral Hook Specialist', efficiency: '94%' },
    { id: 2, name: 'Marcus (Visuals)', status: 'active', role: 'PRO Photography Architect', efficiency: '88%' },
    { id: 3, name: 'SEO Core', status: 'paused', role: 'Algorithm Researcher', efficiency: 'N/A' },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Agent Factory</h1>
          <p className="text-gray-400">Configure your autonomous 24/7 workforce identity.</p>
        </div>
        <button className="glass px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-all font-bold">
          <Plus size={20} />
          Hire New Agent
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {agents.map((agent) => (
          <div key={agent.id} className={`glass p-6 rounded-[32px] border transition-all ${agent.status === 'active' ? 'border-blue-500/20' : 'border-white/5 opacity-60'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${agent.status === 'active' ? 'bg-blue-600 text-white accent-glow' : 'bg-gray-800 text-gray-500'}`}>
                <Bot size={32} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><Settings size={18} /></button>
                <button className={`p-2 rounded-xl transition-colors ${agent.status === 'active' ? 'text-green-400 hover:bg-green-400/10' : 'text-gray-500'}`}>
                  <Power size={18} />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
            <p className="text-sm text-gray-400 mb-6 font-medium tracking-tight uppercase">{agent.role}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Efficiency</p>
                <p className="text-sm font-bold text-blue-400">{agent.efficiency}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-500 uppercase">State</p>
                <p className={`text-sm font-bold uppercase tracking-widest ${agent.status === 'active' ? 'text-green-400' : 'text-gray-500'}`}>{agent.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
          <Brain size={240} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-3xl font-bold">Brand DNA Config</h2>
          </div>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Upload your past 10 posts or your website URL. Our agents will ingest your unique writing style, 
            pacing, and emoji usage to ensure every output feels like it came from you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 py-5 px-6 rounded-2xl flex flex-col gap-2 text-left transition-all">
              <span className="font-bold">Analyze Website</span>
              <span className="text-xs text-gray-500">Crawl brand guidelines & voice.</span>
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 py-5 px-6 rounded-2xl flex flex-col gap-2 text-left transition-all">
              <span className="font-bold">Social Ingestion</span>
              <span className="text-xs text-gray-500">Connect X/YouTube historical data.</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsManager;
