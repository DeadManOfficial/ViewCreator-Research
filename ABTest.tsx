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
                  placeholder="Enter your prompt..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[150px] mt-2"
                />
              </div>

              <div>
                <Label htmlFor="variants">Number of Variants</Label>
                <Select value={variants.toString()} onValueChange={(v) => setVariants(parseInt(v))}>
                  <SelectTrigger id="variants" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 Variants</SelectItem>
                    <SelectItem value="3">3 Variants</SelectItem>
                    <SelectItem value="4">4 Variants</SelectItem>
                    <SelectItem value="5">5 Variants</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <GitCompare className="w-4 h-4 mr-2" />
                    Generate Variants
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Variants</h2>
            {results.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  Generated variants will appear here
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {results.map((result) => (
                  <Card key={result.variantNumber}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Variant {result.variantNumber}</CardTitle>
                        <Badge variant="secondary">Option {result.variantNumber}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Streamdown>{result.prompt}</Streamdown>
                      <Button
                        onClick={() => handleCopy(result.prompt)}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Variant
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
