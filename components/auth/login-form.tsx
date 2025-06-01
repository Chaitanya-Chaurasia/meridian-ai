// Using the provided file content
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
    <div className="relative z-10 backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl w-full max-w-sm shadow-xl">
      {" "}
      {/* Adjusted bg opacity and added shadow */}
      <h2 className="text-xl font-semibold text-center text-white tracking-tight mb-6">Login to your Account</h2>
      <form className="space-y-5">
        <div>
          <Label htmlFor="username" className="text-xs font-semibold text-white">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            className="mt-1 w-full border-0 border-b border-gray-500 focus:ring-0 focus:border-[#BFFA00] transition px-1 py-2 text-sm bg-transparent text-white placeholder:text-gray-400" // Changed to border-b-1
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-xs font-semibold text-white">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            className="mt-1 w-full border-0 border-b border-gray-500 focus:ring-0 focus:border-[#BFFA00] transition px-1 py-2 text-sm bg-transparent text-white placeholder:text-gray-400" // Changed to border-b-1
          />
        </div>
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center">
            <Checkbox
              id="remember-me"
              className="h-4 w-4 rounded-[4px] border-neutral-400 data-[state=checked]:bg-[#BFFA00] data-[state=checked]:text-black data-[state=checked]:border-[#BFFA00]"
            />
            <Label htmlFor="remember-me" className="ml-2 font-medium text-xs text-white">
              Remember me
            </Label>
          </div>
          <Link href="#" className="font-medium text-white hover:text-gray-300">
            Forgot your password?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full rounded-lg py-3 text-sm mt-2 bg-[#BFFA00] text-black hover:bg-lime-400 font-semibold"
        >
          Login
        </Button>
      </form>
    </div>
  )
}
