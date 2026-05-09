// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/animations/variants";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center mb-24">
          <motion.p variants={fadeUp} className="text-[#D4AF37] uppercase tracking-[0.2em] mb-4 text-sm font-medium">Our Story</motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-8">Crafting Timeless Elegance</motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Founded in 2010, Aura Interiors was born from a desire to bridge the gap between architectural precision and intimate, livable warmth. We design spaces that reflect the soul of their inhabitants.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div variants={fadeUp} className="relative h-[500px]">
            <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop" alt="Studio" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <div>
            <motion.h3 variants={fadeUp} className="font-serif text-3xl text-[#1A1A1A] mb-6">Our Design Philosophy</motion.h3>
            <motion.p variants={fadeUp} className="text-gray-500 mb-6 leading-relaxed">
              We believe less is elegantly more. By focusing on spatial flow, natural light, and premium materials, we eliminate the unnecessary to elevate the essential.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-200 pt-8">
              <div>
                <h4 className="font-serif text-4xl text-[#D4AF37] mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-4xl text-[#D4AF37] mb-2">200+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Projects Delivered</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#1A1A1A] mb-12">The Aura Process</h2>
          <div className="grid md:grid-cols-4 text-gray-400 gap-8">
            {['Consultation', 'Concept & 3D', 'Execution', 'Handover'].map((step, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 border border-gray-100 hover:shadow-2xl transition-shadow bg-beige/10">
                <span className="text-[#D4AF37] font-serif text-3xl mb-4 block">0{idx + 1}</span>
                <h4 className="font-medium uppercase tracking-wider text-sm mb-2">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}