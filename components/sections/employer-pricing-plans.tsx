'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star, Users, Zap, Building, Crown } from 'lucide-react';

export function EmployerPricingPlans() {
  const t = useTranslations('pricing.employer');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [currency, setCurrency] = useState<'USD' | 'TRY'>('USD');
  const [exchangeRate, setExchangeRate] = useState<number>(42); // 1 USD = 42 TRY (fallback)

  const plans = [
    {
      id: 'starter',
      nameKey: 'plans.starter.name',
      descKey: 'plans.starter.description',
      icon: <Users className="w-8 h-8" />,
      perSeatUSD: 10,
      maxUsers: 50,
      popular: false,
      color: 'blue',
      modules: ['recognition', 'surveys', 'analytics']
    },
    {
      id: 'growth',
      nameKey: 'plans.growth.name',
      descKey: 'plans.growth.description', 
      icon: <Zap className="w-8 h-8" />,
      perSeatUSD: 9,
      maxUsers: 200,
      popular: true,
      color: 'emerald',
      modules: ['recognition', 'surveys', 'analytics', 'automation', 'integrations']
    },
    {
      id: 'scale',
      nameKey: 'plans.scale.name',
      descKey: 'plans.scale.description',
      icon: <Building className="w-8 h-8" />,
      perSeatUSD: 8,
      maxUsers: 500,
      popular: false,
      color: 'purple',
      modules: ['recognition', 'surveys', 'analytics', 'automation', 'integrations', 'mobile', 'api']
    },
    {
      id: 'enterprise',
      nameKey: 'plans.enterprise.name',
      descKey: 'plans.enterprise.description',
      icon: <Crown className="w-8 h-8" />,
      perSeatUSD: null,
      maxUsers: '500+',
      popular: false,
      color: 'gray',
      modules: ['all', 'custom', 'support', 'training']
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6"
          >
            {t('plansTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8"
          >
            {t('plansSubtitle')}
          </motion.p>

          {/* Billing Toggle + Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                className="h-9 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
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
                    {t(plan.nameKey)}
                  </h3>
                  <p className="text-gray-600">
                    {t(plan.descKey)}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  {monthly ? (
                    <>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {currencySymbol}{billingCycle === 'monthly' ? Math.round(monthly).toLocaleString() : Math.round(yearly || 0).toLocaleString()}
                        <span className="text-lg text-gray-500 font-normal">/{billingCycle === 'monthly' ? t('month') : t('year')}</span>
                        <span className="ml-2 text-sm text-gray-500 align-middle">· {t('perSeat')}</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-gray-500">
                          25% {t('off')} ({currencySymbol}{Math.round((monthly * 12) - (yearly || 0)).toLocaleString()} {t('saved')})
                        </div>
                      )}
                      <div className="text-sm text-gray-600 mt-2">
                        {typeof plan.maxUsers === 'number' ? `${plan.maxUsers} ${t('usersMax')}` : `${plan.maxUsers} ${t('usersMax')}`}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {t('custom')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {plan.maxUsers} {t('usersMax')}
                      </div>
                    </>
                  )}
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
                  {plan.id === 'enterprise' ? t('getQuote') : t('startTrial')}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('enterpriseNote.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('enterpriseNote.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                {t('contactSales')}
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                {t('scheduleDemo')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
