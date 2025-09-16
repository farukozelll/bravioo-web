import React from 'react';
import stories from '@/data/brand-stories.json';

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

export default function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (async () => {
    const { slug } = await params;
    const items = stories as Story[];
    const story = items.find((s) => s.slug === slug);

    if (!story) {
      return <main className="min-h-screen flex items-center justify-center text-slate-600 dark:text-gray-300">Hikaye bulunamadı.</main>;
    }

    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <article className="mx-auto max-w-3xl px-6 py-12">
          <div className="text-xs text-slate-500 dark:text-gray-400 mb-2">{new Date(story.publishedAt).toLocaleDateString()}</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">{story.title}</h1>
          <div className="text-sm text-slate-500 dark:text-gray-400 mb-6">{story.brand} • {story.category}</div>
          {story.coverImage && (
            <div className="mb-6">
              <img src={story.coverImage} alt={story.title} className="w-full rounded-xl" />
            </div>
          )}
          <div className="prose prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: story.content }} />
        </article>
      </main>
    );
  })();
}
