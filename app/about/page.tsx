"use client";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Ripple } from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";

export const travelPrompts: string[] = [
    "What should I pack for a week-long trip to Barcelona in July?",
    "Book me a 3-star hotel in Rome near the Colosseum with the cheapest available flight from New York City for the first week of October.",
    "I'm on a diet in London. Where can I find a good place to eat a healthy meal for under £10?",
    "Create a 3-day family-friendly itinerary for Paris, including a mix of famous landmarks and local experiences.",
    "What are some off-the-beaten-path things to do in Tokyo for a solo traveler interested in art and photography?",
    "Find me the best-rated vegetarian and vegan restaurants in Berlin that are open for dinner tonight.",
  ];

export default function About() {
  return (
    <main className="min-h-screen p-1 bg-black">
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border-1">
        {/* <span className="text-white/70 text-xs mb-3">
          Travel re-defined with
        </span>
        <p className="z-10 whitespace-pre-wrap text-center text-7
        xl font-semibold tracking-tighter text-white">
          MERIDIAN.AI
        </p> */}
        <div
      className="relative flex h-[500px] w-full flex-col overflow-hidden p-2"
    >
      <AnimatedList>
        {travelPrompts.map((prompt, idx) => (
          <div key={idx}>
            {prompt}
          </div>
        ))}

      </AnimatedList>
 
    </div>

        <Ripple />
      </div>
    </main>
  );
}
