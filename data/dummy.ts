import Home from "@/app/page"
import { Bus, FileText, Navigation, Package, History, Settings, UtensilsCrossed } from "lucide-react"

export const trendingDestinations = [
    {
      name: "Tokyo, Japan",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      description: "Vibrant culture meets modern innovation",
      trending: true,
      gradient: "from-pink-500 to-violet-500",
    },
    {
      name: "Santorini, Greece",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      description: "Stunning sunsets and white architecture",
      trending: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Bali, Indonesia",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      description: "Tropical paradise with rich traditions",
      trending: true,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Iceland",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      description: "Northern lights and natural wonders",
      trending: true,
      gradient: "from-indigo-500 to-purple-500",
    },
  ]
  
export const cheapestFlights = [
    {
      from: "NYC",
      to: "London",
      price: "$299",
      airline: "British Airways",
      duration: "7h 30m",
      date: "Dec 15",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      from: "LAX",
      to: "Tokyo",
      price: "$445",
      airline: "JAL",
      duration: "11h 45m",
      date: "Dec 18",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      from: "SFO",
      to: "Paris",
      price: "$389",
      airline: "Air France",
      duration: "10h 20m",
      date: "Dec 20",
      gradient: "from-purple-400 to-violet-500",
    },
    {
      from: "MIA",
      to: "Barcelona",
      price: "$356",
      airline: "Iberia",
      duration: "8h 15m",
      date: "Dec 22",
      gradient: "from-amber-400 to-orange-500",
    },
  ]
  
export const actionCards = [
    {
      title: "Public Transit & Taxis",
      description: "Navigate local transportation options",
      icon: Bus,
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      shadow: "shadow-blue-500/25",
    },
    {
      title: "Navigate with Google",
      description: "Get directions and explore maps",
      icon: Navigation,
      gradient: "from-emerald-500 via-emerald-600 to-emerald-700",
      shadow: "shadow-emerald-500/25",
    },
    {
      title: "Explore Cuisines",
      description: "Discover local food and restaurants",
      icon: UtensilsCrossed,
      gradient: "from-orange-500 via-orange-600 to-orange-700",
      shadow: "shadow-orange-500/25",
    },
]

export const sidebarItems = [
  { title: "Home", icon: Home, url: "#", isActive: true },
  { title: "Browse History", icon: History, url: "#" },
  { title: "What to Pack", icon: Package, url: "#" },
  { title: "Visas Made Easy", icon: FileText, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
]