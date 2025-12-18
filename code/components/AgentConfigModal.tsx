import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Bot, X } from "lucide-react";
import { useState } from "react";

interface AgentConfigModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AgentConfigModal({ open, onOpenChange }: AgentConfigModalProps) {
  const [name, setName] = useState("Untitled Agent");
  const [instructions, setInstructions] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0f1016] border-white/10 text-white sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Bot className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">Agent Configuration</DialogTitle>
              <p className="text-sm text-gray-400">Configure your agent's identity and behavior</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Agent Name</Label>
            <Input 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="bg-[#1a1b26] border-white/10 text-white focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Brand Profile <span className="text-gray-600 font-normal normal-case">(Optional)</span></Label>
            <Select defaultValue="none">
              <SelectTrigger className="bg-[#1a1b26] border-white/10 text-white">
                <SelectValue placeholder="Select a brand profile" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1b26] border-white/10 text-white">
                <SelectItem value="none">No brand profile</SelectItem>
                <SelectItem value="tech">Tech Startup (Professional)</SelectItem>
                <SelectItem value="creator">Personal Brand (Casual)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mission & Instructions</Label>
            <Textarea 
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Describe the agent's purpose, goals, and behavior... Be specific about tone, goals, and constraints."
              className="bg-[#1a1b26] border-white/10 text-white min-h-[150px] resize-none focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="hover:bg-white/5 text-gray-400 hover:text-white">
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)} className="bg-blue-600 hover:bg-blue-500 text-white">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
