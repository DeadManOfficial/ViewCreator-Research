
import React from 'react';
import { 
  Play, 
  MoreVertical, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', views: 4000, engagement: 2400 },
  { name: 'Tue', views: 3000, engagement: 1398 },
  { name: 'Wed', views: 2000, engagement: 9800 },
  { name: 'Thu', views: 2780, engagement: 3908 },
  { name: 'Fri', views: 1890, engagement: 4800 },
  { name: 'Sat', views: 2390, engagement: 3800 },
  { name: 'Sun', views: 3490, engagement: 4300 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Control Center</h1>
          <p className="text-gray-400">Human-in-the-Loop review queue and performance metrics.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
          <Play size={18} fill="currentColor" />
          Deploy New Campaign
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Avg. Engagement</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">+342%</span>
            <span className="text-sm text-green-400 font-medium">Growth Peak</span>
          </div>
        </div>
        <div className="glass p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
              <Clock size={20} />
            </div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Time Saved</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">24.5h</span>
            <span className="text-sm text-gray-400 font-medium">this week</span>
          </div>
        </div>
        <div className="glass p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center">
              <MessageSquare size={20} />
            </div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Active Agents</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">3 Workers</span>
            <span className="text-sm text-gray-400 font-medium">running 24/7</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle2 className="text-blue-500" />
            Human-in-the-Loop Queue
          </h2>
          
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass p-5 rounded-3xl hover:bg-white/5 transition-colors border border-white/5 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-48 h-28 bg-gray-900 rounded-2xl overflow-hidden relative group shrink-0">
                <img src={`https://picsum.photos/seed/${i + 10}/300/200`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Preview" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={24} fill="white" className="text-white drop-shadow-md" />
                </div>
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded">Viral Hook</span>
                  <span className="text-gray-500 text-xs font-medium">Agent: Clipping #32</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight">Mastering AI Workflows for Solopreneurs</h3>
                <p className="text-sm text-gray-400 line-clamp-1">Auto-detected hook at 04:22. Intensity score: 9.4/10</p>
                <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                  <button className="text-blue-400 text-sm font-semibold hover:underline">Approve & Publish</button>
                  <button className="text-gray-400 text-sm font-semibold hover:text-white transition-colors">Edit Draft</button>
                </div>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-full shrink-0">
                <MoreVertical size={20} className="text-gray-500" />
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="text-green-500" />
            Viral Velocity
          </h2>
          <div className="glass p-6 rounded-3xl h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="views" stroke="#3b82f6" fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="glass p-6 rounded-3xl">
            <h3 className="font-semibold mb-4 text-gray-400 uppercase text-xs tracking-widest">Global Reach</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">YouTube</span>
                <span className="text-sm font-bold">12.4k views</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">TikTok</span>
                <span className="text-sm font-bold">45.1k views</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
