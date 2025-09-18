import { BrandsHero } from '@/components/sections/brands-hero';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getTranslations } from 'next-intl/server';
import { BrandBar } from '@/components/sections/brand-bar';
import { BrandShowcase } from '@/components/sections/brand-showcase';
  
interface BrandsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function BrandsPage({ params }: BrandsPageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <BrandsHero />
      <BrandShowcase />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }: BrandsPageProps) {
  const { locale } = await params;
  const t = await getTranslations();
  
  return {
    title: 'Markalar - Bravioo ile Büyüyen Markalar',
    description: 'Bravioo altyapısı ile büyüyen ve başarılı olan markaların hikayelerini keşfedin.',
  };
}
