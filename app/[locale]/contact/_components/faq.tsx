'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/accordion';
import { HelpCircle, Shield, Clock, Users, Zap } from 'lucide-react';
import Image from 'next/image';

export function FAQSection() {
  const locale = useLocale();
  const t = useTranslations('contactFaq');

  const faqItems = [
    {
      id: 'setup-time',
      question: t('q.setupTime.question'),
      answer: t('q.setupTime.answer'),
    },
    {
      id: 'integrations',
      question: t('q.integrations.question'),
      answer: t('q.integrations.answer'),
    },
    {
      id: 'security',
      question: t('q.security.question'),
      answer: t('q.security.answer'),
    },
    {
      id: 'pricing',
      question: t('q.pricing.question'),
      answer: t('q.pricing.answer'),
    },
    {
      id: 'support',
      question: t('q.support.question'),
      answer: t('q.support.answer'),
    },
  ];



  return (
    <section className="bg-gradient-to-br from-sand-50 to-white py-24 transition-colors dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-emerald-600">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="mb-6 font-display text-4xl font-bold text-ink-900 dark:text-gray-100 md:text-5xl">{t('title')}</h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-ink-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left side - Visual & Features */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Professional Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl dark:border-gray-700"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                    alt={locale === 'tr' ? 'Bravioo Ekibi' : 'Bravioo Team'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="mb-2 font-display text-2xl font-bold">
                        {locale === 'tr' ? 'Neden Bravioo?' : 'Why Bravioo?'}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/90">
                        {locale === 'tr'
                          ? 'Binlerce şirketin güvendiği platform'
                          : 'The platform trusted by thousands of companies'}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
