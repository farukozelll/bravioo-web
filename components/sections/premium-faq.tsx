'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const faqData = [
  {
    id: 1,
    question: 'Bravioo\'yu kurmak ne kadar sürer?',
    questionEn: 'How long does it take to set up Bravioo?',
    answer: 'Bravioo kurulumu oldukça hızlıdır. Temel kurulum 5-10 dakika içinde tamamlanır. Özelleştirmeler ve entegrasyonlarla birlikte tam operasyonel hale gelme süresi genellikle 1-2 gün arasındadır. Müşteri başarı ekibimiz bu süreçte size eşlik eder.',
    answerEn: 'Bravioo setup is quite fast. Basic setup is completed within 5-10 minutes. With customizations and integrations, the time to become fully operational is usually 1-2 days. Our customer success team will accompany you throughout this process.',
    icon: Zap
  },
  {
    id: 2,
    question: 'Bravioo hangi sistemlerle entegre olabilir?',
    questionEn: 'Which systems can Bravioo integrate with?',
    answer: 'Bravioo, Slack, Microsoft Teams, Google Workspace, Zoom, BambooHR, Workday, SAP SuccessFactors, ADP ve 50+ popüler iş uygulamasıyla entegre olabilir. Ayrıca REST API\'miz sayesinde özel entegrasyonlar da mümkündür.',
    answerEn: 'Bravioo can integrate with Slack, Microsoft Teams, Google Workspace, Zoom, BambooHR, Workday, SAP SuccessFactors, ADP, and 50+ popular business applications. Custom integrations are also possible through our REST API.',
    icon: MessageCircle
  },
  {
    id: 3,
    question: 'Veri güvenliği nasıl sağlanıyor?',
    questionEn: 'How is data security ensured?',
    answer: 'Bravioo, SOC 2 Type II, ISO 27001 ve GDPR uyumluluğuna sahiptir. Tüm veriler AES-256 şifreleme ile korunur, düzenli güvenlik denetimleri yapılır ve veriler sadece size aittir. Hiçbir üçüncü tarafla paylaşılmaz.',
    answerEn: 'Bravioo has SOC 2 Type II, ISO 27001, and GDPR compliance. All data is protected with AES-256 encryption, regular security audits are conducted, and data belongs only to you. It is never shared with third parties.',
    icon: Shield
  },
  {
    id: 4,
    question: 'Ödül marketplace\'i nasıl çalışıyor?',
    questionEn: 'How does the rewards marketplace work?',
    answer: 'Global ödül marketplace\'imizde Tüm Türkiyede milyonlarca ödül seçeneği bulunur. Çalışanlar kazandıkları puanları Amazon, Starbucks, yerel restoranlar, deneyimler veya bağışlar için kullanabilir. Hiçbir mark-up ücreti yoktur.',
    answerEn: 'Our global rewards marketplace offers millions of reward options in 190+ countries. Employees can use their earned points for Amazon, Starbucks, local restaurants, experiences, or donations. There are no mark-up fees.',
    icon: HelpCircle
  },
  {
    id: 5,
    question: 'Mobil uygulama mevcut mu?',
    questionEn: 'Is there a mobile app available?',
    answer: 'Evet! iOS ve Android için native mobil uygulamalarımız mevcuttur. Çalışanlar hareket halindeyken takdir gönderebilir, bildirimleri alabilir ve ödüllerini yönetebilirler. Uygulamalar App Store ve Google Play\'de 4.8+ puana sahiptir.',
    answerEn: 'Yes! We have native mobile apps for iOS and Android. Employees can send recognition on the go, receive notifications, and manage their rewards. The apps have 4.8+ ratings on App Store and Google Play.',
    icon: Phone
  },
  {
    id: 6,
    question: 'Destek hizmeti nasıl çalışıyor?',
    questionEn: 'How does customer support work?',
    answer: '7/24 canlı destek, e-posta, telefon ve video görüşme seçenekleri sunuyoruz. Özel müşteri başarı uzmanınız ve kapsamlı dokümantasyon ile hiçbir zaman yalnız kalmazsınız. Ortalama yanıt süremiz 2 dakikadan azdır.',
    answerEn: 'We offer 24/7 live support, email, phone, and video call options. With your dedicated customer success specialist and comprehensive documentation, you\'re never alone. Our average response time is less than 2 minutes.',
    icon: MessageCircle
  },
  {
    id: 7,
    question: 'Fiyatlandırma nasıl çalışıyor?',
    questionEn: 'How does pricing work?',
    answer: 'Kullanıcı başına aylık abonelik modelimiz vardır. Kurulum ücreti yoktur, istediğiniz zaman iptal edebilirsiniz. Ödül bütçenizi kendiniz belirlersiniz ve sadece kullandığınız ödüller için ödeme yaparsınız.',
    answerEn: 'We have a monthly subscription model per user. There are no setup fees, and you can cancel anytime. You set your own reward budget and only pay for the rewards you use.',
    icon: HelpCircle
  },
  {
    id: 8,
    question: 'ROI\'yi nasıl ölçebilirim?',
    questionEn: 'How can I measure ROI?',
    answer: 'Gelişmiş analitik panelimizdeki çalışan bağlılığı, turnover oranları, takdir sıklığı ve ekip performansı metrikleriyle ROI\'yi kolayca ölçebilirsiniz. Çoğu müşterimiz ilk 6 ay içinde %200+ ROI görür.',
    answerEn: 'You can easily measure ROI with employee engagement, turnover rates, recognition frequency, and team performance metrics in our advanced analytics panel. Most of our customers see 200%+ ROI within the first 6 months.',
    icon: HelpCircle
  }
];

