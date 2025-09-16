'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Crown } from 'lucide-react';
import { PARTNER_BRANDS } from '@/data/partner-brands';

export function PartnerBrandsMarquee() {
  const locale = useLocale();

  const brands = PARTNER_BRANDS;

  // Duplicate brands for continuous scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Description, Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-gold-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Crown className="h-7 w-7 text-white" />
              </div>
              <div className="h-10 w-1 rounded-full bg-gradient-to-b from-gold-500 to-orange-600" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 dark:text-gray-100 mb-4 font-display">
              {locale === 'tr' ? 'Anlaşmalı Markalarımızdan' : 'Exclusive Discounts from'}
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent mb-5">
              {locale === 'tr' ? 'Özel İndirimler' : 'Partner Brands'}
            </h3>

            <p className="text-base md:text-lg text-ink-700 dark:text-gray-300 max-w-xl leading-relaxed">
              {locale === 'tr'
                ? 'Çalışanlarınız 500+ markayla anlaşmalı özel indirimlerden faydalanabilir. Sağlıktan teknolojiye, eğitimden eğlenceye kadar her alanda avantajlar.'
                : 'Your employees can benefit from exclusive discounts with 500+ partner brands. Advantages in every field from healthcare to technology, education to entertainment.'}
            </p>

            {/* Stats - left aligned vertical grid */}
            <div className="grid grid-cols-2 gap-6 mt-10 max-w-md">
              {[
                { number: '500+', label: locale === 'tr' ? 'Anlaşmalı Marka' : 'Partner Brands' },
                { number: '50%', label: locale === 'tr' ? 'Ortalama İndirim' : 'Average Discount' },
                { number: '15', label: locale === 'tr' ? 'Farklı Kategori' : 'Different Categories' },
                { number: '24/7', label: locale === 'tr' ? 'Erişim' : 'Access' }
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gold-600 mb-1 font-display">
                    {stat.number}
                  </div>
                  <div className="text-sm text-ink-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Marquee */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

              {/* Two rows for richer visual rhythm */}
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-12 py-6 w-max"
                    animate={{ x: '-50%' }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 55, ease: 'linear' } }}
                  >
                    {duplicatedBrands.map((brand, index) => (
                      <div key={`r1-${brand.name}-${index}`} className="relative flex-shrink-0 w-36 sm:w-44">
                        <div className="relative h-20 sm:h-24">
                          <Image src={brand.logo} alt={brand.alt} fill className="object-contain" sizes="176px" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Row 2 (reverse) */}
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-12 py-6 w-max"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 65, ease: 'linear' } }}
                  >
                    {duplicatedBrands.map((brand, index) => (
                      <div key={`r2-${brand.name}-${index}`} className="relative flex-shrink-0 w-36 sm:w-44">
                        <div className="relative h-20 sm:h-24">
                          <Image src={brand.logo} alt={brand.alt} fill className="object-contain" sizes="176px" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section moved to separate component */}
      </div>
    </section>
  );
}
