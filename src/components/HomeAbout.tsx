import React from 'react';
import { Sparkles, MapPin, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const HomeAbout: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#FAF9F6] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Showroom Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-900 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                  alt="Govindam Light House luxury lighting showroom interior in Jaipur"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-lg font-bold">Jaipur's Dedicated Lighting Gallery</p>
                  <p className="text-xs text-zinc-300">Live display models across all architectural categories</p>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#111111] text-white p-5 rounded-2xl shadow-2xl border border-[#D4AF37]/50 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-[#D4AF37]">5.0 / 5.0</div>
                    <div className="text-[11px] text-zinc-300">Customer Satisfaction Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Narrative */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
              <span>About Govindam Light House</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              Bringing Light, Style &amp; Elegance to Your Home
            </h2>

            <div className="space-y-4 text-zinc-600 leading-relaxed text-base">
              <p>
                Welcome to <strong className="text-zinc-900 font-semibold">Govindam Light House</strong>, your destination for stylish and modern lighting solutions in Jaipur. We offer a wide variety of indoor and outdoor lighting products designed to enhance the beauty of your home, office, and commercial spaces.
              </p>
              <p>
                From luxurious chandeliers and modern hanging lights to LED ceiling lights and outdoor gate lights, discover lighting solutions that perfectly match your style and space.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-zinc-200">
              <div className="flex items-center gap-2.5 text-xs text-zinc-800">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Hand-inspected crystal &amp; brassware</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-800">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Indoor &amp; outdoor architectural lighting</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-800">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Kalwar Road, Hathoj, Jaipur</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-800">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Open 7 days a week: 9 AM – 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
