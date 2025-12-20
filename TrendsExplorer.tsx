import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { socialService } from "@/services/socialService";
import { Loader2, Search, TrendingUp, Hash, ArrowUpRight, Copy, Plus } from "lucide-react";
import { toast } from "sonner";

export function TrendsExplorer() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trends, setTrends] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    loadTrends();
  }, []);

  const loadTrends = async () => {
    try {
      setIsLoading(true);
      // Mock initial trends
      const initialTrends = [
        { id: 1, topic: "AI Automation", volume: "2.4M", growth: "+120%", platform: "tiktok" },
        { id: 2, topic: "Side Hustles", volume: "1.8M", growth: "+85%", platform: "youtube" },
        { id: 3, topic: "Tech Reviews", volume: "900K", growth: "+45%", platform: "youtube" },
        { id: 4, topic: "Digital Marketing", volume: "1.2M", growth: "+60%", platform: "linkedin" },
        { id: 5, topic: "Productivity Hacks", volume: "3.1M", growth: "+200%", platform: "tiktok" },
      ];
      setTrends(initialTrends);
    } catch (error) {
      toast.error("Failed to load trends");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setIsLoading(true);
      // Mock search
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(`Found trending topics for "${query}"`);
    } catch (error) {
      toast.error("Failed to search trends");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <form onSubmit={handleSearch} className="flex w-full md:w-1/2 gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search topics, keywords, or niches..."
              className="pl-8"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
          </Button>
        </form>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trends.map((trend) => (
          <Card key={trend.id} className="group hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="mb-2 capitalize">
                  {trend.platform}
                </Badge>
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                  {trend.growth}
                </Badge>
              </div>
              <CardTitle className="text-xl flex items-center gap-2">
                <Hash className="h-4 w-4 text-muted-foreground" />
                {trend.topic}
              </CardTitle>
              <CardDescription>
                {trend.volume} monthly searches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-24 bg-muted/50 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                Trend Graph Placeholder
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <Button variant="outline" size="sm" className="w-full" onClick={() => copyToClipboard(trend.topic)}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button size="sm" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
