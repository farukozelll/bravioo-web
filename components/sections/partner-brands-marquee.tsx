'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Crown } from 'lucide-react';
import { PARTNER_BRANDS } from '@/data/partner-brands';

export function PartnerBrandsMarquee() {
  const locale = useLocale();

  const brands = PARTNER_BRANDS;

  // Duplicate brands for continuous scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
   
          {/* Right Column: Marquee */}
       
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 dark:from-gray-900 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 dark:from-gray-900 to-transparent z-10" />

              {/* Two rows for richer visual rhythm */}
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-12 py-6 w-max"
                    animate={{ x: '-50%' }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 55, ease: 'linear' } }}
                  >
                    {duplicatedBrands.map((brand, index) => (
                      <div key={`r1-${brand.name}-${index}`} className="relative flex-shrink-0 w-36 sm:w-44 group">
                        <div className="relative h-20 sm:h-24 transition-all duration-300 group-hover:scale-105">
                          <Image 
                            src={brand.logo} 
                            alt={brand.alt} 
                            fill 
                            className="object-contain filter grayscale sepia-100 saturate-200 hue-rotate-90 brightness-75 group-hover:filter-none transition-all duration-300" 
                            sizes="176px" 
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Row 2 (reverse) */}
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-12 py-6 w-max"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 65, ease: 'linear' } }}
                  >
                    {duplicatedBrands.map((brand, index) => (
                      <div key={`r2-${brand.name}-${index}`} className="relative flex-shrink-0 w-36 sm:w-44 group">
                        <div className="relative h-20 sm:h-24 transition-all duration-300 group-hover:scale-105">
                          <Image 
                            src={brand.logo} 
                            alt={brand.alt} 
                            fill 
                            className="object-contain filter grayscale sepia-100 saturate-200 hue-rotate-90 brightness-75 group-hover:filter-none transition-all duration-300" 
                            sizes="176px" 
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
       
        </div>

        {/* Bottom CTA Section moved to separate component */}
      </div>
    </section>
  );
}
