'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { 
  X,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Building,
  Star,
  BarChart3,
  Heart,
  Shield,
  Zap,
  Target,
  Quote
} from 'lucide-react';
import Image from 'next/image';

export function CompanyShowcaseSection() {
  const locale = useLocale();
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);

  const companies = [
    {
      id: 1,
      name: 'CRITEO',
      logo: '/logos/criteo.png', // You'll need to add these logos
      background: 'from-purple-600 to-indigo-700',
      industry: locale === 'tr' ? 'AdTech' : 'AdTech',
      employees: '2,800+',
      testimonial: {
        text: locale === 'tr'
          ? '"Achievers helped Criteo launch their first recognition and reward program with a teaser campaign focusing on leadership enablement and an in-person celebration."'
          : '"Achievers helped Criteo launch their first recognition and reward program with a teaser campaign focusing on leadership enablement and an in-person celebration."',
        author: 'Sarah Johnson',
        position: 'VP People Operations'
      },
      mainMetric: {
        value: '94%',
        label: locale === 'tr' ? 'Activation rate in 7 days' : 'Activation rate in 7 days',
        icon: Target
      },
      additionalMetrics: [
        { label: locale === 'tr' ? 'Çalışan Katılımı' : 'Employee Engagement', value: '+85%', icon: Users },
        { label: locale === 'tr' ? 'Liderlik Etkinliği' : 'Leadership Effectiveness', value: '+67%', icon: Award },
        { label: locale === 'tr' ? 'Kültür Puanı' : 'Culture Score', value: '4.8/5', icon: Heart }
      ]
    },
    {
      id: 2,
      name: 'DISCOVER',
      logo: '/logos/discover.png',
      background: 'from-orange-500 to-red-600',
      industry: locale === 'tr' ? 'Finans' : 'Financial Services',
      employees: '17,000+',
      testimonial: {
        text: locale === 'tr'
          ? '"Discover Financial Services transformed their recognition culture with our platform, seeing immediate improvements in employee satisfaction and retention."'
          : '"Discover Financial Services transformed their recognition culture with our platform, seeing immediate improvements in employee satisfaction and retention."',
        author: 'Michael Chen',
        position: 'Chief People Officer'
      },
      mainMetric: {
        value: '92%',
        label: locale === 'tr' ? 'Employee satisfaction increase' : 'Employee satisfaction increase',
        icon: Heart
      },
      additionalMetrics: [
        { label: locale === 'tr' ? 'Çalışan Devir Hızı' : 'Employee Turnover', value: '-45%', icon: TrendingUp },
        { label: locale === 'tr' ? 'Performans Artışı' : 'Performance Improvement', value: '+73%', icon: BarChart3 },
        { label: locale === 'tr' ? 'Net Promoter Score' : 'Net Promoter Score', value: '68', icon: Star }
      ]
    },
    {
      id: 3,
      name: 'KELLANOVA',
      logo: '/logos/kellanova.png',
      background: 'from-green-500 to-emerald-600',
      industry: locale === 'tr' ? 'Gıda' : 'Food & Beverage',
      employees: '23,000+',
      testimonial: {
        text: locale === 'tr'
          ? '"Kellanova (formerly Kellogg Company) leveraged our recognition platform to strengthen their global workforce connection and improve cross-cultural collaboration."'
          : '"Kellanova (formerly Kellogg Company) leveraged our recognition platform to strengthen their global workforce connection and improve cross-cultural collaboration."',
        author: 'Lisa Rodriguez',
        position: 'Global Head of People Experience'
      },
      mainMetric: {
        value: '89%',
        label: locale === 'tr' ? 'Cross-team collaboration increase' : 'Cross-team collaboration increase',
        icon: Users
      },
      additionalMetrics: [
        { label: locale === 'tr' ? 'Global Katılım' : 'Global Participation', value: '+91%', icon: Building },
        { label: locale === 'tr' ? 'İnovasyon Metrikleri' : 'Innovation Metrics', value: '+156%', icon: Zap },
        { label: locale === 'tr' ? 'Çalışan Bağlılığı' : 'Employee Loyalty', value: '87%', icon: Shield }
      ]
    },
    {
      id: 4,
      name: 'General Motors',
      logo: '/logos/gm.png',
      background: 'from-blue-500 to-indigo-600',
      industry: locale === 'tr' ? 'Otomotiv' : 'Automotive',
      employees: '167,000+',
      testimonial: {
        text: locale === 'tr'
          ? '"General Motors revolutionized their recognition approach across global operations, creating a unified culture of appreciation that spans continents."'
          : '"General Motors revolutionized their recognition approach across global operations, creating a unified culture of appreciation that spans continents."',
        author: 'David Park',
        position: 'Executive Director, Global People Strategy'
      },
      mainMetric: {
        value: '96%',
        label: locale === 'tr' ? 'Manager participation rate' : 'Manager participation rate',
        icon: Award
      },
      additionalMetrics: [
        { label: locale === 'tr' ? 'Güvenlik Performansı' : 'Safety Performance', value: '+43%', icon: Shield },
        { label: locale === 'tr' ? 'Operasyonel Mükemmellik' : 'Operational Excellence', value: '+67%', icon: Target },
        { label: locale === 'tr' ? 'Çalışan Refahı' : 'Employee Wellbeing', value: '91%', icon: Heart }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-500/20 to-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-6 py-3 bg-brand-500/20 text-brand-300 rounded-full text-sm font-semibold mb-6 border border-brand-500/30"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {locale === 'tr' ? 'Müşteri Sonuçları' : 'Customer Results'}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {locale === 'tr' ? 'Recognition that' : 'Recognition that'}{' '}
            <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
              {locale === 'tr' ? 'shapes performance' : 'shapes performance'}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {locale === 'tr'
              ? 'Müşterilerimiz engagement, verimlilik ve elde tutma gibi temel iş metriklerinde 5 kata varan iyileşme görüyor.'
              : 'Our customers see up to 5x improvement on key business drivers like engagement, productivity, and retention.'
            }
          </p>
        </motion.div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCompany(selectedCompany === company.id ? null : company.id)}
            >
              <motion.div
                className={`relative h-48 rounded-2xl bg-gradient-to-br ${company.background} p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  selectedCompany === company.id ? 'ring-4 ring-brand-400 scale-105' : 'hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {company.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {company.industry} • {company.employees}
                    </p>
                  </div>

                  {/* Main Metric Preview */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {company.mainMetric.value}
                    </div>
                    <div className="text-white/80 text-xs">
                      {company.mainMetric.label}
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Company Details */}
        <AnimatePresence>
          {selectedCompany && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {(() => {
                const company = companies.find(c => c.id === selectedCompany);
                if (!company) return null;

                return (
                  <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${company.background} p-8 md:p-12`}>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCompany(null)}
                      className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-16 left-16 w-32 h-32 border border-white/30 rounded-full"></div>
                      <div className="absolute top-32 right-20 w-24 h-24 border border-white/30 rounded-full"></div>
                      <div className="absolute bottom-16 left-32 w-40 h-40 border border-white/30 rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                              <span className="text-3xl font-bold text-white">
                                {company.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-4xl font-bold text-white mb-2">{company.name}</h3>
                              <div className="flex items-center gap-4 text-white/80">
                                <span>{company.industry}</span>
                                <span>•</span>
                                <span>{company.employees} employees</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Main Metric */}
                          <div className="bg-white/10 rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                {React.createElement(company.mainMetric.icon, { className: "h-8 w-8 text-white" })}
                              </div>
                              <div>
                                <div className="text-5xl font-bold text-white mb-2">
                                  {company.mainMetric.value}
                                </div>
                                <div className="text-white/90 text-lg">
                                  {company.mainMetric.label}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Additional Metrics */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {company.additionalMetrics.map((metric, index) => {
                              const Icon = metric.icon;
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + index * 0.1 }}
                                  className="bg-white/10 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                                >
                                  <Icon className="h-8 w-8 text-white mx-auto mb-3" />
                                  <div className="text-2xl font-bold text-white mb-2">
                                    {metric.value}
                                  </div>
                                  <div className="text-white/80 text-sm">
                                    {metric.label}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-white/10 rounded-2xl p-6 h-fit">
                          <Quote className="h-8 w-8 text-white/50 mb-4" />
                          <blockquote className="text-white/90 leading-relaxed mb-6 text-lg">
                            {company.testimonial.text}
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-white">
                                {company.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">{company.testimonial.author}</div>
                              <div className="text-white/70 text-sm">{company.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Logos Slider */}
        <motion.div 
          className="border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center text-gray-400 mb-8">
            {locale === 'tr' 
              ? 'Dünya\'nın en iyi markaları bunu kişiselleştiriyor.' 
              : 'The world\'s best brands personalize this.'
            }{' '}
            <span className="text-brand-400 hover:text-brand-300 cursor-pointer">
              {locale === 'tr' ? 'Bunu nasıl yaptıklarını görün →' : 'See how they do it →'}
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['meijer', 'ZURICH', 'General Motors', 'AIR CANADA', 'Panasonic', 'DISCOVER'].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-12 flex items-center justify-center text-white/60 font-semibold text-lg hover:text-brand-400 transition-colors cursor-pointer"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
