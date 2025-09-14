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
    title: 'Platform Kuruluşu',
    description: 'İkas güçlü e-ticaret altyapısı ile iş dünyasına giriş yaptı',
    year: '2020',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    id: '2',
    title: '10.000+ Aktif Kullanıcı',
    description: 'Başarılı işletme başarıya ulaştı ve %50 oranında artış elde etti',
    year: '2021',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
  {
    id: '3',
    title: 'İkas Start Paketi',
    description: 'Ücretsiz oldu ve geniş kullanıcı kitlesi için erişilebilir hale geldi',
    year: '2022',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: '4',
    title: 'G2 Market Movers Listesi',
    description: 'G2 Market Movers listesinde yer alarak sektörde önemli bir kilometre taşı elde etti',
    year: '2023',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  },
  {
    id: '5',
    title: 'Great Place to Work Sertifikası',
    description: 'Çalışan memnuniyetinde üstün başarı göstererek sertifika aldı',
    year: '2024',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    id: '6',
    title: 'İkas Studio Duyuruldu',
    description: 'Yeni gelişmiş özellikler ve kapasitelerle platform genişletildi',
    year: '2025',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  }
];

const MILESTONES_EN: Milestone[] = [
  {
    id: '1',
    title: 'Platform Foundation',
    description: 'İkas entered the business world with powerful e-commerce infrastructure',
    year: '2020',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    id: '2',
    title: '+10,000 Active Users',
    description: 'Successful businesses achieved success and gained 50% growth',
    year: '2021',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
  {
    id: '3',
    title: 'İkas Start Package',
    description: 'Became free and accessible to a wider user base',
    year: '2022',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: '4',
    title: 'G2 Market Movers List',
    description: 'Achieved a significant milestone in the industry by being featured on G2 Market Movers list',
    year: '2023',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  },
  {
    id: '5',
    title: 'Great Place to Work Certificate',
    description: 'Received certification for outstanding achievement in employee satisfaction',
    year: '2024',
    completed: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    id: '6',
    title: 'İkas Studio Announced',
    description: 'Platform expanded with new advanced features and capabilities',
    year: '2025',
    completed: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  }
];

export function JourneyMilestones() {
  const locale = useLocale();
  const milestones = locale === 'tr' ? MILESTONES_TR : MILESTONES_EN;

  return (
    <section 
      aria-labelledby="journey-milestones-title" 
      className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-24"
    >
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
            {locale === 'tr' ? 'Yolculuğumuz' : 'Our Journey'}
          </p>
          
          <h2 
            id="journey-milestones-title"
            className="font-display text-4xl font-light leading-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6"
          >
            {locale === 'tr' ? 'İşletmeler İçin Daha İyi Bir' : 'Designing a Better'}{' '}
            <span className="font-normal">
              {locale === 'tr' ? 'E-Ticaret Deneyimi Tasarlıyoruz' : 'E-Commerce Experience'}
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
            {locale === 'tr'
              ? 'İlk günden bu yana ikası güçlü ve kullanıcı dostu bir e-ticaret altyapısı haline getirmek için çalışıyoruz.'
              : 'From day one, we\'ve been working to make İkas a powerful and user-friendly e-commerce infrastructure for businesses.'
            }
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          {/* Timeline Container */}
          <div className="relative">
            {/* Background Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-emerald-200 to-slate-300"></div>
            
            {/* Milestones */}
            <div className="grid grid-cols-6 gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="flex justify-center mb-8">
                    <div className={`
                      relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                      ${milestone.completed 
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg' 
                        : 'bg-white border-2 border-slate-300 text-slate-400'
                      }
                    `}>
                      {milestone.completed ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`
                      relative bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300
                      ${milestone.completed 
                        ? 'border-emerald-200 shadow-emerald-100/50' 
                        : 'border-slate-200'
                      }
                    `}
                  >
                    {/* Year Badge */}
                    <div className={`
                      absolute -top-3 left-6 px-3 py-1 text-xs font-bold rounded-full
                      ${milestone.completed 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-slate-300 text-slate-600'
                      }
                    `}>
                      {milestone.year}
                    </div>

                    {/* Icon */}
                    <div className={`
                      mb-4 p-3 rounded-xl w-fit
                      ${milestone.completed 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : 'bg-slate-100 text-slate-400'
                      }
                    `}>
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <h3 className={`
                      text-lg font-semibold mb-3 leading-tight
                      ${milestone.completed ? 'text-slate-900' : 'text-slate-600'}
                    `}>
                      {milestone.title}
                    </h3>
                    
                    <p className={`
                      text-sm leading-relaxed
                      ${milestone.completed ? 'text-slate-600' : 'text-slate-500'}
                    `}>
                      {milestone.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className={`
                        w-2 h-2 rounded-full
                        ${milestone.completed ? 'bg-emerald-500' : 'bg-slate-400'}
                      `}></div>
                      <span className={`
                        text-xs font-medium
                        ${milestone.completed ? 'text-emerald-600' : 'text-slate-500'}
                      `}>
                        {milestone.completed 
                          ? (locale === 'tr' ? 'Tamamlandı' : 'Completed')
                          : (locale === 'tr' ? 'Yakında' : 'Coming Soon')
                        }
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-300 to-slate-300"></div>
            
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
                      : 'bg-white border-2 border-slate-300 text-slate-400'
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
                    flex-1 bg-white rounded-2xl p-6 shadow-lg border
                    ${milestone.completed 
                      ? 'border-emerald-200 shadow-emerald-100/50' 
                      : 'border-slate-200'
                    }
                  `}>
                    {/* Year Badge */}
                    <div className={`
                      inline-block px-3 py-1 text-xs font-bold rounded-full mb-4
                      ${milestone.completed 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-slate-300 text-slate-600'
                      }
                    `}>
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <h3 className={`
                      text-lg font-semibold mb-3
                      ${milestone.completed ? 'text-slate-900' : 'text-slate-600'}
                    `}>
                      {milestone.title}
                    </h3>
                    
                    <p className={`
                      text-sm leading-relaxed mb-4
                      ${milestone.completed ? 'text-slate-600' : 'text-slate-500'}
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
                        ${milestone.completed ? 'text-emerald-600' : 'text-slate-500'}
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {locale === 'tr' 
                ? 'Bizimle yolculuğa başlayın' 
                : 'Start your journey with us'
              }
            </h3>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              {locale === 'tr'
                ? 'İşletmenizi bir sonraki seviyeye taşımak için bugün başlayın'
                : 'Start today to take your business to the next level'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 justify-center">
                {locale === 'tr' ? 'Hemen E-Ticarete Başlayın' : 'Start E-Commerce Now'}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-semibold transition-all">
                {locale === 'tr' ? 'Demo Al' : 'Get Demo'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
