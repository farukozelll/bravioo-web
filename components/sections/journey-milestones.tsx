'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  year: string;
  completed: boolean;
  icon?: React.ReactNode;
}

const MILESTONES_TR: Milestone[] = [
  {
    id: '1',
    title: 'Bravioo Teknoloji A.Ş. Kuruluş',
    description: '',
    year: '2017',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    id: '2',
    title: 'İlk Ürün Lansmanı (POS)',
    description: '',
    year: '2018',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  },
  {
    id: '3',
    title: 'Pazaryeri Entegrasyonu',
    description: '',
    year: '2019',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  },
  {
    id: '4',
    title: 'Tohum Öncesi Yatırım (ONBEYOND)',
    description: '',
    year: '2020',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: '5',
    title: 'E-Ticaret Altyapısı Lansmanı',
    description: '',
    year: '2021',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    id: '6',
    title: 'Tohum Yatırım (500 Global)',
    description: '',
    year: '2021',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  },
  {
    id: '7',
    title: 'Mobil Uygulama Lansmanı',
    description: '',
    year: '2022',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  },
  {
    id: '8',
    title: 'AI Entegrasyonu',
    description: '',
    year: '2023',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  },
  {
    id: '9',
    title: 'Omnichannel Platform',
    description: '',
    year: '2024',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  },
  {
    id: '10',
    title: 'Küresel Genişleme',
    description: '',
    year: '2025',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: '11',
    title: 'B2B Marketplace',
    description: '',
    year: '2026',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  },
  {
    id: '12',
    title: 'Web3 ve Blockchain Entegrasyonu',
    description: '',
    year: '2027',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  }
];

const MILESTONES_EN: Milestone[] = [
  {
    id: '1',
    title: 'Bravioo Technology Inc. Foundation',
    description: '',
    year: '2017',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    id: '2',
    title: 'First Product Launch (POS)',
    description: '',
    year: '2018',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  },
  {
    id: '3',
    title: 'Marketplace Integration',
    description: '',
    year: '2019',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  },
  {
    id: '4',
    title: 'Pre-Seed Investment (ONBEYOND)',
    description: '',
    year: '2020',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: '5',
    title: 'E-commerce Infrastructure Launch',
    description: '',
    year: '2021',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    id: '6',
    title: 'Seed Investment (500 Global)',
    description: '',
    year: '2021',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  },
  {
    id: '7',
    title: 'Mobile Application Launch',
    description: '',
    year: '2022',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  },
  {
    id: '8',
    title: 'AI Integration',
    description: '',
    year: '2023',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  },
  {
    id: '9',
    title: 'Omnichannel Platform',
    description: '',
    year: '2024',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  },
  {
    id: '10',
    title: 'Global Expansion',
    description: '',
    year: '2025',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: '11',
    title: 'B2B Marketplace',
    description: '',
    year: '2026',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  },
  {
    id: '12',
    title: 'Web3 & Blockchain Integration',
    description: '',
    year: '2027',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  }
];

