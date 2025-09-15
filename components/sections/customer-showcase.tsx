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
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export function CustomerShowcase() {
  const locale = useLocale();
  const t = useTranslations();
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  const companies: Company[] = [
    {
      id: 'proteinocean',
      name: 'ProteinOcean',
      logo: '/images/brands/proteinocean.png',
      category: 'Gıda Ürünleri',
      description: 'Bravioo\'ın Hızlı Sayesinde Dönüşüm Oranlarını %10 Artırdı',
      metrics: {
        primary: '%10 Dönüşüm Artışı',
        secondary: '3 Aylık Süreçte'
      },
      details: {
        challenge: 'E-ticaret sitesinde düşük dönüşüm oranları ve yavaş yükleme süreleri',
        solution: 'Bravioo altyapısı ile hızlı ve optimize edilmiş e-ticaret deneyimi',
        results: ['%10 dönüşüm artışı', '%40 sayfa hızı iyileştirmesi', '%25 sepet terk oranı azalması']
      },
      testimonial: {
        text: 'Bravioo ile e-ticaret süreçlerimiz çok daha hızlı ve etkili hale geldi.',
        author: 'Ahmet Kaya',
        position: 'E-ticaret Müdürü'
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
        solution: 'Bravioo\'ın kullanıcı dostu arayüzü ile kolay site kurulumu',
        results: ['%250 satış artışı', 'Teknik bilgi gerektirmeden kurulum', '%90 zaman tasarrufu']
      },
      testimonial: {
        text: 'Hiç kod yazmadan mükemmel bir e-ticaret sitesi oluşturduk.',
        author: 'Elif Demir',
        position: 'Kurucu'
      }
    },
    {
      id: 'miniso',
      name: 'Miniso',
      logo: '/images/brands/miniso.png',
      category: 'Kozmetik',
      description: 'Bravioo Özellikleri Sayesinde Dönüşüm Oranlarını %10 Artırdı',
      metrics: {
        primary: '%35 Verimlilik Artışı',
        secondary: '2 Aylık Süreçte'
      },
      details: {
        challenge: 'Çok kanallı satış yönetimi ve stok entegrasyonu zorlukları',
        solution: 'Bravioo\'ın entegre çözümleri ile unified commerce deneyimi',
        results: ['%35 operasyonel verimlilik', 'Çoklu kanal entegrasyonu', '%15 stok yönetimi iyileştirmesi']
      },
      testimonial: {
        text: 'Tüm satış kanallarımızı tek yerden yönetmek harika.',
        author: 'Can Özkan',
        position: 'Operasyon Müdürü'
      }
    },
    {
      id: 'online-ciftci',
      name: 'Online Çiftçi',
      logo: '/images/brands/online-ciftci.png',
      category: 'Gıda Ürünleri',
      description: 'E-Ticaret Yolculuğuna Bravioo ile Devam Ediyor!',
      metrics: {
        primary: '%40 Büyüme',
        secondary: '4 Aylık Süreçte'
      },
      details: {
        challenge: 'Tarım ürünlerinin online satışında lojistik ve pazarlama zorlukları',
        solution: 'Bravioo\'ın sektöre özel çözümleri ve lojistik entegrasyonları',
        results: ['%40 büyüme', 'Nationwide teslimat ağı', '%60 müşteri memnuniyeti artışı']
      },
      testimonial: {
        text: 'Geleneksel tarımdan modern e-ticarete geçiş çok kolay oldu.',
        author: 'Mehmet Yılmaz',
        position: 'Genel Müdür'
      }
    },
    {
      id: 'mugo',
      name: 'Mugo',
      logo: '/images/brands/mugo.png',
      category: 'Tekstil & Giyim',
      description: 'Bravioo\'a geçişimiz ile birlikte yıllık ciromuz %397 arttı.',
      metrics: {
        primary: '%397 Ciro Artışı',
        secondary: '12 Aylık Süreçte'
      },
      details: {
        challenge: 'Eski e-ticaret sisteminin sınırlamaları ve ölçeklenebilirlik sorunları',
        solution: 'Bravioo\'ın güçlü altyapısı ile tam ölçeklenebilir e-ticaret çözümü',
        results: ['%397 ciro artışı', 'Sınırsız ürün yönetimi', '%80 mobil satış artışı']
      },
      testimonial: {
        text: 'Bravioo sayesinde hayallerimizden daha büyük başarıya ulaştık.',
        author: 'Ayşe Kılıç',
        position: 'CEO'
      }
    },
    {
      id: 'sm-bebek',
      name: 'SM Bebek',
      logo: '/images/brands/sm-bebek.png',
      category: 'Anne & Bebek Ürünleri',
      description: 'Bravioo Altyapısına Geçitkten Sonra Satışlarımızda %40 Artış Oldu',
      metrics: {
        primary: '%40 Satış Artışı',
        secondary: '5 Aylık Süreçte'
      },
      details: {
        challenge: 'Hassas müşteri segmentinde güven ve kullanıcı deneyimi sorunları',
        solution: 'Bravioo\'ın güvenli ve kullanıcı dostu e-ticaret deneyimi',
        results: ['%40 satış artışı', '%95 müşteri güven puanı', '%50 tekrar satın alma oranı']
      },
      testimonial: {
        text: 'Güvenilir altyapı sayesinde müşterilerimizin güvenini kazandık.',
        author: 'Fatma Arslan',
        position: 'Pazarlama Müdürü'
      }
    },
    {
      id: 'teknoloji-a',
      name: 'TeknolojiA',
      logo: '/images/brands/teknoloji-a.png',
      category: 'Elektronik',
      description: 'Mobil Satışlarda Rekor Artış',
      metrics: {
        primary: '%180 Mobil Satış',
        secondary: '4 Aylık Süreçte'
      },
      details: {
        challenge: 'Mobil e-ticaret deneyiminde eksiklikler ve düşük mobil dönüşüm',
        solution: 'Bravioo\'ın mobil-first yaklaşımı ile optimize edilmiş mobil deneyim',
        results: ['%180 mobil satış artışı', '%65 mobil dönüşüm iyileştirmesi', '%45 uygulama indirme artışı']
      },
      testimonial: {
        text: 'Mobil satışlarımız patladı, artık gelirlerimizin %70\'i mobil.',
        author: 'Okan Tekin',
        position: 'Dijital Pazarlama Müdürü'
      }
    },
    {
      id: 'ev-dekor',
      name: 'EvDekor',
      logo: '/images/brands/ev-dekor.png',
      category: 'Mobilya & Ev',
      description: 'Ev Dekorasyon Ürünlerinde Omnichannel Başarısı',
      metrics: {
        primary: '%120 Omnichannel',
        secondary: '6 Aylık Süreçte'
      },
      details: {
        challenge: 'Online ve offline satış kanallarının entegrasyonu sorunu',
        solution: 'Bravioo\'ın omnichannel çözümleri ile birleşik müşteri deneyimi',
        results: ['%120 omnichannel satış', '%50 müşteri yaşam değeri artışı', '%30 stok devir hızı']
      },
      testimonial: {
        text: 'Mağaza ve online satışlarımız artık tek bir ekosistemde.',
        author: 'Zeynep Korkmaz',
        position: 'Retail Müdürü'
      }
    }
  ];

  const categories = [
    { name: 'Tümü', count: companies.length },
    { name: 'Tekstil & Giyim', count: companies.filter(c => c.category === 'Tekstil & Giyim').length },
    { name: 'Ayakkabı', count: companies.filter(c => c.category === 'Ayakkabı').length },
    { name: 'Anne & Bebek Ürünleri', count: companies.filter(c => c.category === 'Anne & Bebek Ürünleri').length },
    { name: 'Mobilya & Ev', count: companies.filter(c => c.category === 'Mobilya & Ev').length },
    { name: 'Gıda Ürünleri', count: companies.filter(c => c.category === 'Gıda Ürünleri').length },
    { name: 'Elektronik', count: companies.filter(c => c.category === 'Elektronik').length },
    { name: 'Kozmetik', count: companies.filter(c => c.category === 'Kozmetik').length }
  ];

  const filteredCompanies = activeCategory === 'Tümü' 
    ? companies 
    : companies.filter(c => c.category === activeCategory);

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
            Her sektörden işletme için<br />
            <span className="text-emerald-600">Yeni Nesil Bravioo Altyapısı</span>
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl border border-emerald-200 hover:border-emerald-300 font-medium transition-all duration-300 shadow-sm hover:shadow-md"
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

        {/* Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCompanies.map((company, index) => (
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
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-xl group-hover:-translate-y-2 overflow-hidden h-48">
                
                {/* Company Logo */}
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-300">
                  <span className="text-slate-600 group-hover:text-emerald-600 font-bold text-lg transition-colors duration-300">
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

                {/* Primary Metric */}
                <div className="text-center">
                  <div className="text-sm font-bold text-emerald-600">
                    {company.metrics.primary}
                  </div>
                </div>

                {/* Hover Card - Success Story */}
                <AnimatePresence>
                  {hoveredCompany === company.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
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
                          <div className="text-xl font-bold text-emerald-600 mb-1">
                            {company.metrics.primary}
                          </div>
                          <div className="text-xs text-slate-500">
                            {company.metrics.secondary}
                          </div>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="space-y-3 mb-4 flex-1">
                          <div>
                            <h5 className="text-xs font-semibold text-slate-900 mb-1">Zorluk:</h5>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {company.details.challenge}
                            </p>
                          </div>
                          <div>
                            <h5 className="text-xs font-semibold text-emerald-600 mb-1">Çözüm:</h5>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {company.details.solution}
                            </p>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                          <p className="text-xs text-slate-700 italic mb-2">
                            "{company.testimonial.text}"
                          </p>
                          <div className="text-xs text-slate-500">
                            <strong>{company.testimonial.author}</strong>, {company.testimonial.position}
                          </div>
                        </div>

                        {/* Read More */}
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-emerald-600 text-xs font-medium"
                        >
                          <span>Detaylı Hikayeyi Oku</span>
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
            <div className="text-2xl font-bold text-slate-900 mb-2">+200%</div>
            <div className="text-sm text-slate-600">Ortalama Büyüme</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">10.000+</div>
            <div className="text-sm text-slate-600">Başarılı İşletme</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">4.8/5</div>
            <div className="text-sm text-slate-600">Müşteri Puanı</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">15+</div>
            <div className="text-sm text-slate-600">Farklı Sektör</div>
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
            Sizin de başarı hikayenizi yazalım
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Bravioo'ın güçlü e-ticaret altyapısı ile siz de bu başarılı markalar arasına katılın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Ücretsiz Demo Alın
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
            >
              Fiyat Bilgisi Alın
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
