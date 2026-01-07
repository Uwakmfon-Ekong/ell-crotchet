"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "2348083193784"; 
  const message = "Hi Ell, I want to get in touch!!!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO */}
      <section className="relative h-[80vh] bg-[url('/crotchet.jpeg')] bg-cover bg-center flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="font-serif text-5xl mb-4">Contact Me</h1>
          <p className="text-white/90 text-lg">
            Have a question, request, or idea? I’d love to hear from you!
          </p>
        </div>
        <div className="mt-12 text-center relative z-10">
 
  <Link href={whatsappLink} target="_blank" className="relative z-10">
    <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#dbe6d3] text-gray-900 font-medium hover:bg-[#cfdcc5] transition shadow-sm">
      Message on WhatsApp
      <ArrowRight size={18} />
    </button>
  </Link>
</div>

      </section>

     
          

      <Footer />
    </main>
  );
}
