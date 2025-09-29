'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Gift, Users, BarChart3, Headset, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function BrandPartnershipSingle() {
  const locale = useLocale();

  const isTR = locale === 'tr';

  const features: Array<{ icon: React.ReactNode; titleTR: string; titleEN: string; descTR: string; descEN: string }>= [
    {
      icon: <Users className="w-5 h-5" />,
      titleTR: 'Binlerce Çalışana Erişim',
      titleEN: 'Reach Thousands of Employees',
      descTR: 'Kurumsal ağımızda markanızı hedef kitleye tanıtın.',
      descEN: 'Promote your brand across our corporate employee network.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      titleTR: 'Gelişmiş Pazarlama Araçları',
      titleEN: 'Advanced Marketing Tools',
      descTR: 'Performans takibi, kampanya ve görünürlük optimizasyonu.',
      descEN: 'Performance tracking, campaigns and visibility optimization.'
    },
    {
      icon: <Headset className="w-5 h-5" />,
      titleTR: 'Öncelikli Destek',
      titleEN: 'Priority Support',
      descTR: 'Hızlı geri dönüş ve öncelikli operasyon desteği.',
      descEN: 'Fast response and prioritized operational support.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          >
            {isTR ? 'Marka Partnerliği' : 'Brand Partnership'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {isTR
              ? 'Tek, basit ve ücretsiz program. Piyasada bulunmayan bir indirim sağlayın, binlerce çalışana ulaşın.'
              : 'One simple, free program. Offer a unique discount and reach thousands of employees.'}
          </motion.p>
        </div>

        {/* Single Program Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-6 sm:p-8"
        >
          {/* Free Badge */}
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-bold w-max mx-auto mb-6 shadow-lg">
            <Gift className="w-5 h-5" />
            <span>{isTR ? 'ÜCRETSİZ' : 'FREE'}</span>
          </div>

          {/* Requirement Box */}
          <div className="flex items-start gap-3 p-4 rounded-2xl border border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20 mb-8">
            <ShieldCheck className="w-5 h-5 text-yellow-600" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {isTR ? 'Zorunlu Şart' : 'Requirement'}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {isTR
                  ? 'Sadece Bravioo’da geçerli, piyasada olmayan özel bir indirim oranı sunmalısınız.'
                  : 'Offer a unique discount available only via Bravioo (not elsewhere).'}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-yellow-600 mb-1">
                  {feature.icon}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {isTR ? feature.titleTR : feature.titleEN}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {isTR ? feature.descTR : feature.descEN}
                </p>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-8">
            <div className="font-semibold text-gray-900 dark:text-white mb-3">
              {isTR ? 'Neler Sunuyoruz' : 'What You Get'}
            </div>
            <ul className="space-y-2">
              {[
                isTR ? 'Tek program, hızlı kurulum' : 'Single program, quick setup',
                isTR ? 'Gizli ücret ve taahhüt yok' : 'No hidden fees, no commitments',
                isTR ? 'Raporlama ve temel analitik' : 'Reporting and basic analytics',
                isTR ? 'Mobil uygulama erişimi' : 'Mobile app access',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center">
            <Link
              href={`/${locale}/meeting`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold transition-all shadow-md hover:shadow-lg"
            >
              {isTR ? 'Ücretsiz Katılın' : 'Join Free'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


