import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.svg"

export function LogoDisplay() {
  return (
    <Link href="/" className="">
      <Image
        src={logo}
        alt="MERIDIAN.AI Logo"
        width={100}
        height={30}
        priority
      />
    </Link>
  )
}
