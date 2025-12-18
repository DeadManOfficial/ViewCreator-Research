
import { GoogleGenAI, Type } from "@google/genai";
import { ViralHook, BrandDNA } from "../types";

const API_KEY = process.env.API_KEY || "";
const genAI = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Agent: The "Brain" (Orchestrator)
 * Logic derived from Matthew Miller's "Nested JSON" strategy.
 */
export const analyzeContentForHooks = async (transcript: string): Promise<ViralHook[]> => {
  const model = genAI.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this video transcript and identify the top 3 high-intensity viral moments (30-60s). 
    Focus on controversial hooks, surprising stats, or actionable secrets.
    Transcript: ${transcript}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            startTime: { type: Type.STRING },
            endTime: { type: Type.STRING },
            hookText: { type: Type.STRING },
            viralityScore: { type: Type.NUMBER },
            reason: { type: Type.STRING }
          },
          required: ["startTime", "endTime", "hookText", "viralityScore", "reason"]
        }
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || "[]");
};

/**
 * Agent: Visual Generator (The "Metricsmule" Prompt Secret)
 * Injecting technical metadata to "kill the AI look".
 */
export const generateProImagePrompt = async (subject: string, vibe: string): Promise<string> => {
  const model = genAI.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as the world's best photography prompt engineer. 
    Expand this subject into a technical photography-based prompt block for maximum realism.
    
    Subject: ${subject}
    Vibe: ${vibe}
    
    RULES:
    1. Start with technical settings (e.g., 85mm lens, f/1.8).
    2. Use real-world color grading terms.
    3. Include camera metadata (ISO, shutter speed).
    4. Focus on volumetric lighting and high-end cinematic textures.
    5. No "AI-looking" descriptive adjectives like "ultra-realistic". Use "RAW photography" tokens.`,
  });

  const response = await model;
  return response.text || "";
};

export const generateProImage = async (prompt: string): Promise<string | null> => {
  const model = genAI.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        aspectRatio: "16:9"
      }
    }
  });

  const response = await model;
  const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
  if (imagePart?.inlineData) {
    return `data:image/png;base64,${imagePart.inlineData.data}`;
  }
  return null;
};

export const generateSEOMetadata = async (title: string, transcript: string): Promise<any> => {
  const model = genAI.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate SEO metadata for a YouTube video.
    Title: ${title}
    Transcript: ${transcript}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          description: { type: Type.STRING },
          tags: { type: Type.ARRAY, items: { type: Type.STRING } },
          chapters: { type: Type.ARRAY, items: { type: Type.STRING } },
          twitterThread: { type: Type.ARRAY, items: { type: Type.STRING } }
        }
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || "{}");
};
