import { Metadata } from 'next';
import { EnhancedHero } from '@/app/[locale]/_components/enhanced-hero';
import { PartnerBrandsCTA } from '@/app/[locale]/_components/partner-brands-cta';
import { AnimatedFeaturesSection } from '@/app/[locale]/_components/animated-features';
import { TestimonialsSlider } from '@/app/[locale]/_components/testimonials-slider';
import { HowItWorksSection } from '@/app/[locale]/_components/how-it-works';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
  generateProductJsonLd,
} from '@/lib/seo';
import { BrandBar } from '@/app/[locale]/_components/brand-bar';
import { CompanyBar } from '@/app/[locale]/_components/company-bar';

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

      <div className="relative flex min-h-screen flex-col bg-neutral-50 dark:bg-gray-900">

        <main className="relative flex-1" style={{ zIndex: 1 }}>
          <EnhancedHero />
          <CompanyBar />

          <AnimatedFeaturesSection />
          <BrandBar />
          <HowItWorksSection />   
          <TestimonialsSlider />
   

          <PartnerBrandsCTA />
        </main>
      </div>
    </>
  );
}
