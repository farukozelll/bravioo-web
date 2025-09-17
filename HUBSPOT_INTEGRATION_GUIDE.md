# 🚀 HubSpot Entegrasyon Rehberi - Bravioo Web

Bu rehber, Bravioo Web projesinde HubSpot entegrasyonunun nasıl kurulacağını ve kullanılacağını detaylı olarak açıklar.

## 📋 İçindekiler

1. [Mevcut Entegrasyon Durumu](#mevcut-entegrasyon-durumu)
2. [HubSpot Kurulumu](#hubspot-kurulumu)
3. [Environment Variables](#environment-variables)
4. [Form Entegrasyonu](#form-entegrasyonu)
5. [Tracking Script](#tracking-script)
6. [API Kullanımı](#api-kullanımı)
7. [Gelişmiş Özellikler](#gelişmiş-özellikler)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Mevcut Entegrasyon Durumu

✅ **Zaten Implementli:**
- HubSpot Form Submission API (`lib/hubspot.ts`)
- Contact form entegrasyonu (`app/api/contact/route.ts`)
- Tracking script loader
- GDPR uyumlu consent management
- UTM parameter tracking

📁 **İlgili Dosyalar:**
```
lib/hubspot.ts              # Ana HubSpot entegrasyon katmanı
app/api/contact/route.ts     # Contact form API endpoint
components/contact-form-tabs.tsx # Contact form bileşeni
lib/zod-schemas.ts          # Form validation schemas
```

---

## ⚙️ HubSpot Kurulumu

### 1. HubSpot Portal Kurulumu

1. **HubSpot hesabınıza giriş yapın**
2. **Settings > Integrations > Private Apps** bölümüne gidin
3. **Create a private app** butonuna tıklayın
4. Gerekli permissions'ları seçin:
   - `crm.objects.contacts.write`
   - `forms`
   - `timeline`

### 2. Form ID'lerini Alın

1. **Marketing > Forms** bölümüne gidin
2. Form'u açın ve URL'den Form ID'yi kopyalayın
3. Portal ID'yi Settings > Account Setup > Account Information'dan alın

---

## 🔐 Environment Variables

`.env.local` dosyanızı oluşturun:

```bash
# HubSpot Configuration
HS_PORTAL_ID=12345678
HS_FORM_ID=abcd-1234-efgh-5678

# Multiple Forms (Optional)
HS_CONTACT_FORM_ID=contact-form-id
HS_DEMO_FORM_ID=demo-form-id
HS_MEETING_FORM_ID=meeting-form-id

# HubSpot API Key (Advanced)
HS_API_KEY=your-api-key-here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**🚨 Güvenlik Notu:** API anahtarlarını asla client-side'da kullanmayın!

---

## 📝 Form Entegrasyonu

### Mevcut Implementation

```typescript
// lib/hubspot.ts
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
      pageUri: process.env.NEXT_PUBLIC_SITE_URL,
      pageName: 'Contact Form',
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'I agree to allow Bravioo to store and process my personal data.',
      },
    },
  };

  // Form submission logic...
}
```

### Yeni Form Ekleme

Meeting sayfası için yeni form ekleyelim:

```typescript
// components/meeting-form.tsx
'use client';

import { useState } from 'react';
import { submitHubSpotForm } from '@/lib/hubspot';

export function MeetingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await submitHubSpotForm({
        portalId: process.env.HS_PORTAL_ID!,
        formId: process.env.HS_MEETING_FORM_ID!,
        fields: {
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          company: data.company,
          phone: data.phone,
          demo_type: data.demoType, // 'quick', 'standard', 'comprehensive'
          preferred_date: data.preferredDate,
          meeting_purpose: data.purpose,
          utm_source: data.utmSource,
          utm_campaign: data.utmCampaign,
        },
      });
      
      // Success handling
    } catch (error) {
      // Error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Form JSX...
  );
}
```

---

## 📊 Tracking Script

### Client-Side Tracking

```typescript
// components/hubspot-tracking.tsx
'use client';

import { useEffect } from 'react';
import { loadHubSpotScript } from '@/lib/hubspot';

export function HubSpotTracking() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      loadHubSpotScript(process.env.NEXT_PUBLIC_HS_PORTAL_ID!);
    }
  }, []);

  return null;
}
```

### Layout'a Ekleme

```typescript
// app/layout.tsx
import { HubSpotTracking } from '@/components/hubspot-tracking';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <HubSpotTracking />
      </body>
    </html>
  );
}
```

---

## 🔗 API Kullanımı

### Contact Creation

```typescript
// lib/hubspot-api.ts
export async function createHubSpotContact(contactData: {
  email: string;
  firstname: string;
  lastname: string;
  company?: string;
  phone?: string;
}) {
  const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: contactData,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create HubSpot contact');
  }

  return response.json();
}
```

### Deal Creation (Meeting Request)

```typescript
export async function createHubSpotDeal(dealData: {
  dealname: string;
  amount?: number;
  dealstage: string;
  contactId: string;
}) {
  const response = await fetch(`https://api.hubapi.com/crm/v3/objects/deals`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: dealData,
      associations: [
        {
          to: { id: dealData.contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }],
        },
      ],
    }),
  });

  return response.json();
}
```

---

## 🚀 Gelişmiş Özellikler

### 1. Progressive Profiling

```typescript
// lib/hubspot-progressive.ts
export async function getContactByEmail(email: string) {
  const response = await fetch(
    `https://api.hubapi.com/crm/v3/objects/contacts/search`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                operator: 'EQ',
                value: email,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  return data.results[0] || null;
}
```

### 2. Webhook Handler

```typescript
// app/api/hubspot/webhook/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // HubSpot webhook signature verification
  const signature = request.headers.get('x-hubspot-signature');
  
  // Process webhook data
  switch (body.subscriptionType) {
    case 'contact.creation':
      // Handle new contact
      break;
    case 'deal.creation':
      // Handle new deal
      break;
    default:
      console.log('Unknown webhook type:', body.subscriptionType);
  }

  return NextResponse.json({ success: true });
}
```

### 3. Smart Lists Integration

```typescript
// lib/hubspot-lists.ts
export async function addContactToList(contactId: string, listId: string) {
  const response = await fetch(
    `https://api.hubapi.com/contacts/v1/lists/${listId}/add`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vids: [contactId],
      }),
    }
  );

  return response.json();
}
```

---

## 📈 Analytics ve Reporting

### Event Tracking

```typescript
// lib/hubspot-events.ts
export async function trackHubSpotEvent(
  email: string,
  eventName: string,
  properties: Record<string, any>
) {
  const response = await fetch(`https://api.hubapi.com/events/v3/send`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      eventName,
      properties,
      occurredAt: new Date().toISOString(),
    }),
  });

  return response.json();
}

