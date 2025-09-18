import { BrandsHero } from '@/app/[locale]/brands/_components/brands-hero';
import { getTranslations } from 'next-intl/server';
import { BrandShowcase } from '@/app/[locale]/brands/_components/brand-showcase';
  
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
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <BrandsHero />
      <BrandShowcase />
      </main>
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
