'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { ChevronDown, Quote } from 'lucide-react';
import { TILES } from '@/data/customer-results';
import { TestimonialTile } from '@/types/customer-showcase';

const BRAND = '#3A9355';

export function CustomerTestimonials() {
  const locale = useLocale();
  const [activeCard, setActiveCard] = useState<string | null>(TILES[0]?.id || null);

  const toggleCard = (id: string) => {
    setActiveCard(current => current === id ? null : id);
  };

  return (
    <section 
      aria-labelledby="customer-testimonials-title" 
      className="bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            {locale === 'tr' ? 'Müşteri Deneyimleri' : 'Customer Experiences'}
          </p>
          
          <h2 
            id="customer-testimonials-title"
            className="font-display text-4xl font-light leading-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6"
          >
            {locale === 'tr' ? 'Başarı hikayeleri' : 'Success stories'}{' '}
            <span className="font-normal">
              {locale === 'tr' ? 'gerçek sonuçlarla' : 'with real results'}
            </span>
          </h2>
          
          <p className="max-w-3xl text-xl text-slate-600 leading-relaxed">
            {locale === 'tr'
              ? 'Farklı sektörlerden müşterilerimizin Bravioo ile elde ettikleri somut başarıları keşfedin.'
              : 'Discover the concrete successes achieved by our customers from different sectors with Bravioo.'
            }
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-5 gap-4 h-[450px]">
            {TILES.slice(0, 5).map((tile, index) => {
              const isExpanded = activeCard === tile.id;
              
              return (
                <motion.div
                  key={tile.id}
                  layout
                  className={`
                    relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 cursor-pointer
                    ${isExpanded ? 'col-span-2' : 'col-span-1'}
                  `}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.6
                  }}
                  whileHover={{ 
                    y: isExpanded ? -4 : -2,
                    boxShadow: isExpanded 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                      : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={() => toggleCard(tile.id)}
                >
                  {/* Background */}
                  <div className="absolute inset-0">
                    {isExpanded && tile.closedBg ? (
                      <>
                        <Image
                          src={tile.openBg ?? tile.closedBg}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="50vw"
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      </>
                    ) : (
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600"
                      />
                    )}
                  </div>

                  {/* Header Bar - Always visible */}
                  <div className="relative z-10 flex w-full items-center justify-between p-4">
                    {!isExpanded && (
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-emerald-700 bg-white/95 backdrop-blur-sm">
                        {tile.variant}
                      </span>
                    )}
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-300 ml-auto ${
                        isExpanded ? 'rotate-180 text-white/80' : 'text-white/90'
                      }`}
                    />
                  </div>

                  {/* Collapsed Content - Centered Logo */}
                  {!isExpanded && (
                    <motion.div 
                      className="relative z-10 flex items-center justify-center h-full pb-16"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {tile.logo && (
                        <div className="text-center">
                          <Image 
                            src={tile.logo} 
                            alt={tile.variant} 
                            width={180} 
                            height={45}
                            className="h-10 w-auto brightness-0 invert mx-auto" 
                          />
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative z-10 h-full p-6 pt-0 flex flex-col"
                      >
                        {/* Top Section - Logo with backdrop */}
                        <div className="mb-6">
                          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                            {tile.logo && (
                              <Image 
                                src={tile.logo} 
                                alt={tile.variant} 
                                width={160} 
                                height={40}
                                className="h-8 w-auto" 
                              />
                            )}
                          </div>
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm mt-3">
                            {tile.variant}
                          </span>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col justify-end mb-6">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                            {tile.title}
                          </h3>
                          
                          {/* Quote with enhanced styling */}
                          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                            <div className="flex items-start gap-3">
                              <Quote className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                              <p className="text-sm leading-relaxed text-white/95 italic">
                                {tile.type === 'quote' && tile.quote
                                  ? `"${tile.quote}"`
                                  : tile.type === 'video' 
                                    ? (locale === 'tr' 
                                        ? '"Bravioo ile çalışan motivasyonumuz %85 arttı ve takdir kültürümüz güçlendi."' 
                                        : '"With Bravioo, our employee motivation increased by 85% and our recognition culture strengthened."'
                                      )
                                    : '"Takdir sistemimiz sayesinde çalışan memnuniyetinde büyük artış gözlemledik."'
                                }
                              </p>
                            </div>
                            
                            {/* Author info if available */}
                            {tile.author && (
                              <div className="mt-3 pt-3 border-t border-white/20">
                                <p className="text-xs font-semibold text-white">{tile.author}</p>
                                <p className="text-xs text-white/80">{tile.authorTitle}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden"
        >
          <div className="space-y-4">
            {TILES.slice(0, 3).map((tile) => (
              <div 
                key={tile.id}
                className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white"
              >
                {tile.closedBg && (
                  <div className="relative aspect-[16/9]">
                    <Image 
                      src={tile.closedBg} 
                      alt="" 
                      fill 
                      className="object-cover" 
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Logo */}
                    <div className="absolute left-4 top-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                        <Image 
                          src={tile.logo} 
                          alt={tile.variant} 
                          width={120} 
                          height={30} 
                          className="h-6 w-auto" 
                        />
                      </div>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {tile.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm self-start">
                        {tile.variant}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {tile.type === 'quote' && tile.quote && (
                    <div className="flex items-start gap-3">
                      <Quote className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <p className="text-sm leading-relaxed text-slate-700 italic">
                        &ldquo;{tile.quote}&rdquo;
                      </p>
                    </div>
                  )}
                  
                  {tile.author && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm font-semibold text-slate-900">{tile.author}</p>
                      <p className="text-xs text-slate-600">{tile.authorTitle}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
