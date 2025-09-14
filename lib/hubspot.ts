export interface HubSpotFormData {
  portalId: string;
  formId: string;
  fields: Record<string, any>;
}

export async function submitHubSpotForm({
  portalId,
  formId,
  fields,
}: HubSpotFormData) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  const body = {
    fields: Object.entries(fields).map(([name, value]) => ({
      name,
      value: value?.toString() || '',
    })),
    context: {
      pageUri: process.env.NEXT_PUBLIC_SITE_URL || 'https://bravioo.com',
      pageName: 'Contact Form',
      hutk: '', // HubSpot user token (from cookies if available)
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'I agree to allow Bravioo to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999, // Your subscription type ID
            text: 'I agree to receive marketing communications from Bravioo.',
          },
        ],
      },
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HubSpot form submission failed: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('HubSpot form submission error:', error);
    throw error;
  }
}

// HubSpot tracking script loader
export function loadHubSpotScript(portalId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById('hs-script-loader')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'hs-script-loader';
    script.src = `//js-eu1.hs-scripts.com/${portalId}.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load HubSpot script'));

    document.head.appendChild(script);
  });
}
