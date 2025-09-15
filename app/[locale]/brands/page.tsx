import { BrandsHero } from '@/components/sections/brands-hero';
import { BrandsShowcase } from '@/components/sections/brands-showcase';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getTranslations } from 'next-intl/server';

interface BrandsPageProps {
  params: {
    locale: string;
  };
}

export default async function BrandsPage({ params: { locale } }: BrandsPageProps) {
  const t = await getTranslations();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BrandsHero />
        <BrandsShowcase />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({ params: { locale } }: BrandsPageProps) {
  const t = await getTranslations();
  
  return {
    title: 'Markalar - Bravioo ile Büyüyen Markalar',
    description: 'Bravioo altyapısı ile büyüyen ve başarılı olan markaların hikayelerini keşfedin.',
  };
}
