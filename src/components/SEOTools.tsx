
import React, { useState } from 'react';
import { Search, Youtube, Twitter, FileText, Sparkles, Loader2, Check } from 'lucide-react';
import { generateSEOMetadata } from '../services/geminiService';

const SEOTools: React.FC = () => {
  const [title, setTitle] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [seoResult, setSeoResult] = useState<any>(null);

  const handleGenerate = async () => {
    if (!title) return;
    setIsProcessing(true);
    try {
      const result = await generateSEOMetadata(title, transcript || "Auto-detecting transcript from context...");
      setSeoResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Channel SEO Agent</h1>
        <p className="text-gray-400">Reverse-engineer algorithms for YouTube and X.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="glass p-8 rounded-[40px] shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-red-500" />
              <h2 className="text-xl font-bold">Content Context</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Video Title</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Transcript Snippet (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isProcessing || !title}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                  isProcessing ? 'bg-gray-800 text-gray-500' : 'bg-red-600 hover:bg-red-500 text-white accent-glow'
                }`}
              >
                {isProcessing ? <Loader2 className="animate-spin" /> : <Sparkles />}
                Generate Viral Meta
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {!seoResult ? (
            <div className="h-full glass rounded-[40px] flex flex-col items-center justify-center p-12 text-center opacity-40">
              <Search size={64} className="mb-4 text-gray-600" />
              <p className="text-xl font-bold text-gray-500">Awaiting Metadata</p>
              <p className="text-sm text-gray-600">Agents are ready to analyze your title hook scores.</p>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6">
              <div className="glass p-6 rounded-[32px]">
                <div className="flex items-center gap-3 mb-4">
                  <Youtube className="text-red-500" />
                  <h3 className="font-bold">YouTube SEO</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Optimized Description</p>
                    <p className="text-sm text-gray-300 line-clamp-3 bg-black/20 p-3 rounded-xl">{seoResult.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {seoResult.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-lg">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-[32px]">
                <div className="flex items-center gap-3 mb-4">
                  <Twitter className="text-blue-400" />
                  <h3 className="font-bold">Viral X Thread</h3>
                </div>
                <div className="space-y-3">
                  {seoResult.twitterThread.map((tweet: string, i: number) => (
                    <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-xl text-sm relative group">
                      <span className="absolute -left-2 -top-2 w-6 h-6 bg-blue-500 text-[10px] flex items-center justify-center rounded-full font-bold">{i+1}</span>
                      {tweet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SEOTools;
