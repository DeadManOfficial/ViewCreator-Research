import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Video, Youtube } from "lucide-react";

export default function PlatformTools() {
  return (
    <div className="flex h-screen bg-[#05050a] text-white overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Platform Tools</h1>
          <p className="text-gray-400">Connect and manage your social media integrations.</p>
        </div>

        <div className="grid gap-6">
          {/* YouTube */}
          <Card className="bg-[#0f1016] border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg z-10">UNLOCKED</div>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500">
                  <Youtube className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-white">YouTube</CardTitle>
                  <CardDescription className="text-gray-400">Manage uploads, shorts, and community posts</CardDescription>
                </div>
              </div>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">Connect</Button>
            </CardHeader>
          </Card>

          {/* Instagram */}
          <Card className="bg-[#0f1016] border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg z-10">UNLOCKED</div>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-500">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-white">Instagram</CardTitle>
                  <CardDescription className="text-gray-400">Auto-publish Reels and Stories</CardDescription>
                </div>
              </div>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">Connect</Button>
            </CardHeader>
          </Card>

          {/* TikTok */}
          <Card className="bg-[#0f1016] border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg z-10">UNLOCKED</div>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-500">
                  <Video className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-white">TikTok</CardTitle>
                  <CardDescription className="text-gray-400">Viral trend analysis and posting</CardDescription>
                </div>
              </div>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">Connect</Button>
            </CardHeader>
          </Card>

          {/* X / Twitter */}
          <Card className="bg-[#0f1016] border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg z-10">UNLOCKED</div>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <Twitter className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-white">X (Twitter)</CardTitle>
                  <CardDescription className="text-gray-400">Thread generation and scheduling</CardDescription>
                </div>
              </div>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">Connect</Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
