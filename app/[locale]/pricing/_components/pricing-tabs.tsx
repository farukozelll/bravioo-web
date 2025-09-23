'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Gift } from 'lucide-react';

// Import the components for the tabs
import { EmployerPricingPlans } from '@/app/[locale]/pricing/_components/employer-pricing-plans';
import { BrandPartnershipPrograms } from '@/app/[locale]/pricing/_components/brand-partnership-programs';

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TabButton({ isActive, onClick, icon, title, description }: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex-1 p-8 rounded-3xl border-2 transition-all duration-500 text-left overflow-hidden group ${
        isActive
          ? 'border-brand-500 bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-800/30 shadow-2xl shadow-brand-500/25'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10'
      }`}
    >
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'group-hover:opacity-50'
      } bg-gradient-to-r from-brand-500/5 to-emerald-500/5`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-2xl transition-all duration-300 ${
            isActive 
              ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-brand-100 group-hover:text-brand-600'
          }`}>
            {icon}
          </div>
          <div>
            <h3 className={`text-xl font-bold transition-colors duration-300 ${
              isActive ? 'text-brand-700 dark:text-brand-300' : 'text-gray-900 dark:text-white group-hover:text-brand-600'
            }`}>
              {title}
            </h3>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1 mt-1"
              >
                <div className="w-2 h-2 bg-brand-500 rounded-full" />
                <span className="text-xs font-medium text-brand-600 dark:text-brand-400">
                  {title.includes('İşveren') || title.includes('Employer') ? 'Aktif Plan' : 'Seçili Model'}
                </span>
              </motion.div>
            )}
          </div>
        </div>
        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
          isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-700'
        }`}>
          {description}
        </p>
        
      
      </div>
    </motion.button>
  );
}

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
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('İki Model Arasından Seçin', 'Choose Between Two Models')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            {t('Size en uygun planı seçin ve hemen başlayın', 'Choose the plan that suits you best and start immediately')}
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-16"
        >
          <TabButton
            isActive={activeTab === 'employer'}
            onClick={() => setActiveTab('employer')}
            icon={<Building2 className="w-6 h-6" />}
            title={t('İşveren Planları', 'Employer Plans')}
            description={t('Çalışan sayısına göre esnek aylık ödeme. Gelişmiş HR araçları ve analitik dahil.', 'Flexible monthly payment per employee. Advanced HR tools and analytics included.')}
          />
          <TabButton
            isActive={activeTab === 'brands'}
            onClick={() => setActiveTab('brands')}
            icon={<Gift className="w-6 h-6" />}
            title={t('Marka Partnerliği', 'Brand Partnership')}
            description={t('Tamamen ücretsiz! Tier sistemi ile daha fazla avantaj kazanın ve geniş çalışan kitlesine ulaşın.', 'Completely free! Earn more benefits with tier system and reach large employee base.')}
          />
        </motion.div>

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
            <BrandPartnershipPrograms />
          )}
        </motion.div>
      </div>
    </section>
  );
}
