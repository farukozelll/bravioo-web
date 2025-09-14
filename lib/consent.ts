import { ConsentData } from './zod-schemas';

export const CONSENT_COOKIE_NAME = 'bravioo-consent';
export const CONSENT_VERSION = '1.0';

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'functional';

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: Date;
  version: string;
}

export const defaultConsent: ConsentState = {
  necessary: true, // Always true, can't be disabled
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: new Date(),
  version: CONSENT_VERSION,
};

// Get consent from localStorage or cookies
export function getConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  try {
    // Try localStorage first
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        timestamp: new Date(parsed.timestamp),
      };
    }

    // Fallback to cookies
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`))
      ?.split('=')[1];

    if (cookieValue) {
      const parsed = JSON.parse(decodeURIComponent(cookieValue));
      return {
        ...parsed,
        timestamp: new Date(parsed.timestamp),
      };
    }
  } catch (error) {
    console.error('Error reading consent:', error);
  }

  return null;
}

// Save consent to localStorage and optionally cookies
export function saveConsent(consent: ConsentState, useCookies: boolean = true) {
  if (typeof window === 'undefined') return;

  try {
    const consentString = JSON.stringify(consent);

    // Save to localStorage
    localStorage.setItem(CONSENT_COOKIE_NAME, consentString);

    // Optionally save to cookies for server-side access
    if (useCookies) {
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1); // 1 year

      document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
        consentString
      )}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    }

    // Trigger consent update event
    window.dispatchEvent(
      new CustomEvent('consentUpdated', { detail: consent })
    );

    // Update Google Consent Mode if available
    updateGoogleConsentMode(consent);
  } catch (error) {
    console.error('Error saving consent:', error);
  }
}

// Check if consent has been given
export function hasConsent(): boolean {
  return getConsent() !== null;
}

// Check if specific consent type is granted
export function hasConsentFor(type: keyof Omit<ConsentState, 'timestamp' | 'version'>): boolean {
  const consent = getConsent();
  return consent?.[type] === true;
}

// Update Google Consent Mode v2
export function updateGoogleConsentMode(consent: ConsentState) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
    functionality_storage: consent.functional ? 'granted' : 'denied',
    personalization_storage: consent.functional ? 'granted' : 'denied',
    security_storage: 'granted', // Always granted for security
  });
}

// Initialize Google Consent Mode with default values
export function initializeGoogleConsentMode() {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500,
  });
}

// Clear all consent data
export function clearConsent() {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(CONSENT_COOKIE_NAME);
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

  // Reset Google Consent Mode
  updateGoogleConsentMode(defaultConsent);
}

// Check if consent needs update (version changed)
export function needsConsentUpdate(): boolean {
  const consent = getConsent();
  return !consent || consent.version !== CONSENT_VERSION;
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
