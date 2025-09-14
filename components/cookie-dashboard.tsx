'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { getConsent, saveConsent, ConsentState, ConsentCategory } from '@/lib/consent';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie,
  Settings,
  X,
  ChevronUp,
  ChevronDown,
  BarChart3,
  Target,
  Zap,
  Shield
} from 'lucide-react';

export function CookieDashboard() {
  const locale = useLocale();
  const [consent, setConsentState] = useState<ConsentState | null>(null);
  const [isMinimized, setIsMinimized] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;
    
    const currentConsent = getConsent();
    setConsentState(currentConsent);
    setShowDashboard(true);
    
    // Load minimized state from localStorage
    const minimized = localStorage.getItem('cookie-dashboard-minimized') !== 'false';
    setIsMinimized(minimized);
  }, []);

  const toggleMinimized = () => {
    const newMinimized = !isMinimized;
    setIsMinimized(newMinimized);
    localStorage.setItem('cookie-dashboard-minimized', newMinimized.toString());
  };

  const closeDashboard = () => {
    setShowDashboard(false);
    localStorage.setItem('cookie-dashboard-closed', 'true');
  };

  const updateConsent = (category: ConsentCategory, value: boolean) => {
    if (!consent) return;
    
    const updatedConsent = {
      ...consent,
      [category]: value,
      timestamp: new Date()
    };
    
    saveConsent(updatedConsent);
    setConsentState(updatedConsent);
  };

  if (!showDashboard || !consent) {
    return null;
  }

  const consentCategories = [
    {
      key: 'necessary' as ConsentCategory,
      title: 'Gerekli',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Site işlevselliği için gerekli',
      canToggle: false
    },
    {
      key: 'analytics' as ConsentCategory,
      title: 'Analitik',
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Site kullanımı analizi',
      canToggle: true
    },
    {
      key: 'marketing' as ConsentCategory,
      title: 'Pazarlama',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Kişiselleştirilmiş reklamlar',
      canToggle: true
    },
    {
      key: 'functional' as ConsentCategory,
      title: 'İşlevsel',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Gelişmiş özellikler',
      canToggle: true
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 left-4 z-50 max-w-sm"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-sand-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-500 to-emerald-600 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-white" />
              <h3 className="font-semibold text-white">Cookie Yöneticisi</h3>
              <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                DEV
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMinimized}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isMinimized ? (
                  <ChevronUp className="h-4 w-4 text-white" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-white" />
                )}
              </button>
              <button
                onClick={closeDashboard}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4">
                <div className="text-sm text-ink-600 mb-4">
                  Çerez tercihlerinizi test edin ve değiştirin:
                </div>

                <div className="space-y-3">
                  {consentCategories.map((category) => {
                    const Icon = category.icon;
                    const isEnabled = consent[category.key];
                    
                    return (
                      <div
                        key={category.key}
                        className={`flex items-center justify-between p-3 rounded-xl ${category.bgColor} border border-gray-100`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center`}>
                            <Icon className={`h-4 w-4 ${category.color}`} />
                          </div>
                          <div>
                            <div className="font-medium text-ink-900 text-sm">
                              {category.title}
                            </div>
                            <div className="text-xs text-ink-600">
                              {category.description}
                            </div>
                          </div>
                        </div>
                        
                        {category.canToggle ? (
                          <Switch
                            checked={isEnabled}
                            onCheckedChange={(value) => updateConsent(category.key, value)}
                          />
                        ) : (
                          <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => {
                      // Reset all optional cookies to false
                      const resetConsent = {
                        necessary: true,
                        analytics: false,
                        marketing: false,
                        functional: false,
                        timestamp: new Date(),
                        version: '1.0'
                      };
                      saveConsent(resetConsent);
                      setConsentState(resetConsent);
                    }}
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                  >
                    Tümünü Reddet
                  </Button>
                  <Button
                    onClick={() => {
                      // Enable all cookies
                      const allConsent = {
                        necessary: true,
                        analytics: true,
                        marketing: true,
                        functional: true,
                        timestamp: new Date(),
                        version: '1.0'
                      };
                      saveConsent(allConsent);
                      setConsentState(allConsent);
                    }}
                    size="sm"
                    className="flex-1 text-xs bg-gradient-to-r from-brand-500 to-emerald-600"
                  >
                    Tümünü Kabul Et
                  </Button>
                </div>

                <div className="text-xs text-ink-500 mt-3 text-center">
                  Son güncelleme: {new Date(consent.timestamp).toLocaleString('tr-TR')}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}