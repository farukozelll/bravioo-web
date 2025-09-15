import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'tr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    '/': '/',
    '/pricing': {
      en: '/pricing',
      tr: '/fiyatlandirma'
    },
    '/contact': {
      en: '/contact',
      tr: '/iletisim'
    },
    '/brands': {
      en: '/brands',
      tr: '/markalar'
    },
    '/privacy': {
      en: '/privacy',
      tr: '/gizlilik'
    },
    '/terms': {
      en: '/terms',
      tr: '/sartlar'
    },
    '/cookies': {
      en: '/cookies',
      tr: '/cerezler'
    }
  }
});
