"use client"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40
      const y = (window.innerHeight / 2 - e.clientY) / 40
      if (bgRef.current) {
        bgRef.current.style.transform =
          `scale(1.2) rotate(-3deg) translate(${x}px, ${y}px)`
      }
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Aesthetic Photography Placeholders */}
      <div
        ref={bgRef}
        className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-6 p-10 
        scale-125 rotate-[-3deg] transition-transform duration-200 opacity-80"
      >
        <img src="https://images.unsplash.com/photo-1554050857-c84a8abdb5e5?q=80&w=2000&auto=format&fit=crop" className="object-cover w-full h-full rounded-3xl shadow-2xl" alt="Art 1" />
        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop" className="object-cover w-full h-full rounded-3xl shadow-2xl" alt="Art 2" />
        <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2000&auto=format&fit=crop" className="object-cover w-full h-full rounded-3xl shadow-2xl" alt="Art 3" />
        <img src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2000&auto=format&fit=crop" className="object-cover w-full h-full rounded-3xl shadow-2xl" alt="Art 4" />
      </div>

      {/* Soft Light Overlay instead of Dark */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 drop-shadow-xl">
          SPECTRUM '26
        </h1>
        <p className="mt-6 text-xl font-bold text-gray-800 bg-white/50 backdrop-blur-md inline-block px-6 py-2 rounded-full shadow-lg">
          The Canvas of Tomorrow
        </p>
      </motion.div>
    </section>
  )
}