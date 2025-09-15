'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Moon, Sun } from 'lucide-react';
import { footerSections, socialLinks, footerConfig } from '@/config/footer';
import { useTheme } from '@/contexts/theme-context';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const { theme, toggleTheme, mounted } = useTheme();


  return (
    <footer className="relative bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden transition-colors duration-300">
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
        {/* Main footer content - 3 column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <Link href={`/${locale}`} className="inline-block group">
                <Image
                  src={footerConfig.company.logoSrc}
                  alt={footerConfig.company.logoAlt}
                  width={200}
                  height={48}
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            
            {/* Description */}
            <p className="text-base leading-7 text-sand-300 dark:text-gray-300 max-w-sm">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                {t('footer.social.title')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.nameKey}
                      href={item.href}
                      className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-2xl flex items-center justify-center text-sand-400 dark:text-gray-400 hover:text-white hover:bg-brand-500 dark:hover:bg-brand-600 transition-all duration-300 hover:scale-110 group"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      title={t(item.nameKey)}
                    >
                      <span className="sr-only">{t(item.nameKey)}</span>
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Dark Mode Toggle */}
            {mounted && (
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {t('footer.theme.title')}
                </h4>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 px-4 py-2 bg-white/10 dark:bg-white/5 rounded-2xl text-sand-300 dark:text-gray-300 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                  aria-label={theme === 'light' ? t('footer.theme.switchToDark') : t('footer.theme.switchToLight')}
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="h-4 w-4" />
                      <span className="text-sm">{t('footer.theme.dark')}</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4" />
                      <span className="text-sm">{t('footer.theme.light')}</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Middle & Right Columns - Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {footerSections.map((section) => (
                <FooterLinkColumn
                  key={section.titleKey}
                  section={section}
                  locale={locale}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-sand-400">
                &copy; {new Date().getFullYear()} Bravioo. {t('footer.copyright')}
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center justify-center gap-2 text-sm text-sand-400">
              <span>{t('footer.madeWith.prefix')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>{t('footer.madeWith.suffix')}</span>
            </div>

            {/* Status & Version */}
            <div className="flex items-center justify-center md:justify-end gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 ${footerConfig.status.indicatorColor} rounded-full animate-pulse`} />
                <span className="text-xs text-sand-400">
                  {t(footerConfig.status.textKey)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable FooterLinkColumn component
interface FooterLinkColumnProps {
  section: {
    titleKey: string;
    iconKey: string;
    color: string;
    links: Array<{
      nameKey: string;
      href: string;
      external?: boolean;
    }>;
  };
  locale: string;
  t: (key: string) => string;
}

function FooterLinkColumn({ section, locale, t }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-white mb-6 flex items-center gap-2">
        <div className={`w-6 h-6 ${section.color} rounded-lg flex items-center justify-center`}>
          <span className="text-xs text-white font-bold">{section.iconKey}</span>
        </div>
        {t(section.titleKey)}
      </h3>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.nameKey}>
            <Link
              href={`/${locale}${link.href}`}
              className="text-sm leading-6 text-sand-300 hover:text-brand-400 transition-all duration-200 hover:translate-x-1 transform block group"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <span className="group-hover:border-b group-hover:border-brand-400/50 transition-all duration-200">
                {t(link.nameKey)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}