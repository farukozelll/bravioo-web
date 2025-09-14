'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

export function WhyBraviooHero() {
  const t = useTranslations('whyBravioo.hero');

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      textKey: 'benefit1'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      textKey: 'benefit2'
    },
    {
      icon: <Users className="w-6 h-6" />,
      textKey: 'benefit3'
    }
  ];

  const stats = [
    {
      value: '500+',
      labelKey: 'stats.companies'
    },
    {
      value: '2.5M+',
      labelKey: 'stats.users'
    },
    {
      value: '%98',
      labelKey: 'stats.satisfaction'
    },
    {
      value: '%85',
      labelKey: 'stats.retention'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-purple-100/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf: Ana İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Star className="w-4 h-4" />
              {t('badge')}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t('title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block">
                {t('titleHighlight')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('description')}
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {t(benefit.textKey)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t('ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                {t('ctaSecondary')}
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>{t('trust1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>{t('trust2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>{t('trust3')}</span>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf: İstatistikler */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Ana İstatistik Kartı */}
            <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('statsTitle')}
                </h3>
                <p className="text-gray-600">
                  {t('statsSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {t(stat.labelKey)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold">{t('floatingCard.value')}</div>
                  <div className="text-emerald-100 text-sm">{t('floatingCard.label')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
