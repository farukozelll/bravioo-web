'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Accordion } from '@/components/ui/accordion';
import { HelpCircle, Shield, Clock, Users, Zap } from 'lucide-react';

export function FAQSection() {
  const locale = useLocale();

  const faqItems = [
    {
      id: 'setup-time',
      question: locale === 'tr' 
        ? 'Bravioo\'yu kurmak ne kadar sürer?' 
        : 'How long does it take to set up Bravioo?',
      answer: locale === 'tr'
        ? 'Ortalama kurulum süresi 1-2 haftadır. Ekibimiz tüm süreçte yanınızda olur ve özel eğitimler düzenler. Küçük şirketler için kurulum 3-5 gün sürebilir, büyük kurumsal yapılar için 2-4 hafta sürebilir.'
        : 'Average setup time is 1-2 weeks. Our team will be with you throughout the process and provide custom training. For small companies, setup can take 3-5 days, while larger enterprise structures may take 2-4 weeks.'
    },
    {
      id: 'integrations',
      question: locale === 'tr' 
        ? 'Hangi sistemlerle entegrasyon yapabiliyorsunuz?' 
        : 'What systems can you integrate with?',
      answer: locale === 'tr'
        ? 'Slack, Microsoft Teams, SAP, Workday, BambooHR, ADP, Oracle HCM ve 50+ platformla entegrasyon desteği sunuyoruz. REST API\'miz sayesinde özel entegrasyonlar da geliştirebiliriz.'
        : 'We support integration with Slack, Microsoft Teams, SAP, Workday, BambooHR, ADP, Oracle HCM and 50+ platforms. We can also develop custom integrations through our REST API.'
    },
    {
      id: 'security',
      question: locale === 'tr' 
        ? 'Veri güvenliği nasıl sağlanıyor?' 
        : 'How is data security ensured?',
      answer: locale === 'tr'
        ? 'ISO 27001, SOC 2 Type II sertifikalarımız var. Verileriniz 256-bit SSL şifreleme ile korunur, GDPR ve KVKK uyumludur. Tüm veriler Türkiye ve AB sunucularında saklanır.'
        : 'We have ISO 27001, SOC 2 Type II certifications. Your data is protected with 256-bit SSL encryption, GDPR and KVKK compliant. All data is stored on Turkey and EU servers.'
    },
    {
      id: 'pricing',
      question: locale === 'tr' 
        ? 'Fiyatlandırma nasıl çalışıyor?' 
        : 'How does pricing work?',
      answer: locale === 'tr'
        ? 'Çalışan sayısına göre aylık abonelik modeli kullanıyoruz. 50 çalışana kadar ücretsiz, sonrasında çalışan başına aylık ücretlendirme. Yıllık ödemelerde %20 indirim sunuyoruz.'
        : 'We use a monthly subscription model based on employee count. Free for up to 50 employees, then monthly pricing per employee. We offer 20% discount for annual payments.'
    },
    {
      id: 'support',
      question: locale === 'tr' 
        ? 'Hangi destek seçenekleri mevcut?' 
        : 'What support options are available?',
      answer: locale === 'tr'
        ? '7/24 canlı sohbet, e-posta desteği, telefon desteği (iş saatleri), video eğitimler ve özel onboarding programı sunuyoruz. Enterprise müşteriler için özel hesap yöneticisi atanır.'
        : 'We offer 24/7 live chat, email support, phone support (business hours), video training and custom onboarding program. Enterprise customers get a dedicated account manager.'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: locale === 'tr' ? 'Hızlı Kurulum' : 'Quick Setup',
      description: locale === 'tr' ? '1-2 hafta içinde hazır' : 'Ready in 1-2 weeks'
    },
    {
      icon: Shield,
      title: locale === 'tr' ? 'Güvenli' : 'Secure',
      description: locale === 'tr' ? 'ISO 27001 sertifikalı' : 'ISO 27001 certified'
    },
    {
      icon: Users,
      title: locale === 'tr' ? 'Sınırsız Kullanıcı' : 'Unlimited Users',
      description: locale === 'tr' ? 'Tüm çalışanlarınız için' : 'For all your employees'
    },
    {
      icon: Zap,
      title: locale === 'tr' ? 'Kolay Entegrasyon' : 'Easy Integration',
      description: locale === 'tr' ? '50+ platform desteği' : '50+ platform support'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sand-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 dark:text-gray-100 mb-6 font-display">
            {locale === 'tr' ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
          </h2>
          
          <p className="text-xl text-ink-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {locale === 'tr'
              ? 'Bravioo hakkında en çok merak edilen konuları derledik. Sorunuzun cevabını bulamadıysanız bizimle iletişime geçin.'
              : 'We\'ve compiled the most frequently asked questions about Bravioo. If you can\'t find the answer to your question, please contact us.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Features */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-ink-900 dark:text-gray-100 mb-8 font-display">
                {locale === 'tr' ? 'Neden Bravioo?' : 'Why Bravioo?'}
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ink-900 dark:text-gray-100 mb-1">{feature.title}</h4>
                        <p className="text-sm text-ink-600 dark:text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-2xl text-white">
                <h4 className="font-semibold mb-2">
                  {locale === 'tr' ? 'Başka sorularınız mı var?' : 'Have other questions?'}
                </h4>
                <p className="text-sm mb-4 text-white/90">
                  {locale === 'tr'
                    ? 'Uzmanlarımızla konuşun ve tüm sorularınızın yanıtını alın.'
                    : 'Talk to our experts and get answers to all your questions.'
                  }
                </p>
                <button className="bg-white text-brand-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60">
                  {locale === 'tr' ? 'İletişime Geç' : 'Contact Us'}
                </button>
              </div>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
