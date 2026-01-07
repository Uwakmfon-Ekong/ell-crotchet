// app/shop/[slug]/page.tsx
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { products } from "@/data/product";
import { addToCart } from "@/lib/cart";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { notFound } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find product (case-insensitive)
  const product = products.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    notFound(); // triggers Next.js 404 page
  }

  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative min-h-[90vh]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <Header />

        <div className="max-w-7xl mx-auto relative z-10 min-h-[90vh] flex items-center px-6">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[0.25em] text-xs mb-4 text-white/70">
              {product.category}
            </p>

            <h1 className="font-serif text-5xl mb-6">{product.name}</h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {product.description}
            </p>

           <p className="text-2xl font-semibold mb-10">
  {product.price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  })}
</p>


            <div className="flex gap-4 flex-wrap">
             

              
              <a
                href={getWhatsAppLink({
                  name: product.name,
                  price: product.price,
                })}
                target="_blank"
                className="px-8 py-3 border border-white/40 text-white hover:bg-white/10 transition"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.images.map((img, i) => (
            <div key={i} className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={`${product.name} image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
