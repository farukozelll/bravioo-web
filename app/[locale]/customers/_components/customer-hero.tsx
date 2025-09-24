'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
// import { Globe } from 'lucide-react';
import Image from 'next/image';
import customerData from '@/data/companies.json';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { generateId } from '@/lib/utils';

interface Customer {  
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
}

export function CustomerHero() {
  const customers: Customer[] = customerData;
  const t = useTranslations('brands.hero');
  const locale = useLocale();
  // Create infinite scroll data with varying heights
  const scrollData = useMemo(() => {
    const heights = [220, 180, 260, 200, 240, 190, 210]; // Varying card heights for customers
    const infiniteCustomers = Array.from({ length: 24 }, (_, i) => ({
      ...customers[i % customers.length],
      uniqueId: `${customers[i % customers.length].id}-${i}-${generateId()}`,
      height: heights[i % heights.length],
    }));
    
    // Split into two columns
    const leftColumn = infiniteCustomers.filter((_, index) => index % 2 === 0);
    const rightColumn = infiniteCustomers.filter((_, index) => index % 2 === 1);
    
    return { leftColumn, rightColumn };
  }, [customers]);

  // Hover details removed; no selected customer state

  return (
    <section className="bg-emerald-600 py-2 lg:py-2 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Content */}
          <div
            className="lg:pr-8 lg:sticky lg:top-32"
          >
            {/* Global Badge */}
         {/*    <div className="inline-flex items-center gap-2 border border-gold-400 bg-emerald-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Globe className="w-4 h-4" />
              <span>Global Şirketler</span>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t('title')}<br />
              <span className="text-white">{t('titleHighlight')}</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/contact`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gold-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>{t('enterpriseDemo')}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              <Link href={`/${locale}/stories`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 border border-slate-300 dark:border-gray-700 text-gold-400 dark:text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                >
                  <span>{t('customerStories')}</span>
                </motion.div>
              </Link>
            </div>
            {/* Hover detayları kaldırıldı */}
          </div>

          {/* Right Side - Infinite Scrolling Customers with subtle background visuals */}
          <div
            className="relative h-[700px] overflow-hidden"
          >
            {/* Decorative blobs removed for solid background */}
            <div className="grid grid-cols-2 gap-4 h-full group">
              
              {/* Left Column - Scrolling Up */}
              <div className="relative overflow-hidden">
                <div className="space-y-4 animate-scroll-up">
                  {[...scrollData.leftColumn, ...scrollData.leftColumn].map((customer, index) => (
                    <CustomerCard
                      key={`left-${customer.uniqueId}-${index}`}
                      customer={customer}
                      height={customer.height}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column - Scrolling Down */}
              <div className="relative overflow-hidden">
                <div className="space-y-4 animate-scroll-down">
                  {[...scrollData.rightColumn, ...scrollData.rightColumn].map((customer, index) => (
                    <CustomerCard
                      key={`right-${customer.uniqueId}-${index}`}
                      customer={customer}
                      height={customer.height}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Edge overlays removed to keep single-color background */}
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for better performance and maintainability
interface CustomerCardProps {
  customer: Customer & { height: number };
  height: number;
}

const CustomerCard = React.memo(function CustomerCard({ customer, height }: CustomerCardProps) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-white/10 shadow-lg border border-white/20 flex items-center justify-center"
      style={{ height: `${height}px` }}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        {customer.logo ? (
          <Image
            src={customer.logo}
            alt={`${customer.name} logo`}
            width={160}
            height={80}
            className="max-h-16 w-auto object-contain opacity-100 drop-shadow-sm"
          />
        ) : (
          <span className="text-slate-800 dark:text-white/80 font-bold text-2xl">
            {customer.name.charAt(0)}
          </span>
        )}
      </div>
    </div>
  );
});
