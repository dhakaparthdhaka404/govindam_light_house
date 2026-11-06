import React from 'react';
import { Phone, MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const HomeContactBanner: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink(
    'Hello Govindam Light House, I would like to visit your showroom / enquire about lighting.'
  );

  return (
    <section className="py-20 bg-[#111111] text-white relative overflow-hidden border-t border-[#D4AF37]/30">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connect With Our Showroom</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Let's Make Your Space Shine!
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Looking for the perfect lighting for your home or business? Connect with Govindam Light House today.
        </p>

        {/* 3 Buttons: Call Now, WhatsApp Us, Get Directions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#111111] hover:bg-zinc-200 transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all shadow-md active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
