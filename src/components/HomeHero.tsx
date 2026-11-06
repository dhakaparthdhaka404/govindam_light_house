import React from 'react';
import { MessageCircle, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface HomeHeroProps {
  onExploreCollection: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onExploreCollection }) => {
  const heroWhatsAppUrl = buildWhatsAppLink(
    'Hello Govindam Light House, I would like to explore your luxury lighting options for my home.'
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#111111] text-white overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Luxurious modern living room interior with chandeliers and architectural lighting"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multi-layered dark luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90"></div>
        {/* Subtle gold decorative grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center">
        {/* Editorial Pill-free Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] uppercase font-medium mb-6">
          <span>Govindam Light House</span>
          <span className="text-zinc-500">·</span>
          <span>Jaipur Showroom</span>
          <span className="text-zinc-500">·</span>
          <span>Luxury Fixtures</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Light Up Your World With{' '}
          <span className="gold-gradient-text italic font-normal">Elegance</span>
        </h1>

        {/* Subheading */}
        <p className="text-zinc-300 text-base sm:text-xl max-w-2xl font-light leading-relaxed mb-10">
          Discover Beautiful Lighting Solutions That Transform Every Space Into Something Extraordinary.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#D4AF37] text-[#111111] hover:bg-[#E5C358] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/25 cursor-pointer active:scale-95"
          >
            <span>Explore Our Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={heroWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-black/60 backdrop-blur-md border border-[#D4AF37]/50 text-white hover:bg-black/80 hover:border-[#D4AF37] transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-300">
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 / 5 Rating</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Complete Showroom Experience</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Kalwar Road, Hathoj, Jaipur</span>
          </div>
        </div>
      </div>
    </section>
  );
};
