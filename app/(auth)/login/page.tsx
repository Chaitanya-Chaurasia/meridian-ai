"use client"

import { useState, useEffect } from "react"
import { LoginLeftPanel } from "@/components/auth/login-left-panel"
import { LoginRightPanel } from "@/components/auth/login-right-panel"
import { images } from "@/lib/image-data"

export default function PixlsLoginPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextImage()
    }, 5000) 

    return () => clearInterval(timer) 
  }, []) 

  const currentImage = images[currentImageIndex]

  return (
    <div className="max-h-screen bg-[#F3F4F6] text-neutral-800">
      <main className="lg:pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-2 lg:gap-0 min-h-screen items-stretch">
          <div className="lg:px-8 py-12 lg:py-16 flex items-center">
            <LoginLeftPanel currentImage={currentImage} />
          </div>
          <div className="hidden lg:block">
            <LoginRightPanel currentImage={currentImage} onNext={handleNextImage} onPrev={handlePrevImage} />
          </div>
        </div>
      </main>
    </div>
  )
}
