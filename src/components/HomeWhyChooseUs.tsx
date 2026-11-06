import React from 'react';
import { Sparkles, Palette, Home, BadgeCheck, HeartHandshake, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/business';

export const HomeWhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#D4AF37]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#D4AF37]" />;
      case 'BadgeCheck':
        return <BadgeCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            <span className="w-4 h-[1px] bg-[#D4AF37]"></span>
            <span>The Govindam Difference</span>
            <span className="w-4 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why Choose Govindam Light House?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We combine high-grade materials, trendsetting fixture designs, and dedicated in-person guidance to make lighting your home seamless.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors">
                {getIcon(item.iconName)}
              </div>
              <div className="text-xs text-[#D4AF37]/80 font-mono mb-2">
                0{index + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
