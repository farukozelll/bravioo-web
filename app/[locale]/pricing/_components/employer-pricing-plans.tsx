'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star, Users, Zap, Building, Crown } from 'lucide-react';

export function EmployerPricingPlans() {
  const t = useTranslations('pricing.employer');
  const locale = useLocale();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [currency, setCurrency] = useState<'USD' | 'TRY'>('TRY');
  const [exchangeRate, setExchangeRate] = useState<number>(35); // 1 USD = 35 TRY (fallback)

  const plans = [
    {
      id: 'starter',
      nameTR: 'Temel',
      nameEN: 'Essential',
      descKey: 'plans.starter.description',
      icon: <Users className="w-8 h-8" />,
      perSeatUSD: null,
      maxUsers: 50,
      popular: false,
      color: 'blue',
      modules: ['campaigns', 'surveys', 'announcements', 'feedback', 'analytics']
    },
    {
      id: 'growth',
      nameTR: 'Profesyonel',
      nameEN: 'Professional',
      descKey: 'plans.growth.description', 
      icon: <Zap className="w-8 h-8" />,
      perSeatUSD: null,
      maxUsers: 200,
      popular: true,
      color: 'emerald',
      modules: ['campaigns', 'surveys', 'announcements', 'feedback', 'analytics', 'giveaways', 'onboarding']
    },
    {
      id: 'scale',
      nameTR: 'Gelişmiş',
      nameEN: 'Advanced',
      descKey: 'plans.scale.description',
      icon: <Building className="w-8 h-8" />,
      perSeatUSD: null,
      maxUsers: 500,
      popular: false,
      color: 'purple',
      modules: ['campaigns', 'surveys', 'announcements', 'feedback', 'analytics', 'giveaways', 'onboarding', 'userManagement', 'ai']
    },
    {
      id: 'enterprise',
      nameTR: 'Premier',
      nameEN: 'Premier',
      descKey: 'plans.enterprise.description',
      icon: <Crown className="w-8 h-8" />,
      perSeatUSD: null,
      maxUsers: '500+',
      popular: false,
      color: 'gray',
      modules: ['campaigns', 'surveys', 'announcements', 'feedback', 'analytics', 'giveaways', 'onboarding', 'userManagement', 'ai', 'support', 'training', 'custom']
    }
  ];

  const getColorClasses = (color: string) => {
    const baseClasses = {
      blue: {
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        icon: 'bg-blue-100 text-blue-600'
      },
      emerald: {
        border: 'border-emerald-200',
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        icon: 'bg-emerald-100 text-emerald-600'
      },
      purple: {
        border: 'border-purple-200',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'bg-purple-100 text-purple-600'
      },
      gray: {
        border: 'border-gray-200',
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700',
        icon: 'bg-gray-100 text-gray-600'
      }
    };

    return baseClasses[color as keyof typeof baseClasses];
  };

  const currencySymbol = currency === 'USD' ? '$' : '₺';

  type PlanPricing = { perSeatUSD: number | null };

  const calculateMonthly = (plan: PlanPricing): number | null => {
    if (plan.perSeatUSD == null) return null;
    const rate = currency === 'USD' ? 1 : exchangeRate;
    return plan.perSeatUSD * rate; // per seat price only
  };

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6"
          >
            {t('plansTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8"
          >
            {t('plansSubtitle')}
          </motion.p>

          {/* Billing Toggle + Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <div className="inline-flex items-center bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {t('monthly')}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {t('yearly')}
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  25% {t('off')}
                </span>
              </button>
            </div>

            {/* Employees selector removed: pricing is per seat and not auto-calculated by headcount */}

            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700">
              <label className="text-sm text-gray-600 dark:text-gray-300">{t('currency')}</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as 'USD' | 'TRY')}
                className="h-9 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              >
                <option value="USD">$ USD</option>
                <option value="TRY">₺ TRY</option>
              </select>
              {currency === 'TRY' && (
                <input
                  type="number"
                  step="0.01"
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(Math.max(0.01, Number(e.target.value)))}
                  className="w-24 h-9 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            const monthly = calculateMonthly(plan);
            const yearly = monthly ? monthly * 12 * 0.75 : null;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`relative bg-white rounded-3xl shadow-xl border-2 ${colors.border} p-8 flex flex-col ${
                  plan.popular ? 'scale-105 shadow-2xl' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      {t('mostPopular')}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'tr' ? plan.nameTR : plan.nameEN}
                  </h3>
                  <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-semibold">
                    {typeof plan.maxUsers === 'number' 
                      ? (locale === 'tr' ? `En fazla ${plan.maxUsers} kullanıcı` : `Up to ${plan.maxUsers} users`) 
                      : (locale === 'tr' ? `${plan.maxUsers} kullanıcı` : `${plan.maxUsers} users`)}
                  </div>
                  <p className="text-gray-600">
                    {t(plan.descKey)}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {t('custom')}
                  </div>
                  <p className="text-sm text-gray-500">
                    {locale === 'tr' ? 'Fiyat bilgisi için iletişime geçin' : 'Contact us for pricing'}
                  </p>
                </div>

                {/* Modules */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">{t('includedModules')}</h4>
                  <div className="space-y-3">
                    {plan.modules.map((module) => (
                      <div key={module} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700">
                          {t(`modules.${module}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - bottom aligned, outlined */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-auto w-full border-2 ${colors.border} ${colors.text} py-4 rounded-2xl font-bold text-lg bg-white hover:shadow-md transition-all duration-300`}
                >
                  {t('getQuote')}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
