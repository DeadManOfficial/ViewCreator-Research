import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Copy, Search, Loader2 } from "lucide-react";
import { Streamdown } from "streamdown";
import { getLoginUrl } from "@/const";

export default function Templates() {
  const { isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const { data: templates = [], isLoading } = trpc.template.list.useQuery();

  const filteredTemplates = templates.filter((t) => {
    const matchesTitle = t.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = t.category?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = Array.isArray(t.tags) && t.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTitle || matchesCategory || matchesTags;
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Template Library</h1>
          <p className="text-muted-foreground">Browse and use professional prompt templates</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Templates ({filteredTemplates.length})</h2>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredTemplates.length === 0 ? (
                <p className="text-muted-foreground text-sm">No templates found</p>
              ) : (
                filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-colors ${
                      selectedTemplate?.id === template.id
                        ? "bg-primary/10 border-primary"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <CardContent className="pt-4">
                      <p className="font-medium text-sm">{template.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{template.category}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedTemplate ? (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{selectedTemplate.title}</CardTitle>
                      <CardDescription>{selectedTemplate.description}</CardDescription>
                    </div>
                    <Badge>{selectedTemplate.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Template Prompt</p>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-4">
                        <Streamdown>{selectedTemplate.prompt}</Streamdown>
                      </CardContent>
                    </Card>
                  </div>

                  {Array.isArray(selectedTemplate.tags) && selectedTemplate.tags.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedTemplate.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Button
                      onClick={() => handleCopy(selectedTemplate.prompt)}
                      className="w-full"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Template
                    </Button>
                    {isAuthenticated && (
                      <Button variant="outline" className="w-full">
                        Use in Optimizer
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  Select a template to view details
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
