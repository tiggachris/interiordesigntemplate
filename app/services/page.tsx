// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { services } from "@/constants/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-matteBlack text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-20">
          <motion.p variants={fadeUp} className="text-[#D4AF37] uppercase tracking-[0.2em] mb-4 text-sm font-medium">Expertise</motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl mb-8">Bespoke Design Services</motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl leading-relaxed">
            From single-room transformations to complete architectural remodeling, we offer comprehensive services tailored to the highest standards of luxury.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => (
            <motion.div 
              key={srv.id} 
              variants={fadeUp} 
              className="group p-8 border border-white/10 hover:border-softGold hover:bg-white/5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-[#D4AF37] transition-colors">{srv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                Learn More <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}