import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const defaultSEO = {
  title: 'Bravioo - Employee Recognition & Rewards Platform',
  description: 'Transform your workplace culture with Bravioo\'s comprehensive employee recognition and rewards platform. Boost engagement, retention, and productivity.',
  keywords: [
    'employee recognition',
    'employee rewards',
    'workplace culture',
    'employee engagement',
    'hr software',
    'employee motivation',
    'team recognition',
    'employee retention',
  ],
  image: '/og-image.png',
  url: 'https://bravioo.com',
  locale: 'en_US',
  type: 'website' as const,
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  locale = 'en_US',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
}: SEOProps = {}): Metadata {
  const seo = {
    title: title ? `${title} | Bravioo` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: [...defaultSEO.keywords, ...keywords],
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    locale,
    type,
  };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: author ? [{ name: author }] : [{ name: 'Bravioo Team' }],
    creator: 'Bravioo',
    publisher: 'Bravioo',
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type: seo.type,
      locale: seo.locale,
      url: seo.url,
      siteName: 'Bravioo',
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bravioo',
      creator: '@bravioo',
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
    alternates: {
      canonical: seo.url,
      languages: {
        'en': `${seo.url}/en`,
        'tr': `${seo.url}/tr`,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  };
}

// JSON-LD structured data generators
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bravioo',
    description: 'Employee recognition and rewards platform',
    url: 'https://bravioo.com',
    logo: 'https://bravioo.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90 538 230 67 71',
      contactType: 'customer service',
      availableLanguage: ['English', 'Turkish'],
    },
    sameAs: [
      'https://twitter.com/bravioo',
      'https://linkedin.com/company/bravioo',
      'https://facebook.com/bravioo',
    ],
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bravioo',
    url: 'https://bravioo.com',
    description: 'Employee recognition and rewards platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bravioo.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateProductJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Bravioo Employee Recognition Platform',
    description: 'Comprehensive employee recognition and rewards platform',
    url: 'https://bravioo.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '5',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '5',
        priceCurrency: 'USD',
        unitCode: 'MON',
        unitText: 'per user per month',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'Peer-to-peer recognition',
      'Global rewards catalog',
      'Advanced analytics',
      'Slack & Teams integration',
      'Custom branding',
      'API access',
    ],
  };
}

export function generateBreadcrumbJsonLd(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
