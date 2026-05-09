// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { faqs } from "@/constants/data";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 bg-beige/20 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Form & Info */}
          <motion.div variants={fadeUp}>
            <h1 className="font-serif text-5xl text-matteBlack mb-6">Let's Talk.</h1>
            <p className="text-gray-500 mb-12">Ready to transform your space? Schedule a consultation with our lead designers.</p>
            
            <form className="space-y-6 mb-16">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-matteBlack transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-matteBlack transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-matteBlack transition-colors" />
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-matteBlack transition-colors resize-none"></textarea>
              <button className="bg-matteBlack text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-softGold transition-colors w-full">
                Submit Inquiry
              </button>
            </form>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-2 text-softGold"><MapPin size={20} /><h4 className="font-bold text-matteBlack">Studio</h4></div>
                <p className="text-sm text-gray-500 ml-8">124 Luxury Ave, Design District, NY 10001</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 text-softGold"><Phone size={20} /><h4 className="font-bold text-matteBlack">Contact</h4></div>
                <p className="text-sm text-gray-500 ml-8">+1 (555) 123-4567<br/>hello@aurainteriors.com</p>
              </div>
            </div>
            
            <button className="mt-8 flex items-center gap-2 text-green-600 border border-green-600 px-6 py-3 hover:bg-green-600 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold rounded-full">
              <MessageCircle size={16} /> Chat on WhatsApp
            </button>
          </motion.div>

          {/* Right Column: FAQ & Map Placeholder */}
          <motion.div variants={fadeUp} className="flex flex-col gap-12">
            <div className="h-[400px] w-full bg-gray-200 relative overflow-hidden group">
              {/* Google Maps Placeholder - Replace iframe src with your actual maps embed link */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448787425354!3d40.69763123339178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:filter-none transition-all duration-700"
              ></iframe>
            </div>

            <div>
              <h3 className="font-serif text-3xl mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-4">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left flex justify-between items-center font-bold text-matteBlack"
                    >
                      {faq.q}
                      <span className="text-softGold text-xl">{activeFaq === idx ? "−" : "+"}</span>
                    </button>
                    {activeFaq === idx && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-gray-500 text-sm mt-4 leading-relaxed">
                        {faq.a}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}