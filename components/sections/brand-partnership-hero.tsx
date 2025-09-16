'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, Target, ArrowRight, Filter, Ticket } from 'lucide-react';

export function BrandPartnershipHero() {
  const t = useTranslations('pricing.brands');

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      valueKey: 'stats.employees',
      labelKey: 'stats.employeesLabel'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      valueKey: 'stats.conversion',
      labelKey: 'stats.conversionLabel'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      valueKey: 'stats.loyalty',
      labelKey: 'stats.loyaltyLabel'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-purple-100/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf: Ana İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Target className="w-4 h-4" />
              {t('badgeText')}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t('title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block">
                {t('titleHighlight')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t('ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                {t('ctaSecondary')}
              </motion.button>
            </div>

        

            {/* Güven Göstergeleri */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>{t('trustBadge1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>{t('trustBadge2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>{t('trustBadge3')}</span>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf: Satış Hunisi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Satış Hunisi (ikon + metin içeride) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8"
            >
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex justify-center">
                  <div
                    className="relative w-full max-w-sm text-white"
                    style={{
                      clipPath: 'polygon(4% 0, 96% 0, 100% 20%, 94% 100%, 6% 100%, 0 20%)',
                      background: '#05d686'
                    }}
                  >
                    <div className="flex items-center justify-center gap-3 py-6">
                      <Users className="w-6 h-6" />
                      <span className="font-bold text-lg">Demografik Bilgiler</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex justify-center">
                  <div
                    className="relative w-full max-w-xs text-white"
                    style={{
                      clipPath: 'polygon(6% 0, 94% 0, 100% 20%, 92% 100%, 8% 100%, 0 20%)',
                      background: '#04c07a'
                    }}
                  >
                    <div className="flex items-center justify-center gap-3 py-6">
                      <Target className="w-6 h-6" />
                      <span className="font-bold text-lg">Hedefleme</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex justify-center">
                  <div
                    className="relative w-full max-w-[220px] text-white"
                    style={{
                      clipPath: 'polygon(8% 0, 92% 0, 100% 20%, 72% 20%, 72% 65%, 50% 82%, 28% 65%, 28% 20%, 0 20%)',
                      background: '#059669'
                    }}
                  >
                    <div className="flex items-center justify-center gap-3 py-6">
                      <Ticket className="w-6 h-6" />
                      <span className="font-bold text-lg"> Kupon</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
