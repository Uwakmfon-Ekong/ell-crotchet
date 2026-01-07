"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomOrderCTA from "@/components/customorder";

export default function CustomPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO + How It Works */}
      <section className="relative h-[60vh] bg-[url('/crotchet.jpeg')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl px-6">
          <h1 className="font-serif text-5xl mb-4 text-white">
            Custom Crochet Orders
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Work with me to create a one-of-a-kind piece that’s perfectly tailored to you.
          </p>
        </div>
      </section>

      <div className="pt-10">
        <CustomOrderCTA />
      </div>

      <Footer />
    </main>
  );
}
