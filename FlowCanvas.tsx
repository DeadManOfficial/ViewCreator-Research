import { motion } from "framer-motion";
import { Bot, FileText, Send, Video } from "lucide-react";

interface StepProps {
  icon: React.ElementType;
  label: string;
  status: 'pending' | 'active' | 'completed';
  delay?: number;
}

function FlowStep({ icon: Icon, label, status, delay = 0 }: StepProps) {
  return (
    <div className="flex flex-col items-center gap-3 relative z-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: status === 'active' ? 1.1 : 1, 
          opacity: status === 'pending' ? 0.5 : 1,
          borderColor: status === 'active' ? '#3b82f6' : status === 'completed' ? '#3b82f6' : '#334155'
        }}
        transition={{ duration: 0.5, delay }}
        className={`h-16 w-16 rounded-full bg-[#0f1016] border-2 flex items-center justify-center
          ${status === 'active' ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 
            status === 'completed' ? 'border-blue-500' : 'border-slate-700'}`}
      >
        <Icon className={`h-6 w-6 ${status === 'pending' ? 'text-slate-500' : 'text-white'}`} />
      </motion.div>
      <span className={`text-sm font-medium ${status === 'pending' ? 'text-slate-500' : 'text-white'}`}>
        {label}
      </span>
    </div>
  );
}

export function FlowCanvas({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex-1 bg-[#05050a] relative overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Connecting Line (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 300 400 C 400 400, 400 300, 500 300 C 600 300, 600 300, 700 300 C 800 300, 800 500, 900 500"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <motion.path
          d="M 300 400 C 400 400, 400 300, 500 300 C 600 300, 600 300, 700 300 C 800 300, 800 500, 900 500"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: activeStep / 3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Steps */}
      <div className="relative w-full max-w-4xl h-[400px]">
        <div className="absolute left-[270px] top-[370px]">
          <FlowStep icon={Bot} label="Start" status={activeStep >= 0 ? (activeStep === 0 ? 'active' : 'completed') : 'pending'} />
        </div>
        <div className="absolute left-[470px] top-[270px]">
          <FlowStep icon={FileText} label="Plan #1" status={activeStep >= 1 ? (activeStep === 1 ? 'active' : 'completed') : 'pending'} delay={0.2} />
        </div>
        <div className="absolute left-[670px] top-[270px]">
          <FlowStep icon={Video} label="Video #2" status={activeStep >= 2 ? (activeStep === 2 ? 'active' : 'completed') : 'pending'} delay={0.4} />
        </div>
        <div className="absolute left-[870px] top-[470px]">
          <FlowStep icon={Send} label="Publish #3" status={activeStep >= 3 ? (activeStep === 3 ? 'active' : 'completed') : 'pending'} delay={0.6} />
        </div>
      </div>
    </div>
  );
}
