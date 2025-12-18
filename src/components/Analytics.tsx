
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, Users, Target, Rocket } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 1200 },
  { name: 'Jun', value: 3400 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const Analytics: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-2 duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Pulse Check</h1>
        <p className="text-gray-400">Deep-dive into your content ecosystem's velocity.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        <div className="lg:col-span-3 glass p-10 rounded-[40px]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold">Audience Growth Peak</h2>
              <p className="text-sm text-gray-500">Historical performance vs AI-Agent deployments</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-xs font-bold">
              <TrendingUp size={14} /> +340%
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{backgroundColor: '#111827', border: 'none', borderRadius: '12px'}}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 5 ? '#3b82f6' : '#1f2937'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-3xl">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">New Subs</p>
            <h3 className="text-3xl font-bold">4,129</h3>
            <p className="text-xs text-blue-400 mt-2 font-medium">85% via AI Clips</p>
          </div>
          <div className="glass p-6 rounded-3xl">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">CTR Peak</p>
            <h3 className="text-3xl font-bold">14.2%</h3>
            <p className="text-xs text-orange-400 mt-2 font-medium">PRO Visual Agent active</p>
          </div>
          <div className="glass p-6 rounded-3xl flex flex-col justify-center items-center text-center">
            <Rocket className="text-purple-500 mb-4 animate-bounce" size={32} />
            <p className="text-sm font-bold">Velocity Score: 9.2</p>
            <p className="text-xs text-gray-500 mt-1">Ready for next deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
