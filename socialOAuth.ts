/**
 * Social OAuth Service
 * Handles OAuth flows for external social media platforms.
 */

import { eq, and } from "drizzle-orm";
import { getDb } from "./db";
import { socialAccounts, InsertSocialAccount, SocialAccount } from "../drizzle/schema";
import { ENV } from "./_core/env";

// OAuth Provider Configuration
export type SocialProvider = "google" | "youtube" | "tiktok" | "instagram" | "facebook" | "x";

interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  authUrl: string;
  tokenUrl: string;
  scopes: string[];
  redirectUri: string;
}

// Get the base URL for redirects
const getBaseUrl = () => {
  // In production, use the actual domain
  // In development, use localhost
  return process.env.NODE_ENV === "production" 
    ? `https://${process.env.VITE_APP_DOMAIN || "localhost:3000"}`
    : "http://localhost:3000";
};

// Provider configurations
const getProviderConfig = (provider: SocialProvider): OAuthConfig | null => {
  const baseUrl = getBaseUrl();
  
  switch (provider) {
    case "google":
    case "youtube":
      return {
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenUrl: "https://oauth2.googleapis.com/token",
        scopes: provider === "youtube" 
          ? ["https://www.googleapis.com/auth/youtube.upload", "https://www.googleapis.com/auth/youtube.readonly", "openid", "email", "profile"]
          : ["openid", "email", "profile"],
        redirectUri: `${baseUrl}/api/social/callback/${provider}`,
      };
    
    case "tiktok":
      return {
        clientId: process.env.TIKTOK_CLIENT_KEY || "",
        clientSecret: process.env.TIKTOK_CLIENT_SECRET || "",
        authUrl: "https://www.tiktok.com/v2/auth/authorize/",
        tokenUrl: "https://open.tiktokapis.com/v2/oauth/token/",
        scopes: ["user.info.basic", "video.publish", "video.upload"],
        redirectUri: `${baseUrl}/api/social/callback/tiktok`,
      };
    
    case "instagram":
      return {
        clientId: process.env.INSTAGRAM_CLIENT_ID || "",
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || "",
        authUrl: "https://api.instagram.com/oauth/authorize",
        tokenUrl: "https://api.instagram.com/oauth/access_token",
        scopes: ["user_profile", "user_media"],
        redirectUri: `${baseUrl}/api/social/callback/instagram`,
      };
    
    case "facebook":
      return {
        clientId: process.env.FACEBOOK_APP_ID || "",
        clientSecret: process.env.FACEBOOK_APP_SECRET || "",
        authUrl: "https://www.facebook.com/v18.0/dialog/oauth",
        tokenUrl: "https://graph.facebook.com/v18.0/oauth/access_token",
        scopes: ["public_profile", "pages_show_list", "pages_read_engagement"],
        redirectUri: `${baseUrl}/api/social/callback/facebook`,
      };
    
    case "x":
      return {
        clientId: process.env.X_CLIENT_ID || "",
        clientSecret: process.env.X_CLIENT_SECRET || "",
        authUrl: "https://twitter.com/i/oauth2/authorize",
        tokenUrl: "https://api.twitter.com/2/oauth2/token",
        scopes: ["tweet.read", "tweet.write", "users.read", "offline.access"],
        redirectUri: `${baseUrl}/api/social/callback/x`,
      };
    
    default:
      return null;
  }
};

/**
 * Generate the OAuth authorization URL for a provider
 */
export function getAuthorizationUrl(provider: SocialProvider, state: string): string | null {
  const config = getProviderConfig(provider);
  if (!config || !config.clientId) {
    console.warn(`[SocialOAuth] Provider ${provider} not configured`);
    return null;
  }

  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    response_type: "code",
    scope: config.scopes.join(" "),
    state,
  });

  // TikTok uses client_key instead of client_id
  if (provider === "tiktok") {
    params.delete("client_id");
    params.set("client_key", config.clientId);
  }

  // X (Twitter) requires code_challenge for PKCE
  if (provider === "x") {
    params.set("code_challenge", "challenge");
    params.set("code_challenge_method", "plain");
  }

  return `${config.authUrl}?${params.toString()}`;
}

/**
 * Exchange authorization code for access token
 */
export async function exchangeCodeForToken(
  provider: SocialProvider, 
  code: string
): Promise<{ accessToken: string; refreshToken?: string; expiresIn?: number; platformUserId?: string; platformUsername?: string } | null> {
  const config = getProviderConfig(provider);
  if (!config) return null;

  try {
    const body = new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: config.redirectUri,
    });

    // TikTok uses different parameter names
    if (provider === "tiktok") {
      body.delete("client_id");
      body.set("client_key", config.clientId);
    }

    const response = await fetch(config.tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`[SocialOAuth] Token exchange failed for ${provider}:`, data);
      return null;
    }

    // Normalize response across providers
    let result = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      platformUserId: undefined as string | undefined,
      platformUsername: undefined as string | undefined,
    };

    // Fetch user info to get platform user ID
    const userInfo = await fetchUserInfo(provider, result.accessToken);
    if (userInfo) {
      result.platformUserId = userInfo.id;
      result.platformUsername = userInfo.username;
    }

    return result;
  } catch (error) {
    console.error(`[SocialOAuth] Token exchange error for ${provider}:`, error);
    return null;
  }
}

