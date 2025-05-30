import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock } from "lucide-react";
import { cheapestFlights } from "@/data/dummy";

const PlanCheapestFlightsSection: React.FC = () => (
  <section>
    <div className="mb-6 flex items-center gap-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Cheapest Flights
      </h2>
      <Badge
        variant="secondary"
        className="flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/25"
      >
        <DollarSign className="h-4 w-4" />
        Best Deals
      </Badge>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cheapestFlights.map((flight, index) => (
        <Card
          key={index}
          className="rounded-3xl border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <CardHeader className="pb-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${flight.gradient}`} />
                <span className="font-bold text-gray-800">
                  {flight.from} → {flight.to}
                </span>
              </div>
              <Badge variant="outline" className="rounded-full border-gray-200 bg-gray-50">
                {flight.date}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-6 pt-0">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {flight.price}
              </span>
              <div className="text-right text-sm text-gray-500">
                <div className="font-medium text-gray-700">{flight.airline}</div>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="h-3 w-3" />
                  {flight.duration}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default PlanCheapestFlightsSection;
