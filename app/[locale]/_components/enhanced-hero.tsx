'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Play, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export function EnhancedHero() {
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations('enhancedHero');



  const trustBadges = [
    {
      icon: Shield,
      key: 'iso',
      color: 'text-green-600'
    },
    {
      icon: Star,
      key: 'soc2',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      key: 'gdpr',
      color: 'text-purple-600'
    }
  ];



  return (
    <section className="relative md:min-h-[40vh] lg:min-h-[40vh] bg-transparent transition-colors duration-300">

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
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">{t('badge')}</span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-4 lg:mb-6 font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t('titlePrefix')}{' '}
                <span className="bg-gradient-to-r from-primary-600 via-primary-600 to-secondary-600 bg-clip-text text-transparent">{t('titleHighlight')}</span>
                {t('titleSuffix') ? <> {t('titleSuffix')}</> : null}
              </motion.h1>

              <motion.p 
                className="text-base md:text-lg lg:text-xl text-neutral-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {t('subtitle')}
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
                asChild
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href={`/${locale}/contact`}>
                  {locale === 'tr' ? 'Randevu Planla' : 'Schedule a Meeting'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neutral-200 dark:border-gray-600 text-neutral-700 dark:text-gray-300 hover:bg-neutral-50 dark:hover:bg-gray-800 rounded-2xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {locale === 'tr' ? 'Tanıtım Videosu' : 'Product Video'}
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
                    <span className="text-sm font-medium text-neutral-600 dark:text-gray-400">{t(`badges.${badge.key}`)}</span>
                  </div>
                );
              })}
            </motion.div>

 
          </motion.div>

          {/* Right Visual Content */}
          <motion.div 
            className="lg:col-span-5 relative order-last"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {/* Visual Container: Direct image without device frame */}
            <div className="relative flex items-center justify-center mb-4 lg:mb-6">
              <motion.div 
                className="relative w-full max-w-[260px] md:max-w-[300px] lg:max-w-[340px] mx-auto"
                animate={{ y: shouldReduceMotion ? 0 : [0, -8, 0] }}
                transition={{ duration: shouldReduceMotion ? 0 : 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-[9/19.5] overflow-hidden ">
                  <Image
                    src="/images/Bravioo-Home-Mobile_Mockup.png"
                    alt={t('mobileAlt')}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 260px"
                    priority
                  />
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
                  <div className="font-semibold text-neutral-900 dark:text-gray-100 text-xs">{t('floating.name')}</div>
                  <div className="text-xs text-neutral-600 dark:text-gray-400">{t('floating.recognized')}</div>
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
                  <div className="font-semibold text-neutral-900 dark:text-gray-100 text-xs">{t('floating.roiValue')}</div>
                  <div className="text-xs text-neutral-600 dark:text-gray-400">{t('floating.thisMonth')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
