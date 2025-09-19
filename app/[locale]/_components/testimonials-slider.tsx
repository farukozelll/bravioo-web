'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Building,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/testimonials';

export function TestimonialsSlider() {
  const locale = useLocale();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // Removed hover expansion on thumbnails for cleaner UX
  const [autoPlay, setAutoPlay] = useState(true);

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

  return (
    <section className="relative overflow-hidden py-24 text-ink-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
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
                    <div className="h-20 w-20 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
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

              {/* Right - Company Logo Visual */}
              <div className="space-y-6">
                <div className="relative h-44 sm:h-52 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={currentTestimonial.companyLogo}
                      alt={`${currentTestimonial.company} logo`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
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
       {/*    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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

              </button>
            ))}
          </div> */}
        </div>
      </div>
      
    </section>
  );
}
