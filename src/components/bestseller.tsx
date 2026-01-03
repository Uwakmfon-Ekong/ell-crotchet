import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

const products = [
  {
    id: 1,
    category: "CARDIGANS",
    name: "Cloud Cardigan",
    price: "$185",
    image: "/product1.jpg",
    colors: ["#f3d6dc", "#f1ede8", "#dfe8d8"],
  },
  {
    id: 2,
    category: "SWEATERS",
    name: "Winter Warmth Sweater",
    price: "$165",
    image: "/product2.jpg",
    colors: ["#d8d7f2", "#f1ede8", "#dfe8d8"],
    extra: "+1",
  },
  {
    id: 3,
    category: "SCARVES",
    name: "Cozy Infinity Scarf",
    price: "$65",
    image: "/product3.jpg",
    colors: ["#f3d6dc", "#d8d7f2"],
  },
  {
    id: 4,
    category: "MITTENS",
    name: "Alpine Mittens",
    price: "$45",
    image: "/product4.jpg",
    colors: ["#dfe8d8"],
  },
]

export default function BestSellersSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm italic text-pink-300 mb-3">
            Customer favorites
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Best Sellers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our most loved pieces, cherished by customers around the world
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm transition overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/5] bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
                    <Heart size={16} className="text-gray-700" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs tracking-widest text-gray-400 mb-2">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-700 mb-4">{product.price}</p>

                  {/* Color dots */}
                  <div className="flex items-center gap-2">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {product.extra && (
                      <span className="text-xs text-gray-500">
                        {product.extra}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-20">
          <Link
            href="/shop"
            className="text-sm text-pink-300 hover:text-pink-400 transition"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  )
}
