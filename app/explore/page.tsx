"use client";

import { useState } from "react";
import { ExploreCard } from "@/components/explore/explore-card";
import { placesData } from "@/lib/places-data";
import { fonts } from "@/lib/utils";
import Image from "next/image";
import bg from "@/public/explore.jpg";

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
      <div className="relative z-10 container mx-auto py rounded-lg bg-lime-400/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[4px] auto-rows-[200px]">
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
              No destinations found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
