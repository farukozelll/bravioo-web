'use client';
import React, { useState } from 'react';
import { BrandStoriesList } from '@/app/[locale]/stories/_components/brand-stories-list';
import { BrandStoriesSidebar } from '@/app/[locale]/stories/_components/brand-stories-sidebar';

export default function StoriesPage() {
  const [query, setQuery] = useState('');

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <BrandStoriesSidebar onSearch={(q) => setQuery(q)} />
            </div>
            <div className="lg:col-span-8">
              <BrandStoriesList /* optional: pass query later for filtering */ />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
