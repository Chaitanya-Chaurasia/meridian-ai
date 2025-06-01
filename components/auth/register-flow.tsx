// Using the provided file content, ensuring onSwitchToLogin is correctly typed and used
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { RegisterStep1Form } from "./register-step-1-form"
import { RegisterStep2Choices } from "./register-step-2-choices"
import { RegisterStep3Nickname } from "./register-step-3-nickname"

interface RegisterFlowProps {
  onSwitchToLogin: () => void 
}

export function RegisterFlow({ onSwitchToLogin }: RegisterFlowProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<any>({})
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next")
  const router = useRouter()

  const handleNextStep1 = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    setSlideDirection("next")
    setStep(2)
  }

  const handleNextStep2 = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    setSlideDirection("next")
    setStep(3)
  }

  const handleFinish = (nicknameData: any) => {
    const finalData = { ...formData, ...nicknameData }
    console.log("Final Registration Data:", finalData)
    onSwitchToLogin() 
    router.push("/plan")
  }

  const variants = {
    enter: (direction: string) => ({ x: direction === "next" ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: string) => ({ x: direction === "next" ? "-100%" : "100%", opacity: 0 }),
  }

  

  return (
    <div className="w-full flex flex-col justify-center items-center relative overflow-hidden">
      <AnimatePresence initial={false} custom={slideDirection} mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className={`w-full max-w-md`}
          >
            <RegisterStep1Form onNext={handleNextStep1} onSwitchToLogin={onSwitchToLogin} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className={`w-full max-w-lg p-6 md:p-8  flex flex-col`}
          >
            <RegisterStep2Choices onNext={handleNextStep2} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className={`w-full max-w-md p-6 md:p-8  flex flex-col`}
          >
            <RegisterStep3Nickname onFinish={handleFinish} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
