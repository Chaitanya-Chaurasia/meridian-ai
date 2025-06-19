"use client"
import { AiSearch } from "@/components/app/ai-search";
import bg from "@/public/get-started.jpg";
import Image from "next/image";
import { fonts } from "@/lib/utils";
import Link from "next/link";

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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center" id="#home">
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="bg image"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/20 rounded-xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" id="home" >
        <p className="text-white/90 text-xs mb-3">Your AI Travel Concierge</p>

        <h1 className="text-white tracking-tighter text-3xl md:text-5xl font-semibold leading-tighter mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          Discover The{" "}
          <span className={`text-yellow-200 italic ${fonts.playfairDisplay}`}>
            Magic
          </span>{" "}
          In
          <br />
          Every Destination With AI!
        </h1>

        <p className="text-white/90 text-[10px] mb-8 max-w-2xl mx-auto ">
          From flights to Uber to food, let our AI create personalized itineraries and find the best deals for
          your dream vacation
        </p>

        <div className="space-y-4">
          <AiSearch />

          <div className="flex items-center gap-3 justify-center">
            <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            <span className="text-white/70 text-xs">or</span>
            <div className="h-px bg-white/30 flex-1 max-w-20"></div>
          </div>

          <Link
            href="#flights"
            onClick={(e) => scrollToSection(e, "flights")}
            className="bg-white/10 border-white/30  text-white hover:bg-white/20 backdrop-blur-sm rounded-lg px-6 py-2 text-xs"
          >
            Browse the traditional way
          </Link>
        </div>
      </div>
    </section>
  );
}
