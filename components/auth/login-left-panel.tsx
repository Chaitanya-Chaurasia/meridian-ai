"use client"
import { CircleArrowOutUpRight, MapPin } from "lucide-react"
import { LogoDisplay } from "@/components/app/logo-inset"
import type { ImageData } from "@/lib/image-data" 
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LoginLeftPanelProps {
  currentImage: ImageData
  onSwitchToRegister: () => void
}

export function LoginLeftPanel({ currentImage, onSwitchToRegister }: LoginLeftPanelProps) {
  return (
    <div className="relative py-12 lg:py-0 flex flex-col justify-between h-full">
      <LogoDisplay />
      <div>
        <p className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">TRAVEL HASSLE-FREE WITH AI</p>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
          FOR <br />
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-0 h-4 bg-[#BFFF00] z-0 transform translate-y-1"></span>
            <span className="relative z-10">TRAVELLERS AROUND</span>
          </span>
          <br />
          THE WORLD.
          <span className="inline-flex ml-2 -space-x-3 relative top-1">
            <span className="h-6 w-6 rounded-full bg-green-700 opacity-80"></span>
            <span className="h-6 w-6 rounded-full bg-green-500 opacity-90"></span>
            <span className="h-6 w-6 rounded-full bg-[#BFFF00]"></span>
          </span>
        </h1>
        <div className="mt-12 flex items-center gap-2 border border-neutral-300 w-fit px-4 py-2">
          <p className="text-neutral-600 text-sm">Don&apos;t have account?</p>
          <Link
          href="/" 
            onClick={(e) => {e.preventDefault(); onSwitchToRegister()}}
            className="hover:underline hover:text-black flex items-center text-sm text-neutral-700 font-medium group"
          >
            Get Started here
            <CircleArrowOutUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

        <div className=" w-full">
          <div className="flex items-center justify-end mb-2">
            <MapPin className="h-5 w-5 mr-2 text-[#BFFF00]" />
            <h3 className="font-semibold text-sm">{currentImage.location}</h3>
          </div>
        </div>
        
     
    </div>
  )
}
