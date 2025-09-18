'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';

export function EmployerPricingComparison() {
  const t = useTranslations('pricing.employer');

  const features = [
    {
      categoryKey: 'features.core',
      features: [
        { key: 'userLimit', starter: '50', growth: '200', scale: '500', enterprise: 'Sınırsız' },
        { key: 'recognition', starter: true, growth: true, scale: true, enterprise: true },
        { key: 'surveys', starter: true, growth: true, scale: true, enterprise: true },
        { key: 'polls', starter: true, growth: true, scale: true, enterprise: true },
        { key: 'basicAnalytics', starter: true, growth: true, scale: true, enterprise: true },
        { key: 'emailSupport', starter: true, growth: true, scale: true, enterprise: true }
      ]
    },
    {
      categoryKey: 'features.advanced',
      features: [
        { key: 'automation', starter: false, growth: true, scale: true, enterprise: true },
        { key: 'integrations', starter: false, growth: '5', scale: '15', enterprise: 'Sınırsız' },
        { key: 'feedback', starter: false, growth: true, scale: true, enterprise: true },
        { key: 'campaigns', starter: false, growth: true, scale: true, enterprise: true },
        { key: 'advancedAnalytics', starter: false, growth: true, scale: true, enterprise: true },
        { key: 'customBranding', starter: false, growth: false, scale: true, enterprise: true },
        { key: 'prioritySupport', starter: false, growth: false, scale: true, enterprise: true }
      ]
    },
    {
      categoryKey: 'features.premium',
      features: [
        { key: 'mobileApp', starter: false, growth: false, scale: true, enterprise: true },
        { key: 'apiAccess', starter: false, growth: false, scale: true, enterprise: true },
        { key: 'giveaways', starter: false, growth: false, scale: true, enterprise: true },
        { key: 'announcements', starter: false, growth: false, scale: true, enterprise: true },
        { key: 'userManagement', starter: false, growth: false, scale: false, enterprise: true },
        { key: 'ssoIntegration', starter: false, growth: false, scale: false, enterprise: true },
        { key: 'customModules', starter: false, growth: false, scale: false, enterprise: true },
        { key: 'dedicatedManager', starter: false, growth: false, scale: false, enterprise: true },
        { key: 'onSiteTraining', starter: false, growth: false, scale: false, enterprise: true }
      ]
    }
  ];

  const plans = [
    { id: 'starter', nameKey: 'plans.starter.name', popular: false },
    { id: 'growth', nameKey: 'plans.growth.name', popular: true },
    { id: 'scale', nameKey: 'plans.scale.name', popular: false },
    { id: 'enterprise', nameKey: 'plans.enterprise.name', popular: false }
  ];

  const renderFeatureValue = (value: boolean | string, planId: string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-400 mx-auto" />
      );
    }
    
    return (
      <span className={`text-sm font-semibold ${
        planId === 'growth' ? 'text-emerald-600' : 'text-gray-900'
      }`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('comparisonTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            {t('comparisonSubtitle')}
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('featuresTitle')}</h3>
              </div>
              {plans.map((plan) => (
                <div key={plan.id} className="text-center relative">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {t('popular')}
                      </div>
                    </div>
                  )}
                    <h4 className={`text-lg font-bold ${
                    plan.popular ? 'text-emerald-600' : 'text-gray-900 dark:text-white'
                  }`}>
                    {t(plan.nameKey)}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Categories */}
          {features.map((category, categoryIndex) => (
            <div key={category.categoryKey} className="border-b border-gray-200 last:border-b-0">
              {/* Category Header */}
              <div className="bg-gray-50 p-4 border-b border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t(category.categoryKey)}
                </h4>
              </div>

              {/* Category Features */}
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.05) + (featureIndex * 0.02) }}
                  className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="text-left">
                    <span className="text-gray-900 font-medium">
                      {t(`featuresList.${feature.key}`)}
                    </span>
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(feature.starter, 'starter')}
                  </div>
                  <div className="text-center bg-emerald-50 rounded-lg py-2">
                    {renderFeatureValue(feature.growth, 'growth')}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(feature.scale, 'scale')}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(feature.enterprise, 'enterprise')}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}

          {/* CTA Footer */}
          <div className="bg-gray-50 p-6">
            <div className="grid grid-cols-5 gap-4">
              <div></div>
              {plans.map((plan) => (
                <div key={plan.id} className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg'
                        : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
                    }`}
                  >
                    {plan.id === 'enterprise' ? t('getQuote') : t('startTrial')}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-blue-900 mb-2">
                {t('guarantee.title')}
              </h4>
              <p className="text-blue-700">
                {t('guarantee.description')}
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-emerald-900 mb-2">
                {t('migration.title')}
              </h4>
              <p className="text-emerald-700">
                {t('migration.description')}
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-purple-900 mb-2">
                {t('support.title')}
              </h4>
              <p className="text-purple-700">
                {t('support.description')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
