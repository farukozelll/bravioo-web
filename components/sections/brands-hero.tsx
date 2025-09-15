'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import brandsData from '@/data/brands.json';

interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
}

export function BrandsHero() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const brands: Brand[] = brandsData;
  
  // Create infinite scroll data with varying heights
  const scrollData = useMemo(() => {
    const heights = [220, 180, 260, 200, 240, 190, 210]; // Varying card heights for brands
    const infiniteBrands = Array.from({ length: 24 }, (_, i) => ({
      ...brands[i % brands.length],
      uniqueId: `${brands[i % brands.length].id}-${i}`,
      height: heights[i % heights.length],
    }));
    
    // Split into two columns
    const leftColumn = infiniteBrands.filter((_, index) => index % 2 === 0);
    const rightColumn = infiniteBrands.filter((_, index) => index % 2 === 1);
    
    return { leftColumn, rightColumn };
  }, [brands]);

  const currentBrand = hoveredBrand ? brands.find(b => b.id === hoveredBrand) : null;

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-24 overflow-hidden text-white">
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
            {/* Global Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Globe className="w-4 h-4" />
              <span>Global Markalar</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Dünya Devlerinin<br />
              <span className="text-emerald-400">Teknoloji Ortağı</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Fortune 500 şirketlerinden startup&apos;lara kadar{' '}
              <span className="font-semibold text-emerald-400">50+</span> global marka 
              Bravioo&apos;ın enterprise-grade altyapısına güveniyor.
            </p>

            {/* Current Brand Details */}
            <AnimatePresence mode="wait">
              {currentBrand ? (
                <motion.div
                  key={currentBrand.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
                >
                  {/* Brand Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                      {currentBrand.logo ? (
                        <img 
                          src={currentBrand.logo} 
                          alt={`${currentBrand.name} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      ) : (
                        <span className="text-slate-800 font-bold text-2xl">
                          {currentBrand.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{currentBrand.name}</h3>
                      <p className="text-emerald-400 font-medium">{currentBrand.category}</p>
                    </div>
                  </div>

              

                  {/* Description */}
                  <div className="bg-slate-700/50 p-4 rounded-xl mb-6">
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {currentBrand.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Marka Detayları</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Enterprise Success Stories
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Sağdaki kartların üzerine gelerek global markaların Bravioo ile elde ettiği başarıları keşfedin.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span>Tüm Case Study&apos;ler</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Infinite Scrolling Brands */}
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
                    duration: 35, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="space-y-4"
                >
                  {[...scrollData.leftColumn, ...scrollData.leftColumn].map((brand, index) => (
                    <BrandCard
                      key={`left-${brand.uniqueId}-${index}`}
                      brand={brand}
                      height={brand.height}
                      onHover={() => setHoveredBrand(brand.id)}
                      onLeave={() => setHoveredBrand(null)}
                      onClick={() => setIsPaused(!isPaused)}
                      gradientFrom="emerald-400/20"
                      gradientTo="blue-500/20"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Down */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={isPaused ? {} : { y: ['-50%', '0%'] }}
                  transition={{ 
                    duration: 35, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="space-y-4"
                >
                  {[...scrollData.rightColumn, ...scrollData.rightColumn].map((brand, index) => (
                    <BrandCard
                      key={`right-${brand.uniqueId}-${index}`}
                      brand={brand}
                      height={brand.height}
                      onHover={() => setHoveredBrand(brand.id)}
                      onLeave={() => setHoveredBrand(null)}
                      onClick={() => setIsPaused(!isPaused)}
                      gradientFrom="purple-400/20"
                      gradientTo="pink-500/20"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Separate component for better performance and maintainability
interface BrandCardProps {
  brand: Brand & { height: number };
  height: number;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  gradientFrom: string;
  gradientTo: string;
}

function BrandCard({ brand, height, onHover, onLeave, onClick, gradientFrom, gradientTo }: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => {
        onHover();
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        onLeave();
        setIsHovered(false);
      }}
      onClick={onClick}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className="group relative cursor-pointer"
      style={{ height: `${height}px` }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg border border-slate-700/50">
        
        {/* Background Image */}
        {brand.logo && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url(${brand.logo})`,
              filter: 'blur(20px)',
            }}
          />
        )}
        
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}></div>

        {/* Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
          
          {/* Top Section */}
          <div className="flex items-start justify-between">
            {/* Brand Logo - Hidden by default, shown on hover */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 bg-white/95 rounded-xl flex items-center justify-center overflow-hidden shadow-lg backdrop-blur-sm"
            >
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <span className="text-slate-800 font-bold text-xl">
                  {brand.name.charAt(0)}
                </span>
              )}
            </motion.div>
            
            {/* Enterprise Badge */}
            <div className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm">
              {brand.category}
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Brand Name & Category */}
            <div className="text-white font-bold text-sm mb-1">{brand.name}</div>
            <div className="text-white/80 text-xs line-clamp-2">{brand.description}</div>
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
