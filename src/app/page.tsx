import Link from "next/link"
import Image from "next/image"
import FeaturesSection from "@/components/feature"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[url('/crotchet.jpeg')] bg-cover bg-center bg-fixed">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

       <Header/>
       

        {/* HERO CONTENT */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="uppercase tracking-[0.25em] text-xs mb-6 text-white/80">
            Cozy • Handmade • Timeless
          </p>

          <h2 className="font-serif text-5xl lg:text-7xl leading-tight max-w-4xl mb-8">
            Crochet pieces
            <br />
            made with intention
          </h2>

          <p className="text-white/90 text-lg max-w-xl mb-12 leading-relaxed">
            Thoughtfully handcrafted using premium yarns — designed to feel personal,
            warm, and effortlessly beautiful.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/shop">
              <button className="px-8 py-3  bg-white text-gray-900 font-medium hover:bg-gray-100 transition">
                Shop Collection
              </button>
            </Link>

            <Link href="/custom">
              <button className="px-8 py-3  border border-white/40 text-white hover:bg-white/10 transition">
                Custom Order
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS THAT SCROLL OVER THE FIXED BG */}
      <FeaturesSection/>

      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h3 className="text-4xl font-serif mb-6 text-gray-900">
            Custom Orders Available
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your colors, patterns, and fit. We bring your vision to life.
          </p>
        </div>
      </section>
    </main>
  )
}
