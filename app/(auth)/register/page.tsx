import Link from "next/link"
// MapPin and UserCircle2 imports removed as footer and icon are removed

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xs space-y-3 rounded-md bg-white p-5 shadow-md">
        <div className="text-center">
          <h1 className="text-lg font-semibold tracking-tight text-neutral-800">Create an Account</h1>
          <p className="mt-1 text-xs text-neutral-500">Join us and start your journey.</p>
        </div>
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="first-name" className="text-xs font-medium text-neutral-700">
                First name
              </Label>
              <Input
                id="first-name"
                placeholder="John"
                className="mt-0.5 h-8 text-sm placeholder:text-neutral-400"
                required
              />
            </div>
            <div>
              <Label htmlFor="last-name" className="text-xs font-medium text-neutral-700">
                Last name
              </Label>
              <Input
                id="last-name"
                placeholder="Doe"
                className="mt-0.5 h-8 text-sm placeholder:text-neutral-400"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-xs font-medium text-neutral-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-0.5 h-8 text-sm placeholder:text-neutral-400"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-xs font-medium text-neutral-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-0.5 h-8 text-sm placeholder:text-neutral-400"
              required
            />
          </div>
          <div>
            <Label htmlFor="confirm-password" className="text-xs font-medium text-neutral-700">
              Confirm password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="mt-0.5 h-8 text-sm placeholder:text-neutral-400"
              required
            />
          </div>
          <Button type="submit" className="w-full h-8 bg-neutral-900 text-sm text-white hover:bg-neutral-800">
            Create Account
          </Button>
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-neutral-500">Or sign up with</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full h-8 border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            <svg className="mr-2 h-3.5 w-3.5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Sign up with Google
          </Button>
        </form>
        <div className="pt-1 text-center text-xs">
          <span className="text-neutral-600">Already have an account? </span>
          <Link href="/login" className="font-medium text-neutral-700 hover:text-neutral-900 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}