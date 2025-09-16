'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export function PartnerBrandsCTA() {
  const locale = useLocale();
  return (
    <section className="py-0 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            {/* Removed old white overlay shapes for cleaner look */}
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Gift className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-display">
                {locale === 'tr' 
                  ? 'Daha Fazla Marka, Daha Fazla Avantaj'
                  : 'More Brands, More Advantages'
                }
              </h3>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                {locale === 'tr'
                  ? 'Her ay yeni markalarla anlaşmalar yapıyoruz. Çalışanlarınız için sınırsız avantajlar keşfedin.'
                  : 'We make deals with new brands every month. Discover unlimited advantages for your employees.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gold-700 dark:bg-white dark:text-amber-700 px-8 py-4 rounded-2xl font-semibold hover:bg-sand-100 dark:hover:bg-white/90 transition-all transform hover:scale-105">
                  {locale === 'tr' ? 'Tüm Markaları Gör' : 'View All Brands'}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gold-700 dark:hover:text-amber-700 px-8 py-4 rounded-2xl font-semibold transition-all">
                  {locale === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnerBrandsCTA;


