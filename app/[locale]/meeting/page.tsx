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
