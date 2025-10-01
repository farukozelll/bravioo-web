'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/config/navigation';

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

export function MobileMenu({ 
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
                      {/* Prefer JSON Lottie animation if available via header preload; fallback to flag node */}
                      <span className="inline-flex items-center justify-center w-6 h-4">
                        {otherLang?.flag}
                      </span>
                      <span>{otherLang?.name}</span>
                    </Link>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      href="https://app.bravioo.com"
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
