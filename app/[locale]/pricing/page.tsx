import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

// Import all the components we need
import { BrandPartnershipHero } from '@/app/[locale]/pricing/_components/brand-partnership-hero';
import { BrandPartnershipBenefits } from '@/app/[locale]/pricing/_components/brand-partnership-benefits';
import { EmployerPricingFAQ } from '@/app/[locale]/pricing/_components/employer-pricing-faq';
import { PricingTabs } from '@/app/[locale]/pricing/_components/pricing-tabs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata({
    title: locale === 'tr' 
      ? 'Fiyatlandırma - Bravioo'
      : 'Pricing - Bravioo',
    description: locale === 'tr'
      ? 'Bravioo fiyatlandırma planları. Ücretsiz marka indirimleri veya personel sayısına göre özel teklifler.'
      : 'Bravioo pricing plans. Free brand discounts or custom offers based on employee count.',
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    url: `https://bravioo.com/${locale}/pricing`,
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <BrandPartnershipHero />

        {/* Tabbed Section */}
        <PricingTabs locale={locale} />

        {/* Benefits Section */}
        <BrandPartnershipBenefits />

        {/* FAQ Section */}
        <EmployerPricingFAQ />
      </main>
    </div>
  );
}