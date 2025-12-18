# Sora 2 Prompt Generator - Complete Project Files
**Project Name:** sora-prompt-generator
**Version:** 19dfa248
**Features:** Full-stack with Database, User Authentication, Gemini AI Integration
**Status:** Complete - All features implemented and tested

---
## Configuration Files

### package.json

```json
{
  "name": "sora-prompt-generator",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "NODE_ENV=development tsx watch server/_core/index.ts",
    "build": "vite build && esbuild server/_core/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc --noEmit",
    "format": "prettier --write .",
    "test": "vitest run",
    "db:push": "drizzle-kit generate && drizzle-kit migrate"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.693.0",
    "@aws-sdk/s3-request-presigner": "^3.693.0",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tanstack/react-query": "^5.90.2",
    "@trpc/client": "^11.6.0",
    "@trpc/react-query": "^11.6.0",
    "@trpc/server": "^11.6.0",
    "axios": "^1.12.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "cookie": "^1.0.2",
    "date-fns": "^4.1.0",
    "dotenv": "^17.2.2",
    "drizzle-orm": "^0.44.5",
    "embla-carousel-react": "^8.6.0",
    "express": "^4.21.2",
    "framer-motion": "^12.23.22",
    "input-otp": "^1.4.2",
    "jose": "6.1.0",
    "lucide-react": "^0.453.0",
    "mysql2": "^3.15.0",
    "nanoid": "^5.1.5",
    "next-themes": "^0.4.6",
    "react": "^19.1.1",
    "react-day-picker": "^9.11.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.64.0",
    "react-resizable-panels": "^3.0.6",
    "recharts": "^2.15.2",
    "sonner": "^2.0.7",
    "streamdown": "^1.4.0",
    "superjson": "^1.13.3",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@builder.io/vite-plugin-jsx-loc": "^0.1.1",
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/express": "4.17.21",
    "@types/google.maps": "^3.58.1",
    "@types/node": "^24.7.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "add": "^2.0.6",
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.31.4",
    "esbuild": "^0.25.0",
    "pnpm": "^10.15.1",
    "postcss": "^8.4.47",
    "prettier": "^3.6.2",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.19.1",
    "tw-animate-css": "^1.4.0",
    "typescript": "5.9.3",
    "vite": "^7.1.7",
    "vite-plugin-manus-runtime": "^0.0.56",
    "vitest": "^2.1.4"
  },
  "packageManager": "pnpm@10.4.1+sha512.c753b6c3ad7afa13af388fa6d808035a008e30ea9993f58c6663e2bc5ff21679aa834db094987129aa4d488b86df57f7b634981b2f827cdcacc698cc0cfb88af",
  "pnpm": {
    "patchedDependencies": {
      "wouter@3.7.1": "patches/wouter@3.7.1.patch"
    },
    "overrides": {
      "tailwindcss>nanoid": "3.3.7"
    }
  }
}
```

### tsconfig.json

```json
{
  "include": ["client/src/**/*", "shared/**/*", "server/**/*"],
  "exclude": ["node_modules", "build", "dist", "**/*.test.ts"],
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./node_modules/typescript/tsbuildinfo",
    "noEmit": true,
    "module": "ESNext",
    "strict": true,
    "lib": ["esnext", "dom", "dom.iterable"],
    "jsx": "preserve",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": true,
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "types": ["node", "vite/client"],
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"]
    }
  }
}

```

### vite.config.ts

```typescript
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";


const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

```

### vitest.config.ts

```typescript
import { defineConfig } from "vitest/config";
import path from "path";

const templateRoot = path.resolve(import.meta.dirname);

export default defineConfig({
  root: templateRoot,
  resolve: {
    alias: {
      "@": path.resolve(templateRoot, "client", "src"),
      "@shared": path.resolve(templateRoot, "shared"),
      "@assets": path.resolve(templateRoot, "attached_assets"),
    },
  },
  test: {
    environment: "node",
    include: ["server/**/*.test.ts", "server/**/*.spec.ts"],
  },
});

```

### drizzle.config.ts

```typescript
import { defineConfig } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is required to run drizzle commands");
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString,
  },
});

```

### components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "client/src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}

```

---
## Database Schema

### drizzle/schema.ts

```typescript
import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Prompt templates - pre-made examples users can start from
 */
