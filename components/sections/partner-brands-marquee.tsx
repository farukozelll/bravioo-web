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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <Crown className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 dark:text-gray-100 mb-6 font-display">
            {locale === 'tr' 
              ? 'Anlaşmalı Markalarımızdan'
              : 'Exclusive Discounts from'
            }
            <br />
            <span className="bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Özel İndirimler' : 'Partner Brands'}
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-ink-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {locale === 'tr'
              ? 'Çalışanlarınız 500+ markayla anlaşmalı özel indirimlerden faydalanabilir. Sağlıktan teknolojiye, eğitimden eğlenceye kadar her alanda avantajlar.'
              : 'Your employees can benefit from exclusive discounts with 500+ partner brands. Advantages in every field from healthcare to technology, education to entertainment.'
            }
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {[
              { number: '500+', label: locale === 'tr' ? 'Anlaşmalı Marka' : 'Partner Brands' },
              { number: '50%', label: locale === 'tr' ? 'Ortalama İndirim' : 'Average Discount' },
              { number: '15', label: locale === 'tr' ? 'Farklı Kategori' : 'Different Categories' },
              { number: '24/7', label: locale === 'tr' ? 'Erişim' : 'Access' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-600 mb-1 font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-ink-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
          
          {/* Scrolling Brands */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 py-8 w-max"
              animate={{ x: '-50%' }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' } }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  className="relative flex-shrink-0 w-40 sm:w-48"
                >
                  <div className="relative h-24 sm:h-28">
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      fill
                      className="object-contain"
                      sizes="192px"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Section moved to separate component */}
      </div>
    </section>
  );
}
