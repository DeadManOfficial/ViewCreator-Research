/**
 * Social OAuth Callback Routes
 * Handles OAuth callbacks from external social media platforms.
 */

import type { Express, Request, Response } from "express";
import { exchangeCodeForToken, saveSocialAccount, SocialProvider } from "../socialOAuth";
import { getUserByOpenId } from "../db";
import { sdk } from "./sdk";
import cookie from "cookie";
import { COOKIE_NAME } from "@shared/const";

const VALID_PROVIDERS = ["google", "youtube", "tiktok", "instagram", "facebook", "x"];

/**
 * Send a response that closes the popup and notifies the parent window
 */
function sendPopupResponse(res: Response, success: boolean, provider: string, error?: string) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>OAuth Complete</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: #f5f5f5;
          }
          .container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .success { color: #22c55e; }
          .error { color: #ef4444; }
          p { color: #666; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <div class="container">
          ${success 
            ? `<h2 class="success">✓ Connected to ${provider}</h2>
               <p>This window will close automatically...</p>`
            : `<h2 class="error">✗ Connection Failed</h2>
               <p>${error || 'An error occurred'}</p>
               <p>This window will close automatically...</p>`
          }
        </div>
        <script>
          // Send message to parent window
          if (window.opener) {
            window.opener.postMessage({
              type: 'oauth_complete',
              success: ${success},
              provider: '${provider}',
              error: ${error ? `'${error}'` : 'null'}
            }, window.location.origin);
            
            // Close popup after a short delay
            setTimeout(() => window.close(), 1500);
          } else {
            // If no opener (direct navigation), redirect
            setTimeout(() => {
              window.location.href = '/settings/connections?${success ? `success=${provider}` : `error=${error || 'unknown'}`}';
            }, 2000);
          }
        </script>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}

export function registerSocialOAuthRoutes(app: Express) {
  /**
   * Handle OAuth callback from social providers
   * Route: GET /api/social/callback/:provider
   */
  app.get("/api/social/callback/:provider", async (req: Request, res: Response) => {
    const { provider } = req.params;
    const { code, state, error, error_description } = req.query;

    // Validate provider
    if (!VALID_PROVIDERS.includes(provider)) {
      sendPopupResponse(res, false, provider, 'Invalid provider');
      return;
    }

    // Handle OAuth errors
    if (error) {
      console.error(`[SocialOAuth] Provider ${provider} returned error:`, error, error_description);
      sendPopupResponse(res, false, provider, String(error_description || error));
      return;
    }

    // Validate required parameters
    if (!code || !state) {
      sendPopupResponse(res, false, provider, 'Missing required parameters');
      return;
    }

    try {
      // Decode state to get user info
      let stateData: { userId: number; provider: string; timestamp: number };
      try {
        stateData = JSON.parse(Buffer.from(String(state), "base64").toString());
      } catch {
        sendPopupResponse(res, false, provider, 'Invalid state parameter');
        return;
      }

      // Verify the state is recent (within 10 minutes)
      if (Date.now() - stateData.timestamp > 10 * 60 * 1000) {
        sendPopupResponse(res, false, provider, 'Authorization expired. Please try again.');
        return;
      }

      // Get the current user from session cookie
      const cookies = cookie.parse(req.headers.cookie || "");
      const sessionToken = cookies[COOKIE_NAME];
      
      if (!sessionToken) {
        sendPopupResponse(res, false, provider, 'Not authenticated. Please log in first.');
        return;
      }

      // Verify session and get user
      const payload = await sdk.verifySession(sessionToken);
      if (!payload) {
        sendPopupResponse(res, false, provider, 'Invalid session. Please log in again.');
        return;
      }
      const openId = payload.openId;

      const user = await getUserByOpenId(openId);
      if (!user) {
        sendPopupResponse(res, false, provider, 'User not found');
        return;
      }

      // Exchange code for tokens
      const tokenData = await exchangeCodeForToken(provider as SocialProvider, String(code));
      
      if (!tokenData) {
        sendPopupResponse(res, false, provider, 'Failed to exchange authorization code');
        return;
      }

      // Save the social account
      const expiresAt = tokenData.expiresIn 
        ? new Date(Date.now() + tokenData.expiresIn * 1000) 
        : undefined;

      await saveSocialAccount(user.id, provider as SocialProvider, {
        platformUserId: tokenData.platformUserId || "unknown",
        platformUsername: tokenData.platformUsername,
        accessToken: tokenData.accessToken,
        refreshToken: tokenData.refreshToken,
        tokenExpiresAt: expiresAt,
      });

      // Send success response
      sendPopupResponse(res, true, provider);
    } catch (error) {
      console.error(`[SocialOAuth] Callback error for ${provider}:`, error);
      sendPopupResponse(res, false, provider, 'An unexpected error occurred');
    }
  });
}
