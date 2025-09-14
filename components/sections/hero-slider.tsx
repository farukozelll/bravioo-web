'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BarChart3, Gift, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSlider() {
  const locale = useLocale();

  const heroSlides = [
    {
      id: 'recognition',
      title: locale === 'tr' ? 'Çalışan Takdiri Yeniden Tanımlayın' : 'Redefine Employee Recognition',
      subtitle: locale === 'tr' ? 'Peer-to-Peer Takdir' : 'Peer-to-Peer Recognition',
      description: locale === 'tr' 
        ? 'Çalışanlarınızın birbirlerini takdir etmesini sağlayın. Anlamlı, kişiselleştirilmiş takdir deneyimi ile ekip motivasyonunu artırın.'
        : 'Enable your employees to recognize each other. Boost team motivation with meaningful, personalized recognition experiences.',
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
                {locale === 'tr' ? 'Peer-to-Peer Takdir' : 'Peer-to-Peer Recognition'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
                {locale === 'tr' ? 'Çalışan Takdiri' : 'Employee Recognition'}{' '}
                <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                  {locale === 'tr' ? 'Yeniden Tanımlayın' : 'Redefined'}
                </span>
              </h1>
              <p className="text-xl text-ink-600 mb-8 leading-relaxed">
                {locale === 'tr'
                  ? 'Çalışanlarınızın birbirlerini takdir etmesini sağlayın. Anlamlı, kişiselleştirilmiş takdir deneyimi ile ekip motivasyonunu artırın.'
                  : 'Enable your employees to recognize each other. Boost team motivation with meaningful, personalized recognition experiences.'
                }
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white rounded-full px-8"
              >
                {locale === 'tr' ? 'Ücretsiz Demo' : 'Free Demo'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-200 text-brand-700 hover:bg-brand-50 rounded-full px-8"
              >
                {locale === 'tr' ? 'Nasıl Çalışır?' : 'How It Works?'}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="relative h-96 bg-gradient-to-br from-brand-500 to-emerald-600 rounded-3xl p-8 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'tr' ? 'Takdir Sistemi' : 'Recognition System'}
                  </h3>
                  <p className="text-white/80">
                    {locale === 'tr' ? 'Peer-to-peer takdir' : 'Peer-to-peer recognition'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'rewards',
      title: locale === 'tr' ? 'Global Ödül Kataloğu' : 'Global Rewards Catalog',
      subtitle: locale === 'tr' ? 'Dünya Çapında Ödüller' : 'Worldwide Rewards',
      description: locale === 'tr'
        ? '190+ ülkede milyonlarca ödül seçeneği. Çalışanlarınızın tercihlerine uygun, yerel ve kişiselleştirilmiş ödüller.'
        : 'Millions of reward options in 190+ countries. Local and personalized rewards that match your employees\' preferences.',
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                {locale === 'tr' ? 'Dünya Çapında Ödüller' : 'Worldwide Rewards'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
                {locale === 'tr' ? 'Global Ödül' : 'Global Rewards'}{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {locale === 'tr' ? 'Kataloğu' : 'Catalog'}
                </span>
              </h1>
              <p className="text-xl text-ink-600 mb-8 leading-relaxed">
                {locale === 'tr'
                  ? '190+ ülkede milyonlarca ödül seçeneği. Çalışanlarınızın tercihlerine uygun, yerel ve kişiselleştirilmiş ödüller.'
                  : 'Millions of reward options in 190+ countries. Local and personalized rewards that match your employees\' preferences.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">190+</div>
                <div className="text-sm text-ink-600">{locale === 'tr' ? 'Ülke' : 'Countries'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">1M+</div>
                <div className="text-sm text-ink-600">{locale === 'tr' ? 'Ödül' : 'Rewards'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">0%</div>
                <div className="text-sm text-ink-600">{locale === 'tr' ? 'Komisyon' : 'Markup'}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full px-8"
              >
                {locale === 'tr' ? 'Ödülleri Keşfet' : 'Explore Rewards'}
                <Gift className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="relative h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Gift className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'tr' ? 'Ödül Kataloğu' : 'Rewards Catalog'}
                  </h3>
                  <p className="text-white/80">
                    {locale === 'tr' ? 'Milyonlarca seçenek' : 'Millions of options'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      title: locale === 'tr' ? 'Gelişmiş Analitik ve Raporlama' : 'Advanced Analytics & Reporting',
      subtitle: locale === 'tr' ? 'AI Destekli İçgörüler' : 'AI-Powered Insights',
      description: locale === 'tr'
        ? 'Çalışan deneyimini ölçün, analiz edin ve sürekli iyileştirin. Gerçek zamanlı dashboard\'lar ve akıllı öneriler.'
        : 'Measure, analyze and continuously improve employee experience. Real-time dashboards and intelligent recommendations.',
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                {locale === 'tr' ? 'AI Destekli İçgörüler' : 'AI-Powered Insights'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
                {locale === 'tr' ? 'Gelişmiş' : 'Advanced'}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {locale === 'tr' ? 'Analitik' : 'Analytics'}
                </span>
              </h1>
              <p className="text-xl text-ink-600 mb-8 leading-relaxed">
                {locale === 'tr'
                  ? 'Çalışan deneyimini ölçün, analiz edin ve sürekli iyileştirin. Gerçek zamanlı dashboard\'lar ve akıllı öneriler.'
                  : 'Measure, analyze and continuously improve employee experience. Real-time dashboards and intelligent recommendations.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-4">
                <BarChart3 className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-ink-900 mb-2">
                  {locale === 'tr' ? 'Gerçek Zamanlı' : 'Real-time'}
                </h3>
                <p className="text-sm text-ink-600">
                  {locale === 'tr' ? 'Anlık raporlar' : 'Instant reports'}
                </p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4">
                <Zap className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-ink-900 mb-2">
                  {locale === 'tr' ? 'AI Önerileri' : 'AI Suggestions'}
                </h3>
                <p className="text-sm text-ink-600">
                  {locale === 'tr' ? 'Akıllı içgörüler' : 'Smart insights'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-8"
              >
                {locale === 'tr' ? 'Dashboard\'ı Gör' : 'View Dashboard'}
                <BarChart3 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="relative h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'tr' ? 'Analitik Dashboard' : 'Analytics Dashboard'}
                  </h3>
                  <p className="text-white/80">
                    {locale === 'tr' ? 'AI destekli raporlar' : 'AI-powered reports'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative min-h-screen">
      <Slider
        items={heroSlides}
        autoPlay={true}
        autoPlayInterval={8000}
        showControls={true}
        showIndicators={true}
        className="h-screen"
        itemClassName="px-6 lg:px-8 flex items-center"
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-brand-50/20 -z-10">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-radial from-brand-300/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-radial from-gold-300/40 to-transparent rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}

