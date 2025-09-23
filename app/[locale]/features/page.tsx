  'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURES } from '@/data/features';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Megaphone, 
  Gift, 
  ClipboardCheck, 
  Speaker,
  MessageSquare,
  Users,
  Trophy,
  Building,
  BarChart3,
  Smartphone,
  Palette,
  Settings,
  ChevronDown,
  ChevronUp,
  Check,
  Zap
} from 'lucide-react';
import { useLocale } from 'next-intl';

// İkonlar için mapping
const featureIcons = {
  campaigns: Megaphone,
  giveaways: Gift,
  surveys: ClipboardCheck,
  announcements: Speaker,
  feedback: MessageSquare,
  'user-management': Users,
  recognition: Trophy,
  subsidiaries: Building,
  analytics: BarChart3,
  mobile: Smartphone,
  brands: Palette,
  personalization: Settings
};

export default function FeaturesOverviewPage() {
  const locale = useLocale();
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  const containerVariants = { 
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const toggleFeature = (featureSlug: string) => {
    setExpandedFeature(expandedFeature === featureSlug ? null : featureSlug);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 text-emerald-700 dark:text-emerald-300 px-8 py-4 rounded-full border border-emerald-200 dark:border-emerald-600 mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-lg">12 Güçlü Araç, Tek Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight"
            >
              Hayatınızı 
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block lg:inline"> Kolaylaştıran</span>
              <span className="block">12 Güçlü Araç</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Mobil ve web uygulamalarımızda <strong className="text-emerald-600">çalışan deneyimini</strong> geliştiren, 
              <strong className="text-blue-600"> iş süreçlerinizi</strong> optimize eden ve 
              <strong className="text-purple-600"> büyümenizi</strong> hızlandıran araçları keşfedin.
            </motion.p>

            {/* Feature Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
            >
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black text-emerald-600 mb-1">12</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Güçlü Araç</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black text-blue-600 mb-1">50K+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Mutlu Kullanıcı</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black text-purple-600 mb-1">99.9%</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Uptime</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black text-emerald-600 mb-1">24/7</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Destek</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-6 h-6" />
                Ücretsiz Deneyin
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-emerald-500 hover:text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                Demo İzle
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Platform <span className="text-emerald-600">Özellikleri</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Her biri özel olarak tasarlanmış, işinizi kolaylaştıran 12 güçlü araç
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-8">
              {FEATURES.map((feature, index) => {
                const IconComponent = featureIcons[feature.slug];
                const isExpanded = expandedFeature === feature.slug;
                
                return (
                  <motion.div key={feature.slug} variants={itemVariants}>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Feature Header - Always Visible */}
                      <div 
                        className="p-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                        onClick={() => toggleFeature(feature.slug)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            {/* Number Badge */}
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                              {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                            </div>

                            {/* Basic Info */}
                            <div className="flex-1">
                              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {feature.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>

                          {/* Expand/Collapse Button */}
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 ml-4"
                          >
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors duration-300">
                              <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="border-t border-gray-200 dark:border-gray-700"
                          >
                            <div className="p-8 space-y-8">
                              {/* Feature Sections */}
                              {feature.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="grid md:grid-cols-2 gap-8 items-center">
                                  {/* Text Content */}
                                  <div className={sectionIndex % 2 === 1 ? 'md:order-2' : ''}>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                      {section.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                      {section.body}
                                    </p>
                                    
                                    {/* Feature Items */}
                                    {section.items && (
                                      <div className="space-y-3">
                                        {section.items.map((item, itemIndex) => (
                                          <div key={itemIndex} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>

                                  {/* Image */}
                                  <div className={sectionIndex % 2 === 1 ? 'md:order-1' : ''}>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
                                      <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10"></div>
                                    </div>
                                  </div>
                                </div>
                              ))}

                              {/* Action Buttons */}
                              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                                  >
                                    <Zap className="w-5 h-5" />
                                    Bu Özelliği Dene
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                  >
                                    Daha Fazla Bilgi
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20 lg:mt-32"
          >
            <div className="relative bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mb-8"
                >
                  <Sparkles className="w-16 h-16 mx-auto mb-6 text-white/80" />
                  <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
                    Hayatınızı 
                    <span className="block">Kolaylaştırmaya</span>
                    <span className="block text-yellow-300">Hazır Mısınız?</span>
                  </h2>
                  <p className="text-white/90 mb-12 max-w-3xl mx-auto text-xl lg:text-2xl leading-relaxed">
                    <strong>14 gün boyunca</strong> tüm özelliklerimizi ücretsiz deneyin. 
                    Kurulum yapmadan, kredi kartı vermeden hemen başlayın!
                  </p>
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold mb-2">⚡</div>
                    <div className="text-lg font-semibold mb-1">Anında Kurulum</div>
                    <div className="text-white/80 text-sm">5 dakikada kullanmaya başlayın</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold mb-2">🎯</div>
                    <div className="text-lg font-semibold mb-1">12 Güçlü Araç</div>
                    <div className="text-white/80 text-sm">Tüm özellikler dahil</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold mb-2">🛡️</div>
                    <div className="text-lg font-semibold mb-1">Güvenli & Güvenilir</div>
                    <div className="text-white/80 text-sm">Enterprise seviye güvenlik</div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-3"
                  >
                    <Sparkles className="w-6 h-6" />
                    14 Gün Ücretsiz Başla
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    🎥 Demo İzle
                  </motion.button>
                </motion.div>

                {/* Small Print */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="text-white/60 text-sm mt-8"
                >
                  ✨ Kredi kartı gerektirmez • ⚡ Anında aktivasyon • 🔒 %100 güvenli
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
