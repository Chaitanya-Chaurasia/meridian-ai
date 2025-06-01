// No changes from previous version, but ensuring it fits modal context
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { InfoIcon } from "lucide-react"

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
      staggerChildren: 0.05,
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
      return prev
    })
  }

  const handleNext = () => {
    onNext({ interests: selectedInterests })
  }

  const handleSkip = () => {
    onNext({ interests: [] })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col h-full items-center bg-white p-6 rounded-xl"
    >
      <span className="absolute inset-x-0 bottom-0 h-4 bg-[#BFFF00] z-0 transform translate-y-1"></span>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-2xl font-semibold tracking-tight text-center mb-4"
      >
        Welcome to <span className="tracking-tighter bg-black text-white px-2 py-1">MERIDIAN.AI</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-sm text-center mb-2"
      >
        What are you looking for?
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-xs text-center text-neutral-400 mb-2 flex items-center"
      >
        <InfoIcon className="inline mr-1 h-3 w-3" />
        
        We store this information to personalize our search results. 
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-xs text-neutral-400 text-center mb-5"
      >
        Choose up to {MAX_SELECTIONS}
      </motion.p>

      <motion.div
        variants={badgeContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-2.5 mb-6 w-full max-w-md"
      >
        {interestOptions.map((interest) => (
          <motion.button
            key={interest}
            variants={badgeItemVariants}
            onClick={() => toggleInterest(interest)}
            disabled={selectedInterests.length >= MAX_SELECTIONS && !selectedInterests.includes(interest)}
            className={`px-2 py-1 rounded-lg text-xs border-2 transition-all duration-200 ease-out 
              ${
                selectedInterests.includes(interest)
                  ? "border-[#BFFA00] bg-lime-500/20"
                  : "border-gray-600 hover:border-gray-500 hover:bg-neutral-800/60 disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="w-full max-w-xs flex items-center gap-4 justify-center"
      >
        <Button
          onClick={handleNext}
          variant="default"
          disabled={selectedInterests.length === 0}
          className=" rounded-lg py-2.5 text-xs disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
        <Button
          variant="outline"
          onClick={handleSkip}
          className=" rounded-lg py-2.5 text-xs border-neutral-600"
        >
          Skip for now
        </Button>
      </motion.div>
    </motion.div>
  )
}