export function JourneyMilestones() {
  const locale = useLocale();
  const milestones = React.useMemo(() => 
    locale === 'tr' ? MILESTONES_TR : MILESTONES_EN, 
    [locale]
  );
  const [visibleStart, setVisibleStart] = React.useState(0);
  
  // Configuration and computed values
  const config = React.useMemo(() => {
    const itemsPerView = 5;
    const maxVisibleStart = Math.max(0, milestones.length - itemsPerView);
    const totalScrollSteps = maxVisibleStart + 1;
    
    return { itemsPerView, maxVisibleStart, totalScrollSteps };
  }, [milestones.length]);
  
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
            {locale === 'tr' ? 'Yolculuğumuz' : 'Our Journey'}
          </p>
          
          <h2 
            id="journey-milestones-title"
            className="font-display text-3xl sm:text-4xl font-light leading-tight text-slate-900 dark:text-gray-100 md:text-5xl lg:text-6xl mb-4 lg:mb-6"
          >
            {locale === 'tr' ? 'İşletmeler İçin Daha İyi Bir' : 'Designing a Better'}{' '}
            <span className="font-normal">
              {locale === 'tr' ? 'E-Ticaret Deneyimi Tasarlıyoruz' : 'E-Commerce Experience'}
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            {locale === 'tr'
              ? 'İlk günden bu yana Braviooı güçlü ve kullanıcı dostu bir e-ticaret altyapısı haline getirmek için çalışıyoruz.'
              : 'From day one, we\'ve been working to make Bravioo a powerful and user-friendly e-commerce infrastructure for businesses.'
            }
          </p>
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
                {locale === 'tr' ? 'Yolculuğumuzun' : 'Our journey'} {Math.round(progressPercentage)}%{locale === 'tr' ? "'i tamamlandı" : ' completed'} 
                ({currentStep}/{config.totalScrollSteps} {locale === 'tr' ? 'adım' : 'steps'})
              </span>
              
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
                className="flex gap-6"
                animate={{ 
                  x: `${-constrainedVisibleStart * (100 / config.itemsPerView)}%` 
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ 
                  width: `${(milestones.length / config.itemsPerView) * 100}%`,
                  minWidth: '100%'
                }}
              >
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    className="flex-shrink-0"
                    style={{ width: `${100 / milestones.length}%` }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-8">
                     
                    </div>

                    {/* Milestone Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`
                        relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border transition-all duration-300 h-44 sm:h-48
                        ${milestone.completed 
                          ? 'border-emerald-200 dark:border-emerald-600 shadow-emerald-100/50 dark:shadow-emerald-900/20' 
                          : 'border-slate-200 dark:border-gray-700'
                        }
                      `}
                    >
                      {/* Year Badge */}
                      <div className={`
                        absolute -top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 text-xs font-bold rounded-full
                        ${milestone.completed 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-slate-300 dark:bg-gray-600 text-slate-600 dark:text-gray-300'
                        }
                      `}>
                        {milestone.year}
                      </div>

                      {/* Icon */}
                      <div className={`
                        mb-3 sm:mb-4 p-2 sm:p-3 rounded-xl w-fit
                        ${milestone.completed 
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' 
                          : 'bg-slate-100 dark:bg-gray-700 text-slate-400 dark:text-gray-500'
                        }
                      `}>
                        {milestone.icon}
                      </div>

                      {/* Content */}
                      <h3 className={`
                        text-base sm:text-lg font-semibold mb-2 sm:mb-3 leading-tight
                        ${milestone.completed ? 'text-slate-900 dark:text-gray-100' : 'text-slate-600 dark:text-gray-400'}
                      `}>
                        {milestone.title}
                      </h3>
                      

                      {/* Status Indicator */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                        <div className="flex items-center gap-2">
                          <div className={`
                            w-2 h-2 rounded-full
                            ${milestone.completed ? 'bg-emerald-500' : 'bg-slate-400'}
                          `}></div>
                          <span className={`
                            text-xs font-medium
                            ${milestone.completed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-gray-400'}
                          `}>
                            {milestone.completed 
                              ? (locale === 'tr' ? 'Tamamlandı' : 'Completed')
                              : (locale === 'tr' ? 'Yakında' : 'Coming Soon')
                            }
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
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

        {/* Mobile Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden"
        >
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-300 to-slate-300 dark:from-emerald-600 dark:via-emerald-500 dark:to-gray-600"></div>
            
            {/* Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className={`
                    relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                    ${milestone.completed 
                      ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg' 
                      : 'bg-white dark:bg-gray-800 border-2 border-slate-300 dark:border-gray-600 text-slate-400 dark:text-gray-500'
                    }
                  `}>
                    {milestone.completed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>

                  {/* Milestone Card */}
                  <div className={`
                    flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border
                    ${milestone.completed 
                      ? 'border-emerald-200 dark:border-emerald-600 shadow-emerald-100/50 dark:shadow-emerald-900/20' 
                      : 'border-slate-200 dark:border-gray-700'
                    }
                  `}>
                    {/* Year Badge */}
                    <div className={`
                      inline-block px-3 py-1 text-xs font-bold rounded-full mb-4
                      ${milestone.completed 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-slate-300 dark:bg-gray-600 text-slate-600 dark:text-gray-300'
                      }
                    `}>
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <h3 className={`
                      text-lg font-semibold mb-3
                      ${milestone.completed ? 'text-slate-900 dark:text-gray-100' : 'text-slate-600 dark:text-gray-400'}
                    `}>
                      {milestone.title}
                    </h3>
                    
                    <p className={`
                      text-sm leading-relaxed mb-4
                      ${milestone.completed ? 'text-slate-600 dark:text-gray-300' : 'text-slate-500 dark:text-gray-400'}
                    `}>
                      {milestone.description}
                    </p>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      <div className={`
                        w-2 h-2 rounded-full
                        ${milestone.completed ? 'bg-emerald-500' : 'bg-slate-400'}
                      `}></div>
                      <span className={`
                        text-xs font-medium
                        ${milestone.completed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-gray-400'}
                      `}>
                        {milestone.completed 
                          ? (locale === 'tr' ? 'Tamamlandı' : 'Completed')
                          : (locale === 'tr' ? 'Yakında' : 'Coming Soon')
                        }
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              {locale === 'tr' 
                ? 'Bizimle yolculuğa başlayın' 
                : 'Start your journey with us'
              }
            </h3>
            <p className="text-base sm:text-lg text-emerald-100 mb-6 lg:mb-8 max-w-2xl mx-auto">
              {locale === 'tr'
                ? 'İşletmenizi bir sonraki seviyeye taşımak için bugün başlayın'
                : 'Start today to take your business to the next level'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 justify-center">
                {locale === 'tr' ? 'Hemen E-Ticarete Başlayın' : 'Start E-Commerce Now'}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all">
                {locale === 'tr' ? 'Demo Al' : 'Get Demo'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
