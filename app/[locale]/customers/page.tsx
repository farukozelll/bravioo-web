import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { CustomerHero } from '@/app/[locale]/customers/_components/customer-hero';
import { CustomerShowcase } from '@/app/[locale]/customers/_components/customer-showcase';

export const metadata: Metadata = {
  title: 'Müşteri Başarı Hikayeleri | Customer Success Stories - Bravioo',
  description: 'Bravioo e-ticaret altyapısı ile başarıya ulaşan 10.000+ işletmenin hikayelerini keşfedin. Her sektörden başarı örnekleri.',
};

export default function CustomersPage() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <CustomerHero />
        <CustomerShowcase />
      </main>
    </>
  );
}