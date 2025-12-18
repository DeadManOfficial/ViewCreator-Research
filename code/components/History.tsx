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
                {formatDistanceToNow(new Date(prompt.createdAt), { addSuffix: true })}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleToggleSave(prompt.id, prompt.isSaved)}
              >
                <Bookmark className={`w-4 h-4 ${prompt.isSaved ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(prompt.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Original Prompt</div>
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
              {prompt.originalPrompt}
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-2 flex items-center justify-between">
              <span>Optimized Prompt</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(prompt.optimizedPrompt)}
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <Card className="bg-muted/50">
              <CardContent className="pt-4 text-sm">
                <Streamdown>{prompt.optimizedPrompt}</Streamdown>
              </CardContent>
            </Card>
          </div>

          {settings && Object.keys(settings).length > 0 && (
            <div className="flex flex-wrap gap-2">
              {settings.preset && <Badge variant="secondary">{settings.preset}</Badge>}
              {settings.pacing && <Badge variant="secondary">{settings.pacing}</Badge>}
              {settings.cinematicProFormat && <Badge variant="outline">Cinematic</Badge>}
              {settings.useTimestamp && <Badge variant="outline">Timestamp</Badge>}
              {settings.fightSceneEnhancement && <Badge variant="outline">Fight Enhanced</Badge>}
              {settings.gpt5ProMode && <Badge variant="outline">GPT-5 PRO</Badge>}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <HistoryIcon className="w-10 h-10 text-primary" />
            Prompt History
          </h1>
          <p className="text-muted-foreground text-lg">
            View and manage your optimized prompts
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">
              All Prompts ({allPrompts.length})
            </TabsTrigger>
            <TabsTrigger value="saved">
              Saved ({savedPrompts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {allPrompts.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <HistoryIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No prompts yet. Start optimizing!</p>
                </CardContent>
              </Card>
            ) : (
              <div>
                {allPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            {savedPrompts.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Bookmark className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No saved prompts yet. Save your favorites!</p>
                </CardContent>
              </Card>
            ) : (
              <div>
                {savedPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
