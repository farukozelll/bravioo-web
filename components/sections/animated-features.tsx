'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  BarChart3, 
  Globe, 
  Zap,
  Plus,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    id: 'recognition',
    icon: Award,
    title: 'Employee Recognition Made Easy',
    description: "It's quick and simple to send monetary or non-monetary recognition, all in your flow of work.",
    features: [
      'Easy-to-use, modern interface',
      'High usage and adoption',
      'Enterprise-grade integrations',
      'Online and offline populations',
      'Innovative AI features'
    ],
    color: 'from-brand-500 to-emerald-600',
    mockup: '/mockups/recognition-card.svg'
  },
  {
    id: 'rewards',
    icon: Globe,
    title: 'A Truly Global Rewards Marketplace',
    description: 'Access the world\'s largest in-country reward network – unmatched in reach and locally curated for your workforce.',
    features: [
      'Millions of options, zero mark-ups',
      'Free delivery to ~190 countries',
      'Locally relevant rewards tailored to regions',
      'Company branded swag available worldwide',
      'Concierge service for unique rewards'
    ],
    color: 'from-purple-500 to-pink-600',
    mockup: '/mockups/rewards-card.svg'
  },
  {
    id: 'awards',
    icon: Star,
    title: 'Nomination-based Awards',
    description: 'Nominate colleagues for outstanding performance, ensuring your MVPs are recognized.',
    features: [
      'Personalized awards',
      'Customizable approval workflow',
      'Single dashboard for easy management',
      'Awards displayed in social newsfeed'
    ],
    color: 'from-yellow-500 to-orange-600',
    mockup: '/mockups/awards-card.svg'
  },
  {
    id: 'milestones',
    icon: Users,
    title: 'Years of Service & Milestones',
    description: 'Customize how you want to celebrate personal and professional achievements such as years of service.',
    features: [
      'Custom digital and printable cards',
      'Meaningful keepsakes',
      'Reward tokens',
      'Scalable celebrations and milestones'
    ],
    color: 'from-orange-500 to-red-600',
    mockup: '/mockups/milestones-card.svg'
  },
  
];

export function AnimatedFeaturesSection() {
  const t = useTranslations('features');
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-sand-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-200 to-gold-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Solutions
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
            The tools you need to{' '}
            <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
              shape your workforce
            </span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              variant="outline" 
              className="border-2 border-brand-200 text-brand-700 hover:bg-brand-50 rounded-full px-8 py-3 font-semibold"
            >
              Explore our platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className={`relative group cursor-pointer ${
                  index === activeFeature ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setActiveFeature(index)}
                whileHover={{ y: -8 }}
              >
                <div className={`
                  relative h-80 rounded-3xl p-6 text-white overflow-hidden
                  bg-gradient-to-br ${feature.color}
                  transform transition-all duration-500
                  ${index === activeFeature ? 'ring-4 ring-brand-200 shadow-2xl' : 'shadow-lg'}
                  ${hoveredCard === index ? 'shadow-2xl' : ''}
                `}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                  
                  {/* Plus Icon */}
                  <motion.div 
                    className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="h-4 w-4 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {index === activeFeature && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-auto"
                        >
                          <p className="text-white/90 text-sm mb-4 leading-relaxed">
                            {feature.description}
                          </p>
                          <ul className="space-y-2">
                            {feature.features.slice(0, 3).map((item, i) => (
                              <motion.li 
                                key={i}
                                className="flex items-center text-sm text-white/80"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {index !== activeFeature && (
                      <motion.div 
                        className="mt-auto"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                      >
                        <p className="text-white/90 text-sm leading-relaxed">
                          {feature.description.slice(0, 80)}...
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '2x', label: 'More engagement than any other platform' },
              { number: '4M+', label: 'Members worldwide' },
              { number: '190+', label: 'Countries supported' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-brand-600 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-ink-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
