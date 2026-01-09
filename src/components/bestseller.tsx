import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const products = [
  {
    id: 1,
    category: "LADY'S WEAR",
    name: "Full crochet set",
    price: "70,000",
    image: "/fullcrotchet.jpeg",
    colors: ["#f3d6dc", "#f1ede8", "#dfe8d8"],
  },
  {
    id: 2,
    category: "SWEATERS",
    name: "Winter Sweater",
    price: "70,000",
    image: "/hoodie.jpeg",
    colors: ["#d8d7f2", "#f1ede8", "#dfe8d8"],
    extra: "+1",
  },
  {
    id: 3,
    category: "BEACH WEAR",
    name: "Beach Vibes",
    price: "45,000",
    image: "/beach.jpeg",
    colors: ["#f3d6dc", "#d8d7f2"],
  },
  {
    id: 4,
    category: "BEADS",
    name: "Phone Handles",
    price: "12,000",
    image: "/beads.jpeg",
    colors: ["#dfe8d8"],
  },
  {
    id: 5,
    category: "UNISEX WEAR",
    name: "Granny Square Set",
    price: "90,000",
    image: "/grannies.jpeg",
    colors: ["#dfe8d8"],
  },
];
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group rounded-2xl shadow-sm p-4 cursor-pointer">
              {/* Image */}
              <div className="relative aspect-4/5 bg-gray-100  overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
                  <Heart size={16} className="text-gray-700" />
                </button>

     
              </div>

              {/* Content */}
              <div className="pt-5">
                <p className="text-xs tracking-widest text-gray-400 mb-1">
                  {product.category}
                </p>

                <h3 className="font-serif text-gray-900">{product.name}</h3>

                <p className="text-gray-700 mt-1">{product.price}</p>

                {/* Color dots */}
                <div className="flex items-center gap-2 mt-3">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border"
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
  );
}
