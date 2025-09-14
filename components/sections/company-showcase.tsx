'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, TrendingUp, Users, Award, Building, Star } from 'lucide-react';

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
}

export function CompanyShowcaseSection() {
  const locale = useLocale();
  const t = useTranslations();
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  const companies: Company[] = [
    {
      id: 'proteinocean',
      name: 'ProteinOcean',
      logo: '/images/brands/proteinocean.png',
      category: 'Gıda Ürünleri',
      description: 'İkas\'ın Hızlı Sayesinde Dönüşüm Oranlarını %10',
      metrics: {
        primary: '%10 Dönüşüm Artışı',
        secondary: '3 Aylık Süreçte'
      },
      details: {
        challenge: 'E-ticaret sitesinde düşük dönüşüm oranları ve yavaş yükleme süreleri',
        solution: 'İkas altyapısı ile hızlı ve optimize edilmiş e-ticaret deneyimi',
        results: ['%10 dönüşüm artışı', '%40 sayfa hızı iyileştirmesi', '%25 sepet terk oranı azalması']
      }
    },
    {
      id: 'wunder',
      name: 'Wunder',
      logo: '/images/brands/wunder.png',
      category: 'Ayakkabı',
      description: 'Yazılım Bilgisi Gerekmeden E-Ticaret Sitesini Tasarladı!',
      metrics: {
        primary: '%250 Satış Artışı',
        secondary: '6 Aylık Süreçte'
      },
      details: {
        challenge: 'Teknik bilgi eksikliği ve karmaşık e-ticaret kurulum süreçleri',
        solution: 'İkas\'ın kullanıcı dostu arayüzü ile kolay site kurulumu',
        results: ['%250 satış artışı', 'Teknik bilgi gerektirmeden kurulum', '%90 zaman tasarrufu']
      }
    },
    {
      id: 'miniso',
      name: 'Miniso',
      logo: '/images/brands/miniso.png',
      category: 'Kozmetik',
      description: 'İkas Özellikleri Sayesinde Dönüşüm Oranlarını %10',
      metrics: {
        primary: '%10 Dönüşüm Artışı',
        secondary: '2 Aylık Süreçte'
      },
      details: {
        challenge: 'Çok kanallı satış yönetimi ve stok entegrasyonu zorlukları',
        solution: 'İkas\'ın entegre çözümleri ile unified commerce deneyimi',
        results: ['%10 dönüşüm artışı', 'Çoklu kanal entegrasyonu', '%35 operasyonel verimlilik']
      }
    },
    {
      id: 'online-ciftci',
      name: 'Online Çiftçi',
      logo: '/images/brands/online-ciftci.png',
      category: 'Gıda Ürünleri',
      description: 'E-Ticaret Yolculuğuna İkas ile Devam Ediyor!',
      metrics: {
        primary: '%40 Büyüme',
        secondary: '4 Aylık Süreçte'
      },
      details: {
        challenge: 'Tarım ürünlerinin online satışında lojistik ve pazarlama zorlukları',
        solution: 'İkas\'ın sektöre özel çözümleri ve lojistik entegrasyonları',
        results: ['%40 büyüme', 'Nationwide teslimat ağı', '%60 müşteri memnuniyeti artışı']
      }
    },
    {
      id: 'mugo',
      name: 'Mugo',
      logo: '/images/brands/mugo.png',
      category: 'Tekstil & Giyim',
      description: 'İkas\'a geçişimiz ile birlikte yıllık ciromuz %397 arttı.',
      metrics: {
        primary: '%397 Ciro Artışı',
        secondary: '12 Aylık Süreçte'
      },
      details: {
        challenge: 'Eski e-ticaret sisteminin sınırlamaları ve ölçeklenebilirlik sorunları',
        solution: 'İkas\'ın güçlü altyapısı ile tam ölçeklenebilir e-ticaret çözümü',
        results: ['%397 ciro artışı', 'Sınırsız ürün yönetimi', '%80 mobil satış artışı']
      }
    },
    {
      id: 'sm-bebek',
      name: 'SM Bebek',
      logo: '/images/brands/sm-bebek.png',
      category: 'Anne & Bebek Ürünleri',
      description: 'İkas Altyapısına Geçitkten Sonra Satışlarımızda %40 Orranında Artış Oldu',
      metrics: {
        primary: '%40 Satış Artışı',
        secondary: '5 Aylık Süreçte'
      },
      details: {
        challenge: 'Hassas müşteri segmentinde güven ve kullanıcı deneyimi sorunları',
        solution: 'İkas\'ın güvenli ve kullanıcı dostu e-ticaret deneyimi',
        results: ['%40 satış artışı', '%95 müşteri güven puanı', '%50 tekrar satın alma oranı']
      }
    }
  ];

  const categories = [
    { name: 'Tümü', count: companies.length, active: true },
    { name: 'Tekstil & Giyim', count: companies.filter(c => c.category === 'Tekstil & Giyim').length },
    { name: 'Ayakkabı', count: companies.filter(c => c.category === 'Ayakkabı').length },
    { name: 'Aksesuar', count: companies.filter(c => c.category === 'Aksesuar').length },
    { name: 'Anne & Bebek Ürünleri', count: companies.filter(c => c.category === 'Anne & Bebek Ürünleri').length },
    { name: 'Mobilya & Ev', count: companies.filter(c => c.category === 'Mobilya & Ev').length },
    { name: 'Evcil Hayvan Ürünleri', count: companies.filter(c => c.category === 'Evcil Hayvan Ürünleri').length },
    { name: 'Gıda Ürünleri', count: companies.filter(c => c.category === 'Gıda Ürünleri').length },
    { name: 'Kahve', count: companies.filter(c => c.category === 'Kahve').length },
    { name: 'Elektronik', count: companies.filter(c => c.category === 'Elektronik').length },
    { name: 'Kozmetik', count: companies.filter(c => c.category === 'Kozmetik').length },
    { name: 'Mutfak Ürünleri', count: companies.filter(c => c.category === 'Mutfak Ürünleri').length },
    { name: 'Influencer', count: companies.filter(c => c.category === 'Influencer').length },
    { name: 'Spor Ürünleri', count: companies.filter(c => c.category === 'Spor Ürünleri').length }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-24">
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
            Her sektörden işletme için<br />
            Yeni Nesil Bravioo Altyapısı
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Başarı Hikayelerimize Göz At</span>
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
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${category.active 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }
              `}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCompany(company.id)}
              onHoverEnd={() => setHoveredCompany(null)}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-xl group-hover:-translate-y-2 overflow-hidden">
                
                {/* Company Logo */}
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-50 transition-colors duration-300">
                  <span className="text-slate-600 font-bold text-lg">
                    {company.name.charAt(0)}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="font-semibold text-slate-900 text-center mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {company.name}
                </h3>

                {/* Category */}
                <p className="text-xs text-slate-500 text-center mb-4">
                  {company.category}
                </p>

                {/* Hover Card - Success Story */}
                <AnimatePresence>
                  {hoveredCompany === company.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white rounded-2xl p-6 border border-emerald-200 shadow-2xl z-10"
                    >
                      <div className="h-full flex flex-col">
                        
                        {/* Company Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <span className="text-emerald-600 font-bold">
                              {company.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{company.name}</h4>
                            <p className="text-xs text-slate-500">{company.category}</p>
                          </div>
                        </div>

                        {/* Primary Metric */}
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-emerald-600 mb-1">
                            {company.metrics.primary}
                          </div>
                          <div className="text-xs text-slate-500">
                            {company.metrics.secondary}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                          {company.description}
                        </p>

                        {/* Key Results */}
                        <div className="space-y-2">
                          {company.details.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              <span className="text-xs text-slate-600">{result}</span>
                            </div>
                          ))}
                        </div>

                        {/* Read More */}
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 mt-4 text-emerald-600 text-xs font-medium"
                        >
                          <span>Devamını Oku</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">
            Sizin de başarı hikayenizi oluşturmaya hazır mısınız?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ücretsiz Demo Alın
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}