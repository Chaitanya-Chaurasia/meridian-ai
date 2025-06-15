"use client";

import Image from "next/image";
import home from "@/public/home.jpg";
import { Button } from "../ui/button";
import { fonts } from "@/lib/utils";

export function LandingHero() {
  return (
    <section
      className="relative h-full min-h-[calc(100vh-0.5rem)] flex items-center justify-center"
      id="#home"
    >
      <div className="absolute inset-0 -z-1">
        <Image
          src={home}
          alt="bg image"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-lime-200/20 rounded-xl" />
      </div>

      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-2 overflow-hidden z-50">
        <span>
            We do it all:
        </span>
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-lg font-medium">
            Flights Hotels Itineraries Tours Cuisine Restaurants Discounts Deals Uber Lyft Car
            Rentals Trains What to Pack Packing Lists Weather Forecasts Boat
            Trips Cruises Experiences Activities Hidden Gems Local Tips Museums
            Events Tickets Bookings Reservations Vacation Homes Resorts
            Budgeting Currency Maps Directions Real-time Alerts 24/7 Support AI
            Assistant Recommendations Reviews Nightlife Shopping Adventures
            Excursions Guides Visas Insurance Transfers Boutique Stays Hostels
            Family Fun Solo Travel{" "}
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 p-2 z-50">
        <Button size="sm" className="text-xs bg-blue-600">
          Get Started
        </Button>
      </div>

      <div className="relative z-10 text-left flex flex-col justify-start w-full items-start ml-2 z-50">
        <span className="text-xl text-white font-semibold tracking-tighter bg-black text-white px-1">
          MERIDIAN.AI
        </span>
        <span className="text-7xl text-white font-semibold tracking-tighter ">
          The{" "}
          <span className={`${fonts.playfairDisplay} text-lime-200`}>
            world's
          </span>{" "}
          calling.
        </span>
        <span className="text-7xl text-white font-semibold tracking-tighter">
          Let us take you{" "}
          <span className="underline decoration-rose-500">there</span>.
        </span>
      </div>
    </section>
  );
}
