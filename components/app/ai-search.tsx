"use client";

import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { SuggestedPrompts } from "@/components/dashboard/suggested-prompts";
export function AiSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative max-w-xl mx-auto space-y-4">
      <div className="relative">
        <div className="absolute left-3 top-1/2 z-50 transform -translate-y-1/2 flex items-center gap-1.5 border rounded-sm border-slate-500 py-1 px-2 ">
          <Sparkles className="w-3 h-3 text-gray-500 " />
        </div>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Where should we take you?"
          className="text-xs placeholder:text-gray-400 h-10 pl-18 pr-10 bg-white border border-gray-200 backdrop-blur-sm shadow-sm rounded-full focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all"
        />
      </div>
      <div>
        <SuggestedPrompts onPromptSelect={setQuery} />
      </div>
    </div>
  );
}
