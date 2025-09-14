'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star,
  TrendingUp,
  Users,
  Award,
  Play
} from 'lucide-react';
import Image from 'next/image';

const customerStories = [
  {
    id: 'akmercan',
    company: 'AKMERCAN',
    logo: '/brands/akmercan.svg',
    industry: 'Technology & Team',
    stats: {
      engagement: '185%',
      growth: '₺2.5M',
      roi: '4X'
    },
    quote: '"Teknoloji ve ekip arasında, Bravioo müşteri odaklı organizasyonlar için en iyi sınıf çözümler sunmaya devam ediyor. 8 yıldır Bravioo müşterisi olarak, önümüzdeki 8 yıla da çok büyük bir heyecanla bakıyorum!"',
    author: 'Ahmet Yılmaz',
    position: 'Ürün Müdürü, Müşteri Deneyimi, Müşteri Sesi ve Konuşma Zekası Platformları',
    avatar: '/avatars/ahmet-yilmaz.jpg',
    background: 'from-brand-500 to-emerald-600',
    metrics: [
      { label: 'Çalışan memnuniyetinde artış üç yıl sonra', value: '185%' },
      { label: 'Kişiselleştirmeden kaynaklanan büyüme', value: '₺2.5M' },
      { label: 'Yatırılan her ₺1 için ROI', value: '4X' }
    ]
  },
  {
    id: 'agt',
    company: 'AGT',
    logo: '/brands/agt.svg',
    industry: 'Automotive',
    stats: {
      efficiency: '₺850K',
      consolidation: '₺1.2M',
      revenue: '₺750K'
    },
    quote: '"AGT olarak, Bravioo ile çalışan deneyimimizi dönüştürdük. Sistem sayesinde ekip motivasyonu %300 arttı ve şirket kültürümüz güçlendi."',
    author: 'Mehmet Özkan',
    position: 'İnsan Kaynakları Direktörü',
    avatar: '/avatars/mehmet-ozkan.jpg',
    background: 'from-blue-500 to-indigo-600',
    metrics: [
      { label: 'Verimlilik kazançları, 17 FTE\'ye eşdeğer', value: '₺850K' },
      { label: 'Teknoloji konsolidasyonu ile tasarruf', value: '₺1.2M' },
      { label: 'Daha akıcı web deneyimlerinden gelir artışı', value: '₺750K' }
    ]
  },
  {
    id: 'turksat',
    company: 'TÜRKSAT',
    logo: '/brands/turksat.svg',
    industry: 'Telecommunications',
    stats: {
      satisfaction: '92%',
      retention: '₺2.1M',
      performance: '5X'
    },
    quote: '"TÜRKSAT olarak, Bravioo\'nun çalışan tanıma sistemini kullanarak ekip performansımızı önemli ölçüde artırdık. Sonuçlardan çok memnunuz."',
    author: 'Ayşe Demir',
    position: 'Operasyon Müdürü',
    avatar: '/avatars/ayse-demir.jpg',
    background: 'from-purple-500 to-pink-600',
    metrics: [
      { label: 'Genel çalışan memnuniyeti', value: '92%' },
      { label: 'Çalışan bağlılığından tasarruf', value: '₺2.1M' },
      { label: 'Performans artışı', value: '5X' }
    ]
  }
];

const brandLogos = [
  { name: 'Albayrak', logo: '/brands/albayrak.svg' },
  { name: 'Sanko', logo: '/brands/sanko.svg' },
  { name: 'Türksat', logo: '/brands/turksat.svg' },
  { name: 'Liv Hospital', logo: '/brands/liv-hospital.svg' },
  { name: 'Akmercan', logo: '/brands/akmercan.svg' },
  { name: 'Akgün Group', logo: '/brands/akgun-group.svg' }
];

export function CustomerStoriesSection() {
  const t = useTranslations('customers');
  const [activeStory, setActiveStory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % customerStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % customerStories.length);
    setAutoPlay(false);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + customerStories.length) % customerStories.length);
    setAutoPlay(false);
  };

  const currentStory = customerStories[activeStory];

  return (
    <section className="relative py-24 bg-gradient-to-br from-ink-900 to-ink-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-500/20 to-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
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
            className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-semibold mb-4 border border-brand-500/30"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Customer Results
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            Recognition that{' '}
            <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
              shapes performance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our customers see up to 5x improvement on key business drivers like engagement, productivity, and retention.
          </p>
        </motion.div>

        {/* Main Story Display */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Story Content */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-ink-900">
                        {currentStory.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {currentStory.company}
                      </h3>
                      <p className="text-gray-400">{currentStory.industry}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 h-8 w-8 text-brand-400 opacity-50" />
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-100 pl-8">
                      {currentStory.quote}
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {currentStory.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{currentStory.author}</div>
                      <div className="text-sm text-gray-400">{currentStory.position}</div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentStory.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-center p-4 bg-white/5 rounded-2xl border border-white/10"
                    >
                      <div className="text-3xl font-bold text-brand-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <motion.div 
                  className={`relative h-96 rounded-3xl bg-gradient-to-br ${currentStory.background} p-8 overflow-hidden`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Company Logo */}
                  <div className="absolute top-8 left-8 w-24 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {currentStory.company}
                    </span>
                  </div>

                  {/* Play Button */}
                  <motion.button
                    className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-6 w-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </motion.button>

                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button
            onClick={prevStory}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2">
            {customerStories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveStory(index);
                  setAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeStory 
                    ? 'bg-brand-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStory}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Brand Logos */}
        <motion.div 
          className="border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center text-gray-400 mb-8">
            En iyi markalar bunu kişiselleştiriyor.{' '}
            <span className="text-brand-400 hover:text-brand-300 cursor-pointer">
              Bunu nasıl yaptıklarını görün →
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-white/60 font-semibold text-lg">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
