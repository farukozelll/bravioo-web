'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Zap,
  Users,
  Award,
  BarChart3,
  ArrowRight,
  Play,
  Download,
  Globe,
  CheckCircle,
  Star,
  Heart
} from 'lucide-react';
import Link from 'next/link';

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

const appFeatures = [
  {
    title: 'Mobil Erişim',
    description: 'İstediğiniz yerden, istediğiniz zaman erişim',
    icon: Smartphone
  },
  {
    title: 'Anlık Bildirimler',
    description: 'Önemli güncellemelerden haberdar olun',
    icon: Zap
  },
  {
    title: 'Çevrimdışı Destek',
    description: 'İnternet bağlantısı olmadan da çalışır',
    icon: Globe
  }
];

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-sand-50 overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
            Sadece{' '}
            <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
              4 Adımda
            </span>{' '}
            Başlayın
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            Bravioo ile çalışan deneyiminizi dönüştürmek hiç bu kadar kolay olmamıştı. 
            Kurulumdan sonuçlara kadar tüm süreç.
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-20">
          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`
                      flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300
                      ${index === activeStep 
                        ? 'bg-gradient-to-r from-brand-500 to-emerald-600 text-white shadow-lg' 
                        : 'text-ink-600 hover:bg-white/50'
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
                      <h3 className="text-3xl font-bold text-ink-900">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-ink-600 mb-8 leading-relaxed">
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
                        <span className="text-ink-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 rounded-full px-8"
                  >
                    Demo İzle
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-brand-200 text-brand-700 hover:bg-brand-50 rounded-full px-8"
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
                <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${steps[activeStep].color} p-8 overflow-hidden`}>
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
                      <h4 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h4>
                      <p className="text-white/80">Mockup - {steps[activeStep].mockup}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile App Section */}
        <motion.div 
          className="bg-gradient-to-r from-ink-900 to-ink-800 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Mobil Uygulamamızı{' '}
                <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
                  İndirin
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Bravioo mobil uygulaması ile çalışanlarınızla her zaman, her yerden bağlantıda kalın. 
                iOS ve Android'de mevcut.
              </p>

              {/* App Features */}
              <div className="grid gap-4 mb-8">
                {appFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
                      onHoverStart={() => setHoveredFeature(index)}
                      onHoverEnd={() => setHoveredFeature(null)}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 flex items-center justify-center transition-transform ${hoveredFeature === index ? 'scale-110' : ''}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://apps.apple.com/app/bravioo" 
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl px-6 py-4 transition-all group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm">📱</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>

                <Link 
                  href="https://play.google.com/store/apps/details?id=com.bravioo" 
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl px-6 py-4 transition-all group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm">🤖</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Phone Mockup */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-brand-500 to-emerald-600 rounded-2xl p-6 relative overflow-hidden">
                    {/* Screen Content */}
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Bravioo Mobile</h4>
                      <p className="text-white/80 text-sm mb-6">Her yerden erişim</p>
                      
                      {/* Mock UI Elements */}
                      <div className="space-y-3">
                        <div className="h-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 bg-white/30 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-2 bg-white/20 rounded-full w-1/2 mx-auto"></div>
                      </div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
                      }}
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="h-6 w-6 text-yellow-900" />
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Heart className="h-5 w-5 text-pink-900" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
