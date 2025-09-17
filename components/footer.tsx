'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Moon, Sun, ChevronRight, ExternalLink } from 'lucide-react';
import { footerSections, socialLinks, footerConfig } from '@/config/footer';
import { useTheme } from '@/contexts/theme-context';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <footer className="relative mt-12 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-white overflow-hidden transition-colors duration-300">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.1'%3E%3Cpath d='M20 20h60v60h-60z'/%3E%3Cpath d='M30 30h40v40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-primary-500/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-secondary-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-600/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14">
          
          {/* Left Column - Company Info (spans 4 columns on lg+) */}
          <div className="lg:col-span-4 space-y-4 lg:space-y-2">
            {/* Logo */}
            <div>
              <Link href={`/${locale}`} className="inline-block group">
                <Image
                  src={footerConfig.company.logoSrc}
                  alt={footerConfig.company.logoAlt}
                  width={200}
                  height={48}
                  className="h-10 sm:h-12 group-hover:scale-105 transition-transform duration-300 brightness-0 invert"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </Link>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base leading-6 sm:leading-7 text-primary-100 dark:text-gray-300 max-w-md">
              {t('footer.description')}
            </p>

            {/* Mobile App Download Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">
                {locale === 'tr' ? 'Mobil Uygulamayı İndirin' : 'Download Mobile App'}
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://apps.apple.com/app/bravioo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/images/apple_btn.webp"
                    alt="Download on App Store"
                    width={140}
                    height={40}
                    className="h-10 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.bravioo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/images/gPlay_btn.webp"
                    alt="Get it on Google Play"
                    width={140}
                    height={40}
                    className="h-10 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </Link>
              </div>
            </div>
            
            {/* Social Links - Enhanced Design */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 sm:mb-6">
                {t('footer.social.title')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.nameKey}
                      href={item.href}
                      className="group relative w-11 h-11 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary-200 dark:text-gray-400 hover:text-white hover:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      title={t(item.nameKey)}
                    >
                      <span className="sr-only">{t(item.nameKey)}</span>
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {item.external && (
                        <ExternalLink className="absolute -top-1 -right-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/*  */}
            {mounted && (
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {t('footer.theme.title')}
                </h4>
                <button
                  onClick={toggleTheme}
                  className="group flex items-center gap-3 px-4 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl text-primary-200 dark:text-gray-300 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  aria-label={theme === 'light' ? t('footer.theme.switchToDark') : t('footer.theme.switchToLight')}
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium">{t('footer.theme.dark')}</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium">{t('footer.theme.light')}</span>
                    </>
                  )}
                  <ChevronRight className="h-3 w-3 ml-auto opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Columns - Navigation Links (spans 8 columns on lg+) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
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



        {/* Bottom section - Enhanced */}
        <div className="mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-primary-200 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Bravioo. {t('footer.copyright')}
              </p>
              <p className="text-xs text-primary-300 dark:text-gray-500 mt-1">
                {t('footer.rights')}
              </p>
            </div>

          {/* Made with love - Center on larger screens */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-primary-200 dark:text-gray-400">
              <span>{t('footer.madeWith.prefix')}</span>
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
              <span>{t('footer.madeWith.suffix')}</span>
            </div>

            {/* Status & Performance */}
            <div className="flex items-center justify-center sm:justify-end gap-4">
              <div className="flex items-center gap-2">
              
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-primary-200 dark:text-gray-400">
              <span>{t('footer.madeWith.prefix')}</span>
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
              <span>{t('footer.madeWith.suffix')}</span>
            </div>

              </div>
           
            </div>  
          </div>
        </div>
      </div>
    </footer>
  );
}

// Enhanced FooterLinkColumn component
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
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-sm sm:text-base font-semibold leading-6 text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
        <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center shadow-lg`}>
          <span className="text-xs text-white font-bold">{section.iconKey}</span>
        </div>
        {t(section.titleKey)}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {section.links.map((link) => (
          <li key={link.nameKey}>
            <Link
              href={`/${locale}${link.href}`}
              className="group text-xs sm:text-sm leading-6 text-primary-100 dark:text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform flex items-center gap-2"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
              <span className="group-hover:border-b group-hover:border-primary-400/50 transition-all duration-200">
                {t(link.nameKey)}
              </span>
              {link.external && (
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}