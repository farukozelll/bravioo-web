'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function LovedBySection() {
  return (
    <section className="py-10 md:py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 dark:text-white leading-tight">
              Türkiye’nin En Sevilen
              <br className="hidden sm:block" />
              Kurumsal Çalışan Deneyimi Platformu
            </h1>
            <p className="mt-3 max-w-2xl text-ink-600 dark:text-gray-300">
              Çalışan deneyimini ölçen, geliştiren ve ödüllendiren modern bir altyapı.
            </p>
          </div>
          {/* Avatars + Counter pill */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/80 shadow-sm px-3 py-1">
            <div className="flex -space-x-2">
              {["https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"].map((src, i) => (
                <span key={i} className="relative inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900 overflow-hidden">
                  <Image src={src} alt={`Kullanıcı avatar ${i+1}`} fill className="object-cover" sizes="24px" />
                </span>
              ))}
            </div>
            <span className="text-xs font-semibold text-ink-700 dark:text-gray-200">+50.000 Kullanıcı</span>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Mobile: Single column layout, Desktop: Complex grid */}
          
          {/* Mobile: First image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:hidden h-48 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800"
          >
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop"
                alt="Çalışan mutluluğu"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Mobile: Second image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:hidden h-48 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800"
          >
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
                alt="Ofis ortamı"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Mobile: Rating card and stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden grid grid-cols-2 gap-4"
          >
            <div className="h-32 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800">
              <div className="relative h-full w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                  alt="Toplantı" 
                  fill 
                  className="object-cover" 
                  sizes="50vw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>
            <div className="h-32 rounded-2xl border border-slate-200 dark:border-gray-700 bg-[#3A9355] p-4 flex flex-col justify-between">
              <div className="flex items-center gap-1 justify-center">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-center text-white">
                <div className="text-lg font-bold">4.9</div>
                <div className="text-xs">(2.000+ yorum)</div>
              </div>
            </div>
          </motion.div>

          {/* Desktop: Left portrait spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block md:col-span-4 md:row-span-2 h-[280px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800"
          >
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop"
                alt="Çalışan mutluluğu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 32vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Desktop: Top right single image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="hidden md:block md:col-span-8 h-[135px] lg:h-[195px] xl:h-[240px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800"
          >
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
                alt="Ofis ortamı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 68vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Desktop: Bottom right composite */}
          <div className="hidden md:block md:col-span-8 h-[135px] lg:h-[195px] xl:h-[240px]">
            <div className="grid grid-cols-6 gap-3 lg:gap-5 h-full">
              {/* Left image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-2 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800 h-full"
              >
                <div className="relative h-full w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                    alt="Toplantı" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 1024px) 20vw, 18vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Center image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="col-span-3 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 bg-gray-100 dark:bg-gray-800 h-full"
              >
                <div className="relative h-full w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop" 
                    alt="Ekip çalışması" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 1024px) 30vw, 28vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Rating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1 rounded-2xl border border-slate-200 dark:border-gray-700 bg-[#3A9355] p-2 lg:p-4 flex flex-col justify-between h-full"
              >
                <div className="flex items-center gap-1 justify-center">
                  {[0,1,2,3,4].map((i) => (
                    <Star key={i} className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-center text-white">
                  <div className="text-lg lg:text-xl font-bold">4.9</div>
                  <div className="text-xs lg:text-sm">(2.000+ yorum)</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats row removed as requested */}
      </div>
    </section>
  );
}


