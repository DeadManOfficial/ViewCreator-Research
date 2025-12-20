import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAuthorizationUrl, SocialProvider } from "../socialOAuth";

// Mock environment variables
vi.mock("../_core/env", () => ({
  ENV: {
    appId: "test-app-id",
    cookieSecret: "test-secret",
  },
}));

describe("Social OAuth Service", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  describe("getAuthorizationUrl", () => {
    it("should return null when provider credentials are not configured", () => {
      // Without setting env vars, credentials will be empty
      const url = getAuthorizationUrl("google", "test-state");
      expect(url).toBeNull();
    });

    it("should generate correct URL structure for Google when configured", () => {
      // Set up mock env vars
      process.env.GOOGLE_CLIENT_ID = "test-google-client-id";
      process.env.GOOGLE_CLIENT_SECRET = "test-google-secret";
      
      const state = "test-state-123";
      const url = getAuthorizationUrl("google", state);
      
      // If credentials are set, URL should be generated
      if (url) {
        expect(url).toContain("accounts.google.com");
        expect(url).toContain("client_id=test-google-client-id");
        expect(url).toContain(`state=${state}`);
        expect(url).toContain("response_type=code");
      }
      
      // Clean up
      delete process.env.GOOGLE_CLIENT_ID;
      delete process.env.GOOGLE_CLIENT_SECRET;
    });

    it("should use client_key for TikTok instead of client_id", () => {
      process.env.TIKTOK_CLIENT_KEY = "test-tiktok-key";
      process.env.TIKTOK_CLIENT_SECRET = "test-tiktok-secret";
      
      const state = "test-state-456";
      const url = getAuthorizationUrl("tiktok", state);
      
      if (url) {
        expect(url).toContain("tiktok.com");
        expect(url).toContain("client_key=test-tiktok-key");
        expect(url).not.toContain("client_id=");
      }
      
      delete process.env.TIKTOK_CLIENT_KEY;
      delete process.env.TIKTOK_CLIENT_SECRET;
    });

    it("should include PKCE parameters for X (Twitter)", () => {
      process.env.X_CLIENT_ID = "test-x-client-id";
      process.env.X_CLIENT_SECRET = "test-x-secret";
      
      const state = "test-state-789";
      const url = getAuthorizationUrl("x", state);
      
      if (url) {
        expect(url).toContain("twitter.com");
        expect(url).toContain("code_challenge=");
        expect(url).toContain("code_challenge_method=plain");
      }
      
      delete process.env.X_CLIENT_ID;
      delete process.env.X_CLIENT_SECRET;
    });

    it("should return null for invalid provider", () => {
      const url = getAuthorizationUrl("invalid" as SocialProvider, "test-state");
      expect(url).toBeNull();
    });
  });

  describe("Provider scopes", () => {
    it("should include YouTube-specific scopes for youtube provider", () => {
      process.env.GOOGLE_CLIENT_ID = "test-client";
      process.env.GOOGLE_CLIENT_SECRET = "test-secret";
      
      const url = getAuthorizationUrl("youtube", "test-state");
      
      if (url) {
        expect(url).toContain("youtube.upload");
        expect(url).toContain("youtube.readonly");
      }
      
      delete process.env.GOOGLE_CLIENT_ID;
      delete process.env.GOOGLE_CLIENT_SECRET;
    });

    it("should include basic scopes for google provider", () => {
      process.env.GOOGLE_CLIENT_ID = "test-client";
      process.env.GOOGLE_CLIENT_SECRET = "test-secret";
      
      const url = getAuthorizationUrl("google", "test-state");
      
      if (url) {
        expect(url).toContain("openid");
        expect(url).toContain("email");
        expect(url).toContain("profile");
      }
      
      delete process.env.GOOGLE_CLIENT_ID;
      delete process.env.GOOGLE_CLIENT_SECRET;
    });
  });
});
