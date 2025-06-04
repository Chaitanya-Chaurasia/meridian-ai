import Image from "next/image"
import { MapPin, Star } from "lucide-react"

interface DestinationCardProps {
  image: string
  title: string
  location: string
  price: number
  rating: number
}

export function DestinationCard({ image, title, location, price, rating }: DestinationCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-lg font-bold text-gray-900">${price}</span>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
