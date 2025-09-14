'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileText, Users, Rocket, BarChart3, ArrowRight } from 'lucide-react';

export function BrandPartnershipProcess() {
  const t = useTranslations('pricing.brands');

  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      titleKey: 'process.step1.title',
      descKey: 'process.step1.description',
      color: 'blue'
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.description',
      color: 'emerald'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      titleKey: 'process.step3.title',
      descKey: 'process.step3.description',
      color: 'purple'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.description',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const classes = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
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
            {t('processTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('processSubtitle')}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="bg-white border-4 border-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-xl font-bold text-gray-700">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${getColorClasses(step.color)} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(step.descKey)}
                </p>

                {/* Arrow (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-6 text-gray-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t('successStoriesTitle')}
              </h3>
              <p className="text-xl text-gray-600">
                {t('successStoriesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">250%</div>
                <div className="text-gray-900 font-semibold mb-2">{t('story1.metric')}</div>
                <div className="text-gray-600 text-sm">{t('story1.brand')}</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">150%</div>
                <div className="text-gray-900 font-semibold mb-2">{t('story2.metric')}</div>
                <div className="text-gray-600 text-sm">{t('story2.brand')}</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-gray-900 font-semibold mb-2">{t('story3.metric')}</div>
                <div className="text-gray-600 text-sm">{t('story3.brand')}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('finalCTA.title')}
            </h3>
            <p className="text-xl mb-8 text-purple-100">
              {t('finalCTA.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300"
              >
                {t('finalCTA.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                {t('finalCTA.secondaryButton')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
