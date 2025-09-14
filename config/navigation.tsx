import React from 'react';
import { 
  BarChart, 
  Building, 
  Code, 
  Heart, 
  Layers, 
  Mail, 
  Newspaper, 
  Shield, 
  Sparkles, 
  Users, 
  Zap,
  MessageSquare,
  Target,
  Smartphone
} from "lucide-react";

// Bu, her bir navigasyon elemanının tipini tanımlar
export type NavItem = {
  nameKey: string; // Çeviri dosyası için anahtar ('navigation.platform')
  href: string;
  isMegaMenu?: boolean; // Bu bir mega menu mü?
  children?: NavItem[]; // Normal dropdown için
  megaMenuContent?: MegaMenuContent; // Mega menu içeriği
  icon?: React.ReactNode; // İkonlar için
};

export type MegaMenuContent = {
  mainLinks: {
    nameKey: string;
    descriptionKey: string;
    href: string;
    icon: React.ReactNode;
    isNew?: boolean; // "Yeni" badge'i için
  }[];
  featuredContent: {
    titleKey: string;
    items: {
      image: string;
      title: string;
      descriptionKey: string;
      href: string;
      badge?: string; // "%285 artış" gibi
    }[];
  };
  bottomCTA: {
    titleKey: string;
    descriptionKey: string;
    buttonTextKey: string;
    href: string;
  };
};

// Tüm Navigasyon Yapımız - Yeni Strateji
export const navigationData: NavItem[] = [
  {
    nameKey: 'platform',
    href: '/features',
    isMegaMenu: true,
    megaMenuContent: {
      mainLinks: [
        { 
          nameKey: 'recognition', 
          descriptionKey: 'recognitionDesc', 
          href: '/features/recognition', 
          icon: <Heart className="w-5 h-5" />,
          isNew: false
        },
        { 
          nameKey: 'surveys', 
          descriptionKey: 'surveysDesc', 
          href: '/features/surveys', 
          icon: <MessageSquare className="w-5 h-5" />
        },
        { 
          nameKey: 'analytics', 
          descriptionKey: 'analyticsDesc', 
          href: '/features/analytics', 
          icon: <BarChart className="w-5 h-5" />
        },
        { 
          nameKey: 'automation', 
          descriptionKey: 'automationDesc', 
          href: '/features/automation', 
          icon: <Zap className="w-5 h-5" />,
          isNew: true
        },
        { 
          nameKey: 'integrations', 
          descriptionKey: 'integrationsDesc', 
          href: '/features/integrations', 
          icon: <Layers className="w-5 h-5" />
        },
        { 
          nameKey: 'mobile', 
          descriptionKey: 'mobileDesc', 
          href: '/features/mobile', 
          icon: <Smartphone className="w-5 h-5" />
        }
      ],
      featuredContent: {
        titleKey: 'successStories',
        items: [
          {
            image: '/images/mugo-case.webp',
            title: 'Mugo',
            descriptionKey: 'mugoSuccess',
            href: '/customers/mugo',
            badge: '+285% artış'
          },
          {
            image: '/images/proteinocean-case.webp',
            title: 'Proteinocean',
            descriptionKey: 'proteinoceanSuccess',
            href: '/customers/proteinocean',
            badge: '%50 verimlilik'
          }
        ]
      },
      bottomCTA: {
        titleKey: 'platformCTATitle',
        descriptionKey: 'platformCTADesc',
        buttonTextKey: 'startFree',
        href: '/demo'
      }
    }
  },
  { 
    nameKey: 'pricing', 
    href: '/pricing' 
  },
  { 
    nameKey: 'customers', 
    href: '/customers' 
  },
  {
    nameKey: 'whyBravioo',
    href: '/why-bravioo',
    children: [
      { 
        nameKey: 'aboutUs', 
        href: '/about',
        icon: <Building className="w-4 h-4" />
      },
      { 
        nameKey: 'security', 
        href: '/security',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        nameKey: 'difference', 
        href: '/why-bravioo',
        icon: <Target className="w-4 h-4" />
      },
      { 
        nameKey: 'press', 
        href: '/press',
        icon: <Newspaper className="w-4 h-4" />
      }
    ]
  },
  { 
    nameKey: 'blog', 
    href: '/blog' 
  }
];

// Dil seçenekleri
export const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

// CTA butonları
export const ctaButtons = {
  primary: {
    textKey: 'getDemo',
    href: '/demo'
  },
  secondary: {
    textKey: 'login',
    href: '/login'
  }
};
