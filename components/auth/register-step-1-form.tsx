"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Apply error to confirmPassword field
  })

type FormData = z.infer<typeof schema>

interface RegisterStep1FormProps {
  onNext: (data: FormData) => void
  onSwitchToLogin: () => void
}

const inputVariants = {
  hidden: { opacity: 0, y: 15 }, // Slightly reduced y offset
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" }, // Slightly faster stagger
  }),
}

export function RegisterStep1Form({ onNext, onSwitchToLogin }: RegisterStep1FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onNext(data)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full" // Ensures it tries to fill height if parent allows
    >
      <motion.h2
        custom={0}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        className="text-xl font-semibold text-center text-white tracking-tight mb-5" // Reduced size & margin
      >
        Let's Get Started...
      </motion.h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5 flex-grow flex flex-col justify-center">
        {" "}
        {/* Reduced space-y */}
        <div className="grid grid-cols-2 gap-2.5">
          {" "}
          {/* Reduced gap */}
          <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="firstNameReg" className="text-xs font-semibold text-white">
              First Name
            </Label>
            <Input
              id="firstNameReg"
              {...register("firstName")}
              className="mt-0.5 text-sm bg-transparent text-white placeholder:text-gray-400 border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5" // Reduced mt & py
            />
            {errors.firstName && <p className="text-xs text-red-400 mt-0.5">{errors.firstName.message}</p>}
          </motion.div>
          <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="lastNameReg" className="text-xs font-semibold text-white">
              Last Name
            </Label>
            <Input
              id="lastNameReg"
              {...register("lastName")}
              className="mt-0.5 text-sm bg-transparent text-white placeholder:text-gray-400 border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5" // Reduced mt & py
            />
            {errors.lastName && <p className="text-xs text-red-400 mt-0.5">{errors.lastName.message}</p>}
          </motion.div>
        </div>
        <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible">
          <Label htmlFor="emailReg" className="text-xs font-semibold text-white">
            Email
          </Label>
          <Input
            id="emailReg"
            type="email"
            {...register("email")}
            className="mt-0.5 text-sm bg-transparent text-white placeholder:text-gray-400 border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5" // Reduced mt & py
          />
          {errors.email && <p className="text-xs text-red-400 mt-0.5">{errors.email.message}</p>}
        </motion.div>
        {/* Password fields now in a grid for side-by-side layout */}
        <div className="grid grid-cols-2 gap-2.5">
          <motion.div custom={4} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="passwordReg" className="text-xs font-semibold text-white">
              Password
            </Label>
            <Input
              id="passwordReg"
              type="password"
              {...register("password")}
              className="mt-0.5 text-sm bg-transparent text-white placeholder:text-gray-400 border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5" // Reduced mt & py
            />
            {errors.password && <p className="text-xs text-red-400 mt-0.5">{errors.password.message}</p>}
          </motion.div>
          <motion.div custom={5} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="confirmPasswordReg" className="text-xs font-semibold text-white">
              Confirm Password
            </Label>
            <Input
              id="confirmPasswordReg"
              type="password"
              {...register("confirmPassword")}
              className="mt-0.5 text-sm bg-transparent text-white placeholder:text-gray-400 border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5" // Reduced mt & py
            />
            {errors.confirmPassword && <p className="text-xs text-red-400 mt-0.5">{errors.confirmPassword.message}</p>}
          </motion.div>
        </div>
        <motion.div custom={6} variants={inputVariants} initial="hidden" animate="visible" className="pt-1.5">
          {" "}
          {/* Reduced pt */}
          <Button
            type="submit"
            className="w-full rounded-lg py-2.5 text-sm bg-[#BFFA00] text-black hover:bg-lime-400 font-semibold" // Reduced py
          >
            Continue
          </Button>
        </motion.div>
      </form>
      <motion.p
        custom={7}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        className="text-center text-xs text-white mt-3" // Reduced mt, changed text color for better contrast
      >
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="font-semibold text-[#BFFA00] hover:text-lime-300">
          Sign In
        </button>
      </motion.p>
    </motion.div>
  )
}
