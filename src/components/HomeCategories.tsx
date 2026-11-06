import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HOME_CATEGORIES, LightingCategory } from '../data/business';

interface HomeCategoriesProps {
  onSelectCategory: (catalogCategory: string) => void;
}

export const HomeCategories: React.FC<HomeCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-24 bg-[#F4F1EA] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Showroom Departments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Explore Our Lighting Collection
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Discover bespoke lighting fixtures designed to bring character, warmth, and brilliance to every corner of your property.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_CATEGORIES.map((cat: LightingCategory) => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/3] bg-zinc-900 overflow-hidden cursor-pointer"
                onClick={() => onSelectCategory(cat.catalogCategory)}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Description & Explore Button */}
              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <p className="text-zinc-600 text-xs leading-relaxed line-clamp-3">
                  {cat.description}
                </p>

                <div className="pt-2 border-t border-zinc-100">
                  <button
                    onClick={() => onSelectCategory(cat.catalogCategory)}
                    className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold text-[#111111] bg-zinc-50 hover:bg-[#D4AF37] hover:text-[#111111] transition-all cursor-pointer group/btn"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
