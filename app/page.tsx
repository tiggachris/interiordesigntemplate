// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-matteBlack/40 z-10" /> {/* Dark overlay */}
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2560&auto=format&fit=crop"
            alt="Luxury Interior"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div 
          className="relative z-20 text-center px-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="text-[#D4AF37] uppercase tracking-[0.3em] mb-4 text-sm font-medium">
            Premium Interior Design Studio
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 max-w-5xl mx-auto leading-tight">
            Designing Spaces <br /> That Inspire
          </motion.h1>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-softGold text-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </button>
            <button className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors">
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                Redefining Modern <br /> Luxury Living.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
                We believe that interior design is more than just aesthetics; it's about creating an environment that elevates your daily life. Our approach blends minimalist architecture with warm, inviting textures to craft spaces that feel both expansive and deeply personal.
              </motion.p>
              <motion.button variants={fadeUp} className="text-[#1A1A1A] border-b border-matteBlack pb-1 uppercase tracking-widest text-sm hover:text-[#D4AF37] hover:border-softGold transition-colors">
                Read Our Story
              </motion.button>
            </div>
            <motion.div variants={fadeUp} className="relative h-[600px] w-full">
               <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Living Room"
                  fill
                  className="object-cover"
               />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}