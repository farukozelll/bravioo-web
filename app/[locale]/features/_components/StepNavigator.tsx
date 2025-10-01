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

export function StepNavigator({ thumbs, color, onClick, steps, selectedPath }: Props) {
  const t = useTranslations('features.journeyHeaders');
  const tAll = useTranslations();
  const [darkAnimation, setDarkAnimation] = React.useState<object | null>(null);

  React.useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const res = await fetch('/images/lottie/darkmode.json');
        if (!res.ok) return;
        const json = await res.json();
        if (isMounted) setDarkAnimation(json);
      } catch {
        // noop
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mx-auto max-w-5xl"
    >
      <h2 className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-gray-100">
        {color === 'emerald' ? t('hrTitle') : t('employeeTitle')}
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <button
              onClick={() => onClick(i)}
              className={`group relative overflow-hidden rounded-2xl border ${
                  color === 'emerald' ? 'border-emerald-200 dark:border-emerald-800' : 'border-gold-200 dark:border-gold-800'
              } shadow transition-all hover:shadow-lg`}
            >
              <div className="relative h-[120px] w-[200px] md:h-[140px] md:w-[240px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-10" />
                <div className="h-[72px] w-[72px] md:h-[84px] md:w-[84px]">
                  {darkAnimation && <Lottie animationData={darkAnimation} loop autoplay />}
                </div>
              </div>
            </button>
            {i < steps.length - 1 && <ArrowRight className="hidden h-6 w-6 text-gray-400 md:block" />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}


