"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Massive Typography Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h2 className="text-7xl md:text-8xl font-black mb-6 text-gray-900 leading-[0.9] tracking-tighter">
            WE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 drop-shadow-sm">
              CAPTURE
            </span><br/>
            LIFE.
          </h2>
          <p className="text-xl text-gray-800 font-medium leading-relaxed max-w-lg bg-white/40 p-6 rounded-2xl backdrop-blur-md border border-white/50 shadow-xl">
            Spectrum '26 is a vibrant celebration of perspective, light, and motion. 
            Step into a world where photography, digital art, and raw creative expression collide on a massive canvas.
          </p>
        </motion.div>

        {/* Floating Photo Collage Side */}
        <div className="relative h-[500px] w-full hidden md:block">
          <motion.img 
            initial={{ opacity: 0, y: 50, rotate: -15 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop" 
            className="absolute top-0 right-10 w-64 h-80 object-cover rounded-xl shadow-2xl border-[10px] border-white"
            alt="Art"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="https://images.unsplash.com/photo-1554050857-c84a8abdb5e5?q=80&w=800&auto=format&fit=crop" 
            className="absolute bottom-10 left-10 w-72 h-64 object-cover rounded-xl shadow-2xl border-[10px] border-white z-10"
            alt="Photography"
          />
        </div>

      </div>
    </section>
  )
}