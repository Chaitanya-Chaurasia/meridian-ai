import {
  CalendarIcon,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Plane,
  Ship,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useRef } from "react";
import google from "@/public/google.png";
import airbnb from "@/public/airbnb.png";
import booking from "@/public/booking.svg";
import expedia from "@/public/expedia.svg";
import sky from "@/public/skyscanner.png";
import { cn } from "@/lib/utils";
import { fonts } from "@/lib/utils";

interface Deal {
  id: number;
  type: string;
  title: string;
  price: number;
  provider: string;
  providerLogo: string | StaticImageData;
  date: string;
  rating: number;
  discount: string;
  airline?: string;
  flightTime?: string;
  connectionType?: string;
  departureTime?: string;
  arrivalTime?: string;
}

export default function DealCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const deals = [
    {
      id: 1,
      type: "flight",
      title: "New York to Miami",
      price: 99,
      provider: "Skyscanner",
      providerLogo: sky,
      date: "Mar 15 - Mar 22",
      rating: 4.5,
      discount: "30% OFF",
      airline: "American Airlines",
      flightTime: "3h 15m",
      connectionType: "Direct",
      departureTime: "08:30",
      arrivalTime: "11:45",
    },
    {
      id: 2,
      type: "cruise",
      title: "Caribbean Cruise",
      price: 599,
      provider: "Google",
      providerLogo: google,
      date: "Apr 10 - Apr 17",
      rating: 4.8,
      discount: "20% OFF",
    },
    {
      id: 3,
      type: "car",
      title: "SUV Rental in Los Angeles",
      price: 45,
      provider: "Expedia",
      providerLogo: expedia,
      date: "Mar 1 - Mar 8",
      rating: 4.2,
      discount: "15% OFF",
    },
    {
      id: 4,
      type: "flight",
      title: "Chicago to Las Vegas",
      price: 129,
      provider: "Skyscanner",
      providerLogo: sky,
      date: "Feb 28 - Mar 7",
      rating: 4.3,
      discount: "25% OFF",
      airline: "Southwest",
      flightTime: "4h 45m",
      connectionType: "1 Stop",
      departureTime: "14:20",
      arrivalTime: "17:05",
    },
    {
      id: 5,
      type: "cruise",
      title: "Alaska Cruise",
      price: 799,
      provider: "Google",
      providerLogo: google,
      date: "Jun 15 - Jun 22",
      rating: 4.9,
      discount: "10% OFF",
    },
    {
      id: 6,
      type: "car",
      title: "Economy Car in Orlando",
      price: 35,
      provider: "Expedia",
      providerLogo: expedia,
      date: "Apr 5 - Apr 12",
      rating: 4.0,
      discount: "40% OFF",
    },
    {
      id: 7,
      type: "flight",
      title: "Boston to San Francisco",
      price: 199,
      provider: "Skyscanner",
      providerLogo: sky,
      date: "May 10 - May 17",
      rating: 4.6,
      discount: "15% OFF",
      airline: "JetBlue",
      flightTime: "6h 30m",
      connectionType: "Direct",
      departureTime: "09:15",
      arrivalTime: "12:45",
    },
    {
      id: 8,
      type: "hotel",
      title: "Luxury Resort in Bali",
      price: 89,
      provider: "Booking.com",
      providerLogo: booking,
      date: "Jul 20 - Jul 27",
      rating: 4.7,
      discount: "20% OFF",
    },
    {
      id: 9,
      type: "hotel",
      title: "Cozy Apartment in Paris",
      price: 75,
      provider: "Airbnb",
      providerLogo: airbnb,
      date: "Mar 25 - Apr 1",
      rating: 4.4,
      discount: "10% OFF",
    },
    {
      id: 10,
      type: "flight",
      title: "Seattle to Denver",
      price: 149,
      provider: "Skyscanner",
      providerLogo: sky,
      date: "Jun 5 - Jun 12",
      rating: 4.2,
      discount: "25% OFF",
      airline: "United",
      flightTime: "2h 20m",
      connectionType: "Direct",
      departureTime: "16:40",
      arrivalTime: "19:00",
    },
  ];

  const renderDealDetails = (deal: Deal) => {
    if (deal.type === "flight") {
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-gray-700">{deal.airline}</span>
            <span
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                deal.connectionType === "Direct"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              )}
            >
              {deal.connectionType}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{deal.flightTime}</span>
            </div>
            <span>
              {deal.departureTime} - {deal.arrivalTime}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "flight":
        return <Plane className="h-4 w-4" />;
      case "cruise":
        return <Ship className="h-4 w-4" />;
      case "car":
        return <Car className="h-4 w-4" />;
      case "hotel":
        return <MapPin className="h-4 w-4" />;
      default:
        return <Plane className="h-4 w-4" />;
    }
  };

  return (
    <div className="mt-12 mb-8 p-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold tracking-tighter">Deals you <span className={`text-cyan-500 ${fonts.playfairDisplay}`}>can&apos;t</span> miss!</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white"
            onClick={() => scrollCarousel("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white"
            onClick={() => scrollCarousel("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="min-w-[300px] snap-start bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  {getTypeIcon(deal.type)}
                  <span className="capitalize">{deal.type}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{deal.title}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{deal.rating}</span>
                  </div>
                </div>

                {renderDealDetails(deal)}

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 mt-2">
                  <CalendarIcon className="h-3 w-3" />
                  <span>{deal.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="">
                    <Image
                      src={deal.providerLogo || "/placeholder.svg"}
                      alt={deal.provider}
                      className={`${
                        deal.provider === "Google" ? "w-4" : "w-16"
                      }`}
                    />
                  </div>
                  <div className="text-blue-600 font-bold">
                    ${deal.price}
                    <span className="text-xs text-gray-500 font-normal">
                      {deal.type === "car"
                        ? "/day"
                        : deal.type === "hotel"
                        ? "/night"
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
