"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, Search, Plane, Car, Ship, Train } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import airbnb from "@/public/airbnb.png";
import booking from "@/public/booking.svg";
import expedia from "@/public/expedia.svg";
import sky from "@/public/skyscanner.png";
import Image from "next/image";
import { fonts } from "@/lib/utils";
import DealCarousel from "./deal-carousel";

export function FlightHotelBooking() {
  const router = useRouter();
  const [departure, setDeparture] = useState("New York (JFK), United States");
  const [destination, setDestination] = useState("Barcelona, Spain");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    new Date(2024, 2, 20)
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(2024, 2, 28)
  );
  const [mode, setMode] = useState("flight");
  const [tripType, setTripType] = useState("oneway");
  const [classType, setClassType] = useState("economy");
  const [includeHotels, setIncludeHotels] = useState(true);

  const transportModes = [
    { value: "flight", label: "Flight", icon: Plane },
    { value: "car", label: "Car", icon: Car },
    { value: "sail", label: "Sail", icon: Ship },
    { value: "train", label: "Train", icon: Train },
  ];

  const handleSwap = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      from: departure,
      to: destination,
      mode,
      tripType,
      classType,
      includeHotels: includeHotels.toString(),
    });

    if (departureDate) {
      params.append("departDate", departureDate.toISOString());
    }

    if (returnDate && tripType === "roundtrip") {
      params.append("returnDate", returnDate.toISOString());
    }

    router.push(`/#?${params.toString()}`);
  };

  const partnerLogos = [
    { name: "Skyscanner", logo: sky },
    { name: "Airbnb", logo: airbnb },
    { name: "Booking.com", logo: booking },
    { name: "Expedia", logo: expedia },
  ];

  return (
    <section className="py-12 mt-42 relative">
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-36 text-center">
          <h2
            className={`text-5xl font-semibold tracking-tighter ${fonts.playfairDisplay} mb-4`}
          >
            <span className="text-indigo-300">flights, </span>
            <span className="text-red-300">cars, </span>
            and <span className="text-lime-300">hotels,</span>
          </h2>
          <h2 className="text-4xl font-semibold tracking-tighter underline decoration-sky-400">
            all in one place!
          </h2>
        </div>

        <Card className="max-w-6xl mx-auto shadow-lg bg-white/95 backdrop-blur-sm border-0">
          <CardContent className="p-6">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  From
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="Enter departure city"
                    className="h-12 bg-white border-gray-200 text-sm shadow-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSwap}
                    className="h-8 w-8 rounded-full bg-blue-50 hover:bg-blue-100 flex-shrink-0"
                  >
                    <ArrowLeftRight className="h-4 w-4 text-blue-600" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">To</Label>
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination city"
                  className="h-12 bg-white border-gray-200 text-sm shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Date In
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "h-12 w-full justify-start text-left font-normal border border-gray-200 bg-white hover:bg-gray-50 text-sm shadow-sm",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <div>
                        <div className="font-semibold">
                          {departureDate
                            ? format(departureDate, "d MMM")
                            : "Select"}
                        </div>
                        <div className="text-xs text-gray-500">
                          {departureDate ? format(departureDate, "EEE") : "Day"}
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Date Out
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      disabled={tripType === "oneway"}
                      className={cn(
                        "h-12 w-full justify-start text-left font-normal border border-gray-200 bg-white hover:bg-gray-50 text-sm shadow-sm",
                        tripType === "oneway" &&
                          "opacity-50 cursor-not-allowed",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <div>
                        <div className="font-semibold">
                          {returnDate && tripType === "roundtrip"
                            ? format(returnDate, "d MMM")
                            : "Select"}
                        </div>
                        <div className="text-xs text-gray-500">
                          {returnDate && tripType === "roundtrip"
                            ? format(returnDate, "EEE")
                            : "Day"}
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {transportModes.map((transportMode) => {
                    const IconComponent = transportMode.icon;
                    return (
                      <Button
                        variant="ghost"
                        key={transportMode.value}
                        onClick={() => setMode(transportMode.value)}
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          mode === transportMode.value
                            ? "bg-blue-100 text-blue-700 shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                      >
                        <IconComponent className="h-4 w-4" />
                        {transportMode.label}
                      </Button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="includeHotels"
                    checked={includeHotels}
                    onCheckedChange={(checked) => setIncludeHotels(!!checked)}
                    className="h-4 w-4"
                  />
                  <Label
                    htmlFor="includeHotels"
                    className="text-sm cursor-pointer font-medium"
                  >
                    Include Hotels
                  </Label>
                </div>

                <Select value={classType} onValueChange={setClassType}>
                  <SelectTrigger className="w-32 h-10 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value="oneway"
                      checked={tripType === "oneway"}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium">One Way</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value="roundtrip"
                      checked={tripType === "roundtrip"}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium">Round Trip</span>
                  </label>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="px-8 py-3 text-sm font-medium shadow-lg"
              >
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 max-w-6xl mx-auto">
          <DealCarousel />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Curated from trusted travel sites
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={60}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
