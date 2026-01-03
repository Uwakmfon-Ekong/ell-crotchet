import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CustomOrderCTA() {
  const whatsappNumber = "2348083193784" // replace with her real number
  const message =
    "Hello! I’d love to place a custom crochet order 💕"

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <section className="bg-white py-10 pb-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
          Ready for Something Unique?
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Start your custom order today and work with me to create a one-of-a-kind
          piece that’s perfectly tailored to you.
        </p>

        <Link href={whatsappLink} target="_blank">
          <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#dbe6d3] text-gray-900 font-medium hover:bg-[#cfdcc5] transition shadow-sm">
            Begin Custom Order
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </section>
  )
}
