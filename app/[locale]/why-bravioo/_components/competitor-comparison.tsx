'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X, Star, Crown, Zap } from 'lucide-react';

export function CompetitorComparison() {
  const t = useTranslations('whyBravioo.comparison');
  const [selectedCategory, setSelectedCategory] = useState('features');

  const competitors = [
    {
      id: 'bravioo',
      name: 'Bravioo',
      isUs: true,
      logo: '/Bravioo_logo.png',
      price: '₺299/ay',
      rating: 4.9,
      badge: 'En İyi'
    },
    {
      id: 'competitor1',
      name: 'Rakip A',
      isUs: false,
      price: '₺450/ay',
      rating: 4.2,
      badge: null
    },
    {
      id: 'competitor2', 
      name: 'Rakip B',
      isUs: false,
      price: '₺380/ay',
      rating: 4.0,
      badge: null
    },
    {
      id: 'competitor3',
      name: 'Rakip C', 
      isUs: false,
      price: '₺520/ay',
      rating: 3.8,
      badge: null
    }
  ];

  const categories = [
    {
      id: 'features',
      nameKey: 'categories.features',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'pricing',
      nameKey: 'categories.pricing',
      icon: <Crown className="w-5 h-5" />
    },
    {
      id: 'support',
      nameKey: 'categories.support',
      icon: <Star className="w-5 h-5" />
    }
  ];

  const comparisonData = {
    features: [
      {
        feature: 'Takdir & Ödül Sistemi',
        bravioo: true,
        competitor1: true,
        competitor2: true,
        competitor3: false
      },
      {
        feature: 'Gelişmiş Analitik',
        bravioo: true,
        competitor1: false,
        competitor2: true,
        competitor3: false
      },
      {
        feature: 'Mobil Uygulama',
        bravioo: true,
        competitor1: true,
        competitor2: false,
        competitor3: true
      },
      {
        feature: 'API Entegrasyonu',
        bravioo: true,
        competitor1: false,
        competitor2: false,
        competitor3: true
      },
      {
        feature: 'Özel Marka Tasarımı',
        bravioo: true,
        competitor1: false,
        competitor2: false,
        competitor3: false
      },
      {
        feature: 'Gerçek Zamanlı Bildirimler',
        bravioo: true,
        competitor1: true,
        competitor2: false,
        competitor3: false
      }
    ],
    pricing: [
      {
        feature: 'Başlangıç Fiyatı',
        bravioo: '₺299/ay',
        competitor1: '₺450/ay',
        competitor2: '₺380/ay',
        competitor3: '₺520/ay'
      },
      {
        feature: 'Kurulum Ücreti',
        bravioo: 'Ücretsiz',
        competitor1: '₺2.500',
        competitor2: '₺1.800',
        competitor3: '₺3.200'
      },
      {
        feature: 'Yıllık İndirim',
        bravioo: '%25',
        competitor1: '%10',
        competitor2: '%15',
        competitor3: '%5'
      },
      {
        feature: 'Ücretsiz Deneme',
        bravioo: '14 Gün',
        competitor1: '7 Gün',
        competitor2: '7 Gün',
        competitor3: 'Yok'
      }
    ],
    support: [
      {
        feature: '7/24 Destek',
        bravioo: true,
        competitor1: false,
        competitor2: true,
        competitor3: false
      },
      {
        feature: 'Türkçe Destek',
        bravioo: true,
        competitor1: false,
        competitor2: false,
        competitor3: true
      },
      {
        feature: 'Canlı Eğitim',
        bravioo: true,
        competitor1: false,
        competitor2: false,
        competitor3: false
      },
      {
        feature: 'Özel Hesap Yöneticisi',
        bravioo: true,
        competitor1: false,
        competitor2: true,
        competitor3: true
      }
    ]
  };

  const renderCell = (value: boolean | string, isUs: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-5 h-5 mx-auto ${isUs ? 'text-emerald-600' : 'text-green-500'}`} />
      ) : (
        <X className="w-5 h-5 mx-auto text-red-400" />
      );
    }
    
    return (
      <span className={`text-sm font-semibold ${
        isUs ? 'text-emerald-600' : 'text-gray-700'
      }`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg border">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {category.icon}
                {t(category.nameKey)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Header Row */}
          <div className="bg-gray-50 p-6 border-b border-gray-200">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  {t('featureColumn')}
                </h3>
              </div>
              {competitors.map((competitor) => (
                <div key={competitor.id} className="text-center relative">
                  {competitor.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {competitor.badge}
                      </div>
                    </div>
                  )}
                  <div className={`p-4 rounded-xl ${
                    competitor.isUs ? 'bg-emerald-50 border border-emerald-200' : ''
                  }`}>
                    <h4 className={`text-lg font-bold mb-2 ${
                      competitor.isUs ? 'text-emerald-600' : 'text-gray-900'
                    }`}>
                      {competitor.name}
                    </h4>
                    <div className="text-sm text-gray-600 mb-2">
                      {competitor.price}
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{competitor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Rows */}
          <div>
            {comparisonData[selectedCategory as keyof typeof comparisonData].map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <span className="font-medium text-gray-900">
                    {row.feature}
                  </span>
                </div>
                <div className="text-center bg-emerald-50 rounded-lg py-2">
                  {renderCell(row.bravioo, true)}
                </div>
                <div className="text-center">
                  {renderCell(row.competitor1, false)}
                </div>
                <div className="text-center">
                  {renderCell(row.competitor2, false)}
                </div>
                <div className="text-center">
                  {renderCell(row.competitor3, false)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6">
            <div className="grid grid-cols-5 gap-4">
              <div></div>
              {competitors.map((competitor) => (
                <div key={competitor.id} className="text-center">
                  {competitor.isUs ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-lg"
                    >
                      {t('startTrial')}
                    </motion.button>
                  ) : (
                    <div className="text-xs text-gray-500">
                      {t('otherOption')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">%40</div>
            <div className="text-gray-600">{t('stat1')}</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2.5x</div>
            <div className="text-gray-600">{t('stat2')}</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">%98</div>
            <div className="text-gray-600">{t('stat3')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
