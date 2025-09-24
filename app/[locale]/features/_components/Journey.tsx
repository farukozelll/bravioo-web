'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type MotionValue } from 'framer-motion';
import { Zap } from 'lucide-react';
import { StepItem, PathType } from '../../../../data/features-journey';
import { useTranslations } from 'next-intl';

type Props = {
  readonly steps: readonly StepItem[];
  readonly selectedPath: PathType;
  readonly activeStep: number;
  readonly deviceY?: MotionValue<number>;
  readonly onTry: () => void;
};

export function Journey({ steps, selectedPath, activeStep, deviceY, onTry }: Props) {
  const t = useTranslations();
  const step = steps[activeStep];
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div className="relative space-y-6">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              selectedPath === 'hr' ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-gold-50 dark:bg-gold-900/20'
            }`}
          >
              <step.icon className={`h-8 w-8 ${selectedPath === 'hr' ? 'text-emerald-600' : 'text-gold-600'}`} />
          </div>
          <div
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              selectedPath === 'hr'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300'
            }`}
          >
            {t(step.highlightKey)}
          </div>
        </div>
        <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100 lg:text-5xl">{t(step.titleKey)}</h2>
        <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">{t(step.bodyKey)}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl ${
            selectedPath === 'hr'
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700'
          }`}
          onClick={onTry}
        >
          <Zap className="h-5 w-5" /> Bu Adımı Dene
        </motion.button>
      </div>

      <motion.div style={{ y: deviceY }} className="relative flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <div className="aspect-[9/16] flex items-center justify-center">
            <Image 
              src={step.dashboardImage} 
              alt={`Adım ${activeStep + 1} - Platform Görünümü`} 
              width={300}
              height={533}
              className="object-contain max-h-full max-w-full" 
              sizes="(max-width: 768px) 80vw, 40vw" 
              priority={activeStep < 2}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}


