import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Scissors, Upload, Video, Wand2 } from "lucide-react";
import { useState } from "react";

export default function ClippingTool() {
  const [url, setUrl] = useState("");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const handleClip = async () => {
    if (!url) return;
    setProcessing(true);
    setLogs(["Initializing FFmpeg...", "Connecting to OpenAI Whisper..."]);
    
    // Simulate the clipping pipeline
    const steps = [
      "Downloading video via yt-dlp...",
      "Extracting audio track...",
      "Transcribing with Whisper (timestamping)...",
      "Analyzing sentiment for 'high energy' moments...",
      "Found 3 viral clips. Cropping to 9:16 (4K)...",
      "Rendering final assets (ProRes 4444)..."
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 1500));
      setLogs(prev => [...prev, steps[i]]);
      setProgress(((i + 1) / steps.length) * 100);
    }

    setProcessing(false);
  };

  return (
    <div className="flex h-screen bg-[#05050a] text-white overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Scissors className="h-6 w-6 text-blue-500" />
            Agentic Clipping System
          </h1>
          <p className="text-gray-400">
            Automated long-form to short-form repurposing using FFmpeg & Whisper.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-[#0f1016] border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Source Material</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>YouTube URL</Label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="https://youtube.com/watch?v=..." 
                    className="bg-[#1a1b26] border-white/10 text-white"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button onClick={handleClip} disabled={processing || !url} className="bg-blue-600 hover:bg-blue-500">
                    {processing ? <Wand2 className="h-4 w-4 animate-spin" /> : "Auto-Clip"}
                  </Button>
                </div>
              </div>

              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500/50 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mb-2" />
                <span className="text-sm">Or upload raw video file (mp4, mov)</span>
              </div>
            </CardContent>
          </Card>

          {/* Processing Terminal */}
          <Card className="bg-[#0f1016] border-white/10 flex flex-col">
            <CardHeader>
              <CardTitle className="text-white flex justify-between items-center">
                <span>Processing Log</span>
                {processing && <span className="text-xs text-blue-400 animate-pulse">ACTIVE</span>}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-green-400 h-[300px] overflow-y-auto mb-4 border border-white/5">
                {logs.length === 0 ? (
                  <span className="text-gray-600">// Waiting for input...</span>
                ) : (
                  logs.map((log, i) => (
                    <div key={i} className="mb-1">&gt; {log}</div>
                  ))
                )}
              </div>
              {processing && <Progress value={progress} className="h-2" />}
            </CardContent>
          </Card>
        </div>

        {/* Results Grid */}
        {!processing && logs.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Generated Clips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[9/16] bg-[#1a1b26] rounded-lg border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="text-white font-bold">Viral Clip #{i}</div>
                    <div className="text-xs text-green-400 font-bold">Score: 9.{i}/10 (Viral)</div>
                    <div className="text-[10px] bg-blue-500 text-white px-1 rounded mt-1 w-fit">4K HDR</div>
                  </div>
                  <Video className="h-12 w-12 text-gray-600" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
