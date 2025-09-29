'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Professional aggressive animation
import aggressiveJson from '@/components/dolphin-lottie.aggressive.json';

export default function NotFound() {
  const locale = useLocale();
  const isTR = locale === 'tr';
  const prefersReducedMotion = useReducedMotion();

  const title = isTR ? 'Sayfa Bulunamadı' : 'Page Not Found';
  const subtitle = isTR ? 'Üzgünüz, aradığınız sayfa mevcut değil.' : 'Sorry, the page you are looking for does not exist.';
  const desc = isTR
    ? 'Sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.'
    : 'The page may have been removed, renamed, or is temporarily unavailable.';
  const backLabel = isTR ? 'Ana Sayfaya Dön' : 'Return Home';
  const contactLabel = isTR ? 'Yardıma mı ihtiyacınız var?' : 'Need help?';
  const contactLink = isTR ? 'İletişime Geçin' : 'Contact Us';

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-600">
              404
            </h1>
          </div>

          {/* Title & Description */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            {subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {desc}
          </p>
        </div>

        {/* Animation Card */}
        <div className="mx-auto max-w-lg mb-12">
          <div className="relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-2xl backdrop-blur-sm">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl blur opacity-20 dark:opacity-30" />
            
            <div className="relative flex items-center justify-center" style={{ minHeight: 240 }}>
              {prefersReducedMotion ? (
                <div className="flex flex-col items-center gap-3">
                  <span className="block animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" style={{ width: 80, height: 80 }} />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{isTR ? 'Yükleniyor...' : 'Loading...'}</p>
                </div>
              ) : (
                <Lottie
                  animationData={aggressiveJson}
                  loop
                  autoplay
                  style={{ width: 220, height: 220 }}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            {backLabel}
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-emerald-600 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            {isTR ? 'Geri Dön' : 'Go Back'}
          </button>
        </div>

        {/* Help Section */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {contactLabel}
          </p>
          <Link 
            href={`/${locale}/contact`}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium text-sm underline underline-offset-4 transition-colors"
          >
            {contactLink}
          </Link>
        </div>
      </div>
    </main>
  );
}


