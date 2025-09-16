import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EnhancedHero } from '@/components/sections/enhanced-hero';
import { PartnerBrandsMarquee } from '@/components/sections/partner-brands-marquee';
import { PartnerBrandsCTA } from '@/components/sections/partner-brands-cta';
import { AnimatedFeaturesSection } from '@/components/sections/animated-features';
import { TestimonialsSlider } from '@/components/sections/testimonials-slider';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
  generateProductJsonLd,
} from '@/lib/seo';
import { BrandBar } from '@/components/sections/brand-bar';
import { CompanyBar } from '@/components/sections/company-bar';
import { CustomerGallery } from '@/components/sections/customer-gallery';
import { ProfessionalCustomerResultsHorizontal } from '@/components/sections/professional-customer-results-horizontal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata({
    title:
      locale === 'tr'
        ? 'Bravioo - Çalışan Takdir ve Ödül Platformu'
        : 'Bravioo - Employee Recognition & Rewards Platform',
    description:
      locale === 'tr'
        ? "Bravioo'nun kapsamlı çalışan takdir ve ödül platformuyla iş yeri kültürünüzü dönüştürün. Bağlılığı, elde tutmayı ve verimliliği artırın."
        : "Transform your workplace culture with Bravioo's comprehensive employee recognition and rewards platform. Boost engagement, retention, and productivity.",
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

      <div className="relative flex min-h-screen flex-col bg-white">
        <Header />

        <main className="relative flex-1" style={{ zIndex: 1 }}>
          <EnhancedHero />
          <CompanyBar />
          <PartnerBrandsMarquee />
          <AnimatedFeaturesSection />
          <HowItWorksSection />
          <BrandBar />

          <ProfessionalCustomerResultsHorizontal />

          <TestimonialsSlider />

          <PartnerBrandsCTA />
      
        </main>

        <Footer />
      </div>
    </>
  );
}
