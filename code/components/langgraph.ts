import { nanoid } from 'nanoid';

// LangGraph-inspired State Definition
export interface AgentState {
  messages: string[];
  context: {
    topic?: string;
    researchData?: any[];
    script?: string;
    visuals?: string[];
    videoUrl?: string;
  };
  currentAgent: 'researcher' | 'writer' | 'visualizer' | 'publisher' | 'end';
}

// Mock Apify Data (TikTok Trends)
const MOCK_APIFY_DATA = [
  { id: '1', sound: 'Spooky Scary Skeletons (Remix)', plays: '15M', trend: 'Rising' },
  { id: '2', sound: 'Corporate Memphis Beat', plays: '8.2M', trend: 'Stable' },
  { id: '3', sound: 'AI Voiceover Glitch', plays: '4.5M', trend: 'Exploding' }
];

export class LangGraphSimulator {
  private state: AgentState;
  private listeners: ((state: AgentState) => void)[] = [];

  constructor(initialTopic: string) {
    this.state = {
      messages: ["Workflow started."],
      context: { topic: initialTopic },
      currentAgent: 'researcher'
    };
  }

  subscribe(listener: (state: AgentState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l({ ...this.state }));
  }

  // Node: Researcher Agent
  private async researcherNode() {
    this.state.messages.push(`[Researcher] Scanning Apify for trends related to "${this.state.context.topic}"...`);
    this.notify();
    await new Promise(r => setTimeout(r, 2000));
    
    this.state.context.researchData = MOCK_APIFY_DATA;
    this.state.messages.push(`[Researcher] Found ${MOCK_APIFY_DATA.length} trending sounds.`);
    this.notify();
    
    return 'writer';
  }

  // Node: Writer Agent
  private async writerNode() {
    this.state.messages.push(`[Writer] Drafting script using GPT-4o...`);
    this.notify();
    await new Promise(r => setTimeout(r, 2000));
    
    this.state.context.script = `HOOK: You won't believe this AI hack.\nBODY: Using ViewCreator, I automated my entire channel.\nCTA: Link in bio to try it.`;
    this.state.messages.push(`[Writer] Script generated (3 sections).`);
    this.notify();
    
    return 'visualizer';
  }

  // Node: Visualizer Agent
  private async visualizerNode() {
    this.state.messages.push(`[Visualizer] Generating assets with DALL-E 3...`);
    this.notify();
    await new Promise(r => setTimeout(r, 2000));
    
    this.state.context.visuals = ['/images/hero-bg.png', '/images/feature-dashboard.png'];
    this.state.messages.push(`[Visualizer] Assets ready. Sending to Remotion renderer.`);
    this.notify();
    
    return 'publisher';
  }

  // Node: Publisher Agent
  private async publisherNode() {
    this.state.messages.push(`[Publisher] Uploading to YouTube Studio...`);
    this.notify();
    await new Promise(r => setTimeout(r, 1500));
    
    this.state.messages.push(`[Publisher] Published successfully! View at: https://youtu.be/dQw4w9WgXcQ`);
    this.notify();
    
    return 'end';
  }

  // The Graph Runner
  async start() {
    let nextNode = 'researcher';
    
    while (nextNode !== 'end') {
      this.state.currentAgent = nextNode as any;
      this.notify();
      
      switch (nextNode) {
        case 'researcher':
          nextNode = await this.researcherNode();
          break;
        case 'writer':
          nextNode = await this.writerNode();
          break;
        case 'visualizer':
          nextNode = await this.visualizerNode();
          break;
        case 'publisher':
          nextNode = await this.publisherNode();
          break;
      }
    }
    
    this.state.currentAgent = 'end';
    this.notify();
  }
}
