"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomOrderCTA from "@/components/customorder";
import { products } from "@/data/product";
import { addToCart } from "@/lib/cart";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO */}
      <section className="relative h-[60vh] bg-[url('/crotchet.jpeg')] bg-cover bg-center bg-fixed flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-5xl mb-4">Shop Collection</h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Thoughtfully made crochet pieces designed to feel personal and timeless.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* FILTERS */}
          <div className="lg:flex hidden flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm transition ${
                  selectedCategory === cat
                    ? "bg-pink-200 text-gray-900"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                {/* IMAGE */}
                <Link href={`/shop/${product.slug}`}>
                  <div
                    className="h-72 rounded-2xl bg-cover bg-center mb-5 transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: `url(${product.images[0]})`,
                    }}
                  />
                </Link>

                {/* INFO */}
                <h3 className="font-serif text-lg text-gray-900 mb-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  {product.category}
                </p>

                <p className="text-gray-900 font-medium mb-4">
                  ₦{product.price.toLocaleString()}
                </p>

                
               
              </div>
            ))}
          </div>

          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                We're sorry.There are no products available in this category right now.
                You can place a custom order or check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      <CustomOrderCTA />
      <Footer />
    </main>
  );
}
