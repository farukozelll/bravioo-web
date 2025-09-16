import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutHero } from '@/components/sections/about-hero';
import { BrandManifesto } from '@/components/sections/brand-manifesto';
import { JourneyMilestones } from '@/components/sections/journey-milestones';
import { TeamLeadership } from '@/components/sections/team-leadership';

export const metadata: Metadata = {
  title: 'Hakkımızda | About Us - Bravioo',
  description: 'İnsana yakışır iş yerleri için teknoloji. Bravioo\'nun hikayesi, değerleri ve misyonu.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <BrandManifesto />
      
        <TeamLeadership /> 
         <JourneyMilestones />
      </main>
      <Footer />
    </>
  );
}
