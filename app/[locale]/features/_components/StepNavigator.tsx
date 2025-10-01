'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import type { StepItem, PathType } from '../../../../data/features-journey';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type ColorVariant = 'emerald' | 'gold';

type Props = {
  readonly thumbs: readonly string[];
  readonly color: ColorVariant;
  readonly onClick: (index: number) => void;
  readonly steps: readonly StepItem[];
  readonly selectedPath: PathType;
};

export function StepNavigator({ thumbs, color, onClick, steps, selectedPath }: Props) {
  const t = useTranslations('features.journeyHeaders');
  const tAll = useTranslations();
  const [animations, setAnimations] = React.useState<Record<number, object | null>>({});

  React.useEffect(() => {
    let isMounted = true;
    const loadAnimations = async () => {
      const results: Record<number, object | null> = {};
      await Promise.all(
        steps.map(async (step, index) => {
          if (!step.animation) {
            results[index] = null;
            return;
          }
          try {
            const res = await fetch(`/images/lottie/${step.animation}.json`);
            if (!res.ok) {
              results[index] = null;
              return;
            }
            results[index] = await res.json();
          } catch {
            results[index] = null;
          }
        })
      );
      if (isMounted) setAnimations(results);
    };
    loadAnimations();
    return () => {
      isMounted = false;
    };
  }, [steps]);
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
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        {thumbs.map((src, i) => (
          <React.Fragment key={i}>
            <button
              onClick={() => onClick(i)}
              className={`group relative overflow-hidden rounded-2xl border ${
                  color === 'emerald' ? 'border-emerald-200 dark:border-emerald-800' : 'border-gold-200 dark:border-gold-800'
              } shadow transition-all hover:shadow-lg`}
            >
              <div className="relative h-[120px] w-[200px] md:h-[140px] md:w-[240px]">
                <Image 
                  src={src} 
                  alt={`${tAll(steps[i].titleKey)} — ${color === 'emerald' ? t('hrTitle') : t('employeeTitle')}`} 
                  fill 
                  className="object-cover rounded-xl" 
                  sizes="(max-width: 768px) 200px, 240px" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                <div className={`absolute bottom-2 left-2 rounded px-2 py-1 text-[10px] md:text-xs font-semibold text-white ${color === 'emerald' ? 'bg-emerald-600/80' : 'bg-gold-600/80'}`}>
                  {color === 'emerald' ? t(`hrSteps.${i}`) : t(`employeeSteps.${i}`)}
                </div>
                {animations[i] && (
                  <div className="absolute right-2 top-2 h-6 w-6">
                    <Lottie animationData={animations[i]} loop autoplay />
                  </div>
                )}
              </div>
            </button>
            <div className="text-center text-xs font-medium text-gray-700 dark:text-gray-200">
              {color === 'emerald' ? t(`hrSteps.${i}`) : t(`employeeSteps.${i}`)}
            </div>
            {i < thumbs.length - 1 && <ArrowRight className="hidden h-6 w-6 text-gray-400 md:block" />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}


