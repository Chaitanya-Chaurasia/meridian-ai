"use client";

import { useState } from "react";
import { ExploreCard } from "@/components/explore/explore-card";
import { placesData } from "@/lib/places-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { fonts } from "@/lib/utils";
import Link from "next/link";

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
    <main className="min-h-screen relative bg-white">
      <div className="relative z-10 container mx-auto px-2 py-12">
        <div className="text-center mb-12 mt-24">
          <h1 className="text-sm tracking-tighter">
            Our{" "}
            <span className={`text-violet-400 ${fonts.playfairDisplay}`}>
              planet
            </span>{" "}
            is a gift
          </h1>
          <h1 className="text-4xl font-semibold tracking-tighter mb-4">
            Find your next{" "}
            <span className={`text-purple-800 ${fonts.playfairDisplay}`}>
              destination
            </span>
          </h1>
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
            <Input
              type="text"
              placeholder="Type Macchu Picchu"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full bg-white/10 placeholder:text-gray-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 auto-rows-[200px]">
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
          <div className="text-center py-12">
            <p className="text-white/80">
              No destinations found matching "{searchQuery}"
            </p>
          </div>
        )}

        <div className="text-center py-12 mt-42 mb-42 text-3xl tracking-tighter font-semibold flex items-center justify-center gap-2 flex-col">
          <span>
            Couldn't find what you were
            <span className={`text-violet-400 ${fonts.playfairDisplay}`}>
              {" "}
              looking for?
            </span>
          </span>
          <span className="text-lg">
            Try {" "}
            <Link href="/" className="font-medium text-blue-900 underline">
              searching here!
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
