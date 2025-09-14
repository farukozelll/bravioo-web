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
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-emerald-100/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf: Ana İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Check className="w-4 h-4" />
              {t('badgeText')}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
              <span className="text-emerald-600 block">{t('titleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Öne Çıkan Özellikler */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-emerald-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold">{t('feature1')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold">{t('feature2')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold">{t('feature3')}</span>
              </div>
            </div>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t('ctaPrimary')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
