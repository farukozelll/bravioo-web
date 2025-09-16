'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FeatureSection } from '@/data/features';

export function FeatureSections({ sections }: { sections: FeatureSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <img src={sec.image} alt={sec.title} className="w-full rounded-2xl border border-slate-200 dark:border-gray-700 shadow" />
              </motion.div>
            </div>
            <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{sec.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{sec.body}</p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
