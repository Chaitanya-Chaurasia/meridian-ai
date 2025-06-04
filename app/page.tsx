import { HeroSection } from "@/components/dashboard/hero-section";
import { DestinationsSection } from "@/components/dashboard/destination-section";
import { CompanyLogos } from "@/components/dashboard/company-logos";
import { TrendingDestinations } from "@/components/dashboard/trending-destinations";
import { NatureRetreats } from "@/components/dashboard/nature-retreats";
import { FlightHotelBooking } from "@/components/dashboard/flight-destinations";
export default function Home() {
  return (
    <main className="min-h-screen p-1">
      <HeroSection />
      <TrendingDestinations />
      <div className="relative">
        <FlightHotelBooking />
      </div>
      <NatureRetreats />
      <CompanyLogos />
    </main>
  );
}
