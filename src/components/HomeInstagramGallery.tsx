import React from 'react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_GALLERY } from '../data/business';

export const HomeInstagramGallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF9F6] text-[#222222] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            <Instagram className="w-4 h-4 text-[#D4AF37]" />
            <span>Official Instagram {BUSINESS_INFO.instagramUsername}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Get Inspired. Follow Our Journey.
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Explore our latest lighting collections, beautiful chandeliers, modern decorative lights, and stunning lighting ideas.
          </p>

          {/* Gold Follow Button */}
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#D4AF37] text-[#111111] hover:bg-[#E5C358] transition-all shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/20 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Image Cards Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_GALLERY.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Instagram post: ${post.caption}`}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-black/5 hover:border-[#D4AF37] transition-all shadow-sm hover:shadow-lg block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <p className="text-[11px] line-clamp-3 text-zinc-200 leading-snug">
                  {post.caption}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-[#D4AF37]">
                  <Sparkles className="w-3 h-3" />
                  <span>@govindamlighthouse</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram handle confirmation notice */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          <span>Showroom updates, new arrivals, and customer project tours at </span>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#111111] hover:text-[#D4AF37] underline decoration-[#D4AF37]"
          >
            {BUSINESS_INFO.instagramUsername}
          </a>
        </div>
      </div>
    </section>
  );
};
