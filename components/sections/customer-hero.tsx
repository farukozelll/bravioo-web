'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Play, ArrowRight, Star } from 'lucide-react';

interface CustomerStory {
  id: string;
  brand: string;
  logo: string;
  title: string;
  description: string;
  metrics: string;
  image: string;
  category: string;
  videoUrl?: string;
  testimonial: string;
  author: string;
  position: string;
}

export function CustomerHero() {
  const locale = useLocale();
  const t = useTranslations();
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);

  const customerStories: CustomerStory[] = [
    {
      id: 'proteinocean',
      brand: 'ProteinOcean',
      logo: '/images/brands/proteinocean.png',
      title: 'İkas\'ın Hızlı Sayesinde Dönüşüm Oranlarını %10 Artırdı',
      description: 'Protein Ocean, İkas e-ticaret altyapısı ile satış süreçlerini optimize etti ve müşteri deneyimini geliştirildi.',
      metrics: '%10 Dönüşüm Artışı',
      image: '/images/cases/proteinocean-hero.jpg',
      category: 'Gıda Ürünleri',
      videoUrl: '/videos/proteinocean-success.mp4',
      testimonial: 'İkas ile e-ticaret süreçlerimiz çok daha hızlı ve etkili hale geldi.',
      author: 'Ahmet Kaya',
      position: 'E-ticaret Müdürü'
    },
    {
      id: 'wunder',
      brand: 'Wunder',
      logo: '/images/brands/wunder.png', 
      title: 'Yazılım Bilgisi Gerekmeden Profesyonel Site Kurdu',
      description: 'Wunder markası, teknik bilgi gerektirmeden profesyonel e-ticaret sitesi kurarak satışlarını katladı.',
      metrics: '%250 Satış Artışı',
      image: '/images/cases/wunder-hero.jpg',
      category: 'Ayakkabı',
      videoUrl: '/videos/wunder-success.mp4',
      testimonial: 'Hiç kod yazmadan mükemmel bir e-ticaret sitesi oluşturduk.',
      author: 'Elif Demir',
      position: 'Kurucu'
    },
    {
      id: 'miniso',
      brand: 'Miniso',
      logo: '/images/brands/miniso.png',
      title: 'Çoklu Kanal Yönetimi ile Verimlilik Arttı',
      description: 'Miniso, İkas\'ın gelişmiş özelliklerini kullanarak çoklu kanal satışlarını entegre etti.',
      metrics: '%35 Verimlilik Artışı',
      image: '/images/cases/miniso-hero.jpg',
      category: 'Kozmetik',
      videoUrl: '/videos/miniso-success.mp4',
      testimonial: 'Tüm satış kanallarımızı tek yerden yönetmek harika.',
      author: 'Can Özkan',
      position: 'Operasyon Müdürü'
    },
    {
      id: 'online-ciftci',
      brand: 'Online Çiftçi',
      logo: '/images/brands/online-ciftci.png',
      title: 'Tarım Ürünlerinde Dijital Dönüşüm Başarısı',
      description: 'Online Çiftçi, tarım ürünlerini dijital ortamda satmaya İkas ile başladı ve hızla büyüdü.',
      metrics: '%40 Büyüme',
      image: '/images/cases/online-ciftci-hero.jpg',
      category: 'Gıda Ürünleri',
      videoUrl: '/videos/online-ciftci-success.mp4',
      testimonial: 'Geleneksel tarımdan modern e-ticarete geçiş çok kolay oldu.',
      author: 'Mehmet Yılmaz',
      position: 'Genel Müdür'
    },
    {
      id: 'mugo',
      brand: 'Mugo',
      logo: '/images/brands/mugo.png',
      title: 'Yıllık Ciroda %397 Büyüme Başarısı',
      description: 'Mugo, İkas e-ticaret çözümleri ile olağanüstü büyüme performansı gösterdi.',
      metrics: '%397 Ciro Artışı',
      image: '/images/cases/mugo-hero.jpg',
      category: 'Tekstil & Giyim',
      videoUrl: '/videos/mugo-success.mp4',
      testimonial: 'İkas sayesinde hayallerimizden daha büyük başarıya ulaştık.',
      author: 'Ayşe Kılıç',
      position: 'CEO'
    },
    {
      id: 'sm-bebek',
      brand: 'SM Bebek',
      logo: '/images/brands/sm-bebek.png',
      title: 'Anne Bebek Kategorisinde Güvenli Büyüme',
      description: 'SM Bebek, İkas\'ın güvenli altyapısı ile hassas müşteri segmentinde büyüdü.',
      metrics: '%40 Satış Artışı',
      image: '/images/cases/sm-bebek-hero.jpg',
      category: 'Anne & Bebek Ürünleri',
      videoUrl: '/videos/sm-bebek-success.mp4',
      testimonial: 'Güvenilir altyapı sayesinde müşterilerimizin güvenini kazandık.',
      author: 'Fatma Arslan',
      position: 'Pazarlama Müdürü'
    }
  ];

  // Create two columns for the scrolling animation
  const leftColumn = customerStories.filter((_, index) => index % 2 === 0);
  const rightColumn = customerStories.filter((_, index) => index % 2 === 1);

  const currentStory = hoveredStory ? customerStories.find(s => s.id === hoveredStory) : null;

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8 lg:sticky lg:top-8"
          >
            {/* Stats Row */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Image src="/images/icons/google.png" alt="Google" width={24} height={24} />
                <span className="font-semibold text-slate-900">4,9 / 5</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/icons/sikayetvar.png" alt="Şikayetvar" width={24} height={24} />
                <span className="font-semibold text-slate-900">96 / 100</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/icons/g2.png" alt="G2" width={24} height={24} />
                <span className="font-semibold text-slate-900">4,8 / 5</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Başarılı Markaların<br />
              <span className="text-emerald-600">E-Ticaret Hikayesi</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              İkas'ın güçlü e-ticaret altyapısı ile{' '}
              <span className="font-semibold text-emerald-600">10.000+</span> işletme 
              büyüme hedeflerine ulaştı. Onların başarı hikayelerini keşfedin.
            </p>

            {/* Current Story Details */}
            <AnimatePresence mode="wait">
              {currentStory ? (
                <motion.div
                  key={currentStory.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-lg"
                >
                  {/* Brand Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-xl">
                        {currentStory.brand.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{currentStory.brand}</h3>
                      <p className="text-emerald-600 font-medium">{currentStory.category}</p>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {currentStory.metrics}
                    </div>
                    <p className="text-slate-600">{currentStory.title}</p>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-emerald-500 pl-6 mb-6">
                    <p className="text-slate-700 italic mb-3">"{currentStory.testimonial}"</p>
                    <footer className="text-sm text-slate-500">
                      <strong>{currentStory.author}</strong>, {currentStory.position}
                    </footer>
                  </blockquote>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Hikayeyi İzle</span>
                    <Play className="w-5 h-5" fill="currentColor" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Başarı Hikayelerini Keşfedin
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Sağdaki kartların üzerine gelerek her markanın detaylı başarı hikayesini öğrenin.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span>Tümünü Gör</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Scrolling Stories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[700px] overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              
              {/* Left Column - Scrolling Up */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="space-y-4"
                  style={{ height: '200%' }}
                >
                  {[...leftColumn, ...leftColumn].map((story, index) => (
                    <motion.div
                      key={`left-${story.id}-${index}`}
                      onHoverStart={() => setHoveredStory(story.id)}
                      onHoverEnd={() => setHoveredStory(null)}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="group relative cursor-pointer"
                    >
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl">
                        
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-blue-600/30"></div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                          
                          {/* Top Section */}
                          <div className="flex items-center justify-between">
                            {/* Brand Initial */}
                            <div className="w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {story.brand.charAt(0)}
                              </span>
                            </div>
                            
                            {/* Play Button */}
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300"
                            >
                              <Play className="w-5 h-5 text-white" fill="currentColor" />
                            </motion.div>
                          </div>

                          {/* Bottom Section */}
                          <div>
                            {/* Metric */}
                            <div className="text-2xl font-bold mb-2">{story.metrics}</div>
                            
                            {/* Brand Name */}
                            <div className="text-white/90 font-medium">{story.brand}</div>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-transparent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Down */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={{ y: ['-50%', '0%'] }}
                  transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="space-y-4"
                  style={{ height: '200%' }}
                >
                  {[...rightColumn, ...rightColumn].map((story, index) => (
                    <motion.div
                      key={`right-${story.id}-${index}`}
                      onHoverStart={() => setHoveredStory(story.id)}
                      onHoverEnd={() => setHoveredStory(null)}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="group relative cursor-pointer"
                    >
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl">
                        
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"></div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                          
                          {/* Top Section */}
                          <div className="flex items-center justify-between">
                            {/* Brand Initial */}
                            <div className="w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {story.brand.charAt(0)}
                              </span>
                            </div>
                            
                            {/* Play Button */}
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300"
                            >
                              <Play className="w-5 h-5 text-white" fill="currentColor" />
                            </motion.div>
                          </div>

                          {/* Bottom Section */}
                          <div>
                            {/* Metric */}
                            <div className="text-2xl font-bold mb-2">{story.metrics}</div>
                            
                            {/* Brand Name */}
                            <div className="text-white/90 font-medium">{story.brand}</div>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </div>

            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
