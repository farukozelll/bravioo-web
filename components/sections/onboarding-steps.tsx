'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { 
  Calendar, 
  GraduationCap, 
  Rocket, 
  Headphones, 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight,
  Phone,
  Video,
  BookOpen,
  Settings
} from 'lucide-react';

const onboardingSteps = [
  {
    id: 1,
    title: 'Başlangıç Toplantısı',
    titleEn: 'Kickoff Meeting',
    description: 'Hedeflerinizi anlıyor, ihtiyaçlarınızı belirliyoruz. Sistem konfigürasyonu ve özelleştirmeler planlanıyor.',
    descriptionEn: 'We understand your goals and identify your needs. System configuration and customizations are planned.',
    icon: Calendar,
    duration: '1 gün',
    durationEn: '1 day',
    features: [
      'Ihtiyaç analizi toplantısı',
      'Hedef belirleme workshop\'u',
      'Özelleştirme planlaması',
      'Proje takvimi oluşturma'
    ],
    featuresEn: [
      'Needs analysis meeting',
      'Goal setting workshop',
      'Customization planning',
      'Project timeline creation'
    ],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
    darkBgColor: 'from-blue-900/20 to-indigo-900/20'
  },
  {
    id: 2,
    title: 'Admin Eğitimi',
    titleEn: 'Admin Training',
    description: 'Yönetici ekibinizi platforma hazırlıyoruz. Kapsamlı eğitimler ve praktik uygulamalarla sistem hakimiyeti kazanıyorsunuz.',
    descriptionEn: 'We prepare your management team for the platform. You gain system mastery with comprehensive training and practical applications.',
    icon: GraduationCap,
    duration: '2-3 gün',
    durationEn: '2-3 days',
    features: [
      'Admin paneli eğitimi',
      'Kullanıcı yönetimi workshop\'u',
      'Raporlama ve analitik eğitimi',
      'Entegrasyon setup\'ı'
    ],
    featuresEn: [
      'Admin panel training',
      'User management workshop',
      'Reporting and analytics training',
      'Integration setup'
    ],
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'from-emerald-50 to-teal-50',
    darkBgColor: 'from-emerald-900/20 to-teal-900/20'
  },
  {
    id: 3,
    title: 'Çalışan Lansmanı',
    titleEn: 'Employee Launch',
    description: 'Tüm ekibinizi platforma dahil ediyoruz. Etkili lansmanla yüksek katılım sağlıyor, kullanımı yaygınlaştırıyoruz.',
    descriptionEn: 'We involve your entire team in the platform. We ensure high participation and widespread adoption with an effective launch.',
    icon: Rocket,
    duration: '1 hafta',
    durationEn: '1 week',
    features: [
      'Çalışan bilgilendirme sunumları',
      'Mobil uygulama kurulum desteği',
      'İlk takdir kampanyası',
      'Kullanım istatistiklerini takip'
    ],
    featuresEn: [
      'Employee information presentations',
      'Mobile app installation support',
      'First recognition campaign',
      'Usage statistics tracking'
    ],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
    darkBgColor: 'from-purple-900/20 to-pink-900/20'
  },
  {
    id: 4,
    title: 'Daimi Destek',
    titleEn: 'Ongoing Support',
    description: 'Sürekli destek ve gelişim ile platformdan maksimum verim alıyorsunuz. 7/24 teknik destek ve stratejik danışmanlık.',
    descriptionEn: 'You get maximum efficiency from the platform with continuous support and development. 24/7 technical support and strategic consulting.',
    icon: Headphones,
    duration: 'Sürekli',
    durationEn: 'Ongoing',
    features: [
      '7/24 teknik destek',
      'Aylık performans raporları',
      'Stratejik optimizasyon önerileri',
      'Güncelleme ve yeni özellik bildirimleri'
    ],
    featuresEn: [
      '24/7 technical support',
      'Monthly performance reports',
      'Strategic optimization recommendations',
      'Updates and new feature notifications'
    ],
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
    darkBgColor: 'from-orange-900/20 to-red-900/20'
  }
];

