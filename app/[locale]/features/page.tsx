import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  
  return generateSEOMetadata({
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    title: locale === 'tr' ? 'Özellikler - Bravioo' : 'Features - Bravioo',
    description: locale === 'tr' 
      ? 'Bravioo\'nun kapsamlı çalışan takdir ve ödül platform özelliklerini keşfedin.'
      : 'Discover Bravioo\'s comprehensive employee recognition and rewards platform features.',
    path: `/${locale}/features`,
  });
}

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sand-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-brand-200/40 to-emerald-200/40 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-6 py-3 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
              {locale === 'tr' ? 'Platform Özellikleri' : 'Platform Features'}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-ink-900 mb-6 font-display">
              {locale === 'tr' ? 'Güçlü Özellikler,' : 'Powerful Features,'}{' '}
              <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                {locale === 'tr' ? 'Etkili Sonuçlar' : 'Effective Results'}
              </span>
            </h1>
            
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {locale === 'tr'
                ? 'Çalışan bağlılığını artırmak ve takdir kültürü oluşturmak için tasarlanmış kapsamlı platform özelliklerimizi keşfedin.'
                : 'Discover our comprehensive platform features designed to boost employee engagement and build a culture of recognition.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: locale === 'tr' ? 'Meslektaştan Meslektaşa Takdir' : 'Peer-to-Peer Recognition',
                description: locale === 'tr' 
                  ? 'Çalışanların birbirlerini anlık olarak takdir etmelerini sağlayan kolay kullanımlı sistem.'
                  : 'Easy-to-use system that enables employees to recognize each other instantly.',
                icon: '🤝'
              },
              {
                title: locale === 'tr' ? 'Global Ödül Kataloğu' : 'Global Rewards Catalog',
                description: locale === 'tr'
                  ? '50+ ülkede binlerce ödül seçeneği ile çalışanlarınızı motive edin.'
                  : 'Motivate your employees with thousands of reward options in 50+ countries.',
                icon: '🎁'
              },
              {
                title: locale === 'tr' ? 'Gelişmiş Analitik' : 'Advanced Analytics',
                description: locale === 'tr'
                  ? 'Detaylı raporlar ve insights ile takdir programınızın etkisini ölçün.'
                  : 'Measure the impact of your recognition program with detailed reports and insights.',
                icon: '📊'
              },
              {
                title: locale === 'tr' ? 'Mobil Uygulama' : 'Mobile Application',
                description: locale === 'tr'
                  ? 'iOS ve Android uygulamalarımızla her yerden takdir ve ödül yönetimi.'
                  : 'Recognition and reward management from anywhere with our iOS and Android apps.',
                icon: '📱'
              },
              {
                title: locale === 'tr' ? 'API Entegrasyonu' : 'API Integration',
                description: locale === 'tr'
                  ? 'Mevcut HR sistemlerinizle sorunsuz entegrasyon için güçlü API\'ler.'
                  : 'Powerful APIs for seamless integration with your existing HR systems.',
                icon: '🔗'
              },
              {
                title: locale === 'tr' ? 'Güvenlik ve Uyumluluk' : 'Security & Compliance',
                description: locale === 'tr'
                  ? 'GDPR, CCPA uyumlu ve enterprise düzeyinde güvenlik standartları.'
                  : 'GDPR, CCPA compliant with enterprise-grade security standards.',
                icon: '🔒'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-3xl border border-sand-200 hover:border-brand-300 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-ink-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-6 font-display">
            {locale === 'tr' ? 'Hazır mısınız?' : 'Ready to get started?'}
          </h2>
          <p className="text-xl text-ink-600 mb-8">
            {locale === 'tr'
              ? 'Bravioo ile şirket kültürünüzü dönüştürmeye bugün başlayın.'
              : 'Start transforming your company culture with Bravioo today.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              {locale === 'tr' ? 'Ücretsiz Demo' : 'Free Demo'}
            </button>
            <button className="border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all">
              {locale === 'tr' ? 'İletişime Geç' : 'Contact Sales'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
