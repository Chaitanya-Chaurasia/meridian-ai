import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Plane, Building, Car, ShoppingBag, Mountain, Trees, Compass } from "lucide-react"
import Image from "next/image"
import { fonts } from "@/lib/utils"
import n1 from "@/public/nature/n1.jpg"
import n2 from "@/public/nature/n2.jpg"
import n3 from "@/public/nature/n3.jpg"
import n4 from "@/public/nature/n4.jpg"

export function NatureRetreats() {
  const retreats = [
    {
      id: 1,
      city: "Serengeti",
      country: "Tanzania",
      image: n1,
      rating: 2.0,
      costs: {
        flights: 1200,
        hotels: 80,
        carRentals: 60,
        shopping: 100,
      },
      description: "Explore Africa's diverse wildlife and breathtaking landscapes",
      duration: "10-14 days",
      bestSeason: "Nov-Mar",
    },
    {
      id: 2,
      city: "Patagonia",
      country: "Chile & Argentina",
      image: n2,
      rating: 4.8,
      costs: {
        flights: 650,
        hotels: 120,
        carRentals: 70,
        shopping: 150,
      },
      description: "Epic trekking through glaciers, mountains, and pristine wilderness.",
      duration: "5-7 days",
      bestSeason: "Jun-Sep",
    },
    {
      id: 3,
      city: "Kanchenjunga",
      country: "India",
      image: n3,
      rating: 5.0,
      costs: {
        flights: 900,
        hotels: 25,
        carRentals: 30,
        shopping: 60,
      },
      description: "Conquer the world's third highest point, laying in the arms of the Himalayas.",
      duration: "12-18 days",
      bestSeason: "Mar-May, Sep-Nov",
    },
    {
      id: 4,
      city: "The Pyramids of Giza",
      country: "Egypt",
      image: n4,
      rating: 2.5,
      costs: {
        flights: 1100,
        hotels: 90,
        carRentals: 55,
        shopping: 80,
      },
      description: "Discover the secrets of the world's most ancient civilization, in the heart of Egypt.",
      duration: "7-10 days",
      bestSeason: "Oct-Apr",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "Moderate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
      case "Challenging":
        return "bg-orange-500/20 text-orange-300 border-orange-400/30"
      case "Expert":
        return "bg-red-500/20 text-red-300 border-red-400/30"
      default:
        return "bg-white/20 text-white border-white/30"
    }
  }

  return (
    <section className="mt-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-42 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-2">
            <span className={`text-green-600 ${fonts.playfairDisplay}`}>Nature</span>-Retreats
          </h2>
          <p className="text-gray-600 text-sm">Escape to pristine wilderness and breathtaking landscapes.</p>
          <p className="text-gray-600 text-sm">Adventure awaits in the world's most stunning natural destinations</p>
        </div>

        <div className="grid grid-cols-4 grid-rows-1 gap-1  h-[600px]">
          {retreats.map((retreat, index) => (
            <div key={retreat.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={retreat.image || "/placeholder.svg"}
                alt={`${retreat.city}, ${retreat.country}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <Trees className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">{retreat.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-white font-semibold tracking-tighter text-2xl mb-1">
                      {retreat.city}
                      <span className={`block text-xl ${fonts.playfairDisplay} font-normal`}>{retreat.country}</span>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-medium">{retreat.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {retreat.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-white/70">
                      <Plane className="w-3 h-3" />
                      <span>${retreat.costs.flights}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70">
                      <Building className="w-3 h-3" />
                      <span>${retreat.costs.hotels}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70">
                      <Car className="w-3 h-3" />
                      <span>${retreat.costs.carRentals}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70">
                      <ShoppingBag className="w-3 h-3" />
                      <span>${retreat.costs.shopping}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Plan Adventure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
