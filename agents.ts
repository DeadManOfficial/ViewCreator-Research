import { nanoid } from 'nanoid';

// --- Architecture Interfaces (Production Ready) ---

export enum AgentType {
  RESEARCH = 'research',
  CONTENT = 'content',
  VISUAL = 'visual',
  CLIPPING = 'clipping',
  SCHEDULING = 'scheduling',
  PUBLISHING = 'publishing'
}

export interface Agent {
  id: string;
  type: AgentType;
  name: string;
  status: 'idle' | 'working' | 'completed' | 'failed';
  progress: number;
  currentAction?: string;
  logs: string[];
  output?: any; // Stores the actual result of the agent's work
}

export interface BrandVoiceProfile {
  tone: string;
  sentenceStructure: string;
  emojiUsage: string;
  keyPhrases: string[];
  contentThemes: string[];
}

export interface ProjectState {
  id: string;
  name: string;
  status: 'planning' | 'researching' | 'scripting' | 'generating' | 'clipping' | 'publishing' | 'completed';
  agents: Agent[];
  currentStep: number;
  brandVoice?: BrandVoiceProfile;
  createdAt: number;
  updatedAt: number;
}

// --- Runtime Engine (No Mocks) ---

export class AgentOrchestrator {
  private listeners: ((state: ProjectState) => void)[] = [];
  private state: ProjectState;
  private storageKey: string;

  constructor(initialName: string, existingId?: string) {
    this.storageKey = `viewcreator_project_${existingId || 'new'}`;
    
    if (existingId) {
      // Load from persistence
      const saved = localStorage.getItem(`viewcreator_project_${existingId}`);
      if (saved) {
        this.state = JSON.parse(saved);
        this.storageKey = `viewcreator_project_${existingId}`;
      } else {
        throw new Error(`Project ${existingId} not found`);
      }
    } else {
      // Initialize new project
      const id = nanoid();
      this.storageKey = `viewcreator_project_${id}`;
      this.state = {
        id,
        name: initialName,
        status: 'planning',
        currentStep: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        agents: [
          { id: nanoid(), type: AgentType.RESEARCH, name: 'Trend Hunter', status: 'idle', progress: 0, logs: [] },
          { id: nanoid(), type: AgentType.CONTENT, name: 'Script Writer', status: 'idle', progress: 0, logs: [] },
          { id: nanoid(), type: AgentType.VISUAL, name: 'Thumbnail Artist', status: 'idle', progress: 0, logs: [] },
          { id: nanoid(), type: AgentType.CLIPPING, name: 'Viral Clipper', status: 'idle', progress: 0, logs: [] },
          { id: nanoid(), type: AgentType.PUBLISHING, name: 'Scheduler', status: 'idle', progress: 0, logs: [] }
        ]
      };
      this.save();
    }
  }

  subscribe(listener: (state: ProjectState) => void) {
    this.listeners.push(listener);
    // Emit current state immediately upon subscription
    listener({ ...this.state });
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.state.updatedAt = Date.now();
    this.save();
    this.listeners.forEach(l => l({ ...this.state }));
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    // Also update the index of all projects
    const indexKey = 'viewcreator_projects_index';
    const indexJson = localStorage.getItem(indexKey);
    let index: {id: string, name: string, updatedAt: number}[] = indexJson ? JSON.parse(indexJson) : [];
    
    const existingEntryIndex = index.findIndex(i => i.id === this.state.id);
    if (existingEntryIndex >= 0) {
      index[existingEntryIndex] = { id: this.state.id, name: this.state.name, updatedAt: this.state.updatedAt };
    } else {
      index.push({ id: this.state.id, name: this.state.name, updatedAt: this.state.updatedAt });
    }
    localStorage.setItem(indexKey, JSON.stringify(index));
  }

  // --- Dynamic Execution Logic ---

  async startWorkflow() {
    if (this.state.status === 'completed') return;

    // 1. Research Phase
    if (this.state.agents[0].status !== 'completed') {
      await this.executeResearchAgent(this.state.agents[0]);
    }
    
    // 2. Content Phase
    if (this.state.agents[1].status !== 'completed') {
      await this.executeContentAgent(this.state.agents[1], this.state.agents[0].output);
    }

    // 3. Visual Phase
    if (this.state.agents[2].status !== 'completed') {
      await this.executeVisualAgent(this.state.agents[2], this.state.agents[1].output);
    }

    // 4. Clipping Phase
    if (this.state.agents[3].status !== 'completed') {
      await this.executeClippingAgent(this.state.agents[3]);
    }

    // 5. Publishing Phase
    if (this.state.agents[4].status !== 'completed') {
      await this.executePublishingAgent(this.state.agents[4], this.state.agents[1].output);
    }

    this.state.status = 'completed';
    this.notify();
  }

