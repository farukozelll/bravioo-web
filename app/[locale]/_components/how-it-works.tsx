'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  Users,
  Award,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'admin-portal',
      title: t('steps.adminPortal.title'),
      subtitle: t('steps.adminPortal.subtitle'),
      description: t('steps.adminPortal.description'),
      icon: Users,
      color: 'from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900',
      accentColor: 'secondary-500',
      features: [
        t('steps.adminPortal.features.0'),
        t('steps.adminPortal.features.1'),
        t('steps.adminPortal.features.2'),
        t('steps.adminPortal.features.3')
      ],
      mockup: 'admin-portal'
    },
    {
      id: 'employee-app',
      title: t('steps.employeeApp.title'),
      subtitle: t('steps.employeeApp.subtitle'),
      description: t('steps.employeeApp.description'),
      icon: Award,
      color: 'from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900',
      accentColor: 'primary-600',
      features: [
        t('steps.employeeApp.features.0'),
        t('steps.employeeApp.features.1'),
        t('steps.employeeApp.features.2'),
        t('steps.employeeApp.features.3')
      ],
      mockup: 'employee-app'
    },
  ];

  return (
    <section className="relative py-24 bg-neutral-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
   

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - F-Pattern: Left-aligned */}
        <motion.div 
          className="text-left mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('badge')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-6 font-display">
            {t('title')}{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>{' '}
            {t('titleEnd')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-20">
          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 md:gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-neutral-200/50 dark:border-gray-700/20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`
                      flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300
                      ${index === activeStep 
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                        : 'text-neutral-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 ${index === activeStep ? 'text-white' : 'text-primary-600'}`} />
                    <span className="font-semibold hidden md:block">{step.title}</span>
                    <span className="font-semibold md:hidden">{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center border border-neutral-200 dark:border-neutral-600`}>
                      {React.createElement(steps[activeStep].icon, { 
                        className: `h-8 w-8 text-${steps[activeStep].accentColor}` 
                      })}
                    </div>
                    <div>
                    <div className="text-sm text-primary-600 font-semibold">
                      {t('module')} {activeStep + 1}
                    </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-gray-100">
                        {steps[activeStep].subtitle}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-neutral-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <ul className="space-y-4">
                    {steps[activeStep].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className={`h-5 w-5 text-${steps[activeStep].accentColor} flex-shrink-0`} />
                        <span className="text-neutral-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full px-8"
                  >
                    {t('viewDemo')}
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/20 rounded-full px-8"
                  >
                    {t('learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Professional Device Mockups */}
              <motion.div 
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Mobile-only: Always show phone mockup with screenshot on right */}
                <div className="block lg:hidden">
                  <div className="flex justify-end">
                    <div className="relative max-w-xs animate-float">
                      {/* Phone Frame */}
                      <div className="relative bg-neutral-900 dark:bg-neutral-800 rounded-[3rem] p-2 shadow-2xl">
                        <div className="bg-neutral-50 dark:bg-neutral-100 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
                          {/* Status Bar */}
                          <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 dark:bg-neutral-800 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-xs font-medium">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-end pr-0.5">
                                <div className="w-4 h-1.5 bg-white rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                          {/* App Interface Preview: screenshot image */}
                          <div className="pt-8 h-full relative">
                            <Image
                              src="/images/app-download-screen.webp"
                              alt="Bravioo mobile app preview"
                              fill
                              sizes="(max-width: 768px) 280px, 320px"
                              className="object-cover"
                              priority
                            />
                          </div>
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-neutral-900 dark:bg-neutral-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop/Tablet visuals */}
                <div className="hidden lg:block">
                  {activeStep === 1 ? (
                    <div className="flex justify-end">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="relative w-[260px] aspect-[9/19.5] overflow-hidden rounded-3xl">
                          <Image
                            src="/images/Bravioo-Home-Mobile_Mockup.png"
                            alt="Employee app - home"
                            fill
                            sizes="260px"
                            className="object-cover object-top"
                            priority
                          />
                        </div>
                        <div className="relative w-[260px] aspect-[9/19.5] overflow-hidden rounded-3xl">
                          <Image
                            src="/images/Bravioo-Category-Mobile_Mockup.png"
                            alt="Employee app - category"
                            fill
                            sizes="260px"
                            className="object-cover object-top"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="relative w-[1600px] aspect-[16/9] overflow-hidden rounded-3xl">
                        <Image
                          src="/images/Bravioo-Tablet_Mockup.png"
                          alt="Admin portal preview"
                          fill
                          sizes="1600px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}


