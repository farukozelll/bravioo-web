'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { analytics } from '@/components/analytics';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Users, 
  Gift, 
  Crown,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

export function PricingSection() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const handlePlanClick = (plan: string, price: string) => {
    analytics.pricingCta(plan, 'click');
  };

  const freeModel = {
    title: locale === 'tr' ? 'Ücretsiz Model' : 'Free Model',
    subtitle: locale === 'tr' ? 'Marka İndirimleri' : 'Brand Discounts',
    description: locale === 'tr' 
      ? 'Anlaşmalı markalardan özel indirimler ve avantajlar'
      : 'Special discounts and benefits from partner brands',
    price: locale === 'tr' ? 'Ücretsiz' : 'Free',
    popular: false,
    features: [
      locale === 'tr' ? 'Anlaşmalı marka indirimleri' : 'Partner brand discounts',
      locale === 'tr' ? 'Temel takdir sistemi' : 'Basic recognition system',
      locale === 'tr' ? 'E-posta bildirimleri' : 'Email notifications',
      locale === 'tr' ? 'Temel raporlama' : 'Basic reporting',
      locale === 'tr' ? 'Topluluk desteği' : 'Community support',
    ],
    cta: locale === 'tr' ? 'Ücretsiz Başla' : 'Start Free',
    gradient: 'from-emerald-500 to-teal-600',
  };

  const paidPlans = [
    {
      range: '0-50',
      title: locale === 'tr' ? '0-50 Personel' : '0-50 Employees',
      price: 10,
      popular: false,
    },
    {
      range: '51-100',
      title: locale === 'tr' ? '51-100 Personel' : '51-100 Employees',
      price: 5,
      popular: true,
    },
    {
      range: '101-500',
      title: locale === 'tr' ? '101-500 Personel' : '101-500 Employees',
      price: 3,
      popular: false,
    },
    {
      range: '501-5000',
      title: locale === 'tr' ? '501-5000 Personel' : '501-5000 Employees',
      price: null,
      popular: false,
    },
    {
      range: '5000+',
      title: locale === 'tr' ? '5000+ Personel' : '5000+ Employees',
      price: null,
      popular: false,
    },
  ];

  const paidFeatures = [
    locale === 'tr' ? 'Tüm ücretsiz özellikler' : 'All free features',
    locale === 'tr' ? 'Gelişmiş analitik' : 'Advanced analytics',
    locale === 'tr' ? 'Özel takdir kategorileri' : 'Custom recognition categories',
    locale === 'tr' ? 'Slack & Teams entegrasyonu' : 'Slack & Teams integration',
    locale === 'tr' ? 'Yönetici paneli' : 'Manager dashboard',
    locale === 'tr' ? 'API erişimi' : 'API access',
    locale === 'tr' ? 'Öncelikli destek' : 'Priority support',
    locale === 'tr' ? 'Özel markalama' : 'Custom branding',
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
    <section className="py-24 sm:py-32 bg-gradient-to-br from-sand-50 via-white to-brand-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl font-display">
            <span className="block">{locale === 'tr' ? 'Basit ve Şeffaf' : 'Simple & Transparent'}</span>
            <span className="block bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Fiyatlandırma' : 'Pricing'}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-600 max-w-3xl mx-auto">
            {locale === 'tr' 
              ? 'İki farklı model ile işletmenizin ihtiyaçlarına uygun çözümler sunuyoruz.'
              : 'We offer solutions tailored to your business needs with two different models.'
            }
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center">
            <div className="relative flex bg-sand-100 rounded-2xl p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {locale === 'tr' ? 'Aylık' : 'Monthly'}
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  billingCycle === 'annually'
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {locale === 'tr' ? 'Yıllık' : 'Annual'}
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gold-100 text-gold-800">
                  20% {locale === 'tr' ? 'İndirim' : 'Off'}
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Models */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Free Model */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
                <div className="px-8 py-12 sm:px-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                          <Gift className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-ink-900 font-display">{freeModel.title}</h3>
                          <p className="text-emerald-600 font-medium">{freeModel.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-ink-600 max-w-md">{freeModel.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-ink-900 font-display">{freeModel.price}</div>
                      <p className="text-sm text-ink-500">{locale === 'tr' ? 'Sonsuza kadar' : 'Forever'}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="font-semibold text-ink-900 mb-4">{locale === 'tr' ? 'Dahil Özellikler:' : 'Included Features:'}</h4>
                      <ul className="space-y-3">
                        {freeModel.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-ink-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <Button
                        size="xl"
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => handlePlanClick('free', '0')}
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        {freeModel.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paid Plans */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-gold-500/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-brand-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-6">
                  <div className="flex items-center justify-center gap-3">
                    <Crown className="h-8 w-8 text-gold-300" />
                    <h3 className="text-3xl font-bold text-white font-display">
                      {locale === 'tr' ? 'Profesyonel Model' : 'Professional Model'}
                    </h3>
                    <Crown className="h-8 w-8 text-gold-300" />
                  </div>
                  <p className="text-center text-brand-100 mt-2">
                    {locale === 'tr' 
                      ? 'Personel sayınıza göre aylık ödeme'
                      : 'Monthly payment based on employee count'
                    }
                  </p>
                </div>

                <div className="px-8 py-12 sm:px-12">
                  {/* Pricing Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
                    {paidPlans.map((plan, index) => (
                      <div
                        key={plan.range}
                        className={`relative rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:scale-105 ${
                          plan.popular
                            ? 'border-brand-500 bg-brand-50 shadow-lg'
                            : 'border-sand-200 bg-white hover:border-brand-300'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                              {locale === 'tr' ? 'Popüler' : 'Popular'}
                            </div>
                          </div>
                        )}
                        
                        <div className="mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="font-bold text-ink-900 text-lg">{plan.title}</h4>
                        </div>

                        <div className="mb-4">
                          {plan.price ? (
                            <>
                              <div className="text-3xl font-bold text-ink-900 font-display">
                                ${billingCycle === 'annually' ? Math.round(plan.price * 0.8) : plan.price}
                              </div>
                              <div className="text-sm text-ink-500">
                                {locale === 'tr' ? 'kullanıcı/ay' : 'per user/month'}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-2xl font-bold text-brand-600 font-display">
                                {locale === 'tr' ? 'Özel Teklif' : 'Custom Quote'}
                              </div>
                              <div className="text-sm text-ink-500">
                                {locale === 'tr' ? 'İletişime geçin' : 'Contact us'}
                              </div>
                            </>
                          )}
                        </div>

                        <Button
                          variant={plan.popular ? 'default' : 'outline'}
                          className="w-full"
                          onClick={() => handlePlanClick(plan.range, plan.price?.toString() || 'custom')}
                        >
                          {plan.price ? (
                            locale === 'tr' ? 'Başla' : 'Get Started'
                          ) : (
                            locale === 'tr' ? 'Teklif Al' : 'Get Quote'
                          )}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="border-t border-sand-200 pt-8">
                    <h4 className="font-semibold text-ink-900 mb-6 text-center">
                      {locale === 'tr' ? 'Tüm Profesyonel Planlarda Dahil:' : 'Included in All Professional Plans:'}
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {paidFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-brand-600" />
                          </div>
                          <span className="text-ink-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl px-8 py-12 text-white">
            <Zap className="h-12 w-12 mx-auto mb-6 text-gold-300" />
            <h3 className="text-2xl font-bold mb-4 font-display">
              {locale === 'tr' ? 'Hangi model sizin için uygun?' : 'Which model is right for you?'}
            </h3>
            <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
              {locale === 'tr' 
                ? 'Uzmanlarımızla konuşun ve işletmeniz için en uygun çözümü bulun.'
                : 'Talk to our experts and find the best solution for your business.'
              }
            </p>
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-brand-600 hover:bg-sand-50"
            >
              {locale === 'tr' ? 'Ücretsiz Danışmanlık Al' : 'Get Free Consultation'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
