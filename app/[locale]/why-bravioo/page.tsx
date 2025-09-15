import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
//import { WhyBraviooHero } from '@/components/sections/why-bravioo-hero';
import { CompetitorComparison } from '@/components/sections/competitor-comparison';
//import { ROICalculator } from '@/components/sections/roi-calculator';
//import { SecurityCompliance } from '@/components/sections/security-compliance';

export const metadata: Metadata = {
  title: 'Neden Bravioo? | Why Bravioo? - Bravioo',
  description: 'Bravioo\'yu rakiplerinden ayıran özellikler. ROI hesaplayıcı, güvenlik uyumluluğu ve benzersiz değer önerimiz.',
};

export default function WhyBraviooPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-20">
          <CompetitorComparison />
        </div>
      </main>
      <Footer />
    </>
  );
}
