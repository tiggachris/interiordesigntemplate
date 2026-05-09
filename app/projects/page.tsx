// app/projects/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/constants/data";

const categories = ["All", "Residential", "Commercial", "Luxury", "Office"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-matteBlack mb-8">Selected Works</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 text-sm uppercase tracking-widest border transition-all ${
                  activeFilter === cat 
                    ? "bg-matteBlack text-white border-matteBlack" 
                    : "border-gray-200 text-gray-500 hover:border-matteBlack hover:text-matteBlack"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer relative overflow-hidden"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-matteBlack/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-softGold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="font-serif text-2xl text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}