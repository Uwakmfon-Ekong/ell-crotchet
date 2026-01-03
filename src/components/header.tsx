"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = ["Home", "Shop", "Custom", "About", "FAQ"]

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/ells2.png"
            alt="Ell Crochet Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm tracking-wide text-white/90 hover:text-white transition relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all"
            >
              {item}
            </Link>
          ))}

          {/* Cart Icon */}
          <button className="relative hover:opacity-80 transition">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] bg-white text-gray-900 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white text-gray-900 p-6 flex flex-col">
            
            {/* Close */}
            <div className="flex items-center justify-between mb-10">
              <Image
                src="/ells2.png"
                alt="Ell Crochet Logo"
                width={120}
                height={40}
              />
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-gray-600 transition"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-200" />

            {/* Mobile CTA */}
            <Link href="/shop" onClick={() => setOpen(false)}>
              <button className="w-full py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">
                Shop Collection
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
