'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type ColorVariant = 'emerald' | 'gold';

type Props = {
  readonly thumbs: readonly string[];
  readonly color: ColorVariant;
  readonly onClick: (index: number) => void;
};

export function StepNavigator({ thumbs, color, onClick }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mx-auto max-w-5xl"
    >
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
                  alt={`Adım ${i + 1}`} 
                  fill 
                  className="object-cover rounded-xl" 
                  sizes="(max-width: 768px) 200px, 240px" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                <div className={`absolute bottom-2 left-2 rounded px-2 py-1 text-xs font-semibold text-white ${color === 'emerald' ? 'bg-emerald-600/80' : 'bg-gold-600/80'}`}>
                  Adım {i + 1}
                </div>
              </div>
            </button>
            {i < thumbs.length - 1 && <ArrowRight className="hidden h-6 w-6 text-gray-400 md:block" />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}


