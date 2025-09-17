'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Star, Quote, ChevronLeft, ChevronRight, Building, Play, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    nameEn: 'John Smith',
    position: 'İnsan Kaynakları Direktörü',
    positionEn: 'HR Director',
    company: 'Acıbadem Hastaneleri',
    companyEn: 'Acıbadem Hospitals',
    avatar: '/images/avatars/mock-ceo.png',
    heroImage: '/images/stories/akgun-grup.jpg',
    rating: 5,
    testimonial: 'Bravioo sayesinde çalışan motivasyonumuz %300 arttı. Takdir sistemi gerçekten çok etkili ve kullanımı kolay. Tüm ekibimiz çok memnun ve sistem sayesinde iş birliğimiz artarken performansımız da yükseldi.',
    testimonialEn: 'Thanks to Bravioo, our employee motivation increased by 300%. The recognition system is really effective and easy to use. Our entire team is very satisfied and through the system our collaboration increased while our performance also improved.',
    shortQuote: 'Bravioo ile çalışan motivasyonumuz %300 arttı',
    shortQuoteEn: 'Employee motivation increased by 300% with Bravioo',
    results: [
      { metric: '+300%', label: 'Çalışan Motivasyonu', labelEn: 'Employee Motivation' },
      { metric: '+85%', label: 'Takım İşbirliği', labelEn: 'Team Collaboration' },
      { metric: '+40%', label: 'Çalışan Memnuniyeti', labelEn: 'Employee Satisfaction' }
    ]
  },
  {
    id: 2,
    name: 'Zeynep Kaya',
    nameEn: 'Sarah Johnson',
    position: 'Operasyon Müdürü',
    positionEn: 'Operations Manager',
    company: 'Karaca Home',
    companyEn: 'Karaca Home',
    avatar: '/images/avatars/mock-dev-girl.png',
    heroImage: '/images/stories/albayrak-esenler.jpg',
    rating: 5,
    testimonial: 'Uzaktan çalışma sürecinde ekip bağlılığımızı korumamızda Bravioo kritik rol oynadı. Şimdi herkes birbirini takdir ediyor ve ekip ruhumuz hiç olmadığı kadar güçlü. Platform gerçekten hayat kurtarıcı oldu.',
    testimonialEn: 'Bravioo played a critical role in maintaining our team engagement during remote work. Now everyone appreciates each other and our team spirit is stronger than ever. The platform was really a lifesaver.',
    shortQuote: 'Uzaktan çalışmada ekip bağlılığımızı koruduk',
    shortQuoteEn: 'We maintained team engagement in remote work',
    results: [
      { metric: '+250%', label: 'Uzaktan Bağlılık', labelEn: 'Remote Engagement' },
      { metric: '+90%', label: 'Takdir Sıklığı', labelEn: 'Recognition Frequency' },
      { metric: '+60%', label: 'Ekip Ruhu', labelEn: 'Team Spirit' }
    ]
  },
  {
    id: 3,
    name: 'Mehmet Özkan',
    nameEn: 'Michael Brown',
    position: 'Genel Müdür',
    positionEn: 'General Manager',
    company: 'Sanko Üniversitesi',
    companyEn: 'Sanko University',
    avatar: '/images/avatars/mock-ceo-oa.png',
    heroImage: '/images/stories/albayrak-grubu.jpg',
    rating: 5,
    testimonial: 'Akademik kadromuzun motivasyonunu artırmak için kullandığımız en etkili araç. ROI\'mız ilk 6 ayda %400 arttı ve öğretim üyelerimizin iş memnuniyeti rekor seviyelere çıktı.',
    testimonialEn: 'The most effective tool we use to increase our academic staff motivation. Our ROI increased by 400% in the first 6 months and our faculty job satisfaction reached record levels.',
    shortQuote: 'İlk 6 ayda %400 ROI artışı elde ettik',
    shortQuoteEn: 'We achieved 400% ROI increase in first 6 months',
    results: [
      { metric: '+400%', label: 'ROI Artışı', labelEn: 'ROI Increase' },
      { metric: '+70%', label: 'Akademik Performans', labelEn: 'Academic Performance' },
      { metric: '+95%', label: 'Kullanım Oranı', labelEn: 'Adoption Rate' }
    ]
  }
];

