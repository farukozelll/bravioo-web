import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
// import { getTranslations } from 'next-intl/server';
import { MeetingForm } from '@/app/[locale]/meeting/_components/meeting-form';
import { 
  // Calendar, 
  Clock, 
  CheckCircle,
  Shield,
  Globe,
  MessageSquare,
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
  // i18n for hero texts
  const isTr = locale === 'tr';
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
              {isTr ? 'Ücretsiz Demo' : 'Free Demo'}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-900 dark:text-gray-100 mb-6 font-display">
              {isTr ? "Bravioo'nun Gücünü Deneyimleyin" : 'Experience Bravioo’s Power'}
            </h1>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {isTr
                ? 'Size platformumuzun katacağı değerleri bir canlı demo ile sunalım. Şimdi uzmanlarımızla bir ücretsiz online demo toplantısı oluşturun ve çalışan deneyimi dönüşümünüzü başlatın.'
                : 'Let us show the value our platform will add with a live demo. Create a free online demo meeting with our experts now and start your employee experience transformation.'}
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[0,1,2,3].map((i) => (
                <div key={i} className="flex items-center gap-2 text-ink-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium">{isTr ? (
                    i===0? 'Ücretsiz ve yükümlülük gerektirmeyen' : i===1? 'Güvenli ve gizli görüşme' : i===2? 'Online veya yerinde demo seçeneği' : '24 saat içinde onay'
                  ) : (
                    i===0? 'Free and no commitment required' : i===1? 'Secure and confidential meeting' : i===2? 'Online or on-site demo option' : 'Confirmation within 24 hours'
                  )}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

 

      {/* Meeting Form Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 dark:text-gray-100 mb-4 font-display">
              {isTr ? 'Demo Toplantısı Planlayın' : 'Schedule Your Demo Meeting'}
            </h2>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isTr
                ? 'Formu doldurun, 24 saat içinde sizinle iletişime geçelim ve demo toplantısını planlayalım.'
                : "Fill out the form below and we'll contact you within 24 hours to schedule your demo meeting."}
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
              {isTr ? 'Hemen İletişime Geç' : 'Contact Now'}
            </Link>
            <a 
              href="tel:+902125550123"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {isTr ? 'Hemen Ara' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
