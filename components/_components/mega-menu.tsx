'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building, Star } from 'lucide-react';
import { navigationData, type NavItem } from '@/config/navigation';

interface MegaMenuProps {
  activeDropdown: string;
  locale: string;
  t: (key: string) => string;
}

export function MegaMenu({ activeDropdown, locale, t }: MegaMenuProps) {
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
      <div className="relative bg-gradient-to-br from-green-50 to-gold-50 dark:from-green-900/20 dark:to-gold-900/20 rounded-3xl p-12 h-80 overflow-hidden">
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
    <div className="absolute inset-0 bg-grid-green-100/50 dark:bg-grid-green-300/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
  );
}

function FloatingElements() {
  return (
    <>
      <div className="absolute top-8 left-8 w-16 h-16 bg-green-200 dark:bg-green-700/30 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-16 right-16 w-24 h-24 bg-gold-200 dark:bg-gold-700/30 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-emerald-200 dark:bg-emerald-700/30 rounded-full opacity-20 animate-pulse delay-2000" />
    </>
  );
}

function HeroContent({ locale }: { locale: string }) {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
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
    { value: '200+', label: locale === 'tr' ? 'Marka' : 'Brands', color: 'text-green-600' },
    { value: '50.000+', label: locale === 'tr' ? 'Kullanıcı' : 'Users', color: 'text-gold-600' },
    { value: '%100', label: locale === 'tr' ? 'Memnuniyet' : 'Satisfaction', color: 'text-emerald-600' }
  ];

  return (
    <div className="relative z-10 grid grid-cols-3 gap-3 ">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-2xl font-bold leading-tight ${stat.color}`}>{stat.value}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
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
        <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-gold-600 hover:from-green-700 hover:to-gold-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
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
          src={story.image.trim()} 
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
