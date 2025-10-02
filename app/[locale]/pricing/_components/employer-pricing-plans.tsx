'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star, Users, Zap, Building, Crown } from 'lucide-react';

export function EmployerPricingPlans() {
  const t = useTranslations('pricing.employer');
  const locale = useLocale();

  const plans = [
    {
      id: 'starter',
      nameTR: 'Temel',
      nameEN: 'Essential',
      descKey: 'plans.starter.description',
      icon: <Users className="h-8 w-8" />,
      perSeatUSD: null,
      maxUsers: 50,
      popular: false,
      color: 'blue',
      modules: [
        'campaigns',
        'surveys',
        'announcements',
        'feedback',
        'analytics',
      ],
    },
    {
      id: 'growth',
      nameTR: 'Profesyonel',
      nameEN: 'Professional',
      descKey: 'plans.growth.description',
      icon: <Zap className="h-8 w-8" />,
      perSeatUSD: null,
      maxUsers: 200,
      popular: true,
      color: 'emerald',
      modules: [
        'campaigns',
        'surveys',
        'announcements',
        'feedback',
        'analytics',
        'giveaways',
        'onboarding',
      ],
    },
    {
      id: 'scale',
      nameTR: 'Gelişmiş',
      nameEN: 'Advanced',
      descKey: 'plans.scale.description',
      icon: <Building className="h-8 w-8" />,
      perSeatUSD: null,
      maxUsers: 500,
      popular: false,
      color: 'purple',
      modules: [
        'campaigns',
        'surveys',
        'announcements',
        'feedback',
        'analytics',
        'giveaways',
        'onboarding',
        'userManagement',
        'ai',
      ],
    },
    {
      id: 'enterprise',
      nameTR: 'Premier',
      nameEN: 'Premier',
      descKey: 'plans.enterprise.description',
      icon: <Crown className="h-8 w-8" />,
      perSeatUSD: null,
      maxUsers: '500+',
      popular: false,
      color: 'gray',
      modules: [
        'campaigns',
        'surveys',
        'announcements',
        'feedback',
        'analytics',
        'giveaways',
        'onboarding',
        'userManagement',
        'ai',
        'support',
        'training',
        'custom',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const baseClasses = {
      blue: {
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        icon: 'bg-blue-100 text-blue-600',
      },
      emerald: {
        border: 'border-emerald-200',
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        icon: 'bg-emerald-100 text-emerald-600',
      },
      purple: {
        border: 'border-purple-200',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'bg-purple-100 text-purple-600',
      },
      gray: {
        border: 'border-gray-200',
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700',
        icon: 'bg-gray-100 text-gray-600',
      },
    };

    return baseClasses[color as keyof typeof baseClasses];
  };

  // Currency calculations removed per request; pricing is custom/quote-based

  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-gray-900 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:mb-6 lg:text-5xl"
          >
            {t('plansTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-lg text-gray-600 dark:text-gray-300 lg:mb-8 lg:text-xl"
          >
            {t('plansSubtitle')}
          </motion.p>

          {/* Controls removed: currency calculation and selectors are no longer shown */}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`relative rounded-3xl border-2 bg-white shadow-xl ${colors.border} flex flex-col p-8 ${
                  plan.popular ? 'scale-105 shadow-2xl' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute inset-x-0 -top-4 flex justify-center">
                    <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-600 px-8 py-2.5 text-sm font-bold text-white">
                      <Star className="h-4 w-4" />
                      {t('mostPopular')}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <div
                    className={`h-16 w-16 ${colors.icon} mx-auto mb-4 flex items-center justify-center rounded-2xl`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {locale === 'tr' ? plan.nameTR : plan.nameEN}
                  </h3>
                  <div className="mb-3 inline-block rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-800">
                    {typeof plan.maxUsers === 'number'
                      ? locale === 'tr'
                        ? `En fazla ${plan.maxUsers} kullanıcı`
                        : `Up to ${plan.maxUsers} users`
                      : locale === 'tr'
                        ? `${plan.maxUsers} kullanıcı`
                        : `${plan.maxUsers} users`}
                  </div>
                  <p className="text-gray-600">{t(plan.descKey)}</p>
                </div>

                {/* Pricing */}
                <div className="mb-8 text-center">
                  {/*    <div className="text-4xl font-bold text-gray-900 mb-2">
                    {t('custom')}
                  </div> */}
                  <p className="text-sm text-gray-500">
                    {locale === 'tr'
                      ? 'Fiyat bilgisi için iletişime geçin'
                      : 'Contact us for pricing'}
                  </p>
                </div>

                {/* Modules */}
                <div className="mb-8">
                  <h4 className="mb-4 font-semibold text-gray-900">
                    {t('includedModules')}
                  </h4>
                  <div className="space-y-3">
                    {plan.modules.map((module) => (
                      <div key={module} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-emerald-600" />
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
                  className={`mt-auto w-full border-2 ${colors.border} ${colors.text} rounded-2xl bg-white py-4 text-lg font-bold transition-all duration-300 hover:shadow-md`}
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