// Usage examples
await trackHubSpotEvent('user@example.com', 'demo_requested', {
  demo_type: 'comprehensive',
  page_url: '/meeting',
  utm_source: 'google',
});

await trackHubSpotEvent('user@example.com', 'pricing_page_viewed', {
  plan_viewed: 'enterprise',
  time_spent: 120,
});
```

---

## 🛠️ Troubleshooting

### 1. Form Submission Errors

```typescript
// Error handling pattern
try {
  await submitHubSpotForm(formData);
} catch (error) {
  if (error.message.includes('400')) {
    // Invalid field data
    console.error('Form validation error:', error);
  } else if (error.message.includes('401')) {
    // Authentication error
    console.error('HubSpot authentication failed');
  } else if (error.message.includes('429')) {
    // Rate limiting
    console.error('Rate limit exceeded');
  }
  
  // Fallback to email notification
  await sendFallbackEmail(formData);
}
```

### 2. CORS Issues

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/hubspot/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};
```

### 3. Environment Variables Debug

```typescript
// lib/debug-hubspot.ts
export function debugHubSpotConfig() {
  console.log('HubSpot Configuration:');
  console.log('Portal ID:', process.env.HS_PORTAL_ID ? '✅ Set' : '❌ Missing');
  console.log('Form ID:', process.env.HS_FORM_ID ? '✅ Set' : '❌ Missing');
  console.log('API Key:', process.env.HS_API_KEY ? '✅ Set' : '❌ Missing');
  console.log('Site URL:', process.env.NEXT_PUBLIC_SITE_URL || '❌ Missing');
}
```

---

## 📋 Checklist

### Kurulum Kontrolü

- [ ] HubSpot Portal ID alındı
- [ ] Form ID'leri belirlendi
- [ ] Environment variables ayarlandı
- [ ] API key alındı (gerekiyorsa)
- [ ] Form submission test edildi
- [ ] Tracking script yüklendi
- [ ] GDPR consent management aktif
- [ ] Error handling implementli
- [ ] Fallback mechanisms hazır

### Test Senaryoları

- [ ] Contact form submission
- [ ] Demo request submission
- [ ] Meeting booking
- [ ] UTM parameter tracking
- [ ] Error scenarios
- [ ] Network failures
- [ ] Rate limiting
- [ ] Mobile compatibility

---

## 🔗 Yararlı Linkler

- [HubSpot Forms API Documentation](https://developers.hubspot.com/docs/api/marketing/forms)
- [HubSpot CRM API Documentation](https://developers.hubspot.com/docs/api/crm/understanding-the-crm)
- [HubSpot Webhooks Guide](https://developers.hubspot.com/docs/api/webhooks)
- [HubSpot Tracking Code](https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code)

---

Bu rehber, Bravioo Web projesinde HubSpot entegrasyonunun tüm yönlerini kapsar. Herhangi bir sorun yaşarsanız, yukarıdaki troubleshooting bölümünü kontrol edin veya HubSpot geliştirici dokümantasyonuna başvurun.
