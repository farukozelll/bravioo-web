'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  ArrowRight, 
  Play, 
  Users, 
  Award, 
  BarChart3, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle,
  Sparkles,
  Gift,
  Zap
} from 'lucide-react';

export function EnhancedHero() {
  const locale = useLocale();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      icon: Users,
      title: locale === 'tr' ? 'Peer-to-Peer Takdir' : 'Peer-to-Peer Recognition',
      description: locale === 'tr' ? 'Çalışanlar birbirini takdir ediyor ve güçlü takım bağları oluşturuyor' : 'Employees recognize each other and build stronger team bonds',
      color: 'from-brand-500 to-emerald-600'
    },
    {
      icon: Award,
      title: locale === 'tr' ? 'Global Ödüller' : 'Global Rewards',
      description: locale === 'tr' ? 'Tüm Türkiyede milyonlarca ödül seçeneği ile motivasyonu artırın' : 'Boost motivation with millions of reward options in 190+ countries',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: locale === 'tr' ? 'AI Analitik' : 'AI Analytics',
      description: locale === 'tr' ? 'Yapay zeka destekli raporlar ve akıllı önerilerle veri odaklı kararlar alın' : 'Make data-driven decisions with AI-powered reports and smart recommendations',
      color: 'from-blue-500 to-indigo-600'
    }
  ];



  const trustBadges = [
    {
      icon: Shield,
      text: 'ISO 27001',
      color: 'text-green-600'
    },
    {
      icon: Star,
      text: 'SOC 2 Type II',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      text: 'GDPR Compliant',
      color: 'text-purple-600'
    }
  ];



  // Auto-rotate features with visibility control
  useEffect(() => {
    if (shouldReduceMotion || !isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000); // Increased to 4s for better UX
    return () => clearInterval(interval);
  }, [features.length, shouldReduceMotion, isVisible]);

  // Handle visibility change to pause animations when tab is not active
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);


  return (
    <section className="relative md:min-h-[40vh] lg:min-h-[40vh] bg-neutral-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single gradient blob for subtle background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-100/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-8 md:py-12 lg:py-16">
          {/* Left Content - F-Pattern Aligned */}
          <motion.div 
            className="lg:col-span-7 space-y-5 md:space-y-6 lg:space-y-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-400/20 dark:to-secondary-400/20 border border-primary-200 dark:border-primary-600 rounded-full"
            >
              <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                {locale === 'tr' 
                  ? '🎉 2025\'ün En İyi HR Tech Ürünü Seçildik!'
                  : '🎉 Winner of Best HR Tech Product 2025!'
                }
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-4 lg:mb-6 font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {locale === 'tr' 
                  ? <>Çalışan Motivasyonunu <span className="bg-gradient-to-r from-primary-600 via-primary-600 to-secondary-600 bg-clip-text text-transparent">%450 Artırın</span></>
                  : <>Increase Employee Motivation by <span className="bg-gradient-to-r from-primary-600 via-primary-600 to-secondary-600 bg-clip-text text-transparent">450%</span></>
                }
              </motion.h1>

              <motion.p 
                className="text-base md:text-lg lg:text-xl text-neutral-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {locale === 'tr'
                  ? 'Peer-to-peer takdir sistemi, Tüm Türkiyede ödül seçenekleri ve AI destekli performans analitiği ile 30 gün içinde sonuç alın.'
                  : 'Get results in 30 days with peer-to-peer recognition, rewards in 190+ countries, and AI-powered performance analytics.'
                }
              </motion.p>

            </div>

            {/* Action Buttons - F-Pattern: Left-aligned on desktop, full-width on mobile */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                {locale === 'tr' ? 'Ücretsiz Demo Başlat' : 'Start Free Demo'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neutral-200 dark:border-gray-600 text-neutral-700 dark:text-gray-300 hover:bg-neutral-50 dark:hover:bg-gray-800 rounded-2xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {locale === 'tr' ? 'Videoyu İzle' : 'Watch Video'}
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${badge.color}`} />
                    <span className="text-sm font-medium text-neutral-600 dark:text-gray-400">{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>

 
          </motion.div>

          {/* Right Visual Content */}
          <motion.div 
            className="lg:col-span-5 relative order-first lg:order-last"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {/* Phone Mockup Container */}
            <div className="relative flex items-center justify-center mb-4 lg:mb-6">
              <motion.div 
                className="relative max-w-sm mx-auto"
                animate={{ 
                  y: shouldReduceMotion ? 0 : [0, -10, 0],
                  rotate: shouldReduceMotion ? 0 : [0, 1, -1, 0]
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Phone Shadow */}
                <div className="absolute inset-0 bg-neutral-900/20 dark:bg-black/40 rounded-[3rem] blur-xl transform translate-y-4 scale-95" />
                
                {/* Phone Frame */}
                <div className="relative bg-neutral-900 dark:bg-neutral-800 rounded-[3rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white dark:bg-neutral-50 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative min-h-[400px]">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 dark:bg-neutral-800 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-xs font-medium z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-end pr-0.5">
                          <div className="w-4 h-1.5 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="absolute inset-0 pt-8">
                      <Image
                        src="/images/hero-thumb.png"
                        alt={locale === 'tr' ? 'Bravioo Mobil Uygulaması' : 'Bravioo Mobile App'}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 300px, 400px"
                        priority
                      />
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-neutral-900 dark:bg-neutral-800 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>

         

            {/* Floating Cards - Hidden on mobile for better performance */}
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [0, -10, 0] }}
              transition={{ duration: shouldReduceMotion ? 0 : 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-neutral-200 dark:border-gray-700 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-gray-100 text-xs">
                    {locale === 'tr' ? 'Ahmet Yılmaz' : 'John Smith'}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-gray-400">
                    {locale === 'tr' ? 'Takdir aldı!' : 'Recognized!'}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [0, 10, 0] }}
              transition={{ duration: shouldReduceMotion ? 0 : 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-neutral-200 dark:border-gray-700 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-gray-100 text-xs">
                    {locale === 'tr' ? '+185% ROI' : '+185% ROI'}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-gray-400">
                    {locale === 'tr' ? 'Bu ay' : 'This month'}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
