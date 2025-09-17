'use client';

import { useEffect } from 'react';
import { loadHubSpotScript } from '@/lib/hubspot';

export function HubSpotTracking() {
  useEffect(() => {
    // Only load HubSpot script in production and if portal ID is configured
    if (
      process.env.NODE_ENV === 'production' && 
      process.env.NEXT_PUBLIC_HS_PORTAL_ID
    ) {
      loadHubSpotScript(process.env.NEXT_PUBLIC_HS_PORTAL_ID)
        .then(() => {
          console.log('HubSpot tracking script loaded successfully');
          
          // Track page view
          if (typeof window !== 'undefined' && (window as any).hsConversationsAPI) {
            (window as any).hsConversationsAPI.widget.load();
          }
        })
        .catch((error) => {
          console.error('Failed to load HubSpot tracking script:', error);
        });
    }
  }, []);

  // Development helper
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('HubSpot Tracking - Development Mode');
      console.log('Portal ID:', process.env.NEXT_PUBLIC_HS_PORTAL_ID || 'Not configured');
      console.log('Form ID:', process.env.NEXT_PUBLIC_HS_FORM_ID || 'Not configured');
    }
  }, []);

  return null;
}

// Extended tracking functions for specific events
export const trackHubSpotEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).hbspt) {
    (window as any).hbspt.forms.trigger(eventName, properties);
  }
};

export const trackPageView = (pageName?: string) => {
  if (typeof window !== 'undefined' && (window as any)._hsq) {
    (window as any)._hsq.push([
      'trackPageView',
      {
        pageName: pageName || document.title,
        url: window.location.href,
      },
    ]);
  }
};

export const identifyContact = (email: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any)._hsq) {
    (window as any)._hsq.push([
      'identify',
      {
        email,
        ...properties,
      },
    ]);
  }
};
