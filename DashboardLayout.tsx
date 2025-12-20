import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  PlusSquare, 
  Image as ImageIcon, 
  Users, 
  Share2, 
  BarChart2, 
  TrendingUp, 
  Bot, 
  Scissors, 
  Zap, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: PlusSquare, label: "Post", href: "/dashboard/post" },
  { icon: ImageIcon, label: "Create", href: "/dashboard/create" },
  { icon: Users, label: "Profiles", href: "/dashboard/profiles" },
  { icon: Share2, label: "Connect Socials", href: "/dashboard/socials" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
  { icon: TrendingUp, label: "Trends", href: "/dashboard/trends" },
  { icon: Bot, label: "Agents", href: "/dashboard/agents" },
  { icon: Scissors, label: "AI Clipping Agent", href: "/dashboard/clipping" },
  { icon: Zap, label: "Spark", href: "/dashboard/spark" },
  { icon: Calendar, label: "Calendar", href: "/dashboard/calendar" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      <div className="p-6 flex items-center gap-2 border-b border-sidebar-border">
        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
          <Zap className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-xl tracking-tight">ViewCreator</span>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          {MENU_ITEMS.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
                  {item.label}
                  {isActive && <ChevronRight className="ml-auto h-4 w-4 opacity-50" />}
                </a>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-sidebar-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-2 px-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-xs">
                <span className="font-medium">John Doe</span>
                <span className="text-muted-foreground">Pro Plan</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 fixed inset-y-0 z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen flex flex-col">
        <div className="flex-1 p-8 pt-16 lg:pt-8">
          {children}
        </div>
      </main>
    </div>
  );
}
