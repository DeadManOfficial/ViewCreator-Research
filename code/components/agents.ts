import { nanoid } from 'nanoid';

export type AgentStatus = 'idle' | 'working' | 'completed' | 'failed';

export interface AgentTask {
  id: string;
  type: 'research' | 'script' | 'visual' | 'publish';
  status: AgentStatus;
  output?: string;
  progress: number;
}

export interface ProjectState {
  id: string;
  name: string;
  status: 'planning' | 'researching' | 'scripting' | 'generating' | 'publishing' | 'completed';
  tasks: AgentTask[];
  currentStep: number;
}

// Simulation of Agent Responses
const MOCK_RESEARCH = [
  "Analyzing trending topics in AI...",
  "Found 3 viral hooks on Twitter...",
  "Cross-referencing with YouTube trends...",
  "Research complete. Identified key narrative angle."
];

const MOCK_SCRIPT = [
  "Drafting intro hook...",
  "Structuring main body points...",
  "Refining call-to-action...",
  "Script generated. Tone: Professional & Engaging."
];

const MOCK_VISUALS = [
  "Generating scene descriptions...",
  "Creating image prompts for DALL-E 3...",
  "Rendering scene 1 of 4...",
  "Visual assets ready for assembly."
];

export class AgentSimulator {
  private listeners: ((state: ProjectState) => void)[] = [];
  private state: ProjectState;

  constructor(initialName: string) {
    this.state = {
      id: nanoid(),
      name: initialName,
      status: 'planning',
      currentStep: 0,
      tasks: [
        { id: '1', type: 'research', status: 'idle', progress: 0 },
        { id: '2', type: 'script', status: 'idle', progress: 0 },
        { id: '3', type: 'visual', status: 'idle', progress: 0 },
        { id: '4', type: 'publish', status: 'idle', progress: 0 }
      ]
    };
  }

  subscribe(listener: (state: ProjectState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l({ ...this.state }));
  }

  async start() {
    // Step 1: Research
    this.state.status = 'researching';
    this.state.tasks[0].status = 'working';
    this.notify();
    
    await this.simulateTask(0, MOCK_RESEARCH);
    this.state.tasks[0].status = 'completed';
    this.state.currentStep = 1;
    this.notify();

    // Step 2: Script
    this.state.status = 'scripting';
    this.state.tasks[1].status = 'working';
    this.notify();

    await this.simulateTask(1, MOCK_SCRIPT);
    this.state.tasks[1].status = 'completed';
    this.state.currentStep = 2;
    this.notify();

    // Step 3: Visuals
    this.state.status = 'generating';
    this.state.tasks[2].status = 'working';
    this.notify();

    await this.simulateTask(2, MOCK_VISUALS);
    this.state.tasks[2].status = 'completed';
    this.state.currentStep = 3;
    this.notify();

    // Step 4: Publish
    this.state.status = 'publishing';
    this.state.tasks[3].status = 'working';
    this.notify();

    await this.simulateTask(3, ["Connecting to YouTube API...", "Uploading video...", "Published successfully!"]);
    this.state.tasks[3].status = 'completed';
    this.state.status = 'completed';
    this.state.currentStep = 4;
    this.notify();
  }

  private async simulateTask(taskIndex: number, logs: string[]) {
    for (let i = 0; i < logs.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Delay between logs
      this.state.tasks[taskIndex].output = logs[i];
      this.state.tasks[taskIndex].progress = ((i + 1) / logs.length) * 100;
      this.notify();
    }
  }
}
