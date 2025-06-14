"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { AuthModal } from "@/components/auth/auth-modal";
import { usePathname, useSearchParams } from 'next/navigation';
import { Home, TrendingUp, Plane, MapPin, Compass, Mountain } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }, 100);
        }
      }
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <header
          className={`rounded-lg px-1 py-1 transition-all duration-300 max-w-4xl w-full ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-lg"
              : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`tracking-tighter rounded-md px-2 py-2 font-medium text-sm transition-colors ${
                "text-white bg-black"
              }`}
            >
              MERIDIAN.AI
            </span>

            <NavigationMenu>
              <NavigationMenuList className="space-x-0.5 md:space-x-2">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={`flex items-center px-2 py-2 md:px-3 md:py-2 rounded-lg transition-colors tracking-tighter hover:bg-white/10 ${
                      isScrolled ? "hover:text-blue-500" : "hover:text-blue-200"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="md:hidden">
                          <Home className="w-5 h-5" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Home</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:block text-sm font-medium">
                      Home
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#trending"
                    onClick={(e) => scrollToSection(e, 'trending')}
                    className={`flex items-center px-2 py-2 tracking-tighter md:px-3 md:py-2 rounded-lg transition-colors hover:bg-white/10 ${
                      isScrolled ? "hover:text-blue-500" : "hover:text-blue-200"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="md:hidden">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Trending</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:block text-sm font-medium">
                      Trending
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#flights"
                    onClick={(e) => scrollToSection(e, 'flights')}
                    className={`flex items-center px-2 py-2 tracking-tighter md:px-3 md:py-2 rounded-lg transition-colors hover:bg-white/10 ${
                      isScrolled ? "hover:text-blue-500" : "hover:text-blue-200"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="md:hidden">
                          <Plane className="w-5 h-5" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Flights & Hotels</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:block text-sm font-medium">
                      Flights & Hotels
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/your-trips"
                    className={`flex items-center px-2 py-2 tracking-tighter md:px-3 md:py-2 rounded-lg transition-colors hover:bg-white/10 ${
                      isScrolled ? "hover:text-blue-500" : "hover:text-blue-200"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="md:hidden">
                          <MapPin className="w-5 h-5" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Your Trips</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:block text-sm font-medium">
                      Your Trips
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/explore"
                    className={`flex items-center px-2 py-2 tracking-tighter md:px-3 md:py-2 rounded-lg transition-colors hover:bg-white/10 ${
                      isScrolled ? "hover:text-blue-500" : "hover:text-blue-200"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="md:hidden">
                          <Compass className="w-5 h-5" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Explore</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:block text-sm font-medium">
                      Explore
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#nature"
                    onClick={(e) => scrollToSection(e, 'nature')}
                    className={`flex items-center px-2 py-2 tracking-tighter md:px-3 md:py-2 rounded-lg transition-colors hover:bg-white/10 ${
                      isScrolled ? "hover:text-blue-500" : "hover:text-blue-200"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="md:hidden">
                          <Mountain className="w-5 h-5" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Nature</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:block text-sm font-medium">
                      Nature
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center">
              <Button
                onClick={() => setShowAuthModal(true)}
                size="sm"
                className={`text-xs transition-colors ${
                  isScrolled
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-black text-white hover:bg-gray-700"
                }`}
              >
                Get Started
              </Button>
            </div>
          </div>
        </header>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </TooltipProvider>
  );
}
