import { DestinationCard } from "./destination-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400",
      title: "Desert Canyon",
      location: "Arizona, USA",
      price: 186,
      rating: 4.8,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      title: "Bali Island",
      location: "Bali, Indonesia",
      price: 224,
      rating: 4.9,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      title: "Gili Trawangan",
      location: "Lombok, NTT",
      price: 189,
      rating: 4.7,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Dive Into The Beauty
              <br />
              Of The World
            </h2>
          </div>

          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>
    </section>
  )
}
