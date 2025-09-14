import React from 'react';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ChevronRight, FileText, Shield, Eye, Cookie } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });

  return {
    title: `${t('title')} | Bravioo`,
    description: t('description'),
  };
}

const legalPages = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: Shield,
    description: 'How we collect, use, and protect your data'
  },
  {
    id: 'terms',
    title: 'Terms of Use',
    icon: FileText,
    description: 'Terms and conditions for using our service'
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    icon: Eye,
    description: 'Our commitment to digital accessibility'
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    icon: Cookie,
    description: 'How we use cookies and similar technologies'
  }
];

export default async function LegalLayout({ children, params }: Props) {
  const { locale } = await params;
  
  // Validate locale
  if (!['en', 'tr'].includes(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-ink-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-brand-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-ink-900 font-medium">Legal</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-sand-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-ink-900 mb-4">Legal Pages</h2>
              <nav className="space-y-2">
                {legalPages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.id}
                      href={`/${locale}/legal/${page.id}`}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-sand-50 transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-brand-600 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium text-ink-900 group-hover:text-brand-600 transition-colors">
                          {page.title}
                        </div>
                        <div className="text-sm text-ink-600 mt-1">
                          {page.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-sand-200">
                <h3 className="font-semibold text-ink-900 mb-3">Questions?</h3>
                <p className="text-sm text-ink-600 mb-3">
                  If you have any questions about our legal policies, please contact us.
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Contact Support
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-sand-200 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
