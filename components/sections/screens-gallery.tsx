'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SCREENS } from '@/data/screens';
import { useLocale } from 'next-intl';

export function ScreensGallery() {
  const locale = useLocale();
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink-900 dark:text-gray-100">{locale === 'tr' ? 'Ekranlar' : 'Screens'}</h2>
          <p className="mt-3 text-ink-600 dark:text-gray-300">{locale === 'tr' ? 'Uygulama görünümüne hızlı bakış' : 'A quick look at the app UI'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCREENS.map((s) => (
            <motion.div key={s.id} className="rounded-2xl overflow-hidden bg-ink-900/5 dark:bg-white/5 border border-ink-900/10 dark:border-white/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="relative aspect-[16/10]">
                <Image src={s.image} alt={(locale === 'tr' ? s.titleTr : s.titleEn) + ' screen'} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-ink-900 dark:text-white">{locale === 'tr' ? s.titleTr : s.titleEn}</h3>
                <p className="text-sm text-ink-600 dark:text-gray-300">{locale === 'tr' ? s.descriptionTr : s.descriptionEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScreensGallery;


