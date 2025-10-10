'use client';

import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import brandsData from '@/data/brands.json';

interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description?: string;
}

interface Company {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  metrics: {
    primary: string;
    secondary: string;
  };
  details: {
    challenge: string;
    solution: string;
    results: string[];
  };
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export function BrandShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const locale = useLocale();

  const brands: Brand[] = brandsData as unknown as Brand[];

  const normalizeCategory = (value: string | undefined) => (value || '').trim().toLowerCase();

  // Map brands to the expected shape used by the showcase UI
  const companies: Company[] = useMemo(() => (
    brands.map((b) => ({
      id: b.id,
      name: b.name,
      logo: b.logo,
      category: b.category,
      description: b.description ?? '',
      metrics: { primary: '', secondary: '' },
      details: { challenge: '', solution: '', results: [] },
      testimonial: {
        text: b.description ?? '',
        author: b.name,
        position: b.category,
      },
    }))
  ), [brands]);

  // Build normalized categories with counts
  const categories = useMemo(() => {
    const counts = new Map<string, { displayName: string; count: number }>();
    for (const c of companies) {
      const norm = normalizeCategory(c.category);
      const display = c.category;
      const existing = counts.get(norm);
      if (existing) existing.count += 1; else counts.set(norm, { displayName: display, count: 1 });
    }
    const list = Array.from(counts.entries()).map(([norm, info]) => ({
      norm,
      name: info.displayName,
      count: info.count
    }));
    list.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    return [
      { norm: 'ALL', name: 'Tümü', count: companies.length },
      ...list
    ];
  }, [companies]);

  const filteredCompanies = useMemo(() => {
    if (activeCategory === 'ALL') return companies;
    return companies.filter(c => normalizeCategory(c.category) === activeCategory);
  }, [activeCategory, companies]);

  // Animations removed for faster loading

  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-20 xl:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-gray-100 mb-4 lg:mb-6 leading-tight">
            Her sektörden işletme için<br />
            <span className="text-emerald-600">Yeni Nesil Bravioo Altyapısı</span>
          </h2>
          
          <Link
            href={`/${locale}/stories`}
            className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-emerald-200 dark:border-emerald-600 hover:border-emerald-300 dark:hover:border-emerald-500 font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Başarı Hikayelerimize Göz At</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 lg:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.norm}
              onClick={() => setActiveCategory(category.norm)}
              className={`
                px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${activeCategory === category.norm
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-gray-600 hover:text-slate-900 dark:hover:text-gray-100'
                }
              `}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Company Grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6"
        >
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="relative rounded-lg"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-4 border border-slate-200 dark:border-gray-700 overflow-hidden h-36 sm:h-36">
                
                {/* Company Logo */}
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 bg-slate-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                  {company.logo ? (
                    <Image 
                      src={company.logo.replace(/\/+/, '/')} 
                      alt={`${company.name} logo`}
                      width={48}
                      height={48}
                      className="w-8 sm:w-12 h-8 sm:h-12 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling!.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className="text-slate-600 dark:text-gray-300 font-bold text-lg hidden">
                    {company.name.charAt(0)}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="font-semibold text-slate-900 dark:text-gray-100 text-center mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-emerald-600 transition-colors duration-300">
                  {company.name}
                </h3>


              </div>
            </div>
          ))}
        </div>

      



      </div>
    </section>
  );
}



