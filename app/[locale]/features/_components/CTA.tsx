'use client';

import React from 'react';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-gold-600 p-10 text-white lg:p-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-4 h-10 w-10 text-white/90" />
            <h3 className="text-3xl font-black leading-tight lg:text-5xl">Hazır mısınız?</h3>
            <p className="mt-4 text-lg text-white/90">14 gün boyunca tüm özellikleri sınırsız deneyin. Kredi kartı gerekmez.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-black text-emerald-700 shadow transition-all hover:bg-gray-50">
                <Zap className="h-5 w-5" /> Ücretsiz Başla
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/60 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
                <ArrowRight className="h-5 w-5" /> Satışla İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


