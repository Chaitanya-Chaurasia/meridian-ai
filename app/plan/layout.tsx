"use client";
import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import PlanSidebar from "@/components/plan/PlanSidebar";
import PlanHeader from "@/components/plan/PlanHeader";

export default function PlanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SidebarProvider>
        <PlanSidebar />
        <div className="flex-1">
          <PlanHeader />
          <main className="flex-1 space-y-10 p-8">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
