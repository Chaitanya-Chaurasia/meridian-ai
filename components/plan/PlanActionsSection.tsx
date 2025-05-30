import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { actionCards } from "@/data/dummy";

const PlanActionsSection: React.FC = () => (
  <section>
    <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
      Quick Actions
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {actionCards.map((card, index) => (
        <Card
          key={index}
          className={`cursor-pointer rounded-3xl border-0 bg-white/80 backdrop-blur-xl shadow-xl ${card.shadow} hover:shadow-2xl hover:scale-105 transition-all duration-300`}
        >
          <CardContent className="flex items-center gap-6 p-8">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg text-white`}
            >
              <card.icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default PlanActionsSection;
