import { Metadata } from 'next';

/**
 * Helper functions to generate metadata for different page types
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bravioo.com';
const SITE_NAME = 'Bravioo';

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  locale?: string;
  keywords?: string[];
  noindex?: boolean;
}

/**
 * Generate complete metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  locale = 'en_US',
  keywords = [],
  noindex = false,
}: PageMetadataProps): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    'employee recognition',
    'employee rewards',
    'workplace culture',
    'employee engagement',
    'hr software',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type: 'website',
      locale,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bravioo',
      creator: '@bravioo',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en${path}`,
        tr: `${SITE_URL}/tr${path}`,
      },
    },
  };
}

/**
 * Generate metadata for article/blog pages
 */
export function generateArticleMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  locale = 'en_US',
  publishedTime,
  modifiedTime,
  author = 'Bravioo Team',
  tags = [],
}: PageMetadataProps & {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [...tags],
    authors: [{ name: author }],
    openGraph: {
      type: 'article',
      locale,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors: [author],
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bravioo',
      creator: '@bravioo',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Common OG images for different sections
 */
export const OG_IMAGES = {
  home: '/og-image.png',
  pricing: '/og-images/pricing.png',
  features: '/og-images/features.png',
  customers: '/og-images/customers.png',
  about: '/og-images/about.png',
  contact: '/og-images/contact.png',
} as const;

/**
 * Get localized metadata based on locale
 */
export function getLocalizedMetadata(locale: string) {
  const isTurkish = locale === 'tr' || locale === 'tr_TR';

  return {
    locale: isTurkish ? 'tr_TR' : 'en_US',
    siteName: SITE_NAME,
    description: isTurkish
      ? 'Bravioo ile çalışan deneyimini dönüştürün. Kapsamlı çalışan takdir ve ödül platformu ile bağlılığı, tutmayı ve verimliliği artırın.'
      : 'Transform your workplace culture with Bravioo\'s comprehensive employee recognition and rewards platform. Boost engagement, retention, and productivity.',
    keywords: isTurkish
      ? [
          'çalışan takdir',
          'çalışan ödülleri',
          'işyeri kültürü',
          'çalışan bağlılığı',
          'ik yazılımı',
          'çalışan motivasyonu',
          'takım takdiri',
          'personel elde tutma',
        ]
      : [
          'employee recognition',
          'employee rewards',
          'workplace culture',
          'employee engagement',
          'hr software',
          'employee motivation',
          'team recognition',
          'employee retention',
        ],
  };
}


