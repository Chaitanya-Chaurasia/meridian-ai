import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface PlanChatCardProps {
  chatInput: string;
  setChatInput: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PlanChatCard: React.FC<PlanChatCardProps> = ({ chatInput, setChatInput, onSubmit }) => (
  <Card className="w-full rounded-3xl border-0 bg-white/70 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
    <CardContent className="p-8">
      <form onSubmit={onSubmit} className="flex gap-6">
        <Input
          placeholder="What's on for your next trip? Ask anything..."
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          className="flex-1 bg-white/90"
        />
        <Button type="submit" className="rounded-2xl px-6 py-4 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </CardContent>
  </Card>
);

export default PlanChatCard;
