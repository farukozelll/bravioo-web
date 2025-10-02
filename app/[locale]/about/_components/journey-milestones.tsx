'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Lightbulb, Plane, Rocket, Users, Coins, ArrowUp, Globe } from 'lucide-react';
  



export function JourneyMilestones() {
  const locale = useLocale();
  const t = useTranslations('about.journey');
  const rawItems = t.raw('items') as Array<{ year: string; title: string; description: string }>;
  const items = React.useMemo(() => Array.isArray(rawItems) ? rawItems : [], [rawItems]);
  const milestonesToShow = React.useMemo(() => items.slice(0, items.length), [items]);

  const IconComponents = React.useMemo(() => [
    Lightbulb, // Fikir
    Plane,     // Pilot uygulama
    Rocket,    // İştirak
    Users,     // Kullanıcı
    Coins,     // Coin
    ArrowUp,   // Bölgesel büyüme
    Globe,     // Global büyüme
  ], []);
  const [visibleStart, setVisibleStart] = React.useState(0);
  
  // Configuration and computed values
  const config = React.useMemo(() => {
    // Show 4 cards per view on desktop
    const itemsPerView = 4;
    const totalScrollSteps = Math.max(1, Math.ceil(milestonesToShow.length / itemsPerView));
    const maxVisibleStart = totalScrollSteps - 1;
    return { itemsPerView, maxVisibleStart, totalScrollSteps };
  }, [milestonesToShow.length]);
  
  // Validate and constrain visibleStart
  const constrainedVisibleStart = Math.min(Math.max(visibleStart, 0), config.maxVisibleStart);
  
  // Update state if it's out of bounds
  React.useEffect(() => {
    if (visibleStart !== constrainedVisibleStart) {
      setVisibleStart(constrainedVisibleStart);
    }
  }, [constrainedVisibleStart, visibleStart]);
  
  // Navigation state
  const canGoNext = constrainedVisibleStart < config.maxVisibleStart;
  const canGoPrev = constrainedVisibleStart > 0;
  
  // Navigation handlers with proper boundaries
  const goNext = React.useCallback(() => {
    if (canGoNext) {
      setVisibleStart(prev => Math.min(prev + 1, config.maxVisibleStart));
    }
  }, [canGoNext, config.maxVisibleStart]);
  
  const goPrev = React.useCallback(() => {
    if (canGoPrev) {
      setVisibleStart(prev => Math.max(prev - 1, 0));
    }
  }, [canGoPrev]);
  
  // Keyboard navigation
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goPrev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goNext();
        break;
      case 'Home':
        event.preventDefault();
        setVisibleStart(0);
        break;
      case 'End':
        event.preventDefault();
        setVisibleStart(config.maxVisibleStart);
        break;
    }
  }, [goPrev, goNext, config.maxVisibleStart]);
  
  // Calculate progress based on actual scroll position
  const currentStep = constrainedVisibleStart + 1;
  const progressPercentage = config.totalScrollSteps > 1 ? (currentStep / config.totalScrollSteps) * 100 : 100;

  return (
    <section 
      aria-labelledby="journey-milestones-title" 
      className="bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 lg:py-20 xl:py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-gray-400 mb-4">
            {t('badge')}
          </p>
          
          <h2 
            id="journey-milestones-title"
            className="font-display text-3xl sm:text-4xl font-light leading-tight text-slate-900 dark:text-gray-100 md:text-5xl lg:text-6xl mb-4 lg:mb-6"
          >
            {t('titleTop')}{' '}
            <span className="font-normal">{t('titleBottom')}</span>
          </h2>
          
       {/*    <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            {locale === 'tr'
              ? 'İlk günden bu yana Braviooı güçlü ve kullanıcı dostu bir e-ticaret altyapısı haline getirmek için çalışıyoruz.'
              : 'From day one, we\'ve been working to make Bravioo a powerful and user-friendly e-commerce infrastructure for businesses.'
            }
          </p> */}
        </motion.div>

        {/* Horizontal Timeline with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Progress Bar */}
          <div className="mb-6 lg:mb-8">
            <div className="relative h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2 sm:gap-0">
              <span className="text-sm text-slate-500 dark:text-gray-400">
{/*                 {t('progress', { percent: Math.round(progressPercentage), step: currentStep, total: config.totalScrollSteps })}
 */}              </span>
              
              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  disabled={!canGoPrev}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${canGoPrev 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl' 
                      : 'bg-slate-200 dark:bg-gray-700 text-slate-400 dark:text-gray-500 cursor-not-allowed'
                    }
                  `}
                  aria-label={locale === 'tr' ? 'Önceki' : 'Previous'}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={goNext}
                  disabled={!canGoNext}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${canGoNext 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl' 
                      : 'bg-slate-200 dark:bg-gray-700 text-slate-400 dark:text-gray-500 cursor-not-allowed'
                    }
                  `}
                  aria-label={locale === 'tr' ? 'Sonraki' : 'Next'}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Container */}
          <div 
            className="relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="region"
            aria-label={locale === 'tr' ? 'Yolculuk mihenk taşları' : 'Journey milestones'}
          >
          
            {/* Milestones Container */}
            <div className="relative">
              <motion.div
                className="flex -mx-3"
                animate={{ 
                  x: `${-constrainedVisibleStart * 100}%`
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ minWidth: '100%' }}
              >
                {milestonesToShow.map((item, index) => {
                  const yearNum = Number(item.year);
                  const isFutureAfter2025 = !Number.isNaN(yearNum) && yearNum > 2025;
                  return (
                  <motion.div
                    key={`${item.year}-${index}`}
                    className="flex-shrink-0 px-3"
                    style={{ flex: `0 0 calc(100% / ${config.itemsPerView})` }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-8">
                      {/* Icon placeholder remains optional */}
                    </div>

                    {/* Milestone Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`
                        relative bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-7 shadow-lg border transition-all duration-300 h-48 sm:h-64
                        border-slate-200 dark:border-gray-700
                      `}
                    >
                        {/* Year Badge */}
                      <div className={`
                        absolute -top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 text-xs font-bold rounded-full
                        ${isFutureAfter2025 ? 'bg-slate-400 dark:bg-gray-600 text-white' : 'bg-emerald-500 text-white'}
                      `}>
                          {item.year}
                      </div>

                      {/* Icon */}
                      <div className={`
                        mb-3 sm:mb-4 p-2 sm:p-3 rounded-xl w-fit
                        ${isFutureAfter2025 
                          ? 'bg-slate-100 dark:bg-gray-700 text-slate-500 dark:text-gray-400' 
                          : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}
                      `}>
                        {React.createElement(IconComponents[Math.min(index, IconComponents.length - 1)], { className: 'w-6 h-6' })}

                      </div>

                      {/* Content */}
                      <h3 className={`
                        text-base sm:text-lg font-semibold mb-2 sm:mb-3 leading-tight
                        ${isFutureAfter2025 ? 'text-slate-500 dark:text-gray-400' : 'text-slate-900 dark:text-gray-100'}
                      `}>
                        {item.title}
                      </h3>
                      

                      {/* Small caption under title instead of status pill */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                        <p className={`text-xs font-medium ${isFutureAfter2025 ? 'text-slate-500 dark:text-gray-400' : (index >= 4 ? 'text-slate-500 dark:text-gray-400' : 'text-emerald-600 dark:text-emerald-400')}`}> 
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );})}
              </motion.div>
            </div>
          </div>

            {/* Timeline Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: config.totalScrollSteps }, (_, i) => (
              <button
                key={i}
                onClick={() => setVisibleStart(Math.min(i, config.maxVisibleStart))}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${constrainedVisibleStart === i 
                    ? 'bg-emerald-500 w-6' 
                    : 'bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-500'
                  }
                `}
                aria-label={`${locale === 'tr' ? 'Sayfa' : 'Page'} ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

   

        {/* CTA moved to separate component */}
      </div>
    </section>
  );
}
