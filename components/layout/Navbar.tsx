// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-matteBlack' : 'text-white'}`}>
          AURA.
        </Link>
        <div className={`hidden md:flex gap-8 text-sm uppercase tracking-widest ${isScrolled ? 'text-matteBlack' : 'text-white'}`}>
          <Link href="/" className="hover:text-softGold transition-colors">Home</Link>
          <Link href="/about" className="hover:text-softGold transition-colors">About</Link>
          <Link href="/services" className="hover:text-softGold transition-colors">Services</Link>
          <Link href="/projects" className="hover:text-softGold transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-softGold transition-colors">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}