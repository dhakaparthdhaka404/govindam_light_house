import React from 'react';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { ProductItem } from '../data/business';
import { buildProductEnquiryMessage, buildWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const whatsappMessage = buildProductEnquiryMessage(product.name);
  const whatsappUrl = buildWhatsAppLink(whatsappMessage);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity"></div>

        {/* Category tag */}
        <span className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md">
          {product.category}
        </span>

        {/* Quick View Floating Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          aria-label={`Quick view ${product.name}`}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-zinc-900 hover:bg-[#D4AF37] hover:text-[#111111] shadow-md transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium tracking-wider uppercase">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Govindam Signature</span>
          </div>
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-lg font-bold text-[#111111] hover:text-[#D4AF37] transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>
          <p className="text-zinc-600 text-xs line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Button: Enquire on WhatsApp */}
        <div className="pt-3 border-t border-zinc-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide bg-[#111111] text-[#FAF9F6] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#111111] hover:border-[#D4AF37] transition-all duration-200 active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500 stroke-none group-hover:fill-current" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
