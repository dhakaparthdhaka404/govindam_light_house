import React from 'react';
import { X, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProductItem, BUSINESS_INFO } from '../data/business';
import { buildProductEnquiryMessage, buildWhatsAppLink } from '../utils/whatsapp';

interface ProductQuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const whatsappMessage = buildProductEnquiryMessage(product.name);
  const whatsappUrl = buildWhatsAppLink(whatsappMessage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF9F6] text-[#222222] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D4AF37]/30 flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product preview"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 relative bg-[#111111] min-h-[280px] md:min-h-[420px] overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-3 bg-[#111111]/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-medium text-[#D4AF37] border border-[#D4AF37]/30">
            {product.category}
          </div>
        </div>

        {/* Product Details & Enquiry Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Govindam Luxury Selection</span>
            </div>

            <h2 id="modal-product-title" className="font-serif text-2xl font-bold text-[#111111]">
              {product.name}
            </h2>

            <p className="text-zinc-600 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Specifications list */}
            <div className="pt-2 border-t border-zinc-200 space-y-2 text-xs">
              <h3 className="font-semibold text-zinc-900 uppercase tracking-wide">
                Product Details
              </h3>
              <div className="grid grid-cols-1 gap-2 text-zinc-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900">Finish:</strong> {product.specifications.finish}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900">Light Type:</strong> {product.specifications.lightType}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900">Recommended Area:</strong> {product.specifications.application}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900">Showroom Customization:</strong> {product.specifications.customization}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-zinc-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-semibold text-sm bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-zinc-300 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Showroom</span>
              </a>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl border border-zinc-300 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
