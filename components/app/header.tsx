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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

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
              : "bg-white/10 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`tracking-tighter rounded-lg px-2 py-2 font-medium text-sm transition-colors ${
                isScrolled ? "text-white bg-black" : "text-black bg-white"
              }`}
            >
              MERIDIAN.AI
            </span>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/service" passHref>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      Trending
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" passHref>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      Flights & Hotels
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" passHref>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      Your Trips
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" passHref>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      Explore
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/service" passHref>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-sm tracking-tighter font-medium rounded-lg transition-colors hover:bg-white/10 ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      Nature Retreats
                    </NavigationMenuLink>
                  </Link>
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
                    : "bg-white text-gray-900 hover:bg-gray-100"
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
