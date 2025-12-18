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
            <CardHeader>
              <CardTitle>Input Prompts</CardTitle>
              <CardDescription>Enter one prompt per line</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Prompt 1&#10;Prompt 2&#10;Prompt 3..."
                value={prompts}
                onChange={(e) => setPrompts(e.target.value)}
                className="min-h-[300px]"
              />

              <div>
                <Label>Preset</Label>
                <Select value={preset} onValueChange={(v: any) => setPreset(v)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="high_quality">High Quality</SelectItem>
                    <SelectItem value="fast">Fast</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Pacing</Label>
                <Select value={pacing} onValueChange={(v: any) => setPacing(v)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very_calm">Very Calm</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="chaotic">Chaotic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleOptimize}
                disabled={isOptimizing || !prompts.trim()}
                className="w-full"
              >
                {isOptimizing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Optimize All
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Results</h2>
            {results.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  Optimized prompts will appear here
                </CardContent>
              </Card>
            ) : (
              results.map((result, idx) => (
                <Card key={idx}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Prompt {idx + 1}</CardTitle>
                      <Badge>{idx + 1}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Original</p>
                      <p className="text-sm text-muted-foreground">{result.original}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Optimized</p>
                      <Streamdown>{result.optimized}</Streamdown>
                    </div>
                    <Button
                      onClick={() => handleCopy(result.optimized)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
