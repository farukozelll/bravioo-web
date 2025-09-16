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

export function ProfessionalCustomerResultsHorizontal() {
  const locale = useLocale();
  const [activeCard, setActiveCard] = useState<string | null>(TILES[0]?.id || null);
  const [videoModal, setVideoModal] = useState<{ src?: string; title?: string } | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(current => current === id ? null : id);
  };

  const openVideo = (tile: TestimonialTile) => {
    if (tile.type === 'video' && tile.videoUrl) {
      setVideoModal({ src: tile.videoUrl, title: tile.title });
    }
  };

  const closeVideo = () => setVideoModal(null);

  return (
    <section className="bg-white py-20 lg:py-24">
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

                  {/* Header Bar */}
                  <div className="relative z-10 flex w-full items-center justify-between p-6">
                    <span 
                      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        isExpanded ? 'text-white bg-black/20' : 'text-green-700 bg-white/90'
                      }`}
                    >
                      {tile.variant}
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-white/80' : 'text-white/90'
                      }`}
                    />
                  </div>

                  {/* Collapsed Content */}
                  {!isExpanded && (
                    <motion.div 
                      className="relative z-10 flex items-center justify-center h-full p-6 pt-0"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {tile.logo && (
                        <div className="text-center">
                          <Image 
                            src={tile.logo} 
                            alt={tile.variant} 
                            width={160} 
                            height={40}
                            className="h-8 w-auto brightness-0 invert mx-auto" 
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
                        {/* Top Left - Logo */}
                        <div className="mb-4">
                          {tile.logo && (
                            <Image 
                              src={tile.logo} 
                              alt={tile.variant} 
                              width={180} 
                              height={45}
                              className="h-9 w-auto" 
                            />
                          )}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col justify-end mb-24">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-3">
                            {tile.title}
                          </h3>
                          {/* Quote */}
                          <div className="flex items-start gap-3">
                            <Quote className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                            <p className="text-sm leading-relaxed text-white/90 italic">
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
                {tile.closedBg && (
                  <div className="relative aspect-[16/10]">
                    <Image 
                      src={tile.closedBg} 
                      alt="" 
                      fill 
                      className="object-cover" 
                      sizes="85vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Logo */}
                    <div className="absolute left-4 top-4">
                      <Image 
                        src={tile.logo} 
                        alt={tile.variant} 
                        width={140} 
                        height={32} 
                        className="h-8 w-auto" 
                      />
                    </div>
                    {/* Play Button for Videos */}
                    {tile.type === 'video' && (
                      <button
                        onClick={() => openVideo(tile)}
                        className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-xl hover:bg-white transition-all group"
                        aria-label={`${locale === 'tr' ? 'Videoyu oynat' : 'Play video'}: ${tile.title}`}
                      >
                        <Play className="h-6 w-6 ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    )}
                  </div>
                )}
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


