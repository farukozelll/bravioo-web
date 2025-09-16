import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FEATURES } from '@/data/features';

export default function FeaturesOverviewPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">Platform Özellikleri</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-3xl">Bravioo platformunun öne çıkan modüllerini keşfedin. Her modül, etkileyici hikâyeler ve güçlü entegrasyonlarla büyümenizi hızlandırmak için tasarlandı.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <a key={f.slug} href={`/features/${f.slug}`} className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9]">
                  <img src={f.heroImage} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600">{f.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{f.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
