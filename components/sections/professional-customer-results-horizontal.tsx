'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Play, Quote, ChevronDown } from 'lucide-react';
import { VideoDialog } from '@/components/ui/video-dialog';
import { TILES, STRIP_LOGOS } from '@/data/customer-results';
import { TestimonialTile } from '@/types/customer-showcase';

const BRAND = '#3A9355';
const GOLD = '#FFE27A';

// Mock Unsplash workplace images as fallbacks
const MOCK_IMAGES = [
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529336953121-4f3f8c6dc2a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
];

export function ProfessionalCustomerResultsHorizontal() {
  const locale = useLocale();
  // Keep one card always expanded
  const [activeCard, setActiveCard] = useState<string>(TILES[0]?.id || '');
  const [videoModal, setVideoModal] = useState<{ src?: string; title?: string } | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(current => (current === id ? current : id));
  };

  const openVideo = (tile: TestimonialTile) => {
    if (tile.type === 'video') {
      const fallback = 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1';
      setVideoModal({ src: tile.videoUrl || fallback, title: tile.title });
    }
  };

  const closeVideo = () => setVideoModal(null);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 lg:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            {locale === 'tr' ? 'Müşteri Sonuçları' : 'Customer results'}
          </p>

          <h2 
            className="font-display text-4xl font-light leading-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6"
          >
            {locale === 'tr' ? 'Performansı şekillendiren' : 'Recognition that'}{' '}
            <span className="font-normal">
              {locale === 'tr' ? 'takdir' : 'shapes performance'}
            </span>
          </h2>

          <p className="max-w-3xl text-xl text-slate-600 leading-relaxed">
            {locale === 'tr'
              ? 'Müşterilerimiz engagement, verimlilik ve elde tutma gibi temel iş metriklerinde 5 kata varan iyileşme görüyor.'
              : 'Our customers see up to 5x improvement on key business drivers like engagement, productivity, and retention.'
            }
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 hidden lg:block"
        >
          <div className="grid grid-cols-5 gap-4 h-[420px]">
            {TILES.slice(0, 4).map((tile, index) => {
              const isExpanded = activeCard === tile.id;
              return (
                <motion.div
                  key={tile.id}
                  layout
                  className={`
                    relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 cursor-pointer
                    ${isExpanded ? 'col-span-2' : 'col-span-1'}
                  `}
                  transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.6 }}
                  whileHover={{ 
                    y: isExpanded ? -3 : -2,
                    boxShadow: isExpanded 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                      : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={() => toggleCard(tile.id)}
                >
                  {/* Background - Green when closed, Image when expanded */}
                  <div className="absolute inset-0">
                    {isExpanded ? (
                      <>
                        <Image
                          src={tile.openBg ?? MOCK_IMAGES[index % MOCK_IMAGES.length]}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="50vw"
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0" style={{ backgroundColor: BRAND }} />
                    )}
                  </div>

                  {/* Decorative Background Blobs */}
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div 
                      className="absolute -left-10 -top-10 h-64 w-64 rounded-full opacity-20 blur-2xl"
                      style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 60%)` }}
                    />
                    <div 
                      className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full opacity-20 blur-2xl"
                      style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 60%)` }}
                    />
                  </div>

                  {/* Top-right chevron, not affecting layout */}
                  <div className="absolute top-0 right-0 z-10 p-4">
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-white/80' : 'text-white/90'
                      }`}
                    />
                  </div>

                  {/* Collapsed Content - Centered Logo (clean only-logo view) */}
                  {!isExpanded && (
                    <motion.div 
                      className="relative z-10 flex items-center justify-center h-full p-6 pt-0"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {tile.logo && (
                        <Image 
                          src={tile.logo} 
                          alt={tile.title || tile.id} 
                          width={220} 
                          height={60}
                          className="h-12 w-auto"
                        />
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
                        {/* Top Left - Logo (visible when expanded) */}
                        <div className="mb-4 mt-4 ">
                          {tile.logo && (
                            <Image 
                              src={tile.logo} 
                              alt={tile.title || tile.id} 
                              width={180} 
                              height={45}
                              className="h-9 w-auto"
                            />
                          )}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col justify-end mb-8 lg:mb-24">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-3">
                            {tile.title}
                          </h3>
                          {/* Quote */}
                          <div className="flex items-start gap-3">
                            <Quote className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                            <p className="text-sm leading-relaxed text-white/90 italic max-w-md">
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
                          {/* Optional CTA for videos */}
                          {tile.type === 'video' && (
                            <button
                              onClick={() => openVideo(tile)}
                              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors w-max"
                              aria-label={`${locale === 'tr' ? 'Videoyu oynat' : 'Play video'}: ${tile.title}`}
                            >
                              <Play className="h-4 w-4" />
                              <span className="text-sm font-medium">{locale === 'tr' ? 'Videoyu İzle' : 'Watch Video'}</span>
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:hidden"
        >
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 -mx-6 px-6">
            {TILES.map((tile) => (
              <article 
                key={tile.id}
                className="snap-start shrink-0 w-[85%] overflow-hidden rounded-2xl ring-1 ring-slate-200"
              >
                <div className="relative aspect-[16/10] flex items-center justify-center" style={{ backgroundColor: BRAND }}>
                  {/* Centered Logo when collapsed (mobile card visual) */}
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
                {/* Content */}
                {tile.type === 'quote' ? (
                  <div className="space-y-4 p-6 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="text-3xl font-bold mb-1" style={{ color: GOLD }}>
                          {tile.stat}
                        </div>
                        <div className="text-xs text-slate-600 font-medium">
                          {tile.statLabel}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700">
                      &ldquo;{tile.quote}&rdquo;
                    </p>
                    {tile.author && (
                      <div className="pt-3 border-t border-slate-200">
                        <p className="text-sm font-semibold text-slate-900">{tile.author}</p>
                        <p className="text-xs text-slate-600">{tile.authorTitle}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 bg-white">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{tile.title}</h3>
                    <button
                      onClick={() => openVideo(tile)}
                      className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors"
                    >
                      {locale === 'tr' ? 'Videoyu İzle →' : 'Watch Video →'}
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </motion.div>

        {/* Strip logos (if used elsewhere) - preserved for parity */}
        {STRIP_LOGOS?.length ? (
          <div className="sr-only">{STRIP_LOGOS.length}</div>
        ) : null}
      </div>

      {/* Video Modal */}
      <VideoDialog open={!!videoModal} onClose={closeVideo} title={videoModal?.title} src={videoModal?.src} />
    </section>
  );
}

export default ProfessionalCustomerResultsHorizontal;


