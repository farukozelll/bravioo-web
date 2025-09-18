'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutUsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-100 mb-4">Biz Kimiz</h2>
            <p className="text-lg text-ink-700 dark:text-gray-300 leading-relaxed mb-4">
              Bravioo Teknoloji A.Ş., Albayrak iştirakli bir teknoloji kuruluşudur. İnsan odaklı ürünler geliştirir, kurumların çalışan deneyimini güçlendirir.
            </p>
            <p className="text-lg text-ink-700 dark:text-gray-300 leading-relaxed mb-6">
              Girişimcilik serüvenimiz; güçlü bir vizyon, yalın ürün geliştirme ve müşterilerimizle birlikte öğrenme kültürü üzerine kurulu. Türkiye’den dünyaya değer üretmek için çalışıyoruz.
            </p>
          
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 dark:ring-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
                alt="Bravioo office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


