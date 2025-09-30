import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ConsentManager } from '@/components/consent-manager';
import { LiveSupport } from '@/components/live-support';
// import { CookieDashboard } from '@/components/cookie-dashboard';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { GoogleAnalytics, HubSpotAnalytics, MicrosoftClarity } from '@/components/analytics';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { OrganizationSchema, WebsiteSchema, ProductSchema } from '@/components/structured-data';
// Theme provider moved to root layout
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSEOMetadata({
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-gray-900 text-neutral-900 dark:text-gray-100 transition-colors duration-300">
      <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Structured Data for SEO */}
          <OrganizationSchema />
          <WebsiteSchema />
          <ProductSchema />

          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-[9997]"
          >
            Skip to main content
          </a>

          {/* Header */}
          <Header />

          {/* Main content */}
          <div id="main-content">{children}</div>

          {/* Cookie Consent Manager */}
          <ConsentManager />

          {/* Live Support */}
          <LiveSupport />

          {/* Cookie Dashboard (Development only) */}
        {/*   {process.env.NODE_ENV === 'development' && <CookieDashboard />}
 */}
          {/* Scroll to Top */}
          <ScrollToTop />

          {/* Footer */}
          <Footer />

          {/* Analytics Scripts */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
          {process.env.NEXT_PUBLIC_HS_PORTAL_ID && (
            <HubSpotAnalytics portalId={process.env.NEXT_PUBLIC_HS_PORTAL_ID} />
          )}
          {process.env.NEXT_PUBLIC_CLARITY_ID && (
            <MicrosoftClarity clarityId={process.env.NEXT_PUBLIC_CLARITY_ID} />
          )}
        </NextIntlClientProvider>
    </div>
  );
}
