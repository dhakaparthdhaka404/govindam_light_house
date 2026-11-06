import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  currentPage: 'home' | 'products';
  onNavigate: (page: 'home' | 'products', category?: string, scrollToId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'products', scrollToId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, undefined, scrollToId);
  };

  const navWhatsAppLink = buildWhatsAppLink(
    'Hello Govindam Light House, I would like to enquire about your luxury lighting collections.'
  );

  return (
    <header className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#D4AF37]/25 text-[#FAF9F6] transition-all duration-300">
      {/* Top micro bar for showroom status & contact */}
      <div className="hidden sm:block border-b border-white/5 bg-[#0a0a0a] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[#D4AF37]">
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Kalwar Road, Hathoj, Jaipur</span>
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-400">Open Daily: 9:00 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors"
              title="Call Govindam Light House"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-zinc-500">|</span>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-[#D4AF37] transition-colors"
            >
              <Instagram className="w-3 h-3 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.instagramUsername}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="Govindam Light House Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] shadow-inner group-hover:border-[#E5C358] transition-colors shrink-0">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="font-serif text-sm sm:text-lg md:text-xl font-bold tracking-wider text-white flex items-center gap-1.5 whitespace-nowrap">
              <span>GOVINDAM</span>
              <span className="text-[#D4AF37] font-light">LIGHT HOUSE</span>
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37]/90 uppercase font-sans whitespace-nowrap">
              Jaipur · Luxury Lighting Showroom
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors cursor-pointer py-1 relative ${
              currentPage === 'home'
                ? 'text-[#D4AF37] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37]'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('products')}
            className={`transition-colors cursor-pointer py-1 relative ${
              currentPage === 'products'
                ? 'text-[#D4AF37] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37]'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            Our Collection
          </button>

          <button
            onClick={() => handleNavClick('home', 'about-section')}
            className="text-zinc-300 hover:text-white transition-colors cursor-pointer py-1"
          >
            About Us
          </button>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors py-1"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37]" />
            <span>Instagram</span>
          </a>

          <button
            onClick={() => {
              if (currentPage === 'products') {
                const el = document.getElementById('contact-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleNavClick('products', 'contact-section');
              }
            }}
            className="text-zinc-300 hover:text-white transition-colors cursor-pointer py-1"
          >
            Contact Us
          </button>
        </nav>

        {/* Right WhatsApp Enquiry Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={navWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#D4AF37] text-[#111111] hover:bg-[#E5C358] transition-all shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={navWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire on WhatsApp"
            className="p-2 rounded-full bg-[#D4AF37] text-[#111111] hover:bg-[#E5C358]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-md transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                  : 'text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`text-left py-2 px-3 rounded-md transition-colors ${
                currentPage === 'products'
                  ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                  : 'text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              Our Collection
            </button>

            <button
              onClick={() => handleNavClick('home', 'about-section')}
              className="text-left py-2 px-3 rounded-md text-zinc-200 hover:bg-zinc-800 transition-colors"
            >
              About Us
            </button>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-3 rounded-md text-zinc-200 hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>Instagram (@govindamlighthouse)</span>
            </a>

            <button
              onClick={() => {
                if (currentPage === 'products') {
                  const el = document.getElementById('contact-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                } else {
                  handleNavClick('products', 'contact-section');
                }
              }}
              className="text-left py-2 px-3 rounded-md text-zinc-200 hover:bg-zinc-800 transition-colors"
            >
              Contact Us & Showroom Location
            </button>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={navWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-[#D4AF37] text-[#111111] hover:bg-[#E5C358]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium border border-zinc-700 text-zinc-300 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
