'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { PathType } from '../../../../data/features-journey';

type Props = {
  readonly selectedPath: PathType;
  readonly onSelect: (path: PathType) => void;
};

export function Hero({ selectedPath, onSelect }: Props) {
  const t = useTranslations('features.hero');
  const audienceTabs = [
    { id: 'hr' as const, label: t('tabs.hr'), shortLabel: t('tabs.hrShort'), Icon: Building2 },
    { id: 'employee' as const, label: t('tabs.employee'), shortLabel: t('tabs.employeeShort'), Icon: Users },
  ];
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      onSelect(selectedPath === 'hr' ? 'employee' : 'hr');
      e.preventDefault();
    } else if (e.key === 'Home') {
      onSelect('hr');
      e.preventDefault();
    } else if (e.key === 'End') {
      onSelect('employee');
      e.preventDefault();
    }
  };
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <motion.div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-100 opacity-40 blur-3xl dark:bg-emerald-900/20" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-green-100 opacity-40 blur-3xl dark:bg-green-900/20" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 px-8 py-4 text-emerald-700 dark:border-emerald-600 dark:from-emerald-900/20 dark:to-green-900/20 dark:text-emerald-300">
            <Sparkles className="h-5 w-5" />
            <span className="text-lg font-bold">{t('badge')}</span>
          </div>

          <h1 className="mb-8 text-5xl font-black text-gray-900 dark:text-gray-100 sm:text-6xl lg:text-7xl">
            {t('titleLine1')}
            <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-gold-600 bg-clip-text text-transparent">{t('titleLine2')}</span>
          </h1>

          <p className="mb-12 text-xl text-gray-600 dark:text-gray-300 lg:text-2xl">
            {t('subtitle')}
            <strong className="ml-2">{t('subtitleCta')}</strong>
          </p>

          <div className="mb-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Kitle seçimi"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="flex items-center gap-2 md:gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-neutral-200/50 dark:border-gray-700/20"
            >
              {audienceTabs.map((tab, index) => {
                const isActive = selectedPath === tab.id;
                const Icon = tab.Icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onSelect(tab.id)}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    className={`flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'text-neutral-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-primary-600'}`} />
                    <span className="font-semibold hidden md:block">{tab.label}</span>
                    <span className="font-semibold md:hidden">{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


