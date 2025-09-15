'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
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
  
  // Create infinite scroll data with varying heights
  const scrollData = useMemo(() => {
    const heights = [200, 160, 240, 180, 220, 190]; // Varying card heights
    const infiniteCompanies = Array.from({ length: 20 }, (_, i) => ({
      ...companies[i % companies.length],
      uniqueId: `${companies[i % companies.length].id}-${i}`,
      height: heights[i % heights.length],
    }));
    
    // Split into two columns
    const leftColumn = infiniteCompanies.filter((_, index) => index % 2 === 0);
    const rightColumn = infiniteCompanies.filter((_, index) => index % 2 === 1);
    
    return { leftColumn, rightColumn };
  }, [companies]);

  const currentCompany = hoveredCompany ? companies.find(c => c.id === hoveredCompany) : null;

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
                        <img 
                          src={currentCompany.logo} 
                          alt={`${currentCompany.name} logo`}
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

          {/* Right Side - Infinite Scrolling Stories */}
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
                  animate={isPaused ? {} : { y: ['0%', '-50%'] }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="space-y-4"
                >
                  {[...scrollData.leftColumn, ...scrollData.leftColumn].map((company, index) => (
                    <CompanyCard
                      key={`left-${company.uniqueId}-${index}`}
                      company={company}
                      height={company.height}
                      onHover={() => setHoveredCompany(company.id)}
                      onLeave={() => setHoveredCompany(null)}
                      onClick={() => setIsPaused(!isPaused)}
                      gradientFrom="emerald-600/20"
                      gradientTo="blue-600/20"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Down */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={isPaused ? {} : { y: ['-50%', '0%'] }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="space-y-4"
                >
                  {[...scrollData.rightColumn, ...scrollData.rightColumn].map((company, index) => (
                    <CompanyCard
                      key={`right-${company.uniqueId}-${index}`}
                      company={company}
                      height={company.height}
                      onHover={() => setHoveredCompany(company.id)}
                      onLeave={() => setHoveredCompany(null)}
                      onClick={() => setIsPaused(!isPaused)}
                      gradientFrom="purple-600/20"
                      gradientTo="pink-600/20"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Separate component for better performance and maintainability
interface CompanyCardProps {
  company: Company & { height: number };
  height: number;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  gradientFrom: string;
  gradientTo: string;
}

function CompanyCard({ company, height, onHover, onLeave, onClick, gradientFrom, gradientTo }: CompanyCardProps) {
  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onClick={onClick}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className="group relative cursor-pointer"
      style={{ height: `${height}px` }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg">
        
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}></div>

        {/* Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
          
          {/* Top Section */}
          <div className="flex items-start justify-between">
            {/* Brand Logo */}
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <span className="text-slate-800 font-bold text-lg">
                  {company.name.charAt(0)}
                </span>
              )}
            </div>
            
            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
            >
              <Play className="w-4 h-4 text-white" fill="currentColor" />
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Metric */}
            <div className="text-xl font-bold mb-2">{company.metrics.primary}</div>
            
            {/* Brand Name & Category */}
            <div className="text-white/90 font-medium text-sm">{company.name}</div>
            <div className="text-white/70 text-xs">{company.category}</div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent"
        />
      </div>
    </motion.div>
  );
}