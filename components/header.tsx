'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Menu, X, ChevronDown, Building } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationData, languages, type NavItem } from '@/config/navigation';
import { MegaMenu } from '@/components/_components/mega-menu';
import { MobileMenu } from '@/components/_components/mobile-menu';

export function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [canHover, setCanHover] = useState(true);

  // Hover close timer for stable dropdown hover
  const closeTimeout = useRef<number | null>(null);
  const cancelClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);
  const scheduleClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const currentLang = languages.find(lang => lang.code === locale);
  const otherLang = languages.find(lang => lang.code !== locale);

  // Body scroll lock for mobile drawer
  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setIsLangOpen(false);
  }, [pathname]);

  // Detect hover capability to avoid unintended dropdowns on touch devices
  useEffect(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      setCanHover(window.matchMedia('(hover: hover)').matches);
    }
  }, []);

  // Scroll detection for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside - Safari compatible
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target) return;
      
      // Safari compatibility: use closest() with proper fallback
      const isLanguageSelector = target.closest('.language-selector');
      const isDropdownContainer = target.closest('.dropdown-container');
      
      if (!isLanguageSelector && isLangOpen) {
        setIsLangOpen(false);
      }
      
      if (!isDropdownContainer && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    // Add both mousedown and touchstart for better Safari support
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isLangOpen, activeDropdown]);

  const isActiveRoute = useCallback((href: string) => {
    return pathname.startsWith(`/${locale}${href}`);
  }, [pathname, locale]);

  const handleAnnouncementClose = useCallback(() => {
    setAnnouncementClosed(true);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleLanguageMenu = useCallback(() => {
    setIsLangOpen(prev => !prev);
  }, []);

  

  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setIsLangOpen(false);
  }, []);

  return (
    <div className="sticky top-0 z-[200]">
      {!announcementClosed && <AnnouncementBar onClose={handleAnnouncementClose} />}
      <header 
        onMouseEnter={() => canHover && cancelClose()}
        onMouseLeave={() => canHover && scheduleClose()}
        className={cn(
          "w-full border-b bg-neutral-50/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300",
          isScrolled ? "border-neutral-200 dark:border-gray-700 shadow-sm" : "border-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center p-4 lg:px-8">
          {/* Left side - Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link 
              href={`/${locale}`} 
              className="-m-1 p-1.5 flex items-center gap-2 group"
              onClick={closeAllMenus}
            >
              <Image 
                src="/Bravioo_logo.png" 
                alt="Bravioo Logo" 
                width={40}
                height={40}
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                priority
              />
              <Image 
                src="/Bravioo_logotype-green.png" 
                alt="Bravioo Green Logo" 
                width={168}
                height={40}
                className="hidden md:block w-42 h-10 group-hover:scale-110 transition-transform duration-300 dark:hidden"
                priority
              />
              <Image 
                src="/Bravioo_logotype-white.png" 
                alt="Bravioo White Logo" 
                width={168}
                height={40}
                className="hidden dark:md:block w-42 h-10 group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-6">
              {navigationData.map((item) => (
                <div
                  key={item.nameKey}
                  className="relative dropdown-container"
                  onMouseEnter={() => {
                    if ((item.isMegaMenu || item.children) && canHover) {
                      cancelClose();
                      setActiveDropdown(item.nameKey);
                    }
                  }}
                  onMouseLeave={() => {
                    if ((item.isMegaMenu || item.children) && canHover) {
                      scheduleClose();
                    }
                  }}
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    className={cn(
                      "text-sm font-semibold transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1",
                      isActiveRoute(item.href) ? "text-emerald-600 dark:text-emerald-400" : "text-gray-900 dark:text-gray-100"
                    )}
                  >
                    {t(item.nameKey)}
                    {(item.isMegaMenu || item.children) && (
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.nameKey && "rotate-180"
                      )} />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-panel"
              aria-label="Ana menü"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Right side - Language & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4 ml-auto">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                onClick={toggleLanguageMenu}
                aria-expanded={isLangOpen}
                aria-label="Dil seçenekleri"
              >
                {currentLang?.flag}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isLangOpen && "rotate-180"
                )} />
              </button>
             
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 z-[250] mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Link
                      href={pathname.replace(`/${locale}`, `/${otherLang?.code}`)}
                      className="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {otherLang?.flag}
                      <span>{otherLang?.name}</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login Link */}
            <Link
              href={`/${locale}/login`}
              className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 border border-green-600 dark:border-emerald-500 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {t('login')}
            </Link>

            {/* Free Meeting Button */}
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Link href={`/${locale}/meeting`}>
                {t('freeMeeting')}
              </Link>
            </Button>
          </div>
        </nav>

        {/* MEGA MENU */}
        <AnimatePresence>
          {activeDropdown && navigationData.find(i => i.nameKey === activeDropdown)?.isMegaMenu && (
            <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
              <MegaMenu 
                activeDropdown={activeDropdown}
                locale={locale}
                t={t}
              />
            </div>
          )}
        </AnimatePresence>

        {/* SIMPLE DROPDOWN */}
        <AnimatePresence>
          {activeDropdown && navigationData.find(i => i.nameKey === activeDropdown)?.children && (
            <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-[240]"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {navigationData.find(i => i.nameKey === activeDropdown)?.children?.map(child => (
                      <Link
                        key={child.nameKey}
                        href={`/${locale}${child.href}`}
                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          {React.cloneElement(child.icon as React.ReactElement)}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {t(child.nameKey)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </header>
      
      {/* Mobile menu - Outside sticky wrapper to ensure proper z-index layering */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeAllMenus}
        locale={locale}
        pathname={pathname}
        navigationData={navigationData}
        t={t}
        currentLang={currentLang}
        otherLang={otherLang}
      />
    </div>
  );
}
