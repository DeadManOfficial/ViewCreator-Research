import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Image as ImageIcon, Layout, Sparkles, Wand2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Create() {
  const [mode, setMode] = useState<'text' | 'image' | 'video'>('text');
  const [prompt, setPrompt] = useState("");
  const [activeTab, setActiveTab] = useState<'canvas' | 'history'>('canvas');
  const [history, setHistory] = useState<{id: string, name: string, updatedAt: number}[]>([]);
  const [_, setLocation] = useLocation();

  // Load history when tab changes
  const loadHistory = () => {
    const indexJson = localStorage.getItem('viewcreator_projects_index');
    if (indexJson) {
      setHistory(JSON.parse(indexJson).sort((a: any, b: any) => b.updatedAt - a.updatedAt));
    }
  };

  const handleGenerate = () => {
    if (!prompt) return;
    setLocation(`/dashboard?start=true&prompt=${encodeURIComponent(prompt)}`);
  };

  return (
    <div className="flex h-screen bg-[#05050a] text-white overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex">
        {/* Configuration Panel (Left) */}
        <div className="w-[400px] border-r border-white/5 bg-[#0f1016] p-6 flex flex-col gap-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="h-8 w-8 rounded bg-purple-600 flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-white" />
              </div>
              Playground
            </div>
            <div className="flex bg-[#1a1b26] rounded-lg p-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`h-7 px-3 rounded-md text-xs ${mode === 'image' ? 'bg-[#2e2f3e] text-white' : 'text-gray-400'}`}
                onClick={() => setMode('image')}
              >
                Image
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`h-7 px-3 rounded-md text-xs ${mode === 'video' ? 'bg-[#2e2f3e] text-white' : 'text-gray-400'}`}
                onClick={() => setMode('video')}
              >
                Video
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">What would you like to do?</Label>
            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-[#1a1b26] border-blue-500/50 p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#242536] transition-colors">
                <Wand2 className="h-6 w-6 text-blue-500" />
                <span className="text-xs font-medium">Create from Text</span>
              </Card>
              <Card className="bg-[#1a1b26] border-white/5 p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#242536] transition-colors">
                <ImageIcon className="h-6 w-6 text-gray-400" />
                <span className="text-xs font-medium text-gray-400">Transform Image</span>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quality Level</Label>
            <div className="space-y-3">
              <Card className="bg-[#1a1b26] border-blue-500/50 p-4 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">FREE</div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 mt-1">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-2">Premium (God Mode) <span className="text-amber-400 text-[10px]">★ Best</span></div>
                    <p className="text-xs text-gray-400 mt-1">Maximum 4K quality, unlimited usage.</p>
                    <div className="mt-2 text-xs font-bold text-blue-400">0 credits (Free)</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Aspect Ratio</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="bg-[#1a1b26] border-blue-500 text-blue-500 hover:bg-[#1a1b26] hover:text-blue-500 flex flex-col h-auto py-3 gap-2">
                <div className="h-6 w-6 border-2 border-current rounded-sm"></div>
                <span className="text-[10px]">Square</span>
              </Button>
              <Button variant="outline" className="bg-[#1a1b26] border-white/5 text-gray-400 hover:bg-[#242536] hover:text-white flex flex-col h-auto py-3 gap-2">
                <div className="h-8 w-5 border-2 border-current rounded-sm"></div>
                <span className="text-[10px]">Portrait</span>
              </Button>
              <Button variant="outline" className="bg-[#1a1b26] border-white/5 text-gray-400 hover:bg-[#242536] hover:text-white flex flex-col h-auto py-3 gap-2">
                <div className="h-5 w-8 border-2 border-current rounded-sm"></div>
                <span className="text-[10px]">Landscape</span>
              </Button>
            </div>
            <Select defaultValue="1:1">
              <SelectTrigger className="bg-[#1a1b26] border-white/10">
                <SelectValue placeholder="Select ratio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1:1">1:1 (Square)</SelectItem>
                <SelectItem value="9:16">9:16 (Portrait)</SelectItem>
                <SelectItem value="16:9">16:9 (Landscape)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Content Description</Label>
            <div className="bg-[#1a1b26] border border-white/10 rounded-lg p-3">
              <Textarea 
                placeholder="Describe what you want to create..." 
                className="bg-transparent border-none resize-none min-h-[100px] focus-visible:ring-0 p-0 text-sm"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="mt-2 text-[10px] text-gray-500">
                Be specific about your content goals and target audience for better results
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            onClick={handleGenerate}
            disabled={!prompt}
          >
            Generate <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Preview Area (Right) */}
        <div className="flex-1 bg-[#05050a] flex flex-col">
          <div className="h-14 border-b border-white/5 flex items-center px-6 gap-4">
            <Button 
              variant="ghost" 
              className={`${activeTab === 'canvas' ? 'text-white border-b-2 border-blue-500' : 'text-gray-500 hover:text-white'} rounded-none h-14 px-2 hover:bg-transparent transition-colors`}
              onClick={() => setActiveTab('canvas')}
            >
              <Layout className="mr-2 h-4 w-4" /> Canvas
            </Button>
            <Button 
              variant="ghost" 
              className={`${activeTab === 'history' ? 'text-white border-b-2 border-blue-500' : 'text-gray-500 hover:text-white'} rounded-none h-14 px-2 hover:bg-transparent transition-colors`}
              onClick={() => { setActiveTab('history'); loadHistory(); }}
            >
              <Clock className="mr-2 h-4 w-4" /> History
            </Button>
          </div>
          
          <div className="flex-1 p-10 overflow-y-auto">
            {activeTab === 'canvas' ? (
              <div className="h-full flex items-center justify-center">
                <div className="border-2 border-dashed border-white/10 rounded-2xl w-full max-w-2xl aspect-square flex flex-col items-center justify-center text-center p-10">
                  <div className="h-16 w-16 rounded-2xl bg-[#1a1b26] flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to Create?</h3>
                  <p className="text-gray-500 max-w-md">
                    Select a model from the sidebar, adjust your settings, and describe what you want to create to get started.
                  </p>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {history.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 py-20">
                    No history found. Create your first agent!
                  </div>
                ) : (
                  history.map((project) => (
                    <Card 
                      key={project.id} 
                      className="bg-[#1a1b26] border-white/5 p-4 cursor-pointer hover:border-blue-500/50 transition-colors group"
                      onClick={() => setLocation(`/dashboard?id=${project.id}`)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <Wand2 className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">
                          {new Date(project.updatedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-bold text-white mb-1 truncate">{project.name}</h4>
                      <p className="text-xs text-gray-400">Click to resume workflow</p>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
