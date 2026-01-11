'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CategoriesSection from '@/components/home/CategoriesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import AboutSection from '@/components/home/AboutSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ComingSoonBanner from '@/components/home/ComingSoonBanner';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoriesSection />
      <BenefitsSection />
      <AboutSection />
      <HowItWorksSection />
      <ComingSoonBanner />
      <Footer />
    </main>
  );
}
