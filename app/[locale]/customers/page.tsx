import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CustomerStoriesSection } from '@/components/sections/customer-stories';
import { BrandLogosSection } from '@/components/sections/brand-logos';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'customers' });

  return {
    title: `${t('title')} | Bravioo`,
    description: t('subtitle'),
  };
}

export default async function CustomersPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sand-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-200 to-gold-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
              {locale === 'tr' ? 'Müşteri Başarı Hikayeleri' : 'Customer Success Stories'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
              {locale === 'tr' 
                ? 'Başarılı Şirketlerin' 
                : 'Success Stories from'
              }{' '}
              <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                {locale === 'tr' ? 'Bravioo Deneyimi' : 'Leading Companies'}
              </span>
            </h1>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {locale === 'tr'
                ? 'Bravioo ile çalışan deneyimlerini dönüştüren şirketlerin gerçek sonuçlarını keşfedin. %500\'e varan ROI artışları, %90+ çalışan memnuniyeti ve daha fazlası.'
                : 'Discover real results from companies that transformed their employee experience with Bravioo. Up to 500% ROI increases, 90%+ employee satisfaction, and more.'
              }
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '500+', label: locale === 'tr' ? 'Mutlu Şirket' : 'Happy Companies' },
              { number: '2M+', label: locale === 'tr' ? 'Aktif Kullanıcı' : 'Active Users' },
              { number: '95%', label: locale === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction' },
              { number: '450%', label: locale === 'tr' ? 'Ortalama ROI' : 'Average ROI' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-ink-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <CustomerStoriesSection />

      {/* Partner Brands */}
      <BrandLogosSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ink-900 to-ink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            {locale === 'tr' 
              ? 'Siz de Bu Başarı Hikayelerinin Parçası Olun' 
              : 'Join These Success Stories'
            }
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {locale === 'tr'
              ? 'Bravioo ile çalışan deneyiminizi dönüştürmeye bugün başlayın. Ücretsiz demo ile potansiyelinizi keşfedin.'
              : 'Start transforming your employee experience with Bravioo today. Discover your potential with a free demo.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
              {locale === 'tr' ? 'Ücretsiz Demo Al' : 'Get Free Demo'}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-ink-900 px-8 py-4 rounded-full font-semibold transition-all">
              {locale === 'tr' ? 'Fiyatları Görüntüle' : 'View Pricing'}
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

