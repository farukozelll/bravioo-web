'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import companiesData from '@/data/companies.json';

interface Company {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  metrics: {
    primary: string;
    secondary: string;
  };
  details: {
    challenge: string;
    solution: string;
    results: string[];
  };
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export function CustomerHero() {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const companies: Company[] = companiesData;
  
  // Create masonry-style infinite scroll data with varying heights and background images
  const scrollData = useMemo(() => {
    const heights = [200, 160, 240, 180, 220, 190, 210, 170, 230, 195]; // More varied heights for masonry effect
    const cardImages = [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=300&fit=crop'
    ];
    
    const infiniteCompanies = Array.from({ length: 24 }, (_, i) => ({
      ...companies[i % companies.length],
      uniqueId: `${companies[i % companies.length].id}-${i}`,
      height: heights[i % heights.length],
      cardImage: cardImages[i % cardImages.length], // Add unique background image
    }));
    
    // Create masonry-style columns with balanced heights
    const leftColumn: typeof infiniteCompanies = [];
    const rightColumn: typeof infiniteCompanies = [];
    let leftHeight = 0;
    let rightHeight = 0;
    
    infiniteCompanies.forEach(company => {
      if (leftHeight <= rightHeight) {
        leftColumn.push(company);
        leftHeight += company.height;
      } else {
        rightColumn.push(company);
        rightHeight += company.height;
      }
    });
    
    return { leftColumn, rightColumn };
  }, [companies]);

  const currentCompany = hoveredCompany ? companies.find(c => c.id === hoveredCompany) : null;

  // Function to get background image based on category
  const getCategoryBackground = (category: string): string => {
    const backgrounds = {
      'Holding': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'İnşaat': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'Enerji': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'Gıda': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'Teknoloji': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'Üretim': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'Tarım': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'Yayıncılık': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      'Turizm': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      'Hizmet': 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
      'Tekstil & Giyim': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'Danışmanlık': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'Medya': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'Sağlık': 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
      'Lojistik & Ulaşım': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'default': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
    return backgrounds[category as keyof typeof backgrounds] || backgrounds.default;
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-24 overflow-hidden">
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
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xs font-bold">G</span>
                </div>
                <span className="font-semibold text-slate-900">4,9 / 5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">Ş</span>
                </div>
                <span className="font-semibold text-slate-900">96 / 100</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs font-bold">G2</span>
                </div>
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
              Bravioo&apos;ın güçlü e-ticaret altyapısı ile{' '}
              <span className="font-semibold text-emerald-600">10.000+</span> işletme 
              büyüme hedeflerine ulaştı. Onların başarı hikayelerini keşfedin.
            </p>

            {/* Current Company Details */}
            <AnimatePresence mode="wait">
              {currentCompany ? (
                <motion.div
                  key={currentCompany.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
                >
                  {/* Brand Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden">
                      {currentCompany.logo ? (
                        <Image 
                          src={currentCompany.logo} 
                          alt={`${currentCompany.name} logo`}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-slate-600 font-bold text-xl">
                          {currentCompany.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{currentCompany.name}</h3>
                      <p className="text-emerald-600 font-medium">{currentCompany.category}</p>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {currentCompany.metrics.primary}
                    </div>
                    <p className="text-slate-600">{currentCompany.description}</p>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-emerald-500 pl-6 mb-6">
                    <p className="text-slate-700 italic mb-3">&ldquo;{currentCompany.testimonial.text}&rdquo;</p>
                    <footer className="text-sm text-slate-500">
                      <strong>{currentCompany.testimonial.author}</strong>, {currentCompany.testimonial.position}
                    </footer>
                  </blockquote>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Detayları Gör</span>
                    <ArrowRight className="w-5 h-5" />
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span>Tümünü Gör</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Enhanced Masonry Infinite Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[700px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              
              {/* Left Column - Scrolling Up with Enhanced Animation */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={isPaused ? {} : { y: ['0%', '-50%'] }}
                  transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: 'linear',
                    type: 'tween'
                  }}
                  className="space-y-4"
                  style={{ 
                    animationPlayState: isPaused ? 'paused' : 'running' 
                  }}
                >
                  {[...scrollData.leftColumn, ...scrollData.leftColumn, ...scrollData.leftColumn].map((company, index) => (
                    <CompanyCard
                      key={`left-${company.uniqueId}-${index}`}
                      company={company}
                      height={company.height}
                      onHover={() => setHoveredCompany(company.id)}
                      onLeave={() => setHoveredCompany(null)}
                      onClick={() => setIsPaused(!isPaused)}
                      backgroundGradient={getCategoryBackground(company.category)}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Down with Enhanced Animation */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={isPaused ? {} : { y: ['-50%', '0%'] }}
                  transition={{ 
                    duration: 28, 
                    repeat: Infinity, 
                    ease: 'linear',
                    type: 'tween'
                  }}
                  className="space-y-4"
                  style={{ 
                    animationPlayState: isPaused ? 'paused' : 'running' 
                  }}
                >
                  {[...scrollData.rightColumn, ...scrollData.rightColumn, ...scrollData.rightColumn].map((company, index) => (
                    <CompanyCard
                      key={`right-${company.uniqueId}-${index}`}
                      company={company}
                      height={company.height}
                      onHover={() => setHoveredCompany(company.id)}
                      onLeave={() => setHoveredCompany(null)}
                      onClick={() => setIsPaused(!isPaused)}
                      backgroundGradient={getCategoryBackground(company.category)}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Enhanced Gradient Overlays for Better Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* Pause Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isPaused ? 1 : 0, 
                scale: isPaused ? 1 : 0.8 
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium z-20"
            >
              Duraklatıldı
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Enhanced CompanyCard with background images and overlay effects
interface CompanyCardProps {
  company: Company & { height: number; cardImage: string };
  height: number;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  backgroundGradient: string;
}

function CompanyCard({ company, height, onHover, onLeave, onClick, backgroundGradient }: CompanyCardProps) {
  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -8 }}
      className="group relative cursor-pointer"
      style={{ height: `${height}px` }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image 
            src={company.cardImage} 
            alt={`${company.name} background`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay for Category-based Theming */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{ background: backgroundGradient }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
          
          {/* Top Section */}
          <div className="flex items-start justify-between">
            {/* Brand Logo with Enhanced Styling */}
            <motion.div 
              className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden shadow-lg border border-white/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {company.logo ? (
                <Image 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <span className="text-slate-800 font-bold text-lg">
                  {company.name.charAt(0)}
                </span>
              )}
            </motion.div>
            
            {/* Success Badge */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="w-8 h-8 bg-emerald-500/90 rounded-full backdrop-blur-sm flex items-center justify-center shadow-lg border border-emerald-300/30"
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-white text-xs font-bold">✓</span>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ y: 10, opacity: 0.8 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Metric with Enhanced Typography */}
            <div className="text-xl font-bold mb-3 drop-shadow-lg text-white">
              {company.metrics.primary}
            </div>
            
            {/* Brand Name & Category */}
            <div className="text-white/95 font-semibold text-sm mb-1 drop-shadow-md">
              {company.name}
            </div>
            <div className="text-white/80 text-xs font-medium">
              {company.category}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Hover Overlay with "Read More" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        >
          {/* "Read More" Link that appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm font-medium">
                  Devamını Oku
                </span>
                <motion.svg 
                  className="w-4 h-4 text-white/90"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}