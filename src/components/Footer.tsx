import React from 'react';
import { Sparkles, Phone, MessageCircle, Instagram, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (page: 'home' | 'products', category?: string, scrollToId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerWhatsAppLink = buildWhatsAppLink(
    'Hello Govindam Light House, I would like to enquire about your lighting showroom.'
  );

  return (
    <footer className="bg-[#111111] text-zinc-300 border-t border-[#D4AF37]/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#1a1a1a]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                GOVINDAM <span className="text-[#D4AF37] font-light">LIGHT HOUSE</span>
              </span>
            </div>
            <p className="text-[#D4AF37] italic text-sm font-serif">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Jaipur's premier lighting destination for luxury crystal chandeliers, architectural LED luminaires, designer hanging lamps, and exterior gate fixtures.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Instagram @govindamlighthouse"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={footerWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="WhatsApp Govindam Light House"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Call Govindam Light House"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-base tracking-wide border-b border-[#D4AF37]/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Our Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', undefined, 'about-section')}
                  className="text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', undefined, 'contact-section')}
                  className="text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-[#D4AF37] transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-base tracking-wide border-b border-[#D4AF37]/30 pb-2 inline-block">
              Our Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Chandeliers', label: 'Chandeliers' },
                { name: 'Ceiling Lights', label: 'Ceiling Lights' },
                { name: 'Hanging Lamps', label: 'Hanging Lights' },
                { name: 'Outdoor Gate Lights', label: 'Outdoor Lights' },
                { name: 'Decorative Lights', label: 'Decorative Lights' },
              ].map((cat) => (
                <li key={cat.name}>
                  <button
                    onClick={() => onNavigate('products', cat.name)}
                    className="text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Showroom Details */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-base tracking-wide border-b border-[#D4AF37]/30 pb-2 inline-block">
              Showroom Details
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-zinc-400">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-zinc-300 hover:text-[#D4AF37] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={footerWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#D4AF37] transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-zinc-400">Opening Hours: Every Day, 9 AM – 8 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline"
                >
                  {BUSINESS_INFO.instagramUsername}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Govindam Light House. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Jaipur, Rajasthan, India</span>
            <span className="text-zinc-700">•</span>
            <span className="text-[#D4AF37]">Rating: 5.0 / 5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
