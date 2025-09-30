# Deployment Guide

## Overview

This guide covers deploying the Bravioo website to production.

## Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Vercel account (recommended) or alternative hosting
- Environment variables configured

## Environment Variables

Copy `.env.template` to `.env.local` and fill in all required values:

```bash
cp .env.template .env.local
```

### Required Variables

```env
NEXT_PUBLIC_SITE_URL=https://bravioo.com
NEXT_PUBLIC_APP_URL=https://app.bravioo.com
```

### Analytics (Recommended)

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HS_PORTAL_ID=your-portal-id
NEXT_PUBLIC_CLARITY_ID=your-clarity-id
```

### Email Configuration

```env
AZURE_CLIENT_ID=your-azure-client-id
AZURE_CLIENT_SECRET=your-azure-client-secret
AZURE_TENANT_ID=your-azure-tenant-id
MAIL_FROM=noreply@bravioo.com
```

### Search Engine Verification

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-verification-code
```

## Deployment Platforms

### Vercel (Recommended)

Vercel provides the best experience for Next.js applications.

#### Initial Setup

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

#### Production Deployment

```bash
vercel --prod
```

#### Environment Variables in Vercel

1. Go to your project settings in Vercel dashboard
2. Navigate to "Environment Variables"
3. Add all variables from `.env.template`
4. Set appropriate environments (Production, Preview, Development)

#### Custom Domain

1. Go to project settings → Domains
2. Add your custom domain: `bravioo.com`
3. Configure DNS records as instructed
4. Enable automatic HTTPS

### Alternative Platforms

#### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t bravioo-web .
docker run -p 3000:3000 --env-file .env.local bravioo-web
```

#### AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
3. Add environment variables in Amplify console

#### Netlify

1. Connect repository
2. Configure build:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install Next.js runtime plugin
3. Add environment variables

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passes with no errors
- [ ] All tests passing
- [ ] Code reviewed and approved

### Performance
- [ ] Lighthouse score > 90 on all metrics
- [ ] Images optimized
- [ ] Bundle size optimized
- [ ] Core Web Vitals passing

### SEO
- [ ] Meta tags configured for all pages
- [ ] OG images created and optimized
- [ ] Sitemap generating correctly
- [ ] Robots.txt configured
- [ ] Structured data implemented

### Security
- [ ] Environment variables secured
- [ ] No secrets in code
- [ ] Security headers configured
- [ ] HTTPS enforced
- [ ] Dependencies updated

### Functionality
- [ ] All forms working
- [ ] Email delivery tested
- [ ] Analytics tracking verified
- [ ] i18n working (EN, TR)
- [ ] Mobile responsive
- [ ] Cross-browser tested

### Legal & Compliance
- [ ] Privacy policy updated
- [ ] Terms of service updated
- [ ] Cookie consent working
- [ ] GDPR compliance verified

## Post-Deployment Tasks

### Immediate (Within 1 hour)
1. Verify site is accessible at production URL
2. Check all critical pages load correctly
3. Test form submissions
4. Verify analytics tracking
5. Check error logging

### Within 24 hours
1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Verify DNS propagation
4. Set up uptime monitoring
5. Configure error alerting

### Within 1 week
1. Monitor performance metrics
2. Review error logs
3. Check SEO indexing status
4. Verify social media previews
5. Test email deliverability

## Monitoring

### Essential Monitoring Tools

1. **Uptime Monitoring**:
   - UptimeRobot
   - Pingdom
   - StatusCake

2. **Performance Monitoring**:
   - Vercel Analytics
   - Google PageSpeed Insights
   - WebPageTest

3. **Error Tracking**:
   - Sentry (recommended)
   - LogRocket
   - Rollbar

4. **Analytics**:
   - Google Analytics 4
   - Microsoft Clarity
   - HubSpot Analytics

### Setting Up Alerts

Configure alerts for:
- Site downtime (immediate)
- Error rate spikes (5 minutes)
- Performance degradation (15 minutes)
- Traffic anomalies (1 hour)

## Rollback Procedure

If issues occur after deployment:

### Vercel
```bash
# List deployments
vercel ls

# Rollback to previous deployment
vercel rollback [deployment-url]
```

### Manual Rollback
1. Revert to previous Git commit
2. Redeploy from that commit
3. Verify functionality

## Maintenance

### Regular Updates

**Weekly**:
- Review error logs
- Check performance metrics
- Monitor uptime

**Monthly**:
- Update dependencies
- Security audit
- Performance optimization
- Content review

**Quarterly**:
- Major dependency updates
- SEO audit
- Accessibility audit
- Security penetration test

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update major versions (carefully)
npm install package@latest
```

### Security Updates

Always update security vulnerabilities immediately:

```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Fix with breaking changes (review carefully)
npm audit fix --force
```

## Troubleshooting

### Build Failures

1. Check build logs in deployment platform
2. Verify all environment variables are set
3. Test build locally:
   ```bash
   npm run build
   ```

### Runtime Errors

1. Check error logs in platform dashboard
2. Review environment variables
3. Test in development mode
4. Check API endpoints

### Performance Issues

1. Run Lighthouse audit
2. Check bundle size:
   ```bash
   npm run build
   ```
3. Analyze with Next.js bundle analyzer
4. Optimize images
5. Enable caching

### DNS Issues

1. Verify DNS records:
   ```bash
   nslookup bravioo.com
   ```
2. Check DNS propagation: https://dnschecker.org
3. Wait for TTL expiration (usually 24-48 hours)

## Support

For deployment issues:
- **Email**: dev@bravioo.com
- **Slack**: #deployments
- **Docs**: https://docs.bravioo.com

## Changelog

Track all production deployments in `CHANGELOG.md`.

---

**Last Updated**: September 2024  
**Maintained by**: Bravioo Development Team


