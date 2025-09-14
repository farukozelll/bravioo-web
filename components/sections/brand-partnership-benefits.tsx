'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Heart, 
  Gift, 
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

export function BrandPartnershipBenefits() {
  const t = useTranslations('pricing.brands');

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      titleKey: 'benefits.targeted.title',
      descKey: 'benefits.targeted.description',
      color: 'blue',
      stats: ['%85', '%40']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titleKey: 'benefits.sales.title',
      descKey: 'benefits.sales.description',
      color: 'emerald',
      stats: ['%120', '%60']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      titleKey: 'benefits.loyalty.title',
      descKey: 'benefits.loyalty.description',
      color: 'purple',
      stats: ['%200', '%75']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      titleKey: 'benefits.analytics.title',
      descKey: 'benefits.analytics.description',
      color: 'orange',
      stats: ['7/24', 'Real-time']
    },
    {
      icon: <Gift className="w-8 h-8" />,
      titleKey: 'benefits.rewards.title',
      descKey: 'benefits.rewards.description',
      color: 'pink',
      stats: ['%95', '%50']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titleKey: 'benefits.reputation.title',
      descKey: 'benefits.reputation.description',
      color: 'indigo',
      stats: ['%150', 'B2B']
    }
  ];

  const getColorClasses = (color: string) => {
    const classes = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-200',
        bgLight: 'bg-blue-50'
      },
      emerald: {
        bg: 'from-emerald-500 to-emerald-600',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        bgLight: 'bg-emerald-50'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-200',
        bgLight: 'bg-purple-50'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        text: 'text-orange-600',
        border: 'border-orange-200',
        bgLight: 'bg-orange-50'
      },
      pink: {
        bg: 'from-pink-500 to-pink-600',
        text: 'text-pink-600',
        border: 'border-pink-200',
        bgLight: 'bg-pink-50'
      },
      indigo: {
        bg: 'from-indigo-500 to-indigo-600',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        bgLight: 'bg-indigo-50'
      }
    };

    return classes[color as keyof typeof classes];
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('benefitsTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('benefitsSubtitle')}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-white rounded-3xl shadow-xl border-2 ${colors.border} p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.bg} opacity-5 rounded-full transform translate-x-8 -translate-y-8`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center text-white mb-6 relative z-10`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t(benefit.descKey)}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4">
                    {benefit.stats.map((stat, statIndex) => (
                      <div key={statIndex} className={`${colors.bgLight} px-4 py-2 rounded-full`}>
                        <span className={`font-bold ${colors.text}`}>
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('ctaSection.title')}
              </h3>
              <p className="text-xl mb-8 text-purple-100">
                {t('ctaSection.description')}
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Users className="w-6 h-6 text-purple-200" />
                  <span className="text-purple-100">{t('ctaSection.feature1')}</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Zap className="w-6 h-6 text-purple-200" />
                  <span className="text-purple-100">{t('ctaSection.feature2')}</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Globe className="w-6 h-6 text-purple-200" />
                  <span className="text-purple-100">{t('ctaSection.feature3')}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                >
                  {t('ctaSection.primaryButton')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                >
                  {t('ctaSection.secondaryButton')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
