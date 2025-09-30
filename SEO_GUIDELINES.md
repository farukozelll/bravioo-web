# SEO Guidelines for Bravioo Website

## Overview
This document outlines the SEO best practices and configurations implemented on the Bravioo website.

## ✅ Implemented Features

### 1. Metadata Configuration

#### Root Layout (`app/layout.tsx`)
- Base metadata with all essential tags
- Open Graph tags for social media
- Twitter Card configuration
- Favicon and app icons
- Web manifest integration
- Theme color configuration

#### Locale Layout (`app/[locale]/layout.tsx`)
- Localized metadata generation
- Structured data (JSON-LD) for Organization, Website, and Product
- Alternate language tags

### 2. Structured Data (JSON-LD)

We've implemented comprehensive schema.org structured data:

- **Organization Schema**: Company information, contact details, social links
- **Website Schema**: Site-wide information and search action
- **Product Schema**: Software application details, pricing, ratings
- **Breadcrumb Schema**: Navigation hierarchy
- **FAQ Schema**: Frequently asked questions
- **Article Schema**: Blog posts and news articles
- **Local Business Schema**: Location and business hours

**Usage Example:**
```tsx
import { FAQSchema } from '@/components/structured-data';

export default function FAQPage() {
  const faqs = [
    { question: "What is Bravioo?", answer: "..." },
    // ... more FAQs
  ];
  
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* Page content */}
    </>
  );
}
```

### 3. Sitemap Generation

**Location**: `/app/api/sitemap/route.ts`

Features:
- Dynamic sitemap.xml generation
- Multi-language support (en, tr)
- Alternate language links (hreflang)
- Priority and changefreq configuration
- Automatic lastmod dates

**All Pages Included:**
- Home (priority: 1.0, daily)
- Pricing (0.9, weekly)
- Features (0.9, weekly)
- Customers (0.8, weekly)
- About (0.8, monthly)
- Contact (0.8, monthly)
- Meeting/Demo (0.8, monthly)
- Brands (0.7, monthly)
- Why Bravioo (0.7, monthly)
- Stories/Blog (0.6, weekly)
- Legal pages (0.5, yearly)

### 4. Robots.txt

**Location**: `/app/api/robots/route.ts`

Configuration:
- Allow all major search engines
- Block sensitive paths (/api/, /admin/, /_next/, /private/)
- Sitemap reference
- Crawl-delay for polite crawling
- Specific rules for Googlebot, Bingbot, Slurp
- Block aggressive/bad bots (AhrefsBot, MJ12bot, DotBot)

### 5. Security Headers

**Location**: `next.config.ts`

