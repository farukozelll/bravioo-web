'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gift } from 'lucide-react';

export function PartnerBrandsCTA() {
  const locale = useLocale();
  return (
    <section className="py-0 bg-neutral-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 dark:from-secondary-600 dark:to-secondary-700 rounded-3xl overflow-hidden relative shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display">
                      {locale === 'tr' 
                        ? 'Daha Fazla Marka'
                        : 'More Brands'
                      }
                    </h3>
                    <p className="text-white/80 text-lg">
                      {locale === 'tr' 
                        ? 'Daha Fazla Avantaj'
                        : 'More Advantages'
                      }
                    </p>
                </div>
              </div>
              
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {locale === 'tr'
                  ? 'Her ay yeni markalarla anlaşmalar yapıyoruz. Çalışanlarınız için sınırsız avantajlar keşfedin.'
                  : 'We make deals with new brands every month. Discover unlimited advantages for your employees.'
                }
              </p>
              
                {/* App Store Buttons */}
                <div className="space-y-4">
                  <p className="text-white/80 text-sm font-medium mb-4">
                    {locale === 'tr' ? 'Mobil uygulamayı indirin:' : 'Download the mobile app:'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://apps.apple.com/app/bravioo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all transform hover:scale-105"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.bravioo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all transform hover:scale-105"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Phone Visual */}
              <div className="relative p-8 md:p-12 lg:p-16 flex items-center justify-center">
                <motion.div 
                  className="relative max-w-xs mx-auto"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/30 rounded-[3rem] blur-2xl transform translate-y-8 scale-95" />
                  
                  {/* Phone Frame */}
                  <div className="relative bg-neutral-900 dark:bg-neutral-800 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-white dark:bg-neutral-50 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative min-h-[400px]">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 dark:bg-neutral-800 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-xs font-medium z-20">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-end pr-0.5">
                            <div className="w-4 h-1.5 bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Content Background */}
                      <div className="absolute inset-0 pt-8">
                        <Image
                          src="/images/hero-thumb.png"
                          alt={locale === 'tr' ? 'Bravioo Mobil Uygulaması - Marka Avantajları' : 'Bravioo Mobile App - Brand Benefits'}
                          fill
                          className="object-cover object-top"
                          sizes="320px"
                          priority
                        />
                        
                        {/* Overlay gradient for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/20 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-neutral-900 dark:bg-neutral-800 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnerBrandsCTA;


