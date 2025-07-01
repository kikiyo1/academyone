import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';

import Header from '@/components/landing/Header.jsx';
import Hero from '@/components/landing/Hero.jsx';
import Features from '@/components/landing/Features.jsx';
import Pricing from '@/components/landing/Pricing.jsx';
import CTA from '@/components/landing/CTA.jsx';
import Footer from '@/components/landing/Footer.jsx';

const LandingPage = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({ registrationUrl: '' });

  useEffect(() => {
    const savedProducts = localStorage.getItem('hadeAcademyProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      const defaultProducts = [
        { id: 1, name: 'Basic', price: 'Rp 299.000', originalPrice: 'Rp 399.000', features: ['Akses 30+ kursus', 'Video HD Quality', '1 bulan akses', 'Mobile app access'], checkoutUrl: '#', isPopular: false },
        { id: 2, name: 'Premium', price: 'Rp 499.000', originalPrice: 'Rp 699.000', features: ['Akses semua kursus', '1 on 1 mentoring', 'Sertifikat resmi', 'Priority support', 'Offline download'], checkoutUrl: '#', isPopular: true },
        { id: 3, name: 'Enterprise', price: 'Rp 999.000', originalPrice: 'Rp 1.299.000', features: ['Unlimited access', 'Custom learning path', 'Team management', 'Analytics dashboard', 'API integration'], checkoutUrl: '#', isPopular: false }
      ];
      setProducts(defaultProducts);
      localStorage.setItem('hadeAcademyProducts', JSON.stringify(defaultProducts));
    }

    const savedSettings = localStorage.getItem('hadeAcademySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleCheckout = (product) => {
    if (product.checkoutUrl === '#' || !product.checkoutUrl) {
      toast({
        title: "🚧 Fitur ini belum diimplementasikan",
        description: "Tapi jangan khawatir! Anda bisa meminta fitur ini di prompt berikutnya! 🚀",
      });
    } else {
      window.open(product.checkoutUrl, '_blank');
    }
  };

  const handleMenuClick = (section) => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Tapi jangan khawatir! Anda bisa meminta fitur ini di prompt berikutnya! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>HADE ACADEMY - Belajar Tanpa Batas dengan Teknologi Terdepan</title>
        <meta name="description" content="Bergabunglah dengan ribuan siswa yang telah merasakan pengalaman belajar terbaik. Akses kursus premium, mentor berpengalaman, dan sertifikat resmi." />
      </Helmet>

      <div className="min-h-screen gradient-bg">
        <Header settings={settings} onMenuClick={handleMenuClick} />
        <main>
          <Hero onMenuClick={handleMenuClick} />
          <Features />
          <Pricing products={products} handleCheckout={handleCheckout} />
          <CTA settings={settings} onMenuClick={handleMenuClick} />
        </main>
        <Footer onMenuClick={handleMenuClick} />
      </div>
    </>
  );
};

export default LandingPage;