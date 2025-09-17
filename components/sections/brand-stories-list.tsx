'use client';

import React from 'react';
import Link from 'next/link';
import stories from '@/data/brand-stories.json';
import Image from 'next/image';
interface Story {
  slug: string;
  title: string;
  brand: string;
  category: string;
  coverImage?: string;
  excerpt: string;
  publishedAt: string;
}

export function BrandStoriesList() {
  const items = stories as Story[];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8">Marka Hikayeleri</h2>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {items.map((s) => (
            <article key={s.slug} className="rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
              {s.coverImage && (
                <div className="aspect-[16/9] overflow-hidden">
                  <Image src={s.coverImage} alt={s.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">{new Date(s.publishedAt).toLocaleDateString()}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-300 mb-4">{s.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-gray-400">
                  <span>{s.brand}</span>
                  <span>{s.category}</span>
                </div>
                <div className="mt-4">
                  <Link href={`/stories/${s.slug}`} className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Oku →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
