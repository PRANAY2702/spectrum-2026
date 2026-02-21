"use client"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/40 backdrop-blur-xl border border-white/50 
        rounded-[3rem] p-10 md:p-14 w-full max-w-2xl shadow-2xl shadow-purple-500/20"
      >
        <h2 className="text-5xl font-black mb-8 text-center text-gray-900">Get in Touch</h2>

        <div className="space-y-6">
          <input
            placeholder="Your Name"
            className="w-full p-4 bg-white/60 border border-white/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-900 placeholder-gray-500 font-medium transition-all"
          />
          <input
            placeholder="Your Email"
            className="w-full p-4 bg-white/60 border border-white/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-900 placeholder-gray-500 font-medium transition-all"
          />
          <textarea
            placeholder="Tell us your vision..."
            className="w-full p-4 bg-white/60 border border-white/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-900 placeholder-gray-500 font-medium transition-all h-40 resize-none"
          />
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-2xl font-black text-xl hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/30 transition-all">
            SEND MESSAGE ✨
          </button>
        </div>
      </motion.div>
    </section>
  )
}