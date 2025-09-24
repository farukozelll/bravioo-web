'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { StepItem } from './content';

type Props = {
  steps: StepItem[];
  selectedPath: 'hr' | 'employee';
  activeStep: number;
  deviceY: any;
  onTry: () => void;
};

export function Journey({ steps, selectedPath, activeStep, deviceY, onTry }: Props) {
  const step = steps[activeStep];
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div className="relative space-y-6">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              selectedPath === 'hr' ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-blue-50 dark:bg-blue-900/20'
            }`}
          >
            <step.icon className={`h-8 w-8 ${selectedPath === 'hr' ? 'text-emerald-600' : 'text-blue-600'}`} />
          </div>
          <div
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              selectedPath === 'hr'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            }`}
          >
            {step.highlight}
          </div>
        </div>
        <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100 lg:text-5xl">{step.title}</h2>
        <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl ${
            selectedPath === 'hr'
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          }`}
          onClick={onTry}
        >
          <Zap className="h-5 w-5" /> Bu Adımı Dene
        </motion.button>
      </div>

      <motion.div style={{ y: deviceY }} className="relative flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
            <Image src="/images/features/hero.png" alt="Bravioo Platform Genel Görünüm" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}


