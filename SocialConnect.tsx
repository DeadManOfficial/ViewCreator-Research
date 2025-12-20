import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle2, AlertCircle, RefreshCw, ExternalLink, Trash2 } from "lucide-react";
import { socialService } from "@/services/socialService";
import type { SocialAccount, SocialPlatform } from "@/types/index";
import { toast } from "sonner";

const PLATFORMS: { id: SocialPlatform; name: string; icon: string; color: string }[] = [
  { id: "youtube", name: "YouTube", icon: "youtube", color: "bg-red-600" },
  { id: "tiktok", name: "TikTok", icon: "music", color: "bg-black" },
  { id: "instagram", name: "Instagram", icon: "instagram", color: "bg-pink-600" },
  { id: "x", name: "X (Twitter)", icon: "twitter", color: "bg-black" },
  { id: "facebook", name: "Facebook", icon: "facebook", color: "bg-blue-600" },
];

export function SocialConnect() {
  const [accounts, setAccounts] = useState<SocialAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [connectingPlatform, setConnectingPlatform] = useState<SocialPlatform | null>(null);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      setIsLoading(true);
      const data = await socialService.getConnectedAccounts();
      setAccounts(data);
    } catch (error) {
      toast.error("Failed to load connected accounts");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = async (platform: SocialPlatform) => {
    try {
      setConnectingPlatform(platform);
      const { url } = await socialService.getOAuthUrl(platform);
      
      // Open OAuth popup
      const width = 600;
      const height = 700;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      
      const popup = window.open(
        url,
        `Connect ${platform}`,
        `width=${width},height=${height},left=${left},top=${top}`
      );

      // Listen for message from popup
      const messageHandler = async (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        
        if (event.data.type === "OAUTH_SUCCESS" && event.data.platform === platform) {
          window.removeEventListener("message", messageHandler);
          popup?.close();
          
          try {
            await socialService.connectAccount(platform, event.data.code);
            toast.success(`Successfully connected ${platform}`);
            loadAccounts();
          } catch (error) {
            toast.error(`Failed to connect ${platform}`);
          } finally {
            setConnectingPlatform(null);
          }
        }
      };

      window.addEventListener("message", messageHandler);
    } catch (error) {
      toast.error(`Failed to initiate connection for ${platform}`);
      setConnectingPlatform(null);
    }
  };

  const handleDisconnect = async (accountId: string) => {
    try {
      await socialService.disconnectAccount(accountId);
      toast.success("Account disconnected");
      setAccounts(accounts.filter(acc => acc.id !== accountId));
    } catch (error) {
      toast.error("Failed to disconnect account");
    }
  };

  const handleRefresh = async (accountId: string) => {
    try {
      await socialService.refreshTokens(accountId);
      toast.success("Connection refreshed");
      loadAccounts();
    } catch (error) {
      toast.error("Failed to refresh connection");
    }
  };

  const getPlatformAccounts = (platform: SocialPlatform) => {
    return accounts.filter(acc => acc.platform === platform);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PLATFORMS.map((platform) => {
          const connectedAccounts = getPlatformAccounts(platform.id);
          const isConnected = connectedAccounts.length > 0;

          return (
            <Card key={platform.id} className="overflow-hidden">
              <div className={`h-2 ${platform.color}`} />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {platform.name}
                  </CardTitle>
                  {isConnected ? (
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Not Connected</Badge>
                  )}
                </div>
                <CardDescription>
                  {isConnected 
                    ? `${connectedAccounts.length} account${connectedAccounts.length > 1 ? 's' : ''} connected`
                    : "Connect to publish content and track analytics"
                  }
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {isConnected ? (
                  <div className="space-y-4">
                    {connectedAccounts.map((account) => (
                      <div key={account.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center">
                            {/* Platform Icon Placeholder */}
                            <div className={`h-4 w-4 rounded-full ${platform.color}`} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{account.accountName}</span>
                            <span className="text-xs text-muted-foreground">
                              ID: {account.accountId.substring(0, 8)}...
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleRefresh(account.id)}
                            title="Refresh Connection"
                          >
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleDisconnect(account.id)}
                            title="Disconnect"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-muted/50 rounded-lg border border-dashed text-center">
                    <p className="text-sm text-muted-foreground">
                      Connect your {platform.name} account to unlock auto-posting and analytics.
                    </p>
                  </div>
                )}
              </CardContent>

              <CardFooter className="bg-muted/20 p-4">
                <Button 
                  className="w-full" 
                  variant={isConnected ? "outline" : "default"}
                  onClick={() => handleConnect(platform.id)}
                  disabled={connectingPlatform === platform.id}
                >
                  {connectingPlatform === platform.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      {isConnected ? "Connect Another Account" : "Connect Account"}
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Security Note</AlertTitle>
        <AlertDescription>
          ViewCreator uses official APIs for all platforms. We never store your passwords. 
          Access tokens are encrypted at rest using AES-256 encryption.
        </AlertDescription>
      </Alert>
    </div>
  );
}
