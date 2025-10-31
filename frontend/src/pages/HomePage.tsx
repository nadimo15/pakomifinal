
import React, { useState, useEffect } from 'react';
import type { Language, SiteSettings, Product } from '../types.ts';
import { getSiteSettings, getManagedProducts } from '../api.ts';
import HeroSection from '../components/HeroSection.tsx';
import ProductSelector from '../components/ProductSelector.tsx';
import ServicesSection from '../components/ServicesSection.tsx';
import TestimonialsSection from '../components/TestimonialsSection.tsx';
import HowItWorksSection from '../components/HowItWorksSection.tsx';
import FaqSection from '../components/FaqSection.tsx';
import { translations } from '../constants.ts';

interface HomePageProps {
  language: Language;
  navigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, navigate }) => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [settingsData, productsData] = await Promise.all([
          getSiteSettings(),
          getManagedProducts(),
        ]);
        setSettings(settingsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectProduct = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  if (isLoading) {
    return <div className="text-center p-20">Loading...</div>;
  }

  // Fallback UI when settings failed to load from backend
  if (!settings) {
    const t = (key: string) => translations[language][key] || key;
    return (
      <>
        <section className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-bold text-primary mb-2">{t('brandName')}</h1>
            <p className="text-gray-600">{t('selectYourProduct')}</p>
          </div>
        </section>
        <div id="product-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductSelector
            language={language}
            products={products}
            onSelectProduct={handleSelectProduct}
          />
        </div>
      </>
    );
  }

  return (
    <>
      {settings?.hero && <HeroSection language={language} settings={settings.hero} />}
      
      <div id="product-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductSelector
          language={language}
          products={products}
          onSelectProduct={handleSelectProduct}
        />
      </div>

      {settings?.services?.enabled && <ServicesSection language={language} settings={settings.services} />}
      {settings?.howItWorks?.enabled && <HowItWorksSection language={language} settings={settings.howItWorks} />}
      {settings?.testimonials?.enabled && <TestimonialsSection language={language} settings={settings.testimonials} />}
      {settings?.faq?.enabled && <FaqSection language={language} settings={settings.faq} />}
    </>
  );
};

export default HomePage;
