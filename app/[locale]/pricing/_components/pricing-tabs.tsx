'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Gift } from 'lucide-react';

// Import the components for the tabs
import { EmployerPricingPlans } from '@/app/[locale]/pricing/_components/employer-pricing-plans';
import { BrandPartnershipSingle } from '@/app/[locale]/pricing/_components/brand-partnership-single';

// Simplified, professional tab bar

interface PricingTabsProps {
  locale: string;
}

export function PricingTabs({ locale }: PricingTabsProps) {
  const [activeTab, setActiveTab] = useState<'employer' | 'brands'>('employer');

  const t = (tr: string, en: string) => (locale === 'tr' ? tr : en);

  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {t('İki Model Arasından Seçin', 'Choose Between Two Models')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-600 dark:text-gray-300"
          >
            {t('İhtiyacınıza uygun modeli seçin', 'Select the model that fits your needs')}
          </motion.p>
        </div>

        {/* Tab Bar */}
        <div className="mb-10">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-1">
              <button
                onClick={() => setActiveTab('employer')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'employer'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-selected={activeTab === 'employer'}
                role="tab"
              >
                <Building2 className="w-5 h-5" />
                {t('İşveren', 'Employer')}
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'brands'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-selected={activeTab === 'brands'}
                role="tab"
              >
                <Gift className="w-5 h-5" />
                {t('Marka', 'Brand')}
              </button>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
            {activeTab === 'employer'
              ? t('Çalışan sayısına göre esnek fiyatlandırma', 'Flexible pricing by employee count')
              : t('Benzersiz indirimle ücretsiz partnerlik', 'Free partnership with unique discount')}
          </p>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'employer' ? (
            <EmployerPricingPlans />
          ) : (
            <BrandPartnershipSingle />
          )}
        </motion.div>
      </div>
    </section>
  );
}