export function OnboardingSteps() {
  const locale = useLocale();
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const currentStep = onboardingSteps.find(step => step.id === activeStep);

  return (
    <section className="py-24 bg-neutral-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
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
            {locale === 'tr' ? 'Onboarding Süreci' : 'Onboarding Process'}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-6 font-display">
            {locale === 'tr' ? 'Başarıya ' : 'Your Path to '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Giden Yol' : 'Success'}
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
            {locale === 'tr'
              ? '4 adımda Bravioo\'yu organizasyonunuza entegre ediyoruz. Her adımda uzman ekibimiz yanınızda.'
              : 'We integrate Bravioo into your organization in 4 steps. Our expert team is with you at every step.'
            }
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
            {onboardingSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isHovered = hoveredStep === step.id;
              
              return (
                <motion.div
                  key={step.id}
                  className="flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Step Card */}
                  <motion.button
                    onClick={() => setActiveStep(step.id)}
                    onHoverStart={() => setHoveredStep(step.id)}
                    onHoverEnd={() => setHoveredStep(null)}
                    className={`group relative flex flex-col lg:flex-row items-center gap-4 p-6 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-primary-200 dark:border-primary-600' 
                        : 'bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg border border-neutral-200 dark:border-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4">
                      <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive || isHovered
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                          : 'bg-neutral-100 dark:bg-gray-700 text-neutral-600 dark:text-gray-400'
                      }`}>
                        <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary-500 text-white' 
                            : 'bg-neutral-300 dark:bg-gray-600 text-neutral-600 dark:text-gray-400'
                        }`}>
                          {step.id}
                        </span>
                        <Icon className="h-8 w-8" />
                      </div>
                      
                      <div className="text-left">
                        <h3 className={`font-bold text-lg transition-colors duration-300 ${
                          isActive 
                            ? 'text-neutral-900 dark:text-gray-100' 
                            : 'text-neutral-700 dark:text-gray-300'
                        }`}>
                          {locale === 'tr' ? step.title : step.titleEn}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-gray-500">
                          <Clock className="h-4 w-4" />
                          {locale === 'tr' ? step.duration : step.durationEn}
                        </div>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Connector Line */}
                  {index < onboardingSteps.length - 1 && (
                    <div className="hidden lg:block w-16 h-px bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 mx-4"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details */}
        {currentStep && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              {/* Left - Step Visualization */}
              <div className="lg:col-span-5">
                <motion.div
                  className={`relative h-96 rounded-3xl p-8 bg-gradient-to-br ${currentStep.bgColor} dark:${currentStep.darkBgColor} border border-neutral-200 dark:border-gray-700`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${currentStep.color} rounded-3xl`}></div>
                  </div>

                  {/* Main Icon */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <motion.div
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${currentStep.color} text-white flex items-center justify-center mb-6 shadow-2xl`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {React.createElement(currentStep.icon, { className: "h-12 w-12" })}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-gray-100 mb-2 text-center">
                      {locale === 'tr' ? currentStep.title : currentStep.titleEn}
                    </h3>

                    <div className="flex items-center gap-2 text-neutral-600 dark:text-gray-400">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">
                        {locale === 'tr' ? currentStep.duration : currentStep.durationEn}
                      </span>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute top-6 right-6 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Users className="h-6 w-6 text-primary-600" />
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-6 left-6 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right - Step Content */}
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-gray-100 mb-6">
                    {locale === 'tr' ? currentStep.title : currentStep.titleEn}
                  </h4>
                  
                  <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed mb-8">
                    {locale === 'tr' ? currentStep.description : currentStep.descriptionEn}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-neutral-900 dark:text-gray-100 mb-4">
                      {locale === 'tr' ? 'Bu Adımda Neler Yapıyoruz:' : 'What We Do in This Step:'}
                    </h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(locale === 'tr' ? currentStep.features : currentStep.featuresEn).map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-neutral-200 dark:border-gray-700"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-neutral-700 dark:text-gray-300 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Options */}
                  <motion.div
                    className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h6 className="font-semibold text-neutral-900 dark:text-gray-100 mb-4">
                      {locale === 'tr' ? 'Bu Adım İçin Destek Seçenekleri:' : 'Support Options for This Step:'}
                    </h6>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-neutral-200 dark:border-gray-700">
                        <Video className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-300">
                          {locale === 'tr' ? 'Video Görüşme' : 'Video Call'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-neutral-200 dark:border-gray-700">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-300">
                          {locale === 'tr' ? 'Telefon Desteği' : 'Phone Support'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-neutral-200 dark:border-gray-700">
                        <BookOpen className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-300">
                          {locale === 'tr' ? 'Doküman Desteği' : 'Documentation'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Bottom Navigation */}
        <motion.div 
          className="flex items-center justify-between mt-16 pt-8 border-t border-neutral-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeStep === 1
                ? 'bg-neutral-100 dark:bg-gray-800 text-neutral-400 dark:text-gray-600 cursor-not-allowed'
                : 'bg-white dark:bg-gray-800 text-neutral-700 dark:text-gray-300 hover:bg-neutral-50 dark:hover:bg-gray-700 border border-neutral-200 dark:border-gray-700'
            }`}
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            {locale === 'tr' ? 'Önceki Adım' : 'Previous Step'}
          </button>

          <div className="text-center">
            <div className="text-sm text-neutral-500 dark:text-gray-500 mb-1">
              {locale === 'tr' ? `Adım ${activeStep} / ${onboardingSteps.length}` : `Step ${activeStep} of ${onboardingSteps.length}`}
            </div>
            <div className="w-32 h-2 bg-neutral-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(activeStep / onboardingSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <button
            onClick={() => setActiveStep(Math.min(onboardingSteps.length, activeStep + 1))}
            disabled={activeStep === onboardingSteps.length}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeStep === onboardingSteps.length
                ? 'bg-neutral-100 dark:bg-gray-800 text-neutral-400 dark:text-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg'
            }`}
          >
            {locale === 'tr' ? 'Sonraki Adım' : 'Next Step'}
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
