// Using the provided file content
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
  onSwitchToLogin: () => void // This will close the modal
}

const inputVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" },
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
      className="relative flex flex-col h-full items-center bg-white p-6 rounded-xl"
    >
      <span className="absolute inset-x-0 bottom-0 h-4 bg-[#BFFF00] z-0 transform translate-y-1"></span>

      <motion.h2
        custom={0}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        className="text-xl flex flex-col gap-6 font-semibold text-center mb-5 tracking-tight"
      >
        {" "}
        <span className="tracking-tighter bg-black text-white px-2 py-1">MERIDIAN.AI</span>
        <span className="text">Let's get you onboard!</span>
      </motion.h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">

        <div className="grid grid-cols-2 gap-2.5">
          <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="firstNameReg" className="text-xs ">
              First Name
            </Label>
            <Input
              id="firstNameReg"
              {...register("firstName")}
              type="text"
              className="mt-0.5 text-sm bg-transparent border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5"
            />
            {errors.firstName && <p className="text-xs text-red-400 mt-0.5">{errors.firstName.message}</p>}
          </motion.div>
          <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="lastNameReg" className="text-xs ">
              Last Name
            </Label>
            <Input
              id="lastNameReg"
              {...register("lastName")}
              type="text"
              className="mt-0.5 text-sm bg-transparent border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5"
            />
            {errors.lastName && <p className="text-xs text-red-400 mt-0.5">{errors.lastName.message}</p>}
          </motion.div>
        </div>
        <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible">
          <Label htmlFor="emailReg" className="text-xs ">
            Email
          </Label>
          <Input
            id="emailReg"
            type="email"
            {...register("email")}
            className="mt-0.5 text-sm bg-transparent   border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5"
          />
          {errors.email && <p className="text-xs text-red-400 mt-0.5">{errors.email.message}</p>}
        </motion.div>
        <div className="grid grid-cols-2 gap-2.5">
          <motion.div custom={4} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="passwordReg" className="text-xs ">
              Password
            </Label>
            <Input
              id="passwordReg"
              type="password"
              {...register("password")}
              className="mt-0.5 text-sm bg-transparent   border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5"
            />
            {errors.password && <p className="text-xs text-red-400 mt-0.5">{errors.password.message}</p>}
          </motion.div>
          <motion.div custom={5} variants={inputVariants} initial="hidden" animate="visible">
            <Label htmlFor="confirmPasswordReg" className="text-xs ">
              Confirm Password
            </Label>
            <Input
              id="confirmPasswordReg"
              type="password"
              {...register("confirmPassword")}
              className="mt-0.5 text-sm bg-transparent   border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-1.5"
            />
            {errors.confirmPassword && <p className="text-xs text-red-400 mt-0.5">{errors.confirmPassword.message}</p>}
          </motion.div>
        </div>
        <motion.div custom={6} variants={inputVariants} initial="hidden" animate="visible" className="pt-1.5">
          <Button
            type="submit"
            className="w-full rounded-lg py-2.5 text-sm bg-[#BFFA00] text-black hover:bg-lime-400 font-semibold"
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
        className="text-center text-xs  mt-4" // Increased mt slightly
      >
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="font-semibold text-[#BFFA00] hover:text-lime-300">
          Sign In
        </button>
      </motion.p>
    </motion.div>
  )
}
