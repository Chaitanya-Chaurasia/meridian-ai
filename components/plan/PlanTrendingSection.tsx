import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { trendingDestinations } from "@/data/dummy";

const PlanTrendingSection: React.FC = () => (
  <section>
    <div className="mb-6 flex items-center gap-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Trending Destinations
      </h2>
      <Badge
        variant="secondary"
        className="flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg shadow-yellow-500/25"
      >
        <Star className="h-4 w-4" />
        Hot Picks
      </Badge>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {trendingDestinations.map((destination, index) => (
        <Card
          key={index}
          className="rounded-3xl border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <CardHeader className="pb-4 p-6">
            <CardTitle className="text-lg font-bold text-gray-800">
              {destination.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-6 pt-0">
            <div className="text-base font-medium text-gray-700">{destination.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default PlanTrendingSection;
