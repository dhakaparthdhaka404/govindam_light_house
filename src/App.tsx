import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeHero } from './components/HomeHero';
import { HomeAbout } from './components/HomeAbout';
import { HomeCategories } from './components/HomeCategories';
import { HomeFeaturedProducts } from './components/HomeFeaturedProducts';
import { HomeWhyChooseUs } from './components/HomeWhyChooseUs';
import { HomeInstagramGallery } from './components/HomeInstagramGallery';
import { HomeCustomerTrust } from './components/HomeCustomerTrust';
import { HomeContactBanner } from './components/HomeContactBanner';
import { ProductsPage } from './components/ProductsPage';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { ProductItem } from './data/business';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [homeQuickViewProduct, setHomeQuickViewProduct] = useState<ProductItem | null>(null);

  // Scroll to top on page switch or target element if specified
  const handleNavigate = (
    page: 'home' | 'products',
    category?: string,
    scrollToId?: string
  ) => {
    if (category) {
      setSelectedCategory(category);
    }

    setCurrentPage(page);

    // If a scrollToId is specified
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Direct category navigation from Home categories section
  const handleSelectCategoryFromHome = (catalogCategory: string) => {
    setSelectedCategory(catalogCategory);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check URL query parameters (e.g. ?page=products or ?category=Chandeliers)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    const catParam = params.get('category');

    if (pageParam === 'products') {
      setCurrentPage('products');
    }
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#222222] font-sans selection:bg-[#D4AF37]/30 selection:text-[#111111]">
      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: PAGE 1 (Home) or PAGE 2 (Products & Contact) */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <div>
            {/* Section A: Hero */}
            <HomeHero onExploreCollection={() => handleNavigate('products')} />

            {/* Section B: About Govindam Light House */}
            <HomeAbout />

            {/* Section C: Our Lighting Categories (8 Cards) */}
            <HomeCategories onSelectCategory={handleSelectCategoryFromHome} />

            {/* Section D: Featured Popular Collections */}
            <HomeFeaturedProducts
              onQuickView={(product) => setHomeQuickViewProduct(product)}
              onViewAll={() => handleNavigate('products')}
            />

            {/* Section E: Why Choose Govindam Light House (6 Features) */}
            <HomeWhyChooseUs />

            {/* Section G: Customer Trust (5.0 / 5 Rating) */}
            <HomeCustomerTrust />

            {/* Section F: Instagram Gallery (6 Photos, @govindamlighthouse, Follow Button) */}
            <HomeInstagramGallery />

            {/* Section H: Home Contact Banner */}
            <HomeContactBanner />

            {/* Quick View Modal for Home Page Featured Products */}
            <ProductQuickViewModal
              product={homeQuickViewProduct}
              onClose={() => setHomeQuickViewProduct(null)}
            />
          </div>
        ) : (
          <div>
            {/* PAGE 2: Products & Contact */}
            <ProductsPage
              initialCategory={selectedCategory}
            />
          </div>
        )}
      </main>

      {/* Persistent Floating WhatsApp Icon */}
      <FloatingWhatsApp />

      {/* Premium Black & Gold Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
