import { Metadata } from 'next';
import { WhyBraviooHero } from '@/app/[locale]/why-bravioo/_components/why-bravioo-hero';
import { CompetitorComparison } from '@/app/[locale]/why-bravioo/_components/competitor-comparison';
import { CustomerGallery } from '@/app/[locale]/why-bravioo/_components/customer-gallery';

export const metadata: Metadata = {
  title: 'Neden Bravioo? | Why Bravioo? - Bravioo',
  description: 'Bravioo\'yu rakiplerinden ayıran özellikler. ROI hesaplayıcı, güvenlik uyumluluğu ve benzersiz değer önerimiz.',
};

export default function WhyBraviooPage() {
  return (
    <>
      <main className="min-h-screen">
        <div className="pt-20">
          
          <WhyBraviooHero />
          <CompetitorComparison />
          <CustomerGallery />

        </div>
      </main>
    </>
  );
}
