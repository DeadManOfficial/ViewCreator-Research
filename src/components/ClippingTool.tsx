
import React, { useState } from 'react';
import { Scissors, Video, Link as LinkIcon, Search, Loader2, Sparkles, Star } from 'lucide-react';
import { analyzeContentForHooks } from '../services/geminiService';
import { ViralHook } from '../types';

const ClippingTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [hooks, setHooks] = useState<ViralHook[]>([]);

  const handleProcess = async () => {
    if (!url) return;
    setIsProcessing(true);
    
    // Simulate Video -> Transcription phase
    // In a real app, this would call a backend with FFmpeg and Whisper
    const mockTranscript = "Alright guys, let me tell you the absolute secret to growing your business with AI workflows. Most people think you just need a better model, but that's wrong. You need modular agents. I've been vibe coding for 10 hours a day and the results are insane. I've seen 400% engagement spikes just by switching to a human-in-the-loop system. Don't be the guy who gets left in the mud while everyone else is using the magic juice.";
    
    try {
      const results = await analyzeContentForHooks(mockTranscript);
      setHooks(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Clipping Agent</h1>
        <p className="text-gray-400">Extract high-intensity moments from long-form video automatically.</p>
      </header>

      <div className="glass p-8 rounded-[40px] mb-10 shadow-2xl">
        <div className="relative mb-6">
          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Paste YouTube or Loom URL..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button 
          onClick={handleProcess}
          disabled={isProcessing || !url}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
            isProcessing || !url ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white accent-glow'
          }`}
        >
          {isProcessing ? (
            <><Loader2 size={24} className="animate-spin" /> Analyzing Viral Potential...</>
          ) : (
            <><Sparkles size={24} /> Extract Hooks</>
          )}
        </button>
      </div>

      {isProcessing && (
        <div className="space-y-4">
          <div className="glass p-6 rounded-3xl animate-pulse flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded-full w-1/4" />
              <div className="h-3 bg-white/5 rounded-full w-2/3" />
            </div>
          </div>
          <div className="glass p-6 rounded-3xl animate-pulse flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded-full w-1/4" />
              <div className="h-3 bg-white/5 rounded-full w-2/3" />
            </div>
          </div>
        </div>
      )}

      {hooks.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 px-2">
            <Star size={24} className="text-yellow-500 fill-yellow-500" />
            Detected Viral Moments
          </h2>
          {hooks.map((hook, idx) => (
            <div key={idx} className="glass p-6 rounded-3xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-mono font-bold bg-blue-400/10 px-2 py-0.5 rounded uppercase text-xs">
                      {hook.startTime} - {hook.endTime}
                    </span>
                    <span className="text-green-400 font-bold text-xs uppercase tracking-widest">
                      Virality: {hook.viralityScore}/10
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                    "{hook.hookText}"
                  </h3>
                </div>
                <button className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl transition-colors">
                  <Scissors size={20} className="text-gray-400" />
                </button>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                <span className="font-semibold text-gray-300">Reason:</span> {hook.reason}
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-500 transition-colors">
                  Create Reel
                </button>
                <button className="bg-white/5 text-gray-300 font-bold py-2 px-6 rounded-xl hover:bg-white/10 transition-colors">
                  Ignore
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClippingTool;
