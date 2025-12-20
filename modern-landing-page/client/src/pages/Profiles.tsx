import { Sidebar } from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Settings, User } from "lucide-react";

export default function Profiles() {
  return (
    <div className="flex h-screen bg-[#05050a] text-white overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Brand Profiles</h1>
            <p className="text-gray-400">Manage your brand identities, voice, and assets.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-500">
            <Plus className="mr-2 h-4 w-4" /> New Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default Profile Card */}
          <Card className="bg-[#0f1016] border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium text-white">Main Brand</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 group-hover:text-white">
                <Settings className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-blue-500">
                  <AvatarImage src="/images/ai-avatar.png" />
                  <AvatarFallback className="bg-blue-900 text-blue-200">MB</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-gray-300">Voice: Professional</div>
                  <div className="text-xs text-gray-500">Last active: 2 mins ago</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">Tech</div>
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">AI</div>
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">News</div>
              </div>
            </CardContent>
          </Card>

          {/* Add New Placeholder */}
          <Card className="bg-[#0f1016]/50 border-white/5 border-dashed hover:border-white/20 transition-colors cursor-pointer flex items-center justify-center min-h-[200px]">
            <div className="flex flex-col items-center gap-3 text-gray-500">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
                <Plus className="h-6 w-6" />
              </div>
              <span className="font-medium">Create New Profile</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
