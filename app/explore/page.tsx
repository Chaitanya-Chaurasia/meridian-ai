"use client";

import { useState } from "react";
import { ExploreCard } from "@/components/explore/explore-card";
import { placesData } from "@/lib/places-data";
import { fonts } from "@/lib/utils";
import Image from "next/image";
import bg from "@/public/explore.jpg";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = placesData.filter(
    (place) =>
      place.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCardSize = (index: number) => {
    const patterns = [
      ["large", "small", "small", "wide", "small", "small"],
      ["small", "tall", "small", "small", "small", "wide"],
      ["wide", "small", "small", "small", "small", "tall"],
    ];

    const patternIndex = Math.floor(index / 6) % patterns.length;
    const cardIndex = index % 6;
    return patterns[patternIndex][cardIndex] as
      | "small"
      | "wide"
      | "tall"
      | "large";
  };

  return (
    <main className="min-h-screen relative p-1">
      <div className="fixed inset-0 -z-1">
        <Image src={bg} alt="bg image" fill className="object-cover" priority />
      </div>
      <div className="relative z-10 border-2 container mx-auto py rounded-lg  min-h-[calc(100vh-50px)]">
        <div className="text-center mb-12 mt-24 ">
          <h1 className="text-md text-white tracking-tighter z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
            Our{" "}
            <span className={`text-emerald-400 ${fonts.playfairDisplay}`}>
              planet
            </span>{" "}
            is a gift
          </h1>
          <h1 className="text-5xl text-white font-semibold tracking-tighter mb-4 z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Find your next{" "}
            <span className={`text-purple-800 ${fonts.playfairDisplay}`}>
              destination
            </span>
          </h1>
          <div className="relative max-w-md mx-auto mt-6 z-10 p-10">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 stroke-white z-50" />
            <Input
              type="text"
              placeholder="Type Macchu Picchu"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-0 rounded-full bg-white/10 backdrop-blur placeholder:text-white placeholder:text-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[4px] auto-rows-[200px] p-1">
          <div className="fixed inset-0 z-1">
            <div className="absolute inset-0 bg-lime-400/10 transition-opacity duration-300" />
          </div>
          {filteredPlaces.map((place, index) => (
            <ExploreCard
              key={place.id}
              id={place.id}
              place={place.place}
              country={place.country}
              image={`/explore/${place.id}.png`}
              size={getCardSize(index)}
            />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center">
            <p className="text-white/80">
              No destinations found matching &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </div>
    </main>
  );
}