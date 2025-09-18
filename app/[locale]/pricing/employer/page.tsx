import { Metadata } from 'next';
import { EmployerPricingHero } from '@/app/[locale]/pricing/employer/_components/employer-pricing-hero';
import { EmployerPricingPlans } from '@/app/[locale]/pricing/employer/_components/employer-pricing-plans';
import { EmployerPricingComparison } from '@/app/[locale]/pricing/employer/_components/employer-pricing-comparison';
import { EmployerPricingFAQ } from '@/app/[locale]/pricing/employer/_components/employer-pricing-faq';

export const metadata: Metadata = {
  title: 'İşveren Partnerlik | Employer Partnership - Bravioo',
  description: 'Bravioo işveren paketleri ve fiyatlandırması. 4 farklı plan, modül bazlı çözümler, aylık ve yıllık abonelik seçenekleri.',
};

export default function EmployerPricingPage() {
  return (
    <>
      <main className="min-h-screen">
        <EmployerPricingHero />
        <EmployerPricingPlans />
        <EmployerPricingComparison />
        <EmployerPricingFAQ />
      </main>
    </>
  );
}
