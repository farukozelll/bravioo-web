'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import brandsData from '@/data/brands.json';
import Image from 'next/image';
import Link from 'next/link';
interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
}

export function BrandsHero() {
  const t = useTranslations('brands.hero');
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
              {t('title')}
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">{t('titleHighlight')}</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>{t('enterpriseDemo')}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              <Link href="/stories">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 border border-slate-300 dark:border-gray-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                >
                  <span>{t('brandStories')}</span>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Right: 4-row marquee */}
          <div className="relative overflow-hidden">
            <div className="space-y-6">
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="relative overflow-hidden">
                  <div
                    className={`flex items-center gap-10 ${
                      rowIdx % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'
                    }`}
                  >
                    {[...row, ...row].map((item, i) => (
                      <div key={`${item.id}-${i}`} className="shrink-0 h-16 flex items-center">
                        {item.logo ? (
                          <Image 
                            src={item.logo} 
                            alt={item.name} 
                            width={96}
                            height={40}
                            className="h-10 object-contain opacity-90"
                            sizes="96px"
                            style={{ width: 'auto', height: 'auto' }}
                          />
                        ) : (
                          <div className="h-10 w-24 bg-slate-200" />
                        )}
                      </div>
                    ))}
                  </div>
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
