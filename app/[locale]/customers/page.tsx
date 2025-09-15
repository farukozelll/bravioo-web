import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CustomerHero } from '@/components/sections/customer-hero';
import { CustomerShowcase } from '@/components/sections/customer-showcase';
import { CompanyBar } from '@/components/sections/company-bar';

export const metadata: Metadata = {
  title: 'Müşteri Başarı Hikayeleri | Customer Success Stories - Bravioo',
  description: 'Bravioo e-ticaret altyapısı ile başarıya ulaşan 10.000+ işletmenin hikayelerini keşfedin. Her sektörden başarı örnekleri.',
};

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CustomerHero />
        <CompanyBar />
        <CustomerShowcase />
      </main>
      <Footer />
    </>
  );
}