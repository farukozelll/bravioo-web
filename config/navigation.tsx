import React from 'react';
import { 
  BarChart, 
  Building, 
  Heart, 
  Layers,  
  Shield, 
  Users, 
  Zap,
  MessageSquare,
  Target,
  Smartphone
} from "lucide-react";
import { TurkeyFlag } from '@/components/icons/TurkeyFlag';
import { UKFlag } from '@/components/icons/UKFlag';

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
    nameKey: 'whyBravioo',
    href: '/about',
    isMegaMenu: true,
    megaMenuContent: {
      mainLinks: [
        {
          nameKey: 'aboutUs',
          descriptionKey: 'aboutUsDesc',
          href: '/about',
          icon: <Building className="w-6 h-6" />,
          isNew: false
        },
        /* {
          nameKey: 'difference',
          descriptionKey: 'differenceDesc',
          href: '/why-bravioo',
          icon: <Target className="w-6 h-6" />,
          isNew: false
        }, */
        {
          nameKey: 'brands',
          descriptionKey: 'brandsDesc',
          href: '/brands',
          icon: <Shield className="w-6 h-6" />,
          isNew: false
        },
    
      ],
      featuredContent: {
        titleKey: 'companyNews',
        items: [
          {
            title: 'Bravioo Raised $5M Series A',
            descriptionKey: 'seriesADesc',
            href: '/press/series-a',
            image: '/images/press/series-a.jpg',
            badge: 'New'
          },
          {
            title: 'Remote Work Excellence Award',
            descriptionKey: 'awardDesc', 
            href: '/press/award',
            image: '/images/press/award.jpg'
          }
        ]
      },
      bottomCTA: {
        titleKey: 'whyBraviooCTATitle',
        descriptionKey: 'whyBraviooCTADesc',
        buttonTextKey: 'learnMore',
        href: '/why-bravioo'
      }
    }
  },
  {
    nameKey: 'platform',
    href: '/features'
  },
  {
    nameKey: 'pricing',
    href: '/pricing',
   
  },
  { 
    nameKey: 'customers', 
    href: '/customers' 
  },

  { 
    nameKey: 'contact', 
    href: '/contact' 
  }
];

// Dil seçenekleri
export const languages = [
  { code: 'tr', name: 'Türkçe', flag: <TurkeyFlag className="w-5 h-3" /> },
  { code: 'en', name: 'English', flag: <UKFlag className="w-5 h-3" /> },
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
