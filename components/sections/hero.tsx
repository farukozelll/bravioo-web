'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { analytics } from '@/components/analytics';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, BarChart3, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const handleCTAClick = (ctaText: string) => {
    analytics.ctaClick(ctaText, 'hero');
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Companies' },
    { icon: Award, value: '1M+', label: 'Recognitions' },
    { icon: TrendingUp, value: '40%', label: 'Engagement Boost' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-brand-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-brand-900/20 transition-colors duration-300">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-radial from-brand-300/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-radial from-gold-300/40 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-brand-200/30 rounded-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-br from-gold-200/20 to-brand-200/20 rounded-2xl backdrop-blur-sm"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content - Asymmetric Layout */}
          <div className="space-y-12">
            {/* Trust Badge - Floating */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 border border-brand-200/50 shadow-lg"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink-700 dark:text-gray-300">4.9/5 • 127+ reviews</span>
            </motion.div>

            {/* Kinetic Typography */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-light leading-[0.9] tracking-tight"
              >
                {/* Animated Letters */}
                <motion.span 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-ink-900 dark:text-gray-100"
                >
                  Bağlantı
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block bg-gradient-to-r from-brand-600 via-brand-500 to-gold-500 bg-clip-text text-transparent"
                >
                  Kur.
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="block text-ink-900 dark:text-gray-100"
                >
                  Büyü.
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="block bg-gradient-to-r from-gold-500 via-brand-500 to-brand-600 bg-clip-text text-transparent"
                >
                  Başar.
                </motion.span>
              </motion.h1>

              {/* Subtitle with elegant spacing */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-xl lg:text-2xl text-ink-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl"
              >
                {locale === 'tr' 
                  ? 'İş yerinizdeki her başarıyı kutlayın, takdir edin, ödüllendirin.'
                  : 'Celebrate, appreciate, and reward every success in your workplace.'
                }
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="xl"
                className="group bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-2xl hover:shadow-brand-500/25 transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-semibold"
                onClick={() => handleCTAClick('Start Journey')}
              >
                <span className="mr-3">
                  {locale === 'tr' ? 'Yolculuğa Başla' : 'Start Journey'}
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="group border-2 border-ink-200 hover:border-brand-300 rounded-2xl px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm"
                onClick={() => handleCTAClick('Watch Story')}
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                {locale === 'tr' ? 'Hikayeyi İzle' : 'Watch Story'}
              </Button>
            </motion.div>

            {/* Stats - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="grid grid-cols-3 gap-8 pt-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-100 to-gold-100 rounded-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-brand-600" />
                    </div>
                    <div className="text-3xl font-bold text-ink-900 font-display mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-ink-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Visual - 3D Floating Cards */}
          <div className="relative lg:flex items-center justify-center hidden">
            {/* Main Recognition Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              className="relative z-10 bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-sm"
              style={{ 
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900">Recognition Feed</h3>
                  <p className="text-sm text-ink-500">Live celebrations</p>
                </div>
              </div>

              {/* Recognition Items */}
              <div className="space-y-4">
                {[
                  { name: 'Sarah Chen', achievement: 'Exceeded Q4 targets', time: '2m ago' },
                  { name: 'Marcus Rodriguez', achievement: 'Client satisfaction hero', time: '5m ago' },
                  { name: 'Ayşe Kaya', achievement: 'Innovation champion', time: '12m ago' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.2 }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-brand-50 to-gold-50 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-gold-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-ink-900 text-sm">{item.name}</p>
                      <p className="text-xs text-ink-600">{item.achievement}</p>
                    </div>
                    <span className="text-xs text-ink-400">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Analytics Card - Floating */}
            <motion.div
              initial={{ opacity: 0, x: 150, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                rotateX: 10
              }}
              className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 w-64"
              style={{ 
                transform: 'perspective(1000px) rotateX(-10deg) rotateY(10deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-brand-600" />
                <h4 className="font-semibold text-ink-900">Engagement Boost</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-ink-600">This Month</span>
                  <span className="font-bold text-brand-600">+47%</span>
                </div>
                <div className="w-full bg-sand-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1.5, delay: 2 }}
                    className="bg-gradient-to-r from-brand-500 to-gold-500 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Rewards Card - Floating */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                rotateX: -5
              }}
              className="absolute -bottom-12 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20 w-48"
              style={{ 
                transform: 'perspective(1000px) rotateX(10deg) rotateY(-15deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="text-center">
                <Gift className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                <p className="font-semibold text-ink-900 text-sm">Global Rewards</p>
                <p className="text-xs text-ink-600">50+ countries</p>
                <div className="flex justify-center gap-1 mt-2">
                  {['🎁', '🏆', '🎊', '⭐'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: 2.5 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                      className="text-lg"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
