'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import brandsData from '@/data/brands.json';

interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
}

export function BrandsHero() {
  const brands: Brand[] = brandsData;

  const rows = useMemo(() => {
    const logosOnly = brands.map(b => ({ id: b.id, logo: b.logo, name: b.name }));
    const perRow = Math.ceil(logosOnly.length / 4) || 1;
    return [0, 1, 2, 3].map(rowIndex => {
      const slice = logosOnly.slice(rowIndex * perRow, (rowIndex + 1) * perRow);
      return slice.length ? slice : logosOnly;
    });
  }, [brands]);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading & Copy */}
          <div className="lg:pr-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Dünya Devlerinin
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">Teknoloji Ortağı</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Fortune 500 şirketlerinden startuplara kadar sayısız marka Bravioo&apos;nun altyapısına güveniyor.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Enterprise Demo Alın</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/stories"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-gray-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <span>Marka Hikayeleri</span>
              </motion.a>
            </div>
          </div>

          {/* Right: 4-row marquee */}
          <div className="relative overflow-hidden">
            <div className="space-y-6">
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="relative overflow-hidden">
                  <motion.div
                    className="flex items-center gap-10"
                    animate={{ x: rowIdx % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  >
                    {[...row, ...row].map((item, i) => (
                      <div key={`${item.id}-${i}`} className="shrink-0 h-16 flex items-center">
                        {item.logo ? (
                          <img src={item.logo} alt={item.name} className="h-10 w-auto object-contain opacity-90" />
                        ) : (
                          <div className="h-10 w-24 bg-slate-200" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white dark:from-gray-900 via-transparent to-white dark:to-gray-900"
                    style={{ maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
