'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function AboutHero() {
  const t = useTranslations();

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-24 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent dark:from-emerald-900/20 dark:to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-emerald-100/20 to-transparent dark:from-emerald-800/20 dark:to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300"
          >
            {t('about.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300"
          >
            {t('about.hero.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
          >
            {t('about.hero.description')}
          </motion.p>

        </div>
      </div>
    </section>
  );
}