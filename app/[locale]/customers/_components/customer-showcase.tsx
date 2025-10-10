'use client';

import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Award, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companiesData from '@/data/companies.json';
import { useLocale } from 'next-intl';

interface Company {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  metrics: {
    primary: string;
    secondary?: string;
  };
  details?: {
    challenge: string;
    solution: string;
    results: string[];
  };
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export function CustomerShowcase() {
  const [activeCategory] = useState<string>('Tümü');
  const locale = useLocale();
  const companies: Company[] = companiesData as unknown as Company[];

  // Extract unique categories from companies data (not used since filter UI is disabled)
  // const uniqueCategories = Array.from(new Set(companies.map(c => c.category)));
  
  // const categories = [
  //   { name: 'Tümü', count: companies.length },
  //   ...uniqueCategories.map(category => ({
  //     name: category,
  //     count: companies.filter(c => c.category === category).length
  //   }))
  // ];

  const filteredCompanies = activeCategory === 'Tümü' 
    ? companies 
    : companies.filter(c => c.category === activeCategory);

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
{/*         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 lg:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`
                px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${activeCategory === category.name
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-gray-600 hover:text-slate-900 dark:hover:text-gray-100'
                }
              `}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div> */}

        {/* Company Grid */}
        <div
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
                      src={company.logo} 
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

                {/* Category */}
              {/*   <p className="text-xs text-slate-500 dark:text-gray-400 text-center mb-2 sm:mb-4">
                  {company.category}
                </p> */}


                {/* No hover overlay */}

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 rounded-2xl border border-emerald-100 dark:border-emerald-800">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-gray-100 mb-2">+200%</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">Ortalama Büyüme</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-blue-800">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-gray-100 mb-2">10.000+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">Başarılı İşletme</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-2xl border border-purple-100 dark:border-purple-800">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-gray-100 mb-2">4.8/5</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">Müşteri Puanı</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-800 rounded-2xl border border-orange-100 dark:border-orange-800">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-gray-100 mb-2">15+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">Farklı Sektör</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-100 mb-4">
            Sizin de başarı hikayenizi yazalım
          </h3>
          <p className="text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Bravioo&apos;ın güçlü e-ticaret altyapısı ile siz de bu başarılı markalar arasına katılın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              <Link
                href={`/${locale}/meeting`}
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Ücretsiz Randevu Al
              </Link>
            </div>
            <div>
              <Link
                href={`/${locale}/pricing`}
                className="border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Fiyat Bilgisi Alın
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

