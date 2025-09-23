'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Users, TrendingUp, Shield } from 'lucide-react';

export function EmployerPricingHero() {
  const t = useTranslations('pricing.employer');

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      titleKey: 'benefit1Title',
      descKey: 'benefit1Desc'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      titleKey: 'benefit2Title', 
      descKey: 'benefit2Desc'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      titleKey: 'benefit3Title',
      descKey: 'benefit3Desc'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 lg:py-24 xl:py-32 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-emerald-100/50 dark:bg-grid-emerald-800/30 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Sol Taraf: Ana İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 lg:mb-6">
              <Check className="w-4 h-4" />
              {t('badgeText')}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6 leading-tight">
              {t('title')}
              <span className="text-emerald-600 dark:text-emerald-400 block">{t('titleHighlight')}</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Öne Çıkan Özellikler */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 lg:mb-8">
              <div className="flex items-center gap-2 text-emerald-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold text-sm sm:text-base">{t('feature1')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold text-sm sm:text-base">{t('feature2')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold text-sm sm:text-base">{t('feature3')}</span>
              </div>
            </div>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t('ctaPrimary')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300"
              >
                {t('ctaSecondary')}
              </motion.button>
            </div>
          </motion.div>

          {/* Sağ Taraf: Faydalar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {t(benefit.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
