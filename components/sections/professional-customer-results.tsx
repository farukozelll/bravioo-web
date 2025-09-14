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

export function ProfessionalCustomerResults() {
  const locale = useLocale();
  const [activeCard, setActiveCard] = useState<string | null>('dyson');
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
    <section 
      aria-labelledby="customer-results-title" 
      className="bg-white py-20 lg:py-24"
    >
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
            id="customer-results-title"
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
            {TILES.map((tile, index) => {
              const isExpanded = activeCard === tile.id;
              const isDyson = tile.id === 'dyson';
              
              return (
                <motion.div
                  key={tile.id}
                  layout
                  className={`
                    relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 cursor-pointer
                    ${isExpanded ? (isDyson ? 'col-span-3' : 'col-span-2') : 'col-span-1'}
                  `}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.6
                  }}
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
                      <div 
                        className="absolute inset-0"
                        style={{ backgroundColor: BRAND }}
                      />
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
                        isExpanded 
                          ? 'text-white bg-black/20' 
                          : 'text-green-700 bg-white/90'
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
                      className="relative z-10 p-6 pt-0"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {tile.logo && (
                        <div className="mb-6">
                          <Image 
                            src={tile.logo} 
                            alt={tile.variant} 
                            width={160} 
                            height={40}
                            className="h-8 w-auto brightness-0 invert" 
                          />
                        </div>
                      )}
                      <p className="mt-auto text-sm font-semibold text-white/95">
                        {tile.title}
                      </p>
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
                        className="relative z-10 grid h-full grid-cols-1 gap-6 p-6 pt-0 lg:grid-cols-3"
                      >
                        {/* Left Column - Logo/Metric */}
                        <div className="lg:col-span-1 flex flex-col justify-between">
                          {tile.type === 'quote' ? (
                            <>
                              <div>
                                <div 
                                  className="text-6xl font-bold tracking-tight leading-none mb-2"
                                  style={{ color: GOLD }}
                                >
                                  {tile.stat}
                                </div>
                                <p className="text-sm font-semibold text-white/90">
                                  {tile.statLabel}
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <Image 
                                  src={tile.logo} 
                                  alt={tile.variant} 
                                  width={180} 
                                  height={45}
                                  className="h-9 w-auto mb-4" 
                                />
                                <p className="text-sm font-semibold text-white/90 mb-4">
                                  {tile.title}
                                </p>
                              </div>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openVideo(tile);
                                }}
                                className="inline-flex items-center gap-3 rounded-xl bg-black/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 transition-all group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`${locale === 'tr' ? 'Videoyu oynat' : 'Play video'}: ${tile.title}`}
                              >
                                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                {locale === 'tr' ? 'Videoyu İzle' : 'Play Video'}
                              </motion.button>
                            </>
                          )}
                        </div>

                        {/* Right Column - Quote Panel */}
                        <div className="lg:col-span-2">
                          <motion.div 
                            className="h-full rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <div className="p-6 h-full flex flex-col justify-between">
                              <div>
                                <Quote className="h-8 w-8 text-orange-400 mb-4" />
                                <p className="text-sm leading-relaxed text-white/90">
                                  {tile.type === 'quote' 
                                    ? tile.quote 
                                    : (locale === 'tr' 
                                        ? 'Nasıl başlattıkları, ölçeklendirdikleri ve takdiri ölçtüklerini izleyin.' 
                                        : 'Watch how they launched, scaled and measured recognition.'
                                      )
                                  }
                                </p>
                              </div>
                              {tile.type === 'quote' && tile.author && (
                                <div className="mt-4 pt-4 border-t border-white/10">
                                  <p className="font-semibold text-white">{tile.author}</p>
                                  <p className="text-sm text-white/70">{tile.authorTitle}</p>
                                </div>
                              )}
                            </div>
                          </motion.div>
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
                        <div 
                          className="text-3xl font-bold mb-1"
                          style={{ color: GOLD }}
                        >
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
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {tile.title}
                    </h3>
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

        {/* Vertical Scrolling Image Galleries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
            {/* Left Column - Upward Scrolling */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="absolute inset-0 flex flex-col gap-4 animate-scroll-up">
                {[...TILES, ...TILES].map((tile, index) => (
                  <div
                    key={`left-${tile.id}-${index}`}
                    className="relative flex-shrink-0 h-80 overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    {tile.closedBg && (
                      <>
                        <Image
                          src={tile.closedBg}
                          alt={tile.title ?? ''}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </>
                    )}
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        {tile.logo && (
                          <Image
                            src={tile.logo}
                            alt={tile.variant}
                            width={120}
                            height={30}
                            className="h-8 w-auto brightness-0 invert"
                          />
                        )}
                        <span className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full">
                          {tile.variant}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {tile.title}
                        </h3>
                        {tile.type === 'video' && (
                          <div className="flex items-center gap-2 text-white/80 text-sm">
                            <Play className="h-4 w-4" />
                            <span>{locale === 'tr' ? 'Videoyu İzle' : 'Watch Video'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-100 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Right Column - Downward Scrolling */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="absolute inset-0 flex flex-col gap-4 animate-scroll-down">
                {[...TILES.slice().reverse(), ...TILES.slice().reverse()].map((tile, index) => (
                  <div
                    key={`right-${tile.id}-${index}`}
                    className="relative flex-shrink-0 h-80 overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    {tile.openBg && (
                      <>
                        <Image
                          src={tile.openBg}
                          alt={tile.title ?? ''}
                          fill  
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </>
                    )}
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        {tile.logo && (
                          <Image
                            src={tile.logo}
                            alt={tile.variant}
                            width={120}
                            height={30}
                            className="h-8 w-auto brightness-0 invert"
                          />
                        )}
                        <span className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full">
                          {tile.variant}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {tile.title}
                        </h3>
                        {tile.type === 'video' && (
                          <div className="flex items-center gap-2 text-white/80 text-sm">
                            <Play className="h-4 w-4" />
                            <span>{locale === 'tr' ? 'Videoyu İzle' : 'Watch Video'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-100 to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Logo Marquee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-12 py-6 animate-marquee">
              {[...STRIP_LOGOS, ...STRIP_LOGOS].map((name, i) => (
                <span 
                  key={`${name}-${i}`}
                  className="shrink-0 px-4 py-2 text-lg font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90" 
               style={{
                 maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)'
               }}
          />
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoDialog
        open={!!videoModal}
        onClose={closeVideo}
        title={videoModal?.title}
        src={videoModal?.src}
      />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-scroll-up,
          .animate-scroll-down {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