/**
 * Fetch user info from the provider
 */
async function fetchUserInfo(
  provider: SocialProvider, 
  accessToken: string
): Promise<{ id: string; username?: string } | null> {
  try {
    let url: string;
    let headers: Record<string, string> = {
      Authorization: `Bearer ${accessToken}`,
    };

    switch (provider) {
      case "google":
      case "youtube":
        url = "https://www.googleapis.com/oauth2/v2/userinfo";
        break;
      case "tiktok":
        url = "https://open.tiktokapis.com/v2/user/info/?fields=open_id,display_name,avatar_url";
        break;
      case "instagram":
        url = `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`;
        headers = {}; // Instagram uses query param
        break;
      case "facebook":
        url = `https://graph.facebook.com/me?fields=id,name&access_token=${accessToken}`;
        headers = {};
        break;
      case "x":
        url = "https://api.twitter.com/2/users/me";
        break;
      default:
        return null;
    }

    const response = await fetch(url, { headers });
    const data = await response.json();

    if (!response.ok) {
      console.error(`[SocialOAuth] User info fetch failed for ${provider}:`, data);
      return null;
    }

    // Normalize user info across providers
    switch (provider) {
      case "google":
      case "youtube":
        return { id: data.id, username: data.email };
      case "tiktok":
        return { id: data.data?.user?.open_id, username: data.data?.user?.display_name };
      case "instagram":
        return { id: data.id, username: data.username };
      case "facebook":
        return { id: data.id, username: data.name };
      case "x":
        return { id: data.data?.id, username: data.data?.username };
      default:
        return null;
    }
  } catch (error) {
    console.error(`[SocialOAuth] User info error for ${provider}:`, error);
    return null;
  }
}

/**
 * Save or update a social account connection
 */
export async function saveSocialAccount(
  userId: number,
  provider: SocialProvider,
  data: {
    platformUserId: string;
    platformUsername?: string;
    accessToken: string;
    refreshToken?: string;
    tokenExpiresAt?: Date;
    scopes?: string;
  }
): Promise<SocialAccount | null> {
  const db = await getDb();
  if (!db) return null;

  try {
    // Check if account already exists
    const existing = await db
      .select()
      .from(socialAccounts)
      .where(
        and(
          eq(socialAccounts.userId, userId),
          eq(socialAccounts.platform, provider),
          eq(socialAccounts.platformUserId, data.platformUserId)
        )
      )
      .limit(1);

    if (existing.length > 0) {
      // Update existing
      await db
        .update(socialAccounts)
        .set({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken || null,
          tokenExpiresAt: data.tokenExpiresAt || null,
          platformUsername: data.platformUsername || null,
          scopes: data.scopes || null,
          isActive: 1,
        })
        .where(eq(socialAccounts.id, existing[0].id));
      
      return { ...existing[0], ...data };
    } else {
      // Insert new
      const insertData: InsertSocialAccount = {
        userId,
        platform: provider,
        platformUserId: data.platformUserId,
        platformUsername: data.platformUsername || null,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken || null,
        tokenExpiresAt: data.tokenExpiresAt || null,
        scopes: data.scopes || null,
        isActive: 1,
      };

      await db.insert(socialAccounts).values(insertData);
      
      // Fetch the inserted record
      const inserted = await db
        .select()
        .from(socialAccounts)
        .where(
          and(
            eq(socialAccounts.userId, userId),
            eq(socialAccounts.platformUserId, data.platformUserId)
          )
        )
        .limit(1);
      
      return inserted[0] || null;
    }
  } catch (error) {
    console.error(`[SocialOAuth] Save account error:`, error);
    return null;
  }
}

/**
 * Get all social accounts for a user
 */
export async function getUserSocialAccounts(userId: number): Promise<SocialAccount[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db
      .select()
      .from(socialAccounts)
      .where(and(eq(socialAccounts.userId, userId), eq(socialAccounts.isActive, 1)));
  } catch (error) {
    console.error(`[SocialOAuth] Get accounts error:`, error);
    return [];
  }
}

/**
 * Disconnect a social account
 */
export async function disconnectSocialAccount(userId: number, accountId: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  try {
    await db
      .update(socialAccounts)
      .set({ isActive: 0 })
      .where(and(eq(socialAccounts.id, accountId), eq(socialAccounts.userId, userId)));
    return true;
  } catch (error) {
    console.error(`[SocialOAuth] Disconnect error:`, error);
    return false;
  }
}
