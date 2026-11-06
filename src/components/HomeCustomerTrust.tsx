import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const HomeCustomerTrust: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F1EA] text-[#222222] border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span>Customer Trust &amp; Excellence</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mb-6">
          Lighting That Makes Every Space Special
        </h2>

        {/* Real Customer Rating Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-[#D4AF37]/30 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 mb-3 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#D4AF37]" />
            ))}
          </div>

          <div className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] mb-2">
            {BUSINESS_INFO.rating}
          </div>

          <div className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] mb-4">
            Customer Satisfaction Rating
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed">
            Rated 5.0 out of 5 for showroom design variety, product longevity, and dedicated lighting assistance in Hathoj, Jaipur.
          </p>

          <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Showroom Quality Guarantee &amp; Electrical Inspection</span>
          </div>
        </div>
      </div>
    </section>
  );
};
