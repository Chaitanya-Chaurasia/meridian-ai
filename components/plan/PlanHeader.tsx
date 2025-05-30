import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const PlanHeader: React.FC = () => (
  <header className="flex h-20 shrink-0 items-center gap-2 border-b border-white/20 bg-white/60 backdrop-blur-xl px-8 shadow-sm">
    <SidebarTrigger className="-ml-1 rounded-xl hover:bg-white/50" />
    <Separator orientation="vertical" className="mr-2 h-6 bg-gray-300" />
    <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
      Dashboard
    </h1>
  </header>
);

export default PlanHeader;
