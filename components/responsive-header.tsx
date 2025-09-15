'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationData, languages } from '@/config/navigation';

export function ResponsiveHeader() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [announcementClosed, setAnnouncementClosed] = useState(false);

  const currentLang = languages.find(lang => lang.code === locale);
  const otherLang = languages.find(lang => lang.code !== locale);

  const isActiveRoute = (href: string) => {
    return pathname.startsWith(`/${locale}${href}`);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleAnnouncementClose = () => {
    setAnnouncementClosed(true);
  };

  return (
    <>
      {!announcementClosed && <AnnouncementBar onClose={handleAnnouncementClose} />}
      
      <header 
        className={cn(
          "sticky z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300",
          announcementClosed ? "top-0" : "top-12"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <Image 
              src="/Bravioo_logo.png" 
              alt="Bravioo Logo" 
              width={40}
              height={40}
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/Bravioo_logotype-green.png" 
              alt="Bravioo" 
              width={120}
              height={32}
              className="h-8 w-auto hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationData.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link
                    href={`/${locale}${item.href}`}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 hover:text-brand-600 dark:hover:text-brand-400",
                      isActiveRoute(item.href) 
                        ? "text-brand-600 dark:text-brand-400" 
                        : "text-gray-900 dark:text-gray-100"
                    )}
                  >
                    {t(item.name)}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200">
                    {t(item.name)}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Language + CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 p-2 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200"
                aria-label="Change language"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">
                  {currentLang?.name}
                </span>
                <ChevronDown className="h-3 w-3" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                  >
                    {otherLang && (
                      <Link
                        href={pathname.replace(`/${locale}`, `/${otherLang.code}`)}
                        onClick={() => setIsLangOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="text-lg">{otherLang.flag}</span>
                        <span>{otherLang.name}</span>
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Hidden on mobile */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white shadow-lg"
              size="sm"
            >
              <Link href={`/${locale}/demo`}>
                {t('getDemo')}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <div className="px-4 py-6 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Navigation Links */}
                <div className="space-y-4">
                  {navigationData.map((item) => (
                    <div key={item.name}>
                      {item.href ? (
                        <Link
                          href={`/${locale}${item.href}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200",
                            isActiveRoute(item.href)
                              ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20"
                              : "text-gray-900 dark:text-gray-100 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                          )}
                        >
                          {t(item.name)}
                        </Link>
                      ) : (
                        <button className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                          {t(item.name)}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white shadow-lg"
                  >
                    <Link href={`/${locale}/demo`} onClick={() => setIsMobileMenuOpen(false)}>
                      {t('getDemo')}
                    </Link>
                  </Button>
                </div>

                {/* Mobile Language Switcher */}
                {otherLang && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <Link
                      href={pathname.replace(`/${locale}`, `/${otherLang.code}`)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                    >
                      <span className="text-lg">{otherLang.flag}</span>
                      <span>{otherLang.name}</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
