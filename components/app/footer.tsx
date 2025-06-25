import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center text-wrap">
            <span className="tracking-tighter bg-white px-2 py-1 rounded font-medium text-xs text-black mr-2">
              MERIDIAN.AI
            </span>
            <span className="text-xs text-white">&copy; {currentYear} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-wrap">
            <nav className="flex items-center gap-1">
              <Link href="https://thechai.fyi" target="_blank" className="text-xs text-white hover:text-gray-400 transition-colors">
                Get in touch
              </Link>
              <ExternalLinkIcon className="w-2 h-2 stroke-gray-200" />
            </nav>

          </div>
        </div>
      </div>
    </footer>
  )
}
