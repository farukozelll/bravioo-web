'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  Users,
  Award,
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle,
  Heart
} from 'lucide-react';

const steps = [
  {
    id: 'connect',
    title: 'Bağlan',
    description: 'Ekibinizi platformumuza kolayca entegre edin',
    icon: Users,
    color: 'from-brand-500 to-emerald-600',
    features: [
      'Hızlı kurulum (5 dakika)',
      'Mevcut sistemlerle entegrasyon',
      'Kullanıcı dostu arayüz',
      'Mobil ve web erişim'
    ],
    mockup: 'connect'
  },
  {
    id: 'recognize',
    title: 'Tanı',
    description: 'Çalışanlarınızı anında tanıyın ve ödüllendirin',
    icon: Award,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Anlık tanıma sistemi',
      'Özelleştirilebilir ödüller',
      'Sosyal tanıma akışı',
      'Otomatik bildirimler'
    ],
    mockup: 'recognize'
  },
  {
    id: 'engage',
    title: 'Etkileşim',
    description: 'Ekip motivasyonunu artırın ve kültürü güçlendirin',
    icon: Heart,
    color: 'from-orange-500 to-red-600',
    features: [
      'Gerçek zamanlı etkileşim',
      'Takım yarışmaları',
      'Sosyal özellikler',
      'Kişiselleştirilmiş deneyim'
    ],
    mockup: 'engage'
  },
  {
    id: 'analyze',
    title: 'Analiz Et',
    description: 'Detaylı raporlarla performansı takip edin',
    icon: BarChart3,
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Kapsamlı analitik',
      'ROI hesaplamaları',
      'Trend analizleri',
      'Özelleştirilebilir raporlar'
    ],
    mockup: 'analyze'
  }
];

// Removed unused appFeatures config

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-brand-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            How It Works
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-gray-100 mb-6 font-display">
            Sadece{' '}
            <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
              4 Adımda
            </span>{' '}
            Başlayın
          </h2>
          <p className="text-xl text-ink-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bravioo ile çalışan deneyiminizi dönüştürmek hiç bu kadar kolay olmamıştı. 
            Kurulumdan sonuçlara kadar tüm süreç.
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-20">
          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 md:gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20 dark:border-gray-700/20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`
                      flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300
                      ${index === activeStep 
                        ? 'bg-gradient-to-r from-brand-500 to-emerald-600 text-white shadow-lg' 
                        : 'text-ink-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 ${index === activeStep ? 'text-white' : 'text-brand-600'}`} />
                    <span className="font-semibold hidden md:block">{step.title}</span>
                    <span className="font-semibold md:hidden">{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center`}>
                      {React.createElement(steps[activeStep].icon, { 
                        className: "h-8 w-8 text-white" 
                      })}
                    </div>
                    <div>
                      <div className="text-sm text-brand-600 font-semibold">
                        Adım {activeStep + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-ink-900 dark:text-gray-100">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <ul className="space-y-4">
                    {steps[activeStep].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0" />
                        <span className="text-ink-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 rounded-full px-8"
                  >
                    Demo İzle
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-brand-200 dark:border-brand-600 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/20 rounded-full px-8"
                  >
                    Daha Fazla Bilgi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Visual Mockup */}
              <motion.div 
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className={`relative h-80 md:h-96 rounded-3xl bg-gradient-to-br ${steps[activeStep].color} p-6 md:p-8 overflow-hidden`}>
                  {/* Mockup Content */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        {React.createElement(steps[activeStep].icon, { 
                          className: "h-12 w-12 text-white" 
                        })}
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2">{steps[activeStep].title}</h4>
                      <p className="text-white/80">Mockup - {steps[activeStep].mockup}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
