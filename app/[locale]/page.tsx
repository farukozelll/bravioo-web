import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EnhancedHero } from '@/components/sections/enhanced-hero';
import { FeaturesSection } from '@/components/sections/features';
import { BrandLogosSection } from '@/components/sections/brand-logos';
import { PartnerBrandsMarquee } from '@/components/sections/partner-brands-marquee';
import { AnimatedFeaturesSection } from '@/components/sections/animated-features';
import { CustomerStoriesSection } from '@/components/sections/customer-stories';
import { TestimonialsSlider } from '@/components/sections/testimonials-slider';
import { CustomerResultsSection } from '@/components/sections/customer-results';
import { ProfessionalCustomerResults } from '@/components/sections/professional-customer-results';
import { CompanyShowcaseSection } from '@/components/sections/company-showcase';
import { MobileAppDownloadSection } from '@/components/sections/mobile-app-download';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateOrganizationJsonLd, generateWebsiteJsonLd, generateProductJsonLd } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata({
    title: locale === 'tr' 
      ? 'Bravioo - Çalışan Takdir ve Ödül Platformu'
      : 'Bravioo - Employee Recognition & Rewards Platform',
    description: locale === 'tr'
      ? 'Bravioo\'nun kapsamlı çalışan takdir ve ödül platformuyla iş yeri kültürünüzü dönüştürün. Bağlılığı, elde tutmayı ve verimliliği artırın.'
      : 'Transform your workplace culture with Bravioo\'s comprehensive employee recognition and rewards platform. Boost engagement, retention, and productivity.',
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    url: `https://bravioo.com/${locale}`,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const organizationJsonLd = generateOrganizationJsonLd();
  const websiteJsonLd = generateWebsiteJsonLd();
  const productJsonLd = generateProductJsonLd();

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-1">
          <EnhancedHero />
          <BrandLogosSection />
          <TestimonialsSlider />
          <ProfessionalCustomerResults />
          <CustomerResultsSection />
          <PartnerBrandsMarquee />
          <AnimatedFeaturesSection />
          <MobileAppDownloadSection />
          <HowItWorksSection />
          <CustomerStoriesSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
