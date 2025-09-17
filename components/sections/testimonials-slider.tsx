'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Building,
  MapPin,
  // TrendingUp,
  Play,
} from 'lucide-react';
import Image from 'next/image';
import { VideoDialog } from '@/components/ui/video-dialog';
import { TESTIMONIALS } from '@/data/testimonials';

export function TestimonialsSlider() {
  const locale = useLocale();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // Removed hover expansion on thumbnails for cleaner UX
  const [autoPlay, setAutoPlay] = useState(true);
  const [videoModal, setVideoModal] = useState<{
    src?: string;
    title?: string;
  } | null>(null);

  const testimonials = TESTIMONIALS.map((t) => ({
    ...t,
    testimonial: locale === 'tr' ? t.testimonialTr : t.testimonialEn,
    results: t.results.map((r) => ({
      metric: locale === 'tr' ? r.metricTr : r.metricEn,
      value: r.value,
      color: r.color,
    })),
  }));

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[activeTestimonial];
  const MOCK_VISUALS = [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529336953121-4f3f8c6dc2a6?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
  ];
  const MOCK_VIDEO_URL =
    'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1';
  const openVideo = () => {
    const title = `${currentTestimonial.company} – ${locale === 'tr' ? 'Başarı Hikayesi' : 'Success Story'}`;
    setVideoModal({ src: MOCK_VIDEO_URL, title });
  };
  const closeVideo = () => setVideoModal(null);

  return (
    <section className="relative overflow-hidden bg-white py-24 text-ink-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Testimonial Display */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-12"
            >
              {/* Left - Testimonial Content */}
              <div className="space-y-8 lg:col-span-2">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -left-6 -top-6 h-16 w-16 text-brand-400/30" />
                  <blockquote className="pl-4 text-xl font-light leading-relaxed text-ink-800 dark:text-gray-50 md:pl-8 md:text-2xl lg:text-3xl">
                    {currentTestimonial.testimonial}
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                      <Image
                        src={currentTestimonial.companyLogo}
                        alt={currentTestimonial.company}
                        width={48}
                        height={48}
                        className="object-contain max-w-12 max-h-12"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-emerald-500">
                      <span className="text-xs font-bold text-white">
                        {currentTestimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-bold text-ink-900 dark:text-white">
                      {currentTestimonial.name}
                    </h3>
                    <p className="mb-2 font-medium text-brand-600 dark:text-brand-300">
                      {currentTestimonial.title}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-ink-600 dark:text-gray-400 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {currentTestimonial.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {currentTestimonial.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {currentTestimonial.employeeCount}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mt-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current text-gold-400"
                        />
                      ))}
                      <span className="ml-2 text-sm text-ink-600 dark:text-gray-400">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Results & Visual */}
              <div className="space-y-6">
                {/* Company Visual */}
                <div
                  className={`relative h-44 rounded-2xl bg-gradient-to-br sm:h-52 ${currentTestimonial.background} group cursor-pointer overflow-hidden p-4 sm:p-6`}
                >
                  <Image
                    src={MOCK_VISUALS[activeTestimonial % MOCK_VISUALS.length]}
                    alt={`${currentTestimonial.company} visual`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  {/* Company Info */}
                  <div className="absolute left-6 right-6 top-6">
                    <div className="flex items-center justify-between"></div>
                  </div>

                  {/* Play Button */}
                  <button
                    className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/20 hover:bg-black/30 dark:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 z-10"
                    aria-label={
                      locale === 'tr' ? 'Videoyu oynat' : 'Play video'
                    }
                    onClick={openVideo}
                  >
                    <Play className="ml-1 h-6 w-6 text-ink-900 dark:text-white" />
                  </button>

                  {/* Background Elements */}
                  <div className="absolute bottom-4 right-4 h-24 w-24 rounded-full border border-white/20"></div>
                  <div className="absolute right-8 top-1/2 h-16 w-16 rounded-full border border-white/20"></div>
                </div>
                <span className="text-sm font-semibold text-ink-900 dark:text-white">
                  {currentTestimonial.company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Thumbnails */}
        <div className="space-y-8">
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-ink-900/5 p-4 transition-all hover:scale-110 hover:bg-ink-900/10 dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer z-10"
              type="button"
            >
              <ChevronLeft className="h-6 w-6 pointer-events-none" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setAutoPlay(false);
                  }}
                  className={`transition-all duration-300 cursor-pointer z-10 ${
                    index === activeTestimonial
                      ? 'h-3 w-12 rounded-full bg-brand-500'
                      : 'h-3 w-3 rounded-full bg-ink-900/20 hover:bg-ink-900/30 dark:bg-white/30 dark:hover:bg-white/50'
                  }`}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="rounded-full bg-ink-900/5 p-4 transition-all hover:scale-110 hover:bg-ink-900/10 dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer z-10"
              type="button"
            >
              <ChevronRight className="h-6 w-6 pointer-events-none" />
            </button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setActiveTestimonial(index);
                  setAutoPlay(false);
                }}
                className={`rounded-2xl border-2 p-4 text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer z-10 ${
                  index === activeTestimonial
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/20'
                    : 'border-ink-900/10 bg-ink-900/5 hover:border-ink-900/20 hover:bg-ink-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10'
                }`}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <Image
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      width={32}
                      height={32}
                      className="object-contain max-w-8 max-h-8"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold text-ink-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="truncate text-xs text-ink-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-current text-gold-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Removed hover-open extra content for simplicity */}
              </button>
            ))}
          </div>
        </div>
      </div>
      <VideoDialog
        open={!!videoModal}
        onClose={closeVideo}
        title={videoModal?.title}
        src={videoModal?.src}
      />
    </section>
  );
}
