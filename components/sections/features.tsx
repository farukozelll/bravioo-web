'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Users, 
  Gift, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  Heart,
  Trophy,
  Target
} from 'lucide-react';

export function FeaturesSection() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Users,
      title: t('recognition.title'),
      description: t('recognition.description'),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Gift,
      title: t('rewards.title'),
      description: t('rewards.description'),
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: BarChart3,
      title: t('analytics.title'),
      description: t('analytics.description'),
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: t('integrations.title'),
      description: t('integrations.description'),
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, SAML, and compliance certifications.',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Support for 50+ countries with local rewards and multi-currency.',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Heart,
      title: 'Culture Building',
      description: 'Foster a positive workplace culture with meaningful recognition.',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Leaderboards, badges, and challenges to drive engagement.',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Align recognition with company objectives and performance metrics.',
      gradient: 'from-teal-500 to-teal-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl font-display">
            {t('title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-ink-600">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col group"
                >
                  <dt className="text-base font-semibold leading-7 text-ink-900">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                      <div className={`h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-ink-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </motion.div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 mx-auto max-w-4xl"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-gold-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-brand-50 to-gold-50 rounded-3xl p-8 lg:p-12 border border-brand-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-4 font-display">
                    See the Impact in Real-Time
                  </h3>
                  <p className="text-ink-600 mb-6">
                    Track engagement metrics, recognition trends, and ROI with our comprehensive analytics dashboard. 
                    Make data-driven decisions to improve your workplace culture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-500 rounded-full" />
                      <span>Real-time metrics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-500 rounded-full" />
                      <span>Custom reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-500 rounded-full" />
                      <span>ROI tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-500 rounded-full" />
                      <span>Trend analysis</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-white rounded-2xl shadow-lg border border-sand-200 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-brand-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-ink-800">Analytics Dashboard</p>
                    <p className="text-sm text-ink-500">Coming soon preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
