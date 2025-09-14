import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EmployerPricingHero } from '@/components/sections/employer-pricing-hero';
import { EmployerPricingPlans } from '@/components/sections/employer-pricing-plans';
import { EmployerPricingComparison } from '@/components/sections/employer-pricing-comparison';
import { EmployerPricingFAQ } from '@/components/sections/employer-pricing-faq';

export const metadata: Metadata = {
  title: 'İşveren Fiyatlandırması | Employer Pricing - Bravioo',
  description: 'Bravioo işveren paketleri ve fiyatlandırması. 4 farklı plan, modül bazlı çözümler, aylık ve yıllık abonelik seçenekleri.',
};

export default function EmployerPricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <EmployerPricingHero />
        <EmployerPricingPlans />
        <EmployerPricingComparison />
        <EmployerPricingFAQ />
      </main>
      <Footer />
    </>
  );
}
