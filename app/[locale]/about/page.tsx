import { Metadata } from 'next';
// import { useTranslations } from 'next-intl';
import { BrandManifesto } from '@/app/[locale]/about/_components/brand-manifesto';
import { JourneyMilestones } from '@/app/[locale]/about/_components/journey-milestones';
import { LovedBySection } from '@/app/[locale]/about/_components/loved-by';
import { AboutUsSection } from '@/app/[locale]/about/_components/about-us';
import { SiteCTA } from '@/app/[locale]/about/_components/site-cta';

export const metadata: Metadata = {
  title: 'Hakkımızda | About Us - Bravioo',
  description:
    "İnsana yakışır iş yerleri için teknoloji. Bravioo'nun hikayesi, değerleri ve misyonu.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <main className="relative flex-1" style={{ zIndex: 1 }}>
        <LovedBySection />
        <AboutUsSection />
        <JourneyMilestones />
        <BrandManifesto />
      
        <SiteCTA />
      </main>
    </div>
  );
}
