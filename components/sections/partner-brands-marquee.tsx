'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gift, Crown } from 'lucide-react';

export function PartnerBrandsMarquee() {
  const locale = useLocale();

  // Enhanced brand data with more details
  const brands = [
    { 
      name: 'Acıbadem', 
      logo: '/images/brands/Acıbadem Tüm Hastaneleri-Tıp Merkezleri.png', 
      alt: 'Acıbadem Hastaneleri'
    },
    { 
      name: 'AGT', 
      logo: '/images/brands/agt-renkli.jpeg', 
      alt: 'AGT'
    },
    { 
      name: 'Akgün Group', 
      logo: '/images/brands/akgungroup-logo-v1.png', 
      alt: 'Akgün Group'
    },
    { 
      name: 'Akmercan', 
      logo: '/images/brands/akmercan.svg', 
      alt: 'Akmercan'
    },
    { 
      name: 'Albayrak', 
      logo: '/images/brands/Albayrak_Grubu_Logo.png', 
      alt: 'Albayrak Grubu'
    },
    { 
      name: 'Birun', 
      logo: '/images/brands/birun.png', 
      alt: 'Birun'
    },
    { 
      name: 'Cacharel', 
      logo: '/images/brands/Cacharel.png', 
      alt: 'Cacharel'
    },
    { 
      name: 'İstanbul Ticaret', 
      logo: '/images/brands/İstanbul Ticaret.png', 
      alt: 'İstanbul Ticaret Üniversitesi'
    },
    { 
      name: 'Karaca', 
      logo: '/images/brands/karaca-beyaz.png', 
      alt: 'Karaca'
    },
    { 
      name: 'Liv Hospital', 
      logo: '/images/brands/liv-hospital2359.jpg', 
      alt: 'Liv Hospital'
    },
    { 
      name: 'Mimya', 
      logo: '/images/brands/Mimya.png', 
      alt: 'Mimya'
    },
    { 
      name: 'Sanko', 
      logo: '/images/brands/Sanko_Üniversitesi_logo.png', 
      alt: 'Sanko Üniversitesi'
    },
  ];

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

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gold-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-24 h-24 border border-white/30 rounded-full"></div>
              <div className="absolute top-16 right-8 w-16 h-16 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-16 w-20 h-20 border border-white/30 rounded-full"></div>
            </div>
            
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
                <button className="bg-white text-gold-600 px-8 py-4 rounded-2xl font-semibold hover:bg-sand-100 transition-all transform hover:scale-105">
                  {locale === 'tr' ? 'Tüm Markaları Gör' : 'View All Brands'}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gold-600 px-8 py-4 rounded-2xl font-semibold transition-all">
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
