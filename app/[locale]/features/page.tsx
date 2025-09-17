'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '@/data/features';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturesOverviewPage() {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-600 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">12 Güçlü Modül</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight"
            >
              Platform 
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent"> Özellikleri</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Bravioo platformunun öne çıkan modüllerini keşfedin. Her modül, etkileyici hikâyeler ve güçlü entegrasyonlarla büyümenizi hızlandırmak için tasarlandı.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {FEATURES.map((feature, index) => (
              <motion.div key={feature.slug} variants={itemVariants}>
                <Link 
                  href={`/features/${feature.slug}`}
                  className="group block"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Feature Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 group-hover:from-emerald-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl text-white font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Özellik Görüntüsü
                          </div>
                        </div>
                      </div>
                      
                      {/* Overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {feature.sections.length} bölüm
                        </span>
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                          <span className="text-sm font-semibold">Keşfet</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ padding: '2px' }}>
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 lg:mt-24"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Tüm Özellikleri Canlı Ortamda Test Edin
              </h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                14 gün ücretsiz deneme ile tüm modülleri keşfedin ve ekibinizin ihtiyaçlarına en uygun çözümü bulun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Ücretsiz Demo Başlat
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  Fiyatları İncele
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
