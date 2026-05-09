// components/layout/Footer.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-matteBlack text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold tracking-wider mb-6 block">AURA.</Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Designing spaces that inspire. Elevating modern living through thoughtful architecture and luxury interior design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/20 hover:border-softGold hover:text-[#D4AF37] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="p-2 border border-white/20 hover:border-softGold hover:text-[#D4AF37] transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="p-2 border border-white/20 hover:border-softGold hover:text-[#D4AF37] transition-colors"><FaXTwitter size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm tracking-widest uppercase">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37]">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive design insights and studio updates.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input type="email" placeholder="Your Email Address" className="bg-transparent border-none outline-none w-full text-sm placeholder-gray-600" />
              <button className="text-[#D4AF37] hover:text-white transition-colors"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest pt-8 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Aura Interiors. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}