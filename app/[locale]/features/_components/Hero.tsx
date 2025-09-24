'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, Users } from 'lucide-react';

type Props = {
  selectedPath: 'hr' | 'employee';
  onSelect: (p: 'hr' | 'employee') => void;
};

export function Hero({ selectedPath, onSelect }: Props) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <motion.div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-100 opacity-40 blur-3xl dark:bg-emerald-900/20" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-100 opacity-40 blur-3xl dark:bg-blue-900/20" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50 px-8 py-4 text-emerald-700 dark:border-emerald-600 dark:from-emerald-900/20 dark:to-blue-900/20 dark:text-emerald-300">
            <Sparkles className="h-5 w-5" />
            <span className="text-lg font-bold">İnteraktif Platform Turu</span>
          </div>

          <h1 className="mb-8 text-5xl font-black text-gray-900 dark:text-gray-100 sm:text-6xl lg:text-7xl">
            Çalışan Deneyimi
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Yeniden Tanımlandı</span>
          </h1>

          <p className="mb-12 text-xl text-gray-600 dark:text-gray-300 lg:text-2xl">
            Çalışanlarınızın potansiyelini açığa çıkaran ve İK süreçlerinizi stratejik bir güce dönüştüren ekosistemi keşfedin.
            <strong className="ml-2">Aşağı kaydırarak bu dönüşüme tanık olun.</strong>
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative flex items-center rounded-2xl border border-gray-200 bg-white/70 p-2 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-800/70">
              <button
                onClick={() => onSelect('hr')}
                className={`relative z-10 flex items-center gap-3 rounded-xl px-6 py-3 text-lg font-bold transition-all duration-300 ${
                  selectedPath === 'hr' ? 'text-white' : 'text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                }`}
              >
                <Building2 className="h-5 w-5" />
                <span className="hidden sm:inline">İnsan Kaynakları</span>
                <span className="sm:hidden">İK</span>
              </button>

              <button
                onClick={() => onSelect('employee')}
                className={`relative z-10 flex items-center gap-3 rounded-xl px-6 py-3 text-lg font-bold transition-all duration-300 ${
                  selectedPath === 'employee' ? 'text-white' : 'text-gray-700 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                }`}
              >
                <Users className="h-5 w-5" />
                <span className="hidden sm:inline">Çalışan Deneyimi</span>
                <span className="sm:hidden">Çalışan</span>
              </button>

              <motion.div
                className={`absolute top-2 h-[calc(100%-16px)] rounded-xl ${
                  selectedPath === 'hr' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}
                animate={{ left: selectedPath === 'hr' ? '8px' : '50%', width: selectedPath === 'hr' ? 'calc(50% - 4px)' : 'calc(50% - 4px)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


