// Using the provided file content, adapted for new props
"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LoginForm } from "./login-form"
import type { ImageData } from "@/lib/image-data"

interface LoginRightPanelProps {
  currentImage: ImageData
  onNextImage: () => void
  onPrevImage: () => void
}

export function LoginRightPanel({ currentImage, onNextImage, onPrevImage }: LoginRightPanelProps) {
  return (
    <div className="relative bg-black h-full min-h-[70vh] lg:min-h-screen p-2 overflow-hidden flex flex-col justify-center items-center rounded-tl-xl rounded-bl-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.src} // Key is important for slideshow updates
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }} // Image opacity
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Slower transition for image
          className="absolute inset-0 z-0" // Ensure image is behind grid and form
        >
          <Image
            src={currentImage.src || "/placeholder.svg?width=1920&height=1080&query=abstract+background"}
            alt={currentImage.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Login Form and Image Details - always visible on this panel */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <LoginForm />
      </div>

      <div className="absolute bottom-8 lg:bottom-12 right-8 flex items-center space-x-1 z-10">
        <button
          onClick={onPrevImage}
          className="p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNextImage}
          className="p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
