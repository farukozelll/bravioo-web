'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type Props = {
  thumbs: string[];
  color: 'emerald' | 'blue';
  onClick: (index: number) => void;
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
                color === 'emerald' ? 'border-emerald-200 dark:border-emerald-800' : 'border-blue-200 dark:border-blue-800'
              } shadow transition-all hover:shadow-lg`}
            >
              <div className="relative h-[132px] w-[220px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 md:h-[156px] md:w-[260px]">
                <Image src={src} alt={`Adım ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 80vw, 260px" />
                <div className={`absolute bottom-2 left-2 rounded px-2 py-1 text-xs font-semibold text-white ${color === 'emerald' ? 'bg-emerald-600/80' : 'bg-blue-600/80'}`}>
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


