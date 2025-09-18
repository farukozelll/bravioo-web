# Bravioo Web

Modern Next.js 14 (App Router) çok dilli (next-intl) kurumsal web uygulaması.

## Proje Yapısı

```
app/
  layout.tsx                 -> Global `<html>` ve kök sağlayıcılar
  page.tsx                   -> Kök yönlendirme (genelde locale'ye)
  [locale]/                  -> Dil kök segmenti (tr, en)
    layout.tsx               -> Locale layout + Theme + next-intl provider
    page.tsx                 -> Ana sayfa (locale)
    features/                -> Özellikler
    pricing/                 -> Fiyatlandırma (alt bölümler: brands, employer)
    brands/                  -> Markalar
    customers/               -> Müşteriler
    stories/                 -> Hikayeler
    contact/                 -> İletişim
    meeting/                 -> Demo toplantısı
    legal/                   -> Hukuki sayfalar

components/                  -> Ortak bileşenler (header, footer, ui, analytics ...)
contexts/                    -> Tema context (EnhancedThemeProvider)
data/                        -> JSON/static veri
i18n/                        -> next-intl routing & request ayarları
lib/                         -> Yardımcı kütüphaneler (seo, zod, utils)
messages/                    -> Çeviri dosyaları (tr.json, en.json)
public/                      -> Statik dosyalar, görseller
tailwind.config.js           -> Tailwind (darkMode: 'class')
```

## Tema (Dark/Light/System)

- `contexts/enhanced-theme-context.tsx` ile system varsayılanı desteklenir.
- `app/layout.tsx` ve `app/[locale]/layout.tsx` içinde `EnhancedThemeProvider defaultTheme="system"` etkin.
- Tailwind dark sınıfları proje genelinde kullanılabilir (dark:...)

## i18n (next-intl)

- `i18n/routing.ts` ve `i18n/request.ts` üzerinden diller yönetilir.
- Çeviri anahtarları `messages/tr.json` ve `messages/en.json` içinde.
- Bileşenlerde `useTranslations('namespace')` kullanılır.

## Locale'li Linkler

- Sayfa içi linkler `useLocale()` ile `/${locale}/...` şeklinde oluşturulmalıdır.
- Örnek: `Link href={\`/${locale}/stories\`}`

## Geliştirme

- Node 18+
- `npm i`
- `npm run dev`

## Notlar

- Analytics ve çerez yönetimi `components/analytics.tsx` ve `components/consent-manager.tsx` içinde.
- Tema tercihleri `localStorage('theme')` ile saklanır; system değişiklikleri dinlenir.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
