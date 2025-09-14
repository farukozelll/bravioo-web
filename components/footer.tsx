'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const footerLinks = {
    product: [
      { name: 'Features', href: `/${locale}#features` },
      { name: 'Integrations', href: `/${locale}#integrations` },
      { name: t('navigation.pricing'), href: `/${locale}/pricing` },
      { name: 'API', href: `/${locale}/api` },
    ],
    company: [
      { name: 'About Us', href: `/${locale}/about` },
      { name: 'Careers', href: `/${locale}/careers` },
      { name: 'Blog', href: `/${locale}/blog` },
      { name: t('navigation.contact'), href: `/${locale}/contact` },
    ],
    legal: [
      { name: 'Privacy Policy', href: `/${locale}/legal/privacy` },
      { name: 'Terms of Use', href: `/${locale}/legal/terms` },
      { name: 'Cookie Policy', href: `/${locale}/legal/cookies` },
      { name: 'Accessibility', href: `/${locale}/legal/accessibility` },
    ],
    support: [
      { name: 'Help Center', href: `/${locale}/help` },
      { name: 'Documentation', href: `/${locale}/docs` },
      { name: 'Status', href: 'https://status.bravioo.com' },
      { name: 'Community', href: `/${locale}/community` },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/bravioo', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/bravioo', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/bravioo', icon: Facebook },
    { name: 'Email', href: 'mailto:hello@bravioo.com', icon: Mail },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-brand-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        {/* Main footer content */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <Link href={`/${locale}`} className="flex items-center gap-3 group">
                <img 
                  src="/Bravioo_logotype-white.png" 
                  alt="Bravioo" 
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            
            <p className="text-base leading-7 text-sand-300 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                {locale === 'tr' ? 'Bizi Takip Edin' : 'Follow Us'}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-sand-400 hover:text-white hover:bg-brand-500 transition-all duration-300 hover:scale-110"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white mb-3">
                {locale === 'tr' ? 'Haberler ve Güncellemeler' : 'News & Updates'}
              </h4>
              <p className="text-sm text-sand-300 mb-4">
                {locale === 'tr' 
                  ? 'Yeni özellikler ve İK trendleri hakkında bilgi alın.'
                  : 'Get notified about new features and HR trends.'
                }
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={locale === 'tr' ? 'E-posta adresiniz' : 'Your email'}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 rounded-xl text-white font-medium transition-colors">
                  {locale === 'tr' ? 'Abone Ol' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>

          {/* Links grid */}
          <div className="mt-16 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white">P</span>
                  </div>
                  {t('footer.product')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-sand-300 hover:text-brand-400 transition-colors hover:translate-x-1 transform duration-200 block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gold-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white">C</span>
                  </div>
                  {t('footer.company')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-sand-300 hover:text-brand-400 transition-colors hover:translate-x-1 transform duration-200 block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white">L</span>
                  </div>
                  {t('footer.legal')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-sand-300 hover:text-brand-400 transition-colors hover:translate-x-1 transform duration-200 block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white">S</span>
                  </div>
                  {t('footer.support')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-sand-300 hover:text-brand-400 transition-colors hover:translate-x-1 transform duration-200 block"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-sand-400">
                &copy; {new Date().getFullYear()} Bravioo. 
                {locale === 'tr' ? ' Tüm hakları saklıdır.' : ' All rights reserved.'}
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center justify-center gap-2 text-sm text-sand-400">
              <span>{locale === 'tr' ? 'Daha iyi iş yerleri için' : 'Made for better workplaces'}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>{locale === 'tr' ? 'ile yapıldı' : 'with love'}</span>
            </div>

            {/* Status & Version */}
            <div className="flex items-center justify-center md:justify-end gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-sand-400">
                  {locale === 'tr' ? 'Tüm sistemler çalışıyor' : 'All systems operational'}
                </span>
              </div>
              <div className="text-xs text-sand-500">v2.0.1</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              <div className="flex items-center gap-2 text-xs text-sand-500">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">✓</span>
                </div>
                ISO 27001
              </div>
              <div className="flex items-center gap-2 text-xs text-sand-500">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">✓</span>
                </div>
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-2 text-xs text-sand-500">
                <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">✓</span>
                </div>
                GDPR Compliant
              </div>
              <div className="flex items-center gap-2 text-xs text-sand-500">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">✓</span>
                </div>
                KVKK Uyumlu
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
