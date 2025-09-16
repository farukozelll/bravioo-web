'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { 
  Quote, 
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Building,
  MapPin,
  TrendingUp,
  Play
} from 'lucide-react';
import Image from 'next/image';

export function TestimonialsSlider() {
  const locale = useLocale();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      title: 'İnsan Kaynakları Direktörü',
      company: 'AKMERCAN',
      companyLogo: '/images/brands/akmercan.svg',
      avatar: '/avatars/ahmet-yilmaz.jpg',
      location: 'İstanbul, Türkiye',
      industry: 'Teknoloji',
      employeeCount: '2,500+',
      rating: 5,
      testimonial: locale === 'tr' 
        ? '"Bravioo ile çalışan deneyimimizi tamamen dönüştürdük. 3 ay içinde ekip motivasyonu %185 arttı, şirket kültürümüz güçlendi. Özellikle peer-to-peer takdir sistemi çalışanlarımız tarafından çok sevildi."'
        : '"We completely transformed our employee experience with Bravioo. In 3 months, team motivation increased by 185%, and our company culture strengthened. Especially the peer-to-peer recognition system was loved by our employees."',
      results: [
        { metric: locale === 'tr' ? 'Çalışan Memnuniyeti' : 'Employee Satisfaction', value: '+185%', color: 'text-green-500' },
        { metric: locale === 'tr' ? 'İşten Ayrılma Oranı' : 'Turnover Rate', value: '-60%', color: 'text-blue-500' },
        { metric: locale === 'tr' ? 'Verimlilik' : 'Productivity', value: '+120%', color: 'text-purple-500' }
      ],
      background: 'from-blue-500 to-cyan-600',
      tags: ['HR Tech', 'Employee Engagement', 'Culture']
    },
    {
      id: 2,
      name: 'Mehmet Özkan',
      title: 'CEO',
      company: 'AGT Teknoloji',
      companyLogo: '/images/brands/agt-renkli.jpeg',
      avatar: '/avatars/mehmet-ozkan.jpg',
      location: 'Ankara, Türkiye',
      industry: 'Otomotiv',
      employeeCount: '1,200+',
      rating: 5,
      testimonial: locale === 'tr'
        ? '"AGT olarak, Bravioo\'nun sunduğu çözümlerle çalışanlarımızın motivasyonu arttı. Özellikle ödül sistemi ve gamification özelliklerinin etkisi inanılmazdı. ROI\'mız 6 ay içinde 4 katına çıktı."'
        : '"As AGT, our employees\' motivation increased with the solutions Bravioo offered. The impact of the reward system and gamification features was incredible. Our ROI quadrupled within 6 months."',
      results: [
        { metric: 'ROI', value: '400%', color: 'text-gold-500' },
        { metric: locale === 'tr' ? 'Ekip Performansı' : 'Team Performance', value: '+250%', color: 'text-green-500' },
        { metric: locale === 'tr' ? 'Çalışan Bağlılığı' : 'Employee Loyalty', value: '+180%', color: 'text-blue-500' }
      ],
      background: 'from-purple-500 to-pink-600',
      tags: ['ROI', 'Performance', 'Gamification']
    },
    {
      id: 3,
      name: 'Ayşe Demir',
      title: 'Operasyon Müdürü',
      company: 'TÜRKSAT',
      companyLogo: '/images/brands/turksat_logo.png',
      avatar: '/avatars/ayse-demir.jpg',
      location: 'Ankara, Türkiye',
      industry: 'Telekomünikasyon',
      employeeCount: '5,000+',
      rating: 5,
      testimonial: locale === 'tr'
        ? '"TÜRKSAT\'ta Bravioo ile çalışan tanıma ve ödüllendirme sistemimizi modernize ettik. Çalışanlarımızın motivasyonu ve şirket bağlılığı önemli ölçüde arttı. Sistem kullanımı %92 seviyesinde."'
        : '"At TÜRKSAT, we modernized our employee recognition and rewards system with Bravioo. Our employees\' motivation and company loyalty increased significantly. System usage is at 92% level."',
      results: [
        { metric: locale === 'tr' ? 'Sistem Kullanımı' : 'System Usage', value: '92%', color: 'text-green-500' },
        { metric: locale === 'tr' ? 'Çalışan Bağlılığı' : 'Employee Loyalty', value: '+200%', color: 'text-blue-500' },
        { metric: locale === 'tr' ? 'Tasarruf' : 'Cost Savings', value: '₺2.1M', color: 'text-purple-500' }
      ],
      background: 'from-green-500 to-emerald-600',
      tags: ['Government', 'Scale', 'Adoption']
    },
    {
      id: 4,
      name: 'Dr. Fatma Kaya',
      title: 'İnsan Kaynakları Müdürü',
      company: 'Acıbadem Hastaneleri',
      companyLogo: '/images/brands/Acıbadem Tüm Hastaneleri-Tıp Merkezleri.png',
      avatar: '/avatars/fatma-kaya.jpg',
      location: 'İstanbul, Türkiye',
      industry: 'Sağlık',
      employeeCount: '15,000+',
      rating: 5,
      testimonial: locale === 'tr'
        ? '"Sağlık sektöründe çalışan motivasyonu kritik öneme sahip. Bravioo ile hem doktorlarımızın hem de sağlık personelimizin iş tatmini arttı. Hasta memnuniyet puanlarımız da %35 yükseldi."'
        : '"Employee motivation is critically important in the healthcare sector. With Bravioo, job satisfaction of both our doctors and healthcare staff increased. Our patient satisfaction scores also rose by 35%."',
      results: [
        { metric: locale === 'tr' ? 'Hasta Memnuniyeti' : 'Patient Satisfaction', value: '+35%', color: 'text-blue-500' },
        { metric: locale === 'tr' ? 'Personel Devir Hızı' : 'Staff Turnover', value: '-45%', color: 'text-green-500' },
        { metric: locale === 'tr' ? 'İş Tatmini' : 'Job Satisfaction', value: '+160%', color: 'text-purple-500' }
      ],
      background: 'from-red-500 to-pink-600',
      tags: ['Healthcare', 'Patient Care', 'Retention']
    },
    {
      id: 5,
      name: 'Özlem Şahin',
      title: 'Genel Müdür',
      company: 'Karaca Home',
      companyLogo: '/images/brands/karaca-beyaz.png',
      avatar: '/avatars/ozlem-sahin.jpg',
      location: 'İstanbul, Türkiye',
      industry: 'Perakende',
      employeeCount: '3,500+',
      rating: 5,
      testimonial: locale === 'tr'
        ? '"Perakende sektöründe çalışan deneyimi müşteri deneyimini doğrudan etkiliyor. Bravioo ile mağaza ekiplerimizin motivasyonu arttı, satış performansımız %90 yükseldi."'
        : '"In the retail sector, employee experience directly affects customer experience. With Bravioo, our store teams\' motivation increased, and our sales performance rose by 90%."',
      results: [
        { metric: locale === 'tr' ? 'Satış Performansı' : 'Sales Performance', value: '+90%', color: 'text-gold-500' },
        { metric: locale === 'tr' ? 'Müşteri Puanı' : 'Customer Score', value: '+75%', color: 'text-green-500' },
        { metric: locale === 'tr' ? 'Ekip Motivasyonu' : 'Team Motivation', value: '+140%', color: 'text-blue-500' }
      ],
      background: 'from-orange-500 to-red-600',
      tags: ['Retail', 'Sales', 'Customer Experience']
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 text-ink-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Main Testimonial Display */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
            >
              {/* Left - Testimonial Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 h-16 w-16 text-brand-400/30" />
                  <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-ink-800 dark:text-gray-50 font-light pl-4 md:pl-8">
                    {currentTestimonial.testimonial}
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <Image
                        src={currentTestimonial.companyLogo}
                        alt={currentTestimonial.company}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-300 font-medium mb-2">
                      {currentTestimonial.title}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-ink-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {currentTestimonial.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {currentTestimonial.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {currentTestimonial.employeeCount}
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-gold-400 fill-current"
                        />
                      ))}
                      <span className="text-sm text-ink-600 dark:text-gray-400 ml-2">5.0</span>
                    </div>
                  </div>
                </div>

              
              </div>

              {/* Right - Results & Visual */}
              <div className="space-y-6">
                {/* Results Cards */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-brand-400" />
                    {locale === 'tr' ? 'Elde Edilen Sonuçlar' : 'Achieved Results'}
                  </h4>
                  
              
                </div>

                {/* Company Visual */}
                <motion.div 
                  className={`relative h-40 sm:h-48 rounded-2xl bg-gradient-to-br ${currentTestimonial.background} p-4 sm:p-6 overflow-hidden group cursor-pointer`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Company Info */}
                  <div className="absolute top-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="bg-black/10 dark:bg-white/20 rounded-xl px-3 py-2">
                        <span className="text-ink-900 dark:text-white font-semibold text-sm">
                          {currentTestimonial.company}
                        </span>
                      </div>
                      <div className="bg-black/10 dark:bg-white/20 rounded-xl px-3 py-2">
                        <span className="text-ink-900 dark:text-white text-sm">
                          {currentTestimonial.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <motion.button
                    className="absolute inset-0 m-auto w-16 h-16 bg-black/10 dark:bg-white/20 rounded-full flex items-center justify-center group-hover:bg-black/20 dark:group-hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-6 w-6 text-ink-900 dark:text-white ml-1" />
                  </motion.button>

                  {/* Background Elements */}
                  <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/20 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Thumbnails */}
        <div className="space-y-8">
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-ink-900/5 hover:bg-ink-900/10 dark:bg-white/10 dark:hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setAutoPlay(false);
                  }}
                  className={`transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'w-12 h-3 bg-brand-500 rounded-full' 
                      : 'w-3 h-3 bg-ink-900/20 hover:bg-ink-900/30 dark:bg-white/30 dark:hover:bg-white/50 rounded-full'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-ink-900/5 hover:bg-ink-900/10 dark:bg-white/10 dark:hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => {
                  setActiveTestimonial(index);
                  setAutoPlay(false);
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  index === activeTestimonial
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/20'
                    : 'border-ink-900/10 bg-ink-900/5 hover:border-ink-900/20 hover:bg-ink-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs truncate">
                      {testimonial.company}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 text-gold-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect - Show main result */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 pt-3 border-t border-white/10"
                    >
                      <div className="text-center">
                        <span className={`text-lg font-bold ${testimonial.results[0].color}`}>
                          {testimonial.results[0].value}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">
                          {testimonial.results[0].metric}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
