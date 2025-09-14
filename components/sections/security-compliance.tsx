'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle, Award, Globe } from 'lucide-react';

export function SecurityCompliance() {
  const t = useTranslations('whyBravioo.security');

  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      titleKey: 'certifications.iso27001.title',
      descKey: 'certifications.iso27001.description',
      color: 'blue'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      titleKey: 'certifications.gdpr.title', 
      descKey: 'certifications.gdpr.description',
      color: 'emerald'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      titleKey: 'certifications.soc2.title',
      descKey: 'certifications.soc2.description',
      color: 'purple'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      titleKey: 'certifications.kvkk.title',
      descKey: 'certifications.kvkk.description',
      color: 'orange'
    }
  ];

  const features = [
    'encryption',
    'backup',
    'monitoring',
    'access',
    'audit',
    'compliance'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${cert.color}-500 to-${cert.color}-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t(cert.titleKey)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(cert.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">
                  {t(`features.${feature}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">
              {t('trust.title')}
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              {t('trust.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">{t('trust.uptime')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">{t('trust.monitoring')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-blue-200">{t('trust.breaches')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
