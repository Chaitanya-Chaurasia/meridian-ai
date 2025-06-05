"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthModal } from "@/components/auth/auth-modal";
import { usePathname, useSearchParams } from 'next/navigation';

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

  // Handle scroll to section when the URL has a hash
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
    <>
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

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? " hover:text-blue-500"
                          : " hover:text-blue-200"
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#trending"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(e, 'trending');
                      }}
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "hover:text-blue-500"
                          : "hover:text-blue-200"
                      }`}
                    >
                      Trending
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#flights"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(e, 'flights');
                      }}
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "hover:text-blue-500"
                          : "hover:text-blue-200"
                      }`}
                    >
                      Flights & Hotels
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="/your-trips"
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "hover:text-blue-500"
                          : "hover:text-blue-200"
                      }`}
                    >
                      Your Trips
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="/explore"
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "hover:text-blue-500"
                          : "hover:text-blue-200"
                      }`}
                    >
                      Explore
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#nature"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(e, 'nature');
                      }}
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "hover:text-blue-500"
                          : "hover:text-blue-200"
                      }`}
                    >
                      Nature Retreats
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
    </>
  );
}
