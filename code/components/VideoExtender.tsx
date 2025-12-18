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
                placeholder="Enter your video prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[200px]"
              />

              <div>
                <Label>Extension Length</Label>
                <Select value={extensionLength} onValueChange={(v: any) => setExtensionLength(v)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (2-3 seconds)</SelectItem>
                    <SelectItem value="medium">Medium (4-6 seconds)</SelectItem>
                    <SelectItem value="long">Long (7-10 seconds)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleExtend}
                disabled={isExtending || !prompt.trim()}
                className="w-full"
              >
                {isExtending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Extending...
                  </>
                ) : (
                  <>
                    <Expand className="w-4 h-4 mr-2" />
                    Extend Video
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Extended Prompt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Original</p>
                  <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                    {result.originalPrompt}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Extended</p>
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{result.extendedPrompt}</Streamdown>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  onClick={() => handleCopy(result.extendedPrompt)}
                  variant="outline"
                  className="w-full"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Extended Prompt
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
