import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactFormTabs } from '@/components/contact-form-tabs';
import { 
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  BarChart3,
  Zap,
  Shield,
  Clock,
  Calendar
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `${locale === 'tr' ? 'Demo Talep Et' : 'Request Demo'} | Bravioo`,
    description: locale === 'tr' 
      ? 'Bravioo\'nun gücünü keşfedin. 30 dakikalık kişiselleştirilmiş demo ile çalışan deneyimi dönüşümünüzü planlayın.'
      : 'Discover the power of Bravioo. Plan your employee experience transformation with a 30-minute personalized demo.',
  };
}

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;

  const demoFeatures = [
    {
      icon: Users,
      title: locale === 'tr' ? 'Kişiselleştirilmiş Sunum' : 'Personalized Presentation',
      description: locale === 'tr' ? 'İhtiyaçlarınıza özel demo deneyimi' : 'Demo experience tailored to your needs'
    },
    {
      icon: Clock,
      title: locale === 'tr' ? '30 Dakika' : '30 Minutes',
      description: locale === 'tr' ? 'Hızlı ve verimli sunum' : 'Quick and efficient presentation'
    },
    {
      icon: Calendar,
      title: locale === 'tr' ? 'Esnek Zamanlama' : 'Flexible Scheduling',
      description: locale === 'tr' ? 'Size uygun tarih ve saat' : 'Date and time that works for you'
    },
    {
      icon: Award,
      title: locale === 'tr' ? 'Uzman Rehberliği' : 'Expert Guidance',
      description: locale === 'tr' ? 'Deneyimli ekibimizden öneriler' : 'Recommendations from our experienced team'
    }
  ];

  const trustIndicators = [
    {
      icon: Star,
      stat: '4.9/5',
      label: locale === 'tr' ? 'Müşteri Puanı' : 'Customer Rating'
    },
    {
      icon: Users,
      stat: '500+',
      label: locale === 'tr' ? 'Mutlu Şirket' : 'Happy Companies'
    },
    {
      icon: Shield,
      stat: 'ISO 27001',
      label: locale === 'tr' ? 'Güvenlik Sertifikası' : 'Security Certified'
    },
    {
      icon: BarChart3,
      stat: '450%',
      label: locale === 'tr' ? 'Ortalama ROI' : 'Average ROI'
    }
  ];

  const customerLogos = [
    'Albayrak Grubu', 'AGT', 'Akmercan', 'Türksat', 
    'Acıbadem', 'Liv Hospital', 'Sanko', 'Karaca'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sand-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-200 to-gold-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
                {locale === 'tr' ? 'Ücretsiz Demo' : 'Free Demo'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
                {locale === 'tr' 
                  ? 'Bravioo\'nun Gücünü' 
                  : 'Experience the Power of'
                }{' '}
                <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                  {locale === 'tr' ? 'Deneyimleyin' : 'Bravioo'}
                </span>
              </h1>
              <p className="text-xl text-ink-600 mb-8 leading-relaxed">
                {locale === 'tr'
                  ? '30 dakikalık kişiselleştirilmiş demo ile Bravioo\'nun işletmeniz için nasıl değer yaratacağını keşfedin.'
                  : 'Discover how Bravioo can create value for your business with a 30-minute personalized demo.'
                }
              </p>

              {/* Demo Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {demoFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink-900 text-sm">{feature.title}</h3>
                        <p className="text-xs text-ink-600 mt-1">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {trustIndicators.map((indicator, index) => {
                  const Icon = indicator.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white rounded-xl border border-sand-200 flex items-center justify-center mx-auto mb-2">
                        <Icon className="h-5 w-5 text-brand-600" />
                      </div>
                      <div className="text-lg font-bold text-ink-900">{indicator.stat}</div>
                      <div className="text-xs text-ink-600">{indicator.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Customer Logos */}
              <div className="border-t border-sand-200 pt-6">
                <p className="text-sm text-ink-500 mb-4">
                  {locale === 'tr' ? 'Bu şirketler Bravioo\'ya güveniyor:' : 'Trusted by these companies:'}
                </p>
                <div className="flex flex-wrap gap-4">
                  {customerLogos.slice(0, 4).map((logo, index) => (
                    <div key={index} className="text-xs text-ink-400 bg-sand-50 px-3 py-1 rounded-full">
                      {logo}
                    </div>
                  ))}
                  <div className="text-xs text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    +{customerLogos.length - 4} {locale === 'tr' ? 'daha fazla' : 'more'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-sand-200 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-ink-900 mb-2">
                  {locale === 'tr' ? 'Demo Talep Formu' : 'Request Demo Form'}
                </h2>
                <p className="text-ink-600">
                  {locale === 'tr'
                    ? 'Bilgilerinizi paylaşın, size özel demo hazırlayalım.'
                    : 'Share your information and we\'ll prepare a personalized demo for you.'
                  }
                </p>
              </div>
              <ContactFormTabs />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 font-display">
              {locale === 'tr' ? 'Demoda Neler Göreceksiniz?' : 'What Will You See in the Demo?'}
            </h2>
            <p className="text-xl text-ink-600">
              {locale === 'tr'
                ? 'Bravioo\'nun tüm özelliklerini canlı olarak deneyimleyin'
                : 'Experience all of Bravioo\'s features live'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: locale === 'tr' ? 'Çalışan Takdir Sistemi' : 'Employee Recognition System',
                description: locale === 'tr' ? 'Peer-to-peer takdir nasıl çalışır, canlı gösterim' : 'Live demonstration of how peer-to-peer recognition works'
              },
              {
                icon: Award,
                title: locale === 'tr' ? 'Ödül Kataloğu' : 'Rewards Catalog',
                description: locale === 'tr' ? 'Global ödül seçenekleri ve yerelleştirme' : 'Global reward options and localization'
              },
              {
                icon: BarChart3,
                title: locale === 'tr' ? 'Analitik Dashboard' : 'Analytics Dashboard',
                description: locale === 'tr' ? 'Gerçek zamanlı raporlar ve metrikler' : 'Real-time reports and metrics'
              },
              {
                icon: Zap,
                title: locale === 'tr' ? 'Entegrasyonlar' : 'Integrations',
                description: locale === 'tr' ? 'Slack, Teams ve diğer platformlarla bağlantı' : 'Connection with Slack, Teams and other platforms'
              },
              {
                icon: Shield,
                title: locale === 'tr' ? 'Güvenlik Özellikleri' : 'Security Features',
                description: locale === 'tr' ? 'Veri koruma ve uyumluluk standartları' : 'Data protection and compliance standards'
              },
              {
                icon: Calendar,
                title: locale === 'tr' ? 'Uygulama Planı' : 'Implementation Plan',
                description: locale === 'tr' ? 'Kurulum süreci ve zaman çizelgesi' : 'Setup process and timeline'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-sand-50 rounded-2xl p-6 border border-sand-200 hover:border-brand-300 transition-all duration-300 hover:shadow-lg group">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-ink-900 mb-3">{item.title}</h3>
                  <p className="text-ink-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ink-900 to-ink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            {locale === 'tr' 
              ? 'Hemen Başlayın, Farkı Görün' 
              : 'Start Now, See the Difference'
            }
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {locale === 'tr'
              ? 'Demo sonrası 14 günlük ücretsiz deneme ile Bravioo\'yu test edin.'
              : 'Test Bravioo with a 14-day free trial after the demo.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
              {locale === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-ink-900 px-8 py-4 rounded-full font-semibold transition-all">
              {locale === 'tr' ? 'Fiyatları İncele' : 'View Pricing'}
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

