'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Building } from 'lucide-react';
import { LogoImage } from '@/components/ui/logo-image';
import brandsData from '@/data/brands.json';

interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
}

export function BrandsShowcase() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  const brands: Brand[] = brandsData;

  // Generate categories dynamically from data
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    
    brands.forEach(brand => {
      const current = categoryMap.get(brand.category) || 0;
      categoryMap.set(brand.category, current + 1);
    });

    const categoriesArray = [
      { name: 'Tümü', count: brands.length },
      ...Array.from(categoryMap.entries())
        .sort(([, a], [, b]) => b - a) // Sort by count, descending
        .slice(0, 12) // Take top 12 categories for better coverage
        .map(([name, count]) => ({ name, count }))
    ];

    return categoriesArray;
  }, [brands]);

  const filteredBrands = useMemo(() => {
    return activeCategory === 'Tümü' 
      ? brands 
      : brands.filter(b => b.category === activeCategory);
  }, [brands, activeCategory]);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Dünya markalarının tercih ettiği<br />
            <span className="text-emerald-600">E-ticaret Altyapısı</span>
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl border border-emerald-200 hover:border-emerald-300 font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Global Marka Deneyimlerimizi İncele</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${activeCategory === category.name
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }
              `}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredBrand(brand.id)}
              onHoverEnd={() => setHoveredBrand(null)}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-xl group-hover:-translate-y-2 overflow-hidden h-52">
                
                {/* Brand Logo - Enhanced with multiple format support and grayscale filter */}
                <div className="flex justify-center mb-4">
                  <LogoImage
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    name={brand.name}
                    size="xl"
                    grayscale={true}
                    className="group-hover:bg-emerald-50 bg-slate-50 rounded-xl transition-colors duration-300"
                  />
                </div>

                {/* Brand Name */}
                <h3 className="font-semibold text-slate-900 text-center mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {brand.name}
                </h3>

         

                {/* Primary Metric */}
              

                {/* Hover Card - Success Story */}
                <AnimatePresence>
                  {hoveredBrand === brand.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white rounded-2xl p-6 border border-emerald-200 shadow-2xl z-10"
                    >
                      <div className="h-full flex flex-col">
                        
                        {/* Brand Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <LogoImage
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            name={brand.name}
                            size="lg"
                            grayscale={false}
                            className="bg-emerald-50 rounded-xl flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-slate-900 text-sm truncate">{brand.name}</h4>
                            <p className="text-xs text-slate-500 truncate">{brand.category}</p>
                          </div>
                        </div>

                     


                        {/* Description */}
                        <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {brand.description}
                          </p>
                        </div>

                

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">+150%</div>
            <div className="text-sm text-slate-600">Ortalama Büyüme</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-sm text-slate-600">Global Marka</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">4.9/5</div>
            <div className="text-sm text-slate-600">Enterprise Puanı</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">25+</div>
            <div className="text-sm text-slate-600">Farklı Ülke</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Markanızı global standartlara taşıyın
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Dünya markalarının güvendiği Bravioo altyapısı ile siz de international e-ticaret deneyimi yaratın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Enterprise Demo Alın
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
            >
              Özel Fiyat Teklifi
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
