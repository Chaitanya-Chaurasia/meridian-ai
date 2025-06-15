import { HeroSection } from "@/components/dashboard/hero-section";
import { TrendingDestinations } from "@/components/dashboard/trending-destinations";
import { NatureRetreats } from "@/components/dashboard/nature-retreats";
import { FlightHotelBooking } from "@/components/dashboard/flight-destinations";
import { Waitlist } from "@/components/dashboard/waitlist";
export default function Home() {
  return (
    <main className="min-h-screen p-1">
      <HeroSection />
      <TrendingDestinations />
      <div className="relative">
        <FlightHotelBooking />
      </div>
      <NatureRetreats />
      <div className="relative max-w-6xl mx-auto" id="waitlist">
        {" "}
        <Waitlist />
      </div>
    </main>
  );
}
