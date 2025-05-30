"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LoginForm } from "./login-form"
import type { ImageData } from "@/lib/image-data"
import { LoginRightPanelProps } from "@/lib/custom-types"

export function LoginRightPanel({ currentImage, onNext, onPrev }: LoginRightPanelProps) {
  return (
    <div className="relative bg-black h-full min-h-[70vh] lg:min-h-screen p-2 overflow-hidden flex flex-col justify-center items-center">
      <Image
        key={currentImage.src} 
        src={currentImage.src || "/placeholder.svg"}
        alt={currentImage.alt}
        layout="fill"
        objectFit="cover"
        className="opacity-80 transition-opacity duration-1000 ease-in-out" 
        priority
      />
      <LoginForm />

      <div className="absolute bottom-8 lg:bottom-12 right-8 flex items-center space-x-1 z-10">
        <button
          onClick={onPrev}
          className="p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          className="p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
