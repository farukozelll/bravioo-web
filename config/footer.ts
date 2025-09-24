import { Twitter, Linkedin, Facebook, Mail, Instagram, Youtube, Smartphone } from 'lucide-react';

export interface FooterLink {
  nameKey: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  nameKey: string;
  href: string;
  icon: any;
  external?: boolean;
}

export interface FooterSection {
  titleKey: string;
  iconKey: string;
  color: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    titleKey: 'footer.sections.product.title',
    iconKey: 'P',
    color: 'bg-brand-500',
    links: [
      { nameKey: 'footer.sections.product.features', href: '/features' },
      { nameKey: 'footer.sections.product.integrations', href: '/why-bravioo' },
      { nameKey: 'footer.sections.product.pricing', href: '/pricing' },
      { nameKey: 'footer.sections.product.demo', href: '/meeting' },
    ]
  },
  {
    titleKey: 'footer.sections.company.title',
    iconKey: 'C',
    color: 'bg-gold-500',
    links: [
      { nameKey: 'footer.sections.company.about', href: '/about' },
      { nameKey: 'footer.sections.company.contact', href: '/contact' },
      { nameKey: 'footer.sections.company.customers', href: '/customers' },
      { nameKey: 'footer.sections.company.brands', href: '/brands' },
    ]
  },
  {
    titleKey: 'footer.sections.legal.title',
    iconKey: 'L',
    color: 'bg-red-500',
    links: [
      { nameKey: 'footer.sections.legal.privacy', href: '/legal/privacy' },
      { nameKey: 'footer.sections.legal.terms', href: '/legal/terms' },
      { nameKey: 'footer.sections.legal.cookies', href: '/legal/cookies' },
      { nameKey: 'footer.sections.legal.accessibility', href: '/legal/accessibility' },
    ]
  },

];

export const socialLinks: SocialLink[] = [
  { 
    nameKey: 'footer.social.twitter', 
    href: 'https://twitter.com/bravioo', 
    icon: Twitter,
    external: true 
  },
  { 
    nameKey: 'footer.social.linkedin', 
    href: 'https://linkedin.com/company/bravioo', 
    icon: Linkedin,
    external: true 
  },
  { 
    nameKey: 'footer.social.instagram', 
    href: 'https://instagram.com/bravioo', 
    icon: Instagram,
    external: true 
  },
  { 
    nameKey: 'footer.social.youtube', 
    href: 'https://youtube.com/@bravioo', 
    icon: Youtube,
    external: true 
  },
  { 
    nameKey: 'footer.social.email', 
    href: 'mailto:info@bravioo.com', 
    icon: Mail 
  },
];

export const footerConfig = {
  company: {
    logoAlt: 'Bravioo',
    logoSrc: '/Bravioo_logotype-white.png'
  },
  status: {
    textKey: 'footer.status.consulting',
    indicatorColor: 'bg-blue-500'
  }
};
