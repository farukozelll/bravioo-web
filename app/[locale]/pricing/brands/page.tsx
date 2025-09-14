import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BrandPartnershipHero } from '@/components/sections/brand-partnership-hero';
import { BrandPartnershipBenefits } from '@/components/sections/brand-partnership-benefits';
import { BrandPartnershipPrograms } from '@/components/sections/brand-partnership-programs';
import { BrandPartnershipProcess } from '@/components/sections/brand-partnership-process';

export const metadata: Metadata = {
  title: 'Marka Partnerliği | Brand Partnership - Bravioo',
  description: 'Bravioo marka partnerliği programı. Markanızı çalışanlara ulaştırın, satışları artırın, müşteri sadakati kazanın.',
};

export default function BrandPartnershipPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BrandPartnershipHero />
        <BrandPartnershipBenefits />
        <BrandPartnershipPrograms />
        <BrandPartnershipProcess />
      </main>
      <Footer />
    </>
  );
}
