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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (!target.closest('.language-selector') && isLangOpen) {
        setIsLangOpen(false);
      }
      
      if (!target.closest('.dropdown-container') && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const handleDropdownHover = useCallback((itemKey: string | null) => {
    if (canHover) {
      setActiveDropdown(itemKey);
    }
  }, [canHover]);

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
                navigationData={navigationData}
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

// ==========================
// MEGA MENU COMPONENTS
// ==========================

interface MegaMenuProps {
  activeDropdown: string;
  locale: string;
  t: (key: string) => string;
  navigationData: typeof navigationData;
}

function MegaMenu({ activeDropdown, locale, t, navigationData }: MegaMenuProps) {
  const menuData = navigationData.find(i => i.nameKey === activeDropdown);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl z-[230]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {activeDropdown === 'whyBravioo' ? (
          <WhyBraviooMegaMenu locale={locale} t={t} menuData={menuData} />
        ) : (
          <PlatformMegaMenu locale={locale} t={t} menuData={menuData} />
        )}
      </div>
    </motion.div>
  );
}

interface MegaMenuComponentProps {
  locale: string;
  t: (key: string) => string;
  menuData: NavItem | undefined;
}

interface LinkItem {
  nameKey: string;
  descriptionKey: string;
  href: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

interface StoryItem {
  image: string;
  title: string;
  descriptionKey: string;
  href: string;
  badge?: string;
}

function WhyBraviooMegaMenu({ locale, t, menuData }: MegaMenuComponentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <WhyBraviooHero locale={locale} />
      <QuickLinksSection locale={locale} t={t} menuData={menuData} />
    </div>
  );
}

function PlatformMegaMenu({ locale, t, menuData }: MegaMenuComponentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
      <PlatformMainLinks locale={locale} t={t} menuData={menuData} />
      <SuccessStoriesSection locale={locale} t={t} menuData={menuData} />
    </div>
  );
}

// Hero section for Why Bravioo
function WhyBraviooHero({ locale }: { locale: string }) {
  return (
    <div className="lg:col-span-2">
      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 h-80 overflow-hidden">
        <BackgroundPattern />
        <FloatingElements />
        <HeroContent locale={locale} />
        <StatsGrid locale={locale} />
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 bg-grid-purple-100/50 dark:bg-grid-purple-300/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
  );
}

function FloatingElements() {
  return (
    <>
      <div className="absolute top-8 left-8 w-16 h-16 bg-purple-200 dark:bg-purple-700/30 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-16 right-16 w-24 h-24 bg-blue-200 dark:bg-blue-700/30 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-emerald-200 dark:bg-emerald-700/30 rounded-full opacity-20 animate-pulse delay-2000" />
    </>
  );
}

function HeroContent({ locale }: { locale: string }) {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Building className="w-4 h-4" />
          {locale === 'tr' ? 'Güçlü Temeller' : 'Strong Foundation'}
        </div>
        
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {locale === 'tr' 
            ? 'Neden Binlerce Şirket Bravioo\'yu Seçiyor?' 
            : 'Why Thousands of Companies Choose Bravioo?'
          }
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {locale === 'tr'
            ? 'İnsana yakışır iş yerlerini inşa eden teknoloji. Güvenlik, verimlilik ve çalışan memnuniyetinde lider.'
            : 'Technology that builds workplaces worthy of humans. Leader in security, efficiency and employee satisfaction.'
          }
        </p>
      </div>
    </div>
  );
}

