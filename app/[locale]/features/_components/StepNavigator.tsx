'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import type { StepItem, PathType } from '../../../../data/features-journey';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type ColorVariant = 'emerald' | 'gold';

type Props = {
  readonly thumbs: readonly string[]; // Deprecated: kept for API compatibility
  readonly color: ColorVariant;
  readonly onClick: (index: number) => void;
  readonly steps: readonly StepItem[];
  readonly selectedPath: PathType;
};
const nudgeX = [-64, -60, -64, -60, -64]; // her adım için % kaydırma (px değil)

export function StepNavigator({ color, onClick, steps, selectedPath }: Props) {
  const t = useTranslations('features.journeyHeaders');
  // const tAll = useTranslations();
  const [stepAnimations, setStepAnimations] = React.useState<(object | null)[]>(
    []
  );

  React.useEffect(() => {
    let isMounted = true;
    const loadAll = async () => {
      try {
        const files = await Promise.all(
          steps.map(async (_s, i) => {
            const adimIndex = selectedPath === 'hr' ? i + 1 : i + 6; // 1-5 for HR, 6-10 for Employee
            const url = `/images/lottie/adim${adimIndex}.json`;
            try {
              const res = await fetch(url);
              if (!res.ok) return null;
              return (await res.json()) as object;
            } catch {
              return null;
            }
          })
        );
        if (isMounted) setStepAnimations(files);
      } catch {
        // noop
      }
    };
    loadAll();
    return () => {
      isMounted = false;
    };
  }, [steps, selectedPath]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mx-auto max-w-6xl"
    >
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
        {color === 'emerald' ? t('hrTitle') : t('employeeTitle')}
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row md:gap-10">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <button
              onClick={() => onClick(i)}
              aria-label={`Adım ${i + 1}`}
              className={`group relative overflow-hidden rounded-2xl border ${
                color === 'emerald'
                  ? 'border-emerald-200 dark:border-emerald-800'
                  : 'border-gold-200 dark:border-gold-800'
              } bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 dark:bg-gray-900/40 ${
                color === 'emerald'
                  ? 'focus-visible:ring-emerald-500/40'
                  : 'focus-visible:ring-amber-500/40'
              } hover:-translate-y-0.5`}
            >
              <div className="relative h-[150px] w-[240px] rounded-xl md:h-[170px] md:w-[270px]">
                <div className="grid h-full w-full place-items-center">
                  {stepAnimations[i] && (
                    <Lottie
                      animationData={stepAnimations[i] as object}
                      loop
                      autoplay
                      className="mx-auto block w-24 md:w-28"
                      style={{ transform: `translateX(${nudgeX[i] ?? 0}%)` }}
                      rendererSettings={{
                        preserveAspectRatio: 'xMidYMid meet',
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="mt-3 text-center">
                {(() => {
                  return (
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                        color === 'emerald'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300'
                          : 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300'
                      }`}
                    >
                      Adım {i + 1}
                    </span>
                  );
                })()}
              </div>
            </button>
            {i < steps.length - 1 && (
              <ArrowRight
                className={`hidden h-6 w-6 md:block ${
                  color === 'emerald'
                    ? 'text-emerald-400/60 dark:text-emerald-300/40'
                    : 'text-amber-400/60 dark:text-amber-300/40'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
