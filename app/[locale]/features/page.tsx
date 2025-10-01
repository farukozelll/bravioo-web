  'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Image not used in this file after refactor
// import { useLocale } from 'next-intl';

// Content
import { journeySteps, stepNavigationThumbs, PathType } from '../../../data/features-journey';
import { Hero } from './_components/Hero';
import { StepNavigator } from './_components/StepNavigator';
import { Journey } from './_components/Journey';
import { CTA } from './_components/CTA';

// (ecosystem modules removed)

export default function FeaturesPage() {
  // const locale = useLocale();
  const [selectedPath, setSelectedPath] = useState<PathType>('hr');
  const [activeStep, setActiveStep] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const { scrollY } = useScroll();

  // Transform values for parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const deviceY = useTransform(scrollY, [0, 2000], [0, -50]);

  // Journey anchor for step navigator
  const journeyRef = useRef<HTMLDivElement | null>(null);
  // thumbs from content

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (typeof window !== 'undefined') {
      const windowHeight = window.innerHeight;
      const journeyStart = windowHeight; // after hero
      const stepHeight = windowHeight * 0.8;
      const top = journeyStart + index * stepHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const journeyStart = windowHeight; // After hero
      const stepHeight = windowHeight * 0.8;

      let newStep = Math.floor((scrollPosition - journeyStart) / stepHeight);
      const maxSteps = journeySteps[selectedPath].length - 1;

      // If near the bottom of the page, force last step
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = scrollPosition + windowHeight >= docHeight - 4;
      if (atBottom) newStep = maxSteps;

      setActiveStep(Math.max(0, Math.min(newStep, maxSteps)));

      // Show progress only within the journey region
      const totalJourneyHeight = journeySteps[selectedPath].length * stepHeight;
      const inJourney = scrollPosition >= journeyStart - 10 && scrollPosition <= journeyStart + totalJourneyHeight;
      setShowProgress(inJourney);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPath]);

  // Reset active step when switching tabs
  useEffect(() => {
    setActiveStep(0);
  }, [selectedPath]);

  const currentSteps = journeySteps[selectedPath];
  
  // Use Unsplash thumbnails for step navigation
  const currentThumbs = stepNavigationThumbs.slice(0, currentSteps.length);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div style={{ y: heroY }}>
        <Hero selectedPath={selectedPath} onSelect={setSelectedPath} />
            </motion.div>

      <div className="-mt-10 px-4 sm:px-6 lg:px-8">
        <StepNavigator
          thumbs={currentThumbs}
          color={selectedPath === 'hr' ? 'emerald' : 'gold'}
          onClick={handleStepClick}
          steps={currentSteps}
          selectedPath={selectedPath}
        />
      </div>
                      
      <section ref={journeyRef} className="relative -mt-2" style={{ height: `${currentSteps.length * 80 + 50}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Journey
              steps={currentSteps}
              selectedPath={selectedPath}
              activeStep={activeStep}
              deviceY={deviceY}
              onTry={() => {}}
            />
          </div>
        </div>
        {/* Scroll progress indicator - only visible during journey scroll */}
        {showProgress && (
          <div className="pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-opacity duration-300">
            <div className="flex gap-2">
              {currentSteps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                    i === activeStep
                      ? selectedPath === 'hr'
                        ? 'bg-emerald-500 w-12'
                        : 'bg-gold-500 w-12'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <CTA />
    </main>
  );
}
