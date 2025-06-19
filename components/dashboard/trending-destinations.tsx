"use client";

import { Badge } from "@/components/ui/badge"
import { Building, Car, ShoppingBag, Plane, Star } from "lucide-react"
import Image from "next/image"
import t1 from "@/public/trending/t1.jpg"
import t2 from "@/public/trending/t2.jpg"
import t3 from "@/public/trending/t3.jpg"
import t4 from "@/public/trending/t4.jpg"
import t5 from "@/public/trending/t5.jpg"
import { fonts } from "@/lib/utils"
import Link from "next/link"

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export function TrendingDestinations() {
  const destinations = [
    {
      id: 1,
      city: "Bali",
      country: "Indonesia",
      image: t1,
      rating: 4.8,
      comfort: "90%",
      costs: {
        flights: 650,
        hotels: 120,
        carRentals: 45,
        shopping: 200,
      },
      description: "Tropical paradise with stunning beaches and rich culture",
    },
    {
      id: 2,
      city: "Tokyo",
      country: "Japan",
      image: t4,
      rating: 4.9,
      comfort: "85%",
      costs: {
        flights: 850,
        hotels: 180,
        carRentals: 80,
        shopping: 300,
      },
      description: "Modern metropolis blending tradition with innovation",
    },
    {
      id: 3,
      city: "Santorini",
      country: "Greece",
      image: t3,
      rating: 4.7,
      comfort: "80%",
      costs: {
        flights: 750,
        hotels: 160,
        carRentals: 60,
        shopping: 250,
      },
      description: "Iconic white-washed buildings overlooking the Aegean Sea",
    },
    {
      id: 4,
      city: "Dubai",
      country: "UAE",
      image: t2,
      rating: 4.6,
      comfort: "85%",
      costs: {
        flights: 700,
        hotels: 200,
        carRentals: 70,
        shopping: 400,
      },
      description: "Futuristic city with world-class shopping and dining",
    },
    {
      id: 5,
      city: "Cape Town",
      country: "South Africa",
      image: t5,
      rating: 4.8,
      comfort: "80%",
      costs: {
        flights: 500,
        hotels: 90,
        carRentals: 35,
        shopping: 150,
      },
      description: "Beachfront property with stunning views of the Atlantic Ocean",
    },
  ]

  return (
    <section className="mt-42 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-32 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-2" id="trending">
            Trending-<span className={`text-red-200 ${fonts.playfairDisplay}`}>Destinations</span>
          </h2>
          <p className="text-gray-600 text-sm">Discover the most popular travel spots this season</p>
        </div>

        <div className="grid grid-cols-2 gap-1 h-auto md:grid-cols-3 md:grid-rows-2 md:h-[600px]">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className={`relative overflow-hidden rounded-lg group cursor-pointer h-[300px] md:h-auto ${
                index === 4 ? 'col-span-2 md:col-span-1 md:row-span-full' : ''
              }`}
            >
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={`${destination.city}, ${destination.country}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className={`absolute inset-0 flex flex-col justify-between ${
                index === 4 ? 'p-6' : 'p-4'
              }`}>
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    Comfort Score: {destination.comfort}
                  </Badge>
                </div>

                <div className={index === 4 ? 'space-y-4' : 'space-y-3'}>
                  <div>
                    <h3 className={`text-white font-semibold tracking-tighter ${
                      index === 4 ? 'text-5xl mb-2' : 'text-2xl mb-1'
                    }`}>
                      {destination.city}
                      <span className={`block ${
                        index === 4 ? 'text-3xl' : 'text-xl'
                      } ${fonts.playfairDisplay} font-normal`}>
                        {destination.country}
                      </span>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className={`${index === 4 ? 'w-4 h-4' : 'w-3 h-3'} text-yellow-400 fill-yellow-400`} />
                      <span className={`text-white ${index === 4 ? 'text-sm' : 'text-xs'} font-medium`}>
                        {destination.rating}
                      </span>
                    </div>
                    <p className={`text-white/80 ${
                      index === 4 ? 'text-sm' : 'text-xs'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {destination.description}
                    </p>
                  </div>

                  <div className={`grid grid-cols-2 ${
                    index === 4 ? 'gap-3 text-sm' : 'gap-2 text-xs'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="flex items-center gap-2 text-white/70">
                      <Plane className={index === 4 ? 'w-4 h-4' : 'w-3 h-3'} />
                      <span>${destination.costs.flights}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Building className={index === 4 ? 'w-4 h-4' : 'w-3 h-3'} />
                      <span>${destination.costs.hotels}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Car className={index === 4 ? 'w-4 h-4' : 'w-3 h-3'} />
                      <span>${destination.costs.carRentals}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <ShoppingBag className={index === 4 ? 'w-4 h-4' : 'w-3 h-3'} />
                      <span>${destination.costs.shopping}</span>
                    </div>
                  </div>

                  <Link
                    href="#waitlist"
                    onClick={(e) => scrollToSection(e, 'waitlist')}
                    className={`inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm border border-white/30 text-white ${
                      index === 4 ? 'w-full text-sm' : 'text-xs'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    Explore Itinerary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
