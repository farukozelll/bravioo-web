'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnnouncementBarProps {
  onClose?: () => void;
}

export function AnnouncementBar({ onClose }: AnnouncementBarProps) {
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const announcements = {
    tr: {
      text: '🎉 Yeni özellik: Yapay zeka destekli takdir önerileri artık mevcut!',
      cta: 'Keşfet',
      href: '/tr/features',
    },
    en: {
      text: '🎉 New feature: AI-powered recognition suggestions now available!',
      cta: 'Explore',
      href: '/en/features',
    },
  };

  const announcement = announcements[locale as keyof typeof announcements] || announcements.en;

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 relative overflow-hidden bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 text-white"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-1 items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="flex-shrink-0"
              >
                <Sparkles className="h-5 w-5 text-gold-300" />
              </motion.div>
              
              <p className="text-sm font-medium text-center">
                {announcement.text}
              </p>
              
              <Link
                href={announcement.href}
                className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm font-medium transition-all hover:bg-white/30 hover:scale-105 backdrop-blur-sm"
              >
                {announcement.cta}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            
            <button
              type="button"
              className="flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors"
              onClick={handleClose}
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
