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

      const newStep = Math.floor((scrollPosition - journeyStart) / stepHeight);
      const maxSteps = journeySteps[selectedPath].length - 1;

      setActiveStep(Math.max(0, Math.min(newStep, maxSteps)));
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

      <div className="-mt-10">
        <StepNavigator
          thumbs={currentThumbs}
          color={selectedPath === 'hr' ? 'emerald' : 'gold'}
          onClick={handleStepClick}
        />
                      </div>
                      
      <section ref={journeyRef} className="relative -mt-2" style={{ height: `${currentSteps.length * 80}vh` }}>
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
      </section>

      <CTA />
    </main>
  );
}
