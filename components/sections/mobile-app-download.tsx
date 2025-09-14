'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Download, 
  Smartphone, 
  Bell,
  Users,
  Award,
  BarChart3,
  QrCode,
  Apple,
  Play
} from 'lucide-react';
import Image from 'next/image';

export function MobileAppDownloadSection() {
  const locale = useLocale();

  const features = [
    {
      icon: Bell,
      title: locale === 'tr' ? 'Anlık Bildirimler' : 'Instant Notifications',
      description: locale === 'tr' ? 'Takdir ve ödülleri anında alın' : 'Receive recognition and rewards instantly'
    },
    {
      icon: Users,
      title: locale === 'tr' ? 'Takım Etkileşimi' : 'Team Interaction',
      description: locale === 'tr' ? 'Hareket halindeyken ekip arkadaşlarınızı takdir edin' : 'Recognize teammates on the go'
    },
    {
      icon: Award,
      title: locale === 'tr' ? 'Ödül Kataloğu' : 'Rewards Catalog',
      description: locale === 'tr' ? 'Binlerce ödül seçeneğine erişin' : 'Access thousands of reward options'
    },
    {
      icon: BarChart3,
      title: locale === 'tr' ? 'Kişisel Dashboard' : 'Personal Dashboard',
      description: locale === 'tr' ? 'İstatistiklerinizi takip edin' : 'Track your statistics'
    }
  ];

  const appStats = [
    { number: '4.9', label: locale === 'tr' ? 'App Store Puanı' : 'App Store Rating' },
    { number: '100K+', label: locale === 'tr' ? 'İndirme' : 'Downloads' },
    { number: '98%', label: locale === 'tr' ? 'Kullanıcı Memnuniyeti' : 'User Satisfaction' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-brand-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-brand-200/40 to-emerald-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  {locale === 'tr' ? 'Mobil Uygulamamız' : 'Our Mobile App'}
                </span>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 font-display"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {locale === 'tr' ? 'Mobil Uygulamamızı' : 'Download Our'}{' '}
                <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
                  {locale === 'tr' ? 'İndirin' : 'Mobile App'}
                </span>
              </motion.h2>

              <motion.p 
                className="text-xl text-ink-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {locale === 'tr'
                  ? 'Bravioo deneyimini her zaman yanınızda taşıyın. Anlık takdir, ödül yönetimi ve ekip etkileşimi için mobil uygulamamızı indirin.'
                  : 'Take the Bravioo experience with you everywhere. Download our mobile app for instant recognition, reward management, and team interaction.'
                }
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/80 rounded-2xl border border-sand-200 hover:border-brand-300 transition-all duration-300 hover:shadow-lg group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-ink-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* App Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 py-6 border-t border-sand-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {appStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-sm text-ink-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              {/* App Store */}
              <motion.button
                className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition-all transform hover:scale-105 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">
                    {locale === 'tr' ? 'İndir' : 'Download on the'}
                  </div>
                  <div className="font-semibold">
                    {locale === 'tr' ? 'App Store' : 'App Store'}
                  </div>
                </div>
              </motion.button>

              {/* Google Play */}
              <motion.button
                className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition-all transform hover:scale-105 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">
                    {locale === 'tr' ? 'İndir' : 'Get it on'}
                  </div>
                  <div className="font-semibold">
                    {locale === 'tr' ? 'Google Play' : 'Google Play'}
                  </div>
                </div>
              </motion.button>
            </motion.div>

            {/* QR Code */}
            <motion.div 
              className="flex items-center gap-4 p-4 bg-sand-50 rounded-2xl border border-sand-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-sand-200">
                <QrCode className="h-8 w-8 text-ink-600" />
              </div>
              <div>
                <h4 className="font-semibold text-ink-900 mb-1">
                  {locale === 'tr' ? 'QR Kod ile İndir' : 'Scan to Download'}
                </h4>
                <p className="text-sm text-ink-600">
                  {locale === 'tr' 
                    ? 'Telefonunuzla QR kodu tarayın ve uygulamayı indirin'
                    : 'Scan the QR code with your phone to download the app'
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Phone Mockup */}
            <div className="relative mx-auto max-w-sm">
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="h-[600px] bg-gradient-to-b from-brand-50 to-white relative">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between px-6 py-4 bg-white">
                        <div className="text-sm font-semibold">9:41</div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-6 h-3 border border-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-6 py-4 bg-gradient-to-r from-brand-500 to-emerald-600">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Award className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Bravioo</h3>
                            <p className="text-white/80 text-xs">
                              {locale === 'tr' ? 'Takdir Platformu' : 'Recognition Platform'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sample Content */}
                      <div className="p-6 space-y-4">
                        {/* Recognition Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-sand-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <Award className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-ink-900">
                                {locale === 'tr' ? 'Yeni Takdir Aldınız!' : 'New Recognition!'}
                              </div>
                              <div className="text-xs text-ink-600">2 dakika önce</div>
                            </div>
                          </div>
                          <p className="text-sm text-ink-700">
                            {locale === 'tr' 
                              ? '"Harika sunum için teşekkürler!"'
                              : '"Thanks for the amazing presentation!"'
                            }
                          </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-brand-50 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold text-brand-600">42</div>
                            <div className="text-xs text-brand-700">
                              {locale === 'tr' ? 'Takdir' : 'Recognition'}
                            </div>
                          </div>
                          <div className="bg-emerald-50 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold text-emerald-600">1,250</div>
                            <div className="text-xs text-emerald-700">
                              {locale === 'tr' ? 'Puan' : 'Points'}
                            </div>
                          </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-around pt-4">
                          {[Award, Users, BarChart3, Download].map((Icon, index) => (
                            <div key={index} className="flex flex-col items-center gap-1">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                index === 0 ? 'bg-brand-500 text-white' : 'bg-sand-100 text-ink-400'
                              }`}>
                                <Icon className="h-5 w-5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl p-3 shadow-xl border border-sand-200"
              >
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-brand-500" />
                  <span className="text-xs font-medium text-ink-900">
                    {locale === 'tr' ? '+5 Takdir' : '+5 Recognition'}
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-3 shadow-xl border border-sand-200"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium text-ink-900">
                    {locale === 'tr' ? 'Ödül Kazandınız!' : 'Reward Earned!'}
                  </span>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400/20 to-emerald-400/20 rounded-[3rem] blur-3xl scale-110 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
