'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Menu, X, ChevronDown, Globe, Building } from 'lucide-react'; // Globe ikonunu ekledik

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationData, languages } from '@/config/navigation';

export function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const currentLang = languages.find(lang => lang.code === locale);
  const otherLang = languages.find(lang => lang.code !== locale);

  const isActiveRoute = (href: string) => {
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <>
      <AnnouncementBar />
      <header 
        onMouseLeave={() => setActiveDropdown(null)}
        className="sticky top-12 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      >
        <nav className="mx-auto flex max-w-7xl items-center p-4 lg:px-8">
          {/* Left side - Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href={`/${locale}`} className="-m-1 p-1.5 flex items-center gap-3 group">
              <Image 
                src="/Bravioo_logo.png" 
                alt="Bravioo Logo" 
                width={40}
                height={40}
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              />
              <Image 
                src="/Bravioo_logotype-green.png" 
                alt="Bravioo Green Logo" 
                width={168}
                height={40}
                className="w-42 h-10 group-hover:scale-110 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-6">
              {navigationData.map((item) => (
                <div
                  key={item.nameKey}
                  className="relative"
                  onMouseEnter={() => (item.isMegaMenu || item.children) && setActiveDropdown(item.nameKey)}
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    className={cn(
                      "text-sm font-semibold transition-colors hover:text-emerald-600 flex items-center gap-1",
                      isActiveRoute(item.href) ? "text-emerald-600" : "text-gray-900"
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Right side - Language & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4 ml-auto">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {currentLang?.flag}
                <ChevronDown className="h-4 w-4" />
              </button>
             
              {isLangOpen && (
                <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link
                    href={pathname.replace(`/${locale}`, `/${otherLang?.code}`)}
                    className="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsLangOpen(false)}
                  >
                    {otherLang?.flag}
                    <span>{otherLang?.name}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Login Link */}
            <Link
              href={`/${locale}/login`}
              className="text-sm font-semibold text-gray-900 hover:text-emerald-600 border border-green-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Giriş Yap
            </Link>

    
            {/* Free Meeting Button */}
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/${locale}/meeting`}>
                Ücretsiz Toplantı
              </Link>
            </Button>
          </div>
        </nav>

        {/* MEGA MENU */}
        <AnimatePresence>
          {activeDropdown && navigationData.find(i => i.nameKey === activeDropdown)?.isMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl z-50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Why Bravioo Mega Menu */}
                {activeDropdown === 'whyBravioo' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Sol Taraf: Ana Görsel */}
                    <div className="lg:col-span-2">
                      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 h-80 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-grid-purple-100/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
                        
                        {/* Floating Elements */}
                        <div className="absolute top-8 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse" />
                        <div className="absolute top-16 right-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000" />
                        <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-2000" />
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                              <Building className="w-4 h-4" />
                              {locale === 'tr' ? 'Güçlü Temeller' : 'Strong Foundation'}
                            </div>
                            
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                              {locale === 'tr' 
                                ? 'Neden Binlerce Şirket Bravioo\'yu Seçiyor?' 
                                : 'Why Thousands of Companies Choose Bravioo?'
                              }
                            </h3>
                            
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {locale === 'tr'
                                ? 'İnsana yakışır iş yerlerini inşa eden teknoloji. Güvenlik, verimlilik ve çalışan memnuniyetinde lider.'
                                : 'Technology that builds workplaces worthy of humans. Leader in security, efficiency and employee satisfaction.'
                              }
                            </p>
                          </div>
                          
                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-600">500+</div>
                              <div className="text-sm text-gray-600">{locale === 'tr' ? 'Şirket' : 'Companies'}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">2.5M+</div>
                              <div className="text-sm text-gray-600">{locale === 'tr' ? 'Kullanıcı' : 'Users'}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-emerald-600">%98</div>
                              <div className="text-sm text-gray-600">{locale === 'tr' ? 'Memnuniyet' : 'Satisfaction'}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sağ Taraf: Quick Links */}
                    <div className="lg:col-span-1">
                      <h4 className="font-bold text-gray-900 mb-6">{locale === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}</h4>
                      <div className="space-y-4">
                        {navigationData.find(i => i.nameKey === activeDropdown)?.megaMenuContent?.mainLinks.map(link => (
                          <Link 
                            key={link.nameKey} 
                            href={`/${locale}${link.href}`} 
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                              <div className="w-5 h-5">
                                {link.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                {t(link.nameKey)}
                              </h5>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {t(link.descriptionKey)}
                              </p>
                            </div>
                          </Link>
                        ))}
                        
                        {/* CTA Button */}
                        <div className="pt-4 border-t border-gray-200">
                          <Link
                            href={`/${locale}/why-bravioo`}
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                          >
                            {locale === 'tr' ? 'Tümünü Keşfet' : 'Explore All'}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Platform Mega Menu (mevcut) */
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sol Taraf: Ana Linkler (3 sütun) */}
                    <div className="lg:col-span-3">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {t('platformCTATitle')}
                        </h3>
                        <p className="text-gray-600">
                          {t('platformCTADesc')}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {navigationData.find(i => i.nameKey === activeDropdown)?.megaMenuContent?.mainLinks.map(link => (
                          <Link 
                            key={link.nameKey} 
                            href={`/${locale}${link.href}`} 
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                              {React.cloneElement(link.icon as React.ReactElement)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                  {t(link.nameKey)}
                                </h4>
                                {link.isNew && (
                                  <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full">
                                    {locale === 'tr' ? 'Yeni' : 'New'}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {t(link.descriptionKey)}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Sağ Taraf: Başarı Hikayeleri */}
                    <div className="lg:col-span-1 lg:border-l lg:border-gray-200 lg:pl-8">
                      <h4 className="font-semibold text-gray-900 mb-6">{t('successStories')}</h4>
                      <div className="space-y-6">
                        {navigationData.find(i => i.nameKey === activeDropdown)?.megaMenuContent?.featuredContent.items.map(story => (
                          <Link key={story.title} href={`/${locale}${story.href}`} className="group block">
                            <div className="relative overflow-hidden rounded-lg mb-3">
                              <Image 
                                src={story.image} 
                                alt={story.title} 
                                width={300} 
                                height={180}
                                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
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
                            <p className="text-sm text-gray-600 group-hover:text-emerald-600 transition-colors">
                              {t(story.descriptionKey)}
                            </p>
                          </Link>
                        ))}
                        
                        <Link 
                          href={`/${locale}/customers`} 
                          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-4"
                        >
                          {t('viewAll')}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SIMPLE DROPDOWN */}
        <AnimatePresence>
          {activeDropdown && navigationData.find(i => i.nameKey === activeDropdown)?.children && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {navigationData.find(i => i.nameKey === activeDropdown)?.children?.map(child => (
                    <Link
                      key={child.nameKey}
                      href={`/${locale}${child.href}`}
                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        {React.cloneElement(child.icon as React.ReactElement)}
                      </div>
                      <span className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {t(child.nameKey)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <Link href={`/${locale}`} className="-m-1.5 p-1.5 flex items-center gap-2">
                    <Image 
                      src="/Bravioo_logo.png" 
                      alt="Bravioo Logo" 
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="text-xl font-bold text-emerald-600 font-display">
                      Bravioo
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigationData.map((item) => (
                        <Link
                          key={item.nameKey}
                          href={`/${locale}${item.href}`}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t(item.nameKey)}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="py-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-900">
                          {locale === 'tr' ? 'Dil' : 'Language'}
                        </span>
                        <Link
                          href={pathname.replace(`/${locale}`, `/${otherLang?.code}`)}
                          className="flex items-center gap-x-2 text-sm font-semibold text-emerald-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {otherLang?.flag}
                          <span>{otherLang?.name}</span>
                        </Link>
                      </div>
                      
                      <div className="space-y-3">
                        <Link
                          href={`/${locale}/login`}
                          className="block w-full text-center px-4 py-2 text-base font-semibold text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Giriş Yap
                        </Link>
                        

                        <Button
                          asChild
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                        >
                          <Link href={`/${locale}/meeting`} onClick={() => setIsMenuOpen(false)}>
                            Ücretsiz Toplantı
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
      </header>
    </>
  );
}