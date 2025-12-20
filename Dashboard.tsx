import { FlowCanvas } from "@/components/FlowCanvas";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { AgentOrchestrator, ProjectState, AgentType } from "@/lib/agents";
import { AgentConfigModal } from "@/components/AgentConfigModal";
import { Plus, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const [location, setLocation] = useLocation();
  const [projectState, setProjectState] = useState<ProjectState | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const orchestratorRef = useRef<AgentOrchestrator | null>(null);

  // Check for auto-start or load existing project
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const autoStart = params.get('start');
    const prompt = params.get('prompt');
    const projectId = params.get('id');

    if (!orchestratorRef.current) {
      let orchestrator: AgentOrchestrator;

      try {
        if (projectId) {
          // Load existing project
          orchestrator = new AgentOrchestrator('', projectId);
        } else if (autoStart === 'true' && prompt) {
          // Create new project
          orchestrator = new AgentOrchestrator(prompt);
          // Update URL to include the new ID without reloading
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.set('id', orchestrator['state'].id);
          window.history.pushState({}, '', newUrl);
        } else {
          return; // No project to load or create
        }

        orchestratorRef.current = orchestrator;
        
        orchestrator.subscribe((state) => {
          setProjectState(state);
        });

        if (autoStart === 'true') {
          orchestrator.startWorkflow();
        }
      } catch (e) {
        console.error("Failed to initialize orchestrator:", e);
        // Handle error (e.g., project not found)
      }
    }
  }, []);

  const activeStep = projectState ? projectState.currentStep : 0;
  
  // Get the currently active agent to show its logs
  const activeAgent = projectState?.agents.find(a => a.status === 'working') || projectState?.agents[projectState.agents.length - 1];
  const lastMessage = activeAgent?.logs[activeAgent.logs.length - 1];

  return (
    <div className="flex h-screen bg-[#05050a] text-white overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col relative">
        {/* Top Bar */}
        <div className="absolute top-4 right-4 z-50 flex gap-3">
          <Button variant="outline" className="bg-[#0f1016] border-white/10 hover:bg-white/5 text-gray-300">
            Save as Draft
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            onClick={() => setIsConfigOpen(true)}
          >
            Create Agent
          </Button>
        </div>

        {/* Agent Status Overlay */}
        {projectState && activeAgent && (
          <div className="absolute top-4 left-8 z-50 bg-[#0f1016]/90 backdrop-blur border border-blue-500/30 rounded-lg p-4 w-80 shadow-2xl">
            <div className="flex items-center gap-2 mb-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
              <Terminal className="h-3 w-3" />
              Agent Orchestrator
            </div>
            <div className="font-medium text-sm text-white mb-1">
              Agent: {activeAgent.name} ({activeAgent.type.toUpperCase()})
            </div>
            <div className="text-xs text-gray-400 font-mono h-20 overflow-y-auto flex flex-col-reverse">
              {activeAgent.logs.slice().reverse().map((msg, i) => (
                <div key={i} className="mb-1">&gt; {msg}</div>
              ))}
            </div>
          </div>
        )}

        {/* Main Canvas */}
        <FlowCanvas activeStep={activeStep} />

        <AgentConfigModal 
          open={isConfigOpen} 
          onOpenChange={setIsConfigOpen} 
          orchestrator={orchestratorRef.current}
        />

        {/* Bottom Actions */}
        <div className="absolute bottom-8 right-8 z-50 flex items-center gap-4">
          <div className="bg-[#0f1016] rounded-full px-4 py-2 border border-white/10 flex items-center gap-4">
            <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full hover:bg-white/10">-</Button>
            <span className="text-sm font-medium">100%</span>
            <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full hover:bg-white/10">+</Button>
          </div>
          
          <Button size="icon" className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg">
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
