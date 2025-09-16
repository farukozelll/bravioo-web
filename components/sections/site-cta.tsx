'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export function SiteCTA() {
  const locale = useLocale();
  return (
    <section className="py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            {locale === 'tr' ? 'Bizimle yolculuğa başlayın' : 'Start your journey with us'}
          </h3>
          <p className="text-base sm:text-lg text-emerald-100 mb-6 lg:mb-8 max-w-2xl mx-auto">
            {locale === 'tr'
              ? 'İşletmenizi bir sonraki seviyeye taşımak için bugün başlayın'
              : 'Start today to take your business to the next level'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 justify-center">
              {locale === 'tr' ? 'Hemen E-Ticarete Başlayın' : 'Start E-Commerce Now'}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all">
              {locale === 'tr' ? 'Demo Al' : 'Get Demo'}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SiteCTA;