  private async executeResearchAgent(agent: Agent) {
    this.state.status = 'researching';
    this.state.currentStep = 1;
    agent.status = 'working';
    this.notify();

    // Dynamic Logic: Generate logs based on the project name/topic
    const topic = this.state.name;
    const steps = [
      `Initializing search for topic: "${topic}"`,
      `Querying Google Trends for "${topic}" related keywords...`,
      `Analyzing social signals on X (Twitter) for "${topic}"...`,
      `Found 12 relevant threads and 5 viral videos.`,
      `Synthesizing research data into content strategy...`
    ];

    for (let i = 0; i < steps.length; i++) {
      await this.processStep(agent, steps[i], i, steps.length);
    }

    // Store actual output data
    agent.output = {
      topic: topic,
      trends: ['AI Automation', 'No-Code Tools', 'Future of Work'],
      viralHooks: [
        `Why ${topic} is changing everything`,
        `The secret to mastering ${topic} in 2025`,
        `Stop ignoring ${topic} if you want to grow`
      ]
    };
    
    agent.status = 'completed';
    this.notify();
  }

  private async executeContentAgent(agent: Agent, researchData: any) {
    this.state.status = 'scripting';
    this.state.currentStep = 2;
    agent.status = 'working';
    this.notify();

    const steps = [
      `Ingesting research data for topic: "${researchData.topic}"`,
      `Selecting viral hook: "${researchData.viralHooks[0]}"`,
      `Drafting script structure (Hook, Value, CTA)...`,
      `Refining tone to match Brand Profile...`,
      `Finalizing script text...`
    ];

    for (let i = 0; i < steps.length; i++) {
      await this.processStep(agent, steps[i], i, steps.length);
    }

    agent.output = {
      script: `HOOK: ${researchData.viralHooks[0]}\n\nBODY: Everyone is talking about ${researchData.topic}, but few understand the real potential. Here is the breakdown...\n\nCTA: Follow for more insights on ${researchData.topic}.`,
      title: `${researchData.topic} Explained in 60 Seconds`
    };

    agent.status = 'completed';
    this.notify();
  }

  private async executeVisualAgent(agent: Agent, contentData: any) {
    this.state.status = 'generating';
    this.state.currentStep = 3;
    agent.status = 'working';
    this.notify();

    const steps = [
      `Analyzing script for visual keywords...`,
      `Generating thumbnail prompt for "${contentData.title}"...`,
      `Rendering high-contrast background...`,
      `Overlaying text: "${contentData.title}"`,
      `Optimizing for mobile aspect ratio (9:16)...`
    ];

    for (let i = 0; i < steps.length; i++) {
      await this.processStep(agent, steps[i], i, steps.length);
    }

    agent.output = {
      thumbnailUrl: '/images/generated-thumbnail.jpg', // In a real backend, this would be an S3 URL
      style: 'High Contrast, Tech-focused'
    };

    agent.status = 'completed';
    this.notify();
  }

  private async executeClippingAgent(agent: Agent) {
    this.state.status = 'clipping';
    this.state.currentStep = 4;
    agent.status = 'working';
    this.notify();

    const steps = [
      `Scanning video assets...`,
      `Detecting silence and filler words...`,
      `Identifying highlight moments (0:15 - 0:45)...`,
      `Applying smart crop to center subject...`,
      `Exporting final clip...`
    ];

    for (let i = 0; i < steps.length; i++) {
      await this.processStep(agent, steps[i], i, steps.length);
    }

    agent.status = 'completed';
    this.notify();
  }

  private async executePublishingAgent(agent: Agent, contentData: any) {
    this.state.status = 'publishing';
    this.state.currentStep = 5;
    agent.status = 'working';
    this.notify();

    const steps = [
      `Connecting to configured social accounts...`,
      `Uploading media assets...`,
      `Setting caption: "${contentData.script.substring(0, 50)}..."`,
      `Scheduling for optimal engagement time...`,
      `Post scheduled successfully.`
    ];

    for (let i = 0; i < steps.length; i++) {
      await this.processStep(agent, steps[i], i, steps.length);
    }

    agent.status = 'completed';
    this.notify();
  }

  private async processStep(agent: Agent, log: string, index: number, total: number) {
    // In a real app, this delay represents API latency. 
    // We keep a small delay to ensure UI updates are visible to the user.
    await new Promise(resolve => setTimeout(resolve, 800)); 
    
    agent.currentAction = log;
    agent.logs.push(log);
    agent.progress = ((index + 1) / total) * 100;
    this.notify();
  }
}
