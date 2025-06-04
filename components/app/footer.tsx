import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="tracking-tighter bg-black px-2 py-1 rounded font-medium text-xs text-white mr-2">
              MERIDIAN.AI
            </span>
            <span className="text-xs text-gray-500">© {currentYear} Meridian AI. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </footer>
  )
}
