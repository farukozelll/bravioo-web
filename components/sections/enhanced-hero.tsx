'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
      description: locale === 'tr' ? '190+ ülkede milyonlarca ödül seçeneği ile motivasyonu artırın' : 'Boost motivation with millions of reward options in 190+ countries',
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
    <section className="relative md:min-h-[40vh] lg:min-h-[40vh] bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single gradient blob for subtle background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-brand-100/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center py-8 md:py-12 lg:py-16">
          {/* Left Content */}
          <motion.div 
            className="space-y-5 md:space-y-6 lg:space-y-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-brand-500/10 to-emerald-500/10 dark:from-brand-400/20 dark:to-emerald-400/20 border border-brand-200 dark:border-brand-600 rounded-full"
            >
              <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400" />
              <span className="text-sm font-semibold text-brand-700 dark:text-brand-300">
                {locale === 'tr' 
                  ? '🎉 2025\'ün En İyi HR Tech Ürünü Seçildik!'
                  : '🎉 Winner of Best HR Tech Product 2025!'
                }
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-gray-100 mb-4 lg:mb-6 font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {locale === 'tr' 
                  ? <>Çalışan Motivasyonunu <span className="bg-gradient-to-r from-brand-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">%450 Artırın</span></>
                  : <>Increase Employee Motivation by <span className="bg-gradient-to-r from-brand-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">450%</span></>
                }
              </motion.h1>

              <motion.p 
                className="text-base md:text-lg lg:text-xl text-ink-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {locale === 'tr'
                  ? 'Peer-to-peer takdir sistemi, 190+ ülkede ödül seçenekleri ve AI destekli performans analitiği ile 30 gün içinde sonuç alın.'
                  : 'Get results in 30 days with peer-to-peer recognition, rewards in 190+ countries, and AI-powered performance analytics.'
                }
              </motion.p>

            </div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white rounded-2xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                {locale === 'tr' ? 'Ücretsiz Demo Başlat' : 'Start Free Demo'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-ink-200 dark:border-gray-600 text-ink-700 dark:text-gray-300 hover:bg-ink-50 dark:hover:bg-gray-800 rounded-2xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold group"
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
                    <span className="text-sm font-medium text-ink-600 dark:text-gray-400">{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>

 
          </motion.div>

          {/* Right Visual Content */}
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {/* Video Container - Mock Demo Video */}
            <div className="relative aspect-video mb-4 lg:mb-6 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700">
              <iframe 
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                title={locale === 'tr' ? 'Bravioo Platformu Demo Videosu - HR Tech Çözümleri' : 'Bravioo Platform Demo Video - HR Tech Solutions'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                frameBorder="0" 
                className="w-full h-full rounded-2xl lg:rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* Feature Cards */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: "easeInOut" }}
                  className={`relative h-64 sm:h-72 md:h-80 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${features[currentFeature].color} p-4 sm:p-6 overflow-hidden shadow-xl`}
                >
                  {/* Simplified Background Pattern */}
                  <div className="absolute inset-0">
                    {/* Base gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        {React.createElement(features[currentFeature].icon, {
                          className: "h-10 w-10 text-white"
                        })}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-sm">
                        {features[currentFeature].description}
                      </p>
                    </div>

                    {/* Feature highlight badge */}
                    <div className="mt-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Zap className="h-4 w-4 text-white" />
                        <span className="text-white text-sm font-medium">
                          {locale === 'tr' ? 'Popüler Özellik' : 'Popular Feature'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stock Image Overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-24 sm:w-32 h-24 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg opacity-90">
                    {currentFeature === 0 && (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center">
                        <div className="text-center">
                          <Users className="h-6 sm:h-8 w-6 sm:w-8 text-emerald-600 mx-auto mb-1 sm:mb-2" />
                          <div className="text-xs font-semibold text-emerald-700 hidden sm:block">Team Work</div>
                        </div>
                      </div>
                    )}
                    {currentFeature === 1 && (
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center">
                        <div className="text-center">
                          <Gift className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600 mx-auto mb-1 sm:mb-2" />
                          <div className="text-xs font-semibold text-purple-700 hidden sm:block">Rewards</div>
                        </div>
                      </div>
                    )}
                    {currentFeature === 2 && (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                          <div className="text-xs font-semibold text-blue-700 hidden sm:block">Analytics</div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Feature Navigation Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature 
                        ? 'bg-brand-500 w-8' 
                        : 'bg-brand-200 hover:bg-brand-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Cards - Hidden on mobile for better performance */}
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [0, -10, 0] }}
              transition={{ duration: shouldReduceMotion ? 0 : 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-sand-200 dark:border-gray-700 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ink-900 dark:text-gray-100 text-xs">
                    {locale === 'tr' ? 'Ahmet Yılmaz' : 'John Smith'}
                  </div>
                  <div className="text-xs text-ink-600 dark:text-gray-400">
                    {locale === 'tr' ? 'Takdir aldı!' : 'Recognized!'}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [0, 10, 0] }}
              transition={{ duration: shouldReduceMotion ? 0 : 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-sand-200 dark:border-gray-700 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ink-900 dark:text-gray-100 text-xs">
                    {locale === 'tr' ? '+185% ROI' : '+185% ROI'}
                  </div>
                  <div className="text-xs text-ink-600 dark:text-gray-400">
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
