
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  CLIPPING = 'CLIPPING',
  VISUALS = 'VISUALS',
  SEO = 'SEO',
  AGENTS = 'AGENTS',
  ANALYTICS = 'ANALYTICS'
}

export interface ContentDraft {
  id: string;
  title: string;
  type: 'video' | 'post' | 'image';
  status: 'draft' | 'pending' | 'approved';
  platform: 'youtube' | 'tiktok' | 'x' | 'instagram';
  timestamp: number;
  previewUrl?: string;
  metadata?: any;
}

export interface ViralHook {
  startTime: string;
  endTime: string;
  hookText: string;
  viralityScore: number;
  reason: string;
}

export interface BrandDNA {
  tone: string;
  style: string;
  emojis: string[];
  hashtags: string[];
}
