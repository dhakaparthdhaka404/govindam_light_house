import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const whatsappUrl = buildWhatsAppLink(
    'Hello Govindam Light House, I am visiting your website and have an enquiry regarding lighting.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip prompt bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#111111] text-white border border-[#D4AF37]/50 py-2 px-3.5 rounded-full shadow-2xl text-xs font-medium animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Need help? Chat with us on WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-zinc-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Govindam Light House"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle gold glow pulse ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#D4AF37] opacity-60 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
