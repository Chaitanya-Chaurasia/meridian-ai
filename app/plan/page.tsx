"use client"

import * as React from "react";
import PlanChatCard from "@/components/plan/PlanChatCard";
import PlanTrendingSection from "@/components/plan/PlanTrendingSection";
import PlanCheapestFlightsSection from "@/components/plan/PlanCheapestFlightsSection";
import PlanActionsSection from "@/components/plan/PlanActionsSection";


export default function Dashboard() {
  const [chatInput, setChatInput] = React.useState("");

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Chat input:", chatInput);
    setChatInput("");
  };

  return (
    <>
      <PlanChatCard chatInput={chatInput} setChatInput={setChatInput} onSubmit={handleChatSubmit} />
      <PlanTrendingSection />
      <PlanCheapestFlightsSection />
      <PlanActionsSection />
    </>
  );
}

