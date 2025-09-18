'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

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

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-gold-50 py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-green-100/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gold-200 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf: Ana İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Star className="w-4 h-4" />
              {t('badge')}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t('title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gold-600 block">
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
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-gold-500 rounded-xl flex items-center justify-center text-white">
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
                className="bg-gradient-to-r from-green-600 to-gold-600 hover:from-green-700 hover:to-gold-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t('ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
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

          {/* Sağ Taraf: Görsel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center p-4"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl"
            >
              <Image
                src="/images/hero-thumb3.png"
                alt="Bravioo neden biz görseli"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-3xl drop-shadow-2xl"
                sizes="(max-width: 1024px) 80vw, 640px"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
