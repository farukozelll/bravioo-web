'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type MotionValue } from 'framer-motion';
import { StepItem, PathType } from '../../../../data/features-journey';
import { useTranslations } from 'next-intl';

type Props = {
  readonly steps: readonly StepItem[];
  readonly selectedPath: PathType;
  readonly activeStep: number;
  readonly deviceY?: MotionValue<number>;
  readonly onTry: () => void;
};

export function Journey({ steps, selectedPath, activeStep, deviceY }: Props) {
  const t = useTranslations();
  const step = steps[activeStep];
  const isHR = selectedPath === 'hr';

  // Image presentation settings derived from selected path.
  const imageWidth = isHR ? 800 : 1600; // Render higher-res for enlarged employee visual
  const imageHeight = isHR ? 800 : 1600;
  const imageSizes = isHR
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    : '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 66vw';
  const scaleClass = isHR ? '' : 'md:scale-[2]'; // Keep mobile neutral; double on md+
  return (
    // DEĞİŞİKLİK 1: Mobildeki dikey boşluğu 'gap-12' den 'gap-8'e düşürdük.
    <div className="grid items-center  md:gap-16 lg:grid-cols-2">
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
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100 lg:text-5xl">{t(step.titleKey)}</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">{t(step.bodyKey)}</p>
     
      </div>

      {/* DEĞİŞİKLİK 2: Sadece 'md' ve üzeri ekranlarda 'mt-32' (margin-top) ekledik. */}
      <motion.div style={{ y: deviceY }} className="relative flex items-center justify-center md:mt-32">
        <div className="relative w-full max-w-2xl">
          <div className={`aspect-[9/16] flex items-center justify-center overflow-visible ${scaleClass}`}>
            <Image
              src={step.dashboardImage}
              alt={t(step.titleKey)}
              width={imageWidth}
              height={imageHeight}
              className="object-contain max-h-full max-w-full drop-shadow-2xl"
              sizes={imageSizes}
              priority={activeStep < 2}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <span
              className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold ${
                selectedPath === 'hr'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300'
                  : 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300'
              }`}
            >
              Adım {activeStep + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}