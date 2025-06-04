"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftRight, Search, Plane, Car, Ship, Train } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { fonts } from "@/lib/utils"

export function FlightHotelBooking() {
  const router = useRouter()
  const [departure, setDeparture] = useState("New York (JFK), United States")
  const [destination, setDestination] = useState("Barcelona, Spain")
  const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date(2024, 2, 20))
  const [returnDate, setReturnDate] = useState<Date | undefined>(new Date(2024, 2, 28))
  const [mode, setMode] = useState("flight")
  const [tripType, setTripType] = useState("oneway")
  const [classType, setClassType] = useState("economy")
  const [includeHotels, setIncludeHotels] = useState(true)

  const transportModes = [
    { value: "flight", label: "Flight", icon: Plane },
    { value: "car", label: "Car", icon: Car },
    { value: "sail", label: "Sail", icon: Ship },
    { value: "train", label: "Train", icon: Train },
  ]

  const handleSwap = () => {
    const temp = departure
    setDeparture(destination)
    setDestination(temp)
  }

  const handleSearch = () => {
    const params = new URLSearchParams({
      from: departure,
      to: destination,
      mode,
      tripType,
      classType,
      includeHotels: includeHotels.toString(),
    })

    if (departureDate) {
      params.append("departDate", departureDate.toISOString())
    }

    if (returnDate && tripType === "roundtrip") {
      params.append("returnDate", returnDate.toISOString())
    }

    router.push(`/#?${params.toString()}`)
  }

  return (
    <section className="py-12 bg-gray-50 mt-42">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className={`text-5xl font-semibold ${fonts.playfairDisplay} tracking-tighter mb-4`}>
            <span className="text-indigo-400">flights, </span>
            <span className="text-red-400">cars, </span>
            and <span className="text-lime-400">hotels,</span>
          </h2>
          <h2 className="text-4xl font-semibold tracking-tighter underline decoration-sky-500">all in one place!</h2>
        </div>

        <Card className="max-w-6xl mx-auto shadow-lg">
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="space-y-1">
                <Label className="text-xs font-medium text-gray-700">From</Label>
                <div className="flex items-center gap-1">
                  <Input
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="Enter departure city"
                    className="h-12 bg-gray-50 border text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSwap}
                    className="h-8 w-8 rounded-full bg-blue-50 hover:bg-blue-100 flex-shrink-0"
                  >
                    <ArrowLeftRight className="h-3 w-3 text-blue-600" />
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-medium text-gray-700">To</Label>
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination city"
                  className="h-12 bg-gray-50 border text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-medium text-gray-700">Date In</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "h-12 w-full justify-start text-left font-normal border bg-gray-50 hover:bg-gray-100 text-sm",
                        !departureDate && "text-muted-foreground",
                      )}
                    >
                      <div>
                        <div className="font-semibold">{departureDate ? format(departureDate, "d MMM") : "Select"}</div>
                        <div className="text-xs text-gray-500">
                          {departureDate ? format(departureDate, "EEE") : "Day"}
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-medium text-gray-700">Date Out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      disabled={tripType === "oneway"}
                      className={cn(
                        "h-12 w-full justify-start text-left font-normal border bg-gray-50 hover:bg-gray-100 text-sm",
                        tripType === "oneway" && "opacity-50 cursor-not-allowed",
                        !returnDate && "text-muted-foreground",
                      )}
                    >
                      <div>
                        <div className="font-semibold">
                          {returnDate && tripType === "roundtrip" ? format(returnDate, "d MMM") : "Select"}
                        </div>
                        <div className="text-xs text-gray-500">
                          {returnDate && tripType === "roundtrip" ? format(returnDate, "EEE") : "Day"}
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {transportModes.map((transportMode) => {
                    const IconComponent = transportMode.icon
                    return (
                      <Button
                        key={transportMode.value}
                        onClick={() => setMode(transportMode.value)}
                        className={cn(
                          "flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors",
                          mode === transportMode.value
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                        )}
                      >
                        <IconComponent className="h-3 w-3" />
                        {transportMode.label}
                      </Button>
                    )
                  })}
                </div>

                <div className="flex items-center gap-1">
                  <Checkbox
                    id="includeHotels"
                    checked={includeHotels}
                    onCheckedChange={(checked) => setIncludeHotels(!!checked)}
                    className="h-3 w-3"
                  />
                  <Label htmlFor="includeHotels" className="text-xs cursor-pointer">
                    Include Hotels
                  </Label>
                </div>

                <Select value={classType} onValueChange={setClassType}>
                  <SelectTrigger className="w-24 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value="oneway"
                      checked={tripType === "oneway"}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-3 h-3 text-blue-600"
                    />
                    <span className="text-xs font-medium">One Way</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value="roundtrip"
                      checked={tripType === "roundtrip"}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-3 h-3 text-blue-600"
                    />
                    <span className="text-xs font-medium">Round Trip</span>
                  </label>
                </div>
              </div>

              <Button onClick={handleSearch} variant="default" className="px-6 py-2 text-sm">
                <Search className="w-3 h-3 " />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
