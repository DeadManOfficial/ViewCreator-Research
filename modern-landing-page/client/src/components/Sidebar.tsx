import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChart3, Calendar, ChevronDown, ChevronRight, CreditCard, Facebook, FileVideo, Instagram, LayoutGrid, LogOut, Plus, Settings, Sparkles, TrendingUp, Twitter, User, Users, Video, Youtube } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export function Sidebar() {
  const [location] = useLocation();
  const [isPlatformOpen, setIsPlatformOpen] = useState(true);

  const isActive = (path: string) => location === path;

  return (
    <div className="w-64 h-screen bg-[#0f1016] border-r border-white/5 flex flex-col text-gray-300">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center gap-2 font-bold text-xl text-white mb-6">
          <div className="h-6 w-6 rounded bg-blue-500 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span>ViewCreator</span>
        </div>

        {/* Credits Card */}
        <div className="bg-[#1a1b26] rounded-xl p-3 border border-white/5 flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <CreditCard className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-semibold tracking-wider">CREDITS</div>
              <div className="text-white font-bold">25</div>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1">
          <div className="px-2 py-1 text-[10px] font-semibold text-gray-600 uppercase tracking-wider">Platform</div>
          
          <Link href="/dashboard">
            <Button variant="ghost" className={`w-full justify-start gap-3 ${isActive('/dashboard') ? 'bg-blue-600/10 text-blue-500' : 'hover:bg-white/5'}`}>
              <LayoutGrid className="h-4 w-4" /> Post
            </Button>
          </Link>

          <Collapsible open={isPlatformOpen} onOpenChange={setIsPlatformOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between hover:bg-white/5">
                <span className="flex items-center gap-3"><LayoutGrid className="h-4 w-4" /> Platform Tools</span>
                {isPlatformOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1 pt-1">
              <Button variant="ghost" className="w-full justify-start gap-3 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <Youtube className="h-4 w-4" /> YouTube
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <Instagram className="h-4 w-4" /> Instagram
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <Facebook className="h-4 w-4" /> Facebook
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <Video className="h-4 w-4" /> TikTok
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                <Twitter className="h-4 w-4" /> X (Twitter)
              </Button>
            </CollapsibleContent>
          </Collapsible>

          <div className="pt-4"></div>
          
          <Link href="/create">
            <Button variant="ghost" className={`w-full justify-start gap-3 ${isActive('/create') ? 'bg-blue-600/10 text-blue-500' : 'hover:bg-white/5'}`}>
              <Sparkles className="h-4 w-4" /> Create
            </Button>
          </Link>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <User className="h-4 w-4" /> Profiles
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <Users className="h-4 w-4" /> Connect Socials
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <BarChart3 className="h-4 w-4" /> Analytics
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <TrendingUp className="h-4 w-4" /> Trends
          </Button>

          <div className="pt-4"></div>

          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <Users className="h-4 w-4" /> Agents
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <FileVideo className="h-4 w-4" /> AI Clipping Agent
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <Sparkles className="h-4 w-4" /> Spark
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
            <Calendar className="h-4 w-4" /> Calendar
          </Button>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-white/5 space-y-1">
        <div className="px-2 py-1 text-[10px] font-semibold text-gray-600 uppercase tracking-wider">Account</div>
        <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5">
          <Settings className="h-4 w-4" /> Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5 text-red-400 hover:text-red-300">
          <LogOut className="h-4 w-4" /> Sign out
        </Button>
      </div>
    </div>
  );
}
