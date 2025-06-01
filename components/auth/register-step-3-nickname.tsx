// No changes from previous version, but ensuring it fits modal context
"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const schema = z.object({
  nickname: z.string().min(1, "Nickname is required").max(30, "Nickname too long"),
})

type FormData = z.infer<typeof schema>

interface RegisterStep3NicknameProps {
  onFinish: (data: FormData) => void
}

export function RegisterStep3Nickname({ onFinish }: RegisterStep3NicknameProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onFinish(data)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-5xl text-white tracking-tighter bg-black px-2 py-1 font-semibold text-center mb-8"
      >
        What should we call you?
      </motion.h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Label htmlFor="nicknameReg" className="text-xs font-semibold text-white">
            Your Nickname
          </Label>
          <Input
            id="nicknameReg"
            {...register("nickname")}
            className="mt-1 text-sm bg-transparent text-white placeholder:text-gray-400 border-0 border-b-2 border-gray-500 focus:border-[#BFFA00] focus:ring-0 px-1 py-2"
            placeholder="e.g., Alex the Explorer"
          />
          {errors.nickname && <p className="text-xs text-red-400 mt-1">{errors.nickname.message}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button
            type="submit"
            className="w-full rounded-lg py-3 text-sm bg-[#BFFA00] text-black hover:bg-lime-400 font-semibold"
          >
            Finish & Start Planning!
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
