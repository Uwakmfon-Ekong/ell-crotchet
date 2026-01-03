import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#faf4ee]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
        
      <Link href="/">
          <Image
            src="/ells.png"
            alt="Ell Crochet Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
       

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://x.com/EllonChain"
            target="_blank"
            aria-label="Instagram"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <Twitter size={20} />
          </Link>

          <Link
            href="mailto:rachelenoch908@gmail.com"
            aria-label="Email"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <Mail size={20} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} EllsCrochet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
