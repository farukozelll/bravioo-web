'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { hasConsentFor } from '@/lib/consent';
import { loadHubSpotScript } from '@/lib/hubspot';

// Google Analytics 4
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (hasConsentFor('analytics') && typeof window !== 'undefined') {
      // Track page views
      window.gtag?.('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  if (!hasConsentFor('analytics')) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500,
            });
            
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// HubSpot Analytics
export function HubSpotAnalytics({ portalId }: { portalId: string }) {
  useEffect(() => {
    if (hasConsentFor('marketing') && typeof window !== 'undefined') {
      loadHubSpotScript(portalId).catch(console.error);
    }
  }, [portalId]);

  if (!hasConsentFor('marketing')) {
    return null;
  }

  return null; // Script is loaded dynamically
}

// Microsoft Clarity
export function MicrosoftClarity({ clarityId }: { clarityId: string }) {
  if (!hasConsentFor('analytics')) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
}

// Analytics Event Tracking
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (hasConsentFor('analytics') && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // HubSpot Events
  if (hasConsentFor('marketing') && window._hsq) {
    window._hsq.push(['trackEvent', {
      id: eventName,
      ...parameters,
    }]);
  }

  // Microsoft Clarity
  if (hasConsentFor('analytics') && window.clarity) {
    window.clarity('event', eventName);
  }
};

// Common event trackers
export const analytics = {
  // Page view tracking
  pageView: (path: string) => {
    trackEvent('page_view', {
      page_path: path,
    });
  },

  // CTA click tracking
  ctaClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      location,
    });
  },

  // Form submission tracking
  formSubmit: (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      form_name: formName,
      success,
    });
  },

  // Pricing CTA tracking
  pricingCta: (plan: string, action: 'view' | 'click') => {
    trackEvent('pricing_cta', {
      plan,
      action,
    });
  },

  // Language switch tracking
  localeSwitch: (from: string, to: string) => {
    trackEvent('locale_switch', {
      from_locale: from,
      to_locale: to,
    });
  },

  // Video play tracking
  videoPlay: (videoTitle: string) => {
    trackEvent('video_play', {
      video_title: videoTitle,
    });
  },

  // Download tracking
  download: (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
    });
  },

  // Search tracking
  search: (query: string, results: number) => {
    trackEvent('search', {
      search_term: query,
      results_count: results,
    });
  },
};

// Extend window type for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
    clarity?: (...args: any[]) => void;
  }
}
