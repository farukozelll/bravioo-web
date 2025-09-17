'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';
interface SliderItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  content?: React.ReactNode;
}

interface SliderProps {
  items: SliderItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
  itemClassName?: string;
}

export function Slider({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
  itemClassName = ''
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isPaused || items.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, isPaused, nextSlide, autoPlayInterval, items.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (items.length === 0) return null;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Content */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`absolute inset-0 ${itemClassName}`}
          >
            {items[currentIndex].content || (
              <div className="h-full flex flex-col justify-center">
                {items[currentIndex].image && (
                  <div className="mb-6">
                    <Image
                      src={items[currentIndex].image}
                      alt={items[currentIndex].title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                )}
                <div>
                  {items[currentIndex].subtitle && (
                    <p className="text-sm text-brand-600 font-semibold mb-2">
                      {items[currentIndex].subtitle}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-ink-900 mb-4">
                    {items[currentIndex].title}
                  </h3>
                  {items[currentIndex].description && (
                    <p className="text-ink-600 leading-relaxed">
                      {items[currentIndex].description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {showControls && items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-ink-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-ink-700" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {autoPlay && items.length > 1 && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-ink-700" />
          ) : (
            <Play className="h-4 w-4 text-ink-700 ml-0.5" />
          )}
        </button>
      )}

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isPlaying && !isPaused && items.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
          <motion.div
            className="h-full bg-brand-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: autoPlayInterval / 1000,
              ease: 'linear',
              repeat: Infinity
            }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}


