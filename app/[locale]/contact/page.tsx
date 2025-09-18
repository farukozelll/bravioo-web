import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ContactFormTabs } from '@/app/[locale]/contact/_components/contact-form-tabs';
import { FAQSection } from '@/app/[locale]/contact/_components/faq';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Users,
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `${locale === 'tr' ? 'İletişim' : 'Contact'} | Bravioo`,
    description: locale === 'tr' 
      ? 'Bravioo ekibi ile iletişime geçin. Demo talep edin, sorularınızı sorun ve çalışan deneyimi dönüşümünüzü başlatın.'
      : 'Get in touch with the Bravioo team. Request a demo, ask questions, and start your employee experience transformation.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  const contactMethods = [
    {
      icon: MessageSquare,
      title: locale === 'tr' ? 'Canlı Sohbet' : 'Live Chat',
      description: locale === 'tr' ? '7/24 anlık destek' : '24/7 instant support',
      action: locale === 'tr' ? 'Sohbeti Başlat' : 'Start Chat',
      color: 'from-brand-500 to-emerald-600'
    },
    {
      icon: Phone,
      title: locale === 'tr' ? 'Telefon Desteği' : 'Phone Support',
      description: '+90 (212) 555-0123',
      action: locale === 'tr' ? 'Hemen Ara' : 'Call Now',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Mail,
      title: locale === 'tr' ? 'E-posta' : 'Email',
      description: 'hello@bravioo.com',
      action: locale === 'tr' ? 'E-posta Gönder' : 'Send Email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: locale === 'tr' ? 'Demo Talep Et' : 'Request Demo',
      description: locale === 'tr' ? '30 dakikalık özel sunum' : '30-minute personalized demo',
      action: locale === 'tr' ? 'Demo Planla' : 'Schedule Demo',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const officeInfo = [
    {
      title: locale === 'tr' ? 'Ana Ofis' : 'Headquarters',
      address: 'Maslak Mahallesi, Büyükdere Caddesi\nNo: 123, Sarıyer, İstanbul 34485\nTürkiye',
      hours: locale === 'tr' ? 'Pazartesi - Cuma: 09:00 - 18:00' : 'Monday - Friday: 09:00 - 18:00'
    },
    {
      title: locale === 'tr' ? 'Avrupa Ofisi' : 'Europe Office',
      address: 'Amsterdam Tech Quarter\nSciencepark 608, 1098 XH\nAmsterdam, Netherlands',
      hours: locale === 'tr' ? 'Pazartesi - Cuma: 09:00 - 17:00' : 'Monday - Friday: 09:00 - 17:00'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sand-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
       

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
                {locale === 'tr' ? 'İletişime Geçin' : 'Get In Touch'}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-900 dark:text-gray-100 mb-6 font-display">
                {locale === 'tr' 
                  ? 'Çalışan Deneyimi Dönüşümünüzü' 
                  : 'Start Your Employee Experience'
                }{' '}
                <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                  {locale === 'tr' ? 'Başlatalım' : 'Transformation'}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 mb-8 leading-relaxed">
                {locale === 'tr'
                  ? 'Bravioo uzmanları ile konuşun, sorularınızın yanıtlarını alın ve işletmeniz için en uygun çözümü keşfedin.'
                  : 'Talk to Bravioo experts, get answers to your questions, and discover the best solution for your business.'
                }
              </p>

              {/* Quick Contact Methods */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 bg-white dark:bg-gray-800 rounded-2xl border border-sand-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-ink-900 dark:text-gray-100 mb-1">{method.title}</h3>
                      <p className="text-sm text-ink-600 dark:text-gray-300 mb-3">{method.description}</p>
                      <span className="text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors">
                        {method.action} →
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-sand-200 dark:border-gray-700 p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-ink-900 dark:text-gray-100 mb-2">
                  {locale === 'tr' ? 'Hemen İletişime Geçin' : 'Contact Us Now'}
                </h2>
                <p className="text-ink-600 dark:text-gray-300">
                  {locale === 'tr'
                    ? 'Formu doldurun, 24 saat içinde size geri dönelim.'
                    : 'Fill out the form and we\'ll get back to you within 24 hours.'
                  }
                </p>
              </div>
              <ContactFormTabs />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 dark:text-gray-100 mb-4 font-display">
              {locale === 'tr' ? 'Ofislerimiz' : 'Our Offices'}
            </h2>
            <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300">
              {locale === 'tr'
                ? 'Dünya çapında ekibimizle tanışın'
                : 'Meet our team around the world'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeInfo.map((office, index) => (
              <div key={index} className="bg-sand-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-sand-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-ink-900 dark:text-gray-100 mb-3">{office.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-ink-500 dark:text-gray-400 mt-0.5" />
                        <p className="text-ink-700 dark:text-gray-300 whitespace-pre-line">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-ink-500 dark:text-gray-400" />
                        <p className="text-ink-700 dark:text-gray-300">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

