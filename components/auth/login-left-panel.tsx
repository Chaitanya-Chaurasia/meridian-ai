import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { LogoDisplay } from "@/components/app/logo-inset"
import { LoginLeftPanelProps } from "@/lib/custom-types"


export function LoginLeftPanel({ currentImage }: LoginLeftPanelProps) {
  return (
    <div className="relative py-12 lg:py-0 flex flex-col justify-between h-full">
      <LogoDisplay />
      <div>
        <p className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">TRAVEL HASSLE-FREE WITH AI</p>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
          FOR  <br />
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
        <div className="mt-12">
          <p className="text-neutral-600 text-sm">Don&apos;t have account?</p>
          <Link
            href="/register"
            className="inline-flex items-center font-semibold text-neutral-900 hover:text-neutral-700 group mt-1"
          >
            Create account <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

          <div className="flex items-center justify-end mb-2">
            <MapPin className="h-5 w-5 mr-2 text-[#BFFF00]" />
            <h3 className="text-sm font-semibold tracking-tight">{currentImage.location}</h3>
      </div>
    </div>
  )
}
