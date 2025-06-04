"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { fonts } from "@/lib/utils"
import { ExploreCardProps } from "@/lib/custom-types"

export function ExploreCard({ place, country, image, size = "small" }: ExploreCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  const sizeClasses = {
    small: "col-span-1 row-span-1", 
    wide: "col-span-2 row-span-1", 
    tall: "col-span-1 row-span-2", 
    large: "col-span-2 row-span-2", 
  }

  const textSizes = {
    small: "text-sm",
    wide: "text-base",
    tall: "text-2xl",
    large: "text-5xl",
  }

  const subtextSizes = {
    small: "text-xs",
    wide: "text-sm",
    tall: "text-sm",
    large: "text-base",
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-md group cursor-pointer min-h-[200px]", sizeClasses[size])}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`${place}, ${country}`}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovering ? "scale-110 brightness-75" : "scale-100",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
            isHovering ? "opacity-100" : "opacity-70",
          )}
        />
        <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
          <div>
            <h3 className={cn("text-white font-semibold tracking-tighter leading-tight", textSizes[size])}>
              {place}
              <span className={cn("block font-normal text-white/90 ", subtextSizes[size], fonts.playfairDisplay)}>{country}</span>
            </h3>
            <Button
              className={cn(
                "mt-2 bg-white text-black hover:bg-white/90 transition-all duration-300",
                isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                size === "large" ? "text-xs px-4 py-2" : "text-xs px-3 py-1.5",
              )}
              size="sm"
            >
              Start Exploring
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
