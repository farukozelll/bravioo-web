'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { MessageSquare, Phone, Mail, Users } from 'lucide-react';

export function QuickContactMethods() {
  const locale = useLocale();

  const methods = [
    {
      icon: MessageSquare,
      title: locale === 'tr' ? 'Canlı Sohbet' : 'Live Chat',
      description: locale === 'tr' ? '7/24 anlık destek' : '24/7 instant support',
      action: locale === 'tr' ? 'Sohbeti Başlat' : 'Start Chat',
      color: 'from-brand-500 to-emerald-600',
      onClick: () => {
        const url = new URL(window.location.href);
        url.searchParams.set('support', 'ai');
        window.history.replaceState({}, '', url.toString());
        window.dispatchEvent(new CustomEvent('open-support', { detail: { type: 'ai' } }));
      }
    },
    {
      icon: Phone,
      title: locale === 'tr' ? 'Telefon Desteği' : 'Phone Support',
      description: '+90 (212) 555-0123',
      action: locale === 'tr' ? 'Hemen Ara' : 'Call Now',
      color: 'from-blue-500 to-indigo-600',
      onClick: () => { window.location.href = 'tel:+902125550123'; }
    },
    {
      icon: Mail,
      title: locale === 'tr' ? 'E-posta' : 'Email',
      description: 'info@bravioo.com',
      action: locale === 'tr' ? 'E-posta Gönder' : 'Send Email',
      color: 'from-purple-500 to-pink-600',
      onClick: () => { window.location.href = 'mailto:info@bravioo.com'; }
    },
    {
      icon: Users,
      title: locale === 'tr' ? 'Ücretsiz Randevu Oluştur' : 'Create Free Appointment',
      description: locale === 'tr' ? '30 dakikalık özel sunum' : '30-minute personalized demo',
      action: locale === 'tr' ? 'Randevu Al' : 'Book Now',
      color: 'from-orange-500 to-red-600',
      onClick: () => { window.location.href = `/${locale}/meeting`; }
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {methods.map((method, index) => {
        const Icon = method.icon;
        return (
          <div
            key={index}
            className="group p-4 bg-white dark:bg-gray-800 rounded-2xl border border-sand-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
            onClick={method.onClick}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-ink-900 dark:text-gray-100 mb-1">{method.title}</h3>
            <p className="text-sm text-ink-600 dark:text-gray-300 mb-3">{method.description}</p>
            <span className="text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors">
              {method.action} →
            </span>
          </div>
        );
      })}
    </div>
  );
}


