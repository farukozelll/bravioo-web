'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
// Removed unused icons
import companiesData from '@/data/companies.json';

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

export function CustomerGallery() {
  const locale = useLocale();
  const companies: Company[] = companiesData;

  // Create enhanced gallery data with category backgrounds
  const galleryData = useMemo(() => {
    const categoryBackgrounds = {
      'Holding': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'İnşaat': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'Enerji': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'Gıda': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'Teknoloji': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'Üretim': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'Tarım': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'Yayıncılık': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      'Turizm': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      'Hizmet': 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
      'Tekstil & Giyim': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'Danışmanlık': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'Medya': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'Sağlık': 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
      'Lojistik & Ulaşım': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'default': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };

    const heights = [280, 320, 260, 300, 340, 290, 310, 270]; // Varied heights
    
    // Professional background images for different categories
    const backgroundImages = [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop&crop=focalpoint&auto=format',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=focalpoint&auto=format'
    
    ];

    // Create extended company list for infinite scroll
    const extendedCompanies = Array.from({ length: 32 }, (_, i) => {
      const company = companies[i % companies.length];
      return {
        ...company,
        uniqueId: `${company.id}-${i}`,
        height: heights[i % heights.length],
        background: categoryBackgrounds[company.category as keyof typeof categoryBackgrounds] || categoryBackgrounds.default,
        backgroundImage: backgroundImages[i % backgroundImages.length],
      };
    });

    // Split into two balanced columns
    const leftColumn: typeof extendedCompanies = [];
    const rightColumn: typeof extendedCompanies = [];
    let leftHeight = 0;
    let rightHeight = 0;

    extendedCompanies.forEach(company => {
      if (leftHeight <= rightHeight) {
        leftColumn.push(company);
        leftHeight += company.height;
      } else {
        rightColumn.push(company);
        rightHeight += company.height;
      }
    });

    return { leftColumn, rightColumn };
  }, [companies]);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 lg:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            {locale === 'tr' ? 'Müşteri Galerisi' : 'Customer Gallery'}
          </p>
          
          <h2 className="font-display text-4xl font-light leading-tight text-slate-900 dark:text-gray-100 sm:text-5xl lg:text-6xl mb-6">
            {locale === 'tr' ? 'Başarı hikayeleri' : 'Success stories'}{' '}
            <span className="font-normal">
              {locale === 'tr' ? 'sürekli büyüyor' : 'keep growing'}
            </span>
          </h2>
          
          <p className="max-w-3xl text-xl text-slate-600 dark:text-gray-300 leading-relaxed mx-auto">
            {locale === 'tr'
              ? 'Her gün yeni başarı hikayeleri eklenen galerimizde, müşterilerimizin elde ettiği sonuçları keşfedin.'
              : 'Discover the results achieved by our customers in our gallery where new success stories are added every day.'
            }
          </p>
        </motion.div>

        {/* Vertical Scrolling Galleries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-[560px] sm:h-[620px] lg:h-[700px]"
        >
          {/* Left Column - Upward Scrolling */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-gray-800 dark:to-gray-700 shadow-inner">
            <div className="absolute inset-0 flex flex-col gap-4 sm:gap-6 p-3 sm:p-4 animate-scroll-up-fast">
              {[...galleryData.leftColumn, ...galleryData.leftColumn, ...galleryData.leftColumn].map((company, index) => (
                <CompanyCard
                  key={`left-${company.uniqueId}-${index}`}
                  company={company}
                />
              ))}
            </div>
            
            {/* Enhanced Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 lg:h-20 bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 lg:h-24 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 z-10 pointer-events-none" />
          </div>

          {/* Right Column - Downward Scrolling */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-gray-800 dark:to-gray-700 shadow-inner">
            <div className="absolute inset-0 flex flex-col gap-4 sm:gap-6 p-3 sm:p-4 animate-scroll-down-fast">
              {[...galleryData.rightColumn, ...galleryData.rightColumn, ...galleryData.rightColumn].map((company, index) => (
                <CompanyCard
                  key={`right-${company.uniqueId}-${index}`}
                  company={company}
                />
              ))}
            </div>
            
            {/* Enhanced Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 lg:h-20 bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 lg:h-24 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 z-10 pointer-events-none" />
          </div>
        </motion.div>

    
      </div>

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes scroll-up-fast {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scroll-down-fast {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .animate-scroll-up-fast {
          animation: scroll-up-fast 25s linear infinite;
        }
        .animate-scroll-down-fast {
          animation: scroll-down-fast 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-up-fast,
          .animate-scroll-down-fast {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

// Enhanced Company Card Component
interface CompanyCardProps {
  company: Company & { uniqueId: string; height: number; background: string; backgroundImage: string };
}

function CompanyCard({ company }: CompanyCardProps) {
  return (
    <motion.div
      style={{ height: `${company.height}px` }}
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.02, y: -4 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={company.backgroundImage}
          alt={`${company.name} office`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Category gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: company.background }}
        />
        {/* Dark overlay for logo readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Content - Only Logo */}
      <div className="absolute inset-0 p-6 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          {company.logo ? (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          ) : (
            <span className="text-white font-bold text-2xl">
              {company.name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent"
      />
    </motion.div>
  );
}
