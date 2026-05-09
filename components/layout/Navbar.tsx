// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu state

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Array to map through links easily
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 text-black backdrop-blur-md py-4 shadow-sm" 
            : "bg-gradient-to-b from-black/70 via-black/20 to-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className={`font-serif text-2xl font-bold tracking-wider transition-all duration-300 ${
              isScrolled ? "text-[#1A1A1A]" : "text-white drop-shadow-md"
            }`}
          >
            AURA.
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div 
            className={`hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
              isScrolled ? "text-[#1A1A1A]" : "text-white drop-shadow-md"
            }`}
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-[#D4AF37] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button (Hidden on Desktop) */}
          <button 
            className={`md:hidden p-2 transition-all duration-300 ${
              isScrolled ? "text-[#1A1A1A]" : "text-white drop-shadow-md"
            }`}
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { delay: 0.2, duration: 0.5 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-4 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }} // Staggered fade in
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsOpen(false)} // Close menu when clicked
                    className="font-serif text-4xl text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Minimal Mobile Footer inside Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 text-xs text-gray-400 uppercase tracking-widest"
            >
              Aura Premium Studio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}