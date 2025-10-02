'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export function CTA() {
  const locale = useLocale();
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-secondary-500 to-secondary-600 p-8 text-white sm:p-10 lg:p-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-4 h-10 w-10 text-white/90" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{locale === 'tr' ? 'Hazır mısınız?' : 'Ready to get started?'}</h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90">{locale === 'tr' ? 'Çalışan deneyimini bugün daha iyi hale getirin.' : 'Improve your employee experience today.'}</p>
            <div className="mt-6 sm:mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href={`/${locale}/meeting`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-emerald-700 shadow transition-all hover:bg-gray-50">
                {locale === 'tr' ? 'Ücretsiz Demo Planla' : 'Schedule Free Demo'}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all hover:bg-white/10">
                {locale === 'tr' ? 'Satışla İletişime Geç' : 'Contact Sales'}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


