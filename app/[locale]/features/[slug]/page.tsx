import React from 'react';
import { notFound } from 'next/navigation';
import { FEATURES } from '@/data/features';
import { FeatureSections } from '@/components/sections/feature-sections';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default async function FeaturePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const feature = FEATURES.find((f) => f.slug === slug);
  if (!feature) return notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        <section className="mx-auto max-w-7xl px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href={`/${locale}/features`} className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Özelliklere geri dön</span>
            </Link>
          </div>

          {/* Feature Sections */}
          <FeatureSections sections={feature.sections} />

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-gold-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Bu Özelliği Hemen Deneyin</h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                14 gün ücretsiz deneme ile {feature.name} modülünü test edin ve ekibinizin ihtiyaçlarına uygunluğunu değerlendirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`} className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Ücretsiz Demo
                </Link>
                <Link href={`/${locale}/features`} className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  Tüm Özellikler
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
