'use client';

import React, { useMemo, useState } from 'react';
import stories from '@/data/brand-stories.json';

interface Story {
  slug: string;
  title: string;
  brand: string;
  category: string;
  coverImage?: string;
  excerpt: string;
  publishedAt: string;
}

export function BrandStoriesSidebar({ onSearch }: { onSearch?: (q: string) => void }) {
  const items = stories as Story[];
  const categories = useMemo(() => {
    const set = new Set(items.map((s) => s.category).filter(Boolean));
    return ['Tümü', ...Array.from(set)];
  }, [stories]);
  const [query, setQuery] = useState('');

  const featured = useMemo(() => items.slice(0, 3), [items]);

  return (
    <aside className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Ara</label>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          placeholder="Marka veya başlık..."
          className="w-full h-11 rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />
      </div>

      <div>
        <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Kategoriler</div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="px-3 py-1 rounded-full text-xs border border-slate-300 dark:border-gray-700 text-slate-700 dark:text-slate-200">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Öne Çıkanlar</div>
        <div className="space-y-4">
          {featured.map((s) => (
            <a key={s.slug} href={`/stories/${s.slug}`} className="flex gap-3 group">
              <div className="w-16 h-12 rounded-lg overflow-hidden bg-slate-200">
                {s.coverImage && <img src={s.coverImage} alt={s.title} className="w-full h-full object-cover" />}
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-500 dark:text-gray-400">{new Date(s.publishedAt).toLocaleDateString()}</div>
                <div className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-emerald-600 line-clamp-2">
                  {s.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
