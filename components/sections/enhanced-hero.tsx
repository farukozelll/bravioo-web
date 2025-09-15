'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Play, 
  Users, 
  Award, 
  BarChart3, 
  Zap, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  Heart,
  CheckCircle,
  Sparkles,
  Building
} from 'lucide-react';
import Image from 'next/image';

export function EnhancedHero() {
  const locale = useLocale();
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Users,
      title: locale === 'tr' ? 'Peer-to-Peer Takdir' : 'Peer-to-Peer Recognition',
      description: locale === 'tr' ? 'Çalışanlar birbirini takdir ediyor' : 'Employees recognize each other',
      color: 'from-brand-500 to-emerald-600'
    },
    {
      icon: Award,
      title: locale === 'tr' ? 'Global Ödüller' : 'Global Rewards',
      description: locale === 'tr' ? '190+ ülkede milyonlarca seçenek' : 'Millions of options in 190+ countries',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: locale === 'tr' ? 'AI Analitik' : 'AI Analytics',
      description: locale === 'tr' ? 'Akıllı raporlar ve öneriler' : 'Smart reports and recommendations',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: locale === 'tr' ? 'Mutlu Şirket' : 'Happy Companies',
      icon: Building
    },
    {
      number: '2M+',
      label: locale === 'tr' ? 'Aktif Kullanıcı' : 'Active Users',
      icon: Users
    },
    {
      number: '95%',
      label: locale === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction',
      icon: Heart
    },
    {
      number: '450%',
      label: locale === 'tr' ? 'Ortalama ROI' : 'Average ROI',
      icon: TrendingUp
    }
  ];

  const trustBadges = [
    {
      icon: Shield,
      text: 'ISO 27001',
      color: 'text-green-600'
    },
    {
      icon: Star,
      text: 'SOC 2 Type II',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      text: 'GDPR Compliant',
      color: 'text-purple-600'
    }
  ];

  const companyLogos = [
    'AKMERCAN', 'AGT', 'TÜRKSAT', 'Acıbadem', 'Karaca', 'Liv Hospital'
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient blobs */}
    
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-gold-300/20 to-transparent rounded-full blur-3xl"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-1/4 w-32 h-32 border border-brand-200/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-1/4 w-24 h-24 border border-emerald-200/30 rounded-lg"
        />

        {/* Particle effect simulation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-brand-400/40 rounded-full"
            style={{
              top: `${20 + (i * 4)}%`,
              left: `${10 + (i * 4)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500/10 to-emerald-500/10 border border-brand-200 rounded-full"
            >
              <Sparkles className="h-4 w-4 text-brand-600" />
              <span className="text-sm font-semibold text-brand-700">
                {locale === 'tr' 
                  ? '🎉 2024\'ün En İyi HR Tech Ürünü Seçildik!'
                  : '🎉 Winner of Best HR Tech Product 2024!'
                }
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 mb-6 font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {locale === 'tr' ? 'Çalışan Deneyimini' : 'Transform Employee'}
                <br />
                <span className="bg-gradient-to-r from-brand-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent animate-gradient">
                  {locale === 'tr' ? 'Dönüştürün' : 'Experience'}
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-ink-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {locale === 'tr'
                  ? 'Peer-to-peer takdir, global ödüller ve AI destekli analitiklerle çalışan motivasyonunu artırın. 500+ şirketin tercihi.'
                  : 'Boost employee motivation with peer-to-peer recognition, global rewards, and AI-powered analytics. Trusted by 500+ companies.'
                }
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                {locale === 'tr' ? 'Ücretsiz Demo Başlat' : 'Start Free Demo'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-ink-200 text-ink-700 hover:bg-ink-50 rounded-2xl px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {locale === 'tr' ? 'Videoyu İzle' : 'Watch Video'}
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${badge.color}`} />
                    <span className="text-sm font-medium text-ink-600">{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>

 
          </motion.div>

          {/* Right Visual Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Feature Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`relative h-96 md:h-[500px] rounded-3xl bg-gradient-to-br ${features[currentFeature].color} p-8 overflow-hidden shadow-2xl`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-32 h-32 border border-white/30 rounded-full"></div>
                    <div className="absolute top-20 right-12 w-24 h-24 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-12 left-16 w-40 h-40 border border-white/30 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                        {React.createElement(features[currentFeature].icon, {
                          className: "h-10 w-10 text-white"
                        })}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed">
                        {features[currentFeature].description}
                      </p>
                    </div>

                    {/* Play Button */}
                    <motion.button
                      className="self-center w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center group transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-6 w-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-16 right-8 w-12 h-12 bg-white/20 rounded-xl"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 15, 0],
                      rotate: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-20 right-16 w-8 h-8 bg-white/20 rounded-full"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Feature Navigation Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature 
                        ? 'bg-brand-500 w-8' 
                        : 'bg-brand-200 hover:bg-brand-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-sand-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ink-900 text-sm">
                    {locale === 'tr' ? 'Ahmet Yılmaz' : 'John Smith'}
                  </div>
                  <div className="text-xs text-ink-600">
                    {locale === 'tr' ? 'Mükemmel iş için takdir aldı!' : 'Recognized for excellent work!'}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-sand-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ink-900 text-sm">
                    {locale === 'tr' ? '+185% Motivasyon' : '+185% Motivation'}
                  </div>
                  <div className="text-xs text-ink-600">
                    {locale === 'tr' ? 'Bu ay' : 'This month'}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
