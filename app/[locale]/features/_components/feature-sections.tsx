'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FeatureSection } from '@/data/features';
import Image from 'next/image';
export function FeatureSections({ sections }: { sections: FeatureSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 shadow-lg">
                  <Image 
                    src={sec.image} 
                    alt={sec.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
            <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{sec.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">{sec.body}</p>
                {Array.isArray((sec as any).items) && (sec as any).items.length > 0 && (
                  <ul className="mt-2 space-y-2 text-slate-700 dark:text-slate-200">
                    {(sec as any).items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
