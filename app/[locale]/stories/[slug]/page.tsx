import React from 'react';
import stories from '@/data/brand-stories.json';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
interface Story {
  slug: string;
  title: string;
  brand: string;
  category: string;
  coverImage?: string;
  excerpt: string;
  publishedAt: string;
  content: string;
}

export default function StoryDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  return (async () => {
    const { slug, locale } = await params;
    const items = stories as Story[];
    const story = items.find((s) => s.slug === slug);

    if (!story) {
      return (
        <main className="min-h-screen flex items-center justify-center text-slate-600 dark:text-gray-300">Hikaye bulunamadı.</main>
      );
    }

    const related = items.filter((s) => s.slug !== slug && (s.category === story.category || s.brand === story.brand)).slice(0, 3);

    const plainText = story.content.replace(/<[^>]+>/g, ' ');
    const wordCount = plainText.trim().split(/\s+/).length;
    const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));

    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
          <article className="mx-auto max-w-3xl px-6 py-10 sm:py-12">
            {/* Back Button */}
            <div className="mb-6 flex items-center justify-between">
              <a href={`/${locale}/stories`} className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 rounded-full px-3 py-1.5 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Tüm Hikayeler
              </a>
            </div>

            {/* Title & Meta */}
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{story.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-gray-300 mb-6">
              <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" />{new Date(story.publishedAt).toLocaleDateString()}</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{readingMinutes} dk okuma</span>
              <span className="inline-flex items-center gap-2"><Tag className="w-4 h-4" />{story.category}</span>
              <span className="inline-flex items-center gap-2"><Tag className="w-4 h-4" />{story.brand}</span>
            </div>

            {story.coverImage && (
              <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 shadow-sm">
                <Image src={story.coverImage} width={1000} height={1000} alt={story.title} className="w-full h-auto object-cover" />
              </div>
            )}

            <div className="prose prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: story.content }} />
          </article>

          {related.length > 0 && (
            <section className="mx-auto max-w-6xl px-6 pb-12">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">İlgili Hikayeler</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {related.map((s) => (
                  <a key={s.slug} href={`../stories/${s.slug}`} className="rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                    {s.coverImage && (
                      <div className="aspect-[16/9]">
                        <Image src={s.coverImage} width={1000} height={1000} alt={s.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">{new Date(s.publishedAt).toLocaleDateString()}</div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">{s.title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </main>
    );
  })();
}