Implemented headers:
- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-Content-Type-Options: nosniff` - Prevent MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy
- `Permissions-Policy` - Disable unnecessary features
- `X-DNS-Prefetch-Control: on` - Performance
- `Strict-Transport-Security` - Force HTTPS (31536000 seconds = 1 year)
- `X-XSS-Protection: 1; mode=block` - XSS protection

### 6. Web Manifest

**Location**: `/public/site.webmanifest`

Features:
- PWA support
- Multiple icon sizes (16x16 to 512x512)
- Theme and background colors
- Standalone display mode
- Mobile-optimized

### 7. Performance Optimizations

#### Image Optimization
- AVIF and WebP formats
- Lazy loading by default
- Responsive images
- Quality: 90

#### Font Optimization
- Google Fonts with `display: swap`
- Subset loading (latin)
- Variable fonts for better performance

### 8. Accessibility

- Skip to main content link
- ARIA labels
- Semantic HTML
- Keyboard navigation
- Focus management
- Screen reader support

## 🎯 SEO Checklist

### On-Page SEO
- [x] Title tags (unique, descriptive, <60 chars)
- [x] Meta descriptions (compelling, <160 chars)
- [x] H1 tags (one per page, descriptive)
- [x] Header hierarchy (H1 → H2 → H3)
- [x] Alt text for images
- [x] Canonical URLs
- [x] Structured data (JSON-LD)
- [x] Internal linking
- [x] Mobile responsiveness
- [x] Page speed optimization

### Technical SEO
- [x] SSL/HTTPS
- [x] XML sitemap
- [x] Robots.txt
- [x] 404 error page
- [x] 301 redirects
- [x] URL structure
- [x] Breadcrumbs
- [x] Schema markup
- [x] Hreflang tags
- [x] Open Graph tags
- [x] Twitter Cards

### Performance
- [x] Core Web Vitals optimization
- [x] Image optimization
- [x] Code splitting
- [x] Lazy loading
- [x] CDN usage (via Vercel)
- [x] Compression
- [x] Caching headers
- [x] Minification

## 📊 Analytics & Monitoring

### Implemented
- [x] Google Analytics 4
- [x] Vercel Analytics
- [x] Vercel Speed Insights
- [x] HubSpot Analytics
- [x] Microsoft Clarity

### Recommended
- [ ] Google Search Console setup
- [ ] Bing Webmaster Tools
- [ ] Ahrefs/SEMrush monitoring
- [ ] Regular SEO audits

## 🔍 Content Guidelines

### Title Tags
Format: `[Page Title] | Bravioo`
- Keep under 60 characters
- Include primary keyword
- Be descriptive and compelling

### Meta Descriptions
- 150-160 characters
- Include call-to-action
- Feature primary and secondary keywords
- Unique for each page

### URL Structure
```
https://bravioo.com/[locale]/[page]
✅ Good: /en/pricing
✅ Good: /tr/ozellikler
❌ Bad: /page?id=123
❌ Bad: /en/page/subpage/sub-subpage/item
```

### Heading Structure
```html
<h1>Page Title - Only One Per Page</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Subsection</h3>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
```

## 🌍 International SEO

### Hreflang Implementation
Every page includes hreflang tags for:
- English (en)
- Turkish (tr)
- x-default (fallback)

Example:
```html
<link rel="alternate" hreflang="en" href="https://bravioo.com/en/pricing" />
<link rel="alternate" hreflang="tr" href="https://bravioo.com/tr/fiyatlandirma" />
<link rel="alternate" hreflang="x-default" href="https://bravioo.com/en/pricing" />
```

## 🎨 Social Media Optimization

### Open Graph Tags
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - 1200x630px image
- `og:type` - website/article
- `og:url` - Canonical URL
- `og:locale` - en_US/tr_TR
- `og:site_name` - Bravioo

### Twitter Cards
- `twitter:card` - summary_large_image
- `twitter:site` - @bravioo
- `twitter:creator` - @bravioo
- `twitter:title` - Page title
- `twitter:description` - Description
- `twitter:image` - OG image

## 📝 To-Do / Missing Items

### Critical
- [ ] **Create OG images**: Need 1200x630px images for each major page
  - /public/og-image.png (home)
  - /public/og-images/pricing.png
  - /public/og-images/features.png
  - /public/og-images/customers.png
  - /public/og-images/about.png
  - /public/og-images/contact.png

### Recommended
- [ ] Add blog/stories dynamic sitemap
- [ ] Implement image sitemap
- [ ] Add video schema (if applicable)
- [ ] Create press/news section
- [ ] Add customer testimonials schema
- [ ] Implement review schema
- [ ] Add event schema (for webinars/demos)

## 🚀 Deployment Checklist

Before going live:
1. [ ] Verify all environment variables are set
2. [ ] Test sitemap.xml accessibility
3. [ ] Test robots.txt accessibility
4. [ ] Verify OG images are loading
5. [ ] Check all meta tags in production
6. [ ] Submit sitemap to Google Search Console
7. [ ] Submit sitemap to Bing Webmaster
8. [ ] Verify structured data with Google Rich Results Test
9. [ ] Check mobile-friendliness
10. [ ] Run Lighthouse audit (target: 90+ scores)
11. [ ] Test page speed on multiple devices
12. [ ] Verify hreflang tags
13. [ ] Check canonical URLs
14. [ ] Test 404 page
15. [ ] Verify SSL certificate

## 📚 Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Web.dev SEO Audits](https://web.dev/lighthouse-seo/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 🔧 Tools

### Testing
- Google Rich Results Test
- Google Mobile-Friendly Test
- PageSpeed Insights
- Lighthouse CI
- Screaming Frog SEO Spider

### Monitoring
- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Ahrefs
- SEMrush

---

**Last Updated**: 2024
**Maintained by**: Bravioo Development Team