export function PremiumFAQ() {
  const locale = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Default first question open

  const toggleFaq = (faqId: number) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <section className="py-24 bg-neutral-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - F-Pattern: Left-aligned */}
        <motion.div 
          className="text-left mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-6 font-display">
            {locale === 'tr' ? 'Hızlı ' : 'Quick '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Yanıtlar' : 'Answers'}
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
            {locale === 'tr'
              ? 'En çok merak edilen soruların yanıtlarını burada bulabilirsiniz. Daha detaylı bilgi için destek ekibimizle iletişime geçebilirsiniz.'
              : 'Find answers to the most frequently asked questions here. For more detailed information, you can contact our support team.'
            }
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left - Hero Image & Support Info */}
          <div className="lg:col-span-5">
            <motion.div
              className="sticky top-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Main FAQ Illustration */}
              <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/faq.png"
                  alt={locale === 'tr' ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  unoptimized
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-600/40 to-transparent"></div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <HelpCircle className="h-8 w-8 text-primary-600" />
                </motion.div>

                <motion.div 
                  className="absolute top-6 right-6 bg-secondary-500 text-white rounded-2xl px-4 py-2 font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  7/24
                </motion.div>

                {/* Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-5 w-5 text-primary-600" />
                      <span className="font-semibold text-neutral-900 dark:text-gray-100">
                        {locale === 'tr' ? 'Uzman Destek Ekibi' : 'Expert Support Team'}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-gray-400">
                      {locale === 'tr' ? 'Ortalama 2 dakika yanıt süresi' : 'Average 2-minute response time'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <motion.div
                className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {locale === 'tr' ? 'Yanıt Bulamadınız mı?' : "Can't Find an Answer?"}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {locale === 'tr'
                      ? 'Uzman ekibimiz size yardımcı olmaya hazır. 7/24 canlı destek ile anında yanıt alın.'
                      : 'Our expert team is ready to help you. Get instant answers with 24/7 live support.'
                    }
                  </p>
                </div>

                {/* Contact Options */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white text-primary-600 hover:bg-white/90 rounded-2xl py-3 font-semibold flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {locale === 'tr' ? 'Canlı Sohbet Başlat' : 'Start Live Chat'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl py-3 font-semibold flex items-center justify-center gap-3"
                  >
                    <Phone className="h-5 w-5" />
                    {locale === 'tr' ? 'Telefon Desteği' : 'Phone Support'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl py-3 font-semibold flex items-center justify-center gap-3"
                  >
                    <Mail className="h-5 w-5" />
                    {locale === 'tr' ? 'E-posta Gönder' : 'Send Email'}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - FAQ List */}
          <div className="lg:col-span-7">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {faqData.map((faq, index) => {
                const Icon = faq.icon;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-6 flex items-start gap-4 hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                  
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-neutral-900 dark:text-gray-100 pr-4 leading-tight">
                          {locale === 'tr' ? faq.question : faq.questionEn}
                        </h3>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${
                          openFaq === faq.id 
                            ? 'text-primary-600' 
                            : 'text-neutral-500 dark:text-gray-400'
                        }`} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openFaq === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-22">
                            <p className="text-neutral-600 dark:text-gray-300 leading-relaxed">
                              {locale === 'tr' ? faq.answer : faq.answerEn}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}