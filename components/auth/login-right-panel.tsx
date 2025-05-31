"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LoginForm } from "./login-form"
import { LoginRightPanelProps } from "@/lib/custom-types"
import { RegisterFlow } from "./register-flow"

export function LoginRightPanel({ currentImage, onNext, onPrev, onSwitchToLogin, viewMode }: LoginRightPanelProps) {
  return (
    <div className="relative bg-black h-full min-h-[70vh] lg:min-h-screen p-2 overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {viewMode === "login" && (
        <>
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
        </>
      )}

      {viewMode === "register" && (
        <RegisterFlow onSwitchToLogin={onSwitchToLogin} />
      )}
    </div>
  )
}