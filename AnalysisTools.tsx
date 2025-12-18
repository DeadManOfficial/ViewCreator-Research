import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Copy, Zap } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function AnalysisTools() {
  const { isAuthenticated } = useAuth();

  // Scene Continuity
  const [continuityPrompts, setContinuityPrompts] = useState("");
  const [continuityLoading, setContinuityLoading] = useState(false);
  const [continuityResult, setContinuityResult] = useState("");

  // Director Style
  const [stylePrompt, setStylePrompt] = useState("");
  const [directorStyle, setDirectorStyle] = useState("");
  const [styleLoading, setStyleLoading] = useState(false);
  const [styleResult, setStyleResult] = useState("");

  // Technical Feasibility
  const [feasibilityPrompt, setFeasibilityPrompt] = useState("");
  const [feasibilityLoading, setFeasibilityLoading] = useState(false);
  const [feasibilityResult, setFeasibilityResult] = useState("");

  // Keyword Expander
  const [keywords, setKeywords] = useState("");
  const [keywordLoading, setKeywordLoading] = useState(false);
  const [keywordResult, setKeywordResult] = useState("");

  // Storyboard
  const [storyboardPrompt, setStoryboardPrompt] = useState("");
  const [sceneCount, setSceneCount] = useState(3);
  const [storyboardLoading, setStoryboardLoading] = useState(false);
  const [storyboardResult, setStoryboardResult] = useState("");

  // Campaign
  const [campaignTheme, setCampaignTheme] = useState("");
  const [videoCount, setVideoCount] = useState(3);
  const [campaignLoading, setCampaignLoading] = useState(false);
  const [campaignResult, setCampaignResult] = useState("");

  // Script to Shot List
  const [script, setScript] = useState("");
  const [scriptLoading, setScriptLoading] = useState(false);
  const [scriptResult, setScriptResult] = useState("");

  const continuityMutation = trpc.prompt.sceneContinuityCheck.useMutation({
    onSuccess: (data) => {
      setContinuityResult(data.analysis);
      toast.success("Analysis complete!");
      setContinuityLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setContinuityLoading(false);
    },
  });

  const styleMutation = trpc.prompt.directorStyleTransfer.useMutation({
    onSuccess: (data) => {
      setStyleResult(data.styledPrompt);
      toast.success("Style transferred!");
      setStyleLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setStyleLoading(false);
    },
  });

  const feasibilityMutation = trpc.prompt.technicalFeasibility.useMutation({
    onSuccess: (data) => {
      setFeasibilityResult(data.feasibilityAnalysis);
      toast.success("Analysis complete!");
      setFeasibilityLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setFeasibilityLoading(false);
    },
  });

  const keywordMutation = trpc.prompt.keywordExpander.useMutation({
    onSuccess: (data) => {
      setKeywordResult(data.expandedKeywords);
      toast.success("Keywords expanded!");
      setKeywordLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setKeywordLoading(false);
    },
  });

  const storyboardMutation = trpc.prompt.storyboardGenerator.useMutation({
    onSuccess: (data) => {
      setStoryboardResult(data.storyboard);
      toast.success("Storyboard generated!");
      setStoryboardLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setStoryboardLoading(false);
    },
  });

  const campaignMutation = trpc.prompt.campaignGenerator.useMutation({
    onSuccess: (data) => {
      setCampaignResult(data.campaign);
      toast.success("Campaign generated!");
      setCampaignLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setCampaignLoading(false);
    },
  });

  const scriptMutation = trpc.prompt.scriptToShotList.useMutation({
    onSuccess: (data) => {
      setScriptResult(data.shotList);
      toast.success("Shot list created!");
      setScriptLoading(false);
    },
    onError: (error) => {
      toast.error("Failed: " + error.message);
      setScriptLoading(false);
    },
  });

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
            Advanced Analysis Tools
          </h1>
          <p className="text-muted-foreground">Professional video production analysis and generation</p>
        </div>

        <Tabs defaultValue="continuity" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="continuity" className="text-xs sm:text-sm">Continuity</TabsTrigger>
            <TabsTrigger value="style" className="text-xs sm:text-sm">Style</TabsTrigger>
            <TabsTrigger value="feasibility" className="text-xs sm:text-sm">Feasibility</TabsTrigger>
            <TabsTrigger value="keywords" className="text-xs sm:text-sm">Keywords</TabsTrigger>
            <TabsTrigger value="storyboard" className="text-xs sm:text-sm">Storyboard</TabsTrigger>
            <TabsTrigger value="campaign" className="text-xs sm:text-sm">Campaign</TabsTrigger>
            <TabsTrigger value="script" className="text-xs sm:text-sm">Script</TabsTrigger>
          </TabsList>

          {/* Scene Continuity */}
          <TabsContent value="continuity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scene Continuity Checker</CardTitle>
                <CardDescription>Analyze multiple scenes for continuity issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Prompts (one per line)</Label>
                  <Textarea
                    placeholder="Scene 1&#10;Scene 2&#10;Scene 3..."
                    value={continuityPrompts}
                    onChange={(e) => setContinuityPrompts(e.target.value)}
                    className="min-h-[200px] mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    const prompts = continuityPrompts
                      .split("\n")
                      .map((p) => p.trim())
                      .filter((p) => p);
                    if (prompts.length < 2) {
                      toast.error("Enter at least 2 prompts");
                      return;
                    }
                    setContinuityLoading(true);
                    continuityMutation.mutate({ prompts });
                  }}
                  disabled={continuityLoading}
                  className="w-full"
                >
                  {continuityLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Check Continuity"
                  )}
                </Button>
                {continuityResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{continuityResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(continuityResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Director Style */}
          <TabsContent value="style" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Director Style Transfer</CardTitle>
                <CardDescription>Apply a director's style to your prompt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Prompt</Label>
                  <Textarea
                    placeholder="Enter your prompt..."
                    value={stylePrompt}
                    onChange={(e) => setStylePrompt(e.target.value)}
                    className="min-h-[150px] mt-2"
                  />
                </div>
                <div>
                  <Label>Director/Style</Label>
                  <Input
                    placeholder="e.g., Wes Anderson, Quentin Tarantino, Spielberg..."
                    value={directorStyle}
                    onChange={(e) => setDirectorStyle(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    if (!stylePrompt.trim() || !directorStyle.trim()) {
                      toast.error("Fill in all fields");
                      return;
                    }
                    setStyleLoading(true);
                    styleMutation.mutate({ prompt: stylePrompt, directorStyle });
                  }}
                  disabled={styleLoading}
                  className="w-full"
                >
                  {styleLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Transferring...
                    </>
                  ) : (
                    "Transfer Style"
                  )}
                </Button>
                {styleResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{styleResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(styleResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technical Feasibility */}
          <TabsContent value="feasibility" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Technical Feasibility Analysis</CardTitle>
                <CardDescription>Check if your prompt is achievable with Sora 2</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Prompt</Label>
                  <Textarea
                    placeholder="Enter your prompt..."
                    value={feasibilityPrompt}
                    onChange={(e) => setFeasibilityPrompt(e.target.value)}
                    className="min-h-[200px] mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    if (!feasibilityPrompt.trim()) {
                      toast.error("Enter a prompt");
                      return;
                    }
                    setFeasibilityLoading(true);
                    feasibilityMutation.mutate({ prompt: feasibilityPrompt });
                  }}
                  disabled={feasibilityLoading}
                  className="w-full"
                >
                  {feasibilityLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Feasibility"
                  )}
                </Button>
                {feasibilityResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{feasibilityResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(feasibilityResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Keyword Expander */}
          <TabsContent value="keywords" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Expander</CardTitle>
                <CardDescription>Expand keywords with related terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Keywords (comma-separated)</Label>
                  <Input
                    placeholder="e.g., sunset, cinematic, dramatic..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    const keywordList = keywords
                      .split(",")
                      .map((k) => k.trim())
                      .filter((k) => k);
                    if (keywordList.length === 0) {
                      toast.error("Enter at least one keyword");
                      return;
                    }
                    setKeywordLoading(true);
                    keywordMutation.mutate({ keywords: keywordList });
                  }}
                  disabled={keywordLoading}
                  className="w-full"
                >
                  {keywordLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Expanding...
                    </>
                  ) : (
                    "Expand Keywords"
                  )}
                </Button>
                {keywordResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{keywordResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(keywordResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Storyboard */}
          <TabsContent value="storyboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Storyboard Generator</CardTitle>
                <CardDescription>Generate detailed storyboards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Prompt</Label>
                  <Textarea
                    placeholder="Enter your prompt..."
                    value={storyboardPrompt}
                    onChange={(e) => setStoryboardPrompt(e.target.value)}
                    className="min-h-[150px] mt-2"
                  />
                </div>
                <div>
                  <Label>Number of Scenes</Label>
                  <Input
                    type="number"
                    min="2"
                    max="10"
                    value={sceneCount}
                    onChange={(e) => setSceneCount(parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    if (!storyboardPrompt.trim()) {
                      toast.error("Enter a prompt");
                      return;
                    }
                    setStoryboardLoading(true);
                    storyboardMutation.mutate({ prompt: storyboardPrompt, sceneCount });
                  }}
                  disabled={storyboardLoading}
                  className="w-full"
                >
                  {storyboardLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Storyboard"
                  )}
                </Button>
                {storyboardResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{storyboardResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(storyboardResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaign */}
          <TabsContent value="campaign" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Generator</CardTitle>
                <CardDescription>Generate cohesive video campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Campaign Theme</Label>
                  <Input
                    placeholder="e.g., Product Launch, Brand Story..."
                    value={campaignTheme}
                    onChange={(e) => setCampaignTheme(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Number of Videos</Label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={videoCount}
                    onChange={(e) => setVideoCount(parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    if (!campaignTheme.trim()) {
                      toast.error("Enter a campaign theme");
                      return;
                    }
                    setCampaignLoading(true);
                    campaignMutation.mutate({ campaignTheme, videoCount });
                  }}
                  disabled={campaignLoading}
                  className="w-full"
                >
                  {campaignLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Campaign"
                  )}
                </Button>
                {campaignResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{campaignResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(campaignResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Script to Shot List */}
          <TabsContent value="script" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Script to Shot List</CardTitle>
                <CardDescription>Convert scripts to detailed shot lists</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Script</Label>
                  <Textarea
                    placeholder="Paste your script here..."
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    className="min-h-[200px] mt-2"
                  />
                </div>
                <Button
                  onClick={() => {
                    if (!script.trim()) {
                      toast.error("Enter a script");
                      return;
                    }
                    setScriptLoading(true);
                    scriptMutation.mutate({ script });
                  }}
                  disabled={scriptLoading}
                  className="w-full"
                >
                  {scriptLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    "Generate Shot List"
                  )}
                </Button>
                {scriptResult && (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <Streamdown>{scriptResult}</Streamdown>
                      <Button
                        onClick={() => handleCopy(scriptResult)}
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