function StatsGrid({ locale }: { locale: string }) {
  const stats = [
    { value: '200+', label: locale === 'tr' ? 'Şirket' : 'Companies', color: 'text-purple-600' },
    { value: '50.000+', label: locale === 'tr' ? 'Kullanıcı' : 'Users', color: 'text-blue-600' },
    { value: '%98', label: locale === 'tr' ? 'Memnuniyet' : 'Satisfaction', color: 'text-emerald-600' }
  ];

  return (
    <div className="relative z-10 grid grid-cols-3 gap-3 mt-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}   {stat.label}</div>
          <div className="text-sm text-black-600 dark:text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Quick Links Section
function QuickLinksSection({ locale, t, menuData }: MegaMenuComponentProps) {
  return (
    <div className="lg:col-span-1">
      <h4 className="font-bold text-gray-900 dark:text-white mb-6">
        {locale === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}
      </h4>
      <hr className="mb-4 dark:border-gray-700" />
      
      <div className="space-y-2">
        {menuData?.megaMenuContent?.mainLinks.map((link: LinkItem) => (
          <QuickLink key={link.nameKey} link={link} locale={locale} t={t} />
        ))}
        
        <CTAButton locale={locale} />
      </div>
    </div>
  );
}

function QuickLink({ link, locale, t }: { link: LinkItem; locale: string; t: (key: string) => string }) {
  return (
    <Link 
      href={`/${locale}${link.href}`} 
      className="group flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
    >
      <div className="flex-1">
        <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {t(link.nameKey)}
        </h5>
      </div>
    </Link>
  );
}

function CTAButton({ locale }: { locale: string }) {
  return (
    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <Link
        href={`/${locale}/brands`}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
      >
        {locale === 'tr' ? 'Tüm Markaları Keşfet' : 'Explore All Brands'}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

// Platform Main Links Section
function PlatformMainLinks({ locale, t, menuData }: MegaMenuComponentProps) {
  return (
    <div className="lg:col-span-3">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {t('platformCTATitle')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {t('platformCTADesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData?.megaMenuContent?.mainLinks.map((link: LinkItem) => (
          <PlatformLink key={link.nameKey} link={link} locale={locale} t={t} />
        ))}
      </div>
    </div>
  );
}

function PlatformLink({ link, locale, t }: { link: LinkItem; locale: string; t: (key: string) => string }) {
  return (
    <Link 
      href={`/${locale}${link.href}`} 
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
        {React.cloneElement(link.icon as React.ReactElement)}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {t(link.nameKey)}
          </h4>
          {link.isNew && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">
              {locale === 'tr' ? 'Yeni' : 'New'}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {t(link.descriptionKey)}
        </p>
      </div>
    </Link>
  );
}

// Success Stories Section
function SuccessStoriesSection({ locale, t, menuData }: MegaMenuComponentProps) {
  return (
    <div className="lg:col-span-1 lg:border-l lg:border-gray-200 dark:lg:border-gray-700 lg:pl-8">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-6">{t('successStories')}</h4>
      <div className="space-y-6">
        {menuData?.megaMenuContent?.featuredContent.items.map((story: StoryItem) => (
          <SuccessStoryCard key={story.title} story={story} locale={locale} t={t} />
        ))}
        
        <ViewAllLink locale={locale} t={t} />
      </div>
    </div>
  );
}

function SuccessStoryCard({ story, locale, t }: { story: StoryItem; locale: string; t: (key: string) => string }) {
  return (
    <Link href={`/${locale}${story.href}`} className="group block">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Image 
          src={story.image} 
          alt={story.title} 
          width={300} 
          height={180}
          className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold text-white">{story.title}</h5>
            {story.badge && (
              <span className="px-2 py-1 text-xs font-medium bg-emerald-500 text-white rounded-full">
                {story.badge}
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {t(story.descriptionKey)}
      </p>
    </Link>
  );
}

function ViewAllLink({ locale, t }: { locale: string; t: (key: string) => string }) {
  return (
    <Link 
      href={`/${locale}/stories`} 
      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mt-4"
    >
      {t('viewAll')}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

// ==========================
// MOBILE MENU COMPONENT
// ==========================

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  pathname: string;
  navigationData: NavItem[];
  t: (key: string) => string;
  currentLang: { code: string; name: string; flag: React.ReactNode } | undefined;
  otherLang: { code: string; name: string; flag: React.ReactNode } | undefined;
}

function MobileMenu({ 
  isOpen, 
  onClose, 
  locale, 
  pathname, 
  navigationData, 
  t, 
  otherLang 
}: MobileMenuProps) {
  const isActiveRoute = (href: string) => {
    return pathname.startsWith(`/${locale}${href}`);
  };

  // Portal to document body to ensure highest z-index
  if (typeof window === 'undefined') return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            style={{ 
              zIndex: 999998,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            id="mobile-menu-panel"
            className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 shadow-2xl"
            style={{ 
              zIndex: 999999,
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '24rem'
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex items-center justify-between">
              <Link 
                href={`/${locale}`} 
                className="-m-1.5 p-1.5 flex items-center gap-2"
                onClick={onClose}
                id="mobile-menu-title"
              >
                <Image 
                  src="/Bravioo_logo.png" 
                  alt="Bravioo Logo" 
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  Bravioo
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onClick={onClose}
                aria-label="Menüyü kapat"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/50">
                <div className="space-y-1 py-6">
                  {navigationData.map((item) => (
                    <MobileNavItem 
                      key={item.nameKey}
                      item={item}
                      locale={locale}
                      t={t}
                      isActiveRoute={isActiveRoute}
                      onClose={onClose}
                    />
                  ))}
                </div>
                
                <div className="py-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {locale === 'tr' ? 'Dil' : 'Language'}
                    </span>
                    <Link
                      href={pathname.replace(`/${locale}`, `/${otherLang?.code}`)}
                      className="flex items-center gap-x-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                      onClick={onClose}
                    >
                      {otherLang?.flag}
                      <span>{otherLang?.name}</span>
                    </Link>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      href={`/${locale}/login`}
                      className="block w-full text-center px-4 py-2 text-base font-semibold text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={onClose}
                    >
                      {t('login')}
                    </Link>
                    
                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      <Link href={`/${locale}/meeting`} onClick={onClose}>
                        {t('freeMeeting')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ==========================
// MOBILE NAV ITEM COMPONENT
// ==========================

interface MobileNavItemProps {
  item: NavItem;
  locale: string;
  t: (key: string) => string;
  isActiveRoute: (href: string) => boolean;
  onClose: () => void;
}

function MobileNavItem({ item, locale, t, isActiveRoute, onClose }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubItems = item.children || item.megaMenuContent;

  const toggleExpanded = () => {
    if (hasSubItems) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="space-y-1">
      {/* Main Item */}
      <div className="flex items-center">
        {hasSubItems ? (
          <button
            onClick={toggleExpanded}
            className={cn(
              "flex items-center justify-between w-full -mx-3 rounded-lg px-3 py-2 text-base font-semibold transition-colors text-left",
              isActiveRoute(item.href) 
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" 
                : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
            )}
          >
            <span>{t(item.nameKey)}</span>
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform duration-200",
              isExpanded && "rotate-180"
            )} />
          </button>
        ) : (
          <Link
            href={`/${locale}${item.href}`}
            className={cn(
              "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-colors w-full",
              isActiveRoute(item.href) 
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" 
                : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
            )}
            onClick={onClose}
          >
            {t(item.nameKey)}
          </Link>
        )}
      </div>

      {/* Sub Items */}
      <AnimatePresence>
        {isExpanded && hasSubItems && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-4 space-y-1 pt-2">
              {/* Regular Children */}
              {item.children?.map((child) => (
                <Link
                  key={child.nameKey}
                  href={`/${locale}${child.href}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  {child.icon && <span className="text-gray-400 dark:text-gray-500">{child.icon}</span>}
                  <span>{t(child.nameKey)}</span>
                </Link>
              ))}

              {/* Mega Menu Content */}
              {item.megaMenuContent?.mainLinks.map((link) => (
                <Link
                  key={link.nameKey}
                  href={`/${locale}${link.href}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  {link.icon && <span className="text-gray-400 dark:text-gray-500">{link.icon}</span>}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span>{t(link.nameKey)}</span>
                      {link.isNew && (
                        <span className="px-1.5 py-0.5 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">
                          {locale === 'tr' ? 'Yeni' : 'New'}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {t(link.descriptionKey)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}