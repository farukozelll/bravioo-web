'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Partner {
  id: string;
  name: string;
  type: 'investor' | 'tech' | 'security';
  logo: string;
  description: string;
  website?: string;
}

export function InvestorPartners() {
  const t = useTranslations();

  const partners: Partner[] = [
    {
      id: '1',
      name: '500 Global',
      type: 'investor',
      logo: '/images/partners/500-global.png',
      description: t('about.partners.investor1.description'),
      website: 'https://500.co'
    },
    {
      id: '2',
      name: 'Finberg Capital',
      type: 'investor',
      logo: '/images/partners/finberg.png',
      description: t('about.partners.investor2.description'),
      website: '#'
    },
    {
      id: '3',
      name: 'ONBEYOND',
      type: 'investor',
      logo: '/images/partners/onbeyond.png',
      description: t('about.partners.investor3.description'),
      website: '#'
    },
    {
      id: '4',
      name: 'AWS',
      type: 'tech',
      logo: '/images/partners/aws.png',
      description: t('about.partners.tech1.description'),
      website: 'https://aws.amazon.com'
    },
    {
      id: '5',
      name: 'Stripe',
      type: 'tech',
      logo: '/images/partners/stripe.png',
      description: t('about.partners.tech2.description'),
      website: 'https://stripe.com'
    },
    {
      id: '6',
      name: 'ISO 27001',
      type: 'security',
      logo: '/images/certifications/iso27001.png',
      description: t('about.partners.tech2.description'),
      website: '#'
    }
  ];

  const groupedPartners = {
    investors: partners.filter(p => p.type === 'investor'),
    tech: partners.filter(p => p.type === 'tech'),
    security: partners.filter(p => p.type === 'security')
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t('about.partners.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('about.partners.subtitle')}
          </p>
        </motion.div>

        {/* Investors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {t('about.partners.investors.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {groupedPartners.investors.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                  {/* Logo */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-xl">
                    {partner.name.charAt(0)}
                  </div>
                  
                  {/* Info */}
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {partner.name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('about.partners.investor')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {t('about.partners.tech.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {groupedPartners.tech.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                  {/* Logo */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">
                    {partner.name.charAt(0)}
                  </div>
                  
                  {/* Info */}
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {partner.name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t('about.partners.technology')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {t('about.partners.tech2.description')}
          </h3>
          
          <div className="max-w-2xl mx-auto">
            {groupedPartners.security.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                  {/* Logo */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-purple-600 font-bold text-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  {/* Info */}
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {partner.name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('about.partners.tech2.description')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}