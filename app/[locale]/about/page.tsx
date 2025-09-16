import { Metadata } from 'next';
// import { useTranslations } from 'next-intl';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
// import { AboutHero } from '@/components/sections/about-hero';
import { BrandManifesto } from '@/components/sections/brand-manifesto';
import { JourneyMilestones } from '@/components/sections/journey-milestones';
import { TeamLeadership } from '@/components/sections/team-leadership';
import { LovedBySection } from '@/components/sections/loved-by';
import { AboutUsSection } from '@/components/sections/about-us';
import { SiteCTA } from '@/components/sections/site-cta';

export const metadata: Metadata = {
  title: 'Hakkımızda | About Us - Bravioo',
  description:
    "İnsana yakışır iş yerleri için teknoloji. Bravioo'nun hikayesi, değerleri ve misyonu.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Header />
      <main className="relative flex-1" style={{ zIndex: 1 }}>
        <LovedBySection />
        <AboutUsSection />
        <JourneyMilestones />
        <BrandManifesto />
        <TeamLeadership />
        <SiteCTA />
      </main>
      <Footer />
    </div>
  );
}