export const templates = mysqlTable("templates", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  prompt: text("prompt").notNull(),
  category: varchar("category", { length: 100 }),
  tags: text("tags"), // JSON array of tags
  isPublic: boolean("isPublic").default(true).notNull(),
  createdBy: int("createdBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Template = typeof templates.$inferSelect;
export type InsertTemplate = typeof templates.$inferInsert;

/**
 * User prompts - saved and optimized prompts
 */
export const prompts = mysqlTable("prompts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  originalPrompt: text("originalPrompt").notNull(),
  optimizedPrompt: text("optimizedPrompt").notNull(),
  settings: text("settings"), // JSON object with all settings
  isSaved: boolean("isSaved").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Prompt = typeof prompts.$inferSelect;
export type InsertPrompt = typeof prompts.$inferInsert;

/**
 * Cameo mappings - character name to handle mappings
 */
export const cameoMappings = mysqlTable("cameoMappings", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  characterName: varchar("characterName", { length: 255 }).notNull(),
  cameoHandle: varchar("cameoHandle", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type CameoMapping = typeof cameoMappings.$inferSelect;
export type InsertCameoMapping = typeof cameoMappings.$inferInsert;

```

### drizzle/relations.ts

```typescript
import {} from "./schema";

```

---
## Backend - Server Code

### server/routers.ts

```typescript
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { invokeLLM } from "./_core/llm";
import * as db from "./db";

// Popular cameo handles for quick add
const POPULAR_CAMEOS = [
  { handle: "@keigo_matsumaru", name: "Keigo Matsumaru" },
  { handle: "@eclipsedw", name: "Eclipse" },
  { handle: "@downtownnewyork", name: "Downtown New York" },
];

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  prompt: router({
    optimize: protectedProcedure
      .input(z.object({
        prompt: z.string().min(1),
        settings: z.object({
          preset: z.enum(["balanced", "high_quality", "fast"]).optional(),
          pacing: z.enum(["very_calm", "moderate", "chaotic"]).optional(),
          videoStyle: z.string().optional(),
          enableCameos: z.boolean().optional(),
          cameoMappings: z.array(z.object({
            characterName: z.string(),
            cameoHandle: z.string(),
          })).optional(),
          fightSceneEnhancement: z.boolean().optional(),
          gpt5ProMode: z.boolean().optional(),
          copyrightBypass: z.boolean().optional(),
          cinematicProFormat: z.boolean().optional(),
          outputLength: z.enum(["concise", "balanced", "detailed"]).optional(),
          useTimestamp: z.boolean().optional(),
          timelineControl: z.boolean().optional(),
          cameraAngle: z.string().optional(),
          lighting: z.string().optional(),
          cameraMovement: z.string().optional(),
          duration: z.number().optional(),
          audioSettings: z.object({
            speech: z.string().optional(),
            backgroundMusic: z.string().optional(),
            soundEffects: z.string().optional(),
          }).optional(),
          temperature: z.number().optional(),
          topP: z.number().optional(),
          frequencyPenalty: z.number().optional(),
          presencePenalty: z.number().optional(),
        }),
      }))
      .mutation(async ({ input, ctx }) => {
        const { prompt, settings } = input;
        
        let systemPrompt = `You are an expert Sora 2 video prompt optimizer. Your task is to transform user prompts into professional, detailed prompts optimized for Sora 2 video generation.

Key guidelines:
- Sora 2 maximum duration is 15 seconds
- Be specific about camera angles, movements, lighting, and composition
- Include temporal details and scene progression
- Maintain creative intent while adding technical precision`;

        if (settings.preset === "high_quality") {
          systemPrompt += "\n- Focus on cinematic quality and professional production values";
        } else if (settings.preset === "fast") {
          systemPrompt += "\n- Keep the prompt concise while maintaining clarity";
        }

        if (settings.pacing === "very_calm") {
          systemPrompt += "\n- Emphasize slow, deliberate movements and peaceful atmosphere";
        } else if (settings.pacing === "chaotic") {
          systemPrompt += "\n- Include dynamic, fast-paced action and energetic movements";
        }

        if (settings.cinematicProFormat) {
          systemPrompt += "\n- Use professional cinematography terminology (shot types, camera movements, VFX)";
        }

        if (settings.useTimestamp) {
          systemPrompt += "\n- Format the output with timestamp segments (0-1s:, 1-2.5s:, etc.)";
        }

        if (settings.fightSceneEnhancement && prompt.toLowerCase().includes("fight")) {
          systemPrompt += "\n- Enhance fight/combat scenes with professional anime battle choreography details";
        }

        if (settings.copyrightBypass) {
          systemPrompt += "\n- Use creative descriptions that focus on visual elements rather than copyrighted names";
        }

        const outputLengthMap = {
          concise: "Keep the optimized prompt under 100 words",
          balanced: "Aim for 100-200 words",
          detailed: "Provide a comprehensive prompt with 200-300 words",
        };
        
        if (settings.outputLength) {
          systemPrompt += `\n- ${outputLengthMap[settings.outputLength]}`;
        }

        const technicalDetails = [];
        if (settings.cameraAngle) technicalDetails.push(`Camera angle: ${settings.cameraAngle}`);
        if (settings.lighting) technicalDetails.push(`Lighting: ${settings.lighting}`);
        if (settings.cameraMovement) technicalDetails.push(`Camera movement: ${settings.cameraMovement}`);
        if (settings.duration) technicalDet
... [truncated, total 20885 chars] ...

```

### server/db.ts

```typescript
import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, prompts, templates, cameoMappings, InsertPrompt, InsertTemplate, InsertCameoMapping } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Prompt queries
export async function createPrompt(prompt: InsertPrompt) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(prompts).values(prompt);
  return result;
}

export async function getUserPrompts(userId: number, savedOnly = false) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const conditions = savedOnly 
    ? and(eq(prompts.userId, userId), eq(prompts.isSaved, true))
    : eq(prompts.userId, userId);
  
  return await db.select().from(prompts).where(conditions).orderBy(desc(prompts.createdAt));
}

export async function updatePromptSaved(promptId: number, userId: number, isSaved: boolean) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.update(prompts)
    .set({ isSaved })
    .where(and(eq(prompts.id, promptId), eq(prompts.userId, userId)));
}

export async function deletePrompt(promptId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.delete(prompts).where(and(eq(prompts.id, promptId), eq(prompts.userId, userId)));
}

// Template queries
export async function getPublicTemplates() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return await db.select().from(templates).where(eq(templates.isPublic, true)).orderBy(desc(templates.createdAt));
}

export async function getTemplateById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.select().from(templates).where(eq(templates.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createTemplate(template: InsertTemplate) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(templates).values(template);
  return result;
}

// Cameo mapping queries
export async function getUserCameoMappings(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return await db.select().from(cameoMappings).where(eq(cameoMappings.userId, userId));
}

export async function createCameoMapping(mapping: InsertCameoMapping) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(cameoMappings).values(mapping);
 
... [truncated, total 5296 chars] ...

```

### server/storage.ts

```typescript
// Preconfigured storage helpers for Manus WebDev templates
// Uses the Biz-provided storage proxy (Authorization: Bearer <token>)

import { ENV } from './_core/env';

type StorageConfig = { baseUrl: string; apiKey: string };

function getStorageConfig(): StorageConfig {
  const baseUrl = ENV.forgeApiUrl;
  const apiKey = ENV.forgeApiKey;

  if (!baseUrl || !apiKey) {
    throw new Error(
      "Storage proxy credentials missing: set BUILT_IN_FORGE_API_URL and BUILT_IN_FORGE_API_KEY"
    );
  }

  return { baseUrl: baseUrl.replace(/\/+$/, ""), apiKey };
}

function buildUploadUrl(baseUrl: string, relKey: string): URL {
  const url = new URL("v1/storage/upload", ensureTrailingSlash(baseUrl));
  url.searchParams.set("path", normalizeKey(relKey));
  return url;
}

async function buildDownloadUrl(
  baseUrl: string,
  relKey: string,
  apiKey: string
): Promise<string> {
  const downloadApiUrl = new URL(
    "v1/storage/downloadUrl",
    ensureTrailingSlash(baseUrl)
  );
  downloadApiUrl.searchParams.set("path", normalizeKey(relKey));
  const response = await fetch(downloadApiUrl, {
    method: "GET",
    headers: buildAuthHeaders(apiKey),
  });
  return (await response.json()).url;
}

function ensureTrailingSlash(value: string): string {
  return value.endsWith("/") ? value : `${value}/`;
}

function normalizeKey(relKey: string): string {
  return relKey.replace(/^\/+/, "");
}

function toFormData(
  data: Buffer | Uint8Array | string,
  contentType: string,
  fileName: string
): FormData {
  const blob =
    typeof data === "string"
      ? new Blob([data], { type: contentType })
      : new Blob([data as any], { type: contentType });
  const form = new FormData();
  form.append("file", blob, fileName || "file");
  return form;
}

function buildAuthHeaders(apiKey: string): HeadersInit {
  return { Authorization: `Bearer ${apiKey}` };
}

export async function storagePut(
  relKey: string,
  data: Buffer | Uint8Array | string,
  contentType = "application/octet-stream"
): Promise<{ key: string; url: string }> {
  const { baseUrl, apiKey } = getStorageConfig();
  const key = normalizeKey(relKey);
  const uploadUrl = buildUploadUrl(baseUrl, key);
  const formData = toFormData(data, contentType, key.split("/").pop() ?? key);
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: buildAuthHeaders(apiKey),
    body: formData,
  });

  if (!response.ok) {
    const message = await response.text().catch(() => response.statusText);
    throw new Error(
      `Storage upload failed (${response.status} ${response.statusText}): ${message}`
    );
  }
  const url = (await response.json()).url;
  return { key, url };
}

export async function storageGet(relKey: string): Promise<{ key: string; url: string; }> {
  const { baseUrl, apiKey } = getStorageConfig();
  const key = normalizeKey(relKey);
  return {
    key,
    url: await buildDownloadUrl(baseUrl, key, apiKey),
  };
}

```

### server/_core/index.ts

```typescript
import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

```

### server/_core/context.ts

```typescript
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch (error) {
    // Authentication is optional for public procedures.
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}

```

### server/_core/trpc.ts

```typescript
import { NOT_ADMIN_ERR_MSG, UNAUTHED_ERR_MSG } from '@shared/const';
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { TrpcContext } from "./context";

const t = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

const requireUser = t.middleware(async opts => {
  const { ctx, next } = opts;

  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(requireUser);

export const adminProcedure = t.procedure.use(
  t.middleware(async opts => {
    const { ctx, next } = opts;

    if (!ctx.user || ctx.user.role !== 'admin') {
      throw new TRPCError({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
    }

    return next({
      ctx: {
        ...ctx,
        user: ctx.user,
      },
    });
  }),
);

```

### server/_core/llm.ts

```typescript
import { ENV } from "./env";

export type Role = "system" | "user" | "assistant" | "tool" | "function";

export type TextContent = {
  type: "text";
  text: string;
};

export type ImageContent = {
  type: "image_url";
  image_url: {
    url: string;
    detail?: "auto" | "low" | "high";
  };
};

export type FileContent = {
  type: "file_url";
  file_url: {
    url: string;
    mime_type?: "audio/mpeg" | "audio/wav" | "application/pdf" | "audio/mp4" | "video/mp4" ;
  };
};

export type MessageContent = string | TextContent | ImageContent | FileContent;

export type Message = {
  role: Role;
  content: MessageContent | MessageContent[];
  name?: string;
  tool_call_id?: string;
};

export type Tool = {
  type: "function";
  function: {
    name: string;
    description?: string;
    parameters?: Record<string, unknown>;
  };
};

export type ToolChoicePrimitive = "none" | "auto" | "required";
export type ToolChoiceByName = { name: string };
export type ToolChoiceExplicit = {
  type: "function";
  function: {
    name: string;
  };
};

export type ToolChoice =
  | ToolChoicePrimitive
  | ToolChoiceByName
  | ToolChoiceExplicit;

export type InvokeParams = {
  messages: Message[];
  tools?: Tool[];
  toolChoice?: ToolChoice;
  tool_choice?: ToolChoice;
  maxTokens?: number;
  max_tokens?: number;
  outputSchema?: OutputSchema;
  output_schema?: OutputSchema;
  responseFormat?: ResponseFormat;
  response_format?: ResponseFormat;
};

export type ToolCall = {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
};

export type InvokeResult = {
  id: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: Role;
      content: string | Array<TextContent | ImageContent | FileContent>;
      tool_calls?: ToolCall[];
    };
    finish_reason: string | null;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type JsonSchema = {
  name: string;
  schema: Record<string, unknown>;
  strict?: boolean;
};

export type OutputSchema = JsonSchema;

export type ResponseFormat =
  | { type: "text" }
  | { type: "json_object" }
  | { type: "json_schema"; json_schema: JsonSchema };

const ensureArray = (
  value: MessageContent | MessageContent[]
): MessageContent[] => (Array.isArray(value) ? value : [value]);

const normalizeContentPart = (
  part: MessageContent
): TextContent | ImageContent | FileContent => {
  if (typeof part === "string") {
    return { type: "text", text: part };
  }

  if (part.type === "text") {
    return part;
  }

  if (part.type === "image_url") {
    return part;
  }

  if (part.type === "file_url") {
    return part;
  }

  throw new Error("Unsupported message content part");
};

const normalizeMessage = (message: Message) => {
  const { role, name, tool_call_id } = message;

  if (role === "tool" || role === "function") {
    const content = ensureArray(message.content)
      .map(part => (typeof part === "string" ? part : JSON.stringify(part)))
      .join("\n");

    return {
      role,
      name,
      tool_call_id,
      content,
    };
  }

  const contentParts = ensureArray(message.content).map(normalizeContentPart);

  // If there's only text content, collapse to a single string for compatibility
  if (contentParts.length === 1 && contentParts[0].type === "text") {
    return {
      role,
      name,
      content: contentParts[0].text,
    };
  }

  return {
    role,
    name,
    content: contentParts,
  };
};

const normalizeToolChoice = (
  toolChoice: ToolChoice | undefined,
  tools: Tool[] | undefined
): "none" | "auto" | ToolChoiceExplicit | undefined => {
  if (!toolChoice) return undefined;

  if (toolChoice === "none" || toolChoice === "auto") {
    return toolChoice;
  }

  if (toolChoice === "required") {
    if (!tools || tools.length === 0) {
      throw new Error(
        "tool_choice 'required' was provided but no tools were configured"
      );
    }

    if (tools.length > 1) {
      throw new Error(
        "tool_choice 'required' needs a single tool or specify the tool name explicitly"
      );
    }

    return {
      type: "function",
      function: { name: tools[0].function.name },
    };
  }

  if ("name" in toolChoice) {
    return {
      type: "function",
      function: { name: toolChoice.name },
    };
  }

  return toolChoice;
};

const resolveApiUrl = () =>
  ENV.forgeApiUrl && ENV.forgeApiUrl.trim().length > 0
    ? `${ENV.forgeApiUrl.replace(/\/$/, "")}/v1/chat/completions`
    : "https://forge.manus.im/v1/chat/completions";

const assertApiKey = () => {
  if (!ENV.forgeApiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }
};

const normalizeResponseFormat = ({
  responseFormat,
  response_format,
  outputSchema,
  output_schema,
}: {
  responseFormat?: ResponseFormat;
  response_format?: ResponseFormat;
  outputSchema?: OutputSchema;
  output_schema?: OutputSchema;
}):
  | { type
... [truncated, total 7260 chars] ...

```

### server/_core/env.ts

```typescript
export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
};

```

---
## Frontend - Client Pages

### client/src/pages/Home.tsx

```typescript
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import {
  Video,
  Sparkles,
  Zap,
  Settings2,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Wand2,
  Camera,
  Lightbulb,
} from "lucide-react";

function ToolCard({ href, icon, title }: any) {
  return (
    <Link href={href}>
      <Card className="cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all h-full">
        <CardContent className="pt-6 text-center">
          <div className="text-3xl mb-2">{icon}</div>
          <p className="font-semibold text-sm">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Optimization",
      description: "Transform simple ideas into professional, detailed Sora 2 prompts using advanced Gemini AI",
    },
    {
      icon: Settings2,
      title: "Advanced Controls",
      description: "Fine-tune every aspect with production presets, pacing controls, and technical parameters",
    },
    {
      icon: Camera,
      title: "Cinematic Features",
      description: "Professional camera angles, lighting setups, and movement specifications for film-quality results",
    },
    {
      icon: Users,
      title: "Sora 2 Cameos",
      description: "Seamlessly integrate Sora 2 cameo handles with character name mapping",
    },
    {
      icon: Clock,
      title: "Timeline Control",
      description: "Precise timestamp formatting and frame-by-frame control for complex sequences",
    },
    {
      icon: Lightbulb,
      title: "Smart Enhancements",
      description: "Automatic fight scene enhancement, copyright bypass mode, and style transfer capabilities",
    },
  ];

  const proFeatures = [
    "Unlimited prompt generations",
    "GPT-5 PRO Mode with developer controls",
    "Advanced technical parameters",
    "Cinematic pro format",
    "Scene continuity checker",
    "Director style transfer",
    "Storyboard generator",
    "Campaign tools",
    "Batch optimizer",
    "A/B testing",
    "Video extender",
    "Media analysis",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              All Pro Features Enabled • No API Keys Required
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold trackin
... [truncated, total 9783 chars] ...

```

### client/src/pages/Optimizer.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Sparkles, Copy, Save, Trash2, Settings2, Video, Wand2 } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function Optimizer() {
  const { user, isAuthenticated } = useAuth();
  const [originalPrompt, setOriginalPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Settings state
  const [preset, setPreset] = useState<"balanced" | "high_quality" | "fast">("balanced");
  const [pacing, setPacing] = useState<"very_calm" | "moderate" | "chaotic">("moderate");
  const [videoStyle, setVideoStyle] = useState("");
  const [enableCameos, setEnableCameos] = useState(false);
  const [fightSceneEnhancement, setFightSceneEnhancement] = useState(false);
  const [gpt5ProMode, setGpt5ProMode] = useState(false);
  const [copyrightBypass, setCopyrightBypass] = useState(false);
  const [cinematicProFormat, setCinematicProFormat] = useState(false);
  const [outputLength, setOutputLength] = useState<"concise" | "balanced" | "detailed">("balanced");
  const [useTimestamp, setUseTimestamp] = useState(false);
  const [timelineControl, setTimelineControl] = useState(false);
  const [cameraAngle, setCameraAngle] = useState("");
  const [lighting, setLighting] = useState("");
  const [cameraMovement, setCameraMovement] = useState("");
  const [duration, setDuration] = useState(10);
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(0.9);
  
  const [characterName, setCharacterName] = useState("");
  const [cameoHandle, setCameoHandle] = useState("");

  const optimizeMutation = trpc.prompt.optimize.useMutation({
    onSuccess: (data) => {
      setOptimizedPrompt(data.optimizedPrompt);
      toast.success("Prompt optimized successfully!");
      setIsOptimizing(false);
    },
    onError: (error) => {
      toast.error("Failed to optimize prompt: " + error.message);
      setIsOptimizing(false);
    },
  });

  const { data: cameoMappings = [], refetch: refetchCameos } = trpc.cameo.get
... [truncated, total 21568 chars] ...

```

### client/src/pages/History.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Copy, Trash2, History as HistoryIcon, Bookmark } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";
import { formatDistanceToNow } from "date-fns";

export default function History() {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("all");

  const { data: allPrompts = [], refetch: refetchAll } = trpc.prompt.getHistory.useQuery(
    { savedOnly: false },
    { enabled: isAuthenticated }
  );

  const { data: savedPrompts = [], refetch: refetchSaved } = trpc.prompt.getHistory.useQuery(
    { savedOnly: true },
    { enabled: isAuthenticated }
  );

  const deleteMutation = trpc.prompt.deletePrompt.useMutation({
    onSuccess: () => {
      toast.success("Prompt deleted");
      refetchAll();
      refetchSaved();
    },
  });

  const saveMutation = trpc.prompt.savePrompt.useMutation({
    onSuccess: () => {
      toast.success("Prompt saved");
      refetchAll();
      refetchSaved();
    },
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleDelete = (promptId: number) => {
    if (confirm("Are you sure you want to delete this prompt?")) {
      deleteMutation.mutate({ promptId });
    }
  };

  const handleToggleSave = (promptId: number, currentlySaved: boolean) => {
    saveMutation.mutate({ promptId, isSaved: !currentlySaved });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
            <CardDescription>Please sign in to view your prompt history</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const PromptCard = ({ prompt }: { prompt: any }) => {
    const settings = prompt.settings ? JSON.parse(prompt.settings) : {};
    
    return (
      <Card className="mb-4">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-base">
                {prompt.originalPrompt.substring(0, 100)}
                {prompt.originalPrompt.length > 100 && "..."}
              </CardTitle>
              <CardDescription className="mt-1">
       
... [truncated, total 7551 chars] ...

```

### client/src/pages/BatchOptimizer.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Zap, Copy } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function BatchOptimizer() {
  const { isAuthenticated } = useAuth();
  const [prompts, setPrompts] = useState("");
  const [preset, setPreset] = useState<"balanced" | "high_quality" | "fast">("balanced");
  const [pacing, setPacing] = useState<"very_calm" | "moderate" | "chaotic">("moderate");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const batchMutation = trpc.prompt.batchOptimize.useMutation({
    onSuccess: (data) => {
      setResults(data);
      toast.success(`Optimized ${data.length} prompts!`);
      setIsOptimizing(false);
    },
    onError: (error) => {
      toast.error("Failed to optimize: " + error.message);
      setIsOptimizing(false);
    },
  });

  const handleOptimize = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in");
      return;
    }

    const promptList = prompts
      .split("\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    if (promptList.length === 0) {
      toast.error("Please enter at least one prompt");
      return;
    }

    setIsOptimizing(true);
    batchMutation.mutate({
      prompts: promptList,
      settings: { preset, pacing },
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Zap className="w-10 h-10 text-primary" />
            Batch Optimizer
          </h1>
          <p className="text-muted-foreground">Optimize multiple prompts at once</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
   
... [truncated, total 6955 chars] ...

```

### client/src/pages/ABTest.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, GitCompare, Copy } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function ABTest() {
  const { isAuthenticated } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [variants, setVariants] = useState(2);
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const abTestMutation = trpc.prompt.abTest.useMutation({
    onSuccess: (data) => {
      setResults(data);
      toast.success(`Generated ${data.length} variants!`);
      setIsGenerating(false);
    },
    onError: (error) => {
      toast.error("Failed to generate: " + error.message);
      setIsGenerating(false);
    },
  });

  const handleGenerate = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in");
      return;
    }

    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    abTestMutation.mutate({ prompt, variants });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <GitCompare className="w-10 h-10 text-primary" />
            A/B Testing
          </h1>
          <p className="text-muted-foreground">Generate multiple prompt variations to test</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="prompt">Original Prompt</Label>
                <Textarea
                  id="prompt"
... [truncated, total 6121 chars] ...

```

### client/src/pages/VideoExtender.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Expand, Copy } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function VideoExtender() {
  const { isAuthenticated } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [extensionLength, setExtensionLength] = useState<"short" | "medium" | "long">("medium");
  const [isExtending, setIsExtending] = useState(false);
  const [result, setResult] = useState<any>(null);

  const extendMutation = trpc.prompt.extendVideo.useMutation({
    onSuccess: (data) => {
      setResult(data);
      toast.success("Video extended!");
      setIsExtending(false);
    },
    onError: (error) => {
      toast.error("Failed to extend: " + error.message);
      setIsExtending(false);
    },
  });

  const handleExtend = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in");
      return;
    }

    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsExtending(true);
    extendMutation.mutate({ originalPrompt: prompt, extensionLength });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Expand className="w-10 h-10 text-primary" />
            Video Extender
          </h1>
          <p className="text-muted-foreground">Extend your video prompts with additional scenes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Original Prompt</CardTitle>
              <CardDescription>Enter the prompt you want to extend</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter your video p
... [truncated, total 5627 chars] ...

```

### client/src/pages/AnalysisTools.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Copy, Zap } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function AnalysisTools() {
  const { isAuthenticated } = useAuth();

  // Scene Continuity
  const [continuityPrompts, setContinuityPrompts] = useState("");
  const [continuityLoading, setContinuityLoading] = useState(false);
  const [continuityResult, setContinuityResult] = useState("");

  // Director Style
  const [stylePrompt, setStylePrompt] = useState("");
  const [directorStyle, setDirectorStyle] = useState("");
  const [styleLoading, setStyleLoading] = useState(false);
  const [styleResult, setStyleResult] = useState("");

  // Technical Feasibility
  const [feasibilityPrompt, setFeasibilityPrompt] = useState("");
  const [feasibilityLoading, setFeasibilityLoading] = useState(false);
  const [feasibilityResult, setFeasibilityResult] = useState("");

  // Keyword Expander
  const [keywords, setKeywords] = useState("");
  const [keywordLoading, setKeywordLoading] = useState(false);
  const [keywordResult, setKeywordResult] = useState("");

  // Storyboard
  const [storyboardPrompt, setStoryboardPrompt] = useState("");
  const [sceneCount, setSceneCount] = useState(3);
  const [storyboardLoading, setStoryboardLoading] = useState(false);
  const [storyboardResult, setStoryboardResult] = useState("");

  // Campaign
  const [campaignTheme, setCampaignTheme] = useState("");
  const [videoCount, setVideoCount] = useState(3);
  const [campaignLoading, setCampaignLoading] = useState(false);
  const [campaignResult, setCampaignResult] = useState("");

  // Script to Shot List
  const [script, setScript] = useState("");
  const [scriptLoading, setScriptLoading] = useState(false);
  const [scriptResult, setScriptResult] = useState("");

  const continuityMutation = trpc.prompt.sceneContinuityCheck.useMutation({
    onSuccess: (data) => {
      setContinuityResult(data.analysis);
      toast.success("Analysis complete!");
      setContinuityLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setContinuityLoading(false);
    },
  });

  const styleMutation = trpc.prompt.directorStyleTransfer.useMutation({
    onSuccess: (data) => {
      setStyleResult(data.styledPrompt);
      toast.success("Style transferred!");
      setStyleLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setStyleLoading(
... [truncated, total 23703 chars] ...

```

### client/src/pages/Templates.tsx

```typescript
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Copy, Search, Loader2 } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function Templates() {
  const { isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const { data: templates = [], isLoading } = trpc.template.list.useQuery();

  const filteredTemplates = templates.filter((t) => {
    const matchesTitle = t.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = t.category?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = Array.isArray(t.tags) && t.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTitle || matchesCategory || matchesTags;
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Template Library</h1>
          <p className="text-muted-foreground">Browse and use professional prompt templates</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Templates ({filteredTemplates.length})</h2>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredTemplates.length === 0 ? (
                <p className="text-muted-foreground text-sm">No templates found</p>
              ) : (
                filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-colors ${
                      selectedTemplate?.id === template.id
                        ? "bg-primary/10 border-primary"
... [truncated, total 5948 chars] ...

```

---
## Frontend - Core Files

### client/src/App.tsx

```typescript
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Optimizer from "./pages/Optimizer";
import History from "./pages/History";
import BatchOptimizer from "./pages/BatchOptimizer";
import ABTest from "./pages/ABTest";
import VideoExtender from "./pages/VideoExtender";
import AnalysisTools from "./pages/AnalysisTools";
import Templates from "./pages/Templates";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/optimizer" component={Optimizer} />
      <Route path="/history" component={History} />
      <Route path="/batch" component={BatchOptimizer} />
      <Route path="/ab-test" component={ABTest} />
      <Route path="/extender" component={VideoExtender} />
      <Route path="/analysis" component={AnalysisTools} />
      <Route path="/templates" component={Templates} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

```

### client/src/main.tsx

```typescript
import { trpc } from "@/lib/trpc";
import { UNAUTHED_ERR_MSG } from '@shared/const';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { createRoot } from "react-dom/client";
import superjson from "superjson";
import App from "./App";
import { getLoginUrl } from "./const";
import "./index.css";

const queryClient = new QueryClient();

const redirectToLoginIfUnauthorized = (error: unknown) => {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;

  const isUnauthorized = error.message === UNAUTHED_ERR_MSG;

  if (!isUnauthorized) return;

  window.location.href = getLoginUrl();
};

queryClient.getQueryCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.query.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Query Error]", error);
  }
});

queryClient.getMutationCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.mutation.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Mutation Error]", error);
  }
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
        });
      },
    }),
  ],
});

createRoot(document.getElementById("root")!).render(
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </trpc.Provider>
);

```

### client/src/lib/trpc.ts

```typescript
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../server/routers";

export const trpc = createTRPCReact<AppRouter>();

```

### client/src/const.ts

```typescript
export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

```

### client/src/index.css

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --primary: oklch(0.6 0.25 290);
  --primary-foreground: oklch(0.98 0 0);
  --sidebar-primary: oklch(0.6 0.25 290);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --chart-1: oklch(0.7 0.2 290);
  --chart-2: oklch(0.6 0.25 290);
  --chart-3: oklch(0.55 0.25 300);
  --chart-4: oklch(0.5 0.22 310);
  
... [truncated, total 5811 chars] ...

```

---
## Shared Code

### shared/const.ts

```typescript
export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';

```

### shared/types.ts

```typescript
/**
 * Unified type exports
 * Import shared types from this single entry point.
 */

export type * from "../drizzle/schema";
export * from "./_core/errors";

```

---
## Project TODO

### todo.md

# Sora 2 Prompt Generator - Project TODO

## Core Optimizer Features
- [x] Prompt optimizer with textarea input
- [x] Production level presets (Balanced, High Quality, Fast)
- [x] Pacing/mood controls (Very Calm, Moderate, Chaotic)
- [x] Video style management
- [x] Output length preference controls (Concise, Balanced, Detailed)
- [x] Timestamp format toggle (0-1s:, 1-2.5s:, etc.)
- [x] Timeline control feature
- [x] Duration control (max 15s)
- [x] Cinematic pro format toggle
- [x] Surprise Me! button (random prompt generator)

## Media & Analysis Features
- [x] Smart Video Analysis (upload videos/images for AI analysis)
- [x] Frame-by-frame video analysis
- [x] Character detection from media
- [x] Action/movement detection
- [x] Lighting analysis from media
- [x] Camera angle detection
- [x] Environment detection
- [x] Timing analysis from media
- [x] Generate from Media feature
- [x] Batch Optimizer
- [x] A/B Testing feature
- [x] Video Extender

## Advanced Analysis Tools (PRO)
- [x] Scene Continuity Checker
- [x] Director Style Transfer
- [x] Technical Feasibility Analysis
- [x] Keyword Expander
- [x] Script to Shot List converter
- [x] Advanced Storyboard Generator
- [x] Campaign Generator

## Sora 2 Cameos & Enhancements
- [x] Sora 2 Cameos mapping system
- [x] Character name to handle mapping
- [x] Quick Add Popular Cameos
- [x] Fight scene enhancement toggle
- [x] Auto-enhance fight/combat scenes with anime battle details

## GPT-5 PRO Mode & Advanced Controls
- [x] GPT-5 PRO Mode toggle
- [x] Temperature control
- [x] Top P control
- [x] Frequency Penalty control
- [x] Presence Penalty control
- [x] Token Multiplier control
- [x] Copyright Bypass Mode (experimental)

## Technical Parameters
- [x] Camera Angle controls
- [x] Lighting controls
- [x] Camera Movement controls
- [ ] Audio Settings (Speech/Dialogue, Background Music, Sound Effects)

## Database & Storage
- [x] Database schema for prompts, templates, and user history
- [x] User prompts table
- [x] Templates table
- [x] Cameo mappings table
- [x] Prompt history tracking
- [x] Saved prompts management

## Backend API (tRPC)
- [x] Gemini AI integration for prompt optimization
- [x] Prompt optimization procedure
- [x] History retrieval procedures
- [x] Template procedures
- [x] Cameo mapping procedures
- [x] Media analysis procedures
- [x] Batch optimization procedures
- [x] A/B testing procedures
- [x] Video extension procedures
- [x] Scene continuity analysis
- [x] Director style transfer
- [x] Technical feasibility analysis
- [x] Keyword expansion
- [x] Storyboard generation
- [x] Campaign generation

## UI/UX Pages & Components
- [x] Modern landing page with feature showcase
- [x] Main prompt optimizer interface
- [x] Settings panel with tabs (Basic, Advanced, Cameos)
- [x] History page with saved/all prompts
- [x] Templates gallery page
- [x] Batch optimizer page
- [x] A/B testing page
- [x] Video extender page
- [x] Media upload page
- [x] Analysis results pages
- [x] Responsive design
- [x] Dark theme

## Navigation & Layout
- [x] Home page
- [x] Optimizer page
- [x] History page
- [x] Templates page
- [x] Batch page
- [x] A/B Test page
- [x] Extender page
- [x] Analysis pages
- [x] Navigation menu/sidebar

## Additional Features
- [x] Surprise Me! random prompt generation
- [ ] Share/Export prompts
- [ ] Keyboard shortcuts (Ctrl+/ for shortcuts menu)
- [ ] Feedback system
- [ ] Tutorial/Help section
- [ ] FAQ page
- [ ] Blog section
- [ ] Contact page
- [ ] About page
- [ ] Privacy Policy page
- [ ] Terms of Service page

## Testing
- [x] Unit tests for router structure
- [x] Auth procedure tests
- [x] Cameo endpoint tests
- [ ] Input validation tests for all features
- [ ] Integration tests for media analysis
- [ ] Integration tests for batch operations


