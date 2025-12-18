
import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Loader2, RefreshCw, Copy, Check } from 'lucide-react';
import { generateProImagePrompt, generateProImage } from '../services/geminiService';

const VisualsAgent: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [vibe, setVibe] = useState('Cinematic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [expandedPrompt, setExpandedPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!subject) return;
    setIsGenerating(true);
    setExpandedPrompt('');
    setImageUrl(null);

    try {
      const proPrompt = await generateProImagePrompt(subject, vibe);
      setExpandedPrompt(proPrompt);
      const url = await generateProImage(proPrompt);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(expandedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Visual Engine</h1>
        <p className="text-gray-400 italic">"The Prompt Secret Trick That Finally Kills The AI Look"</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="glass p-8 rounded-[40px] shadow-2xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Camera className="text-blue-500" />
              Technical Master Generator
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="e.g. Man vibecoding in a dark studio..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Art Direction</label>
                <select 
                  className="w-full bg-[#111827] border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-300"
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                >
                  <option>Cinematic Hero</option>
                  <option>Industrial Minimalism</option>
                  <option>Noir Photography</option>
                  <option>High-Intensity Drama</option>
                  <option>Professional YouTube Thumbnail</option>
                </select>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !subject}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                  isGenerating ? 'bg-gray-800 text-gray-500' : 'bg-blue-600 hover:bg-blue-500 text-white accent-glow'
                }`}
              >
                {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles />}
                {isGenerating ? 'Infecting Meta Tokens...' : 'Generate PRO Prompt'}
              </button>
            </div>
          </div>

          {expandedPrompt && (
            <div className="glass p-6 rounded-[32px] border border-blue-500/20 bg-blue-500/5 animate-in slide-in-from-left-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest">Expanded Meta-Prompt</h3>
                <button onClick={copyToClipboard} className="p-2 hover:bg-white/5 rounded-lg transition-all flex items-center gap-2 text-xs text-gray-400">
                  {isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-gray-300 font-mono leading-relaxed bg-black/30 p-4 rounded-xl">
                {expandedPrompt}
              </p>
            </div>
          )}
        </div>

        <div className="relative h-[600px] group">
          {isGenerating ? (
            <div className="absolute inset-0 glass rounded-[40px] flex flex-col items-center justify-center gap-4">
              <RefreshCw size={48} className="text-blue-500 animate-spin" />
              <p className="text-gray-400 font-medium">Bypassing AI Filters...</p>
            </div>
          ) : imageUrl ? (
            <div className="h-full w-full glass rounded-[40px] overflow-hidden p-2 shadow-2xl relative">
              <img src={imageUrl} className="w-full h-full object-cover rounded-[36px]" alt="Generated result" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-blue-400 uppercase">Status</p>
                    <p className="text-sm font-medium">Click-Through Rate Optimized</p>
                  </div>
                  <button className="bg-white text-black font-bold py-2 px-4 rounded-xl text-xs">Download 4K</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full w-full glass rounded-[40px] flex flex-col items-center justify-center gap-6 border-dashed border-2 border-white/10 opacity-50">
              <ImageIcon size={64} className="text-gray-600" />
              <div className="text-center">
                <p className="text-xl font-bold text-gray-500">Visual Engine Idle</p>
                <p className="text-gray-600 text-sm">Waiting for PRO Prompt Injection</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualsAgent;
