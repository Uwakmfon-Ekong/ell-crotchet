import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EllCrochet | Handcrafted Crochet Pieces",
  description:
    "Beautifully handcrafted crochet pieces made with premium yarn. Cozy, timeless, and made with intention.",
  icons: {
    icon: "/ells2.png",
  },
  openGraph: {
    title: "EllCrochet | Handcrafted Crochet Pieces",
    description:
      "Cozy, handmade crochet pieces designed to feel personal and timeless.",
    images: ["/crotchet.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
