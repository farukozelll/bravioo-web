"use client";

import React from 'react';
import Link from 'next/link';
import stories from '@/data/brand-stories.json';
import Image from 'next/image';
import { useLocale } from 'next-intl';
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
  const locale = useLocale();
  const items = (stories as (Story & { content?: string })[])
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const getReadingMinutes = (html?: string) => {
    if (!html) return 1;
    const text = html.replace(/<[^>]+>/g, ' ').trim();
    const words = text ? text.split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8">Marka Hikayeleri</h2>
        <div className="divide-y divide-slate-200 dark:divide-gray-700">
          {items.map((s) => {
            const minutes = getReadingMinutes((s as any).content);
            return (
              <article key={s.slug} className="py-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                  <Link href={`/${locale}/stories/${s.slug}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {s.title}
                  </Link>
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-gray-300 mb-4">
                  <span>{new Date(s.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{minutes} dk okuma</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 border border-slate-200 dark:border-gray-700">
                    {s.category}
                  </span>
                </div>

                {/* Cover */}
                {s.coverImage && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 dark:border-gray-700">
                    <Image 
                      src={s.coverImage} 
                      width={1200} 
                      height={675} 
                      alt={s.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* Excerpt */}
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed line-clamp-3 mb-3">
                  {s.excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-gray-400">{s.brand}</span>
                  <Link href={`/${locale}/stories/${s.slug}`} className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Oku →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
