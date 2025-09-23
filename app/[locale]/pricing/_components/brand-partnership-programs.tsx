'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Crown, Rocket, Building, Gift } from 'lucide-react';

export function BrandPartnershipPrograms() {
  const t = useTranslations('pricing.brands');
  const locale = useLocale();

  const programs = [
    {
      id: 'bronze',
      icon: <Star className="w-8 h-8" />,
      nameKey: 'programs.bronze.name',
      descKey: 'programs.bronze.description',
      color: 'bronze',
      commission: '15%',
      tier: 'Bronze',
      benefits: 'Temel avantajlar',
      features: ['basic', 'support', 'marketing1']
    },
    {
      id: 'silver',
      icon: <Building className="w-8 h-8" />,
      nameKey: 'programs.silver.name',
      descKey: 'programs.silver.description',
      color: 'silver',
      commission: '20%',
      tier: 'Silver',
      benefits: 'Gelişmiş avantajlar',
      popular: true,
      features: ['basic', 'support', 'marketing1', 'marketing2', 'analytics']
    },
    {
      id: 'gold',
      icon: <Crown className="w-8 h-8" />,
      nameKey: 'programs.gold.name',
      descKey: 'programs.gold.description',
      color: 'gold',
      commission: '25%',
      tier: 'Gold',
      benefits: 'Premium avantajlar',
      features: ['basic', 'support', 'marketing1', 'marketing2', 'analytics', 'priority', 'custom']
    },
    {
      id: 'platinum',
      icon: <Rocket className="w-8 h-8" />,
      nameKey: 'programs.platinum.name',
      descKey: 'programs.platinum.description',
      color: 'platinum',
      commission: '30%',
      tier: 'Platinum',
      benefits: 'Maksimum avantajlar',
      features: ['all', 'dedicated', 'whiteboard', 'events']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Free Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl">
            <Gift className="w-6 h-6" />
            <span>100% ÜCRETSİZ</span>
            <span className="text-emerald-200">•</span>
            <span>100% FREE</span>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('programsTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t('programsSubtitle')}
          </motion.p>
          
          {/* Additional emphasis on free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 mx-auto max-w-2xl"
          >
            <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
              🎯 {locale === 'tr' ? 'Hiçbir ödeme yok, sadece performansa göre komisyon kazanın!' : 'No payments required, earn commission based on performance only!'}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 p-8 flex flex-col ${
                program.color === 'bronze' ? 'border-amber-600' :
                program.color === 'silver' ? 'border-gray-400' :
                program.color === 'gold' ? 'border-yellow-400' :
                program.color === 'platinum' ? 'border-purple-500' : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {t('recommended')}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 
                  ${program.color === 'bronze' ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-600 dark:border-amber-700' : ''}
                  ${program.color === 'silver' ? 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-500' : ''}
                  ${program.color === 'gold' ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-400 dark:border-yellow-600' : ''}
                  ${program.color === 'platinum' ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-500 dark:border-purple-600' : ''}
                `}>
                  {program.icon}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  program.color === 'bronze' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' :
                  program.color === 'silver' ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200' :
                  program.color === 'gold' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                  program.color === 'platinum' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : ''
                }`}>
                  {program.tier} TIER
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(program.nameKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {program.benefits}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="relative">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    ÜCRETSİZ
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    FREE TIER
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {program.commission}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Komisyon Oranı
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t(`programFeatures.${feature}`)}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`mt-auto w-full py-4 rounded-2xl font-bold transition-all duration-300 border-2 hover:scale-105 ${
                program.color === 'bronze' ? 'border-amber-600 text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20' :
                program.color === 'silver' ? 'border-gray-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/20' :
                program.color === 'gold' ? 'border-yellow-400 text-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20' :
                program.color === 'platinum' ? 'border-purple-500 text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20' : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100'
              } bg-white dark:bg-gray-900 hover:shadow-xl shadow-lg`}>
                <div className="flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5" />
                  <span>{locale === 'tr' ? 'Ücretsiz Başla' : 'Start Free'}</span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
