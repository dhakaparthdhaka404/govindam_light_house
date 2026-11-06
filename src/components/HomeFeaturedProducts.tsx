import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/business';
import { ProductCard } from './ProductCard';

interface HomeFeaturedProductsProps {
  onQuickView: (product: ProductItem) => void;
  onViewAll: () => void;
}

export const HomeFeaturedProducts: React.FC<HomeFeaturedProductsProps> = ({
  onQuickView,
  onViewAll,
}) => {
  // Filter the prominent featured products matching user prompt
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Showroom Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              Discover Our Popular Collections
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Explore our most requested chandeliers, hanging pendants, and architectural fixtures loved by homeowners and architects across Jaipur.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-zinc-300 hover:border-[#D4AF37] bg-white text-[#111111] hover:bg-[#111111] hover:text-[#D4AF37] transition-all cursor-pointer shadow-sm shrink-0"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
