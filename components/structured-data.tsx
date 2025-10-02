'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any> | Record<string, any>[];
}

/**
 * Component to inject JSON-LD structured data into the page
 * Helps search engines understand your content better
 */
export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Only run on client side
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

/**
 * Pre-built structured data components for common use cases
 */

interface OrganizationData {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  foundingDate?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name = 'Bravioo',
  description = 'Employee recognition and rewards platform that transforms workplace culture',
  url = 'https://bravioo.com',
  logo = 'https://bravioo.com/Bravioo_logo.png',
  foundingDate = '2023',
  telephone = '+90 538 230 67 71',
  email = 'info@bravioo.com',
  address,
  sameAs = [
    'https://twitter.com/bravioo',
    'https://linkedin.com/company/bravioo',
    'https://facebook.com/bravioo',
    'https://instagram.com/bravioo.app',
  ],
}: OrganizationData) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo,
    foundingDate,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      email,
      contactType: 'customer service',
      availableLanguage: ['English', 'Turkish'],
      areaServed: 'Worldwide',
    },
    sameAs,
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
  };

  return <StructuredData data={schema} />;
}

export function WebsiteSchema({
  name = 'Bravioo',
  url = 'https://bravioo.com',
  description = 'Employee recognition and rewards platform',
}: {
  name?: string;
  url?: string;
  description?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'Bravioo',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={schema} />;
}

interface ProductSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  image?: string;
  price?: string;
  priceCurrency?: string;
  ratingValue?: string;
  ratingCount?: string;
  features?: string[];
}

export function ProductSchema({
  name = 'Bravioo Employee Recognition Platform',
  description = 'Comprehensive employee recognition and rewards platform that boosts engagement, retention, and productivity',
  url = 'https://bravioo.com',
  image = 'https://bravioo.com/Bravioo_logo.png',
  price = '5',
  priceCurrency = 'USD',
  ratingValue = '4.8',
  ratingCount = '127',
  features = [
    'Peer-to-peer recognition',
    'Global rewards catalog',
    'Advanced analytics & reporting',
    'Slack & Microsoft Teams integration',
    'Custom branding',
    'Mobile apps (iOS & Android)',
    'Multi-language support',
    'API access',
    'SSO & SAML support',
    'Dedicated customer success manager',
  ],
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'HumanResourcesApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price,
        priceCurrency,
        unitCode: 'MON',
        unitText: 'per user per month',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          minValue: 50,
        },
      },
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      ratingCount,
      bestRating: '5',
      worstRating: '1',
    },
    featureList: features,
    softwareVersion: '2.0',
    releaseNotes: 'Latest version with enhanced analytics and mobile experience',
  };

  return <StructuredData data={schema} />;
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={schema} />;
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
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

  return <StructuredData data={schema} />;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Bravioo Team',
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bravioo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bravioo.com/Bravioo_logo.png',
      },
    },
  };

  return <StructuredData data={schema} />;
}

export function LocalBusinessSchema({
  name = 'Bravioo',
  description = 'Employee recognition and rewards platform',
  telephone,
  email,
  address,
  priceRange = '$$',
  openingHours = ['Mo-Fr 09:00-18:00'],
}: {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  priceRange?: string;
  openingHours?: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    telephone,
    email,
    priceRange,
    openingHours,
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
  };

  return <StructuredData data={schema} />;
}


