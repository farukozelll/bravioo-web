'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Gift, Percent, Crown } from 'lucide-react';

export function PartnerBrandsMarquee() {
  const locale = useLocale();
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  // Enhanced brand data with more details
  const brands = [
    { 
      name: 'Acıbadem', 
      logo: '/markalar/Acıbadem Tüm Hastaneleri-Tıp Merkezleri.png', 
      alt: 'Acıbadem Hastaneleri',
      discount: '25%',
      category: 'Healthcare',
      description: locale === 'tr' ? 'Sağlık hizmetlerinde özel indirimler' : 'Special discounts on healthcare services'
    },
    { 
      name: 'AGT', 
      logo: '/markalar/agt-renkli.jpeg', 
      alt: 'AGT',
      discount: '15%',
      category: 'Technology',
      description: locale === 'tr' ? 'Teknoloji ürünlerinde avantajlı fiyatlar' : 'Advantageous prices on tech products'
    },
    { 
      name: 'Akgün Group', 
      logo: '/markalar/akgungroup-logo-v1.png', 
      alt: 'Akgün Group',
      discount: '20%',
      category: 'Hospitality',
      description: locale === 'tr' ? 'Otel konaklamalarında indirim' : 'Discounts on hotel accommodations'
    },
    { 
      name: 'Akmercan', 
      logo: '/markalar/akmercan.svg', 
      alt: 'Akmercan',
      discount: '30%',
      category: 'Retail',
      description: locale === 'tr' ? 'Gıda ürünlerinde özel kampanyalar' : 'Special campaigns on food products'
    },
    { 
      name: 'Albayrak', 
      logo: '/markalar/Albayrak_Grubu_Logo.png', 
      alt: 'Albayrak Grubu',
      discount: '18%',
      category: 'Construction',
      description: locale === 'tr' ? 'İnşaat hizmetlerinde indirim' : 'Discounts on construction services'
    },
    { 
      name: 'Birun', 
      logo: '/markalar/birun.png', 
      alt: 'Birun',
      discount: '22%',
      category: 'Fashion',
      description: locale === 'tr' ? 'Moda ürünlerinde özel fiyatlar' : 'Special prices on fashion items'
    },
    { 
      name: 'Cacharel', 
      logo: '/markalar/Cacharel.png', 
      alt: 'Cacharel',
      discount: '35%',
      category: 'Fashion',
      description: locale === 'tr' ? 'Lüks moda koleksiyonlarında indirim' : 'Discounts on luxury fashion collections'
    },
    { 
      name: 'İstanbul Ticaret', 
      logo: '/markalar/İstanbul Ticaret.png', 
      alt: 'İstanbul Ticaret Üniversitesi',
      discount: '40%',
      category: 'Education',
      description: locale === 'tr' ? 'Eğitim programlarında indirim' : 'Discounts on educational programs'
    },
    { 
      name: 'Karaca', 
      logo: '/markalar/karaca-beyaz.png', 
      alt: 'Karaca',
      discount: '25%',
      category: 'Home & Living',
      description: locale === 'tr' ? 'Ev dekorasyonu ürünlerinde indirim' : 'Discounts on home decoration products'
    },
    { 
      name: 'Liv Hospital', 
      logo: '/markalar/liv-hospital2359.jpg', 
      alt: 'Liv Hospital',
      discount: '30%',
      category: 'Healthcare',
      description: locale === 'tr' ? 'Özel hastane hizmetlerinde indirim' : 'Discounts on private hospital services'
    },
    { 
      name: 'Mimya', 
      logo: '/markalar/Mimya.png', 
      alt: 'Mimya',
      discount: '20%',
      category: 'Beauty',
      description: locale === 'tr' ? 'Güzellik ürünlerinde özel kampanyalar' : 'Special campaigns on beauty products'
    },
    { 
      name: 'Sanko', 
      logo: '/markalar/Sanko_Üniversitesi_logo.png', 
      alt: 'Sanko Üniversitesi',
      discount: '45%',
      category: 'Education',
      description: locale === 'tr' ? 'Üniversite eğitiminde burslar' : 'Scholarships for university education'
    },
  ];

  // Duplicate brands for continuous scroll
  const duplicatedBrands = [...brands, ...brands];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Healthcare': return '🏥';
      case 'Technology': return '💻';
      case 'Hospitality': return '🏨';
      case 'Retail': return '🛒';
      case 'Construction': return '🏗️';
      case 'Fashion': return '👗';
      case 'Education': return '🎓';
      case 'Home & Living': return '🏠';
      case 'Beauty': return '💄';
      default: return '⭐';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Healthcare': 'from-blue-500 to-cyan-600',
      'Technology': 'from-purple-500 to-indigo-600',
      'Hospitality': 'from-gold-500 to-yellow-600',
      'Retail': 'from-green-500 to-emerald-600',
      'Construction': 'from-orange-500 to-red-600',
      'Fashion': 'from-pink-500 to-rose-600',
      'Education': 'from-indigo-500 to-purple-600',
      'Home & Living': 'from-brown-500 to-amber-600',
      'Beauty': 'from-pink-400 to-purple-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
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
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sand-50 dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sand-50 dark:from-gray-900 to-transparent z-10" />
          
          {/* Scrolling Brands */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 py-8 w-max"
              animate={{
                x: hoveredBrand ? 0 : '-50%',
              }}
              transition={{
                x: {
                  repeat: hoveredBrand ? 0 : Infinity,
                  repeatType: "loop",
                  duration: hoveredBrand ? 0 : 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  className="group relative flex-shrink-0 w-72 sm:w-80"
                  onMouseEnter={() => setHoveredBrand(`${brand.name}-${index}`)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 sm:h-48 bg-white dark:bg-gray-800 rounded-2xl border-2 border-sand-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-400 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                    {/* Brand Logo Section */}
                    <div className="h-24 sm:h-32 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white to-sand-50 dark:from-gray-800 dark:to-gray-700">
                      <div className="relative w-full h-full">
                        <Image
                          src={brand.logo}
                          alt={brand.alt}
                          fill
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          sizes="320px"
                        />
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="h-16 px-4 py-3 bg-white dark:bg-gray-800 border-t border-sand-100 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-ink-900 dark:text-gray-100 text-sm truncate">
                            {brand.name}
                          </h3>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs">{getCategoryIcon(brand.category)}</span>
                            <span className="text-xs text-ink-500 dark:text-gray-400">{brand.category}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${getCategoryColor(brand.category)} rounded-full text-white text-xs font-bold`}>
                            <Percent className="h-3 w-3" />
                            {brand.discount}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay with Details */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredBrand === `${brand.name}-${index}` ? 1 : 0,
                        y: hoveredBrand === `${brand.name}-${index}` ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-ink-900/95 to-brand-900/95 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center text-center p-6 pointer-events-none"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(brand.category)} rounded-2xl flex items-center justify-center mb-4`}>
                        <Gift className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-white font-bold text-lg mb-2">{brand.name}</h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-4 w-4 text-gold-400 fill-current" />
                        <span className="text-gold-400 font-semibold">{brand.discount} {locale === 'tr' ? 'İndirim' : 'Discount'}</span>
                      </div>
                      
                      <p className="text-sand-200 dark:text-gray-300 text-sm leading-relaxed">
                        {brand.description}
                      </p>
                      
                      <button className="mt-4 px-4 py-2 bg-white text-ink-900 rounded-lg font-medium hover:bg-sand-100 transition-colors text-sm">
                        {locale === 'tr' ? 'Detayları Gör' : 'View Details'}
                      </button>
                    </motion.div>
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
