import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FEATURES } from '@/data/features';
import { FeatureSections } from '@/components/sections/feature-sections';

export default function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  return (async () => {
    const { slug } = await params;
    const feature = FEATURES.find((f) => f.slug === slug);
    if (!feature) return notFound();

    return (
      <>
        <Header />
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-6">
                <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">{feature.name}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
              <div className="lg:col-span-6">
                <img src={feature.heroImage} alt={feature.name} className="w-full rounded-2xl border border-slate-200 dark:border-gray-700 shadow" />
              </div>
            </div>
            <FeatureSections sections={feature.sections} />
          </section>
        </main>
        <Footer />
      </>
    );
  })();
}
