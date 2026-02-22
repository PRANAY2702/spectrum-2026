import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair',
  weight: ['400', '700', '900'] 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  weight: ['400', '500', '700', '800']
});

export const metadata: Metadata = {
  title: "Spectrum 2026",
  description: "The flagship annual festival of the Art & Photography Club at PEC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children} 
        <Footer />
      </body>
    </html>
  );
}