import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { 
  getAuthorizationUrl, 
  getUserSocialAccounts, 
  disconnectSocialAccount,
  SocialProvider 
} from "./socialOAuth";

// Valid social providers
const socialProviderSchema = z.enum(["google", "youtube", "tiktok", "instagram", "facebook", "x"]);

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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

  // Social OAuth routes
  social: router({
    /**
     * Get the OAuth authorization URL for a social provider
     */
    getAuthUrl: protectedProcedure
      .input(z.object({ provider: socialProviderSchema }))
      .mutation(async ({ input, ctx }) => {
        const state = Buffer.from(JSON.stringify({
          userId: ctx.user.id,
          provider: input.provider,
          timestamp: Date.now(),
        })).toString("base64");

        const url = getAuthorizationUrl(input.provider as SocialProvider, state);
        
        if (!url) {
          return { 
            success: false, 
            error: `${input.provider} is not configured. Please add the API credentials.` 
          };
        }

        return { success: true, url };
      }),

    /**
     * Get all connected social accounts for the current user
     */
    getConnectedAccounts: protectedProcedure.query(async ({ ctx }) => {
      const accounts = await getUserSocialAccounts(ctx.user.id);
      
      // Don't expose tokens to the frontend
      return accounts.map(account => ({
        id: account.id,
        platform: account.platform,
        platformUsername: account.platformUsername,
        isActive: account.isActive === 1,
        createdAt: account.createdAt,
      }));
    }),

    /**
     * Disconnect a social account
     */
    disconnect: protectedProcedure
      .input(z.object({ accountId: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const success = await disconnectSocialAccount(ctx.user.id, input.accountId);
        return { success };
      }),
  }),
});

export type AppRouter = typeof appRouter;
