import { clsx, type ClassValue } from "clsx"
import { Playfair_Display } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const playfairDisplay = Playfair_Display({ subsets: ["latin"], style: "italic" })

export const fonts = {
    playfairDisplay: playfairDisplay.className,
}

