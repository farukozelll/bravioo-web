'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  getConsent,
  saveConsent,
  hasConsent,
  defaultConsent,
  type ConsentState,
  needsConsentUpdate,
} from '@/lib/consent';
import { Settings, Cookie, Shield, BarChart3, Megaphone } from 'lucide-react';

export function ConsentManager() {
  const t = useTranslations('cookies');
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const currentConsent = getConsent();
    
    if (!hasConsent() || needsConsentUpdate()) {
      setShowBanner(true);
    }
    
    if (currentConsent) {
      setConsent(currentConsent);
    }
  }, []);

  // Keyboard shortcut for accepting cookies (Alt+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showBanner && e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        console.log('Keyboard shortcut used for accept all');
        handleAcceptAll();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showBanner]);

  const handleAcceptAll = () => {
    console.log('Accept All clicked'); // Debug log
    
    const newConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date(),
      version: '1.0',
    };
    
    try {
      saveConsent(newConsent);
      setConsent(newConsent);
      setShowBanner(false);
      setShowModal(false);
      console.log('Consent saved successfully'); // Debug log
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  };

  const handleRejectAll = () => {
    const newConsent: ConsentState = {
      ...defaultConsent,
      timestamp: new Date(),
    };
    
    saveConsent(newConsent);
    setConsent(newConsent);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const newConsent: ConsentState = {
      ...consent,
      timestamp: new Date(),
    };
    
    saveConsent(newConsent);
    setShowBanner(false);
    setShowModal(false);
  };

  const updateConsentType = (
    type: keyof Omit<ConsentState, 'timestamp' | 'version'>,
    value: boolean
  ) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setConsent((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring', damping: 25 }}
        className="fixed bottom-6 left-6 right-6 z-[70] max-w-md ml-auto pointer-events-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-sand-200 p-6 backdrop-blur-lg bg-white/95 relative z-[10000] pointer-events-auto">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-ink-900 text-lg font-display">
                {t('banner.title')}
              </h3>
              <p className="text-sm text-ink-600 mt-1 leading-relaxed">
                {t('banner.description')}
              </p>
              <p className="text-xs text-ink-500 mt-1">
                Kısayol: Alt+A tuşları ile de kabul edebilirsiniz
              </p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Native button clicked'); // Debug
                  handleAcceptAll();
                }}
                type="button"
                className="flex-1 h-9 px-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-sm font-medium cursor-pointer transition-all duration-200 relative z-[10001]"
              >
                {t('banner.acceptAll')}
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleRejectAll();
                }}
                type="button"
                className="rounded-2xl border-2"
              >
                {t('banner.rejectAll')}
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowModal(true);
              }}
              type="button"
              className="text-xs text-ink-500 hover:text-ink-700 rounded-2xl"
            >
              <Settings className="h-3 w-3 mr-1" />
              {t('banner.managePreferences')}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Cookie Preferences Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-brand-500" />
              {t('modal.title')}
            </DialogTitle>
            <DialogDescription>
              {t('modal.description')}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between p-4 border border-sand-200 rounded-lg">
              <div className="flex items-start gap-3 flex-1">
                <Shield className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-ink-900">
                    {t('modal.necessary.title')}
                  </h4>
                  <p className="text-sm text-ink-600 mt-1">
                    {t('modal.necessary.description')}
                  </p>
                </div>
              </div>
              <Switch checked={true} disabled className="mt-1" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 border border-sand-200 rounded-lg">
              <div className="flex items-start gap-3 flex-1">
                <BarChart3 className="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-ink-900">
                    {t('modal.analytics.title')}
                  </h4>
                  <p className="text-sm text-ink-600 mt-1">
                    {t('modal.analytics.description')}
                  </p>
                </div>
              </div>
              <Switch
                checked={consent.analytics}
                onCheckedChange={(checked) =>
                  updateConsentType('analytics', checked)
                }
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between p-4 border border-sand-200 rounded-lg">
              <div className="flex items-start gap-3 flex-1">
                <Megaphone className="h-5 w-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-ink-900">
                    {t('modal.marketing.title')}
                  </h4>
                  <p className="text-sm text-ink-600 mt-1">
                    {t('modal.marketing.description')}
                  </p>
                </div>
              </div>
              <Switch
                checked={consent.marketing}
                onCheckedChange={(checked) =>
                  updateConsentType('marketing', checked)
                }
                className="mt-1"
              />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between p-4 border border-sand-200 rounded-lg">
              <div className="flex items-start gap-3 flex-1">
                <Settings className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-ink-900">
                    {t('modal.functional.title')}
                  </h4>
                  <p className="text-sm text-ink-600 mt-1">
                    {t('modal.functional.description')}
                  </p>
                </div>
              </div>
              <Switch
                checked={consent.functional}
                onCheckedChange={(checked) =>
                  updateConsentType('functional', checked)
                }
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleRejectAll}>
              {t('banner.rejectAll')}
            </Button>
            <Button onClick={handleSavePreferences}>
              {t('modal.savePreferences')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
