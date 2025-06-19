"use client"

import { Badge } from "@/components/ui/badge"

interface SuggestedPromptsProps {
  onPromptSelect: (prompt: string) => void
}

export function SuggestedPrompts({ onPromptSelect }: SuggestedPromptsProps) {
  const prompts = [
    "Plan a 3-day trip to Prague!",
    "How do I apply for a Schengen visa?",
    "Fine dining in Delhi, India (I'm on a diet)",
  ]

  return (
    <div className="space-y-2">
      <p className="text-xs text-white">You can try asking</p>
      <div className="flex flex-wrap justify-center gap-2">
        {prompts.map((prompt, index) => (
          <Badge
            key={index}
            variant="outline"
            className="cursor-pointer text-xs px-3 py-1 bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            onClick={() => onPromptSelect(prompt)}
          >
            {prompt}
          </Badge>
        ))}
      </div>
    </div>
  )
}
