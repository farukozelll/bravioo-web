import { Metadata } from 'next';
import { BrandPartnershipHero } from '@/app/[locale]/pricing/brands/_components/brand-partnership-hero';
import { BrandPartnershipBenefits } from '@/app/[locale]/pricing/brands/_components/brand-partnership-benefits';
import { BrandPartnershipPrograms } from '@/app/[locale]/pricing/brands/_components/brand-partnership-programs';

export const metadata: Metadata = {
  title: 'Marka Partnerliği | Brand Partnership - Bravioo',
  description: 'Bravioo marka partnerliği programı. Markanızı çalışanlara ulaştırın, satışları artırın, müşteri sadakati kazanın.',
};

export default function BrandPartnershipPage() {
  return (
    <>
      <main className="min-h-screen">
        <BrandPartnershipHero />
          <BrandPartnershipBenefits />
        <BrandPartnershipPrograms />
      
      </main>
    </>
  );
}
