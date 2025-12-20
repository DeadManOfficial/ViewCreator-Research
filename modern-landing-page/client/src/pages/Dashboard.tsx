import { FlowCanvas } from "@/components/FlowCanvas";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 3) {
            setIsSimulating(false);
            return 3;
          }
          return prev + 1;
        });
      }, 2000); // 2 seconds per step
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  const startSimulation = () => {
    setActiveStep(0);
    setIsSimulating(true);
  };

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
            onClick={startSimulation}
            disabled={isSimulating}
          >
            {isSimulating ? 'Agent Running...' : 'Create Agent'}
          </Button>
        </div>

        {/* Main Canvas */}
        <FlowCanvas activeStep={activeStep} />

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
