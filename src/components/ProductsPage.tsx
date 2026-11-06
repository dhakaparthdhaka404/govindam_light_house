import React, { useState, useId } from 'react';
import {
  Search,
  Filter,
  Phone,
  MessageCircle,
  Navigation,
  MapPin,
  Clock,
  Instagram,
  CheckCircle2,
  Sparkles,
  Send,
  X,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  PRODUCTS,
  CATALOG_CATEGORIES,
  CatalogCategoryType,
  ProductItem,
} from '../data/business';
import { filterProducts } from '../utils/productFilter';
import { ProductCard } from './ProductCard';
import { ProductQuickViewModal } from './ProductQuickViewModal';
import { buildWhatsAppLink, buildCustomEnquiryMessage } from '../utils/whatsapp';

interface ProductsPageProps {
  initialCategory?: string;
  onClearInitialCategory?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'All Products',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'All Products'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  // Contact form state
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [productInterestedIn, setProductInterestedIn] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Form field IDs for accessibility
  const nameId = useId();
  const phoneId = useId();
  const productId = useId();
  const messageId = useId();
  const searchId = useId();

  // If initialCategory changes from parent navigation
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filtered = filterProducts(PRODUCTS, selectedCategory, searchQuery);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Process submission
    setFormSubmitted(true);
  };

  const formattedWhatsAppEnquiryUrl = buildWhatsAppLink(
    buildCustomEnquiryMessage({
      name: customerName,
      phone: mobileNumber,
      product: productInterestedIn,
      message: message,
    })
  );

  const resetForm = () => {
    setCustomerName('');
    setMobileNumber('');
    setProductInterestedIn('');
    setMessage('');
    setFormSubmitted(false);
    setFormError('');
  };

  return (
    <div className="bg-[#FAF9F6] text-[#222222] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Govindam Light House Catalogue</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Complete Lighting Collection
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore stylish, modern, and decorative lighting solutions for every corner of your space.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar Section */}
      <section className="bg-[#FAF9F6] border-b border-zinc-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <label htmlFor={searchId} className="sr-only">
                Search lighting products
              </label>
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                id={searchId}
                type="text"
                placeholder="Search products, chandeliers, finish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-300 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count & Current Filter Label */}
            <div className="w-full md:w-auto flex items-center justify-between gap-3 text-xs text-zinc-600">
              <span className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Showing <strong>{filtered.length}</strong> fixture{filtered.length === 1 ? '' : 's'}</span>
              </span>
              {selectedCategory !== 'All Products' && (
                <button
                  onClick={() => setSelectedCategory('All Products')}
                  className="text-[#D4AF37] hover:underline font-medium cursor-pointer"
                >
                  Reset to All
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            {CATALOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-[#D4AF37] shadow-sm border border-[#D4AF37]'
                      : 'bg-white text-zinc-700 border border-zinc-200 hover:border-[#D4AF37] hover:text-[#111111]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid Area */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200 p-8 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-zinc-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-zinc-800 mb-2">
              No matching products found
            </h3>
            <p className="text-zinc-500 text-xs mb-6">
              We couldn't find any fixtures matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Products');
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#111111] text-[#D4AF37] hover:bg-zinc-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* SECTION B: Contact Information & Showroom Details */}
      <section id="contact-section" className="py-20 bg-[#F4F1EA] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jaipur Showroom</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Visit Our Lighting Showroom
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Experience the true luminescence, scale, and craftsmanship of our chandeliers and lighting collections in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Showroom Contact Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-[#D4AF37]/30 space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                  {BUSINESS_INFO.category}
                </p>
              </div>

              <div className="space-y-4 text-sm text-zinc-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                      Showroom Address
                    </div>
                    <div className="text-zinc-600 mt-0.5 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                      Phone &amp; Orders
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-zinc-900 font-semibold hover:text-[#D4AF37] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                      Opening Hours
                    </div>
                    <div className="text-zinc-600 mt-0.5 font-medium">
                      {BUSINESS_INFO.hours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-[#D4AF37] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                      Instagram Showcase
                    </div>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:underline font-medium mt-0.5 block"
                    >
                      {BUSINESS_INFO.instagramUsername}
                    </a>
                  </div>
                </div>
              </div>

              {/* 3 Action Buttons */}
              <div className="pt-4 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#111111] text-white hover:bg-zinc-800 transition-all text-center shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={buildWhatsAppLink('Hello Govindam Light House, I would like to enquire about visiting your showroom.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all text-center shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#D4AF37] text-[#111111] hover:bg-[#D4AF37] transition-all text-center shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps View */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                <div className="p-4 bg-zinc-900 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-medium">Showroom Location: Datel Tower, Kalwar Road</span>
                  </div>
                  <a
                    href={BUSINESS_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                  </a>
                </div>
                <div className="relative w-full aspect-[4/3] bg-zinc-100">
                  <iframe
                    title="Govindam Light House Showroom Location on Google Maps"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      BUSINESS_INFO.mapsEmbedQuery
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed text-center sm:text-left">
                Located conveniently at Datel Tower, Hathoj on Kalwar - Jaipur Road. Free customer parking available in front of the showroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Contact Enquiry Form */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Showroom Enquiry</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Send Us an Enquiry
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Have specific room dimensions, looking for price catalogs, or need custom chandelier specifications? Send us a quick note.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#FAF9F6] border border-[#D4AF37]/50 rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#111111]">
                  Enquiry Successfully Sent!
                </h3>
                <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{customerName}</strong>. Our lighting consultants at Govindam Light House have received your details and will get in touch shortly on <strong>{mobileNumber}</strong>.
                </p>
              </div>

              {/* Direct WhatsApp Instant Dispatch Option */}
              <div className="pt-4 border-t border-zinc-200 max-w-md mx-auto space-y-3">
                <p className="text-xs text-zinc-500">
                  Prefer instant response? Forward this exact inquiry straight to our WhatsApp desk:
                </p>
                <a
                  href={formattedWhatsAppEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open Inquiry in WhatsApp</span>
                </a>
              </div>

              <div>
                <button
                  onClick={resetForm}
                  className="text-xs text-zinc-500 hover:text-zinc-800 underline cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-10 border border-zinc-200 shadow-sm space-y-6"
            >
              {formError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Customer Name */}
                <div className="space-y-2">
                  <label htmlFor={nameId} className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label htmlFor={phoneId} className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    placeholder="e.g. +91 98290 12345"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Product Interested In */}
              <div className="space-y-2">
                <label htmlFor={productId} className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Product Interested In
                </label>
                <select
                  id={productId}
                  value={productInterestedIn}
                  onChange={(e) => setProductInterestedIn(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                >
                  <option value="">Select a product category or fixture type...</option>
                  <option value="Luxury Chandeliers">Luxury Chandeliers</option>
                  <option value="Modern Ceiling Lights">Modern Ceiling Lights</option>
                  <option value="LED Downlights & Panels">LED Downlights &amp; Panels</option>
                  <option value="Decorative Hanging Lamps">Decorative Hanging Lamps</option>
                  <option value="Outdoor Gate & Pillar Lights">Outdoor Gate &amp; Pillar Lights</option>
                  <option value="Designer Wall Lights & Sconces">Designer Wall Lights &amp; Sconces</option>
                  <option value="Mirror & Vanity Lights">Mirror &amp; Vanity Lights</option>
                  <option value="Full Villa Lighting Package">Full Villa Lighting Package</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor={messageId} className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Message
                </label>
                <textarea
                  id={messageId}
                  rows={4}
                  placeholder="Share details such as room dimensions, preferred ceiling height, or request a showroom appointment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-widest bg-[#111111] text-[#FAF9F6] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#111111] transition-all shadow-md cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry</span>
              </button>

              <div className="text-center text-[11px] text-zinc-500">
                You can also call us directly at <strong>{BUSINESS_INFO.phone}</strong> (9 AM – 8 PM).
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
