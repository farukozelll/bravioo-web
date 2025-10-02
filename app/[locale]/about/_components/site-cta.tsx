'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export function SiteCTA() {
  const locale = useLocale();
  return (
    <section className="bg-white py-12 dark:bg-gray-900 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-secondary-500 to-secondary-600 p-6 text-white sm:p-8 lg:rounded-3xl lg:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white blur-3xl" />
            </div>
            <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-3xl">
              {locale === 'tr'
                ? 'Bizimle yolculuğa başlayın'
                : 'Start your journey with us'}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-base text-emerald-100 sm:text-lg lg:mb-8">
              {locale === 'tr'
                ? 'İşletmenizi bir sonraki seviyeye taşımak için bugün başlayın'
                : 'Start today to take your business to the next level'}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={`/${locale}/meeting`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow transition-all hover:bg-gray-50 sm:px-8 sm:py-4 sm:text-lg"
              >
                {locale === 'tr'
                  ? 'Ücretsiz Demo Planla'
                  : 'Schedule Free Demo'}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
              >
                {locale === 'tr' ? 'Satışla İletişime Geç' : 'Contact Sales'}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SiteCTA;
