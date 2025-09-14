'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Crown, Rocket, Building } from 'lucide-react';

export function BrandPartnershipPrograms() {
  const t = useTranslations('pricing.brands');

  const programs = [
    {
      id: 'bronze',
      icon: <Star className="w-8 h-8" />,
      nameKey: 'programs.bronze.name',
      descKey: 'programs.bronze.description',
      color: 'orange',
      commission: '15%',
      features: ['basic', 'support', 'marketing1']
    },
    {
      id: 'silver',
      icon: <Building className="w-8 h-8" />,
      nameKey: 'programs.silver.name',
      descKey: 'programs.silver.description',
      color: 'gray',
      commission: '20%',
      popular: true,
      features: ['basic', 'support', 'marketing1', 'marketing2', 'analytics']
    },
    {
      id: 'gold',
      icon: <Crown className="w-8 h-8" />,
      nameKey: 'programs.gold.name',
      descKey: 'programs.gold.description',
      color: 'yellow',
      commission: '25%',
      features: ['basic', 'support', 'marketing1', 'marketing2', 'analytics', 'priority', 'custom']
    },
    {
      id: 'platinum',
      icon: <Rocket className="w-8 h-8" />,
      nameKey: 'programs.platinum.name',
      descKey: 'programs.platinum.description',
      color: 'purple',
      commission: '30%',
      features: ['all', 'dedicated', 'whiteboard', 'events']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('programsTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            {t('programsSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`relative bg-white rounded-3xl shadow-xl border-2 p-8 ${
                program.popular ? 'border-emerald-300 scale-105' : 'border-gray-200'
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(program.nameKey)}
                </h3>
                <p className="text-gray-600">
                  {t(program.descKey)}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {program.commission}
                </div>
                <div className="text-sm text-gray-600">
                  {t('commission')}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-gray-700">
                      {t(`programFeatures.${feature}`)}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                program.popular
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                {t('joinProgram')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
