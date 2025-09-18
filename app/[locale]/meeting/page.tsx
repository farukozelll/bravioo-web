import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
// import { getTranslations } from 'next-intl/server';
import { MeetingForm } from '@/app/[locale]/meeting/_components/meeting-form';
import { 
  // Calendar, 
  Clock, 
  Users, 
  Video,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  PlayCircle,
  MessageSquare,
  FileText,
  Target,
  Phone
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `${locale === 'tr' ? 'Demo Toplantısı' : 'Demo Meeting'} | Bravioo`,
    description: locale === 'tr' 
      ? 'Bravioo platformunun gücünü keşfedin. Ücretsiz demo toplantısı planlayın ve çalışan deneyimi dönüşümünüzü başlatın.'
      : 'Discover the power of the Bravioo platform. Schedule a free demo meeting and start your employee experience transformation.',
  };
}

export default async function MeetingPage({ params }: Props) {
  const { locale } = await params;

  const demoFeatures = [
    {
      icon: Target,
      title: locale === 'tr' ? 'Kişiselleştirilmiş Demo' : 'Personalized Demo',
      description: locale === 'tr' 
        ? 'İşletmenizin ihtiyaçlarına özel hazırlanan 30 dakikalık demo sunumu'
        : '30-minute demo presentation tailored to your business needs'
    },
    {
      icon: Users,
      title: locale === 'tr' ? 'Uzman Danışmanlık' : 'Expert Consultation',
      description: locale === 'tr'
        ? 'Bravioo uzmanları ile birebir görüşme ve çözüm önerilerini alma'
        : 'One-on-one consultation with Bravioo experts and solution recommendations'
    },
    {
      icon: FileText,
      title: locale === 'tr' ? 'ROI Analizi' : 'ROI Analysis',
      description: locale === 'tr'
        ? 'İşletmeniz için özel hazırlanan yatırım getirisi hesaplaması'
        : 'Custom return on investment calculation for your business'
    },
    {
      icon: Zap,
      title: locale === 'tr' ? 'Entegrasyon Planı' : 'Integration Plan',
      description: locale === 'tr'
        ? 'Mevcut sistemlerinizle entegrasyon yol haritası ve timeline'
        : 'Integration roadmap and timeline with your existing systems'
    }
  ];

  const meetingOptions = [
    {
      type: 'quick',
      title: locale === 'tr' ? 'Hızlı Demo' : 'Quick Demo',
      duration: '15 min',
      description: locale === 'tr' 
        ? 'Platform genel özellikleri ve temel fonksiyonları'
        : 'Platform overview and basic functionalities',
      icon: PlayCircle,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      type: 'standard',
      title: locale === 'tr' ? 'Standart Demo' : 'Standard Demo',
      duration: '30 min',
      description: locale === 'tr'
        ? 'Detaylı platform turu ve işletmenize özel çözümler'
        : 'Detailed platform tour and business-specific solutions',
      icon: Video,
      color: 'from-green-500 to-gold-600',
      popular: true
    },
    {
      type: 'comprehensive',
      title: locale === 'tr' ? 'Kapsamlı Demo' : 'Comprehensive Demo',
      duration: '60 min',
      description: locale === 'tr'
        ? 'Tüm modüller, entegrasyon seçenekleri ve implementation planı'
        : 'All modules, integration options and implementation plan',
      icon: Users,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      text: locale === 'tr' ? 'Ücretsiz ve yükümlülük gerektirmeyen' : 'Free and no commitment required'
    },
    {
      icon: Shield,
      text: locale === 'tr' ? 'Güvenli ve gizli görüşme' : 'Secure and confidential meeting'
    },
    {
      icon: Globe,
      text: locale === 'tr' ? 'Online veya yerinde demo seçeneği' : 'Online or on-site demo option'
    },
    {
      icon: Clock,
      text: locale === 'tr' ? '24 saat içinde onay' : 'Confirmation within 24 hours'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sand-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
       

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
              {locale === 'tr' ? 'Ücretsiz Demo' : 'Free Demo'}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-900 dark:text-gray-100 mb-6 font-display">
              {locale === 'tr' 
                ? 'Bravioo\'nun Gücünü' 
                : 'Experience the Power'
              }{' '}
              <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                {locale === 'tr' ? 'Deneyimleyin' : 'of Bravioo'}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {locale === 'tr'
                ? 'Çalışan deneyimi dönüşümünüzü başlatın. Bravioo uzmanları ile kişiselleştirilmiş demo toplantısı planlayın ve platform\'un işletmenize nasıl değer katacağını keşfedin.'
                : 'Start your employee experience transformation. Schedule a personalized demo meeting with Bravioo experts and discover how the platform will add value to your business.'
              }
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-ink-700 dark:text-gray-300">
                    <Icon className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Options */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 dark:text-gray-100 mb-4 font-display">
              {locale === 'tr' ? 'Demo Seçenekleri' : 'Demo Options'}
            </h2>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300">
              {locale === 'tr'
                ? 'İhtiyacınıza en uygun demo türünü seçin'
                : 'Choose the demo type that best suits your needs'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {meetingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className={`relative p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer group ${
                    option.popular 
                      ? 'border-brand-500 shadow-lg' 
                      : 'border-sand-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-500'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {locale === 'tr' ? 'En Popüler' : 'Most Popular'}
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink-900 dark:text-gray-100 mb-2">{option.title}</h3>
                  <div className="text-2xl font-bold text-brand-600 mb-4">{option.duration}</div>
                  <p className="text-ink-600 dark:text-gray-300 mb-6">{option.description}</p>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    option.popular
                      ? 'bg-brand-500 text-white hover:bg-brand-600'
                      : 'bg-sand-100 dark:bg-gray-700 text-ink-900 dark:text-gray-100 hover:bg-brand-50 dark:hover:bg-gray-600'
                  }`}>
                    {locale === 'tr' ? 'Bu Demoyu Seç' : 'Choose This Demo'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-24 bg-sand-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 dark:text-gray-100 mb-4 font-display">
              {locale === 'tr' ? 'Demo\'da Neler Var?' : 'What\'s Included in the Demo?'}
            </h2>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300">
              {locale === 'tr'
                ? 'Demo toplantısında sizinle paylaşacağımız değerli içerikler'
                : 'Valuable content we\'ll share with you during the demo meeting'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-sand-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink-900 dark:text-gray-100 mb-3">{feature.title}</h3>
                      <p className="text-ink-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meeting Form Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 dark:text-gray-100 mb-4 font-display">
              {locale === 'tr' ? 'Demo Toplantısı Planlayın' : 'Schedule Your Demo Meeting'}
            </h2>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 max-w-2xl mx-auto">
              {locale === 'tr'
                ? 'Formu doldurun, 24 saat içinde sizinle iletişime geçelim ve demo toplantısını planlayalım.'
                : 'Fill out the form below and we\'ll contact you within 24 hours to schedule your demo meeting.'
              }
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-sand-200 dark:border-gray-700 p-6 lg:p-8">
            <MeetingForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-display">
            {locale === 'tr' ? 'Sorularınız mı var?' : 'Have Questions?'}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {locale === 'tr'
              ? 'Demo öncesinde aklınıza takılan sorular için doğrudan bizimle iletişime geçebilirsiniz.'
              : 'Feel free to contact us directly if you have any questions before the demo.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/contact`}
              className="bg-white text-brand-600 hover:bg-sand-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              {locale === 'tr' ? 'Hemen İletişime Geç' : 'Contact Now'}
            </Link>
            <a 
              href="tel:+902125550123"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {locale === 'tr' ? 'Hemen Ara' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
