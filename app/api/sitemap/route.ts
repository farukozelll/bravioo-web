import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bravioo.com';

const staticPages = [
  { path: '', priority: 1.0, changefreq: 'daily' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/features', priority: 0.9, changefreq: 'weekly' },
  { path: '/customers', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/meeting', priority: 0.8, changefreq: 'monthly' },
  { path: '/brands', priority: 0.7, changefreq: 'monthly' },
  { path: '/why-bravioo', priority: 0.7, changefreq: 'monthly' },
  { path: '/stories', priority: 0.6, changefreq: 'weekly' },
  { path: '/legal/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/legal/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/legal/cookies', priority: 0.5, changefreq: 'yearly' },
  { path: '/legal/accessibility', priority: 0.5, changefreq: 'yearly' },
];

const locales = ['en', 'tr'];

function generateSitemapXML() {
  const urls: string[] = [];

  // Generate URLs for each locale and page
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      const url = `${SITE_URL}/${locale}${page.path}`;
      const alternateLinks = locales
        .map((altLocale) => {
          const altUrl = `${SITE_URL}/${altLocale}${page.path}`;
          return `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}" />`;
        })
        .join('\n');

      urls.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternateLinks}
  </url>`);
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('')}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemapXML();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
