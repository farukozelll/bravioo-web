'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function BrandLogosSection() {
  const locale = useLocale();

  // Real brand data from markalar folder
  const brands = [
    { name: 'Acıbadem', logo: '/markalar/Acıbadem Tüm Hastaneleri-Tıp Merkezleri.png', alt: 'Acıbadem Hastaneleri', discount: 25 },
    { name: 'AGT', logo: '/markalar/agt-renkli.jpeg', alt: 'AGT', discount: 20 },
    { name: 'Akgün Group', logo: '/markalar/akgungroup-logo-v1.png', alt: 'Akgün Group', discount: 35 },
    { name: 'Akmercan', logo: '/markalar/akmercan.svg', alt: 'Akmercan', discount: 15 },
    { name: 'Albayrak', logo: '/markalar/Albayrak_Grubu_Logo.png', alt: 'Albayrak Grubu', discount: 30 },
    { name: 'Birun', logo: '/markalar/birun.png', alt: 'Birun', discount: 40 },
    { name: 'Cacharel', logo: '/markalar/Cacharel.png', alt: 'Cacharel', discount: 20 },
    { name: 'İstanbul Ticaret', logo: '/markalar/İstanbul Ticaret.png', alt: 'İstanbul Ticaret Üniversitesi', discount: 25 },
    { name: 'Karaca', logo: '/markalar/karaca-beyaz.png', alt: 'Karaca', discount: 30 },
    { name: 'Liv Hospital', logo: '/markalar/liv-hospital2359.jpg', alt: 'Liv Hospital', discount: 15 },
    { name: 'Mimya', logo: '/markalar/Mimya.png', alt: 'Mimya', discount: 35 },
    { name: 'Sanko', logo: '/markalar/Sanko_Üniversitesi_logo.png', alt: 'Sanko Üniversitesi', discount: 20 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl font-display">
            {locale === 'tr' 
              ? 'Anlaşmalı Markalarımızdan Özel İndirimler'
              : 'Exclusive Discounts from Partner Brands'
            }
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            {locale === 'tr'
              ? 'Çalışanlarınız bu markalardan özel indirimler ve avantajlar elde edebilir'
              : 'Your employees can enjoy special discounts and benefits from these brands'
            }
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="aspect-[3/2] flex items-center justify-center p-4 bg-white rounded-2xl border border-sand-200 hover:border-brand-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
              </div>
              
              {/* Hover overlay with discount info */}
              <div className="absolute inset-0 bg-brand-500 bg-opacity-95 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">
                    {locale === 'tr' ? 'İndirim' : 'Discount'}
                  </div>
                  <div className="text-2xl font-bold">
                    {brand.discount}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-brand-50 to-gold-50 rounded-3xl p-8 border border-brand-100">
            <h3 className="text-xl font-bold text-ink-900 mb-4 font-display">
              {locale === 'tr' 
                ? 'Daha Fazla Marka Partneri'
                : 'More Brand Partners'
              }
            </h3>
            <p className="text-ink-600 mb-6">
              {locale === 'tr'
                ? 'Sürekli olarak yeni markalarla anlaşmalar yapıyoruz. Tam listeyi görmek için kayıt olun.'
                : 'We\'re constantly partnering with new brands. Sign up to see the full list.'
              }
            </p>
            <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-2xl font-medium transition-colors">
              {locale === 'tr' ? 'Tüm Markaları Gör' : 'View All Brands'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
