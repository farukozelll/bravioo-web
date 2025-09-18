## Project Structure Map

app/
  layout.tsx
  page.tsx
  [locale]/
    layout.tsx
    page.tsx
    about/
      _components/
      page.tsx
    brands/
      _components/
      page.tsx
    contact/
      _components/
      page.tsx
    customers/
      _components/
      page.tsx
    features/
      _components/
      [slug]/page.tsx
      page.tsx
    meeting/
      _components/
      page.tsx
    pricing/
      _components/
      brands/
        _components/
        page.tsx
      employer/
        _components/
        page.tsx
      page.tsx
    stories/
      _components/
      [slug]/page.tsx
      page.tsx
    why-bravioo/
      _components/
      page.tsx

components/
  analytics.tsx, footer.tsx, header.tsx, ui/*, ...

contexts/
  enhanced-theme-context.tsx, theme-context.tsx

data/
  *.json and *.ts data sources

i18n/
  routing.ts, request.ts

lib/
  seo.ts, utils.ts, zod-schemas.ts

messages/
  en.json, tr.json

public/
  images/* and assets

scripts/
  maintenance and audit utilities

tailwind.config.js
eslint.config.mjs
next.config.ts
README.md

---

This document is generated to provide a quick high-level map of the repository for onboarding and navigation.

