import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  FileText,
  Sparkles,
  Users,
  Link2,
  TrendingUp,
  Zap,
  Image,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Lightbulb,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

type DashboardPage = 
  | "home" 
  | "post" 
  | "create" 
  | "profiles" 
  | "socials" 
  | "analytics" 
  | "trends" 
  | "agents" 
  | "clipping" 
  | "spark" 
  | "calendar" 
  | "settings";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState<DashboardPage>("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    {
      label: "PLATFORM",
      items: [
        { id: "post", label: "Post", icon: <FileText className="w-4 h-4" /> },
        { id: "create", label: "Create", icon: <Sparkles className="w-4 h-4" /> },
      ],
    },
    {
      label: "CONTENT",
      items: [
        { id: "profiles", label: "Profiles", icon: <Users className="w-4 h-4" /> },
        { id: "socials", label: "Connect Socials", icon: <Link2 className="w-4 h-4" /> },
      ],
    },
    {
      label: "INSIGHTS",
      items: [
        { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
        { id: "trends", label: "Trends", icon: <TrendingUp className="w-4 h-4" /> },
      ],
    },
    {
      label: "AUTOMATION",
      items: [
        { id: "agents", label: "Agents", icon: <Zap className="w-4 h-4" /> },
        { id: "clipping", label: "AI Clipping Agent", icon: <Image className="w-4 h-4" /> },
        { id: "spark", label: "Spark", icon: <Lightbulb className="w-4 h-4" /> },
      ],
    },
    {
      label: "ACCOUNT",
      items: [
        { id: "calendar", label: "Calendar", icon: <Calendar className="w-4 h-4" /> },
        { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
      ],
    },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "post":
        return <PostPage />;
      case "create":
        return <CreatePage />;
      case "profiles":
        return <ProfilesPage />;
      case "socials":
        return <SocialsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "trends":
        return <TrendsPage />;
      case "agents":
        return <AgentsPage />;
      case "clipping":
        return <ClippingPage />;
      case "spark":
        return <SparkPage />;
      case "calendar":
        return <CalendarPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 overflow-hidden flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground font-bold text-sm">
            VC
          </div>
          <span className="font-bold">ViewCreator</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navigationItems.map((section) => (
            <div key={section.label}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-3">
                {section.label}
              </h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as DashboardPage)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                      currentPage === item.id
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-sidebar-border space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-secondary rounded-md transition"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              CREDITS 1
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded-md transition"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Button variant="outline" size="sm">
              Feedback
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Page Components

function HomePage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Good morning, DeadMan</h2>
        <p className="text-muted-foreground">Here's what's happening with your content today.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Plus className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">New Post</h3>
          </div>
          <p className="text-sm text-muted-foreground">Create Post</p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">New Agent</h3>
          </div>
          <p className="text-sm text-muted-foreground">1 Credits</p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Add Profile</h3>
          </div>
          <p className="text-sm text-muted-foreground">Create Profile</p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <Link2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Connect Social</h3>
          </div>
          <p className="text-sm text-muted-foreground">Link Account</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-border">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">AI Clipping job: 8 min of 9 min video</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Succeeded
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">-24 credits • 12/17/25, 2:11 PM</p>
              </div>
              <div className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">Monthly plan bonus – Starter Plan</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Succeeded
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">-25 credits • 12/17/25, 9:46 AM</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Connected Accounts */}
          <Card className="p-6">
            <h3 className="font-bold mb-4">Connected Accounts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">DeadManAI // The Unseen</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Manage
              </Button>
            </div>
          </Card>

          {/* Brand Profiles */}
          <Card className="p-6">
            <h3 className="font-bold mb-4">Brand Profiles</h3>
            <p className="text-sm text-muted-foreground mb-4">No brand profiles</p>
            <Button variant="outline" size="sm" className="w-full">
              Create Profile
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PostPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <p className="text-muted-foreground">Post creation interface coming soon...</p>
      </Card>
    </div>
  );
}

function CreatePage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">AI Content Generator</h2>
        <p className="text-muted-foreground">Image, video, and script generation coming soon...</p>
      </Card>
    </div>
  );
}

function ProfilesPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Brand Profiles</h2>
        <p className="text-muted-foreground">Manage your brand profiles coming soon...</p>
      </Card>
    </div>
  );
}

function SocialsPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Connect Social Accounts</h2>
        <p className="text-muted-foreground">Social platform integrations coming soon...</p>
      </Card>
    </div>
  );
}

function AnalyticsPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Cross-platform analytics coming soon...</p>
      </Card>
    </div>
  );
}

function TrendsPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Trends & Research</h2>
        <p className="text-muted-foreground">Trending topics and keywords coming soon...</p>
      </Card>
    </div>
  );
}

function AgentsPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">AI Agents</h2>
        <p className="text-muted-foreground">Agent management and automation coming soon...</p>
      </Card>
    </div>
  );
}

function ClippingPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">AI Clipping Agent</h2>
        <p className="text-muted-foreground">Extract viral clips from long-form video coming soon...</p>
      </Card>
    </div>
  );
}

function SparkPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Spark - AI Assistant</h2>
        <p className="text-muted-foreground">Premium AI assistant coming soon...</p>
      </Card>
    </div>
  );
}

function CalendarPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Content Calendar</h2>
        <p className="text-muted-foreground">Schedule and manage content coming soon...</p>
      </Card>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <p className="text-muted-foreground">Account settings, billing, and integrations coming soon...</p>
      </Card>
    </div>
  );
}
