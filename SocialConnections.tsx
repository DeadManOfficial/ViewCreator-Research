/**
 * Social Connections Component
 * Handles OAuth popup flow for connecting social media accounts.
 */

import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  Loader2, 
  Check, 
  X,
  ExternalLink,
  Unplug
} from "lucide-react";

// TikTok icon (not in lucide)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

type SocialProvider = "google" | "youtube" | "tiktok" | "instagram" | "facebook" | "x";

interface SocialPlatform {
  id: SocialProvider;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const PLATFORMS: SocialPlatform[] = [
  {
    id: "youtube",
    name: "YouTube",
    icon: <Youtube className="h-5 w-5" />,
    color: "bg-red-500 hover:bg-red-600",
    description: "Upload videos and manage your channel",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: <TikTokIcon />,
    color: "bg-black hover:bg-gray-800",
    description: "Post short-form videos",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    description: "Share photos and reels",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    color: "bg-blue-600 hover:bg-blue-700",
    description: "Post to pages and groups",
  },
  {
    id: "x",
    name: "X (Twitter)",
    icon: <Twitter className="h-5 w-5" />,
    color: "bg-black hover:bg-gray-800",
    description: "Share tweets and threads",
  },
];

interface ConnectedAccount {
  id: number;
  platform: string;
  platformUsername: string | null;
  isActive: boolean;
  createdAt: Date;
}

export function SocialConnections() {
  const [connectingProvider, setConnectingProvider] = useState<SocialProvider | null>(null);
  const [popupWindow, setPopupWindow] = useState<Window | null>(null);

  // Fetch connected accounts
  const { data: connectedAccounts, refetch: refetchAccounts } = trpc.social.getConnectedAccounts.useQuery();

  // Get auth URL mutation
  const getAuthUrl = trpc.social.getAuthUrl.useMutation();

  // Disconnect mutation
  const disconnect = trpc.social.disconnect.useMutation({
    onSuccess: () => {
      toast.success("Account disconnected");
      refetchAccounts();
    },
    onError: () => {
      toast.error("Failed to disconnect account");
    },
  });

  // Check if a platform is connected
  const isConnected = useCallback((platform: SocialProvider): ConnectedAccount | undefined => {
    return connectedAccounts?.find(
      (acc) => acc.platform === platform && acc.isActive
    );
  }, [connectedAccounts]);

  // Handle OAuth popup message
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from our own origin
      if (event.origin !== window.location.origin) return;

      if (event.data?.type === "oauth_complete") {
        const { success, provider, error } = event.data;
        
        if (success) {
          toast.success(`Successfully connected ${provider}`);
          refetchAccounts();
        } else {
          toast.error(`Failed to connect: ${error || "Unknown error"}`);
        }
        
        setConnectingProvider(null);
        popupWindow?.close();
        setPopupWindow(null);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [popupWindow, refetchAccounts]);

  // Check URL params for OAuth callback results (for non-popup flow fallback)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const success = params.get("success");
    const error = params.get("error");

    if (success) {
      toast.success(`Successfully connected ${success}`);
      refetchAccounts();
      // Clean up URL
      window.history.replaceState({}, "", window.location.pathname);
    } else if (error) {
      toast.error(`Connection failed: ${error}`);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [refetchAccounts]);

  // Poll for popup close
  useEffect(() => {
    if (!popupWindow) return;

    const interval = setInterval(() => {
      if (popupWindow.closed) {
        setConnectingProvider(null);
        setPopupWindow(null);
        // Refetch in case the connection was successful
        refetchAccounts();
      }
    }, 500);

    return () => clearInterval(interval);
  }, [popupWindow, refetchAccounts]);

  // Connect to a social platform
  const handleConnect = async (provider: SocialProvider) => {
    setConnectingProvider(provider);

    try {
      const result = await getAuthUrl.mutateAsync({ provider });

      if (!result.success || !result.url) {
        toast.error(result.error || "Failed to get authorization URL");
        setConnectingProvider(null);
        return;
      }

      // Open popup window
      const width = 600;
      const height = 700;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;

      const popup = window.open(
        result.url,
        `Connect ${provider}`,
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
      );

      if (popup) {
        setPopupWindow(popup);
        popup.focus();
      } else {
        // Popup blocked - fall back to redirect
        toast.info("Popup blocked. Redirecting...");
        window.location.href = result.url;
      }
    } catch (error) {
      toast.error("Failed to initiate connection");
      setConnectingProvider(null);
    }
  };

  // Disconnect from a social platform
  const handleDisconnect = async (accountId: number) => {
    disconnect.mutate({ accountId });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Connected Accounts
        </CardTitle>
        <CardDescription>
          Connect your social media accounts to publish content directly from ViewCreator.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {PLATFORMS.map((platform) => {
            const connected = isConnected(platform.id);
            const isLoading = connectingProvider === platform.id;

            return (
              <div
                key={platform.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg text-white ${platform.color}`}>
                    {platform.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{platform.name}</span>
                      {connected && (
                        <Badge variant="secondary" className="text-xs">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {connected?.platformUsername || platform.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {connected ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDisconnect(connected.id)}
                      disabled={disconnect.isPending}
                      className="text-destructive hover:text-destructive"
                    >
                      {disconnect.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Unplug className="h-4 w-4 mr-1" />
                          Disconnect
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleConnect(platform.id)}
                      disabled={isLoading}
                      className={platform.color}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        "Connect"
                      )}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> When you click Connect, a popup window will open for you to 
            sign in to the platform and authorize ViewCreator. Make sure popups are enabled 
            for this site.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
