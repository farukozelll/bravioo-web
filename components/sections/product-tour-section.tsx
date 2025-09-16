'use client';

import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { PRODUCT_TOUR_STEPS } from '@/data/product-tour';
import { useLocale } from 'next-intl';

export function ProductTourSection() {
  const locale = useLocale();
  const [active, setActive] = React.useState(0);
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start center', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(PRODUCT_TOUR_STEPS.length - 1, Math.max(0, Math.floor(v * PRODUCT_TOUR_STEPS.length)));
    setActive(idx);
  });

  const mockupOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const mockupY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);

  const step = PRODUCT_TOUR_STEPS[active];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-gray-100 font-display">{locale === 'tr' ? 'Ürün Turu' : 'Product Tour'}</h2>
          <p className="mt-4 text-ink-600 dark:text-gray-300">{locale === 'tr' ? 'Kaydırarak keşfedin' : 'Discover by scrolling'}</p>
        </div>

        <div ref={targetRef} className="relative h-[320vh] mt-16">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
              {/* Left: Steps */}
              <div className="self-center">
                {PRODUCT_TOUR_STEPS.map((s, i) => (
                  <motion.div key={s.id} animate={{ opacity: i === active ? 1 : 0.35, scale: i === active ? 1 : 0.98 }} transition={{ duration: 0.3 }} className="mb-10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color}`} />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-ink-900 dark:text-gray-100">{locale === 'tr' ? s.titleTr : s.titleEn}</h3>
                        <p className="text-ink-600 dark:text-gray-300">{locale === 'tr' ? s.descriptionTr : s.descriptionEn}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-6 text-ink-700 dark:text-gray-300 space-y-1">
                      {(locale === 'tr' ? s.featuresTr : s.featuresEn).map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Right: Mockup */}
              <motion.div style={{ opacity: mockupOpacity, y: mockupY }} className="hidden lg:flex items-center justify-center">
                <div className="relative w-[360px] h-[720px] rounded-[40px] border-[12px] border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-full" />
                  <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div key={step.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                        <Image src={`/images/mockups/${step.mockup}.png`} alt={(locale === 'tr' ? step.titleTr : step.titleEn) + ' Mockup'} fill className="object-cover" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductTourSection;


