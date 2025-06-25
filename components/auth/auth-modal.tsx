"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authMethod, setAuthMethod] = useState<"email" | "phone" | null>(null)
  const [inputValue, setInputValue] = useState("")

  const handleBack = () => {
    setAuthMethod(null)
    setInputValue("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`${authMethod} auth:`, inputValue)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {authMethod ? "Enter your details" : "Get Started"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {!authMethod ? (
            <>
              <Button
                onClick={() => setAuthMethod("email")}
                variant="outline"
                className="w-full h-12 flex items-center gap-3 text-sm"
              >
                <Mail className="w-4 h-4" />
                Continue with Email
              </Button>

              <Button
                onClick={() => setAuthMethod("phone")}
                variant="outline"
                className="w-full h-12 flex items-center gap-3 text-sm"
              >
                <Phone className="w-4 h-4" />
                Continue with Phone
              </Button>

              <div className="flex items-center gap-3 my-4">
                <div className="h-px bg-gray-200 flex-1"></div>
                <span className="text-xs text-gray-500">or</span>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>

              <Button className="w-full h-12 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 flex items-center gap-3 text-sm">
                <Image src="/icons/google.png" alt="Google" width={16} height={16} />
                Continue with Google
              </Button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {authMethod === "email" ? "Email Address" : "Phone Number"}
                </label>
                <Input
                  type={authMethod === "email" ? "email" : "tel"}
                  placeholder={authMethod === "email" ? "Enter your email" : "Enter your phone number"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              {authMethod === "phone" && (
                <p className="text-xs text-gray-500">
                  We&apos;ll call or text you to confirm your number. Standard message and data rates apply.{" "}
                  <button type="button" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </button>
                </p>
              )}

              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600">
                  Continue
                </Button>
              </div>
            </form>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  )
}
