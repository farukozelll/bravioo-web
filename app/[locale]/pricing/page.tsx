import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PricingSection } from '@/components/sections/pricing';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

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
      <Header />
      
      <main className="flex-1">
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
}