export function PremiumTestimonials() {
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - F-Pattern: Left-aligned */}
        <motion.div 
          className="text-left mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {locale === 'tr' ? 'Müşteri Hikayeleri' : 'Customer Stories'}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-gray-100 mb-6 font-display">
            {locale === 'tr' ? 'Gerçek Sonuçlar, ' : 'Real Results, '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Gerçek İnsanlar' : 'Real People'}
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
            {locale === 'tr'
              ? 'Bravioo ile dönüşüm yaşayan şirketlerin liderleriyle tanışın. Her hikaye, iş yerinde pozitif değişimin gücünü gösteriyor.'
              : 'Meet the leaders of companies transformed by Bravioo. Each story shows the power of positive change in the workplace.'
            }
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[600px]"
            >
              {/* Left - Hero Image & Visual Elements */}
              <div className="lg:col-span-5">
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {/* Main Hero Image */}
                  <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={current.heroImage}
                      alt={locale === 'tr' ? `${current.company} başarı hikayesi` : `${current.companyEn} success story`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      unoptimized
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Floating Quote Badge */}
                    <motion.div 
                      className="absolute top-6 left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Quote className="h-8 w-8 text-primary-600" />
                    </motion.div>
                    
                    {/* Company Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-primary-600" />
                        <span className="font-semibold text-neutral-900 dark:text-gray-100">
                          {locale === 'tr' ? current.company : current.companyEn}
                        </span>
                      </div>
                    </div>

                    {/* Results Indicators */}
                    <motion.div 
                      className="absolute top-6 right-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl px-4 py-3 shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        <span className="font-bold text-lg">{current.results[0].metric}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Avatar Card */}
                  <motion.div 
                    className="absolute -bottom-8 right-8 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-neutral-200 dark:border-gray-700"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary-100 dark:ring-primary-900/50">
                        <Image
                          src={current.avatar}
                          alt={locale === 'tr' ? current.name : current.nameEn}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-neutral-900 dark:text-gray-100">
                          {locale === 'tr' ? current.name : current.nameEn}
                        </div>
                        <div className="text-neutral-600 dark:text-gray-400">
                          {locale === 'tr' ? current.position : current.positionEn}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(current.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-secondary-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-7 space-y-8 mt-12 lg:mt-0">
                {/* Large Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-gray-100 leading-tight mb-6">
                    "{locale === 'tr' ? current.shortQuote : current.shortQuoteEn}"
                  </blockquote>
                  
                  <p className="text-lg md:text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
                    {locale === 'tr' ? current.testimonial : current.testimonialEn}
                  </p>
                </motion.div>

                {/* Results Grid */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {current.results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 text-center border border-primary-100 dark:border-primary-800"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                        {result.metric}
                      </div>
                      <div className="text-neutral-600 dark:text-gray-400 font-medium">
                        {locale === 'tr' ? result.label : result.labelEn}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Video Call to Action */}
                <motion.div
                  className="bg-neutral-50 dark:bg-gray-800 rounded-2xl p-6 border border-neutral-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-gray-100">
                        {locale === 'tr' ? 'Tam Hikayeyi İzleyin' : 'Watch the Full Story'}
                      </h4>
                      <p className="text-neutral-600 dark:text-gray-400">
                        {locale === 'tr' ? '3 dakikalık video hikaye' : '3-minute video story'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-neutral-200 dark:border-gray-700 flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
            type="button"
          >
            <ChevronLeft className="h-6 w-6 pointer-events-none" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-neutral-200 dark:border-gray-700 flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
            type="button"
          >
            <ChevronRight className="h-6 w-6 pointer-events-none" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer z-10 ${
                index === currentIndex 
                  ? 'bg-primary-500 w-12' 
                  : 'bg-neutral-300 dark:bg-gray-600 hover:bg-primary-300 w-3'
              }`}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

       
      </div>
    </section>
  );
}