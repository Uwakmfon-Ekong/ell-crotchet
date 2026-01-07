"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomOrderCTA from "@/components/customorder";
import Image from "next/image";

export default function CustomPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO + How It Works */}
     <section className="relative h-[60vh] overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0">
         <Image
           src="/crotchet.jpeg"
           alt="Shop background"
           fill
           priority
           sizes="100vw"
           className="
             object-cover
             object-[50%_35%]
             md:object-center
           "
         />
       </div>
     
       {/* Overlay */}
       <div className="absolute inset-0 bg-black/60 z-[1]" />
     
       <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center text-center text-white">
         <div>
    <h1 className="font-serif text-5xl mb-4">
      Custom Crochet Orders
    </h1>

    <p className="text-white/90 text-lg max-w-xl mx-auto">
      Work with me to create a one-of-a-kind piece that’s perfectly tailored to you.
    </p>
    </div>
  </div>
</section>
     

      <div className="pt-10">
        <CustomOrderCTA />
      </div>

      <Footer />
    </main>
  );
}
