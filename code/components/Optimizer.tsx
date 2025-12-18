import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Sparkles, Copy, Save, Trash2, Settings2, Video, Wand2 } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function Optimizer() {
  const { user, isAuthenticated } = useAuth();
  const [originalPrompt, setOriginalPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Settings state
  const [preset, setPreset] = useState<"balanced" | "high_quality" | "fast">("balanced");
  const [pacing, setPacing] = useState<"very_calm" | "moderate" | "chaotic">("moderate");
  const [videoStyle, setVideoStyle] = useState("");
  const [enableCameos, setEnableCameos] = useState(false);
  const [fightSceneEnhancement, setFightSceneEnhancement] = useState(false);
  const [gpt5ProMode, setGpt5ProMode] = useState(false);
  const [copyrightBypass, setCopyrightBypass] = useState(false);
  const [cinematicProFormat, setCinematicProFormat] = useState(false);
  const [outputLength, setOutputLength] = useState<"concise" | "balanced" | "detailed">("balanced");
  const [useTimestamp, setUseTimestamp] = useState(false);
  const [timelineControl, setTimelineControl] = useState(false);
  const [cameraAngle, setCameraAngle] = useState("");
  const [lighting, setLighting] = useState("");
  const [cameraMovement, setCameraMovement] = useState("");
  const [duration, setDuration] = useState(10);
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(0.9);
  
  const [characterName, setCharacterName] = useState("");
  const [cameoHandle, setCameoHandle] = useState("");

  const optimizeMutation = trpc.prompt.optimize.useMutation({
    onSuccess: (data) => {
      setOptimizedPrompt(data.optimizedPrompt);
      toast.success("Prompt optimized successfully!");
      setIsOptimizing(false);
    },
    onError: (error) => {
      toast.error("Failed to optimize prompt: " + error.message);
      setIsOptimizing(false);
    },
  });

  const { data: cameoMappings = [], refetch: refetchCameos } = trpc.cameo.getUserMappings.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const { data: popularCameos = [] } = trpc.cameo.getPopular.useQuery();

  const createCameoMutation = trpc.cameo.createMapping.useMutation({
    onSuccess: () => {
      toast.success("Cameo mapping added!");
      refetchCameos();
      setCharacterName("");
      setCameoHandle("");
    },
  });

  const deleteCameoMutation = trpc.cameo.deleteMapping.useMutation({
    onSuccess: () => {
      toast.success("Cameo mapping removed!");
      refetchCameos();
    },
  });

  const handleOptimize = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to optimize prompts");
      return;
    }

    if (!originalPrompt.trim()) {
      toast.error("Please enter a prompt to optimize");
      return;
    }

    setIsOptimizing(true);
    optimizeMutation.mutate({
      prompt: originalPrompt,
      settings: {
        preset,
        pacing,
        videoStyle: videoStyle || undefined,
        enableCameos,
        cameoMappings: enableCameos ? cameoMappings.map(m => ({
          characterName: m.characterName,
          cameoHandle: m.cameoHandle,
        })) : undefined,
        fightSceneEnhancement,
        gpt5ProMode,
        copyrightBypass,
        cinematicProFormat,
        outputLength,
        useTimestamp,
        timelineControl,
        cameraAngle: cameraAngle || undefined,
        lighting: lighting || undefined,
        cameraMovement: cameraMovement || undefined,
        duration,
        audioSettings: {},
        temperature: gpt5ProMode ? temperature : undefined,
        topP: gpt5ProMode ? topP : undefined,
      },
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(optimizedPrompt);
    toast.success("Copied to clipboard!");
  };

  const addPopularCameo = (handle: string, name: string) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add cameo mappings");
      return;
    }
    createCameoMutation.mutate({ characterName: name, cameoHandle: handle });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
            <CardDescription>Please sign in to use the Sora 2 Prompt Generator</CardDescription>
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
            <Video className="w-10 h-10 text-primary" />
            Sora 2 Prompt Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Transform your ideas into professional, optimized prompts for Sora 2 video generation
          </p>
          <Badge variant="secondary" className="mt-2">All Pro Features Enabled</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Prompt Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Prompt Optimizer
                </CardTitle>
                <CardDescription>Enter your creative idea and let AI optimize it for Sora 2</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="original-prompt">Original Prompt</Label>
                  <Textarea
                    id="original-prompt"
                    placeholder="Describe your video idea... (e.g., 'A cat walking down a street')"
                    value={originalPrompt}
                    onChange={(e) => setOriginalPrompt(e.target.value)}
                    className="min-h-[150px] mt-2"
                  />
                  <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <span>{originalPrompt.length} / 2000 characters</span>
                    <span>{originalPrompt.split(/\s+/).filter(w => w).length} words</span>
                  </div>
                </div>

                <Button
                  onClick={handleOptimize}
                  disabled={isOptimizing || !originalPrompt.trim()}
                  className="w-full"
                  size="lg"
                >
                  {isOptimizing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Optimize Prompt
                    </>
                  )}
                </Button>

                {optimizedPrompt && (
                  <div className="space-y-2">
                    <Label>Optimized Prompt</Label>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6">
                        <Streamdown>{optimizedPrompt}</Streamdown>
                      </CardContent>
                    </Card>
                    <div className="flex gap-2">
                      <Button onClick={handleCopy} variant="outline" size="sm">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="w-5 h-5" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                    <TabsTrigger value="cameos">Cameos</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4 mt-4">
                    <div>
                      <Label>Production Preset</Label>
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
                      <Label>Pacing/Mood</Label>
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

                    <div>
                      <Label>Output Length</Label>
                      <Select value={outputLength} onValueChange={(v: any) => setOutputLength(v)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="concise">Concise</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Duration (seconds)</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Slider
                          value={[duration]}
                          onValueChange={(v) => setDuration(v[0] || 10)}
                          min={1}
                          max={15}
                          step={1}
                          className="flex-1"
                        />
                        <span className="text-sm font-medium w-12 text-right">{duration}s</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <Label htmlFor="cinematic">Cinematic Pro Format</Label>
                      <Switch
                        id="cinematic"
                        checked={cinematicProFormat}
                        onCheckedChange={setCinematicProFormat}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="timestamp">Use Timestamp Format</Label>
                      <Switch
                        id="timestamp"
                        checked={useTimestamp}
                        onCheckedChange={setUseTimestamp}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="fight">Fight Scene Enhancement</Label>
                      <Switch
                        id="fight"
                        checked={fightSceneEnhancement}
                        onCheckedChange={setFightSceneEnhancement}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="gpt5">GPT-5 PRO Mode</Label>
                      <Switch
                        id="gpt5"
                        checked={gpt5ProMode}
                        onCheckedChange={setGpt5ProMode}
                      />
                    </div>

                    {gpt5ProMode && (
                      <>
                        <div>
                          <Label>Temperature: {temperature.toFixed(2)}</Label>
                          <Slider
                            value={[temperature]}
                            onValueChange={(v) => setTemperature(v[0] || 0.7)}
                            min={0}
                            max={2}
                            step={0.1}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label>Top P: {topP.toFixed(2)}</Label>
                          <Slider
                            value={[topP]}
                            onValueChange={(v) => setTopP(v[0] || 0.9)}
                            min={0}
                            max={1}
                            step={0.05}
                            className="mt-2"
                          />
                        </div>
                      </>
                    )}

                    <Separator />

                    <div className="flex items-center justify-between">
                      <Label htmlFor="copyright">Copyright Bypass Mode</Label>
                      <Switch
                        id="copyright"
                        checked={copyrightBypass}
                        onCheckedChange={setCopyrightBypass}
                      />
                    </div>

                    <Separator />

                    <div>
                      <Label htmlFor="camera-angle">Camera Angle</Label>
                      <Input
                        id="camera-angle"
                        placeholder="e.g., Low angle, Bird's eye view"
                        value={cameraAngle}
                        onChange={(e) => setCameraAngle(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lighting">Lighting</Label>
                      <Input
                        id="lighting"
                        placeholder="e.g., Golden hour, Neon lights"
                        value={lighting}
                        onChange={(e) => setLighting(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="camera-movement">Camera Movement</Label>
                      <Input
                        id="camera-movement"
                        placeholder="e.g., Dolly zoom, Tracking shot"
                        value={cameraMovement}
                        onChange={(e) => setCameraMovement(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="cameos" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enable-cameos">Enable Sora 2 Cameos</Label>
                      <Switch
                        id="enable-cameos"
                        checked={enableCameos}
                        onCheckedChange={setEnableCameos}
                      />
                    </div>

                    {enableCameos && (
                      <>
                        <p className="text-sm text-muted-foreground">
                          Map character names to Sora 2 cameo handles. When you mention a character name, it will be replaced with the cameo handle.
                        </p>

                        <div>
                          <Label className="text-sm font-medium">Quick Add Popular Cameos</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {popularCameos.map((cameo) => (
                              <Button
                                key={cameo.handle}
                                variant="outline"
                                size="sm"
                                onClick={() => addPopularCameo(cameo.handle, cameo.name)}
                              >
                                {cameo.handle}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label>Your Cameo Mappings</Label>
                          <ScrollArea className="h-[150px] border rounded-md p-2">
                            {cameoMappings.length === 0 ? (
                              <p className="text-sm text-muted-foreground text-center py-4">No mappings yet</p>
                            ) : (
                              <div className="space-y-2">
                                {cameoMappings.map((mapping) => (
                                  <div key={mapping.id} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                                    <div className="text-sm">
                                      <span className="font-medium">{mapping.characterName}</span>
                                      <span className="mx-2">→</span>
                                      <span className="text-primary">{mapping.cameoHandle}</span>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => deleteCameoMutation.mutate({ mappingId: mapping.id })}
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </ScrollArea>
                        </div>

                        <div className="space-y-2">
                          <Label>Add New Mapping</Label>
                          <Input
                            placeholder="Character name"
                            value={characterName}
                            onChange={(e) => setCharacterName(e.target.value)}
                          />
                          <Input
                            placeholder="Cameo handle (e.g., @username)"
                            value={cameoHandle}
                            onChange={(e) => setCameoHandle(e.target.value)}
                          />
                          <Button
                            onClick={() => {
                              if (characterName && cameoHandle) {
                                createCameoMutation.mutate({ characterName, cameoHandle });
                              }
                            }}
                            disabled={!characterName || !cameoHandle}
                            size="sm"
                            className="w-full"
                          >
                            Add Mapping
                          </Button>
                        </div>
                      </>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
