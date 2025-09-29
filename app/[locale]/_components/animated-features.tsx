'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    id: 'recognition',
    icon: Award,
    titleKey: 'animatedFeatures.recognition.title',
    descriptionKey: 'animatedFeatures.recognition.description',
    featuresKeys: [
      'animatedFeatures.recognition.items.0',
      'animatedFeatures.recognition.items.1',
      'animatedFeatures.recognition.items.2',
      'animatedFeatures.recognition.items.3',
      'animatedFeatures.recognition.items.4'
    ],
    color: 'from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900',
    accentColor: 'primary-500',
    mockup: '/mockups/recognition-card.svg'
  },
  {
    id: 'rewards',
    icon: Globe,
    titleKey: 'animatedFeatures.rewards.title',
    descriptionKey: 'animatedFeatures.rewards.description',
    featuresKeys: [
      'animatedFeatures.rewards.items.0',
      'animatedFeatures.rewards.items.1',
      'animatedFeatures.rewards.items.2',
      'animatedFeatures.rewards.items.3',
      'animatedFeatures.rewards.items.4'
    ],
    color: 'from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900',
    accentColor: 'primary-600',
    mockup: '/mockups/rewards-card.svg'
  },
  {
    id: 'awards',
    icon: Star,
    titleKey: 'animatedFeatures.awards.title',
    descriptionKey: 'animatedFeatures.awards.description',
    featuresKeys: [
      'animatedFeatures.awards.items.0',
      'animatedFeatures.awards.items.1',
      'animatedFeatures.awards.items.2',
      'animatedFeatures.awards.items.3'
    ],
    color: 'from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900',
    accentColor: 'secondary-500',
    mockup: '/mockups/awards-card.svg'
  },
  {
    id: 'milestones',
    icon: Users,
    titleKey: 'animatedFeatures.milestones.title',
    descriptionKey: 'animatedFeatures.milestones.description',
    featuresKeys: [
      'animatedFeatures.milestones.items.0',
      'animatedFeatures.milestones.items.1',
      'animatedFeatures.milestones.items.2',
      'animatedFeatures.milestones.items.3'
    ],
    color: 'from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900',
    accentColor: 'primary-700',
    mockup: '/mockups/milestones-card.svg'
  },
  
];

export function AnimatedFeaturesSection() {
  const t = useTranslations();
  const [activeFeature, setActiveFeature] = useState(0);

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
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4 transition-colors duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('animatedFeatures.badge')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-6 font-display transition-colors duration-300">
            {t('animatedFeatures.title.prefix')}{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('animatedFeatures.title.highlight')}
            </span>
          </h2>
        
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeFeature;
            return (
              <div
                key={feature.id}
                className={`relative group cursor-pointer ${
                  isActive ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`
                  relative h-80 rounded-3xl p-6 overflow-hidden border border-neutral-200 dark:border-neutral-700
                  bg-gradient-to-br ${feature.color}
                  transform transition-all duration-500
                  ${isActive ? 'ring-2 ring-emerald-300 shadow-2xl border-emerald-200' : 'shadow-lg hover:shadow-xl'}
                  hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2
                  group cursor-pointer
                `}>
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 dark:to-transparent"></div>
                  <div 
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                  
                  {/* Expand Icon */}
                  <div 
                    className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isActive 
                        ? 'bg-emerald-500 text-white shadow-lg rotate-180' 
                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 group-hover:bg-primary-500 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                        isActive 
                          ? 'bg-emerald-500 text-white shadow-lg' 
                          : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight text-neutral-900 dark:text-neutral-100">
                        {t(feature.titleKey)}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-auto"
                        >
                          <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
                            {t(feature.descriptionKey)}
                          </p>
                          <ul className="space-y-2">
                            {feature.featuresKeys.slice(0, 3).map((key, i) => (
                              <motion.li 
                                key={key}
                                className="flex items-center text-sm text-neutral-600 dark:text-neutral-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-emerald-500" />
                                {t(key)}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                      <motion.div 
                        className="mt-auto"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                      >
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                          {t(features[index].descriptionKey).slice(0, 80)}...
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
  {/*       <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '2x', label: t('animatedFeatures.stats.0') },
              { number: '200+', label: t('animatedFeatures.stats.1') },
              { number: '50.000+', label: t('animatedFeatures.stats.2') }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-600 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
