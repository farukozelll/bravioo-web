'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ValueLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  features: string[];
}

export function CompanyValues() {
  const t = useTranslations();

  const valueLayers: ValueLayer[] = [
    {
      id: 'functional',
      title: t('about.values.functional.title'),
      subtitle: t('about.values.functional.subtitle'),
      description: t('about.values.functional.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        t('about.values.functional.feature1'),
        t('about.values.functional.feature2'),
        t('about.values.functional.feature3'),
        t('about.values.functional.feature4')
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'emotional',
      title: t('about.values.emotional.title'),
      subtitle: t('about.values.emotional.subtitle'),
      description: t('about.values.emotional.description'),
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      features: [
        t('about.values.emotional.feature1'),
        t('about.values.emotional.feature2'),
        t('about.values.emotional.feature3'),
        t('about.values.emotional.feature4')
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'spiritual',
      title: t('about.values.spiritual.title'),
      subtitle: t('about.values.spiritual.subtitle'),
      description: t('about.values.spiritual.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        t('about.values.spiritual.feature1'),
        t('about.values.spiritual.feature2'),
        t('about.values.spiritual.feature3'),
        t('about.values.spiritual.feature4')
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t('about.values.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('about.values.subtitle')}
          </p>
        </motion.div>

        {/* Interactive Value Pyramid */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Visual Element */}
          <div className="relative mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl text-white mb-4 shadow-2xl">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kotler'in Üç Katmanlı Değer Modeli</h3>
              <p className="text-slate-600">Her katman, bir öncekini tamamlar ve güçlendirir</p>
            </div>

            {/* Interactive Pyramid Layers */}
            <div className="space-y-6">
              {valueLayers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className={`
                    relative mx-auto transition-all duration-500 group-hover:scale-105
                    ${index === 0 ? 'max-w-6xl' : index === 1 ? 'max-w-5xl' : 'max-w-4xl'}
                  `}>
                    <div className={`
                      relative bg-gradient-to-r ${
                        index === 0 ? 'from-blue-500 to-blue-600' :
                        index === 1 ? 'from-emerald-500 to-emerald-600' :
                        'from-purple-500 to-purple-600'
                      } 
                      rounded-2xl p-8 md:p-12 text-white shadow-2xl
                      transform transition-all duration-500 group-hover:shadow-3xl
                    `}>
                      
                      {/* Layer Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        <span className={`
                          ${index === 0 ? 'text-blue-600' :
                            index === 1 ? 'text-emerald-600' :
                            'text-purple-600'}
                        `}>
                          {index + 1}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-4 gap-8 items-center">
                        
                        {/* Icon */}
                        <div className="text-center md:text-left">
                          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                            {layer.icon}
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            {layer.title}
                          </h3>
                          <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                            {layer.subtitle}
                          </p>
                          <p className="text-white/90 leading-relaxed">
                            {layer.description}
                          </p>
                        </div>

                        {/* Key Points */}
                        <div className="text-center md:text-left">
                          <h4 className="font-semibold mb-4 text-white/90">
                            Temel Özellikler
                          </h4>
                          <div className="space-y-2">
                            {layer.features.slice(0, 3).map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index * 0.3) + (featureIndex * 0.1) }}
                                className="flex items-center gap-3 text-white/80 text-sm"
                              >
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>

                    </div>

                    {/* Connection Lines for Visual Flow */}
                    {index < valueLayers.length - 1 && (
                      <div className="flex justify-center mt-6 mb-2">
                        <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent"></div>
                      </div>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Bütünleşik Değer Yaratımı
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
              Bu üç katman birlikte, sadece bir yazılım ürünü değil, işyerlerini daha insani hale getiren 
              kapsamlı bir deneyim sunar. Her katman diğerini destekler ve güçlendirir.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">%40</div>
                <div className="text-white/80">Verimlilik Artışı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">%85</div>
                <div className="text-white/80">Çalışan Memnuniyeti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">%95</div>
                <div className="text-white/80">Kültürel Dönüşüm</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            {t('about.values.cta')}
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            {t('about.values.ctaButton')}
          </button>
        </motion.div>

      </div>
    </section>
  );
}