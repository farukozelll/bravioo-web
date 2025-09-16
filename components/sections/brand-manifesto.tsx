'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function BrandManifesto() {
  const t = useTranslations();

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-emerald-200/40 to-emerald-400/30 blur-3xl dark:from-emerald-600/20 dark:to-emerald-500/10" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-purple-200/40 to-blue-300/30 blur-3xl dark:from-purple-600/20 dark:to-blue-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-100 mb-6">
            {t('about.manifesto.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.manifesto.subtitle')}
          </p>
        </motion.div>

        {/* Manifesto Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl border border-emerald-200/60 dark:border-emerald-700/30 shadow-xl overflow-hidden">
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-700" />
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-20">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-emerald-300/40 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-emerald-400/40 blur-2xl" />
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white grid place-items-center shadow-lg">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7.17 6.17A5.5 5.5 0 0 1 12 4.5c3.04 0 5.5 2.46 5.5 5.5 0 3.28-2.8 5.86-7.05 10.11a1 1 0 0 1-1.4 0C4.8 15.86 2 13.28 2 10c0-1.46.59-2.79 1.54-3.75l.04-.04c.45-.45 1.18-.42 1.59.04z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-slate-800 dark:text-gray-100 text-center font-medium">
                “{t('about.manifesto.content')}”
              </blockquote>
              <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-70" />
              <p className="mt-6 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                {t('about.manifesto.tagline')}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}