"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
// CheckCircle can be kept for selected badges if desired, or removed for pure text badges
// For now, let's remove icons from badges as requested.

interface RegisterStep2ChoicesProps {
  onNext: (data: { interests: string[] }) => void
}

const interestOptions = [
  "Automated Itineraries",
  "Flight Deals",
  "Hotel Recommendations",
  "Local Experiences",
  "Visa Information",
  "Budget Tracking",
  "Real-time Updates",
  "Offline Maps Access",
  "Restaurant Reservations",
  "Smart Packing Lists",
]

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Stagger animation for each badge
    },
  },
}

const badgeItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

export function RegisterStep2Choices({ onNext }: RegisterStep2ChoicesProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const MAX_SELECTIONS = 5

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => {
      const isSelected = prev.includes(interest)
      if (isSelected) {
        return prev.filter((item) => item !== interest)
      } else if (prev.length < MAX_SELECTIONS) {
        return [...prev, interest]
      }
      return prev // Max selections reached, do not add
    })
  }

  const handleNext = () => {
    onNext({ interests: selectedInterests })
  }

  const handleSkip = () => {
    onNext({ interests: [] }) // Send empty array if skipped
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full items-center justify-center w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-2xl font-semibold text-center text-[#BFFA00] mb-4" // Reduced mb
      >
        Welcome to MERIDIAN.AI
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-lg text-white text-center mb-2"
      >
        What are you looking for?
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-xs text-neutral-400 text-center mb-5" // Reduced mb
      >
        Choose up to {MAX_SELECTIONS}
      </motion.p>

      <motion.div
        variants={badgeContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-2.5 mb-6 w-full max-w-md" // Reduced gap & mb
      >
        {interestOptions.map((interest) => (
          <motion.button
            key={interest}
            variants={badgeItemVariants}
            onClick={() => toggleInterest(interest)}
            disabled={selectedInterests.length >= MAX_SELECTIONS && !selectedInterests.includes(interest)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all duration-200 ease-out
              ${
                selectedInterests.includes(interest)
                  ? "border-[#BFFA00] bg-lime-500/20 text-[#BFFA00]"
                  : "border-gray-600 text-neutral-300 hover:border-gray-500 hover:bg-neutral-800/60 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
          >
            {interest}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full max-w-xs space-y-3" // Added space-y for button and skip link
      >
        <Button
          onClick={handleNext}
          disabled={selectedInterests.length === 0}
          className="w-full rounded-lg py-2.5 text-sm bg-[#BFFA00] text-black hover:bg-lime-400 font-semibold disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Next: Your Name
        </Button>
        <Button
          variant="outline"
          onClick={handleSkip}
          className="w-full rounded-lg py-2.5 text-sm border-neutral-600 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
        >
          Skip for now
        </Button>
      </motion.div>
    </motion.div>
  )
}
