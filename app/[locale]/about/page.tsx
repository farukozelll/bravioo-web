import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { AboutHero } from '@/components/sections/about-hero';
import { BrandManifesto } from '@/components/sections/brand-manifesto';
import { JourneyMilestones } from '@/components/sections/journey-milestones';
import { CompanyValues } from '@/components/sections/company-values';
import { TeamLeadership } from '@/components/sections/team-leadership';
import { InvestorPartners } from '@/components/sections/investor-partners';

export const metadata: Metadata = {
  title: 'Hakkımızda | About Us - Bravioo',
  description: 'İnsana yakışır iş yerleri için teknoloji. Bravioo\'nun hikayesi, değerleri ve misyonu.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <BrandManifesto />
      <JourneyMilestones />
      <CompanyValues />
      <TeamLeadership />
      <InvestorPartners />
    </main>
  );
}
