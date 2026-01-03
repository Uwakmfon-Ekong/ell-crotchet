"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomOrderCTA from "@/components/customorder"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Chunky Knit Sweater",
    category: "Sweaters",
    price: 89,
    image: "hoodie.jpeg",
    description: "Oversized, cozy sweater in soft yarn",
  },
  {
    id: 2,
    name: "Baby Clothing Set",
    category: "Baby Wears",
    price: 65,
    image: "/babies.jpeg",
    description: "Perfect for newborns, delicate and soft",
  },
  {
    id: 3,
    name: "Wool Beanie",
    category: "Hats",
    price: 35,
    image: "/beanie.jpeg",
    description: "Warm winter beanie in multiple colors",
  },
 
  {
    id: 4,
    name: "Throw Blanket",
    category: "Blankets",
    price: 95,
    image: "/blanket.jpeg",
    description: "Large throw blanket for your home",
  },
  {
    id: 5,
    name: "Bucket Hat",
    category: "Hats",
    price: 42,
    image: "/buckethat.jpeg",
    description: "Trendy bucket hat in pastel colors",
  },
  {
    id: 6,
    name: "Fingerless Mittens",
    category: "Mittens",
    price: 22,
    image: "/beach.jpeg",
    description: "Stylish fingerless gloves",
  },
  {
    id: 9,
    name: "Custom Tote Bag",
    category: "Tote Bags",
    price: 48,
    image: "/tote.jpeg",
    description: "Durable canvas tote with crochet accents",
  },
  {
    id: 10,
    name: "Boho Festival Top",
    category: "Ladies Wear",
    price: 62,
    image: "/purple.jpeg",
    description: "Lightweight crochet crop top for summer",
  },
  {
    id: 11,
    name: "Wall Tapestry",
    category: "Tapestry",
    price: 85,
    image: "/fullcrotchet.jpeg",
    description: "Beautiful handcrafted wall decoration piece",
  },
  {
    id: 12,
    name: "Baby Booties",
    category: "Baby Wears",
    price: 32,
    image: "/grannies.jpeg",
    description: "Adorable crochet booties for little ones",
  },
  {
    id: 13,
    name: "Beaded Necklace",
    category: "Necklace",
    price: 38,
    image: "/longglam.jpeg",
    description: "Delicate necklace with crochet and beads",
  },
  {
    id: 14,
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: 24,
    image: "/accessories.jpeg",
    description: "Elegant crochet earrings with pearl beads",
  },
  {
    id: 15,
    name: "Boho Phone Charm",
    category: "Phone Handles",
    price: 16,
    image: "/beads.jpeg",
    description: "Fun crochet phone charm accessory",
  },
  {
    id: 16,
    name: "Woven Shoulder Bag",
    category: "Ladies Bags",
    price: 72,
    image: "/tapestry.jpeg",
    description: "Stylish crochet bag for everyday use",
  },
  {
    id: 17,
    name: "Sleeveless Vest",
    category: "Vests",
    price: 58,
    image: "/vest.jpeg",
    description: "Lightweight sleeveless crochet vest",
  },
  {
    id: 18,
    name: "Knit Trousers",
    category: "Trousers",
    price: 79,
    image: "/crochet-womens-pants.jpg",
    description: "Comfortable and stylish crochet trousers",
  },
  {
    id: 19,
    name: "Statement Collar",
    category: "Neckpiece",
    price: 45,
    image: "/crochet-statement-collar-necklace.jpg",
    description: "Bold crochet neckpiece for any occasion",
  },
  {
    id: 20,
    name: "Beaded Clutch",
    category: "Ladies Bags",
    price: 68,
    image: "/crochet-beaded-clutch-bag.jpg",
    description: "Elegant beaded crochet evening clutch",
  },
]
export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

   const categories = [
    "All",
    "Sweaters",
    "Hats",
    "Tote Bags",
    "Ladies Wear",
    "Tapestry",
    "Baby Wears",
    "Beads",
    "Earrings",
    "Phone Handles",
    "Ladies Bags",
    "Vests",
    "Trousers",
    "Neckpiece",
    "Necklace",
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col">
      
      
      <section className="bg-white border-b border-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-5xl text-gray-900 mb-3">Shop Collection</h1>
          <p className="text-gray-600 text-lg">Discover our curated selection of handcrafted crochet pieces</p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-pink-200 text-gray-900"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Product Image */}
                <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-4">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${product.image}')`,
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="mb-3">
                  <h3 className="font-serif text-lg text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full px-4 py-2 bg-pink-200 hover:bg-pink-300 text-gray-900 rounded-lg font-medium transition-colors text-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CustomOrderCTA />

      <Footer />
    </main>
  )
}
